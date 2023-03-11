
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ReadonlyComponent from './ReadonlyComponent';
import ReactPaginate from 'react-paginate';
import AuthContext from '../context/AuthContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import ContentCreateForm from './ContentCreateForm';
import { Button, Modal } from 'antd';
import TopicCreateForm from './TopicCreateForm';
import './AdminPage.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css



function AdminPage() {

  let { user } = useContext(AuthContext);
  const [topics, setTopics] = useState([]);
  const [chosenTopic, setChosenTopic] = useState(null);
  const [triggerTopicFetch, setTriggerTopicFetch] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTopic, setOpenTopic] = useState(false);
  const [contentToEdit, setContentToEdit] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewCode, setViewCode] = useState(null);



  useEffect(() => {
    let completed = []
    const fetchContent = async () => {
      const { data } = await axios.get("https://cyiwei.online/topics/");
      setTopics(data)
      console.log("data: ", data)
    }

    fetchContent().catch(console.error)
  }, [triggerTopicFetch]);

  const handleClick = (id) => { // handle click from dropdown menu
    setChosenTopic(id)
  }

  const DynamicDropdown = () => {
    return (
      <DropdownButton id="dropdown-item-button" title="Choose Topic">
        {topics.map((topic) => (<Dropdown.Item as="button" onClick={() => handleClick(topic.id)}>{topic.name}</Dropdown.Item>))}
        <Dropdown.Item as="button" style={{color: "white",fontWeight:"600", background: "red"}} onClick={handleAddTopic}>Add Topic</Dropdown.Item>
      </DropdownButton>
    );
  }

  const handleDelete = async (contentid, topicid) => {
    const { data } = await axios.delete(`https://cyiwei.online/contents/${contentid}/`)
    console.log(data)
    setTriggerTopicFetch(!triggerTopicFetch) // sends a trigger to useeffect to refetch updated topic contents
  }

  const onCreate = async (contentData, type) => {
    console.log(contentData)
    if (type === "edit") {
      const { data } = await axios.patch(`https://cyiwei.online/contents/${contentToEdit.id}/`, contentData)
    }
    else {
      console.log("in")
      const { data } = await axios.post("https://cyiwei.online/contents/", contentData)
      console.log(data)
    }
    setTriggerTopicFetch(!triggerTopicFetch) // sends a trigger to useeffect to refetch updated topic contents
    setOpen(false)
  };

  const onCreateTopic = async (topic) => {
    console.log(topic)
    const { data } = await axios.post(`https://cyiwei.online/topics/`, topic)
    setTriggerTopicFetch(!triggerTopicFetch) // sends a trigger to useeffect to refetch updated topic contents
    setOpenTopic(false)
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleEdit = (content) => {
    setContentToEdit(content)
    setOpen(true)
  }


  const handleAdd = () => {
    const contentObj = {}
    contentObj.text = ""
    contentObj.code = ""
    contentObj.output = ""
    contentObj.ranges = []
    contentObj.topicid = chosenTopic
    setContentToEdit(contentObj)
    setOpen(true)
  }

  const handleAddTopic = () => {
    setOpenTopic(true)
  }

  const handleViewCode = (selectedCode) => {
    setViewCode(selectedCode)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };


  const DynamicTable = (topicChosen) => {
    console.log("test: ", topicChosen.topic)
    const contentArr = topics.find(topic => topic.id === topicChosen.topic).content
    console.log(contentArr)
    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Text</th>
              <th>Code</th>
              <th>Output</th>
              <th>Read-only Ranges</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contentArr.map((content) => (
              <tr>
                <td style={{width:"40vw"}}>{content.text}</td>
                <td style={{width:"8vw"}}><Button style={{ width: "7vw", minWidth:"92px" }} onClick={() => handleViewCode(content.code)}>View Code</Button></td>
                <td>{content.output}</td>
                <td style={{width:"10vw"}}>{content.ranges.map((range) => <div>Line {range.split("-")[0]} to Line {range.split("-")[1]}</div>)}</td>
                <td style={{width:"5vw"}}><Button style={{width: "4vw", minWidth: "48px" }} onClick={() => handleEdit(content)}>Edit</Button></td>
                <td style={{width:"4vw"}}><Button style={{background:"red",fontWeight: "900", fontSize:"15px", width: "3vw" }} onClick={() => confirmDelete(content.id, topicChosen.topic)}>-</Button></td>
              </tr>
            ))

            }
          </tbody>
        </Table>
      </div>
    );
  }

  const confirmDelete = (contentid, topicid) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Please note that this deletion is irreversible',
      buttons: [
        {
          label: 'Yes',
          onClick: async () =>  {const { data } = await axios.delete(`https://cyiwei.online/contents/${contentid}/`)
          console.log(data)
          setTriggerTopicFetch(!triggerTopicFetch) // sends a trigger to useeffect to refetch updated topic contents
        }
        },
        {
          label: 'No',
        }
      ]
    });
  }

  const confirmTopicDelete = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Please note that this deletion is irreversible',
      buttons: [
        {
          label: 'Yes',
          onClick: async () =>  {const { data } = await axios.delete(`https://cyiwei.online/topics/${chosenTopic}/`)
          console.log(data)
          setChosenTopic(null)
          setTriggerTopicFetch(!triggerTopicFetch) // sends a trigger to useeffect to refetch updated topic contents
        }
        },
        {
          label: 'No',
        }
      ]
    });
  }


  return (
    <div style={{display: "flex" , flexDirection:"column", justifyContent: "center"}}>
      <TopicCreateForm
        open={openTopic}
        onCreate={onCreateTopic}
        onCancel={() => {
          setOpenTopic(false);
        }}
      />
      <div style={{display: "flex" , justifyContent:"center", flexDirection:"row"}}>
      <DynamicDropdown />
      </div>
      <div style={{display: "flex", flexDirection:"row",  marginTop: "20px",justifyContent: "center", alignItems: "center"}}>
      <div className="topicHeader" style={{display:"flex", fontSize: "35px", color:"white", fontWeight: "700"}} >{chosenTopic !== null && topics.find((topic) => topic.id === chosenTopic).name}</div>
      <div>
        { chosenTopic !== null && <Button className="topicHeader" style={{background: "red",marginLeft:"8px", fontWeight:"900", fontStretch: "ultra-expanded"}} onClick={confirmTopicDelete}>-</Button>}
      </div>
      </div>
      {chosenTopic !== null && <Button style={{display: "flex", width:"40px"}} onClick={handleAdd}>+</Button>}
      {chosenTopic !== null && <DynamicTable  key={topics} topic={chosenTopic} />}
      {contentToEdit !== null && <ContentCreateForm
        open={open}
        contentToEdit={contentToEdit}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />}
      <div style={{display: "flex"}}> 
      <Modal title="View Code" className='viewCodeModal' open={isModalOpen} onOk={handleOk} cancelButtonProps={{ style: { display: 'none' } }} closable={false}>
        <div style={{width: "50vw"}}>
        <ReadonlyComponent code={viewCode}/>
        </div>
      </Modal>
      </div>
    </div>
  );


}

export default AdminPage;

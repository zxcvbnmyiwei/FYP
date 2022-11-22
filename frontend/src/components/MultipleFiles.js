import { Button, Tabs, Modal, Form, Input,Checkbox } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './MultipleFiles.css'
import MultipleFileIDE from './MultipleFileIDE';
import CollectionCreateForm from './ChangeTabForm';

const MultipleFiles = () => {
    const [open, setOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("0");
    const [currentItem,setCurrentItem] = useState(null)
    const [items, setItems] = useState([
        {
            label: 'main.py',
            children: <MultipleFileIDE onChange={(data) => onTabChange("0",data)}/>,
            code : "",
            key: '0',
            closable: false,
        },
        {
            label: 'file1.py',
            children: <MultipleFileIDE onChange={(data) => onTabChange("1",data)}/>,
            code : "",
            key: '1',
        },
    ]);



    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };



    const newTabIndex = useRef(0);
    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey)
        
    };

    const addTab = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newItem = {
            label: 'New Tab',
            children: <MultipleFileIDE onChange={(data) => onTabChange(newActiveKey,data)}/>,
            code : "",
            key: newActiveKey,
        }
        setItems(items => [...items, newItem]);
        setActiveKey(newActiveKey);
    };
    const removeTab = (targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        console.log(newPanes);
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            addTab();
        } else {
            removeTab(targetKey);
        }
    };

    const onTabChange = (index, data) => {
        const curr = {"key": index, "data" : data}
        setCurrentItem(curr)
    }


    useEffect(() => {
        if (currentItem) {
            const newList = [...items]
            newList.filter(item=>item.key ===  currentItem.key)[0].code = currentItem.data
            setItems(newList)
            console.log(newList)
        }
    },[currentItem])


    const handleSubmit = () => {
        console.log(items)
    }

    // Changing name of file
    const onCreate = (values) => {
        const newList = [...items]
        const selectedItem = newList.filter(item=>item.label === values.Name)
        // If user attempts to change the file name to one that is currently used.
        if (selectedItem.length > 0) {
            alert("Please input another name that is not used currently!")
        }
        else {
            newList.filter(item=>item.key ===  activeKey)[0].label = values.Name
        }
        setItems(newList)
        setOpen(false);
      };

    return (
        <div>
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey= {activeKey}
            onEdit={onEdit}
            items={items}
        />
        <Button type="primary" danger onClick={handleSubmit}>Submit!</Button>
        <Button
            type="primary"
            onClick={() => {
                setOpen(true);
            }}>
        Change File Name
        </Button>
        <CollectionCreateForm
            open={open}
            onCreate={onCreate}
            onCancel={() => {
                setOpen(false);
            }}
        />
        
        </div>

    );
};
export default MultipleFiles;


    // const onTabChange = (index, data) => {
    //     setContentList(contentList.map(item => {
    //         if (item.key === index) {
    //             return {...item, code : data}
    //         } 
    //         else {
    //             return item
    //         }
    //     }))
    // }


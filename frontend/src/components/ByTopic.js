
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ReadonlyComponent from './ReadonlyComponent';
import './ByTopic.css'
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';


function DisplayByTopic() {
    const { topicId } = useParams();
    const [pageNumber,setPageNumber] = useState(0)
    const [contents, setContents] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:8000/topics/" + topicId + "/");
            console.log("data: ", data)
            setContents(data.content);
        }

        fetchData().catch(console.error)
    }, [topicId]);

    let navigate = useNavigate(); 
    const handleClick = (id) => {
        let path = '/content/' + id;
        navigate(path);
    }

    const contentPerPage = 5
    const pagesVisited = pageNumber * contentPerPage
    const displayContent = contents.slice(pagesVisited, pagesVisited+contentPerPage).map((item) => {
        return (
            <div className='contentContainer'>
            <div class='outer'>
            <div class='inner'>
            {item.text}
            <ReadonlyComponent padding="50px" code={item.code}/>
            </div>
            </div>
            <Button variant="dark" onClick={() => handleClick(item.id)}>Attempt!</Button>
            </div>
            
        )
    })

    const changePage = (data) => {
        console.log(data.selected)
        setPageNumber(data.selected)
    }

    const pageCount = Math.ceil(contents.length / contentPerPage);

    return (
            
            <div class='outer'>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
            <div class='inner'>
            {displayContent}
            </div>
            </div>
     
      );


}

function DisplayByContent() {
    const { topicId } = useParams();
    const [pageNumber,setPageNumber] = useState(0)
    const [contents, setContents] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:8000/contents/");
            console.log("data: ", data)
            setContents(data);
        }

        fetchData().catch(console.error)
    }, [topicId]);

    let navigate = useNavigate(); 
    const handleClick = (id) => {
        let path = '/content/' + id;
        navigate(path);
    }


    const contentPerPage = 5
    const pagesVisited = pageNumber * contentPerPage
    const displayContent = contents.slice(pagesVisited, pagesVisited+contentPerPage).map((item) => {
        return (
            <div className='contentContainer'>
            <div class='outer'>
            <div class='inner'>
            {item.text}
            <ReadonlyComponent padding="50px" code={item.code}/>
            </div>
            </div>
            <Button variant="dark" onClick={() => handleClick(item.id)}>Attempt!</Button>
            </div>
            
        )
    })

    const changePage = (data) => {
        console.log(data.selected)
        setPageNumber(data.selected)
    }

    const pageCount = Math.ceil(contents.length / contentPerPage);

    return (
            
            <div class='outer'>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
            <div class='inner'>
            {displayContent}
            </div>
            </div>
     
      );


}

export {DisplayByTopic,DisplayByContent}


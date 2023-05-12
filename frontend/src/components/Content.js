import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Interpreter from './Interpreter';
import { Button } from 'antd';


// Page for Attempting Each Content
function AttemptQuestion() { 
    const { contentId } = useParams();
    const [content,setContent] = useState([])
    const [ranges,setRanges] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("https://cyiwei.online/contents/" + contentId + "/");
            console.log("data: ", data)
            setContent(data);

            var rangesObj = []
            data.ranges.map((item) => {
                var rangeObject = {};
                rangeObject.from = parseInt(item.split("-")[0]);
                rangeObject.to = parseInt(item.split("-")[1]);
                rangesObj.push(rangeObject);
            })
            setRanges(rangesObj)
            console.log("??: ",rangesObj)
        }
        fetchData().catch(console.error)

    }, [contentId]);

    console.log("content: ", content)

    let navigate = useNavigate();
    const handleClick = () => {

        let navigateInfo = JSON.parse(localStorage.getItem("navigateback"))
        console.log(navigateInfo)
        console.log(typeof(navigateInfo.type))
        if (navigateInfo.type === 1) {
            let path = '/topic/' + navigateInfo.topic
            navigate(path)
        }

        else {
            let path = '/content/'
            navigate(path);
        }
        localStorage.removeItem("navigateback")

    }

    return (
        <>
        <div>
        {/* <Button onClick={handleClick} variant="primary">Back</Button> */}
        <button style={{backgroundColor: "transparent", border: "none"}}><img src="/backbutton.png" alt="image" title="Back" width="230px" height="70px" onClick={handleClick} /></button>
        </div>
        <div className="description-header"style={{color: "white"}}>
            {content.text}
        </div>
        <div className="Interpreter">
            <Interpreter id={content.id} code={content.code} ranges={ranges} output={content.output}/>
        </div>
        </>
    )

}

export {AttemptQuestion};



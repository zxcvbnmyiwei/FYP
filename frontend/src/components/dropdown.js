import React, {useState, useEffect} from "react";
import axios from 'axios';

function Dropdown() {

    const [topics, setTopic] = useState([]);

    // useEffect(function(){
    //     // axios.get("http://localhost:5000/create/topic")
    //     // .then((response) => console.log(response))
    //     // .then((error) => console.log(error));
    //     const { data } = axios.get("http://localhost:5000/create/topic");
    //     console.log(data);
    // });

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/create/topic");
            setTopic(data['data']);
        }

        fetchData().catch(console.error)
    }, []);
    return (
        <select>
            {
            topics.map((topic) => (
            <option value = {topic.id}>{topic.name}</option>
            ))
            }
        </select>
    )

}

export default Dropdown;
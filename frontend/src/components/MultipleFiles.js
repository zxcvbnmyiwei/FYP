import { Tabs } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './MultipleFiles.css'
import MultipleFileIDE from './MultipleFileIDE';


const MultipleFiles = () => {
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
    const newTabIndex = useRef(0);
    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey)
        
    };

    const add = () => {
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
    const remove = (targetKey) => {
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
            add();
        } else {
            remove(targetKey);
        }
    };

    const onTabChange = (index, data) => {
        // const newList = [...items]
        // newList.filter(item=>item.key ===  index)[0].code = data
        // console.log(newList)
        // setItems(newList)

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

    return (
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey= {activeKey}
            onEdit={onEdit}
            items={items}
        />
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


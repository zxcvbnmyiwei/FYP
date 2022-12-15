import React, {useEffect, useState, useRef} from "react";
import { Rnd } from "react-rnd";
import {Button, Modal} from "antd"
import Item from "antd/lib/list/Item";
import "./TkComp.css"

const foundation = ({width,height}) => {
    return (
`import tkinter as tk
class App:
    def __init__(self, root):
        #setting title
        root.title("undefined")
        #setting window size
        width=${width}
        height=${height}
        screenwidth = root.winfo_screenwidth()
        screenheight = root.winfo_screenheight()
        alignstr = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
        root.geometry(alignstr)
        root.resizable(width=False, height=False)

`
    )
} 
const tkItem = (index,x,y,width,height,text,itemtype) => {
    switch (itemtype) {
        case "Button":
            return (
                `
                        ${index}=tk.Button(root)
                        ${index}["bg"] = "#f0f0f0"
                        ${index}["fg"] = "#000000"
                        ${index}["justify"] = "center"
                        ${index}["text"] = "${text}"
                        ${index}.place(x=${x},y=${y},width=${width},height=${height})
                        ${index}["command"] = self.${index}_command
                `
            )
        case "Label":
            return (
                `
                        ${index}=tk.Label(root)
                        ${index}["fg"] = "#333333"
                        ${index}["justify"] = "center"
                        ${index}["text"] = "${text}"
                        ${index}.place(x=${x},y=${y},width=${width},height=${height})
                `
            )
        case "Entry":
            return (
                `
                        ${index}=tk.Entry(root)
                        ${index}["borderwidth"] = "1px"
                        ${index}["fg"] = "#333333"
                        ${index}["justify"] = "center"
                        ${index}["text"] = "${text}"
                        ${index}.place(x=${x},y=${y},width=${width},height=${height})
                `
            )

    }
}


const tkButtonCommand = (buttonIndex,itemtype) => {
    if (itemtype === "Button") {
        return (
        `
            def ${buttonIndex}_command(self):
                print("command")
        `
        )
    }
}

const finalTk =
`
if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
`


const style = {
    display: "flex",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    flexDirection: "column",
};

const IndividualItem = props => {
    return (
        <Rnd
        style={style}
        default={{
            x: 0,
            y: 0,
            width: 110,
            height: 40
        }}
        onDragStop={props.onDragStop}
        onResize={props.onResize}
        bounds="parent"
    >
        <div style={{display:"flex", justifyContent: "center", fontSize: "9px", fontWeight: "bold", color: "red"}}>{props.itemtype}</div>
        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>{props.text}</div>
        {/* <div style={{display:"flex", alignItems: "center", "word-break":"break-all", justifyContent: "center"}}>{props.text}</div> */}
    </Rnd>
    )
}


const TkComp = () => {
    const [dimensions, setDimensions] = useState([])
    const [currentItem, setCurrentItem] = useState(null)
    const [deleteItem, setDeleteItem] = useState("")
    const [itemText, setItemText] = useState(null)
    const newItemIndex = useRef(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [containerSize, setContainerSize] = useState({width: 700, height: 500})


    const handleAddType = (itemType) => {
        const newDimensions = [...dimensions]
        const newIndex = `newIndex${newItemIndex.current++}`;
        newDimensions.push({
            index: newIndex,
            x: 0,
            y: 0,
            width: 110,
            height: 40,
            text: "",
            type: itemType
        })
        setDimensions(newDimensions)
    }

    // For changing x,y,width,height during drag/resize
    const handleDrag = (index,e,d) => {
        const curr = {index:index, x:d.x, y:d.y, type:"drag"}
        setCurrentItem(curr)  
    }   
    const handleResize = (index, position, ref) => {
        const curr = {index:index, width:ref.offsetWidth, height:ref.offsetHeight, type:"resize"}
        setCurrentItem(curr)
    }
    useEffect(()=>{
        if (currentItem) {
            const newDimensions = [...dimensions] 
            if (currentItem.type === "drag") {
                newDimensions.filter((item) => item.index === currentItem.index)[0].x = currentItem.x
                newDimensions.filter((item) => item.index === currentItem.index)[0].y = currentItem.y
            }
            else { // if type is resize
                newDimensions.filter((item) => item.index === currentItem.index)[0].width = currentItem.width
                newDimensions.filter((item) => item.index === currentItem.index)[0].height = currentItem.height
            }
            console.log(newDimensions)
            setDimensions(newDimensions)
        }
    },[currentItem])

    // For deleting elements
    const handleDelete = (index) => {
        console.log(index)
        setDeleteItem(index)
    }
    useEffect(() => {
        console.log(deleteItem)
        if (deleteItem) {
            const newDimensions = dimensions.filter((item) => item.index !== deleteItem)
            console.log(newDimensions)
            setDimensions(newDimensions)
        }
    },[deleteItem])

    // For changing of item text
    const handleSubmit = (e, index) => {
        e.preventDefault()
        const curr = {index:index, text:e.target.itemtext.value}
        setItemText(curr)
    }
    useEffect(() => {
        if (itemText) {
            const newDimensions = [...dimensions]
            newDimensions.filter((item) => item.index === itemText.index)[0].text = itemText.text
            console.log(newDimensions)
            setDimensions(newDimensions)
        }
    },[itemText])

    const generateTk = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };

      const stylediv = {
        display: "flex",
        border: "solid 1px #ddd",
        background: "#f0f0f0", 
    
    };

    const resizeDirections = {
        bottom: true,
        bottomLeft: false,
        bottomRight: true,
        left: false,
        right: true,
        top: false,
        topLeft: false,
        topRight: false,
    }

    const handleResizeMain = (position,ref) => {
        const curr = {width:ref.offsetWidth, height:ref.offsetHeight}
        setContainerSize(curr)
    }

    

    return (
        <>
        <div className="main-tk-container">
        <div className='div-for-add-button'>
        <Button onClick={() => handleAddType("Button")} style={{margin: "30px"}}>Click to add Button</Button>
        <Button onClick={() => handleAddType("Label")} style={{margin: "30px"}}>Click to add Label</Button>
        <Button onClick={() => handleAddType("Entry")} style={{margin: "30px"}}>Click to add Entry</Button>
        </div>
        <div className="div-for-tk-component">
        <Rnd
        enableResizing={resizeDirections}
        style={stylediv}
        disableDragging={true}
        onResize={(e, direction, ref, delta, position) => handleResizeMain(position,ref)}
        default={{
            x: 0,
            y: 0,
            width: 700,
            height: 500
        }}>
        {
            dimensions.map((item) => (
                <IndividualItem itemtype={item.type} text={item.text} onDragStop={(e, d) => handleDrag(item.index,e,d)} onResize={(e, direction, ref, delta, position) => handleResize(item.index, position, ref)}/>
            ))
        }
        </Rnd>
        </div>
        <div className="div-for-delete">
            {
                dimensions.map((item) => (
                    <>
                    <div>Index:{item.index}, x-pos:{item.x}, y-pos:{item.y}, width:{item.width}, height:{item.height}, text:{item.text}</div>
                    <Button onClick={() => handleDelete(item.index)}> Delete Item </Button>
                    <form onSubmit={(e) => handleSubmit(e, item.index)}>
                        <input type="text" name="itemtext" placeholder="Enter in new name"></input>
                        <input type="submit"/>
                    </form>
                    </>
                ))
            }
        </div>
        <div className="div-for-generate-code">
        <Button onClick={generateTk}>Generate Tkinter Code</Button>
        <Modal title="Generated Tkinter Code" open={isModalOpen} onOk={handleOk} cancelButtonProps={{ style: { display: 'none' } }} closable={false}>
        <div style={{"white-space":"pre-wrap"}}>
            {foundation(containerSize)}
            {
                dimensions.map((item) => tkItem(item.index,item.x,item.y,item.width,item.height,item.text,item.type))
            }
            {
                dimensions.map((item) => tkButtonCommand(item.index,item.type))
            }
            {finalTk}
        </div>
        </Modal>
        </div>
        </div>
        </>
    )
}

export default TkComp




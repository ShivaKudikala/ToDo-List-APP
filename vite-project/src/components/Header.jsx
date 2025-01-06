import { useState } from "react";
import "../styles/styles.css"

function Header (props){

    const [Input, setInput] = useState("");

    function AddTask() {

        if (Input.trim()) {
          props.addTask(Input);
          setInput('');
        }
    }

    return (
        <>
            <div className="header">
                <input className="input-box" type="text" placeholder="Enter a Task here.." onChange={(e) => setInput(e.target.value)}/>
                <button className="add-btn" onClick={AddTask}>Add Task</button>
            </div>
        </>
    );
}

export default Header;
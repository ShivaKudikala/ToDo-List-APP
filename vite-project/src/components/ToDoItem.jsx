import "../styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function ToDoItem(props){
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, seteditedText] = useState([props.Task.text]);

    function EditMode() {
        if (isEditing && editedText.trim()) {
          props.editingTask(props.Task.id, editedText);
        }
        setIsEditing(!isEditing);
    }

    return (
        <div className="task-card">
            <div className="card-details">
                <input type="checkbox" onClick={() => props.isCompleted(props.Task.id)} />
                <p>ID: {props.Task.id}</p>
                {isEditing ? (<input
                                type="text"
                                value={editedText}
                                onChange={(e) => seteditedText(e.target.value)}
                                />) : <p className="taskname">Task: {props.Task.text}</p>
                                }
            </div>
            <div className="card-actions">
                <div>
                    <button className="edit-btn" onClick={EditMode}> {isEditing ? 'SAVE' : 'EDIT'}</button>
                    <button onClick={() => props.deleteTask(props.Task.id)}><FontAwesomeIcon icon={faXmark} color="red" /></button>
                </div> 
            </div>
        </div>
    );
}

export default ToDoItem;

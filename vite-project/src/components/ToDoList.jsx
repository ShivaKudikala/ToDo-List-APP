import ToDoItem from "./ToDoItem";
import "../styles/styles.css";

function ToDoList(props){

    return (
        <>
            <div className="cards">
                {props.tasks.map((task) => <ToDoItem key={task.id} Task = {task} deleteTask={props.deleteTask} isCompleted = {props.isCompleted} editingTask = {props.editingTask} />)}
            </div>
        </>
    );
}

export default ToDoList;
import Header from "./components/Header";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import "./styles/app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false}]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function isCompleted(taskId) {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, completed: !task.completed} : task))
  }

  function editingTask(taskId, editedText){
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, text: editedText } : task)));
  }

  return (
    <div className="body-class">
      <h2 className="app-title">To Do List <FontAwesomeIcon icon={faSquareCheck} color="#fff" /></h2>
      <Header addTask={addTask} />
      <ToDoList tasks = {tasks} deleteTask={deleteTask} isCompleted={isCompleted} editingTask = {editingTask}/>
    </div>
  )
}

export default App

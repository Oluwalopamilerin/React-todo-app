import React, {useState} from 'react';

import "./TodoListStyles.css"

const TodoList=() => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange=(e) => {
    setNewTask(e.target.value);
  };

  const addTask=() => {
    if (newTask){
      setTasks(prevtasks => [...prevtasks, newTask])
      setNewTask("")
    }
  };


  const deleteTask=(index) => {
    setTasks(prevtasks => prevtasks.filter((prevtasks, i) => i!==index))
  };

  const moveTaskUp =(index) => {
     if (index > 0){
       const updatedTasks=[...tasks];
       [updatedTasks[index], updatedTasks[index-1]] = 
       [updatedTasks[[index-1], updatedTasks[index]]];
       setTasks(updatedTasks);
     }
  }
  
  const moveTaskDown=(index) => {
     if (index < tasks.length - 1){
       const updatedTasks=[...tasks];
       [updatedTasks[index], updatedTasks[index+1]] = 
       [updatedTasks[[index+1], updatedTasks[index]]]
       setTasks(updatedTasks);
     }
  }
  
  return (
    <div className='todo-list'>
      <h1 className='title'>To-Do List</h1>

      <div>
        <input
        className='task-input'
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}/>

        <button className='add-button btn'
        onClick={addTask}>
          Add
        </button>
      </div>
      <ol className="list-container">
        {tasks.map((task, index) =>
          <li key={index} className='list'>
            <span className="text" >{task}</span>
            <button
              className='delete-button btn'
              onClick={() => {
              deleteTask(index)
            }}>Delete</button>

            <button
              className='move-button btn'
              onClick={() => {
              moveTaskUp(index)
            }}>⬆️</button>

            <button
              className='move-button btn'
              onClick={() => {
              moveTaskDown(index)
            }}>⬇️</button>
            </li>)}
      </ol>
    </div>
  )
}

export default TodoList
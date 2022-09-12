import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import { useState, useEffect } from 'react';
import AddTask from './AddTask';


const App = () => {
  const [toggleAddTask, setToggleAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  //getdata and setTasks
  useEffect(() => {
      const getTasks = async () => {
        const fetchData = await fetchTasks()
        setTasks(fetchData)
      }
      getTasks()
    } , [])

  //Fetch task
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

  //Add task function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id , ...task}
    setTasks([...tasks, newTask])
    console.log(id)
  }

  //Delete task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>  
        task.id === id ? {...task, reminder: !task.reminder} : task 
    ))
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => { setToggleAddTask( !toggleAddTask ) }}
        showAdd={ toggleAddTask }/>
      {toggleAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ('No tasks')
      }
    </div>
  );
}

export default App;

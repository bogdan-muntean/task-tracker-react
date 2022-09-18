import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import { useState, useEffect } from 'react';
import AddTask from './AddTask';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [toggleAddTask, setToggleAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  //Fetch task
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
  
    console.log(data)
    return data
  }

  //getData and setTasks
  useEffect(() => {
      const getTasks = async () => {
        const fetchData = await fetchTasks()
        setTasks(fetchData)
      }
      getTasks()
    } , [])

  //Add task function
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json()
    setTasks([...tasks, data])
  }
      //For randomize of id number
      // const id = Math.floor(Math.random() * 100) + 1
      // const newTask = {id , ...task}
      // setTasks([...tasks, newTask])
      // console.log(id)

  //Delete task function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle task function and setTasks
  const toggleReminder = async (id) => {
    const res1 = await fetch(`http://localhost:5000/tasks/${id}`)
    const taskToToggle = await res1.json()

    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res2 = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(updateTask)
    })
    const data = await res2.json()
    
        //setTasks remains to make changes without refresh page
    setTasks(tasks.map((task) =>  
        task.id === id ? {...task, reminder: data.reminder} : task 
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
      {/* <Outlet></Outlet> */}
      <Footer/>
    </div>
  );
}

export default App;

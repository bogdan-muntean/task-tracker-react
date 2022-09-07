import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import {useState} from 'react';
import AddTask from './AddTask';


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting2',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Meeting3',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
  ])

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
      <Header/>
      <AddTask/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ('No tasks')
      }
    </div>
  );
}

export default App;

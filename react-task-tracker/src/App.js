import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import {useState} from 'react';


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


  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

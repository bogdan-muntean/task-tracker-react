import React from 'react'
// import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types'

const tasks = [
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
]

const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
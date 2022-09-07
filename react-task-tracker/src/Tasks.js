// import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types'
import React from 'react'
import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks


// const tasks = [
//     {
//         id: 1,
//         text: 'Meeting',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting2',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Meeting3',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
// ]
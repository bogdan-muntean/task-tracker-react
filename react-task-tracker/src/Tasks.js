import React from 'react'
// import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types'



const Tasks = ({tasks}) => {
    return (
    <>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
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
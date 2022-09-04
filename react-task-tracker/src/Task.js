// import React from 'react'
import { FaTimes } from 'react-icons/fa'   //x icon, fa = font awesome

const Task = ({task}) => {
  return (
    <div className='task'>
        <h4>{task.text} <FaTimes/></h4>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
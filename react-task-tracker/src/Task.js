// import React from 'react'
import { FaTimes } from 'react-icons/fa'   //x icon, fa = font awesome

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h4>{task.text} <FaTimes style={{color: 'blue', cursor: 'pointer'}}/></h4>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
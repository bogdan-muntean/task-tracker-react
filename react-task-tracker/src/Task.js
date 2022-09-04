// import React from 'react'
import { FaTimes } from 'react-icons/fa'   //x icon, fa = font awesome

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h4>
        {task.text} 
        <FaTimes 
          style={{color: 'blue', cursor: 'pointer'}}
          onClick={() => onDelete(task.id)} />
      </h4>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
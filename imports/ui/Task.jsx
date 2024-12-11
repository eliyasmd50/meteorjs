import React from 'react'

const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return <li>
            <input 
              type="checkbox"
              checked= {!!task.isChecked}
              onClick={() => onCheckboxClick(task._id, task.isChecked)}
              readOnly
             />
            <span>{task.text}</span>
            <button 
            onClick={() => onDeleteClick(task._id)}>&times;</button>
          </li>
}

export default Task
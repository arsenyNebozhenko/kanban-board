import React from 'react'
import './Task.scss'

const Task = ({ task }) => {
  return (
    <li className="task">
      {task.content}
    </li>
  )
}

export default Task

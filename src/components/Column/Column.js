import React from 'react'
import Task from '../Task/Task'
import './Column.scss'

const Column = ({ column: { title }, tasks }) => {
  return (
    <div className="column">
      <h3 className="column__title">{title}</h3>
      <ul className="column__list">
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </ul>
    </div>
  )
}

export default Column

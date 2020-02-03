import React from 'react'
import Task from '../Task/Task'
import { Droppable } from 'react-beautiful-dnd'
import './Column.scss'

const Column = ({ column: { title, id }, tasks }) => {
  return (
    <div className="column">
      <h3 className="column__title">{title}</h3>
      <Droppable droppableId={id}>
        {(provided) => (
          <div 
            className="column__list" 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column

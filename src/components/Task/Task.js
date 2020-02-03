import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './Task.scss'

const Task = ({ task: { id, content }, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div 
          className={'task' + (snapshot.isDragging ? ' task--dragging' : '')}
          {...provided.draggableProps}  
          {...provided.dragHandleProps}  
          ref={provided.innerRef}
        >
          {content}
        </div>
      )}
    </Draggable>
  )
}

export default Task

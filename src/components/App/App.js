import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import Column from '../Column/Column';
import './App.scss'

const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Test 1' },
    'task-2': { id: 'task-2', content: 'Test 2' },
    'task-3': { id: 'task-3', content: 'Test 3' },
    'task-4': { id: 'task-4', content: 'Test 4' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
}

function App() {
  const [state, setState] = useState(initialState)

  return (
    <div className="app">
      <DragDropContext
        
      >
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId]
          const tasks = column.taskIds.map(taskId => state.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    </div>
  );
}

export default App;

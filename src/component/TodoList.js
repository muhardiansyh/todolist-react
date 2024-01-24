import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,onDelete,onEdit}) => {
  return (
    <div className='d-flex flex-column gap-3 container mt-5 p-0'>
      {todos.map((todo) => {
        return (
          <Todo todo={todo} onDelete={onDelete} onEdit={onEdit}/>
        )
      })}
    </div>
  )
}

export default TodoList
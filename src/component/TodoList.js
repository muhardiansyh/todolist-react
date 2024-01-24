import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,onDelete}) => {
  return (
    <div className='d-flex flex-column gap-3 container mt-5'>
        {todos.map((todo) => {
            return (
                <Todo todo={todo} onDelete={onDelete}/>
            )
        })}
    </div>
  )
}

export default TodoList
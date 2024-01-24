import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div className='d-flex flex-column gap-3 container mt-5'>
        {todos.map((todo) => {
            return (
                <Todo todo={todo}/>
            )
        })}
    </div>
  )
}

export default TodoList
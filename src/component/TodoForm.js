import React, { useState } from 'react'

const TodoForm = ({onCreate}) => {
  const initialState = {
    todo:''
  }
  const [formTodo, setFormTodo] = useState(initialState)
  const {todo} = formTodo
  const handleChangeTodo = (e) => {
    setFormTodo({...formTodo, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formTodo)
    setFormTodo(initialState)
  }
  return (
    <div>
      <form className='d-flex gap-2' onSubmit={handleSubmit}>
        <input type='text' name='todo' id='todo' className='px-3' placeholder='Add your task...' 
        autoComplete='off' onChange={handleChangeTodo} value={todo}/>
        <input type='submit' name='add' id='add' value='Add' className='btn btn-primary rounded-0 px-4'/>
      </form>
    </div>
  )
}

export default TodoForm
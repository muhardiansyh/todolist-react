import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <form className='d-flex gap-2'>
            <input type='text' name='todo' id='todo' className='px-3' placeholder='Add your task...' autoComplete='off'/>
            <input type='submit' name='add' id='add' value='Add' className='btn btn-primary rounded-0 px-4'/>
        </form>
    </div>
  )
}

export default TodoForm
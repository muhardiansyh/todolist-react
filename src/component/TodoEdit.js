import React, { useState } from 'react'

const TodoEdit = ({TodoEditForm,handleEdit,onEdit}) => {
  const initialState = {
    id:TodoEditForm.id,
    todo:TodoEditForm.todo
  }
  const [todoEditForm, setTodoEditForm] = useState(initialState)
  const [showEditForm, setShowEditForm] = useState(false)
  const {id, todo} = todoEditForm
  const handleCancel = () => {
    setShowEditForm(!showEditForm)
    handleEdit(showEditForm)
    console.log(todoEditForm);
  }
  const handleChangeEdit = (e) => {
    setTodoEditForm({...todoEditForm,[e.target.name]: e.target.value})
  }
  const handleSave = (e) => {
    e.preventDefault();
    onEdit(id, todoEditForm)
    setShowEditForm(!showEditForm)
    handleEdit(showEditForm)
  }
  return (
    <div>
      <form className='d-flex flex-row gap-2 pe-3' onSubmit={handleSave}>
        <input type='text' name='todo' id='todo' className='border-0 todo-edit' autoComplete='off' placeholder='New task...' onChange={handleChangeEdit} value={todo} autoFocus/>
        <div className='d-flex gap-1'>
          <input type='button' value='Save' className='btn btn-primary rounded-0 px-3' onClick={handleSave}/>
          <input type='button' value='Cancel' className='btn btn-white border border-dark rounded-0' onClick={handleCancel}/>
        </div>
      </form>
    </div>
  )
}

export default TodoEdit
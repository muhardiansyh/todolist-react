import React, { useState } from 'react'
import { VscTrash } from "react-icons/vsc";
import { BiSolidEdit } from "react-icons/bi";
import TodoEdit from './TodoEdit';

const Todo = ({todo,onDelete,onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleDelete = () => {
    onDelete(todo.id)
  }
  const handleEdit = () => {
    setShowEdit(!showEdit)
  }
  return (
    <div className='border py-2'>
      {showEdit === false ? (
        <div className='row px-3 d-flex justify-content-between align-items-center todos'>
          <div className='col d-flex gap-3 align-items-center'>
            <p className='mb-1'>{todo.todo}</p>
          </div>
          <div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 d-flex align-items-center gap-5'>
            <BiSolidEdit className='fs-5 icons' onClick={handleEdit}/>
            <VscTrash className='fs-5 icons' onClick={handleDelete}/>
          </div>
        </div>
      ) : (
        <div className='ms-3'>
          <TodoEdit handleEdit={handleEdit} TodoEditForm={todo} onEdit={onEdit}/>
        </div>
      )}
    </div>
  )
}

export default Todo
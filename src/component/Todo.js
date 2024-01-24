import React from 'react'
import { VscTrash } from "react-icons/vsc";
import { BiSolidEdit } from "react-icons/bi";

const Todo = ({todo,onDelete}) => {
  const handleDelete = () => {
    onDelete(todo.id)
  }
  return (
    <div className='row border px-3 d-flex justify-content-between align-items-center todos'>
      <div className='col d-flex gap-3 align-items-center'>
        <p className='mb-1'>{todo.todo}</p>
      </div>
      <div className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 d-flex align-items-center gap-5'>
        <BiSolidEdit className='fs-5 icons'/>
        <VscTrash className='fs-5 icons' onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default Todo
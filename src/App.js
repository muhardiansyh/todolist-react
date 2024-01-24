import { useState } from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import dataTodo from './data/dataTodo'

function App() {
  const [todos, setTodos] = useState(dataTodo)
  const onCreate = (newTodo) => {
    setTodos([...todos,{id:Math.round(Math.random()*99999), ...newTodo}])
  }
  const onDelete = (idTodo) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.id !== idTodo
    })
    setTodos(deletedTodo)
  }
  const onEdit = (id, data) => {
    const updatedTodo = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, ...data}
      }
      return todo
    })
    setTodos(updatedTodo)
  }
  return (
    <div className='container py-5'>
      <h1 className='fw-normal fs-2'>TodoList App</h1>
      <p>Add your daily activity</p>
      <TodoForm onCreate={onCreate}/>
      <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
}

export default App;

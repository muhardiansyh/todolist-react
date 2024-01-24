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
  return (
    <div className='container py-5'>
      <h1 className='fw-normal fs-2'>TodoList App</h1>
      <p>Add your daily activity</p>
      <TodoForm onCreate={onCreate}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

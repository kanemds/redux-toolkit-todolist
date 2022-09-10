
import './App.css';
import { useState } from 'react';
import AddTodo from './compoents/AddTodo';
import ListTodos from './compoents/ListTodos';

function App() {

  const [todo, setTodo] = useState({
    task: '',
    isComplete: false
  })

  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </div>
  );
}

export default App;

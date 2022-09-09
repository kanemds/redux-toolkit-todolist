
import './App.css';
import AddTodo from './compoents/AddTodo';
import ListTodos from './compoents/ListTodos';

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;

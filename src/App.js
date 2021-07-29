// import logo from './logo.svg';
// import './App.css';

import TodoList from "./todo/TodoList";



function App() {

  const todos = [
    { id: 1, completed: false, title: 'Buy some bread' },
    { id: 2, completed: true, title: 'Buy some butter' },
    { id: 3, completed: false, title: 'Buy milk' },
  ]

  return (
    <div className="wrapper">
      <h1>Hello world ^^</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;

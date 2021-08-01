// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoList from "./todo/TodoList";
import Context from './context';
import AddTodo from './todo/AddTodo';




function App() {

  const [todoss, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy few eggs' },
    { id: 2, completed: false, title: 'Buy some butter' },
    { id: 3, completed: false, title: 'Buy milk' },
  ])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then((todos) => {
        setTodos(todoss.concat(todos))
      })
  }, [])

  function toggleTodo(id) {
    setTodos(todoss.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todoss.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todoss.concat([{
      title: title,
      id: Date.now(),
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Hello world ^^</h1>

        <AddTodo onCreate={addTodo} />

        {todoss.length ? <TodoList todos={todoss} onToggle={toggleTodo} /> : <p>No todos :( </p>}

      </div>
    </Context.Provider>
  );
}

export default App;

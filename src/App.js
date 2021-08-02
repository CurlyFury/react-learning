// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoList from "./todo/TodoList";
import Context from './context';
import AddTodo from './todo/AddTodo';
import Loader from './Loader';




function App() {

  const [todos, setTodos] = React.useState([])
  const [loadind, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000);
      })
  }, [])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
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

        {loadind && <Loader />}

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : loadind ? null : <p>No todos !</p>}

      </div>
    </Context.Provider>
  );
}

export default App;

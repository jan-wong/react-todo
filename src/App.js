import './App.css';
import React from 'react'
import AddTodo from './view/AddTodo'
import TodoList from './view/TodoList'
import Filter from './view/Filter'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;

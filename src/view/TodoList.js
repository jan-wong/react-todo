import React from 'react'
import Todo from './Todo'

function TodoList ({ todos = [] }) {
  return (
    <ul className="todo-list">
      {todos.map(item => Todo(item))}
    </ul>
  )
}

export default TodoList
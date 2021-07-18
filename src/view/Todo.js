import React from 'react'
import './todo.css'

function Todo ({ item, onToggle, onDelete }) {
  return (
    <li className="todo">
      <span style={{textDecoration: item.active ? 'none' : 'line-through'}} className="text" onClick={onToggle}>{item.text}</span>
      <span className="del" onClick={onDelete}>x</span>
    </li>
  )
}

export default Todo
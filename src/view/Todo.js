import React from 'react'

function Todo ({ text }) {
  return (
    <li className="todo">
      <span className="text">{text}</span>
      <span className="del">x</span>
    </li>
  )
}

export default Todo
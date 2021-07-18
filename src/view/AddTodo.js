import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

function AddTodo ({ dispatch }) {
  let input = useRef(null)

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo(input.value))
      input.value = ''
    }
  }

  return (
    <input ref={node => input = node} onKeyDown={onKeyDown} />
  )
}

export default connect()(AddTodo)
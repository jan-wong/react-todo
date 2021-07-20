import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todos'

function AddTodo () {
  let input = useRef(null)
  const dispatch = useDispatch()

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      let value = input.value
      value && dispatch(addTodo(value))
      input.value = ''
    }
  }

  return (
    <input ref={node => input = node} onKeyDown={onKeyDown} />
  )
}

export default AddTodo
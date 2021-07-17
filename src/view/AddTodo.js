import React from 'react'

function AddTodo () {
  let input = null

  const onKeyDown = (e) => {
    if (e.keyCode === '13') {
      let value = input.value
      input.value = ''
    }
  }

  return (
    <input ref={input} onKeyDown={onKeyDown} />
  )
}

export default AddTodo
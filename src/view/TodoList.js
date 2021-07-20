import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import { FILTER_TYPES } from '../actions/filter'
import { toggleTodo, removeTodo } from '../actions/todos'
import './todolist.css'

function TodoList () {
  const dispatch = useDispatch()
  const todos = useSelector(state => getVisibleTodos(state.todos, state.filter))

  return (
    <ul className="todo-list">
      {todos.map((item, index) => <Todo key={item.id} item={item} onToggle={() => dispatch(toggleTodo(index))} onDelete={() => dispatch(removeTodo(index))} />)}
    </ul>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTER_TYPES.ALL:
      return todos;
    case FILTER_TYPES.COMPLETE:
      return todos.filter(item => !item.active)
    case FILTER_TYPES.ACTIVE:
      return todos.filter(item => item.active)
    default:
      return todos
  }
}

export default TodoList
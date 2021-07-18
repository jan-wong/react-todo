import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { FILTER_TYPES } from '../actions/filter'
import { toggleTodo, removeTodo } from '../actions/todos'
import './todolist.css'

function TodoList ({ todos = [], onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((item, index) => <Todo key={item.id} item={item} onToggle={() => onToggle(index)} onDelete={() => onDelete(index)} />)}
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

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: index => {
      dispatch(toggleTodo(index))
    },
    onDelete: index => {
      dispatch(removeTodo(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
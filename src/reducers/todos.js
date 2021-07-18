import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../actions/todos'

let todoId = 0

export default function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {text: action.text, active: true, id: todoId++}
      ]
    case REMOVE_TODO:
      let copy = state.slice(0)
      copy.splice(action.index, 1)
      return copy
    case TOGGLE_TODO:
      return state.map((item, index) => {
        if (index === action.index) {
          return {
            ...item,
            active: !item.active
          }
        } else {
          return item
        }
      })
    default:
      return state
  }
}
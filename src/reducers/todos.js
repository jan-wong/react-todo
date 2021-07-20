import { handleActions } from 'redux-actions'
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../actions/todos'

let todoId = 0

const todos = handleActions({
  [ADD_TODO]: (state, { payload }) => {
    return [
      ...state,
      {text: payload, active: true, id: todoId++}
    ]
  },
  [REMOVE_TODO]: (state, { payload }) => {
    let copy = state.slice(0)
    copy.splice(payload, 1)
    return copy
  },
  [TOGGLE_TODO]: (state, { payload }) => {
    return state.map((item, index) => {
      if (index === payload) {
        return {
          ...item,
          active: !item.active
        }
      } else {
        return item
      }
    })
  }
}, [])

export default todos
import { createAction } from "redux-actions"

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// export function addTodo (text) {
//   return {type: ADD_TODO, text}
// }

// export function toggleTodo (index) {
//   return {type: TOGGLE_TODO, index}
// }

// export function removeTodo (index) {
//   return {type: REMOVE_TODO, index}
// }

export const addTodo = createAction(ADD_TODO, text => text)
export const toggleTodo = createAction(TOGGLE_TODO, index => index)
export const removeTodo = createAction(REMOVE_TODO, index => index)
import {
  SET_FILTER,
  FILTER_TYPES
} from '../actions/filter'

const { ALL } = FILTER_TYPES

export default function filter (state = ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}
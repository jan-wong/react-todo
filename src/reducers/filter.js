import { handleActions } from 'redux-actions'
import {
  SET_FILTER,
  FILTER_TYPES
} from '../actions/filter'

const { ALL } = FILTER_TYPES

const filter = handleActions(
  {
    [SET_FILTER]: (state, { payload }) => {
      return payload
    }
  },
  ALL
)

export default filter
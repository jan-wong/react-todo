export const SET_FILTER = 'SET_FILTER'
export const FILTER_TYPES = {
  ALL: 'ALL',
  COMPLETE: 'COMPLETE',
  ACTIVE: 'ACTIVE'
}

export function setFilter (filter) {
  return {type: SET_FILTER, filter}
}
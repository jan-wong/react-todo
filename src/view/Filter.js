import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../actions/filter'
import './filter.css'

function Filter () {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  return (
    <div className="filter">
      Select:
      <form onChange={e => dispatch(setFilter(e.target.value))} >
        <label><input name="filter" type="radio" defaultChecked value="ALL" />All</label>
        <label><input name="filter" type="radio" value="ACTIVE" />Active</label>
        <label><input name="filter" type="radio" value="COMPLETE" />Complete</label>
      </form>
      {filter}
    </div>
  )
}

export default Filter
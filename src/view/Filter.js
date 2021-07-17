import React from 'react'

function Filter () {
  return (
    <div className="filter">
      Select:
      <label><input name="filter" type="radio" value="All" />All</label>
      <label><input name="filter" type="radio" value="Active" />Active</label>
      <label><input name="filter" type="radio" value="completed" />Completed</label>
    </div>
  )
}

export default Filter
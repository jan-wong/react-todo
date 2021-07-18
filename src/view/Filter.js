import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/filter'
import './filter.css'

function Filter ({ filter, setFilter }) {
  return (
    <div className="filter">
      Select:
      <form onChange={e => setFilter(e.target.value)} >
        <label><input name="filter" type="radio" defaultChecked value="ALL" />All</label>
        <label><input name="filter" type="radio" value="ACTIVE" />Active</label>
        <label><input name="filter" type="radio" value="COMPLETE" />Complete</label>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter: type => {
      dispatch(setFilter(type))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
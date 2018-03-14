import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = category => {
  return <li key={category.id}>{category.shortName}</li>
}

const Categories = props => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>{map(li, props.categories)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { categories: state.categories }
}

const connector = connect(mapStateToProps)

export default connector(Categories)

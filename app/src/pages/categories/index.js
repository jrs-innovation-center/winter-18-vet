import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { li } from '../../components/componentListItem2'
import List from 'material-ui/List'

const Categories = props => {
  return (
    <div>
      <h1>Categories</h1>
      <List>{map(li, props.categories)}</List>
    </div>
  )
}
const mapStateToProps = state => {
  return { categories: state.categories }
}

const connector = connect(mapStateToProps)

export default connector(Categories)

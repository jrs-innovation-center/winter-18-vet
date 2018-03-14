import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resources } from './reducers/resources'
import { categories } from './reducers/categories'
import appData from './reducers/app-data'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ resources, categories, appData }),
  applyMiddleware(thunk)
)

export default store

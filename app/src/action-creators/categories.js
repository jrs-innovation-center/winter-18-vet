import fetch from 'isomorphic-fetch'
import { SET_CATEGORIES } from '../constants'
const url = 'http://localhost:5000/categories'

export const getCategories = async (dispatch, getState) => {
  const categories = await fetch(url).then(res => res.json())
  dispatch({ type: SET_CATEGORIES, payload: categories })
}

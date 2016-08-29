import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import gridlist from './gridlist'
import popup from './popup'


const todoApp = combineReducers({
  todos,
  visibilityFilter,
  popup,
  gridlist
})

export default todoApp

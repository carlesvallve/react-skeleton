import { combineReducers } from 'redux'
import gridlist from './gridlist'
import popup from './popup'


const todoApp = combineReducers({
  gridlist,
  popup,
})

export default todoApp

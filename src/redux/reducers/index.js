import { combineReducers } from 'redux'
import user from './user.reducer'
import group from './group.reducer'

export default combineReducers({
  user,
  group,
})

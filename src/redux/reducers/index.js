import { combineReducers } from 'redux'
import user from './user.reducer'
import groups from './groups.reducer'

export default combineReducers({
  user,
  groups,
})

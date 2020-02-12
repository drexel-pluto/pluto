import { combineReducers } from 'redux'
import user from './user.reducer'
import group from './group.reducer'
import profile from './profile.reducer'
import create from './create.reducer'

export default combineReducers({
  user,
  group,
  profile,
  create,
})

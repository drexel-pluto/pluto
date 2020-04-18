import { combineReducers } from 'redux'
import user from './user.reducer'
import group from './group.reducer'
import profile from './profile.reducer'
import create from './create.reducer'
import post from './post.reducer'
import addFriend from './addFriend.reducer'
import editGroup from './editGroup.reducer'

export default combineReducers({
  user,
  group,
  profile,
  create,
  post,
  addFriend,
  editGroup,
})

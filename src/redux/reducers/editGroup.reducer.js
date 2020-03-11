import { SET_IS_CREATE } from "./user.reducer";

// actions
export const TOGGLE_MEMBER = 'addGroup/TOGGLE_MEMBER'

export const SET_GROUP = 'addGroup/SET_GROUP'
export const SET_IS_EDITING = 'addGroup/SET_IS_EDITING'

// reducer

let defaultStateAddGroup = {
  isEditing: false,
  members: [],
  name: "",
  isNew: true,
  id: ""
}

export default function reducer(state = defaultStateAddGroup, action) {
  switch (action.type) {
    case TOGGLE_MEMBER:
      let newArray = state.members.slice();
      var index = state.members.indexOf(action.userId);
      if (index > -1) {
        newArray.splice(index, 1);
      } else {
        newArray.push(action.userId);
      }
      return { ...state, members: newArray }
    case SET_IS_EDITING:
      return { ...state, isEditing: action.bool}
    default:
      return state
  }
}

// actions

export function toggleMember(userId) {
  return {
    type: TOGGLE_MEMBER,
    userId
  }
}

export function newGroup(members, name) {

}

export function setGroup(group) {
  return {
    type: SET_GROUP,
    group
  }
}

export function setIsEditing(bool) {
  return {
    type: TOGGLE_MEMBER,
    bool
  }
}


// actions
export const TOGGLE_MEMBER = 'addGroup/TOGGLE-MEMBER'

// reducer

let defaultStateAddGroup = {
  members: [],
  name: "",
  isNew: true,
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

export function pushGroup(members, name) {

}
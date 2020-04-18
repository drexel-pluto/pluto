import { SET_IS_CREATE } from './user.reducer'

// actions
export const TOGGLE_MEMBER = 'addGroup/TOGGLE_MEMBER'
export const SET_GROUP = 'addGroup/SET_GROUP'
export const SET_NAME = 'addGroup/SET_NAME'

export const CREATE_GROUP = 'addGroup/CREATE_GROUP'
export const CREATE_GROUP_SUCCESS = 'addGroup/CREATE_GROUP_SUCCESS'
export const CREATE_GROUP_FAIL = 'addGroup/CREATE_GROUP_FAIL'

export const ADD_MEMBERS = 'addGroup/ADD_MEMBERS'
export const ADD_MEMBERS_SUCCESS = 'addGroup/ADD_MEMBERS_SUCCESS'
export const ADD_MEMBERS_FAIL = 'addGroup/ADD_MEMBERS_FAIL'

export const REMOVE_MEMBERS = 'addGroup/REMOVE_MEMBERS'
export const REMOVE_MEMBERS_SUCCESS = 'addGroup/REMOVE_MEMBERS_SUCCESS'
export const REMOVE_MEMBERS_FAIL = 'addGroup/REMOVE_MEMBERS_FAIL'

export const UPDATE_NAME = 'addGroup/UPDATE_NAME'
export const UPDATE_NAME_SUCCESS = 'addGroup/UPDATE_NAME_SUCCESS'
export const UPDATE_NAME_FAIL = 'addGroup/UPDATE_NAME_FAIL'

export const UPDATE_GROUP = 'addGroup/UPDATE_GROUP'
export const UPDATE_GROUP_SUCCESS = 'addGroup/UPDATE_GROUP_SUCCESS'
export const UPDATE_GROUP_FAIL = 'addGroup/UPDATE_GROUP_FAIL'

// reducer

let defaultStateAddGroup = {
  isEditing: false,
  members: [],
  name: '',
  isNew: true,
  id: '',
  originalData: {
    name: '',
    members: [],
  },
  canSubmit: false,
}

export default function reducer(state = defaultStateAddGroup, action) {
  switch (action.type) {
    case TOGGLE_MEMBER:
      let newArray = state.members.slice()
      var index = state.members.indexOf(action.userId)
      if (index > -1) {
        newArray.splice(index, 1)
      } else {
        newArray.push(action.userId)
      }

      var canSubmit =
        (state.name != state.originalData.name && state.name.length > 1) ||
        !newArray.every(function(element, index) {
          state.originalData.members.includes(element)
        })

      return { ...state, members: newArray, canSubmit }
    case SET_NAME:
      var canSubmit =
        (action.name != state.originalData.name && action.name.length > 1) ||
        !state.members.every(function(element, index) {
          state.originalData.members.includes(element)
        })
      return { ...state, name: action.name, canSubmit }
    case SET_GROUP:
      return {
        ...defaultStateAddGroup,
        id: action.group.id,
        members: action.group.members,
        name: action.group.title,
        isNew: false,
        originalData: {
          name: action.group.title,
          members: action.group.members,
        },
      }
    case CREATE_GROUP:
      return { ...state, canSubmit: false }
    case CREATE_GROUP_SUCCESS:
      return defaultStateAddGroup
    case CREATE_GROUP_FAIL:
      return { ...state, canSubmit: true }

    default:
      return state
  }
}

// actions

export function toggleMember(userId) {
  return {
    type: TOGGLE_MEMBER,
    userId,
  }
}

export function setName(name) {
  return {
    type: SET_NAME,
    name,
  }
}

export function setGroup(group) {
  var members = group.members.map(element => {
    return element._id
  })

  members.shift()

  group.members = members

  return {
    type: SET_GROUP,
    group,
  }
}

// api functions

function createGroup(name) {
  return {
    type: CREATE_GROUP,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/create`,
        data: {
          groupName: name,
        },
      },
    },
  }
}

function update() {
  return {
    type: UPDATE_GROUP,
  }
}

export function updateGroup() {
  return function(dispatch, getState) {
    dispatch({ type: UPDATE_GROUP })
    let groupId = getState().editGroup.id
    let name = getState().editGroup.name
    let members = getState().editGroup.members
    let originalData = getState().editGroup.originalData

    let newMembers = members.filter(
      mem_id => !originalData.members.includes(mem_id)
    )
    let removedMembers = originalData.members.filter(
      mem_id => !members.includes(mem_id)
    )

    let promises = [
      name !== originalData.name && dispatch(updateName(name, groupId)),
      newMembers.length > 0 && dispatch(addMembers(newMembers, groupId)),
      removedMembers.length > 0 &&
        dispatch(removeMembers(removedMembers, groupId)),
    ]

    return Promise.all(promises).then(() =>
      dispatch({ type: UPDATE_GROUP_SUCCESS })
    )
  }
}

function addMembers(members, groupId) {
  return {
    type: ADD_MEMBERS,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/members/add`,
        data: {
          groupId,
          friendsToAdd: members,
        },
      },
    },
  }
}

function removeMembers(members, groupId) {
  return {
    type: REMOVE_MEMBERS,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/members/remove`,
        data: {
          groupId,
          friendsToRemove: members,
        },
      },
    },
  }
}

function updateName(name, groupId) {
  return {
    type: UPDATE_NAME,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/edit-name`,
        data: {
          groupId,
          newTitle: name,
        },
      },
    },
  }
}

export function newGroup(members, name) {
  return function(dispatch, getState) {
    return dispatch(createGroup(name)).then(action => {
      if (action.type.endsWith('SUCCESS')) {
        let groupId = action.payload.data._id
        return dispatch(addMembers(members, groupId))
      }
    })
  }
}

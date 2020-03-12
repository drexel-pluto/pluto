import { SET_IS_CREATE } from "./user.reducer";

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

// reducer

let defaultStateAddGroup = {
  isEditing: false,
  members: [],
  name: "",
  isNew: true,
  id: "",
  originalData: {
    name: "",
    members: []
  },
  canSubmit: false
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

      var canSubmit = (state.name != state.originalData.name && state.name.length > 1) ||
        ((newArray.length !== state.originalData.members.length) && !newArray.every(function(element, index) {
          state.originalData.members.includes(element); 
        }));

      return { ...state, members: newArray, canSubmit }
    case SET_NAME:
      var canSubmit = (action.name != state.originalData.name && action.name.length > 1) ||
        ((state.members.length !== state.originalData.members.length) && !state.members.every(function(element, index) {
          state.originalData.members.includes(element); 
        }));
      return { ...state, name: action.name, canSubmit}
    // case SET_GROUP:

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

export function setName(name) {
  return {
    type: SET_NAME,
    name
  }
}

export function setGroup(group) {
  return {
    type: SET_GROUP,
    group
  }
}

// api functions

function createGroup(name, authToken) {
  return {
    type: CREATE_GROUP,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/create`,
        data: {
          groupName: name
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    }
  }
}

function addMembers(members, groupId, authToken) {
  return {
    type: ADD_MEMBERS,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/members/add`,
        data: {
          groupId,
          friendsToAdd: members
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    }
  }
}

function removeMembers(members, groupId, authToken) {
  return {
    type: ADD_MEMBERS,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/members/remove`,
        data: {
          groupId,
          friendsToRemove: members
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    }
  }
}


export function newGroup(members, name) {
  return function(dispatch, getState) {
    let authToken = getState().user.authToken;
    return dispatch(createGroup(name, authToken)).then(action => {
      if (action.type.endsWith("SUCCESS")) {
        let groupId = action.payload.data._id;
        return dispatch(addMembers(members, groupId, authToken));
      }
    });
  }
}
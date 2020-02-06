// actions
export const GET_GROUPS = 'user/GET_GROUPS'
export const GET_GROUPS_SUCCESS = 'user/GET_GROUPS_SUCCESS'
export const GET_GROUPS_FAIL = 'user/GET_GROUPS_FAIL'

// reducer

let defaultStateGroups = {
  groups: {},
}

export default function reducer(state = defaultStateGroups, action) {
  switch (action.type) {
    case GET_GROUPS_SUCCESS:
      console.log(action)
      break
      return { ...state, groups: action.groups }
    default:
      return state
  }
}

// actions

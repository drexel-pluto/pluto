import store from '../store'

// actions
export const GET_GROUP_POSTS = 'user/GET_GROUP_POSTS'
export const GET_GROUP_POSTS_SUCCESS = 'user/GET_GROUP_POSTS_SUCCESS'
export const GET_GROUP_POSTS_FAIL = 'user/GET_GROUP_POSTS_FAIL'

// reducer

let defaultStateGroup = {
  group: {},
  loading: true,
}

export default function reducer(state = defaultStateGroup, action) {
  switch (action.type) {
    case GET_GROUP_POSTS_SUCCESS:
      console.log(action)
      return { ...state, loading: false }
    default:
      return state
  }
}

// actions

export function getPosts(group_id) {
  let token = store.getState().user.authToken

  return {
    type: GET_GROUP_POSTS,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/from-group`,
        data: {
          groupId: group_id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  }
}

import store from '../store'

// actions
export const GET_GROUP_POSTS = 'group/GET_GROUP_POSTS'
export const GET_GROUP_POSTS_SUCCESS = 'group/GET_GROUP_POSTS_SUCCESS'
export const GET_GROUP_POSTS_FAIL = 'group/GET_GROUP_POSTS_FAIL'

export const SET_MEMBERS = 'group/SET_MEMBERS'

export const SET_TITLE = 'group/SET_TITLE'

// reducer

let defaultStateGroup = {
  title: '',
  posts: [],
  members: [],
  loading: true,
}

export default function reducer(state = defaultStateGroup, action) {
  switch (action.type) {
    case GET_GROUP_POSTS:
      return { ...state, loading: true, posts: [] }
    case GET_GROUP_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload.data }
    case SET_MEMBERS:
      return { ...state, members: action.members }
    case SET_TITLE:
      return { ...state, title: action.title }
    default:
      return state
  }
}

// actions

export function setTitle(group_title) {
  return {
    type: SET_TITLE,
    title: group_title,
  }
}

export function setMemebers(members) {
  return {
    type: SET_MEMBERS,
    members: members,
  }
}

export function getPosts(group_id) {
  let token = store.getState().user.authToken

  if (group_id === -1) {
    // when group_id = -1, get all posts (everyone)
    return {
      type: GET_GROUP_POSTS,
      payload: {
        request: {
          method: 'GET',
          url: `/posts/all`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    }
  } else {
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
}

export function setGroup(group_id) {
  return function(dispatch, getState) {
    const groups = getState().user.groups
    const group = groups.find(element => element._id == group_id)
    dispatch(setMemebers(group.members))
    dispatch(getPosts(group_id))
    dispatch(setTitle(group.title))
  }
}

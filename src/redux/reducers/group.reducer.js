import store from '../store'
import update from 'react-addons-update'

// actions
export const GET_GROUP_POSTS = 'group/GET_GROUP_POSTS'
export const GET_GROUP_POSTS_SUCCESS = 'group/GET_GROUP_POSTS_SUCCESS'
export const GET_GROUP_POSTS_FAIL = 'group/GET_GROUP_POSTS_FAIL'

export const DELETE_GROUP = 'group/DELETE_GROUP'
export const DELETE_GROUP_SUCCESS = 'group/DELETE_GROUP_SUCCESS'
export const DELETE_GROUP_FAIL = 'group/DELETE_GROUP_FAIL'

export const SET_MEMBERS = 'group/SET_MEMBERS'

export const SET_TITLE = 'group/SET_TITLE'

export const LOAD_MORE = 'group/LOAD_MORE'

export const UPDATE_POST = 'group/UPDATE_POST'

// reducer

let defaultStateGroup = {
  title: '',
  posts: [],
  members: [],
  loading: true,
  id: '',
  endIndex: 0,
}

export default function reducer(state = defaultStateGroup, action) {
  switch (action.type) {
    case GET_GROUP_POSTS:
      return {
        ...state,
        loading: true,
        posts: [],
        id: action.payload.request?.data?.groupId ?? -1,
        endIndex: 0
      }
    case GET_GROUP_POSTS_SUCCESS:
      return { ...state, 
        loading: false, posts: action.payload.data,
        endIndex: Math.min(action.payload.data.length, 10)
      }
    case SET_MEMBERS:
      return { ...state, members: action.members }
    case SET_TITLE:
      return { ...state, title: action.title }
    case UPDATE_POST:
      let updatePosts = state.posts.map(post => {
        if (post._id === action.post_id) {
          post.likes = action.likes
          post.comments = action.comments

          return post
        }

        return post
      })
      return { ...state, posts: updatePosts }
    case DELETE_GROUP:
      return defaultStateGroup
    case LOAD_MORE:
      console.log(state.endIndex, state.posts.length)
      return { ...state, endIndex: Math.min(state.posts.length, state.endIndex + 10)}
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

export function setMembers(members) {
  return {
    type: SET_MEMBERS,
    members: members,
  }
}

export function getPosts(group_id) {
  if (group_id === -1) {
    // when group_id = -1, get all posts (everyone)
    return {
      type: GET_GROUP_POSTS,
      payload: {
        request: {
          method: 'GET',
          url: `/posts/all`,
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
        },
      },
    }
  }
}

export function setGroup(group_id) {
  return function(dispatch, getState) {
    const groups = getState().user.groups
    const group = groups.find(element => element._id == group_id)
    dispatch(setMembers(group.members))
    dispatch(getPosts(group_id))
    dispatch(setTitle(group.title))
  }
}

export function deleteGroup(group_id) {
  return {
    type: DELETE_GROUP,
    payload: {
      request: {
        method: 'POST',
        url: `/user/groups/delete`,
        data: {
          groupId: group_id,
        },
      },
    },
  }
}

export function updatePosts(post_id, likes, comments) {
  return {
    type: UPDATE_POST,
    post_id,
    likes,
    comments,
  }
} 

export function loadMore() {
  return { type: LOAD_MORE }
}
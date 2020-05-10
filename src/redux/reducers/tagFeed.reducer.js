import store from '../store'
import update from 'react-addons-update'

// actions
export const FETCH_POSTS_FOR_TAG = 'tag/FETCH_POSTS_FOR_TAG'
export const FETCH_POSTS_FOR_TAG_SUCCESS = 'tag/FETCH_POSTS_FOR_TAG_SUCCESS'
export const FETCH_POSTS_FOR_TAG_FAIL = 'tag/FETCH_POSTS_FOR_TAG_FAIL'
// reducer

let defaultStateTag = {
  tag: '',
  posts: [],
  loading: true
}

export default function reducer(state = defaultStateTag, action) {
  switch (action.type) {
    case FETCH_POSTS_FOR_TAG:
      return {...defaultStateTag, tag: action.tag};
    case FETCH_POSTS_FOR_TAG_SUCCESS:
      return {...state, posts: action.payload.data, loading: false};
    default:
      return state;
  }
}

// actions

export function fetchPostsForTag(tag) {
  return {
    type: FETCH_POSTS_FOR_TAG,
    payload: {
      request: {
        method: 'GET',
        url: `/posts/` + tag,
      },
    },
    tag
  }
}
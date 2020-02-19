import store from '../store'

const FETCH_POST = 'profile/FETCH_POST'
const FETCH_POST_SUCCESS = 'profile/FETCH_POST_SUCCESS'
const FETCH_POST_FAIL = 'profile/FETCH_POST_FAIL'

const SET_POSTER = 'profile/SET_POSTER'

let defaultStatePost = {
  loading: true,
  mediaURLs: [],
  comments: [],
  likes: 0,
  postedAt: '',
  poster: {},
  text: '',
  id: '',
}

export default function reducer(state = defaultStatePost, action) {
  switch (action.type) {
    case FETCH_POST:
      return defaultStatePost
    case FETCH_POST_SUCCESS:
      data = action.payload.data
      return {
        ...state,
        loading: false,
        mediaURLs: data.mediaURLs,
        comments: data.comments,
        likes: data.likes,
        postedAt: data.postedAt,
        text: data.text,
        id: data._id,
      }
    case SET_POSTER:
      return { ...state, poster: action.poster }
    case FETCH_POST_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}

export function fetchPost(post_id) {
  let token = store.getState().user.authToken
  return {
    type: FETCH_POST,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/one`,
        data: {
          postId: post_id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  }
}

export function setPoster(poster) {
  return {
    type: SET_POSTER,
    poster,
  }
}

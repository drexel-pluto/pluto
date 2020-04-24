import store from '../store'

const FETCH_POST = 'profile/FETCH_POST'
const FETCH_POST_SUCCESS = 'profile/FETCH_POST_SUCCESS'
const FETCH_POST_FAIL = 'profile/FETCH_POST_FAIL'

const SEND_COMMENT = 'profile/SEND_COMMENT'
const SEND_COMMENT_SUCCESS = 'profile/SEND_COMMENT_SUCCESS'
const SEND_COMMENT_FAIL = 'profile/SEND_COMMENT_FAIL'

const SEND_REACT = 'profile/SEND_REACT'
const SEND_REACT_SUCCESS = 'profile/SEND_REACT_SUCCESS'
const SEND_REACT_FAIL = 'profile/SEND_REACT_FAIL'

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
  tags: [],
  isLiked: false,
  newUpdates: 0,
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
        tags: data.tags,
      }
    case SEND_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.data.comments,
        newUpdates: state.newUpdates + 1,
      }
    case SET_POSTER:
      return { ...state, poster: action.poster }
    case FETCH_POST_FAIL:
    case SEND_COMMENT_FAIL:
      return { ...state, loading: false }
    case SEND_REACT_SUCCESS:
      return {
        ...state,
        loading: false,
        likes: action.payload.data.likes,
        newUpdates: state.newUpdates + 1,
      }
    case SEND_REACT_FAIL:
    default:
      return state
  }
}

export function sendComment(content) {
  let postId = store.getState().post.id
  return {
    type: SEND_COMMENT,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/comment`,
        data: {
          postId: postId,
          text: content,
        },
      },
    },
  }
}

export function fetchPost(post_id) {
  return {
    type: FETCH_POST,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/one`,
        data: {
          postId: post_id,
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

export function openPost(post_id, poster) {
  return function(dispatch) {
    dispatch(fetchPost(post_id))
    dispatch(setPoster(poster))
  }
}

export function sendReact(post_id, likes) {
  return {
    type: SEND_REACT,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/react`,
        data: {
          postId: post_id,
          amountToAdd: likes,
        },
      },
    },
  }
}

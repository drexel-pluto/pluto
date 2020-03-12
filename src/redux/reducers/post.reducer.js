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
}

export default function reducer(state = defaultStatePost, action) {
  switch (action.type) {
    case FETCH_POST:
      return defaultStatePost
    case FETCH_POST_SUCCESS:
    case SEND_COMMENT_SUCCESS:
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
    case SET_POSTER:
      return { ...state, poster: action.poster }
    case FETCH_POST_FAIL:
    case SEND_COMMENT_FAIL:
      console.log(action)
      return { ...state, loading: false }
    case SEND_REACT_SUCCESS:
    case SEND_REACT_FAIL:
    default:
      return state
  }
}

export function sendComment(content) {
  let token = store.getState().user.authToken
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
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

export function openPost(post_id, poster) {
  return function(dispatch) {
    dispatch(fetchPost(post_id))
    dispatch(setPoster(poster))
  }
}

export function sendReact(post_id, likes) {
  console.log('react sent: ', likes, ' to ', post_id)
  let token = store.getState().user.authToken
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  }
}

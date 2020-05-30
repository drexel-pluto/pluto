import store from '../store'

const FETCH_POST = 'profile/FETCH_POST'
const FETCH_POST_SUCCESS = 'profile/FETCH_POST_SUCCESS'
const FETCH_POST_FAIL = 'profile/FETCH_POST_FAIL'

const FETCH_POST_AND_POSTER = 'profile/FETCH_POST_AND_POSTER'
const FETCH_POST_AND_POSTER_SUCCESS = 'profile/FETCH_POST_AND_POSTER_SUCCESS'
const FETCH_POST_AND_POSTER_FAIL = 'profile/FETCH_POST_AND_POSTER_FAIL'

const SEND_COMMENT = 'profile/SEND_COMMENT'
const SEND_COMMENT_SUCCESS = 'profile/SEND_COMMENT_SUCCESS'
const SEND_COMMENT_FAIL = 'profile/SEND_COMMENT_FAIL'

const SEND_SUB_COMMENT = 'profile/SEND_SUB_COMMENT'
const SEND_SUB_COMMENT_SUCCESS = 'profile/SEND_SUB_COMMENT_SUCCESS'
const SEND_SUB_COMMENT_FAIL = 'profile/SEND_SUB_COMMENT_FAIL'

const SEND_REACT = 'profile/SEND_REACT'
const SEND_REACT_SUCCESS = 'profile/SEND_REACT_SUCCESS'
const SEND_REACT_FAIL = 'profile/SEND_REACT_FAIL'

const SET_POSTER = 'profile/SET_POSTER'

const DELETE_POST = 'profile/DELETE_POST'
const DELETE_POST_SUCCESS = 'profile/DELETE_POST_SUCCESS'
const DELETE_POST_FAIL = 'profile/DELETE_POST_FAIL'

const REPORT_POST = 'profile/REPORT_POST'
const REPORT_POST_SUCCESS = 'profile/REPORT_POST_SUCCESS'
const REPORT_POST_FAIL = 'profile/REPORT_POST_FAIL'

const HIDE_POST = 'profile/HIDE_POST'
const HIDE_POST_SUCCESS = 'profile/HIDE_POST_SUCCESS'
const HIDE_POST_FAIL = 'profile/HIDE_POST_FAIL'

const DELETE_COMMENT = 'profile/DELETE_COMMENT'
const DELETE_COMMENT_SUCCESS = 'profile/DELETE_COMMENT_SUCCESS'
const DELETE_COMMENT_FAIL = 'profile/DELETE_COMMENT_FAIL'

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
  newUpdates: 0,
  sendingComment: false
}

export default function reducer(state = defaultStatePost, action) {
  switch (action.type) {
    case FETCH_POST:
    case FETCH_POST_AND_POSTER:
      return defaultStatePost
    case FETCH_POST_SUCCESS:
    case FETCH_POST_AND_POSTER_SUCCESS:
      let data = action.payload.data
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
        ...(action.type == FETCH_POST_AND_POSTER_SUCCESS && {
          poster: data.poster,
        }),
      }
    case SEND_COMMENT:
    case SEND_SUB_COMMENT:
      return {...state, sendingComment: true}
    case SEND_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.data.comments,
        newUpdates: state.newUpdates + 1,
        sendingComment: false
      }
    case SEND_SUB_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.data.comments,
        sendingComment: false
      }
    case SEND_SUB_COMMENT_FAIL:
    case SEND_COMMENT_FAIL:
      return {
        ...state,
        sendingComment: false
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
    case DELETE_POST:
      return defaultStatePost
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload.data.comments,
        newUpdates: state.newUpdates + 1,
      }
    default:
      return state
  }
}

export function sendComment(content, subCommentId = null) {
  let postId = store.getState().post.id

  if (subCommentId != null) {
    return {
      type: SEND_SUB_COMMENT,
      payload: {
        request: {
          method: 'POST',
          url: `/posts/sub-comment`,
          data: {
            replyTo: subCommentId,
            postId: postId,
            text: content,
          },
        },
      },
    }
  } else {
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

export function fetchPostAndPoster(post_id) {
  return {
    type: FETCH_POST_AND_POSTER,
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

export function deletePost(post_id) {
  return {
    type: DELETE_POST,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/delete`,
        data: {
          postId: post_id,
        },
      },
    },
  }
}

export function reportPost(post_id) {
  return {
    type: REPORT_POST,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/report`,
        data: {
          postId: post_id,
        },
      },
    },
  }
}

export function hidePost(post_id) {
  return {
    type: HIDE_POST,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/hide`,
        data: {
          postId: post_id,
        },
      },
    },
  }
}

export function deleteComment(comment_id) {
  let post_id = store.getState().post.id

  console.log(comment_id)

  return {
    type: DELETE_COMMENT,
    payload: {
      request: {
        method: 'DELETE',
        url: `/posts/comment`,
        data: {
          postId: post_id,
          commentId: comment_id,
        },
      },
    },
  }
}

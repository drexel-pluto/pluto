import { Linking } from 'expo'
import { getMe } from './user.reducer'

// types
export const GET_FRIEND_REQUESTS_IN = 'friend/GET_FRIEND_REQUESTS_IN'
export const GET_FRIEND_REQUESTS_IN_SUCCESS = 'friend/GET_FRIEND_REQUESTS_IN_SUCCESS'
export const GET_FRIEND_REQUESTS_IN_FAIL = 'friend/GET_FRIEND_REQUESTS_IN_FAIL'

export const GET_FRIEND_REQUESTS_OUT = 'friend/GET_FRIEND_REQUESTS_OUT'
export const GET_FRIEND_REQUESTS_OUT_SUCCESS = 'friend/GET_FRIEND_REQUESTS_OUT_SUCCESS'
export const GET_FRIEND_REQUESTS_OUT_FAIL = 'friend/GET_FRIEND_REQUESTS_OUT_FAIL'

export const GET_PUBLIC = 'friend/GET_PUBLIC'
export const GET_PUBLIC_SUCCESS = 'friend/GET_PUBLIC_SUCCESS'
export const GET_PUBLIC_FAIL = 'friend/GET_PUBLIC_FAIL'

export const SEND_FRIEND = 'friend/SEND_FRIEND'
export const SEND_FRIEND_SUCCESS = 'friend/SEND_FRIEND_SUCCESS'
export const SEND_FRIEND_FAIL = 'friend/SEND_FRIEND_FAIL'

export const ACCEPT_FRIEND = 'friend/ACCEPT_FRIEND'
export const ACCEPT_FRIEND_SUCCESS = 'friend/ACCEPT_FRIEND_SUCCESS'
export const ACCEPT_FRIEND_FAIL = 'friend/ACCEPT_FRIEND_FAIL'

export const REJECT_FRIEND = 'friend/REJECT_FRIEND'
export const REJECT_FRIEND_SUCCESS = 'friend/REJECT_FRIEND_SUCCESS'
export const REJECT_FRIEND_FAIL = 'friend/REJECT_FRIEND_FAIL'

export const CANCEL_FRIEND = 'friend/CANCEL_FRIEND'
export const CANCEL_FRIEND_SUCCESS = 'friend/CANCEL_FRIEND_SUCCESS'
export const CANCEL_FRIEND_FAIL = 'friend/CANCEL_FRIEND_FAIL'


// reducer

let defaultStateAddFriend = {
  friendRequests: [],
  sentRequests: [],
  user: {
    username: '',
    profilePicURL: '',
    name: '',
    mutualFriends: [],
  },
  loading: false,
}

export default function reducer(state = defaultStateAddFriend, action) {
  switch (action.type) {
    case GET_PUBLIC_SUCCESS:
      data = action.payload.data
      return {
        ...state,
        user: {
          username: data.username,
          profilePicURL: data.profilePicURL,
          name: data.name,
          mutualFriends: data.mutualFriends,
        },
      }
    case GET_FRIEND_REQUESTS_IN:
    case SEND_FRIEND_FAIL:
      return { ...state, loading: true }
    case GET_FRIEND_REQUESTS_IN_SUCCESS:
      return { ...state, loading: false, friendRequests: action.payload.data }
    case GET_FRIEND_REQUESTS_OUT_SUCCESS:
      return { ...state, loading: false, sentRequests: action.payload.data }
    case SEND_FRIEND_SUCCESS:
      return { ...state, loading: false }
    case SEND_FRIEND_FAIL:
    case GET_FRIEND_REQUESTS_IN_FAIL:
    case ACCEPT_FRIEND_FAIL:
    case REJECT_FRIEND_FAIL:
      return { ...state, loading: false }
    case ACCEPT_FRIEND_SUCCESS:
    case REJECT_FRIEND_SUCCESS:
      let username = action.meta.previousAction.payload.request.data.username
      return {
        ...state,
        friendRequests: state.friendRequests.filter(item => (
          item.from.username !== username
        )),
      }

    case CANCEL_FRIEND_SUCCESS:
      let canceledName = action.meta.previousAction.payload.request.data.username;
      return {
        ...state,
        sentRequests: state.sentRequests.filter(item => (
          item.to.username !== canceledName
        )),
      }
    default:
      return state
  }
}

export function getFriendRequestsIn() {
  return {
    type: GET_FRIEND_REQUESTS_IN,
    payload: {
      request: {
        method: 'GET',
        url: `/user/friends/requests-in`,
      },
    },
  }
}

export function getFriendRequestsOut() {
  return {
    type: GET_FRIEND_REQUESTS_OUT,
    payload: {
      request: {
        method: 'GET',
        url: `/user/friends/requests-out`,
      },
    },
  }
}

export function getFriendRequests() {
  return function(dispatch) {
    dispatch(getFriendRequestsIn());
    dispatch(getFriendRequestsOut());
  }
}

export function sendFriendRequest(username) {
  return {
    type: SEND_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/request`,
        data: {
          username,
        },
      },
    },
  }
}

export function getPublicUser(username) {
  return {
    type: GET_PUBLIC,
    payload: {
      request: {
        method: 'GET',
        url: `/user/public/${username}`,
      },
    },
  }
}

export function addFriend() {
  return function(dispatch, getState) {
    let username = getState().addFriend.user.username
    return dispatch(sendFriendRequest(username))
  }
}


function postAccept(username) {
  return {
    type: ACCEPT_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/request/confirm`,
        data: {
          username,
        },
      },
    },
  }
}

export function acceptFriendRequest(username) {
  return function(dispatch, getState) {
    return dispatch(postAccept(username)).then(() => {
      dispatch(getMe())
    })
  }
}

export function rejectFriendRequest(username) {
  return {
    type: REJECT_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/request/reject`,
        data: {
          username,
        },
      },
    },
  }
}

export function cancelFriendRequest(username) {
  return {
    type: CANCEL_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/request/cancel`,
        data: {
          username,
        },
      },
    },
  }
}
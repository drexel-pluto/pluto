import { Linking } from 'expo'

// types
export const GET_FRIEND_REQUESTS = 'friend/GET_FRIEND_REQUESTS'
export const GET_FRIEND_REQUESTS_SUCCESS = 'friend/GET_FRIEND_REQUESTS_SUCCESS'
export const GET_FRIEND_REQUESTS_FAIL = 'friend/GET_FRIEND_REQUESTS_FAIL'

export const SEND_FRIEND = 'friend/SEND_FRIEND'
export const SEND_FRIEND_SUCCESS = 'friend/SEND_FRIEND_SUCCESS'
export const SEND_FRIEND_FAIL = 'friend/SEND_FRIEND_FAIL'

// reducer

let defaultStateAddFriend = {
  friendRequests: [],
}

export default function reducer(state = defaultStateAddFriend, action) {
  switch (action.type) {
    case GET_FRIEND_REQUESTS_SUCCESS:
      return { ...state, friendRequests: action.payload.data };
    default:
      return state
  }
}

function getFriendRequests(authToken) {
  return {
    type: GET_FRIEND_REQUESTS,
    payload: {
      request: {
        method: 'GET',
        url: `/user/friends/requests-in`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    }
  }
}

export function updateFriendRequests() {
  return function (dispatch, getState) {
    let authToken = getState().user.authToken;
    return dispatch(getFriendRequests(authToken));
  }
}

export function sendFriendRequest(username, authToken) {
  return {
    type: SEND_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/request123`,
        data: {
          username
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    }
  }
}

export function addFriend(username) {
  return function (dispatch, getState) {
    let authToken = getState().user.authToken;

    dispatch(sendFriendRequest(username, authToken));
  }
}
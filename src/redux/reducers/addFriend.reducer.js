import { Linking } from 'expo'

// types
export const GET_FRIEND_REQUESTS = 'friend/GET_FRIEND_REQUESTS'
export const GET_FRIEND_REQUESTS_SUCCESS = 'friend/GET_FRIEND_REQUESTS_SUCCESS'
export const GET_FRIEND_REQUESTS_FAIL = 'friend/GET_FRIEND_REQUESTS_FAIL'

export const SEND_FRIEND = 'friend/SEND_FRIEND'
export const SEND_FRIEND_SUCCESS = 'friend/SEND_FRIEND_SUCCESS'
export const SEND_FRIEND_FAIL = 'friend/SEND_FRIEND_FAIL'

export const SET_FRIEND = 'friend/SET_FRIEND'

// reducer

let defaultStateAddFriend = {
  friendRequests: [],
  user: {
    username: "",
    image: "",
    name: ""
  },
  loading: false
}

export default function reducer(state = defaultStateAddFriend, action) {
  switch (action.type) {
    case SET_FRIEND:
      return { ...state,
        user: {
          username: action.username, 
          image: "https://picsum.photos/id/239/300/300", 
          name: "John Smith" 
        } 
      }
    case GET_FRIEND_REQUESTS:
    case SEND_FRIEND_FAIL:
      return { ...state, loading: true };
    case GET_FRIEND_REQUESTS_SUCCESS:
      return { ...state, loading: false };
    case SEND_FRIEND_SUCCESS:
      return { ...state, loading: false };
    case SEND_FRIEND_FAIL:
    case GET_FRIEND_REQUESTS_FAIL:
      console.log(action.payload);
      return { ...state,  loading: false };
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
        url: `/user/friends/request`,
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

export function addFriend() {
  return function (dispatch, getState) {
    let authToken = getState().user.authToken;
    let username = getState().addFriend.user.username;
    return dispatch(sendFriendRequest(username, authToken));
  }
}

// TODO: get user profile info from db
export function setFriend(username) {
  return {
    type: SET_FRIEND,
    username
  }
}
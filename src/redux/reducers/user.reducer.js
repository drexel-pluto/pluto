import { AsyncStorage } from 'react-native'
import { Linking } from 'expo'
import { setFriend } from './addFriend.reducer'
import * as RootNavigation from '../../navigation'
// types

export const CREATE_USER = 'user/CREATE_USER'
export const CREATE_USER_SUCCESS = 'user/CREATE_USER_SUCCESS'
export const CREATE_USER_FAIL = 'user/CREATE_USER_FAIL'

export const GET_ME = 'user/GET_ME'
export const GET_ME_SUCCESS = 'user/GET_ME_SUCCESS'
export const GET_ME_FAIL = 'user/GET_ME_FAIL'

export const LOGIN = 'user/LOGIN'
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'

export const GET_TOKEN = 'user/GET_TOKEN'
export const SAVE_TOKEN = 'user/SAVE_TOKEN_SUCCESS'
export const REMOVE_TOKEN = 'user/REMOVE_TOKEN'
export const TOKEN_ERROR = 'user/TOKEN_ERROR'

export const LOGOUT = 'user/LOGIN'

export const SET_IS_CREATE = 'user/SET_IS_CREATE'

export const INIT_LINKS = 'user/INIT_LINKS_SUCCESS'

export const RESET_HOME = 'user/RESET_HOME'
export const SET_SWIPE_INDEX = 'user/SET_SWIPE_INDEX'

// reducer

let defaultStateUser = {
  userData: {},
  friends: [],
  groups: [],
  isLoggedIn: false,
  error: '',
  authToken: '',
  isCreate: false,
  swipeIndex: 0,
  key: 0,
}

export default function reducer(state = defaultStateUser, action) {
  switch (action.type) {
    case SET_SWIPE_INDEX:
      return {...state, swipeIndex: action.index}
    case RESET_HOME:
      return {...state, key: state.key + 1, swipeIndex: 0 }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.payload.data.authToken,
      }
    case CREATE_USER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error.response.data
          ? action.error.response.data.errMessage
          : 'error',
      }
    case GET_TOKEN:
      return { ...state, authToken: action.token }
    case SAVE_TOKEN:
      return { ...state, authToken: action.token }
    case LOGOUT:
    case REMOVE_TOKEN:
      return {
        ...state,
        authToken: '',
        isLoggedIn: false,
        userData: defaultStateUser.userData,
      }
    case TOKEN_ERROR:
      return { ...state, error: action.error, isLoggedIn: false }
    case GET_ME_SUCCESS:
      const data = action.payload.data

      friends = []
      groups = []

      // create group which contains everyone and yourself
      // and prepend to groups var
      myUserData = {
        _id: data._id,
        email: data.email,
        name: data.name,
        profilePicURL: data.profilePicURL,
        username: data.username,
      }
      everyone_members = []
      everyone_memberIds = []
      data.friends.forEach(friend => {
        if (friend.friend) {
          everyone_members.push(friend.friend)
          everyone_memberIds.push(friend.friend._id)
        }
      })
      everyone = {
        __v: 0,
        _id: -1,
        createdAt: 'today',
        memberIds: [myUserData._id, ...everyone_memberIds],
        members: [myUserData, ...everyone_members],
        owner: data._id,
        title: 'everyone',
      }
      groups = [everyone, ...data.groups]

      // process friends data for group info
      data.friends.forEach(element => {
        let friend = { ...element }
        let friend_groups = []

        for (let i in groups) {
          if (
            groups[i].members.filter(e => e._id == friend.friend._id).length > 0
          ) {
            friend_groups.push(parseInt(i))
          }
        }

        friend_groups.push(0) // including everyone group

        friend.friend.groups = friend_groups
        friends.push(friend)
      })

      return {
        ...state,
        userData: {
          username: data.username,
          email: data.email,
          id: data._id,
          gender: data.gender,
          name: data.name,
          profilePicURL: data.profilePicURL,
        },
        friends,
        groups,
        key: state.key + 1,
        swipeIndex: 0
      }
    case SET_IS_CREATE:
      return {
        ...state,
        isCreate: action.bool,
      }
    default:
      return state
  }
}

// actions

export function login(user) {
  return {
    type: LOGIN,
    payload: {
      request: {
        method: 'POST',
        url: `/login`,
        data: user,
      },
    },
  }
}

export function setIsCreate(bool) {
  return {
    type: SET_IS_CREATE,
    bool,
  }
}

export function createProfile(user, profilePic) {
  const json = JSON.stringify(user)
  let form = new FormData()
  form.append('postParams', json)
  if (profilePic != '') {
    form.append(
      'media',
      {
        uri: profilePic,
        name: 'prof.jpg',
        type: 'image/jpeg',
      },
      'prof.jpg'
    )
  }

  return {
    type: CREATE_USER,
    payload: {
      request: {
        method: 'POST',
        url: `/user/create`,
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    },
  }
}

export const getToken = token => ({
  type: GET_TOKEN,
  token,
})

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token,
})

export const removeToken = () => ({
  type: REMOVE_TOKEN,
})

export const tokenError = error => ({
  type: REMOVE_TOKEN,
  error,
})

const storageKey = 'userToken'

export function getUserToken () { 
  return (dispatch) =>
  AsyncStorage.getItem(storageKey)
    .then(data => {
      dispatch(getToken(data))
    })
    .catch(err => {
      dispatch(tokenError(err.message || 'ERROR'))
    })
}

export function saveUserToken (token) {
  return (dispatch) =>
    AsyncStorage.setItem(storageKey, token)
      .then(data => {
        dispatch(saveToken(token))
      })
      .catch(err => {
        dispatch(tokenError(err.message || 'ERROR'))
      })
}
export function removeUserToken () { 
  return (dispatch) =>
    AsyncStorage.removeItem(storageKey)
      .then(data => {
        dispatch(removeToken(data))
      })
      .catch(err => {
        dispatch(tokenError(err.message || 'ERROR'))
      })
}

export function getMe() {
  return {
    type: GET_ME,
    payload: {
      request: {
        method: 'GET',
        url: `/user`,
      },
    },
  }
}

export function logout() {
  return function(dispatch) {
    dispatch(removeUserToken())
  }
}

export function init() {
  return function(dispatch, getState) {
    return dispatch(getUserToken()).then(() =>
      dispatch(getMe())
    )
  }
}

function initLinks() {
  return {
    type: INIT_LINKS,
  }
}

export function initLinkListener() {
  return function(dispatch, getState) {
    Linking.addEventListener('url', dat => {
      let { path, queryParams } = Linking.parse(dat.url)
      if (path == 'addfriend') {
        dispatch(setFriend(queryParams.username))
        RootNavigation.navigate('UserModal')
      }
    })

    Linking.getInitialURL().then(url => {
      let { path, queryParams } = Linking.parse(url)
      if (path == 'addfriend') {
        dispatch(setFriend(queryParams.username))
        RootNavigation.navigate('UserModal')
      }
    })

    return dispatch(initLinks())
  }
}


export function resetHome() {
  return {
    type: RESET_HOME,
  }
}

export function setSwipeIndex(i) {
  return {
    type: SET_SWIPE_INDEX,
    index: i
  }
}

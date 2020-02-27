import { AsyncStorage } from 'react-native'
import { Linking } from 'expo'
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

// reducer

let defaultStateUser = {
  userData: {},
  friends: [],
  groups: [],
  isLoggedIn: false,
  error: '',
  authToken: '',
  isCreate: false,
}

export default function reducer(state = defaultStateUser, action) {
  switch (action.type) {
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

      data.friends.forEach(element => {
        let friend = { ...element }
        let groups = []

        for (let i in data.groups) {
          if (
            data.groups[i].members.filter(e => e._id == friend.friend._id)
              .length > 0
          ) {
            groups.push(parseInt(i))
          }
        }

        friend.friend.groups = groups
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
          profilePicURL: data.profilePicURL
        },
        friends,
        groups: data.groups,
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

export function createProfile(user) {
  return {
    type: CREATE_USER,
    payload: {
      request: {
        method: 'POST',
        url: `/user/create`,
        data: user,
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

export const getUserToken = () => dispatch =>
  AsyncStorage.getItem(storageKey)
    .then(data => {
      dispatch(getToken(data))
    })
    .catch(err => {
      dispatch(tokenError(err.message || 'ERROR'))
    })

export const saveUserToken = token => dispatch =>
  AsyncStorage.setItem(storageKey, token)
    .then(data => {
      dispatch(saveToken(token))
    })
    .catch(err => {
      dispatch(tokenError(err.message || 'ERROR'))
    })

export const removeUserToken = () => dispatch =>
  AsyncStorage.removeItem(storageKey)
    .then(data => {
      dispatch(removeToken(data))
    })
    .catch(err => {
      dispatch(tokenError(err.message || 'ERROR'))
    })

export function getMe(authToken) {
  return {
    type: GET_ME,
    payload: {
      request: {
        method: 'GET',
        url: `/user`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
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
      dispatch(getMe(getState().user.authToken))
    )
  }
}

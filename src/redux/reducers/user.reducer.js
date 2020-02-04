import { AsyncStorage } from 'react-native'

// types

export const CREATE_USER = 'user/CREATE_USER'
export const CREATE_USER_SUCCESS = 'user/CREATE_USER_SUCCESS'
export const CREATE_USER_FAIL = 'user/CREATE_USER_FAIL'

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
      console.log(action.error.message)
      return { ...state, isLoggedIn: false, error: action.error.message }
    case GET_TOKEN:
      return { ...state, authToken: action.token }
    case SAVE_TOKEN:
      return { ...state, authToken: action.token }
    case REMOVE_TOKEN:
      return { ...state, authToken: '', isLoggedIn: false }
    case TOKEN_ERROR:
      return { ...state, error: action.error, isLoggedIn: false }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: defaultStateUser.userData,
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

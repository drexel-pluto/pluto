export const CREATE_USER = 'user/CREATE_USER'
export const CREATE_USER_SUCCESS = 'user/CREATE_USER_SUCCESS'
export const CREATE_USER_FAIL = 'user/CREATE_USER_FAIL'

export const LOGIN = 'user/LOGIN'
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'

export const LOGOUT = 'user/LOGIN'

export const SET_IS_CREATE = 'user/SET_IS_CREATE'

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

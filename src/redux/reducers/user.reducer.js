export const LOGIN = 'user/LOGIN'
export const LOGOUT = 'user/LOGOUT'

let defaultStateUser = {
  userData: {},
  isLoggedIn: false,
}

export default function reducer(state = defaultStateUser, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: defaultStateUser.userData,
      }
    default:
      return state
  }
}

export function login() {
  return {
    type: LOGIN,
  }
}

export function logout() {
  return {
    type: LOGIN,
  }
}

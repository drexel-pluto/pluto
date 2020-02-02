export const CREATE_USER = 'user/CREATE_USER'
export const CREATE_USER_SUCCESS = 'user/CREATE_USER_SUCCESS'
export const CREATE_USER_FAIL = 'user/CREATE_USER_FAIL'

export const LOGIN = 'user/LOGIN'
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'user/LOGIN_FAIL'

export const LOGOUT = 'user/LOGIN'

let defaultStateUser = {
  userData: {},
  isLoggedIn: false,
  error: '',
  authToken: '',
}

export default function reducer(state = defaultStateUser, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('router success!')
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.payload.data.authToken,
      }
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, error: action.error.message }
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

// export function createUser(user) {
// 	return {
// 		type: CREATE_USER,
// 		payload: {
// 			request: {
// 				method: "POST",
// 				url: `/user/create`,
// 				data: user
// 			}
// 		}
// 	};
// }

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

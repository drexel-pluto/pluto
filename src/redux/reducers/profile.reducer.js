import store from '../store'

const FETCH_USER = 'profile/FETCH_USER'
const FETCH_USER_SUCCESS = 'profile/FETCH_USER_SUCCESS'
const FETCH_USER_FAIL = 'profile/FETCH_USER_FAIL'

let defaultStateProfile = {
  id: '',
  image: '',
  username: '',
  name: '',
  gender: '',
  profilePicURL: '',
  loading: true,
  posts: [],
}

export default function reducer(state = defaultStateProfile, action) {
  switch (action.type) {
    case FETCH_USER:
      return defaultStateProfile
    case FETCH_USER_SUCCESS:
      data = action.payload.data
      return {
        ...state,
        id: data._id,
        image: '',
        username: data.username,
        gender: data.gender,
        name: data.name,
        posts: data.posts,
        profilePicURL: data.profilePicURL,
        loading: false,
      }
    case FETCH_USER_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}

export function fetchUser(user_id) {
  let token = store.getState().user.authToken

  return {
    type: FETCH_USER,
    payload: {
      request: {
        method: 'POST',
        url: `/user`,
        data: {
          userId: user_id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  }
}

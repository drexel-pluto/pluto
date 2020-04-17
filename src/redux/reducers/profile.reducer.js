const FETCH_USER = 'profile/FETCH_USER'
const FETCH_USER_SUCCESS = 'profile/FETCH_USER_SUCCESS'
const FETCH_USER_FAIL = 'profile/FETCH_USER_FAIL'

const REMOVE_FRIEND = 'profile/REMOVE_FRIEND'
const REMOVE_FRIEND_SUCCESS = 'profile/REMOVE_FRIEND_SUCCESS'
const REMOVE_FRIEND_FAIL = 'profile/REMOVE_FRIEND_FAIL'

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
      return {...defaultStateProfile, id: action.payload.request.data.userId }
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
  return {
    type: FETCH_USER,
    payload: {
      request: {
        method: 'POST',
        url: `/user`,
        data: {
          userId: user_id,
        },
      },
    },
  }
}

export function removeFriend(username) {
  return {
    type: REMOVE_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/remove`,
        data: {
          username
        },
      },
    },
  }
}
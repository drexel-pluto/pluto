const FETCH_USER = 'profile/FETCH_USER'
const FETCH_USER_SUCCESS = 'profile/FETCH_USER_SUCCESS'
const FETCH_USER_FAIL = 'profile/FETCH_USER_FAIL'

const REMOVE_FRIEND = 'profile/REMOVE_FRIEND'
const REMOVE_FRIEND_SUCCESS = 'profile/REMOVE_FRIEND_SUCCESS'
const REMOVE_FRIEND_FAIL = 'profile/REMOVE_FRIEND_FAIL'

 const UPDATEPIC = 'profile/UPDATEPIC'
 const UPDATEPIC_SUCCESS = 'profile/UPDATEPIC_SUCCESS'
 const UPDATEPIC_FAIL = 'profile/UPDATEPIC_FAIL'

 const UPDATEPROF = 'profile/UPDATEPROF'
 const UPDATEPROF_SUCCESS = 'profile/UPDATEPROF_SUCCESS'
 const UPDATEPROF_FAIL = 'profile/UPDATEPROF_FAIL'

let defaultStateProfile = {
  id: '',
  image: '',
  username: '',
  name: '',
  gender: '',
  bio: '',
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
        bio: data.bio,
        profilePicURL: data.profilePicURL,
        loading: false,
      }
    case UPDATEPIC_SUCCESS:
    case UPDATEPROF_SUCCESS:
      data = action.payload.data
      return {
        ...state,
        username: data.username,
        name: data.name,
        bio: data.bio,
        profilePicURL: data.profilePicURL,
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

export function removeFriend(friendId) {
  return {
    type: REMOVE_FRIEND,
    payload: {
      request: {
        method: 'POST',
        url: `/user/friends/remove`,
        data: {
          friendId
        },
      },
    },
  }
}


function updateProfilePic(uri) {
  let form = new FormData()
  
  form.append(
    'media',
    {
      uri: uri,
      name: 'prof.jpg',
      type: 'image/jpeg',
    },
    'prof.jpg'
  )

  return {
    type: UPDATEPIC,
    payload: {
      request: {
        method: 'PUT',
        url: `/user/profile-picture`,
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    },
  }
}

function updateProfileDetail(field, newValue) {
  return {
    type: UPDATEPROF,
    payload: {
      request: {
        method: 'POST',
        url: `/user/update`,
        data: {
          field,
          newValue
        },
      },
    },
  }
}

export function updateProfile(newDat) {
  return function (dispatch) {

    promises = [];

    Object.keys(newDat).forEach(key => {
      if (key == "imageUri") {
        promises.push(dispatch(updateProfilePic(newDat[key])))
      } else {
        promises.push(dispatch(updateProfileDetail(key, newDat[key])))
      }
    });

    return Promise.all(promises);
  }
}
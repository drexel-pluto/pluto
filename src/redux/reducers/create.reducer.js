import update from 'react-addons-update'

// types

export const SET_RECIPIENT = 'create/SET_RECIPIENT'

export const SEND_POST = 'create/SEND_POST'
export const SEND_POST_SUCCESS = 'create/SEND_POST_SUCCESS'
export const SEND_POST_FAIL = 'create/SEND_POST_FAIL'

export const ADD_IMAGE = 'create/ADD_IMAGE'
export const REMOVE_IMAGE = 'create/REMOVE_IMAGE'

// reducer

let defaultStateCreate = {
  recipients: {},
  media: [],
  pendingSubmission: false,
}

export default function reducer(state = defaultStateCreate, action) {
  switch (action.type) {
    case ADD_IMAGE:
      if (state.media.some(item => item.uri === action.data.uri)) {
        return state
      }
      return { ...state, media: [...state.media, action.data] }
    case REMOVE_IMAGE:
      console.log(action.index)
      console.log(state.media.splice(action.index, 1))
      return { ...state, media: state.media.splice(action.index, 1) }
    case SET_RECIPIENT:
      return update(state, {
        recipients: {
          [action.recipient]: {
            $set: action.value,
          },
        },
      })
    case SEND_POST:
      return { ...state, pendingSubmission: true }
    case SEND_POST_FAIL:
      console.log(action)
      return { ...state, pendingSubmission: false }
    case SEND_POST_SUCCESS:
      console.log(action)
      return { ...defaultStateCreate }
    default:
      return state
  }
}

// actions

export function setRecipient(recipientId, value) {
  return {
    type: SET_RECIPIENT,
    recipient: recipientId,
    value: value,
  }
}

export function sendPost(postParams, media, token) {
  const json = JSON.stringify(postParams)
  let form = new FormData()
  form.append('postParams', json)

  for (let i in media) {
    console.log(media[i].type, media[i].type == 'image')
    form.append(
      `media[]`,
      {
        uri: media[i].uri,
        name: media[i].type == 'image' ? `img_${i}.jpg` : `img_${i}.mov`,
        type: media[i].type == 'image' ? 'image/jpeg' : 'video/*',
      },
      media[i].type == 'image' ? `img_${i}.jpg` : `img_${i}.mov`
    )
  }

  return {
    type: SEND_POST,
    payload: {
      request: {
        method: 'POST',
        url: `/posts/create`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        data: form,
      },
    },
  }
}

export function submitPost(postText) {
  return function(dispatch, getState) {
    var audienceIds = []

    var ids = Object.keys(getState().create.recipients)

    for (let id of ids) {
      if (getState().create.recipients[id]) {
        audienceIds.push(id)
      }
    }

    var params = {
      text: postText,
      daysUntilArchive: 10,
      audienceIds,
      tag: '',
    }

    var media = getState().create.media

    return dispatch(sendPost(params, media, getState().user.authToken))
  }
}

export function addImage(data) {
  return {
    type: ADD_IMAGE,
    data,
  }
}

export function removeImage(index) {
  return {
    type: REMOVE_IMAGE,
    index,
  }
}

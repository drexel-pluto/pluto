import update from 'react-addons-update'

// types

export const SET_RECIPIENT = 'create/SET_RECIPIENT'
export const RESET_RECIPIENT = 'create/RESET_RECIPIENT'

export const SEND_POST = 'create/SEND_POST'
export const SEND_POST_SUCCESS = 'create/SEND_POST_SUCCESS'
export const SEND_POST_FAIL = 'create/SEND_POST_FAIL'

export const ADD_IMAGE = 'create/ADD_IMAGE'
export const REMOVE_IMAGE = 'create/REMOVE_IMAGE'
export const RESET_MEDIA = 'create/RESET_MEDIA'

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
      // console.log(action.index)
      // console.log(state.media.splice(action.index, 1)
      var updatedMedia = [...state.media]
      updatedMedia.splice(action.index, 1)
      return { ...state, media: [...updatedMedia] }
    case RESET_MEDIA:
      return { ...state, media: [] }
    case SET_RECIPIENT:
      return update(state, {
        recipients: {
          [action.recipient]: {
            $set: action.value,
          },
        },
      })
    case RESET_RECIPIENT:
      return { ...state, recipients: {} }
    case SEND_POST:
      return { ...state, pendingSubmission: true }
    case SEND_POST_FAIL:
      return { ...state, pendingSubmission: false }
    case SEND_POST_SUCCESS:
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

export function resetRecipient() {
  return { type: RESET_RECIPIENT }
}

export function sendPost(postParams, media) {
  const json = JSON.stringify(postParams)
  let form = new FormData()
  form.append('postParams', json)

  for (let i in media) {
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
          'Content-Type': 'multipart/form-data',
        },
        data: form,
      },
    },
  }
}

export function submitPost(postText, postTags) {
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
      tags: postTags,
    }

    var media = getState().create.media

    return dispatch(sendPost(params, media))
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

export function resetMedia() {
  return {
    type: RESET_MEDIA,
  }
}

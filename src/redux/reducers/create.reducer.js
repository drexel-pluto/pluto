import update from 'react-addons-update'

// types

export const SET_RECIPIENT = 'create/SET_RECIPIENT'

export const SEND_POST = 'create/SEND_POST'
export const SEND_POST_SUCCESS = 'create/SEND_POST_SUCCESS'
export const SEND_POST_FAIL = 'create/SEND_POST_FAIL'

// reducer

let defaultStateCreate = {
  recipients: {},
  pendingSubmission: false,
}

export default function reducer(state = defaultStateCreate, action) {
  switch (action.type) {
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

export function sendPost(postParams, token) {
  const json = JSON.stringify(postParams)
  let form = new FormData()
  form.append('postParams', json)

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

    dispatch(sendPost(params, getState().user.authToken))
  }
}

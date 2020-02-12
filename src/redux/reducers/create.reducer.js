import update from 'react-addons-update'

// types

export const SET_RECIPIENT = 'create/SET_RECIPIENT'

export const SEND_POST = 'create/SEND_POST'
export const SEND_POST_SUCCESS = 'create/SEND_POST_SUCCESS'
export const SEND_POST_FAIL = 'create/SEND_POST_FAIL'

// reducer

let defaultStateCreate = {
  recipients: {},
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
  var params = {
    text: postText,
    daysUntilArchive: 10,
    audienceIds: ['5e0d6a06e2765d1ab2e7b521'],
    tag: 'wedding',
  }
  return function(dispatch, getState) {
    dispatch(sendPost(params, getState().user.authToken))
  }
}

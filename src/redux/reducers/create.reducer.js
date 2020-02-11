import update from 'react-addons-update'

// types

export const SET_RECIPIENT = 'create/SET_RECIPIENT'

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

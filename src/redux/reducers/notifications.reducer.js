
export const GET_NOTIFICATIONS = 'notifications/GET_NOTIFICATIONS'
export const GET_NOTIFICATIONS_SUCCESS = 'notifications/GET_NOTIFICATIONS_SUCCESS'
export const GET_NOTIFICATIONS_FAIL = 'notifications/GET_NOTIFICATIONS_FAIL'

let defaultStateNotifications = {
  loading: true,
  notifications: [],
}

export default function reducer(state = defaultStateNotifications, action) {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return {...defaultStateNotifications};
    case GET_NOTIFICATIONS_SUCCESS:
      const data = action.payload.data;
      console.log(data);
      return {...state, loading: false, notifications: data}

    default:
      return state;
  }
}


export function getNotifications() {
  return {
    type: GET_NOTIFICATIONS,
    payload: {
      request: {
        method: 'GET',
        url: `/user/notifications`,
      },
    },
  }
}

import { getFriendRequests } from './addFriend.reducer'
import { newToast } from './toast.reducer'
import * as RootNavigation from '../../navigation'

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

export function pushNotificationListener(notification) {
  return function (dispatch) {
    dispatch(getFriendRequests());

    let onTap = notification.data.postId
      ? (dismiss) => {
        RootNavigation.navigate('Post', {
          postId: notification.data.postId
        });
        dismiss();
      }
      : (dismiss) => {
        RootNavigation.navigate('Profile', {
          userId: notification.data.fromId
        });
        dismiss();
      }

    if (notification.origin == "received" && notification.data.body) {
      dispatch(newToast({
        content: notification.data.body,
        onTap
      }));
    } else if (notification.origin == "selected") {
      //goto post or user
    }
  }
}

export const ADD_TOAST = 'toast/ADD_TOAST'
export const HIDE_TOAST = 'toast/HIDE_TOAST'
export const REMOVE_TOAST = 'toast/REMOVE_TOAST'


export default function reducer(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_TOAST:
      return [payload, ...state];

    case HIDE_TOAST:
      return state.map(toast => {
        if (toast.id === payload) {
          return {...toast, hide: true}
        };
        return toast;
      });

    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== payload);

    default:
      return state;
  }
}

export function removeToast(id) {
  return function (dispatch) {
    dispatch({
      payload: id,
      type: HIDE_TOAST
    })

    setTimeout(() => {
      dispatch({
        payload: id,
        type: REMOVE_TOAST
      })
    }, 500);
  }
}

export function newToast(options = {}, dur = 2000) {
  return function (dispatch) {
    let toast = createToast(options);
    dispatch({
      payload: toast,
      type: ADD_TOAST
    });

    setTimeout(() => {
      dispatch(removeToast(toast.id))
    }, dur);
  }
}

// mini toast factory

let id = 0;

const defaultOptions = {
  title: "",
  content: "",
  isErr: false,
  onTap: () => {}
};

function createToast(options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++,
    hide: false
  }
}
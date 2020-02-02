import { createStore, compose, applyMiddleware } from 'redux'
// import someReduxMiddleware from 'some-redux-middleware';
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const client = axios.create({
  baseURL: 'https://drexel-pluto.herokuapp.com/api',
  responseType: 'json',
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(axiosMiddleware(client), ReduxThunk))
)

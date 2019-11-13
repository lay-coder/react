import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as app from './app/reducer'
import * as user from './user/reducer'

const stroe = createStore(
  combineReducers({ ...app, ...user }),
  applyMiddleware(thunk)
)
export default stroe
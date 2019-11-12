import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as app from './app/reducer'

const stroe = createStore(
  combineReducers({ ...app }),
  applyMiddleware(thunk)
)
export default stroe
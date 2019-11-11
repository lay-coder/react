import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const stroe = createStore(
  combineReducers({}),
  applyMiddleware(thunk)
)
export default stroe
import * as user from './action-type'
import { getToken, setToken } from 'utils/auth'


let _token = getToken()
export const token = (state = _token, action) => {
  switch (action.type) {
    case user.TOKEN:
      setToken(action.data)
      return action.data
    default:
      return state
  }
}
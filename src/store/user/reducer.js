import * as user from './action-type'
import { getToken, setToken, setUserMenu, getUserMenu } from 'utils/auth'


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
let _userMenu = getUserMenu()
export const userMenu = (state = _userMenu, action) => {
  switch (action.type) {
    case user.MENU:
      setUserMenu(action.data)
      return action.data
    default:
      return state
  }
}
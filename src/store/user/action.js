import * as user from './action-type'

export const setToken = data => ({ type: user.TOKEN, data })
export const setUserMenu = data => ({ type: user.MENU, data })
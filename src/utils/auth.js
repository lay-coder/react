import storage from 'utils/storage'

const TokenKey = 'Libra-User-Token'
const UserInfoKey = 'Libra-User-Info'
const UserMenuKey = 'Libra-User-Menu'

const getToken = () => {
  const token = storage.getItem(TokenKey)
  if (token) {
    return storage.getItem(TokenKey).slice(1)
  } else {
    return null
  }
}
const setToken = (token: string) => {
  return storage.setItem(TokenKey, '_' + token)
}

const getUserInfo = () => {
  return storage.getItem(UserInfoKey)
}
const setUserInfo = (userInfo) => {
  return storage.setItem(UserInfoKey, userInfo)
}

const getUserMenu = () => {
  return storage.getItem(UserMenuKey)
}
const setUserMenu = (userMenu) => {
  return storage.setItem(UserMenuKey, userMenu)
}

const logoutAndRemove = () => {
  localStorage.removeItem(TokenKey)
  localStorage.removeItem(UserInfoKey)
  localStorage.removeItem(UserMenuKey)
}
export {
  getToken,
  setToken,
  getUserInfo,
  setUserInfo,
  getUserMenu,
  setUserMenu,
  logoutAndRemove
}
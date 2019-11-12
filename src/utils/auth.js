import storage from 'utils/storage'

const TokenKey = 'Libra-User-Token'

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

export {
  getToken,
  setToken
}
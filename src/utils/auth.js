const getToken = () => {
  const token = localStorage.getItem('Libra-User-Token')
  if (token) {
    return localStorage.getItem('Libra-User-Token').slice(1)
  } else {
    return null
  }
}
export { getToken }
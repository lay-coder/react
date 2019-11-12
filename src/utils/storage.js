const storage = {
  setItem(key, value) {
    if (value) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  getItem(key) {
    const value = localStorage.getItem(key)
    if (value && value !== 'undefined' && value !== 'null') {
      return JSON.parse(value)
    }
    return null
  },
}

export default storage
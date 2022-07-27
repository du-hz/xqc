
const Storage = {
  // 存
  set (key, val) {
    window.localStorage.setItem(key, val)
  },
  // 取
  get (key) {
    return window.localStorage.getItem(key)
  },
  // 删
  remove (key) {
    window.localStorage.removeItem(key)
  }
}

export default Storage

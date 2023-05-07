const TOKEN = 'token'

export default class Token {
  static get() {
    return localStorage.getItem(TOKEN)
  }

  static set(token: string) {
    localStorage.setItem(TOKEN, token)
  }

  static clear() {
    localStorage.removeItem(TOKEN)
  }
}
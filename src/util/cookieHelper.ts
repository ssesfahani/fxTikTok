import { Cookie } from 'set-cookie-parser'

export default class CookieHelper {
  cookies: Cookie[]

  constructor(initatior: Cookie[]) {
    this.cookies = initatior || []
  }
  setCookies(cookies: Cookie[]) {
    Object.assign(this.cookies, cookies)
  }
  deleteCookies(cookies: Cookie[]) {
    for (const cookie of cookies) {
      const index = this.cookies.findIndex((c) => c.name === cookie.name)
      if (index !== -1) {
        this.cookies.splice(index, 1)
      }
    }
  }
  getUpdatingCookies() {
    return this.cookies
  }
  getCookies() {
    return Object.freeze({ ...this.cookies })
  }
  getCookiesAsString() {
    return this.cookies
      .map((cookie) => {
        return `${cookie.name}=${cookie.value}`
      })
      .join('; ')
  }
}

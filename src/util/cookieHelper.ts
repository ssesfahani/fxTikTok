import { Cookie } from "set-cookie-parser";

export default class CookieHelper {
    cookies: Cookie[];

    constructor(initatior: Cookie[]) {
        this.cookies = initatior || [];
    }
    setCookies(cookies: Cookie[]) {
        Object.assign(this.cookies, cookies);
    }
    deleteCookies(cookies: Cookie[]) {
        for (const cookie of cookies) {
            const index = this.cookies.findIndex((c) => c.name === cookie.name);
            if (index !== -1) {
                this.cookies.splice(index, 1);
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
        /*
        this.cookies
        [                                                                                                                                                                       
  {                                                                                                                                                                             
    name: 'ttwid',                                                                                                                                                              
    value: '1|8WN5g_4UuJAXRCCDkpvHVs1VcAxDbE1YbchrWF9WLpQ|1716658463|7e41f1aa8f1a95fa8a4d5e4e56dc24eb6c05bbff5e66db010e6cd7f543a5a463',
    domain: '.tiktok.com',
    path: '/',
    expires: 2024-11-21T17:34:23.000Z,
    'httponly, tt_csrf_token': '3fBpsXXj-X7xQXEbXEchtyGe7ZxGbSzQGJHo',
    sameSite: 'lax',
    secure: true,
    'httponly, tt_chain_token': 'ATA0mqdlbe36/vayBw/R2g==',
    httpOnly: true
  }
]
        */
        return this.cookies.map((cookie) => {
            console.log(cookie)
            return `${cookie.name}=${cookie.value}`
        }).join("; ");
    }               
}
import { WebJSONResponse, ItemStruct } from '../types/Web'
import Cookie from '../util/cookieHelper'
import cookieParser from 'set-cookie-parser'

const cookie = new Cookie([])

export async function grabAwemeId(videoId: string): Promise<String | Error> {
  // https://vm.tiktok.com/ZMJmVWVpL/
  const res = await fetch('https://vm.tiktok.com/' + videoId)
  const url = new URL(res.url)

  const awemeIdPattern = /\/@[\w\d_.]+\/(video|photo)\/(\d{19})/
  const match = url.pathname.match(awemeIdPattern)

  if (match) {
    return match[2]
  } else {
    throw new Error('Could not find awemeId')
  }
}

export async function scrapeVideoData(awemeId: string, author?: string): Promise<ItemStruct | Error> {
  console.log('before', cookie.getUpdatingCookies())
  const res = await fetch(`https://www.tiktok.com/@${author || 'i'}"/video/${awemeId}`, {
    method: 'GET',
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
      Cookie: cookie.getCookiesAsString()
    },
    cf: {
      cacheEverything: true,
      cacheTtlByStatus: { '200-299': 86400, 404: 1, '500-599': 0 }
    }
  })

  console.log('string', cookie.getCookiesAsString())
  console.log(res.headers)
  let cookies = cookieParser(res.headers.get('set-cookie')!)
  cookie.setCookies(cookies)

  const html = await res.text()

  try {
    const resJson = html
      .split('<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">')[1]
      .split('</script>')[0]
    const json: WebJSONResponse = JSON.parse(resJson)

    //console.log(Object.keys(json["__DEFAULT_SCOPE__"]));
    if (
      !json['__DEFAULT_SCOPE__']['webapp.video-detail'] ||
      json['__DEFAULT_SCOPE__']['webapp.video-detail'].statusCode == 10204
    )
      throw new Error('Could not find video data')
    const videoInfo = json['__DEFAULT_SCOPE__']['webapp.video-detail']['itemInfo']['itemStruct']
    //console.log(videoInfo)

    return videoInfo
  } catch (err) {
    console.log(err)
    throw new Error('Could not parse video info')
  }
}

import { Hono } from 'hono'
import { scrapeLiveData, scrapeVideoData } from './services/tiktok'
import { grabAwemeId } from './services/tiktok'
import { VideoResponse, ErrorResponse, LiveResponse, WarningResponse } from './templates'
import { returnHTMLResponse } from './util/responseHelper'
import { env } from 'hono/adapter'
import { generate, respondAlternative, awemeIdPattern, awemeLinkPattern } from './generate'

const app = new Hono()

// Credit: https://github.com/FixTweet/FxTwitter/blob/main/src/constants.ts#L24
const BOT_REGEX =
  /bot|facebook|embed|got|firefox\/92|firefox\/38|curl|wget|go-http|yahoo|generator|whatsapp|revoltchat|preview|link|proxy|vkshare|images|analyzer|index|crawl|spider|python|cfnetwork|node|mastodon|http\.rb|ruby|bun\/|fiddler|iframely|steamchaturllookup/i

app.get('/', () => {
  return new Response('', {
    status: 302,
    headers: {
      Location: 'https://github.com/okdargy/fxtiktok'
    }
  })
})

async function handleShort(c: any): Promise<Response> {
  const { videoId } = c.req.param()
  let id = videoId.split('.')[0] // for .mp4, .webp, etc.

  const res = await fetch('https://vm.tiktok.com/' + id)
  const link = new URL(res.url)

  // Clean any tracking parameters
  link.search = ''

  // If the user agent is a bot, redirect to the TikTok page
  if (!BOT_REGEX.test(c.req.header('User-Agent') || '')) {
    return new Response('', {
      status: 302,
      headers: {
        Location: 'https://www.tiktok.com' + link.pathname
      }
    })
  }

  // Now, we need to check if the video is a livestream or a photo/video
  if (link.pathname.includes('/video') || link.pathname.includes('/photo')) {
    return handleVideo(c)
  } else if (link.pathname.includes('/live')) {
    return handleLive(c)
  } else {
    const responseContent = await ErrorResponse('Invalid vm link', c)
    return returnHTMLResponse(responseContent, 400)
  }
}

async function handleVideo(c: any): Promise<Response> {
  const { videoId } = c.req.param()
  const { addDesc, hq } = c.req.query()

  let id = videoId.split('.')[0] // for .mp4, .webp, etc.

  // If the user agent is a bot, redirect to the TikTok page
  if (!BOT_REGEX.test(c.req.header('User-Agent') || '')) {
    const url = new URL(c.req.url)

    // Remove tracking parameters
    url.search = ''

    return new Response('', {
      status: 302,
      headers: {
        Location: 'https://www.tiktok.com' + url.pathname
      }
    })
  }

  if (!awemeIdPattern.test(id)) {
    const url = await grabAwemeId(id)
    const match = url.pathname.match(awemeLinkPattern)

    if (match) {
      id = match[3]
    } else {
      const responseContent = await ErrorResponse('Invalid video ID', c)
      return returnHTMLResponse(responseContent, 400)
    }
  }

  try {
    const videoInfo = await scrapeVideoData(id)

    if (videoInfo instanceof Error) {
      const responseContent = await ErrorResponse((videoInfo as Error).message, c)
      return returnHTMLResponse(responseContent, 500)
    }

    const url = new URL(c.req.url)
    const extensions = ['mp4', 'png', 'jpg', 'jpeg', 'webp', 'webm']

    if (
      url.hostname.includes('d.') ||
      c.req.query('isDirect') === 'true' ||
      extensions.some((suffix) => c.req.path.endsWith(suffix))
    ) {
      const { OFF_LOAD } = env(c) as { OFF_LOAD: string }
      const offloadUrl = OFF_LOAD || 'https://offload.tnktok.com'

      if (videoInfo.video.duration > 0) {
        if ((hq || 'false').toLowerCase() == 'true' || url.hostname.includes('hq.')) {
          return new Response('', {
            status: 302,
            headers: {
              Location: offloadUrl + '/generate/video/' + videoInfo.id + '?hq=true'
            }
          })
        } else {
          return new Response('', {
            status: 302,
            headers: {
              Location: offloadUrl + '/generate/video/' + videoInfo.id
            }
          })
        }
      } else {
        return new Response('', {
          status: 302,
          headers: {
            Location: offloadUrl + '/generate/image/' + videoInfo.id
          }
        })
      }
    } else {
      if (videoInfo.isContentClassified === true) {
        const responseContent = await WarningResponse('Sensitive Content', 'the video being age-restricted', c)
        return returnHTMLResponse(responseContent, 200)
      }

      const responseContent = await VideoResponse(
        videoInfo,
        (addDesc || 'false').toLowerCase() == 'true' || url.hostname.includes('a.'),
        (hq || 'false').toLowerCase() == 'true' || url.hostname.includes('hq.'),
        c
      )
      return returnHTMLResponse(responseContent)
    }
  } catch (e) {
    const responseContent = await ErrorResponse((e as Error).message, c)
    return returnHTMLResponse(responseContent, 500)
  }
}

async function handleLive(c: any): Promise<Response> {
  const { author, videoId } = c.req.param()
  let authorName = author

  // If the user agent is a bot, redirect to the TikTok page
  if (!BOT_REGEX.test(c.req.header('User-Agent') || '')) {
    const url = new URL(c.req.url)

    // Remove tracking parameters
    url.search = ''

    return new Response('', {
      status: 302,
      headers: {
        Location: 'https://www.tiktok.com' + url.pathname
      }
    })
  }

  if (!author && !awemeIdPattern.test(videoId)) {
    const url = await grabAwemeId(videoId)
    const match = url.pathname.match(awemeLinkPattern)

    if (match) {
      authorName = match[1]
    } else {
      const responseContent = await ErrorResponse('Invalid live ID', c)
      return returnHTMLResponse(responseContent, 400)
    }
  }

  authorName = authorName.startsWith('@') ? authorName.substring(1) : authorName

  try {
    const liveData = await scrapeLiveData(authorName)

    if (liveData instanceof Error) {
      const responseContent = await ErrorResponse((liveData as Error).message, c)
      return returnHTMLResponse(responseContent, 500)
    }

    const responseContent = await LiveResponse(liveData, c)
    return returnHTMLResponse(responseContent)
  } catch (e) {
    const responseContent = await ErrorResponse((e as Error).message, c)
    return returnHTMLResponse(responseContent, 500)
  }
}

app.get('/api/v1/statuses/:videoId', async (c) => respondAlternative(c))
app.get('/users/:username/statuses/:videoId', async (c) => respondAlternative(c));

app.route('/generate', generate)

const routes = [
  {
    path: '/:videoId',
    handler: handleShort
  },
  {
    path: '/t/:videoId',
    handler: handleShort
  },
  {
    path: '/*/video/:videoId',
    handler: handleVideo
  },
  {
    path: '/*/photo/:videoId',
    handler: handleVideo
  },
  {
    path: '/:author/live',
    handler: handleLive
  }
]

// temp-fix: add trailing slash to all routes
routes.forEach((route) => {
  app.get(route.path, route.handler)
  app.get(route.path + '/', route.handler)
})

export default app

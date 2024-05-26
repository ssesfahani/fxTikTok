import { Hono } from 'hono'
import { cache } from 'hono/cache'

import { scrapeVideoData } from './services/tiktok'
import { grabAwemeId } from './services/tiktok'
import { VideoResponse, ErrorResponse } from './templates'
import generateAlternate from './util/generateAlternate'
import { returnHTMLResponse } from './util/responseHelper'

const app = new Hono()

app.get('/test/:videoId', async (c) => {
  const { videoId } = c.req.param()

  try {
    const videoData = await scrapeVideoData(videoId)

    return new Response(JSON.stringify(videoData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    })
  }
})

app.get('/', (c) => {
  return new Response('', {
    status: 302,
    headers: {
      Location: 'https://github.com/okdargy/fxtiktok'
    }
  })
})

async function handleVideo(c: any): Promise<Response> {
  const awemeIdPattern = /^\d{1,19}$/
  const BOT_REGEX =
    /bot|facebook|embed|got|firefox\/92|curl|wget|go-http|yahoo|generator|whatsapp|discord|preview|link|proxy|vkshare|images|analyzer|index|crawl|spider|python|cfnetwork|node/gi

  const { videoId } = c.req.param()
  let id = videoId.split('.')[0]

  // If the user agent is a bot, redirect to the TikTok page
  if (!BOT_REGEX.test(c.req.header('User-Agent') || '')) {
    return new Response('', {
      status: 302,
      headers: {
        Location: 'https://www.tiktok.com' + `${awemeIdPattern.test(id) ? c.req.path : '/t/' + id}`
      }
    })
  }

  // If the videoId doesn't match the awemeIdPattern, that means we have shortened TikTok link and we need to grab the awemeId
  if (!awemeIdPattern.test(id)) {
    try {
      const awemeId = await grabAwemeId(id)
      id = awemeId
    } catch (e) {
      const responseContent = await ErrorResponse((e as Error).message)
      return returnHTMLResponse(responseContent, 500)
    }
  }

  try {
    const videoInfo = await scrapeVideoData(id)

    if (videoInfo instanceof Error) {
      const responseContent = await ErrorResponse((videoInfo as Error).message)
      return returnHTMLResponse(responseContent, 500)
    }

    const url = new URL(c.req.url)
    const extensions = ['mp4', 'png', 'jpg', 'jpeg', 'webp', 'webm']

    if (
      url.hostname.includes('d.tnktok.com') ||
      c.req.query('isDirect') === 'true' ||
      extensions.some((suffix) => c.req.path.endsWith(suffix))
    ) {
      if (videoInfo.video.duration > 0) {
        return new Response('', {
          status: 302,
          headers: {
            Location: 'https://fxtiktok-rewrite.dargy.workers.dev/generate/video/' + videoInfo.id
          }
        })
      } else {
        return new Response('', {
          status: 302,
          headers: {
            Location: 'https://fxtiktok-rewrite.dargy.workers.dev/generate/image/' + videoInfo.id
          }
        })
      }
    } else {
      const responseContent = await VideoResponse(videoInfo)
      return returnHTMLResponse(responseContent)
    }
  } catch (e) {
    const responseContent = await ErrorResponse((e as Error).message)
    return returnHTMLResponse(responseContent, 500)
  }
}

app.get('/generate/alternate', (c) => {
  const content = JSON.stringify(generateAlternate(c))
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
})

app.get('/generate/video/:videoId', async (c) => {
  const { videoId } = c.req.param()

  try {
    const data = await scrapeVideoData(videoId)

    /*
        if (!(data instanceof Error)) {
            if(data.video.playAddr) {
                return c.redirect(data.video.playAddr)
            } else {
                return new Response('No video found', { status: 404,
                    headers: {
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                    }
                })
            }
        }
    */

    return c.redirect(`https://tikwm.com/video/media/play/${videoId}.mp4`)
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})

app.get('/generate/image/:videoId', async (c) => {
  const { videoId } = c.req.param()

  try {
    const data = await scrapeVideoData(videoId)

    /*
        if (!(data instanceof Error)) {
            if(data.imagePost.images.length > 0) {
                return c.redirect(data.imagePost.images[0].imageURL.urlList[0])
            } else {
                return new Response(JSON.stringify(data), { status: 200 })
            }
        }
    */

    return c.redirect(`https://tikwm.com/video/cover/${videoId}.webp`)
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})

const routes = [
  {
    path: '/:videoId',
    handler: handleVideo
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
    path: '/t/:videoId',
    handler: handleVideo
  }
]

// temp-fix: add trailing slash to all routes
routes.forEach((route) => {
  app.get(route.path, route.handler)
  app.get(route.path + '/', route.handler)
})

export default app

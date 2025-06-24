import { Context, Hono } from "hono";
export const generate = new Hono();

import generateAlternate from './util/generateAlternate'
import generateActivity from "./util/generateActivity";
import { scrapeAvatarUri, scrapeVideoData } from "./services/tiktok";

export const awemeIdPattern = /^\d{1,19}$/;
export const awemeLinkPattern = /\/@?([\w\d_.]*)\/(video|photo|live)\/?(\d{19})?/

export async function respondAlternative(c: Context) {
  const { videoId } = c.req.param()

  const content = JSON.stringify(await generateActivity(videoId, c))
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/activity+json; charset=utf-8',
      'Cache-Control': 'public, max-age=0'
    }
  })
}

generate.get('/alternate', (c) => {
  const content = JSON.stringify(generateAlternate(c))
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
})

generate.get('/video/:videoId', async (c) => {
  const { videoId } = c.req.param()
  const hq = c.req.query('hq') === 'true' || c.req.query('quality') === 'hq'

  try {
    // To ensure the video is valid, decrease load on TikWM by checking the video data first
    const data = await scrapeVideoData(videoId)

    if (data instanceof Error) {
      return new Response((data as Error).message, {
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      })
    }

    const highAvailable = data.video.bitrateInfo.find((bitrate) => bitrate.CodecType.includes('h265'))

    if (hq && highAvailable) {
      return c.redirect(`https://tikwm.com/video/media/hdplay/${videoId}.mp4`)
    } else {
      return c.redirect(`https://tikwm.com/video/media/play/${videoId}.mp4`)
    }
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})

generate.get('/image/:videoId', async (c) => {
  const { videoId } = c.req.param()
  const index = c.req.query('index') || 0

  if (!videoId) return new Response('Missing video ID', { status: 400 })
  if (!awemeIdPattern.test(videoId)) return new Response('Invalid video ID', { status: 400 })
  if (isNaN(Number(index))) return new Response('Invalid image index', { status: 400 })

  try {
    const data = await scrapeVideoData(videoId)

    if ('imagePost' in data && data.imagePost.images.length > 0 && +index < data.imagePost.images.length) {
      return c.redirect(data.imagePost.images[+index].imageURL.urlList[0])
    } else {
      throw new Error('Image not found')
    }
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})

generate.get('/image/:videoId/:imageCount', async (c) => {
  const { videoId, imageCount } = c.req.param()

  if (!videoId) return new Response('Missing video ID', { status: 400 })
  if (!awemeIdPattern.test(videoId)) return new Response('Invalid video ID', { status: 400 })

  if (isNaN(Number(imageCount)) || parseInt(imageCount) < 1) return new Response('Invalid image count', { status: 400 })
  const imageIndex = parseInt(imageCount) - 1 // 0-indexed

  try {
    const data = await scrapeVideoData(videoId)

    if (data instanceof Error) {
      return new Response((data as Error).message, {
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      })
    }

    if (data.imagePost && data.imagePost.images && data.imagePost.images.length > 0) {
      if (imageIndex >= data.imagePost.images.length) {
        return new Response('Image index out of range', { status: 404 })
      }
      
      const imageUrl = data.imagePost.images[imageIndex].imageURL.urlList[0]
      return c.redirect(imageUrl)
    } else { // Fallback to TikWM API if no images found in data
      const images = await fetch('https://tikwm.com/api/', {
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: 'url=' + videoId + '&count=12&cursor=0&web=1&hd=1',
        method: 'POST'
      })

      const imageJson = (await images.json()) as { data: { images: string[] } }
      if (!imageJson.data.images[imageIndex]) return new Response('Image not found', { status: 404 })
      return c.redirect(imageJson.data.images[imageIndex])
    }
  } catch (e) {
    console.log(e)
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})

generate.get('/pfp/:author', async (c) => {
  const { author } = c.req.param()

  try {
    const data = await scrapeAvatarUri(author)

    if (data instanceof Error) {
      return new Response((data as Error).message, {
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      })
    }

    return c.redirect(data)
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})

generate.get('/cover/:videoId', async (c) => {
  const { videoId } = c.req.param()

  if (!videoId) return new Response('Missing video ID', { status: 400 })
  if (!awemeIdPattern.test(videoId)) return new Response('Invalid video ID', { status: 400 })

  try {
    const data = await scrapeVideoData(videoId)

    if (data instanceof Error) {
      return new Response((data as Error).message, {
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      })
    }

    if (data.video.cover) {
      return c.redirect(data.video.originCover)
    } else {
      throw new Error('Cover not found')
    }
  } catch (e) {
    return new Response((e as Error).message, {
      status: 500,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    })
  }
})
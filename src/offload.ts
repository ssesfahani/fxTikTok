import { Hono } from 'hono'
import { generate, respondAlternative } from './generate'
import generateActivity from './util/generateActivity'

const app = new Hono()
const PORT = 8787
const firstStart = Date.now()

app.get('/', () => {
    return new Response(JSON.stringify({
        message: "fxTikTok offload server is running!",
        github: "https://github.com/okdargy/fxTikTok",
        uptime: Date.now() - firstStart,
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    })
})

app.get('/api/v1/statuses/:videoId', async (c) => {
  const { videoId } = c.req.param()

  const content = JSON.stringify(await generateActivity(videoId, c))
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/activity+json; charset=utf-8',
      'Cache-Control': 'public, max-age=0'
    }
  })
})

app.get('/api/v1/statuses/:videoId', async (c) => respondAlternative(c))
app.get('/users/:username/statuses/:videoId', async (c) => respondAlternative(c));

app.route('/generate', generate)

export default { 
    port: PORT, 
    fetch: app.fetch, 
} 

console.log(`fxTikTok offload server is running on port ${PORT}`)
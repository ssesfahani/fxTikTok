import { Hono } from 'hono'
import generateAlternate from './util/generateAlternate'

const app = new Hono()

app.get('/', () => {
    return new Response(JSON.stringify({
        message: "fxTikTok offload server is running!",
        github: "https://github.com/okdargy/fxTikTok",
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    })
})

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

export default { 
    port: 8787, 
    fetch: app.fetch, 
} 

console.log('fxTikTok offload server is running on port 8787')
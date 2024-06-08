import app from '@/index'

describe('GET /@i/photo/:videoId', () => {
  it('should return 200', async () => {
    const res = await app.request('/@i/photo/7335753580093164833', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
      }
    })

    expect(res.status).toBe(200)
  })

  // no discord user agent, redirects
  it('should return 302', async () => {
    const res = await app.request('/@i/photo/7335753580093164833', {
      method: 'GET'
    })

    expect(res.status).toBe(302)
  })

  it('should return 500', async () => {
    const res = await app.request('/@i/photo/123', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
      }
    })

    expect(res.status).toBe(500)
    expect(await res.text()).toContain('An error occurred while trying to fetch data. Please try again later.')
  })
})

describe('GET /generate/image/:videoId', () => {
  it('should return 302', async () => {
    const res = await app.request('/generate/image/7335753580093164833', {
      method: 'GET'
    })

    expect(res.status).toBe(302)
  })

  it('should return 500', async () => {
    const res = await app.request('/generate/image/123', {
      method: 'GET'
    })

    expect(res.status).toBe(500)
  })
})

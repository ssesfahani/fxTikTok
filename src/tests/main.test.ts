import app from '@/index'

describe('GET /test/:videoId', () => {
  it('should return 200', async () => {
    const res = await app.request('/test/7332187682480590112', {
      method: 'GET'
    })

    expect(res.status).toBe(200)
  })

  it('should return 500', async () => {
    const res = await app.request('/test/123', {
      method: 'GET'
    })

    expect(res.status).toBe(500)
    expect(await res.text()).toBe('Could not parse video info')
  })
})

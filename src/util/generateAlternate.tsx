import { Context } from 'hono'

export default function generateAlternate(c: Context): {
  version: string
  type: string
  author_name: string
  author_url: string
  provider_name: string
  provider_url: string
  title: string
} {
  const { unique_id, nickname, description } = c.req.query()
  const showSponsor = Math.random() < 0.01 // 1 in 100 chance to show sponsor message, gotta break even somehow

  return {
    version: '1.0',
    type: 'link',
    author_name: `${decodeURIComponent(nickname)} (@${decodeURIComponent(unique_id)})`,
    author_url: `https://www.tiktok.com${unique_id ? '/@' + unique_id : ''}`,
    provider_name: `${description ? '\n\n' + decodeURIComponent(description) : showSponsor ? 'Use fxTikTok often? Consider supporting us on GitHub!' : 'fxTikTok - Embed with s/i/n'}`,
    provider_url: showSponsor ? 'https://github.com/sponsors/okdargy' : 'https://github.com/okdargy/fxTikTok',
    title: `TikTok by @${unique_id}`
  }
}

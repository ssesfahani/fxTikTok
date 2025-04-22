import { Context } from 'hono'
import { env } from 'hono/adapter'

export default function MetaHelper(
  c: Context,
  tags: {
    name: string
    content: string | null
  }[],
  alternate?: {
    [key: string]: string | number
  }
): JSX.Element {
  const { OFFLOAD_URL } = env(c) as { OFFLOAD_URL: string }
  let alternateUrl = new URL(OFFLOAD_URL || 'https://offload.tnktok.com' + '/generate/alternate')

  if (alternate) {
    for (const key in alternate) {
      alternateUrl.searchParams.set(key, encodeURIComponent(alternate[key].toString()))
    }
  }

  return (
    <html lang='en'>
      <head>
        {tags.map((tag) => (tag.content ? <meta property={tag.name} content={tag.content} /> : null))}
        {alternate ? <link rel='alternate' href={alternateUrl.toString()} type='application/json+oembed' /> : null}
      </head>
    </html>
  )
}

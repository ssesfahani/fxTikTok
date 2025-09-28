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
  },
  awemeId?: string,
  hq?: boolean,
  addDesc?: boolean
): JSX.Element {
  const { OFF_LOAD } = env(c) as { OFF_LOAD: string }
  let alternateUrl = new URL((OFF_LOAD || 'https://offload.tnktok.com') + '/generate/alternate')

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
        {awemeId ? (
          <link
            rel='alternate'
            type='application/activity+json'
            href={
              (OFF_LOAD || 'https://offload.tnktok.com') +
              '/users/' +
              'username' +
              '/statuses/' +
              awemeId +
              (hq ? 'hq' : '') +
              (addDesc ? 'desc' : '')
            }
          />
        ) : null}
      </head>
    </html>
  )
}

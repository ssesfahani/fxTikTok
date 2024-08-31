import MetaHelper from '../../util/metaHelper'
import { ItemStruct } from '../../types/Web'
import { formatNumber } from '../../util/format'

export function VideoResponse(data: ItemStruct, addDesc: Boolean): JSX.Element {
  let videoUrl = 'https://fxtiktok-rewrite.dargy.workers.dev/generate/video/' + data.id
  let videoMeta: { name: string; content: string }[] = []

  if (data.video.duration !== 0) {
    videoMeta = [
      {
        name: 'og:video',
        content: videoUrl
      },
      {
        name: 'og:video:type',
        content: 'video/mp4'
      },
      {
        name: 'og:video:width',
        content: data.video.width.toString()
      },
      {
        name: 'og:video:height',
        content: data.video.height.toString()
      },
      {
        name: 'og:type',
        content: 'video'
      },
      {
        name: 'twitter:card',
        content: 'player'
      }
    ]
  } else {
    const numberOfImages = data.imagePost.images.length > 4 ? 4 : data.imagePost.images.length

    for (let i = 0; i < numberOfImages; i++) {
      videoMeta = [
        ...videoMeta,
        {
          name: 'og:image',
          content: 'https://fxtiktok-rewrite.dargy.workers.dev/generate/image/' + data.id + '?index=' + i
        },
        {
          name: 'og:image:type',
          content: 'image/jpeg'
        },
        {
          name: 'og:image:width',
          content: 'auto'
        },
        {
          name: 'og:image:height',
          content: 'auto'
        },
        {
          name: 'og:type',
          content: 'image.other'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }

  let title = ''

  title += `❤️ ${formatNumber(data.stats.diggCount.toString())} `
  title += `💬 ${formatNumber(data.stats.commentCount.toString())}  `
  title += `🔁 ${formatNumber(data.stats.shareCount.toString())}  `

  if (data.imagePost) {
    title += `🖼️ ${data.imagePost.images.length.toString()} `
  }

  return (
    <>
      {MetaHelper(
        [
          {
            name: 'og:title',
            content: title.trim()
          },
          {
            name: 'theme-color',
            content: '#ff0050' // TikTok's theme color
          },
          {
            name: 'twitter:site',
            content: `@${data.author.uniqueId}` // @username
          },
          {
            name: 'twitter:creator',
            content: `@${data.author.uniqueId}` // @username
          },
          {
            name: 'twitter:title',
            content: `${data.author.nickname} (@${data.author.uniqueId})` // Nickname (@username)
          },
          {
            name: 'og:url',
            content: `https://www.tiktok.com/@${data.author.uniqueId}/video/${data.id}`
          },
          ...(!addDesc
            ? [
                {
                  name: 'og:description',
                  content: data.desc
                }
              ]
            : []),
          ...videoMeta
        ],
        {
          unique_id: data.author.uniqueId,
          nickname: data.author.nickname,
          ...(addDesc ? { description: data.desc } : {})
        }
      )}
    </>
  )
}

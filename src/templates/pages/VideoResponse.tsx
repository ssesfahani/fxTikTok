import MetaHelper from '../../util/metaHelper'
import { ItemStruct } from '../../types/Web'

export function VideoResponse(data: ItemStruct): JSX.Element {
  let videoUrl = 'https://fxtiktok-rewrite.dargy.workers.dev/generate/video/' + data.id

  // NOTE - This snippet was used to get a dynamic URL from the TikTok API but now we are mainly using web scraping to get the video data, which doesn't provide a dynamic URL
  /*
  if (data.video.duration > 0 && data.videos_addr) {
    const awemeVideo = data.videos_addr.find((url) =>
        url.includes("/aweme/v1/play"),
      );

    if (awemeVideo) {
      const url = new URL(awemeVideo);

      const videoId = url.searchParams.get("video_id");
      const fileId = url.searchParams.get("file_id");

      videoUrl = `https://${url.hostname}/aweme/v1/play/?video_id=${videoId}&file_id=${fileId}&item_id=${data.aweme_id}`;
    }
  }
  */

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
          content: data.imagePost.images[i].imageURL.urlList[0]
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

  return (
    <>
      {MetaHelper(
        [
          {
            name: 'og:title',
            content: `${data.author.nickname} (@${data.author.uniqueId})` // Nickname (@username)
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
          {
            name: 'og:description',
            content: data.desc
          },
          ...videoMeta
        ],
        {
          likes: data.stats.diggCount,
          comments: data.stats.commentCount,
          shares: data.stats.shareCount,
          unique_id: data.author.uniqueId,
          images: data.imagePost ? data.imagePost.images.length : 0
        }
      )}
    </>
  )
}

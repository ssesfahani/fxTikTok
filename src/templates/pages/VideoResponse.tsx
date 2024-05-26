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
            name: 'twitter:card',
            content: `${data.video.duration !== 0 ? 'player' : 'summary_large_image'}`
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
            content: data.video.duration !== 0 ? data.desc : null
          },
          {
            name: `og:${data.video.duration !== 0 ? 'video' : 'image'}`,
            content: `${data.video.duration !== 0 ? videoUrl : 'https://fxtiktok-rewrite.dargy.workers.dev/generate/image/' + data.id}`
          },
          {
            name: 'og:type',
            content: `${data.video.duration !== 0 ? 'video.other' : 'image.other'}`
          },
          {
            name: `og:${data.video.duration !== 0 ? 'video' : 'image'}:type`,
            content: `${data.video.duration !== 0 ? 'video/mp4' : 'image/jpeg'}`
          },
          {
            name: `og:${data.video.duration !== 0 ? 'video' : 'image'}:width`,
            content: `${data.video.duration !== 0 ? data.video.width : data.imagePost.images[0].imageWidth}`
          },
          {
            name: `og:${data.video.duration !== 0 ? 'video' : 'image'}:height`,
            content: `${data.video.duration !== 0 ? data.video.height : data.imagePost.images[0].imageHeight}`
          }
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

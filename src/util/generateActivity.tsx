import { scrapeVideoData } from '@/services/tiktok';
import { Context } from 'hono'
import { formatNumber } from './format';
import { env } from 'hono/adapter';

export default async function generateActivity(param: string, c: Context) {
    const { OFF_LOAD } = env(c) as { OFF_LOAD: string }
    const offloadUrl = OFF_LOAD || 'https://offload.tnktok.com'
    
    const videoId = param.replace(/[^0-9]/g, '')
    const hq = param.includes('hq')
    const forceDescription = param.includes('desc')

    const videoInfo = await scrapeVideoData(videoId)
    if (videoInfo instanceof Error) return {
        "error": videoInfo.message
    }
    
    let media = []
    let desc = videoInfo.desc + "<br><br>"

    if (videoInfo.video.playAddr) {
        media.push({
          "id": videoId + "-video",
          "type": "video",
          "url": offloadUrl + "/generate/video/" + videoId + (hq ? '?hq=true' : ''),
          "preview_url": offloadUrl + "/generate/cover/" + videoId,
          "remote_url": null,
          "preview_remote_url": null,
          "text_url": null,
          "description": null,
          "meta": {
            "original": {
              "width": videoInfo.video.width,
              "height": videoInfo.video.height,
            }
          }
        })

        if (!forceDescription) desc = "" // Clear description if video and not forced to add it, for aesthetic purposes
    }

    if (videoInfo.imagePost && videoInfo.imagePost.images.length > 0) {
        for (let i = 0; i < videoInfo.imagePost.images.length; i++) {
            media.push({
                "id": videoId + "-image-" + i,
                "type": "image",
                "url": offloadUrl + "/generate/image/" + videoId + "/" + (i + 1),
                "preview_url": offloadUrl + "/generate/image/" + videoId + "/" + (i + 1) + "?preview=true",
                "remote_url": null,
                "preview_remote_url": null,
                "text_url": null,
                "description": "Image (" + (i + 1) + " of " + videoInfo.imagePost.images.length + ")",
                "meta": {
                    "original": {
                        "width": videoInfo.imagePost.images[i].imageWidth,
                        "height": videoInfo.imagePost.images[i].imageHeight,
                    }
                }
            });
        }
    }

    return {
      "id": videoId,
      "url": "https://tiktok.com/@" + videoInfo.author.uniqueId + "/video/" + videoId,
      "uri": "https://tiktok.com/@" + videoInfo.author.uniqueId + "/video/" + videoId,
      "created_at": new Date(parseInt(videoInfo.createTime) * 1000).toISOString(),
      "content": desc + "<b>❤️ " + formatNumber(videoInfo.stats.diggCount) + " 💬 " + formatNumber(videoInfo.stats.commentCount) + " 🔁 " + formatNumber(videoInfo.stats.shareCount) + "</b>",
      "spoiler_text": "",
      "language": null,
      "visibility": "public",
      "application": {
        "name": "fxTikTok",
        "website": "https://github.com/okdargy/fxTikTok",
      },
      "media_attachments": [
        ...media
      ],
      "account": {
        "id": videoInfo.author.uniqueId,
        "display_name": videoInfo.author.nickname + (videoInfo.author.verified ? " ☑️" : ""),
        "username": videoInfo.author.uniqueId,
        "acct": videoInfo.author.uniqueId,
        "url": "https://tiktok.com/@" + videoInfo.author.uniqueId,
        "created_at": new Date(videoInfo.author.createTime * 1000).toISOString(),
        "locked": false,
        "bot": false,
        "discoverable": true,
        "indexable": false,
        "group": false,
        "avatar": offloadUrl + "/generate/pfp/" + videoInfo.author.uniqueId,
        "avatar_static": offloadUrl + "/generate/pfp/" + videoInfo.author.uniqueId,
        "followers_count": videoInfo.stats.followerCount,
        "following_count": videoInfo.stats.followingCount,
        "header": null,
        "header_static": null,
        "statuses_count": 0,
        "hide_collections": false,
        "noindex": false,
        "emojis": [],
        "roles": [],
        "fields": []
      },
      "mentions": [],
      "tags": [],
      "emojis": [],
      "card": null,
      "poll": null
    };
}
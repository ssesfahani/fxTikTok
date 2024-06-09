import MetaHelper from '@/util/metaHelper'
import { LiveRoom } from '@/types/Live'
import { formatNumber, formatTime } from '@/util/format'

export function LiveResponse(data: LiveRoom): JSX.Element {
  let title = ''

  title += `👀 ${formatNumber(String(data.liveRoomUserInfo.liveRoom.liveRoomStats.userCount))} `

  if(data.liveRoomUserInfo.liveRoom.status !== 4) { // live has NOT ended
    title += `🔴 LIVE `
    title += `🕒 ${formatTime(data.liveRoomUserInfo.liveRoom.startTime)} `
  } else {
    title += `⌛ ENDED `
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
            content: '#ff0050'
          },
          {
            name: 'twitter:site',
            content: `@${data.liveRoomUserInfo.user.uniqueId}` // @username
          },
          {
            name: 'twitter:creator',
            content: `@${data.liveRoomUserInfo.user.uniqueId}` // @username
          },
          {
            name: 'twitter:title',
            content: `${data.liveRoomUserInfo.user.nickname} (@${data.liveRoomUserInfo.user.nickname})` // Nickname (@username)
          },
          {
            name: 'og:url',
            content: `https://www.tiktok.com/@${data.liveRoomUserInfo.user.uniqueId}/live`
          },
          {
            name: 'og:description',
            content: data.liveRoomUserInfo.liveRoom.title
          },
          {
            name: 'og:image',
            content: data.liveRoomUserInfo.user.avatarLarger
          },
          {
            name: 'og:image:type',
            content: 'image/jpeg'
          },
          {
            name: 'og:type',
            content: 'image.other'
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          }
        ],
        {
          unique_id: data.liveRoomUserInfo.user.uniqueId,
          nickname: data.liveRoomUserInfo.user.nickname
        }
      )}
    </>
  )
}

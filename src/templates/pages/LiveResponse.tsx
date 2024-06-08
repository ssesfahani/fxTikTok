import MetaHelper from '../../util/metaHelper'
import { LiveRoom } from '../../types/Live'

export function LiveResponse(data: LiveRoom): JSX.Element {
    return (
        <>
            {MetaHelper([
                {
                    name: 'og:title',
                    content: `🔴 ${data.liveRoomUserInfo.user.nickname} (@${data.liveRoomUserInfo.user.nickname})`
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
                    content: `🔴 ${data.liveRoomUserInfo.user.nickname} (@${data.liveRoomUserInfo.user.nickname})` // Nickname (@username)
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
                    content: data.liveRoomUserInfo.user.avatarMedium
                  }
            ], {
                unique_id: data.liveRoomUserInfo.user.uniqueId,
                viewers: data.liveRoomUserInfo.liveRoom.liveRoomStats.userCount,
                startTime: data.liveRoomUserInfo.liveRoom.startTime,
            })}
        </>
    )
}
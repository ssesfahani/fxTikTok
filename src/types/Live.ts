export interface LiveWebJSONResponse {
  LiveRoom: LiveRoom
}

export interface LiveRoom {
  loadingState: LoadingState
  needLogin: boolean
  showLiveGate: boolean
  isAgeGateRoom: boolean
  recommendLiveRooms: any[]
  liveRoomStatus: number
  liveRoomUserInfo: LiveRoomUserInfo
}

export interface LoadingState {
  getRecommendLive: number
  getUserInfo: number
  getUserStat: number
}

export interface LiveRoomUserInfo {
  user: User
  stats: Stats
  liveRoom: LiveRoom2
}

export interface User {
  avatarLarger: string
  avatarMedium: string
  avatarThumb: string
  id: string
  nickname: string
  secUid: string
  secret: boolean
  uniqueId: string
  verified: boolean
  roomId: string
  signature: string
  status: number
}

export interface Stats {
  followingCount: number
  followerCount: number
}

export interface LiveRoom2 {
  coverUrl: string
  title: string
  startTime: number
  status: number
  paidEvent: PaidEvent
  liveSubOnly: number
  liveRoomMode: number
  hashTagId: number
  gameTagId: number
  liveRoomStats: LiveRoomStats
  streamData: StreamData
  streamId: string
  multiStreamScene: number
  multiStreamSource: number
  hevcStreamData: HevcStreamData
}

export interface PaidEvent {
  event_id: number
  paid_type: number
}

export interface LiveRoomStats {
  userCount: number
}

export interface StreamData {
  pull_data: PullData
}

export interface PullData {
  options: Options
  stream_data: string
}

export interface Options {
  default_quality: DefaultQuality
  qualities: Quality[]
  show_quality_button: boolean
}

export interface DefaultQuality {
  icon_type: number
  level: number
  name: string
  resolution: string
  sdk_key: string
  v_codec: string
}

export interface Quality {
  icon_type: number
  level: number
  name: string
  resolution: string
  sdk_key: string
  v_codec: string
}

export interface HevcStreamData {
  pull_data: PullData2
}

export interface PullData2 {
  options: Options2
  stream_data: string
}

export interface Options2 {
  default_quality: DefaultQuality2
  qualities: Quality2[]
  show_quality_button: boolean
}

export interface DefaultQuality2 {
  icon_type: number
  level: number
  name: string
  resolution: string
  sdk_key: string
  v_codec: string
}

export interface Quality2 {
  icon_type: number
  level: number
  name: string
  resolution: string
  sdk_key: string
  v_codec: string
}

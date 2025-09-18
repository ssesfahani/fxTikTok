import { TikTokAPIResponse, AwemeList } from '../types/API'

export async function getVideoInfo(awemeId: string): Promise<AwemeList | Error> {
  const apiUrl = new URL('https://api22-normal-c-alisg.tiktokv.com/aweme/v1/feed/')

  apiUrl.search = new URLSearchParams({
    region: 'US',
    carrier_region: 'US',
    aweme_id: awemeId,
    iid: '7318518857994389254',
    device_id: '7318517321748022790',
    channel: 'googleplay',
    app_name: 'musical_ly',
    version_code: '300904',
    device_platform: 'android',
    device_type: 'ASUS_Z01QD',
    os_version: '9'
  }).toString()

  const res: Response = await fetch(apiUrl.toString(), {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36'
    },
    cf: {
      cacheEverything: true,
      cacheTtlByStatus: { '200-299': 86400, 404: 1, '500-599': 0 }
    }
  })
  const json = (await res.json()) as TikTokAPIResponse
  const videoInfo: AwemeList | undefined = json.aweme_list.find((aweme) => aweme.aweme_id === awemeId)

  if (videoInfo) {
    return videoInfo
  } else {
    return new Error('Could not find video info')
  }
}

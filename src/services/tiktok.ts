import { TikTokAPIResponse, AwemeList } from "../types/Services";

export async function grabAwemeId(videoId: string): Promise<String | Error> {
  // https://vm.tiktok.com/ZMJmVWVpL/
  const res = await fetch("https://vm.tiktok.com/" + videoId);
  const url = new URL(res.url);

  const awemeIdPattern = /\/@[\w\d_.]+\/(video|photo)\/(\d{19})/;
  const match = url.pathname.match(awemeIdPattern);

  if (match) {
    return match[2];
  } else {
    throw new Error("Could not find awemeId");
  }
}

export async function getVideoInfo(
  awemeId: String,
): Promise<AwemeList | Error> {
  const apiUrl = new URL(
    "https://api22-normal-c-alisg.tiktokv.com/aweme/v1/feed/?region=US&carrier_region=US",
  );

  const params = {
    aweme_id: awemeId,
    iid: "7318518857994389254",
    device_id: "7318517321748022790",
    channel: "googleplay",
    app_name: "musical_ly",
    version_code: "300904",
    device_platform: "android",
    device_type: "ASUS_Z01QD",
    os_version: "9",
  };

  Object.keys(params).forEach((key) =>
    apiUrl.searchParams.append(key, params[key]),
  );

  console.log(apiUrl.toString());

  const res: Response = await fetch(apiUrl.toString(), {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
    },
    cf: {
      cacheEverything: true,
      cacheTtlByStatus: { "200-299": 86400, 404: 1, "500-599": 0 },
    },
  });
  const json: TikTokAPIResponse = await res.json();
  const videoInfo: AwemeList | undefined = json.aweme_list.find(
    (aweme) => aweme.aweme_id === awemeId,
  );

  if (videoInfo) {
    return videoInfo;
  } else {
    return new Error("Could not find video info");
  }
}

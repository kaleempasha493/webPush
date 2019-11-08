let push = require('web-push');

let vapidkeys = {
  publicKey: 'BLBi-btyG9lVdFHsY9mHC_S1rrYYT4qbpjlwxd4uMWYD2_2HgVPm4iH_LL2de8-zQswCqd2EQ7hBT6fWS0IeA3U',
  privateKey: 'DZKrkiZmaBeMgoAhDYJsxDqVu4MxzOxXbmU-V8w9Gfg'
}

  push.setVapidDetails('mailto:kaleempasha493@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eF5Os75h5Qo:APA91bEY_SvRq7V5_RGs3X1j0W99CJyNOBSz1WnIqoIWHH3gFOyoIbzDhYZvaozVaIFkgpTkZXY8tJLKmINMcf9lSJi_dlrNJpwi40coEThkIrTre5D-m_2-UMr3YEWw5UMoYc4Ze-6k","expirationTime":null,"keys":{"p256dh":"BHnLWbbgWZm8LWje5-VEpDztQGOvviANK_KQWQ93Qh8kEI55Vvs8-gXwimWZhzWFM2wOKbg21QLmvazvL0C7CzY","auth":"dy3mMEysVHvW3wmlZ9jmug"}}

  push.sendNotification(sub, 'text message')
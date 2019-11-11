let push = require('web-push');

let vapidkeys = {
  publicKey: 'BLBi-btyG9lVdFHsY9mHC_S1rrYYT4qbpjlwxd4uMWYD2_2HgVPm4iH_LL2de8-zQswCqd2EQ7hBT6fWS0IeA3U',
  privateKey: 'DZKrkiZmaBeMgoAhDYJsxDqVu4MxzOxXbmU-V8w9Gfg'
}

  push.setVapidDetails('mailto:kaleempasha493@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d87eU3qwBvs:APA91bHgUe1jV-ByEKS2RXMGObmLy0CWfhSUEd2YEcGh4jHwY2z61Xp2UQgPkC2Z_YywLRaNx175TSKs3VVGQkW-FW0Lzs9OiBXZZgdMNHzhT7AT8uz6MZosLlQzJ3YF1ICgbJ6kSeKF","expirationTime":null,"keys":{"p256dh":"BGwMqYi_hrcH0JRsM8oUZr_Me9qeUrdYgxJrgsFODZOI-6hWO5h98crnNKS8INBbG0OHkKeg1kChL6zl0MT-LCw","auth":"Ufg3DeUYueuGSx8VMHBT7g"}}

  push.sendNotification(sub, 'text message')
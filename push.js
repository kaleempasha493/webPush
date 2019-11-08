let push = require('web-push');

let vapidkeys = push.generateVAPIDKeys();

push.setVapidDetails('mailto:kaleempasha493@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

 let sub = {
  publicKey: 'BLBi-btyG9lVdFHsY9mHC_S1rrYYT4qbpjlwxd4uMWYD2_2HgVPm4iH_LL2de8-zQswCqd2EQ7hBT6fWS0IeA3U',
  privateKey: 'DZKrkiZmaBeMgoAhDYJsxDqVu4MxzOxXbmU-V8w9Gfg'
}

 push.sendNotification(sub, 'text message')
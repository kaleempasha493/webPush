let push = require('web-push');

let vapidkeys = {
    publicKey: 'BFRkKdidrkTV_D_Pd_smLGDiarY4VbWb5CHojeY3AjCivvLjJuCDQvQcL9fwgDiucUkeUvcyyw9exv3ULM7vRNQ',
    privateKey: 'awYd3v07b93NZWwIJ-eGTig6lAfEzQv_45EvKidwua4'
  }

  push.setVapidDetails('kaleempasha493@gmail.com', vapidkeys.publicKey, vapidkeys.privateKey)

  let sub = {}

  push.sendNotification(sub, 'text message')
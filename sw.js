const WorkerMessengerCommand = {
  AMP_SUBSCRIPION_STATE: "amp-web-push-subscription-state",
  AMP_SUBSCRIBE: "amp-web-push-subscribe",
  AMP_UNSUBSCRIBE: "amp-web-push-unsubscribe"
};
var i = 0;
self.addEventListener("message", a => {

}), 
self.addEventListener("push", function (a) {
  console.log(a),
      a.waitUntil(self.registration.pushManager.getSubscription().then(function (a) {
        var proxyUrl = "https://cors-anywhere.herokuapp.com/";
        var targetUrl = "https://www.semstores.com/jsonFile/edit.json?endpoint=" + a.endpoint;
          if (null == a)
              return void K().then(T).catch(function () { });
          return fetch(proxyUrl + targetUrl).then(function(response) {
            var text = response.text();
            console.log('text ', text)
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })

      }))
}), self.addEventListener("pushsubscriptionchange", function (a) {
  i = 0,
      a.waitUntil(K().then(T).catch(function () { }))
}), self.addEventListener("notificationclick", function (a) {
  a.notification.close();
  var b = a.notification,
      c = b.data;
  if (c.id) {
      fetch("https://deliver.feedify.net/click?id=" + c.id + "&type=" + c.type).then(function () { });
      var d = c.button;
      if ("button1" == a.action)
          var e = d.button1.action;
      else if ("button2" == a.action)
          var e = d.button2.action;
      else
          var e = c.url;
      e && "false" != e && a.waitUntil(clients.matchAll({
          type: "window"
      }).then(function (a) {
          for (var b, c = 0; c < a.length; c++)
              if (b = a[c], b.url === e && "focus" in b)
                  return b.focus();
          if (clients.openWindow)
              return e = addhttp(e), clients.openWindow(e)
      }))
  }
});
function onMessageReceivedSubscriptionState() {
  let a = null;
  self.registration.pushManager.getSubscription().then(b => (a = b, b ? self.registration.pushManager.permissionState(b.options) : null)).then(b => {
      if (null == b)
          broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPION_STATE, !1);
      else {
          const c = !!a && "granted" === b;
          broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPION_STATE, c)
      }
  })
}
function onMessageReceivedSubscribe() {
  self.registration.pushManager.subscribe({
      userVisibleOnly: !0,
      applicationServerKey: urlBase64ToUint8Array("BBwGGLs3Sn8VVr7V4mpltQhs0WNqccGN7jsRCUxpJmJryDS5IToBTldi99_QIR5Bmaxxoi_NNuS6Moh-0gc6wa8")
  }).then(a => {
      var b = a.endpoint;
      T(b),
          broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIBE, null)
  })
}
function onMessageReceivedUnsubscribe() {
  self.registration.pushManager.getSubscription().then(a => a.unsubscribe()).then(() => {
      broadcastReply(WorkerMessengerCommand.AMP_UNSUBSCRIBE, null)
  })
}
function broadcastReply(a, b) {
  self.clients.matchAll().then(c => {
      for (let d = 0; d < c.length; d++) {
          const e = c[d];
          e.postMessage({
              command: a,
              payload: b
          })
      }
  })
}
function K() {
  return self.registration.pushManager.getSubscription().then(function (b) {
      return b ? Promise.resolve(b.endpoint) : Promise.resolve(null)
  })
}
function NS() {
  self.registration.pushManager.subscribe({
      userVisibleOnly: !0
  }).then(function (a) {
      console.log("Subscribed after expiration", a.endpoint);
      var b = a.endpoint;
      T(b)
  })
}
function T(a) {
  if (i++ , null == a)
      return void (3 > i && NS());
  var b = self.indexedDB.open("FDY_PUSH_DB");
  b.onsuccess = function () {
      var c = b.result;
      if (c.objectStoreNames.length) {
          var d = c.transaction("fd_option"),
              e = d.objectStore("fd_option");
          e.openCursor().onsuccess = function (b) {
              var c = b.target.result;
              if (null != c) {
                  var d = c.value.pushEndpoint,
                      e = c.value.pushUserId,
                      f = c.value.pushRegistration;
                  N(a, f, e)
              }
          }
      }
  }
}
function N(a, b, c) {
  var d = a.split("/"),
      a = d[d.length - 1];
  a != b && A(a, b, c)
}
function A(a, b, c) {
  fetch("https://feedify.net/push/updateRegistration", {
      method: "post",
      headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "n_registration=" + a + "&o_registration=" + b + "&uuid=" + c
  }).then(function (b) {
      b.json().then(function () {
          U(a, c)
      })
  }).catch(function (a) {
      console.log("Request failed", a)
  })
}
function U(a, b) {
  var d = self.indexedDB.open("FDY_PUSH_DB");
  d.onsuccess = function () {
      var c = d.result;
      if (c.objectStoreNames.length) {
          var e = c.transaction("fd_option", "readwrite"),
              f = e.objectStore("fd_option");
          f.openCursor().onsuccess = function (c) {
              var d = c.target.result;
              if (null != d && d.value.pushUserId == b) {
                  var e = d.value;
                  e.pushRegistration = a,
                      e.pushEndpoint = a;
                  var f = d.update(e);
                  f.onsuccess = function () {
                      console.log("Updated")
                  }
              }
          }
      }
  }
}
function addhttp(a) {
  if (!a)
      return a;
  var b = /^((http|https|ftp):\/\/)/;
  return b.test(a) || (a = "http://" + a),
      a
}
function urlBase64ToUint8Array(a) {
  const b = "=".repeat((4 - a.length % 4) % 4),
      c = (a + b).replace(/\-/g, "+").replace(/_/g, "/"),
      d = self.atob(c);
  return Uint8Array.from([...d].map(a => a.charCodeAt(0)))
}
self.addEventListener('push', function(e) {
    var options = {
      body: 'Tommorroe will on instagram',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Remind me later',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Today enjoy on whatsup !!', options)
    );
  });

  self.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });

  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('https://web.whatsup.com/');
      notification.close();
    }
  });

  self.addEventListener('message', event => {
    console.log(event);
    if (event.data === 'skipWaiting') {
      self.skipWaiting();
    }
  });

  self.addEventListener('install', function(event) {
    // The promise that skipWaiting() returns can be safely ignored.
    console.log("install");
    self.skipWaiting();

  });

  self.addEventListener('activate', function(event) {
    // The promise that skipWaiting() returns can be safely ignored.
    self.skipWaiting();
    console.log("activate");

  });
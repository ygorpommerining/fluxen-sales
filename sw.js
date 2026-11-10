self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {}
  const title = data.title || 'Fluxen Sales'
  const opts = {
    body: data.body || '',
    icon: '/fluxen-sales/icon.png',
    badge: '/fluxen-sales/icon.png',
    vibrate: [200, 100, 200],
    tag: data.tag || 'fluxen-task',
    renotify: true,
    requireInteraction: true
  }
  event.waitUntil(self.registration.showNotification(title, opts))
})

self.addEventListener('notificationclick', function(event) {
  event.notification.close()
  event.waitUntil(clients.openWindow('/fluxen-sales/'))
})

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-pwa-cache').then(cache => {
      return cache.addAll([
        '/pwa-github-pages/',
        '/pwa-github-pages/index.html',
        '/pwa-github-pages/styles.css',
        '/pwa-github-pages/app.js',
        '/pwa-github-pages/images/icon-192x192.png',
        '/pwa-github-pages/images/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

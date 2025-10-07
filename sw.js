const CACHE_NAME = 'kotomusic-v1';
const urlsToCache = [
  '/',
  '/index.html'
  // Не кэшируем /songs/ — слишком объёмно и не обязательно для базовой PWA
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

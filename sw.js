// sw.js
const CACHE_NAME = 'kotomusic-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Просто пропускаем запросы — кэширование не обязательно для установки PWA
  // Главное — SW зарегистрирован и активен
});

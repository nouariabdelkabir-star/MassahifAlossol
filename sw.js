const CACHE_NAME = 'mushaf-cache-v1';
// قائمة بأهم الملفات التي سيتم تخزينها مؤقتاً
const urlsToCache = [
  '/MassahifAlossol/',
  '/MassahifAlossol/index.html',
  '/MassahifAlossol/css/style.css',
  '/MassahifAlossol/js/script.js'
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
      .then(response => response || fetch(event.request))
  );
});
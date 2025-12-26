// sw.js - This file is required for Android "Add to Home Screen" to work
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to fetch files from the network normally
  e.respondWith(fetch(e.request));
});

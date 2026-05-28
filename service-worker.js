const CACHE_NAME = "rezepte-app-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/rezept.html",
  "/add-recipe.html",
  "/admin.html",
  "/firebase.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

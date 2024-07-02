// Archivo service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'style.css',
                'app.js'
            ]);
        })
    );
});

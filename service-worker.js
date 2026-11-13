const CACHE_NAME = 'kansai-itinerary-v3';
const APP_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    './icon-180.png',
    './icon-192.png',
    './icon.png',
    './kyoto-night.webp',
    './kansai-title.png',
    './S__23445507.jpg',
    './S__23445508.jpg',
    './S__23445509.jpg',
    './S__23445511.jpg',
    './S__23453700.jpg',
    './S__23494658%20(2).jpg',
    './4.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key.startsWith('kansai-itinerary-') && key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then(response => {
                if (response.ok && response.type === 'basic') {
                    const responseCopy = response.clone();
                    event.waitUntil(
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(request, responseCopy))
                            .catch(error => console.error('無法快取資源：', error))
                    );
                }
                return response;
            }).catch(error => {
                if (request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                throw error;
            });
        })
    );
});

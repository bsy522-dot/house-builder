// Service Worker for House Builder PWA v7
var CACHE_NAME = 'house-builder-v7';
var URLS = [
  './',
  './index.html',
  './manifest.json',
  './v5_patch.js',
  './v6_patch.js',
  './v7_patch.js',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS);
    }).catch(function() {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // HTML pages: Network-first + inject v5_patch.js, v6_patch.js, v7_patch.js
  if (url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.endsWith('/')) {
    e.respondWith(
      Promise.all([
        fetch(req).then(function(resp) {
          if (resp && resp.status === 200) {
            var copy = resp.clone();
            caches.open(CACHE_NAME).then(function(c) { c.put(req, copy); }).catch(function() {});
          }
          return resp;
        }).catch(function() { return caches.match(req); }),
        caches.match('./v5_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v5_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v6_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v6_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v7_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v7_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; })
      ]).then(function(results) {
        var resp = results[0];
        var patch5 = results[1];
        var patch6 = results[2];
        var patch7 = results[3];
        if (!resp) return caches.match(req);
        var patches = (patch5 || '') + '\n' + (patch6 || '') + '\n' + (patch7 || '');
        if (!patches.trim()) return resp;
        return resp.text().then(function(html) {
          var lastIdx = html.lastIndexOf('</script>');
          if (lastIdx >= 0) {
            html = html.substring(0, lastIdx) + '\n' + patches + '\n' + html.substring(lastIdx);
          }
          if (html.indexOf('</html>') === -1) {
            html += '\n</html>';
          }
          return new Response(html, {
            status: 200,
            statusText: 'OK',
            headers: { 'Content-Type': 'text/html; charset=UTF-8' }
          });
        });
      }).catch(function() { return caches.match(req); })
    );
    return;
  }

  // Non-HTML assets: Cache-first for same origin and cloudflare CDN
  if (url.origin !== location.origin && !url.hostname.endsWith('cloudflare.com')) return;
  e.respondWith(
    caches.match(req).then(function(cached) {
      if (cached) return cached;
      return fetch(req).then(function(resp) {
        if (resp && resp.status === 200) {
          var copy = resp.clone();
          caches.open(CACHE_NAME).then(function(c) { c.put(req, copy); }).catch(function() {});
        }
        return resp;
      }).catch(function() { return cached; });
    })
  );
});

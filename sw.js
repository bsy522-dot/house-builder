// Service Worker for House Builder PWA v15
var CACHE_NAME = 'house-builder-v28';
var URLS = [
  './',
  './index.html',
  './manifest.json',
  './v5_patch.js',
  './v6_patch.js',
  './v7_patch.js',
  './v8_patch.js',
  './v9_patch.js',
  './v10_patch.js',
  './v11_patch.js',
  './v12_patch.js',
  './v13_patch.js',
  './v14_patch.js',
  './v15_patch.js',
  './v16_patch.js',
  './v17_patch.js',
  './v18_patch.js',
  './v19_patch.js',
  './v20_patch.js',
  './v21_patch.js',
  './v22_patch.js',
  './v23_patch.js',
  './v24_patch.js',
  './v25_patch.js',
  './v26_patch.js',
  './v27_patch.js',
  './v28_patch.js',
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

  // HTML pages: Network-first + inject v5~v15_patch.js
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
          .catch(function() { return ''; }),
        caches.match('./v8_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v8_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v9_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v9_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v10_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v10_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v11_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v11_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v12_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v12_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v13_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v13_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v14_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v14_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v15_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v15_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v16_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v16_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v17_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v17_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v18_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v18_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v19_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v19_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v20_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v20_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v21_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v21_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v22_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v22_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v23_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v23_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v24_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v24_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v25_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v25_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v26_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v26_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v27_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v27_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; }),
        caches.match('./v28_patch.js')
          .then(function(r) { return r ? r.text() : fetch('./v28_patch.js').then(function(r2) { return r2.text(); }).catch(function() { return ''; }); })
          .catch(function() { return ''; })
      ]).then(function(results) {
        var resp = results[0];
        var patch5 = results[1];
        var patch6 = results[2];
        var patch7 = results[3];
        var patch8 = results[4];
        var patch9 = results[5];
        var patch10 = results[6];
        var patch11 = results[7];
        var patch12 = results[8];
        var patch13 = results[9];
        var patch14 = results[10];
        var patch15 = results[11];
        var patch16 = results[12];
        var patch17 = results[13];
        var patch18 = results[14];
        var patch19 = results[15];
        var patch20 = results[16];
        var patch21 = results[17];
        var patch22 = results[18];
        var patch23 = results[19];
        var patch24 = results[20];
        var patch25 = results[21];
        var patch26 = results[22];
        var patch27 = results[23];
        var patch28 = results[24];
        if (!resp) return caches.match(req);
        var patches = (patch5 || '') + '\n' + (patch6 || '') + '\n' + (patch7 || '') + '\n' + (patch8 || '') + '\n' + (patch9 || '') + '\n' + (patch10 || '') + '\n' + (patch11 || '') + '\n' + (patch12 || '') + '\n' + (patch13 || '') + '\n' + (patch14 || '') + '\n' + (patch15 || '') + '\n' + (patch16 || '') + '\n' + (patch17 || '') + '\n' + (patch18 || '') + '\n' + (patch19 || '') + '\n' + (patch20 || '') + '\n' + (patch21 || '') + '\n' + (patch22 || '') + '\n' + (patch23 || '') + '\n' + (patch24 || '') + '\n' + (patch25 || '') + '\n' + (patch26 || '') + '\n' + (patch27 || '') + '\n' + (patch28 || '');
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

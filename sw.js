// 한국 건축 체험은 배움퀘스트(levelplay) 집짓기로 이사했습니다.
// 예전 기기에 남은 서비스워커를 스스로 지우는 파일입니다.
// 방식: NekR/self-destroying-sw (install -> skipWaiting, activate -> unregister -> 열린 창 이동)
// 이 앱 이름의 캐시(house-builder-v*)만 지웁니다. 같은 주소를 쓰는 다른 앱(배움퀘스트 등)의 캐시는 건드리지 않습니다.
// 이 앱 범위(/house-builder/)의 열린 창은 새 주소로 보냅니다.
// - claim: 브라우저 임시저장(10분)에 남은 옛 화면이 이 파일을 새로 등록한 경우에도 그 창을 넘겨받아 보내기 위함
// - 같은 주소로 새로고침하지 않음: 옛 index.html 이 임시저장에서 다시 떠 등록->해제->새로고침이 되풀이되기 때문
var OWN = /^house-builder-v\d+(-[a-z0-9]+)*$/;
var TO = 'https://bsy522-dot.github.io/levelplay/games/house-builder-v4.html';
self.addEventListener('install', function () {
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  var scope = self.registration.scope;
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return OWN.test(k); }).map(function (k) { return caches.delete(k); }));
      })
      .catch(function () {})
      .then(function () { return self.clients.claim(); })
      .catch(function () {})
      .then(function () { return self.registration.unregister(); })
      .then(function () { return self.clients.matchAll({ type: 'window' }); })
      .then(function (clients) {
        clients.forEach(function (c) {
          try { if (c.navigate && c.url.indexOf(scope) === 0) c.navigate(TO).catch(function () {}); } catch (err) {}
        });
      })
      .catch(function () {})
  );
});

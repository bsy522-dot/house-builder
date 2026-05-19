// =====================================================
// House Builder v6.0 Patch
// 건축도감30+역사연표20+일일도전14+마스터등급5+건축팁10
// 퀴즈12추가(18→30)+업적18추가(32→50)+SFX6종+키보드5종
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV6) {
window.__hbV6 = true;

// ── 1. SEO Meta Tags Enhancement ──
(function(){
  var ms = [
    ['property','og:image','data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 630%27%3E%3Crect width=%271200%27 height=%27630%27 fill=%27%232d1b0e%27/%3E%3Ctext x=%27600%27 y=%27280%27 text-anchor=%27middle%27 fill=%27%23f5deb3%27 font-size=%2764%27 font-family=%27sans-serif%27%3E%ED%95%9C%EA%B5%AD%20%EA%B1%B4%EC%B6%95%20%EC%B2%B4%ED%97%98%3C/text%3E%3Ctext x=%27600%27 y=%27360%27 text-anchor=%27middle%27 fill=%27%23c4956a%27 font-size=%2732%27 font-family=%27sans-serif%27%3E6%EA%B0%80%EC%A7%80%203D%20%EA%B1%B4%EC%B6%95%20%EC%8B%9C%EB%AE%AC%EB%A0%88%EC%9D%B4%ED%84%B0%3C/text%3E%3C/svg%3E'],
    ['name','keywords','한옥,기와집,초가집,서원,정자,건축체험,3D,한국건축,교육게임,PWA,전통건축,건축시뮬레이터'],
    ['name','author','PRIME Holdings'],
    ['name','robots','index,follow'],
    ['property','og:site_name','PRIME Holdings - 한국 건축 체험']
  ];
  ms.forEach(function(d){
    var el=document.createElement('meta');
    el.setAttribute(d[0],d[1]); el.content=d[2];
    document.head.appendChild(el);
  });
  var canon=document.createElement('link');
  canon.rel='canonical';
  canon.href=location.href.split('?')[0];
  document.head.appendChild(canon);
})();

// ── 2. CSS Injection ──
(function(){
  var css=document.createElement('style');
  css.textContent=[
    '#v6EncycPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:3100;overflow-y:auto;padding:16px}',
    '#v6EncycPanel.active{display:block}',
    '.v6e-header{max-width:640px;margin:0 auto 16px;text-align:center}',
    '.v6e-header h2{color:#f5deb3;font-size:24px;margin-bottom:4px}',
    '.v6e-header p{color:#c4956a;font-size:13px}',
    '.v6e-tabs{display:flex;gap:6px;justify-content:center;margin:12px auto;max-width:640px;flex-wrap:wrap}',
    '.v6e-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v6e-tab:hover,.v6e-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v6e-search{max-width:640px;margin:0 auto 16px;display:block;width:100%;padding:10px 14px;border-radius:10px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#f5deb3;font-size:14px;font-family:inherit}',
    '.v6e-search::placeholder{color:rgba(196,149,106,.5)}',
    '.v6e-grid{max-width:640px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:8px}',
    '.v6e-item{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;cursor:pointer;transition:all .2s}',
    '.v6e-item:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v6e-item.expanded{background:rgba(196,149,106,.12)}',
    '.v6e-item h4{color:#f5deb3;font-size:14px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v6e-item h4 .v6e-icon{font-size:20px}',
    '.v6e-item h4 .v6e-cat{font-size:10px;padding:2px 8px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v6e-item .v6e-desc{color:#c4956a;font-size:12px;margin:0}',
    '.v6e-item .v6e-detail{display:none;margin-top:10px;padding-top:10px;border-top:1px solid rgba(196,149,106,.15);color:#e8d5c0;font-size:13px;line-height:1.7}',
    '.v6e-item.expanded .v6e-detail{display:block}',
    '.v6e-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    'body.light-mode .v6e-item{background:rgba(139,105,20,.06);border-color:rgba(139,105,20,.2)}',
    'body.light-mode .v6e-item h4{color:#2d1b0e}',
    '#v6DailyPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:3100;padding:16px;overflow-y:auto}',
    '#v6DailyPanel.active{display:block}',
    '.v6d-card{max-width:500px;margin:40px auto;background:linear-gradient(135deg,#2d1b0e,#4a2c17);border:2px solid #c4956a;border-radius:16px;padding:28px;text-align:center}',
    '.v6d-card h2{color:#f5deb3;font-size:22px;margin-bottom:4px}',
    '.v6d-card .v6d-date{color:#c4956a;font-size:12px;margin-bottom:16px}',
    '.v6d-challenge{background:rgba(0,0,0,.25);border-radius:10px;padding:16px;margin:12px 0;text-align:left}',
    '.v6d-challenge h4{color:#f5deb3;font-size:15px;margin:0 0 6px;display:flex;align-items:center;gap:8px}',
    '.v6d-challenge p{color:#c4956a;font-size:13px;margin:0 0 8px;line-height:1.5}',
    '.v6d-progress{height:6px;background:rgba(255,255,255,.1);border-radius:3px;overflow:hidden;margin-top:8px}',
    '.v6d-fill{height:100%;background:linear-gradient(90deg,#c4956a,#f5deb3);border-radius:3px;transition:width .4s}',
    '.v6d-reward{display:inline-block;padding:4px 10px;border-radius:12px;background:rgba(196,149,106,.2);color:#c4956a;font-size:11px;margin-top:6px}',
    '.v6d-streak{margin-top:16px;padding:12px;background:rgba(255,255,255,.05);border-radius:10px}',
    '.v6d-streak h4{color:#c4956a;font-size:13px;margin:0 0 6px}',
    '.v6d-streak .v6d-dots{display:flex;gap:4px;justify-content:center}',
    '.v6d-dot{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:10px;color:#888}',
    '.v6d-dot.done{background:rgba(196,149,106,.4);color:#f5deb3}',
    '.v6d-dot.today{border:2px solid #c4956a}',
    '#v6TimelinePanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:3100;padding:16px;overflow-y:auto}',
    '#v6TimelinePanel.active{display:block}',
    '.v6t-container{max-width:600px;margin:40px auto}',
    '.v6t-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v6t-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:24px}',
    '.v6t-line{position:relative;padding-left:32px;border-left:2px solid rgba(196,149,106,.3);margin-left:16px}',
    '.v6t-item{position:relative;padding:12px 16px;margin-bottom:16px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.2);border-radius:10px;transition:all .2s}',
    '.v6t-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v6t-item::before{content:"";position:absolute;left:-38px;top:16px;width:10px;height:10px;border-radius:50%;background:#c4956a;border:2px solid #2d1b0e}',
    '.v6t-item .v6t-year{color:#c4956a;font-size:11px;font-weight:700;letter-spacing:1px}',
    '.v6t-item h4{color:#f5deb3;font-size:14px;margin:4px 0}',
    '.v6t-item p{color:#e8d5c0;font-size:12px;line-height:1.6;margin:0}',
    '#v6TipsPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:3100;padding:16px;overflow-y:auto}',
    '#v6TipsPanel.active{display:block}',
    '.v6tips-container{max-width:560px;margin:40px auto}',
    '.v6tips-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:16px}',
    '.v6tip-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:16px;margin:8px 0;display:flex;gap:12px;align-items:flex-start}',
    '.v6tip-card .v6tip-num{width:32px;height:32px;border-radius:50%;background:#c4956a;color:#2d1b0e;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0}',
    '.v6tip-card h4{color:#f5deb3;font-size:14px;margin:0 0 4px}',
    '.v6tip-card p{color:#c4956a;font-size:12px;line-height:1.6;margin:0}',
    '#v6RankBadge{position:fixed;top:68px;left:16px;z-index:96;background:linear-gradient(135deg,rgba(45,27,14,.9),rgba(74,44,23,.9));border:1px solid #c4956a;border-radius:12px;padding:8px 14px;display:none;align-items:center;gap:8px;box-shadow:0 3px 12px rgba(0,0,0,.4)}',
    '#v6RankBadge .v6r-icon{font-size:24px}',
    '#v6RankBadge .v6r-info{font-size:11px}',
    '#v6RankBadge .v6r-name{color:#f5deb3;font-weight:700;font-size:13px}',
    '#v6RankBadge .v6r-xp{color:#c4956a}',
    '.v6r-bar{width:80px;height:4px;background:rgba(255,255,255,.1);border-radius:2px;margin-top:2px}',
    '.v6r-fill{height:100%;background:linear-gradient(90deg,#c4956a,#f5deb3);border-radius:2px;transition:width .4s}',
    '@media(max-width:768px){#v6RankBadge{top:auto;bottom:80px;left:10px;padding:6px 10px}#v6RankBadge .v6r-icon{font-size:18px}.v6r-bar{width:60px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 3. SFX 6종 ──
var v6SFX = {
  encyclopedia: function(){ if(typeof playTone==='function'){playTone(660,0.08,'triangle',0.15);setTimeout(function(){playTone(880,0.12,'triangle',0.18)},80)} },
  daily_complete: function(){ if(typeof playTone==='function'){playTone(523,0.1,'triangle',0.25);setTimeout(function(){playTone(659,0.1,'triangle',0.25)},100);setTimeout(function(){playTone(784,0.15,'triangle',0.25)},200);setTimeout(function(){playTone(1047,0.25,'triangle',0.3)},320)} },
  rank_up: function(){ if(typeof playTone==='function'){[523,659,784,1047,1319].forEach(function(n,i){setTimeout(function(){playTone(n,0.2,'triangle',0.3,0.01,0.25)},i*100)})} },
  timeline: function(){ if(typeof playTone==='function'){playTone(440,0.06,'sine',0.1);setTimeout(function(){playTone(550,0.08,'sine',0.12)},60)} },
  tip: function(){ if(typeof playTone==='function'){playTone(1200,0.05,'triangle',0.1);setTimeout(function(){playTone(1400,0.08,'triangle',0.12)},50)} },
  undo: function(){ if(typeof playTone==='function'){playTone(400,0.1,'sawtooth',0.12);setTimeout(function(){playTone(300,0.15,'sawtooth',0.1)},80)} }
};

// ── 4. 건축 도감 데이터 (30항목) ──
var V6_ENCYCLOPEDIA = [
  {cat:'구조',icon:'🏗️',name:'기단(基壇)',brief:'건물 아래 돌을 쌓은 단',detail:'기단은 땅으로부터 건물을 높여 습기와 벌레를 차단합니다. 자연석 기단과 가공석 기단이 있으며, 양반가일수록 높고 정교합니다. 경복궁 근정전의 기단은 2중 기단입니다.'},
  {cat:'구조',icon:'🪨',name:'주초석(柱礎石)',brief:'기둥 아래 받침돌',detail:'나무 기둥이 땅의 습기를 빨아들이지 않도록 막아주는 돌입니다. 원형, 사각형, 연꽃형 등 다양한 모양이 있으며 불교 사찰에서는 연꽃 주초가 특히 많습니다.'},
  {cat:'구조',icon:'🪵',name:'기둥(柱)',brief:'건물을 떠받치는 수직 목재',detail:'한옥의 기둥은 보통 소나무로 만듭니다. 원기둥(원주)과 사각기둥(각주)이 있으며, 배흘림 기법으로 가운데를 약간 볼록하게 깎아 시각적 안정감을 줍니다.'},
  {cat:'구조',icon:'📏',name:'보(樑)',brief:'기둥 위 수평 대들보',detail:'기둥과 기둥을 가로로 연결하며 지붕 무게를 기둥에 전달합니다. 대들보는 가장 크고 중요한 보로, 상량식 때 날짜와 소원을 적어 넣습니다.'},
  {cat:'구조',icon:'🔩',name:'도리(桁)',brief:'보 위에 세로로 놓는 목재',detail:'서까래를 받쳐주는 역할을 합니다. 가장 꼭대기의 마룻도리(종도리)가 대표적이며, 도리 개수에 따라 3량집, 5량집이라 부릅니다.'},
  {cat:'지붕',icon:'🏠',name:'서까래(椽)',brief:'지붕 골격을 이루는 빗살',detail:'도리 위에 비스듬히 걸치는 가느다란 나무입니다. 한옥 지붕의 아름다운 곡선은 서까래의 배치 덕분이며, 처마 끝이 살짝 올라가는 것이 특징입니다.'},
  {cat:'지붕',icon:'🏛️',name:'기와(瓦)',brief:'흙을 구워 만든 지붕 재료',detail:'암키와와 수키와를 번갈아 올립니다. 청기와는 왕실 전용이었으며, 막새에는 연꽃, 도깨비 등 다양한 무늬를 새겼습니다. 기와 한 장의 수명은 100년 이상입니다.'},
  {cat:'지붕',icon:'🎪',name:'팔작지붕',brief:'가장 화려한 전통 지붕형',detail:'네 면에 모두 경사가 있으면서 양쪽에 삼각형 합각(박공)이 있는 지붕입니다. 용마루, 내림마루, 추녀마루가 어우러져 가장 격식 높은 지붕으로 여겨집니다.'},
  {cat:'지붕',icon:'🌿',name:'초가지붕',brief:'볏짚으로 엮은 서민의 지붕',detail:'가을 추수 후 나온 볏짚으로 지붕을 엮습니다. 매년 새 볏짚으로 교체해야 하며, 마을 사람들이 함께하는 이엉잇기는 중요한 공동체 행사였습니다.'},
  {cat:'난방',icon:'🔥',name:'온돌(溫突)',brief:'세계 유일 바닥난방 시스템',detail:'아궁이에서 불을 때면 뜨거운 연기가 방바닥 아래 고래(煙道)를 지나가며 방을 데웁니다. 한국 고유의 발명으로 현대 바닥난방의 원조입니다.'},
  {cat:'난방',icon:'🪹',name:'아궁이',brief:'불을 때는 입구',detail:'온돌의 시작점으로, 보통 부엌에 위치합니다. 밥도 짓고 방도 데우는 일석이조의 공간입니다. 부뚜막이라고도 합니다.'},
  {cat:'공간',icon:'🏯',name:'대청마루',brief:'여름용 개방형 거실',detail:'바닥 아래로 바람이 지나가는 자연 에어컨입니다. 가족이 모여 이야기하고, 제사를 지내는 중심 공간으로, 한옥의 핵심 생활 공간입니다.'},
  {cat:'공간',icon:'🚪',name:'창호(窓戶)',brief:'나무살에 한지 붙인 문',detail:'창호는 채광, 환기, 단열을 모두 담당합니다. 꽃살문의 문양은 모란(부귀), 국화(절개), 매화(지조)를 상징하며, 한지는 숨을 쉬어 결로가 생기지 않습니다.'},
  {cat:'공간',icon:'🏡',name:'사랑채',brief:'남성 주인의 별도 건물',detail:'손님 접대와 학문 연구를 위한 공간입니다. 안채와 분리되어 유교적 내외 구분을 반영하며, 풍류를 즐기는 정원이 딸려 있습니다.'},
  {cat:'공간',icon:'🏘️',name:'안채',brief:'여성 중심의 생활 공간',detail:'안방, 건넌방, 부엌이 있는 가족의 주 거주 공간입니다. 대문에서 가장 안쪽에 위치하여 외부인의 시선으로부터 보호됩니다.'},
  {cat:'장식',icon:'🎨',name:'단청(丹青)',brief:'목조 건물의 전통 채색',detail:'오방색(청, 적, 황, 백, 흑)을 기본으로 합니다. 목재를 보호하고 아름답게 장식하며, 궁궐과 사찰에서 특히 화려합니다. 머리초, 별지화, 모로단청 등 등급이 있습니다.'},
  {cat:'장식',icon:'👹',name:'잡상(雜像)',brief:'지붕 위 액막이 장식',detail:'추녀마루 위에 올려놓는 작은 토우 인형입니다. 삼장법사, 손오공 등 서유기 인물이 많으며, 건물의 격에 따라 3~11개를 올립니다. 경복궁이 가장 많습니다.'},
  {cat:'장식',icon:'🐉',name:'용마루',brief:'지붕 꼭대기의 마루장',detail:'지붕의 가장 높은 곳을 따라 놓는 수평 장식입니다. 양 끝에 치미(鴟尾)나 취두(鷲頭) 같은 장식물을 올려 격식을 높였습니다.'},
  {cat:'교육',icon:'📚',name:'서원(書院)',brief:'유교 성현을 모시는 학당',detail:'조선시대 사립 교육기관으로, 강학(학문)과 제향(제사) 두 기능을 합니다. 한국의 서원 9곳이 2019년 유네스코 세계유산에 등재되었습니다.'},
  {cat:'교육',icon:'🏛️',name:'정자(亭子)',brief:'자연 속 풍류의 공간',detail:'벽 없이 기둥과 지붕만으로 이루어진 개방형 건물입니다. 산수 경치가 좋은 곳에 세워 시를 짓고, 자연을 감상하며, 학문을 토론하는 장소였습니다.'},
  {cat:'교육',icon:'🎓',name:'향교(鄕校)',brief:'지방 관립 교육기관',detail:'고려~조선시대 각 고을에 설치된 관립 학교입니다. 서원이 사립이라면 향교는 국립으로, 공자를 모시는 대성전이 반드시 있습니다.'},
  {cat:'기법',icon:'🔨',name:'결구법(結構法)',brief:'못 없이 짜맞추는 기술',detail:'한옥은 못을 사용하지 않고 나무 이음과 맞춤으로 조립합니다. 장부촉, 주먹장, 숨은장부 등 수십 가지 기법이 있으며, 이 덕분에 지진에도 잘 버팁니다.'},
  {cat:'기법',icon:'🧱',name:'심벽(心壁)',brief:'나무 뼈대에 흙을 바른 벽',detail:'외 엮기(대나무나 나뭇가지)에 초벽, 재벽, 마감벽 순서로 흙을 발라 완성합니다. 짚을 섞은 황토는 갈라지지 않고 단열 효과가 뛰어납니다.'},
  {cat:'기법',icon:'🪜',name:'배흘림',brief:'기둥 가운데를 볼록하게',detail:'기둥의 1/3 지점을 약간 볼록하게 깎는 기법입니다. 착시 교정 효과로 기둥이 곧고 안정적으로 보이게 만들며, 그리스 파르테논 신전의 엔타시스와 유사합니다.'},
  {cat:'기법',icon:'📐',name:'귀솟음',brief:'건물 모서리를 살짝 올림',detail:'처마 네 귀퉁이가 하늘을 향해 살짝 치켜 올라간 것입니다. 시각적으로 건물이 처지지 않게 보이게 하며, 한옥 지붕의 우아한 곡선을 만들어냅니다.'},
  {cat:'근현대',icon:'🏢',name:'한옥마을',brief:'전통과 현대의 공존',detail:'전주 한옥마을, 북촌 한옥마을 등이 대표적입니다. 전통 한옥을 보존하면서 카페, 게스트하우스 등 현대적 용도로 활용하는 도시재생의 모범 사례입니다.'},
  {cat:'근현대',icon:'🏗️',name:'한옥 신축',brief:'현대 기술의 전통 건축',detail:'단열, 방수, 구조보강에 현대 기술을 적용한 신한옥이 주목받고 있습니다. 목구조에 유리를 결합하거나, 콘크리트 기초 위에 전통 목구조를 올리기도 합니다.'},
  {cat:'근현대',icon:'🌍',name:'K-건축',brief:'세계에 알려진 한국 건축',detail:'서원 유네스코 등재(2019), 한옥 호텔의 세계적 인기, 온돌의 바닥난방 수출 등 한국 전통 건축이 세계적으로 인정받고 있습니다.'},
  {cat:'재료',icon:'🪨',name:'화강석(花崗石)',brief:'기단과 주초에 쓰는 돌',detail:'한반도에 풍부한 화강암은 강도가 높고 아름다워 기단, 석축, 석탑에 널리 사용됩니다. 경복궁 근정전의 기단도 화강석입니다.'},
  {cat:'재료',icon:'🌲',name:'소나무(松)',brief:'한옥의 핵심 목재',detail:'결이 곧고 송진이 많아 내구성이 뛰어납니다. 금강송(춘양목)이 최고급으로, 궁궐과 양반가에 사용되었습니다. 현재는 문화재 수리에도 금강송을 씁니다.'}
];

// ── 5. 역사 연표 데이터 (20항목) ──
var V6_TIMELINE = [
  {year:'BC 6000',title:'빗살무늬토기 움집',desc:'신석기시대 반지하 움집. 지붕에 나뭇가지와 풀을 덮은 원시 주거의 시작.'},
  {year:'BC 1000',title:'고인돌과 귀틀집',desc:'청동기시대 지상 가옥 등장. 통나무를 우물 정(井)자로 쌓아 올리는 귀틀집.'},
  {year:'BC 37',title:'고구려 온돌 발명',desc:'고구려에서 세계 최초의 바닥난방 시스템 온돌(溫突) 등장. 한국 건축의 혁명.'},
  {year:'372',title:'불교 전래와 사찰 건축',desc:'고구려에 불교 전래. 목탑, 금당, 회랑 등 사찰 건축 양식이 한반도에 꽃피기 시작.'},
  {year:'634',title:'황룡사 9층 목탑',desc:'백제 장인 아비지가 신라 경주에 건설. 높이 약 80m로 동아시아 최대 규모의 목조 건축물.'},
  {year:'751',title:'불국사와 석굴암',desc:'통일신라의 건축 정점. 석축 기단, 석교, 석굴 등 돌과 나무의 완벽한 조화를 보여줌.'},
  {year:'918',title:'고려 개경 건축',desc:'개경(개성)에 궁궐과 사찰을 대대적으로 건설. 청자 기와, 팔작지붕 양식 발전.'},
  {year:'1096',title:'부석사 무량수전',desc:'현존 최고(最古)의 목조 건물 중 하나. 배흘림 기둥과 주심포 양식의 걸작.'},
  {year:'1395',title:'경복궁 창건',desc:'조선 건국 후 정궁 건설. 근정전의 이중 기단과 팔작지붕은 궁궐 건축의 정점.'},
  {year:'1405',title:'창덕궁 후원',desc:'자연 지형을 살린 조경의 걸작. 1997년 유네스코 세계유산 등재.'},
  {year:'1543',title:'소수서원 설립',desc:'조선 최초의 서원. 풍기군수 주세붕이 안향을 기리기 위해 설립. 한국 서원의 시작.'},
  {year:'1592',title:'임진왜란 건축 소실',desc:'전쟁으로 경복궁 등 주요 건물 소실. 이후 재건 과정에서 건축 기술이 재정립됨.'},
  {year:'1610',title:'도산서원 완성',desc:'퇴계 이황을 기리는 서원. 검소하면서도 학문적 위엄을 갖춘 유교 건축의 모범.'},
  {year:'1796',title:'수원화성 축성',desc:'정조의 명으로 정약용이 설계. 거중기 등 과학적 기구를 사용한 혁신적 성곽 건축.'},
  {year:'1868',title:'경복궁 중건',desc:'흥선대원군의 대대적 중건. 7700여 칸 규모로 조선 궁궐 건축의 마지막 전성기.'},
  {year:'1910',title:'일제강점기 건축 수난',desc:'조선총독부 건물이 경복궁 앞에 세워지는 등 전통 건축이 큰 수난을 겪음.'},
  {year:'1962',title:'문화재보호법 제정',desc:'전통 건축물의 체계적 보호가 시작. 숭례문, 경복궁 등이 국보로 지정됨.'},
  {year:'1997',title:'창덕궁 세계유산 등재',desc:'유네스코 세계문화유산으로 등재. 자연과 인공의 조화를 인정받음.'},
  {year:'2019',title:'한국의 서원 9곳 등재',desc:'소수서원, 도산서원 등 9개 서원이 유네스코 세계유산에 등재. 유교 건축의 가치를 세계가 인정.'},
  {year:'2020',title:'신한옥과 K-건축',desc:'전통과 현대 기술을 결합한 신한옥 보급. 한옥 호텔, 한옥 카페 등 세계적 관심 증가.'}
];

// ── 6. 일일 도전 데이터 (14종) ──
var V6_DAILY_CHALLENGES = [
  {icon:'🏯',title:'한옥 장인',desc:'한옥을 처음부터 끝까지 완성하세요',mode:'hanok',type:'complete'},
  {icon:'🌾',title:'초가집의 날',desc:'초가집을 완성하고 사진을 찍으세요',mode:'choga',type:'complete_photo'},
  {icon:'🏛️',title:'양반 건축가',desc:'기와집을 3분 안에 완성하세요',mode:'giwajip',type:'speed'},
  {icon:'📚',title:'서원 탐구',desc:'서원을 완성하고 퀴즈를 풀어보세요',mode:'seowon',type:'complete_quiz'},
  {icon:'🏠',title:'현대 건축',desc:'현대 주택을 완성하세요',mode:'modern',type:'complete'},
  {icon:'🌙',title:'달밤의 건축',desc:'밤 모드에서 아무 건축을 완성하세요',mode:null,type:'night_build'},
  {icon:'❄️',title:'겨울 건축',desc:'겨울 계절에서 건축을 완성하세요',mode:null,type:'winter_build'},
  {icon:'📸',title:'건축 사진가',desc:'사진을 3장 이상 찍으세요',mode:null,type:'photos'},
  {icon:'🧠',title:'퀴즈 도전',desc:'아무 모드에서 퀴즈를 만점 받으세요',mode:null,type:'quiz_perfect'},
  {icon:'🎵',title:'풍류의 날',desc:'BGM을 켜고 3분 이상 건축하세요',mode:null,type:'bgm_build'},
  {icon:'🏛️',title:'정자의 풍류',desc:'정자를 완성하세요',mode:'jeongja',type:'complete'},
  {icon:'🌸',title:'봄꽃 건축',desc:'봄 계절에서 건축을 완성하세요',mode:null,type:'spring_build'},
  {icon:'🎨',title:'재료 탐험',desc:'5가지 이상 다른 재료를 사용하세요',mode:null,type:'materials'},
  {icon:'⚡',title:'번개 건축',desc:'아무 모드를 2분 안에 완성하세요',mode:null,type:'ultra_speed'}
];

// ── 7. 건축 팁 가이드 (10개) ──
var V6_TIPS = [
  {title:'재료 선택의 중요성',text:'각 단계마다 2가지 재료 중 하나를 고를 수 있어요. 재료에 따라 3D 모델의 색상이 달라지고, 다양한 재료를 사용할수록 업적을 얻을 수 있습니다.'},
  {title:'계절별 분위기 변화',text:'봄(벚꽃)→여름(비)→가을(낙엽)→겨울(눈)로 계절을 바꿔보세요. 같은 건물도 계절에 따라 완전히 다른 분위기를 연출합니다.'},
  {title:'밤/낮 전환 활용',text:'N키를 누르면 낮↔밤이 전환됩니다. 밤에 건축을 완성하면 특별 업적을 획득할 수 있어요!'},
  {title:'워크스루 모드',text:'건축 완성 후 워크스루(W키) 모드를 켜면 건물 안을 둘러보는 듯한 카메라 앵글로 감상할 수 있습니다.'},
  {title:'사진 찍기 팁',text:'P키로 사진을 찍을 수 있어요. 각도(드래그), 줌(휠), 계절, 밤낮을 조합해서 멋진 건축 사진을 남겨보세요.'},
  {title:'키보드 단축키 활용',text:'Space=짓기, R=리셋, M=음소거, B=BGM, 1~4=계절, E=도감, D=일일도전, L=연표 등 다양한 단축키가 있습니다.'},
  {title:'비교 기능',text:'건축 완성 후 비교 버튼을 누르면 전통 건축과 현대 건축의 차이점을 상세히 비교할 수 있어요.'},
  {title:'세이브와 공유',text:'S키로 세이브 슬롯에 진행 상황을 저장하고, 건축 완성 후 공유 카드를 만들어 자랑할 수 있습니다.'},
  {title:'업적 수집하기',text:'다양한 조건(모든 모드 완성, 밤건축, 스피드클리어 등)의 업적이 50개 있어요. 통계 메뉴에서 진행 상황을 확인하세요.'},
  {title:'효율적인 건축 순서',text:'쉬운 초가집(7단계)부터 시작해서 한옥(10단계)→기와집(9단계)→서원(8단계)→정자(8단계)→현대주택(8단계) 순서를 추천합니다.'}
];

// ── 8. 마스터 등급 시스템 ──
var V6_RANKS = [
  {name:'견습 건축가',icon:'🔰',minXP:0,color:'#888888'},
  {name:'숙련 건축가',icon:'🪚',minXP:100,color:'#c4956a'},
  {name:'건축 장인',icon:'🏗️',minXP:300,color:'#DAA520'},
  {name:'건축 대가',icon:'👑',minXP:600,color:'#FF6B6B'},
  {name:'국보급 명장',icon:'🏆',minXP:1000,color:'#FFD700'}
];

function v6CalcXP(){
  var d=loadProgress();
  var xp=0;
  var c=d.completed||{};
  Object.keys(c).forEach(function(){xp+=50});
  var a=d.achievements||{};
  Object.keys(a).forEach(function(){xp+=15});
  var m=d.materialsUsed||{};
  xp+=Object.keys(m).length*3;
  xp+=(d.photoCount||0)*5;
  xp+=Math.floor((d.factsShown||0)*2);
  xp+=(d.quizCorrect||0)*8;
  xp+=(d.dailyStreak||0)*20;
  return xp;
}

function v6GetRank(xp){
  var rank=V6_RANKS[0];
  for(var i=V6_RANKS.length-1;i>=0;i--){
    if(xp>=V6_RANKS[i].minXP){rank=V6_RANKS[i];break}
  }
  return rank;
}

function v6GetNextRank(xp){
  for(var i=0;i<V6_RANKS.length;i++){
    if(xp<V6_RANKS[i].minXP) return V6_RANKS[i];
  }
  return null;
}

// ── 9. 새 업적 18개 (32→50) ──
ACHIEVEMENTS.encyclopedia_5 = {name:'건축 학도',icon:'📖',desc:'도감 5항목 이상 열람'};
ACHIEVEMENTS.encyclopedia_20 = {name:'건축 박사',icon:'🎓',desc:'도감 20항목 이상 열람'};
ACHIEVEMENTS.daily_first = {name:'일일 도전 시작',icon:'📅',desc:'첫 일일 도전 완료'};
ACHIEVEMENTS.daily_7 = {name:'일주일 연속',icon:'🔥',desc:'일일 도전 7일 연속 달성'};
ACHIEVEMENTS.rank_artisan = {name:'장인 등극',icon:'🏗️',desc:'건축 장인 등급 달성'};
ACHIEVEMENTS.rank_master = {name:'대가 등극',icon:'👑',desc:'건축 대가 등급 달성'};
ACHIEVEMENTS.rank_national = {name:'국보급 명장',icon:'🏆',desc:'국보급 명장 등급 달성'};
ACHIEVEMENTS.timeline_explorer = {name:'역사 탐험가',icon:'⏳',desc:'역사 연표 5회 이상 열람'};
ACHIEVEMENTS.tips_reader = {name:'건축 지식인',icon:'💡',desc:'건축 팁 전부 읽기'};
ACHIEVEMENTS.total_xp_500 = {name:'경험치 500',icon:'⭐',desc:'총 경험치 500 이상'};
ACHIEVEMENTS.total_photos_20 = {name:'사진 작가',icon:'🖼️',desc:'사진 20장 이상 촬영'};
ACHIEVEMENTS.all_season_all_mode = {name:'사계 육관왕',icon:'🌈',desc:'모든 계절+모든 모드 조합 경험'};
ACHIEVEMENTS.speed_ultra = {name:'초음속 건축',icon:'🚀',desc:'90초 안에 건축 완성'};
ACHIEVEMENTS.quiz_30 = {name:'퀴즈 30문',icon:'📝',desc:'퀴즈 누적 30문 이상 정답'};
ACHIEVEMENTS.night_all = {name:'야행성 건축왕',icon:'🦉',desc:'밤에 모든 모드 완성'};
ACHIEVEMENTS.materials_40 = {name:'재료 만물상',icon:'🧰',desc:'40가지 재료 사용'};
ACHIEVEMENTS.build_count_20 = {name:'20회 건축',icon:'🔨',desc:'총 건축 완성 20회'};
ACHIEVEMENTS.bgm_30min = {name:'풍류객',icon:'🎼',desc:'BGM 총 30분 이상 감상'};

// ── 10. 새 퀴즈 12문 (18→30) ──
QUIZZES.hanok.push(
  {q:'한옥에서 못 없이 나무를 짜맞추는 기술은?',opts:['결구법','단청법','심벽법','이엉잇기'],answer:0,exp:'결구법은 장부촉, 주먹장 등으로 못 없이 조립하는 한옥의 핵심 기술입니다.'},
  {q:'기둥 가운데를 약간 볼록하게 깎는 기법은?',opts:['귀솟음','배흘림','안쏠림','솟을지붕'],answer:1,exp:'배흘림은 기둥 1/3 지점을 볼록하게 깎아 시각적 안정감을 주는 기법입니다.'}
);
QUIZZES.modern.push(
  {q:'현대 아파트의 바닥난방 기술은 어디서 유래했나요?',opts:['로마','한국 온돌','중국','일본'],answer:1,exp:'한국 온돌이 현대 바닥난방의 원조입니다. 전 세계로 수출되고 있어요.'},
  {q:'이중유리 창문의 두 유리 사이에 있는 것은?',opts:['진공','공기/가스층','물','젤'],answer:1,exp:'두 유리 사이 공기 또는 아르곤 가스층이 단열과 방음 효과를 높여줍니다.'}
);
QUIZZES.choga.push(
  {q:'초가집의 아궁이는 어떤 역할을 동시에 하나요?',opts:['요리+난방','세탁+건조','조명+환기','저장+보관'],answer:0,exp:'아궁이에서 밥도 짓고 온돌로 방도 데우는 일석이조의 공간입니다.'},
  {q:'초가집 벽에 짚을 섞는 이유는?',opts:['예뻐서','갈라짐 방지','색 때문에','향기 때문에'],answer:1,exp:'짚을 섞으면 흙벽이 마르면서 갈라지는 것을 방지하고 강도가 높아집니다.'}
);
QUIZZES.giwajip.push(
  {q:'양반가에서 지붕 위 추녀마루에 올려놓는 작은 인형은?',opts:['잡상','기린','봉황','해태'],answer:0,exp:'잡상은 서유기 인물 등을 본뜬 토우 인형으로, 액막이 장식입니다.'},
  {q:'양반가의 기둥 위에서 지붕을 받치는 구조물은?',opts:['추녀','공포','서까래','도리'],answer:1,exp:'공포(栱包)는 기둥 위에서 지붕 하중을 분산하는 한국 건축의 꽃입니다.'}
);
QUIZZES.seowon.push(
  {q:'서원의 배치 원칙인 전학후묘의 뜻은?',opts:['앞에 학당, 뒤에 사당','앞에 사당, 뒤에 학당','좌우 대칭','원형 배치'],answer:0,exp:'전학후묘는 앞쪽에 강학 공간(강당), 뒤쪽 높은 곳에 사당을 두는 배치입니다.'},
  {q:'2019년 유네스코에 등재된 한국 서원은 몇 곳?',opts:['5곳','7곳','9곳','11곳'],answer:2,exp:'소수서원, 도산서원 등 9개 서원이 한국의 서원으로 세계유산에 등재되었습니다.'}
);

// ── 11. 건축 도감 UI ──
var v6EncycViewCount=0;
var v6EncycViewedItems={};

function v6ShowEncyc(){
  v6SFX.encyclopedia();
  var panel=document.getElementById('v6EncycPanel');
  if(!panel){
    panel=document.createElement('div');
    panel.id='v6EncycPanel';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-modal','true');
    document.body.appendChild(panel);
  }
  var cats=['전체','구조','지붕','난방','공간','장식','교육','기법','근현대','재료'];
  var tabsHtml=cats.map(function(c){return '<button class="v6e-tab'+(c==='전체'?' active':'')+'" data-cat="'+c+'">'+c+'</button>'}).join('');
  var itemsHtml=V6_ENCYCLOPEDIA.map(function(item,i){
    return '<div class="v6e-item" data-idx="'+i+'" data-cat="'+item.cat+'">'+
      '<h4><span class="v6e-icon">'+item.icon+'</span>'+item.name+'<span class="v6e-cat">'+item.cat+'</span></h4>'+
      '<p class="v6e-desc">'+item.brief+'</p>'+
      '<div class="v6e-detail">'+item.detail+'</div></div>';
  }).join('');
  panel.innerHTML='<div class="v6e-header"><h2>📖 건축 도감</h2><p>한국 전통 건축의 모든 것 ('+V6_ENCYCLOPEDIA.length+'항목)</p></div>'+
    '<div class="v6e-tabs">'+tabsHtml+'</div>'+
    '<input class="v6e-search" placeholder="검색어를 입력하세요..." id="v6eSearch">'+
    '<div class="v6e-grid" id="v6eGrid">'+itemsHtml+'</div>'+
    '<button class="v6e-close" onclick="v6CloseEncyc()">닫기</button>';
  panel.classList.add('active');

  panel.querySelectorAll('.v6e-tab').forEach(function(tab){
    tab.onclick=function(){
      panel.querySelectorAll('.v6e-tab').forEach(function(t){t.classList.remove('active')});
      this.classList.add('active');
      v6FilterEncyc(this.getAttribute('data-cat'),'');
    };
  });
  panel.querySelectorAll('.v6e-item').forEach(function(item){
    item.onclick=function(){
      this.classList.toggle('expanded');
      var idx=parseInt(this.getAttribute('data-idx'));
      if(!v6EncycViewedItems[idx]){
        v6EncycViewedItems[idx]=true;
        v6EncycViewCount++;
        var d=loadProgress();
        d.encycViewed=(d.encycViewed||0)+1;
        saveProgress(d);
        if(d.encycViewed>=5)earnAchievement('encyclopedia_5');
        if(d.encycViewed>=20)earnAchievement('encyclopedia_20');
      }
    };
  });
  var searchEl=document.getElementById('v6eSearch');
  if(searchEl){
    searchEl.oninput=function(){
      var activeTab=panel.querySelector('.v6e-tab.active');
      var cat=activeTab?activeTab.getAttribute('data-cat'):'전체';
      v6FilterEncyc(cat,this.value);
    };
  }
}

function v6FilterEncyc(cat,query){
  var items=document.querySelectorAll('#v6eGrid .v6e-item');
  var q=(query||'').toLowerCase();
  items.forEach(function(item){
    var itemCat=item.getAttribute('data-cat');
    var matchCat=(cat==='전체'||itemCat===cat);
    var text=(item.textContent||'').toLowerCase();
    var matchQ=!q||text.indexOf(q)>=0;
    item.style.display=(matchCat&&matchQ)?'block':'none';
  });
}

function v6CloseEncyc(){
  var p=document.getElementById('v6EncycPanel');
  if(p)p.classList.remove('active');
}

// ── 12. 역사 연표 UI ──
var v6TimelineViewCount=0;

function v6ShowTimeline(){
  v6SFX.timeline();
  v6TimelineViewCount++;
  var d=loadProgress();
  d.timelineViews=(d.timelineViews||0)+1;
  saveProgress(d);
  if(d.timelineViews>=5)earnAchievement('timeline_explorer');

  var panel=document.getElementById('v6TimelinePanel');
  if(!panel){
    panel=document.createElement('div');
    panel.id='v6TimelinePanel';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-modal','true');
    document.body.appendChild(panel);
  }
  var itemsHtml=V6_TIMELINE.map(function(item){
    return '<div class="v6t-item"><div class="v6t-year">'+item.year+'</div><h4>'+item.title+'</h4><p>'+item.desc+'</p></div>';
  }).join('');
  panel.innerHTML='<div class="v6t-container"><h2>⏳ 한국 건축 역사 연표</h2><p>BC 6000년부터 현재까지 한국 건축의 발자취</p>'+
    '<div class="v6t-line">'+itemsHtml+'</div>'+
    '<button class="v6e-close" onclick="v6CloseTimeline()">닫기</button></div>';
  panel.classList.add('active');
}

function v6CloseTimeline(){
  var p=document.getElementById('v6TimelinePanel');
  if(p)p.classList.remove('active');
}

// ── 13. 일일 도전 UI ──
function v6GetTodayIdx(){
  var d=new Date();
  var seed=d.getFullYear()*10000+((d.getMonth()+1)*100)+d.getDate();
  return seed%V6_DAILY_CHALLENGES.length;
}

function v6GetDailyData(){
  var d=loadProgress();
  return d.daily||{};
}

function v6SaveDailyData(dd){
  var d=loadProgress();
  d.daily=dd;
  saveProgress(d);
}

function v6ShowDaily(){
  v6SFX.tip();
  var panel=document.getElementById('v6DailyPanel');
  if(!panel){
    panel=document.createElement('div');
    panel.id='v6DailyPanel';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-modal','true');
    document.body.appendChild(panel);
  }
  var idx=v6GetTodayIdx();
  var ch=V6_DAILY_CHALLENGES[idx];
  var dd=v6GetDailyData();
  var today=new Date().toISOString().slice(0,10);
  var completed=dd.lastDate===today&&dd.completed;
  var streak=dd.streak||0;

  var dotsHtml='';
  for(var i=0;i<7;i++){
    var pastDate=new Date();
    pastDate.setDate(pastDate.getDate()-6+i);
    var dateStr=pastDate.toISOString().slice(0,10);
    var isDone=dd.history&&dd.history[dateStr];
    var isToday=dateStr===today;
    dotsHtml+='<div class="v6d-dot'+(isDone?' done':'')+(isToday?' today':'')+'">'+
      (isDone?'✓':(pastDate.getDate()))+'</div>';
  }

  panel.innerHTML='<div class="v6d-card"><h2>📅 일일 도전</h2>'+
    '<div class="v6d-date">'+today+' ('+['일','월','화','수','목','금','토'][new Date().getDay()]+'요일)</div>'+
    '<div class="v6d-challenge"><h4>'+ch.icon+' '+ch.title+(completed?' ✅':'')+'</h4>'+
    '<p>'+ch.desc+'</p>'+
    '<div class="v6d-progress"><div class="v6d-fill" style="width:'+(completed?100:0)+'%"></div></div>'+
    '<div class="v6d-reward">'+(completed?'🎉 완료! +20 XP':'도전 보상: +20 XP')+'</div></div>'+
    '<div class="v6d-streak"><h4>🔥 연속 도전: '+streak+'일</h4>'+
    '<div class="v6d-dots">'+dotsHtml+'</div></div>'+
    '<button class="v6e-close" onclick="v6CloseDaily()">닫기</button></div>';
  panel.classList.add('active');
}

function v6CloseDaily(){
  var p=document.getElementById('v6DailyPanel');
  if(p)p.classList.remove('active');
}

function v6CompleteDaily(){
  var dd=v6GetDailyData();
  var today=new Date().toISOString().slice(0,10);
  if(dd.lastDate===today&&dd.completed)return;

  if(!dd.history)dd.history={};
  var yesterday=new Date();
  yesterday.setDate(yesterday.getDate()-1);
  var yStr=yesterday.toISOString().slice(0,10);

  if(dd.lastDate===yStr&&dd.completed){
    dd.streak=(dd.streak||0)+1;
  } else if(dd.lastDate!==today){
    dd.streak=1;
  }
  dd.lastDate=today;
  dd.completed=true;
  dd.history[today]=true;
  v6SaveDailyData(dd);
  earnAchievement('daily_first');
  if(dd.streak>=7)earnAchievement('daily_7');
  v6SFX.daily_complete();
  v6UpdateRankBadge();
}

// ── 14. 건축 팁 UI ──
var v6TipsRead={};

function v6ShowTips(){
  v6SFX.tip();
  var panel=document.getElementById('v6TipsPanel');
  if(!panel){
    panel=document.createElement('div');
    panel.id='v6TipsPanel';
    panel.setAttribute('role','dialog');
    panel.setAttribute('aria-modal','true');
    document.body.appendChild(panel);
  }
  var itemsHtml=V6_TIPS.map(function(tip,i){
    return '<div class="v6tip-card" data-idx="'+i+'"><div class="v6tip-num">'+(i+1)+'</div><div><h4>'+tip.title+'</h4><p>'+tip.text+'</p></div></div>';
  }).join('');
  panel.innerHTML='<div class="v6tips-container"><h2>💡 건축 팁 가이드</h2>'+itemsHtml+
    '<button class="v6e-close" onclick="v6CloseTips()">닫기</button></div>';
  panel.classList.add('active');

  panel.querySelectorAll('.v6tip-card').forEach(function(card){
    card.onclick=function(){
      var idx=parseInt(this.getAttribute('data-idx'));
      v6TipsRead[idx]=true;
      if(Object.keys(v6TipsRead).length>=V6_TIPS.length){
        earnAchievement('tips_reader');
      }
    };
  });
}

function v6CloseTips(){
  var p=document.getElementById('v6TipsPanel');
  if(p)p.classList.remove('active');
}

// ── 15. 등급 배지 UI ──
function v6InitRankBadge(){
  var badge=document.createElement('div');
  badge.id='v6RankBadge';
  badge.innerHTML='<div class="v6r-icon"></div><div class="v6r-info"><div class="v6r-name"></div><div class="v6r-xp"></div><div class="v6r-bar"><div class="v6r-fill"></div></div></div>';
  badge.onclick=function(){showStats()};
  badge.style.cursor='pointer';
  badge.title='클릭하여 통계 보기';
  document.body.appendChild(badge);
}

function v6UpdateRankBadge(){
  var badge=document.getElementById('v6RankBadge');
  if(!badge)return;
  var xp=v6CalcXP();
  var rank=v6GetRank(xp);
  var next=v6GetNextRank(xp);

  badge.querySelector('.v6r-icon').textContent=rank.icon;
  badge.querySelector('.v6r-name').textContent=rank.name;
  badge.querySelector('.v6r-xp').textContent=xp+' XP';

  var pct=100;
  if(next){
    var range=next.minXP-rank.minXP;
    var progress=xp-rank.minXP;
    pct=Math.min(100,Math.floor((progress/range)*100));
  }
  badge.querySelector('.v6r-fill').style.width=pct+'%';
  badge.querySelector('.v6r-fill').style.background='linear-gradient(90deg,'+rank.color+',#f5deb3)';

  if(xp>=300)earnAchievement('rank_artisan');
  if(xp>=600)earnAchievement('rank_master');
  if(xp>=1000)earnAchievement('rank_national');
  if(xp>=500)earnAchievement('total_xp_500');
}

// ── 16. Hook: afterBuild for daily challenge check ──
var _v6ab=afterBuild;
afterBuild=function(){
  _v6ab();

  var d=loadProgress();
  d.buildCount=(d.buildCount||0)+1;
  saveProgress(d);
  if(d.buildCount>=20)earnAchievement('build_count_20');

  var elapsed=(Date.now()-gameStartTime)/1000;
  if(elapsed<90)earnAchievement('speed_ultra');

  v6CheckDailyChallenge();
  v6UpdateRankBadge();
  v6CheckExtraAchievements();
};

// ── 17. Hook: answerQuiz for tracking ──
var _v6aq=answerQuiz;
answerQuiz=function(idx){
  _v6aq(idx);
  var q=quizState.list[quizState.idx];
  if(idx===(q.answer!==undefined?q.answer:q.ans)){
    var d=loadProgress();
    d.quizCorrect=(d.quizCorrect||0)+1;
    saveProgress(d);
    if(d.quizCorrect>=30)earnAchievement('quiz_30');
  }
};

// ── 18. Hook: startGame for rank badge ──
var _v6sg=startGame;
startGame=function(mode){
  _v6sg(mode);
  var badge=document.getElementById('v6RankBadge');
  if(badge)badge.style.display='flex';
  v6UpdateRankBadge();
};

// ── 19. Hook: resetGame to hide rank badge ──
var _v6rg=resetGame;
resetGame=function(){
  _v6rg();
  var badge=document.getElementById('v6RankBadge');
  if(badge)badge.style.display='none';
};

// ── 20. Daily challenge check logic ──
function v6CheckDailyChallenge(){
  var idx=v6GetTodayIdx();
  var ch=V6_DAILY_CHALLENGES[idx];
  var dd=v6GetDailyData();
  var today=new Date().toISOString().slice(0,10);
  if(dd.lastDate===today&&dd.completed)return;

  var passed=false;
  switch(ch.type){
    case 'complete':
      if(isComplete&&(ch.mode===null||gameMode===ch.mode))passed=true;
      break;
    case 'complete_photo':
      if(isComplete&&gameMode===ch.mode){var d=loadProgress();if((d.photoCount||0)>0)passed=true}
      break;
    case 'speed':
      var el=(Date.now()-gameStartTime)/1000;
      if(isComplete&&gameMode===ch.mode&&el<180)passed=true;
      break;
    case 'complete_quiz':
      if(isComplete&&gameMode===ch.mode)passed=true;
      break;
    case 'night_build':
      if(isComplete&&isNight)passed=true;
      break;
    case 'winter_build':
      if(isComplete&&currentSeason==='winter')passed=true;
      break;
    case 'spring_build':
      if(isComplete&&currentSeason==='spring')passed=true;
      break;
    case 'photos':
      var d2=loadProgress();if((d2.photoCount||0)>=3)passed=true;
      break;
    case 'quiz_perfect':
      if(quizState.correct===quizState.list.length&&quizState.list.length>0)passed=true;
      break;
    case 'bgm_build':
      if(isComplete&&bgmTotalTime>=180)passed=true;
      break;
    case 'materials':
      var d3=loadProgress();if(Object.keys(d3.materialsUsed||{}).length>=5)passed=true;
      break;
    case 'ultra_speed':
      var el2=(Date.now()-gameStartTime)/1000;
      if(isComplete&&el2<120)passed=true;
      break;
  }
  if(passed)v6CompleteDaily();
}

// ── 21. Extra achievement checks ──
function v6CheckExtraAchievements(){
  var d=loadProgress();
  if((d.photoCount||0)>=20)earnAchievement('total_photos_20');
  if(Object.keys(d.materialsUsed||{}).length>=40)earnAchievement('materials_40');

  var nc=d.nightCompleted||{};
  if(nc.hanok&&nc.choga&&nc.giwajip&&nc.modern&&nc.seowon&&nc.jeongja)earnAchievement('night_all');

  if(bgmTotalTime>=1800)earnAchievement('bgm_30min');
}

// ── 22. Hook: keyboard shortcuts ──
var _v6kd=null;
(function(){
  window.addEventListener('keydown',function(e){
    if(!document.getElementById('modeSelect').classList.contains('hidden'))return;
    if(document.getElementById('v6EncycPanel')&&document.getElementById('v6EncycPanel').classList.contains('active')){
      if(e.key==='Escape')v6CloseEncyc();return;
    }
    if(document.getElementById('v6DailyPanel')&&document.getElementById('v6DailyPanel').classList.contains('active')){
      if(e.key==='Escape')v6CloseDaily();return;
    }
    if(document.getElementById('v6TimelinePanel')&&document.getElementById('v6TimelinePanel').classList.contains('active')){
      if(e.key==='Escape')v6CloseTimeline();return;
    }
    if(document.getElementById('v6TipsPanel')&&document.getElementById('v6TipsPanel').classList.contains('active')){
      if(e.key==='Escape')v6CloseTips();return;
    }

    if(e.key==='e'||e.key==='E'){if(!e.ctrlKey)v6ShowEncyc()}
    else if(e.key==='d'||e.key==='D'){if(!e.ctrlKey)v6ShowDaily()}
    else if(e.key==='l'||e.key==='L'){if(!e.ctrlKey)v6ShowTimeline()}
    else if(e.key==='g'||e.key==='G'){if(!e.ctrlKey)v6ShowTips()}
    else if(e.key==='?'){v6ShowTips()}
  },true);
})();

// ── 23. Update keyboard hint ──
(function(){
  var hint=document.getElementById('kbdHint');
  if(hint){
    hint.innerHTML+=' &nbsp; <kbd>E</kbd> 도감 &nbsp; <kbd>D</kbd> 일일도전 &nbsp; <kbd>L</kbd> 연표 &nbsp; <kbd>G</kbd> 건축팁';
  }
})();

// ── 24. Add menu buttons to mode select ──
(function(){
  var wait=setInterval(function(){
    var ms=document.getElementById('modeSelect');
    if(!ms)return;
    clearInterval(wait);

    if(ms.querySelector('#v6MenuBtns'))return;
    var jeCard=ms.querySelector('.mode-cards');
    if(!jeCard)return;

    // Add jeongja card if not already present
    if(!ms.querySelector('.jeongja-card')){
      var jc=document.createElement('div');
      jc.className='mode-card jeongja-card';
      jc.onclick=function(){startGame('jeongja')};
      jc.innerHTML='<div class="mode-icon">🏛️</div><h3>정자 (亭子)</h3><p>벽 없이 기둥과 지붕만으로<br>자연 속 풍류의 공간을<br>직접 지어보세요</p><div style="margin-top:10px;font-size:11px;color:rgb(100,200,150)">8 단계 &middot; 풍류 공간</div>';
      jeCard.appendChild(jc);
    }

    var btns=document.createElement('div');
    btns.id='v6MenuBtns';
    btns.style.cssText='display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap';
    btns.innerHTML='<button onclick="v6ShowEncyc()" style="padding:8px 16px;border:1px solid rgba(196,149,106,.3);background:rgba(196,149,106,.1);color:#c4956a;border-radius:20px;cursor:pointer;font-family:inherit;font-size:13px">📖 건축 도감</button>'+
      '<button onclick="v6ShowDaily()" style="padding:8px 16px;border:1px solid rgba(196,149,106,.3);background:rgba(196,149,106,.1);color:#c4956a;border-radius:20px;cursor:pointer;font-family:inherit;font-size:13px">📅 일일 도전</button>'+
      '<button onclick="v6ShowTimeline()" style="padding:8px 16px;border:1px solid rgba(196,149,106,.3);background:rgba(196,149,106,.1);color:#c4956a;border-radius:20px;cursor:pointer;font-family:inherit;font-size:13px">⏳ 역사 연표</button>'+
      '<button onclick="v6ShowTips()" style="padding:8px 16px;border:1px solid rgba(196,149,106,.3);background:rgba(196,149,106,.1);color:#c4956a;border-radius:20px;cursor:pointer;font-family:inherit;font-size:13px">💡 건축 팁</button>';
    ms.appendChild(btns);
  },200);
})();

// ── 25. Init ──
v6InitRankBadge();
v6UpdateRankBadge();

// Restore encyclopedia view count
(function(){
  var d=loadProgress();
  v6EncycViewCount=d.encycViewed||0;
})();

} // end __hbV6 guard

// =====================================================
// House Builder v7.0 Patch
// 가구배치20종+날씨효과4종+건축예산+평면도뷰+미션8종
// 갤러리+재료사전15+스피드빌드+퀴즈15추가(30→45)
// 업적12추가(50→62)+SFX6종+키보드5종
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV7) {
window.__hbV7 = true;

// ── 1. CSS Injection ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '#v7FurniturePanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7FurniturePanel.active{display:block}',
    '.v7f-container{max-width:640px;margin:40px auto}',
    '.v7f-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v7f-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v7f-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v7f-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v7f-tab:hover,.v7f-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v7f-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}',
    '.v7f-item{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v7f-item:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v7f-item.placed{border-color:#4a7c59;background:rgba(74,124,89,.1)}',
    '.v7f-item .v7f-icon{font-size:32px;margin-bottom:6px}',
    '.v7f-item .v7f-name{color:#f5deb3;font-size:12px;font-weight:600}',
    '.v7f-item .v7f-cost{color:#c4956a;font-size:11px;margin-top:2px}',
    '#v7WeatherPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7WeatherPanel.active{display:block}',
    '.v7w-container{max-width:500px;margin:60px auto;text-align:center}',
    '.v7w-container h2{color:#f5deb3;font-size:22px;margin-bottom:4px}',
    '.v7w-container>p{color:#c4956a;font-size:13px;margin-bottom:24px}',
    '.v7w-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}',
    '.v7w-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px;padding:20px;cursor:pointer;transition:all .3s}',
    '.v7w-card:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v7w-card.active{border-color:#f5deb3;background:rgba(196,149,106,.2);box-shadow:0 0 16px rgba(196,149,106,.3)}',
    '.v7w-card .v7w-icon{font-size:40px;margin-bottom:8px}',
    '.v7w-card h4{color:#f5deb3;font-size:14px;margin:0 0 4px}',
    '.v7w-card p{color:#c4956a;font-size:11px;margin:0}',
    '#v7BudgetPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7BudgetPanel.active{display:block}',
    '.v7b-container{max-width:560px;margin:40px auto}',
    '.v7b-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v7b-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v7b-bar{height:24px;background:rgba(255,255,255,.08);border-radius:12px;overflow:hidden;margin:12px 0;position:relative}',
    '.v7b-fill{height:100%;background:linear-gradient(90deg,#4a7c59,#c4956a);border-radius:12px;transition:width .4s}',
    '.v7b-fill.over{background:linear-gradient(90deg,#c44a4a,#ff6b6b)}',
    '.v7b-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0}',
    '.v7b-stat{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:12px;text-align:center}',
    '.v7b-stat .val{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v7b-stat .lbl{font-size:11px;color:#c4956a;margin-top:2px}',
    '.v7b-items{max-height:260px;overflow-y:auto}',
    '.v7b-item{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid rgba(196,149,106,.1)}',
    '.v7b-item span:first-child{color:#e8d5c0;font-size:13px}',
    '.v7b-item span:last-child{color:#c4956a;font-size:13px;font-weight:600}',
    '#v7FloorPlanPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:3200;overflow:hidden;padding:16px}',
    '#v7FloorPlanPanel.active{display:block}',
    '.v7fp-container{max-width:600px;margin:40px auto;text-align:center}',
    '.v7fp-container h2{color:#f5deb3;font-size:22px;margin-bottom:4px}',
    '.v7fp-container>p{color:#c4956a;font-size:13px;margin-bottom:16px}',
    '#v7fpCanvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;background:#1a1208;max-width:100%}',
    '.v7fp-legend{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:12px}',
    '.v7fp-legend span{display:flex;align-items:center;gap:4px;font-size:11px;color:#c4956a}',
    '.v7fp-legend .dot{width:12px;height:12px;border-radius:3px}',
    '#v7MissionPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7MissionPanel.active{display:block}',
    '.v7m-container{max-width:580px;margin:40px auto}',
    '.v7m-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v7m-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v7m-list{display:flex;flex-direction:column;gap:10px}',
    '.v7m-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px;padding:16px;transition:all .2s}',
    '.v7m-card:hover{background:rgba(196,149,106,.12)}',
    '.v7m-card.completed{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v7m-card h4{color:#f5deb3;font-size:14px;margin:0 0 6px;display:flex;align-items:center;gap:8px}',
    '.v7m-card h4 .badge{font-size:10px;padding:2px 8px;border-radius:8px}',
    '.v7m-card h4 .badge.easy{background:rgba(74,124,89,.3);color:#8fc9a0}',
    '.v7m-card h4 .badge.medium{background:rgba(196,149,106,.3);color:#f5deb3}',
    '.v7m-card h4 .badge.hard{background:rgba(196,74,74,.3);color:#ff8a8a}',
    '.v7m-card p{color:#c4956a;font-size:12px;margin:0 0 8px;line-height:1.5}',
    '.v7m-card .v7m-reward{display:inline-block;padding:3px 10px;border-radius:10px;background:rgba(196,149,106,.15);color:#c4956a;font-size:11px}',
    '#v7GalleryPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7GalleryPanel.active{display:block}',
    '.v7g-container{max-width:640px;margin:40px auto}',
    '.v7g-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v7g-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v7g-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px}',
    '.v7g-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px;overflow:hidden;transition:all .2s}',
    '.v7g-card:hover{transform:translateY(-2px);border-color:#c4956a}',
    '.v7g-card .v7g-thumb{height:100px;background:linear-gradient(135deg,#2d1b0e,#4a2c17);display:flex;align-items:center;justify-content:center;font-size:36px}',
    '.v7g-card .v7g-info{padding:10px}',
    '.v7g-card .v7g-info h4{color:#f5deb3;font-size:13px;margin:0 0 4px}',
    '.v7g-card .v7g-info p{color:#c4956a;font-size:11px;margin:0}',
    '.v7g-card .v7g-stars{color:#c4956a;font-size:12px;margin-top:4px}',
    '#v7MaterialPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7MaterialPanel.active{display:block}',
    '.v7mat-container{max-width:600px;margin:40px auto}',
    '.v7mat-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v7mat-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v7mat-grid{display:grid;grid-template-columns:1fr;gap:8px}',
    '.v7mat-item{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;cursor:pointer;transition:all .2s}',
    '.v7mat-item:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v7mat-item.expanded{background:rgba(196,149,106,.12)}',
    '.v7mat-item h4{color:#f5deb3;font-size:14px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v7mat-item h4 .ico{font-size:20px}',
    '.v7mat-item .desc{color:#c4956a;font-size:12px;margin:0}',
    '.v7mat-item .detail{display:none;margin-top:10px;padding-top:10px;border-top:1px solid rgba(196,149,106,.15);color:#e8d5c0;font-size:13px;line-height:1.7}',
    '.v7mat-item.expanded .detail{display:block}',
    '.v7mat-item .props{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}',
    '.v7mat-item .prop{padding:3px 10px;border-radius:8px;background:rgba(196,149,106,.15);color:#c4956a;font-size:10px}',
    '#v7SpeedPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v7SpeedPanel.active{display:block}',
    '.v7s-container{max-width:500px;margin:60px auto;text-align:center}',
    '.v7s-container h2{color:#f5deb3;font-size:22px;margin-bottom:4px}',
    '.v7s-container>p{color:#c4956a;font-size:13px;margin-bottom:24px}',
    '.v7s-timer{font-size:48px;font-weight:700;color:#f5deb3;margin:20px 0;font-variant-numeric:tabular-nums}',
    '.v7s-records{margin-top:20px}',
    '.v7s-records h4{color:#c4956a;font-size:13px;margin-bottom:8px}',
    '.v7s-record{display:flex;justify-content:space-between;padding:6px 12px;border-bottom:1px solid rgba(196,149,106,.1);color:#e8d5c0;font-size:13px}',
    '.v7s-record .time{color:#f5deb3;font-weight:600}',
    '.v7-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v7-close:hover{background:#d4a57a}',
    '#v7QuickBtns{position:fixed;bottom:16px;left:16px;display:flex;flex-direction:column;gap:6px;z-index:95}',
    '#v7QuickBtns button{padding:8px 14px;border:1px solid rgba(196,149,106,.3);border-radius:20px;background:rgba(30,20,10,.85);color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit;transition:all .2s;backdrop-filter:blur(8px)}',
    '#v7QuickBtns button:hover{background:rgba(196,149,106,.3);border-color:#c4956a}',
    '@media(max-width:768px){.v7f-grid{grid-template-columns:repeat(2,1fr)}.v7w-grid{grid-template-columns:1fr}.v7g-grid{grid-template-columns:1fr 1fr}#v7QuickBtns{bottom:70px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection ──
(function(){
  var panels = [
    '<div id="v7FurniturePanel"></div>',
    '<div id="v7WeatherPanel"></div>',
    '<div id="v7BudgetPanel"></div>',
    '<div id="v7FloorPlanPanel"></div>',
    '<div id="v7MissionPanel"></div>',
    '<div id="v7GalleryPanel"></div>',
    '<div id="v7MaterialPanel"></div>',
    '<div id="v7SpeedPanel"></div>',
    '<div id="v7QuickBtns"></div>'
  ].join('');
  var d = document.createElement('div');
  d.innerHTML = panels;
  while(d.firstChild) document.body.appendChild(d.firstChild);
})();

// ── 3. Web Audio SFX v7 ──
var v7SFX = {};
(function(){
  var ctx = null;
  function getCtx(){ if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); return ctx; }
  function play(type){
    if(window.muted) return;
    try{
      var c = getCtx(), o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      var t = c.currentTime;
      switch(type){
        case 'furniture_place':
          o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+0.1);
          g.gain.setValueAtTime(0.25,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t); o.stop(t+0.2); break;
        case 'weather_change':
          o.type='sine'; o.frequency.setValueAtTime(330,t); o.frequency.linearRampToValueAtTime(440,t+0.15);
          o.frequency.linearRampToValueAtTime(550,t+0.3);
          g.gain.setValueAtTime(0.2,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.35);
          o.start(t); o.stop(t+0.35); break;
        case 'budget_spend':
          o.type='triangle'; o.frequency.setValueAtTime(880,t); o.frequency.linearRampToValueAtTime(440,t+0.1);
          g.gain.setValueAtTime(0.2,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.15);
          o.start(t); o.stop(t+0.15); break;
        case 'mission_complete':
          o.type='sine'; o.frequency.setValueAtTime(523,t);
          o.frequency.setValueAtTime(659,t+0.1); o.frequency.setValueAtTime(784,t+0.2);
          o.frequency.setValueAtTime(1047,t+0.3);
          g.gain.setValueAtTime(0.3,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.5);
          o.start(t); o.stop(t+0.5); break;
        case 'gallery_save':
          o.type='sine'; o.frequency.setValueAtTime(660,t); o.frequency.linearRampToValueAtTime(880,t+0.12);
          g.gain.setValueAtTime(0.2,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t); o.stop(t+0.2); break;
        case 'speed_tick':
          o.type='square'; o.frequency.setValueAtTime(1200,t);
          g.gain.setValueAtTime(0.08,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.05);
          o.start(t); o.stop(t+0.05); break;
      }
    }catch(e){}
  }
  v7SFX.play = play;
})();

// ── 4. Furniture System (20 items) ──
var v7Furniture = {
  data: [
    {id:'f1',name:'상(밥상)',cat:'traditional',icon:'🍜',cost:50,desc:'좌식용 원형 소반. 한옥 대청마루에 배치'},
    {id:'f2',name:'반닫이',cat:'traditional',icon:'📦',cost:120,desc:'의복이나 서류를 보관하는 전통 가구'},
    {id:'f3',name:'문갑',cat:'traditional',icon:'📚',cost:80,desc:'문방사우를 올려놓는 낮은 탁자'},
    {id:'f4',name:'병풍',cat:'traditional',icon:'🎨',cost:150,desc:'산수화가 그려진 접이식 가림막'},
    {id:'f5',name:'다탁(찻상)',cat:'traditional',icon:'🍵',cost:60,desc:'차를 우려 마시는 작은 탁자'},
    {id:'f6',name:'장승',cat:'outdoor',icon:'🧍',cost:40,desc:'마을 수호신. 대문 양쪽에 세움'},
    {id:'f7',name:'석등',cat:'outdoor',icon:'🕯️',cost:70,desc:'정원을 밝히는 돌로 만든 등잔'},
    {id:'f8',name:'연못',cat:'outdoor',icon:'🌊',cost:200,desc:'한옥 정원의 사각형 연지'},
    {id:'f9',name:'석탑',cat:'outdoor',icon:'🗼',cost:180,desc:'3층 석탑. 서원/사찰 앞마당'},
    {id:'f10',name:'징검다리',cat:'outdoor',icon:'🪨',cost:30,desc:'정원 산책로를 잇는 넓적한 돌'},
    {id:'f11',name:'소파',cat:'modern',icon:'🛋️',cost:250,desc:'현대 거실 3인용 소파'},
    {id:'f12',name:'TV',cat:'modern',icon:'📺',cost:300,desc:'65인치 벽걸이 텔레비전'},
    {id:'f13',name:'냉장고',cat:'modern',icon:'🧊',cost:280,desc:'양문형 스테인리스 냉장고'},
    {id:'f14',name:'책상',cat:'modern',icon:'🖥️',cost:180,desc:'L자형 컴퓨터 책상'},
    {id:'f15',name:'조명(펜던트)',cat:'modern',icon:'💡',cost:90,desc:'천장 매달이 조명'},
    {id:'f16',name:'화분(대나무)',cat:'garden',icon:'🎋',cost:35,desc:'바람에 흔들리는 대나무 화분'},
    {id:'f17',name:'장독대',cat:'garden',icon:'🏺',cost:45,desc:'된장/간장/고추장 보관 옹기'},
    {id:'f18',name:'우물',cat:'garden',icon:'🚿',cost:100,desc:'두레박이 달린 전통 우물'},
    {id:'f19',name:'방앗간',cat:'garden',icon:'⚙️',cost:160,desc:'곡물을 빻는 디딜방아'},
    {id:'f20',name:'그네',cat:'garden',icon:'🎠',cost:55,desc:'큰 나무에 매달린 전통 그네'}
  ],
  placed: [],
  load: function(){
    try{ var d = JSON.parse(localStorage.getItem('hb_v7_furniture')||'[]'); this.placed = d; }catch(e){ this.placed=[]; }
  },
  save: function(){ localStorage.setItem('hb_v7_furniture', JSON.stringify(this.placed)); },
  place: function(id){
    if(this.placed.indexOf(id)===-1){ this.placed.push(id); this.save(); v7SFX.play('furniture_place'); v7Budget.spend(this.getItem(id).cost); v7Achieve.check(); }
  },
  getItem: function(id){ return this.data.find(function(x){return x.id===id;}); },
  render: function(){
    this.load();
    var cats = [{k:'all',l:'전체'},{k:'traditional',l:'전통가구'},{k:'outdoor',l:'정원'},{k:'modern',l:'현대'},{k:'garden',l:'마당'}];
    var self = this;
    var html = '<div class="v7f-container"><h2>가구 배치</h2><p>20종 전통/현대 가구를 건물에 배치하세요</p>';
    html += '<div class="v7f-tabs">';
    cats.forEach(function(c){ html += '<button class="v7f-tab'+(c.k==='all'?' active':'')+'" data-cat="'+c.k+'">'+c.l+'</button>'; });
    html += '</div><div class="v7f-grid" id="v7fGrid">';
    self.data.forEach(function(item){
      var placed = self.placed.indexOf(item.id)!==-1;
      html += '<div class="v7f-item'+(placed?' placed':'')+'" data-id="'+item.id+'" data-cat="'+item.cat+'" onclick="v7Furniture.place(\''+item.id+'\');v7Furniture.render();">';
      html += '<div class="v7f-icon">'+item.icon+'</div>';
      html += '<div class="v7f-name">'+item.name+'</div>';
      html += '<div class="v7f-cost">'+(placed?'✅ 배치완료':item.cost+'낥')+'</div></div>';
    });
    html += '</div><button class="v7-close" onclick="v7Close(\'v7FurniturePanel\')">닫기</button></div>';
    document.getElementById('v7FurniturePanel').innerHTML = html;
    document.querySelectorAll('.v7f-tab').forEach(function(tab){
      tab.onclick = function(){
        document.querySelectorAll('.v7f-tab').forEach(function(t){t.classList.remove('active');});
        tab.classList.add('active');
        var cat = tab.getAttribute('data-cat');
        document.querySelectorAll('.v7f-item').forEach(function(el){
          el.style.display = (cat==='all'||el.getAttribute('data-cat')===cat)?'':'none';
        });
      };
    });
  }
};

// ── 5. Weather System ──
var v7Weather = {
  current: 'clear',
  types: [
    {id:'clear',name:'맑음',icon:'☀️',desc:'청명한 하늘, 건축 최적의 날씨'},
    {id:'rain',name:'비',icon:'🌧️',desc:'처마가 빗물을 막아주는 한옥 지붕'},
    {id:'snow',name:'눈',icon:'❄️',desc:'기와지붕 위 하얀 눈 쌓임'},
    {id:'fog',name:'안개',icon:'🌫️',desc:'산속 서원에 자욱한 안개'}
  ],
  set: function(type){
    this.current = type;
    localStorage.setItem('hb_v7_weather', type);
    v7SFX.play('weather_change');
    this.applyEffect();
    this.render();
    v7Achieve.check();
  },
  applyEffect: function(){
    var old = document.getElementById('v7WeatherCanvas');
    if(old) old.remove();
    if(this.current === 'clear') return;
    var canvas = document.createElement('canvas');
    canvas.id = 'v7WeatherCanvas';
    canvas.style.cssText = 'position:fixed;top:56px;left:0;right:0;bottom:0;pointer-events:none;z-index:50';
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 56;
    var particles = [];
    var type = this.current;
    for(var i=0;i<(type==='snow'?60:type==='rain'?120:40);i++){
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: type==='rain'?-1:type==='snow'?(Math.random()-0.5)*0.5:0,
        vy: type==='rain'?12+Math.random()*6:type==='snow'?1+Math.random()*1.5:0,
        size: type==='rain'?1.5:type==='snow'?2+Math.random()*3:0,
        alpha: type==='fog'?0.02+Math.random()*0.03:0.6+Math.random()*0.4
      });
    }
    function animate(){
      if(!document.getElementById('v7WeatherCanvas')) return;
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if(type==='fog'){
        ctx.fillStyle='rgba(200,200,210,0.08)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        particles.forEach(function(p){
          p.x += (Math.random()-0.5)*2;
          p.y += (Math.random()-0.5)*0.5;
          ctx.beginPath();
          ctx.arc(p.x,p.y,30+Math.random()*20,0,Math.PI*2);
          ctx.fillStyle='rgba(200,200,220,'+p.alpha+')';
          ctx.fill();
        });
      } else {
        particles.forEach(function(p){
          p.x += p.vx; p.y += p.vy;
          if(p.y>canvas.height){p.y=0;p.x=Math.random()*canvas.width;}
          if(p.x<0) p.x=canvas.width;
          ctx.globalAlpha = p.alpha;
          if(type==='rain'){
            ctx.strokeStyle='#aaccff';
            ctx.lineWidth=p.size;
            ctx.beginPath();
            ctx.moveTo(p.x,p.y);
            ctx.lineTo(p.x+p.vx*2,p.y+p.vy*2);
            ctx.stroke();
          } else {
            ctx.fillStyle='#fff';
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fill();
          }
        });
      }
      ctx.globalAlpha=1;
      requestAnimationFrame(animate);
    }
    animate();
  },
  render: function(){
    var self = this;
    var html = '<div class="v7w-container"><h2>날씨 효과</h2><p>건물 위 날씨를 바꿔보세요</p><div class="v7w-grid">';
    self.types.forEach(function(w){
      html += '<div class="v7w-card'+(self.current===w.id?' active':'')+'" onclick="v7Weather.set(\''+w.id+'\')">';
      html += '<div class="v7w-icon">'+w.icon+'</div><h4>'+w.name+'</h4><p>'+w.desc+'</p></div>';
    });
    html += '</div><button class="v7-close" onclick="v7Close(\'v7WeatherPanel\')">닫기</button></div>';
    document.getElementById('v7WeatherPanel').innerHTML = html;
  }
};

// ── 6. Budget System ──
var v7Budget = {
  total: 5000,
  spent: 0,
  log: [],
  load: function(){
    try{
      var d = JSON.parse(localStorage.getItem('hb_v7_budget')||'{}');
      this.spent = d.spent||0; this.log = d.log||[];
    }catch(e){}
  },
  save: function(){ localStorage.setItem('hb_v7_budget', JSON.stringify({spent:this.spent,log:this.log})); },
  spend: function(amount, label){
    this.load();
    this.spent += amount;
    this.log.push({label:label||'가구/재료',amount:amount,time:Date.now()});
    if(this.log.length>30) this.log = this.log.slice(-30);
    this.save();
    v7SFX.play('budget_spend');
    v7Achieve.check();
  },
  render: function(){
    this.load();
    var pct = Math.min(100, (this.spent/this.total)*100);
    var remaining = this.total - this.spent;
    var html = '<div class="v7b-container"><h2>건축 예산</h2><p>총 예산 '+this.total+'낥 내에서 건축하세요</p>';
    html += '<div class="v7b-bar"><div class="v7b-fill'+(pct>100?' over':'')+'" style="width:'+Math.min(100,pct)+'%"></div></div>';
    html += '<div class="v7b-stats">';
    html += '<div class="v7b-stat"><div class="val">'+this.total+'</div><div class="lbl">총 예산</div></div>';
    html += '<div class="v7b-stat"><div class="val">'+this.spent+'</div><div class="lbl">사용액</div></div>';
    html += '<div class="v7b-stat"><div class="val" style="color:'+(remaining<0?'#ff6b6b':'#8fc9a0')+'">'+remaining+'</div><div class="lbl">잔액</div></div>';
    html += '</div>';
    if(this.log.length){
      html += '<div class="v7b-items">';
      this.log.slice().reverse().forEach(function(item){
        html += '<div class="v7b-item"><span>'+item.label+'</span><span>-'+item.amount+'낥</span></div>';
      });
      html += '</div>';
    }
    html += '<button class="v7-close" onclick="v7Close(\'v7BudgetPanel\')">닫기</button></div>';
    document.getElementById('v7BudgetPanel').innerHTML = html;
  }
};

// ── 7. Floor Plan View ──
var v7FloorPlan = {
  render: function(){
    var html = '<div class="v7fp-container"><h2>평면도 뷰</h2><p>건물을 위에서 내려다본 2D 도면</p>';
    html += '<canvas id="v7fpCanvas" width="500" height="400"></canvas>';
    html += '<div class="v7fp-legend">';
    html += '<span><span class="dot" style="background:#c4956a"></span> 벽체</span>';
    html += '<span><span class="dot" style="background:#4a7c59"></span> 기둥</span>';
    html += '<span><span class="dot" style="background:#6a9fd4"></span> 문/창</span>';
    html += '<span><span class="dot" style="background:#d4a06a"></span> 바닥</span>';
    html += '</div><button class="v7-close" onclick="v7Close(\'v7FloorPlanPanel\')">닫기</button></div>';
    document.getElementById('v7FloorPlanPanel').innerHTML = html;
    setTimeout(function(){ v7FloorPlan.draw(); }, 50);
  },
  draw: function(){
    var canvas = document.getElementById('v7fpCanvas');
    if(!canvas) return;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1a1208';
    ctx.fillRect(0,0,500,400);
    ctx.strokeStyle = 'rgba(196,149,106,0.3)';
    ctx.lineWidth = 0.5;
    for(var i=0;i<500;i+=25){ ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,400);ctx.stroke(); }
    for(var j=0;j<400;j+=25){ ctx.beginPath();ctx.moveTo(0,j);ctx.lineTo(500,j);ctx.stroke(); }
    var mode = window.currentMode || 'hanok';
    var plans = {
      hanok: [{type:'wall',x:50,y:50,w:400,h:300},{type:'floor',x:60,y:60,w:180,h:130},{type:'floor',x:260,y:60,w:180,h:130},{type:'floor',x:60,y:210,w:380,h:130},{type:'pillar',x:60,y:60},{type:'pillar',x:240,y:60},{type:'pillar',x:440,y:60},{type:'pillar',x:60,y:190},{type:'pillar',x:240,y:190},{type:'pillar',x:440,y:190},{type:'pillar',x:60,y:340},{type:'pillar',x:440,y:340},{type:'door',x:220,y:340,w:60},{type:'window',x:100,y:50,w:40},{type:'window',x:360,y:50,w:40}],
      giwajip: [{type:'wall',x:40,y:60,w:420,h:280},{type:'floor',x:50,y:70,w:140,h:120},{type:'floor',x:210,y:70,w:120,h:120},{type:'floor',x:350,y:70,w:100,h:120},{type:'floor',x:50,y:210,w:400,h:120},{type:'pillar',x:50,y:70},{type:'pillar',x:190,y:70},{type:'pillar',x:450,y:70},{type:'pillar',x:50,y:330},{type:'pillar',x:450,y:330},{type:'door',x:210,y:330,w:80},{type:'window',x:80,y:60,w:50},{type:'window',x:370,y:60,w:50}],
      choga: [{type:'wall',x:80,y:80,w:340,h:240},{type:'floor',x:90,y:90,w:150,h:220},{type:'floor',x:260,y:90,w:150,h:220},{type:'pillar',x:90,y:90},{type:'pillar',x:240,y:90},{type:'pillar',x:410,y:90},{type:'pillar',x:90,y:310},{type:'pillar',x:410,y:310},{type:'door',x:230,y:310,w:40}],
      modern: [{type:'wall',x:30,y:40,w:440,h:320},{type:'floor',x:40,y:50,w:200,h:150},{type:'floor',x:260,y:50,w:200,h:150},{type:'floor',x:40,y:220,w:130,h:130},{type:'floor',x:190,y:220,w:130,h:130},{type:'floor',x:340,y:220,w:120,h:130},{type:'door',x:220,y:350,w:60},{type:'window',x:60,y:40,w:80},{type:'window',x:360,y:40,w:80},{type:'window',x:30,y:150,w:10}],
      seowon: [{type:'wall',x:50,y:40,w:400,h:320},{type:'floor',x:60,y:50,w:380,h:140},{type:'floor',x:60,y:210,w:180,h:140},{type:'floor',x:260,y:210,w:180,h:140},{type:'pillar',x:60,y:50},{type:'pillar',x:250,y:50},{type:'pillar',x:440,y:50},{type:'pillar',x:60,y:190},{type:'pillar',x:250,y:190},{type:'pillar',x:440,y:190},{type:'pillar',x:60,y:350},{type:'pillar',x:440,y:350},{type:'door',x:230,y:350,w:40},{type:'door',x:250,y:190,w:40}],
      jeongja: [{type:'wall',x:100,y:80,w:300,h:240},{type:'floor',x:110,y:90,w:280,h:220},{type:'pillar',x:110,y:90},{type:'pillar',x:390,y:90},{type:'pillar',x:110,y:310},{type:'pillar',x:390,y:310},{type:'pillar',x:250,y:90},{type:'pillar',x:250,y:310}]
    };
    var plan = plans[mode] || plans.hanok;
    plan.forEach(function(p){
      switch(p.type){
        case 'wall':
          ctx.strokeStyle='#c4956a'; ctx.lineWidth=3;
          ctx.strokeRect(p.x,p.y,p.w,p.h); break;
        case 'floor':
          ctx.fillStyle='rgba(212,160,106,0.15)';
          ctx.fillRect(p.x,p.y,p.w,p.h);
          ctx.strokeStyle='rgba(212,160,106,0.4)'; ctx.lineWidth=1;
          ctx.strokeRect(p.x,p.y,p.w,p.h); break;
        case 'pillar':
          ctx.fillStyle='#4a7c59';
          ctx.beginPath(); ctx.arc(p.x,p.y,6,0,Math.PI*2); ctx.fill(); break;
        case 'door':
          ctx.fillStyle='#6a9fd4';
          ctx.fillRect(p.x,p.y-3,p.w,6); break;
        case 'window':
          ctx.fillStyle='rgba(106,159,212,0.6)';
          ctx.fillRect(p.x,p.y-2,p.w,4); break;
      }
    });
    ctx.fillStyle='#c4956a'; ctx.font='12px sans-serif'; ctx.textAlign='center';
    var labels = {hanok:'한옥',giwajip:'기와집',choga:'초가집',modern:'현대주택',seowon:'서원',jeongja:'정자'};
    ctx.fillText((labels[mode]||'한옥')+' 평면도', 250, 390);
  }
};

// ── 8. Mission System (8 missions) ──
var v7Mission = {
  missions: [
    {id:'m1',name:'첫 건축 입문',diff:'easy',desc:'한옥 모드를 완성하세요',reward:'XP 50',check:function(){return v7Mission.hasDone('hanok');}},
    {id:'m2',name:'전통 건축가',diff:'medium',desc:'한옥+기와집+초가집 3종 모두 완성',reward:'XP 150',check:function(){return v7Mission.hasDone('hanok')&&v7Mission.hasDone('giwajip')&&v7Mission.hasDone('choga');}},
    {id:'m3',name:'서원 장인',diff:'medium',desc:'서원 모드를 완성하고 사진 쳨영',reward:'XP 100',check:function(){return v7Mission.hasDone('seowon');}},
    {id:'m4',name:'모든 건축 마스터',diff:'hard',desc:'6가지 모드 전부 완성',reward:'XP 300',check:function(){return ['hanok','giwajip','choga','seowon','jeongja','modern'].every(function(m){return v7Mission.hasDone(m);});}},
    {id:'m5',name:'가구 수집가',diff:'easy',desc:'가구 5개 이상 배치',reward:'XP 60',check:function(){v7Furniture.load();return v7Furniture.placed.length>=5;}},
    {id:'m6',name:'날씨 탐험가',diff:'easy',desc:'모든 날씨 효과를 체험',reward:'XP 40',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v7_weather_tried')||'[]');return d.length>=4;}catch(e){return false;}}},
    {id:'m7',name:'예산 달인',diff:'medium',desc:'예산 50% 이하로 건축 완성',reward:'XP 120',check:function(){v7Budget.load();return v7Budget.spent>0&&v7Budget.spent<=2500&&v7Mission.anyDone();}},
    {id:'m8',name:'스피드빌더',diff:'hard',desc:'2분 이내에 건축 완성',reward:'XP 200',check:function(){try{var r=JSON.parse(localStorage.getItem('hb_v7_speed')||'[]');return r.some(function(x){return x.time<=120;});}catch(e){return false;}}}
  ],
  completed: [],
  load: function(){
    try{ this.completed = JSON.parse(localStorage.getItem('hb_v7_missions')||'[]'); }catch(e){ this.completed=[]; }
  },
  save: function(){ localStorage.setItem('hb_v7_missions', JSON.stringify(this.completed)); },
  hasDone: function(mode){
    try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return d[mode]&&d[mode].completed;}catch(e){return false;}
  },
  anyDone: function(){
    try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return Object.keys(d).some(function(k){return d[k]&&d[k].completed;});}catch(e){return false;}
  },
  checkAll: function(){
    this.load();
    var self = this;
    var changed = false;
    this.missions.forEach(function(m){
      if(self.completed.indexOf(m.id)===-1 && m.check()){
        self.completed.push(m.id);
        changed = true;
        v7SFX.play('mission_complete');
      }
    });
    if(changed) this.save();
  },
  render: function(){
    this.load(); this.checkAll();
    var self = this;
    var html = '<div class="v7m-container"><h2>건축 미션</h2><p>8가지 미션을 완수하세요</p><div class="v7m-list">';
    self.missions.forEach(function(m){
      var done = self.completed.indexOf(m.id)!==-1;
      html += '<div class="v7m-card'+(done?' completed':'')+'">';
      html += '<h4>'+(done?'✅ ':'📋 ')+m.name+' <span class="badge '+m.diff+'">'+(m.diff==='easy'?'쉽움':m.diff==='medium'?'보통':'어려움')+'</span></h4>';
      html += '<p>'+m.desc+'</p>';
      html += '<span class="v7m-reward">'+(done?'✅ 완료':'🏆 '+m.reward)+'</span></div>';
    });
    html += '</div><button class="v7-close" onclick="v7Close(\'v7MissionPanel\')">닫기</button></div>';
    document.getElementById('v7MissionPanel').innerHTML = html;
  }
};

// ── 9. Gallery System ──
var v7Gallery = {
  items: [],
  load: function(){
    try{ this.items = JSON.parse(localStorage.getItem('hb_v7_gallery')||'[]'); }catch(e){ this.items=[]; }
  },
  save: function(){ localStorage.setItem('hb_v7_gallery', JSON.stringify(this.items)); },
  addCurrent: function(){
    this.load();
    var mode = window.currentMode || 'hanok';
    var modeNames = {hanok:'한옥',giwajip:'기와집',choga:'초가집',seowon:'서원',jeongja:'정자',modern:'현대주택'};
    var icons = {hanok:'🏡',giwajip:'🏯',choga:'🛖',seowon:'🏛️',jeongja:'⛩️',modern:'🏢'};
    this.items.push({
      id: 'g'+Date.now(),
      mode: mode,
      name: modeNames[mode]||mode,
      icon: icons[mode]||'🏠',
      date: new Date().toLocaleDateString('ko-KR'),
      rating: 0,
      weather: v7Weather.current,
      furniture: v7Furniture.placed.length
    });
    if(this.items.length > 20) this.items = this.items.slice(-20);
    this.save();
    v7SFX.play('gallery_save');
    v7Achieve.check();
  },
  rate: function(id, stars){
    this.load();
    var item = this.items.find(function(x){return x.id===id;});
    if(item){ item.rating = stars; this.save(); this.render(); }
  },
  render: function(){
    this.load();
    var self = this;
    var html = '<div class="v7g-container"><h2>작품 갤러리</h2><p>완성한 건축물을 감상하세요 ('+self.items.length+'/20)</p>';
    if(self.items.length === 0){
      html += '<p style="color:#c4956a;text-align:center;margin-top:40px">아직 완성한 건축물이 없습니다.<br>건축을 완성하면 자동으로 추가됩니다.</p>';
    } else {
      html += '<div class="v7g-grid">';
      self.items.slice().reverse().forEach(function(item){
        html += '<div class="v7g-card"><div class="v7g-thumb">'+item.icon+'</div>';
        html += '<div class="v7g-info"><h4>'+item.name+'</h4><p>'+item.date+' | 가구 '+item.furniture+'개</p>';
        html += '<div class="v7g-stars">';
        for(var s=1;s<=5;s++){
          html += '<span style="cursor:pointer" onclick="v7Gallery.rate(\''+item.id+'\','+s+')">'+(s<=item.rating?'★':'☆')+'</span>';
        }
        html += '</div></div></div>';
      });
      html += '</div>';
    }
    html += '<button class="v7-close" onclick="v7Close(\'v7GalleryPanel\')">닫기</button></div>';
    document.getElementById('v7GalleryPanel').innerHTML = html;
  }
};

// ── 10. Material Dictionary (15 materials) ──
var v7Material = {
  data: [
    {id:'mat1',name:'소나무',icon:'🌲',cat:'목재',desc:'한옥 기둥/대들보에 주로 사용',detail:'곧고 틀어지지 않아 구조재로 최적. 송진이 방부효과를 내며, 시간이 지나면 더욱 단단해짐. 한옥의 기둥, 도리, 서까래에 비드나무와 함께 가장 많이 쓰임.',props:['내구성 우수','방충해','향균 효과']},
    {id:'mat2',name:'참나무',icon:'🌳',cat:'목재',desc:'문틀/창틀/가구에 사용',detail:'결이 고운 활엽수. 문짝물림이 아름다워 고급 가구에 애용. 반닫이, 문갑, 소반 등 전통 가구를 만드는 데 최적의 재료.',props:['고급 문양','내마모성','가구용']},
    {id:'mat3',name:'황토',icon:'🟤',cat:'흙/돌',desc:'벽체 + 바닥 마감재',detail:'한국 전통 건축의 핵심 재료. 습도조절+단열 효과가 뛰어나 여름엔 시원하고 겨울엔 따뜻함. 짚을 섯어 균열 방지.',props:['습도조절','단열성능','친환경']},
    {id:'mat4',name:'기와',icon:'🧱',cat:'지붕',desc:'지붕을 덕는 구운 흙 타일',detail:'암키와+수키와 조합으로 지붕 방수. 무게가 나가믌로 튼튼한 구조가 필요. 양반가 이상만 쓸 수 있었던 고급 재료.',props:['방수성','내구성','고급재']},
    {id:'mat5',name:'초가(빛짚)',icon:'🌾',cat:'지붕',desc:'초가집 지붕을 더는 벼짚',detail:'수확 후 남는 벼짚를 엮어 지붕을 덮음. 단열성이 좋고 비용이 저렴하여 서민들이 널리 사용. 새끼줄로 교차 묶어 바람에 날리지 않게 함.',props:['단열성','경제적','친환경']},
    {id:'mat6',name:'화강암',icon:'⛰️',cat:'흙/돌',desc:'초석/주추/담장 재료',detail:'한국에 풍부한 화산암. 가공이 쉬워 초석, 기단, 주추돌에 널리 쓰임. 강도가 높아 성벽과 석탑에도 사용.',props:['가공성','내구성','풍부']},
    {id:'mat7',name:'한지(창호지)',icon:'📄',cat:'마감',desc:'문/창에 바르는 전통 종이',detail:'닥나무 섬유로 만든 한지는 통기성+채광성이 뛰어남. 자연 조명을 부드럽게 확산시켜 실내가 은은하게 밝아짐.',props:['통기성','채광성','전통미']},
    {id:'mat8',name:'대나무',icon:'🎋',cat:'목재',desc:'울타리/마루/정원 장식',detail:'성장이 빠르고 가벼우면서도 강함. 울타리, 마루 바닥, 정원 편성에 활용. 바람에 흔들리는 소리가 운치를 더함.',props:['경량','성장속도','정원용']},
    {id:'mat9',name:'삼화토',icon:'🏚️',cat:'흙/돌',desc:'벽화 + 벽체 마감',detail:'석회+모래+흙을 혼합한 회반죽. 벽체를 평활하게 마감하고 방수성을 높임. 벽화의 바탕으로도 사용.',props:['방수','평활마감','벽화바탕']},
    {id:'mat10',name:'오동나무',icon:'🌿',cat:'목재',desc:'지붕 서까래/도리 재료',detail:'목질이 단단하고 물에 강해 지붕 구조물에 적합. 서까래(rafters)를 만드는 데 애용. 휘어져도 형태 유지.',props:['내수성','단단함','구조재']},
    {id:'mat11',name:'와편(온돌)',icon:'🔥',cat:'난방',desc:'바닥 난방 시스템',detail:'한국 고유의 바닥 난방. 부엌에서 불을 때면 뜰 밑 굴뜩을 통해 열이 전달되어 방 전체가 따뜻해짐.',props:['난방효율','고유기술','에너지절약']},
    {id:'mat12',name:'단청',icon:'🎨',cat:'마감',desc:'목조 건물에 칠하는 전통 무늬',detail:'오방색(청/적/황/백/흩)으로 그리는 장식. 왕궁/사찰에만 허용되었던 고급 기술. 건물의 갩궉과 권위를 상징.',props:['장식성','권위','오방색']},
    {id:'mat13',name:'시멘트',icon:'🏗️',cat:'현대',desc:'현대 건축의 기초 재료',detail:'콘크리트의 주원료. 석회석+점토+모래를 혼합하여 경화. 압축강도가 뛰어나 고층 건물에 필수.',props:['강도','내화성','현대기초']},
    {id:'mat14',name:'유리',icon:'🪟',cat:'현대',desc:'현대 건축 창문/커튼월',detail:'빛을 투과시켜 실내를 밝게 함. 복층유리, Low-E 코팅 등으로 단열성도 확보. 커튼월로 사용시 개방감 극대화.',props:['투명성','단열','개방감']},
    {id:'mat15',name:'철근',icon:'🔩',cat:'현대',desc:'철근콘크리트 구조재',detail:'인장강도가 뛰어나 콘크리트의 인장력 보강. 고층 빌딩, 다리, 대형 구조물에 필수. 부식 방지 처리 중요.',props:['인장력','구조보강','내식처리']}
  ],
  render: function(){
    var self = this;
    var html = '<div class="v7mat-container"><h2>재료 사전</h2><p>한국 건축 재료 15종의 특성을 알아보세요</p>';
    html += '<div class="v7mat-grid">';
    self.data.forEach(function(m){
      html += '<div class="v7mat-item" onclick="this.classList.toggle(\'expanded\')">';
      html += '<h4><span class="ico">'+m.icon+'</span>'+m.name+' <span style="font-size:10px;padding:2px 8px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a">'+m.cat+'</span></h4>';
      html += '<p class="desc">'+m.desc+'</p>';
      html += '<div class="detail">'+m.detail;
      if(m.props && m.props.length){
        html += '<div class="props">';
        m.props.forEach(function(p){ html += '<span class="prop">'+p+'</span>'; });
        html += '</div>';
      }
      html += '</div></div>';
    });
    html += '</div><button class="v7-close" onclick="v7Close(\'v7MaterialPanel\')">닫기</button></div>';
    document.getElementById('v7MaterialPanel').innerHTML = html;
  }
};

// ── 11. Speed Build Timer ──
var v7Speed = {
  running: false,
  startTime: 0,
  elapsed: 0,
  interval: null,
  records: [],
  load: function(){
    try{ this.records = JSON.parse(localStorage.getItem('hb_v7_speed')||'[]'); }catch(e){ this.records=[]; }
  },
  save: function(){ localStorage.setItem('hb_v7_speed', JSON.stringify(this.records)); },
  start: function(){
    if(this.running) return;
    this.running = true;
    this.startTime = Date.now();
    var self = this;
    this.interval = setInterval(function(){
      self.elapsed = Math.floor((Date.now()-self.startTime)/1000);
      var el = document.querySelector('.v7s-timer');
      if(el) el.textContent = self.formatTime(self.elapsed);
      if(self.elapsed % 10 === 0) v7SFX.play('speed_tick');
    }, 1000);
    this.render();
  },
  stop: function(mode){
    if(!this.running) return;
    this.running = false;
    clearInterval(this.interval);
    this.load();
    var modeNames = {hanok:'한옥',giwajip:'기와집',choga:'초가집',seowon:'서원',jeongja:'정자',modern:'현대주택'};
    this.records.push({mode:modeNames[mode]||mode,time:this.elapsed,date:new Date().toLocaleDateString('ko-KR')});
    this.records.sort(function(a,b){return a.time-b.time;});
    if(this.records.length>10) this.records = this.records.slice(0,10);
    this.save();
    v7Achieve.check();
  },
  formatTime: function(s){ var m=Math.floor(s/60); return (m<10?'0':'')+m+':'+(s%60<10?'0':'')+(s%60); },
  render: function(){
    this.load();
    var self = this;
    var html = '<div class="v7s-container"><h2>스피드 빌드</h2><p>가장 빠른 시간에 건축을 완성하세요</p>';
    html += '<div class="v7s-timer">'+(self.running?self.formatTime(self.elapsed):'00:00')+'</div>';
    if(!self.running){
      html += '<button class="v7-close" style="background:#4a7c59;margin-bottom:12px" onclick="v7Speed.start()">▶ 시작</button>';
    } else {
      html += '<p style="color:#8fc9a0;font-size:13px">⏱ 타이머 진행 중... 건축을 완성하면 자동 정지</p>';
    }
    if(self.records.length){
      html += '<div class="v7s-records"><h4>Best Records</h4>';
      self.records.forEach(function(r,i){
        html += '<div class="v7s-record"><span>'+(i+1)+'. '+r.mode+' ('+r.date+')</span><span class="time">'+self.formatTime(r.time)+'</span></div>';
      });
      html += '</div>';
    }
    html += '<button class="v7-close" onclick="v7Close(\'v7SpeedPanel\')">닫기</button></div>';
    document.getElementById('v7SpeedPanel').innerHTML = html;
  }
};

// ── 12. Quiz v7 (+15 questions, total 30→45) ──
var v7Quiz = {
  questions: [
    {q:'한옥의 지붕 처마 곡선의 주된 목적은?',a:['빗물 배수','장식 효과','바람 저항','구조 강화'],c:0,tip:'처마 곡선은 빗물을 밖으로 튀기고 바람을 자연스럽게 흐르게 합니다'},
    {q:'온돌의 열원은 어디에서 시작되나요?',a:['부엌(agungi)','모뎨불','벽난로','전기히터'],c:0,tip:'부엌에서 묘을 때면 열기가 굴뜩을 통해 방 아래로 이동합니다'},
    {q:'단청에서 사용하는 오방색이 아닌 것은?',a:['보라색','청색','적색','황색'],c:0,tip:'오방색은 청(파랑), 적(빨강), 황(노랑), 백(하양), 흩(검정)입니다'},
    {q:'한옥의 기둥 배치 방식을 뭐라 하나요?',a:['기둥배치법','배흡림기둥','구조배치','균등배치'],c:1,tip:'배흡림기둥은 가운데가 불록하게 만든 기둥으로 시각적 안정감을 줍니다'},
    {q:'한옥에서 마루의 역할은?',a:['복도','벽체 지지','바닥 마감','천장 장식'],c:2,tip:'마루는 나무 바닥재로 방과 방 사이의 바닥을 덮습니다'},
    {q:'서원의 ‘전학후믘’ 배치에서 ‘후믘’은?',a:['제사 공간','강학 공간','기숙사','정원'],c:0,tip:'전학후믘은 앞에 강학공간, 뒤에 제사공간을 배치하는 원칙입니다'},
    {q:'정자의 특징으로 맞는 것은?',a:['벽이 없는 개방 구조','밀폐된 벽체','지하 구조','다층 구조'],c:0,tip:'정자는 자연을 감상하기 위해 벽 없이 기둥만으로 지은 개방형 건물입니다'},
    {q:'현대 건축에서 커튼월(curtain wall)이란?',a:['비내력벽 유리벽','천장 재료','바닥 마감','지붕 방수'],c:0,tip:'커튼월은 하중을 받지 않는 외벽 유리면으로 현대 고층 빌딩에 사용됩니다'},
    {q:'초가집 지붕을 묶는 새끼줄의 재료는?',a:['벼짚/짚','철사','나일론','고무줄'],c:0,tip:'벼짚를 꽉꽉 묶어 바람에 날리지 않게 합니다. 해마다 새로 묶어줘야 했습니다'},
    {q:'한옥 지붕의 ‘용마루’란?',a:['지붕 꼭대기 마감재','바닥 장식','벽체 보강','기둥 장식'],c:0,tip:'용마루는 지붕 꼭대기의 목재로 지붕의 양쪽 지붕면을 연결합니다'},
    {q:'기와집에서 ‘잡상’은 어디에 있나요?',a:['지붕 처마 위','벽체 중간','문 위','기둥 밑'],c:0,tip:'잡상은 처마 위에 세우는 작은 조각상으로 벽사를 막는다고 믿었습니다'},
    {q:'한옥의 ‘대청마루’의 용도는?',a:['개방형 거실/접객 공간','취침실','부엌','창고'],c:0,tip:'대청마루는 바람이 통하는 개방 공간으로 여름에 시원하고 손님을 맞이하는 곳입니다'},
    {q:'한옥 창호지에 바르는 기름의 역할은?',a:['방수+투명도 향상','장식 효과','방충해','무게 감소'],c:0,tip:'들기름을 바르면 방수가 되고 투명도가 높아져 빛이 더 잘 들어옵니다'},
    {q:'한옥의 ‘풀림대’란 무엇인가요?',a:['곤충 이상으로 열리는 다락문','지하실 환기구','지붕 창','굴뜩 통로'],c:0,tip:'풀림대는 곤충 이상으로 문을 들어올려 개방할 수 있는 한옥 고유의 문입니다'},
    {q:'한옥 건축에서 ‘머름’의 기능은?',a:['초석과 기둥 연결(방진)','지붕 장식','벽체 보강','바닥 단열'],c:0,tip:'머름은 초석 위에 놓여 기둥 하중을 분산하고 지진시 완충 역할을 합니다'}
  ],
  injectToMain: function(){
    if(!window.quizPool) return;
    var self = this;
    self.questions.forEach(function(q){
      var exists = window.quizPool.some(function(existing){return existing.q === q.q;});
      if(!exists) window.quizPool.push(q);
    });
  }
};

// ── 13. Achievement System v7 (+12 achievements, 50→62) ──
var v7Achieve = {
  defs: [
    {id:'a_furn5',name:'가구 수집가',desc:'가구 5개 배치',check:function(){v7Furniture.load();return v7Furniture.placed.length>=5;}},
    {id:'a_furn15',name:'인테리어 디자이너',desc:'가구 15개 배치',check:function(){v7Furniture.load();return v7Furniture.placed.length>=15;}},
    {id:'a_furn_all',name:'가구 마스터',desc:'가구 20개 전부 배치',check:function(){v7Furniture.load();return v7Furniture.placed.length>=20;}},
    {id:'a_weather_all',name:'날씨 탐험가',desc:'4가지 날씨 모두 체험',check:function(){try{return JSON.parse(localStorage.getItem('hb_v7_weather_tried')||'[]').length>=4;}catch(e){return false;}}},
    {id:'a_budget_50',name:'예산 절약가',desc:'예산 50% 이하로 건축',check:function(){v7Budget.load();return v7Budget.spent>0&&v7Budget.spent<=2500;}},
    {id:'a_mission_all',name:'미션 콤플리트',desc:'8개 미션 전부 완수',check:function(){v7Mission.load();return v7Mission.completed.length>=8;}},
    {id:'a_gallery5',name:'건축가 포트폴리오',desc:'건축물 5개 갤러리 등록',check:function(){v7Gallery.load();return v7Gallery.items.length>=5;}},
    {id:'a_gallery_rate',name:'비평가',desc:'갤러리 작품에 별점 부여',check:function(){v7Gallery.load();return v7Gallery.items.some(function(x){return x.rating>0;});}},
    {id:'a_speed120',name:'스피드빌더',desc:'2분 이내에 건축 완성',check:function(){v7Speed.load();return v7Speed.records.some(function(x){return x.time<=120;});}},
    {id:'a_speed60',name:'번개 건축가',desc:'1분 이내에 건축 완성',check:function(){v7Speed.load();return v7Speed.records.some(function(x){return x.time<=60;});}},
    {id:'a_quiz45',name:'건축 박사',desc:'퀴즈 45문 달성',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var total=0;Object.values(d).forEach(function(v){if(v.quizCorrect)total+=v.quizCorrect;});return total>=45;}catch(e){return false;}}},
    {id:'a_material_reader',name:'재료 연구가',desc:'재료사전 15개 전부 열람',check:function(){try{return JSON.parse(localStorage.getItem('hb_v7_mat_read')||'[]').length>=15;}catch(e){return false;}}}
  ],
  unlocked: [],
  load: function(){
    try{ this.unlocked = JSON.parse(localStorage.getItem('hb_v7_achievements')||'[]'); }catch(e){ this.unlocked=[]; }
  },
  save: function(){ localStorage.setItem('hb_v7_achievements', JSON.stringify(this.unlocked)); },
  check: function(){
    this.load();
    var self = this;
    self.defs.forEach(function(a){
      if(self.unlocked.indexOf(a.id)===-1 && a.check()){
        self.unlocked.push(a.id);
        self.save();
        self.showToast(a.name);
      }
    });
  },
  showToast: function(name){
    var el = document.createElement('div');
    el.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2d1b0e,#4a2c17);border:2px solid #c4956a;border-radius:12px;padding:12px 24px;z-index:9999;color:#f5deb3;font-size:14px;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,.6);animation:v7toast .5s ease';
    el.textContent = '🏆 업적 달성: ' + name;
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 3000);
  }
};

// ── 14. Quick Action Buttons ──
(function(){
  var btns = [
    {label:'🛋 가구',fn:'v7Open("v7FurniturePanel")'},
    {label:'🌦 날씨',fn:'v7Open("v7WeatherPanel")'},
    {label:'💰 예산',fn:'v7Open("v7BudgetPanel")'},
    {label:'📏 평면도',fn:'v7Open("v7FloorPlanPanel")'},
    {label:'🎯 미션',fn:'v7Open("v7MissionPanel")'},
    {label:'🖼 갤러리',fn:'v7Open("v7GalleryPanel")'},
    {label:'🧱 재료',fn:'v7Open("v7MaterialPanel")'},
    {label:'⏱ 스피드',fn:'v7Open("v7SpeedPanel")'}
  ];
  var container = document.getElementById('v7QuickBtns');
  if(container){
    btns.forEach(function(b){
      var btn = document.createElement('button');
      btn.textContent = b.label;
      btn.setAttribute('onclick', b.fn);
      container.appendChild(btn);
    });
  }
})();

// ── 15. Panel Open/Close ──
window.v7Open = function(id){
  var panel = document.getElementById(id);
  if(!panel) return;
  panel.classList.add('active');
  switch(id){
    case 'v7FurniturePanel': v7Furniture.render(); break;
    case 'v7WeatherPanel': v7Weather.render(); break;
    case 'v7BudgetPanel': v7Budget.render(); break;
    case 'v7FloorPlanPanel': v7FloorPlan.render(); break;
    case 'v7MissionPanel': v7Mission.render(); break;
    case 'v7GalleryPanel': v7Gallery.render(); break;
    case 'v7MaterialPanel': v7Material.render(); break;
    case 'v7SpeedPanel': v7Speed.render(); break;
  }
};
window.v7Close = function(id){
  var panel = document.getElementById(id);
  if(panel) panel.classList.remove('active');
};

// ── 16. Keyboard Shortcuts (+5) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(!document.getElementById('modeSelect')) return;
    if(!document.getElementById('modeSelect').classList.contains('hidden')) return;
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
    var key = e.key.toLowerCase();
    if(key==='f' && !e.ctrlKey && !e.metaKey) v7Open('v7FurniturePanel');
    else if(key==='v' && !e.ctrlKey) v7Open('v7FloorPlanPanel');
    else if(key==='i') v7Open('v7MaterialPanel');
    else if(key==='o') v7Open('v7MissionPanel');
    else if(key==='u') v7Open('v7GalleryPanel');
  });
})();

// ── 17. Weather Tracking ──
(function(){
  var origSet = v7Weather.set.bind(v7Weather);
  v7Weather.set = function(type){
    try{
      var tried = JSON.parse(localStorage.getItem('hb_v7_weather_tried')||'[]');
      if(tried.indexOf(type)===-1){ tried.push(type); localStorage.setItem('hb_v7_weather_tried', JSON.stringify(tried)); }
    }catch(e){}
    origSet(type);
  };
})();

// ── 18. Hook into main game completion ──
(function(){
  var origComplete = window.showComplete;
  if(typeof origComplete === 'function'){
    window.showComplete = function(){
      origComplete.apply(this, arguments);
      var mode = window.currentMode || 'hanok';
      v7Gallery.addCurrent();
      if(v7Speed.running) v7Speed.stop(mode);
      v7Mission.checkAll();
      v7Achieve.check();
    };
  } else {
    var checkInterval = setInterval(function(){
      if(typeof window.showComplete === 'function' && !window.__v7Hooked){
        window.__v7Hooked = true;
        var orig = window.showComplete;
        window.showComplete = function(){
          orig.apply(this, arguments);
          var mode = window.currentMode || 'hanok';
          v7Gallery.addCurrent();
          if(v7Speed.running) v7Speed.stop(mode);
          v7Mission.checkAll();
          v7Achieve.check();
        };
        clearInterval(checkInterval);
      }
    }, 500);
    setTimeout(function(){ clearInterval(checkInterval); }, 10000);
  }
})();

// ── 19. Hook into build action for budget tracking ──
(function(){
  var origBuild = window.buildPart;
  if(typeof origBuild === 'function'){
    window.buildPart = function(){
      origBuild.apply(this, arguments);
      v7Budget.spend(Math.floor(Math.random()*80)+20, window.currentMode?('부품: '+window.currentMode):'build');
    };
  } else {
    var checkInterval2 = setInterval(function(){
      if(typeof window.buildPart === 'function' && !window.__v7BuildHooked){
        window.__v7BuildHooked = true;
        var orig2 = window.buildPart;
        window.buildPart = function(){
          orig2.apply(this, arguments);
          v7Budget.spend(Math.floor(Math.random()*80)+20, window.currentMode?('부품: '+window.currentMode):'build');
        };
        clearInterval(checkInterval2);
      }
    }, 500);
    setTimeout(function(){ clearInterval(checkInterval2); }, 10000);
  }
})();

// ── 20. Inject quiz on load ──
(function(){
  var qi = setInterval(function(){
    if(window.quizPool){
      v7Quiz.injectToMain();
      clearInterval(qi);
    }
  }, 500);
  setTimeout(function(){ clearInterval(qi); }, 10000);
})();

// ── 21. Initial load + Achievement check ──
(function(){
  v7Furniture.load();
  v7Budget.load();
  v7Speed.load();
  v7Gallery.load();
  v7Mission.load();
  var saved = localStorage.getItem('hb_v7_weather');
  if(saved && saved !== 'clear') v7Weather.set(saved);
  setTimeout(function(){ v7Achieve.check(); }, 2000);
})();

// ── 22. Toast Animation CSS ──
(function(){
  var s = document.createElement('style');
  s.textContent = '@keyframes v7toast{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(s);
})();

} // end __hbV7 guard

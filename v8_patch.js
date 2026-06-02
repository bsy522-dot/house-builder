// =====================================================
// House Builder v8.0 Patch
// 인테리어디자인+공유카드Canvas+구조분석+카메라프리셋
// 비용시뮬레이터+건축연표20+일일도전14+퀴즈15추가(45→60)
// 업적12추가(62→74)+SFX6종+키보드5종
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV8) {
window.__hbV8 = true;

// ── 1. CSS Injection ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '#v8InteriorPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8InteriorPanel.active{display:block}',
    '.v8i-container{max-width:640px;margin:40px auto}',
    '.v8i-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v8i-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v8i-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v8i-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v8i-tab:hover,.v8i-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v8i-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
    '.v8i-item{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v8i-item:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v8i-item.selected{border-color:#4a7c59;background:rgba(74,124,89,.15);box-shadow:0 0 10px rgba(74,124,89,.2)}',
    '.v8i-item .v8i-swatch{width:60px;height:40px;border-radius:8px;margin:0 auto 8px;border:2px solid rgba(255,255,255,.15)}',
    '.v8i-item .v8i-name{color:#f5deb3;font-size:12px;font-weight:600}',
    '.v8i-item .v8i-price{color:#c4956a;font-size:11px;margin-top:2px}',
    '.v8i-preview{background:rgba(0,0,0,.3);border:1px solid rgba(196,149,106,.2);border-radius:12px;padding:16px;margin:16px 0;text-align:center}',
    '.v8i-preview h4{color:#c4956a;font-size:13px;margin-bottom:8px}',
    '.v8i-preview .room-preview{display:flex;gap:4px;justify-content:center;height:80px;align-items:flex-end;border-radius:8px;overflow:hidden;padding:8px}',
    '#v8SharePanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.95);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8SharePanel.active{display:block}',
    '.v8sh-container{max-width:640px;margin:40px auto;text-align:center}',
    '.v8sh-container h2{color:#f5deb3;font-size:22px;margin-bottom:4px}',
    '.v8sh-container>p{color:#c4956a;font-size:13px;margin-bottom:20px}',
    '#v8ShareCanvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;max-width:100%}',
    '.v8sh-btns{display:flex;gap:10px;justify-content:center;margin-top:16px;flex-wrap:wrap}',
    '.v8sh-btn{padding:10px 20px;border:none;border-radius:20px;font-weight:600;cursor:pointer;font-family:inherit;font-size:13px;transition:all .2s}',
    '.v8sh-btn:hover{transform:translateY(-1px)}',
    '.v8sh-btn.dl{background:#c4956a;color:#2d1b0e}',
    '.v8sh-btn.cp{background:rgba(255,255,255,.1);color:#f5deb3;border:1px solid #c4956a}',
    '#v8StructPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8StructPanel.active{display:block}',
    '.v8st-container{max-width:600px;margin:40px auto}',
    '.v8st-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v8st-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v8st-meter{margin:12px 0}',
    '.v8st-meter-label{display:flex;justify-content:space-between;color:#e8d5c0;font-size:13px;margin-bottom:4px}',
    '.v8st-meter-bar{height:20px;background:rgba(255,255,255,.08);border-radius:10px;overflow:hidden}',
    '.v8st-meter-fill{height:100%;border-radius:10px;transition:width .6s}',
    '.v8st-grade{text-align:center;margin:24px 0;padding:20px;background:rgba(196,149,106,.08);border:2px solid rgba(196,149,106,.3);border-radius:16px}',
    '.v8st-grade .grade{font-size:56px;font-weight:900;margin-bottom:4px}',
    '.v8st-grade .grade-text{color:#c4956a;font-size:14px}',
    '.v8st-facts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}',
    '.v8st-fact{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:12px;text-align:center}',
    '.v8st-fact .val{font-size:22px;font-weight:700;color:#f5deb3}',
    '.v8st-fact .lbl{font-size:11px;color:#c4956a;margin-top:2px}',
    '#v8CamPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8CamPanel.active{display:block}',
    '.v8c-container{max-width:500px;margin:60px auto;text-align:center}',
    '.v8c-container h2{color:#f5deb3;font-size:22px;margin-bottom:4px}',
    '.v8c-container>p{color:#c4956a;font-size:13px;margin-bottom:24px}',
    '.v8c-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}',
    '.v8c-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px;padding:18px;cursor:pointer;transition:all .3s}',
    '.v8c-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v8c-card.active{border-color:#f5deb3;box-shadow:0 0 16px rgba(196,149,106,.3)}',
    '.v8c-card .v8c-icon{font-size:36px;margin-bottom:8px}',
    '.v8c-card h4{color:#f5deb3;font-size:14px;margin:0 0 4px}',
    '.v8c-card p{color:#c4956a;font-size:11px;margin:0}',
    '#v8CostPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8CostPanel.active{display:block}',
    '.v8co-container{max-width:580px;margin:40px auto}',
    '.v8co-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v8co-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v8co-table{width:100%;border-collapse:collapse;margin:16px 0}',
    '.v8co-table th{text-align:left;color:#c4956a;font-size:12px;padding:8px 10px;border-bottom:2px solid rgba(196,149,106,.3)}',
    '.v8co-table td{color:#e8d5c0;font-size:13px;padding:8px 10px;border-bottom:1px solid rgba(196,149,106,.1)}',
    '.v8co-table td:last-child{text-align:right;font-weight:600;color:#f5deb3}',
    '.v8co-total{display:flex;justify-content:space-between;padding:14px;background:rgba(196,149,106,.12);border:1px solid rgba(196,149,106,.3);border-radius:10px;margin-top:12px}',
    '.v8co-total span:first-child{color:#c4956a;font-size:15px;font-weight:600}',
    '.v8co-total span:last-child{color:#f5deb3;font-size:20px;font-weight:700}',
    '#v8TimelinePanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8TimelinePanel.active{display:block}',
    '.v8t-container{max-width:620px;margin:40px auto}',
    '.v8t-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v8t-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v8t-line{position:relative;padding-left:30px}',
    '.v8t-line::before{content:"";position:absolute;left:12px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#c4956a,rgba(196,149,106,.2))}',
    '.v8t-item{position:relative;margin-bottom:16px;padding:14px 16px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;cursor:pointer;transition:all .2s}',
    '.v8t-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v8t-item.expanded{background:rgba(196,149,106,.1)}',
    '.v8t-item::before{content:"";position:absolute;left:-24px;top:18px;width:12px;height:12px;border-radius:50%;background:#c4956a;border:2px solid #2d1b0e}',
    '.v8t-item .v8t-year{color:#c4956a;font-size:11px;font-weight:700;letter-spacing:1px}',
    '.v8t-item h4{color:#f5deb3;font-size:14px;margin:4px 0}',
    '.v8t-item .v8t-desc{color:#e8d5c0;font-size:12px;line-height:1.6;display:none}',
    '.v8t-item.expanded .v8t-desc{display:block;margin-top:8px}',
    '#v8DailyPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3200;overflow-y:auto;padding:16px}',
    '#v8DailyPanel.active{display:block}',
    '.v8d-container{max-width:560px;margin:40px auto}',
    '.v8d-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v8d-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v8d-streak{text-align:center;margin:16px 0;padding:16px;background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px}',
    '.v8d-streak .streak-num{font-size:36px;font-weight:900;color:#f5deb3}',
    '.v8d-streak .streak-lbl{color:#c4956a;font-size:12px;margin-top:2px}',
    '.v8d-challenges{display:flex;flex-direction:column;gap:10px}',
    '.v8d-ch{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;display:flex;align-items:center;gap:12px;transition:all .2s}',
    '.v8d-ch.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v8d-ch .ch-icon{font-size:24px;flex-shrink:0}',
    '.v8d-ch .ch-info{flex:1}',
    '.v8d-ch .ch-info h4{color:#f5deb3;font-size:13px;margin:0 0 2px}',
    '.v8d-ch .ch-info p{color:#c4956a;font-size:11px;margin:0}',
    '.v8d-ch .ch-status{font-size:18px;flex-shrink:0}',
    '.v8-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v8-close:hover{background:#d4a57a}',
    '@media(max-width:768px){.v8i-grid{grid-template-columns:repeat(2,1fr)}.v8c-grid{grid-template-columns:1fr}.v8st-facts{grid-template-columns:1fr}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection ──
(function(){
  var panels = [
    '<div id="v8InteriorPanel"></div>',
    '<div id="v8SharePanel"></div>',
    '<div id="v8StructPanel"></div>',
    '<div id="v8CamPanel"></div>',
    '<div id="v8CostPanel"></div>',
    '<div id="v8TimelinePanel"></div>',
    '<div id="v8DailyPanel"></div>'
  ].join('');
  var d = document.createElement('div');
  d.innerHTML = panels;
  while(d.firstChild) document.body.appendChild(d.firstChild);
})();

// ── 3. Web Audio SFX v8 (+6 types) ──
var v8SFX = {};
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
        case 'interior_select':
          o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(660,t+0.08);
          o.frequency.linearRampToValueAtTime(880,t+0.16);
          g.gain.setValueAtTime(0.2,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t); o.stop(t+0.2); break;
        case 'share_capture':
          o.type='sine'; o.frequency.setValueAtTime(523,t);
          o.frequency.setValueAtTime(659,t+0.08); o.frequency.setValueAtTime(784,t+0.16);
          o.frequency.setValueAtTime(1047,t+0.24);
          g.gain.setValueAtTime(0.25,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.35);
          o.start(t); o.stop(t+0.35); break;
        case 'struct_analyze':
          o.type='triangle'; o.frequency.setValueAtTime(220,t);
          o.frequency.linearRampToValueAtTime(440,t+0.2);
          o.frequency.linearRampToValueAtTime(660,t+0.4);
          g.gain.setValueAtTime(0.15,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.5);
          o.start(t); o.stop(t+0.5); break;
        case 'camera_move':
          o.type='sine'; o.frequency.setValueAtTime(600,t); o.frequency.linearRampToValueAtTime(400,t+0.12);
          g.gain.setValueAtTime(0.15,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.15);
          o.start(t); o.stop(t+0.15); break;
        case 'cost_calculate':
          o.type='square'; o.frequency.setValueAtTime(800,t); o.frequency.linearRampToValueAtTime(1200,t+0.1);
          g.gain.setValueAtTime(0.08,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.12);
          o.start(t); o.stop(t+0.12); break;
        case 'daily_complete':
          o.type='sine'; o.frequency.setValueAtTime(392,t);
          o.frequency.setValueAtTime(523,t+0.1); o.frequency.setValueAtTime(659,t+0.2);
          o.frequency.setValueAtTime(784,t+0.3); o.frequency.setValueAtTime(1047,t+0.4);
          g.gain.setValueAtTime(0.3,t); g.gain.exponentialRampToValueAtTime(0.01,t+0.6);
          o.start(t); o.stop(t+0.6); break;
      }
    }catch(e){}
  }
  v8SFX.play = play;
})();

// ── 4. Interior Design System ──
var v8Interior = {
  wallpapers: [
    {id:'wp1',name:'백토 벽',color:'#f5f0e8',cat:'traditional',price:80},
    {id:'wp2',name:'황토 벽',color:'#c4956a',cat:'traditional',price:60},
    {id:'wp3',name:'회벽',color:'#d0ccc4',cat:'traditional',price:70},
    {id:'wp4',name:'한지 벽지',color:'#fff8f0',cat:'traditional',price:100},
    {id:'wp5',name:'크림 벽지',color:'#fffdd0',cat:'modern',price:90},
    {id:'wp6',name:'회색 벽지',color:'#b0b0b0',cat:'modern',price:85},
    {id:'wp7',name:'민트 벽지',color:'#b2dfdb',cat:'modern',price:95},
    {id:'wp8',name:'벽돌 벽',color:'#b54a32',cat:'modern',price:110}
  ],
  floors: [
    {id:'fl1',name:'소나무 마루',color:'#deb887',cat:'traditional',price:120},
    {id:'fl2',name:'참나무 마루',color:'#b8860b',cat:'traditional',price:150},
    {id:'fl3',name:'구들장',color:'#8b7355',cat:'traditional',price:100},
    {id:'fl4',name:'대나무 마루',color:'#8fbc8f',cat:'traditional',price:130},
    {id:'fl5',name:'원목 마루',color:'#c4956a',cat:'modern',price:160},
    {id:'fl6',name:'대리석 타일',color:'#e8e0d8',cat:'modern',price:200},
    {id:'fl7',name:'콘크리트',color:'#999999',cat:'modern',price:70},
    {id:'fl8',name:'헤링본 마루',color:'#a0714a',cat:'modern',price:180}
  ],
  lightings: [
    {id:'lt1',name:'촛불',color:'#ffaa44',cat:'traditional',price:30},
    {id:'lt2',name:'석등',color:'#ffcc66',cat:'traditional',price:50},
    {id:'lt3',name:'LED 다운라이트',color:'#fffaf0',cat:'modern',price:80},
    {id:'lt4',name:'펜던트 조명',color:'#fff5e6',cat:'modern',price:120},
    {id:'lt5',name:'간접 조명',color:'#ffeedd',cat:'modern',price:100},
    {id:'lt6',name:'스포트라이트',color:'#ffffff',cat:'modern',price:90}
  ],
  selected: {wall:null,floor:null,light:null},
  load: function(){
    try{ var d = JSON.parse(localStorage.getItem('hb_v8_interior')||'{}'); this.selected = d; }catch(e){}
  },
  save: function(){ localStorage.setItem('hb_v8_interior', JSON.stringify(this.selected)); },
  select: function(type, id){
    this.load();
    this.selected[type] = id;
    this.save();
    v8SFX.play('interior_select');
    v8Achieve.check();
    this.render();
  },
  render: function(){
    this.load();
    var self = this;
    var tabs = [{k:'wall',l:'🧱 벽지',items:self.wallpapers},{k:'floor',l:'🪵 바닥재',items:self.floors},{k:'light',l:'💡 조명',items:self.lightings}];
    var activeTab = self._activeTab || 'wall';
    var html = '<div class="v8i-container"><h2>인테리어 디자인</h2><p>벽지, 바닥재, 조명을 선택해 건물을 꾸미세요</p>';
    html += '<div class="v8i-tabs">';
    tabs.forEach(function(tab){
      html += '<button class="v8i-tab'+(activeTab===tab.k?' active':'')+'" onclick="v8Interior._activeTab=\''+tab.k+'\';v8Interior.render()">'+tab.l+'</button>';
    });
    html += '</div>';
    var currentItems = tabs.find(function(t){return t.k===activeTab;}).items;
    html += '<div class="v8i-grid">';
    currentItems.forEach(function(item){
      var sel = self.selected[activeTab] === item.id;
      html += '<div class="v8i-item'+(sel?' selected':'')+'" onclick="v8Interior.select(\''+activeTab+'\',\''+item.id+'\')">';
      html += '<div class="v8i-swatch" style="background:'+item.color+'"></div>';
      html += '<div class="v8i-name">'+item.name+'</div>';
      html += '<div class="v8i-price">'+(sel?'✅ 적용됨':item.price+'낥')+'</div></div>';
    });
    html += '</div>';
    var sw = self.selected.wall ? self.wallpapers.find(function(w){return w.id===self.selected.wall;}) : null;
    var sf = self.selected.floor ? self.floors.find(function(f){return f.id===self.selected.floor;}) : null;
    var sl = self.selected.light ? self.lightings.find(function(l){return l.id===self.selected.light;}) : null;
    html += '<div class="v8i-preview"><h4>미리보기</h4>';
    html += '<div class="room-preview" style="background:'+(sw?sw.color:'#3a2a1a')+';border-bottom:8px solid '+(sf?sf.color:'#5a4a3a')+'">';
    html += '<div style="width:20px;height:20px;border-radius:50%;background:'+(sl?sl.color:'#555')+';box-shadow:0 0 20px '+(sl?sl.color:'#333')+';align-self:flex-start"></div>';
    html += '</div></div>';
    html += '<button class="v8-close" onclick="v8Close(\'v8InteriorPanel\')">닫기</button></div>';
    document.getElementById('v8InteriorPanel').innerHTML = html;
  },
  _activeTab: 'wall'
};

// ── 5. Share Card System (Canvas 600x380) ──
var v8Share = {
  render: function(){
    var html = '<div class="v8sh-container"><h2>공유 카드</h2><p>완성한 건축물 정보를 카드로 만들어 공유하세요</p>';
    html += '<canvas id="v8ShareCanvas" width="600" height="380"></canvas>';
    html += '<div class="v8sh-btns">';
    html += '<button class="v8sh-btn dl" onclick="v8Share.download()">📥 다운로드</button>';
    html += '<button class="v8sh-btn cp" onclick="v8Share.copy()">📋 클립보드 복사</button>';
    html += '</div><button class="v8-close" onclick="v8Close(\'v8SharePanel\')">닫기</button></div>';
    document.getElementById('v8SharePanel').innerHTML = html;
    setTimeout(function(){ v8Share.draw(); }, 50);
  },
  draw: function(){
    var canvas = document.getElementById('v8ShareCanvas');
    if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var grd = ctx.createLinearGradient(0,0,600,380);
    grd.addColorStop(0,'#2d1b0e');
    grd.addColorStop(0.5,'#4a2c17');
    grd.addColorStop(1,'#2d1b0e');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,600,380);
    ctx.strokeStyle = '#c4956a';
    ctx.lineWidth = 3;
    ctx.strokeRect(8,8,584,364);
    ctx.strokeStyle = 'rgba(196,149,106,0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(16,16,568,348);
    ctx.fillStyle = '#f5deb3';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('한국 건축 체험', 300, 50);
    ctx.fillStyle = '#c4956a';
    ctx.font = '14px sans-serif';
    ctx.fillText('Korean Architecture Experience v8.0', 300, 72);
    var mode = window.currentMode || 'hanok';
    var modeNames = {hanok:'전통 한옥',giwajip:'기와집 (양반가)',choga:'초가집',seowon:'서원 (書院)',jeongja:'정자',modern:'현대 주택'};
    var modeIcons = {hanok:'🏯',giwajip:'🏛️',choga:'🌾',seowon:'📚',jeongja:'⛩️',modern:'🏠'};
    ctx.font = '48px serif';
    ctx.fillStyle = '#f5deb3';
    ctx.fillText(modeIcons[mode]||'🏠', 300, 130);
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(modeNames[mode]||'한옥', 300, 165);
    var data = {};
    try{ data = JSON.parse(localStorage.getItem('hb_progress')||'{}'); }catch(e){}
    var completedCount = 0;
    var totalBuilds = 0;
    if(data.completed) completedCount = Object.keys(data.completed).length;
    if(data[mode] && data[mode].totalBuilds) totalBuilds = data[mode].totalBuilds;
    var stats = [
      {label:'완성 모드', val:completedCount+'/6'},
      {label:'총 건축', val:(totalBuilds||1)+'회'},
      {label:'가구', val:(function(){try{return JSON.parse(localStorage.getItem('hb_v7_furniture')||'[]').length;}catch(e){return 0;}})()+'개'},
      {label:'업적', val:(function(){
        var c=0;
        try{var u=JSON.parse(localStorage.getItem('hb_v7_achievements')||'[]');c+=u.length;}catch(e){}
        try{var a=JSON.parse(localStorage.getItem('hb_achievements')||'{}');c+=Object.keys(a).length;}catch(e){}
        try{var b=JSON.parse(localStorage.getItem('hb_v8_achievements')||'[]');c+=b.length;}catch(e){}
        return c;
      })()+'개'},
      {label:'퀴즈 정답', val:(function(){
        try{var d2=JSON.parse(localStorage.getItem('hb_progress')||'{}');var t=0;Object.values(d2).forEach(function(v){if(v&&v.quizCorrect)t+=v.quizCorrect;});return t;}catch(e){return 0;}
      })()+'개'},
      {label:'갤러리', val:(function(){try{return JSON.parse(localStorage.getItem('hb_v7_gallery')||'[]').length;}catch(e){return 0;}})()+'작품'}
    ];
    var sx = 50;
    ctx.font = 'bold 16px sans-serif';
    stats.forEach(function(s, i){
      var col = i % 3;
      var row = Math.floor(i / 3);
      var x = sx + col * 180;
      var y = 205 + row * 60;
      ctx.fillStyle = 'rgba(196,149,106,0.15)';
      ctx.beginPath();
      ctx.roundRect(x, y, 160, 48, 8);
      ctx.fill();
      ctx.fillStyle = '#f5deb3';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(s.val, x+80, y+22);
      ctx.fillStyle = '#c4956a';
      ctx.font = '11px sans-serif';
      ctx.fillText(s.label, x+80, y+38);
    });
    ctx.fillStyle = 'rgba(196,149,106,0.5)';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    var dateStr = new Date().toLocaleDateString('ko-KR');
    ctx.fillText(dateStr + ' | house-builder v8.0 | PRISM Project', 300, 360);
    v8SFX.play('share_capture');
  },
  download: function(){
    var canvas = document.getElementById('v8ShareCanvas');
    if(!canvas) return;
    var link = document.createElement('a');
    link.download = 'house-builder-share-'+Date.now()+'.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  },
  copy: function(){
    var canvas = document.getElementById('v8ShareCanvas');
    if(!canvas) return;
    canvas.toBlob(function(blob){
      if(navigator.clipboard && navigator.clipboard.write){
        navigator.clipboard.write([new ClipboardItem({'image/png':blob})]).catch(function(){});
      }
    });
  }
};

// ── 6. Structure Analysis Dashboard ──
var v8Struct = {
  render: function(){
    var mode = window.currentMode || 'hanok';
    var analysis = this.analyze(mode);
    var html = '<div class="v8st-container"><h2>구조 분석</h2><p>건축물의 구조적 특성을 분석합니다</p>';
    html += '<div class="v8st-grade"><div class="grade" style="color:'+analysis.gradeColor+'">'+analysis.grade+'</div>';
    html += '<div class="grade-text">구조 등급: '+analysis.gradeText+'</div></div>';
    var meters = [
      {label:'내구성',val:analysis.durability,color:'#4a7c59'},
      {label:'내진성',val:analysis.earthquake,color:'#6a9fd4'},
      {label:'단열성',val:analysis.insulation,color:'#d4a06a'},
      {label:'통풍성',val:analysis.ventilation,color:'#8fc9a0'},
      {label:'방수성',val:analysis.waterproof,color:'#7a8fd4'},
      {label:'미관성',val:analysis.aesthetic,color:'#c49fd4'}
    ];
    meters.forEach(function(m){
      html += '<div class="v8st-meter">';
      html += '<div class="v8st-meter-label"><span>'+m.label+'</span><span>'+m.val+'%</span></div>';
      html += '<div class="v8st-meter-bar"><div class="v8st-meter-fill" style="width:'+m.val+'%;background:'+m.color+'"></div></div></div>';
    });
    html += '<div class="v8st-facts">';
    html += '<div class="v8st-fact"><div class="val">'+analysis.lifespan+'</div><div class="lbl">예상 수명 (년)</div></div>';
    html += '<div class="v8st-fact"><div class="val">'+analysis.area+'</div><div class="lbl">건축 면적 (평)</div></div>';
    html += '<div class="v8st-fact"><div class="val">'+analysis.height+'</div><div class="lbl">최대 높이 (m)</div></div>';
    html += '<div class="v8st-fact"><div class="val">'+analysis.parts+'</div><div class="lbl">구조 부재 수</div></div>';
    html += '</div>';
    html += '<button class="v8-close" onclick="v8Close(\'v8StructPanel\')">닫기</button></div>';
    document.getElementById('v8StructPanel').innerHTML = html;
    v8SFX.play('struct_analyze');
  },
  analyze: function(mode){
    var profiles = {
      hanok:{durability:85,earthquake:90,insulation:70,ventilation:95,waterproof:75,aesthetic:95,lifespan:500,area:30,height:7,parts:10,grade:'S',gradeColor:'#f5deb3',gradeText:'최상급 - 세계유산 건축'},
      giwajip:{durability:88,earthquake:85,insulation:72,ventilation:90,waterproof:80,aesthetic:98,lifespan:400,area:45,height:8,parts:9,grade:'S',gradeColor:'#f5deb3',gradeText:'최상급 - 양반가 건축'},
      choga:{durability:50,earthquake:60,insulation:80,ventilation:85,waterproof:45,aesthetic:70,lifespan:30,area:12,height:4,parts:7,grade:'B',gradeColor:'#8fc9a0',gradeText:'양호 - 서민 건축'},
      seowon:{durability:82,earthquake:80,insulation:68,ventilation:88,waterproof:78,aesthetic:92,lifespan:450,area:60,height:7,parts:8,grade:'A',gradeColor:'#6a9fd4',gradeText:'우수 - 교육 건축'},
      jeongja:{durability:75,earthquake:88,insulation:30,ventilation:100,waterproof:60,aesthetic:96,lifespan:350,area:8,height:5,parts:6,grade:'A',gradeColor:'#6a9fd4',gradeText:'우수 - 풍류 건축'},
      modern:{durability:80,earthquake:75,insulation:92,ventilation:60,waterproof:95,aesthetic:70,lifespan:80,area:35,height:9,parts:8,grade:'A',gradeColor:'#6a9fd4',gradeText:'우수 - 현대 건축'}
    };
    return profiles[mode] || profiles.hanok;
  }
};

// ── 7. Camera Presets ──
var v8Camera = {
  presets: [
    {id:'front',name:'정면 뷰',icon:'🏠',desc:'건물 정면에서 바라보기',theta:0,phi:Math.PI/5,dist:14},
    {id:'aerial',name:'항공 뷰',icon:'🛩️',desc:'하늘에서 내려다보기',theta:Math.PI/4,phi:0.15,dist:18},
    {id:'detail',name:'디테일 뷰',icon:'🔍',desc:'가까이서 구조 확인',theta:Math.PI/6,phi:Math.PI/4,dist:7},
    {id:'side',name:'측면 뷰',icon:'📐',desc:'옆에서 구조 확인',theta:Math.PI/2,phi:Math.PI/5,dist:14},
    {id:'back',name:'후면 뷰',icon:'🔄',desc:'건물 뒤에서 바라보기',theta:Math.PI,phi:Math.PI/5,dist:14},
    {id:'worm',name:'개미 시점',icon:'🐜',desc:'아래에서 올려다보기',theta:Math.PI/4,phi:Math.PI/2.3,dist:10},
    {id:'corner',name:'대각선 뷰',icon:'📷',desc:'45도 각도 사진 구도',theta:Math.PI/4,phi:Math.PI/4,dist:12},
    {id:'panorama',name:'파노라마',icon:'🌅',desc:'넓게 펼쳐보기',theta:Math.PI/6,phi:Math.PI/6,dist:22}
  ],
  current: 'corner',
  apply: function(id){
    var p = this.presets.find(function(x){return x.id===id;});
    if(!p) return;
    this.current = id;
    if(window.targetTheta !== undefined) window.targetTheta = p.theta;
    if(window.targetPhi !== undefined) window.targetPhi = p.phi;
    if(window.targetDist !== undefined) window.targetDist = p.dist;
    v8SFX.play('camera_move');
    this.render();
  },
  render: function(){
    var self = this;
    var html = '<div class="v8c-container"><h2>카메라 프리셋</h2><p>다양한 각도에서 건축물을 감상하세요</p>';
    html += '<div class="v8c-grid">';
    self.presets.forEach(function(p){
      html += '<div class="v8c-card'+(self.current===p.id?' active':'')+'" onclick="v8Camera.apply(\''+p.id+'\')">';
      html += '<div class="v8c-icon">'+p.icon+'</div><h4>'+p.name+'</h4><p>'+p.desc+'</p></div>';
    });
    html += '</div><button class="v8-close" onclick="v8Close(\'v8CamPanel\')">닫기</button></div>';
    document.getElementById('v8CamPanel').innerHTML = html;
  }
};

// ── 8. Cost Simulator ──
var v8Cost = {
  costs: {
    hanok:{
      items:[
        {name:'소나무 기둥 6본',unit:'본',qty:6,price:800000},
        {name:'주초돌 (화강석)',unit:'개',qty:6,price:200000},
        {name:'기단석 (장대석)',unit:'석',qty:40,price:50000},
        {name:'대들보/도리',unit:'재',qty:8,price:600000},
        {name:'서까래',unit:'개',qty:24,price:80000},
        {name:'기와 (암+수)',unit:'장',qty:500,price:3000},
        {name:'황토 벽체',unit:'㎡',qty:30,price:80000},
        {name:'창호지+문살',unit:'짝',qty:8,price:300000},
        {name:'구들장 (온돌)',unit:'㎡',qty:15,price:200000},
        {name:'마루판 (소나무)',unit:'㎡',qty:12,price:150000}
      ],
      labor: 45000000,
      period: '6~12개월'
    },
    choga:{
      items:[
        {name:'통나무 기둥',unit:'본',qty:4,price:200000},
        {name:'주춧돌 (강돌)',unit:'개',qty:4,price:30000},
        {name:'볏짚 (이엉)',unit:'단',qty:100,price:5000},
        {name:'대들보',unit:'재',qty:3,price:300000},
        {name:'황토 + 짚',unit:'가마',qty:20,price:30000},
        {name:'나무문/싸리문',unit:'짝',qty:2,price:100000}
      ],
      labor: 5000000,
      period: '1~2개월'
    },
    giwajip:{
      items:[
        {name:'소나무 원주 기둥',unit:'본',qty:12,price:1200000},
        {name:'주초석 (연꽃/팔각)',unit:'개',qty:12,price:500000},
        {name:'장대석 기단',unit:'석',qty:80,price:80000},
        {name:'공포 부재 (익공)',unit:'조',qty:12,price:2000000},
        {name:'대들보/도리 5량',unit:'재',qty:10,price:800000},
        {name:'기와 (고급)',unit:'장',qty:1000,price:5000},
        {name:'꽃살문 창호',unit:'짝',qty:12,price:500000},
        {name:'대청마루 참나무',unit:'㎡',qty:25,price:250000},
        {name:'단청',unit:'㎡',qty:20,price:300000}
      ],
      labor: 120000000,
      period: '12~24개월'
    },
    seowon:{
      items:[
        {name:'강당+동서재 기둥',unit:'본',qty:20,price:900000},
        {name:'화강석 기단/계단',unit:'석',qty:100,price:100000},
        {name:'토담장',unit:'m',qty:50,price:200000},
        {name:'기와',unit:'장',qty:2000,price:4000},
        {name:'현판 (해서체)',unit:'면',qty:3,price:1500000},
        {name:'연못+조경',unit:'식',qty:1,price:8000000}
      ],
      labor: 80000000,
      period: '18~36개월'
    },
    jeongja:{
      items:[
        {name:'기둥 (원주)',unit:'본',qty:6,price:800000},
        {name:'주초석',unit:'개',qty:6,price:300000},
        {name:'누각 마루',unit:'㎡',qty:10,price:200000},
        {name:'기와 지붕',unit:'장',qty:300,price:4000},
        {name:'난간',unit:'m',qty:12,price:150000}
      ],
      labor: 25000000,
      period: '3~6개월'
    },
    modern:{
      items:[
        {name:'콘크리트 기초',unit:'㎥',qty:15,price:150000},
        {name:'철근',unit:'톤',qty:3,price:800000},
        {name:'시멘트블록 벽체',unit:'㎡',qty:80,price:40000},
        {name:'슬레이트/기와형 지붕',unit:'㎡',qty:40,price:60000},
        {name:'이중유리 창문',unit:'짝',qty:8,price:300000},
        {name:'현관 철재문',unit:'짝',qty:1,price:800000},
        {name:'원목마루/타일',unit:'㎡',qty:35,price:80000},
        {name:'보일러 시스템',unit:'대',qty:1,price:2500000},
        {name:'전기/배관',unit:'식',qty:1,price:8000000}
      ],
      labor: 35000000,
      period: '4~8개월'
    }
  },
  render: function(){
    var mode = window.currentMode || 'hanok';
    var info = this.costs[mode] || this.costs.hanok;
    var modeNames = {hanok:'전통 한옥',giwajip:'기와집',choga:'초가집',seowon:'서원',jeongja:'정자',modern:'현대 주택'};
    var html = '<div class="v8co-container"><h2>건축 비용 시뮬레이터</h2>';
    html += '<p>'+( modeNames[mode]||'한옥')+' 건축에 필요한 실제 비용을 추산합니다</p>';
    html += '<table class="v8co-table"><thead><tr><th>항목</th><th>수량</th><th>단가</th><th>소계</th></tr></thead><tbody>';
    var matTotal = 0;
    info.items.forEach(function(item){
      var sub = item.qty * item.price;
      matTotal += sub;
      html += '<tr><td>'+item.name+'</td><td>'+item.qty+item.unit+'</td>';
      html += '<td>'+v8Cost.fmt(item.price)+'</td>';
      html += '<td>'+v8Cost.fmt(sub)+'</td></tr>';
    });
    html += '</tbody></table>';
    html += '<div class="v8co-total"><span>재료비 소계</span><span>'+v8Cost.fmt(matTotal)+'</span></div>';
    html += '<div class="v8co-total" style="margin-top:8px"><span>인건비</span><span>'+v8Cost.fmt(info.labor)+'</span></div>';
    var grandTotal = matTotal + info.labor;
    html += '<div class="v8co-total" style="margin-top:8px;border-color:#f5deb3;background:rgba(196,149,106,.2)"><span>총 예상 비용</span><span>'+v8Cost.fmt(grandTotal)+'</span></div>';
    html += '<p style="color:#c4956a;font-size:12px;text-align:center;margin-top:12px">예상 공사 기간: '+info.period+' | 2024년 기준 추산가</p>';
    html += '<button class="v8-close" onclick="v8Close(\'v8CostPanel\')">닫기</button></div>';
    document.getElementById('v8CostPanel').innerHTML = html;
    v8SFX.play('cost_calculate');
  },
  fmt: function(n){
    if(n >= 100000000) return (n/100000000).toFixed(1)+'억';
    if(n >= 10000) return Math.round(n/10000)+'만';
    return n.toLocaleString()+'원';
  }
};

// ── 9. Architecture Timeline (20 events) ──
var v8Timeline = {
  events: [
    {year:'BC 6000',title:'움집 (수혈주거)',desc:'신석기시대 최초의 주거 형태. 땅을 파고 지붕을 올린 반지하 구조로, 바람과 추위를 피했습니다.'},
    {year:'BC 2000',title:'고인돌 건축',desc:'청동기시대 거대한 돌을 이용한 건축. 무덤이자 제단으로, 한국에만 4만 기 이상 분포합니다.'},
    {year:'BC 200',title:'초가집 등장',desc:'철기시대 농경과 함께 볏짚 지붕의 초가집이 등장. 서민 주거의 기본 형태가 됩니다.'},
    {year:'AD 37',title:'고구려 궁궐',desc:'고구려 건국과 함께 국내성, 평양성 등 대규모 궁궐 건축이 시작됩니다.'},
    {year:'AD 372',title:'불교 사찰 건축',desc:'고구려에 불교가 전래되며 사찰 건축이 시작. 목조+기와의 본격적 한국 건축이 시작됩니다.'},
    {year:'AD 634',title:'황룡사 9층 목탑',desc:'신라 선덕여왕 때 건립. 높이 약 80m로 동아시아 최대 규모의 목조 건축물이었습니다.'},
    {year:'AD 751',title:'불국사+석굴암',desc:'통일신라 시대 최고의 건축. 석조와 목조의 완벽한 조화, 유네스코 세계유산입니다.'},
    {year:'AD 918',title:'고려 궁궐 건축',desc:'개성 만월대 등 고려 궁궐. 기와와 공포 기술이 크게 발전합니다.'},
    {year:'AD 1104',title:'해인사 장경판전',desc:'팔만대장경을 보관하기 위한 건축. 자연 환기 시스템이 놀라운 과학적 건축입니다.'},
    {year:'AD 1395',title:'경복궁 창건',desc:'조선 태조 이성계가 한양에 경복궁을 창건. 한국 궁궐 건축의 정수입니다.'},
    {year:'AD 1398',title:'숭례문 건립',desc:'한양 도성의 남대문. 석축 위의 2층 목조 누각으로 한국 성곽 건축의 대표작입니다.'},
    {year:'AD 1543',title:'소수서원 설립',desc:'최초의 서원. 전학후묘의 배치 원칙이 확립되며, 서원 건축의 시작입니다.'},
    {year:'AD 1592',title:'임진왜란 후 재건',desc:'전쟁으로 많은 건축물이 소실. 이후 재건 과정에서 건축 기술이 더욱 발전합니다.'},
    {year:'AD 1796',title:'수원화성 완공',desc:'정조의 명으로 정약용이 설계. 거중기 등 과학적 도구를 사용한 혁신적 성곽 건축입니다.'},
    {year:'AD 1897',title:'독립문 건립',desc:'서재필의 주도로 건립. 서양 아치 양식을 도입한 근대 건축의 시작점입니다.'},
    {year:'AD 1926',title:'경성역(서울역)',desc:'르네상스 양식의 근대 건축물. 동서양 건축의 만남을 보여줍니다.'},
    {year:'AD 1962',title:'아파트 시대',desc:'마포 아파트 건설을 시작으로 한국의 주거 혁명이 시작. 아파트가 주요 주거 형태가 됩니다.'},
    {year:'AD 1988',title:'올림픽 건축',desc:'서울 올림픽을 위한 대규모 건축. 잠실 주경기장 등 현대 건축의 도약입니다.'},
    {year:'AD 2014',title:'동대문 DDP',desc:'자하 하디드 설계의 비정형 건축. 한국 건축이 세계적 현대 건축으로 도약합니다.'},
    {year:'AD 2020',title:'한옥의 현대화',desc:'전통과 현대의 융합. 한옥 카페, 한옥 호텔 등 전통 건축의 현대적 재해석이 활발합니다.'}
  ],
  render: function(){
    var html = '<div class="v8t-container"><h2>한국 건축 연표</h2><p>BC 6000 ~ AD 2020, 한국 건축사 20개 사건</p>';
    html += '<div class="v8t-line">';
    this.events.forEach(function(e){
      html += '<div class="v8t-item" onclick="this.classList.toggle(\'expanded\')">';
      html += '<span class="v8t-year">'+e.year+'</span>';
      html += '<h4>'+e.title+'</h4>';
      html += '<div class="v8t-desc">'+e.desc+'</div></div>';
    });
    html += '</div><button class="v8-close" onclick="v8Close(\'v8TimelinePanel\')">닫기</button></div>';
    document.getElementById('v8TimelinePanel').innerHTML = html;
  }
};

// ── 10. Daily Challenge System (14 types) ──
var v8Daily = {
  challenges: [
    {id:'dc1',name:'한옥 짓기',desc:'한옥 모드 1회 완성',icon:'🏯',check:function(){return v8Daily.hasDone('hanok');}},
    {id:'dc2',name:'초가 짓기',desc:'초가집 모드 1회 완성',icon:'🌾',check:function(){return v8Daily.hasDone('choga');}},
    {id:'dc3',name:'기와집 짓기',desc:'기와집 모드 1회 완성',icon:'🏛️',check:function(){return v8Daily.hasDone('giwajip');}},
    {id:'dc4',name:'밤의 건축가',desc:'밤 모드에서 건축 완성',icon:'🌙',check:function(){return !!window.isNight && v8Daily.anyDoneToday();}},
    {id:'dc5',name:'겨울 건축',desc:'겨울 계절에서 건축 완성',icon:'❄️',check:function(){try{return window.currentSeason==='winter' && v8Daily.anyDoneToday();}catch(e){return false;}}},
    {id:'dc6',name:'사진작가',desc:'사진 2장 촬영',icon:'📸',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return (d.photoCount||0)>=2;}catch(e){return false;}}},
    {id:'dc7',name:'퀴즈 도전',desc:'퀴즈 3문 정답',icon:'🧠',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var t=0;Object.values(d).forEach(function(v){if(v&&v.quizCorrect)t+=v.quizCorrect;});return t>=3;}catch(e){return false;}}},
    {id:'dc8',name:'가구 배치',desc:'가구 3개 이상 배치',icon:'🛋️',check:function(){try{return JSON.parse(localStorage.getItem('hb_v7_furniture')||'[]').length>=3;}catch(e){return false;}}},
    {id:'dc9',name:'서원 탐방',desc:'서원 모드 완성',icon:'📚',check:function(){return v8Daily.hasDone('seowon');}},
    {id:'dc10',name:'현대 건축',desc:'현대 주택 완성',icon:'🏠',check:function(){return v8Daily.hasDone('modern');}},
    {id:'dc11',name:'비교 학습',desc:'건축 비교 기능 1회 사용',icon:'📊',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return (d.compareCount||0)>=1;}catch(e){return false;}}},
    {id:'dc12',name:'날씨 마스터',desc:'날씨 2종 이상 체험',icon:'🌦️',check:function(){try{return JSON.parse(localStorage.getItem('hb_v7_weather_tried')||'[]').length>=2;}catch(e){return false;}}},
    {id:'dc13',name:'BGM 감상',desc:'배경음악 켜기',icon:'🎵',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return !!d.bgmPlayed;}catch(e){return false;}}},
    {id:'dc14',name:'인테리어 코디',desc:'인테리어 1종 이상 선택',icon:'🎨',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v8_interior')||'{}');return d.wall||d.floor||d.light;}catch(e){return false;}}}
  ],
  getTodaysChallenges: function(){
    var today = new Date();
    var seed = today.getFullYear()*10000 + (today.getMonth()+1)*100 + today.getDate();
    var indices = [];
    for(var i=0;i<3;i++){
      var idx = (seed * (i+7) + i*13) % this.challenges.length;
      while(indices.indexOf(idx)!==-1) idx = (idx+1) % this.challenges.length;
      indices.push(idx);
    }
    return indices.map(function(i){ return v8Daily.challenges[i]; });
  },
  getStreak: function(){
    try{
      var data = JSON.parse(localStorage.getItem('hb_v8_daily')||'{}');
      return data.streak || 0;
    }catch(e){ return 0; }
  },
  hasDone: function(mode){
    try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return d.completed && d.completed[mode];}catch(e){return false;}
  },
  anyDoneToday: function(){
    try{
      var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');
      if(!d.completed) return false;
      var today = new Date().toDateString();
      return Object.values(d.completed).some(function(ts){ return new Date(ts).toDateString()===today; });
    }catch(e){return false;}
  },
  checkAndUpdate: function(){
    var today = new Date().toDateString();
    try{
      var data = JSON.parse(localStorage.getItem('hb_v8_daily')||'{}');
      if(data.lastDate !== today){
        if(data.lastDate === new Date(Date.now()-86400000).toDateString()){
          data.streak = (data.streak||0)+1;
        } else {
          data.streak = 1;
        }
        data.lastDate = today;
        data.completed = [];
        localStorage.setItem('hb_v8_daily', JSON.stringify(data));
      }
      var todays = this.getTodaysChallenges();
      var allDone = true;
      todays.forEach(function(ch){
        if(ch.check()){
          if(data.completed.indexOf(ch.id)===-1){
            data.completed.push(ch.id);
            v8SFX.play('daily_complete');
          }
        } else {
          allDone = false;
        }
      });
      localStorage.setItem('hb_v8_daily', JSON.stringify(data));
      if(allDone && todays.length>0) v8Achieve.check();
    }catch(e){}
  },
  render: function(){
    this.checkAndUpdate();
    var todays = this.getTodaysChallenges();
    var streak = this.getStreak();
    var completedIds = [];
    try{ completedIds = JSON.parse(localStorage.getItem('hb_v8_daily')||'{}').completed || []; }catch(e){}
    var html = '<div class="v8d-container"><h2>일일 도전</h2><p>매일 3가지 도전 과제를 완수하세요</p>';
    html += '<div class="v8d-streak"><div class="streak-num">'+streak+'</div><div class="streak-lbl">연속 도전 일수</div></div>';
    html += '<div class="v8d-challenges">';
    todays.forEach(function(ch){
      var done = ch.check() || completedIds.indexOf(ch.id)!==-1;
      html += '<div class="v8d-ch'+(done?' done':'')+'">';
      html += '<div class="ch-icon">'+ch.icon+'</div>';
      html += '<div class="ch-info"><h4>'+ch.name+'</h4><p>'+ch.desc+'</p></div>';
      html += '<div class="ch-status">'+(done?'✅':'⬜')+'</div></div>';
    });
    html += '</div>';
    html += '<button class="v8-close" onclick="v8Close(\'v8DailyPanel\')">닫기</button></div>';
    document.getElementById('v8DailyPanel').innerHTML = html;
  }
};

// ── 11. Quiz v8 (+15 questions, total 45→60) ──
var v8Quiz = {
  questions: [
    {q:'수원화성을 설계할 때 사용한 기중기를 만든 학자는?',a:['정약용','이순신','세종대왕','장영실'],c:0,tip:'정약용은 거중기를 발명해 성벽 건축의 효율을 크게 높였습니다'},
    {q:'한옥에서 &quot;칸&quot;이란 무엇인가요?',a:['기둥과 기둥 사이의 공간','방의 크기','창문의 수','벽의 두께'],c:0,tip:'칸은 기둥 사이의 단위입니다. 3칸, 5칸 등으로 한옥의 크기를 표현합니다'},
    {q:'고려시대 건축의 특징인 &quot;주심포&quot;양식이란?',a:['기둥 위에만 공포를 놓는 양식','벽 위에 공포를 놓는 양식','지붕만 있는 양식','돌로만 짓는 양식'],c:0,tip:'주심포 양식은 기둥 위에만 공포를 배치하는 소박한 양식입니다'},
    {q:'불국사 청운교/백운교의 특별한 점은?',a:['돌계단이 다리 형태로 되어 있음','나무로 만들어짐','지하에 있음','철로 보강됨'],c:0,tip:'청운교와 백운교는 부처님의 세계로 오르는 다리를 상징하는 석조 계단입니다'},
    {q:'한옥 지붕에서 &quot;합각&quot;이 있는 지붕 형태는?',a:['팔작지붕','맞배지붕','우진각지붕','모임지붕'],c:0,tip:'팔작지붕은 네 면 경사와 양쪽 삼각형 합각이 있는 가장 격식 높은 지붕입니다'},
    {q:'조선시대 &quot;온돌&quot;의 열 전달 통로를 무엇이라 하나요?',a:['고래','굴뚝','아궁이','기단'],c:0,tip:'고래는 방바닥 아래 있는 열기가 이동하는 통로입니다'},
    {q:'경복궁 근정전의 지붕 형태는?',a:['팔작지붕(중층)','맞배지붕','우진각지붕','솟을지붕'],c:0,tip:'근정전은 이중 팔작지붕으로 궁궐 건축의 최고 격식을 보여줍니다'},
    {q:'한옥에서 &quot;대들보&quot;에 글을 쓰는 행사를 뭐라 하나요?',a:['상량식','입주식','개업식','낙성식'],c:0,tip:'상량식은 대들보를 올릴 때 글을 적고 축하하는 전통 의식입니다'},
    {q:'한국 최초의 아파트가 지어진 곳은?',a:['마포','강남','여의도','잠실'],c:0,tip:'1962년 마포 아파트가 한국 최초의 아파트로 건설되었습니다'},
    {q:'&quot;DDP(동대문디자인플라자)&quot;를 설계한 건축가는?',a:['자하 하디드','안도 다다오','렘 콜하스','김수근'],c:0,tip:'이라크 출신 자하 하디드가 설계한 비정형 건축물입니다'},
    {q:'한옥의 처마가 올라가는 곡선을 무엇이라 하나요?',a:['안허리곡','추녀곡','배흘림','흘림'],c:0,tip:'안허리곡은 처마 끝이 살짝 올라가는 한옥 특유의 아름다운 곡선입니다'},
    {q:'유네스코 세계유산에 등재된 한국 서원은 몇 곳인가요?',a:['9곳','5곳','3곳','12곳'],c:0,tip:'2019년 소수서원, 도산서원 등 9개 서원이 세계유산에 등재되었습니다'},
    {q:'해인사 장경판전의 뛰어난 건축 기술은?',a:['자연 환기 시스템','지하 난방','방화벽','철근 보강'],c:0,tip:'창문 크기와 위치를 다르게 설계해 자연 환기로 목판을 600년 넘게 보존합니다'},
    {q:'한옥의 &quot;추녀&quot;란 어떤 부분인가요?',a:['지붕 모서리의 사선 부재','벽체 장식','기둥 받침','문틀 장식'],c:0,tip:'추녀는 지붕의 네 모서리에서 대각선으로 뻗는 서까래입니다'},
    {q:'한옥에서 사랑채와 안채를 구분하는 이유는?',a:['남녀유별 생활공간 분리','구조적 안정','온도 조절','재료 절약'],c:0,tip:'조선시대 유교적 생활양식에 따라 남녀의 생활 공간을 분리했습니다'}
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

// ── 12. Achievement System v8 (+12 achievements, 62→74) ──
var v8Achieve = {
  defs: [
    {id:'a8_interior',name:'인테리어 디자이너',desc:'벽지/바닥/조명 모두 선택',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v8_interior')||'{}');return d.wall&&d.floor&&d.light;}catch(e){return false;}}},
    {id:'a8_share',name:'건축 공유왕',desc:'공유 카드 생성',check:function(){try{return !!localStorage.getItem('hb_v8_shared');}catch(e){return false;}}},
    {id:'a8_struct',name:'구조 분석가',desc:'구조 분석 3회 실행',check:function(){try{return (parseInt(localStorage.getItem('hb_v8_struct_count')||'0'))>=3;}catch(e){return false;}}},
    {id:'a8_camera',name:'사진 감독',desc:'카메라 프리셋 5종 사용',check:function(){try{return JSON.parse(localStorage.getItem('hb_v8_cam_used')||'[]').length>=5;}catch(e){return false;}}},
    {id:'a8_cost',name:'예산 관리자',desc:'비용 시뮬레이터 2종 확인',check:function(){try{return JSON.parse(localStorage.getItem('hb_v8_cost_viewed')||'[]').length>=2;}catch(e){return false;}}},
    {id:'a8_timeline',name:'역사 탐험가',desc:'건축 연표 열람',check:function(){try{return !!localStorage.getItem('hb_v8_timeline_viewed');}catch(e){return false;}}},
    {id:'a8_daily3',name:'성실한 건축가',desc:'일일 도전 3일 연속',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v8_daily')||'{}');return (d.streak||0)>=3;}catch(e){return false;}}},
    {id:'a8_daily7',name:'도전의 달인',desc:'일일 도전 7일 연속',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v8_daily')||'{}');return (d.streak||0)>=7;}catch(e){return false;}}},
    {id:'a8_quiz60',name:'건축학 박사',desc:'퀴즈 60문 달성',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var t=0;Object.values(d).forEach(function(v){if(v&&v.quizCorrect)t+=v.quizCorrect;});return t>=60;}catch(e){return false;}}},
    {id:'a8_cam_all',name:'올앵글 마스터',desc:'카메라 프리셋 8종 전부 사용',check:function(){try{return JSON.parse(localStorage.getItem('hb_v8_cam_used')||'[]').length>=8;}catch(e){return false;}}},
    {id:'a8_interior_full',name:'실내건축사',desc:'벽지+바닥+조명 각 2종 이상 사용',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v8_interior_history')||'{}');return (d.walls||[]).length>=2&&(d.floors||[]).length>=2&&(d.lights||[]).length>=2;}catch(e){return false;}}},
    {id:'a8_all_modes_v8',name:'v8 마스터',desc:'v8 기능 7종 이상 사용',check:function(){
      var count = 0;
      try{if(JSON.parse(localStorage.getItem('hb_v8_interior')||'{}').wall) count++;}catch(e){}
      try{if(localStorage.getItem('hb_v8_shared')) count++;}catch(e){}
      try{if(parseInt(localStorage.getItem('hb_v8_struct_count')||'0')>0) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v8_cam_used')||'[]').length>0) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v8_cost_viewed')||'[]').length>0) count++;}catch(e){}
      try{if(localStorage.getItem('hb_v8_timeline_viewed')) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v8_daily')||'{}').streak>0) count++;}catch(e){}
      return count >= 7;
    }}
  ],
  unlocked: [],
  load: function(){
    try{ this.unlocked = JSON.parse(localStorage.getItem('hb_v8_achievements')||'[]'); }catch(e){ this.unlocked=[]; }
  },
  save: function(){ localStorage.setItem('hb_v8_achievements', JSON.stringify(this.unlocked)); },
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
    el.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2d1b0e,#4a2c17);border:2px solid #c4956a;border-radius:12px;padding:12px 24px;z-index:9999;color:#f5deb3;font-size:14px;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,.6);animation:v8toast .5s ease';
    el.textContent = '🏆 업적 달성: ' + name;
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 3000);
  }
};

// ── 13. Quick Action Buttons (append to existing v7 quick btns) ──
(function(){
  var btns = [
    {label:'🎨 인테리어',fn:'v8Open("v8InteriorPanel")'},
    {label:'📤 공유카드',fn:'v8Open("v8SharePanel")'},
    {label:'📊 구조분석',fn:'v8Open("v8StructPanel")'},
    {label:'🎥 카메라',fn:'v8Open("v8CamPanel")'},
    {label:'💰 비용',fn:'v8Open("v8CostPanel")'},
    {label:'📅 연표',fn:'v8Open("v8TimelinePanel")'},
    {label:'⭐ 일일도전',fn:'v8Open("v8DailyPanel")'}
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

// ── 14. Panel Open/Close ──
window.v8Open = function(id){
  var panel = document.getElementById(id);
  if(!panel) return;
  panel.classList.add('active');
  switch(id){
    case 'v8InteriorPanel': v8Interior.render(); break;
    case 'v8SharePanel': v8Share.render(); localStorage.setItem('hb_v8_shared','1'); v8Achieve.check(); break;
    case 'v8StructPanel':
      v8Struct.render();
      var c = parseInt(localStorage.getItem('hb_v8_struct_count')||'0');
      localStorage.setItem('hb_v8_struct_count', String(c+1));
      v8Achieve.check();
      break;
    case 'v8CamPanel': v8Camera.render(); break;
    case 'v8CostPanel':
      v8Cost.render();
      try{
        var viewed = JSON.parse(localStorage.getItem('hb_v8_cost_viewed')||'[]');
        var mode = window.currentMode || 'hanok';
        if(viewed.indexOf(mode)===-1){ viewed.push(mode); localStorage.setItem('hb_v8_cost_viewed', JSON.stringify(viewed)); }
      }catch(e){}
      v8Achieve.check();
      break;
    case 'v8TimelinePanel':
      v8Timeline.render();
      localStorage.setItem('hb_v8_timeline_viewed','1');
      v8Achieve.check();
      break;
    case 'v8DailyPanel': v8Daily.render(); break;
  }
};
window.v8Close = function(id){
  var panel = document.getElementById(id);
  if(panel) panel.classList.remove('active');
};

// ── 15. Keyboard Shortcuts (+5) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(!document.getElementById('modeSelect')) return;
    if(!document.getElementById('modeSelect').classList.contains('hidden')) return;
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
    if(!e.shiftKey) return;
    var key = e.key;
    if(key==='I') v8Open('v8InteriorPanel');
    else if(key==='S') v8Open('v8SharePanel');
    else if(key==='A') v8Open('v8StructPanel');
    else if(key==='K') v8Open('v8CamPanel');
    else if(key==='L') v8Open('v8TimelinePanel');
  });
})();

// ── 16. Camera Usage Tracking ──
(function(){
  var origApply = v8Camera.apply.bind(v8Camera);
  v8Camera.apply = function(id){
    try{
      var used = JSON.parse(localStorage.getItem('hb_v8_cam_used')||'[]');
      if(used.indexOf(id)===-1){ used.push(id); localStorage.setItem('hb_v8_cam_used', JSON.stringify(used)); }
    }catch(e){}
    origApply(id);
    v8Achieve.check();
  };
})();

// ── 17. Interior History Tracking ──
(function(){
  var origSelect = v8Interior.select.bind(v8Interior);
  v8Interior.select = function(type, id){
    try{
      var hist = JSON.parse(localStorage.getItem('hb_v8_interior_history')||'{"walls":[],"floors":[],"lights":[]}');
      var key = type==='wall'?'walls':type==='floor'?'floors':'lights';
      if(!hist[key]) hist[key] = [];
      if(hist[key].indexOf(id)===-1){ hist[key].push(id); localStorage.setItem('hb_v8_interior_history', JSON.stringify(hist)); }
    }catch(e){}
    origSelect(type, id);
  };
})();

// ── 18. Hook into main game completion ──
(function(){
  var origComplete = window.showComplete;
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v8Hooked) return true;
    window.__v8Hooked = true;
    window.showComplete = function(){
      orig.apply(this, arguments);
      v8Daily.checkAndUpdate();
      v8Achieve.check();
    };
    return true;
  }
  if(!hookComplete()){
    var ci = setInterval(function(){
      if(hookComplete()) clearInterval(ci);
    }, 500);
    setTimeout(function(){ clearInterval(ci); }, 10000);
  }
})();

// ── 19. Inject quiz on load ──
(function(){
  var qi = setInterval(function(){
    if(window.quizPool){
      v8Quiz.injectToMain();
      clearInterval(qi);
    }
  }, 500);
  setTimeout(function(){ clearInterval(qi); }, 10000);
})();

// ── 20. Initial load + checks ──
(function(){
  v8Interior.load();
  v8Daily.checkAndUpdate();
  setTimeout(function(){ v8Achieve.check(); }, 3000);
})();

// ── 21. Toast Animation CSS ──
(function(){
  var s = document.createElement('style');
  s.textContent = '@keyframes v8toast{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(s);
})();

} // end __hbV8 guard

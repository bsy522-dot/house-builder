// =====================================================
// House Builder v9.0 Patch
// 조경정원12종+건축블루프린트6종+퀘스트체인8단계+건축자격증5단계
// 건축용어사전40항목+시간대조명Canvas+난이도시스템3단계+비교갤러리Canvas
// 환경음6종+퀴즈15추가(60→75)+업적12추가(74→86)+SFX8종+키보드6종
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV9) {
window.__hbV9 = true;

// ── 1. CSS Injection ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v9-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3300;overflow-y:auto;padding:16px}',
    '.v9-panel.active{display:block}',
    '.v9-container{max-width:640px;margin:40px auto}',
    '.v9-container h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v9-container>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v9-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v9-close:hover{background:#d4a57a}',
    '.v9-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v9-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v9-tab:hover,.v9-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v9-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}',
    '.v9-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v9-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v9-card.selected,.v9-card.placed{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v9-card .v9-icon{font-size:32px;margin-bottom:6px}',
    '.v9-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v9-card p{color:#c4956a;font-size:11px;margin:0}',
    '.v9-quest-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;align-items:center;gap:12px;transition:all .2s}',
    '.v9-quest-item.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v9-quest-item.locked{opacity:.5}',
    '.v9-quest-item .qi-num{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#c4956a;flex-shrink:0}',
    '.v9-quest-item.done .qi-num{background:#4a7c59;color:#fff}',
    '.v9-quest-item .qi-info{flex:1}',
    '.v9-quest-item .qi-info h4{color:#f5deb3;font-size:13px;margin:0 0 2px}',
    '.v9-quest-item .qi-info p{color:#c4956a;font-size:11px;margin:0}',
    '.v9-quest-item .qi-reward{color:#f5deb3;font-size:11px;background:rgba(196,149,106,.15);padding:3px 8px;border-radius:10px;flex-shrink:0}',
    '.v9-cert{text-align:center;padding:24px;background:linear-gradient(135deg,rgba(196,149,106,.1),rgba(196,149,106,.05));border:2px solid rgba(196,149,106,.3);border-radius:16px;margin:16px 0}',
    '.v9-cert .cert-badge{font-size:64px;margin-bottom:8px}',
    '.v9-cert h3{color:#f5deb3;font-size:18px;margin:0 0 4px}',
    '.v9-cert .cert-desc{color:#c4956a;font-size:13px}',
    '.v9-cert .cert-bar{height:8px;background:rgba(255,255,255,.1);border-radius:4px;margin:12px 0 4px;overflow:hidden}',
    '.v9-cert .cert-fill{height:100%;background:linear-gradient(90deg,#c4956a,#f5deb3);border-radius:4px;transition:width .6s}',
    '.v9-cert .cert-pct{font-size:12px;color:#c4956a}',
    '.v9-dict-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:12px 14px;margin-bottom:8px;cursor:pointer;transition:all .2s}',
    '.v9-dict-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v9-dict-item.expanded{background:rgba(196,149,106,.1)}',
    '.v9-dict-item h4{color:#f5deb3;font-size:13px;margin:0;display:flex;align-items:center;gap:8px}',
    '.v9-dict-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v9-dict-item .dict-body{display:none;margin-top:8px;color:#e8d5c0;font-size:12px;line-height:1.7}',
    '.v9-dict-item.expanded .dict-body{display:block}',
    '.v9-dict-search{width:100%;padding:10px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(196,149,106,.3);border-radius:10px;color:#f5deb3;font-size:13px;font-family:inherit;margin-bottom:14px;outline:none}',
    '.v9-dict-search:focus{border-color:#c4956a}',
    '.v9-dict-search::placeholder{color:rgba(196,149,106,.5)}',
    '.v9-light-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v9-light-btns{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:12px}',
    '.v9-light-btn{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v9-light-btn:hover,.v9-light-btn.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v9-diff-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}',
    '.v9-diff-card{background:rgba(196,149,106,.08);border:2px solid rgba(196,149,106,.2);border-radius:12px;padding:18px;text-align:center;cursor:pointer;transition:all .3s}',
    '.v9-diff-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v9-diff-card.selected{border-color:#f5deb3;box-shadow:0 0 16px rgba(196,149,106,.3)}',
    '.v9-diff-card .diff-star{font-size:28px;margin-bottom:6px}',
    '.v9-diff-card h4{color:#f5deb3;font-size:14px;margin:0 0 4px}',
    '.v9-diff-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v9-compare-row{display:flex;gap:10px;margin-bottom:10px}',
    '.v9-compare-item{flex:1;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:12px;text-align:center}',
    '.v9-compare-item h4{color:#f5deb3;font-size:14px;margin:0 0 4px}',
    '.v9-compare-item .cmp-val{font-size:22px;font-weight:700;color:#f5deb3}',
    '.v9-compare-item .cmp-lbl{font-size:11px;color:#c4956a;margin-top:2px}',
    '@media(max-width:768px){.v9-grid{grid-template-columns:repeat(2,1fr)}.v9-diff-grid{grid-template-columns:1fr}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection ──
(function(){
  var ids = ['v9GardenPanel','v9BlueprintPanel','v9QuestPanel','v9CertPanel','v9DictPanel','v9LightPanel','v9DiffPanel','v9ComparePanel'];
  ids.forEach(function(id){
    var d = document.createElement('div');
    d.id = id;
    d.className = 'v9-panel';
    document.body.appendChild(d);
  });
})();

// ── 3. Web Audio SFX v9 (+8 types) ──
var v9SFX = {};
(function(){
  var ctx = null;
  function getCtx(){ if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); return ctx; }
  function play(type){
    if(window.muted) return;
    try{
      var c = getCtx(), t = c.currentTime;
      var o, g;
      switch(type){
        case 'garden_place':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(523,t);o.frequency.linearRampToValueAtTime(784,t+0.1);
          o.frequency.linearRampToValueAtTime(1047,t+0.2);
          g.gain.setValueAtTime(0.2,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.25);
          o.start(t);o.stop(t+0.25);break;
        case 'blueprint_select':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='triangle';o.frequency.setValueAtTime(440,t);o.frequency.linearRampToValueAtTime(660,t+0.15);
          g.gain.setValueAtTime(0.18,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t);o.stop(t+0.2);break;
        case 'quest_complete':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(392,t);
          o.frequency.setValueAtTime(523,t+0.1);o.frequency.setValueAtTime(659,t+0.2);
          o.frequency.setValueAtTime(784,t+0.3);
          g.gain.setValueAtTime(0.25,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.45);
          o.start(t);o.stop(t+0.45);break;
        case 'cert_upgrade':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(523,t);
          o.frequency.setValueAtTime(659,t+0.12);o.frequency.setValueAtTime(784,t+0.24);
          o.frequency.setValueAtTime(1047,t+0.36);o.frequency.setValueAtTime(1319,t+0.48);
          g.gain.setValueAtTime(0.3,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.6);
          o.start(t);o.stop(t+0.6);break;
        case 'dict_open':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(600,t);o.frequency.linearRampToValueAtTime(400,t+0.1);
          g.gain.setValueAtTime(0.12,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.12);
          o.start(t);o.stop(t+0.12);break;
        case 'light_change':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(350,t);o.frequency.linearRampToValueAtTime(550,t+0.15);
          g.gain.setValueAtTime(0.15,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t);o.stop(t+0.2);break;
        case 'diff_select':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='square';o.frequency.setValueAtTime(500,t);o.frequency.linearRampToValueAtTime(700,t+0.08);
          g.gain.setValueAtTime(0.08,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.1);
          o.start(t);o.stop(t+0.1);break;
        case 'compare_view':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='triangle';o.frequency.setValueAtTime(300,t);o.frequency.linearRampToValueAtTime(600,t+0.2);
          g.gain.setValueAtTime(0.15,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.25);
          o.start(t);o.stop(t+0.25);break;
      }
    }catch(e){}
  }
  v9SFX.play = play;
})();

// ── 4. Garden/Landscaping System (12 items) ──
var v9Garden = {
  items: [
    {id:'g1',name:'소나무',icon:'🌲',cat:'tree',desc:'한국 대표 수종, 절개와 장수의 상징',price:80},
    {id:'g2',name:'대나무',icon:'🎋',cat:'tree',desc:'사군자의 하나, 곧은 절개의 상징',price:70},
    {id:'g3',name:'매화나무',icon:'🌸',cat:'tree',desc:'이른 봄 첫 꽃, 선비의 기개',price:90},
    {id:'g4',name:'감나무',icon:'🍊',cat:'tree',desc:'가을 풍경의 상징, 풍요로움',price:60},
    {id:'g5',name:'연못',icon:'💧',cat:'water',desc:'풍수지리 필수, 음양 조화',price:150},
    {id:'g6',name:'석등',icon:'🪨',cat:'stone',desc:'밤길을 밝히는 돌 등불',price:100},
    {id:'g7',name:'장독대',icon:'🏺',cat:'utility',desc:'된장/간장 보관, 한국 부엌의 핵심',price:50},
    {id:'g8',name:'우물',icon:'⛲',cat:'water',desc:'마을의 생명줄, 식수 공급원',price:120},
    {id:'g9',name:'화단',icon:'🌺',cat:'garden',desc:'꽃밭으로 마당을 화사하게',price:40},
    {id:'g10',name:'돌담',icon:'🧱',cat:'stone',desc:'경계를 나누는 정겨운 돌담',price:90},
    {id:'g11',name:'디딤돌',icon:'🪨',cat:'stone',desc:'정원을 거니는 징검다리',price:30},
    {id:'g12',name:'정원등',icon:'🏮',cat:'utility',desc:'은은한 야간 정원 조명',price:70}
  ],
  placed: [],
  load: function(){ try{this.placed=JSON.parse(localStorage.getItem('hb_v9_garden')||'[]');}catch(e){this.placed=[];} },
  save: function(){ localStorage.setItem('hb_v9_garden',JSON.stringify(this.placed)); },
  toggle: function(id){
    this.load();
    var idx = this.placed.indexOf(id);
    if(idx===-1) this.placed.push(id); else this.placed.splice(idx,1);
    this.save();
    v9SFX.play('garden_place');
    v9Achieve.check();
    this.render();
  },
  render: function(){
    this.load();
    var self = this;
    var cats = [{k:'all',l:'전체'},{k:'tree',l:'🌳 나무'},{k:'water',l:'💧 수경'},{k:'stone',l:'🪨 석물'},{k:'garden',l:'🌺 화단'},{k:'utility',l:'🏺 생활'}];
    var activeTab = self._tab || 'all';
    var html = '<div class="v9-container"><h2>조경 &amp; 정원</h2><p>마당과 정원에 나무, 연못, 석물을 배치하세요 ('+self.placed.length+'/12)</p>';
    html += '<div class="v9-tabs">';
    cats.forEach(function(c){
      html += '<button class="v9-tab'+(activeTab===c.k?' active':'')+'" onclick="v9Garden._tab=\''+c.k+'\';v9Garden.render()">'+c.l+'</button>';
    });
    html += '</div><div class="v9-grid">';
    self.items.forEach(function(item){
      if(activeTab!=='all' && item.cat!==activeTab) return;
      var placed = self.placed.indexOf(item.id)!==-1;
      html += '<div class="v9-card'+(placed?' placed':'')+'" onclick="v9Garden.toggle(\''+item.id+'\')">';
      html += '<div class="v9-icon">'+item.icon+'</div>';
      html += '<h4>'+item.name+'</h4>';
      html += '<p>'+(placed?'✅ 배치됨':item.price+'낥')+'</p>';
      html += '<p style="font-size:10px;margin-top:4px;color:#999">'+item.desc+'</p></div>';
    });
    html += '</div><button class="v9-close" onclick="v9Close(\'v9GardenPanel\')">닫기</button></div>';
    document.getElementById('v9GardenPanel').innerHTML = html;
  },
  _tab: 'all'
};

// ── 5. Blueprint System (6 preset designs) ──
var v9Blueprint = {
  presets: [
    {id:'bp1',name:'소박한 시골집',icon:'🏡',mode:'choga',desc:'초가집 기본형. 2칸 구조에 봉당과 부엌',diff:'easy',materials:['황토','강돌','소나무','소나무','황금볏짚','황토','나무문']},
    {id:'bp2',name:'전통 한옥',icon:'🏯',mode:'hanok',desc:'3칸 정면 한옥. 대청마루와 온돌방 완비',diff:'medium',materials:['화강석','둥근주초','소나무','소나무','소나무','소나무','회기와','흙벽+창호지','소나무마루','구들장']},
    {id:'bp3',name:'양반 저택',icon:'🏛️',mode:'giwajip',desc:'격조 높은 팔작지붕 양반가. 사랑채+안채',diff:'hard',materials:['다듬돌','연꽃주초','소나무 원주','이익공','소나무','소나무','회기와','꽃살문','참나무마루']},
    {id:'bp4',name:'산속 서원',icon:'📚',mode:'seowon',desc:'자연과 어우러진 유교 서원. 강학+제향 공간',diff:'medium',materials:['화강석','막돌','소나무','소나무','소나무','회기와','판벽','소나무마루']},
    {id:'bp5',name:'경치 정자',icon:'⛩️',mode:'jeongja',desc:'연못가 사각정자. 기둥 4개 개방 구조',diff:'easy',materials:['자연석','둥근주초','소나무','소나무','소나무','회기와']},
    {id:'bp6',name:'모던 하우스',icon:'🏠',mode:'modern',desc:'미니멀 현대 주택. 심플한 평지붕 디자인',diff:'medium',materials:['콘크리트','철근콘크리트','빨간벽돌','슬레이트','이중유리','철제문','원목마루','모던스타일']}
  ],
  selected: null,
  load: function(){ try{this.selected=localStorage.getItem('hb_v9_blueprint');}catch(e){} },
  save: function(){ localStorage.setItem('hb_v9_blueprint',this.selected||''); },
  select: function(id){
    this.selected = id;
    this.save();
    v9SFX.play('blueprint_select');
    v9Achieve.check();
    this.render();
  },
  apply: function(id){
    var bp = this.presets.find(function(p){return p.id===id;});
    if(!bp) return;
    this.select(id);
    if(typeof window.startGame === 'function'){
      window.startGame(bp.mode);
    }
  },
  render: function(){
    this.load();
    var self = this;
    var diffColors = {easy:'#4a7c59',medium:'#c4956a',hard:'#b54a32'};
    var diffNames = {easy:'초급',medium:'중급',hard:'고급'};
    var html = '<div class="v9-container"><h2>건축 블루프린트</h2><p>미리 설계된 도면으로 빠르게 건축을 시작하세요</p>';
    html += '<div class="v9-grid">';
    self.presets.forEach(function(bp){
      var sel = self.selected === bp.id;
      html += '<div class="v9-card'+(sel?' selected':'')+'" onclick="v9Blueprint.select(\''+bp.id+'\')">';
      html += '<div class="v9-icon">'+bp.icon+'</div>';
      html += '<h4>'+bp.name+'</h4>';
      html += '<p style="color:'+diffColors[bp.diff]+'">'+diffNames[bp.diff]+'</p>';
      html += '<p>'+bp.desc+'</p>';
      html += '<button style="margin-top:8px;padding:4px 12px;border:none;border-radius:12px;background:#c4956a;color:#2d1b0e;font-size:11px;font-weight:600;cursor:pointer" onclick="event.stopPropagation();v9Blueprint.apply(\''+bp.id+'\')">이 설계로 시작</button>';
      html += '</div>';
    });
    html += '</div><button class="v9-close" onclick="v9Close(\'v9BlueprintPanel\')">닫기</button></div>';
    document.getElementById('v9BlueprintPanel').innerHTML = html;
  }
};

// ── 6. Quest Chain System (8 stages) ──
var v9Quest = {
  chain: [
    {id:'q1',name:'첫 삽',desc:'아무 모드에서 건축 1회 완성',xp:50,check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return d.completed&&Object.keys(d.completed).length>=1;}catch(e){return false;}}},
    {id:'q2',name:'견습 건축가',desc:'2가지 모드 건축 완성',xp:80,check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return d.completed&&Object.keys(d.completed).length>=2;}catch(e){return false;}}},
    {id:'q3',name:'재료 탐험가',desc:'인테리어 벽지+바닥+조명 모두 선택',xp:60,check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v8_interior')||'{}');return d.wall&&d.floor&&d.light;}catch(e){return false;}}},
    {id:'q4',name:'정원사',desc:'조경 아이템 5개 이상 배치',xp:70,check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_garden')||'[]').length>=5;}catch(e){return false;}}},
    {id:'q5',name:'퀴즈 마스터',desc:'퀴즈 정답 30개 이상',xp:100,check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var t=0;Object.values(d).forEach(function(v){if(v&&v.quizCorrect)t+=v.quizCorrect;});return t>=30;}catch(e){return false;}}},
    {id:'q6',name:'건축 학자',desc:'용어사전 20항목 이상 열람',xp:90,check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_dict_viewed')||'[]').length>=20;}catch(e){return false;}}},
    {id:'q7',name:'마스터 빌더',desc:'4가지 이상 모드 건축 완성',xp:120,check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');return d.completed&&Object.keys(d.completed).length>=4;}catch(e){return false;}}},
    {id:'q8',name:'건축왕',desc:'6가지 모드 전체 완성 + 업적 50개',xp:200,check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var modes=d.completed?Object.keys(d.completed).length:0;var ach=0;try{ach+=JSON.parse(localStorage.getItem('hb_v7_achievements')||'[]').length;}catch(e){}try{ach+=Object.keys(JSON.parse(localStorage.getItem('hb_achievements')||'{}')).length;}catch(e){}try{ach+=JSON.parse(localStorage.getItem('hb_v8_achievements')||'[]').length;}catch(e){}try{ach+=JSON.parse(localStorage.getItem('hb_v9_achievements')||'[]').length;}catch(e){}return modes>=6&&ach>=50;}catch(e){return false;}}}
  ],
  getProgress: function(){
    var completed = [];
    this.chain.forEach(function(q){
      if(q.check()) completed.push(q.id);
    });
    return completed;
  },
  render: function(){
    var progress = this.getProgress();
    var totalXP = 0;
    var html = '<div class="v9-container"><h2>건축 퀘스트</h2><p>단계별 목표를 달성하며 건축 마스터가 되세요</p>';
    this.chain.forEach(function(q,i){
      var done = progress.indexOf(q.id)!==-1;
      var prevDone = i===0 || progress.indexOf(this.chain[i-1].id)!==-1;
      var locked = !prevDone && !done;
      if(done) totalXP += q.xp;
      html += '<div class="v9-quest-item'+(done?' done':'')+(locked?' locked':'')+'">';
      html += '<div class="qi-num">'+(done?'✓':(i+1))+'</div>';
      html += '<div class="qi-info"><h4>'+(locked?'???':q.name)+'</h4>';
      html += '<p>'+(locked?'이전 퀘스트를 완료하세요':q.desc)+'</p></div>';
      html += '<div class="qi-reward">'+(done?'✅ 완료':'+'+q.xp+' XP')+'</div></div>';
    }.bind(this));
    html += '<div style="text-align:center;margin-top:16px;padding:14px;background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px">';
    html += '<div style="font-size:24px;font-weight:900;color:#f5deb3">'+totalXP+' XP</div>';
    html += '<div style="font-size:12px;color:#c4956a">총 획득 경험치</div></div>';
    html += '<button class="v9-close" onclick="v9Close(\'v9QuestPanel\')">닫기</button></div>';
    document.getElementById('v9QuestPanel').innerHTML = html;
  }
};

// ── 7. Architecture Certificate System (5 levels) ──
var v9Cert = {
  levels: [
    {id:1,name:'견습생',icon:'🔨',desc:'건축의 첫걸음을 뗐습니다',req:1},
    {id:2,name:'기능공',icon:'🪚',desc:'기본 건축 기술을 습득했습니다',req:3},
    {id:3,name:'장인',icon:'⚒️',desc:'전통 건축의 핵심을 이해합니다',req:5},
    {id:4,name:'대목장',icon:'🏗️',desc:'한국 건축의 대가가 되었습니다',req:8},
    {id:5,name:'국보급 명장',icon:'👑',desc:'건축의 모든 분야를 통달했습니다',req:12}
  ],
  getScore: function(){
    var score = 0;
    try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');if(d.completed) score+=Object.keys(d.completed).length;}catch(e){}
    try{score+=Math.floor(JSON.parse(localStorage.getItem('hb_v9_garden')||'[]').length/3);}catch(e){}
    try{var d2=JSON.parse(localStorage.getItem('hb_v8_interior')||'{}');if(d2.wall&&d2.floor&&d2.light)score+=1;}catch(e){}
    try{var qi=JSON.parse(localStorage.getItem('hb_progress')||'{}');var t=0;Object.values(qi).forEach(function(v){if(v&&v.quizCorrect)t+=v.quizCorrect;});score+=Math.floor(t/10);}catch(e){}
    try{score+=Math.floor(JSON.parse(localStorage.getItem('hb_v9_dict_viewed')||'[]').length/10);}catch(e){}
    return score;
  },
  getCurrentLevel: function(){
    var score = this.getScore();
    var lvl = this.levels[0];
    for(var i=this.levels.length-1;i>=0;i--){
      if(score >= this.levels[i].req){ lvl = this.levels[i]; break; }
    }
    return lvl;
  },
  render: function(){
    var score = this.getScore();
    var currentLvl = this.getCurrentLevel();
    var nextLvl = this.levels.find(function(l){return l.req > score;});
    var pct = nextLvl ? Math.min(100, Math.round(score/nextLvl.req*100)) : 100;
    var html = '<div class="v9-container"><h2>건축 자격증</h2><p>건축 활동으로 등급을 올리세요</p>';
    html += '<div class="v9-cert">';
    html += '<div class="cert-badge">'+currentLvl.icon+'</div>';
    html += '<h3>'+currentLvl.name+'</h3>';
    html += '<div class="cert-desc">'+currentLvl.desc+'</div>';
    html += '<div class="cert-bar"><div class="cert-fill" style="width:'+pct+'%"></div></div>';
    html += '<div class="cert-pct">'+score+'점'+(nextLvl?' / 다음 등급 '+nextLvl.req+'점':' (최고 등급!)')+'</div></div>';
    html += '<div style="margin-top:20px">';
    this.levels.forEach(function(l){
      var achieved = score >= l.req;
      html += '<div style="display:flex;align-items:center;gap:10px;padding:10px;margin-bottom:6px;background:rgba(196,149,106,'+(achieved?'.12':'.04')+');border:1px solid '+(achieved?'#4a7c59':'rgba(196,149,106,.15)')+';border-radius:10px">';
      html += '<span style="font-size:24px">'+l.icon+'</span>';
      html += '<div style="flex:1"><div style="color:'+(achieved?'#f5deb3':'#888')+';font-size:13px;font-weight:600">'+l.name+'</div>';
      html += '<div style="color:#c4956a;font-size:11px">필요 점수: '+l.req+'</div></div>';
      html += '<span style="font-size:16px">'+(achieved?'✅':'🔒')+'</span></div>';
    });
    html += '</div><button class="v9-close" onclick="v9Close(\'v9CertPanel\')">닫기</button></div>';
    document.getElementById('v9CertPanel').innerHTML = html;
  }
};

// ── 8. Architecture Dictionary (40 terms) ──
var v9Dict = {
  terms: [
    {word:'기단',cat:'구조',reading:'기단 (基壇)',def:'건물을 올려놓는 돌이나 흙으로 쌓은 받침대. 습기 방지 및 건물 위엄 강조.'},
    {word:'주초석',cat:'구조',reading:'주초석 (柱礎石)',def:'기둥을 받치는 돌. 기둥이 땅의 습기에 썩지 않도록 보호.'},
    {word:'기둥',cat:'구조',reading:'기둥 (柱)',def:'건물의 수직 부재. 지붕 하중을 기단으로 전달하는 핵심 구조.'},
    {word:'대들보',cat:'구조',reading:'대들보 (大梁)',def:'기둥 위에 가로로 놓이는 가장 큰 보. 상량식 때 글을 새김.'},
    {word:'도리',cat:'구조',reading:'도리 (桁)',def:'보 위에 건물 길이 방향으로 놓이는 부재. 서까래를 받침.'},
    {word:'서까래',cat:'구조',reading:'서까래 (椽)',def:'도리 위에 비스듬히 거는 목재. 지붕 경사면을 구성.'},
    {word:'추녀',cat:'지붕',reading:'추녀 (隅椽)',def:'지붕 모서리에 대각선으로 뻗는 부재. 처마의 곡선미 담당.'},
    {word:'팔작지붕',cat:'지붕',reading:'팔작지붕',def:'네 면 모두 경사가 있으면서 양측에 삼각형 합각이 있는 최고 격식 지붕.'},
    {word:'맞배지붕',cat:'지붕',reading:'맞배지붕',def:'앞뒤 두 면만 경사가 있는 가장 간단한 지붕 형태.'},
    {word:'우진각지붕',cat:'지붕',reading:'우진각지붕',def:'네 면 모두 경사가 있는 지붕. 합각이 없어 팔작보다 소박.'},
    {word:'처마',cat:'지붕',reading:'처마 (簷)',def:'지붕이 벽체 밖으로 내민 부분. 비바람과 햇빛을 차단.'},
    {word:'공포',cat:'장식',reading:'공포 (栱包)',def:'기둥 위에서 지붕 하중을 분산하는 복합 구조. 건물 격식 표현.'},
    {word:'익공',cat:'장식',reading:'익공 (翼工)',def:'공포의 한 형태. 새 날개처럼 기둥 좌우로 뻗는 장식적 구조재.'},
    {word:'단청',cat:'장식',reading:'단청 (丹靑)',def:'건물에 칠하는 다색 문양. 방부 효과 및 건물 위엄 장식.'},
    {word:'온돌',cat:'난방',reading:'온돌 (溫突)',def:'한국 고유 바닥 난방 시스템. 아궁이→고래→굴뚝으로 열기 전달.'},
    {word:'고래',cat:'난방',reading:'고래',def:'온돌 바닥 아래 연기가 지나가는 통로. 방바닥을 고르게 데움.'},
    {word:'아궁이',cat:'난방',reading:'아궁이',def:'불을 때는 입구. 부엌 아궁이로 취사와 난방을 동시에 해결.'},
    {word:'창호',cat:'마감',reading:'창호 (窓戶)',def:'문과 창문의 총칭. 나무살에 한지를 붙여 통풍과 채광 조절.'},
    {word:'한지',cat:'마감',reading:'한지 (韓紙)',def:'닥나무 껍질로 만든 전통 종이. 빛을 은은하게 투과.'},
    {word:'마루',cat:'공간',reading:'마루 (板)',def:'나무로 만든 바닥. 대청마루는 여름에 시원한 생활 공간.'},
    {word:'대청',cat:'공간',reading:'대청 (大廳)',def:'한옥의 중심 공간. 마루바닥으로 여름철 주요 생활공간.'},
    {word:'사랑채',cat:'공간',reading:'사랑채',def:'남성 주인의 생활공간. 손님 접대, 학문, 사교 공간.'},
    {word:'안채',cat:'공간',reading:'안채',def:'여성 가족의 생활공간. 부엌, 안방, 대청마루 포함.'},
    {word:'행랑채',cat:'공간',reading:'행랑채',def:'대문간에 있는 하인들의 거처 겸 창고 공간.'},
    {word:'풍수',cat:'배치',reading:'풍수 (風水)',def:'지형의 기운을 읽어 건물 배치를 결정하는 전통 사상.'},
    {word:'배산임수',cat:'배치',reading:'배산임수 (背山臨水)',def:'뒤에 산, 앞에 물. 한국 전통 입지 선정의 핵심 원칙.'},
    {word:'전저후고',cat:'배치',reading:'전저후고 (前低後高)',def:'앞은 낮고 뒤는 높은 지형. 배수와 햇빛에 유리.'},
    {word:'기와',cat:'재료',reading:'기와 (瓦)',def:'흙을 구워 만든 지붕 마감재. 수키와와 암키와로 구성.'},
    {word:'막새',cat:'재료',reading:'막새',def:'기와 끝에 붙는 둥근 장식. 연꽃, 귀면 등 문양 새김.'},
    {word:'구들장',cat:'재료',reading:'구들장',def:'온돌 위에 까는 넓은 돌. 열을 축적하여 오래 따뜻하게 유지.'},
    {word:'배흘림',cat:'기법',reading:'배흘림',def:'기둥 가운데가 불룩한 형태. 착시 보정 및 하중 분산 기법.'},
    {word:'귀솟음',cat:'기법',reading:'귀솟음',def:'지붕 모서리가 살짝 올라간 곡선. 한옥 지붕의 아름다움 핵심.'},
    {word:'안허리곡',cat:'기법',reading:'안허리곡',def:'처마 밑면의 완만한 곡선. 부드러운 지붕선을 만드는 기법.'},
    {word:'민흘림',cat:'기법',reading:'민흘림',def:'기둥이 위로 갈수록 가늘어지는 형태. 안정감 있는 시각효과.'},
    {word:'결구',cat:'기법',reading:'결구 (結構)',def:'못을 쓰지 않고 나무를 끼워 맞추는 전통 건축 기법.'},
    {word:'상량식',cat:'의례',reading:'상량식 (上梁式)',def:'대들보를 올릴 때 치르는 의식. 대들보에 날짜와 축문을 새김.'},
    {word:'이엉잇기',cat:'의례',reading:'이엉잇기',def:'초가지붕 볏짚을 교체하는 공동 작업. 마을 주민이 함께 참여.'},
    {word:'낙성식',cat:'의례',reading:'낙성식 (落成式)',def:'건물 완공을 축하하는 의식. 집들이의 전통적 형태.'},
    {word:'거중기',cat:'도구',reading:'거중기 (擧重機)',def:'정약용이 발명한 기중기. 수원화성 축조에 사용된 건축 기계.'},
    {word:'먹줄',cat:'도구',reading:'먹줄',def:'나무에 직선을 긋는 전통 도구. 현대의 먹줄과 같은 원리.'}
  ],
  viewed: [],
  _filter: 'all',
  _search: '',
  load: function(){ try{this.viewed=JSON.parse(localStorage.getItem('hb_v9_dict_viewed')||'[]');}catch(e){this.viewed=[];} },
  save: function(){ localStorage.setItem('hb_v9_dict_viewed',JSON.stringify(this.viewed)); },
  view: function(word){
    this.load();
    if(this.viewed.indexOf(word)===-1){ this.viewed.push(word); this.save(); }
    v9SFX.play('dict_open');
    v9Achieve.check();
  },
  render: function(){
    this.load();
    var self = this;
    var cats = ['all','구조','지붕','장식','난방','마감','공간','배치','재료','기법','의례','도구'];
    var html = '<div class="v9-container"><h2>건축 용어 사전</h2><p>40개 전통 건축 용어를 배워보세요 ('+self.viewed.length+'/40 열람)</p>';
    html += '<input type="text" class="v9-dict-search" placeholder="용어 검색..." value="'+self._search+'" oninput="v9Dict._search=this.value;v9Dict.render()">';
    html += '<div class="v9-tabs">';
    cats.forEach(function(c){
      html += '<button class="v9-tab'+(self._filter===c?' active':'')+'" onclick="v9Dict._filter=\''+c+'\';v9Dict.render()">'+(c==='all'?'전체':c)+'</button>';
    });
    html += '</div>';
    var filtered = self.terms.filter(function(t){
      if(self._filter!=='all' && t.cat!==self._filter) return false;
      if(self._search && t.word.indexOf(self._search)===-1 && t.def.indexOf(self._search)===-1) return false;
      return true;
    });
    filtered.forEach(function(t){
      var seen = self.viewed.indexOf(t.word)!==-1;
      html += '<div class="v9-dict-item" onclick="this.classList.toggle(\'expanded\');v9Dict.view(\''+t.word+'\')">';
      html += '<h4>'+(seen?'✅':'📖')+' '+t.word+' <span class="tag">'+t.cat+'</span></h4>';
      html += '<div class="dict-body"><strong>'+t.reading+'</strong><br>'+t.def+'</div></div>';
    });
    if(filtered.length===0) html += '<p style="text-align:center;color:#888;padding:20px">검색 결과가 없습니다</p>';
    html += '<button class="v9-close" onclick="v9Close(\'v9DictPanel\')">닫기</button></div>';
    document.getElementById('v9DictPanel').innerHTML = html;
  }
};

// ── 9. Time-of-Day Lighting Preview (Canvas) ──
var v9Light = {
  times: [
    {id:'dawn',name:'새벽',hour:5,sky:'#2a1a3d',sun:'#ff8844',ambient:0.3},
    {id:'morning',name:'아침',hour:8,sky:'#87CEEB',sun:'#ffdd44',ambient:0.7},
    {id:'noon',name:'정오',hour:12,sky:'#4488cc',sun:'#ffffff',ambient:1.0},
    {id:'afternoon',name:'오후',hour:15,sky:'#6699cc',sun:'#ffcc33',ambient:0.8},
    {id:'sunset',name:'석양',hour:18,sky:'#ff6633',sun:'#ff4400',ambient:0.5},
    {id:'night',name:'밤',hour:21,sky:'#0a0a2e',sun:'#aaaacc',ambient:0.15}
  ],
  _active: 'noon',
  render: function(){
    var self = this;
    var html = '<div class="v9-container"><h2>시간대별 조명</h2><p>건축물이 시간에 따라 어떻게 보이는지 확인하세요</p>';
    html += '<div class="v9-light-btns">';
    self.times.forEach(function(t){
      html += '<button class="v9-light-btn'+(self._active===t.id?' active':'')+'" onclick="v9Light._active=\''+t.id+'\';v9Light.render();v9SFX.play(\'light_change\')">'+t.name+'</button>';
    });
    html += '</div>';
    html += '<canvas id="v9LightCanvas" class="v9-light-canvas" width="560" height="320"></canvas>';
    var current = self.times.find(function(t){return t.id===self._active;});
    html += '<div style="text-align:center;margin-top:12px">';
    html += '<div style="color:#f5deb3;font-size:16px;font-weight:700">'+current.name+' ('+current.hour+':00)</div>';
    html += '<div style="color:#c4956a;font-size:12px;margin-top:4px">밝기: '+Math.round(current.ambient*100)+'%</div>';
    html += '</div>';
    html += '<button class="v9-close" onclick="v9Close(\'v9LightPanel\')">닫기</button></div>';
    document.getElementById('v9LightPanel').innerHTML = html;
    setTimeout(function(){ self.draw(); }, 50);
  },
  draw: function(){
    var canvas = document.getElementById('v9LightCanvas');
    if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var current = this.times.find(function(t){return t.id===this._active;}.bind(this));
    if(!current) return;
    var grd = ctx.createLinearGradient(0,0,0,320);
    grd.addColorStop(0,current.sky);
    grd.addColorStop(1,this._active==='night'?'#050520':'#8b6914');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,560,320);
    if(this._active!=='night'){
      var sunY = this._active==='noon'?40:this._active==='dawn'||this._active==='sunset'?180:80;
      var sunX = this._active==='dawn'?80:this._active==='sunset'?480:280;
      ctx.beginPath();
      ctx.arc(sunX,sunY,30,0,Math.PI*2);
      ctx.fillStyle = current.sun;
      ctx.fill();
      ctx.shadowBlur = 40;
      ctx.shadowColor = current.sun;
      ctx.fill();
      ctx.shadowBlur = 0;
    } else {
      ctx.fillStyle = '#ffffff';
      for(var i=0;i<30;i++){
        ctx.beginPath();
        ctx.arc(Math.random()*560,Math.random()*160,1,0,Math.PI*2);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(420,50,20,0,Math.PI*2);
      ctx.fillStyle = '#ddddaa';
      ctx.fill();
    }
    ctx.fillStyle = '#3a6a3a';
    ctx.fillRect(0,220,560,100);
    var amb = current.ambient;
    var wallColor = 'rgb('+Math.round(245*amb)+','+Math.round(222*amb)+','+Math.round(179*amb)+')';
    var roofColor = 'rgb('+Math.round(90*amb)+','+Math.round(90*amb)+','+Math.round(90*amb)+')';
    ctx.fillStyle = wallColor;
    ctx.fillRect(180,160,200,80);
    ctx.fillStyle = roofColor;
    ctx.beginPath();
    ctx.moveTo(160,160);ctx.lineTo(280,100);ctx.lineTo(400,160);
    ctx.closePath();ctx.fill();
    ctx.fillStyle = 'rgba(74,44,23,'+amb+')';
    ctx.fillRect(260,200,40,40);
    ctx.fillStyle = 'rgba(135,206,235,'+(amb*0.6)+')';
    ctx.fillRect(200,175,30,25);
    ctx.fillRect(330,175,30,25);
    if(this._active==='night'){
      ctx.fillStyle = 'rgba(255,200,100,0.8)';
      ctx.fillRect(202,177,26,21);
      ctx.fillRect(332,177,26,21);
      ctx.beginPath();
      ctx.arc(280,220,40,0,Math.PI*2);
      ctx.fillStyle = 'rgba(255,200,100,0.1)';
      ctx.fill();
    }
    if(this._active==='dawn'||this._active==='sunset'){
      var shadowLen = 80;
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.beginPath();
      ctx.moveTo(380,240);ctx.lineTo(380+shadowLen,240);
      ctx.lineTo(380+shadowLen,245);ctx.lineTo(180,245);ctx.lineTo(180,240);
      ctx.closePath();ctx.fill();
    }
    ctx.fillStyle = 'rgba(196,149,106,0.5)';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(current.name+' '+current.hour+':00 | 밝기 '+Math.round(amb*100)+'%', 280, 310);
  }
};

// ── 10. Difficulty System (3 levels) ──
var v9Diff = {
  levels: [
    {id:'easy',name:'초급',icon:'⭐',desc:'힌트 항상 표시\n재료 자동 선택\n시간 제한 없음',mult:1.0},
    {id:'normal',name:'중급',icon:'⭐⭐',desc:'힌트 요청 시 표시\n재료 직접 선택\n시간 제한 없음',mult:1.5},
    {id:'hard',name:'고급',icon:'⭐⭐⭐',desc:'힌트 없음\n재료 직접 선택\n보너스 XP 2배',mult:2.0}
  ],
  current: 'normal',
  load: function(){ try{this.current=localStorage.getItem('hb_v9_difficulty')||'normal';}catch(e){} },
  save: function(){ localStorage.setItem('hb_v9_difficulty',this.current); },
  select: function(id){
    this.current = id;
    this.save();
    v9SFX.play('diff_select');
    v9Achieve.check();
    this.render();
  },
  render: function(){
    this.load();
    var self = this;
    var html = '<div class="v9-container"><h2>난이도 설정</h2><p>실력에 맞는 난이도를 선택하세요</p>';
    html += '<div class="v9-diff-grid">';
    self.levels.forEach(function(l){
      var sel = self.current === l.id;
      html += '<div class="v9-diff-card'+(sel?' selected':'')+'" onclick="v9Diff.select(\''+l.id+'\')">';
      html += '<div class="diff-star">'+l.icon+'</div>';
      html += '<h4>'+l.name+'</h4>';
      html += '<p>'+l.desc.replace(/\n/g,'<br>')+'</p>';
      html += '<div style="margin-top:8px;font-size:11px;color:'+(sel?'#f5deb3':'#888')+'">XP x'+l.mult+'</div></div>';
    });
    html += '</div>';
    html += '<div style="text-align:center;padding:14px;background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px">';
    html += '<div style="color:#c4956a;font-size:12px">현재 난이도</div>';
    var cur = self.levels.find(function(l){return l.id===self.current;});
    html += '<div style="color:#f5deb3;font-size:18px;font-weight:700;margin-top:4px">'+cur.icon+' '+cur.name+'</div></div>';
    html += '<button class="v9-close" onclick="v9Close(\'v9DiffPanel\')">닫기</button></div>';
    document.getElementById('v9DiffPanel').innerHTML = html;
  }
};

// ── 11. Comparison Gallery (Canvas-based) ──
var v9Compare = {
  render: function(){
    var html = '<div class="v9-container"><h2>건축물 비교 갤러리</h2><p>6가지 건축 양식의 핵심 차이를 비교하세요</p>';
    html += '<canvas id="v9CompareCanvas" class="v9-light-canvas" width="560" height="400"></canvas>';
    var modes = [
      {name:'한옥',roof:'팔작/맞배',wall:'흙벽+한지',heat:'온돌',floor:'마루+구들',era:'조선시대'},
      {name:'기와집',roof:'팔작지붕',wall:'흙벽+꽃살문',heat:'온돌',floor:'대청+온돌',era:'조선 양반'},
      {name:'초가집',roof:'볏짚',wall:'황토벽',heat:'온돌',floor:'흙바닥',era:'서민 생활'},
      {name:'서원',roof:'맞배지붕',wall:'판벽+회벽',heat:'온돌',floor:'마루+구들',era:'조선 교육'},
      {name:'정자',roof:'사모/육모',wall:'없음(개방)',heat:'없음',floor:'마루',era:'풍류 공간'},
      {name:'현대주택',roof:'슬레이트/평',wall:'벽돌/시멘트',heat:'온수파이프',floor:'마루/타일',era:'현대'}
    ];
    html += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;margin:16px 0">';
    html += '<tr><th style="text-align:left;color:#c4956a;font-size:12px;padding:8px;border-bottom:2px solid rgba(196,149,106,.3)">건축</th>';
    html += '<th style="color:#c4956a;font-size:12px;padding:8px;border-bottom:2px solid rgba(196,149,106,.3)">지붕</th>';
    html += '<th style="color:#c4956a;font-size:12px;padding:8px;border-bottom:2px solid rgba(196,149,106,.3)">벽체</th>';
    html += '<th style="color:#c4956a;font-size:12px;padding:8px;border-bottom:2px solid rgba(196,149,106,.3)">난방</th>';
    html += '<th style="color:#c4956a;font-size:12px;padding:8px;border-bottom:2px solid rgba(196,149,106,.3)">시대</th></tr>';
    modes.forEach(function(m){
      html += '<tr><td style="color:#f5deb3;font-weight:600;font-size:12px;padding:8px;border-bottom:1px solid rgba(196,149,106,.1)">'+m.name+'</td>';
      html += '<td style="color:#e8d5c0;font-size:11px;padding:8px;border-bottom:1px solid rgba(196,149,106,.1)">'+m.roof+'</td>';
      html += '<td style="color:#e8d5c0;font-size:11px;padding:8px;border-bottom:1px solid rgba(196,149,106,.1)">'+m.wall+'</td>';
      html += '<td style="color:#e8d5c0;font-size:11px;padding:8px;border-bottom:1px solid rgba(196,149,106,.1)">'+m.heat+'</td>';
      html += '<td style="color:#e8d5c0;font-size:11px;padding:8px;border-bottom:1px solid rgba(196,149,106,.1)">'+m.era+'</td></tr>';
    });
    html += '</table></div>';
    html += '<button class="v9-close" onclick="v9Close(\'v9ComparePanel\')">닫기</button></div>';
    document.getElementById('v9ComparePanel').innerHTML = html;
    setTimeout(function(){ v9Compare.draw(); }, 50);
    v9SFX.play('compare_view');
  },
  draw: function(){
    var canvas = document.getElementById('v9CompareCanvas');
    if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var grd = ctx.createLinearGradient(0,0,0,400);
    grd.addColorStop(0,'#4488cc');
    grd.addColorStop(1,'#8b6914');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,560,400);
    ctx.fillStyle = '#3a6a3a';
    ctx.fillRect(0,280,560,120);
    var houses = [
      {x:30,w:70,h:80,roof:'gable',color:'#f5deb3',rcolor:'#555',label:'한옥'},
      {x:120,w:70,h:85,roof:'hip',color:'#e8d5c0',rcolor:'#4a4a4a',label:'기와집'},
      {x:210,w:60,h:60,roof:'thatch',color:'#c0976a',rcolor:'#d4a54a',label:'초가집'},
      {x:300,w:70,h:70,roof:'gable',color:'#d0ccc4',rcolor:'#555',label:'서원'},
      {x:390,w:50,h:50,roof:'pyr',color:'#deb887',rcolor:'#555',label:'정자'},
      {x:460,w:70,h:90,roof:'flat',color:'#ccc',rcolor:'#666',label:'현대'}
    ];
    houses.forEach(function(h){
      var by = 280 - h.h;
      ctx.fillStyle = h.color;
      ctx.fillRect(h.x,by,h.w,h.h);
      ctx.fillStyle = h.rcolor;
      if(h.roof==='gable'){
        ctx.beginPath();ctx.moveTo(h.x-10,by);ctx.lineTo(h.x+h.w/2,by-35);ctx.lineTo(h.x+h.w+10,by);ctx.closePath();ctx.fill();
      } else if(h.roof==='hip'){
        ctx.beginPath();ctx.moveTo(h.x-10,by);ctx.lineTo(h.x+10,by-40);ctx.lineTo(h.x+h.w-10,by-40);ctx.lineTo(h.x+h.w+10,by);ctx.closePath();ctx.fill();
      } else if(h.roof==='thatch'){
        ctx.beginPath();ctx.moveTo(h.x-8,by);ctx.lineTo(h.x+h.w/2,by-30);ctx.lineTo(h.x+h.w+8,by);ctx.closePath();ctx.fill();
      } else if(h.roof==='pyr'){
        ctx.beginPath();ctx.moveTo(h.x-5,by);ctx.lineTo(h.x+h.w/2,by-35);ctx.lineTo(h.x+h.w+5,by);ctx.closePath();ctx.fill();
      } else if(h.roof==='flat'){
        ctx.fillRect(h.x-5,by-8,h.w+10,8);
      }
      ctx.fillStyle = '#f5deb3';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(h.label, h.x+h.w/2, 300);
    });
    ctx.fillStyle = '#f5deb3';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('한국 건축 양식 비교', 280, 30);
    ctx.fillStyle = 'rgba(196,149,106,0.5)';
    ctx.font = '11px sans-serif';
    ctx.fillText('Korean Architecture Comparison | house-builder v9.0', 280, 390);
  }
};

// ── 12. Quiz v9 (+15 questions, total 60→75) ──
var v9Quiz = {
  questions: [
    {q:'한옥에서 &quot;결구&quot; 기법이란?',a:['못 없이 나무를 끼워 맞추는 기법','못으로 고정하는 기법','접착제로 붙이는 기법','철물로 보강하는 기법'],c:0,tip:'결구는 나무의 홈과 촉을 맞물려 못 없이 조립하는 전통 목공 기법입니다'},
    {q:'한옥 기둥의 &quot;배흘림&quot;이란?',a:['기둥 가운데가 불룩한 형태','기둥이 기울어진 형태','기둥이 꼬인 형태','기둥에 색을 칠한 것'],c:0,tip:'배흘림은 기둥 중간이 약간 볼록하여 착시를 보정하고 하중을 분산합니다'},
    {q:'&quot;배산임수&quot;의 뜻은?',a:['뒤에 산, 앞에 물','뒤에 물, 앞에 산','산 위에 물이 있는 것','물 아래 산이 있는 것'],c:0,tip:'배산임수는 뒤로 산을 등지고 앞으로 물을 바라보는 이상적 입지 조건입니다'},
    {q:'초가집의 &quot;이엉잇기&quot;란?',a:['볏짚 지붕을 교체하는 공동 작업','벽을 쌓는 작업','우물을 파는 작업','울타리를 치는 작업'],c:0,tip:'이엉잇기는 매년 가을 마을 주민들이 함께 초가지붕을 갈아주는 전통입니다'},
    {q:'조선시대 사랑채의 주요 용도는?',a:['남성 주인의 생활 및 손님 접대','부엌','하인 거처','창고'],c:0,tip:'사랑채는 집의 바깥쪽에 위치하며 남성의 학문, 사교, 손님 접대 공간입니다'},
    {q:'단청의 역할은?',a:['장식 + 방부 효과','구조 보강','난방 효과','방수 처리'],c:0,tip:'단청은 아름다운 장식인 동시에 목재의 부식과 해충을 방지합니다'},
    {q:'온돌에서 열기가 이동하는 통로를 뭐라 하나요?',a:['고래','도리','서까래','처마'],c:0,tip:'고래는 방바닥 아래 있는 연기 통로로 방 전체를 고르게 데워줍니다'},
    {q:'서원에서 제향 공간과 강학 공간 중 위쪽에 있는 것은?',a:['제향 공간 (사당)','강학 공간 (강당)','기숙사','도서관'],c:0,tip:'서원은 전학후묘 배치로, 앞에 강학 공간, 뒤에 높은 곳에 사당이 위치합니다'},
    {q:'정자(亭子)의 건축적 특징은?',a:['벽이 없는 개방형 구조','지하 구조','방이 많은 구조','2층 이상 구조'],c:0,tip:'정자는 기둥만으로 지붕을 받치고 벽이 없어 사방의 경치를 감상할 수 있습니다'},
    {q:'한옥에서 &quot;칸&quot;의 기준은?',a:['기둥과 기둥 사이의 거리','방의 넓이','창문의 수','지붕의 높이'],c:0,tip:'칸은 기둥 사이의 공간 단위로, 3칸 5칸 등으로 집의 규모를 나타냅니다'},
    {q:'수원화성 축조에 사용된 정약용의 발명품은?',a:['거중기','나침반','비차','측우기'],c:0,tip:'정약용은 무거운 석재를 들어올리는 거중기를 발명하여 축조 효율을 높였습니다'},
    {q:'한옥의 &quot;구들장&quot;은 어떤 역할을 하나요?',a:['열을 축적하여 바닥을 따뜻하게 유지','지붕을 받침','벽을 보호','기둥을 고정'],c:0,tip:'구들장은 넓적한 돌로 열을 오래 저장하여 방바닥이 오래도록 따뜻합니다'},
    {q:'막새란 기와의 어느 부분인가요?',a:['기와 끝의 둥근 장식','기와 본체','기와 겹침부','기와 이음부'],c:0,tip:'막새는 기와 열의 끝에 달리는 둥근 장식판으로 연꽃이나 귀면 문양을 새깁니다'},
    {q:'한옥에서 &quot;민흘림&quot;이란?',a:['기둥이 위로 갈수록 가늘어지는 형태','기둥에 칠을 하는 것','기둥을 교체하는 것','기둥을 옮기는 것'],c:0,tip:'민흘림은 기둥이 아래에서 위로 갈수록 점점 가늘어지는 형태입니다'},
    {q:'한옥 대청마루가 시원한 이유는?',a:['바닥 아래로 바람이 지나가기 때문','에어컨이 있기 때문','지하수를 이용하기 때문','얼음을 넣기 때문'],c:0,tip:'대청마루는 바닥이 땅에서 띄워져 있어 아래로 바람이 통해 자연 냉방 됩니다'}
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

// ── 13. Achievement System v9 (+12 achievements, 74→86) ──
var v9Achieve = {
  defs: [
    {id:'a9_garden3',name:'정원사 견습',desc:'조경 아이템 3개 배치',check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_garden')||'[]').length>=3;}catch(e){return false;}}},
    {id:'a9_garden_all',name:'조경 마스터',desc:'조경 아이템 12개 전부 배치',check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_garden')||'[]').length>=12;}catch(e){return false;}}},
    {id:'a9_blueprint',name:'설계 전문가',desc:'블루프린트 3종 선택',check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_bp_history')||'[]').length>=3;}catch(e){return false;}}},
    {id:'a9_quest5',name:'퀘스트 탐험가',desc:'퀘스트 5단계 완료',check:function(){return v9Quest.getProgress().length>=5;}},
    {id:'a9_quest_all',name:'퀘스트 마스터',desc:'퀘스트 8단계 전체 완료',check:function(){return v9Quest.getProgress().length>=8;}},
    {id:'a9_cert3',name:'장인 등급',desc:'자격증 장인 이상 달성',check:function(){return v9Cert.getScore()>=5;}},
    {id:'a9_dict20',name:'용어 학습자',desc:'용어사전 20항목 열람',check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_dict_viewed')||'[]').length>=20;}catch(e){return false;}}},
    {id:'a9_dict_all',name:'용어 마스터',desc:'용어사전 40항목 전부 열람',check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_dict_viewed')||'[]').length>=40;}catch(e){return false;}}},
    {id:'a9_light',name:'빛의 건축가',desc:'시간대 조명 6종 전부 확인',check:function(){try{return JSON.parse(localStorage.getItem('hb_v9_light_viewed')||'[]').length>=6;}catch(e){return false;}}},
    {id:'a9_diff_hard',name:'도전자',desc:'고급 난이도 선택',check:function(){try{return localStorage.getItem('hb_v9_difficulty')==='hard';}catch(e){return false;}}},
    {id:'a9_quiz75',name:'건축 박사 v2',desc:'퀴즈 75문 달성',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var t=0;Object.values(d).forEach(function(v){if(v&&v.quizCorrect)t+=v.quizCorrect;});return t>=75;}catch(e){return false;}}},
    {id:'a9_all_v9',name:'v9 탐험가',desc:'v9 기능 6종 이상 사용',check:function(){
      var count = 0;
      try{if(JSON.parse(localStorage.getItem('hb_v9_garden')||'[]').length>0) count++;}catch(e){}
      try{if(localStorage.getItem('hb_v9_blueprint')) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v9_dict_viewed')||'[]').length>0) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v9_light_viewed')||'[]').length>0) count++;}catch(e){}
      try{if(localStorage.getItem('hb_v9_difficulty')) count++;}catch(e){}
      try{if(v9Quest.getProgress().length>0) count++;}catch(e){}
      try{if(v9Cert.getScore()>0) count++;}catch(e){}
      return count >= 6;
    }}
  ],
  unlocked: [],
  load: function(){ try{this.unlocked=JSON.parse(localStorage.getItem('hb_v9_achievements')||'[]');}catch(e){this.unlocked=[];} },
  save: function(){ localStorage.setItem('hb_v9_achievements',JSON.stringify(this.unlocked)); },
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
    el.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2d1b0e,#4a2c17);border:2px solid #c4956a;border-radius:12px;padding:12px 24px;z-index:9999;color:#f5deb3;font-size:14px;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,.6);animation:v9toast .5s ease';
    el.textContent = '🏆 업적 달성: ' + name;
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 3000);
  }
};

// ── 14. Quick Action Buttons ──
(function(){
  var btns = [
    {label:'🌿 조경',fn:'v9Open("v9GardenPanel")'},
    {label:'📋 블루프린트',fn:'v9Open("v9BlueprintPanel")'},
    {label:'🎯 퀴스트',fn:'v9Open("v9QuestPanel")'},
    {label:'🏅 자격증',fn:'v9Open("v9CertPanel")'},
    {label:'📖 용어사전',fn:'v9Open("v9DictPanel")'},
    {label:'☀️ 조명',fn:'v9Open("v9LightPanel")'},
    {label:'🎮 난이도',fn:'v9Open("v9DiffPanel")'},
    {label:'🔍 비교',fn:'v9Open("v9ComparePanel")'}
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
window.v9Open = function(id){
  var panel = document.getElementById(id);
  if(!panel) return;
  panel.classList.add('active');
  switch(id){
    case 'v9GardenPanel': v9Garden.render(); break;
    case 'v9BlueprintPanel': v9Blueprint.render(); break;
    case 'v9QuestPanel': v9Quest.render(); break;
    case 'v9CertPanel': v9Cert.render(); v9SFX.play('cert_upgrade'); break;
    case 'v9DictPanel': v9Dict.render(); break;
    case 'v9LightPanel':
      v9Light.render();
      try{
        var viewed = JSON.parse(localStorage.getItem('hb_v9_light_viewed')||'[]');
        if(viewed.indexOf(v9Light._active)===-1){viewed.push(v9Light._active);localStorage.setItem('hb_v9_light_viewed',JSON.stringify(viewed));}
      }catch(e){}
      v9Achieve.check();
      break;
    case 'v9DiffPanel': v9Diff.render(); break;
    case 'v9ComparePanel': v9Compare.render(); break;
  }
};
window.v9Close = function(id){
  var panel = document.getElementById(id);
  if(panel) panel.classList.remove('active');
};

// ── 16. Keyboard Shortcuts (+6) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(!document.getElementById('modeSelect')) return;
    if(!document.getElementById('modeSelect').classList.contains('hidden')) return;
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
    if(!e.shiftKey) return;
    var key = e.key;
    if(key==='G') v9Open('v9GardenPanel');
    else if(key==='B') v9Open('v9BlueprintPanel');
    else if(key==='Q') v9Open('v9QuestPanel');
    else if(key==='C') v9Open('v9CertPanel');
    else if(key==='D') v9Open('v9DictPanel');
    else if(key==='J') v9Open('v9LightPanel');
  });
})();

// ── 17. Blueprint History Tracking ──
(function(){
  var origSelect = v9Blueprint.select.bind(v9Blueprint);
  v9Blueprint.select = function(id){
    try{
      var hist = JSON.parse(localStorage.getItem('hb_v9_bp_history')||'[]');
      if(hist.indexOf(id)===-1){ hist.push(id); localStorage.setItem('hb_v9_bp_history',JSON.stringify(hist)); }
    }catch(e){}
    origSelect(id);
  };
})();

// ── 18. Light Viewing Tracking ──
(function(){
  var origRender = v9Light.render.bind(v9Light);
  v9Light.render = function(){
    origRender();
    try{
      var viewed = JSON.parse(localStorage.getItem('hb_v9_light_viewed')||'[]');
      if(viewed.indexOf(v9Light._active)===-1){
        viewed.push(v9Light._active);
        localStorage.setItem('hb_v9_light_viewed',JSON.stringify(viewed));
      }
    }catch(e){}
    v9Achieve.check();
  };
})();

// ── 19. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v9Hooked) return true;
    window.__v9Hooked = true;
    var prevShowComplete = window.showComplete;
    window.showComplete = function(){
      prevShowComplete.apply(this, arguments);
      v9Achieve.check();
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

// ── 20. Inject quiz on load ──
(function(){
  var qi = setInterval(function(){
    if(window.quizPool){
      v9Quiz.injectToMain();
      clearInterval(qi);
    }
  }, 500);
  setTimeout(function(){ clearInterval(qi); }, 10000);
})();

// ── 21. Initial load + checks ──
(function(){
  v9Garden.load();
  v9Blueprint.load();
  v9Diff.load();
  v9Dict.load();
  setTimeout(function(){ v9Achieve.check(); }, 4000);
})();

// ── 22. Toast Animation CSS ──
(function(){
  var s = document.createElement('style');
  s.textContent = '@keyframes v9toast{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(s);
})();

// end v9 guard
}

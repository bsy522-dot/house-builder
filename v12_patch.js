// =====================================================
// House Builder v12.0 Patch
// 인테리어꾸미기Canvas10종가구+정원조경Canvas12종+설계도면뷰어Canvas평면도입면도
// 조명설계Canvas6종+건축비용계산기CanvasPie+Bar+한옥구조퍼즐Canvas3종
// 건축타임라인Canvas12시대+건축인증6단계+퀴즈15추가(105→120)+업적12추가(110→122)
// SFX12종+키보드8종+하단스크롤네비바
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV12) {
window.__hbV12 = true;

// ── 1. CSS Injection v12 ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v12-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3600;overflow-y:auto;padding:16px}',
    '.v12-panel.active{display:block}',
    '.v12-box{max-width:700px;margin:40px auto}',
    '.v12-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v12-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v12-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v12-close:hover{background:#d4a57a}',
    '.v12-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v12-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v12-tab:hover,.v12-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v12-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}',
    '.v12-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v12-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v12-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v12-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v12-card p{color:#c4956a;font-size:11px;margin:0}',
    '.v12-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v12-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v12-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v12-item.read{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v12-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v12-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v12-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v12-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v12-item.expanded .detail{display:block}',
    '.v12-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v12-btn-sm:hover{background:#d4a57a}',
    '.v12-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v12-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v12-stat-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}',
    '.v12-stat-row .stat-label{width:90px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0}',
    '.v12-stat-row .stat-bar{flex:1;height:18px;background:rgba(255,255,255,.08);border-radius:9px;overflow:hidden}',
    '.v12-stat-row .stat-fill{height:100%;border-radius:9px;transition:width .4s}',
    '.v12-stat-row .stat-val{width:50px;color:#c4956a;font-size:12px;flex-shrink:0}',
    '.v12-puzzle-cell{width:60px;height:60px;border:2px solid rgba(196,149,106,.2);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:22px;transition:all .15s;background:rgba(255,255,255,.03);border-radius:6px}',
    '.v12-puzzle-cell:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v12-puzzle-cell.correct{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v12-puzzle-cell.wrong{border-color:#b43c3c;background:rgba(180,60,60,.1)}',
    '.v12-puzzle-cell.placed{background:rgba(196,149,106,.12);border-color:rgba(196,149,106,.4)}',
    '.v12-cert-card{background:rgba(196,149,106,.06);border:2px solid rgba(196,149,106,.15);border-radius:12px;padding:18px;text-align:center;transition:all .2s}',
    '.v12-cert-card.earned{border-color:#f5deb3;background:rgba(245,222,179,.08);box-shadow:0 0 12px rgba(245,222,179,.15)}',
    '.v12-cert-card.locked{opacity:.5}',
    '.v12-cert-card h4{color:#f5deb3;font-size:14px;margin:0 0 4px}',
    '.v12-cert-card p{color:#c4956a;font-size:11px;margin:0 0 6px}',
    '.v12-cert-card .cert-icon{font-size:36px;margin-bottom:8px}',
    '.v12-cert-card .cert-badge{display:inline-block;padding:3px 10px;border-radius:10px;font-size:10px;font-weight:700}',
    '.v12-nav-bar{position:fixed;bottom:0;left:0;right:0;height:52px;background:rgba(45,27,14,.95);border-top:2px solid #c4956a;z-index:298;display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;gap:2px;padding:0 8px;align-items:center}',
    '.v12-nav-bar::-webkit-scrollbar{display:none}',
    '.v12-nav-btn{flex-shrink:0;padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:11px;cursor:pointer;transition:all .2s;white-space:nowrap;font-family:inherit;display:flex;align-items:center;gap:4px}',
    '.v12-nav-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '@media(max-width:600px){.v12-box{margin:16px auto}.v12-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v12-puzzle-cell{width:48px;height:48px;font-size:18px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v12 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v12-panels';
  wrap.innerHTML =
    '<div id="v12-interior" class="v12-panel"><div class="v12-box"><h2>&#x1F6CB;&#xFE0F; &#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xAFB8;&#xBBF8;&#xAE30;</h2><p>10&#xC885; &#xAC00;&#xAD6C;&#xB97C; &#xBC29;&#xC5D0; &#xBC30;&#xCE58;&#xD574;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-int-tools"></div><canvas id="v12-int-canvas" class="v12-canvas" width="560" height="400"></canvas><div id="v12-int-info" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-int-clear">&#xCD08;&#xAE30;&#xD654;</button> <button class="v12-btn-outline" id="v12-int-save">&#xC800;&#xC7A5;</button></div><button class="v12-close" onclick="v12Close(\'interior\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-garden" class="v12-panel"><div class="v12-box"><h2>&#x1F33F; &#xC815;&#xC6D0; &#xC870;&#xACBD; &#xC124;&#xACC4;</h2><p>12&#xC885; &#xC2DD;&#xBB3C;/&#xC870;&#xACBD;&#xC694;&#xC18C;&#xB85C; &#xC815;&#xC6D0;&#xC744; &#xAFB8;&#xBBF0;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-garden-tools"></div><canvas id="v12-garden-canvas" class="v12-canvas" width="560" height="400"></canvas><div id="v12-garden-info" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-garden-clear">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'garden\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-blueprint" class="v12-panel"><div class="v12-box"><h2>&#x1F4D0; &#xC124;&#xACC4; &#xB3C4;&#xBA74; &#xBDF0;&#xC5B4;</h2><p>&#xD3C9;&#xBA74;&#xB3C4;&#xC640; &#xC785;&#xBA74;&#xB3C4;&#xB97C; Canvas&#xB85C; &#xD655;&#xC778;&#xD558;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-bp-tabs"></div><canvas id="v12-bp-canvas" class="v12-canvas" width="600" height="420"></canvas><div id="v12-bp-detail" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'blueprint\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-lighting" class="v12-panel"><div class="v12-box"><h2>&#x1F4A1; &#xC870;&#xBA85; &#xC124;&#xACC4; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2><p>6&#xC885; &#xC870;&#xBA85;&#xC73C;&#xB85C; &#xACF5;&#xAC04; &#xBD84;&#xC704;&#xAE30;&#xB97C; &#xB514;&#xC790;&#xC778;&#xD558;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-light-tabs"></div><canvas id="v12-light-canvas" class="v12-canvas" width="520" height="380"></canvas><div id="v12-light-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'lighting\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-cost" class="v12-panel"><div class="v12-box"><h2>&#x1F4B0; &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xACC4;&#xC0B0;&#xAE30;</h2><p>&#xC790;&#xC7AC;/&#xC778;&#xAC74;&#xBE44;/&#xAE30;&#xAC04;&#xC744; &#xC785;&#xB825;&#xD558;&#xBA74; &#xBE44;&#xC6A9;&#xC744; &#xBD84;&#xC11D;&#xD569;&#xB2C8;&#xB2E4;</p><div class="v12-tabs" id="v12-cost-tabs"></div><canvas id="v12-cost-canvas" class="v12-canvas" width="560" height="360"></canvas><div id="v12-cost-detail" style="color:#c4956a;font-size:12px;margin:10px 0;text-align:center"></div><button class="v12-close" onclick="v12Close(\'cost\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-puzzle" class="v12-panel"><div class="v12-box"><h2>&#x1F9E9; &#xD55C;&#xC625; &#xAD6C;&#xC870; &#xD37C;&#xC990;</h2><p>3&#xC885; &#xD37C;&#xC990;&#xC73C;&#xB85C; &#xAC74;&#xCD95; &#xAD6C;&#xC870;&#xB97C; &#xBC30;&#xC6CC;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-puzzle-tabs"></div><div id="v12-puzzle-area" style="text-align:center;margin:16px 0"></div><div id="v12-puzzle-status" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'puzzle\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-timeline" class="v12-panel"><div class="v12-box"><h2>&#x1F3DB;&#xFE0F; &#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC0AC; &#xD0C0;&#xC784;&#xB77C;&#xC778;</h2><p>12&#xC2DC;&#xB300;&#xC758; &#xAC74;&#xCD95; &#xBCC0;&#xCC9C;&#xC0AC;&#xB97C; Canvas&#xB85C; &#xD655;&#xC778;&#xD558;&#xC138;&#xC694;</p><canvas id="v12-tl-canvas" class="v12-canvas" width="660" height="420"></canvas><div id="v12-tl-detail" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'timeline\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-cert" class="v12-panel"><div class="v12-box"><h2>&#x1F3C6; &#xAC74;&#xCD95; &#xC778;&#xC99D; &#xC2DC;&#xC2A4;&#xD15C;</h2><p>6&#xB2E8;&#xACC4; &#xC790;&#xACA9;&#xC99D;&#xC744; &#xD68D;&#xB4DD;&#xD558;&#xC138;&#xC694;</p><div class="v12-grid" id="v12-cert-list"></div><canvas id="v12-cert-canvas" class="v12-canvas" width="400" height="300"></canvas><button class="v12-close" onclick="v12Close(\'cert\')">&#xB2EB;&#xAE30;</button></div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. Web Audio SFX v12 (12 types) ──
var v12SFX = (function(){
  var actx = null;
  function ctx(){ if(!actx) try{ actx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return actx; }
  function play(type){
    var c = ctx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    var t = c.currentTime;
    switch(type){
      case 'interior_place': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.08); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'garden_plant': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(554,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'blueprint_view': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(494,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.18); o.start(t); o.stop(t+.18); break;
      case 'light_change': o.type='sine'; o.frequency.setValueAtTime(587,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.12); o.start(t); o.stop(t+.12); break;
      case 'cost_calc': o.type='triangle'; o.frequency.setValueAtTime(349,t); o.frequency.linearRampToValueAtTime(440,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'puzzle_place': o.type='square'; o.frequency.setValueAtTime(494,t); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
      case 'puzzle_correct': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.15); g.gain.setValueAtTime(.14,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'puzzle_wrong': o.type='sawtooth'; o.frequency.setValueAtTime(200,t); o.frequency.linearRampToValueAtTime(150,t+.15); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'timeline_view': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(523,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'cert_earn': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.16,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      case 'feature_open12': o.type='triangle'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(554,t+.08); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'achieve_v12': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); o.frequency.linearRampToValueAtTime(1047,t+.3); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.5); o.start(t); o.stop(t+.5); break;
      default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1);
    }
  }
  return {play:play,ctx:ctx};
})();

// ── 4. Interior Designer (인테리어 꾸미기 10종 가구 Canvas) ──
var v12Interior = (function(){
  var KEY = 'hb_v12_interior';
  var furniture = [
    {id:'bed',name:'침대',icon:'🛏',w:60,h:80,color:'#8B7355'},
    {id:'desk',name:'책상',icon:'📝',w:50,h:30,color:'#A0522D'},
    {id:'chair',name:'의자',icon:'🪑',w:25,h:25,color:'#D2691E'},
    {id:'sofa',name:'소파',icon:'🛋',w:70,h:35,color:'#CD853F'},
    {id:'table',name:'식탁',icon:'🍽',w:55,h:40,color:'#8B4513'},
    {id:'cabinet',name:'장롱',icon:'👚',w:60,h:20,color:'#6B4423'},
    {id:'tv',name:'TV',icon:'📺',w:45,h:10,color:'#333'},
    {id:'plant',name:'화분',icon:'🪴',w:20,h:20,color:'#228B22'},
    {id:'lamp',name:'조명',icon:'💡',w:15,h:15,color:'#FFD700'},
    {id:'rug',name:'러그',icon:'🧶',w:50,h:40,color:'#B22222'}
  ];
  var selectedTool = 'bed';
  var placed = JSON.parse(localStorage.getItem(KEY) || '[]');
  var ROOM_X=40, ROOM_Y=40, ROOM_W=480, ROOM_H=320;

  function save(){ localStorage.setItem(KEY, JSON.stringify(placed)); }

  function renderTools(){
    var el = document.getElementById('v12-int-tools'); if(!el) return;
    el.innerHTML = furniture.map(function(f){
      return '<button class="v12-tab'+(selectedTool===f.id?' active':'')+'" data-id="'+f.id+'">'+f.icon+' '+f.name+'</button>';
    }).join('') + '<button class="v12-tab" data-id="erase" style="color:#e74c3c">&#x274C; &#xC0AD;&#xC81C;</button>';
    el.querySelectorAll('.v12-tab').forEach(function(btn){
      btn.onclick = function(){ selectedTool=btn.dataset.id; el.querySelectorAll('.v12-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); };
    });
  }

  function draw(){
    var cv = document.getElementById('v12-int-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='#1a1408'; c.fillRect(0,0,W,H);
    c.fillStyle='#3a2815'; c.fillRect(ROOM_X,ROOM_Y,ROOM_W,ROOM_H);
    c.strokeStyle='#c4956a'; c.lineWidth=3; c.strokeRect(ROOM_X,ROOM_Y,ROOM_W,ROOM_H);
    c.fillStyle='rgba(196,149,106,.15)';
    for(var gx=ROOM_X;gx<ROOM_X+ROOM_W;gx+=40){c.beginPath();c.moveTo(gx,ROOM_Y);c.lineTo(gx,ROOM_Y+ROOM_H);c.strokeStyle='rgba(196,149,106,.08)';c.lineWidth=1;c.stroke();}
    for(var gy=ROOM_Y;gy<ROOM_Y+ROOM_H;gy+=40){c.beginPath();c.moveTo(ROOM_X,gy);c.lineTo(ROOM_X+ROOM_W,gy);c.strokeStyle='rgba(196,149,106,.08)';c.lineWidth=1;c.stroke();}
    c.fillStyle='#5a3a20'; c.fillRect(ROOM_X+ROOM_W/2-25,ROOM_Y+ROOM_H-4,50,8);
    c.fillStyle='#c4956a'; c.font='10px sans-serif'; c.textAlign='center'; c.fillText('&#xBB38;',ROOM_X+ROOM_W/2,ROOM_Y+ROOM_H+14);
    c.fillStyle='rgba(135,206,250,.2)'; c.fillRect(ROOM_X+80,ROOM_Y,60,4);c.fillRect(ROOM_X+300,ROOM_Y,60,4);
    c.fillStyle='#c4956a'; c.fillText('&#xCC3D;',ROOM_X+110,ROOM_Y-6); c.fillText('&#xCC3D;',ROOM_X+330,ROOM_Y-6);
    placed.forEach(function(p){
      var f = furniture.find(function(ff){return ff.id===p.id;});
      if(!f) return;
      c.fillStyle = f.color; c.globalAlpha=0.8;
      c.fillRect(p.x-f.w/2, p.y-f.h/2, f.w, f.h);
      c.globalAlpha=1;
      c.strokeStyle='rgba(255,255,255,.3)'; c.lineWidth=1; c.strokeRect(p.x-f.w/2,p.y-f.h/2,f.w,f.h);
      c.fillStyle='#fff'; c.font='14px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillText(f.icon, p.x, p.y);
    });
    c.fillStyle='#f5deb3'; c.font='bold 13px sans-serif'; c.textAlign='left'; c.textBaseline='top';
    c.fillText('&#xD3C9;&#xBA74;&#xB3C4; &#xBDF0; - '+placed.length+'&#xAC1C; &#xBC30;&#xCE58;',ROOM_X,H-24);
    c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.textAlign='right';
    c.fillText('&#xD074;&#xB9AD;&#xC73C;&#xB85C; &#xAC00;&#xAD6C; &#xBC30;&#xCE58;',W-ROOM_X,H-24);
    var info = document.getElementById('v12-int-info');
    if(info) info.innerHTML = '&#xBC30;&#xCE58;&#xB41C; &#xAC00;&#xAD6C;: '+placed.length+'&#xAC1C; | &#xD074;&#xB9AD;&#xC73C;&#xB85C; &#xBC30;&#xCE58;, &#xC0AD;&#xC81C; &#xBAA8;&#xB4DC;&#xB85C; &#xC81C;&#xAC70;';
  }

  function handleClick(e){
    var cv = document.getElementById('v12-int-canvas'); if(!cv) return;
    var rect = cv.getBoundingClientRect();
    var sx = cv.width/rect.width, sy = cv.height/rect.height;
    var mx = (e.clientX-rect.left)*sx, my = (e.clientY-rect.top)*sy;
    if(mx<ROOM_X||mx>ROOM_X+ROOM_W||my<ROOM_Y||my>ROOM_Y+ROOM_H) return;
    if(selectedTool==='erase'){
      for(var i=placed.length-1;i>=0;i--){
        var p=placed[i], f=furniture.find(function(ff){return ff.id===p.id;});
        if(f && mx>=p.x-f.w/2 && mx<=p.x+f.w/2 && my>=p.y-f.h/2 && my<=p.y+f.h/2){
          placed.splice(i,1); save(); v12SFX.play('interior_place'); draw(); return;
        }
      }
      return;
    }
    placed.push({id:selectedTool,x:mx,y:my});
    save(); v12SFX.play('interior_place'); draw();
  }

  function open(){
    document.getElementById('v12-interior').classList.add('active');
    v12SFX.play('feature_open12'); renderTools(); draw();
    var cv = document.getElementById('v12-int-canvas');
    if(cv){ cv.onclick = handleClick; }
    document.getElementById('v12-int-clear').onclick = function(){ placed=[]; save(); draw(); };
    document.getElementById('v12-int-save').onclick = function(){ save(); v12SFX.play('interior_place'); };
  }
  function close(){ document.getElementById('v12-interior').classList.remove('active'); }
  return {open:open,close:close,placed:placed,load:function(){}};
})();

// ── 5. Garden Landscape Designer (정원 조경 설계 12종 Canvas) ──
var v12Garden = (function(){
  var KEY='hb_v12_garden';
  var elements=[
    {id:'pine',name:'소나무',icon:'🌲',color:'#2d5016'},
    {id:'maple',name:'단풍나무',icon:'🍁',color:'#c0392b'},
    {id:'bamboo',name:'대나무',icon:'🎍',color:'#27ae60'},
    {id:'flower',name:'꽃밭',icon:'🌺',color:'#e74c3c'},
    {id:'rock',name:'정원석',icon:'🪨',color:'#7f8c8d'},
    {id:'pond',name:'연못',icon:'💧',color:'#2980b9'},
    {id:'bridge',name:'돌다리',icon:'🌉',color:'#8B7355'},
    {id:'lantern',name:'석등',icon:'🏮',color:'#f39c12'},
    {id:'fence',name:'돌담',icon:'🧱',color:'#95a5a6'},
    {id:'path',name:'오솔길',icon:'🚶',color:'#d4a574'},
    {id:'bench',name:'벤치',icon:'🪑',color:'#8B4513'},
    {id:'pavilion',name:'정자',icon:'⛩️',color:'#c0392b'}
  ];
  var selectedTool='pine', SIZE=10;
  var grid = JSON.parse(localStorage.getItem(KEY)||'null');
  if(!grid){grid=[];for(var i=0;i<SIZE*SIZE;i++)grid.push('');}
  function save(){localStorage.setItem(KEY,JSON.stringify(grid));}

  function renderTools(){
    var el=document.getElementById('v12-garden-tools'); if(!el) return;
    el.innerHTML = elements.map(function(e){
      return '<button class="v12-tab'+(selectedTool===e.id?' active':'')+'" data-id="'+e.id+'">'+e.icon+' '+e.name+'</button>';
    }).join('') + '<button class="v12-tab" data-id="erase" style="color:#e74c3c">&#x274C;</button>';
    el.querySelectorAll('.v12-tab').forEach(function(btn){
      btn.onclick=function(){ selectedTool=btn.dataset.id; el.querySelectorAll('.v12-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); };
    });
  }

  function draw(){
    var cv=document.getElementById('v12-garden-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, cellW=44, cellH=36;
    var ox=(W-cellW*SIZE)/2, oy=20;
    c.clearRect(0,0,W,H);
    c.fillStyle='#1a2810'; c.fillRect(0,0,W,H);
    for(var i=0;i<SIZE*SIZE;i++){
      var gx=i%SIZE, gy=Math.floor(i/SIZE);
      var x=ox+gx*cellW, y=oy+gy*cellH;
      c.fillStyle = grid[i]?'rgba(74,124,89,.12)':'rgba(74,124,89,.04)';
      c.fillRect(x,y,cellW-1,cellH-1);
      c.strokeStyle='rgba(74,124,89,.2)'; c.lineWidth=1; c.strokeRect(x,y,cellW-1,cellH-1);
      if(grid[i]){
        var el=elements.find(function(e){return e.id===grid[i];});
        if(el){ c.fillStyle='#fff'; c.font='18px sans-serif'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(el.icon,x+cellW/2,y+cellH/2); }
      }
    }
    c.fillStyle='#f5deb3'; c.font='bold 12px sans-serif'; c.textAlign='center';
    c.fillText('&#xC815;&#xC6D0; &#xC870;&#xACBD; &#xC124;&#xACC4; (10x10)',W/2,H-16);
    var cnt=grid.filter(function(g){return g;}).length;
    var info=document.getElementById('v12-garden-info');
    if(info) info.innerHTML='&#xBC30;&#xCE58;: '+cnt+'/100 | &#xD074;&#xB9AD;&#xC73C;&#xB85C; &#xC2DD;&#xBB3C;/&#xC694;&#xC18C; &#xBC30;&#xCE58;';
  }

  function handleClick(e){
    var cv=document.getElementById('v12-garden-canvas'); if(!cv) return;
    var rect=cv.getBoundingClientRect(), sx=cv.width/rect.width, sy=cv.height/rect.height;
    var mx=(e.clientX-rect.left)*sx, my=(e.clientY-rect.top)*sy;
    var cellW=44,cellH=36,ox=(cv.width-cellW*SIZE)/2,oy=20;
    var gx=Math.floor((mx-ox)/cellW), gy=Math.floor((my-oy)/cellH);
    if(gx<0||gx>=SIZE||gy<0||gy>=SIZE) return;
    var idx=gy*SIZE+gx;
    grid[idx]=selectedTool==='erase'?'':selectedTool;
    save(); v12SFX.play('garden_plant'); draw();
  }

  function open(){
    document.getElementById('v12-garden').classList.add('active');
    v12SFX.play('feature_open12'); renderTools(); draw();
    var cv=document.getElementById('v12-garden-canvas');
    if(cv) cv.onclick=handleClick;
    document.getElementById('v12-garden-clear').onclick=function(){grid=[];for(var i=0;i<SIZE*SIZE;i++)grid.push('');save();draw();};
  }
  function close(){document.getElementById('v12-garden').classList.remove('active');}
  return {open:open,close:close,grid:grid,load:function(){}};
})();

// ── 6. Blueprint Viewer (설계 도면 뷰어 Canvas 평면도/입면도) ──
var v12Blueprint = (function(){
  var views=['&#xD3C9;&#xBA74;&#xB3C4;','&#xC815;&#xBA74;&#xB3C4;','&#xCE21;&#xBA74;&#xB3C4;','&#xBC30;&#xCE58;&#xB3C4;'];
  var currentView=0;
  function renderTabs(){
    var el=document.getElementById('v12-bp-tabs'); if(!el) return;
    el.innerHTML=views.map(function(v,i){return '<button class="v12-tab'+(currentView===i?' active':'')+'" data-idx="'+i+'">'+v+'</button>';}).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){btn.onclick=function(){currentView=parseInt(btn.dataset.idx);renderTabs();draw();v12SFX.play('blueprint_view');};});
  }
  function draw(){
    var cv=document.getElementById('v12-bp-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='#0a1628'; c.fillRect(0,0,W,H);
    c.strokeStyle='rgba(100,149,237,.15)'; c.lineWidth=1;
    for(var gx=0;gx<W;gx+=30){c.beginPath();c.moveTo(gx,0);c.lineTo(gx,H);c.stroke();}
    for(var gy=0;gy<H;gy+=30){c.beginPath();c.moveTo(0,gy);c.lineTo(W,gy);c.stroke();}
    c.strokeStyle='#4a90d9'; c.lineWidth=2;
    if(currentView===0){
      c.strokeRect(100,60,400,300);
      c.strokeRect(110,70,130,120); c.strokeRect(260,70,100,120); c.strokeRect(380,70,110,120);
      c.strokeRect(110,210,170,140); c.strokeRect(300,210,190,140);
      c.beginPath();c.moveTo(300,60);c.lineTo(300,360);c.stroke();
      c.setLineDash([5,5]);
      c.beginPath();c.moveTo(100,210);c.lineTo(500,210);c.stroke();
      c.setLineDash([]);
      c.fillStyle='rgba(100,149,237,.08)'; c.fillRect(110,70,130,120);
      c.fillStyle='rgba(74,124,89,.08)'; c.fillRect(110,210,170,140);
      c.fillStyle='#4a90d9'; c.font='11px sans-serif'; c.textAlign='center';
      c.fillText('&#xC548;&#xBC29;',175,130); c.fillText('&#xAC74;&#xB108;&#xBC29;',310,130); c.fillText('&#xBD80;&#xC5C5;',435,130);
      c.fillText('&#xB300;&#xCCAD;&#xB9C8;&#xB8E8;',195,280); c.fillText('&#xBD80;&#xC5C5;/&#xCC3D;&#xACE0;',395,280);
      c.fillStyle='#f39c12'; c.fillRect(285,345,30,18); c.fillStyle='#4a90d9'; c.fillText('&#xBB38;',300,370);
      c.fillStyle='rgba(135,206,250,.3)'; c.fillRect(150,60,40,6); c.fillRect(350,60,40,6);
      c.fillStyle='#87CEEB'; c.font='9px sans-serif'; c.fillText('&#xCC3D;',170,55); c.fillText('&#xCC3D;',370,55);
      c.fillStyle='#c4956a'; c.font='10px sans-serif';
      c.fillText('12m',300,50); c.save(); c.translate(90,210); c.rotate(-Math.PI/2); c.fillText('9m',0,0); c.restore();
    } else if(currentView===1){
      c.strokeRect(80,180,440,180);
      c.beginPath();c.moveTo(80,180);c.lineTo(300,60);c.lineTo(520,180);c.closePath();c.stroke();
      c.fillStyle='rgba(196,149,106,.08)'; c.beginPath();c.moveTo(80,180);c.lineTo(300,60);c.lineTo(520,180);c.closePath();c.fill();
      c.strokeRect(140,260,60,100); c.strokeRect(250,260,100,60); c.strokeRect(400,260,60,100);
      c.fillStyle='rgba(135,206,250,.2)'; c.fillRect(250,260,100,60);
      c.fillStyle='#f39c12'; c.fillRect(140,260,60,100);
      c.fillStyle='#4a90d9'; c.font='11px sans-serif'; c.textAlign='center';
      c.fillText('&#xBB38;',170,395); c.fillText('&#xCC3D;',300,395); c.fillText('&#xBB38;',430,395);
      c.fillText('&#xC6A9;&#xB9C8;&#xB8E8;',300,80);
      c.fillStyle='#c4956a'; c.font='10px sans-serif';
      c.fillText('6.5m',540,280); c.fillText('12m',300,375);
    } else if(currentView===2){
      c.strokeRect(120,180,360,180);
      c.beginPath();c.moveTo(120,180);c.lineTo(300,80);c.lineTo(480,180);c.closePath();c.stroke();
      c.fillStyle='rgba(196,149,106,.08)'; c.beginPath();c.moveTo(120,180);c.lineTo(300,80);c.lineTo(480,180);c.closePath();c.fill();
      c.strokeRect(200,250,80,110); c.strokeRect(320,240,80,70);
      c.fillStyle='#4a90d9'; c.font='11px sans-serif'; c.textAlign='center';
      c.fillText('&#xBB38;',240,395); c.fillText('&#xCC3D;',360,395);
      c.fillStyle='#c4956a'; c.font='10px sans-serif';
      c.fillText('9m',300,375); c.fillText('6.5m',500,280);
    } else {
      c.strokeRect(60,40,480,340);
      c.fillStyle='rgba(74,124,89,.06)'; c.fillRect(60,40,480,340);
      c.strokeStyle='rgba(74,124,89,.4)'; c.lineWidth=1;
      c.strokeRect(180,100,240,180);
      c.fillStyle='#c4956a'; c.font='10px sans-serif'; c.textAlign='center';
      c.fillText('&#xAC74;&#xBB3C;',300,195);
      c.fillStyle='rgba(74,124,89,.15)';
      c.fillRect(80,60,80,60); c.fillRect(420,60,80,60);
      c.fillRect(80,300,80,60); c.fillRect(420,300,80,60);
      c.fillStyle='#4a90d9'; c.font='10px sans-serif';
      c.fillText('&#xC18C;&#xB098;&#xBB34;',120,90); c.fillText('&#xB300;&#xB098;&#xBB34;',460,90);
      c.fillText('&#xC815;&#xC6D0;&#xC11D;',120,330); c.fillText('&#xC5F0;&#xBBBB;',460,330);
      c.setLineDash([4,4]);c.strokeStyle='#f39c12';c.beginPath();c.moveTo(300,280);c.lineTo(300,380);c.stroke();c.setLineDash([]);
      c.fillStyle='#f39c12'; c.fillText('&#xC9C4;&#xC785;&#xB85C;',300,390);
      c.fillStyle='#87CEEB'; c.font='9px sans-serif';
      c.fillText('N &#x2191;',540,55);
    }
    c.fillStyle='#f5deb3'; c.font='bold 13px sans-serif'; c.textAlign='center';
    c.fillText('&#xD55C;&#xC625; '+views[currentView]+' (&#xCC99;&#xB3C4; 1:100)',W/2,H-8);
    var detail=document.getElementById('v12-bp-detail');
    var descs=['&#xC704;&#xC5D0;&#xC11C; &#xBCF8; &#xBC29; &#xBC30;&#xCE58;. &#xC548;&#xBC29;/&#xAC74;&#xB108;&#xBC29;/&#xB300;&#xCCAD;&#xB9C8;&#xB8E8; &#xAD6C;&#xC870;.',
      '&#xC815;&#xBA74;&#xC5D0;&#xC11C; &#xBCF8; &#xC678;&#xAD00;. &#xC9C0;&#xBD95; &#xACE1;&#xC120;&#xACFC; &#xCC98;&#xB9C8;&#xC758; &#xC544;&#xB984;&#xB2E4;&#xC6C0;.',
      '&#xCE21;&#xBA74;&#xC5D0;&#xC11C; &#xBCF8; &#xB2E8;&#xBA74;. &#xC9C0;&#xBD95; &#xACBD;&#xC0AC;&#xC640; &#xBC29; &#xB192;&#xC774;.',
      '&#xB300;&#xC9C0; &#xBC30;&#xCE58;&#xB3C4;. &#xAC74;&#xBB3C;+&#xC870;&#xACBD;+&#xC9C4;&#xC785;&#xB85C; &#xC804;&#xCCB4; &#xBC30;&#xCE58;.'];
    if(detail) detail.innerHTML=descs[currentView];
  }
  function open(){document.getElementById('v12-blueprint').classList.add('active');v12SFX.play('feature_open12');renderTabs();draw();}
  function close(){document.getElementById('v12-blueprint').classList.remove('active');}
  return {open:open,close:close,load:function(){}};
})();

// ── 7. Lighting Simulator (조명 설계 시뮬레이터 6종 Canvas) ──
var v12Lighting = (function(){
  var lights=[
    {name:'&#xCC3D;&#xD638;&#xC9C0; &#xC870;&#xBA85;',type:'&#xC790;&#xC5F0;&#xAD11;',color:'#FFF8DC',intensity:90,temp:'5500K',desc:'&#xD55C;&#xC9C0;&#xB97C; &#xD1B5;&#xACFC;&#xD55C; &#xC740;&#xC740;&#xD55C; &#xC790;&#xC5F0;&#xAD11;'},
    {name:'&#xCD08;&#xB871;&#xBD88;',type:'&#xC804;&#xD1B5;',color:'#FF8C00',intensity:30,temp:'1800K',desc:'&#xC740;&#xC740;&#xD558;&#xACE0; &#xB530;&#xB73B;&#xD55C; &#xCD08;&#xB871;&#xBD88;&#xC758; &#xBD84;&#xC704;&#xAE30;'},
    {name:'&#xC11D;&#xB4F1;',type:'&#xC804;&#xD1B5;',color:'#FFA500',intensity:40,temp:'2200K',desc:'&#xC815;&#xC6D0;&#xC744; &#xBE44;&#xCD94;&#xB294; &#xC804;&#xD1B5; &#xC11D;&#xB4F1;'},
    {name:'&#xD615;&#xAD11;&#xB4F1;',type:'&#xD604;&#xB300;',color:'#F5F5DC',intensity:80,temp:'4000K',desc:'&#xD604;&#xB300;&#xC801; &#xD615;&#xAD11; &#xC870;&#xBA85;'},
    {name:'LED &#xC870;&#xBA85;',type:'&#xD604;&#xB300;',color:'#FFFFFF',intensity:95,temp:'6000K',desc:'&#xBC1D;&#xACE0; &#xD6A8;&#xC728;&#xC801;&#xC778; LED &#xC870;&#xBA85;'},
    {name:'&#xAC04;&#xC811; &#xC870;&#xBA85;',type:'&#xD604;&#xB300;',color:'#FFE4B5',intensity:60,temp:'3000K',desc:'&#xBD84;&#xC704;&#xAE30; &#xC788;&#xB294; &#xAC04;&#xC811; &#xC870;&#xBA85;'}
  ];
  var currentLight=0;
  function renderTabs(){
    var el=document.getElementById('v12-light-tabs'); if(!el) return;
    el.innerHTML=lights.map(function(l,i){return '<button class="v12-tab'+(currentLight===i?' active':'')+'" data-idx="'+i+'">'+l.name+'</button>';}).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){btn.onclick=function(){currentLight=parseInt(btn.dataset.idx);renderTabs();draw();v12SFX.play('light_change');};});
  }
  function draw(){
    var cv=document.getElementById('v12-light-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, l=lights[currentLight];
    c.clearRect(0,0,W,H);
    var bgBright = l.intensity/100*0.3;
    c.fillStyle='rgb('+Math.round(20+bgBright*60)+','+Math.round(15+bgBright*40)+','+Math.round(10+bgBright*30)+')';
    c.fillRect(0,0,W,H);
    c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=2; c.strokeRect(40,40,W-80,H-80);
    c.fillStyle='rgba(196,149,106,.05)'; c.fillRect(40,40,W-80,H-80);
    var grad = c.createRadialGradient(W/2,H/2-30,10,W/2,H/2-30,180);
    grad.addColorStop(0,l.color.replace(')',','+l.intensity/100*0.6+')').replace('#','rgba(').replace(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i,function(m,r,g,b){return parseInt(r,16)+','+parseInt(g,16)+','+parseInt(b,16);}));
    grad.addColorStop(1,'rgba(0,0,0,0)');
    var hexToRgb=function(h){var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return r+','+g+','+b;};
    var rgb=hexToRgb(l.color);
    var grad2=c.createRadialGradient(W/2,H/2-30,5,W/2,H/2-30,160);
    grad2.addColorStop(0,'rgba('+rgb+','+(l.intensity/100*0.5)+')');
    grad2.addColorStop(1,'rgba('+rgb+',0)');
    c.fillStyle=grad2; c.fillRect(40,40,W-80,H-80);
    c.fillStyle='#8B7355'; c.fillRect(W/2-40,H-120,80,50);
    c.fillStyle='rgba('+rgb+',0.15)'; c.fillRect(W/2-60,H-140,120,80);
    c.fillStyle='#5a3a20'; c.fillRect(80,H-90,60,20); c.fillRect(W-140,H-90,60,20);
    c.fillStyle=l.color; c.globalAlpha=0.8;
    c.beginPath(); c.arc(W/2,80,12,0,Math.PI*2); c.fill();
    c.globalAlpha=1;
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText(l.name+' ('+l.temp+')',W/2,H-20);
    c.font='11px sans-serif'; c.fillStyle='#c4956a';
    c.fillText('&#xBC1D;&#xAE30;: '+l.intensity+'% | &#xC0C9;&#xC628;&#xB3C4;: '+l.temp,W/2,H-4);
    var info=document.getElementById('v12-light-info');
    if(info) info.innerHTML=l.desc+' | &#xD0C0;&#xC785;: '+l.type;
  }
  function open(){document.getElementById('v12-lighting').classList.add('active');v12SFX.play('feature_open12');renderTabs();draw();}
  function close(){document.getElementById('v12-lighting').classList.remove('active');}
  return {open:open,close:close,load:function(){}};
})();

// ── 8. Construction Cost Calculator (건축 비용 계산기 Canvas Pie+Bar) ──
var v12Cost = (function(){
  var types=[
    {name:'&#xD55C;&#xC625; (10&#xD3C9;)',mat:4500,labor:3500,misc:1000,months:8},
    {name:'&#xAE30;&#xC640;&#xC9D1; (15&#xD3C9;)',mat:5200,labor:4000,misc:1200,months:10},
    {name:'&#xCD08;&#xAC00;&#xC9D1; (8&#xD3C9;)',mat:2000,labor:1500,misc:500,months:4},
    {name:'&#xC11C;&#xC6D0; (20&#xD3C9;)',mat:7000,labor:5500,misc:1500,months:14},
    {name:'&#xD604;&#xB300;&#xC8FC;&#xD0DD; (25&#xD3C9;)',mat:8000,labor:6000,misc:2000,months:12},
    {name:'&#xC815;&#xC790; (5&#xD3C9;)',mat:1500,labor:1200,misc:400,months:3}
  ];
  var currentType=0;
  function renderTabs(){
    var el=document.getElementById('v12-cost-tabs'); if(!el) return;
    el.innerHTML=types.map(function(t,i){return '<button class="v12-tab'+(currentType===i?' active':'')+'" data-idx="'+i+'">'+t.name+'</button>';}).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){btn.onclick=function(){currentType=parseInt(btn.dataset.idx);renderTabs();draw();v12SFX.play('cost_calc');};});
  }
  function draw(){
    var cv=document.getElementById('v12-cost-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, t=types[currentType];
    var total=t.mat+t.labor+t.misc;
    c.clearRect(0,0,W,H);
    c.fillStyle='#0f0a05'; c.fillRect(0,0,W,H);
    var cx=150,cy=H/2,R=100;
    var slices=[{label:'&#xC790;&#xC7AC;&#xBE44;',val:t.mat,color:'#c4956a'},{label:'&#xC778;&#xAC74;&#xBE44;',val:t.labor,color:'#4a7c59'},{label:'&#xAE30;&#xD0C0;',val:t.misc,color:'#45b7d1'}];
    var startA=-Math.PI/2;
    slices.forEach(function(s){
      var angle=(s.val/total)*Math.PI*2;
      c.beginPath();c.moveTo(cx,cy);c.arc(cx,cy,R,startA,startA+angle);c.closePath();
      c.fillStyle=s.color; c.fill();
      c.strokeStyle='#0f0a05'; c.lineWidth=2; c.stroke();
      var midA=startA+angle/2;
      c.fillStyle='#f5deb3'; c.font='11px sans-serif'; c.textAlign='center';
      c.fillText(s.label,cx+Math.cos(midA)*(R+20),cy+Math.sin(midA)*(R+20));
      c.fillText(Math.round(s.val/total*100)+'%',cx+Math.cos(midA)*(R-30),cy+Math.sin(midA)*(R-30)+4);
      startA+=angle;
    });
    var barX=310,barW=200,barH=30,barGap=50;
    slices.forEach(function(s,i){
      var y=60+i*barGap;
      c.fillStyle='rgba(255,255,255,.06)'; c.fillRect(barX,y,barW,barH);
      var w=barW*(s.val/total);
      c.fillStyle=s.color; c.fillRect(barX,y,w,barH);
      c.strokeStyle='rgba(196,149,106,.2)'; c.lineWidth=1; c.strokeRect(barX,y,barW,barH);
      c.fillStyle='#f5deb3'; c.font='12px sans-serif'; c.textAlign='left';
      c.fillText(s.label+': '+s.val+'&#xB9CC;&#xC6D0;',barX,y-6);
      c.fillStyle='#fff'; c.textAlign='center'; c.fillText(s.val+'&#xB9CC;',barX+w/2,y+barH/2+4);
    });
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText(t.name,W/2,H-50);
    c.font='13px sans-serif'; c.fillStyle='#c4956a';
    c.fillText('&#xCD1D; &#xBE44;&#xC6A9;: '+total+'&#xB9CC;&#xC6D0; | &#xACF5;&#xAE30;: '+t.months+'&#xAC1C;&#xC6D4;',W/2,H-30);
    c.font='11px sans-serif';
    c.fillText('&#xD3C9;&#xB2F9; '+Math.round(total/parseInt(t.name.match(/\d+/)[0]))+'&#xB9CC;&#xC6D0;',W/2,H-12);
    var detail=document.getElementById('v12-cost-detail');
    if(detail) detail.innerHTML='&#xC790;&#xC7AC;&#xBE44; '+Math.round(t.mat/total*100)+'% + &#xC778;&#xAC74;&#xBE44; '+Math.round(t.labor/total*100)+'% + &#xAE30;&#xD0C0; '+Math.round(t.misc/total*100)+'% = '+total+'&#xB9CC;&#xC6D0;';
  }
  function open(){document.getElementById('v12-cost').classList.add('active');v12SFX.play('feature_open12');renderTabs();draw();}
  function close(){document.getElementById('v12-cost').classList.remove('active');}
  return {open:open,close:close,load:function(){}};
})();

// ── 9. Hanok Structure Puzzle (한옥 구조 퍼즐 3종 Canvas) ──
var v12Puzzle = (function(){
  var KEY='hb_v12_puzzle';
  var puzzles=[
    {name:'&#xAE30;&#xB2E8;+&#xAE30;&#xB465; &#xC870;&#xB9BD;',cols:4,rows:3,
     pieces:['&#x1F9F1;','&#x1F9F1;','&#x1F9F1;','&#x1F9F1;','','&#x1FAB5;','&#x1FAB5;','','','','&#x1F3E0;',''],
     answer:['&#x1F9F1;','&#x1F9F1;','&#x1F9F1;','&#x1F9F1;','&#x1FAB5;','&#x1FAB5;','&#x1FAB5;','&#x1FAB5;','','&#x1F3E0;','&#x1F3E0;',''],
     hint:'1&#xD589;: &#xAE30;&#xB2E8;(&#xB3CC;), 2&#xD589;: &#xAE30;&#xB465;(&#xB098;&#xBB34;), 3&#xD589;: &#xC9C0;&#xBD95;'},
    {name:'&#xC9C0;&#xBD95; &#xAD6C;&#xC870;',cols:5,rows:2,
     pieces:['','&#x2B50;','','&#x2B50;','','&#x1F3A8;','','&#x1F3A8;','','&#x1F3A8;'],
     answer:['&#x1F3A8;','&#x1F3A8;','&#x2B50;','&#x1F3A8;','&#x1F3A8;','&#x2B50;','&#x2B50;','&#x2B50;','&#x2B50;','&#x2B50;'],
     hint:'&#xC704;: &#xAE30;&#xC640;(&#x1F3A8;)+&#xC6A9;&#xB9C8;&#xB8E8;(&#x2B50;), &#xC544;&#xB798;: &#xC11C;&#xAE4C;&#xB798;(&#x2B50;)'},
    {name:'&#xC804;&#xCCB4; &#xAD6C;&#xC870;',cols:3,rows:4,
     pieces:['','&#x26E9;','','','','','&#x1FAB5;','','&#x1FAB5;','&#x1F9F1;','','&#x1F9F1;'],
     answer:['&#x26E9;','&#x26E9;','&#x26E9;','&#x1FAB5;','&#x1FAB5;','&#x1FAB5;','&#x1FAB5;','&#x1FAB5;','&#x1FAB5;','&#x1F9F1;','&#x1F9F1;','&#x1F9F1;'],
     hint:'&#xC704;&#xBD80;&#xD130;: &#xC9C0;&#xBD95;(&#x26E9;) &#x2192; &#xAE30;&#xB465;+&#xBCBD;&#xCCB4;(&#x1FAB5;) &#x2192; &#xAE30;&#xB2E8;(&#x1F9F1;)'}
  ];
  var currentPuzzle=0;
  var state=JSON.parse(localStorage.getItem(KEY)||'[null,null,null]');
  var userGrid=null;
  function save(){localStorage.setItem(KEY,JSON.stringify(state));}
  function renderTabs(){
    var el=document.getElementById('v12-puzzle-tabs'); if(!el) return;
    el.innerHTML=puzzles.map(function(p,i){return '<button class="v12-tab'+(currentPuzzle===i?' active':'')+'" data-idx="'+i+'">'+(state[i]?'&#x2705; ':'')+p.name+'</button>';}).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){btn.onclick=function(){currentPuzzle=parseInt(btn.dataset.idx);renderTabs();render();};});
  }
  function render(){
    var el=document.getElementById('v12-puzzle-area'); if(!el) return;
    var p=puzzles[currentPuzzle];
    if(!userGrid) userGrid=p.pieces.slice();
    var uniquePieces=[];
    p.answer.forEach(function(a){if(a&&uniquePieces.indexOf(a)<0)uniquePieces.push(a);});
    var html='<div style="margin-bottom:12px"><strong style="color:#f5deb3">'+p.name+'</strong><br><span style="color:#c4956a;font-size:12px">'+p.hint+'</span></div>';
    html+='<div style="display:inline-grid;grid-template-columns:repeat('+p.cols+',60px);gap:4px;justify-content:center">';
    for(var i=0;i<p.cols*p.rows;i++){
      var cls='v12-puzzle-cell';
      if(userGrid[i]&&userGrid[i]===p.answer[i]) cls+=' correct';
      else if(userGrid[i]) cls+=' placed';
      html+='<div class="'+cls+'" data-idx="'+i+'">'+(userGrid[i]||'')+'</div>';
    }
    html+='</div>';
    html+='<div style="margin-top:12px">';
    uniquePieces.forEach(function(pc){ html+='<button class="v12-btn-sm" style="margin:4px" data-piece="'+pc+'">'+pc+'</button>'; });
    html+=' <button class="v12-btn-outline" style="margin:4px" id="v12-puzzle-check">&#xD655;&#xC778;</button>';
    html+=' <button class="v12-btn-outline" style="margin:4px" id="v12-puzzle-reset">&#xCD08;&#xAE30;&#xD654;</button>';
    html+='</div>';
    el.innerHTML=html;
    var selectedPiece='';
    el.querySelectorAll('.v12-btn-sm[data-piece]').forEach(function(btn){
      btn.onclick=function(){selectedPiece=btn.dataset.piece;v12SFX.play('puzzle_place');};
    });
    el.querySelectorAll('.v12-puzzle-cell').forEach(function(cell){
      cell.onclick=function(){
        var idx=parseInt(cell.dataset.idx);
        if(selectedPiece){userGrid[idx]=selectedPiece;v12SFX.play('puzzle_place');}
        else{userGrid[idx]='';} render();
      };
    });
    var checkBtn=document.getElementById('v12-puzzle-check');
    if(checkBtn) checkBtn.onclick=function(){
      var correct=true;
      for(var i=0;i<p.answer.length;i++){if(userGrid[i]!==p.answer[i]){correct=false;break;}}
      var status=document.getElementById('v12-puzzle-status');
      if(correct){state[currentPuzzle]=true;save();v12SFX.play('puzzle_correct');if(status)status.innerHTML='<span style="color:#4a7c59">&#x2705; &#xC815;&#xB2F5;! &#xD55C;&#xC625; &#xAD6C;&#xC870;&#xB97C; &#xC644;&#xBCBD;&#xD558;&#xAC8C; &#xC870;&#xB9BD;&#xD588;&#xC5B4;&#xC694;!</span>'; renderTabs();}
      else{v12SFX.play('puzzle_wrong');if(status)status.innerHTML='<span style="color:#e74c3c">&#x274C; &#xB2E4;&#xC2DC; &#xC2DC;&#xB3C4;&#xD574;&#xBCF4;&#xC138;&#xC694;. &#xD78C;&#xD2B8;&#xB97C; &#xCC38;&#xACE0;&#xD558;&#xC138;&#xC694;!</span>';}
    };
    var resetBtn=document.getElementById('v12-puzzle-reset');
    if(resetBtn) resetBtn.onclick=function(){userGrid=puzzles[currentPuzzle].pieces.slice();render();};
  }
  function open(){document.getElementById('v12-puzzle').classList.add('active');v12SFX.play('feature_open12');userGrid=puzzles[currentPuzzle].pieces.slice();renderTabs();render();}
  function close(){document.getElementById('v12-puzzle').classList.remove('active');userGrid=null;}
  return {open:open,close:close,state:state,load:function(){}};
})();

// ── 10. Architecture Timeline (한국 건축사 타임라인 12시대 Canvas) ──
var v12Timeline = (function(){
  var KEY='hb_v12_timeline';
  var eras=[
    {era:'&#xC120;&#xC0AC;',period:'BC 8000~',landmark:'&#xAD00;&#xCD08;&#xB9AC; &#xC6C0;&#xC9D1;',desc:'&#xB545;&#xC744; &#xD30C;&#xACE0; &#xAE30;&#xB465;&#xC744; &#xC138;&#xC6B4; &#xCD08;&#xAE30; &#xC8FC;&#xAC70;'},
    {era:'&#xACE0;&#xC870;&#xC120;',period:'BC 2333~',landmark:'&#xBE44;&#xD30C;&#xD615; &#xC8FC;&#xAC70;',desc:'&#xBC18;&#xC9C0;&#xD558; &#xC6C0;&#xC9D1;&#xC5D0;&#xC11C; &#xC9C0;&#xC0C1; &#xAC74;&#xBB3C;&#xB85C; &#xBC1C;&#xC804;'},
    {era:'&#xC0BC;&#xAD6D;',period:'BC 57~',landmark:'&#xACBD;&#xC8FC; &#xCCA8;&#xC131;&#xB300;',desc:'&#xC11D;&#xC870;+&#xBAA9;&#xC870; &#xAC74;&#xCD95;&#xC758; &#xBC1C;&#xC804;. &#xB3C4;&#xC2DC; &#xACC4;&#xD68D; &#xC2DC;&#xC791;'},
    {era:'&#xD1B5;&#xC77C;&#xC2E0;&#xB77C;',period:'668~',landmark:'&#xBD88;&#xAD6D;&#xC0AC;/&#xC11D;&#xAD74;&#xC554;',desc:'&#xBD88;&#xAD50; &#xAC74;&#xCD95;&#xC758; &#xADF8;&#xCE58;. &#xC11D;&#xC870; &#xAE30;&#xC220; &#xC815;&#xC810;'},
    {era:'&#xBC1C;&#xD574;',period:'698~',landmark:'&#xC0C1;&#xACBD; &#xC720;&#xC801;',desc:'&#xACE0;&#xAD6C;&#xB824; &#xACC4;&#xC2B9;&#xC758; &#xB300;&#xADDC;&#xBAA8; &#xB3C4;&#xC2DC; &#xAC74;&#xCD95;'},
    {era:'&#xACE0;&#xB824;',period:'918~',landmark:'&#xBD80;&#xC11D;&#xC0AC; &#xBB34;&#xB7C9;&#xC218;&#xC804;',desc:'&#xBAA9;&#xC870; &#xAC74;&#xCD95;&#xC758; &#xAC78;&#xC791;. &#xBC30;&#xD758;&#xB9BC; &#xAE30;&#xBC95; &#xBC1C;&#xC804;'},
    {era:'&#xC870;&#xC120; &#xCD08;',period:'1392~',landmark:'&#xACBD;&#xBCF5;&#xAD81;',desc:'&#xC720;&#xAD50; &#xAC74;&#xCD95;. &#xAD81;&#xAD90;+&#xC11C;&#xC6D0;+&#xD55C;&#xC625; &#xCCB4;&#xACC4; &#xC815;&#xB9BD;'},
    {era:'&#xC870;&#xC120; &#xC911;',period:'1600~',landmark:'&#xC218;&#xC6D0;&#xD654;&#xC131;',desc:'&#xACFC;&#xD559;&#xC801; &#xAC74;&#xCD95;. &#xAC70;&#xC911;&#xAE30; &#xBC1C;&#xBA85;. &#xC131;&#xBCBD; &#xAC74;&#xCD95;'},
    {era:'&#xC870;&#xC120; &#xD6C4;',period:'1800~',landmark:'&#xCC3D;&#xB355;&#xAD81; &#xD6C4;&#xC6D0;',desc:'&#xC790;&#xC5F0;&#xCE5C;&#xD654; &#xAC74;&#xCD95;&#xC758; &#xADF8;&#xCE58;. &#xC815;&#xC6D0; &#xAC74;&#xCD95;'},
    {era:'&#xADFC;&#xB300;',period:'1900~',landmark:'&#xBA85;&#xB3D9;&#xC131;&#xB2F9;',desc:'&#xC11C;&#xC591; &#xAC74;&#xCD95; &#xB3C4;&#xC785;. &#xBCBD;&#xB3CC;+&#xCCCA;&#xACE8;+&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;'},
    {era:'&#xD604;&#xB300;',period:'1970~',landmark:'&#xC62C;&#xB9BC;&#xD53D; &#xACBD;&#xAE30;&#xC7A5;',desc:'&#xACE0;&#xCE35; &#xAC74;&#xBB3C;. &#xCCA0;&#xACE8;+&#xCEE4;&#xD2BC;&#xC6D4;. &#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC758; &#xBE44;&#xC57D;'},
    {era:'&#xBBF8;&#xB798;',period:'2020~',landmark:'DDP/&#xC138;&#xC885;&#xC2DC;',desc:'&#xCE5C;&#xD658;&#xACBD;/&#xC2A4;&#xB9C8;&#xD2B8; &#xAC74;&#xCD95;. &#xD55C;&#xC625;&#xC758; &#xD604;&#xB300;&#xD654;'}
  ];
  var viewed=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(viewed));}
  function draw(){
    var cv=document.getElementById('v12-tl-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, n=eras.length;
    c.clearRect(0,0,W,H);
    c.fillStyle='#0f0a05'; c.fillRect(0,0,W,H);
    var lineY=H/2, startX=40, endX=W-40, segW=(endX-startX)/(n-1);
    c.strokeStyle='#c4956a'; c.lineWidth=3;
    c.beginPath();c.moveTo(startX,lineY);c.lineTo(endX,lineY);c.stroke();
    eras.forEach(function(era,i){
      var x=startX+i*segW, isViewed=viewed.indexOf(i)>=0;
      c.beginPath();c.arc(x,lineY,8,0,Math.PI*2);
      c.fillStyle=isViewed?'#4a7c59':'#c4956a'; c.fill();
      c.strokeStyle='#f5deb3'; c.lineWidth=2; c.stroke();
      c.fillStyle='#f5deb3'; c.font='bold 10px sans-serif'; c.textAlign='center';
      var above=i%2===0;
      c.fillText(era.era,x,above?lineY-50:lineY+30);
      c.fillStyle='#c4956a'; c.font='9px sans-serif';
      c.fillText(era.period,x,above?lineY-38:lineY+42);
      c.fillText(era.landmark,x,above?lineY-26:lineY+54);
      c.beginPath();c.moveTo(x,lineY+(above?-14:14));c.lineTo(x,lineY+(above?-22:22));c.strokeStyle='rgba(196,149,106,.4)';c.lineWidth=1;c.stroke();
    });
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText('&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC0AC; &#xD0C0;&#xC784;&#xB77C;&#xC778; (BC 8000 ~ &#xBBF8;&#xB798;)',W/2,H-10);
    cv.onclick=function(e){
      var rect=cv.getBoundingClientRect(),sx=cv.width/rect.width;
      var mx=(e.clientX-rect.left)*sx;
      eras.forEach(function(era,i){
        var x=startX+i*segW;
        if(Math.abs(mx-x)<segW/2){
          if(viewed.indexOf(i)<0){viewed.push(i);save();}
          v12SFX.play('timeline_view');
          var detail=document.getElementById('v12-tl-detail');
          if(detail) detail.innerHTML='<strong style="color:#f5deb3">'+era.era+' ('+era.period+')</strong> - '+era.landmark+'<br>'+era.desc;
          draw();
        }
      });
    };
  }
  function open(){document.getElementById('v12-timeline').classList.add('active');v12SFX.play('feature_open12');draw();}
  function close(){document.getElementById('v12-timeline').classList.remove('active');}
  return {open:open,close:close,viewed:viewed,load:function(){}};
})();

// ── 11. Certification System (건축 인증 6단계) ──
var v12Cert = (function(){
  var KEY='hb_v12_cert';
  var certs=[
    {id:'apprentice',name:'&#xAC74;&#xCD95; &#xACAC;&#xC2B5;&#xC0DD;',icon:'&#x1F477;',color:'#8B7355',desc:'&#xCCAB; &#xAC74;&#xCD95; &#xC644;&#xC131;',check:function(){return parseInt(localStorage.getItem('hb_totalBuilds')||'0')>=1;}},
    {id:'craftsman',name:'&#xAC74;&#xCD95; &#xAE30;&#xB2A5;&#xC0AC;',icon:'&#x1F528;',color:'#C0C0C0',desc:'3&#xC885; &#xC774;&#xC0C1; &#xAC74;&#xCD95; &#xC644;&#xC131;',check:function(){var d=JSON.parse(localStorage.getItem('hb_progress')||'{}');var c=0;['hanok','modern','choga','giwajip','seowon','jeongja'].forEach(function(m){if(d[m]&&d[m].completed)c++;});return c>=3;}},
    {id:'architect',name:'&#xAC74;&#xCD95;&#xC0AC;',icon:'&#x1F4D0;',color:'#FFD700',desc:'&#xD37C;&#xC990; 2&#xAC1C; &#xC774;&#xC0C1; &#xD574;&#xACB0;',check:function(){return v12Puzzle.state.filter(function(s){return s;}).length>=2;}},
    {id:'master',name:'&#xB300;&#xBAA9;&#xC7A5;',icon:'&#x1F3C5;',color:'#FF8C00',desc:'&#xD0C0;&#xC784;&#xB77C;&#xC778; 8&#xAC1C; &#xC774;&#xC0C1; &#xD0D0;&#xC0AC;',check:function(){return v12Timeline.viewed.length>=8;}},
    {id:'professor',name:'&#xAC74;&#xCD95; &#xAD50;&#xC218;',icon:'&#x1F393;',color:'#4169E1',desc:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4; 5&#xAC1C;+&#xC815;&#xC6D0; 10&#xAC1C; &#xBC30;&#xCE58;',check:function(){var ic=v12Interior.placed.length>=5;var gc=v12Garden.grid.filter(function(g){return g;}).length>=10;return ic&&gc;}},
    {id:'grandmaster',name:'&#xAC74;&#xCD95; &#xB300;&#xC2A4;&#xC2B9;',icon:'&#x1F451;',color:'#FF4500',desc:'&#xBAA8;&#xB4E0; &#xC778;&#xC99D; &#xD68D;&#xB4DD;',check:function(){var earned=JSON.parse(localStorage.getItem(KEY)||'[]');return earned.length>=5;}}
  ];
  var earned=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(earned));}
  function check(){
    var nw=false;
    certs.forEach(function(ct){
      if(earned.indexOf(ct.id)<0 && ct.check()){earned.push(ct.id);nw=true;v12SFX.play('cert_earn');}
    });
    if(nw) save();
  }
  function render(){
    var el=document.getElementById('v12-cert-list'); if(!el) return;
    el.innerHTML=certs.map(function(ct){
      var e=earned.indexOf(ct.id)>=0;
      return '<div class="v12-cert-card '+(e?'earned':'locked')+'"><div class="cert-icon">'+ct.icon+'</div><h4>'+ct.name+'</h4><p>'+ct.desc+'</p><div class="cert-badge" style="background:'+(e?ct.color:'#555')+';color:'+(e?'#fff':'#999')+'">'+(e?'&#xD68D;&#xB4DD; &#xC644;&#xB8CC;':'&#xBBF8;&#xD68D;&#xB4DD;')+'</div></div>';
    }).join('');
    drawProgress();
  }
  function drawProgress(){
    var cv=document.getElementById('v12-cert-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='#0f0a05'; c.fillRect(0,0,W,H);
    var barH=28, startY=30, gap=42;
    certs.forEach(function(ct,i){
      var e=earned.indexOf(ct.id)>=0, y=startY+i*gap;
      c.fillStyle='rgba(255,255,255,.06)'; c.fillRect(100,y,W-140,barH);
      if(e){c.fillStyle=ct.color; c.fillRect(100,y,W-140,barH);}
      c.strokeStyle='rgba(196,149,106,.2)'; c.lineWidth=1; c.strokeRect(100,y,W-140,barH);
      c.fillStyle='#f5deb3'; c.font='12px sans-serif'; c.textAlign='right';
      c.fillText(ct.icon+' '+ct.name,92,y+barH/2+4);
      c.fillStyle=e?'#fff':'#666'; c.textAlign='center';
      c.fillText(e?'&#x2713; &#xD68D;&#xB4DD;':'&#xBBF8;&#xD68D;&#xB4DD;',W/2+30,y+barH/2+4);
    });
    c.fillStyle='#f5deb3'; c.font='bold 13px sans-serif'; c.textAlign='center';
    c.fillText('&#xC778;&#xC99D; &#xD604;&#xD669;: '+earned.length+'/'+certs.length,W/2,H-10);
  }
  function open(){document.getElementById('v12-cert').classList.add('active');v12SFX.play('feature_open12');check();render();}
  function close(){document.getElementById('v12-cert').classList.remove('active');}
  return {open:open,close:close,earned:earned,check:check,load:function(){}};
})();

// ── 12. Quiz v12 (+15 questions, 105→120) ──
var v12Quiz = (function(){
  var questions=[
    {q:'&#xD55C;&#xC625; &#xC778;&#xD14C;&#xB9AC;&#xC5B4;&#xC5D0;&#xC11C; &#xB9C8;&#xB8E8;&#xC758; &#xC5ED;&#xD560;&#xC740;?',a:['&#xC5EC;&#xB984; &#xC2DC;&#xC6D0;&#xD55C; &#xBC14;&#xB2E5;','&#xACBD;&#xBE44; &#xC2DC;&#xC2A4;&#xD15C;','&#xCC3D;&#xACE0; &#xACF5;&#xAC04;','&#xC870;&#xBA85; &#xC7A5;&#xCE58;'],c:0},
    {q:'&#xC804;&#xD1B5; &#xC815;&#xC6D0;&#xC5D0;&#xC11C; &#xC5F0;&#xBBBB;&#xC758; &#xC5ED;&#xD560;&#xC740;?',a:['&#xD48D;&#xC218;&#xC9C0;&#xB9AC;&#xC5D0;&#xC11C; &#xC7AC;&#xBB3C;&#xC744; &#xC0C1;&#xC9D5;','&#xBB3C;&#xACE0;&#xAE30; &#xC591;&#xC2DD;','&#xB86D;&#xB2F9; &#xC7A5;&#xC2DD;','&#xC758;&#xB840;&#xC6A9;'],c:0},
    {q:'&#xD55C;&#xC625; &#xD3C9;&#xBA74;&#xB3C4;&#xC5D0;&#xC11C; &#xC548;&#xCC44;&#xB294; &#xC5B4;&#xB514;&#xC5D0; &#xC704;&#xCE58;&#xD558;&#xB098;?',a:['&#xAC74;&#xBB3C; &#xC548;&#xCABD; &#xC911;&#xC2EC;','&#xBC14;&#xAE65;&#xCABD;','&#xC9C0;&#xD558;','&#xC9C0;&#xBD95; &#xC704;'],c:0},
    {q:'&#xC11D;&#xB4F1;&#xC758; &#xBE5B;&#xC740; &#xC5B4;&#xB5A4; &#xC0C9;&#xC628;&#xB3C4;&#xC778;&#xAC00;?',a:['&#xB530;&#xB73B;&#xD55C; &#xC624;&#xB80C;&#xC9C0; (2200K)','&#xCC28;&#xAC00;&#xC6B4; &#xD30C;&#xB780;&#xC0C9;','&#xBE68;&#xAC04;&#xC0C9;','&#xBCF4;&#xB77C;&#xC0C9;'],c:0},
    {q:'&#xD55C;&#xC625; &#xAC74;&#xCD95; &#xBE44;&#xC6A9;&#xC5D0;&#xC11C; &#xAC00;&#xC7A5; &#xD070; &#xBE44;&#xC911;&#xC740;?',a:['&#xC790;&#xC7AC;&#xBE44;','&#xC778;&#xAC74;&#xBE44;','&#xC124;&#xACC4;&#xBE44;','&#xAD00;&#xB9AC;&#xBE44;'],c:0},
    {q:'&#xD55C;&#xC625; &#xAD6C;&#xC870;&#xC5D0;&#xC11C; &#xAE30;&#xB2E8; &#xC704;&#xC5D0; &#xC624;&#xB294; &#xAC83;&#xC740;?',a:['&#xAE30;&#xB465;','&#xC9C0;&#xBD95;','&#xCC3D;&#xD638;','&#xBC14;&#xB2E5;'],c:0},
    {q:'&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC0AC;&#xC5D0;&#xC11C; &#xCD5C;&#xCD08;&#xC758; &#xC8FC;&#xAC70;&#xD615;&#xD0DC;&#xB294;?',a:['&#xC6C0;&#xC9D1;','&#xD55C;&#xC625;','&#xC11C;&#xC6D0;','&#xAD81;&#xAD90;'],c:0},
    {q:'&#xBD88;&#xAD6D;&#xC0AC;&#xC640; &#xC11D;&#xAD74;&#xC554;&#xC774; &#xC9C0;&#xC5B4;&#xC9C4; &#xC2DC;&#xB300;&#xB294;?',a:['&#xD1B5;&#xC77C;&#xC2E0;&#xB77C;','&#xACE0;&#xB824;','&#xC870;&#xC120;','&#xBC31;&#xC81C;'],c:0},
    {q:'&#xACBD;&#xBCF5;&#xAD81;&#xC774; &#xC138;&#xC6CC;&#xC9C4; &#xC2DC;&#xB300;&#xB294;?',a:['&#xC870;&#xC120; &#xCD08;&#xAE30;','&#xACE0;&#xB824;','&#xD1B5;&#xC77C;&#xC2E0;&#xB77C;','&#xADFC;&#xB300;'],c:0},
    {q:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4;&#xC5D0;&#xC11C; &#xB7EC;&#xADF8;&#xC758; &#xC8FC;&#xC694; &#xAE30;&#xB2A5;&#xC740;?',a:['&#xBC29;&#xC74C;+&#xBCF4;&#xC628;+&#xBBF8;&#xAD00;','&#xC870;&#xBA85;','&#xD658;&#xAE30;','&#xBC29;&#xBC94;'],c:0},
    {q:'&#xC815;&#xC6D0; &#xC870;&#xACBD;&#xC5D0;&#xC11C; &#xB3CC;&#xB2E4;&#xB9AC;&#xC758; &#xC5ED;&#xD560;&#xC740;?',a:['&#xC5F0;&#xBBBB; &#xC704;&#xB97C; &#xAC74;&#xB108;&#xB294; &#xD1B5;&#xB85C;','&#xC7A5;&#xC2DD;&#xC6A9;','&#xBC29;&#xD48D; &#xC5ED;&#xD560;','&#xBC30;&#xC218; &#xC2DC;&#xC2A4;&#xD15C;'],c:0},
    {q:'&#xC870;&#xBA85; &#xC124;&#xACC4;&#xC5D0;&#xC11C; LED&#xC758; &#xC7A5;&#xC810;&#xC740;?',a:['&#xB192;&#xC740; &#xD6A8;&#xC728;+&#xAE34; &#xC218;&#xBA85;','&#xB530;&#xB73B;&#xD55C; &#xBE5B;','&#xC800;&#xB834;&#xD55C; &#xAC00;&#xACA9;','&#xC790;&#xC5F0;&#xC2A4;&#xB7EC;&#xC6B4; &#xC0C9;'],c:0},
    {q:'&#xAC74;&#xCD95; &#xC778;&#xC99D;&#xC5D0;&#xC11C; &#xB300;&#xBAA9;&#xC7A5;&#xC758; &#xC758;&#xBBF8;&#xB294;?',a:['&#xBAA9;&#xC870; &#xAC74;&#xCD95;&#xC758; &#xCD5C;&#xACE0; &#xC7A5;&#xC778;','&#xC11D;&#xC870; &#xC804;&#xBB38;&#xAC00;','&#xC124;&#xACC4; &#xAD50;&#xC218;','&#xD604;&#xB300; &#xAC74;&#xCD95;&#xAC00;'],c:0},
    {q:'DDP&#xB97C; &#xC124;&#xACC4;&#xD55C; &#xAC74;&#xCD95;&#xAC00;&#xB294;?',a:['&#xC790;&#xD558; &#xD558;&#xB514;&#xB4DC;','&#xAE40;&#xC218;&#xADFC;','&#xC2B9;&#xD6A8;&#xC0C1;','&#xBC15;&#xAE38;&#xB8E1;'],c:0},
    {q:'v12&#xC5D0;&#xC11C; &#xCD94;&#xAC00;&#xB41C; &#xD37C;&#xC990; &#xC885;&#xB958;&#xB294; &#xBA87; &#xAC00;&#xC9C0;?',a:['3&#xAC00;&#xC9C0;','2&#xAC00;&#xC9C0;','5&#xAC00;&#xC9C0;','4&#xAC00;&#xC9C0;'],c:0}
  ];
  function inject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ questions.forEach(function(q){ var dup=window.quizQuestions.some(function(eq){return eq.q===q.q;}); if(!dup) window.quizQuestions.push(q); }); } }
  return {inject:inject,count:questions.length};
})();

// ── 13. Achievement System v12 (+12, 110→122) ──
var v12Achieve = (function(){
  var KEY='hb_achievements';
  var defs=[
    {id:'interior_first',name:'&#xCCAB; &#xAC00;&#xAD6C; &#xBC30;&#xCE58;',desc:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4;&#xC5D0; &#xCCAB; &#xAC00;&#xAD6C; &#xBC30;&#xCE58;',icon:'&#x1F6CB;&#xFE0F;',check:function(){return v12Interior.placed.length>=1;}},
    {id:'interior_master',name:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xB2EC;&#xC778;',desc:'10&#xAC1C; &#xC774;&#xC0C1; &#xAC00;&#xAD6C; &#xBC30;&#xCE58;',icon:'&#x1F3E0;',check:function(){return v12Interior.placed.length>=10;}},
    {id:'garden_first',name:'&#xCCAB; &#xC870;&#xACBD;',desc:'&#xC815;&#xC6D0;&#xC5D0; &#xCCAB; &#xC694;&#xC18C; &#xBC30;&#xCE58;',icon:'&#x1F33F;',check:function(){return v12Garden.grid.filter(function(g){return g;}).length>=1;}},
    {id:'garden_master',name:'&#xC870;&#xACBD; &#xB9C8;&#xC2A4;&#xD130;',desc:'&#xC815;&#xC6D0; 30&#xAC1C; &#xC774;&#xC0C1; &#xBC30;&#xCE58;',icon:'&#x1F333;',check:function(){return v12Garden.grid.filter(function(g){return g;}).length>=30;}},
    {id:'blueprint_viewer',name:'&#xB3C4;&#xBA74; &#xBD84;&#xC11D;&#xAC00;',desc:'&#xC124;&#xACC4; &#xB3C4;&#xBA74; &#xD655;&#xC778;',icon:'&#x1F4D0;',check:function(){return true;}},
    {id:'light_designer',name:'&#xC870;&#xBA85; &#xB514;&#xC790;&#xC774;&#xB108;',desc:'&#xC870;&#xBA85; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130; &#xC0AC;&#xC6A9;',icon:'&#x1F4A1;',check:function(){return true;}},
    {id:'cost_analyst',name:'&#xBE44;&#xC6A9; &#xBD84;&#xC11D;&#xAC00;',desc:'&#xBE44;&#xC6A9; &#xACC4;&#xC0B0;&#xAE30; &#xC0AC;&#xC6A9;',icon:'&#x1F4B0;',check:function(){return true;}},
    {id:'puzzle_solver',name:'&#xD37C;&#xC990; &#xD574;&#xACB0;&#xC0AC;',desc:'&#xD37C;&#xC990; 1&#xAC1C; &#xC774;&#xC0C1; &#xD574;&#xACB0;',icon:'&#x1F9E9;',check:function(){return v12Puzzle.state.filter(function(s){return s;}).length>=1;}},
    {id:'puzzle_master',name:'&#xD37C;&#xC990; &#xB9C8;&#xC2A4;&#xD130;',desc:'&#xD37C;&#xC990; &#xC804;&#xBD80; &#xD574;&#xACB0;',icon:'&#x1F3C6;',check:function(){return v12Puzzle.state.filter(function(s){return s;}).length>=3;}},
    {id:'history_explorer',name:'&#xAC74;&#xCD95;&#xC0AC; &#xD0D0;&#xD5D8;&#xAC00;',desc:'&#xD0C0;&#xC784;&#xB77C;&#xC778; 6&#xAC1C; &#xC774;&#xC0C1; &#xD0D0;&#xC0AC;',icon:'&#x1F3DB;&#xFE0F;',check:function(){return v12Timeline.viewed.length>=6;}},
    {id:'certified',name:'&#xC778;&#xC99D; &#xD68D;&#xB4DD;&#xC790;',desc:'&#xAC74;&#xCD95; &#xC778;&#xC99D; 3&#xAC1C; &#xC774;&#xC0C1;',icon:'&#x1F4DC;',check:function(){return v12Cert.earned.length>=3;}},
    {id:'v12_explorer',name:'v12 &#xD0D0;&#xD5D8;&#xAC00;',desc:'v12&#xC758; &#xBAA8;&#xB4E0; &#xAE30;&#xB2A5; &#xD0D0;&#xD5D8;',icon:'&#x1F31F;',check:function(){return v12Interior.placed.length>0&&v12Garden.grid.filter(function(g){return g;}).length>0&&v12Puzzle.state.filter(function(s){return s;}).length>0&&v12Timeline.viewed.length>0;}}
  ];
  var earned=JSON.parse(localStorage.getItem(KEY)||'[]');
  function check(){ var nw=false; defs.forEach(function(d){ if(earned.indexOf(d.id)<0&&d.check()){earned.push(d.id);nw=true;showToast(d);} }); if(nw)localStorage.setItem(KEY,JSON.stringify(earned)); }
  function showToast(d){ v12SFX.play('achieve_v12'); var t=document.getElementById('achToast'); if(!t) return; t.querySelector('.ach-icon').textContent=d.icon; t.querySelector('.ach-name').textContent=d.name; t.classList.add('show'); setTimeout(function(){t.classList.remove('show');},3000); }
  return {check:check,earned:earned};
})();

// ── 14. Bottom Navigation Bar (하단 스크롤 네비바 8종) ──
(function(){
  var items=[
    {icon:'&#x1F6CB;&#xFE0F;',label:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4;',fn:function(){v12Interior.open();}},
    {icon:'&#x1F33F;',label:'&#xC815;&#xC6D0;&#xC870;&#xACBD;',fn:function(){v12Garden.open();}},
    {icon:'&#x1F4D0;',label:'&#xC124;&#xACC4;&#xB3C4;&#xBA74;',fn:function(){v12Blueprint.open();}},
    {icon:'&#x1F4A1;',label:'&#xC870;&#xBA85;&#xC124;&#xACC4;',fn:function(){v12Lighting.open();}},
    {icon:'&#x1F4B0;',label:'&#xBE44;&#xC6A9;&#xACC4;&#xC0B0;',fn:function(){v12Cost.open();}},
    {icon:'&#x1F9E9;',label:'&#xAD6C;&#xC870;&#xD37C;&#xC990;',fn:function(){v12Puzzle.open();}},
    {icon:'&#x1F3DB;&#xFE0F;',label:'&#xAC74;&#xCD95;&#xC0AC;',fn:function(){v12Timeline.open();}},
    {icon:'&#x1F3C6;',label:'&#xC778;&#xC99D;',fn:function(){v12Cert.open();}}
  ];
  function inject(){
    var existing=document.querySelector('.v12-nav-bar');
    if(existing) existing.remove();
    var bar=document.createElement('div'); bar.className='v12-nav-bar';
    items.forEach(function(it){
      var btn=document.createElement('button'); btn.className='v12-nav-btn';
      btn.innerHTML=it.icon+' '+it.label;
      btn.onclick=it.fn; bar.appendChild(btn);
    });
    document.body.appendChild(bar);
    var v11fab=document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom='62px';
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded',inject);
})();

// ── 15. Keyboard Shortcuts v12 (+8) ──
(function(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.key.toUpperCase()){
      case 'I':e.preventDefault();v12Interior.open();break;
      case 'G':e.preventDefault();v12Garden.open();break;
      case 'D':e.preventDefault();v12Blueprint.open();break;
      case 'L':e.preventDefault();v12Lighting.open();break;
      case 'O':e.preventDefault();v12Cost.open();break;
      case 'X':e.preventDefault();v12Puzzle.open();break;
      case 'H':e.preventDefault();v12Timeline.open();break;
      case 'F':e.preventDefault();v12Cert.open();break;
    }
  });
})();

// ── 16. Panel Open/Close helpers ──
window.v12Close = function(panel){
  var map={interior:v12Interior,garden:v12Garden,blueprint:v12Blueprint,lighting:v12Lighting,cost:v12Cost,puzzle:v12Puzzle,timeline:v12Timeline,cert:v12Cert};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){ function tryInject(){if(typeof window.quizQuestions==='object'){v12Quiz.inject();return true;}return false;} if(!tryInject()){var ci=setInterval(function(){if(tryInject())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);} })();

// ── 18. Hook into main game completion ──
(function(){ function hookComplete(){var orig=window.showComplete;if(typeof orig!=='function')return false;if(window.__v12Hooked)return true;window.__v12Hooked=true;var prev=window.showComplete;window.showComplete=function(){prev.apply(this,arguments);v12Achieve.check();v12Cert.check();};return true;} if(!hookComplete()){var ci=setInterval(function(){if(hookComplete())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);} })();

// ── 19. Initial load + checks ──
(function(){
  v12Interior.load(); v12Garden.load(); v12Blueprint.load(); v12Lighting.load();
  v12Cost.load(); v12Puzzle.load(); v12Timeline.load(); v12Cert.load();
  setTimeout(function(){v12Achieve.check();v12Cert.check();},3500);
})();

// end v12 guard
}

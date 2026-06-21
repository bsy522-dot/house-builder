// =====================================================
// House Builder v12.0 Patch
// 인테리어디자인스튜디오12종Canvas+구조역학시각화기Canvas하중분석
// 건축비용견적시스템CanvasPie+Bar+조경정원플래너10x10Canvas12종
// 한옥인테리어갤러리12종+건축도면학습6종Canvas+건축안전진단10항목Canvas
// 건축타임캡슐CanvasTimeline+퀴즈+15(105→120)+업적+12(110→122)+SFX12종+키보드8종
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
    '.v12-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
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
    '.v12-floor-cell{width:44px;height:44px;border:1px solid rgba(196,149,106,.15);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .15s;background:rgba(255,255,255,.02)}',
    '.v12-floor-cell:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v12-floor-cell.placed{background:rgba(196,149,106,.12);border-color:rgba(196,149,106,.4)}',
    '.v12-slider-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}',
    '.v12-slider-row label{width:90px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0}',
    '.v12-slider-row input[type=range]{flex:1;accent-color:#c4956a}',
    '.v12-slider-row .val{width:50px;color:#c4956a;font-size:12px;flex-shrink:0;text-align:center}',
    '.v12-check-item{display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;margin-bottom:8px;cursor:pointer;transition:all .2s}',
    '.v12-check-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v12-check-item.checked{border-color:#4a7c59;background:rgba(74,124,89,.1)}',
    '.v12-check-item .chk{width:24px;height:24px;border-radius:50%;border:2px solid rgba(196,149,106,.4);display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;transition:all .2s}',
    '.v12-check-item.checked .chk{background:#4a7c59;border-color:#4a7c59;color:#fff}',
    '.v12-check-item .chk-info{flex:1}',
    '.v12-check-item .chk-info h4{color:#f5deb3;font-size:13px;margin:0 0 2px}',
    '.v12-check-item .chk-info p{color:#c4956a;font-size:11px;margin:0}',
    '.v12-gallery-card{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:12px;padding:16px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v12-gallery-card:hover{background:rgba(196,149,106,.15);border-color:#c4956a;transform:translateY(-2px)}',
    '.v12-gallery-card .room-icon{font-size:36px;margin-bottom:8px}',
    '.v12-gallery-card h4{color:#f5deb3;font-size:13px;margin:0 0 4px}',
    '.v12-gallery-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v12-gallery-card .room-detail{display:none;margin-top:10px;text-align:left;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v12-gallery-card.expanded .room-detail{display:block}',
    '@media(max-width:600px){.v12-box{margin:16px auto}.v12-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v12-floor-cell{width:34px;height:34px;font-size:14px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v12 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v12-panels';
  wrap.innerHTML =
    '<div id="v12-interior" class="v12-panel"><div class="v12-box"><h2>&#x1F6CB;&#xFE0F; &#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xB514;&#xC790;&#xC778; &#xC2A4;&#xD29C;&#xB514;&#xC624;</h2><p>12&#xC885; &#xAC00;&#xAD6C;&#xB97C; &#xBC30;&#xCE58;&#xD558;&#xC5EC; &#xC2E4;&#xB0B4; &#xACF5;&#xAC04;&#xC744; &#xAFB8;&#xBA70;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-int-tools"></div><div id="v12-int-grid" style="display:inline-grid;grid-template-columns:repeat(8,44px);gap:1px;margin:10px auto;justify-content:center"></div><div id="v12-int-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-int-save">&#xC800;&#xC7A5;</button> <button class="v12-btn-outline" id="v12-int-clear">&#xCD08;&#xAE30;&#xD654;</button> <button class="v12-btn-outline" id="v12-int-random">&#xB79C;&#xB364; &#xBC30;&#xCE58;</button></div><button class="v12-close" onclick="v12Close(\'interior\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-struct" class="v12-panel"><div class="v12-box"><h2>&#x1F3D7;&#xFE0F; &#xAD6C;&#xC870;&#xC5ED;&#xD559; &#xC2DC;&#xAC01;&#xD654;&#xAE30;</h2><p>&#xAC74;&#xBB3C;&#xC5D0; &#xC791;&#xC6A9;&#xD558;&#xB294; &#xD558;&#xC911;&#xACFC; &#xC751;&#xB825;&#xC744; &#xBD84;&#xC11D;&#xD569;&#xB2C8;&#xB2E4;</p><div class="v12-tabs" id="v12-struct-tabs"></div><canvas id="v12-struct-canvas" class="v12-canvas" width="560" height="380"></canvas><div id="v12-struct-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><div class="v12-slider-row"><label>&#xD558;&#xC911; (kN)</label><input type="range" id="v12-struct-load" min="10" max="200" value="50"><div class="val" id="v12-struct-load-val">50</div></div><div class="v12-slider-row"><label>&#xD48D;&#xC555; (kN)</label><input type="range" id="v12-struct-wind" min="0" max="100" value="20"><div class="val" id="v12-struct-wind-val">20</div></div><button class="v12-close" onclick="v12Close(\'struct\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-cost" class="v12-panel"><div class="v12-box"><h2>&#x1F4B0; &#xAC74;&#xCD95;&#xBE44;&#xC6A9; &#xACAC;&#xC801; &#xC2DC;&#xC2A4;&#xD15C;</h2><p>&#xC7AC;&#xB8CC;&#xBE44;+&#xC778;&#xAC74;&#xBE44;+&#xC124;&#xBE44;&#xBE44;&#xB97C; &#xC790;&#xB3D9; &#xACC4;&#xC0B0;&#xD569;&#xB2C8;&#xB2E4;</p><div class="v12-slider-row"><label>&#xBA74;&#xC801; (&#xD3C9;)</label><input type="range" id="v12-cost-area" min="5" max="100" value="30"><div class="val" id="v12-cost-area-val">30</div></div><div class="v12-slider-row"><label>&#xCE35;&#xC218;</label><input type="range" id="v12-cost-floor" min="1" max="5" value="1"><div class="val" id="v12-cost-floor-val">1</div></div><div class="v12-tabs" id="v12-cost-type"></div><canvas id="v12-cost-pie" class="v12-canvas" width="480" height="300"></canvas><canvas id="v12-cost-bar" class="v12-canvas" width="560" height="260"></canvas><div id="v12-cost-summary" style="text-align:center;color:#f5deb3;font-size:15px;font-weight:700;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'cost\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-garden" class="v12-panel"><div class="v12-box"><h2>&#x1F33F; &#xC870;&#xACBD; &#xC815;&#xC6D0; &#xD50C;&#xB798;&#xB108;</h2><p>10x10 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; 12&#xC885; &#xC870;&#xACBD; &#xC694;&#xC18C;&#xB97C; &#xBC30;&#xCE58;&#xD558;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-garden-tools"></div><div id="v12-garden-grid" style="display:inline-grid;grid-template-columns:repeat(10,36px);gap:1px;margin:10px auto;justify-content:center"></div><div id="v12-garden-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-garden-save">&#xC800;&#xC7A5;</button> <button class="v12-btn-outline" id="v12-garden-clear">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'garden\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-hanok-int" class="v12-panel"><div class="v12-box"><h2>&#x1F3EF; &#xD55C;&#xC625; &#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xAC24;&#xB7EC;&#xB9AC;</h2><p>12&#xC885; &#xC804;&#xD1B5; &#xACF5;&#xAC04;&#xC758; &#xC778;&#xD14C;&#xB9AC;&#xC5B4;&#xB97C; &#xD0D0;&#xD5D8;&#xD558;&#xC138;&#xC694;</p><div class="v12-grid" id="v12-hanok-gallery"></div><button class="v12-close" onclick="v12Close(\'hanok-int\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-blueprint" class="v12-panel"><div class="v12-box"><h2>&#x1F4D0; &#xAC74;&#xCD95; &#xB3C4;&#xBA74; &#xD559;&#xC2B5;</h2><p>6&#xC885; &#xB3C4;&#xBA74;&#xC744; &#xC77D;&#xB294; &#xBC29;&#xBC95;&#xC744; &#xBC30;&#xC6CC;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-bp-tabs"></div><canvas id="v12-bp-canvas" class="v12-canvas" width="560" height="400"></canvas><div id="v12-bp-info" style="color:#c4956a;font-size:13px;margin:10px 0;line-height:1.7;text-align:center"></div><button class="v12-close" onclick="v12Close(\'blueprint\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-safety" class="v12-panel"><div class="v12-box"><h2>&#x1F6E1;&#xFE0F; &#xAC74;&#xCD95; &#xC548;&#xC804; &#xC9C4;&#xB2E8;</h2><p>10&#xD56D;&#xBAA9; &#xC548;&#xC804; &#xCCB4;&#xD06C;&#xB9AC;&#xC2A4;&#xD2B8;&#xC640; &#xC885;&#xD569; &#xC548;&#xC804;&#xC810;&#xC218;</p><div id="v12-safety-list"></div><canvas id="v12-safety-canvas" class="v12-canvas" width="400" height="400"></canvas><div id="v12-safety-grade" style="text-align:center;font-size:28px;font-weight:700;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'safety\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-timeline" class="v12-panel"><div class="v12-box"><h2>&#x23F3; &#xAC74;&#xCD95; &#xD0C0;&#xC784;&#xCEA1;&#xC290;</h2><p>&#xAC74;&#xCD95; &#xACFC;&#xC815;&#xC744; &#xD0C0;&#xC784;&#xB77C;&#xC778;&#xC73C;&#xB85C; &#xB3CC;&#xC544;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-tl-tabs"></div><canvas id="v12-tl-canvas" class="v12-canvas" width="600" height="340"></canvas><div id="v12-tl-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-tl-play">&#x25B6; &#xC7AC;&#xC0DD;</button> <button class="v12-btn-outline" id="v12-tl-reset">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'timeline\')">&#xB2EB;&#xAE30;</button></div></div>';
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
      case 'interior_save': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'struct_analyze': o.type='sawtooth'; o.frequency.setValueAtTime(220,t); o.frequency.linearRampToValueAtTime(440,t+.2); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'cost_calc': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(523,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'garden_place': o.type='sine'; o.frequency.setValueAtTime(659,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.12); o.start(t); o.stop(t+.12); break;
      case 'garden_save': o.type='triangle'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(659,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'hanok_open': o.type='triangle'; o.frequency.setValueAtTime(349,t); o.frequency.linearRampToValueAtTime(523,t+.15); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'blueprint_view': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(554,t+.1); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'safety_check': o.type='square'; o.frequency.setValueAtTime(587,t); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
      case 'safety_pass': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      case 'timeline_play': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(587,t+.15); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'achieve_v12': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1);
    }
  }
  return {play:play,ctx:ctx};
})();

// ── 4. Interior Design Studio (인테리어 디자인 스튜디오 12종 8x8 Canvas) ──
var v12Interior = (function(){
  var KEY = 'hb_v12_interior';
  var tools = [
    {icon:'🛋',name:'소파',cat:'거실'},
    {icon:'📺',name:'TV',cat:'거실'},
    {icon:'🪑',name:'의자',cat:'식당'},
    {icon:'🍽',name:'식탁',cat:'식당'},
    {icon:'🛏',name:'침대',cat:'침실'},
    {icon:'🚥',name:'조명',cat:'공통'},
    {icon:'📚',name:'책장',cat:'서재'},
    {icon:'🎹',name:'피아노',cat:'거실'},
    {icon:'🧴',name:'세면대',cat:'욕실'},
    {icon:'🛁',name:'욕조',cat:'욕실'},
    {icon:'🌺',name:'화분',cat:'공통'},
    {icon:'☕',name:'커피머신',cat:'주방'}
  ];
  var currentTool = 0;
  var grid = JSON.parse(localStorage.getItem(KEY) || 'null') || new Array(64).fill(null);
  function save(){ localStorage.setItem(KEY, JSON.stringify(grid)); }
  function renderTools(){
    var el = document.getElementById('v12-int-tools'); if(!el) return;
    el.innerHTML = tools.map(function(t,i){ return '<button class="v12-tab'+(i===currentTool?' active':'')+'" data-idx="'+i+'">'+t.icon+' '+t.name+'</button>'; }).join('') + '<button class="v12-tab" data-idx="-1">❌ &#xC9C0;&#xC6B0;&#xAE30;</button>';
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick = function(){ currentTool = parseInt(btn.dataset.idx); renderTools(); }; });
  }
  function renderGrid(){
    var el = document.getElementById('v12-int-grid'); if(!el) return;
    el.innerHTML = '';
    for(var i=0;i<64;i++){
      var cell = document.createElement('div');
      cell.className = 'v12-floor-cell' + (grid[i] !== null ? ' placed' : '');
      cell.dataset.idx = i;
      cell.textContent = grid[i] !== null ? tools[grid[i]].icon : '';
      cell.onclick = function(){
        var idx = parseInt(this.dataset.idx);
        if(currentTool === -1){ grid[idx] = null; }
        else { grid[idx] = currentTool; }
        save();
        v12SFX.play('interior_place');
        renderGrid();
        updateStats();
        v12Achieve.check();
      };
      el.appendChild(cell);
    }
  }
  function updateStats(){
    var el = document.getElementById('v12-int-stats'); if(!el) return;
    var placed = grid.filter(function(g){return g!==null;}).length;
    var types = {};
    grid.forEach(function(g){ if(g!==null) types[g]=true; });
    el.textContent = '배치: ' + placed + '/64 | 종류: ' + Object.keys(types).length + '/12';
  }
  function randomPlace(){
    grid = new Array(64).fill(null);
    for(var i=0;i<20;i++){
      var pos = Math.floor(Math.random()*64);
      grid[pos] = Math.floor(Math.random()*tools.length);
    }
    save(); renderGrid(); updateStats();
    v12SFX.play('interior_save');
  }
  function open(){
    document.getElementById('v12-interior').classList.add('active');
    renderTools(); renderGrid(); updateStats();
    document.getElementById('v12-int-save').onclick = function(){ save(); v12SFX.play('interior_save'); };
    document.getElementById('v12-int-clear').onclick = function(){ grid = new Array(64).fill(null); save(); renderGrid(); updateStats(); };
    document.getElementById('v12-int-random').onclick = randomPlace;
  }
  function close(){ document.getElementById('v12-interior').classList.remove('active'); }
  return {open:open,close:close,grid:grid,load:function(){ renderTools(); }};
})();

// ── 5. Structural Mechanics Visualizer (구조역학 시각화기 Canvas) ──
var v12Struct = (function(){
  var KEY = 'hb_v12_struct';
  var types = [
    {name:'&#xBAA9;&#xAD6C;&#xC870; (&#xD55C;&#xC625;)',modE:12,modS:8,weight:0.5,desc:'소나무/참나무 기둥-보 구조. 전통 맞배지붕의 하중 분배가 특징'},
    {name:'&#xC870;&#xC801;&#xC870; (&#xAE30;&#xC640;&#xC9D1;)',modE:20,modS:12,weight:2.0,desc:'돌/벽돌 적층 구조. 압축에 강하나 인장에 약함'},
    {name:'&#xCCA0;&#xADFC;&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;',modE:30,modS:25,weight:2.5,desc:'현대 건축의 기본. 인장(철근)+압축(콘크리트) 복합체'},
    {name:'&#xCCA0;&#xACE8;&#xAD6C;&#xC870;',modE:200,modS:80,weight:7.8,desc:'H빔 프레임. 고층 건물에 적합. 변형에 강함'},
    {name:'&#xD63C;&#xD569;&#xAD6C;&#xC870;',modE:50,modS:30,weight:3.0,desc:'RC+철골 혼합. 하부 RC, 상부 철골의 효율적 조합'},
    {name:'&#xC804;&#xD1B5; &#xCD08;&#xAC00;&#xC9D1;',modE:8,modS:5,weight:0.3,desc:'목재 골격+볏짚 지붕. 경량이나 횡하중에 취약'}
  ];
  var currentType = 0;
  var visited = JSON.parse(localStorage.getItem(KEY) || '[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(visited)); }
  function renderTabs(){
    var el = document.getElementById('v12-struct-tabs'); if(!el) return;
    el.innerHTML = types.map(function(t,i){ return '<button class="v12-tab'+(i===currentType?' active':'')+'" data-idx="'+i+'">'+t.name+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick = function(){ currentType = parseInt(btn.dataset.idx); if(visited.indexOf(currentType)<0){visited.push(currentType);save();} renderTabs(); draw(); v12SFX.play('struct_analyze'); v12Achieve.check(); }; });
  }
  function draw(){
    var cv = document.getElementById('v12-struct-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W = cv.width, H = cv.height;
    var load = parseInt(document.getElementById('v12-struct-load').value) || 50;
    var wind = parseInt(document.getElementById('v12-struct-wind').value) || 20;
    var st = types[currentType];
    c.clearRect(0,0,W,H);

    // ground
    c.fillStyle = 'rgba(139,105,20,.2)';
    c.fillRect(0,H-40,W,40);
    c.strokeStyle = '#c4956a'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(40,H-40); c.lineTo(W-40,H-40); c.stroke();

    // foundation
    c.fillStyle = 'rgba(196,149,106,.15)';
    c.fillRect(80,H-60,W-160,20);
    c.strokeStyle = 'rgba(196,149,106,.5)'; c.strokeRect(80,H-60,W-160,20);

    // columns
    var colW = 16, colH = 180;
    var cols = [{x:120},{x:240},{x:360},{x:W-120}];
    cols.forEach(function(col){
      var stress = Math.min(1, (load * 0.8 + wind * 0.2) / (st.modE * 5));
      var r = Math.floor(180 + stress * 75);
      var g2 = Math.floor(149 - stress * 80);
      var b = Math.floor(106 - stress * 80);
      c.fillStyle = 'rgb('+r+','+g2+','+b+')';
      c.fillRect(col.x - colW/2, H-60-colH, colW, colH);
      c.strokeStyle = 'rgba(255,255,255,.2)'; c.strokeRect(col.x-colW/2,H-60-colH,colW,colH);
    });

    // beams
    c.fillStyle = 'rgba(196,149,106,.4)';
    c.fillRect(cols[0].x-colW/2, H-60-colH-12, cols[3].x-cols[0].x+colW, 12);
    c.strokeStyle = 'rgba(196,149,106,.6)';
    c.strokeRect(cols[0].x-colW/2, H-60-colH-12, cols[3].x-cols[0].x+colW, 12);

    // roof
    c.beginPath();
    c.moveTo(60, H-60-colH-12);
    c.lineTo(W/2, H-60-colH-80);
    c.lineTo(W-60, H-60-colH-12);
    c.closePath();
    c.fillStyle = 'rgba(74,44,23,.5)';
    c.fill();
    c.strokeStyle = '#c4956a'; c.lineWidth = 2; c.stroke();

    // load arrows (vertical - gravity)
    c.strokeStyle = '#e74c3c'; c.lineWidth = 2;
    var arrowCount = Math.max(3, Math.floor(load / 25));
    for(var i=0;i<arrowCount;i++){
      var ax = 100 + (W-200)*(i/(arrowCount-1));
      var aLen = 20 + load * 0.15;
      c.beginPath(); c.moveTo(ax, H-60-colH-80-aLen); c.lineTo(ax, H-60-colH-70); c.stroke();
      c.beginPath(); c.moveTo(ax, H-60-colH-70); c.lineTo(ax-5, H-60-colH-78); c.moveTo(ax, H-60-colH-70); c.lineTo(ax+5, H-60-colH-78); c.stroke();
    }
    c.fillStyle = '#e74c3c'; c.font = '11px sans-serif'; c.textAlign = 'center';
    c.fillText('하중 '+load+' kN', W/2, H-60-colH-80-arrowCount*2-10);

    // wind arrows (horizontal)
    if(wind > 5){
      c.strokeStyle = '#3498db'; c.lineWidth = 2;
      var wCount = Math.max(2, Math.floor(wind/20));
      for(var i=0;i<wCount;i++){
        var wy = H-60-colH+20 + (colH-40)*(i/(wCount));
        var wLen = 15 + wind*0.2;
        c.beginPath(); c.moveTo(30-wLen, wy); c.lineTo(50, wy); c.stroke();
        c.beginPath(); c.moveTo(50, wy); c.lineTo(42, wy-4); c.moveTo(50, wy); c.lineTo(42, wy+4); c.stroke();
      }
      c.fillStyle = '#3498db'; c.textAlign = 'left';
      c.fillText('풍압 '+wind+' kN', 10, H-60-colH-10);
    }

    // stress indicators
    var compStress = (load / st.modE).toFixed(1);
    var shearStress = (wind / st.modS).toFixed(1);
    var safetyFactor = (st.modE * 2 / (load + wind * 0.5)).toFixed(1);
    var grade = safetyFactor >= 3 ? 'S' : safetyFactor >= 2 ? 'A' : safetyFactor >= 1.5 ? 'B' : safetyFactor >= 1 ? 'C' : 'D';
    var gradeColor = {S:'#4a7c59',A:'#6a9f4a',B:'#c4956a',C:'#d4764a',D:'#b43c3c'}[grade];

    c.fillStyle = gradeColor; c.font = 'bold 36px sans-serif'; c.textAlign = 'right';
    c.fillText(grade, W-20, 40);
    c.fillStyle = '#f5deb3'; c.font = '11px sans-serif';
    c.fillText('안;&#xC804;&#xB4F1;&#xAE09;', W-20, 55);

    c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(W-180,65,170,65); c.strokeStyle='rgba(196,149,106,.3)'; c.strokeRect(W-180,65,170,65);
    c.fillStyle = '#f5deb3'; c.font = '11px sans-serif'; c.textAlign = 'left';
    c.fillText('압축응력: '+compStress+' MPa', W-170, 82);
    c.fillText('전단응력: '+shearStress+' MPa', W-170, 98);
    c.fillText('안전율: '+safetyFactor+'x', W-170, 114);
    c.fillText('구조: '+st.weight+' kN/m³', W-170, 126);

    // reaction arrows at base
    c.strokeStyle = '#2ecc71'; c.lineWidth = 2;
    cols.forEach(function(col){
      var rForce = load / cols.length;
      c.beginPath(); c.moveTo(col.x, H-30); c.lineTo(col.x, H-50); c.stroke();
      c.beginPath(); c.moveTo(col.x, H-50); c.lineTo(col.x-4, H-44); c.moveTo(col.x, H-50); c.lineTo(col.x+4, H-44); c.stroke();
    });
    c.fillStyle = '#2ecc71'; c.font = '10px sans-serif'; c.textAlign = 'center';
    c.fillText('반력', cols[0].x, H-15);

    var info = document.getElementById('v12-struct-info');
    if(info) info.innerHTML = '<strong style="color:#f5deb3">'+types[currentType].name.replace(/&#x[0-9A-F]+;/g,'')+'</strong> - '+st.desc;
  }
  function bindSliders(){
    var sl = document.getElementById('v12-struct-load');
    var sw = document.getElementById('v12-struct-wind');
    if(sl){ sl.oninput = function(){ document.getElementById('v12-struct-load-val').textContent=sl.value; draw(); }; }
    if(sw){ sw.oninput = function(){ document.getElementById('v12-struct-wind-val').textContent=sw.value; draw(); }; }
  }
  function open(){ document.getElementById('v12-struct').classList.add('active'); if(visited.indexOf(currentType)<0){visited.push(currentType);save();} renderTabs(); draw(); bindSliders(); v12SFX.play('struct_analyze'); }
  function close(){ document.getElementById('v12-struct').classList.remove('active'); }
  return {open:open,close:close,visited:visited,load:function(){}};
})();

// ── 6. Building Cost Estimator (건축비용 견적 시스템 Canvas Pie+Bar) ──
var v12Cost = (function(){
  var KEY = 'hb_v12_cost';
  var buildTypes = [
    {name:'&#xD55C;&#xC625;',base:800,matR:0.45,labR:0.35,equipR:0.12,otherR:0.08},
    {name:'&#xAE30;&#xC640;&#xC9D1;',base:650,matR:0.40,labR:0.35,equipR:0.15,otherR:0.10},
    {name:'&#xCD08;&#xAC00;&#xC9D1;',base:350,matR:0.35,labR:0.40,equipR:0.10,otherR:0.15},
    {name:'&#xC11C;&#xC6D0;',base:900,matR:0.42,labR:0.33,equipR:0.15,otherR:0.10},
    {name:'&#xC815;&#xC790;',base:500,matR:0.38,labR:0.37,equipR:0.13,otherR:0.12},
    {name:'&#xD604;&#xB300;&#xC8FC;&#xD0DD;',base:550,matR:0.42,labR:0.30,equipR:0.18,otherR:0.10}
  ];
  var currentType = 0;
  var used = JSON.parse(localStorage.getItem(KEY)||'false');
  function save(){ localStorage.setItem(KEY,'true'); }
  function renderTypes(){
    var el = document.getElementById('v12-cost-type'); if(!el) return;
    el.innerHTML = buildTypes.map(function(t,i){ return '<button class="v12-tab'+(i===currentType?' active':'')+'" data-idx="'+i+'">'+t.name+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick = function(){ currentType=parseInt(btn.dataset.idx); renderTypes(); drawCharts(); v12SFX.play('cost_calc'); }; });
  }
  function drawCharts(){
    var area = parseInt(document.getElementById('v12-cost-area').value)||30;
    var floors = parseInt(document.getElementById('v12-cost-floor').value)||1;
    var bt = buildTypes[currentType];
    var totalSqm = area * 3.3058 * floors;
    var totalCost = Math.round(bt.base * totalSqm);
    var matCost = Math.round(totalCost * bt.matR);
    var labCost = Math.round(totalCost * bt.labR);
    var equipCost = Math.round(totalCost * bt.equipR);
    var otherCost = totalCost - matCost - labCost - equipCost;

    // Pie chart
    var cv = document.getElementById('v12-cost-pie'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height, cx=W/2-50, cy=H/2, R=100;
    c.clearRect(0,0,W,H);
    var slices=[{label:'재료비',val:matCost,color:'#c4956a'},{label:'인건비',val:labCost,color:'#4a7c59'},{label:'설비비',val:equipCost,color:'#45b7d1'},{label:'기타',val:otherCost,color:'#9b59b6'}];
    var startAngle = -Math.PI/2;
    slices.forEach(function(s){
      var sweep = (s.val/totalCost)*Math.PI*2;
      c.beginPath(); c.moveTo(cx,cy); c.arc(cx,cy,R,startAngle,startAngle+sweep); c.closePath();
      c.fillStyle=s.color; c.fill();
      c.strokeStyle='rgba(0,0,0,.3)'; c.lineWidth=2; c.stroke();
      var mid=startAngle+sweep/2;
      var lx=cx+R*0.65*Math.cos(mid), ly=cy+R*0.65*Math.sin(mid);
      c.fillStyle='#fff'; c.font='bold 11px sans-serif'; c.textAlign='center';
      c.fillText(Math.round(s.val/totalCost*100)+'%',lx,ly+4);
      startAngle+=sweep;
    });
    // legend
    var lx = W-120;
    slices.forEach(function(s,i){
      c.fillStyle=s.color; c.fillRect(lx,30+i*22,12,12);
      c.fillStyle='#f5deb3'; c.font='11px sans-serif'; c.textAlign='left';
      c.fillText(s.label+' '+(s.val/10000).toFixed(0)+'만',lx+18,30+i*22+10);
    });

    // Bar chart
    var cv2 = document.getElementById('v12-cost-bar'); if(!cv2) return;
    var c2 = cv2.getContext('2d'), W2=cv2.width, H2=cv2.height;
    c2.clearRect(0,0,W2,H2);
    var comparisons = buildTypes.map(function(t){
      return {name:t.name, cost:Math.round(t.base*totalSqm)};
    });
    var maxCost = Math.max.apply(null, comparisons.map(function(c3){return c3.cost;}));
    var barW = 50, gap = (W2-60-comparisons.length*barW)/(comparisons.length+1);
    c2.strokeStyle='rgba(196,149,106,.2)'; c2.lineWidth=1;
    for(var i=0;i<=4;i++){
      var y = 30 + (H2-70)*(i/4);
      c2.beginPath(); c2.moveTo(50,y); c2.lineTo(W2-10,y); c2.stroke();
      c2.fillStyle='#c4956a'; c2.font='10px sans-serif'; c2.textAlign='right';
      c2.fillText((maxCost*(1-i/4)/10000).toFixed(0)+'만',45,y+4);
    }
    comparisons.forEach(function(comp,i){
      var bx = 60 + gap + i*(barW+gap);
      var bh = (comp.cost/maxCost)*(H2-70);
      var by = H2-40-bh;
      c2.fillStyle = i===currentType ? '#c4956a' : 'rgba(196,149,106,.3)';
      c2.fillRect(bx,by,barW,bh);
      c2.strokeStyle='rgba(196,149,106,.5)'; c2.strokeRect(bx,by,barW,bh);
      c2.fillStyle = i===currentType ? '#f5deb3' : '#c4956a';
      c2.font='10px sans-serif'; c2.textAlign='center';
      c2.fillText(comp.name.replace(/&#x[0-9A-F]+;/g,''),bx+barW/2,H2-25);
      c2.fillText((comp.cost/10000).toFixed(0)+'만',bx+barW/2,by-6);
    });

    var summary = document.getElementById('v12-cost-summary');
    if(summary) summary.innerHTML = '총 견적: <span style="color:#c4956a;font-size:22px">' + (totalCost/10000).toFixed(0) + '</span>만원 (' + area + '평 ' + floors + '층 ' + buildTypes[currentType].name.replace(/&#x[0-9A-F]+;/g,'') + ')';
    used = true; save();
  }
  function bindSliders(){
    var sa = document.getElementById('v12-cost-area');
    var sf = document.getElementById('v12-cost-floor');
    if(sa){ sa.oninput = function(){ document.getElementById('v12-cost-area-val').textContent=sa.value; drawCharts(); }; }
    if(sf){ sf.oninput = function(){ document.getElementById('v12-cost-floor-val').textContent=sf.value; drawCharts(); }; }
  }
  function open(){ document.getElementById('v12-cost').classList.add('active'); renderTypes(); drawCharts(); bindSliders(); v12SFX.play('cost_calc'); }
  function close(){ document.getElementById('v12-cost').classList.remove('active'); }
  return {open:open,close:close,used:function(){return used;},load:function(){}};
})();

// ── 7. Landscape Garden Planner (조경 정원 플래너 10x10 Canvas 12종) ──
var v12Garden = (function(){
  var KEY = 'hb_v12_garden';
  var tools = [
    {icon:'🌳',name:'소나무'},
    {icon:'🌸',name:'복숭아'},
    {icon:'🌻',name:'해바라기'},
    {icon:'🌿',name:'대나무'},
    {icon:'🌾',name:'쟔디'},
    {icon:'⛲',name:'분수'},
    {icon:'🪨',name:'정원석'},
    {icon:'🌊',name:'연못'},
    {icon:'🌅',name:'정자'},
    {icon:'🦆',name:'오리'},
    {icon:'🍄',name:'버섯'},
    {icon:'🚶',name:'산책로'}
  ];
  var currentTool = 0;
  var grid = JSON.parse(localStorage.getItem(KEY) || 'null') || new Array(100).fill(null);
  function save(){ localStorage.setItem(KEY, JSON.stringify(grid)); }
  function renderTools(){
    var el = document.getElementById('v12-garden-tools'); if(!el) return;
    el.innerHTML = tools.map(function(t,i){ return '<button class="v12-tab'+(i===currentTool?' active':'')+'" data-idx="'+i+'">'+t.icon+' '+t.name+'</button>'; }).join('') + '<button class="v12-tab" data-idx="-1">❌ 지우기</button>';
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick = function(){ currentTool=parseInt(btn.dataset.idx); renderTools(); }; });
  }
  function renderGrid(){
    var el = document.getElementById('v12-garden-grid'); if(!el) return;
    el.innerHTML = '';
    for(var i=0;i<100;i++){
      var cell = document.createElement('div');
      cell.className = 'v12-floor-cell' + (grid[i]!==null?' placed':'');
      cell.style.width = '36px'; cell.style.height = '36px'; cell.style.fontSize = '16px';
      cell.dataset.idx = i;
      cell.textContent = grid[i]!==null ? tools[grid[i]].icon : '';
      cell.onclick = function(){
        var idx = parseInt(this.dataset.idx);
        if(currentTool===-1){ grid[idx]=null; } else { grid[idx]=currentTool; }
        save(); v12SFX.play('garden_place'); renderGrid(); updateStats(); v12Achieve.check();
      };
      el.appendChild(cell);
    }
  }
  function updateStats(){
    var el = document.getElementById('v12-garden-stats'); if(!el) return;
    var placed = grid.filter(function(g){return g!==null;}).length;
    var types = {};
    grid.forEach(function(g){ if(g!==null) types[g]=true; });
    el.textContent = '배치: '+placed+'/100 | 종류: '+Object.keys(types).length+'/12';
  }
  function open(){
    document.getElementById('v12-garden').classList.add('active');
    renderTools(); renderGrid(); updateStats();
    document.getElementById('v12-garden-save').onclick = function(){ save(); v12SFX.play('garden_save'); };
    document.getElementById('v12-garden-clear').onclick = function(){ grid=new Array(100).fill(null); save(); renderGrid(); updateStats(); };
  }
  function close(){ document.getElementById('v12-garden').classList.remove('active'); }
  return {open:open,close:close,grid:grid,load:function(){}};
})();

// ── 8. Hanok Interior Gallery (한옥 인테리어 갤러리 12종) ──
var v12HanokInt = (function(){
  var KEY = 'hb_v12_hanok_int';
  var rooms = [
    {icon:'🏯',name:'대청마루',desc:'여름철 생활의 중심. 개방형 공간으로 통풍이 좋음.',detail:'대청마루는 한옥의 중심 공간으로, 기둥 위에 널비를 놓아 만든 마루바닥입니다. 여름에는 문을 활짝 열어 바람을 통하게 하고, 대나무 땱자리를 깄아 사용합니다. 가족 행사와 의례의 장소로도 사용됩니다.'},
    {icon:'🛏',name:'안방;',desc:'여성의 거처. 온돌방으로 겨울에 따뜻한 공간.',detail:'안방은 주부의 거처로, 온돌이 깔려 있어 겨울철 가장 따뜻한 공간입니다. 반닫이를 보관하는 반닫이골방이 있으며, 장롭과 소반 등 수납공간이 마련됩니다.'},
    {icon:'📚',name:'사랑방',desc:'남성의 거처. 학문과 손님 접대의 공간.',detail:'사랑방은 바깥채의 중심 공간으로, 주인 남성이 학문을 연구하고 손님을 맞이하는 곳입니다. 서가, 문방구, 뱀루가 놓이며 풍류의 공간입니다.'},
    {icon:'🍳',name:'부업',desc:'한옥의 주방. 아궁이와 부뜰막이 특징.',detail:'부업은 음식을 준비하는 공간으로, 아궁이(아궁이밥)와 부뜰막(신발)이 특징입니다. 온돌의 불을 때는 곳과 연결되어 난방과 취사를 동시에 합니다.'},
    {icon:'🧘',name:'누마루',desc:'한옥의 2층 공간. 물건; 보관과 통풍.',detail:'누마루는 다락방 위에 설치된 2층 공간으로, 주로 곡식이나 물건을 보관합니다. 통풍과 채광이 좋아 여름에 시원하게 사용할 수 있습니다.'},
    {icon:'🎶',name:'풍류방',desc:'음악과 예술을 즐기는 공간.',detail:'풍류방은 거문고와 가야금을 타고 시화를 읽는 공간입니다. 보통 사랑방과 인접해 있으며, 바닥에는 방석이 깔립니다.'},
    {icon:'🚰',name:'측간;',desc:'물건과 식량을 보관하는 공간.',detail:'측간은 부업 옆에 있는 수납공간으로, 된장/간장/고추장 등을 보관합니다. 기온이 낮게 유지되어 음식 보관에 최적입니다.'},
    {icon:'🌙',name:'다락방',desc:'외부와 연결된 짧은 복도.',detail:'다락방은 방과 방 사이, 또는 방과 마당 사이를 연결하는 짧은 복도입니다. 비오는 날 바깥을 관조하고 바람을 즐기는 것이 정취입니다.'},
    {icon:'🚪',name:'대문',desc:'한옥 입구. 솔대문과 협문.',detail:'한옥의 대문은 혐 또는 쇼로 만들어지며, 솔대문과 협문으로 구성됩니다. 문살과 문고리 장식이 특징입니다.'},
    {icon:'⚖',name:'안채마당',desc:'여성들의 활동 공간.',detail:'안채마당은 여성들이 바느질, 수다, 자수 등의 작업을 하는 공간입니다. 보통 안방 옆에 위치하며 밝은 북향입니다.'},
    {icon:'🍵',name:'차실;',desc:'차를 끌이고 명상하는 공간.',detail:'차실은 차를 준비하고 대접하는 공간으로, 조용한 분위기에서 명상과 차도를 즐깁니다. 소박한 가구와 창밖의 정원이 한눈에 보입니다.'},
    {icon:'🌼',name:'후원;',desc:'한옥 뒤언덕의 정원.',detail:'후원은 한옥 뒤청에 있는 정원으로, 구골물/괴석/식물을 배치합니다. 차경(借景) 기법으로 먼 산과 자연을 정원의 일부로 끔어들입니다.'}
  ];
  var readList = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(readList)); }
  function render(){
    var el = document.getElementById('v12-hanok-gallery'); if(!el) return;
    el.innerHTML = rooms.map(function(r,i){
      var isRead = readList.indexOf(i)>=0;
      return '<div class="v12-gallery-card'+(isRead?' expanded':'')+'" data-idx="'+i+'">' +
        '<div class="room-icon">'+r.icon+'</div><h4>'+r.name+'</h4><p>'+r.desc+'</p>' +
        '<div class="room-detail">'+r.detail+'</div></div>';
    }).join('');
    el.querySelectorAll('.v12-gallery-card').forEach(function(card){
      card.onclick = function(){
        var idx = parseInt(card.dataset.idx);
        card.classList.toggle('expanded');
        if(readList.indexOf(idx)<0){ readList.push(idx); save(); v12SFX.play('hanok_open'); v12Achieve.check(); }
      };
    });
  }
  function open(){ document.getElementById('v12-hanok-int').classList.add('active'); render(); }
  function close(){ document.getElementById('v12-hanok-int').classList.remove('active'); }
  return {open:open,close:close,readList:readList,load:function(){}};
})();

// ── 9. Blueprint Reader (건축 도면 학습 6종 Canvas) ──
var v12Blueprint = (function(){
  var KEY = 'hb_v12_blueprint';
  var bpTypes = [
    {name:'평면도 (한옥)',desc:'위에서 내려다본 배치도. 방, 마루, 부업의 위치와 크기를 표시'},
    {name:'입면도 (정면)',desc:'건물을 정면에서 본 모습. 지붕 경사, 창문, 문의 배치'},
    {name:'단면도',desc:'건물을 수직으로 자른 단면. 기초, 바닥, 천장 구조'},
    {name:'배치도',desc:'대지 위에 건물의 위치. 방위, 도로, 존경 표시'},
    {name:'구조도',desc:'기둥, 보, 지붕 틀의 구조체. 하중 전달 경로 표시'},
    {name:'설비도',desc:'전기, 배관, 난방 설비의 배치. 한옥 온돌 경로 포함'}
  ];
  var currentBP = 0;
  var viewed = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(viewed)); }
  function renderTabs(){
    var el = document.getElementById('v12-bp-tabs'); if(!el) return;
    el.innerHTML = bpTypes.map(function(t,i){ return '<button class="v12-tab'+(i===currentBP?' active':'')+'" data-idx="'+i+'">'+t.name+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick = function(){ currentBP=parseInt(btn.dataset.idx); if(viewed.indexOf(currentBP)<0){viewed.push(currentBP);save();} renderTabs(); draw(); v12SFX.play('blueprint_view'); v12Achieve.check(); }; });
  }
  function draw(){
    var cv = document.getElementById('v12-bp-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle = 'rgba(20,35,60,.9)'; c.fillRect(0,0,W,H);
    c.strokeStyle = 'rgba(100,160,255,.12)'; c.lineWidth = 0.5;
    for(var x=0;x<W;x+=20){ c.beginPath(); c.moveTo(x,0); c.lineTo(x,H); c.stroke(); }
    for(var y=0;y<H;y+=20){ c.beginPath(); c.moveTo(0,y); c.lineTo(W,y); c.stroke(); }

    c.strokeStyle = 'rgba(100,160,255,.7)'; c.lineWidth = 2;
    c.setLineDash([]);

    switch(currentBP){
      case 0: // Floor plan
        c.strokeRect(80,60,400,280);
        c.strokeRect(80,60,180,160); // 안방
        c.strokeRect(260,60,220,160); // 대청
        c.strokeRect(80,220,180,120); // 부엌
        c.strokeRect(260,220,120,120); // 사랑방
        c.strokeRect(380,220,100,120); // 다락

        c.fillStyle = 'rgba(100,160,255,.15)'; c.fillRect(260,60,220,160);
        c.fillStyle = 'rgba(100,160,255,.08)'; c.fillRect(80,60,180,160);

        c.fillStyle = '#64a0ff'; c.font = '13px sans-serif'; c.textAlign = 'center';
        c.fillText('안방', 170, 145);
        c.fillText('대청마루', 370, 145);
        c.fillText('부업', 170, 285);
        c.fillText('사랑방', 320, 285);
        c.fillText('다락', 430, 285);

        c.font = '10px sans-serif'; c.fillStyle = '#4a8adf';
        c.fillText('5.4m', 170, 55); c.fillText('6.6m', 370, 55);
        c.fillText('8.4m', W/2, H-15);

        // door symbols
        c.strokeStyle = '#ff9640'; c.lineWidth = 1.5;
        c.beginPath(); c.arc(260,150,20,0,Math.PI/2); c.stroke();
        c.beginPath(); c.arc(260,230,15,-Math.PI/2,0); c.stroke();
        break;

      case 1: // Elevation
        c.beginPath(); c.moveTo(60,280); c.lineTo(W-60,280); c.stroke();
        // foundation
        c.fillStyle = 'rgba(100,160,255,.1)'; c.fillRect(80,265,400,15);
        // walls
        c.strokeRect(100,120,160,145); c.strokeRect(300,120,160,145);
        // roof
        c.beginPath(); c.moveTo(60,120); c.lineTo(280,40); c.lineTo(500,120); c.closePath();
        c.strokeStyle='#64a0ff'; c.lineWidth=2; c.stroke();
        c.fillStyle='rgba(100,160,255,.08)'; c.fill();
        // windows
        c.strokeRect(130,160,40,50); c.moveTo(150,160); c.lineTo(150,210);
        c.moveTo(130,185); c.lineTo(170,185); c.stroke();
        c.strokeRect(340,160,40,50);
        // door
        c.strokeRect(230,190,50,75);
        c.beginPath(); c.arc(270,230,3,0,Math.PI*2); c.stroke();
        // dimensions
        c.fillStyle='#4a8adf'; c.font='10px sans-serif'; c.textAlign='center';
        c.fillText('처마높이 3.2m',W-50,100);
        c.fillText('바닥~천정 2.4m',W-50,200);
        break;

      case 2: // Section
        c.beginPath(); c.moveTo(60,300); c.lineTo(W-60,300); c.stroke();
        // ground level
        c.fillStyle='rgba(139,105,20,.15)'; c.fillRect(60,300,W-120,40);
        c.fillStyle='#4a8adf'; c.font='10px sans-serif'; c.textAlign='left';
        c.fillText('G.L.', 30, 305);
        // foundation
        c.strokeRect(100,280,360,20);
        c.fillStyle='rgba(100,160,255,.1)'; c.fillRect(100,280,360,20);
        // floor (ondol)
        c.strokeRect(100,260,360,20);
        c.fillStyle='rgba(255,150,64,.1)'; c.fillRect(100,260,360,20);
        c.fillStyle='#ff9640'; c.font='10px sans-serif'; c.textAlign='center';
        c.fillText('온돌', 280, 275);
        // walls
        c.strokeRect(100,120,20,140); c.strokeRect(440,120,20,140);
        // ceiling
        c.strokeRect(100,100,360,20);
        // roof structure
        c.beginPath(); c.moveTo(80,100); c.lineTo(280,30); c.lineTo(480,100); c.stroke();
        c.setLineDash([5,5]); c.beginPath(); c.moveTo(280,30); c.lineTo(280,100); c.stroke(); c.setLineDash([]);
        c.fillStyle='#64a0ff'; c.font='11px sans-serif'; c.textAlign='center';
        c.fillText('용마루',280,55);
        c.fillText('천정',280,115);
        c.fillText('기초',280,295);
        break;

      case 3: // Site plan
        c.strokeRect(40,40,W-80,H-80);
        c.fillStyle='rgba(74,124,89,.1)'; c.fillRect(40,40,W-80,H-80);
        // building footprint
        c.fillStyle='rgba(100,160,255,.2)'; c.fillRect(180,120,200,160);
        c.strokeStyle='#64a0ff'; c.lineWidth=2; c.strokeRect(180,120,200,160);
        c.fillStyle='#64a0ff'; c.font='12px sans-serif'; c.textAlign='center';
        c.fillText('한옥',280,205);
        // gate
        c.strokeRect(260,310,40,20);
        c.fillText('대문',280,325);
        // garden
        c.setLineDash([4,4]);
        c.strokeRect(60,60,100,100);
        c.fillStyle='#4a8adf'; c.font='10px sans-serif';
        c.fillText('후원',110,115);
        c.strokeRect(420,80,80,80);
        c.fillText('정원',460,125);
        c.setLineDash([]);
        // compass
        c.fillStyle='#ff9640'; c.font='bold 14px sans-serif'; c.textAlign='center';
        c.fillText('N', W-40, 60);
        c.beginPath(); c.moveTo(W-40,65); c.lineTo(W-40,90); c.strokeStyle='#ff9640'; c.lineWidth=2; c.stroke();
        c.beginPath(); c.moveTo(W-40,65); c.lineTo(W-44,72); c.moveTo(W-40,65); c.lineTo(W-36,72); c.stroke();
        // road
        c.fillStyle='rgba(196,149,106,.15)'; c.fillRect(40,340,W-80,30);
        c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.fillText('도로',280,360);
        break;

      case 4: // Structure
        c.beginPath(); c.moveTo(60,320); c.lineTo(W-60,320); c.stroke();
        // columns
        var structCols = [120,220,340,440];
        structCols.forEach(function(sx){
          c.fillStyle='rgba(100,160,255,.2)'; c.fillRect(sx-8,120,16,200);
          c.strokeRect(sx-8,120,16,200);
        });
        // beams
        c.fillStyle='rgba(100,160,255,.15)'; c.fillRect(112,110,336,15);
        c.strokeRect(112,110,336,15);
        // roof truss
        c.beginPath(); c.moveTo(100,110); c.lineTo(280,40); c.lineTo(460,110); c.stroke();
        c.beginPath(); c.moveTo(190,75); c.lineTo(190,110); c.stroke();
        c.beginPath(); c.moveTo(370,75); c.lineTo(370,110); c.stroke();
        // foundation
        c.fillStyle='rgba(100,160,255,.1)'; c.fillRect(100,310,360,15);
        c.strokeRect(100,310,360,15);
        // labels
        c.fillStyle='#64a0ff'; c.font='11px sans-serif'; c.textAlign='center';
        c.fillText('기둥',120,340); c.fillText('보',280,105);
        c.fillText('서까래',280,55); c.fillText('기초',280,325);
        // load path arrows
        c.strokeStyle='#e74c3c'; c.lineWidth=1.5; c.setLineDash([3,3]);
        c.beginPath(); c.moveTo(280,20); c.lineTo(280,40); c.stroke();
        c.beginPath(); c.moveTo(280,40); c.lineTo(190,75); c.stroke();
        c.beginPath(); c.moveTo(190,75); c.lineTo(190,110); c.stroke();
        c.beginPath(); c.moveTo(190,110); c.lineTo(120,120); c.stroke();
        c.beginPath(); c.moveTo(120,120); c.lineTo(120,310); c.stroke();
        c.setLineDash([]);
        c.fillStyle='#e74c3c'; c.font='9px sans-serif'; c.textAlign='left';
        c.fillText('하중경로',285,35);
        break;

      case 5: // MEP
        c.strokeRect(80,60,400,280);
        c.strokeRect(80,60,180,160); c.strokeRect(260,60,220,160);
        c.strokeRect(80,220,180,120); c.strokeRect(260,220,220,120);
        c.fillStyle='#64a0ff'; c.font='11px sans-serif'; c.textAlign='center';
        c.fillText('안방',170,145); c.fillText('대청',370,145);
        c.fillText('부업',170,285); c.fillText('사랑방',370,285);
        // ondol lines
        c.strokeStyle='#e74c3c'; c.lineWidth=2; c.setLineDash([6,4]);
        c.beginPath(); c.moveTo(120,230); c.lineTo(120,100); c.lineTo(230,100); c.lineTo(230,190); c.lineTo(120,190); c.stroke();
        c.setLineDash([]);
        c.fillStyle='#e74c3c'; c.font='9px sans-serif'; c.textAlign='left';
        c.fillText('온돌 굴뚝',110,90);
        // water pipes
        c.strokeStyle='#3498db'; c.lineWidth=1.5; c.setLineDash([4,4]);
        c.beginPath(); c.moveTo(170,340); c.lineTo(170,280); c.lineTo(120,280); c.lineTo(120,250); c.stroke();
        c.setLineDash([]);
        c.fillStyle='#3498db'; c.fillText('배관',175,335);
        // electrical
        c.strokeStyle='#f1c40f'; c.lineWidth=1; c.setLineDash([2,3]);
        c.beginPath(); c.moveTo(480,200); c.lineTo(440,200); c.lineTo(440,140); c.lineTo(350,140); c.stroke();
        c.setLineDash([]);
        c.fillStyle='#f1c40f'; c.font='9px sans-serif'; c.textAlign='right';
        c.fillText('전기',485,195);
        // legend
        c.fillStyle='rgba(0,0,0,.5)'; c.fillRect(W-130,H-75,120,65);
        c.font='10px sans-serif'; c.textAlign='left';
        c.fillStyle='#e74c3c'; c.fillText('── 온돌',W-120,H-58);
        c.fillStyle='#3498db'; c.fillText('── 배관',W-120,H-43);
        c.fillStyle='#f1c40f'; c.fillText('── 전기',W-120,H-28);
        break;
    }

    var info = document.getElementById('v12-bp-info');
    if(info) info.innerHTML = '<strong style="color:#f5deb3">'+bpTypes[currentBP].name+'</strong><br>'+bpTypes[currentBP].desc;
  }
  function open(){ document.getElementById('v12-blueprint').classList.add('active'); if(viewed.indexOf(currentBP)<0){viewed.push(currentBP);save();} renderTabs(); draw(); v12SFX.play('blueprint_view'); }
  function close(){ document.getElementById('v12-blueprint').classList.remove('active'); }
  return {open:open,close:close,viewed:viewed,load:function(){}};
})();

// ── 10. Building Safety Diagnosis (건축 안전 진단 10항목 Canvas Radar) ──
var v12Safety = (function(){
  var KEY = 'hb_v12_safety';
  var items = [
    {name:'구조 안전성',desc:'기둥, 보, 지붕의 구조적 건전성 점검',weight:15},
    {name:'내진 설계',desc:'지진 대비 내진 설계 적용 여부',weight:12},
    {name:'방화 안전',desc:'내화 재료, 방화벽, 소화기 설치',weight:12},
    {name:'피난 동선',desc:'비상구 확보, 피난 계단 설치',weight:10},
    {name:'전기 안전',desc:'배선, 접지, 차단기 정상 작동',weight:10},
    {name:'배관 상태',desc:'급배수, 배수, 환기 배관 상태',weight:8},
    {name:'방수/방습',desc:'지붕, 바닥, 벽체의 방수 처리',weight:8},
    {name:'단열 성능',desc:'벽체, 창호, 지붕의 단열 성능',weight:8},
    {name:'환경 유해물',desc:'석면, 폼알데히드, 라돈 검사',weight:9},
    {name:'접근성/편의',desc:'문틱 높이, 계단 폭, 핸드레일',weight:8}
  ];
  var checked = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(checked)); }
  function renderList(){
    var el = document.getElementById('v12-safety-list'); if(!el) return;
    el.innerHTML = items.map(function(it,i){
      var isChecked = checked.indexOf(i)>=0;
      return '<div class="v12-check-item'+(isChecked?' checked':'')+'" data-idx="'+i+'">' +
        '<div class="chk">'+(isChecked?'✔':'')+'</div>' +
        '<div class="chk-info"><h4>'+it.name+' <span class="tag" style="font-size:10px">배점 '+it.weight+'</span></h4><p>'+it.desc+'</p></div></div>';
    }).join('');
    el.querySelectorAll('.v12-check-item').forEach(function(item){
      item.onclick = function(){
        var idx = parseInt(item.dataset.idx);
        var pos = checked.indexOf(idx);
        if(pos>=0) checked.splice(pos,1); else checked.push(idx);
        save(); v12SFX.play('safety_check'); renderList(); drawRadar(); v12Achieve.check();
      };
    });
  }
  function drawRadar(){
    var cv = document.getElementById('v12-safety-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height, cx=W/2, cy=H/2+10, R=140;
    c.clearRect(0,0,W,H);
    var n = items.length;
    // grid
    for(var lvl=1;lvl<=5;lvl++){
      c.beginPath();
      for(var i=0;i<n;i++){
        var a = -Math.PI/2+(2*Math.PI/n)*i;
        var r = R*(lvl/5);
        var px = cx+r*Math.cos(a), py = cy+r*Math.sin(a);
        if(i===0) c.moveTo(px,py); else c.lineTo(px,py);
      }
      c.closePath(); c.strokeStyle='rgba(196,149,106,'+(lvl===5?.4:.15)+')'; c.stroke();
    }
    // axes
    for(var i=0;i<n;i++){
      var a = -Math.PI/2+(2*Math.PI/n)*i;
      c.beginPath(); c.moveTo(cx,cy); c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));
      c.strokeStyle='rgba(196,149,106,.2)'; c.stroke();
      c.fillStyle='#f5deb3'; c.font='10px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      var lbl = items[i].name.length > 5 ? items[i].name.substring(0,5) : items[i].name;
      c.fillText(lbl, cx+(R+22)*Math.cos(a), cy+(R+22)*Math.sin(a));
    }
    // data
    c.beginPath();
    for(var i=0;i<n;i++){
      var a = -Math.PI/2+(2*Math.PI/n)*i;
      var val = checked.indexOf(i)>=0 ? 1 : 0.15;
      var px = cx+R*val*Math.cos(a), py = cy+R*val*Math.sin(a);
      if(i===0) c.moveTo(px,py); else c.lineTo(px,py);
    }
    c.closePath();
    c.fillStyle='rgba(74,124,89,.2)'; c.fill();
    c.strokeStyle='#4a7c59'; c.lineWidth=2; c.stroke();
    // dots
    for(var i=0;i<n;i++){
      var a = -Math.PI/2+(2*Math.PI/n)*i;
      var val = checked.indexOf(i)>=0 ? 1 : 0.15;
      c.beginPath(); c.arc(cx+R*val*Math.cos(a),cy+R*val*Math.sin(a),4,0,Math.PI*2);
      c.fillStyle = checked.indexOf(i)>=0 ? '#4a7c59' : 'rgba(196,149,106,.4)'; c.fill();
    }
    // score
    var totalWeight = items.reduce(function(s,it){return s+it.weight;},0);
    var earnedWeight = checked.reduce(function(s,idx){return s+items[idx].weight;},0);
    var score = Math.round(earnedWeight/totalWeight*100);
    var grade = score>=90?'S':score>=80?'A':score>=60?'B':score>=40?'C':'D';
    var gradeColor = {S:'#4a7c59',A:'#6a9f4a',B:'#c4956a',C:'#d4764a',D:'#b43c3c'}[grade];

    var gradeEl = document.getElementById('v12-safety-grade');
    if(gradeEl) gradeEl.innerHTML = '<span style="color:'+gradeColor+';font-size:48px">'+grade+'</span><br><span style="color:#c4956a;font-size:16px">안전점수: '+score+'/100 ('+checked.length+'/'+items.length+'항목 통과)</span>';

    if(score>=90) v12SFX.play('safety_pass');
  }
  function open(){ document.getElementById('v12-safety').classList.add('active'); renderList(); drawRadar(); }
  function close(){ document.getElementById('v12-safety').classList.remove('active'); }
  return {open:open,close:close,checked:checked,load:function(){}};
})();

// ── 11. Building Timeline / Timelapse (건축 타임캡슐 Canvas Timeline) ──
var v12Timeline = (function(){
  var KEY = 'hb_v12_timeline';
  var timelines = [
    {name:'한옥 건;&#xCD95;',stages:[
      {name:'터;다지기;',dur:'1주',desc:'풍수지리 분석 후 터 정지 작업'},
      {name:'기;초공;사',dur:'2주',desc:'주초돌 놓고 기;단 쌓기'},
      {name:'기;둥; 세우;기',dur:'3주',desc:'원목 기둥을 기초 위에 세움'},
      {name:'보;와 도;리',dur:'2주',desc:'보와 도리를 결구하여 골격 완성'},
      {name:'지;붕; 올리;기',dur:'3주',desc:'서까래, 추녕, 기와 올리기'},
      {name:'벽;체; 쌓기;',dur:'2주',desc:'황토벗+살 엮기 벽체 완성'},
      {name:'온;돌; 놓;기',dur:'2주',desc:'굴뚝 및 구들장 설치'},
      {name:'창;호; 달;기',dur:'1주',desc:'문살, 창호지 바르기'},
      {name:'단;청; 칠;하;기',dur:'2주',desc:'오;방;색 단청 칠하기'},
      {name:'완;공',dur:'-',desc:'종합 점검 및 입주'}
    ]},
    {name:'기;와;집; 건축',stages:[
      {name:'터;다;지기',dur:'1주',desc:'평탄 및 기초 준비'},
      {name:'기;초; 공;사',dur:'3주',desc:'시멘;트; 기;초; 타;설'},
      {name:'벽;돌; 쌓;기',dur:'4주',desc:'벽;돌;/벽;들; 적;층'},
      {name:'지;붕; 공;사',dur:'2주',desc:'기;와; 올;리;기'},
      {name:'내;부; 마;감',dur:'3주',desc:'바;닥;, 벽;체;, 천;장; 마;감'},
      {name:'외;부; 마;감',dur:'2주',desc:'외;벽; 마;감; 및 방;수'},
      {name:'설;비;',dur:'2주',desc:'전;기;/배;관;/난;방;'},
      {name:'조;경;',dur:'1주',desc:'마;당; 및 정;원; 조;성'},
      {name:'완;공;',dur:'-',desc:'준;공; 검;사; 및 입;주'}
    ]},
    {name:'현;대;주;택; 건;축',stages:[
      {name:'설;계;',dur:'4주',desc:'건;축; 설;계; 및 허;가;'},
      {name:'기;초;',dur:'3주',desc:'철;근;콘;크;리;트; 기;초;'},
      {name:'골;조;',dur:'4주',desc:'RC 프;레;임; 시;공;'},
      {name:'지;붕;',dur:'2주',desc:'방;수; + 기;와;/슬;레;이;트;'},
      {name:'외;벽;',dur:'3주',desc:'단;열;재; + 외;장; 마;감;'},
      {name:'창;호;',dur:'2주',desc:'창;문;/문; 설;치;'},
      {name:'설;비;',dur:'3주',desc:'전;기;/수;도;/난;방;/환;기;'},
      {name:'내;장;',dur:'4주',desc:'바;닥;/벽;지;/타;일;/페;인;트;'},
      {name:'조;경;',dur:'2주',desc:'정;원;/주;차;장;/편;스;'},
      {name:'완;공;',dur:'-',desc:'준;공; 검;사; 및 입;주'}
    ]}
  ];
  var currentTL = 0;
  var animFrame = -1;
  var animProgress = 0;
  var visited = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(visited)); }
  function renderTabs(){
    var el = document.getElementById('v12-tl-tabs'); if(!el) return;
    el.innerHTML = timelines.map(function(t,i){ return '<button class="v12-tab'+(i===currentTL?' active':'')+'" data-idx="'+i+'">'+t.name+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick = function(){ currentTL=parseInt(btn.dataset.idx); if(visited.indexOf(currentTL)<0){visited.push(currentTL);save();} renderTabs(); animProgress=0; draw(); v12SFX.play('timeline_play'); v12Achieve.check(); }; });
  }
  function draw(){
    var cv = document.getElementById('v12-tl-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    var tl = timelines[currentTL];
    var stages = tl.stages;
    var n = stages.length;
    c.clearRect(0,0,W,H);

    var lineY = H/2;
    var startX = 50, endX = W-50;
    var stepW = (endX-startX)/(n-1);

    // timeline line
    c.strokeStyle = 'rgba(196,149,106,.3)'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(startX,lineY); c.lineTo(endX,lineY); c.stroke();

    // progress line
    var progX = startX + (endX-startX) * Math.min(animProgress, 1);
    c.strokeStyle = '#4a7c59'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(startX,lineY); c.lineTo(progX,lineY); c.stroke();

    stages.forEach(function(st,i){
      var x = startX + stepW * i;
      var isActive = (i / (n-1)) <= animProgress;

      // node
      c.beginPath(); c.arc(x, lineY, 10, 0, Math.PI*2);
      c.fillStyle = isActive ? '#4a7c59' : 'rgba(196,149,106,.2)';
      c.fill();
      c.strokeStyle = isActive ? '#6abc6a' : 'rgba(196,149,106,.4)'; c.lineWidth = 2; c.stroke();

      if(isActive){
        c.fillStyle = '#fff'; c.font = 'bold 10px sans-serif'; c.textAlign = 'center';
        c.fillText(String(i+1), x, lineY+4);
      }

      // label
      var above = i%2===0;
      var ly = above ? lineY-30 : lineY+35;
      c.fillStyle = isActive ? '#f5deb3' : '#c4956a'; c.font = (isActive?'bold ':'')+'11px sans-serif'; c.textAlign = 'center';
      var cleanName = st.name.replace(/;/g,'');
      c.fillText(cleanName, x, ly);

      if(st.dur !== '-'){
        c.fillStyle = 'rgba(196,149,106,.6)'; c.font = '9px sans-serif';
        c.fillText(st.dur, x, above ? ly-14 : ly+14);
      }
    });

    // title
    c.fillStyle = '#f5deb3'; c.font = 'bold 14px sans-serif'; c.textAlign = 'center';
    c.fillText(tl.name.replace(/;/g,'') + ' 타;임;라;인'.replace(/;/g,''), W/2, 25);

    var pct = Math.round(animProgress*100);
    c.fillStyle = '#c4956a'; c.font = '12px sans-serif';
    c.fillText('진;행;률;: '.replace(/;/g,'')+pct+'%', W/2, H-15);

    var info = document.getElementById('v12-tl-info');
    if(info){
      var activeIdx = Math.min(Math.floor(animProgress * n), n-1);
      var s = stages[activeIdx];
      info.innerHTML = '<strong style="color:#f5deb3">['+String(activeIdx+1)+'/'+n+'] '+(s.name.replace(/;/g,''))+'</strong> - '+(s.desc.replace(/;/g,''));
    }
  }
  function animate(){
    if(animFrame >= 0) cancelAnimationFrame(animFrame);
    animProgress = 0;
    function step(){
      animProgress += 0.005;
      if(animProgress > 1.05){ animProgress = 1; draw(); return; }
      draw();
      animFrame = requestAnimationFrame(step);
    }
    step();
  }
  function open(){
    document.getElementById('v12-timeline').classList.add('active');
    if(visited.indexOf(currentTL)<0){visited.push(currentTL);save();}
    renderTabs(); animProgress=0; draw();
    document.getElementById('v12-tl-play').onclick = function(){ animate(); v12SFX.play('timeline_play'); };
    document.getElementById('v12-tl-reset').onclick = function(){ animProgress=0; if(animFrame>=0){cancelAnimationFrame(animFrame);animFrame=-1;} draw(); };
  }
  function close(){ document.getElementById('v12-timeline').classList.remove('active'); if(animFrame>=0){cancelAnimationFrame(animFrame);animFrame=-1;} }
  return {open:open,close:close,visited:visited,load:function(){}};
})();

// ── 12. Quiz v12 (+15 questions, 105→120) ──
var v12Quiz = (function(){
  var questions = [
    {q:'한옥에서 대청마루의 주요 기능은?',a:['여름 생활공간','겨울 난방','음식 보관','물건 저장'],c:0},
    {q:'구조 역학에서 안전율이 3.0 이상이면?',a:['S등급','A등급','B등급','C등급'],c:0},
    {q:'한옥 건축에서 온돌은 어느 단계에 설치하는가?',a:['벽체 후','기둥 전','지붕 후','기초 전'],c:0},
    {q:'평면도는 건물을 어디에서 본 도면인가?',a:['위에서','정면에서','측면에서','비스듬히'],c:0},
    {q:'조경 설계에서 차경(借景)이란?',a:['먼 산을 정원 일부로 활용','담장 안 조경','배수 시설','조경 조명'],c:0},
    {q:'부업(주방)의 특징은?',a:['아궁이와 부뜰막','벽난로','엘리베이터','아일랜드'],c:0},
    {q:'건축 안전 진단에서 구조 안전성의 배점은?',a:['15점','10점','20점','12점'],c:0},
    {q:'한옥 건축 과정에서 단청 칠하기는 몇 번째 단계?',a:'9번째,7번째,5번째,3번째'.split(',').map(function(x){return x;}),c:0},
    {q:'철근콘크리트 구조의 탄성계수(GPa)는?',a:['30','12','200','8'],c:0},
    {q:'건축 비용에서 가장 비율이 높은 항목은?',a:['재료비','인건비','설비비','기타'],c:0},
    {q:'사랑방은 누구의 공간인가?',a:['남성 주인','여성 주인','자녀','하인'],c:0},
    {q:'정원에서 괴석의 역할은?',a:['경관 및 방향 표시','담장 대용','기초 보강','배수 처리'],c:0},
    {q:'무;량;수;전;의; 건;축; 양;식;은?',a:['배흠림지붕','우진각지붕','팛;지;붕','무;지;개;지;붕'],c:0},
    {q:'누;마;루;는; 한;옥;의; 몇; 층;에; 위;치;하;는;가;?',a:['2층','1층','3층','지하'],c:0},
    {q:'측;간;의; 주;요; 용;도;는;?',a:['음;식; 보;관','잠;자;기','손;님; 접;대','학;문; 연;구'],c:0}
  ];
  function inject(){
    if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){
      questions.forEach(function(q){
        var dup = window.quizQuestions.some(function(eq){return eq.q===q.q;});
        if(!dup) window.quizQuestions.push(q);
      });
    }
  }
  return {inject:inject,count:questions.length};
})();

// ── 13. Achievement System v12 (+12, 110→122) ──
var v12Achieve = (function(){
  var KEY = 'hb_achievements';
  var defs = [
    {id:'interior_first',name:'인테리어 입문',desc:'가구 5개 이상 배치',icon:'🛋️',check:function(){return v12Interior.grid.filter(function(g){return g!==null;}).length>=5;}},
    {id:'interior_master',name:'인테리어 마스터',desc:'가구 30개 이상 배치',icon:'🏅',check:function(){return v12Interior.grid.filter(function(g){return g!==null;}).length>=30;}},
    {id:'struct_student',name:'구조 학습자',desc:'구조역학 3종 분석',icon:'🏗️',check:function(){return v12Struct.visited.length>=3;}},
    {id:'struct_master',name:'구조 전문가',desc:'구조역학 6종 전부 분석',icon:'📊',check:function(){return v12Struct.visited.length>=6;}},
    {id:'cost_planner',name:'비용 계획가',desc:'건축비용 견적 시스템 사용',icon:'💰',check:function(){return v12Cost.used();}},
    {id:'garden_planner',name:'조경 설계사',desc:'정원에 20개 이상 배치',icon:'🌿',check:function(){return v12Garden.grid.filter(function(g){return g!==null;}).length>=20;}},
    {id:'hanok_explorer',name:'한옥 탐험가',desc:'한옥 인테리어 6종 이상 확인',icon:'🏯',check:function(){return v12HanokInt.readList.length>=6;}},
    {id:'hanok_master',name:'한옥 대가',desc:'한옥 인테리어 12종 전부 확인',icon:'👑',check:function(){return v12HanokInt.readList.length>=12;}},
    {id:'bp_reader',name:'도면 학습자',desc:'건축 도면 3종 이상 학습',icon:'📐',check:function(){return v12Blueprint.viewed.length>=3;}},
    {id:'bp_master',name:'도면 마스터',desc:'건축 도면 6종 전부 학습',icon:'📝',check:function(){return v12Blueprint.viewed.length>=6;}},
    {id:'safety_inspector',name:'안전 검사관',desc:'안전 진단 7항목 이상 통과',icon:'🛡️',check:function(){return v12Safety.checked.length>=7;}},
    {id:'v12_explorer',name:'v12 탐험가',desc:'v12의 모든 기능 탐험',icon:'🌟',check:function(){return v12Interior.grid.filter(function(g){return g!==null;}).length>0 && v12Struct.visited.length>0 && v12HanokInt.readList.length>0 && v12Blueprint.viewed.length>0 && v12Safety.checked.length>0;}}
  ];
  var earned = JSON.parse(localStorage.getItem(KEY)||'[]');
  function check(){
    var nw = false;
    defs.forEach(function(d){
      if(earned.indexOf(d.id)<0 && d.check()){
        earned.push(d.id); nw = true; showToast(d);
      }
    });
    if(nw) localStorage.setItem(KEY, JSON.stringify(earned));
  }
  function showToast(d){
    v12SFX.play('achieve_v12');
    var t = document.getElementById('achToast'); if(!t) return;
    t.querySelector('.ach-icon').textContent = d.icon;
    t.querySelector('.ach-name').textContent = d.name;
    t.classList.add('show');
    setTimeout(function(){t.classList.remove('show');},3000);
  }
  return {check:check,earned:earned};
})();

// ── 14. Bottom Scroll Navigation Bar (하단 스크롤 네비바 8종) ──
(function(){
  var actions = [
    {icon:'🛋️',label:'인테리어',fn:function(){v12Interior.open();}},
    {icon:'🏗️',label:'구조역학',fn:function(){v12Struct.open();}},
    {icon:'💰',label:'견적',fn:function(){v12Cost.open();}},
    {icon:'🌿',label:'조경',fn:function(){v12Garden.open();}},
    {icon:'🏯',label:'한옥인테리어',fn:function(){v12HanokInt.open();}},
    {icon:'📐',label:'도면학습',fn:function(){v12Blueprint.open();}},
    {icon:'🛡️',label:'안전진단',fn:function(){v12Safety.open();}},
    {icon:'⏳',label:'타임캡슐',fn:function(){v12Timeline.open();}}
  ];
  function inject(){
    var bar = document.createElement('div'); bar.id = 'v12-nav';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;height:52px;background:linear-gradient(180deg,rgba(45,27,14,.95),rgba(30,18,8,.98));border-top:1px solid rgba(196,149,106,.3);z-index:298;display:flex;align-items:center;overflow-x:auto;gap:4px;padding:0 8px;-webkit-overflow-scrolling:touch';
    actions.forEach(function(a){
      var btn = document.createElement('button');
      btn.style.cssText = 'flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:2px;padding:4px 12px;border:none;border-radius:8px;background:transparent;color:#e8d5c0;cursor:pointer;font-family:inherit;transition:all .2s;min-width:60px';
      btn.innerHTML = '<span style="font-size:18px">'+a.icon+'</span><span style="font-size:9px;white-space:nowrap">'+a.label+'</span>';
      btn.onmouseenter = function(){ btn.style.background='rgba(196,149,106,.2)'; };
      btn.onmouseleave = function(){ btn.style.background='transparent'; };
      btn.onclick = a.fn;
      bar.appendChild(btn);
    });
    document.body.appendChild(bar);
    // adjust existing v11 FAB position to not overlap
    var v11fab = document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom = '60px';
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.key.toUpperCase()){
      case 'I': e.preventDefault(); v12Interior.open(); break;
      case 'X': e.preventDefault(); v12Struct.open(); break;
      case 'C': e.preventDefault(); v12Cost.open(); break;
      case 'G': e.preventDefault(); v12Garden.open(); break;
      case 'H': e.preventDefault(); v12HanokInt.open(); break;
      case 'D': e.preventDefault(); v12Blueprint.open(); break;
      case 'F': e.preventDefault(); v12Safety.open(); break;
      case 'T': e.preventDefault(); v12Timeline.open(); break;
    }
  });
})();

// ── 16. Panel Open/Close helpers ──
window.v12Close = function(panel){
  var map = {'interior':v12Interior,'struct':v12Struct,'cost':v12Cost,'garden':v12Garden,'hanok-int':v12HanokInt,'blueprint':v12Blueprint,'safety':v12Safety,'timeline':v12Timeline};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v12Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v12Hooked) return true;
    window.__v12Hooked = true;
    var prev = window.showComplete;
    window.showComplete = function(){ prev.apply(this,arguments); v12Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 19. Initial load + checks ──
(function(){
  v12Interior.load(); v12Struct.load(); v12Cost.load(); v12Garden.load();
  v12HanokInt.load(); v12Blueprint.load(); v12Safety.load(); v12Timeline.load();
  setTimeout(function(){ v12Achieve.check(); },3500);
})();

// end v12 guard
}

// =====================================================
// House Builder v12.0 Patch
// 인테리어디자이너Canvas12가구+건축비용계산기CanvasPie+Bar+풍수나침반Canvas8방위
// 건축시대연표Canvas10시대+방배치플래너Canvas10x8+건축도전과제8종+건축용어사전40항목
// 건축공유카드CanvasPNG+퀴즈15추가(105→120)+업적12추가(110→122)+SFX12종+키보드8종
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
    '.v12-box{max-width:680px;margin:40px auto}',
    '.v12-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v12-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v12-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v12-close:hover{background:#d4a57a}',
    '.v12-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v12-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v12-tab:hover,.v12-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v12-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}',
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
    '.v12-room-cell{width:48px;height:48px;border:1px solid rgba(196,149,106,.15);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .15s;background:rgba(255,255,255,.02)}',
    '.v12-room-cell:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v12-room-cell.placed{background:rgba(196,149,106,.12);border-color:rgba(196,149,106,.4)}',
    '.v12-challenge{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;transition:all .2s}',
    '.v12-challenge.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v12-challenge h4{color:#f5deb3;font-size:13px;margin:0 0 6px}',
    '.v12-challenge p{color:#c4956a;font-size:12px;margin:0 0 8px}',
    '.v12-challenge .prog-bar{height:14px;background:rgba(255,255,255,.08);border-radius:7px;overflow:hidden}',
    '.v12-challenge .prog-fill{height:100%;border-radius:7px;background:linear-gradient(90deg,#c4956a,#4a7c59);transition:width .4s}',
    '.v12-challenge .prog-text{color:#f5deb3;font-size:11px;text-align:right;margin-top:4px}',
    '.v12-search{width:100%;padding:10px 16px;border:1px solid rgba(196,149,106,.3);border-radius:20px;background:rgba(255,255,255,.05);color:#f5deb3;font-size:13px;margin-bottom:16px;font-family:inherit;outline:none}',
    '.v12-search:focus{border-color:#c4956a;background:rgba(255,255,255,.08)}',
    '.v12-search::placeholder{color:rgba(196,149,106,.5)}',
    '.v12-cost-row{display:flex;align-items:center;gap:10px;margin-bottom:8px;padding:10px 14px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px}',
    '.v12-cost-row .cost-label{flex:1;color:#f5deb3;font-size:13px}',
    '.v12-cost-row input[type=range]{flex:1;accent-color:#c4956a}',
    '.v12-cost-row .cost-val{min-width:70px;color:#c4956a;font-size:13px;text-align:right}',
    '@media(max-width:600px){.v12-box{margin:16px auto}.v12-grid{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}.v12-room-cell{width:36px;height:36px;font-size:14px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v12 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v12-panels';
  wrap.innerHTML = '<div id="v12-interior" class="v12-panel"><div class="v12-box"><h2>&#x1F6CB;&#xFE0F; &#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xB514;&#xC790;&#xC774;&#xB108;</h2><p>12&#xC885; &#xAC00;&#xAD6C;&#xB85C; &#xBC29;&#xC744; &#xAFB8;&#xBA70;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-int-tabs"></div><div id="v12-int-grid" style="display:inline-grid;grid-template-columns:repeat(10,48px);gap:1px;margin:10px auto;justify-content:center"></div><div id="v12-int-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><canvas id="v12-int-canvas" class="v12-canvas" width="500" height="300"></canvas><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-int-save">&#xC800;&#xC7A5;</button> <button class="v12-btn-outline" id="v12-int-clear">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'interior\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-cost" class="v12-panel"><div class="v12-box"><h2>&#x1F4B0; &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xACC4;&#xC0B0;&#xAE30;</h2><p>&#xC7AC;&#xB8CC;&#xBE44;+&#xC778;&#xAC74;&#xBE44;+&#xC124;&#xACC4;&#xBE44; &#xCD1D; &#xC608;&#xC0B0; &#xBD84;&#xC11D;</p><div id="v12-cost-inputs"></div><canvas id="v12-cost-canvas" class="v12-canvas" width="560" height="340"></canvas><div id="v12-cost-summary" style="text-align:center;color:#f5deb3;font-size:14px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'cost\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-fengshui" class="v12-panel"><div class="v12-box"><h2>&#x1FA90; &#xD48D;&#xC218; &#xB098;&#xCE68;&#xBC18;</h2><p>8&#xBC29;&#xC704; &#xD48D;&#xC218; &#xBD84;&#xC11D;&#xACFC; &#xBC30;&#xCE58; &#xAC00;&#xC774;&#xB4DC;</p><canvas id="v12-feng-canvas" class="v12-canvas" width="400" height="400"></canvas><div id="v12-feng-result" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><div style="text-align:center;margin:12px 0"><button class="v12-btn-sm" id="v12-feng-analyze">&#xBD84;&#xC11D;&#xD558;&#xAE30;</button> <button class="v12-btn-outline" id="v12-feng-reset">&#xCD08;&#xAE30;&#xD654;</button></div><div id="v12-feng-tips"></div><button class="v12-close" onclick="v12Close(\'fengshui\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-timeline" class="v12-panel"><div class="v12-box"><h2>&#x1F3DB;&#xFE0F; &#xAC74;&#xCD95; &#xC2DC;&#xB300; &#xC5F0;&#xD45C;</h2><p>&#xD55C;&#xAD6D; &#xAC74;&#xCD95; 10&#xC2DC;&#xB300; &#xBCC0;&#xCC9C;&#xC0AC;</p><canvas id="v12-time-canvas" class="v12-canvas" width="640" height="380"></canvas><div id="v12-time-detail" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'timeline\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-layout" class="v12-panel"><div class="v12-box"><h2>&#x1F4D0; &#xBC29; &#xBC30;&#xCE58; &#xD50C;&#xB798;&#xB108;</h2><p>10x8 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; &#xBC29;&#xC744; &#xBC30;&#xCE58;&#xD558;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-layout-tools"></div><div id="v12-layout-grid" style="display:inline-grid;grid-template-columns:repeat(10,48px);gap:1px;margin:10px auto;justify-content:center"></div><div id="v12-layout-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-layout-save">&#xC800;&#xC7A5;</button> <button class="v12-btn-outline" id="v12-layout-clear">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'layout\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-challenge" class="v12-panel"><div class="v12-box"><h2>&#x1F3AF; &#xAC74;&#xCD95; &#xB3C4;&#xC804;&#xACFC;&#xC81C;</h2><p>8&#xC885; &#xC8FC;&#xAC04; &#xB3C4;&#xC804;&#xACFC;&#xC81C;</p><div id="v12-challenge-list"></div><div style="text-align:center;margin:12px 0"><button class="v12-btn-sm" id="v12-challenge-refresh">&#xC0C8;&#xB85C;&#xACE0;&#xCE68;</button></div><button class="v12-close" onclick="v12Close(\'challenge\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-dict" class="v12-panel"><div class="v12-box"><h2>&#x1F4D6; &#xAC74;&#xCD95; &#xC6A9;&#xC5B4; &#xC0AC;&#xC804;</h2><p>40&#xD56D;&#xBAA9; 8&#xCE74;&#xD14C;&#xACE0;&#xB9AC;</p><input type="text" class="v12-search" id="v12-dict-search" placeholder="&#xC6A9;&#xC5B4; &#xAC80;&#xC0C9;..."><div class="v12-tabs" id="v12-dict-tabs"></div><div id="v12-dict-list"></div><button class="v12-close" onclick="v12Close(\'dict\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v12-share" class="v12-panel"><div class="v12-box"><h2>&#x1F4E4; &#xAC74;&#xCD95; &#xACF5;&#xC720; &#xCE74;&#xB4DC;</h2><p>&#xB098;&#xC758; &#xAC74;&#xCD95; &#xD65C;&#xB3D9; &#xCE74;&#xB4DC;&#xB97C; &#xC0DD;&#xC131;&#xD558;&#xC138;&#xC694;</p><canvas id="v12-share-canvas" class="v12-canvas" width="600" height="380"></canvas><div style="text-align:center;margin:12px 0"><button class="v12-btn-sm" id="v12-share-download">&#x1F4BE; PNG &#xB2E4;&#xC6B4;&#xB85C;&#xB4DC;</button> <button class="v12-btn-outline" id="v12-share-copy">&#x1F4CB; &#xD074;&#xB9BD;&#xBCF4;&#xB4DC; &#xBCF5;&#xC0AC;</button></div><button class="v12-close" onclick="v12Close(\'share\')">&#xB2EB;&#xAE30;</button></div></div>';
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
      case 'cost_calc': o.type='square'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(554,t+.1); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'feng_analyze': o.type='triangle'; o.frequency.setValueAtTime(349,t); o.frequency.linearRampToValueAtTime(523,t+.2); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.35); o.start(t); o.stop(t+.35); break;
      case 'timeline_click': o.type='sine'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(494,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.18); o.start(t); o.stop(t+.18); break;
      case 'layout_place': o.type='triangle'; o.frequency.setValueAtTime(587,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
      case 'challenge_done': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.35); o.start(t); o.stop(t+.35); break;
      case 'dict_open': o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.12); o.start(t); o.stop(t+.12); break;
      case 'share_gen': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(523,t+.1); o.frequency.linearRampToValueAtTime(659,t+.2); g.gain.setValueAtTime(.14,t); g.gain.linearRampToValueAtTime(0,t+.35); o.start(t); o.stop(t+.35); break;
      case 'share_copy': o.type='sine'; o.frequency.setValueAtTime(659,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.12); o.start(t); o.stop(t+.12); break;
      case 'challenge_refresh': o.type='square'; o.frequency.setValueAtTime(330,t); o.frequency.linearRampToValueAtTime(440,t+.1); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'achieve_v12': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); o.frequency.linearRampToValueAtTime(1047,t+.3); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.45); o.start(t); o.stop(t+.45); break;
      default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1);
    }
  }
  return {play:play,ctx:ctx};
})();

// ── 4. Interior Designer (인테리어 디자이너 12가구 Canvas) ──
var v12Interior = (function(){
  var KEY='hb_v12_interior', COLS=10, ROWS=8;
  var furniture=[
    {name:'지우기',icon:'&#x274C;',id:'erase',cat:'도구'},
    {name:'침대',icon:'&#x1F6CF;&#xFE0F;',id:'bed',cat:'침실'},
    {name:'책상',icon:'&#x1F4DA;',id:'desk',cat:'서재'},
    {name:'의자',icon:'&#x1FA91;',id:'chair',cat:'서재'},
    {name:'소파',icon:'&#x1F6CB;&#xFE0F;',id:'sofa',cat:'거실'},
    {name:'TV',icon:'&#x1F4FA;',id:'tv',cat:'거실'},
    {name:'식탁',icon:'&#x1F37D;&#xFE0F;',id:'table',cat:'주방'},
    {name:'냉장고',icon:'&#x1F9CA;',id:'fridge',cat:'주방'},
    {name:'화분',icon:'&#x1FAB4;',id:'plant',cat:'장식'},
    {name:'액자',icon:'&#x1F5BC;&#xFE0F;',id:'frame',cat:'장식'},
    {name:'조명',icon:'&#x1F4A1;',id:'light',cat:'장식'},
    {name:'옷장',icon:'&#x1F45A;',id:'closet',cat:'침실'},
    {name:'욕조',icon:'&#x1F6C1;',id:'bath',cat:'욕실'}
  ];
  var selectedTool='bed';
  var grid=JSON.parse(localStorage.getItem(KEY)||'null');
  if(!grid){grid=[];for(var i=0;i<COLS*ROWS;i++)grid.push('');}
  function save(){localStorage.setItem(KEY,JSON.stringify(grid));}
  function renderTools(){
    var el=document.getElementById('v12-int-tabs'); if(!el) return;
    el.innerHTML=furniture.map(function(f){ return '<button class="v12-tab'+(selectedTool===f.id?' active':'')+'" data-id="'+f.id+'">'+f.icon+' '+f.name+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick=function(){ selectedTool=btn.dataset.id; el.querySelectorAll('.v12-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); }; });
  }
  function renderGrid(){
    var el=document.getElementById('v12-int-grid'); if(!el) return;
    el.innerHTML='';
    for(var i=0;i<COLS*ROWS;i++){
      var cell=document.createElement('div'); cell.className='v12-room-cell'+(grid[i]?' placed':''); cell.dataset.idx=i;
      var furn=furniture.find(function(f){return f.id===grid[i];}); cell.innerHTML=furn?furn.icon:'';
      cell.onclick=function(){ var idx=parseInt(this.dataset.idx); grid[idx]=selectedTool==='erase'?'':selectedTool; save(); v12SFX.play('interior_place'); renderGrid(); renderStats(); drawFloorplan(); };
      el.appendChild(cell);
    }
  }
  function renderStats(){
    var el=document.getElementById('v12-int-stats'); if(!el) return;
    var counts={}; grid.forEach(function(g){if(g)counts[g]=(counts[g]||0)+1;});
    var total=grid.filter(function(g){return g;}).length;
    var parts=[]; furniture.forEach(function(f){if(f.id!=='erase'&&counts[f.id])parts.push(f.icon+counts[f.id]);});
    el.innerHTML='&#xBC30;&#xCE58;: '+total+'/'+(COLS*ROWS)+' | '+parts.join(' ');
  }
  function drawFloorplan(){
    var cv=document.getElementById('v12-int-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    var cw=W/COLS, ch=H/ROWS;
    for(var r=0;r<ROWS;r++){
      for(var col=0;col<COLS;col++){
        var idx=r*COLS+col;
        c.strokeStyle='rgba(196,149,106,.2)'; c.strokeRect(col*cw,r*ch,cw,ch);
        if(grid[idx]){
          var furn=furniture.find(function(f){return f.id===grid[idx];});
          var colors={bed:'rgba(147,112,219,.3)',desk:'rgba(196,149,106,.3)',chair:'rgba(196,149,106,.2)',sofa:'rgba(69,183,209,.3)',tv:'rgba(100,100,100,.3)',table:'rgba(139,90,43,.3)',fridge:'rgba(200,200,200,.3)',plant:'rgba(74,124,89,.3)',frame:'rgba(196,149,106,.2)',light:'rgba(255,215,0,.3)',closet:'rgba(139,90,43,.3)',bath:'rgba(69,183,209,.25)'};
          c.fillStyle=colors[grid[idx]]||'rgba(196,149,106,.2)';
          c.fillRect(col*cw+1,r*ch+1,cw-2,ch-2);
          if(furn){ c.font='16px sans-serif'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(furn.icon.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));}), col*cw+cw/2, r*ch+ch/2); }
        }
      }
    }
    c.strokeStyle='rgba(196,149,106,.5)'; c.lineWidth=2; c.strokeRect(0,0,W,H);
    c.fillStyle='#f5deb3'; c.font='11px sans-serif'; c.textAlign='left'; c.fillText('&#xD3C9;&#xBA74;&#xB3C4; &#xBDF0;',8,H-8);
  }
  function open(){
    document.getElementById('v12-interior').classList.add('active');
    renderTools(); renderGrid(); renderStats(); drawFloorplan();
    document.getElementById('v12-int-save').onclick=function(){save();v12SFX.play('interior_save');};
    document.getElementById('v12-int-clear').onclick=function(){grid=[];for(var i=0;i<COLS*ROWS;i++)grid.push('');save();renderGrid();renderStats();drawFloorplan();};
  }
  function close(){document.getElementById('v12-interior').classList.remove('active');}
  return {open:open,close:close,grid:grid,load:function(){}};
})();

// ── 5. Construction Cost Calculator (건축 비용 계산기 Pie+Bar Canvas) ──
var v12Cost = (function(){
  var items=[
    {name:'&#xBAA9;&#xC7AC;',key:'wood',min:500,max:5000,val:2000,unit:'&#xB9CC;&#xC6D0;'},
    {name:'&#xC11D;&#xC7AC;',key:'stone',min:300,max:4000,val:1500,unit:'&#xB9CC;&#xC6D0;'},
    {name:'&#xAE30;&#xC640;/&#xC9C0;&#xBD95;',key:'roof',min:200,max:3000,val:1000,unit:'&#xB9CC;&#xC6D0;'},
    {name:'&#xC778;&#xAC74;&#xBE44;',key:'labor',min:1000,max:8000,val:3000,unit:'&#xB9CC;&#xC6D0;'},
    {name:'&#xC124;&#xACC4;&#xBE44;',key:'design',min:200,max:2000,val:800,unit:'&#xB9CC;&#xC6D0;'},
    {name:'&#xB9C8;&#xAC10;&#xC7AC;',key:'finish',min:100,max:2000,val:700,unit:'&#xB9CC;&#xC6D0;'}
  ];
  function renderInputs(){
    var el=document.getElementById('v12-cost-inputs'); if(!el) return;
    el.innerHTML=items.map(function(it){
      return '<div class="v12-cost-row"><div class="cost-label">'+it.name+'</div><input type="range" min="'+it.min+'" max="'+it.max+'" value="'+it.val+'" data-key="'+it.key+'"><div class="cost-val">'+it.val+' '+it.unit+'</div></div>';
    }).join('');
    el.querySelectorAll('input[type=range]').forEach(function(inp){
      inp.oninput=function(){
        var key=inp.dataset.key, item=items.find(function(it){return it.key===key;});
        if(item) item.val=parseInt(inp.value);
        inp.nextElementSibling.textContent=inp.value+' '+item.unit;
        v12SFX.play('cost_calc'); draw();
      };
    });
  }
  function draw(){
    var cv=document.getElementById('v12-cost-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    var total=items.reduce(function(s,it){return s+it.val;},0);
    var colors=['#c4956a','#4a7c59','#45b7d1','#e07c4f','#9b59b6','#e74c3c'];
    var cx=150, cy=H/2, R=110;
    var startA=-Math.PI/2;
    items.forEach(function(it,i){
      var sweep=(it.val/total)*Math.PI*2;
      c.beginPath(); c.moveTo(cx,cy); c.arc(cx,cy,R,startA,startA+sweep); c.closePath();
      c.fillStyle=colors[i]; c.fill();
      c.strokeStyle='rgba(0,0,0,.3)'; c.lineWidth=1; c.stroke();
      var midA=startA+sweep/2;
      if(sweep>0.15){ c.fillStyle='#fff'; c.font='bold 11px sans-serif'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(Math.round(it.val/total*100)+'%',cx+(R*0.65)*Math.cos(midA),cy+(R*0.65)*Math.sin(midA)); }
      startA+=sweep;
    });
    c.fillStyle='rgba(0,0,0,.7)'; c.beginPath(); c.arc(cx,cy,40,0,Math.PI*2); c.fill();
    c.fillStyle='#f5deb3'; c.font='bold 13px sans-serif'; c.textAlign='center'; c.fillText(total.toLocaleString(),cx,cy-4);
    c.font='10px sans-serif'; c.fillText('&#xB9CC;&#xC6D0;',cx,cy+10);
    var bx=310, bw=220, barH=22, gap=8;
    var maxVal=Math.max.apply(null,items.map(function(it){return it.val;}));
    items.forEach(function(it,i){
      var y=30+i*(barH+gap);
      c.fillStyle='rgba(255,255,255,.05)'; c.fillRect(bx,y,bw,barH);
      var w=(it.val/maxVal)*bw;
      c.fillStyle=colors[i]; c.fillRect(bx,y,w,barH);
      c.fillStyle='#f5deb3'; c.font='11px sans-serif'; c.textAlign='right'; c.textBaseline='middle';
      c.fillText(it.name.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));}),bx-6,y+barH/2);
      c.textAlign='left'; c.fillStyle='#e8d5c0'; c.fillText(it.val.toLocaleString(),bx+w+6,y+barH/2);
    });
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText('&#xCD1D; &#xC608;&#xC0B0;: '+total.toLocaleString()+' &#xB9CC;&#xC6D0;',bx+bw/2,H-20);
    var sm=document.getElementById('v12-cost-summary');
    if(sm){
      var grade=total<5000?'&#xACBD;&#xC81C;&#xD615; &#x2B50;':total<10000?'&#xD45C;&#xC900;&#xD615; &#x2B50;&#x2B50;':total<15000?'&#xACE0;&#xAE09;&#xD615; &#x2B50;&#x2B50;&#x2B50;':'&#xD504;&#xB9AC;&#xBBF8;&#xC5C4; &#x2B50;&#x2B50;&#x2B50;&#x2B50;';
      sm.innerHTML='&#xAC74;&#xCD95; &#xB4F1;&#xAE09;: '+grade+' | &#xC608;&#xC0C1; &#xACF5;&#xAE30;: '+Math.round(total/500)+'&#xAC1C;&#xC6D4;';
    }
  }
  function open(){document.getElementById('v12-cost').classList.add('active');renderInputs();draw();}
  function close(){document.getElementById('v12-cost').classList.remove('active');}
  return {open:open,close:close,load:function(){}};
})();

// ── 6. Feng Shui Compass (풍수 나침반 Canvas 8방위) ──
var v12Fengshui = (function(){
  var KEY='hb_v12_feng';
  var directions=[
    {name:'&#xBD81;(&#xBD81;)',angle:0,element:'&#xC218;(&#xBB3C;)',color:'#1a5276',meaning:'&#xC9C1;&#xC5C5;&#xC6B4;, &#xC778;&#xC0DD; &#xBC29;&#xD5A5;',advice:'&#xC5B4;&#xB450;&#xC6B4; &#xC0C9;&#xC744; &#xD53C;&#xD558;&#xACE0; &#xBC1D;&#xC740; &#xC870;&#xBA85;&#xC744; &#xBC30;&#xCE58;'},
    {name:'&#xBD81;&#xB3D9;',angle:45,element:'&#xD1A0;(&#xD759;)',color:'#6e4b1e',meaning:'&#xD559;&#xC5C5;&#xC6B4;, &#xC9C0;&#xC2DD;',advice:'&#xCC45;&#xC7A5;&#xC774;&#xB098; &#xC11C;&#xC7AC;&#xB97C; &#xBC30;&#xCE58;&#xD558;&#xBA74; &#xD559;&#xC5C5; &#xD5A5;&#xC0C1;'},
    {name:'&#xB3D9;',angle:90,element:'&#xBAA9;(&#xB098;&#xBB34;)',color:'#1e8449',meaning:'&#xAC74;&#xAC15;&#xC6B4;, &#xAC00;&#xC871;',advice:'&#xCD08;&#xB85D; &#xC2DD;&#xBB3C;&#xC744; &#xBC30;&#xCE58;&#xD558;&#xBA74; &#xAC74;&#xAC15; &#xC99D;&#xC9C4;'},
    {name:'&#xB0A8;&#xB3D9;',angle:135,element:'&#xBAA9;(&#xB098;&#xBB34;)',color:'#27ae60',meaning:'&#xC7AC;&#xBB3C;&#xC6B4;, &#xD48D;&#xC694;',advice:'&#xBC14;&#xB78C;&#xC774; &#xC798; &#xD1B5;&#xD558;&#xAC8C; &#xCC3D;&#xC744; &#xBC30;&#xCE58;'},
    {name:'&#xB0A8;',angle:180,element:'&#xD654;(&#xBD88;)',color:'#c0392b',meaning:'&#xBA85;&#xC608;&#xC6B4;, &#xC778;&#xAE30;',advice:'&#xBC1D;&#xC740; &#xC870;&#xBA85;&#xACFC; &#xBD89;&#xC740; &#xC18C;&#xD488;&#xC73C;&#xB85C; &#xD65C;&#xAE30;'},
    {name:'&#xB0A8;&#xC11C;',angle:225,element:'&#xD1A0;(&#xD759;)',color:'#935116',meaning:'&#xC5F0;&#xC560;&#xC6B4;, &#xC778;&#xAC04;&#xAD00;&#xACC4;',advice:'&#xC5B4;&#xBA38;&#xB2C8;&#xC758; &#xBC29;&#xC704;, &#xD3B8;&#xC548;&#xD55C; &#xAC00;&#xAD6C; &#xBC30;&#xCE58;'},
    {name:'&#xC11C;',angle:270,element:'&#xAE08;(&#xC1E0;)',color:'#b7950b',meaning:'&#xCC3D;&#xC758;&#xC6B4;, &#xC790;&#xB140;',advice:'&#xAE08;&#xC18D; &#xC18C;&#xD488;&#xC774;&#xB098; &#xD770;&#xC0C9; &#xC7A5;&#xC2DD;&#xC744; &#xBC30;&#xCE58;'},
    {name:'&#xBD81;&#xC11C;',angle:315,element:'&#xAE08;(&#xC1E0;)',color:'#7d6608',meaning:'&#xADC0;&#xC778;&#xC6B4;, &#xC5EC;&#xD589;',advice:'&#xAE08;&#xC18D; &#xD48D;&#xACBD;&#xC774;&#xB098; &#xAC70;&#xC6B8;&#xC744; &#xBC30;&#xCE58;'}
  ];
  var scores=JSON.parse(localStorage.getItem(KEY)||'null')||{};
  function save(){localStorage.setItem(KEY,JSON.stringify(scores));}
  function draw(){
    var cv=document.getElementById('v12-feng-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, cx=W/2, cy=H/2, R=155;
    c.clearRect(0,0,W,H);
    for(var lvl=1;lvl<=4;lvl++){
      c.beginPath(); c.arc(cx,cy,R*(lvl/4),0,Math.PI*2); c.closePath();
      c.strokeStyle='rgba(196,149,106,'+(lvl===4?.4:.15)+')'; c.stroke();
    }
    directions.forEach(function(d,i){
      var a=(d.angle-90)*Math.PI/180;
      c.beginPath(); c.moveTo(cx,cy); c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a)); c.strokeStyle='rgba(196,149,106,.25)'; c.stroke();
      var score=scores[d.name]||50;
      var sr=R*(score/100);
      c.beginPath(); c.moveTo(cx,cy);
      var aStart=((d.angle-22.5-90)*Math.PI/180), aEnd=((d.angle+22.5-90)*Math.PI/180);
      c.arc(cx,cy,sr,aStart,aEnd); c.closePath();
      c.fillStyle=d.color+'66'; c.fill(); c.strokeStyle=d.color; c.lineWidth=2; c.stroke(); c.lineWidth=1;
      c.fillStyle='#f5deb3'; c.font='bold 12px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillText(d.name.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));}),cx+(R+22)*Math.cos(a),cy+(R+22)*Math.sin(a));
    });
    c.beginPath(); c.arc(cx,cy,20,0,Math.PI*2);
    c.fillStyle='rgba(196,149,106,.3)'; c.fill();
    c.fillStyle='#f5deb3'; c.font='bold 20px sans-serif'; c.textAlign='center'; c.fillText('&#x2638;&#xFE0F;',cx,cy+7);
    cv.onclick=function(ev){
      var rect=cv.getBoundingClientRect();
      var mx=(ev.clientX-rect.left)*(W/rect.width)-cx, my=(ev.clientY-rect.top)*(H/rect.height)-cy;
      var clickAngle=(Math.atan2(my,mx)*180/Math.PI+90+360)%360;
      var nearest=null, minDiff=999;
      directions.forEach(function(d){
        var diff=Math.abs(((clickAngle-d.angle+180+360)%360)-180);
        if(diff<minDiff){minDiff=diff;nearest=d;}
      });
      if(nearest&&minDiff<45){
        var dist=Math.sqrt(mx*mx+my*my);
        scores[nearest.name]=Math.min(100,Math.max(10,Math.round((dist/R)*100)));
        save(); v12SFX.play('feng_analyze'); draw(); showResult();
      }
    };
  }
  function showResult(){
    var el=document.getElementById('v12-feng-result'); if(!el) return;
    var vals=Object.values(scores);
    if(vals.length===0){el.innerHTML='&#xB098;&#xCE68;&#xBC18; &#xC601;&#xC5ED;&#xC744; &#xD074;&#xB9AD;&#xD558;&#xC5EC; &#xD48D;&#xC218; &#xC810;&#xC218;&#xB97C; &#xC124;&#xC815;&#xD558;&#xC138;&#xC694;'; return;}
    var avg=Math.round(vals.reduce(function(a,b){return a+b;},0)/vals.length);
    var grade=avg>=80?'&#xBA85;&#xB2F9; (S)':avg>=60?'&#xAE38;&#xC9C0; (A)':avg>=40?'&#xBCF4;&#xD1B5; (B)':'&#xBD80;&#xC871; (C)';
    el.innerHTML='&#xD48D;&#xC218; &#xC885;&#xD569;&#xC810;&#xC218;: <strong style="color:#f5deb3">'+avg+'&#xC810;</strong> | &#xB4F1;&#xAE09;: <strong style="color:#f5deb3">'+grade+'</strong>';
  }
  function showTips(){
    var el=document.getElementById('v12-feng-tips'); if(!el) return;
    el.innerHTML=directions.map(function(d){
      var sc=scores[d.name]||50;
      return '<div class="v12-item'+(sc>=70?' read':'')+'"><h4>'+d.name.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));})+' <span class="tag">'+d.element.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));})+'</span></h4><p>'+d.meaning.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));})+' | &#xC810;&#xC218;: '+sc+'</p><div class="detail">'+d.advice.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));})+'</div></div>';
    }).join('');
    el.querySelectorAll('.v12-item').forEach(function(item){item.onclick=function(){item.classList.toggle('expanded');};});
  }
  function open(){
    document.getElementById('v12-fengshui').classList.add('active'); draw(); showResult(); showTips();
    document.getElementById('v12-feng-analyze').onclick=function(){
      directions.forEach(function(d){scores[d.name]=Math.floor(Math.random()*60)+30;});
      save(); v12SFX.play('feng_analyze'); draw(); showResult(); showTips();
    };
    document.getElementById('v12-feng-reset').onclick=function(){scores={};save();draw();showResult();showTips();};
  }
  function close(){document.getElementById('v12-fengshui').classList.remove('active');}
  return {open:open,close:close,scores:scores,load:function(){}};
})();

// ── 7. Architecture Era Timeline (건축 시대 연표 Canvas 10시대) ──
var v12Timeline = (function(){
  var KEY='hb_v12_timeline';
  var eras=[
    {name:'선사시대',period:'BC 8000~',style:'움집/돌무덤',icon:'&#x1F3D5;',desc:'반움집 구조, 빗살무늬 토기. 지면을 파고 지붕을 얹는 원시 건축의 시작.',key:'prehistoric'},
    {name:'고조선',period:'BC 2333~',style:'목책/토성',icon:'&#x1F3EF;',desc:'목책과 토성으로 둘러싸인 초기 성곽 건축. 고인돌 거석 문화.',key:'gojoseon'},
    {name:'삼국시대',period:'BC 57~668',style:'불교사찰',icon:'&#x26E9;&#xFE0F;',desc:'불교 전래와 함께 사찰 건축 발달. 황룡사 9층 목탑, 익산 미륵사지.',key:'threekingdoms'},
    {name:'통일신라',period:'668~935',style:'석조/금속',icon:'&#x1F3DB;&#xFE0F;',desc:'불국사, 석굴암 등 석조 건축의 정수. 첨성대 과학 건축물.',key:'unifiedsilla'},
    {name:'고려',period:'918~1392',style:'궁궐/사찰',icon:'&#x1F3E0;',desc:'개경 만월대 궁궐, 부석사 무량수전. 목조 건축 기법의 완성.',key:'goryeo'},
    {name:'조선초기',period:'1392~1592',style:'유교건축',icon:'&#x1F3EB;',desc:'경복궁, 종묘, 서원 건축. 유교 이념을 반영한 궁궐과 교육 건축.',key:'earlyJoseon'},
    {name:'조선후기',period:'1592~1897',style:'실학건축',icon:'&#x1F3D7;&#xFE0F;',desc:'수원화성의 과학적 축성법. 거중기와 녹로 활용. 실학의 건축 혁신.',key:'lateJoseon'},
    {name:'근대',period:'1897~1945',style:'서양/일제',icon:'&#x1F3E2;',desc:'명동성당, 덕수궁 석조전 등 서양 건축 도입. 한양에서 경성으로.',key:'modern'},
    {name:'현대초기',period:'1945~1988',style:'콘크리트',icon:'&#x1F3E2;',desc:'전후 복구와 산업화. 철근 콘크리트 건축의 대량 보급.',key:'postwar'},
    {name:'현대',period:'1988~',style:'첨단건축',icon:'&#x1F3D9;&#xFE0F;',desc:'DDP, 롯데타워 등 세계적 건축물. 친환경 스마트 건축 시대.',key:'contemporary'}
  ];
  var viewed=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(viewed));}
  var selectedEra=-1;
  function draw(){
    var cv=document.getElementById('v12-time-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    var lineY=H/2, pad=40, usableW=W-pad*2;
    c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=3;
    c.beginPath(); c.moveTo(pad,lineY); c.lineTo(W-pad,lineY); c.stroke(); c.lineWidth=1;
    var segW=usableW/(eras.length-1);
    eras.forEach(function(era,i){
      var x=pad+i*segW, above=i%2===0;
      var isViewed=viewed.indexOf(era.key)>=0;
      var isSelected=selectedEra===i;
      c.beginPath(); c.arc(x,lineY,isSelected?10:7,0,Math.PI*2);
      c.fillStyle=isSelected?'#c4956a':(isViewed?'#4a7c59':'rgba(196,149,106,.4)'); c.fill();
      c.strokeStyle=isSelected?'#f5deb3':'rgba(196,149,106,.5)'; c.lineWidth=isSelected?2:1; c.stroke(); c.lineWidth=1;
      c.beginPath(); c.moveTo(x,lineY+(above?-7:7)); c.lineTo(x,lineY+(above?-35:35)); c.strokeStyle='rgba(196,149,106,.2)'; c.stroke();
      c.fillStyle=isSelected?'#f5deb3':'#c4956a'; c.font=(isSelected?'bold ':'')+'11px sans-serif'; c.textAlign='center';
      c.fillText(era.name,x,lineY+(above?-42:50));
      c.fillStyle='rgba(196,149,106,.6)'; c.font='9px sans-serif';
      c.fillText(era.period,x,lineY+(above?-55:62));
    });
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText('&#xD55C;&#xAD6D; &#xAC74;&#xCD95; &#xC2DC;&#xB300; &#xC5F0;&#xD45C;',W/2,22);
    cv.onclick=function(ev){
      var rect=cv.getBoundingClientRect();
      var mx=(ev.clientX-rect.left)*(W/rect.width);
      var closest=-1, minDist=999;
      eras.forEach(function(era,i){
        var x=pad+i*segW;
        var dist=Math.abs(mx-x);
        if(dist<minDist){minDist=dist;closest=i;}
      });
      if(closest>=0&&minDist<segW/2){
        selectedEra=closest;
        if(viewed.indexOf(eras[closest].key)<0){viewed.push(eras[closest].key);save();}
        v12SFX.play('timeline_click'); draw(); showDetail();
      }
    };
  }
  function showDetail(){
    var el=document.getElementById('v12-time-detail'); if(!el) return;
    if(selectedEra<0){el.innerHTML='&#xC2DC;&#xB300; &#xC810;&#xC744; &#xD074;&#xB9AD;&#xD558;&#xBA74; &#xC0C1;&#xC138; &#xC815;&#xBCF4;&#xB97C; &#xBCFC; &#xC218; &#xC788;&#xC2B5;&#xB2C8;&#xB2E4;'; return;}
    var era=eras[selectedEra];
    el.innerHTML='<div style="text-align:left;background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;margin:10px 0"><h4 style="color:#f5deb3;margin:0 0 6px">'+era.icon+' '+era.name+' ('+era.period+')</h4><p style="color:#c4956a;font-size:12px;margin:0 0 6px">&#xC591;&#xC2DD;: '+era.style+'</p><p style="color:#e8d5c0;font-size:12px;line-height:1.7;margin:0">'+era.desc+'</p></div>';
  }
  function open(){document.getElementById('v12-timeline').classList.add('active');draw();showDetail();}
  function close(){document.getElementById('v12-timeline').classList.remove('active');}
  return {open:open,close:close,viewed:viewed,load:function(){}};
})();

// ── 8. Room Layout Planner (방 배치 플래너 10x8) ──
var v12Layout = (function(){
  var KEY='hb_v12_layout', COLS=10, ROWS=8;
  var rooms=[
    {name:'&#xC9C0;&#xC6B0;&#xAE30;',icon:'&#x274C;',id:'erase'},
    {name:'&#xAC70;&#xC2E4;',icon:'&#x1F6CB;&#xFE0F;',id:'living'},
    {name:'&#xCE68;&#xC2E4;',icon:'&#x1F6CF;&#xFE0F;',id:'bedroom'},
    {name:'&#xC8FC;&#xBC29;',icon:'&#x1F373;',id:'kitchen'},
    {name:'&#xC695;&#xC2E4;',icon:'&#x1F6C1;',id:'bathroom'},
    {name:'&#xC11C;&#xC7AC;',icon:'&#x1F4DA;',id:'study'},
    {name:'&#xD604;&#xAD00;',icon:'&#x1F6AA;',id:'entrance'},
    {name:'&#xB2E4;&#xC6A9;&#xB3C4;',icon:'&#x1F4E6;',id:'utility'},
    {name:'&#xBC1C;&#xCF54;&#xB2C8;',icon:'&#x1F33F;',id:'balcony'},
    {name:'&#xBCBD;',icon:'&#x1F9F1;',id:'wall'},
    {name:'&#xCC3D;&#xBB38;',icon:'&#x1FA9F;',id:'window'}
  ];
  var selectedTool='living';
  var grid=JSON.parse(localStorage.getItem(KEY)||'null');
  if(!grid){grid=[];for(var i=0;i<COLS*ROWS;i++)grid.push('');}
  function save(){localStorage.setItem(KEY,JSON.stringify(grid));}
  function renderTools(){
    var el=document.getElementById('v12-layout-tools'); if(!el) return;
    el.innerHTML=rooms.map(function(r){ return '<button class="v12-tab'+(selectedTool===r.id?' active':'')+'" data-id="'+r.id+'">'+r.icon+' '+r.name+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick=function(){ selectedTool=btn.dataset.id; el.querySelectorAll('.v12-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); }; });
  }
  function renderGrid(){
    var el=document.getElementById('v12-layout-grid'); if(!el) return;
    el.innerHTML='';
    for(var i=0;i<COLS*ROWS;i++){
      var cell=document.createElement('div'); cell.className='v12-room-cell'+(grid[i]?' placed':''); cell.dataset.idx=i;
      var rm=rooms.find(function(r){return r.id===grid[i];}); cell.innerHTML=rm?rm.icon:'';
      var colors={living:'rgba(196,149,106,.15)',bedroom:'rgba(147,112,219,.15)',kitchen:'rgba(230,126,34,.15)',bathroom:'rgba(69,183,209,.15)',study:'rgba(74,124,89,.15)',entrance:'rgba(189,195,199,.15)',utility:'rgba(149,165,166,.15)',balcony:'rgba(39,174,96,.15)',wall:'rgba(100,100,100,.3)',window:'rgba(52,152,219,.15)'};
      if(grid[i]&&colors[grid[i]]) cell.style.background=colors[grid[i]];
      cell.onclick=function(){ var idx=parseInt(this.dataset.idx); grid[idx]=selectedTool==='erase'?'':selectedTool; save(); v12SFX.play('layout_place'); renderGrid(); renderStats(); };
      el.appendChild(cell);
    }
  }
  function renderStats(){
    var el=document.getElementById('v12-layout-stats'); if(!el) return;
    var counts={}; grid.forEach(function(g){if(g)counts[g]=(counts[g]||0)+1;});
    var total=grid.filter(function(g){return g;}).length;
    var area=total*3.6;
    var parts=[]; rooms.forEach(function(r){if(r.id!=='erase'&&counts[r.id])parts.push(r.icon+counts[r.id]);});
    el.innerHTML='&#xBC30;&#xCE58;: '+total+'/'+(COLS*ROWS)+' (&#xC57D; '+area.toFixed(1)+'&#xD3C9;) | '+parts.join(' ');
  }
  function open(){
    document.getElementById('v12-layout').classList.add('active');
    renderTools(); renderGrid(); renderStats();
    document.getElementById('v12-layout-save').onclick=function(){save();v12SFX.play('interior_save');};
    document.getElementById('v12-layout-clear').onclick=function(){grid=[];for(var i=0;i<COLS*ROWS;i++)grid.push('');save();renderGrid();renderStats();};
  }
  function close(){document.getElementById('v12-layout').classList.remove('active');}
  return {open:open,close:close,grid:grid,load:function(){}};
})();

// ── 9. Building Challenges (건축 도전과제 8종) ──
var v12Challenge = (function(){
  var KEY='hb_v12_challenge';
  var challenges=[
    {id:'build_3',name:'&#xAC74;&#xCD95;&#xAC00; &#xC785;&#xBB38;',desc:'3&#xCC44; &#xAC74;&#xCD95; &#xC644;&#xB8CC;',target:3,check:function(){return parseInt(localStorage.getItem('hb_totalBuilds')||'0');}},
    {id:'quiz_80',name:'&#xD1B5;&#xACFC;&#xC2DC;&#xD5D8;',desc:'&#xD018;&#xC988; 80&#xC810; &#xC774;&#xC0C1;',target:80,check:function(){return parseInt(localStorage.getItem('hb_bestScore')||'0');}},
    {id:'interior_20',name:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xB514;&#xC790;&#xC774;&#xB108;',desc:'&#xC778;&#xD14C;&#xB9AC;&#xC5B4; 20&#xCE78; &#xBC30;&#xCE58;',target:20,check:function(){return v12Interior.grid.filter(function(g){return g;}).length;}},
    {id:'layout_30',name:'&#xBC29; &#xBC30;&#xCE58; &#xC804;&#xBB38;&#xAC00;',desc:'&#xBC29; &#xBC30;&#xCE58; 30&#xCE78; &#xBC30;&#xCE58;',target:30,check:function(){return v12Layout.grid.filter(function(g){return g;}).length;}},
    {id:'dict_20',name:'&#xAC74;&#xCD95; &#xD559;&#xC790;',desc:'&#xC6A9;&#xC5B4; 20&#xAC1C; &#xC774;&#xC0C1; &#xC77D;&#xAE30;',target:20,check:function(){return v12Dict.readList.length;}},
    {id:'timeline_5',name:'&#xC2DC;&#xAC04;&#xC5EC;&#xD589;&#xC790;',desc:'&#xC5F0;&#xD45C; 5&#xC2DC;&#xB300; &#xC774;&#xC0C1; &#xD0D0;&#xBC29;',target:5,check:function(){return v12Timeline.viewed.length;}},
    {id:'feng_8',name:'&#xD48D;&#xC218; &#xB300;&#xC0AC;',desc:'&#xD48D;&#xC218; 8&#xBC29;&#xC704; &#xBAA8;&#xB450; &#xC124;&#xC815;',target:8,check:function(){return Object.keys(v12Fengshui.scores).length;}},
    {id:'all_feature',name:'&#xC804;&#xCCB4; &#xD0D0;&#xD5D8;&#xAC00;',desc:'v12 8&#xAC1C; &#xAE30;&#xB2A5; &#xBAA8;&#xB450; &#xC5F4;&#xAE30;',target:8,check:function(){var c=0; if(v12Interior.grid.some(function(g){return g;}))c++; if(Object.keys(v12Fengshui.scores).length>0)c++; if(v12Timeline.viewed.length>0)c++; if(v12Layout.grid.some(function(g){return g;}))c++; if(v12Dict.readList.length>0)c++; c+=3; return c;}}
  ];
  var done=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(done));}
  function render(){
    var el=document.getElementById('v12-challenge-list'); if(!el) return;
    el.innerHTML=challenges.map(function(ch){
      var current=ch.check(), pct=Math.min(100,Math.round((current/ch.target)*100));
      var isDone=current>=ch.target;
      if(isDone&&done.indexOf(ch.id)<0){done.push(ch.id);save();v12SFX.play('challenge_done');}
      return '<div class="v12-challenge'+(isDone?' done':'')+'"><h4>'+(isDone?'&#x2705; ':'&#x1F3AF; ')+ch.name+'</h4><p>'+ch.desc+' ('+current+'/'+ch.target+')</p><div class="prog-bar"><div class="prog-fill" style="width:'+pct+'%"></div></div><div class="prog-text">'+pct+'%'+(isDone?' &#xC644;&#xB8CC;!':'')+'</div></div>';
    }).join('');
  }
  function open(){
    document.getElementById('v12-challenge').classList.add('active');render();
    document.getElementById('v12-challenge-refresh').onclick=function(){v12SFX.play('challenge_refresh');render();};
  }
  function close(){document.getElementById('v12-challenge').classList.remove('active');}
  return {open:open,close:close,done:done,load:function(){}};
})();

// ── 10. Architecture Dictionary (건축 용어 사전 40항목) ──
var v12Dict = (function(){
  var KEY='hb_v12_dict';
  var terms=[
    {name:'&#xB300;&#xB4E4;&#xBCF4;',cat:'&#xAD6C;&#xC870;',desc:'&#xAC74;&#xBB3C;&#xC758; &#xAE30;&#xB465;&#xACFC; &#xAE30;&#xB465; &#xC0AC;&#xC774;&#xB97C; &#xC5F0;&#xACB0;&#xD558;&#xB294; &#xD070; &#xBAA9;&#xC7AC;. &#xD55C;&#xC625;&#xC758; &#xD575;&#xC2EC; &#xAD6C;&#xC870;&#xBD80;&#xC7AC;.',detail:'&#xB300;&#xB4E4;&#xBCF4;&#xB294; &#xC9C0;&#xBD95;&#xC758; &#xD558;&#xC911;&#xC744; &#xAE30;&#xB465;&#xC73C;&#xB85C; &#xC804;&#xB2EC;&#xD558;&#xB294; &#xC5ED;&#xD560;. &#xC18C;&#xB098;&#xBB34;&#xB098; &#xCC38;&#xB098;&#xBB34;&#xB97C; &#xC8FC;&#xB85C; &#xC0AC;&#xC6A9;.'},
    {name:'&#xAE30;&#xB465;',cat:'&#xAD6C;&#xC870;',desc:'&#xAC74;&#xBB3C;&#xC758; &#xC218;&#xC9C1; &#xD558;&#xC911; &#xC9C0;&#xC9C0; &#xBD80;&#xC7AC;. &#xBAA9;&#xC870;/&#xC11D;&#xC870;/&#xCCA0;&#xACE8; &#xB4F1;.',detail:'&#xD55C;&#xC625;&#xC5D0;&#xC11C;&#xB294; &#xC6D0;&#xBAA9; &#xAE30;&#xB465;&#xC774; &#xD2B9;&#xC9D5;. &#xBC30;&#xD758;&#xB9BC; &#xAE30;&#xB465;&#xC740; &#xC548;&#xC815;&#xAC10;&#xC744; &#xC904;.'},
    {name:'&#xB3C4;&#xB9AC;',cat:'&#xAD6C;&#xC870;',desc:'&#xC11C;&#xAE4C;&#xB798; &#xC704;&#xC758; &#xC218;&#xD3C9; &#xBD80;&#xC7AC;. &#xC9C0;&#xBD95;&#xC758; &#xD558;&#xC911;&#xC744; &#xBC1B;&#xC544; &#xAE30;&#xB465;&#xC5D0; &#xC804;&#xB2EC;.',detail:'&#xC8FC;&#xC2EC;&#xB3C4;&#xB9AC;&#xC640; &#xC911;&#xB3C4;&#xB9AC;&#xAC00; &#xC788;&#xC73C;&#xBA70;, &#xC9C0;&#xBD95;&#xC758; &#xACE8;&#xACA9;&#xC744; &#xACB0;&#xC815;.'},
    {name:'&#xC11C;&#xAE4C;&#xB798;',cat:'&#xAD6C;&#xC870;',desc:'&#xC9C0;&#xBD95;&#xC758; &#xACBD;&#xC0AC;&#xBA74;&#xC744; &#xD615;&#xC131;&#xD558;&#xB294; &#xBE57;&#xC0B4; &#xBD80;&#xC7AC;.',detail:'&#xC11C;&#xAE4C;&#xB798;&#xB294; &#xB3C4;&#xB9AC; &#xC704;&#xC5D0; &#xB193;&#xC5EC; &#xC9C0;&#xBD95;&#xBA74;&#xC744; &#xD615;&#xC131;. &#xC18C;&#xB85C;&#xC9C0;&#xBD95;&#xC740; &#xC11C;&#xAE4C;&#xB798; &#xC704;&#xC5D0; &#xAE30;&#xC640;&#xB97C; &#xC5C6;&#xC74C;.'},
    {name:'&#xCC98;&#xB9C8;',cat:'&#xAD6C;&#xC870;',desc:'&#xC9C0;&#xBD95; &#xB05D;&#xC774; &#xD558;&#xB298;&#xB85C; &#xCE58;&#xCF1C; &#xC62C;&#xB77C;&#xAC04; &#xBD80;&#xBD84;.',detail:'&#xD55C;&#xC625;&#xC758; &#xC544;&#xB984;&#xB2E4;&#xC6B4; &#xACE1;&#xC120;&#xBBF8;&#xB97C; &#xB9CC;&#xB4DC;&#xB294; &#xD575;&#xC2EC; &#xC694;&#xC18C;. &#xBE57;&#xBB3C; &#xBC30;&#xC218; &#xD6A8;&#xACFC;&#xB3C4; &#xC788;&#xC74C;.'},
    {name:'&#xCD94;&#xB140;',cat:'&#xAD6C;&#xC870;',desc:'&#xC9C0;&#xBD95;&#xC758; &#xCE98; &#xBD80;&#xBD84;&#xC774; &#xC704;&#xB85C; &#xD718;&#xC5B4;&#xC838; &#xC62C;&#xB77C;&#xAC04; &#xAC83;.',detail:'&#xCD94;&#xB140;&#xC758; &#xACE1;&#xC120;&#xC740; &#xD55C;&#xC625;&#xC758; &#xC0C1;&#xC9D5;. &#xBE57;&#xBB3C;&#xC774; &#xBA40;&#xB9AC; &#xD280;&#xB294; &#xC2E4;&#xC6A9;&#xC801; &#xAE30;&#xB2A5;&#xB3C4;.'},
    {name:'&#xAE30;&#xB2E8;',cat:'&#xAD6C;&#xC870;',desc:'&#xAC74;&#xBB3C;&#xC758; &#xBC14;&#xB2E5; &#xB192;&#xC774;&#xB97C; &#xB192;&#xC774;&#xB294; &#xB3CC; &#xB610;&#xB294; &#xCF58;&#xD06C;&#xB9AC;&#xD2B8; &#xD1A0;&#xB300;.',detail:'&#xAE30;&#xB2E8;&#xC740; &#xC2B5;&#xAE30;&#xB97C; &#xBC29;&#xC9C0;&#xD558;&#xACE0; &#xAC74;&#xBB3C;&#xC758; &#xC704;&#xC5C4;&#xC744; &#xB354;&#xD574;&#xC90C;.'},
    {name:'&#xCC3D;&#xD638;',cat:'&#xB9C8;&#xAC10;',desc:'&#xD55C;&#xC625;&#xC758; &#xBB38;&#xACFC; &#xCC3D;&#xC744; &#xD1B5;&#xCE6D;&#xD558;&#xB294; &#xB9D0;.',detail:'&#xD55C;&#xC9C0;&#xB97C; &#xBC14;&#xB978; &#xBAA9;&#xC870; &#xD2C0;&#xC5D0; &#xAE30;&#xD558;&#xD559;&#xC801; &#xBB38;&#xC591;&#xC744; &#xB123;&#xC5B4; &#xC81C;&#xC791;.'},
    {name:'&#xB2E8;&#xCCAD;',cat:'&#xB9C8;&#xAC10;',desc:'&#xBAA9;&#xC870; &#xAC74;&#xCD95;&#xBB3C;&#xC5D0; 5&#xC0C9;&#xC73C;&#xB85C; &#xCE60;&#xD558;&#xB294; &#xC7A5;&#xC2DD; &#xD68C;&#xD654;.',detail:'&#xC801;/&#xCCAD;/&#xD669;/&#xBC31;/&#xD751; 5&#xC0C9;&#xC740; &#xC74C;&#xC591;&#xC624;&#xD589;&#xC5D0;&#xC11C; &#xC720;&#xB798;. &#xBC29;&#xBD80;&#xBC29;&#xCDA9; &#xD6A8;&#xACFC;&#xB3C4; &#xC788;&#xC74C;.'},
    {name:'&#xC628;&#xB3CC;',cat:'&#xC124;&#xBE44;',desc:'&#xBC14;&#xB2E5;&#xC744; &#xB370;&#xC6CC; &#xBC29; &#xC804;&#xCCB4;&#xB97C; &#xB09C;&#xBC29;&#xD558;&#xB294; &#xD55C;&#xAD6D; &#xC804;&#xD1B5; &#xB09C;&#xBC29;.',detail:'&#xC544;&#xAD81;&#xC774;&#xC5D0;&#xC11C; &#xBD88;&#xC744; &#xB5BC;&#xBA74; &#xB728;&#xAC70;&#xC6B4; &#xC5F0;&#xAE30;&#xAC00; &#xBC14;&#xB2E5; &#xC544;&#xB798; &#xAD74;&#xB72F;&#xC744; &#xC9C0;&#xB098;&#xBA70; &#xB09C;&#xBC29;.'},
    {name:'&#xBE44;&#xD589; &#xBC84;&#xD2B8;&#xB9AC;&#xC2A4;',cat:'&#xC11C;&#xC591;',desc:'&#xACE0;&#xB515; &#xAC74;&#xCD95;&#xC758; &#xC678;&#xBD80; &#xBCBD;&#xCCB4; &#xC9C0;&#xC9C0; &#xAD6C;&#xC870;.',detail:'&#xB192;&#xC740; &#xBCBD;&#xCCB4;&#xC758; &#xC808;&#xD301;&#xB825;&#xC744; &#xC678;&#xBD80;&#xC5D0;&#xC11C; &#xBC1B;&#xCDB0;&#xC8FC;&#xB294; &#xC544;&#xCE58; &#xD615;&#xD0DC;&#xC758; &#xAD6C;&#xC870;&#xBB3C;.'},
    {name:'&#xBC30;&#xC0B0;&#xC784;&#xC218;',cat:'&#xD48D;&#xC218;',desc:'&#xC0B0;&#xC744; &#xB4A4;&#xC5D0; &#xBB3C;&#xC744; &#xC55E;&#xC5D0; &#xB450;&#xB294; &#xD55C;&#xAD6D; &#xC804;&#xD1B5; &#xBC30;&#xCE58;&#xBC95;.',detail:'&#xBD81;&#xD48D;&#xC744; &#xB9C9;&#xACE0; &#xB0A8;&#xD5A5;&#xC744; &#xBC1B;&#xC544; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;&#xC744; &#xB192;&#xC784;. &#xD48D;&#xC218;&#xC9C0;&#xB9AC;&#xC758; &#xD575;&#xC2EC;.'},
    {name:'&#xBA85;&#xB2F9;',cat:'&#xD48D;&#xC218;',desc:'&#xD48D;&#xC218;&#xC5D0;&#xC11C; &#xC9D1; &#xC55E;&#xC758; &#xBC1D;&#xACE0; &#xD2B8;&#xC778; &#xACF5;&#xAC04;.',detail:'&#xD587;&#xBE5B;&#xACFC; &#xBC14;&#xB78C;&#xC774; &#xC798; &#xB4DC;&#xB294; &#xACF3;&#xC73C;&#xB85C;, &#xC9D1;&#xC758; &#xC591;&#xAE30;(&#xC591;&#xC758; &#xAE30;&#xC6B4;)&#xB97C; &#xBC1B;&#xB294; &#xC704;&#xCE58;.'},
    {name:'&#xCCA8;&#xC131;&#xB300;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xC2E0;&#xB77C; &#xC120;&#xB355;&#xC5EC;&#xC655; &#xC2DC;&#xB300;&#xC758; &#xCC9C;&#xBB38; &#xAD00;&#xCE21;&#xB300;.',detail:'&#xB3D9;&#xC591; &#xD604;&#xC874; &#xCD5C;&#xACE0;(&#xCD5C;&#xACE0;) &#xCC9C;&#xBB38;&#xB300;. 362&#xAC1C;&#xC758; &#xB3CC;&#xB85C; 27&#xB2E8; &#xC313;&#xC544; &#xC62C;&#xB9BC;.'},
    {name:'&#xBD88;&#xAD6D;&#xC0AC;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xC2E0;&#xB77C; &#xC2DC;&#xB300; &#xBD88;&#xAD50; &#xC0AC;&#xCC30; &#xAC74;&#xCD95;&#xC758; &#xC815;&#xC218;.',detail:'&#xB2E4;&#xBCF4;&#xD0D1;&#xACFC; &#xC11D;&#xAD74;&#xC554;&#xC740; &#xC0B4;&#xC544;&#xC788;&#xB294; &#xC0AC;&#xCC30;&#xC774;&#xBA70; &#xC720;&#xB124;&#xC2A4;&#xCF54; &#xC138;&#xACC4;&#xC720;&#xC0B0;.'},
    {name:'&#xC218;&#xC6D0;&#xD654;&#xC131;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xC815;&#xC870;&#xC5D0; &#xC815;&#xC57D;&#xC6A9;&#xC774; &#xC124;&#xACC4;&#xD55C; &#xACFC;&#xD559;&#xC801; &#xC131;&#xAD2C;.',detail:'&#xAC70;&#xC911;&#xAE30;&#xC640; &#xB179;&#xB85C;&#xB97C; &#xD65C;&#xC6A9;&#xD55C; &#xACFC;&#xD559;&#xC801; &#xCD95;&#xC131;&#xBC95;. &#xC138;&#xACC4;&#xC720;&#xC0B0;.'},
    {name:'&#xACBD;&#xBCF5;&#xAD81;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xC870;&#xC120; &#xC81C;1 &#xBC95;&#xAD81;. &#xADFC;&#xC815;&#xC804; &#xC911;&#xC2EC;.',detail:'1395&#xB144; &#xCC3D;&#xAC74;. &#xAD6C;&#xC870;&#xC801; &#xADE0;&#xD615;&#xACFC; &#xC88C;&#xC6B0; &#xB300;&#xCE6D;&#xC774; &#xD2B9;&#xC9D5;. &#xC720;&#xAD50; &#xC774;&#xB150;&#xC744; &#xBC18;&#xC601;.'},
    {name:'&#xADFC;&#xC815;&#xC804;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xACBD;&#xBCF5;&#xAD81;&#xC758; &#xC815;&#xC804;. &#xC655;&#xC774; &#xC815;&#xC0AC;&#xB97C; &#xBCF4;&#xB358; &#xACF3;.',detail:'2&#xCE35; &#xBAA9;&#xC870; &#xAC74;&#xBB3C;. &#xC5EC;&#xB35C;&#xD314;&#xC791; &#xAC78;&#xB9BC;. &#xC870;&#xC120; &#xAD81;&#xAD90; &#xAC74;&#xCD95;&#xC758; &#xB300;&#xD45C;&#xC791;.'},
    {name:'&#xCC3D;&#xB355;&#xAD81;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xC0B0;&#xC9C0; &#xC9C0;&#xD615;&#xC744; &#xD65C;&#xC6A9;&#xD55C; &#xC790;&#xC5F0;&#xCE5C;&#xD654; &#xAD81;&#xAD90;.',detail:'&#xC720;&#xB124;&#xC2A4;&#xCF54; &#xC138;&#xACC4;&#xC720;&#xC0B0;. &#xD6C4;&#xC6D0; &#xBE44;&#xC6D0;(&#xBE44;&#xBC00; &#xC815;&#xC6D0;)&#xC774; &#xC720;&#xBA85;.'},
    {name:'&#xD574;&#xC778;&#xC0AC;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xD329;&#xB9CC;&#xB300;&#xC7A5;&#xACBD;&#xC744; &#xBCF4;&#xAD00;&#xD558;&#xB294; &#xC7A5;&#xACBD;&#xD310;&#xC804;.',detail:'&#xC790;&#xC5F0; &#xD1B5;&#xD48D; &#xC2DC;&#xC2A4;&#xD15C;&#xC73C;&#xB85C; 800&#xB144;&#xAC04; &#xBAA9;&#xD310;&#xC744; &#xBCF4;&#xC874;. &#xC138;&#xACC4;&#xC720;&#xC0B0;.'},
    {name:'&#xC775;&#xACF5;',cat:'&#xAD6C;&#xC870;',desc:'&#xAE30;&#xB465;&#xACFC; &#xCC98;&#xB9C8; &#xC0AC;&#xC774;&#xC5D0; &#xB053;&#xC6CC;&#xB123;&#xB294; &#xC7A5;&#xC2DD; &#xBD80;&#xC7AC;.',detail:'&#xC7A5;&#xC2DD;&#xC801; &#xAE30;&#xB2A5;&#xACFC; &#xAD6C;&#xC870;&#xC801; &#xBCF4;&#xAC15;&#xC744; &#xACB8;&#xBE44;. &#xB2E4;&#xD3EC; &#xC0AC;&#xCC30; &#xC775;&#xACF5;&#xC774; &#xB300;&#xD45C;&#xC801;.'},
    {name:'&#xACF5;&#xD3EC;',cat:'&#xAD6C;&#xC870;',desc:'&#xB450; &#xBD80;&#xC7AC;&#xB97C; &#xC5F0;&#xACB0;&#xD558;&#xB294; &#xBAA9;&#xC870; &#xAE30;&#xBC95;.',detail:'&#xBABB;(&#xAC01;&#xCC0D;&#xC774;) &#xC5C6;&#xC774; &#xBAA9;&#xC7AC;&#xB97C; &#xACB0;&#xD569;. &#xD55C;&#xC625;&#xC758; &#xD575;&#xC2EC; &#xAE30;&#xBC95;.'},
    {name:'&#xD669;&#xD1A0;&#xBCBD;',cat:'&#xB9C8;&#xAC10;',desc:'&#xD669;&#xD1A0;&#xB85C; &#xBC14;&#xB978; &#xD55C;&#xC625;&#xC758; &#xBCBD;&#xCCB4;.',detail:'&#xC2B5;&#xB3C4; &#xC870;&#xC808;&#xACFC; &#xB2E8;&#xC5F4; &#xD6A8;&#xACFC;&#xAC00; &#xB6F0;&#xC5B4;&#xB098; &#xCE5C;&#xD658;&#xACBD; &#xC7AC;&#xB8CC;.'},
    {name:'&#xCD08;&#xC11D;',cat:'&#xAD6C;&#xC870;',desc:'&#xAE30;&#xB465; &#xC544;&#xB798;&#xC5D0; &#xB193;&#xB294; &#xB3CC;. &#xC2B5;&#xAE30;&#xBC29;&#xC9C0;.',detail:'&#xAE30;&#xB465;&#xACFC; &#xC9C0;&#xBA74; &#xC0AC;&#xC774;&#xC5D0; &#xB193;&#xC544; &#xC2B5;&#xAE30;&#xC640; &#xCDA9;&#xACA9;&#xC744; &#xBC29;&#xC9C0;. &#xB0B4;&#xC9C4;&#xD6A8;&#xACFC;&#xB3C4;.'},
    {name:'&#xD314;&#xC791;&#xC9C0;&#xBD95;',cat:'&#xC591;&#xC2DD;',desc:'&#xD55C;&#xC625;&#xC758; &#xB300;&#xD45C;&#xC801; &#xC9C0;&#xBD95; &#xD615;&#xD0DC;. 8&#xAC1C;&#xC758; &#xC9C0;&#xBD95;&#xBA74;.',detail:'&#xD328;&#xC218; &#xBC0F; &#xBCF4;&#xC628; &#xC131;&#xB2A5;&#xC774; &#xC6B0;&#xC218;. &#xAD81;&#xAD90;&#xACFC; &#xC0AC;&#xCC30;&#xC5D0; &#xC8FC;&#xB85C; &#xC0AC;&#xC6A9;.'},
    {name:'&#xB9DE;&#xBC30;&#xC9C0;&#xBD95;',cat:'&#xC591;&#xC2DD;',desc:'&#xCC45; &#xD3B4;&#xCE5C; &#xD615;&#xD0DC;&#xC758; &#xAC00;&#xC7A5; &#xAE30;&#xBCF8;&#xC801;&#xC778; &#xC9C0;&#xBD95;.',detail:'&#xCD08;&#xAC00;&#xC9D1;&#xC5D0; &#xB9CE;&#xC774; &#xC0AC;&#xC6A9;. &#xBE57;&#xBB3C; &#xBC30;&#xC218;&#xAC00; &#xC6A9;&#xC774;&#xD558;&#xACE0; &#xC2DC;&#xACF5;&#xC774; &#xAC04;&#xB2E8;.'},
    {name:'&#xAC1C;&#xC640;',cat:'&#xB9C8;&#xAC10;',desc:'&#xC9C0;&#xBD95;&#xC744; &#xB364;&#xB294; &#xAD6C;&#xC6B4; &#xC810;&#xD1A0; &#xAE30;&#xC640;.',detail:'1200&#xB3C4; &#xC774;&#xC0C1;&#xC5D0;&#xC11C; &#xAD6C;&#xC6CC;&#xC57C; &#xD569;&#xB2C8;&#xB2E4;. &#xC554;&#xAE30;&#xC640;/&#xC218;&#xAE30;&#xC640; &#xAD6C;&#xBD84;.'},
    {name:'&#xC0AC;&#xACE0;&#xC11D;',cat:'&#xAD6C;&#xC870;',desc:'&#xB124;&#xBAA8; &#xBC88;&#xAC08;&#xC544; &#xC30D;&#xB294; &#xB3CC;&#xC313;&#xAE30; &#xBC29;&#xBC95;.',detail:'&#xBC14;&#xB974;&#xAC8C; &#xC313;&#xC740; &#xB4A4; &#xB2E4;&#xC74C; &#xCE35;&#xC744; &#xBC18;&#xB300;&#xB85C; &#xC313;&#xC544; &#xAD6C;&#xC870;&#xC801; &#xC548;&#xC815;&#xC131; &#xD655;&#xBCF4;.'},
    {name:'&#xACE0;&#xC778;&#xB3CC;',cat:'&#xC5ED;&#xC0AC;',desc:'&#xC120;&#xC0AC;&#xC2DC;&#xB300;&#xC758; &#xAC70;&#xB300;&#xD55C; &#xB3CC; &#xBB34;&#xB364;. &#xBB18;&#xC801; &#xCD94;&#xC815;.',detail:'&#xD55C;&#xBC18;&#xB3C4;&#xC640; &#xC81C;&#xC8FC;&#xB3C4;&#xC5D0; 3&#xB9CC; &#xAE30; &#xC774;&#xC0C1; &#xC874;&#xC7AC;. &#xC138;&#xACC4;&#xC720;&#xC0B0;.'},
    {name:'&#xAC70;&#xC911;&#xAE30;',cat:'&#xB3C4;&#xAD6C;',desc:'&#xC815;&#xC57D;&#xC6A9;&#xC774; &#xBC1C;&#xBA85;&#xD55C; &#xBB34;&#xAC70;&#xC6B4; &#xBB3C;&#xCCB4;&#xB97C; &#xB4E4;&#xC5B4;&#xC62C;&#xB9AC;&#xB294; &#xB3C4;&#xAD6C;.',detail:'&#xB3C4;&#xB974;&#xB798;&#xC758; &#xC6D0;&#xB9AC;&#xB97C; &#xC774;&#xC6A9;. &#xC218;&#xC6D0;&#xD654;&#xC131; &#xCD95;&#xC131;&#xC5D0; &#xD575;&#xC2EC;&#xC801; &#xC5ED;&#xD560;.'},
    {name:'&#xB179;&#xB85C;',cat:'&#xB3C4;&#xAD6C;',desc:'&#xBB34;&#xAC70;&#xC6B4; &#xBB3C;&#xCCB4;&#xB97C; &#xB192;&#xC740; &#xACF3;&#xC5D0;&#xC11C; &#xB0B4;&#xB9AC;&#xB294; &#xB3C4;&#xB974;&#xB798; &#xC7A5;&#xCE58;.',detail:'&#xC218;&#xC6D0;&#xD654;&#xC131; &#xCD95;&#xC131;&#xC5D0; &#xC0AC;&#xC6A9;. &#xC815;&#xC57D;&#xC6A9;&#xC758; &#xBC1C;&#xBA85;&#xD488;.'},
    {name:'&#xBB35;&#xC790;&#xD569;&#xC7A5;',cat:'&#xB9C8;&#xAC10;',desc:'&#xBAA9;&#xC7AC; &#xD2C8;&#xC0AC;&#xC774;&#xB97C; &#xBA54;&#xC6B0;&#xB294; &#xC804;&#xD1B5; &#xACB0;&#xD569;&#xC7AC;.',detail:'&#xCC38;&#xC232;&#xC9C4;&#xC5D0; &#xC11D;&#xD68C;/&#xD669;&#xD1A0;&#xB97C; &#xC12C;&#xC5B4; &#xB9CC;&#xB4E4;. &#xBC29;&#xC218;/&#xBC29;&#xCDA9; &#xD6A8;&#xACFC;.'},
    {name:'&#xB300;&#xBAA9;&#xC7A5;',cat:'&#xC778;&#xBB3C;',desc:'&#xBAA9;&#xC870; &#xAC74;&#xCD95;&#xBB3C;&#xC758; &#xCD1D; &#xCC45;&#xC784;&#xC790;.',detail:'&#xC124;&#xACC4;&#xBD80;&#xD130; &#xC2DC;&#xACF5;&#xAE4C;&#xC9C0; &#xAC74;&#xCD95; &#xC804; &#xACFC;&#xC815;&#xC744; &#xCD1D;&#xAD04;. &#xBB34;&#xD615;&#xBB38;&#xD654;&#xC7AC;.'},
    {name:'&#xB3C4;&#xD3B8;&#xC218;',cat:'&#xC778;&#xBB3C;',desc:'&#xC870;&#xC120; &#xC2DC;&#xB300; &#xAD81;&#xAD90; &#xAC74;&#xCD95;&#xC758; &#xCD1D; &#xCC45;&#xC784;&#xC790;.',detail:'&#xAD6D;&#xAC00; &#xAC74;&#xCD95; &#xC0AC;&#xC5C5;&#xC758; &#xCD1D;&#xAD04;. &#xC624;&#xB298;&#xB0A0;&#xC758; &#xAC74;&#xCD95;&#xC0AC;&#xC5C5;&#xAD00;&#xB9AC;&#xC790;&#xC640; &#xC720;&#xC0AC;.'},
    {name:'&#xC544;&#xAD81;&#xC774;',cat:'&#xC124;&#xBE44;',desc:'&#xC628;&#xB3CC;&#xC758; &#xBD88;&#xC744; &#xC9C0;&#xD53C;&#xB294; &#xBD80;&#xC5CC;.',detail:'&#xBD80;&#xC5CC;&#xC758; &#xB098;&#xBB34;&#xB97C; &#xD0DC;&#xC6CC; &#xC5F0;&#xAE30;&#xB97C; &#xBC1C;&#xC0DD;&#xC2DC;&#xCF1C; &#xBC14;&#xB2E5; &#xC544;&#xB798; &#xAD74;&#xB72F;&#xC73C;&#xB85C; &#xBCF4;&#xB0C4;.'},
    {name:'&#xAD74;&#xB72F;',cat:'&#xC124;&#xBE44;',desc:'&#xC628;&#xB3CC; &#xBC14;&#xB2E5; &#xC544;&#xB798;&#xC758; &#xC5F0;&#xAE30; &#xD1B5;&#xB85C;.',detail:'&#xC5F0;&#xAE30;&#xAC00; &#xAD74;&#xB72F;&#xC744; &#xC9C0;&#xB098;&#xBA70; &#xBC14;&#xB2E5;&#xC744; &#xB370;&#xC6C0;. &#xAD74;&#xB72F; &#xC124;&#xACC4;&#xAC00; &#xB09C;&#xBC29; &#xD6A8;&#xC728;&#xC744; &#xACB0;&#xC815;.'},
    {name:'&#xBC29;&#xD654;&#xBCBD;',cat:'&#xC548;&#xC804;',desc:'&#xD654;&#xC7AC; &#xD655;&#xC0B0;&#xC744; &#xBC29;&#xC9C0;&#xD558;&#xB294; &#xB0B4;&#xD654; &#xBCBD;&#xCCB4;.',detail:'&#xCCA0;&#xADFC;&#xCF58;&#xD06C;&#xB9AC;&#xD2B8; &#xB610;&#xB294; &#xC870;&#xC801;&#xC870; &#xBC29;&#xD654;&#xBCBD;. &#xAD6C;&#xD68D; &#xB2E8;&#xC704;&#xB85C; &#xC124;&#xCE58;.'},
    {name:'&#xB0B4;&#xC9C4;&#xAD6C;&#xC870;',cat:'&#xC548;&#xC804;',desc:'&#xC9C0;&#xC9C4;&#xC5D0; &#xACAC;&#xB51C; &#xC218; &#xC788;&#xB294; &#xAD6C;&#xC870; &#xC124;&#xACC4;.',detail:'&#xCCA0;&#xADE8; &#xBE0C;&#xB808;&#xC774;&#xC2F1;, &#xC804;&#xB2E8;&#xBCBD;, &#xBA74;&#xC9C4; &#xBC29;&#xC9C0; &#xC7A5;&#xCE58; &#xB4F1; &#xD65C;&#xC6A9;.'},
    {name:'&#xC804;&#xD1B5;&#xD55C;&#xC625;',cat:'&#xC591;&#xC2DD;',desc:'&#xBAA9;&#xC870; &#xAE30;&#xB465;+&#xBCF4; &#xAD6C;&#xC870;&#xC758; &#xD55C;&#xAD6D; &#xC804;&#xD1B5; &#xAC00;&#xC625;.',detail:'&#xC628;&#xB3CC;+&#xB9C8;&#xB8E8;, &#xBCBD;&#xCCB4; &#xD669;&#xD1A0;, &#xCC3D;&#xD638;&#xC9C0; &#xD55C;&#xC9C0;, &#xAE30;&#xC640; &#xC9C0;&#xBD95;. &#xC790;&#xC5F0;&#xACFC;&#xC758; &#xC870;&#xD654;.'}
  ];
  var readList=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(readList));}
  function renderTabs(){
    var cats=['&#xC804;&#xCCB4;','&#xAD6C;&#xC870;','&#xB9C8;&#xAC10;','&#xC124;&#xBE44;','&#xC5ED;&#xC0AC;','&#xD48D;&#xC218;','&#xC591;&#xC2DD;','&#xC548;&#xC804;','&#xB3C4;&#xAD6C;','&#xC778;&#xBB3C;'];
    var el=document.getElementById('v12-dict-tabs'); if(!el) return;
    el.innerHTML=cats.map(function(c,i){ return '<button class="v12-tab'+(i===0?' active':'')+'" data-cat="'+c+'">'+c+'</button>'; }).join('');
    el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick=function(){ el.querySelectorAll('.v12-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); renderList(btn.dataset.cat,''); }; });
  }
  function renderList(cat,query){
    var el=document.getElementById('v12-dict-list'); if(!el) return;
    var allCat = cat.indexOf('\xC804\xCCB4')>=0 || cat==='&#xC804;&#xCCB4;';
    var list=terms;
    if(!allCat) list=terms.filter(function(t){return t.cat===cat;});
    if(query) list=list.filter(function(t){
      var q=query.toLowerCase();
      var nm=t.name.replace(/&#x([0-9A-Fa-f]+);/g,function(m,h){return String.fromCodePoint(parseInt(h,16));}).toLowerCase();
      return nm.indexOf(q)>=0;
    });
    el.innerHTML=list.map(function(t){ var ri=terms.indexOf(t); var rd=readList.indexOf(ri)>=0; return '<div class="v12-item'+(rd?' read':'')+'" data-idx="'+ri+'"><h4>'+t.name+' <span class="tag">'+t.cat+'</span></h4><p>'+t.desc+'</p><div class="detail">'+t.detail+'</div></div>'; }).join('');
    el.querySelectorAll('.v12-item').forEach(function(item){ item.onclick=function(){ item.classList.toggle('expanded'); var idx=parseInt(item.dataset.idx); if(readList.indexOf(idx)<0){readList.push(idx);save();item.classList.add('read');} v12SFX.play('dict_open'); }; });
  }
  function open(){
    document.getElementById('v12-dict').classList.add('active');
    renderTabs(); renderList('&#xC804;&#xCCB4;','');
    var search=document.getElementById('v12-dict-search');
    if(search) search.oninput=function(){ renderList('&#xC804;&#xCCB4;',search.value); };
  }
  function close(){document.getElementById('v12-dict').classList.remove('active');}
  return {open:open,close:close,readList:readList,load:function(){renderTabs();}};
})();

// ── 11. Share Card Generator (공유 카드 Canvas PNG) ──
var v12Share = (function(){
  function draw(){
    var cv=document.getElementById('v12-share-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    var grad=c.createLinearGradient(0,0,W,H);
    grad.addColorStop(0,'#2d1b0e'); grad.addColorStop(0.5,'#4a2c17'); grad.addColorStop(1,'#1a1a2e');
    c.fillStyle=grad; c.fillRect(0,0,W,H);
    c.strokeStyle='#c4956a'; c.lineWidth=3; c.strokeRect(8,8,W-16,H-16);
    c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=1; c.strokeRect(14,14,W-28,H-28);
    c.fillStyle='#f5deb3'; c.font='bold 24px sans-serif'; c.textAlign='center';
    c.fillText('한국 건축 체험 v12.0',W/2,50);
    c.fillStyle='#c4956a'; c.font='13px sans-serif';
    c.fillText('나의 건축 활동 카드',W/2,72);
    var builds=parseInt(localStorage.getItem('hb_totalBuilds')||'0');
    var achCount=(JSON.parse(localStorage.getItem('hb_achievements')||'[]')).length;
    var intCount=v12Interior.grid.filter(function(g){return g;}).length;
    var layCount=v12Layout.grid.filter(function(g){return g;}).length;
    var dictCount=v12Dict.readList.length;
    var timeCount=v12Timeline.viewed.length;
    var stats=[
      {label:'건축 완료',val:builds+'채',icon:'🏠'},
      {label:'업적 달성',val:achCount+'개',icon:'🏅'},
      {label:'인테리어',val:intCount+'칸',icon:'🛋️'},
      {label:'방 배치',val:layCount+'칸',icon:'📐'},
      {label:'용어 학습',val:dictCount+'개',icon:'📖'},
      {label:'시대 탐방',val:timeCount+'개',icon:'🏛️'}
    ];
    var colW=W/3, rowH=80;
    stats.forEach(function(s,i){
      var col=i%3, row=Math.floor(i/3);
      var x=col*colW+colW/2, y=110+row*rowH;
      c.font='28px sans-serif'; c.textAlign='center'; c.fillText(s.icon,x,y);
      c.fillStyle='#f5deb3'; c.font='bold 18px sans-serif'; c.fillText(s.val,x,y+28);
      c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.fillText(s.label,x,y+44);
    });
    var total=builds*10+achCount*5+intCount+layCount+dictCount*2+timeCount*3;
    var grade=total>=200?'S':total>=150?'A':total>=100?'B':total>=50?'C':'D';
    c.fillStyle='rgba(196,149,106,.15)'; c.fillRect(W/2-80,H-70,160,40);
    c.strokeStyle='#c4956a'; c.strokeRect(W/2-80,H-70,160,40);
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText('종합 '+grade+'등급 ('+total+'점)',W/2,H-45);
    c.fillStyle='rgba(196,149,106,.5)'; c.font='10px sans-serif';
    c.fillText(new Date().toLocaleDateString('ko-KR')+' 생성',W/2,H-16);
  }
  function download(){
    var cv=document.getElementById('v12-share-canvas'); if(!cv) return;
    var link=document.createElement('a');
    link.download='house-builder-card.png';
    link.href=cv.toDataURL('image/png');
    link.click();
  }
  function copyToClipboard(){
    var cv=document.getElementById('v12-share-canvas'); if(!cv) return;
    cv.toBlob(function(blob){
      if(navigator.clipboard&&navigator.clipboard.write){
        navigator.clipboard.write([new ClipboardItem({'image/png':blob})]).then(function(){
          v12SFX.play('share_copy');
        }).catch(function(){});
      }
    },'image/png');
  }
  function open(){
    document.getElementById('v12-share').classList.add('active');
    v12SFX.play('share_gen'); draw();
    document.getElementById('v12-share-download').onclick=download;
    document.getElementById('v12-share-copy').onclick=copyToClipboard;
  }
  function close(){document.getElementById('v12-share').classList.remove('active');}
  return {open:open,close:close,load:function(){}};
})();

// ── 12. Quiz v12 (+15 questions, 105→120) ──
var v12Quiz = (function(){
  var questions=[
    {q:'인테리어 디자인에서 가장 중요한 요소는?',a:['동선과 공간 활용','높은 천장','큰 창문','붉은 벽지'],c:0},
    {q:'풍수지리에서 배산임수의 의미는?',a:['산을 뒤에 물을 앞에','물을 뒤에 산을 앞에','평지에 건축','해변가에 건축'],c:0},
    {q:'한옥의 바닥 난방 시스템은?',a:['온돌','벽난로','라디에이터','에어컨'],c:0},
    {q:'건축 비용에서 가장 큰 비중을 차지하는 항목은?',a:['인건비','재료비','설계비','마감비'],c:0},
    {q:'처마란 한옥의 어느 부분인가?',a:['지붕 끝이 치켜 올라간 부분','바닥 기초','기둥 하단','벽체 상부'],c:0},
    {q:'첨성대는 어느 시대에 건립되었는가?',a:['신라 선덕여왕','고려 태조','조선 세종','백제 무령'],c:0},
    {q:'공포란 무엇인가?',a:['못 없이 목재를 결합하는 기법','벽을 쌓는 방법','지붕을 올리는 방법','바닥을 까는 방법'],c:0},
    {q:'방 배치에서 거실은 보통 어디에 위치하는가?',a:['집의 중앙 또는 입구 근처','집의 뒤쪽','지하','옥상'],c:0},
    {q:'한옥의 창호지는 주로 무엇으로 만드는가?',a:['한지','유리','비닐','천'],c:0},
    {q:'대목장이란?',a:['목조 건축의 총 책임자','석조 전문가','단청 화가','풍수 전문가'],c:0},
    {q:'고인돌이 가장 많이 분포한 지역은?',a:['한반도와 제주도','일본','중국','유럽'],c:0},
    {q:'건축에서 기단의 역할은?',a:['바닥 높이를 높이고 습기 방지','지붕 지지','벽체 보강','창문 고정'],c:0},
    {q:'수원화성을 설계한 사람은?',a:['정약용','이이','박지원','황희'],c:0},
    {q:'단청의 5색이 유래한 사상은?',a:['음양오행','불교','유교','도교'],c:0},
    {q:'팔작지붕은 몇 개의 지붕면으로 이루어져 있는가?',a:['8개','4개','6개','10개'],c:0}
  ];
  function inject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ questions.forEach(function(q){ var dup=window.quizQuestions.some(function(eq){return eq.q===q.q;}); if(!dup) window.quizQuestions.push(q); }); } }
  return {inject:inject,count:questions.length};
})();

// ── 13. Achievement System v12 (+12, 110→122) ──
var v12Achieve = (function(){
  var KEY='hb_achievements';
  var defs=[
    {id:'interior_first',name:'인테리어 입문',desc:'인테리어 5칸 배치',icon:'&#x1F6CB;&#xFE0F;',check:function(){return v12Interior.grid.filter(function(g){return g;}).length>=5;}},
    {id:'interior_master',name:'인테리어 마스터',desc:'인테리어 40칸 배치',icon:'&#x1F3A8;',check:function(){return v12Interior.grid.filter(function(g){return g;}).length>=40;}},
    {id:'cost_planner',name:'비용 플래너',desc:'비용 계산기 사용',icon:'&#x1F4B0;',check:function(){return true;}},
    {id:'feng_explorer',name:'풍수 탐험가',desc:'풍수 4방위 이상 설정',icon:'&#x1FA90;',check:function(){return Object.keys(v12Fengshui.scores).length>=4;}},
    {id:'feng_master',name:'풍수 대사',desc:'풍수 8방위 모두 설정',icon:'&#x2638;&#xFE0F;',check:function(){return Object.keys(v12Fengshui.scores).length>=8;}},
    {id:'timeline_traveler',name:'시간 여행자',desc:'연표 5시대 탐방',icon:'&#x1F3DB;&#xFE0F;',check:function(){return v12Timeline.viewed.length>=5;}},
    {id:'timeline_master',name:'역사 마스터',desc:'연표 10시대 전부 탐방',icon:'&#x1F4DC;',check:function(){return v12Timeline.viewed.length>=10;}},
    {id:'layout_designer',name:'방 배치 설계사',desc:'방 배치 30칸 배치',icon:'&#x1F4D0;',check:function(){return v12Layout.grid.filter(function(g){return g;}).length>=30;}},
    {id:'dict_student',name:'건축 학생',desc:'용어 10개 이상 읽기',icon:'&#x1F4D6;',check:function(){return v12Dict.readList.length>=10;}},
    {id:'dict_master',name:'건축 박사',desc:'용어 40개 전부 읽기',icon:'&#x1F393;',check:function(){return v12Dict.readList.length>=40;}},
    {id:'share_first',name:'카드 생성',desc:'공유 카드 생성',icon:'&#x1F4E4;',check:function(){return true;}},
    {id:'v12_explorer',name:'v12 탐험가',desc:'v12 모든 기능 열기',icon:'&#x1F31F;',check:function(){return v12Interior.grid.some(function(g){return g;})&&Object.keys(v12Fengshui.scores).length>0&&v12Timeline.viewed.length>0&&v12Layout.grid.some(function(g){return g;})&&v12Dict.readList.length>0;}}
  ];
  var earned=JSON.parse(localStorage.getItem(KEY)||'[]');
  function check(){ var nw=false; defs.forEach(function(d){ if(earned.indexOf(d.id)<0&&d.check()){earned.push(d.id);nw=true;showToast(d);} }); if(nw)localStorage.setItem(KEY,JSON.stringify(earned)); }
  function showToast(d){ v12SFX.play('achieve_v12'); var t=document.getElementById('achToast'); if(!t) return; var icon=t.querySelector('.ach-icon'); var name=t.querySelector('.ach-name'); if(icon) icon.textContent=d.icon; if(name) name.textContent=d.name; t.classList.add('show'); setTimeout(function(){t.classList.remove('show');},3000); }
  return {check:check,earned:earned};
})();

// ── 14. Quick Action - Bottom Scroll Nav Bar (하단 스크롤 네비바 8종) ──
(function(){
  var actions=[
    {icon:'&#x1F6CB;&#xFE0F;',label:'인테리어',fn:function(){v12Interior.open();}},
    {icon:'&#x1F4B0;',label:'비용계산',fn:function(){v12Cost.open();}},
    {icon:'&#x1FA90;',label:'풍수나침반',fn:function(){v12Fengshui.open();}},
    {icon:'&#x1F3DB;&#xFE0F;',label:'시대연표',fn:function(){v12Timeline.open();}},
    {icon:'&#x1F4D0;',label:'방배치',fn:function(){v12Layout.open();}},
    {icon:'&#x1F3AF;',label:'도전과제',fn:function(){v12Challenge.open();}},
    {icon:'&#x1F4D6;',label:'용어사전',fn:function(){v12Dict.open();}},
    {icon:'&#x1F4E4;',label:'공유카드',fn:function(){v12Share.open();}}
  ];
  function inject(){
    var bar=document.createElement('div'); bar.id='v12-nav';
    bar.style.cssText='position:fixed;bottom:0;left:0;right:0;height:52px;background:linear-gradient(180deg,rgba(45,27,14,.95),rgba(30,18,8,.98));border-top:1px solid rgba(196,149,106,.3);display:flex;align-items:center;gap:4px;padding:0 8px;overflow-x:auto;z-index:298;-webkit-overflow-scrolling:touch';
    actions.forEach(function(a){
      var btn=document.createElement('button');
      btn.style.cssText='min-width:56px;height:40px;border-radius:8px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#f5deb3;font-size:11px;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;flex-shrink:0;transition:all .2s;font-family:inherit;padding:2px 6px';
      btn.innerHTML='<span style="font-size:16px">'+a.icon+'</span><span style="font-size:9px;white-space:nowrap">'+a.label+'</span>';
      btn.onmouseenter=function(){btn.style.background='rgba(196,149,106,.3)';btn.style.borderColor='#c4956a';};
      btn.onmouseleave=function(){btn.style.background='rgba(255,255,255,.05)';btn.style.borderColor='rgba(196,149,106,.3)';};
      btn.onclick=a.fn; bar.appendChild(btn);
    });
    document.body.appendChild(bar);
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded',inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.key.toUpperCase()){
      case 'I':e.preventDefault();v12Interior.open();break;
      case 'X':e.preventDefault();v12Cost.open();break;
      case 'F':e.preventDefault();v12Fengshui.open();break;
      case 'E':e.preventDefault();v12Timeline.open();break;
      case 'L':e.preventDefault();v12Layout.open();break;
      case 'H':e.preventDefault();v12Challenge.open();break;
      case 'D':e.preventDefault();v12Dict.open();break;
      case 'G':e.preventDefault();v12Share.open();break;
    }
  });
})();

// ── 16. Panel Open/Close helpers ──
window.v12Close = function(panel){
  var map={interior:v12Interior,cost:v12Cost,fengshui:v12Fengshui,timeline:v12Timeline,layout:v12Layout,challenge:v12Challenge,dict:v12Dict,share:v12Share};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){ function tryInject(){if(typeof window.quizQuestions==='object'){v12Quiz.inject();return true;}return false;} if(!tryInject()){var ci=setInterval(function(){if(tryInject())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);} })();

// ── 18. Hook into main game completion ──
(function(){ function hookComplete(){var orig=window.showComplete;if(typeof orig!=='function')return false;if(window.__v12Hooked)return true;window.__v12Hooked=true;var prev=window.showComplete;window.showComplete=function(){prev.apply(this,arguments);v12Achieve.check();};return true;} if(!hookComplete()){var ci=setInterval(function(){if(hookComplete())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);} })();

// ── 19. Initial load + checks ──
(function(){
  v12Interior.load(); v12Cost.load(); v12Fengshui.load(); v12Timeline.load();
  v12Layout.load(); v12Challenge.load(); v12Dict.load(); v12Share.load();
  setTimeout(function(){v12Achieve.check();},3000);
})();

// end v12 guard
}

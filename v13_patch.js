// =====================================================
// House Builder v13.0 Patch
// 가구커스터마이징공방12종Canvas+층별평면도에디터12x12Canvas
// 건축어워드시스템5축RadarCanvas+건축소재백과12종카드
// 조명디자인스튜디오Canvas8종+방배색시뮬레이터12색Canvas
// 건축포트폴리오CanvasCard+한옥수리시뮬레이터8종Canvas
// 퀴즈+15(120→135)+업적+12(122→134)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV13) {
window.__hbV13 = true;

// ── 1. CSS Injection v13 ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v13-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3700;overflow-y:auto;padding:16px}',
    '.v13-panel.active{display:block}',
    '.v13-box{max-width:720px;margin:40px auto}',
    '.v13-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v13-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v13-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v13-close:hover{background:#d4a57a}',
    '.v13-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v13-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v13-tab:hover,.v13-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v13-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
    '.v13-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v13-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v13-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v13-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v13-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v13-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v13-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v13-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v13-item.read{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v13-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v13-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v13-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v13-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v13-item.expanded .detail{display:block}',
    '.v13-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v13-btn-sm:hover{background:#d4a57a}',
    '.v13-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v13-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v13-floor-cell{width:40px;height:40px;border:1px solid rgba(196,149,106,.15);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;transition:all .15s;background:rgba(255,255,255,.02)}',
    '.v13-floor-cell:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v13-floor-cell.placed{background:rgba(196,149,106,.12);border-color:rgba(196,149,106,.4)}',
    '.v13-slider-row{display:flex;align-items:center;gap:10px;margin-bottom:12px}',
    '.v13-slider-row label{width:90px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0}',
    '.v13-slider-row input[type=range]{flex:1;accent-color:#c4956a}',
    '.v13-slider-row .val{width:50px;color:#c4956a;font-size:12px;flex-shrink:0;text-align:center}',
    '.v13-color-btn{width:36px;height:36px;border-radius:50%;border:3px solid transparent;cursor:pointer;transition:all .2s}',
    '.v13-color-btn:hover{transform:scale(1.15)}',
    '.v13-color-btn.active{border-color:#f5deb3;box-shadow:0 0 8px rgba(245,222,179,.5)}',
    '.v13-material-card{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:12px;padding:16px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v13-material-card:hover{background:rgba(196,149,106,.15);border-color:#c4956a;transform:translateY(-2px)}',
    '.v13-material-card .mat-icon{font-size:36px;margin-bottom:8px}',
    '.v13-material-card h4{color:#f5deb3;font-size:13px;margin:0 0 4px}',
    '.v13-material-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v13-material-card .mat-detail{display:none;margin-top:10px;text-align:left;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v13-material-card.expanded .mat-detail{display:block}',
    '.v13-repair-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:8px;cursor:pointer;transition:all .2s}',
    '.v13-repair-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v13-repair-item.repaired{border-color:#4a7c59;background:rgba(74,124,89,.1)}',
    '.v13-repair-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px}',
    '.v13-repair-item p{color:#c4956a;font-size:11px;margin:0}',
    '@media(max-width:600px){.v13-box{margin:16px auto}.v13-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v13-floor-cell{width:32px;height:32px;font-size:13px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v13 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v13-panels';
  wrap.innerHTML =
    '<div id="v13-furniture" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F6CB;&#xFE0F; &#xAC00;&#xAD6C; &#xCEE4;&#xC2A4;&#xD130;&#xB9C8;&#xC774;&#xC9D5; &#xACF5;&#xBC29;</h2>' +
      '<p>12&#xC885; &#xAC00;&#xAD6C;&#xC758; &#xC7AC;&#xC9C8;/&#xC0C9;&#xC0C1;&#xC744; &#xBCC0;&#xACBD;&#xD558;&#xACE0; &#xBBF8;&#xB9AC;&#xBCF4;&#xAE30;</p>' +
      '<div class="v13-tabs" id="v13-furn-tabs"></div>' +
      '<div class="v13-tabs" id="v13-furn-mats"></div>' +
      '<div class="v13-tabs" id="v13-furn-colors"></div>' +
      '<canvas id="v13-furn-canvas" class="v13-canvas" width="480" height="360"></canvas>' +
      '<div id="v13-furn-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div>' +
      '<div style="text-align:center;margin:10px 0"><button class="v13-btn-sm" id="v13-furn-save">&#xC800;&#xC7A5;</button> <button class="v13-btn-outline" id="v13-furn-reset">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v13-close" onclick="v13Close(\'furniture\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-floorplan" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F4D0; &#xCE35;&#xBCC4; &#xD3C9;&#xBA74;&#xB3C4; &#xC5D0;&#xB514;&#xD130;</h2>' +
      '<p>12x12 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; &#xBCBD;/&#xBB38;/&#xCC3D;&#xBB38;/&#xACC4;&#xB2E8;&#xC744; &#xBC30;&#xCE58;&#xD558;&#xC138;&#xC694;</p>' +
      '<div class="v13-tabs" id="v13-fp-tools"></div>' +
      '<div class="v13-tabs" id="v13-fp-floors"></div>' +
      '<canvas id="v13-fp-canvas" class="v13-canvas" width="504" height="504"></canvas>' +
      '<div id="v13-fp-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div>' +
      '<div style="text-align:center;margin:10px 0"><button class="v13-btn-sm" id="v13-fp-save">&#xC800;&#xC7A5;</button> <button class="v13-btn-outline" id="v13-fp-clear">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v13-close" onclick="v13Close(\'floorplan\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-award" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F3C6; &#xAC74;&#xCD95; &#xC5B4;&#xC6CC;&#xB4DC; &#xC2DC;&#xC2A4;&#xD15C;</h2>' +
      '<p>&#xBBF8;&#xD559;/&#xAE30;&#xB2A5;/&#xD601;&#xC2E0;/&#xC5ED;&#xC0AC;&#xC131;/&#xCE5C;&#xD658;&#xACBD; 5&#xCD95; Radar &#xD3C9;&#xAC00;</p>' +
      '<div class="v13-tabs" id="v13-award-tabs"></div>' +
      '<canvas id="v13-award-canvas" class="v13-canvas" width="500" height="460"></canvas>' +
      '<div id="v13-award-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div>' +
      '<div id="v13-award-result" style="text-align:center;font-size:24px;font-weight:700;margin:10px 0"></div>' +
      '<div style="text-align:center;margin:10px 0"><button class="v13-btn-sm" id="v13-award-eval">&#xD3C9;&#xAC00;&#xD558;&#xAE30;</button> <button class="v13-btn-outline" id="v13-award-reset">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v13-close" onclick="v13Close(\'award\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-material" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F9F1; &#xAC74;&#xCD95; &#xC18C;&#xC7AC; &#xBC31;&#xACFC;</h2>' +
      '<p>12&#xC885; &#xC804;&#xD1B5;+&#xD604;&#xB300; &#xAC74;&#xCD95; &#xC18C;&#xC7AC; &#xC0C1;&#xC138; &#xCE74;&#xB4DC;</p>' +
      '<div class="v13-tabs" id="v13-mat-tabs"></div>' +
      '<div class="v13-grid" id="v13-mat-grid"></div>' +
      '<button class="v13-close" onclick="v13Close(\'material\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-lighting" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F4A1; &#xC870;&#xBA85; &#xB514;&#xC790;&#xC778; &#xC2A4;&#xD29C;&#xB514;&#xC624;</h2>' +
      '<p>Canvas &#xBC29; &#xC870;&#xBA85; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;, 8&#xC885; &#xC870;&#xBA85;&#xAE30;&#xAD6C;</p>' +
      '<div class="v13-tabs" id="v13-light-tabs"></div>' +
      '<div class="v13-slider-row"><label>&#xBC1D;&#xAE30;</label><input type="range" id="v13-light-bright" min="10" max="100" value="70"><div class="val" id="v13-light-bright-val">70</div></div>' +
      '<div class="v13-slider-row"><label>&#xC0C9;&#xC628;&#xB3C4; (K)</label><input type="range" id="v13-light-temp" min="2700" max="6500" value="4000" step="100"><div class="val" id="v13-light-temp-val">4000</div></div>' +
      '<canvas id="v13-light-canvas" class="v13-canvas" width="560" height="400"></canvas>' +
      '<div id="v13-light-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div>' +
      '<button class="v13-close" onclick="v13Close(\'lighting\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-colorsim" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F3A8; &#xBC29; &#xBC30;&#xC0C9; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>12&#xC0C9; &#xD314;&#xB808;&#xD2B8;&#xB85C; &#xBCBD;/&#xBC14;&#xB2E5;/&#xCC9C;&#xC7A5; &#xCEEC;&#xB7EC;&#xB9C1;</p>' +
      '<div class="v13-tabs" id="v13-color-target"></div>' +
      '<div id="v13-color-palette" style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:12px 0"></div>' +
      '<canvas id="v13-color-canvas" class="v13-canvas" width="520" height="380"></canvas>' +
      '<div id="v13-color-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div>' +
      '<div style="text-align:center;margin:10px 0"><button class="v13-btn-sm" id="v13-color-save">&#xC800;&#xC7A5;</button> <button class="v13-btn-outline" id="v13-color-reset">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v13-close" onclick="v13Close(\'colorism\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-portfolio" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F4BC; &#xAC74;&#xCD95; &#xD3EC;&#xD2B8;&#xD3F4;&#xB9AC;&#xC624;</h2>' +
      '<p>&#xC644;&#xC131; &#xAC74;&#xCD95;&#xBB3C; Canvas &#xCE74;&#xB4DC; + &#xC800;&#xC7A5;/&#xBE44;&#xAD50;/PNG &#xB2E4;&#xC6B4;&#xB85C;&#xB4DC;</p>' +
      '<div class="v13-tabs" id="v13-port-tabs"></div>' +
      '<canvas id="v13-port-canvas" class="v13-canvas" width="560" height="400"></canvas>' +
      '<div id="v13-port-info" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div>' +
      '<div style="text-align:center;margin:10px 0"><button class="v13-btn-sm" id="v13-port-add">&#xCD94;&#xAC00;</button> <button class="v13-btn-outline" id="v13-port-download">PNG &#xB2E4;&#xC6B4;&#xB85C;&#xB4DC;</button> <button class="v13-btn-outline" id="v13-port-compare">&#xBE44;&#xAD50;</button></div>' +
      '<button class="v13-close" onclick="v13Close(\'portfolio\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v13-repair" class="v13-panel"><div class="v13-box">' +
      '<h2>&#x1F3EF; &#xD55C;&#xC625; &#xC218;&#xB9AC; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>8&#xC885; &#xC190;&#xC0C1;&#xC720;&#xD615; &#xC9C4;&#xB2E8; + &#xC218;&#xB9AC; Canvas &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;</p>' +
      '<div id="v13-repair-list"></div>' +
      '<canvas id="v13-repair-canvas" class="v13-canvas" width="560" height="400"></canvas>' +
      '<div id="v13-repair-grade" style="text-align:center;font-size:28px;font-weight:700;margin:10px 0"></div>' +
      '<button class="v13-close" onclick="v13Close(\'repair\')">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. Web Audio SFX v13 (12 types) ──
var v13SFX = (function(){
  var actx = null;
  function ctx(){ if(!actx) try{ actx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return actx; }
  function play(type){
    var c = ctx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    var t = c.currentTime;
    switch(type){
      case 'furn_customize': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(698,t+.1); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.18); o.start(t); o.stop(t+.18); break;
      case 'furn_save': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'fp_place': o.type='triangle'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(587,t+.08); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.14); o.start(t); o.stop(t+.14); break;
      case 'award_eval': o.type='sine'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(784,t+.3); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.5); o.start(t); o.stop(t+.5); break;
      case 'material_open': o.type='triangle'; o.frequency.setValueAtTime(349,t); o.frequency.linearRampToValueAtTime(523,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'light_change': o.type='sine'; o.frequency.setValueAtTime(587,t); o.frequency.linearRampToValueAtTime(698,t+.08); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'color_pick': o.type='triangle'; o.frequency.setValueAtTime(659,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
      case 'port_add': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(659,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'port_download': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(880,t+.2); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.35); o.start(t); o.stop(t+.35); break;
      case 'repair_diagnose': o.type='sawtooth'; o.frequency.setValueAtTime(220,t); o.frequency.linearRampToValueAtTime(330,t+.15); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'repair_fix': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      case 'achieve_v13': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1);
    }
  }
  return {play:play,ctx:ctx};
})();

// ── 4. Furniture Customization Workshop (가구 커스터마이징 공방 12종 Canvas) ──
var v13Furniture = (function(){
  var KEY = 'hb_v13_furniture';
  var items = [
    {icon:'🛋',name:'소파',w:80,h:50,baseColor:'#8B4513'},
    {icon:'📺',name:'TV',w:70,h:45,baseColor:'#333'},
    {icon:'🪑',name:'의자',w:40,h:40,baseColor:'#A0522D'},
    {icon:'🍽',name:'식탁',w:70,h:50,baseColor:'#DEB887'},
    {icon:'🛏',name:'침대',w:80,h:60,baseColor:'#CD853F'},
    {icon:'📚',name:'책장',w:50,h:70,baseColor:'#5C4033'},
    {icon:'🪞',name:'거울',w:40,h:60,baseColor:'#C0C0C0'},
    {icon:'🧳',name:'서랍장',w:60,h:50,baseColor:'#8B7355'},
    {icon:'🚿',name:'세면대',w:45,h:40,baseColor:'#FFFFFF'},
    {icon:'🎹',name:'피아노',w:70,h:55,baseColor:'#1C1C1C'},
    {icon:'☕',name:'커피테이블',w:55,h:35,baseColor:'#BC8F8F'},
    {icon:'🧴',name:'수납장',w:60,h:65,baseColor:'#D2B48C'}
  ];
  var materials = [
    {name:'원목',tex:'wood',mul:1.0},{name:'대리석',tex:'marble',mul:0.9},
    {name:'금속',tex:'metal',mul:0.7},{name:'가죽',tex:'leather',mul:1.1},
    {name:'패브릭',tex:'fabric',mul:1.2},{name:'유리',tex:'glass',mul:0.5}
  ];
  var colors = ['#8B4513','#CD853F','#F5F5DC','#FFFFFF','#2F4F4F','#800020','#191970','#556B2F','#FFD700','#708090','#FFC0CB','#4A0E0E'];
  var currentItem = 0, currentMat = 0, currentColor = '#8B4513';
  var customized = JSON.parse(localStorage.getItem(KEY) || '{}');
  function save(){ localStorage.setItem(KEY, JSON.stringify(customized)); }
  function getCustomCount(){ return Object.keys(customized).length; }
  function renderTabs(){
    var el = document.getElementById('v13-furn-tabs'); if(!el) return;
    el.innerHTML = items.map(function(it,i){ return '<button class="v13-tab'+(i===currentItem?' active':'')+'" data-idx="'+i+'">'+it.icon+' '+it.name+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentItem=parseInt(btn.dataset.idx); renderTabs(); renderMats(); draw(); v13SFX.play('furn_customize'); }; });
  }
  function renderMats(){
    var el = document.getElementById('v13-furn-mats'); if(!el) return;
    el.innerHTML = materials.map(function(m,i){ return '<button class="v13-tab'+(i===currentMat?' active':'')+'" data-idx="'+i+'">'+m.name+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentMat=parseInt(btn.dataset.idx); renderMats(); draw(); v13SFX.play('furn_customize'); }; });
    var cel = document.getElementById('v13-furn-colors'); if(!cel) return;
    cel.innerHTML = colors.map(function(c,i){ return '<button class="v13-color-btn'+(c===currentColor?' active':'')+'" style="background:'+c+'" data-c="'+c+'"></button>'; }).join('');
    cel.querySelectorAll('.v13-color-btn').forEach(function(btn){ btn.onclick = function(){ currentColor=btn.dataset.c; renderMats(); draw(); v13SFX.play('color_pick'); }; });
  }
  function hexToRgb(hex){ var r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16); return {r:r,g:g,b:b}; }
  function draw(){
    var cv = document.getElementById('v13-furn-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    var it = items[currentItem], mat = materials[currentMat];
    c.clearRect(0,0,W,H);
    // background - showroom floor
    c.fillStyle = '#1a1a2e'; c.fillRect(0,0,W,H);
    c.fillStyle = 'rgba(196,149,106,.06)';
    for(var gx=0;gx<W;gx+=30){ for(var gy=0;gy<H;gy+=30){ c.fillRect(gx,gy,1,1); } }
    // floor
    c.fillStyle = 'rgba(139,105,20,.15)'; c.fillRect(0,H*0.7,W,H*0.3);
    c.strokeStyle = 'rgba(196,149,106,.2)'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(0,H*0.7); c.lineTo(W,H*0.7); c.stroke();
    // back wall
    c.fillStyle = 'rgba(60,40,25,.3)'; c.fillRect(40,60,W-80,H*0.7-60);
    c.strokeStyle = 'rgba(196,149,106,.15)'; c.strokeRect(40,60,W-80,H*0.7-60);
    // furniture preview
    var rgb = hexToRgb(currentColor);
    var cx = W/2, cy = H*0.55;
    var fw = it.w * 2.2, fh = it.h * 2.2;
    // shadow
    c.fillStyle = 'rgba(0,0,0,.25)';
    c.beginPath(); c.ellipse(cx, cy+fh/2+10, fw/2+10, 12, 0, 0, Math.PI*2); c.fill();
    // main body with material texture simulation
    var baseR = rgb.r, baseG = rgb.g, baseB = rgb.b;
    if(mat.tex==='wood'){
      for(var s=0;s<fh;s+=3){
        var variation = Math.sin(s*0.3)*15;
        c.fillStyle = 'rgb('+(baseR+variation)+','+(baseG+variation*0.6)+','+(baseB+variation*0.3)+')';
        c.fillRect(cx-fw/2, cy-fh/2+s, fw, 3);
      }
    } else if(mat.tex==='marble'){
      c.fillStyle = 'rgb('+baseR+','+baseG+','+baseB+')'; c.fillRect(cx-fw/2,cy-fh/2,fw,fh);
      c.strokeStyle = 'rgba(255,255,255,.15)'; c.lineWidth = 0.5;
      for(var v=0;v<8;v++){
        c.beginPath(); c.moveTo(cx-fw/2+Math.random()*fw,cy-fh/2);
        c.bezierCurveTo(cx-fw/4+Math.random()*fw/2,cy-fh/4+Math.random()*fh/2,cx+Math.random()*fw/3,cy+Math.random()*fh/3,cx-fw/2+Math.random()*fw,cy+fh/2);
        c.stroke();
      }
    } else if(mat.tex==='metal'){
      var grad = c.createLinearGradient(cx-fw/2,cy-fh/2,cx+fw/2,cy+fh/2);
      grad.addColorStop(0,'rgb('+(baseR+40)+','+(baseG+40)+','+(baseB+40)+')');
      grad.addColorStop(0.5,'rgb('+baseR+','+baseG+','+baseB+')');
      grad.addColorStop(1,'rgb('+(Math.max(0,baseR-30))+','+(Math.max(0,baseG-30))+','+(Math.max(0,baseB-30))+')');
      c.fillStyle = grad; c.fillRect(cx-fw/2,cy-fh/2,fw,fh);
    } else if(mat.tex==='leather'){
      c.fillStyle = 'rgb('+baseR+','+baseG+','+baseB+')'; c.fillRect(cx-fw/2,cy-fh/2,fw,fh);
      c.fillStyle = 'rgba(0,0,0,.06)';
      for(var lx=cx-fw/2;lx<cx+fw/2;lx+=6){ for(var ly=cy-fh/2;ly<cy+fh/2;ly+=6){ c.fillRect(lx,ly,2,2); } }
    } else if(mat.tex==='fabric'){
      c.fillStyle = 'rgb('+baseR+','+baseG+','+baseB+')'; c.fillRect(cx-fw/2,cy-fh/2,fw,fh);
      c.strokeStyle = 'rgba(255,255,255,.05)'; c.lineWidth = 0.5;
      for(var fx=cx-fw/2;fx<cx+fw/2;fx+=4){ c.beginPath(); c.moveTo(fx,cy-fh/2); c.lineTo(fx,cy+fh/2); c.stroke(); }
      for(var fy=cy-fh/2;fy<cy+fh/2;fy+=4){ c.beginPath(); c.moveTo(cx-fw/2,fy); c.lineTo(cx+fw/2,fy); c.stroke(); }
    } else {
      c.fillStyle = 'rgba('+baseR+','+baseG+','+baseB+',.4)'; c.fillRect(cx-fw/2,cy-fh/2,fw,fh);
      c.strokeStyle = 'rgba(255,255,255,.3)'; c.lineWidth = 2; c.strokeRect(cx-fw/2,cy-fh/2,fw,fh);
      var glare = c.createLinearGradient(cx-fw/2,cy-fh/2,cx-fw/2+fw*0.4,cy-fh/2+fh*0.4);
      glare.addColorStop(0,'rgba(255,255,255,.25)'); glare.addColorStop(1,'rgba(255,255,255,0)');
      c.fillStyle=glare; c.fillRect(cx-fw/2,cy-fh/2,fw*0.4,fh*0.4);
    }
    // border
    c.strokeStyle = 'rgba(245,222,179,.4)'; c.lineWidth = 2;
    c.strokeRect(cx-fw/2,cy-fh/2,fw,fh);
    // emoji on top
    c.font = '48px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(it.icon, cx, cy);
    // label
    c.fillStyle = '#f5deb3'; c.font = 'bold 16px sans-serif'; c.textBaseline = 'top';
    c.fillText(it.name, cx, 20);
    c.fillStyle = '#c4956a'; c.font = '13px sans-serif';
    c.fillText(mat.name + ' | ' + currentColor, cx, 42);
    // info panel
    var info = document.getElementById('v13-furn-info');
    if(info) info.textContent = it.name + ' - ' + mat.name + ' (' + currentColor + ') | ' + getCustomCount() + '/12 customized';
  }
  function open(){
    document.getElementById('v13-furniture').classList.add('active');
    renderTabs(); renderMats(); draw();
    document.getElementById('v13-furn-save').onclick = function(){
      customized[currentItem] = {mat:currentMat, color:currentColor}; save();
      v13SFX.play('furn_save'); v13Achieve.check(); draw();
    };
    document.getElementById('v13-furn-reset').onclick = function(){ customized={}; save(); draw(); };
  }
  function close(){ document.getElementById('v13-furniture').classList.remove('active'); }
  return {open:open,close:close,getCustomCount:getCustomCount,load:function(){}};
})();

// ── 5. Floor Plan Editor (층별 평면도 에디터 12x12 Canvas 2D Top View) ──
var v13FloorPlan = (function(){
  var KEY = 'hb_v13_floorplan';
  var GRID = 12, CELL = 40;
  var tools = [
    {icon:'⬛',name:'벽',code:'W',color:'#5C4033'},
    {icon:'🚪',name:'문',code:'D',color:'#8B7355'},
    {icon:'🪟',name:'창문',code:'N',color:'#87CEEB'},
    {icon:'🫜',name:'계단',code:'S',color:'#DAA520'},
    {icon:'⬜',name:'방',code:'R',color:'rgba(196,149,106,.2)'},
    {icon:'🚰',name:'화장실',code:'B',color:'#4682B4'},
    {icon:'🍳',name:'주방',code:'K',color:'#CD853F'},
    {icon:'❌',name:'지우기',code:null,color:null}
  ];
  var currentTool = 0;
  var currentFloor = 0;
  var maxFloors = 3;
  var floors = JSON.parse(localStorage.getItem(KEY) || 'null') || [new Array(GRID*GRID).fill(null),new Array(GRID*GRID).fill(null),new Array(GRID*GRID).fill(null)];
  var floorplanCount = JSON.parse(localStorage.getItem(KEY+'_count') || '0');
  function save(){ localStorage.setItem(KEY, JSON.stringify(floors)); localStorage.setItem(KEY+'_count', JSON.stringify(floorplanCount)); }
  function getGrid(){ return floors[currentFloor]; }
  function renderTools(){
    var el = document.getElementById('v13-fp-tools'); if(!el) return;
    el.innerHTML = tools.map(function(t,i){ return '<button class="v13-tab'+(i===currentTool?' active':'')+'" data-idx="'+i+'">'+t.icon+' '+t.name+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentTool=parseInt(btn.dataset.idx); renderTools(); }; });
  }
  function renderFloors(){
    var el = document.getElementById('v13-fp-floors'); if(!el) return;
    var labels = ['1&#xCE35;','2&#xCE35;','3&#xCE35;'];
    el.innerHTML = labels.map(function(l,i){ return '<button class="v13-tab'+(i===currentFloor?' active':'')+'" data-idx="'+i+'">'+l+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentFloor=parseInt(btn.dataset.idx); renderFloors(); drawCanvas(); }; });
  }
  function drawCanvas(){
    var cv = document.getElementById('v13-fp-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), grid = getGrid();
    var size = GRID * CELL + GRID + 1;
    cv.width = size; cv.height = size;
    c.clearRect(0,0,cv.width,cv.height);
    c.fillStyle = '#1a1a2e'; c.fillRect(0,0,cv.width,cv.height);
    // draw grid
    for(var r=0;r<GRID;r++){
      for(var col=0;col<GRID;col++){
        var idx = r*GRID+col;
        var x = col*(CELL+1)+1, y = r*(CELL+1)+1;
        var val = grid[idx];
        if(val !== null){
          var tool = tools.filter(function(t){return t.code===val;})[0];
          if(tool){
            c.fillStyle = tool.color; c.fillRect(x,y,CELL,CELL);
            c.fillStyle = '#f5deb3'; c.font = '18px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
            c.fillText(tool.icon, x+CELL/2, y+CELL/2);
          }
        } else {
          c.fillStyle = 'rgba(255,255,255,.03)'; c.fillRect(x,y,CELL,CELL);
        }
        c.strokeStyle = 'rgba(196,149,106,.15)'; c.lineWidth = 1; c.strokeRect(x,y,CELL,CELL);
      }
    }
    // grid labels
    c.fillStyle = 'rgba(196,149,106,.4)'; c.font = '9px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'top';
    for(var i=0;i<GRID;i++){
      c.fillText(String(i+1), i*(CELL+1)+1+CELL/2, 2);
      c.textAlign = 'right'; c.textBaseline = 'middle';
      c.fillText(String.fromCharCode(65+i), CELL+1+CELL/2, i*(CELL+1)+1+CELL/2);
      c.textAlign = 'center'; c.textBaseline = 'top';
    }
    updateStats();
  }
  function updateStats(){
    var el = document.getElementById('v13-fp-stats'); if(!el) return;
    var grid = getGrid();
    var placed = grid.filter(function(g){return g!==null;}).length;
    var walls = grid.filter(function(g){return g==='W';}).length;
    var doors = grid.filter(function(g){return g==='D';}).length;
    var windows = grid.filter(function(g){return g==='N';}).length;
    el.textContent = (currentFloor+1) + '층 | 배치: ' + placed + '/' + (GRID*GRID) + ' | 벽:' + walls + ' 문:' + doors + ' 창:' + windows;
  }
  function bindCanvas(){
    var cv = document.getElementById('v13-fp-canvas'); if(!cv) return;
    cv.onclick = function(e){
      var rect = cv.getBoundingClientRect();
      var sx = (e.clientX - rect.left) * (cv.width / rect.width);
      var sy = (e.clientY - rect.top) * (cv.height / rect.height);
      var col = Math.floor(sx / (CELL+1));
      var row = Math.floor(sy / (CELL+1));
      if(col<0||col>=GRID||row<0||row>=GRID) return;
      var idx = row*GRID+col;
      var grid = getGrid();
      var t = tools[currentTool];
      if(t.code===null){ grid[idx]=null; } else { grid[idx]=t.code; }
      save(); v13SFX.play('fp_place'); drawCanvas(); v13Achieve.check();
    };
  }
  function open(){
    document.getElementById('v13-floorplan').classList.add('active');
    renderTools(); renderFloors(); drawCanvas(); bindCanvas();
    document.getElementById('v13-fp-save').onclick = function(){ floorplanCount++; save(); v13SFX.play('furn_save'); v13Achieve.check(); };
    document.getElementById('v13-fp-clear').onclick = function(){ floors[currentFloor]=new Array(GRID*GRID).fill(null); save(); drawCanvas(); };
  }
  function close(){ document.getElementById('v13-floorplan').classList.remove('active'); }
  return {open:open,close:close,getCount:function(){return floorplanCount;},floors:floors,load:function(){}};
})();

// ── 6. Architecture Award System (건축 어워드 5축 Radar Canvas) ──
var v13Award = (function(){
  var KEY = 'hb_v13_award';
  var axes = ['미학','기능','혁신','역사성','친환경'];
  var presets = [
    {name:'경복궁 근정전',scores:[95,85,70,100,60]},
    {name:'부석사 무량수전',scores:[90,80,65,100,70]},
    {name:'전통 한옥',scores:[85,90,60,95,85]},
    {name:'현대 한옥',scores:[80,95,85,70,80]},
    {name:'초가집',scores:[70,75,50,90,95]},
    {name:'현대 아파트',scores:[60,95,80,20,65]}
  ];
  var currentPreset = 0;
  var scores = presets[0].scores.slice();
  var awarded = JSON.parse(localStorage.getItem(KEY)||'false');
  function save(){ localStorage.setItem(KEY, JSON.stringify(awarded)); }
  function renderTabs(){
    var el = document.getElementById('v13-award-tabs'); if(!el) return;
    el.innerHTML = presets.map(function(p,i){ return '<button class="v13-tab'+(i===currentPreset?' active':'')+'" data-idx="'+i+'">'+p.name+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentPreset=parseInt(btn.dataset.idx); scores=presets[currentPreset].scores.slice(); renderTabs(); draw(); v13SFX.play('award_eval'); }; });
  }
  function draw(){
    var cv = document.getElementById('v13-award-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    var cx = W/2, cy = H/2 + 10, R = 160;
    c.clearRect(0,0,W,H);
    // title
    c.fillStyle = '#f5deb3'; c.font = 'bold 16px sans-serif'; c.textAlign = 'center';
    c.fillText(presets[currentPreset].name + ' - 건축 평가', cx, 28);
    // radar grid rings
    for(var ring=1;ring<=5;ring++){
      var rr = R * ring / 5;
      c.beginPath();
      for(var a=0;a<5;a++){
        var angle = -Math.PI/2 + (Math.PI*2/5)*a;
        var px = cx + rr * Math.cos(angle);
        var py = cy + rr * Math.sin(angle);
        if(a===0) c.moveTo(px,py); else c.lineTo(px,py);
      }
      c.closePath();
      c.strokeStyle = 'rgba(196,149,106,'+(ring===5?0.4:0.15)+')'; c.lineWidth = 1; c.stroke();
      // ring label
      c.fillStyle = 'rgba(196,149,106,.3)'; c.font = '9px sans-serif'; c.textAlign = 'left';
      c.fillText(String(ring*20), cx+3, cy-rr+3);
    }
    // axis lines
    for(var a=0;a<5;a++){
      var angle = -Math.PI/2 + (Math.PI*2/5)*a;
      c.beginPath(); c.moveTo(cx,cy);
      c.lineTo(cx+R*Math.cos(angle), cy+R*Math.sin(angle));
      c.strokeStyle = 'rgba(196,149,106,.25)'; c.lineWidth = 1; c.stroke();
      // axis label
      var lx = cx + (R+25)*Math.cos(angle);
      var ly = cy + (R+25)*Math.sin(angle);
      c.fillStyle = '#f5deb3'; c.font = 'bold 13px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText(axes[a], lx, ly);
    }
    // data polygon
    c.beginPath();
    for(var a=0;a<5;a++){
      var angle = -Math.PI/2 + (Math.PI*2/5)*a;
      var val = scores[a] / 100;
      var px = cx + R * val * Math.cos(angle);
      var py = cy + R * val * Math.sin(angle);
      if(a===0) c.moveTo(px,py); else c.lineTo(px,py);
    }
    c.closePath();
    c.fillStyle = 'rgba(196,149,106,.2)'; c.fill();
    c.strokeStyle = '#c4956a'; c.lineWidth = 2.5; c.stroke();
    // data points
    for(var a=0;a<5;a++){
      var angle = -Math.PI/2 + (Math.PI*2/5)*a;
      var val = scores[a] / 100;
      var px = cx + R * val * Math.cos(angle);
      var py = cy + R * val * Math.sin(angle);
      c.beginPath(); c.arc(px,py,5,0,Math.PI*2);
      c.fillStyle = '#f5deb3'; c.fill();
      c.strokeStyle = '#c4956a'; c.lineWidth = 2; c.stroke();
      // score text
      c.fillStyle = '#c4956a'; c.font = 'bold 11px sans-serif'; c.textAlign = 'center';
      c.fillText(String(scores[a]), px, py-12);
    }
    // average score
    var avg = Math.round(scores.reduce(function(s,v){return s+v;},0) / 5);
    c.fillStyle = '#f5deb3'; c.font = 'bold 28px sans-serif'; c.textAlign = 'center';
    c.fillText(String(avg), cx, cy+5);
    c.fillStyle = '#c4956a'; c.font = '11px sans-serif';
    c.fillText('종합점수', cx, cy+22);
    // grade
    var grade = avg>=90?'S':avg>=80?'A':avg>=70?'B':avg>=60?'C':'D';
    var gradeColor = {S:'#FFD700',A:'#4a7c59',B:'#c4956a',C:'#d4764a',D:'#b43c3c'}[grade];
    var result = document.getElementById('v13-award-result');
    if(result) result.innerHTML = '<span style="color:'+gradeColor+'">'+grade+'등급</span> <span style="color:#c4956a;font-size:16px">('+avg+'점;)</span>';
    var info = document.getElementById('v13-award-info');
    if(info) info.textContent = axes.map(function(a,i){return a+':'+scores[i];}).join(' | ');
  }
  function open(){
    document.getElementById('v13-award').classList.add('active');
    renderTabs(); draw();
    document.getElementById('v13-award-eval').onclick = function(){ awarded=true; save(); v13SFX.play('award_eval'); v13Achieve.check(); draw(); };
    document.getElementById('v13-award-reset').onclick = function(){ scores=presets[currentPreset].scores.slice(); draw(); };
  }
  function close(){ document.getElementById('v13-award').classList.remove('active'); }
  return {open:open,close:close,isAwarded:function(){return awarded;},load:function(){}};
})();

// ── 7. Material Encyclopedia (건축 소재 백과 12종 카드) ──
var v13Material = (function(){
  var KEY = 'hb_v13_material';
  var matData = [
    {icon:'🌲',name:'소나무',cat:'전통',props:'밀도: 0.45g/cm³ | 강도: 중',desc:'한옥의 기둥과 보에 가장 많이 사용되는 목재. 송진이 많아 내구성이 좋고 가공이 쉬움. 건조 시 수축률이 낮아 구조재로 적합.'},
    {icon:'🪨',name:'화강암',cat:'전통',props:'밀도: 2.65g/cm³ | 강도: 상',desc:'기단과 주초석에 사용. 압축강도가 매우 높고(1000kg/cm²) 풍화에 강함. 불국사, 석굴암 등에 사용된 대표 석재.'},
    {icon:'🧱',name:'기와',cat:'전통',props:'밀도: 1.8g/cm³ | 내화: 상',desc:'점토를 성형하여 1100°C로 소성한 지붕재. 암키와와 수키와로 구성. 빗물 배수와 단열에 탁월.'},
    {icon:'🎯',name:'황토',cat:'전통',props:'밀도: 1.5g/cm³ | 단열: 상',desc:'벽체와 바닥에 사용하는 자연소재. 원적외선 방출, 습도 조절 기능. 온돌 구들장 위에 바르는 마감재.'},
    {icon:'🌿',name:'대나무',cat:'전통',props:'밀도: 0.6g/cm³ | 인장: 상',desc:'담장, 발, 울타리에 사용. 인장강도가 높아 철근에 비견될; 정도. 빠른 성장으로 지속 가능한 소재.'},
    {icon:'📃',name:'한지',cat:'전통',props:'밀도: 0.7g/cm³ | 통기: 상',desc:'닥나무 껍질로 만든 전통 종이. 문살에 발라 채광과 통풍. 습도 조절과 방충 효과.'},
    {icon:'⚙',name:'철근',cat:'현대',props:'밀도: 7.85g/cm³ | 인장: 최상',desc:'콘크리트의 인장력 보강재. SD400(항복강도 400MPa) 기준. D10~D32 규격으로 배근.'},
    {icon:'🧱',name:'콘크리트',cat:'현대',props:'밀도: 2.3g/cm³ | 압축: 최상',desc:'시멘트+모래+자갈+물의 혼합물. 압축강도 24~40MPa. 철근과 결합하여 RC구조 형성.'},
    {icon:'🪟',name:'유리',cat:'현대',props:'밀도: 2.5g/cm³ | 투명: 최상',desc:'채광과 조망을 위한 현대 건축 필수재. 로이유리, 복층유리로 단열 성능 향상. 커튼월에 사용.'},
    {icon:'🟨',name:'단열재(EPS)',cat:'현대',props:'밀도: 0.03g/cm³ | 단열: 최상',desc:'발포폴리스티렌. 열전도율 0.036W/mK. 외단열 시스템(EIFS)에 사용. 경량이고 시공 편리.'},
    {icon:'🔩',name:'H형강',cat:'현대',props:'밀도: 7.85g/cm³ | 강도: 최상',desc:'철골 구조의 기본 부재. SM490(인장강도 490MPa). 고층 건물의 기둥과 보에 사용.'},
    {icon:'🌊',name:'방수시트',cat:'현대',props:'두께: 1.5mm | 방수: 최상',desc:'아스팔트/합성고분자 방수재. 지하실과 옥상 방수에 필수. 내구연한 15~30년.'}
  ];
  var readList = JSON.parse(localStorage.getItem(KEY)||'[]');
  var filterCat = 'all';
  function save(){ localStorage.setItem(KEY, JSON.stringify(readList)); }
  function renderTabs(){
    var el = document.getElementById('v13-mat-tabs'); if(!el) return;
    var cats = ['all','전통','현대'];
    var catLabels = ['전체','전통','현대'];
    el.innerHTML = cats.map(function(ct,i){ return '<button class="v13-tab'+(ct===filterCat?' active':'')+'" data-cat="'+ct+'">'+catLabels[i]+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ filterCat=btn.dataset.cat; renderTabs(); renderCards(); }; });
  }
  function renderCards(){
    var el = document.getElementById('v13-mat-grid'); if(!el) return;
    var filtered = matData.filter(function(m){ return filterCat==='all' || m.cat===filterCat; });
    el.innerHTML = filtered.map(function(m,i){
      var origIdx = matData.indexOf(m);
      var isRead = readList.indexOf(origIdx)>=0;
      return '<div class="v13-material-card'+(isRead?' expanded':'')+'" data-idx="'+origIdx+'">' +
        '<div class="mat-icon">'+m.icon+'</div><h4>'+m.name+' <span class="tag" style="font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a">'+m.cat+'</span></h4>' +
        '<p>'+m.props+'</p>' +
        '<div class="mat-detail">'+m.desc+'</div></div>';
    }).join('');
    el.querySelectorAll('.v13-material-card').forEach(function(card){
      card.onclick = function(){
        var idx = parseInt(card.dataset.idx);
        card.classList.toggle('expanded');
        if(readList.indexOf(idx)<0){ readList.push(idx); save(); v13SFX.play('material_open'); v13Achieve.check(); }
      };
    });
  }
  function open(){ document.getElementById('v13-material').classList.add('active'); renderTabs(); renderCards(); }
  function close(){ document.getElementById('v13-material').classList.remove('active'); }
  return {open:open,close:close,readList:readList,load:function(){}};
})();

// ── 8. Lighting Design Studio (조명 디자인 스튜디오 Canvas 8종) ──
var v13Lighting = (function(){
  var KEY = 'hb_v13_lighting';
  var lights = [
    {name:'천장 매입등',icon:'💡',type:'recessed',spread:120,intensity:0.9},
    {name:'펜던트 조명',icon:'🔮',type:'pendant',spread:80,intensity:1.0},
    {name:'벽 브래킷',icon:'🕯',type:'wall',spread:60,intensity:0.6},
    {name:'스포트라이트',icon:'🔦',type:'spot',spread:30,intensity:1.2},
    {name:'한지 등',icon:'🏮',type:'hanji',spread:100,intensity:0.7},
    {name:'청사초롱',icon:'🪔',type:'lantern',spread:50,intensity:0.5},
    {name:'간접조명',icon:'✨',type:'indirect',spread:200,intensity:0.4},
    {name:'플로어 램프',icon:'🫧',type:'floor',spread:90,intensity:0.8}
  ];
  var currentLight = 0;
  var visited = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(visited)); }
  function renderTabs(){
    var el = document.getElementById('v13-light-tabs'); if(!el) return;
    el.innerHTML = lights.map(function(l,i){ return '<button class="v13-tab'+(i===currentLight?' active':'')+'" data-idx="'+i+'">'+l.icon+' '+l.name+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentLight=parseInt(btn.dataset.idx); if(visited.indexOf(currentLight)<0){visited.push(currentLight);save();} renderTabs(); draw(); v13SFX.play('light_change'); v13Achieve.check(); }; });
  }
  function kelvinToRgb(K){
    K = K / 100;
    var r, g, b;
    if(K<=66){ r=255; } else { r=329.698727446*(Math.pow(K-60,-0.1332047592)); r=Math.max(0,Math.min(255,r)); }
    if(K<=66){ g=99.4708025861*Math.log(K)-161.1195681661; } else { g=288.1221695283*(Math.pow(K-60,-0.0755148492)); }
    g=Math.max(0,Math.min(255,g));
    if(K>=66){ b=255; } else if(K<=19){ b=0; } else { b=138.5177312231*Math.log(K-10)-305.0447927307; b=Math.max(0,Math.min(255,b)); }
    return {r:Math.round(r),g:Math.round(g),b:Math.round(b)};
  }
  function draw(){
    var cv = document.getElementById('v13-light-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    var bright = parseInt(document.getElementById('v13-light-bright').value)||70;
    var temp = parseInt(document.getElementById('v13-light-temp').value)||4000;
    var lt = lights[currentLight];
    var rgb = kelvinToRgb(temp);
    c.clearRect(0,0,W,H);
    // dark room
    c.fillStyle = '#0d0d15'; c.fillRect(0,0,W,H);
    // walls
    c.fillStyle = 'rgba(60,40,25,.4)'; c.fillRect(30,30,W-60,H-80);
    c.strokeStyle = 'rgba(196,149,106,.2)'; c.lineWidth = 2; c.strokeRect(30,30,W-60,H-80);
    // floor
    c.fillStyle = 'rgba(92,64,51,.3)'; c.fillRect(30,H-80,W-60,50);
    // furniture silhouettes
    c.fillStyle = 'rgba(80,60,40,.3)';
    c.fillRect(80,H-110,100,30); // table
    c.fillRect(W-180,H-130,60,50); // cabinet
    c.fillRect(200,H-100,40,20); // stool
    // light source position
    var lx = W/2, ly;
    if(lt.type==='recessed'||lt.type==='pendant') ly = 50;
    else if(lt.type==='wall') { lx = 50; ly = H/2-40; }
    else if(lt.type==='floor') { lx = W-120; ly = H-100; }
    else if(lt.type==='indirect') { lx = W/2; ly = 40; }
    else ly = 80;
    // light cone/glow
    var alpha = (bright/100) * lt.intensity * 0.6;
    var spreadR = lt.spread * 1.8;
    var grad = c.createRadialGradient(lx, ly, 0, lx, ly, spreadR);
    grad.addColorStop(0, 'rgba('+rgb.r+','+rgb.g+','+rgb.b+','+alpha+')');
    grad.addColorStop(0.4, 'rgba('+rgb.r+','+rgb.g+','+rgb.b+','+(alpha*0.5)+')');
    grad.addColorStop(1, 'rgba('+rgb.r+','+rgb.g+','+rgb.b+',0)');
    c.fillStyle = grad; c.fillRect(0,0,W,H);
    // light fixture
    c.fillStyle = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
    c.beginPath(); c.arc(lx,ly,8,0,Math.PI*2); c.fill();
    c.strokeStyle = '#f5deb3'; c.lineWidth = 2; c.stroke();
    // fixture icon
    c.font = '24px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(lt.icon, lx, ly-25);
    // info overlay
    c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(10,H-40,220,35);
    c.fillStyle = '#f5deb3'; c.font = '12px sans-serif'; c.textAlign = 'left'; c.textBaseline = 'middle';
    c.fillText(lt.name+' | '+bright+'% | '+temp+'K', 20, H-22);
    // lux estimation
    var lux = Math.round(bright * lt.intensity * 8);
    c.fillStyle = '#c4956a'; c.font = '11px sans-serif'; c.textAlign = 'right';
    c.fillText(lux+' lux', W-20, H-22);
    // color temp bar
    c.fillStyle = 'rgba(0,0,0,.4)'; c.fillRect(W-170,10,160,20);
    var tGrad = c.createLinearGradient(W-170,10,W-10,10);
    tGrad.addColorStop(0,'#ff8a2b'); tGrad.addColorStop(0.5,'#fff5e6'); tGrad.addColorStop(1,'#a3c4ff');
    c.fillStyle = tGrad; c.fillRect(W-170,10,160,20);
    var tPos = (temp-2700)/(6500-2700);
    c.fillStyle = '#fff'; c.beginPath();
    c.moveTo(W-170+tPos*160, 10); c.lineTo(W-170+tPos*160-4, 5); c.lineTo(W-170+tPos*160+4, 5); c.closePath(); c.fill();

    var info = document.getElementById('v13-light-info');
    if(info) info.textContent = lt.name + ' - 확산각: ' + lt.spread + '° | 추정 조도: ' + lux + ' lux';
  }
  function bindSliders(){
    var sb = document.getElementById('v13-light-bright');
    var st = document.getElementById('v13-light-temp');
    if(sb){ sb.oninput = function(){ document.getElementById('v13-light-bright-val').textContent=sb.value; draw(); v13SFX.play('light_change'); }; }
    if(st){ st.oninput = function(){ document.getElementById('v13-light-temp-val').textContent=st.value; draw(); }; }
  }
  function open(){
    document.getElementById('v13-lighting').classList.add('active');
    if(visited.indexOf(currentLight)<0){visited.push(currentLight);save();}
    renderTabs(); draw(); bindSliders();
  }
  function close(){ document.getElementById('v13-lighting').classList.remove('active'); }
  return {open:open,close:close,visited:visited,load:function(){}};
})();

// ── 9. Room Color Simulator (방 배색 시뮬레이터 12색 Canvas) ──
var v13ColorSim = (function(){
  var KEY = 'hb_v13_colorsim';
  var palette = [
    {name:'아이보리',hex:'#FFFFF0'},
    {name:'베이지',hex:'#F5F5DC'},
    {name:'미사리',hex:'#FFE4E1'},
    {name:'안티크 화이트',hex:'#FAEBD7'},
    {name:'하늘색',hex:'#87CEEB'},
    {name:'세이지 그린',hex:'#8FBC8F'},
    {name:'욨넛 브라운',hex:'#C4956A'},
    {name:'챠콜 그레이',hex:'#778899'},
    {name:'테라코타',hex:'#CC7755'},
    {name:'네이비',hex:'#191970'},
    {name:'올리브 그린',hex:'#556B2F'},
    {name:'버건디',hex:'#800020'}
  ];
  var targets = ['벽','바닥','천장'];
  var currentTarget = 0;
  var roomColors = JSON.parse(localStorage.getItem(KEY)||'null') || {wall:'#FFFFF0',floor:'#DEB887',ceiling:'#FFFFF0'};
  var colorsUsed = JSON.parse(localStorage.getItem(KEY+'_used')||'0');
  function save(){ localStorage.setItem(KEY, JSON.stringify(roomColors)); localStorage.setItem(KEY+'_used', JSON.stringify(colorsUsed)); }
  function renderTargets(){
    var el = document.getElementById('v13-color-target'); if(!el) return;
    el.innerHTML = targets.map(function(t,i){ return '<button class="v13-tab'+(i===currentTarget?' active':'')+'" data-idx="'+i+'">'+t+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentTarget=parseInt(btn.dataset.idx); renderTargets(); }; });
  }
  function renderPalette(){
    var el = document.getElementById('v13-color-palette'); if(!el) return;
    el.innerHTML = palette.map(function(p){
      return '<button class="v13-color-btn" style="background:'+p.hex+'" title="'+p.name+'" data-hex="'+p.hex+'"></button>';
    }).join('');
    el.querySelectorAll('.v13-color-btn').forEach(function(btn){
      btn.onclick = function(){
        var hex = btn.dataset.hex;
        var keys = ['wall','floor','ceiling'];
        roomColors[keys[currentTarget]] = hex;
        colorsUsed++;
        save(); draw(); v13SFX.play('color_pick'); v13Achieve.check();
      };
    });
  }
  function draw(){
    var cv = document.getElementById('v13-color-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle = '#0d0d15'; c.fillRect(0,0,W,H);
    // 3D room perspective
    var m = 60; // margin
    // ceiling
    c.beginPath();
    c.moveTo(m,m); c.lineTo(W-m,m); c.lineTo(W-m*2.5, m*2); c.lineTo(m*2.5, m*2); c.closePath();
    c.fillStyle = roomColors.ceiling; c.fill();
    c.strokeStyle = 'rgba(0,0,0,.2)'; c.lineWidth = 1; c.stroke();
    // back wall
    c.beginPath();
    c.moveTo(m*2.5, m*2); c.lineTo(W-m*2.5, m*2); c.lineTo(W-m*2.5, H-m*2); c.lineTo(m*2.5, H-m*2); c.closePath();
    c.fillStyle = roomColors.wall; c.fill();
    c.strokeStyle = 'rgba(0,0,0,.15)'; c.stroke();
    // left wall
    c.beginPath();
    c.moveTo(m,m); c.lineTo(m*2.5,m*2); c.lineTo(m*2.5,H-m*2); c.lineTo(m,H-m); c.closePath();
    var lwColor = roomColors.wall;
    c.fillStyle = lwColor; c.globalAlpha = 0.85; c.fill(); c.globalAlpha = 1;
    c.strokeStyle = 'rgba(0,0,0,.15)'; c.stroke();
    // right wall
    c.beginPath();
    c.moveTo(W-m,m); c.lineTo(W-m*2.5,m*2); c.lineTo(W-m*2.5,H-m*2); c.lineTo(W-m,H-m); c.closePath();
    c.fillStyle = lwColor; c.globalAlpha = 0.75; c.fill(); c.globalAlpha = 1;
    c.strokeStyle = 'rgba(0,0,0,.15)'; c.stroke();
    // floor
    c.beginPath();
    c.moveTo(m,H-m); c.lineTo(W-m,H-m); c.lineTo(W-m*2.5,H-m*2); c.lineTo(m*2.5,H-m*2); c.closePath();
    c.fillStyle = roomColors.floor; c.fill();
    c.strokeStyle = 'rgba(0,0,0,.2)'; c.stroke();
    // window on back wall
    c.fillStyle = 'rgba(135,206,235,.3)';
    c.fillRect(W/2-40, m*2+20, 80, 60);
    c.strokeStyle = 'rgba(139,105,20,.6)'; c.lineWidth = 3; c.strokeRect(W/2-40, m*2+20, 80, 60);
    c.beginPath(); c.moveTo(W/2, m*2+20); c.lineTo(W/2, m*2+80); c.stroke();
    c.beginPath(); c.moveTo(W/2-40, m*2+50); c.lineTo(W/2+40, m*2+50); c.stroke();
    // furniture silhouette
    c.fillStyle = 'rgba(80,60,40,.4)';
    c.fillRect(m*2.5+20, H-m*2-30, 80, 30); // table
    c.fillRect(W-m*2.5-70, H-m*2-50, 50, 50); // cabinet
    // color labels
    c.fillStyle = '#f5deb3'; c.font = 'bold 11px sans-serif'; c.textAlign = 'center';
    c.fillText('벽: '+getColorName(roomColors.wall), W/2, m*2+H*0.35);
    c.fillText('바닥: '+getColorName(roomColors.floor), W/2, H-m-10);
    c.fillText('천장: '+getColorName(roomColors.ceiling), W/2, m+15);
    var info = document.getElementById('v13-color-info');
    if(info) info.textContent = '벽: '+getColorName(roomColors.wall)+' | 바닥: '+getColorName(roomColors.floor)+' | 천장: '+getColorName(roomColors.ceiling);
  }
  function getColorName(hex){
    var found = palette.filter(function(p){return p.hex===hex;})[0];
    return found ? found.name : hex;
  }
  function open(){
    document.getElementById('v13-colorism').classList.add('active');
    renderTargets(); renderPalette(); draw();
    document.getElementById('v13-color-save').onclick = function(){ save(); v13SFX.play('furn_save'); };
    document.getElementById('v13-color-reset').onclick = function(){ roomColors={wall:'#FFFFF0',floor:'#DEB887',ceiling:'#FFFFF0'}; save(); draw(); };
  }
  function close(){ document.getElementById('v13-colorism').classList.remove('active'); }
  return {open:open,close:close,getUsed:function(){return colorsUsed;},load:function(){}};
})();

// ── 10. Architecture Portfolio (건축 포트폴리오 Canvas Card) ──
var v13Portfolio = (function(){
  var KEY = 'hb_v13_portfolio';
  var templates = [
    {name:'한옥',icon:'🏯',style:'전통',desc:'기와지붕+대청마루+온돌',color:'#8B4513'},
    {name:'초가집',icon:'🌾',style:'전통',desc:'벽짚지붕+토벽+원목기둥',color:'#DAA520'},
    {name:'정자',icon:'⛩',style:'전통',desc:'사방버틀지붕+마루바닥+개방',color:'#556B2F'},
    {name:'현대 한옥',icon:'🏠',style:'현대',desc:'전통미+현대설비+단열',color:'#4a7c59'},
    {name:'아파트',icon:'🏢',style:'현대',desc:'RC구조+발코니+지하주차',color:'#708090'},
    {name:'타운하우스',icon:'🏘',style:'현대',desc:'다세대+주차+옵상정원',color:'#45b7d1'}
  ];
  var portfolio = JSON.parse(localStorage.getItem(KEY)||'[]');
  var currentTemplate = 0;
  function save(){ localStorage.setItem(KEY, JSON.stringify(portfolio)); }
  function renderTabs(){
    var el = document.getElementById('v13-port-tabs'); if(!el) return;
    el.innerHTML = templates.map(function(t,i){ return '<button class="v13-tab'+(i===currentTemplate?' active':'')+'" data-idx="'+i+'">'+t.icon+' '+t.name+'</button>'; }).join('');
    el.querySelectorAll('.v13-tab').forEach(function(btn){ btn.onclick = function(){ currentTemplate=parseInt(btn.dataset.idx); renderTabs(); draw(); }; });
  }
  function draw(){
    var cv = document.getElementById('v13-port-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    var tmpl = templates[currentTemplate];
    c.clearRect(0,0,W,H);
    // card background
    c.fillStyle = '#1a1a2e'; c.fillRect(0,0,W,H);
    // card frame
    var cw = 480, ch = 340, cx = (W-cw)/2, cy = (H-ch)/2;
    c.fillStyle = 'rgba(30,20,12,.9)';
    c.strokeStyle = tmpl.color; c.lineWidth = 3;
    c.beginPath(); c.roundRect(cx,cy,cw,ch,12); c.fill(); c.stroke();
    // header bar
    c.fillStyle = tmpl.color+'33'; c.fillRect(cx,cy,cw,50);
    c.fillStyle = '#f5deb3'; c.font = 'bold 18px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(tmpl.icon + ' ' + tmpl.name, cx+cw/2, cy+25);
    // building illustration
    var bx = cx+cw/2, by = cy+160;
    // ground
    c.fillStyle = 'rgba(139,105,20,.2)'; c.fillRect(cx+40, by+60, cw-80, 30);
    // building body
    c.fillStyle = tmpl.color+'88';
    if(tmpl.style==='전통'){
      // traditional roof
      c.fillRect(bx-70, by-20, 140, 80);
      c.beginPath(); c.moveTo(bx-90, by-20); c.lineTo(bx, by-70); c.lineTo(bx+90, by-20); c.closePath();
      c.fillStyle = tmpl.color; c.fill();
      // columns
      c.fillStyle = '#8B4513'; c.fillRect(bx-60,by-20,10,80); c.fillRect(bx+50,by-20,10,80);
      // door
      c.fillStyle = '#5C4033'; c.fillRect(bx-12,by+10,24,50);
    } else {
      // modern building
      c.fillRect(bx-80, by-50, 160, 110);
      c.fillStyle = tmpl.color; c.fillRect(bx-80, by-50, 160, 6);
      // windows
      c.fillStyle = 'rgba(135,206,235,.4)';
      for(var wr=0;wr<3;wr++){ for(var wc=0;wc<4;wc++){ c.fillRect(bx-65+wc*40, by-40+wr*30, 25, 18); } }
      // door
      c.fillStyle = '#5C4033'; c.fillRect(bx-15,by+20,30,40);
    }
    // info section
    c.fillStyle = '#f5deb3'; c.font = '13px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'top';
    c.fillText('양식: ' + tmpl.style + ' | ' + tmpl.desc, cx+cw/2, cy+ch-60);
    // portfolio count
    c.fillStyle = '#c4956a'; c.font = '11px sans-serif';
    c.fillText('포트폴리오: ' + portfolio.length + '건', cx+cw/2, cy+ch-35);
    // date
    c.fillStyle = 'rgba(196,149,106,.4)'; c.font = '10px sans-serif';
    c.fillText(new Date().toLocaleDateString('ko-KR'), cx+cw/2, cy+ch-18);
    var info = document.getElementById('v13-port-info');
    if(info) info.textContent = tmpl.name + ' (' + tmpl.style + ') - ' + tmpl.desc + ' | 저장: ' + portfolio.length + '건';
  }
  function open(){
    document.getElementById('v13-portfolio').classList.add('active');
    renderTabs(); draw();
    document.getElementById('v13-port-add').onclick = function(){
      var tmpl = templates[currentTemplate];
      portfolio.push({name:tmpl.name,style:tmpl.style,date:new Date().toISOString()});
      save(); v13SFX.play('port_add'); v13Achieve.check(); draw();
    };
    document.getElementById('v13-port-download').onclick = function(){
      var cv = document.getElementById('v13-port-canvas'); if(!cv) return;
      var link = document.createElement('a');
      link.download = 'portfolio_'+templates[currentTemplate].name+'_'+Date.now()+'.png';
      link.href = cv.toDataURL('image/png');
      link.click();
      v13SFX.play('port_download');
    };
    document.getElementById('v13-port-compare').onclick = function(){
      if(portfolio.length<2){ alert('비교하려면 2건 이상 저장해주세요.'); return; }
      var cv = document.getElementById('v13-port-canvas'); if(!cv) return;
      var c2 = cv.getContext('2d'), W=cv.width, H=cv.height;
      c2.clearRect(0,0,W,H); c2.fillStyle='#1a1a2e'; c2.fillRect(0,0,W,H);
      c2.fillStyle='#f5deb3'; c2.font='bold 16px sans-serif'; c2.textAlign='center';
      c2.fillText('포트폴리오 비교', W/2, 30);
      var cardW = Math.min(160, (W-40)/Math.min(portfolio.length,4)-10);
      portfolio.slice(-4).forEach(function(p,i){
        var px = 30 + i*(cardW+10);
        c2.fillStyle = 'rgba(196,149,106,.1)'; c2.strokeStyle='#c4956a'; c2.lineWidth=1;
        c2.beginPath(); c2.roundRect(px, 60, cardW, H-100, 8); c2.fill(); c2.stroke();
        c2.fillStyle='#f5deb3'; c2.font='bold 12px sans-serif'; c2.textAlign='center';
        c2.fillText(p.name, px+cardW/2, 85);
        c2.fillStyle='#c4956a'; c2.font='10px sans-serif';
        c2.fillText(p.style, px+cardW/2, 102);
        c2.fillText(new Date(p.date).toLocaleDateString('ko-KR'), px+cardW/2, 118);
      });
    };
  }
  function close(){ document.getElementById('v13-portfolio').classList.remove('active'); }
  return {open:open,close:close,getCount:function(){return portfolio.length;},load:function(){}};
})();

// ── 11. Hanok Repair Simulator (한옥 수리 시뮬레이터 8종 Canvas) ──
var v13Repair = (function(){
  var KEY = 'hb_v13_repair';
  var damages = [
    {name:'기와 파손',icon:'🏚',severity:3,method:'파손된 기와를 제거하고 새; 기와로 교체. 문양기와;/암;/수;키와; 구분하여 시공.',drawDamage:function(c,cx,cy){c.fillStyle='#5C4033';c.fillRect(cx-80,cy-40,160,15);c.fillStyle='#8B4513';for(var i=0;i<8;i++){c.fillRect(cx-80+i*20,cy-55,18,15);}c.fillStyle='#b43c3c';c.fillRect(cx-20,cy-55,20,15);c.fillRect(cx+20,cy-55,18,15);c.fillStyle='#f5deb3';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 파손',cx,cy-60);},drawRepaired:function(c,cx,cy){c.fillStyle='#5C4033';c.fillRect(cx-80,cy-40,160,15);c.fillStyle='#8B4513';for(var i=0;i<8;i++){c.fillRect(cx-80+i*20,cy-55,18,15);}c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-60);}},
    {name:'서까래 부식',icon:'🪵',severity:4,method:'부식된 서까래;(도리) 제거 후 방부제; 처리. 소나무; 원목으로; 교체 시공.',drawDamage:function(c,cx,cy){c.fillStyle='#A0522D';c.fillRect(cx-60,cy-30,120,80);for(var i=0;i<5;i++){var sx=cx-50+i*25,sy=cy-25+Math.random()*60;c.fillStyle='rgba(100,60,20,.6)';c.fillRect(sx,sy,20,4);}c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 부식',cx,cy-35);},drawRepaired:function(c,cx,cy){c.fillStyle='#A0522D';c.fillRect(cx-60,cy-30,120,80);c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-35);}},
    {name:'기둥 균열',icon:'🪨',severity:5,method:'균열 부위 에폭시; 수지;로; 충전. 구조적; 보강;이; 필요하면; 철블; 보강.',drawDamage:function(c,cx,cy){c.fillStyle='#8B7355';c.fillRect(cx-15,cy-40,30,100);c.strokeStyle='#b43c3c';c.lineWidth=2;c.beginPath();c.moveTo(cx-2,cy-30);c.lineTo(cx+3,cy-10);c.lineTo(cx-4,cy+10);c.lineTo(cx+2,cy+30);c.stroke();c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 균열',cx,cy-45);},drawRepaired:function(c,cx,cy){c.fillStyle='#8B7355';c.fillRect(cx-15,cy-40,30,100);c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-45);}},
    {name:'기단 침하',icon:'⛰',severity:4,method:'침하; 부위; 굴착하고; 장대석;으로; 수평; 복원. 배수로; 재정비.',drawDamage:function(c,cx,cy){c.fillStyle='#888';c.fillRect(cx-80,cy+30,160,25);c.fillStyle='rgba(0,0,0,.3)';c.beginPath();c.moveTo(cx-20,cy+30);c.lineTo(cx+20,cy+30);c.lineTo(cx+15,cy+40);c.lineTo(cx-15,cy+40);c.closePath();c.fill();c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 침하',cx,cy+20);},drawRepaired:function(c,cx,cy){c.fillStyle='#888';c.fillRect(cx-80,cy+30,160,25);c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy+20);}},
    {name:'담장 붕괴',icon:'🧱',severity:3,method:'붕괴; 부위; 철거; 후; 황토;흐;+돌; 혼합;으로; 재시공. 전통; 쌓기; 공법; 적용.',drawDamage:function(c,cx,cy){c.fillStyle='#A0522D';for(var i=0;i<6;i++){c.fillRect(cx-60+i*20,cy,18,12);}c.fillStyle='rgba(0,0,0,.2)';c.fillRect(cx-10,cy,30,12);c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 붕괴',cx,cy-8);},drawRepaired:function(c,cx,cy){c.fillStyle='#A0522D';for(var i=0;i<6;i++){c.fillRect(cx-60+i*20,cy,18,12);}c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-8);}},
    {name:'도배 훼손',icon:'📃',severity:2,method:'기존; 도배;지; 제거 후 한지;로; 재시공. 풀법; 접착;제; 사용, 전통; 문양; 재현.',drawDamage:function(c,cx,cy){c.fillStyle='#F5F5DC';c.fillRect(cx-60,cy-30,120,70);c.fillStyle='rgba(139,105,20,.3)';c.fillRect(cx-40,cy-20,30,20);c.fillRect(cx+10,cy,25,15);c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 훼손',cx,cy-35);},drawRepaired:function(c,cx,cy){c.fillStyle='#F5F5DC';c.fillRect(cx-60,cy-30,120,70);c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-35);}},
    {name:'마루 뒤틀림',icon:'🪜',severity:3,method:'뒤틀린; 널;비;를; 제거하고; 수평; 맞춤 후 재설치. 방습;처리; 후; 들기름;바르;기.',drawDamage:function(c,cx,cy){c.fillStyle='#DEB887';for(var i=0;i<6;i++){var yoff=i%2===0?0:4;c.fillRect(cx-60+i*20,cy+yoff,18,8);}c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 뒤틀림',cx,cy-10);},drawRepaired:function(c,cx,cy){c.fillStyle='#DEB887';for(var i=0;i<6;i++){c.fillRect(cx-60+i*20,cy,18,8);}c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-10);}},
    {name:'굴뚜 막힘',icon:'🏭',severity:3,method:'굴뚜; 내부; 그을음;과; 재;를; 제거. 연도;를; 점검;하고; 균열; 보수 후 시험 점화.',drawDamage:function(c,cx,cy){c.fillStyle='#666';c.fillRect(cx-12,cy-50,24,60);c.fillStyle='#444';c.fillRect(cx-16,cy-55,32,8);c.fillStyle='rgba(100,100,100,.5)';c.beginPath();c.arc(cx,cy-55,10,0,Math.PI*2);c.fill();c.fillStyle='#b43c3c';c.font='10px sans-serif';c.textAlign='center';c.fillText('✗ 막힘',cx,cy-68);},drawRepaired:function(c,cx,cy){c.fillStyle='#666';c.fillRect(cx-12,cy-50,24,60);c.fillStyle='#444';c.fillRect(cx-16,cy-55,32,8);c.fillStyle='rgba(200,200,200,.6)';c.beginPath();c.arc(cx,cy-62,6,0,Math.PI*2);c.fill();c.fillStyle='#4a7c59';c.font='10px sans-serif';c.textAlign='center';c.fillText('✓ 수리완료',cx,cy-75);}}
  ];
  var repaired = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(repaired)); }
  function renderList(){
    var el = document.getElementById('v13-repair-list'); if(!el) return;
    el.innerHTML = damages.map(function(d,i){
      var isRepaired = repaired.indexOf(i)>=0;
      return '<div class="v13-repair-item'+(isRepaired?' repaired':'')+'" data-idx="'+i+'">' +
        '<h4>'+d.icon+' '+d.name+' <span style="color:'+(isRepaired?'#4a7c59':'#b43c3c')+';font-size:11px">['+(isRepaired?'수리완료':'손상등급 '+d.severity)+']</span></h4>' +
        '<p>수리법: '+d.method+'</p></div>';
    }).join('');
    el.querySelectorAll('.v13-repair-item').forEach(function(item){
      item.onclick = function(){
        var idx = parseInt(item.dataset.idx);
        if(repaired.indexOf(idx)<0){
          repaired.push(idx); save();
          v13SFX.play('repair_fix'); v13Achieve.check();
        }
        renderList(); drawCanvas();
      };
    });
  }
  function drawCanvas(){
    var cv = document.getElementById('v13-repair-canvas'); if(!cv) return;
    var c = cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle = '#1a1a2e'; c.fillRect(0,0,W,H);
    // hanok outline
    var cx = W/2, baseY = H*0.65;
    // ground
    c.fillStyle = 'rgba(139,105,20,.15)'; c.fillRect(0, baseY+60, W, H-baseY-60);
    c.strokeStyle = 'rgba(196,149,106,.3)'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(0,baseY+60); c.lineTo(W,baseY+60); c.stroke();
    // foundation/기단
    c.fillStyle = repaired.indexOf(3)>=0 ? 'rgba(136,136,136,.5)' : 'rgba(136,136,136,.3)';
    c.fillRect(cx-120, baseY+40, 240, 20);
    if(repaired.indexOf(3)<0){ damages[3].drawDamage(c, cx, baseY+20); }
    else { damages[3].drawRepaired(c, cx, baseY+20); }
    // columns/기둥
    c.fillStyle = '#8B7355';
    c.fillRect(cx-100, baseY-60, 14, 100);
    c.fillRect(cx+86, baseY-60, 14, 100);
    if(repaired.indexOf(2)<0){ damages[2].drawDamage(c, cx-93, baseY-10); }
    else { damages[2].drawRepaired(c, cx-93, baseY-10); }
    // roof/지붕 + 기와
    c.beginPath(); c.moveTo(cx-140, baseY-60); c.lineTo(cx, baseY-120); c.lineTo(cx+140, baseY-60); c.closePath();
    c.fillStyle = repaired.indexOf(0)>=0 ? 'rgba(92,64,51,.7)' : 'rgba(92,64,51,.5)';
    c.fill(); c.strokeStyle = '#c4956a'; c.lineWidth = 2; c.stroke();
    if(repaired.indexOf(0)<0){ damages[0].drawDamage(c, cx, baseY-80); }
    else { damages[0].drawRepaired(c, cx, baseY-80); }
    // 서까래
    c.strokeStyle = repaired.indexOf(1)>=0 ? '#A0522D' : 'rgba(160,82,45,.5)';
    c.lineWidth = 2;
    for(var i=0;i<6;i++){
      var rx = cx-100+i*40;
      c.beginPath(); c.moveTo(rx, baseY-60); c.lineTo(cx, baseY-115); c.stroke();
    }
    // walls/벽 + 도배
    c.fillStyle = repaired.indexOf(5)>=0 ? '#F5F5DC' : 'rgba(245,245,220,.5)';
    c.fillRect(cx-86, baseY-55, 172, 95);
    // door
    c.fillStyle = '#5C4033'; c.fillRect(cx-15, baseY-10, 30, 50);
    // 마루
    c.fillStyle = repaired.indexOf(6)>=0 ? '#DEB887' : 'rgba(222,184,135,.5)';
    c.fillRect(cx-86, baseY+35, 172, 8);
    // 담장
    c.fillStyle = repaired.indexOf(4)>=0 ? '#A0522D' : 'rgba(160,82,45,.4)';
    c.fillRect(cx-180, baseY+20, 50, 25);
    c.fillRect(cx+130, baseY+20, 50, 25);
    // 굴뚝
    c.fillStyle = '#666';
    c.fillRect(cx+60, baseY-130, 16, 40);
    if(repaired.indexOf(7)<0){ c.fillStyle='rgba(100,100,100,.5)'; c.beginPath(); c.arc(cx+68,baseY-132,8,0,Math.PI*2); c.fill(); }
    // grade
    var repairedCount = repaired.length;
    var grade = repairedCount>=8?'S':repairedCount>=6?'A':repairedCount>=4?'B':repairedCount>=2?'C':'D';
    var gradeColor = {S:'#FFD700',A:'#4a7c59',B:'#c4956a',C:'#d4764a',D:'#b43c3c'}[grade];
    c.fillStyle = gradeColor; c.font = 'bold 24px sans-serif'; c.textAlign = 'right';
    c.fillText(grade, W-20, 35);
    c.fillStyle = '#c4956a'; c.font = '11px sans-serif';
    c.fillText('수리등급', W-20, 50);
    // progress bar
    c.fillStyle = 'rgba(0,0,0,.3)'; c.fillRect(20,H-30,W-40,16);
    c.fillStyle = gradeColor; c.fillRect(20,H-30,(W-40)*(repairedCount/8),16);
    c.fillStyle = '#f5deb3'; c.font = '10px sans-serif'; c.textAlign = 'center';
    c.fillText(repairedCount+'/8 수리완료', W/2, H-19);

    var gradeEl = document.getElementById('v13-repair-grade');
    if(gradeEl) gradeEl.innerHTML = '<span style="color:'+gradeColor+'">'+grade+'등급</span> <span style="color:#c4956a;font-size:16px">('+repairedCount+'/8 수리)</span>';
  }
  function open(){
    document.getElementById('v13-repair').classList.add('active');
    renderList(); drawCanvas(); v13SFX.play('repair_diagnose');
  }
  function close(){ document.getElementById('v13-repair').classList.remove('active'); }
  return {open:open,close:close,repaired:repaired,load:function(){}};
})();

// ── 12. Quiz v13 (+15 questions, 120→135) ──
var v13Quiz = (function(){
  var questions = [
    {q:'가구 커스터마이징에서 대리석 재질의 특징은?',a:['문양이 자연스럽고 고급스러움','가벼움','신축성','투명함'],c:0},
    {q:'평면도에서 문(Door)을 나타내는 기호는?',a:['호(arc) 형태의 선','점선 사각형','실선 원','이중 점선'],c:0},
    {q:'건축 어워드에서 미학 평가 기준에 해당하지 않는 것은?',a:['공사 비용','조형미','비례감','색채 조화'],c:0},
    {q:'황토의 건축 소재로서의 장점은?',a:['원적외선 방출과 습도 조절','높은 압축강도','투명성','가벼움'],c:0},
    {q:'조명 설계에서 색온도 2700K는 어떤 분위기인가?',a:['따뜻한 노란빛','차가운 파란빛','중성 백색','붉은빛'],c:0},
    {q:'배색 이론에서 보색 관계인 것은?',a:['빨강-초록','빨강-노랑','파랑-초록','노랑-주황'],c:0},
    {q:'한옥 수리에서 기와 파손 수리 시 필요한 기술은?',a:['암키와/수키와 구분하여 시공','철근 보강','유리 교체','방수시트 적용'],c:0},
    {q:'건축 포트폴리오에서 PNG 다운로드 기능의 목적은?',a:['완성된 건축물 이미지 저장','도면 인쇄','재료 발주','비용 계산'],c:0},
    {q:'한지의 건축 소재로서의 용도는?',a:['문살 채광과 통풍','구조재','방수재','단열재'],c:0},
    {q:'스포트라이트 조명의 특징은?',a:['좋은 확산각, 높은 광도','넓은 확산, 낮은 광도','균일 조명','간접 반사'],c:0},
    {q:'Radar 차트에서 친환경 평가 항목에 해당하는 것은?',a:['자연 소재 사용률','방 개수','건축 비용','건물 높이'],c:0},
    {q:'철근콘크리트(RC) 구조에서 철근의 역할은?',a:['인장력 보강','압축력 보강','방수','단열'],c:0},
    {q:'방 배색에서 난색 계열이 주는 느낌은?',a:['따뜻하고 활동적','차갑고 정적','중성적','무관심'],c:0},
    {q:'한옥 수리에서 온돌 관련 손상 수리 시 확인할 사항은?',a:['구들장 균열과 연도 상태','지붕 기와','창문 틀','벽지 상태'],c:0},
    {q:'평면도에서 계단을 나타내는 방법은?',a:['대각선과 화살표','점선 원','이중선','파선'],c:0}
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

// ── 13. Achievement System v13 (+12, 122→134) ──
var v13Achieve = (function(){
  var KEY = 'hb_achievements';
  var defs = [
    {id:'customize_first',name:'커스터마이징 입문',desc:'가구 1개 이상 커스터마이징',icon:'🛋️',check:function(){return v13Furniture.getCustomCount()>=1;}},
    {id:'customize_master',name:'커스터마이징 마스터',desc:'가구 8개 이상 커스터마이징',icon:'🏅',check:function(){return v13Furniture.getCustomCount()>=8;}},
    {id:'floorplan_first',name:'평면도 설계사',desc:'평면도 1건 저장',icon:'📐',check:function(){return v13FloorPlan.getCount()>=1;}},
    {id:'floorplan_5',name:'평면도 달인',desc:'평면도 5건 이상 저장',icon:'🏗️',check:function(){return v13FloorPlan.getCount()>=5;}},
    {id:'award_earn',name:'건축 어워드 수상',desc:'건축 어워드 평가 실행',icon:'🏆',check:function(){return v13Award.isAwarded();}},
    {id:'material_student',name:'소재 학습자',desc:'건축 소재 6종 이상 학습',icon:'🧱',check:function(){return v13Material.readList.length>=6;}},
    {id:'material_master',name:'소재 대가',desc:'건축 소재 12종 전부 학습',icon:'👑',check:function(){return v13Material.readList.length>=12;}},
    {id:'light_designer',name:'조명 디자이너',desc:'조명 기구 5종 이상 탐험',icon:'💡',check:function(){return v13Lighting.visited.length>=5;}},
    {id:'color_artist',name:'배색 예술가',desc:'배색 시뮬레이터 5회 이상 사용',icon:'🎨',check:function(){return v13ColorSim.getUsed()>=5;}},
    {id:'portfolio_first',name:'포트폴리오 첫 작품',desc:'포트폴리오에 1건 이상 저장',icon:'💼',check:function(){return v13Portfolio.getCount()>=1;}},
    {id:'repair_first',name:'한옥 수리공',desc:'한옥 수리 4건 이상 완료',icon:'🔧',check:function(){return v13Repair.repaired.length>=4;}},
    {id:'v13_explorer',name:'v13 탐험가',desc:'v13의 모든 기능 탐험',icon:'🌟',check:function(){return v13Furniture.getCustomCount()>0 && v13FloorPlan.getCount()>0 && v13Award.isAwarded() && v13Material.readList.length>0 && v13Lighting.visited.length>0 && v13ColorSim.getUsed()>0 && v13Portfolio.getCount()>0 && v13Repair.repaired.length>0;}}
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
    v13SFX.play('achieve_v13');
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
    {icon:'🛋️',label:'가구공방',fn:function(){v13Furniture.open();}},
    {icon:'📐',label:'평면도',fn:function(){v13FloorPlan.open();}},
    {icon:'🏆',label:'어워드',fn:function(){v13Award.open();}},
    {icon:'🧱',label:'소재백과',fn:function(){v13Material.open();}},
    {icon:'💡',label:'조명',fn:function(){v13Lighting.open();}},
    {icon:'🎨',label:'배색',fn:function(){v13ColorSim.open();}},
    {icon:'💼',label:'포트폴리오',fn:function(){v13Portfolio.open();}},
    {icon:'🏯',label:'한옥수리',fn:function(){v13Repair.open();}}
  ];
  function inject(){
    var bar = document.createElement('div'); bar.id = 'v13-nav';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;height:52px;background:linear-gradient(180deg,rgba(45,27,14,.95),rgba(30,18,8,.98));border-top:1px solid rgba(196,149,106,.3);z-index:299;display:flex;align-items:center;overflow-x:auto;gap:4px;padding:0 8px;-webkit-overflow-scrolling:touch';
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
    // adjust existing v12 nav position to not overlap
    var v12nav = document.getElementById('v12-nav');
    if(v12nav) v12nav.style.bottom = '54px';
    var v11fab = document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom = '114px';
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.key){
      case '!': e.preventDefault(); v13Furniture.open(); break;
      case '@': e.preventDefault(); v13FloorPlan.open(); break;
      case '#': e.preventDefault(); v13Award.open(); break;
      case '$': e.preventDefault(); v13Material.open(); break;
      case '%': e.preventDefault(); v13Lighting.open(); break;
      case '^': e.preventDefault(); v13ColorSim.open(); break;
      case '&': e.preventDefault(); v13Portfolio.open(); break;
      case '*': e.preventDefault(); v13Repair.open(); break;
    }
  });
})();

// ── 16. Panel Open/Close helpers ──
window.v13Close = function(panel){
  var map = {'furniture':v13Furniture,'floorplan':v13FloorPlan,'award':v13Award,'material':v13Material,'lighting':v13Lighting,'colorism':v13ColorSim,'portfolio':v13Portfolio,'repair':v13Repair};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v13Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v13Hooked) return true;
    window.__v13Hooked = true;
    var prev = window.showComplete;
    window.showComplete = function(){ prev.apply(this,arguments); v13Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 19. Initial load + checks ──
(function(){
  v13Furniture.load(); v13FloorPlan.load(); v13Award.load(); v13Material.load();
  v13Lighting.load(); v13ColorSim.load(); v13Portfolio.load(); v13Repair.load();
  setTimeout(function(){ v13Achieve.check(); },3500);
})();

// end v13 guard
}

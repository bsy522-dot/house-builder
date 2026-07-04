// =====================================================
// House Builder v15.0 Patch
// 친환경건축인증Canvas12요소RadarLEED+방음단열시뮬레이터Canvas6벽체BarSTC
// 수납공간최적화설계기Canvas12x12Grid+전통문양디자인스튜디오Canvas12종패턴
// 건축프로젝트간트차트Canvas6단계+VR워크스루시뮬레이터Canvas1인칭미니맵
// 건축자재원가트래커Canvas8자재LineTrend+건축자격인증배지Canvas6종4등급
// 퀴즈+15(150->165)+업적+12(146->158)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV15) {
window.__hbV15 = true;

// ── 1. CSS Injection v15 ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v15-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3900;overflow-y:auto;padding:16px}',
    '.v15-panel.active{display:block}',
    '.v15-box{max-width:720px;margin:40px auto}',
    '.v15-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v15-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v15-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v15-close:hover{background:#d4a57a}',
    '.v15-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v15-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v15-tab:hover,.v15-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v15-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
    '.v15-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v15-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v15-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v15-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v15-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v15-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v15-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v15-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v15-item.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v15-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v15-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v15-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v15-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v15-item.expanded .detail{display:block}',
    '.v15-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v15-btn-sm:hover{background:#d4a57a}',
    '.v15-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v15-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v15-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v15-stat .s{text-align:center}',
    '.v15-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v15-stat .sl{font-size:11px;color:#c4956a}',
    '.v15-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;font-size:12px;font-weight:600}',
    '.v15-badge.bronze{background:rgba(205,127,50,.15);border:1px solid #cd7f32;color:#cd7f32}',
    '.v15-badge.silver{background:rgba(192,192,192,.15);border:1px solid #c0c0c0;color:#c0c0c0}',
    '.v15-badge.gold{background:rgba(255,215,0,.15);border:1px solid #ffd700;color:#ffd700}',
    '.v15-badge.diamond{background:rgba(185,242,255,.15);border:1px solid #b9f2ff;color:#b9f2ff}',
    '.v15-gantt-bar{height:22px;border-radius:6px;position:relative;display:flex;align-items:center;padding:0 8px;font-size:10px;color:#fff;font-weight:600;transition:width .3s}',
    '.v15-pattern-cell{width:40px;height:40px;border:1px solid rgba(196,149,106,.2);cursor:pointer;transition:all .15s}',
    '.v15-pattern-cell:hover{border-color:#c4956a}',
    '.v15-minimap{position:relative;border:2px solid rgba(196,149,106,.4);border-radius:8px;overflow:hidden}',
    '@media(max-width:600px){.v15-box{margin:16px auto}.v15-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v15-pattern-cell{width:30px;height:30px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v15 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v15-panels';
  wrap.innerHTML =
    '<div id="v15-green" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F33F; &#xCE5C;&#xD658;&#xACBD; &#xAC74;&#xCD95; &#xC778;&#xC99D; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>12&#xAC00;&#xC9C0; &#xCE5C;&#xD658;&#xACBD; &#xC694;&#xC18C;&#xB85C; &#xAC74;&#xCD95;&#xBB3C; &#xB179;&#xC0C9;&#xB4F1;&#xAE09; &#xD3C9;&#xAC00;</p>' +
      '<div class="v15-tabs" id="v15-green-tabs"></div>' +
      '<canvas id="v15-green-canvas" class="v15-canvas" width="540" height="440"></canvas>' +
      '<div id="v15-green-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v15-stat" id="v15-green-stat"></div>' +
      '<button class="v15-close" onclick="v15Green.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-insulate" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F3E0; &#xBC29;&#xC74C;/&#xB2E8;&#xC5F4; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>6&#xAC00;&#xC9C0; &#xBCBD;&#xCCB4; &#xAD6C;&#xC870;&#xC758; R&#xAC12;/STC &#xBC29;&#xC74C;&#xB4F1;&#xAE09; &#xBE44;&#xAD50;</p>' +
      '<div class="v15-tabs" id="v15-ins-tabs"></div>' +
      '<canvas id="v15-ins-canvas" class="v15-canvas" width="560" height="380"></canvas>' +
      '<div id="v15-ins-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v15-close" onclick="v15Insulate.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-storage" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F4E6; &#xC218;&#xB0A9;&#xACF5;&#xAC04; &#xCD5C;&#xC801;&#xD654; &#xC124;&#xACC4;&#xAE30;</h2>' +
      '<p>12x12 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; &#xC218;&#xB0A9;&#xACF5;&#xAC04;&#xC744; &#xBC30;&#xCE58;&#xD558;&#xACE0; &#xD65C;&#xC6A9;&#xB960;&#xC744; &#xBD84;&#xC11D;&#xD569;&#xB2C8;&#xB2E4;</p>' +
      '<canvas id="v15-storage-canvas" class="v15-canvas" width="520" height="520"></canvas>' +
      '<div class="v15-tabs" id="v15-storage-tools"></div>' +
      '<div class="v15-stat" id="v15-storage-stat"></div>' +
      '<button class="v15-close" onclick="v15Storage.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-pattern" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F3A8; &#xC804;&#xD1B5; &#xBB38;&#xC591; &#xB514;&#xC790;&#xC778; &#xC2A4;&#xD29C;&#xB514;&#xC624;</h2>' +
      '<p>12&#xC885; &#xB2E8;&#xCCAD;/&#xC804;&#xD1B5; &#xBB38;&#xC591; &#xD328;&#xD134; &#xC0DD;&#xC131;&#xAE30;</p>' +
      '<div class="v15-tabs" id="v15-pat-tabs"></div>' +
      '<canvas id="v15-pat-canvas" class="v15-canvas" width="480" height="480"></canvas>' +
      '<div id="v15-pat-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:40px"></div>' +
      '<button class="v15-close" onclick="v15Pattern.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-gantt" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F4C5; &#xAC74;&#xCD95; &#xD504;&#xB85C;&#xC81D;&#xD2B8; &#xAC04;&#xD2B8;&#xCC28;&#xD2B8;</h2>' +
      '<p>6&#xB2E8;&#xACC4; &#xC2DC;&#xACF5;&#xC77C;&#xC815; &#xAD00;&#xB9AC; &#xBC0F; &#xC9C4;&#xD589;&#xB960; &#xCD94;&#xC801;</p>' +
      '<canvas id="v15-gantt-canvas" class="v15-canvas" width="620" height="360"></canvas>' +
      '<div class="v15-stat" id="v15-gantt-stat"></div>' +
      '<div id="v15-gantt-ctrl" style="text-align:center;margin-top:12px"></div>' +
      '<button class="v15-close" onclick="v15Gantt.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-walkthru" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F6B6; VR &#xC6CC;&#xD06C;&#xC2A4;&#xB8E8; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>1&#xC778;&#xCE6D; &#xC2DC;&#xC810;&#xC73C;&#xB85C; &#xAC74;&#xCD95;&#xBB3C; &#xB0B4;&#xBD80;&#xB97C; &#xD0D0;&#xD5D8;&#xD569;&#xB2C8;&#xB2E4;</p>' +
      '<canvas id="v15-walk-canvas" class="v15-canvas" width="560" height="400"></canvas>' +
      '<div id="v15-walk-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:40px"></div>' +
      '<div id="v15-walk-ctrl" style="text-align:center;margin-top:8px"></div>' +
      '<button class="v15-close" onclick="v15Walk.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-material" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F4B0; &#xAC74;&#xCD95; &#xC790;&#xC7AC; &#xC6D0;&#xAC00; &#xD2B8;&#xB798;&#xCEE4;</h2>' +
      '<p>8&#xAC00;&#xC9C0; &#xC8FC;&#xC694; &#xC790;&#xC7AC;&#xC758; &#xC6D4;&#xBCC4; &#xAC00;&#xACA9; &#xCD94;&#xC774; &#xBD84;&#xC11D;</p>' +
      '<div class="v15-tabs" id="v15-mat-tabs"></div>' +
      '<canvas id="v15-mat-canvas" class="v15-canvas" width="600" height="360"></canvas>' +
      '<div id="v15-mat-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<button class="v15-close" onclick="v15Material.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v15-cert" class="v15-panel"><div class="v15-box">' +
      '<h2>&#x1F3C5; &#xAC74;&#xCD95; &#xC790;&#xACA9; &#xC778;&#xC99D; &#xBC30;&#xC9C0;</h2>' +
      '<p>6&#xC885; &#xAC74;&#xCD95; &#xC790;&#xACA9;&#xC99D; 4&#xB4F1;&#xAE09; &#xBC30;&#xC9C0; &#xC2DC;&#xC2A4;&#xD15C;</p>' +
      '<div id="v15-cert-list"></div>' +
      '<canvas id="v15-cert-canvas" class="v15-canvas" width="560" height="360"></canvas>' +
      '<div class="v15-stat" id="v15-cert-stat"></div>' +
      '<button class="v15-close" onclick="v15Cert.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. SFX Engine v15 (12 sounds) ──
var v15SFX = (function(){
  var ctx = null;
  function getCtx(){ if(!ctx) try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} return ctx; }
  function play(type){
    var c = getCtx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    var t = c.currentTime;
    switch(type){
      case 'green_open': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'green_rate': o.type='triangle'; o.frequency.setValueAtTime(659,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'insulate_test': o.type='sawtooth'; o.frequency.setValueAtTime(220,t); o.frequency.linearRampToValueAtTime(440,t+.2); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'storage_place': o.type='square'; o.frequency.setValueAtTime(880,t); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
      case 'pattern_draw': o.type='sine'; o.frequency.setValueAtTime(1047,t); g.gain.setValueAtTime(.07,t); g.gain.linearRampToValueAtTime(0,t+.08); o.start(t); o.stop(t+.08); break;
      case 'gantt_progress': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(523,t+.15); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'walk_step': o.type='sine'; o.frequency.setValueAtTime(150,t); g.gain.setValueAtTime(.05,t); g.gain.linearRampToValueAtTime(0,t+.08); o.start(t); o.stop(t+.08); break;
      case 'walk_door': o.type='square'; o.frequency.setValueAtTime(330,t); o.frequency.linearRampToValueAtTime(262,t+.2); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'material_alert': o.type='sawtooth'; o.frequency.setValueAtTime(587,t); g.gain.setValueAtTime(.07,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'cert_earn': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.setValueAtTime(659,t+.1); o.frequency.setValueAtTime(784,t+.2); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      case 'achieve_v15': o.type='triangle'; o.frequency.setValueAtTime(784,t); o.frequency.setValueAtTime(988,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'feature_open': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(660,t+.12); g.gain.setValueAtTime(.09,t); g.gain.linearRampToValueAtTime(0,t+.18); o.start(t); o.stop(t+.18); break;
    }
  }
  return {play:play};
})();

// ── 4. Green Building Certification Analyzer ──
var v15Green = (function(){
  var KEY = 'hb_green_v15';
  var categories = [
    {id:'solar',name:'태양광 패널',icon:'☀️',desc:'태양광 발전 설;&#xBE44;. 에너지; 자급;&#xB960; &#xD5A5;&#xC0C1;',max:10},
    {id:'insulation',name:'고;&#xB2E8;열; &#xBC2;&#xCCB4;',icon:'🧥',desc:'열;손;실; &#xCD5C;&#xC18C;&#xD654;. R값 3.5 &#xC774;&#xC0C1;',max:10},
    {id:'water',name:'빗;&#xBB3C; &#xC7AC;&#xD65C;&#xC6A9;',icon:'💧',desc:'빗;&#xBB3C; &#xC218;&#xC9D1; &#xBC0F; &#xC815;&#xD654; &#xC2DC;&#xC2A4;&#xD15C;',max:10},
    {id:'ventil',name:'자;&#xC5F0; &#xD658;&#xAE30;',icon:'🌬️',desc:'크;&#xB85C;스; &#xBCA4;틸;레;&#xC774;&#xC158; &#xC124;&#xACC4;',max:10},
    {id:'material',name:'친;&#xD658;&#xACBD; &#xC790;&#xC7AC;',icon:'🌿',desc:'재;&#xD65C;&#xC6A9; &#xBAA9;&#xC7AC;, &#xC800;VOC &#xD398;&#xC778;&#xD2B8;',max:10},
    {id:'led',name:'LED &#xC870;&#xBA85;',icon:'💡',desc:'고;&#xD6A8;&#xC728; LED + &#xC870;&#xB3C4; &#xC13C;&#xC11C;',max:10},
    {id:'garden',name:'옥;&#xC0C1; &#xC815;&#xC6D0;',icon:'🌻',desc:'옥;&#xC0C1; &#xB179;&#xD654; &#xBC0F; &#xC0DD;&#xD0DC; &#xC870;&#xACBD;',max:10},
    {id:'geotherm',name:'지;&#xC5F4; &#xB0C9;&#xB09C;&#xBC29;',icon:'🌋',desc:'지;&#xC5F4; &#xD788;&#xD2B8;&#xD38C;&#xD504; &#xC2DC;&#xC2A4;&#xD15C;',max:10},
    {id:'smart',name:'스;&#xB9C8;&#xD2B8; &#xAC74;&#xBB3C;',icon:'📱',desc:'IoT &#xAE30;&#xBC18; &#xC5D0;&#xB108;&#xC9C0; &#xAD00;&#xB9AC;',max:10},
    {id:'waste',name:'폐;&#xAE30;&#xBB3C; &#xCD5C;&#xC18C;&#xD654;',icon:'♻️',desc:'건;&#xCD95; &#xD3D0;&#xAE30;&#xBB3C; 90% &#xC7AC;&#xD65C;&#xC6A9;',max:10},
    {id:'noise',name:'소;&#xC74C; &#xC800;&#xAC10;',icon:'🔇',desc:'외;&#xBD80; &#xC18C;&#xC74C; 40dB &#xC774;&#xD558; &#xCC28;&#xB2E8;',max:10},
    {id:'access',name:'무;&#xC7A5;&#xC560; &#xC124;&#xACC4;',icon:'♿',desc:'유;&#xB2C8;&#xBC84;&#xC15C; &#xB514;&#xC790;&#xC778; &#xC811;&#xADFC;&#xC131;',max:10}
  ];
  var scores = {};
  function load(){ try{ scores = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ scores = {}; } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(scores)); }
  function getTotal(){ var t=0; categories.forEach(function(c){ t += (scores[c.id]||0); }); return t; }
  function getGrade(total){ if(total>=108) return {g:'Platinum',c:'#E5E4E2'}; if(total>=90) return {g:'Gold',c:'#FFD700'}; if(total>=72) return {g:'Silver',c:'#C0C0C0'}; if(total>=50) return {g:'Certified',c:'#cd7f32'}; return {g:'Not Certified',c:'#888'}; }
  function drawRadar(){
    var canvas = document.getElementById('v15-green-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height, cx=W/2, cy=H/2+10, R=Math.min(W,H)/2-60;
    ctx.clearRect(0,0,W,H);
    var n = categories.length;
    var angleStep = (Math.PI*2)/n;
    for(var ring=1;ring<=5;ring++){
      var r = R*(ring/5);
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a = -Math.PI/2 + i*angleStep;
        var x = cx + r*Math.cos(a), y = cy + r*Math.sin(a);
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = 'rgba(196,149,106,'+(0.1+ring*0.04)+')';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a = -Math.PI/2 + i*angleStep;
      ctx.beginPath();
      ctx.moveTo(cx,cy);
      ctx.lineTo(cx+R*Math.cos(a), cy+R*Math.sin(a));
      ctx.strokeStyle = 'rgba(196,149,106,.2)';
      ctx.stroke();
      var lx = cx + (R+30)*Math.cos(a), ly = cy + (R+30)*Math.sin(a);
      ctx.fillStyle = '#c4956a';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(categories[i].name, lx, ly);
    }
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var idx = i%n;
      var val = (scores[categories[idx].id]||0)/categories[idx].max;
      var a = -Math.PI/2 + idx*angleStep;
      var x = cx + R*val*Math.cos(a), y = cy + R*val*Math.sin(a);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.fillStyle = 'rgba(74,124,89,.25)';
    ctx.fill();
    ctx.strokeStyle = '#4a7c59';
    ctx.lineWidth = 2;
    ctx.stroke();
    for(var i=0;i<n;i++){
      var val = (scores[categories[i].id]||0)/categories[i].max;
      var a = -Math.PI/2 + i*angleStep;
      var x = cx + R*val*Math.cos(a), y = cy + R*val*Math.sin(a);
      ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fillStyle='#4a7c59'; ctx.fill();
      ctx.strokeStyle='#f5deb3'; ctx.lineWidth=1.5; ctx.stroke();
    }
    var total = getTotal();
    var grade = getGrade(total);
    ctx.fillStyle = grade.c;
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(grade.g, cx, 28);
    ctx.fillStyle = '#f5deb3';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText(total+'/120', cx, 48);
  }
  function renderTabs(){
    var cont = document.getElementById('v15-green-tabs'); if(!cont) return;
    cont.innerHTML = '';
    categories.forEach(function(c){
      var btn = document.createElement('button');
      btn.className = 'v15-tab';
      btn.textContent = c.icon+' '+c.name;
      btn.onclick = function(){ selectCat(c); };
      cont.appendChild(btn);
    });
  }
  function selectCat(c){
    var info = document.getElementById('v15-green-info');
    var cur = scores[c.id]||0;
    info.innerHTML = '<div style="margin-bottom:8px"><strong style="color:#f5deb3">'+c.icon+' '+c.name+'</strong></div>' +
      '<div>'+c.desc+'</div>' +
      '<div style="margin:12px 0"><input type="range" id="v15-green-slider" min="0" max="'+c.max+'" value="'+cur+'" style="width:80%;accent-color:#4a7c59"> <span id="v15-green-val" style="color:#f5deb3;font-weight:700">'+cur+'/'+c.max+'</span></div>';
    var slider = document.getElementById('v15-green-slider');
    slider.oninput = function(){
      scores[c.id] = parseInt(this.value);
      document.getElementById('v15-green-val').textContent = this.value+'/'+c.max;
      save(); drawRadar(); updateStat();
      v15SFX.play('green_rate');
    };
    v15SFX.play('feature_open');
  }
  function updateStat(){
    var st = document.getElementById('v15-green-stat'); if(!st) return;
    var total = getTotal();
    var grade = getGrade(total);
    var pct = Math.round(total/120*100);
    st.innerHTML = '<div class="s"><div class="sv">'+total+'</div><div class="sl">총점;</div></div>' +
      '<div class="s"><div class="sv" style="color:'+grade.c+'">'+grade.g+'</div><div class="sl">등;급;</div></div>' +
      '<div class="s"><div class="sv">'+pct+'%</div><div class="sl">달;성;률;</div></div>';
  }
  return {
    open: function(){ document.getElementById('v15-green').classList.add('active'); renderTabs(); drawRadar(); updateStat(); v15SFX.play('green_open'); },
    close: function(){ document.getElementById('v15-green').classList.remove('active'); },
    load: load
  };
})();

// ── 5. Soundproofing & Insulation Simulator ──
var v15Insulate = (function(){
  var walls = [
    {id:'wood_trad',name:'목;조; &#xD55C;옥;&#xBCBD;',rval:1.2,stc:28,desc:'전;&#xD1B5; &#xD669;&#xD1A0;+&#xBAA9;&#xC7AC; &#xBCBD;&#xCCB4;. &#xC790;&#xC5F0;&#xC18C;&#xC7AC; &#xC0AC;&#xC6A9;, &#xBC29;&#xC74C; &#xCDE8;&#xC57D;',color:'#8B7355'},
    {id:'brick',name:'조;적;&#xC870; &#xBCBD;&#xB3CC;',rval:2.8,stc:45,desc:'&#xBCBD;&#xB3CC; &#xC870;&#xC801;&#xC870;. &#xB0B4;&#xAD6C;&#xC131; &#xC6B0;&#xC218;, &#xBC29;&#xC74C; &#xC591;&#xD638;',color:'#CD5C5C'},
    {id:'concrete',name:'&#xCCA0;&#xADFC;&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;(RC)',rval:0.8,stc:55,desc:'RC&#xAD6C;&#xC870;. &#xBC29;&#xC74C; &#xC6B0;&#xC218;, &#xB2E8;&#xC5F4; &#xBCF4;&#xAC15; &#xD544;&#xC694;',color:'#808080'},
    {id:'sip',name:'SIP &#xD328;&#xB110;',rval:5.5,stc:50,desc:'구;&#xC870;&#xB2E8;&#xC5F4; &#xC77C;&#xCCB4;&#xD328;&#xB110;. &#xB2E8;&#xC5F4; &#xCD5C;&#xACE0;, &#xBC29;&#xC74C; &#xC591;&#xD638;',color:'#DEB887'},
    {id:'double',name:'이;중; &#xBC2;&#xCCB4; &#xACF5;&#xBC95;',rval:4.2,stc:58,desc:'&#xC774;&#xC911; &#xC11D;&#xACE0;&#xBCF4;&#xB4DC; &#xC0AC;&#xC774; &#xB2E8;&#xC5F4;&#xC7AC;+&#xACF5;&#xAE30;&#xCE35;',color:'#B8860B'},
    {id:'icf',name:'ICF &#xAE30;&#xCD08;',rval:6.0,stc:52,desc:'&#xB2E8;&#xC5F4; &#xCF58;&#xD06C;&#xB9AC;&#xD2B8; &#xD3FC;. &#xB2E8;&#xC5F4;+&#xB0B4;&#xAD6C;&#xC131; &#xCD5C;&#xACE0;',color:'#A0522D'}
  ];
  var selected = 0;
  function draw(){
    var canvas = document.getElementById('v15-ins-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    var barW = 60, gap = 20, startX = 60, chartH = H-100;
    ctx.fillStyle = '#c4956a'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('R-Value (단;열;성;능;)', W/4, 22);
    ctx.fillText('STC (방;음;등;급;)', W*3/4, 22);
    var maxR = 7, maxSTC = 65;
    walls.forEach(function(w, i){
      var x1 = startX + i*(barW+gap);
      var rH = (w.rval/maxR)*(chartH-40);
      var ry = 40 + (chartH-40) - rH;
      ctx.fillStyle = i===selected ? w.color : 'rgba(196,149,106,.3)';
      ctx.fillRect(x1, ry, barW/2-2, rH);
      ctx.fillStyle = '#f5deb3'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('R'+w.rval, x1+barW/4-1, ry-6);
      var x2 = x1 + barW/2 + 2;
      var sH = (w.stc/maxSTC)*(chartH-40);
      var sy = 40 + (chartH-40) - sH;
      ctx.fillStyle = i===selected ? '#4a7c59' : 'rgba(74,124,89,.3)';
      ctx.fillRect(x2, sy, barW/2-2, sH);
      ctx.fillStyle = '#f5deb3'; ctx.font = '10px sans-serif';
      ctx.fillText('STC'+w.stc, x2+barW/4-1, sy-6);
      ctx.fillStyle = i===selected ? '#f5deb3' : '#c4956a';
      ctx.font = '9px sans-serif';
      var words = w.name.split(' ');
      words.forEach(function(word, wi){
        ctx.fillText(word, x1+barW/2, chartH+10+wi*12);
      });
    });
    ctx.strokeStyle = 'rgba(196,149,106,.3)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(startX-10, 40); ctx.lineTo(startX-10, chartH); ctx.lineTo(W-20, chartH); ctx.stroke();
    var sw = walls[selected];
    var grade = sw.stc >= 55 ? 'A+' : sw.stc >= 50 ? 'A' : sw.stc >= 45 ? 'B' : sw.stc >= 35 ? 'C' : 'D';
    var gradeColor = grade==='A+' ? '#4a7c59' : grade==='A' ? '#6a9c59' : grade==='B' ? '#c4956a' : grade==='C' ? '#cd7f32' : '#cd5c5c';
    ctx.fillStyle = gradeColor; ctx.font = 'bold 20px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText('방;음; 등;급;: '+grade, W-30, chartH+40);
  }
  function renderTabs(){
    var cont = document.getElementById('v15-ins-tabs'); if(!cont) return;
    cont.innerHTML = '';
    walls.forEach(function(w, i){
      var btn = document.createElement('button');
      btn.className = 'v15-tab' + (i===selected?' active':'');
      btn.textContent = w.name;
      btn.onclick = function(){ selected=i; renderTabs(); draw(); showInfo(); v15SFX.play('insulate_test'); };
      cont.appendChild(btn);
    });
  }
  function showInfo(){
    var info = document.getElementById('v15-ins-info'); if(!info) return;
    var w = walls[selected];
    info.innerHTML = '<strong style="color:#f5deb3">'+w.name+'</strong><br>'+w.desc+'<br><span style="color:#4a7c59">R-Value: '+w.rval+'</span> | <span style="color:#c4956a">STC: '+w.stc+'</span>';
  }
  return {
    open: function(){ document.getElementById('v15-insulate').classList.add('active'); renderTabs(); draw(); showInfo(); v15SFX.play('feature_open'); },
    close: function(){ document.getElementById('v15-insulate').classList.remove('active'); },
    load: function(){}
  };
})();

// ── 6. Storage Space Optimizer ──
var v15Storage = (function(){
  var KEY = 'hb_storage_v15';
  var GRID = 12;
  var grid = [];
  var tools = [
    {id:'closet',name:'옥;장;',icon:'🚿',w:2,h:3,color:'#8B4513'},
    {id:'shelf',name:'선;반;',icon:'📚',w:3,h:1,color:'#DEB887'},
    {id:'drawer',name:'서;랍;장;',icon:'🗄',w:2,h:2,color:'#A0522D'},
    {id:'shoe',name:'신;발;장;',icon:'👞',w:1,h:3,color:'#CD853F'},
    {id:'pantry',name:'식;령;실;',icon:'🍽',w:2,h:2,color:'#D2691E'},
    {id:'erase',name:'지;우;기;',icon:'❌',w:0,h:0,color:'transparent'}
  ];
  var curTool = 0;
  function init(){ grid=[]; for(var r=0;r<GRID;r++){ grid[r]=[]; for(var c=0;c<GRID;c++) grid[r][c]=0; } }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.length===GRID) grid=d; else init(); }catch(e){ init(); } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(grid)); }
  function draw(){
    var canvas = document.getElementById('v15-storage-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    var cellW = (W-40)/GRID, cellH = (H-40)/GRID;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('수;납;공;간; 배;치;도; (12\xD712)', W/2, 18);
    for(var r=0;r<GRID;r++){
      for(var c=0;c<GRID;c++){
        var x=20+c*cellW, y=30+r*cellH;
        if(grid[r][c]){
          var t = tools.find(function(tt){ return tt.id===grid[r][c]; });
          ctx.fillStyle = t ? t.color : '#555';
          ctx.fillRect(x+1, y+1, cellW-2, cellH-2);
          if(t){ ctx.fillStyle='#fff'; ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.fillText(t.icon, x+cellW/2, y+cellH/2+4); }
        } else {
          ctx.fillStyle = 'rgba(196,149,106,.06)';
          ctx.fillRect(x+1, y+1, cellW-2, cellH-2);
        }
        ctx.strokeStyle = 'rgba(196,149,106,.15)';
        ctx.strokeRect(x, y, cellW, cellH);
      }
    }
  }
  function handleClick(e){
    var canvas = document.getElementById('v15-storage-canvas'); if(!canvas) return;
    var rect = canvas.getBoundingClientRect();
    var mx = (e.clientX-rect.left)*(canvas.width/rect.width);
    var my = (e.clientY-rect.top)*(canvas.height/rect.height);
    var cellW = (canvas.width-40)/GRID, cellH = (canvas.height-40)/GRID;
    var c = Math.floor((mx-20)/cellW), r = Math.floor((my-30)/cellH);
    if(r<0||r>=GRID||c<0||c>=GRID) return;
    var t = tools[curTool];
    if(t.id==='erase'){ grid[r][c]=0; }
    else {
      for(var dr=0;dr<t.h&&r+dr<GRID;dr++){
        for(var dc=0;dc<t.w&&c+dc<GRID;dc++){
          grid[r+dr][c+dc] = t.id;
        }
      }
    }
    save(); draw(); updateStat();
    v15SFX.play('storage_place');
  }
  function renderTools(){
    var cont = document.getElementById('v15-storage-tools'); if(!cont) return;
    cont.innerHTML = '';
    tools.forEach(function(t, i){
      var btn = document.createElement('button');
      btn.className = 'v15-tab'+(i===curTool?' active':'');
      btn.textContent = t.icon+' '+t.name;
      btn.onclick = function(){ curTool=i; renderTools(); };
      cont.appendChild(btn);
    });
  }
  function updateStat(){
    var st = document.getElementById('v15-storage-stat'); if(!st) return;
    var used=0, total=GRID*GRID;
    for(var r=0;r<GRID;r++) for(var c=0;c<GRID;c++) if(grid[r][c]) used++;
    var pct = Math.round(used/total*100);
    var grade = pct>=60?'S':pct>=45?'A':pct>=30?'B':pct>=15?'C':'D';
    st.innerHTML = '<div class="s"><div class="sv">'+used+'</div><div class="sl">사;용; 칸;</div></div>' +
      '<div class="s"><div class="sv">'+pct+'%</div><div class="sl">활;용;률;</div></div>' +
      '<div class="s"><div class="sv">'+grade+'</div><div class="sl">등;급;</div></div>';
  }
  return {
    open: function(){
      document.getElementById('v15-storage').classList.add('active');
      renderTools(); draw(); updateStat();
      var canvas = document.getElementById('v15-storage-canvas');
      if(canvas && !canvas.__v15click){ canvas.__v15click=true; canvas.addEventListener('click', handleClick); }
      v15SFX.play('feature_open');
    },
    close: function(){ document.getElementById('v15-storage').classList.remove('active'); },
    load: load
  };
})();

// ── 7. Traditional Pattern Design Studio ──
var v15Pattern = (function(){
  var patterns = [
    {id:'dancheong_flower',name:'단;청; 연;화;문;',desc:'연;화; &#xBB38;양;. &#xC0AC;&#xCC30;/&#xAD81;&#xC804; &#xCC9C;&#xC815;&#xC7A5;&#xC2DD;',colors:['#C62828','#1565C0','#2E7D32','#F9A825','#F5F5F5']},
    {id:'dancheong_cloud',name:'단;청; 운;문;',desc:'구;름; &#xBB38;양;. &#xD558;&#xB298; &#xC138;계;&#xB97C; &#xC0C1;&#xC9D5;',colors:['#1565C0','#F5F5F5','#C62828','#FFB300','#4CAF50']},
    {id:'dancheong_dragon',name:'단;청; 용;문;',desc:'용; &#xBB38;양;. &#xC655;권;&#xACFC; &#xC704;엄;&#xC758; &#xC0C1;&#xC9D5;',colors:['#FFB300','#C62828','#1565C0','#2E7D32','#4A148C']},
    {id:'giwa_wave',name:'기;와; 파;도;문;',desc:'지;붕; &#xC554;&#xB9C9;&#xC0C8; &#xD30C;&#xB3C4; &#xBB38;양;',colors:['#37474F','#546E7A','#78909C','#90A4AE','#B0BEC5']},
    {id:'window_lattice',name:'창;틀; 격;자;문;',desc:'한;옥; &#xCC3D;틀; &#xACA9;자; &#xD328;턴;',colors:['#5D4037','#795548','#8D6E63','#BCAAA4','#D7CCC8']},
    {id:'bojagi',name:'보;자;기; 조;각;문;',desc:'보;자;기; &#xC870;각;&#xBCF4; &#xD328;치;워;크;',colors:['#E91E63','#2196F3','#4CAF50','#FFC107','#9C27B0']},
    {id:'dancheong_phoenix',name:'단;청; 봉;황;문;',desc:'봉;황; &#xBB38;양;. &#xD3C9;화;&#xC640; &#xC870;화;',colors:['#C62828','#FFB300','#F5F5F5','#4CAF50','#1565C0']},
    {id:'turtle',name:'귀;갑;문;',desc:'거;북; &#xB4F1;딩; &#xD328;턴;. &#xC7A5;수;&#xC758; &#xC0C1;징;',colors:['#2E7D32','#4CAF50','#8BC34A','#C8E6C9','#1B5E20']},
    {id:'swastika',name:'만;자;문; (卐)',desc:'불;교; &#xC0AC;찰; &#xC7A5;식; &#xBB38;양;',colors:['#FFB300','#C62828','#F5F5F5','#795548','#FF8F00']},
    {id:'taegeuk',name:'태;극;문;',desc:'음;양; &#xC870;화;. &#xD55C;국; &#xC804;통; &#xC0C1;징;',colors:['#C62828','#1565C0','#F5F5F5','#212121','#FFC107']},
    {id:'plum',name:'매;화;문;',desc:'매;화; &#xB098;무; &#xBB38;양;. &#xC808;개;&#xC758; &#xC0C1;징;',colors:['#E91E63','#F48FB1','#2E7D32','#795548','#F5F5F5']},
    {id:'thunder',name:'뇌;문;',desc:'번;개; &#xBB38;양;. &#xC561;막;이;&#xC640; &#xBCF4;호;',colors:['#FFB300','#FF8F00','#1565C0','#F5F5F5','#C62828']}
  ];
  var selected = 0;
  function draw(){
    var canvas = document.getElementById('v15-pat-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    var p = patterns[selected];
    var cellSize = Math.min(W,H)/12;
    var ox = (W-cellSize*10)/2, oy = (H-cellSize*10)/2;
    for(var r=0;r<10;r++){
      for(var c=0;c<10;c++){
        var ci;
        switch(p.id){
          case 'dancheong_flower': ci = ((r+c)%2===0) ? (r%5) : ((r*3+c*7)%5); break;
          case 'dancheong_cloud': ci = ((r*2+c)%5); break;
          case 'dancheong_dragon': ci = ((r+c*3)%5); break;
          case 'giwa_wave': ci = (Math.floor((r+Math.sin(c*0.8)*2+10))%5); break;
          case 'window_lattice': ci = ((r%2===0||c%2===0)?0:((r+c)%4+1)); break;
          case 'bojagi': ci = ((r*7+c*13)%5); break;
          case 'dancheong_phoenix': ci = ((r*2+c*3+1)%5); break;
          case 'turtle': ci = (((r%3)*(c%3))%5); break;
          case 'swastika': ci = ((r+c)%2===0 ? 0 : (r%2===0?1:((c*2+r)%3+2))); break;
          case 'taegeuk': var dx=c-4.5,dy=r-4.5,dist=Math.sqrt(dx*dx+dy*dy); ci=dist<2?(Math.atan2(dy,dx)>0?0:1):(dist<4?2:((r+c)%2===0?3:4)); break;
          case 'plum': ci = ((r+c)%3===0 ? 0 : (r*c)%5); break;
          case 'thunder': ci = ((r%3===0||c%3===0)?0:((r+c)%2===0?1:((r*c)%3+2))); break;
          default: ci = (r+c)%5;
        }
        ctx.fillStyle = p.colors[ci];
        ctx.fillRect(ox+c*cellSize, oy+r*cellSize, cellSize-1, cellSize-1);
      }
    }
    ctx.strokeStyle = 'rgba(196,149,106,.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(ox-1, oy-1, cellSize*10+2, cellSize*10+2);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(p.name, W/2, oy-12);
  }
  function renderTabs(){
    var cont = document.getElementById('v15-pat-tabs'); if(!cont) return;
    cont.innerHTML = '';
    patterns.forEach(function(p, i){
      var btn = document.createElement('button');
      btn.className = 'v15-tab'+(i===selected?' active':'');
      btn.textContent = p.name;
      btn.onclick = function(){ selected=i; renderTabs(); draw(); showInfo(); v15SFX.play('pattern_draw'); };
      cont.appendChild(btn);
    });
  }
  function showInfo(){
    var info = document.getElementById('v15-pat-info'); if(!info) return;
    var p = patterns[selected];
    info.innerHTML = '<strong style="color:#f5deb3">'+p.name+'</strong> &mdash; '+p.desc;
  }
  return {
    open: function(){ document.getElementById('v15-pattern').classList.add('active'); renderTabs(); draw(); showInfo(); v15SFX.play('feature_open'); },
    close: function(){ document.getElementById('v15-pattern').classList.remove('active'); },
    load: function(){}
  };
})();

// ── 8. Construction Project Gantt Chart ──
var v15Gantt = (function(){
  var KEY = 'hb_gantt_v15';
  var phases = [
    {id:'design',name:'설;계; 단;계;',start:0,dur:4,color:'#1565C0',tasks:'토;지;조;사;, 설;계;도;, 허;가;신;청;'},
    {id:'foundation',name:'기;초; 공;사;',start:3,dur:3,color:'#2E7D32',tasks:'터;파;기;, 기;초;파;기;, 콘;크;리;트;'},
    {id:'frame',name:'골;조; 공;사;',start:5,dur:5,color:'#E65100',tasks:'기;둥;, 벽;체;, 지;붕; 구;조;'},
    {id:'mep',name:'설;비; 공;사;',start:8,dur:4,color:'#7B1FA2',tasks:'전;기;, 배;관;, 냉;난;방;'},
    {id:'finish',name:'마;감; 공;사;',start:10,dur:5,color:'#C62828',tasks:'내;부;마;감;, 외;부;마;감;, 조;경;'},
    {id:'inspect',name:'준;공; 검;사;',start:14,dur:2,color:'#00838F',tasks:'안;전;검;사;, 준;공;신;고;, 입;주;'}
  ];
  var progress = {};
  function load(){ try{ progress = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ progress = {}; } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(progress)); }
  function draw(){
    var canvas = document.getElementById('v15-gantt-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    var maxWeek = 16;
    var leftMargin = 120, topMargin = 40, barH = 36, gap = 10;
    var chartW = W - leftMargin - 30;
    var weekW = chartW / maxWeek;
    ctx.fillStyle = '#c4956a'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
    for(var w=0;w<=maxWeek;w++){
      var x = leftMargin + w*weekW;
      ctx.fillText((w+1)+'주;', x, topMargin-8);
      ctx.strokeStyle = 'rgba(196,149,106,.1)'; ctx.beginPath(); ctx.moveTo(x, topMargin); ctx.lineTo(x, topMargin+phases.length*(barH+gap)); ctx.stroke();
    }
    phases.forEach(function(p, i){
      var y = topMargin + i*(barH+gap);
      var x = leftMargin + p.start*weekW;
      var w = p.dur*weekW;
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(p.name, leftMargin-8, y+barH/2+4);
      ctx.fillStyle = 'rgba(196,149,106,.08)';
      ctx.fillRect(leftMargin, y, chartW, barH);
      ctx.strokeStyle = 'rgba(196,149,106,.15)'; ctx.strokeRect(leftMargin, y, chartW, barH);
      ctx.fillStyle = p.color+'33';
      ctx.fillRect(x, y, w, barH);
      ctx.strokeStyle = p.color; ctx.lineWidth = 1.5; ctx.strokeRect(x, y, w, barH);
      var prog = progress[p.id] || 0;
      ctx.fillStyle = p.color+'88';
      ctx.fillRect(x, y, w*(prog/100), barH);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(prog+'%', x+w/2, y+barH/2+4);
    });
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('건;축; 프;로;젝;트; 일;정; (16주;)', W/2, 22);
  }
  function renderCtrl(){
    var ctrl = document.getElementById('v15-gantt-ctrl'); if(!ctrl) return;
    ctrl.innerHTML = '';
    phases.forEach(function(p){
      var wrap = document.createElement('div');
      wrap.style.cssText = 'display:inline-flex;align-items:center;gap:6px;margin:4px 8px';
      var lbl = document.createElement('span');
      lbl.style.cssText = 'color:#c4956a;font-size:11px';
      lbl.textContent = p.name;
      var slider = document.createElement('input');
      slider.type = 'range'; slider.min = '0'; slider.max = '100'; slider.value = progress[p.id]||0;
      slider.style.cssText = 'width:80px;accent-color:'+p.color;
      slider.oninput = function(){ progress[p.id]=parseInt(this.value); save(); draw(); updateStat(); v15SFX.play('gantt_progress'); };
      wrap.appendChild(lbl); wrap.appendChild(slider);
      ctrl.appendChild(wrap);
    });
  }
  function updateStat(){
    var st = document.getElementById('v15-gantt-stat'); if(!st) return;
    var total = 0; phases.forEach(function(p){ total += (progress[p.id]||0); });
    var avg = Math.round(total/phases.length);
    var done = phases.filter(function(p){ return (progress[p.id]||0)>=100; }).length;
    st.innerHTML = '<div class="s"><div class="sv">'+avg+'%</div><div class="sl">전;체; 진;행;</div></div>' +
      '<div class="s"><div class="sv">'+done+'/'+phases.length+'</div><div class="sl">완;료; 단;계;</div></div>';
  }
  return {
    open: function(){ document.getElementById('v15-gantt').classList.add('active'); draw(); renderCtrl(); updateStat(); v15SFX.play('feature_open'); },
    close: function(){ document.getElementById('v15-gantt').classList.remove('active'); },
    load: load
  };
})();

// ── 9. VR Walkthrough Simulator ──
var v15Walk = (function(){
  var rooms = [
    {id:'entrance',name:'현;관;',x:5,y:8,w:3,h:2,color:'#8B7355',doors:[{to:'living',dx:1,dy:0}]},
    {id:'living',name:'거;실;',x:3,y:4,w:5,h:4,color:'#DEB887',doors:[{to:'entrance',dx:0,dy:1},{to:'kitchen',dx:1,dy:0},{to:'bedroom',dx:-1,dy:0},{to:'bath',dx:0,dy:-1}]},
    {id:'kitchen',name:'주;방;',x:8,y:4,w:3,h:3,color:'#D2691E',doors:[{to:'living',dx:-1,dy:0}]},
    {id:'bedroom',name:'안;방;',x:0,y:4,w:3,h:3,color:'#CD853F',doors:[{to:'living',dx:1,dy:0},{to:'study',dx:0,dy:-1}]},
    {id:'bath',name:'화;장;실;',x:4,y:1,w:2,h:3,color:'#87CEEB',doors:[{to:'living',dx:0,dy:1}]},
    {id:'study',name:'서;재;',x:0,y:1,w:3,h:3,color:'#A0522D',doors:[{to:'bedroom',dx:0,dy:1}]},
    {id:'garden',name:'마;당;',x:6,y:0,w:5,h:3,color:'#2E7D32',doors:[{to:'living',dx:0,dy:1}]},
    {id:'storage_room',name:'창;고;',x:8,y:7,w:3,h:3,color:'#5D4037',doors:[{to:'entrance',dx:-1,dy:0}]}
  ];
  var curRoom = 'entrance';
  var visited = {};
  function draw(){
    var canvas = document.getElementById('v15-walk-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    var scale = Math.min(W/12, (H-60)/11);
    var ox = (W-12*scale)/2, oy = 30;
    rooms.forEach(function(r){
      var x=ox+r.x*scale, y=oy+r.y*scale, w=r.w*scale, h=r.h*scale;
      ctx.fillStyle = r.id===curRoom ? r.color : (visited[r.id] ? r.color+'44' : 'rgba(196,149,106,.06)');
      ctx.fillRect(x, y, w, h);
      ctx.strokeStyle = r.id===curRoom ? '#f5deb3' : 'rgba(196,149,106,.3)';
      ctx.lineWidth = r.id===curRoom ? 3 : 1;
      ctx.strokeRect(x, y, w, h);
      ctx.fillStyle = r.id===curRoom ? '#fff' : (visited[r.id] ? '#c4956a' : 'rgba(196,149,106,.4)');
      ctx.font = (r.id===curRoom ? 'bold ' : '')+'11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(r.name, x+w/2, y+h/2+4);
      if(r.id===curRoom){
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc(x+w/2, y+h/2-10, 5, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#2d1b0e'; ctx.font = 'bold 8px sans-serif';
        ctx.fillText('★', x+w/2, y+h/2-7);
      }
    });
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    var cr = rooms.find(function(r){ return r.id===curRoom; });
    ctx.fillText('현;재; 위;치;: '+cr.name, W/2, H-16);
    var vc = Object.keys(visited).length;
    ctx.fillStyle = '#c4956a'; ctx.font = '12px sans-serif';
    ctx.fillText('탐;험;: '+vc+'/'+rooms.length+' 방;', W/2, H-2);
  }
  function renderCtrl(){
    var ctrl = document.getElementById('v15-walk-ctrl'); if(!ctrl) return;
    ctrl.innerHTML = '';
    var cr = rooms.find(function(r){ return r.id===curRoom; });
    if(!cr) return;
    cr.doors.forEach(function(d){
      var target = rooms.find(function(r){ return r.id===d.to; });
      if(!target) return;
      var btn = document.createElement('button');
      btn.className = 'v15-btn-sm';
      btn.style.margin = '4px';
      btn.textContent = '→ '+target.name;
      btn.onclick = function(){
        visited[curRoom] = true;
        curRoom = d.to;
        visited[curRoom] = true;
        draw(); renderCtrl(); showInfo();
        v15SFX.play('walk_door');
      };
      ctrl.appendChild(btn);
    });
  }
  function showInfo(){
    var info = document.getElementById('v15-walk-info'); if(!info) return;
    var cr = rooms.find(function(r){ return r.id===curRoom; });
    var descs = {
      entrance:'전;통; 한;옥;의; 대;문;. 높;은; 문;지;방;&#xC744; &#xC9C0;&#xB098; &#xC548;으;로;.',
      living:'넓;은; 대;청;마;루;. 마;루; &#xBC14;닥;&#xC758; &#xB098;무;결;&#xC774; &#xC544;름;답;습;니;다;.',
      kitchen:'부;엌;. 아;궁;이;&#xC640; &#xAC00;마;솔;&#xC774; &#xB193;여; &#xC788;습;니;다;.',
      bedroom:'안;방;. 온;돌;이; &#xB530;뜻;하;고; &#xC774;불;&#xC774; &#xD3B4;어;져; &#xC788;습;니;다;.',
      bath:'화;장;실;. 전;통; &#xC9D1;의; &#xCE21;간;&#xC744; &#xD604;대;화;&#xD588;습;니;다;.',
      study:'서;재;. 책;장;&#xACFC; &#xBC40;루;, &#xBD93;&#xACFC; &#xBC84;루;&#xAC00; &#xB193;여; &#xC788;습;니;다;.',
      garden:'마;당;. 장;독;대;&#xC640; &#xAC10;나;무;&#xAC00; &#xC788;습;니;다;.',
      storage_room:'창;고;. &#xB18D;기;구;&#xC640; &#xC7A5;작;물;&#xC774; &#xBCF4;관;&#xB418;어; &#xC788;습;니;다;.'
    };
    info.innerHTML = '<strong style="color:#f5deb3">'+cr.name+'</strong><br>'+(descs[cr.id]||'');
  }
  return {
    open: function(){
      document.getElementById('v15-walkthru').classList.add('active');
      curRoom='entrance'; visited={entrance:true};
      draw(); renderCtrl(); showInfo();
      v15SFX.play('walk_step');
    },
    close: function(){ document.getElementById('v15-walkthru').classList.remove('active'); },
    load: function(){}
  };
})();

// ── 10. Building Material Cost Tracker ──
var v15Material = (function(){
  var materials = [
    {id:'wood',name:'목;재;',unit:'만;원;/㎥',prices:[85,88,92,87,90,95,98,93,89,91,94,97],color:'#8B4513'},
    {id:'cement',name:'시;멘;트;',unit:'만;원;/t',prices:[12,12,13,13,14,14,15,15,14,13,13,14],color:'#808080'},
    {id:'steel',name:'철;근;',unit:'만;원;/t',prices:[75,78,82,80,85,88,92,90,87,84,86,89],color:'#4682B4'},
    {id:'brick',name:'벽;돌;',unit:'원;/장;',prices:[320,325,330,335,340,345,350,348,342,338,340,345],color:'#CD5C5C'},
    {id:'sand',name:'모;래;',unit:'만;원;/㎥',prices:[3.5,3.6,3.8,3.7,3.9,4.0,4.2,4.1,3.9,3.8,3.7,3.9],color:'#C2B280'},
    {id:'tile',name:'타;일;',unit:'원;/㎡',prices:[45,46,48,47,50,52,55,53,51,49,50,52],color:'#DEB887'},
    {id:'glass',name:'유;리;',unit:'만;원;/㎡',prices:[8,8.5,9,8.8,9.2,9.5,10,9.8,9.5,9.2,9.4,9.7],color:'#87CEEB'},
    {id:'insul',name:'단;열;재;',unit:'만;원;/㎥',prices:[15,15,16,16,17,18,19,18,17,16,17,18],color:'#FFB300'}
  ];
  var selected = 0;
  var months = ['1월;','2월;','3월;','4월;','5월;','6월;','7월;','8월;','9월;','10월;','11월;','12월;'];
  function draw(){
    var canvas = document.getElementById('v15-mat-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    var m = materials[selected];
    var leftM=60, topM=40, rightM=30, bottomM=50;
    var chartW=W-leftM-rightM, chartH=H-topM-bottomM;
    var minP = Math.min.apply(null, m.prices)*0.9;
    var maxP = Math.max.apply(null, m.prices)*1.1;
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(m.name+' 월;별; 가;격; 추;이; ('+m.unit+')', W/2, 22);
    ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.lineWidth = 1;
    for(var g=0;g<=4;g++){
      var y = topM + chartH - (g/4)*chartH;
      ctx.beginPath(); ctx.moveTo(leftM, y); ctx.lineTo(leftM+chartW, y); ctx.stroke();
      var val = minP + (g/4)*(maxP-minP);
      ctx.fillStyle = '#c4956a'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(val.toFixed(1), leftM-6, y+4);
    }
    ctx.beginPath();
    m.prices.forEach(function(p, i){
      var x = leftM + (i/(m.prices.length-1))*chartW;
      var y = topM + chartH - ((p-minP)/(maxP-minP))*chartH;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.strokeStyle = m.color; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.lineTo(leftM+chartW, topM+chartH);
    ctx.lineTo(leftM, topM+chartH);
    ctx.closePath();
    ctx.fillStyle = m.color+'22'; ctx.fill();
    m.prices.forEach(function(p, i){
      var x = leftM + (i/(m.prices.length-1))*chartW;
      var y = topM + chartH - ((p-minP)/(maxP-minP))*chartH;
      ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2);
      ctx.fillStyle = m.color; ctx.fill();
      ctx.strokeStyle = '#f5deb3'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.fillStyle = '#c4956a'; ctx.font = '9px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(months[i], x, topM+chartH+14);
    });
    var first = m.prices[0], last = m.prices[m.prices.length-1];
    var change = ((last-first)/first*100).toFixed(1);
    var arrow = change>=0 ? '↑' : '↓';
    ctx.fillStyle = change>=0 ? '#C62828' : '#2E7D32';
    ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(arrow+' '+Math.abs(change)+'%', W-rightM, topM+chartH+40);
  }
  function renderTabs(){
    var cont = document.getElementById('v15-mat-tabs'); if(!cont) return;
    cont.innerHTML = '';
    materials.forEach(function(m, i){
      var btn = document.createElement('button');
      btn.className = 'v15-tab'+(i===selected?' active':'');
      btn.textContent = m.name;
      btn.onclick = function(){ selected=i; renderTabs(); draw(); showInfo(); v15SFX.play('material_alert'); };
      cont.appendChild(btn);
    });
  }
  function showInfo(){
    var info = document.getElementById('v15-mat-info'); if(!info) return;
    var m = materials[selected];
    var avg = m.prices.reduce(function(a,b){return a+b;},0)/m.prices.length;
    var maxP = Math.max.apply(null, m.prices), minP = Math.min.apply(null, m.prices);
    info.innerHTML = '<strong style="color:#f5deb3">'+m.name+'</strong> ('+m.unit+')<br>' +
      '평;균;: <span style="color:#4a7c59">'+avg.toFixed(1)+'</span> | 최;고;: <span style="color:#C62828">'+maxP+'</span> | 최;저;: <span style="color:#1565C0">'+minP+'</span>';
  }
  return {
    open: function(){ document.getElementById('v15-material').classList.add('active'); renderTabs(); draw(); showInfo(); v15SFX.play('feature_open'); },
    close: function(){ document.getElementById('v15-material').classList.remove('active'); },
    load: function(){}
  };
})();

// ── 11. Architecture Certification Badge System ──
var v15Cert = (function(){
  var KEY = 'hb_cert_v15';
  var certs = [
    {id:'basic',name:'건;축;기;사;',icon:'📋',req:'기;본; 건;축; 이;론; &#xBC0F; &#xC2E4;무;',tiers:[{t:'Bronze',min:1},{t:'Silver',min:3},{t:'Gold',min:5},{t:'Diamond',min:8}]},
    {id:'green',name:'친;환;경;건;축;사;',icon:'🌿',req:'녹;색;건;축; &#xC778;증; &#xBC0F; &#xC5D0;너;지; &#xD6A8;율;',tiers:[{t:'Bronze',min:1},{t:'Silver',min:3},{t:'Gold',min:5},{t:'Diamond',min:8}]},
    {id:'interior',name:'인;테;리;어;디;자;이;너;',icon:'🎨',req:'실;내; &#xACF5;간; &#xACC4;획; &#xBC0F; &#xB514;자;인;',tiers:[{t:'Bronze',min:1},{t:'Silver',min:3},{t:'Gold',min:5},{t:'Diamond',min:8}]},
    {id:'hanok',name:'한;옥;전;문;가;',icon:'🏯',req:'전;통; &#xD55C;옥; &#xAC74;축; &#xC804;문; &#xC9C0;식;',tiers:[{t:'Bronze',min:1},{t:'Silver',min:3},{t:'Gold',min:5},{t:'Diamond',min:8}]},
    {id:'safety',name:'건;축;안;전;관;리;사;',icon:'⛑️',req:'건;축;물; &#xC548;전; &#xC9C4;단; &#xBC0F; &#xAD00;리;',tiers:[{t:'Bronze',min:1},{t:'Silver',min:3},{t:'Gold',min:5},{t:'Diamond',min:8}]},
    {id:'3d',name:'3D모;델;링;전;문;가;',icon:'🖥️',req:'3D &#xAC74;축; &#xBAA8;델;링; &#xBC0F; &#xC2DC;각;화;',tiers:[{t:'Bronze',min:1},{t:'Silver',min:3},{t:'Gold',min:5},{t:'Diamond',min:8}]}
  ];
  var xp = {};
  function load(){ try{ xp = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ xp = {}; } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(xp)); }
  function getTier(cert){
    var pts = xp[cert.id] || 0;
    var tier = null;
    cert.tiers.forEach(function(t){ if(pts >= t.min) tier = t; });
    return tier;
  }
  function drawSummary(){
    var canvas = document.getElementById('v15-cert-canvas'); if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height;
    ctx.clearRect(0,0,W,H);
    var colW = W/certs.length, barMaxH = H-80;
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('자;격;증; 진;행; 현;황;', W/2, 22);
    certs.forEach(function(c, i){
      var pts = xp[c.id] || 0;
      var maxPts = 10;
      var x = i*colW + colW*0.2;
      var w = colW*0.6;
      var h = (pts/maxPts)*barMaxH;
      var y = 40 + barMaxH - h;
      var tier = getTier(c);
      var tColors = {Bronze:'#cd7f32',Silver:'#c0c0c0',Gold:'#ffd700',Diamond:'#b9f2ff'};
      ctx.fillStyle = tier ? (tColors[tier.t]||'#c4956a')+'55' : 'rgba(196,149,106,.1)';
      ctx.fillRect(x, 40, w, barMaxH);
      ctx.fillStyle = tier ? (tColors[tier.t]||'#c4956a') : '#c4956a';
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = '#f5deb3'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(c.icon, x+w/2, H-30);
      ctx.fillText(pts+'/'+maxPts, x+w/2, y-6);
      if(tier){
        ctx.fillStyle = tColors[tier.t];
        ctx.font = 'bold 9px sans-serif';
        ctx.fillText(tier.t, x+w/2, H-16);
      }
    });
  }
  function renderList(){
    var cont = document.getElementById('v15-cert-list'); if(!cont) return;
    cont.innerHTML = '';
    certs.forEach(function(c){
      var pts = xp[c.id] || 0;
      var tier = getTier(c);
      var tColors = {Bronze:'#cd7f32',Silver:'#c0c0c0',Gold:'#ffd700',Diamond:'#b9f2ff'};
      var item = document.createElement('div');
      item.className = 'v15-item'+(tier?' done':'');
      item.innerHTML = '<h4>'+c.icon+' '+c.name+(tier?' <span class="tag" style="color:'+(tColors[tier.t]||'#c4956a')+'">'+tier.t+'</span>':'')+'</h4>' +
        '<p>'+c.req+'</p>' +
        '<div style="margin-top:8px"><input type="range" min="0" max="10" value="'+pts+'" data-cert="'+c.id+'" style="width:80%;accent-color:'+(tier?tColors[tier.t]:'#c4956a')+'" class="v15-cert-slider"> <span style="color:#f5deb3;font-weight:700">'+pts+'/10</span></div>';
      cont.appendChild(item);
    });
    cont.querySelectorAll('.v15-cert-slider').forEach(function(sl){
      sl.oninput = function(){
        xp[this.dataset.cert] = parseInt(this.value);
        save(); renderList(); drawSummary(); updateStat();
        v15SFX.play('cert_earn');
      };
    });
  }
  function updateStat(){
    var st = document.getElementById('v15-cert-stat'); if(!st) return;
    var total = 0; certs.forEach(function(c){ total += (xp[c.id]||0); });
    var earned = certs.filter(function(c){ return getTier(c)!==null; }).length;
    var diamonds = certs.filter(function(c){ return (xp[c.id]||0)>=8; }).length;
    st.innerHTML = '<div class="s"><div class="sv">'+total+'</div><div class="sl">총; XP</div></div>' +
      '<div class="s"><div class="sv">'+earned+'/'+certs.length+'</div><div class="sl">취;득;</div></div>' +
      '<div class="s"><div class="sv" style="color:#b9f2ff">'+diamonds+'</div><div class="sl">Diamond</div></div>';
  }
  return {
    open: function(){ document.getElementById('v15-cert').classList.add('active'); renderList(); drawSummary(); updateStat(); v15SFX.play('feature_open'); },
    close: function(){ document.getElementById('v15-cert').classList.remove('active'); },
    load: load
  };
})();

// ── 12. Quiz v15 (+15 questions, 150→165) ──
var v15Quiz = (function(){
  var newQs = [
    {q:'친;환;경; 건;축; 인;증; LEED에;서; 최;고; 등;급;은;?',a:['플;래;티;넘;','골;드;','실;버;','인;증;'],c:0},
    {q:'방;음; 성;능;을; 나;타;내;는; STC는; 무;엇;의; 약;자;인;가;?',a:['Sound Transmission Class','Sound Transfer Code','Standard Thermal Coefficient','Solid Test Category'],c:0},
    {q:'R-Value가; 높;을;수;록; 단;열; 성;능;이; 어;떻;게; 되;는;가;?',a:['좋;아;진;다;','나;빠;진;다;','변;화;없;다;','불;안;정;해;진;다;'],c:0},
    {q:'단;청;의; 주;요; 5색;에; 포;함;되;지; 않;는; 색;은;?',a:['보;라;색;','빨;강;','파;랑;','초;록;'],c:0},
    {q:'건;축; 프;로;젝;트;에;서; 골;조; 공;사;는; 어;떤; 단;계;인;가;?',a:['구;조;물; 뿈;대;','외;부; 마;감;','기;초; 타;설;','설;비; 배;관;'],c:0},
    {q:'ICF 기;초;의 ICF는; 무;엇;을; 의;미;하;는;가;?',a:['Insulated Concrete Form','Internal Core Foundation','Integrated Construction Frame','Insulated Ceramic Fiber'],c:0},
    {q:'옥;상; 정;원;의; 가;장; 큰; 장;점;은;?',a:['단;열;과; 도;시;열;섬; 완;화;','건;축;비;용 절;감;','구;조;물; 강;화;','방;음; 효;과;'],c:0},
    {q:'SIP 패;널;의 주;요; 구;성;은;?',a:['단;열;재; + 구;조;판;','유;리; + 철;근;','목;재; + 벽;돌;','콘;크;리;트; + 스;틸;'],c:0},
    {q:'보;자;기;는; 어;떤; 공;예; 기;법;으;로; 만;드;는;가;?',a:['조;각;보; 패;치;워;크;','도;자;기; 빚;기;','목;공;예; 기;법;','철;근; 용;접;'],c:0},
    {q:'전;통; 한;옥;에;서; 온;돌;의 역;할;은;?',a:['바;닥; 난;방;','벽;체; 장;식;','지;붕; 방;수;','창;문; 단;열;'],c:0},
    {q:'건;축;물; 에;너;지; 효;율;을; 높;이;는; 이;중창;의 주;요; 원;리;는;?',a:['공;기;층; 단;열;','유;리; 반;사;','마;찰; 방;지;','소;음; 차;단;'],c:0},
    {q:'간;트;차;트;에;서 가;로;축;은; 무;엇;을; 나;타;내;는;가;?',a:['시;간;/일;정;','비;용;','자;재;량;','인;력;'],c:0},
    {q:'전;통; 건;축;에;서 귀;갑;문;은; 무;엇;을; 상;징;하;는;가;?',a:['장;수;','재;물;','평;화;','힘;'],c:0},
    {q:'빗;물; 재;활;용; 시;스;템;의 주;요; 용;도;는;?',a:['조;경; 관;수;','음;료;수;','생;활;하;수;','소;방;용;수;'],c:0},
    {q:'지;열; 냉;난;방; 시;스;템;은; 어;디;의 열;을 이;용;하;는;가;?',a:['땅; 속;','태;양;','바;람;','물;'],c:0}
  ];
  return {
    inject: function(){
      if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){
        newQs.forEach(function(q){
          var exists = window.quizQuestions.some(function(eq){ return eq.q===q.q; });
          if(!exists) window.quizQuestions.push(q);
        });
      }
    }
  };
})();

// ── 13. Achievements v15 (+12, 146→158) ──
var v15Achieve = (function(){
  var KEY = 'hb_ach_v15';
  var achs = [
    {id:'green_first',name:'친;환;경; 입;문;',desc:'친;환;경; 건;축; 분;석;기; 처;음; 열;기;',icon:'🌿'},
    {id:'green_gold',name:'녹;색; 골;드;',desc:'친;환;경; 인;증; Gold 등;급; 달;성;',icon:'🏆'},
    {id:'insulate_all',name:'방;음; 전;문;가;',desc:'6가;지; 벽;체; 모;두; 비;교; 완;료;',icon:'🔇'},
    {id:'storage_50',name:'수;납; 마;스;터;',desc:'수;납;공;간; 활;용;률; 50% 달;성;',icon:'📦'},
    {id:'pattern_6',name:'문;양; 탐;험;가;',desc:'전;통; 문;양; 6종; 이;상; 감;상;',icon:'🎨'},
    {id:'pattern_all',name:'단;청; 마;스;터;',desc:'12종; 전;통; 문;양; 모;두 감;상;',icon:'🎨'},
    {id:'gantt_50',name:'공;사; 중;반;',desc:'프;로;젝;트; 전;체; 진;행;률; 50%',icon:'📅'},
    {id:'gantt_complete',name:'준;공;식;',desc:'프;로;젝;트; 전;체; 100% 완;료;',icon:'🎉'},
    {id:'walk_all',name:'집; 탐;험;가;',desc:'VR 워;크;스;루; 8방; 전;부; 방;문;',icon:'🚶'},
    {id:'material_check',name:'자;재; 분;석;가;',desc:'건;축; 자;재; 트;래;커; 처;음; 열;기;',icon:'💰'},
    {id:'cert_first',name:'자;격; 취;득;',desc:'건;축; 자;격;증; 첫; 번;째; 취;득;',icon:'🏅'},
    {id:'v15_explorer',name:'v15 탐;험;가;',desc:'v15 전;체; 8가;지; 기;능; 모;두 열;기;',icon:'⭐'}
  ];
  var unlocked = {};
  function load(){ try{ unlocked = JSON.parse(localStorage.getItem(KEY)) || {}; }catch(e){ unlocked = {}; } }
  function save(){ localStorage.setItem(KEY, JSON.stringify(unlocked)); }
  function unlock(id){
    if(unlocked[id]) return;
    var a = achs.find(function(x){ return x.id===id; });
    if(!a) return;
    unlocked[id] = Date.now();
    save();
    v15SFX.play('achieve_v15');
    if(typeof window.showAchToast === 'function') window.showAchToast(a.icon, a.name);
    else {
      var toast = document.getElementById('achToast');
      if(toast){
        toast.querySelector('.ach-icon').textContent = a.icon;
        toast.querySelector('.ach-name').textContent = a.name;
        toast.classList.add('show');
        setTimeout(function(){ toast.classList.remove('show'); }, 3000);
      }
    }
  }
  function check(){
    if(localStorage.getItem('hb_green_v15')) unlock('green_first');
    try{
      var gs = JSON.parse(localStorage.getItem('hb_green_v15'));
      if(gs){ var t=0; for(var k in gs) t+=gs[k]; if(t>=90) unlock('green_gold'); }
    }catch(e){}
    unlock('insulate_all');
    try{
      var sg = JSON.parse(localStorage.getItem('hb_storage_v15'));
      if(sg){ var used=0,total=144; for(var r=0;r<12;r++) for(var c=0;c<12;c++) if(sg[r]&&sg[r][c]) used++; if(used/total>=0.5) unlock('storage_50'); }
    }catch(e){}
    try{
      var gp = JSON.parse(localStorage.getItem('hb_gantt_v15'));
      if(gp){ var t=0,n=0; for(var k in gp){ t+=gp[k]; n++; } if(n>0&&t/n>=50) unlock('gantt_50'); if(n>=6&&t/n>=100) unlock('gantt_complete'); }
    }catch(e){}
    try{
      var cx = JSON.parse(localStorage.getItem('hb_cert_v15'));
      if(cx){ for(var k in cx) if(cx[k]>=1){ unlock('cert_first'); break; } }
    }catch(e){}
  }
  return { check:check, unlock:unlock, load:load };
})();

// ── 14. Bottom Navigation Bar v15 ──
(function(){
  function inject(){
    var bar = document.createElement('div');
    bar.id = 'v15-nav';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;height:48px;background:linear-gradient(180deg,rgba(45,27,14,.97),rgba(30,18,8,.99));border-top:1px solid rgba(196,149,106,.3);display:flex;align-items:center;justify-content:space-around;z-index:3800;padding:0 4px';
    var actions = [
      {icon:'🌿',label:'친;환;경;',fn:function(){v15Green.open();}},
      {icon:'🏠',label:'방;음;',fn:function(){v15Insulate.open();}},
      {icon:'📦',label:'수;납;',fn:function(){v15Storage.open();}},
      {icon:'🎨',label:'문;양;',fn:function(){v15Pattern.open();}},
      {icon:'📅',label:'간;트;',fn:function(){v15Gantt.open();}},
      {icon:'🚶',label:'탐;험;',fn:function(){v15Walk.open();}},
      {icon:'💰',label:'원;가;',fn:function(){v15Material.open();}},
      {icon:'🏅',label:'자;격;',fn:function(){v15Cert.open();}}
    ];
    actions.forEach(function(a){
      var btn = document.createElement('button');
      btn.style.cssText = 'background:none;border:none;color:#c4956a;font-size:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:4px 2px;font-family:inherit;min-width:0;flex:1';
      btn.innerHTML = '<span style="font-size:18px">'+a.icon+'</span><span>'+a.label+'</span>';
      btn.onclick = a.fn;
      bar.appendChild(btn);
    });
    document.body.appendChild(bar);
    var v14nav = document.getElementById('v14-nav');
    if(v14nav) v14nav.style.bottom = '48px';
    var v13nav = document.getElementById('v13-nav');
    if(v13nav) v13nav.style.bottom = '96px';
    var v12nav = document.getElementById('v12-nav');
    if(v12nav) v12nav.style.bottom = '144px';
    var v11fab = document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom = '198px';
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.code){
      case 'KeyO': e.preventDefault(); v15Green.open(); break;
      case 'KeyP': e.preventDefault(); v15Insulate.open(); break;
      case 'KeyQ': e.preventDefault(); v15Storage.open(); break;
      case 'KeyR': e.preventDefault(); v15Pattern.open(); break;
      case 'KeyS': e.preventDefault(); v15Gantt.open(); break;
      case 'KeyT': e.preventDefault(); v15Walk.open(); break;
      case 'KeyU': e.preventDefault(); v15Material.open(); break;
      case 'KeyV': e.preventDefault(); v15Cert.open(); break;
    }
  });
})();

// ── 16. Panel Close helpers ──
window.v15Close = function(panel){
  var map = {'green':v15Green,'insulate':v15Insulate,'storage':v15Storage,'pattern':v15Pattern,'gantt':v15Gantt,'walkthru':v15Walk,'material':v15Material,'cert':v15Cert};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v15Quiz.inject(); localStorage.setItem('hb_quiz_v15_tried','1'); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v15Hooked) return true;
    window.__v15Hooked = true;
    var prev = window.showComplete;
    window.showComplete = function(){ prev.apply(this,arguments); v15Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 19. Initial load + checks ──
(function(){
  v15Green.load(); v15Storage.load(); v15Gantt.load(); v15Cert.load(); v15Achieve.load();
  setTimeout(function(){ v15Achieve.check(); },4000);
})();

// end v15 guard
}

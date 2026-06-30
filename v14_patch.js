// =====================================================
// House Builder v14.0 Patch
// 건축공법비교분석기Canvas6종4축Radar+부동산감정평가시뮬레이터Canvas8요소
// 스마트홈IoT설계기Canvas12종+건축시간여행뷰어Canvas6시대
// 지붕양식디자인스튜디오Canvas10종단면+건축도전과제랠리6종Timer
// 실내동선분석기Canvas12x12히트맵+건축명언갤러리20선
// 퀴즈+15(135→150)+업적+12(134→146)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV14) {
window.__hbV14 = true;

// ── 1. CSS Injection v14 ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v14-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3800;overflow-y:auto;padding:16px}',
    '.v14-panel.active{display:block}',
    '.v14-box{max-width:720px;margin:40px auto}',
    '.v14-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v14-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v14-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v14-close:hover{background:#d4a57a}',
    '.v14-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v14-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v14-tab:hover,.v14-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v14-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
    '.v14-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v14-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v14-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v14-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v14-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v14-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v14-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v14-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v14-item.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v14-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v14-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v14-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v14-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v14-item.expanded .detail{display:block}',
    '.v14-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v14-btn-sm:hover{background:#d4a57a}',
    '.v14-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v14-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v14-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v14-stat .s{text-align:center}',
    '.v14-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v14-stat .sl{font-size:11px;color:#c4956a}',
    '.v14-heatcell{width:36px;height:36px;border:1px solid rgba(196,149,106,.1);display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(255,255,255,.6);transition:all .15s;cursor:pointer}',
    '.v14-heatcell:hover{border-color:#c4956a}',
    '.v14-quote{background:rgba(196,149,106,.06);border-left:3px solid #c4956a;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:12px;transition:all .2s}',
    '.v14-quote:hover{background:rgba(196,149,106,.12)}',
    '.v14-quote .qt{color:#e8d5c0;font-size:14px;font-style:italic;line-height:1.7;margin-bottom:6px}',
    '.v14-quote .qa{color:#c4956a;font-size:12px;text-align:right}',
    '.v14-timer{font-size:32px;font-weight:700;color:#f5deb3;text-align:center;margin:16px 0;font-variant-numeric:tabular-nums}',
    '.v14-progress{height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;margin:8px 0}',
    '.v14-progress-fill{height:100%;background:linear-gradient(90deg,#c4956a,#f5deb3);border-radius:4px;transition:width .3s}',
    '@media(max-width:600px){.v14-box{margin:16px auto}.v14-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v14-heatcell{width:28px;height:28px;font-size:9px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v14 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v14-panels';
  wrap.innerHTML =
    '<div id="v14-construct" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F3D7;&#xFE0F; &#xAC74;&#xCD95;&#xACF5;&#xBC95; &#xBE44;&#xAD50; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>&#xC804;&#xD1B5;/&#xD604;&#xB300; 6&#xAC00;&#xC9C0; &#xACF5;&#xBC95;&#xC758; &#xAC15;&#xB3C4;/&#xBE44;&#xC6A9;/&#xD658;&#xACBD;/&#xC2DC;&#xAC04; 4&#xCD95; &#xBE44;&#xAD50;</p>' +
      '<div class="v14-tabs" id="v14-const-tabs"></div>' +
      '<canvas id="v14-const-canvas" class="v14-canvas" width="560" height="420"></canvas>' +
      '<div id="v14-const-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v14-close" onclick="v14Construct.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-appraisal" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F3E0; &#xBD80;&#xB3D9;&#xC0B0; &#xAC10;&#xC815;&#xD3C9;&#xAC00; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>8&#xAC00;&#xC9C0; &#xC694;&#xC18C;&#xB85C; &#xAC74;&#xCD95;&#xBB3C; &#xC2DC;&#xC138;&#xB97C; &#xC0B0;&#xC815;&#xD569;&#xB2C8;&#xB2E4;</p>' +
      '<div id="v14-appr-sliders"></div>' +
      '<canvas id="v14-appr-canvas" class="v14-canvas" width="600" height="380"></canvas>' +
      '<div class="v14-stat" id="v14-appr-result"></div>' +
      '<button class="v14-close" onclick="v14Appraisal.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-smarthome" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F4F1; &#xC2A4;&#xB9C8;&#xD2B8;&#xD648; IoT &#xC124;&#xACC4;&#xAE30;</h2>' +
      '<p>12&#xC885; IoT &#xAE30;&#xAE30;&#xB97C; &#xBC30;&#xCE58;&#xD558;&#xACE0; &#xC5F0;&#xB3D9; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;</p>' +
      '<div class="v14-tabs" id="v14-iot-tabs"></div>' +
      '<canvas id="v14-iot-canvas" class="v14-canvas" width="560" height="400"></canvas>' +
      '<div id="v14-iot-status" style="color:#e8d5c0;font-size:12px;text-align:center;margin-top:8px"></div>' +
      '<button class="v14-close" onclick="v14SmartHome.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-timetravel" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x23F3; &#xAC74;&#xCD95; &#xC2DC;&#xAC04;&#xC5EC;&#xD589; &#xBDF0;&#xC5B4;</h2>' +
      '<p>&#xC120;&#xC0AC;&#xC2DC;&#xB300;&#xBD80;&#xD130; &#xD604;&#xB300;&#xAE4C;&#xC9C0; 6&#xC2DC;&#xB300; &#xAC74;&#xCD95; &#xBCC0;&#xCC9C;&#xC0AC;</p>' +
      '<div class="v14-tabs" id="v14-tt-tabs"></div>' +
      '<canvas id="v14-tt-canvas" class="v14-canvas" width="640" height="380"></canvas>' +
      '<div id="v14-tt-desc" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v14-close" onclick="v14TimeTravel.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-roof" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F3E0; &#xC9C0;&#xBD95; &#xC591;&#xC2DD; &#xB514;&#xC790;&#xC778; &#xC2A4;&#xD29C;&#xB514;&#xC624;</h2>' +
      '<p>10&#xC885; &#xD55C;&#xAD6D;/&#xC138;&#xACC4; &#xC9C0;&#xBD95; &#xC591;&#xC2DD; Canvas &#xB2E8;&#xBA74;&#xB3C4;</p>' +
      '<div class="v14-tabs" id="v14-roof-tabs"></div>' +
      '<canvas id="v14-roof-canvas" class="v14-canvas" width="560" height="360"></canvas>' +
      '<div id="v14-roof-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v14-close" onclick="v14Roof.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-challenge" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F3C6; &#xAC74;&#xCD95; &#xB3C4;&#xC804;&#xACFC;&#xC81C; &#xB7A0;&#xB9AC;</h2>' +
      '<p>6&#xC885; &#xC2DC;&#xACF5; &#xBBF8;&#xB2C8;&#xD034;&#xC2A4;&#xD2B8; &#xD0C0;&#xC774;&#xBA38;+&#xC810;&#xC218;</p>' +
      '<div id="v14-challenge-list"></div>' +
      '<canvas id="v14-challenge-canvas" class="v14-canvas" width="560" height="320"></canvas>' +
      '<div class="v14-timer" id="v14-ch-timer">00:00</div>' +
      '<div class="v14-progress"><div class="v14-progress-fill" id="v14-ch-progress"></div></div>' +
      '<div id="v14-ch-status" style="color:#e8d5c0;font-size:12px;text-align:center;margin-top:8px"></div>' +
      '<button class="v14-close" onclick="v14Challenge.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-traffic" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F6B6; &#xC2E4;&#xB0B4; &#xB3D9;&#xC120; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>12x12 &#xD3C9;&#xBA74;&#xB3C4; &#xC704;&#xC5D0; &#xB3D9;&#xC120; &#xD788;&#xD2B8;&#xB9F5; Canvas</p>' +
      '<div class="v14-tabs" id="v14-traffic-tabs"></div>' +
      '<canvas id="v14-traffic-canvas" class="v14-canvas" width="520" height="520"></canvas>' +
      '<div class="v14-stat" id="v14-traffic-stat"></div>' +
      '<button class="v14-close" onclick="v14Traffic.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v14-quotes" class="v14-panel"><div class="v14-box">' +
      '<h2>&#x1F4DC; &#xAC74;&#xCD95; &#xBA85;&#xC5B8; &#xAC24;&#xB7EC;&#xB9AC;</h2>' +
      '<p>&#xC138;&#xACC4;&#xC801; &#xAC74;&#xCD95;&#xAC00;&#xB4E4;&#xC758; &#xBA85;&#xC5B8; 20&#xC120;</p>' +
      '<div id="v14-quotes-list"></div>' +
      '<button class="v14-close" onclick="v14Quotes.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. SFX Engine v14 (+12) ──
var v14SFX = (function(){
  var ctx = null;
  function getCtx(){ if(!ctx) try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return ctx; }
  function play(freq, dur, type, vol){
    if(window.muted) return;
    var c = getCtx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type||'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(vol||0.15, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime+(dur||0.2));
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime+(dur||0.2));
  }
  return {
    construct: function(){ play(523,0.15,'triangle',0.12); setTimeout(function(){play(659,0.12,'triangle',0.1);},80); },
    appraisal: function(){ play(440,0.2,'sine',0.12); setTimeout(function(){play(554,0.15,'sine',0.1);},100); },
    smarthome: function(){ play(880,0.1,'square',0.08); setTimeout(function(){play(1047,0.1,'square',0.06);},60); },
    timetravel: function(){ play(330,0.25,'sine',0.12); setTimeout(function(){play(440,0.2,'sine',0.1);},120); setTimeout(function(){play(554,0.15,'sine',0.08);},240); },
    roof: function(){ play(392,0.15,'triangle',0.12); setTimeout(function(){play(494,0.12,'triangle',0.1);},70); },
    challenge: function(){ play(698,0.12,'sawtooth',0.08); setTimeout(function(){play(880,0.1,'sawtooth',0.07);},60); },
    challengeWin: function(){ play(523,0.15,'sine',0.12); setTimeout(function(){play(659,0.12,'sine',0.1);},100); setTimeout(function(){play(784,0.15,'sine',0.12);},200); },
    traffic: function(){ play(349,0.15,'triangle',0.1); setTimeout(function(){play(440,0.12,'triangle',0.08);},80); },
    quotes: function(){ play(262,0.3,'sine',0.08); },
    achieve: function(){ play(523,0.12,'sine',0.12); setTimeout(function(){play(659,0.1,'sine',0.1);},80); setTimeout(function(){play(784,0.12,'sine',0.12);},160); setTimeout(function(){play(1047,0.15,'sine',0.14);},260); },
    quiz: function(){ play(587,0.12,'triangle',0.1); setTimeout(function(){play(698,0.1,'triangle',0.08);},70); },
    feature: function(){ play(440,0.15,'sine',0.1); setTimeout(function(){play(554,0.12,'sine',0.08);},80); }
  };
})();

// ── 4. Construction Method Comparator (건축공법 비교 분석기) ──
var v14Construct = (function(){
  var methods = [
    {name:'&#xBAA9;&#xAD6C;&#xC870; (&#xC804;&#xD1B5;)',key:'wood',strength:55,cost:65,eco:90,time:40,desc:'&#xB098;&#xBB34; &#xAE30;&#xB465;&#xACFC; &#xBCF4;&#xB85C; &#xC9D3;&#xB294; &#xC804;&#xD1B5; &#xACF5;&#xBC95;. &#xD55C;&#xC625;&#xC758; &#xAE30;&#xBCF8; &#xAD6C;&#xC870;&#xB85C; &#xD1B5;&#xAE30;&#xC131;&#xACFC; &#xC2B5;&#xB3C4; &#xC870;&#xC808;&#xC774; &#xB6F0;&#xC5B4;&#xB098;&#xBA70; &#xC790;&#xC5F0;&#xCE5C;&#xD654;&#xC801;. &#xB0B4;&#xC9C4; &#xC131;&#xB2A5;&#xC740; &#xBCF4;&#xD1B5;.'},
    {name:'&#xC870;&#xC801;&#xC870; (&#xB3CC;/&#xBCBD;&#xB3CC;)',key:'masonry',strength:75,cost:50,eco:60,time:55,desc:'&#xB3CC;&#xC774;&#xB098; &#xBCBD;&#xB3CC;&#xC744; &#xC313;&#xC544; &#xBCBD;&#xCCB4;&#xB97C; &#xB9CC;&#xB4DC;&#xB294; &#xACF5;&#xBC95;. &#xC555;&#xCD95; &#xAC15;&#xB3C4;&#xAC00; &#xB6F0;&#xC5B4;&#xB098;&#xACE0; &#xBC29;&#xD654; &#xC131;&#xB2A5;&#xC774; &#xC88B;&#xC73C;&#xBA70; &#xC720;&#xC9C0;&#xBCF4;&#xC218;&#xAC00; &#xC6A9;&#xC774;.'},
    {name:'&#xD55C;&#xC625;&#xC2DD; (&#xAE30;&#xC640;)',key:'hanok',strength:65,cost:80,eco:85,time:30,desc:'&#xB300;&#xB4E4;&#xBCF4;+&#xACF5;&#xD3EC;+&#xAE30;&#xC640; &#xC870;&#xD569;&#xC758; &#xD55C;&#xAD6D; &#xC804;&#xD1B5; &#xACF5;&#xBC95;. &#xBC30;&#xC0B0;&#xC784;&#xC218; &#xD48D;&#xC218; &#xC6D0;&#xB9AC;&#xB97C; &#xBC18;&#xC601;&#xD558;&#xBA70; &#xC790;&#xC5F0;&#xC18C;&#xC7AC;&#xB97C; &#xC0AC;&#xC6A9;.'},
    {name:'&#xCCA0;&#xADFC;&#xCF58;&#xD06C;&#xB9AC;&#xD2B8; (RC)',key:'rc',strength:95,cost:40,eco:30,time:70,desc:'&#xCCA0;&#xADFC;&#xACFC; &#xCF58;&#xD06C;&#xB9AC;&#xD2B8;&#xB97C; &#xACB0;&#xD569;&#xD55C; &#xD604;&#xB300; &#xACF5;&#xBC95;. &#xB0B4;&#xC9C4;/&#xB0B4;&#xD654; &#xC131;&#xB2A5;&#xC774; &#xC6B0;&#xC218;&#xD558;&#xACE0; &#xB300;&#xADDC;&#xBAA8; &#xAC74;&#xCD95;&#xBB3C;&#xC5D0; &#xC801;&#xD569;.'},
    {name:'&#xCCA0;&#xACE8;&#xAD6C;&#xC870;',key:'steel',strength:90,cost:35,eco:25,time:85,desc:'H&#xBE54;, I&#xBE54; &#xB4F1; &#xAC15;&#xCCA0; &#xBD80;&#xC7AC;&#xB97C; &#xC0AC;&#xC6A9;&#xD55C; &#xACF5;&#xBC95;. &#xB300;&#xACF5;&#xAC04;/&#xACE0;&#xCE35; &#xAC74;&#xCD95;&#xC5D0; &#xC720;&#xB9AC;&#xD558;&#xBA70; &#xC2DC;&#xACF5; &#xC18D;&#xB3C4;&#xAC00; &#xBE60;&#xB984;.'},
    {name:'&#xD639;&#xD569;&#xAD6C;&#xC870; (&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;+&#xBAA9;)',key:'hybrid',strength:80,cost:55,eco:65,time:60,desc:'&#xCF58;&#xD06C;&#xB9AC;&#xD2B8; &#xACE8;&#xC870;&#xC5D0; &#xBAA9;&#xC7AC; &#xB9C8;&#xAC10;&#xC744; &#xACB0;&#xD569;. &#xD604;&#xB300;&#xC801; &#xAD6C;&#xC870; &#xC548;&#xC815;&#xC131;&#xACFC; &#xC804;&#xD1B5;&#xC801; &#xBBF8;&#xAD00;&#xC744; &#xBAA8;&#xB450; &#xCD94;&#xAD6C;.'}
  ];
  var sel = [0,1];
  var KEY = 'hb_v14_construct';
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify({sel:sel})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.sel) sel=d.sel; }catch(e){} }
  function draw(){
    var cv = document.getElementById('v14-const-canvas'); if(!cv) return;
    var c = cv.getContext('2d');
    var W=cv.width, H=cv.height, cx=W/2, cy=H/2+10, R=140;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var axes = ['&#xAC15;&#xB3C4;','&#xBE44;&#xC6A9;&#xD6A8;&#xC728;','&#xD658;&#xACBD;&#xCE5C;&#xD654;','&#xC2DC;&#xACF5;&#xC18D;&#xB3C4;'];
    var angles = axes.map(function(_,i){ return -Math.PI/2 + (2*Math.PI*i/4); });
    for(var lv=1;lv<=4;lv++){
      c.beginPath();
      var r = R*lv/4;
      for(var j=0;j<4;j++){
        var x=cx+r*Math.cos(angles[j]), y=cy+r*Math.sin(angles[j]);
        j===0?c.moveTo(x,y):c.lineTo(x,y);
      }
      c.closePath(); c.strokeStyle='rgba(196,149,106,'+(0.1+lv*0.05)+')'; c.lineWidth=1; c.stroke();
    }
    axes.forEach(function(label,i){
      var x=cx+(R+28)*Math.cos(angles[i]), y=cy+(R+28)*Math.sin(angles[i]);
      c.fillStyle='#c4956a'; c.font='12px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillText(label,x,y);
      c.beginPath(); c.moveTo(cx,cy);
      c.lineTo(cx+R*Math.cos(angles[i]),cy+R*Math.sin(angles[i]));
      c.strokeStyle='rgba(196,149,106,.2)'; c.stroke();
    });
    var colors = ['rgba(196,149,106,0.6)','rgba(74,124,89,0.6)'];
    var fills = ['rgba(196,149,106,0.15)','rgba(74,124,89,0.15)'];
    sel.forEach(function(si,idx){
      var m = methods[si];
      var vals = [m.strength, m.cost, m.eco, m.time];
      c.beginPath();
      vals.forEach(function(v,i){
        var vr = R*v/100;
        var x=cx+vr*Math.cos(angles[i]), y=cy+vr*Math.sin(angles[i]);
        i===0?c.moveTo(x,y):c.lineTo(x,y);
      });
      c.closePath(); c.fillStyle=fills[idx]; c.fill();
      c.strokeStyle=colors[idx]; c.lineWidth=2; c.stroke();
      vals.forEach(function(v,i){
        var vr=R*v/100;
        var x=cx+vr*Math.cos(angles[i]), y=cy+vr*Math.sin(angles[i]);
        c.beginPath(); c.arc(x,y,4,0,Math.PI*2);
        c.fillStyle=colors[idx]; c.fill();
      });
    });
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText(methods[sel[0]].name+' vs '+methods[sel[1]].name, cx, 22);
    sel.forEach(function(si,idx){
      var m=methods[si];
      c.fillStyle=idx===0?'#c4956a':'#4a7c59';
      c.fillRect(W/2-120+idx*130, H-40, 12, 12);
      c.fillStyle='#e8d5c0'; c.font='11px sans-serif'; c.textAlign='left';
      c.fillText(m.name, W/2-105+idx*130, H-30);
    });
  }
  function updateTabs(){
    var ct = document.getElementById('v14-const-tabs'); if(!ct) return;
    ct.innerHTML = '';
    methods.forEach(function(m,i){
      var b = document.createElement('button');
      b.className = 'v14-tab' + (sel.indexOf(i)>=0?' active':'');
      b.textContent = m.name.split(' ')[0];
      b.onclick = function(){
        if(sel.indexOf(i)>=0){
          if(sel.length>1) sel.splice(sel.indexOf(i),1);
        } else {
          if(sel.length>=2) sel.shift();
          sel.push(i);
        }
        save(); updateTabs(); draw();
        var info = document.getElementById('v14-const-info');
        if(info) info.innerHTML = methods[sel[sel.length-1]].desc;
        v14SFX.construct();
      };
      ct.appendChild(b);
    });
  }
  return {
    open: function(){ document.getElementById('v14-construct').classList.add('active'); load(); updateTabs(); draw();
      var info=document.getElementById('v14-const-info'); if(info) info.innerHTML=methods[sel[0]].desc;
      v14SFX.feature(); },
    close: function(){ document.getElementById('v14-construct').classList.remove('active'); },
    load: load
  };
})();

// ── 5. Real Estate Appraisal Simulator (부동산 감정평가) ──
var v14Appraisal = (function(){
  var factors = [
    {name:'&#xC704;&#xCE58; &#xB4F1;&#xAE09;',key:'location',min:1,max:10,val:5,unit:'&#xB4F1;&#xAE09;',desc:'&#xC885;&#xB85C;/&#xBD81;&#xCD0C; &#xC911;&#xC2EC;~&#xC678;&#xACFD;'},
    {name:'&#xB300;&#xC9C0; &#xBA74;&#xC801;',key:'area',min:10,max:200,val:60,unit:'&#xD3C9;',desc:'&#xAC74;&#xCD95; &#xAC00;&#xB2A5; &#xD1A0;&#xC9C0; &#xBA74;&#xC801;'},
    {name:'&#xAC74;&#xCD95; &#xC591;&#xC2DD;',key:'style',min:1,max:6,val:3,unit:'&#xC885;',desc:'1&#xD55C;&#xC625;~6&#xD604;&#xB300;'},
    {name:'&#xAC74;&#xCD95; &#xC5F0;&#xC218;',key:'age',min:0,max:100,val:10,unit:'&#xB144;',desc:'&#xC2E0;&#xCD95;~100&#xB144;'},
    {name:'&#xCEE8;&#xB514;&#xC158;',key:'cond',min:1,max:10,val:7,unit:'&#xC810;',desc:'&#xAC74;&#xBB3C; &#xC0C1;&#xD0DC; (1&#xC704;&#xD5D8;~10&#xC644;&#xBCBD;)'},
    {name:'&#xC8FC;&#xBCC0; &#xD3B8;&#xC758;&#xC2DC;&#xC124;',key:'infra',min:1,max:10,val:5,unit:'&#xC810;',desc:'&#xAD50;&#xD1B5;/&#xD559;&#xAD50;/&#xBCD1;&#xC6D0;/&#xC0C1;&#xAC00;'},
    {name:'&#xC870;&#xB9DD;/&#xC870;&#xACBD;',key:'view',min:1,max:10,val:5,unit:'&#xC810;',desc:'&#xC0B0;/&#xAC15;/&#xB3C4;&#xC2EC; &#xC870;&#xB9DD;&#xAD8C;'},
    {name:'&#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;',key:'energy',min:1,max:7,val:4,unit:'&#xB4F1;&#xAE09;',desc:'1&#xB4F1;&#xAE09;(&#xCD5C;&#xC800;)~7&#xB4F1;&#xAE09;(&#xCD5C;&#xACE0;)'}
  ];
  var KEY = 'hb_v14_appraisal';
  function save(){ try{ var d={}; factors.forEach(function(f){ d[f.key]=f.val; }); localStorage.setItem(KEY,JSON.stringify(d)); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) factors.forEach(function(f){ if(d[f.key]!==undefined) f.val=d[f.key]; }); }catch(e){} }
  function calcPrice(){
    var loc=factors[0].val, area=factors[1].val, style=factors[2].val, age=factors[3].val;
    var cond=factors[4].val, infra=factors[5].val, view=factors[6].val, energy=factors[7].val;
    var base = area * 120;
    base *= (0.5 + loc*0.15);
    var styleM = [1.8, 1.4, 0.8, 1.5, 1.2, 1.0];
    base *= (styleM[style-1]||1.0);
    base *= Math.max(0.3, 1 - age*0.008);
    base *= (0.5 + cond*0.08);
    base *= (0.7 + infra*0.06);
    base *= (0.8 + view*0.04);
    base *= (0.85 + energy*0.04);
    return Math.round(base);
  }
  function grade(price){
    if(price>=30000) return {g:'S',c:'#FFD700'};
    if(price>=20000) return {g:'A',c:'#4a7c59'};
    if(price>=12000) return {g:'B',c:'#c4956a'};
    if(price>=6000) return {g:'C',c:'#888'};
    return {g:'D',c:'#a04040'};
  }
  function drawSliders(){
    var cont = document.getElementById('v14-appr-sliders'); if(!cont) return;
    cont.innerHTML = '';
    factors.forEach(function(f,i){
      var row = document.createElement('div');
      row.className = 'v14-slider-row' in document.createElement('div').classList ? '' : '';
      row.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:10px';
      row.innerHTML = '<label style="width:110px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0">'+f.name+'</label>' +
        '<input type="range" min="'+f.min+'" max="'+f.max+'" value="'+f.val+'" style="flex:1;accent-color:#c4956a" data-idx="'+i+'">' +
        '<span style="width:60px;color:#c4956a;font-size:12px;text-align:center" id="v14-appr-val-'+i+'">'+f.val+f.unit+'</span>';
      cont.appendChild(row);
      row.querySelector('input').addEventListener('input', function(e){
        f.val = parseInt(e.target.value);
        document.getElementById('v14-appr-val-'+i).textContent = f.val+f.unit;
        save(); drawCanvas();
      });
    });
  }
  function drawCanvas(){
    var cv = document.getElementById('v14-appr-canvas'); if(!cv) return;
    var c = cv.getContext('2d');
    var W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var price = calcPrice();
    var gr = grade(price);
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText('&#xAC10;&#xC815;&#xD3C9;&#xAC00; &#xACB0;&#xACFC;', W/2, 30);
    c.font='bold 48px sans-serif'; c.fillStyle=gr.c;
    c.fillText(price.toLocaleString()+'&#xB9CC;&#xC6D0;', W/2, 100);
    c.font='bold 28px sans-serif';
    c.fillText('&#xB4F1;&#xAE09;: '+gr.g, W/2, 145);
    var barY=180, barH=22, maxW=W-100;
    factors.forEach(function(f,i){
      var pct = (f.val-f.min)/(f.max-f.min);
      c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.textAlign='right';
      c.fillText(f.name, 90, barY+i*(barH+8)+14);
      c.fillStyle='rgba(255,255,255,.08)';
      c.fillRect(100, barY+i*(barH+8), maxW-10, barH);
      var grd = c.createLinearGradient(100,0,100+(maxW-10)*pct,0);
      grd.addColorStop(0,'#c4956a'); grd.addColorStop(1,'#f5deb3');
      c.fillStyle=grd;
      c.fillRect(100, barY+i*(barH+8), (maxW-10)*pct, barH);
      c.fillStyle='#fff'; c.font='bold 10px sans-serif'; c.textAlign='left';
      c.fillText(f.val+f.unit, 105+(maxW-10)*pct+4, barY+i*(barH+8)+14);
    });
    var res = document.getElementById('v14-appr-result');
    if(res){
      var styleNames=['&#xD55C;&#xC625;','&#xAE30;&#xC640;&#xC9D1;','&#xCD08;&#xAC00;&#xC9D1;','&#xC11C;&#xC6D0;','&#xC815;&#xC790;','&#xD604;&#xB300;&#xC8FC;&#xD0DD;'];
      res.innerHTML = '<div class="s"><div class="sv">'+price.toLocaleString()+'</div><div class="sl">&#xB9CC;&#xC6D0;</div></div>' +
        '<div class="s"><div class="sv" style="color:'+gr.c+'">'+gr.g+'</div><div class="sl">&#xB4F1;&#xAE09;</div></div>' +
        '<div class="s"><div class="sv">'+factors[1].val+'</div><div class="sl">&#xD3C9;</div></div>' +
        '<div class="s"><div class="sv">'+(styleNames[factors[2].val-1]||'')+'</div><div class="sl">&#xC591;&#xC2DD;</div></div>';
    }
  }
  return {
    open: function(){ document.getElementById('v14-appraisal').classList.add('active'); load(); drawSliders(); drawCanvas(); v14SFX.appraisal(); },
    close: function(){ document.getElementById('v14-appraisal').classList.remove('active'); },
    load: load
  };
})();

// ── 6. Smart Home IoT Designer (스마트홈 IoT 설계기) ──
var v14SmartHome = (function(){
  var devices = [
    {name:'&#xC2A4;&#xB9C8;&#xD2B8; &#xC870;&#xBA85;',icon:'&#x1F4A1;',cat:'&#xC870;&#xBA85;',desc:'&#xC74C;&#xC131;/&#xC790;&#xB3D9; &#xBC1D;&#xAE30;&#xC870;&#xC808;, &#xC0C9;&#xC628;&#xB3C4; &#xBCC0;&#xACBD;',color:'#FFD700'},
    {name:'AI &#xC2A4;&#xD53C;&#xCEE4;',icon:'&#x1F50A;',cat:'&#xC74C;&#xD5A5;',desc:'&#xC74C;&#xC131; &#xC778;&#xC2DD;, &#xC74C;&#xC545; &#xC7AC;&#xC0DD;, &#xAE30;&#xAE30; &#xC81C;&#xC5B4;',color:'#6495ED'},
    {name:'&#xC2A4;&#xB9C8;&#xD2B8; &#xC7A0;&#xAE08;&#xC7A5;&#xCE58;',icon:'&#x1F512;',cat:'&#xBCF4;&#xC548;',desc:'&#xC9C0;&#xBB38;/&#xBE44;&#xBC00;&#xBC88;&#xD638;/NFC &#xC7A0;&#xAE08;&#xD574;&#xC81C;',color:'#DC143C'},
    {name:'&#xC628;&#xB3C4;&#xC870;&#xC808;&#xAE30;',icon:'&#x1F321;',cat:'&#xD658;&#xACBD;',desc:'&#xC6D0;&#xACA9; &#xC628;&#xB3C4;/&#xC2B5;&#xB3C4; &#xC124;&#xC815;, &#xC608;&#xC57D;',color:'#FF6347'},
    {name:'&#xBB34;&#xC120; CCTV',icon:'&#x1F4F7;',cat:'&#xBCF4;&#xC548;',desc:'&#xC2E4;&#xC2DC;&#xAC04; &#xBAA8;&#xB2C8;&#xD130;&#xB9C1;, &#xC6C0;&#xC9C1;&#xC784; &#xAC10;&#xC9C0;',color:'#708090'},
    {name:'&#xB85C;&#xBD07; &#xCCAD;&#xC18C;&#xAE30;',icon:'&#x1F9F9;',cat:'&#xD3B8;&#xC758;',desc:'&#xC790;&#xB3D9; &#xCCAD;&#xC18C;, &#xC608;&#xC57D;, &#xC601;&#xC5ED; &#xC124;&#xC815;',color:'#32CD32'},
    {name:'&#xC2A4;&#xB9C8;&#xD2B8; &#xBE14;&#xB77C;&#xC778;&#xB4DC;',icon:'&#x1FA9F;',cat:'&#xD658;&#xACBD;',desc:'&#xC790;&#xB3D9;/&#xC74C;&#xC131; &#xAC1C;&#xD3D0;, &#xD0C0;&#xC774;&#xBA38;',color:'#DDA0DD'},
    {name:'&#xC2A4;&#xB9C8;&#xD2B8; &#xD50C;&#xB7EC;&#xADF8;',icon:'&#x1F50C;',cat:'&#xC5D0;&#xB108;&#xC9C0;',desc:'&#xC6D0;&#xACA9; &#xC804;&#xC6D0; ON/OFF, &#xC804;&#xB825;&#xB7C9; &#xBAA8;&#xB2C8;&#xD130;&#xB9C1;',color:'#FFA500'},
    {name:'&#xACF5;&#xAE30;&#xCCAD;&#xC815;&#xAE30;',icon:'&#x1F32C;',cat:'&#xD658;&#xACBD;',desc:'&#xBBF8;&#xC138;&#xBA3C;&#xC9C0;/CO2 &#xAC10;&#xC9C0;, &#xC790;&#xB3D9; &#xAC00;&#xB3D9;',color:'#87CEEB'},
    {name:'&#xC2A4;&#xB9C8;&#xD2B8; &#xB0C9;&#xC7A5;&#xACE0;',icon:'&#x1F9CA;',cat:'&#xD3B8;&#xC758;',desc:'&#xC2DD;&#xD488; &#xAD00;&#xB9AC;, &#xC720;&#xD1B5;&#xAE30;&#xD55C; &#xC54C;&#xB9BC;',color:'#ADD8E6'},
    {name:'&#xC6CC;&#xD130; &#xC13C;&#xC11C;',icon:'&#x1F4A7;',cat:'&#xC548;&#xC804;',desc:'&#xB204;&#xC218; &#xAC10;&#xC9C0;, &#xC2A4;&#xB9C8;&#xD2B8; &#xBC38;&#xBE0C; &#xC790;&#xB3D9; &#xCC28;&#xB2E8;',color:'#4169E1'},
    {name:'&#xC2A4;&#xB9C8;&#xD2B8; &#xBBF8;&#xB7EC;',icon:'&#x1FA9E;',cat:'&#xD3B8;&#xC758;',desc:'&#xB0A0;&#xC528;/&#xC77C;&#xC815;/&#xAC74;&#xAC15;&#xC815;&#xBCF4; &#xD45C;&#xC2DC;',color:'#C0C0C0'}
  ];
  var placed = [];
  var KEY = 'hb_v14_smarthome';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({placed:placed})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.placed) placed=d.placed; }catch(e){} }
  function updateTabs(){
    var ct=document.getElementById('v14-iot-tabs'); if(!ct) return;
    ct.innerHTML='';
    devices.forEach(function(d,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(placed.indexOf(i)>=0?' active':'');
      b.textContent=d.icon+' '+d.name;
      b.onclick=function(){
        if(placed.indexOf(i)>=0) placed.splice(placed.indexOf(i),1);
        else placed.push(i);
        save(); updateTabs(); draw();
        v14SFX.smarthome();
      };
      ct.appendChild(b);
    });
  }
  function draw(){
    var cv=document.getElementById('v14-iot-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=2;
    c.strokeRect(80,60,W-160,H-120);
    c.strokeRect(80+30,60+30,W-160-60,H-120-60);
    c.fillStyle='rgba(196,149,106,.05)';
    c.fillRect(80,60,W-160,H-120);
    c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.textAlign='center';
    c.fillText('&#xAC70;&#xC2E4;',W/2-60,H/2-40);
    c.fillText('&#xBC29;',W/2+80,H/2-60);
    c.fillText('&#xC8FC;&#xBC29;',W/2-80,H/2+50);
    c.fillText('&#xD654;&#xC7A5;&#xC2E4;',W/2+70,H/2+60);
    c.strokeStyle='rgba(196,149,106,.15)'; c.lineWidth=1;
    c.beginPath(); c.moveTo(W/2,60); c.lineTo(W/2,H-60); c.stroke();
    c.beginPath(); c.moveTo(80,H/2); c.lineTo(W-80,H/2); c.stroke();
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif';
    c.fillText('&#xC2A4;&#xB9C8;&#xD2B8;&#xD648; IoT &#xBC30;&#xCE58;&#xB3C4;', W/2, 30);
    if(placed.length===0){
      c.fillStyle='rgba(196,149,106,.4)'; c.font='13px sans-serif';
      c.fillText('&#xC704; &#xBC84;&#xD2BC;&#xC744; &#xB20C;&#xB7EC; &#xAE30;&#xAE30;&#xB97C; &#xBC30;&#xCE58;&#xD558;&#xC138;&#xC694;', W/2, H/2);
    }
    var positions = [
      {x:140,y:120},{x:W-140,y:120},{x:140,y:H-120},{x:W-140,y:H-120},
      {x:W/2,y:100},{x:W/2,y:H-100},{x:120,y:H/2},{x:W-120,y:H/2},
      {x:W/2-70,y:H/2-30},{x:W/2+70,y:H/2-30},{x:W/2-70,y:H/2+30},{x:W/2+70,y:H/2+30}
    ];
    placed.forEach(function(di,i){
      var d=devices[di], pos=positions[i%positions.length];
      c.beginPath(); c.arc(pos.x,pos.y,22,0,Math.PI*2);
      c.fillStyle='rgba(0,0,0,.5)'; c.fill();
      c.strokeStyle=d.color; c.lineWidth=2; c.stroke();
      c.font='20px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillStyle='#fff'; c.fillText(d.icon,pos.x,pos.y);
      c.font='9px sans-serif'; c.fillStyle=d.color; c.textBaseline='top';
      c.fillText(d.name.substring(0,6),pos.x,pos.y+26);
    });
    if(placed.length>=2){
      c.strokeStyle='rgba(196,149,106,.2)'; c.lineWidth=1; c.setLineDash([4,4]);
      for(var i=0;i<placed.length-1;i++){
        var p1=positions[i%positions.length], p2=positions[(i+1)%positions.length];
        c.beginPath(); c.moveTo(p1.x,p1.y); c.lineTo(p2.x,p2.y); c.stroke();
      }
      c.setLineDash([]);
    }
    var cats={}; placed.forEach(function(di){ var d=devices[di]; cats[d.cat]=(cats[d.cat]||0)+1; });
    var status = document.getElementById('v14-iot-status');
    if(status) status.innerHTML = '&#xBC30;&#xCE58;: '+placed.length+'/12&#xAE30;&#xAE30; | &#xCE74;&#xD14C;&#xACE0;&#xB9AC;: '+Object.keys(cats).join(', ');
  }
  return {
    open: function(){ document.getElementById('v14-smarthome').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-smarthome').classList.remove('active'); },
    load: load
  };
})();

// ── 7. Architecture Time Travel Viewer (건축 시간여행 뷰어) ──
var v14TimeTravel = (function(){
  var eras = [
    {name:'&#xC120;&#xC0AC;&#xC2DC;&#xB300;',period:'~BC 2333',buildings:['&#xBC18;&#xC9C0;&#xD558;&#xC2DD; &#xC6C0;&#xC9D1;','&#xBE57;&#xC0B4;&#xBB34;&#xB2C8;&#xD1A0;&#xAE30; &#xC8FC;&#xAC70;'],desc:'&#xB545;&#xC744; &#xD30C;&#xACE0; &#xAE30;&#xB465;&#xC744; &#xC138;&#xC6CC; &#xC9C0;&#xBD95;&#xC744; &#xC5B9;&#xC740; &#xC6C0;&#xC9D1;. &#xBD88;&#xC744; &#xC911;&#xC559;&#xC5D0; &#xD53C;&#xC6B0;&#xACE0; &#xC9DA;&#xC73C;&#xB85C; &#xBC14;&#xB2E5;&#xC744; &#xAE54;&#xC558;&#xB2E4;.',color:'#8B7355'},
    {name:'&#xC0BC;&#xAD6D;&#xC2DC;&#xB300;',period:'BC 57~668',buildings:['&#xACE0;&#xAD6C;&#xB824; &#xC548;&#xD559;&#xAD81;','&#xBC31;&#xC81C; &#xBBF8;&#xB959;&#xC0AC;','&#xC2E0;&#xB77C; &#xCCA8;&#xC131;&#xB300;'],desc:'&#xAD81;&#xC804;/&#xC0AC;&#xCC30;/&#xC131;&#xACE0; &#xAC74;&#xCD95;&#xC774; &#xBC1C;&#xB2EC;. &#xBAA9;&#xAD6C;&#xC870;+&#xAE30;&#xC640; &#xC9C0;&#xBD95;&#xC758; &#xC6D0;&#xD615;&#xC774; &#xD655;&#xB9BD;&#xB418;&#xACE0; &#xBD88;&#xAD50; &#xAC74;&#xCD95;&#xC774; &#xBC88;&#xC131;.',color:'#CD853F'},
    {name:'&#xD1B5;&#xC77C;&#xC2E0;&#xB77C;/&#xBC1C;&#xD574;',period:'668~935',buildings:['&#xBD88;&#xAD6D;&#xC0AC;','&#xC11D;&#xAD74;&#xC554;','&#xBC1C;&#xD574; &#xC0C1;&#xACBD;&#xC131;'],desc:'&#xBD88;&#xAD50; &#xAC74;&#xCD95;&#xC758; &#xC808;&#xC815;&#xAE30;. &#xC11D;&#xAD74;&#xC554;&#xC758; &#xC778;&#xACF5; &#xC11D;&#xAD74;&#xACFC; &#xBD88;&#xAD6D;&#xC0AC;&#xC758; &#xBAA9;&#xC870; &#xAC74;&#xCD95;&#xC740; &#xC138;&#xACC4;&#xC801; &#xAC78;&#xC791;.',color:'#DAA520'},
    {name:'&#xACE0;&#xB824;&#xC2DC;&#xB300;',period:'918~1392',buildings:['&#xAC1C;&#xC131; &#xB9CC;&#xC6D4;&#xB300;','&#xBD80;&#xC11D;&#xC0AC; &#xBB34;&#xB7C9;&#xC218;&#xC804;','&#xD574;&#xC778;&#xC0AC; &#xC7A5;&#xACBD;&#xD310;&#xC804;'],desc:'&#xACE0;&#xB824;&#xCCAD;&#xC790;&#xCC98;&#xB7FC; &#xC138;&#xB828;&#xB41C; &#xBBF8;&#xAC10;&#xC758; &#xAC74;&#xCD95;. &#xD314;&#xB9CC;&#xB300;&#xC7A5;&#xACBD;&#xC744; &#xBCF4;&#xAD00;&#xD558;&#xB294; &#xD574;&#xC778;&#xC0AC;&#xB294; &#xACE0;&#xB824; &#xAC74;&#xCD95;&#xC758; &#xBC31;&#xBBF8;.',color:'#B8860B'},
    {name:'&#xC870;&#xC120;&#xC2DC;&#xB300;',period:'1392~1897',buildings:['&#xACBD;&#xBCF5;&#xAD81;','&#xC218;&#xC6D0;&#xD654;&#xC131;','&#xC885;&#xBB18;','&#xC548;&#xB3D9; &#xD558;&#xD68C;&#xB9C8;&#xC744;'],desc:'&#xC720;&#xAD50; &#xC774;&#xB150;&#xC758; &#xAC74;&#xCD95;. &#xACBD;&#xBCF5;&#xAD81;&#xC758; &#xC7A5;&#xC5C4;&#xD55C; &#xAD81;&#xC804;, &#xC218;&#xC6D0;&#xD654;&#xC131;&#xC758; &#xACFC;&#xD559;&#xC801; &#xC124;&#xACC4;, &#xC591;&#xBC18; &#xD55C;&#xC625;&#xC758; &#xC815;&#xC81C;&#xBBF8;.',color:'#A0522D'},
    {name:'&#xADFC;&#xD604;&#xB300;',period:'1897~&#xD604;&#xC7AC;',buildings:['&#xB355;&#xC218;&#xAD81;','&#xC11C;&#xC6B8;&#xC5ED;(&#xAD6C;)','N&#xC11C;&#xC6B8;&#xD0C0;&#xC6CC;','&#xB3D9;&#xB300;&#xBB38;&#xB514;&#xC790;&#xC778;&#xD50C;&#xB77C;&#xC790;'],desc:'&#xC11C;&#xC591; &#xAC74;&#xCD95; &#xB3C4;&#xC785;&#xBD80;&#xD130; &#xD604;&#xB300; &#xCCA0;&#xADFC;&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;/&#xCCA0;&#xACE8; &#xAC74;&#xCD95;&#xAE4C;&#xC9C0;. &#xD55C;&#xC625;&#xC758; &#xD604;&#xB300;&#xC801; &#xC7AC;&#xD574;&#xC11D;&#xB3C4; &#xD65C;&#xBC1C;.',color:'#8B4513'}
  ];
  var cur = 0;
  var KEY = 'hb_v14_timetravel';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({cur:cur})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) cur=d.cur||0; }catch(e){} }
  function updateTabs(){
    var ct=document.getElementById('v14-tt-tabs'); if(!ct) return;
    ct.innerHTML='';
    eras.forEach(function(e,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(i===cur?' active':'');
      b.textContent=e.name;
      b.onclick=function(){ cur=i; save(); updateTabs(); draw(); v14SFX.timetravel(); };
      ct.appendChild(b);
    });
  }
  function draw(){
    var cv=document.getElementById('v14-tt-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var era = eras[cur];
    c.fillStyle='#f5deb3'; c.font='bold 18px sans-serif'; c.textAlign='center';
    c.fillText(era.name+' ('+era.period+')', W/2, 30);
    var tlY=60, tlH=20;
    eras.forEach(function(e,i){
      var x=40+(W-80)*i/(eras.length-1);
      c.beginPath(); c.arc(x,tlY,i===cur?10:6,0,Math.PI*2);
      c.fillStyle=i===cur?e.color:'rgba(196,149,106,.3)'; c.fill();
      if(i<eras.length-1){
        var nx=40+(W-80)*(i+1)/(eras.length-1);
        c.beginPath(); c.moveTo(x+10,tlY); c.lineTo(nx-10,tlY);
        c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=2; c.stroke();
      }
    });
    var groundY = H-80;
    c.fillStyle='rgba(139,115,85,.3)';
    c.fillRect(0, groundY, W, H-groundY);
    c.strokeStyle=era.color; c.lineWidth=2;
    if(cur===0){
      c.beginPath(); c.arc(W/2,groundY,0,0,Math.PI*2);
      c.fillStyle='rgba(139,115,85,.5)';
      c.ellipse(W/2, groundY, 100, 30, 0, 0, Math.PI*2);
      c.fill();
      c.beginPath(); c.moveTo(W/2-80,groundY-10);
      c.lineTo(W/2,groundY-80); c.lineTo(W/2+80,groundY-10);
      c.strokeStyle=era.color; c.stroke();
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('&#xBC18;&#xC9C0;&#xD558;&#xC2DD; &#xC6C0;&#xC9D1;',W/2,groundY-90);
    } else if(cur===1){
      c.fillStyle='rgba(205,133,63,.2)';
      c.fillRect(W/2-70,groundY-120,140,120);
      c.strokeStyle=era.color; c.strokeRect(W/2-70,groundY-120,140,120);
      c.beginPath(); c.moveTo(W/2-90,groundY-120);
      c.lineTo(W/2,groundY-180); c.lineTo(W/2+90,groundY-120);
      c.fillStyle='rgba(205,133,63,.4)'; c.fill(); c.stroke();
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('&#xC0BC;&#xAD6D; &#xAD81;&#xC804;',W/2,groundY-190);
    } else if(cur===2){
      c.fillStyle='rgba(218,165,32,.15)';
      c.beginPath(); c.arc(W/2,groundY-60,70,0,Math.PI*2); c.fill();
      c.strokeStyle=era.color; c.beginPath(); c.arc(W/2,groundY-60,70,0,Math.PI*2); c.stroke();
      c.beginPath(); c.arc(W/2,groundY-60,50,0,Math.PI*2); c.stroke();
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('&#xC11D;&#xAD74;&#xC554;',W/2,groundY-140);
    } else if(cur===3){
      for(var i=0;i<3;i++){
        c.fillStyle='rgba(184,134,11,'+(0.15+i*0.05)+')';
        c.fillRect(W/2-90+i*50,groundY-100+i*15,60,100-i*15);
        c.strokeStyle=era.color; c.strokeRect(W/2-90+i*50,groundY-100+i*15,60,100-i*15);
      }
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('&#xACE0;&#xB824; &#xC0AC;&#xCC30;',W/2,groundY-110);
    } else if(cur===4){
      c.fillStyle='rgba(160,82,45,.2)';
      c.fillRect(W/2-100,groundY-130,200,130);
      c.strokeRect(W/2-100,groundY-130,200,130);
      c.beginPath();
      c.moveTo(W/2-120,groundY-130); c.lineTo(W/2-100,groundY-160);
      c.lineTo(W/2,groundY-180); c.lineTo(W/2+100,groundY-160);
      c.lineTo(W/2+120,groundY-130);
      c.fillStyle='rgba(160,82,45,.35)'; c.fill();
      c.strokeStyle=era.color; c.stroke();
      for(var j=0;j<4;j++){
        c.strokeRect(W/2-80+j*45,groundY-100,30,40);
      }
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('&#xACBD;&#xBCF5;&#xAD81;',W/2,groundY-190);
    } else {
      c.fillStyle='rgba(139,69,19,.15)';
      c.fillRect(W/2-60,groundY-160,120,160);
      c.strokeRect(W/2-60,groundY-160,120,160);
      for(var k=0;k<8;k++){
        c.strokeStyle='rgba(139,69,19,.3)';
        c.strokeRect(W/2-50,groundY-150+k*18,40,14);
        c.strokeRect(W/2+10,groundY-150+k*18,40,14);
      }
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('&#xD604;&#xB300; &#xAC74;&#xCD95;',W/2,groundY-170);
    }
    era.buildings.forEach(function(b,i){
      c.fillStyle='rgba(196,149,106,.6)'; c.font='11px sans-serif'; c.textAlign='left';
      c.fillText('&#x2022; '+b, 40, H-50+i*16);
    });
    var desc=document.getElementById('v14-tt-desc');
    if(desc) desc.innerHTML = era.desc;
  }
  return {
    open: function(){ document.getElementById('v14-timetravel').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-timetravel').classList.remove('active'); },
    load: load
  };
})();

// ── 8. Roof Style Design Studio (지붕 양식 디자인 스튜디오) ──
var v14Roof = (function(){
  var roofs = [
    {name:'&#xB9DE;&#xBC30;&#xC9C0;&#xBD95;',desc:'&#xD55C;&#xC625;&#xC758; &#xAE30;&#xBCF8;. &#xB450; &#xBA74;&#xC774; &#xB9CC;&#xB098;&#xB294; &#xBC15;&#xACF5;&#xC9C0;&#xBD95;. &#xBE44;&#xB97C; &#xC591;&#xCABD;&#xC73C;&#xB85C; &#xD758;&#xB824;&#xBCF4;&#xB0B4;&#xB294; &#xB2E8;&#xC21C;&#xD558;&#xACE0; &#xC544;&#xB984;&#xB2E4;&#xC6B4; &#xD615;&#xD0DC;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx,y-w*0.6); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'&#xD314;&#xC791;&#xC9C0;&#xBD95;',desc:'&#xC870;&#xC120; &#xAD81;&#xC804;&#xC758; &#xB300;&#xD45C;&#xC801; &#xC9C0;&#xBD95;. 8&#xAC1C;&#xC758; &#xBA74;&#xACFC; &#xCD94;&#xB140; &#xACE1;&#xC120;&#xC774; &#xC7A5;&#xC5C4;&#xD558;&#xACE0; &#xC6B0;&#xC544;&#xD55C; &#xBBF8;&#xAC10;&#xC744; &#xC790;&#xC544;&#xB0B8;&#xB2E4;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.7,y-w*0.3);
      c.lineTo(cx-w*0.3,y-w*0.55); c.lineTo(cx,y-w*0.7);
      c.lineTo(cx+w*0.3,y-w*0.55); c.lineTo(cx+w*0.7,y-w*0.3);
      c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'&#xCD08;&#xAC00;&#xC9C0;&#xBD95;',desc:'&#xBF98;&#xB85C; &#xB36E;&#xC740; &#xD3C9;&#xBBFC; &#xC8FC;&#xAC70;. &#xB2E8;&#xC5F4;&#xC131;&#xC774; &#xB6F0;&#xC5B4;&#xB098;&#xACE0; &#xC790;&#xC5F0; &#xC18C;&#xC7AC;&#xB85C; &#xBCC4;&#xB3C4; &#xBE44;&#xC6A9; &#xC5C6;&#xC774; &#xC720;&#xC9C0;&#xBCF4;&#xC218; &#xAC00;&#xB2A5;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y);
      c.quadraticCurveTo(cx-w*0.5,y-w*0.7,cx,y-w*0.5);
      c.quadraticCurveTo(cx+w*0.5,y-w*0.7,cx+w,y); c.closePath();
    }},
    {name:'&#xBAA8;&#xC784;&#xC9C0;&#xBD95;',desc:'&#xC0AC;&#xBC29;&#xC73C;&#xB85C; &#xBE44;&#xB97C; &#xD758;&#xB824;&#xBCF4;&#xB0B4;&#xB294; &#xC9C0;&#xBD95;. &#xBC14;&#xB78C; &#xC800;&#xD56D;&#xC774; &#xC801;&#xACE0; &#xC678;&#xAD00;&#xC774; &#xC548;&#xC815;&#xC801;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.4,y-w*0.6);
      c.lineTo(cx+w*0.4,y-w*0.6); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'&#xC6B0;&#xC9C4;&#xAC01;&#xC9C0;&#xBD95;',desc:'&#xC11C;&#xC6D0;/&#xC0AC;&#xCC30;&#xC5D0;&#xC11C; &#xBCFC; &#xC218; &#xC788;&#xB294; &#xC720;&#xB824;&#xD55C; &#xACE1;&#xC120;&#xBBF8;. &#xCD94;&#xB155;&#xAC00; &#xC704;&#xB85C; &#xC0B4;&#xC9DD; &#xD718;&#xC5B4;&#xC9C0;&#xB294; &#xD2B9;&#xC9D5;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w*1.1,y);
      c.quadraticCurveTo(cx-w*0.3,y-w*0.3,cx,y-w*0.65);
      c.quadraticCurveTo(cx+w*0.3,y-w*0.3,cx+w*1.1,y); c.closePath();
    }},
    {name:'&#xD3C9;&#xC9C0;&#xBD95;',desc:'&#xD604;&#xB300; &#xAC74;&#xCD95;&#xC758; &#xB300;&#xD45C;. &#xC625;&#xC0C1; &#xC815;&#xC6D0;&#xC774;&#xB098; &#xD0DC;&#xC591;&#xAD11; &#xD328;&#xB110; &#xC124;&#xCE58;&#xC5D0; &#xC720;&#xB9AC;&#xD558;&#xBA70; &#xBBF8;&#xB2C8;&#xBA40;&#xD55C; &#xB514;&#xC790;&#xC778;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w,y-w*0.1);
      c.lineTo(cx+w,y-w*0.1); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'&#xBC18;&#xD314;&#xC791;&#xC9C0;&#xBD95;',desc:'&#xC815;&#xC790;/&#xB204;&#xAC01;&#xC5D0; &#xC0AC;&#xC6A9;. &#xD314;&#xC791;&#xC758; &#xBC18;&#xB9CC; &#xC788;&#xB294; &#xAC00;&#xBCBC;&#xC6B4; &#xD615;&#xD0DC;&#xB85C; &#xAC1C;&#xBC29;&#xAC10;&#xC774; &#xC788;&#xB2E4;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.5,y-w*0.5);
      c.lineTo(cx+w*0.5,y-w*0.5); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'&#xB9E8;&#xC0AC;&#xB4DC;&#xC9C0;&#xBD95;',desc:'&#xD504;&#xB791;&#xC2A4;&#xC2DD;. &#xACBD;&#xC0AC;&#xAC00; &#xAE09;&#xD55C; &#xBCC0;&#xC73C;&#xB85C; &#xB2E4;&#xB77D;&#xBC29;&#xC744; &#xB9CC;&#xB4E4;&#xAE30; &#xC88B;&#xACE0; &#xB514;&#xC790;&#xC778;&#xC774; &#xB3C5;&#xD2B9;&#xD558;&#xB2E4;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w,y-w*0.3);
      c.lineTo(cx-w*0.3,y-w*0.7); c.lineTo(cx+w*0.3,y-w*0.7);
      c.lineTo(cx+w,y-w*0.3); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'&#xBC84;&#xD130;&#xD50C;&#xB77C;&#xC774;&#xC9C0;&#xBD95;',desc:'&#xB098;&#xBE44; &#xB0A0;&#xAC1C; &#xBAA8;&#xC591;. &#xD604;&#xB300; &#xD55C;&#xC625;&#xC5D0;&#xC11C; &#xC885;&#xC885; &#xC0AC;&#xC6A9;&#xB418;&#xBA70; &#xBE44;&#xB97C; &#xC591;&#xCABD;&#xC73C;&#xB85C; &#xD758;&#xB9AC;&#xBA74;&#xC11C; &#xACE1;&#xC120;&#xBBF8;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w*1.2,y);
      c.quadraticCurveTo(cx,y-w*0.9,cx+w*1.2,y); c.closePath();
    }},
    {name:'&#xBCF5;&#xD569;&#xC9C0;&#xBD95;',desc:'&#xC5EC;&#xB7EC; &#xC591;&#xC2DD;&#xC744; &#xACB0;&#xD569;&#xD55C; &#xD604;&#xB300;&#xC801; &#xC9C0;&#xBD95;. &#xAC74;&#xBB3C;&#xC758; &#xAC1C;&#xC131;&#xC744; &#xC0B4;&#xB9AC;&#xBA70; &#xB2E4;&#xC591;&#xD55C; &#xACF5;&#xAC04;&#xC744; &#xB9CC;&#xB4E4; &#xC218; &#xC788;&#xB2E4;.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.5,y-w*0.5);
      c.lineTo(cx,y-w*0.3); c.lineTo(cx+w*0.3,y-w*0.65);
      c.lineTo(cx+w,y); c.closePath();
    }}
  ];
  var cur = 0;
  var KEY = 'hb_v14_roof';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({cur:cur})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) cur=d.cur||0; }catch(e){} }
  function updateTabs(){
    var ct=document.getElementById('v14-roof-tabs'); if(!ct) return;
    ct.innerHTML='';
    roofs.forEach(function(r,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(i===cur?' active':'');
      b.textContent=r.name;
      b.onclick=function(){ cur=i; save(); updateTabs(); draw(); v14SFX.roof(); };
      ct.appendChild(b);
    });
  }
  function draw(){
    var cv=document.getElementById('v14-roof-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var r = roofs[cur];
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText(r.name, W/2, 28);
    var wallY=H-100, wallH=100, wallW=200;
    c.fillStyle='rgba(245,222,179,.15)';
    c.fillRect(W/2-wallW/2, wallY-wallH, wallW, wallH);
    c.strokeStyle='rgba(196,149,106,.4)'; c.lineWidth=1;
    c.strokeRect(W/2-wallW/2, wallY-wallH, wallW, wallH);
    c.strokeRect(W/2-30, wallY-70, 25, 30);
    c.strokeRect(W/2+10, wallY-70, 25, 30);
    c.strokeRect(W/2-15, wallY-50, 30, 50);
    c.save();
    r.draw(c, W/2, wallY-wallH, wallW/2+20);
    var grd = c.createLinearGradient(0,wallY-wallH-120,0,wallY-wallH);
    grd.addColorStop(0,'rgba(196,149,106,.4)');
    grd.addColorStop(1,'rgba(196,149,106,.15)');
    c.fillStyle=grd; c.fill();
    c.strokeStyle='#c4956a'; c.lineWidth=2; c.stroke();
    c.restore();
    c.fillStyle='rgba(196,149,106,.6)'; c.fillRect(0, wallY, W, H-wallY);
    c.fillStyle='rgba(196,149,106,.15)';
    var sW=80;
    roofs.forEach(function(rf,i){
      if(i===cur) return;
      var sx = 30 + (i%5)*(sW+12);
      var sy = 55 + Math.floor(i/5)*60;
      c.save();
      rf.draw(c, sx+sW/2, sy+30, sW/2-5);
      c.fillStyle='rgba(196,149,106,.08)'; c.fill();
      c.strokeStyle='rgba(196,149,106,.2)'; c.lineWidth=1; c.stroke();
      c.restore();
      c.fillStyle='rgba(196,149,106,.5)'; c.font='9px sans-serif'; c.textAlign='center';
      c.fillText(rf.name, sx+sW/2, sy+48);
    });
    var info=document.getElementById('v14-roof-info');
    if(info) info.innerHTML = r.desc;
  }
  return {
    open: function(){ document.getElementById('v14-roof').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-roof').classList.remove('active'); },
    load: load
  };
})();

// ── 9. Architecture Challenge Rally (건축 도전과제 랠리) ──
var v14Challenge = (function(){
  var challenges = [
    {name:'&#xBCBD; &#xC313;&#xAE30; &#xC2A4;&#xD504;&#xB9B0;&#xD2B8;',desc:'30&#xCD08; &#xC548;&#xC5D0; 20&#xAC1C; &#xBCBD;&#xB3CC; &#xC313;&#xAE30;',time:30,target:20,unit:'&#xAC1C;'},
    {name:'&#xAE30;&#xC640; &#xC62C;&#xB9AC;&#xAE30;',desc:'45&#xCD08; &#xC548;&#xC5D0; 15&#xC7A5; &#xAE30;&#xC640; &#xBC30;&#xCE58;',time:45,target:15,unit:'&#xC7A5;'},
    {name:'&#xC624;&#xB1CC; &#xC624;&#xB974;&#xAE30;',desc:'60&#xCD08; &#xC548;&#xC5D0; 3&#xCE35; &#xACE8;&#xC870; &#xC644;&#xC131;',time:60,target:3,unit:'&#xCE35;'},
    {name:'&#xCC3D;&#xBB38; &#xB2EC;&#xAE30;',desc:'40&#xCD08; &#xC548;&#xC5D0; 12&#xAC1C; &#xCC3D;&#xBB38; &#xC124;&#xCE58;',time:40,target:12,unit:'&#xAC1C;'},
    {name:'&#xC815;&#xC6D0; &#xAFB8;&#xBBF8;&#xAE30;',desc:'50&#xCD08; &#xC548;&#xC5D0; 10&#xAC1C; &#xC870;&#xACBD;&#xC694;&#xC18C; &#xBC30;&#xCE58;',time:50,target:10,unit:'&#xAC1C;'},
    {name:'&#xC804;&#xCCB4; &#xC644;&#xACF5;',desc:'90&#xCD08; &#xC548;&#xC5D0; &#xBC29;+&#xC9C0;&#xBD95;+&#xAC00;&#xAD6C; &#xC804;&#xCCB4; &#xC644;&#xC131;',time:90,target:1,unit:'&#xCC44;'}
  ];
  var scores = {};
  var timer = null, curCh = -1, remaining = 0, progress = 0;
  var KEY = 'hb_v14_challenge';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({scores:scores})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.scores) scores=d.scores; }catch(e){} }
  function renderList(){
    var cont=document.getElementById('v14-challenge-list'); if(!cont) return;
    cont.innerHTML='';
    challenges.forEach(function(ch,i){
      var best = scores[i] || 0;
      var div=document.createElement('div');
      div.className='v14-item'+(best>=ch.target?' done':'');
      div.innerHTML='<h4>'+ch.name+' <span class="tag">'+(best>=ch.target?'&#xC644;&#xB8CC;':'&#xBBF8;&#xC644;&#xB8CC;')+'</span></h4>' +
        '<p>'+ch.desc+' | &#xBCA0;&#xC2A4;&#xD2B8;: '+best+'/'+ch.target+ch.unit+'</p>';
      div.onclick=function(){ startChallenge(i); };
      cont.appendChild(div);
    });
  }
  function startChallenge(idx){
    curCh=idx; remaining=challenges[idx].time; progress=0;
    if(timer) clearInterval(timer);
    v14SFX.challenge();
    drawChCanvas();
    timer = setInterval(function(){
      remaining--;
      if(remaining<=0){
        clearInterval(timer); timer=null;
        endChallenge();
        return;
      }
      var el=document.getElementById('v14-ch-timer');
      if(el) el.textContent = Math.floor(remaining/60)+':'+(remaining%60<10?'0':'')+remaining%60;
    },1000);
    var el=document.getElementById('v14-ch-timer');
    if(el) el.textContent = Math.floor(remaining/60)+':'+(remaining%60<10?'0':'')+remaining%60;
    var st=document.getElementById('v14-ch-status');
    if(st) st.innerHTML = '&#xD074;&#xB9AD;/&#xD0ED;&#xC73C;&#xB85C; &#xC9C4;&#xD589;! &#xBAA9;&#xD45C;: '+challenges[idx].target+challenges[idx].unit;
    updateProgress();
  }
  function updateProgress(){
    var pct = curCh>=0 ? Math.min(100, progress/challenges[curCh].target*100) : 0;
    var el=document.getElementById('v14-ch-progress');
    if(el) el.style.width = pct+'%';
  }
  function drawChCanvas(){
    var cv=document.getElementById('v14-challenge-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    if(curCh<0){
      c.fillStyle='rgba(196,149,106,.4)'; c.font='14px sans-serif'; c.textAlign='center';
      c.fillText('&#xC704;&#xC5D0;&#xC11C; &#xB3C4;&#xC804;&#xACFC;&#xC81C;&#xB97C; &#xC120;&#xD0DD;&#xD558;&#xC138;&#xC694;',W/2,H/2);
      return;
    }
    var ch=challenges[curCh];
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText(ch.name, W/2, 30);
    var groundY=H-40;
    c.fillStyle='rgba(139,115,85,.3)'; c.fillRect(0,groundY,W,40);
    var cols = ch.target;
    var bw = Math.min(30, (W-80)/cols);
    for(var i=0;i<cols;i++){
      var bx = 40+i*(bw+2);
      var done = i<progress;
      c.fillStyle=done?'rgba(74,124,89,.4)':'rgba(196,149,106,.1)';
      c.fillRect(bx,groundY-40,bw,40);
      c.strokeStyle=done?'#4a7c59':'rgba(196,149,106,.2)';
      c.lineWidth=1; c.strokeRect(bx,groundY-40,bw,40);
      if(done){
        c.fillStyle='#4a7c59'; c.font='14px sans-serif'; c.textAlign='center';
        c.fillText('&#x2713;',bx+bw/2,groundY-15);
      }
    }
    c.fillStyle='#c4956a'; c.font='12px sans-serif'; c.textAlign='center';
    c.fillText(progress+'/'+ch.target+' '+ch.unit, W/2, groundY-55);
    cv.onclick = function(){
      if(curCh<0||!timer) return;
      progress++;
      if(progress>=challenges[curCh].target){
        clearInterval(timer); timer=null;
        endChallenge();
        return;
      }
      v14SFX.construct();
      drawChCanvas(); updateProgress();
    };
  }
  function endChallenge(){
    var ch=challenges[curCh];
    var won = progress>=ch.target;
    if(won) v14SFX.challengeWin();
    if(!scores[curCh]||progress>scores[curCh]){ scores[curCh]=progress; save(); }
    var st=document.getElementById('v14-ch-status');
    if(st) st.innerHTML = won ? '&#x1F389; &#xC644;&#xB8CC;! '+progress+'/'+ch.target+ch.unit : '&#xC2DC;&#xAC04; &#xCD08;&#xACFC;! '+progress+'/'+ch.target+ch.unit;
    drawChCanvas(); renderList();
  }
  return {
    open: function(){ document.getElementById('v14-challenge').classList.add('active'); load(); renderList(); drawChCanvas(); v14SFX.feature(); },
    close: function(){ if(timer){clearInterval(timer);timer=null;} document.getElementById('v14-challenge').classList.remove('active'); },
    load: load
  };
})();

// ── 10. Indoor Traffic Flow Analyzer (실내 동선 분석기) ──
var v14Traffic = (function(){
  var GRID = 12;
  var cells = [];
  var rooms = [
    {name:'&#xAC70;&#xC2E4;',icon:'&#x1F6CB;',color:'rgba(196,149,106,.25)'},
    {name:'&#xC8FC;&#xBC29;',icon:'&#x1F6CF;',color:'rgba(74,124,89,.25)'},
    {name:'&#xBD80;&#xC5B5;',icon:'&#x1F373;',color:'rgba(255,99,71,.2)'},
    {name:'&#xD654;&#xC7A5;&#xC2E4;',icon:'&#x1F6BF;',color:'rgba(100,149,237,.2)'},
    {name:'&#xD604;&#xAD00;',icon:'&#x1F6AA;',color:'rgba(218,165,32,.2)'},
    {name:'&#xBCF5;&#xB3C4;',icon:'&#x27A1;',color:'rgba(255,255,255,.1)'}
  ];
  var curRoom = 0;
  var heatmap = [];
  var KEY = 'hb_v14_traffic';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({cells:cells,heatmap:heatmap})); }catch(e){} }
  function load(){
    try{
      var d=JSON.parse(localStorage.getItem(KEY));
      if(d&&d.cells) cells=d.cells;
      if(d&&d.heatmap) heatmap=d.heatmap;
    }catch(e){}
    if(!cells.length){ cells=[]; for(var i=0;i<GRID*GRID;i++) cells.push(-1); }
    if(!heatmap.length){ heatmap=[]; for(var i=0;i<GRID*GRID;i++) heatmap.push(0); }
  }
  function updateTabs(){
    var ct=document.getElementById('v14-traffic-tabs'); if(!ct) return;
    ct.innerHTML='';
    rooms.forEach(function(r,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(i===curRoom?' active':'');
      b.textContent=r.icon+' '+r.name;
      b.onclick=function(){ curRoom=i; updateTabs(); v14SFX.traffic(); };
      ct.appendChild(b);
    });
    var simBtn=document.createElement('button');
    simBtn.className='v14-btn-sm';
    simBtn.textContent='&#x25B6; &#xB3D9;&#xC120; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;';
    simBtn.style.marginLeft='10px';
    simBtn.onclick=simulate;
    ct.appendChild(simBtn);
    var clrBtn=document.createElement('button');
    clrBtn.className='v14-btn-outline';
    clrBtn.textContent='&#xCD08;&#xAE30;&#xD654;';
    clrBtn.style.marginLeft='6px';
    clrBtn.onclick=function(){
      cells=[]; heatmap=[];
      for(var i=0;i<GRID*GRID;i++){ cells.push(-1); heatmap.push(0); }
      save(); draw();
    };
    ct.appendChild(clrBtn);
  }
  function simulate(){
    heatmap = []; for(var i=0;i<GRID*GRID;i++) heatmap.push(0);
    var doorIdx=-1;
    for(var i=0;i<cells.length;i++){ if(cells[i]===4){doorIdx=i;break;} }
    if(doorIdx<0) doorIdx=0;
    for(var sim=0;sim<50;sim++){
      var pos=doorIdx, visited={};
      for(var step=0;step<60;step++){
        heatmap[pos]=(heatmap[pos]||0)+1;
        visited[pos]=true;
        var neighbors=[];
        var r=Math.floor(pos/GRID), col=pos%GRID;
        if(col>0) neighbors.push(pos-1);
        if(col<GRID-1) neighbors.push(pos+1);
        if(r>0) neighbors.push(pos-GRID);
        if(r<GRID-1) neighbors.push(pos+GRID);
        var unvisited = neighbors.filter(function(n){ return !visited[n]; });
        var next = unvisited.length>0 ? unvisited : neighbors;
        pos = next[Math.floor(Math.random()*next.length)];
      }
    }
    save(); draw();
    v14SFX.traffic();
    var stat=document.getElementById('v14-traffic-stat');
    var maxH=Math.max.apply(null,heatmap);
    var hotspots=heatmap.filter(function(h){return h>maxH*0.7;}).length;
    if(stat) stat.innerHTML='<div class="s"><div class="sv">'+hotspots+'</div><div class="sl">&#xD56B;&#xC2A4;&#xD31F;</div></div>' +
      '<div class="s"><div class="sv">'+maxH+'</div><div class="sl">&#xCD5C;&#xB300;&#xD1B5;&#xD589;&#xB7C9;</div></div>' +
      '<div class="s"><div class="sv">50</div><div class="sl">&#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;&#xD69F;&#xC218;</div></div>';
  }
  function draw(){
    var cv=document.getElementById('v14-traffic-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText('&#xC2E4;&#xB0B4; &#xB3D9;&#xC120; &#xD788;&#xD2B8;&#xB9F5;', W/2, 22);
    var pad=40, cellW=(W-pad*2)/GRID, cellH=(H-pad*2-20)/GRID;
    var maxH = Math.max.apply(null,heatmap)||1;
    for(var r=0;r<GRID;r++){
      for(var col=0;col<GRID;col++){
        var idx=r*GRID+col;
        var x=pad+col*cellW, y=pad+20+r*cellH;
        var rm = cells[idx];
        if(rm>=0){
          c.fillStyle=rooms[rm].color;
        } else {
          c.fillStyle='rgba(255,255,255,.02)';
        }
        c.fillRect(x,y,cellW-1,cellH-1);
        if(heatmap[idx]>0){
          var intensity=heatmap[idx]/maxH;
          var red=Math.round(255*intensity), green=Math.round(100*(1-intensity));
          c.fillStyle='rgba('+red+','+green+',0,'+(0.2+intensity*0.5)+')';
          c.fillRect(x,y,cellW-1,cellH-1);
        }
        c.strokeStyle='rgba(196,149,106,.1)'; c.lineWidth=0.5;
        c.strokeRect(x,y,cellW-1,cellH-1);
        if(rm>=0){
          c.fillStyle='rgba(255,255,255,.7)'; c.font='12px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
          c.fillText(rooms[rm].icon, x+cellW/2, y+cellH/2);
        }
      }
    }
    cv.onclick=function(e){
      var rect=cv.getBoundingClientRect();
      var mx=(e.clientX-rect.left)*(W/rect.width);
      var my=(e.clientY-rect.top)*(H/rect.height);
      var col=Math.floor((mx-pad)/cellW);
      var row=Math.floor((my-pad-20)/cellH);
      if(col>=0&&col<GRID&&row>=0&&row<GRID){
        var idx=row*GRID+col;
        if(cells[idx]===curRoom) cells[idx]=-1;
        else cells[idx]=curRoom;
        save(); draw();
        v14SFX.traffic();
      }
    };
  }
  return {
    open: function(){ document.getElementById('v14-traffic').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-traffic').classList.remove('active'); },
    load: load
  };
})();

// ── 11. Architecture Quotes Gallery (건축 명언 갤러리 20선) ──
var v14Quotes = (function(){
  var quotes = [
    {text:'&#xAC74;&#xCD95;&#xC740; &#xC5BC;&#xC5B4;&#xBD99;&#xC740; &#xC74C;&#xC545;&#xC774;&#xB2E4;.',author:'&#xD504;&#xB9AC;&#xB4DC;&#xB9AC;&#xD788; &#xC250;&#xB9C1; (&#xB3C5;&#xC77C; &#xCCA0;&#xD559;&#xC790;)'},
    {text:'&#xC801;&#xC744;&#xC218;&#xB85D; &#xB354; &#xB9CE;&#xC740; &#xAC83;&#xC774;&#xB2E4;. (Less is more)',author:'&#xBBF8;&#xC2A4; &#xBC18; &#xB370;&#xC5B4; &#xB85C;&#xC5D0; (&#xBAA8;&#xB354;&#xB2C8;&#xC998; &#xAC70;&#xC7A5;)'},
    {text:'&#xD615;&#xD0DC;&#xB294; &#xAE30;&#xB2A5;&#xC744; &#xB530;&#xB978;&#xB2E4;. (Form follows function)',author:'&#xB8E8;&#xC774;&#xC2A4; &#xC124;&#xB9AC;&#xBC88; (&#xBBF8;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xC2E0;&#xC740; &#xB514;&#xD14C;&#xC77C;&#xC5D0; &#xC788;&#xB2E4;. (God is in the details)',author:'&#xBBF8;&#xC2A4; &#xBC18; &#xB370;&#xC5B4; &#xB85C;&#xC5D0;'},
    {text:'&#xAC74;&#xCD95;&#xC740; &#xC0AC;&#xD68C;&#xC758; &#xAC70;&#xC6B8;&#xC774;&#xB2E4;.',author:'&#xB178;&#xB9CC; &#xD3EC;&#xC2A4;&#xD130; (&#xC601;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xC9D1;&#xC740; &#xC0B4;&#xAE30; &#xC704;&#xD55C; &#xAE30;&#xACC4;&#xB2E4;. (A house is a machine for living in)',author:'&#xB974; &#xCF54;&#xB974;&#xBDD4;&#xC9C0;&#xC5D0; (&#xD504;&#xB791;&#xC2A4; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xACF5;&#xAC04;&#xC774; &#xC5C6;&#xC73C;&#xBA74; &#xAC74;&#xCD95;&#xC740; &#xC5C6;&#xB2E4;.',author:'&#xD504;&#xB7AD;&#xD06C; &#xB85C;&#xC774;&#xB4DC; &#xB77C;&#xC774;&#xD2B8; (&#xBBF8;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xAC74;&#xCD95;&#xC740; &#xC778;&#xAC04; &#xC758;&#xC9C0;&#xC758; &#xD45C;&#xD604;&#xC774;&#xB2E4;.',author:'&#xB8E8;&#xC774;&#xC2A4; &#xCE78; (&#xBBF8;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xC88B;&#xC740; &#xAC74;&#xCD95;&#xC740; &#xC88B;&#xC740; &#xC774;&#xC6C3;&#xC744; &#xB9CC;&#xB4E0;&#xB2E4;.',author:'&#xC815;&#xAE30;&#xC6A9; (&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xC790;&#xC5F0;&#xC744; &#xB2F4;&#xB294; &#xAC74;&#xCD95;&#xC774; &#xAC00;&#xC7A5; &#xC544;&#xB984;&#xB2E4;&#xC6B4; &#xAC74;&#xCD95;&#xC774;&#xB2E4;.',author:'&#xC548;&#xB3C4; &#xD0C0;&#xB2E4;&#xC624; (&#xC77C;&#xBCF8; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xD55C;&#xC625;&#xC740; &#xC790;&#xC5F0;&#xACFC; &#xC778;&#xAC04;&#xC774; &#xD568;&#xAED8; &#xC228; &#xC26C;&#xB294; &#xACF5;&#xAC04;&#xC774;&#xB2E4;.',author:'&#xC2E0;&#xC601;&#xD6C8; (&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xAC74;&#xCD95;&#xC744; &#xD558;&#xB294; &#xAC83;&#xC740; &#xC138;&#xACC4;&#xB97C; &#xB9CC;&#xB4DC;&#xB294; &#xAC83;&#xC774;&#xB2E4;.',author:'&#xB80C;&#xCD08; &#xD53C;&#xC544;&#xB178; (&#xC774;&#xD0C8;&#xB9AC;&#xC544; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xBE5B;&#xC740; &#xAC74;&#xCD95;&#xC758; &#xC601;&#xD63C;&#xC774;&#xB2E4;.',author:'&#xB974; &#xCF54;&#xB974;&#xBDD4;&#xC9C0;&#xC5D0;'},
    {text:'&#xC88B;&#xC740; &#xAC74;&#xCD95;&#xBB3C;&#xC740; &#xC2DC;&#xAC04;&#xC774; &#xC9C0;&#xB098;&#xB3C4; &#xB354; &#xC544;&#xB984;&#xB2E4;&#xC6CC;&#xC9C4;&#xB2E4;.',author:'&#xD504;&#xB7AD;&#xD06C; &#xAC8C;&#xB9AC; (&#xCE90;&#xB098;&#xB2E4; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xAC74;&#xCD95;&#xC740; &#xBB38;&#xD654;&#xC758; &#xAF43;&#xC774;&#xB2E4;.',author:'&#xC870;&#xC131;&#xB8E1; (&#xD55C;&#xAD6D; &#xAC74;&#xCD95; &#xD559;&#xC790;)'},
    {text:'&#xBAA8;&#xB4E0; &#xC704;&#xB300;&#xD55C; &#xAC74;&#xCD95;&#xC740; &#xAF3F;&#xAF3F;&#xD55C; &#xAE30;&#xCD08; &#xC704;&#xC5D0; &#xC138;&#xC6CC;&#xC9C4;&#xB2E4;.',author:'&#xD1A0;&#xB9C8;&#xC2A4; &#xCE74;&#xB77C;&#xC77C; (&#xC601;&#xAD6D; &#xC791;&#xAC00;)'},
    {text:'&#xC9D1;&#xC744; &#xC9D3;&#xB294; &#xAC83;&#xC740; &#xAFC8;&#xC744; &#xC9D3;&#xB294; &#xAC83;&#xC774;&#xB2E4;.',author:'&#xBC15;&#xC2B9;&#xD64D; (&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xACF5;&#xAC04;&#xC740; &#xBE44;&#xC5B4; &#xC788;&#xC744; &#xB54C; &#xAC00;&#xC7A5; &#xD480;&#xC694;&#xB86D;&#xB2E4;.',author:'&#xC548;&#xB3C4; &#xD0C0;&#xB2E4;&#xC624;'},
    {text:'&#xAC74;&#xCD95;&#xC740; &#xB545;&#xC5D0; &#xBC1C;&#xC744; &#xB51B;&#xACE0; &#xD558;&#xB298;&#xC744; &#xD5A5;&#xD558;&#xB294; &#xC608;&#xC220;&#xC774;&#xB2E4;.',author:'&#xBC14;&#xC2E4;&#xB9AC;&#xC624; &#xBAA8;&#xB808;&#xD2F0; (&#xC774;&#xD0C8;&#xB9AC;&#xC544; &#xAC74;&#xCD95;&#xAC00;)'},
    {text:'&#xC9D1;&#xC740; &#xADF8;&#xACF3;&#xC5D0; &#xC0AC;&#xB294; &#xC0AC;&#xB78C;&#xC758; &#xC601;&#xD63C;&#xC744; &#xB2F4;&#xB294;&#xB2E4;.',author:'&#xC2A4;&#xD2F0;&#xBE0C; &#xC7A1;&#xC2A4; (&#xC560;&#xD50C; &#xCC3D;&#xC5C5;&#xC790;)'}
  ];
  var read = {};
  var KEY = 'hb_v14_quotes';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({read:read})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.read) read=d.read; }catch(e){} }
  function render(){
    var cont=document.getElementById('v14-quotes-list'); if(!cont) return;
    cont.innerHTML='';
    var today = new Date().getDay();
    var featured = today % quotes.length;
    quotes.forEach(function(q,i){
      var div=document.createElement('div');
      div.className='v14-quote';
      if(i===featured) div.style.borderLeftColor='#FFD700';
      div.innerHTML = '<div class="qt">&ldquo;'+q.text+'&rdquo;</div><div class="qa">— '+q.author+'</div>';
      div.onclick=function(){ read[i]=true; save(); div.style.opacity='0.6'; v14SFX.quotes(); };
      if(read[i]) div.style.opacity='0.6';
      cont.appendChild(div);
    });
  }
  return {
    open: function(){ document.getElementById('v14-quotes').classList.add('active'); load(); render(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-quotes').classList.remove('active'); },
    load: load
  };
})();

// ── 12. Quiz v14 (+15 questions, 135→150) ──
var v14Quiz = (function(){
  var questions = [
    {q:'&#xBCBD;&#xB3CC;&#xC744; &#xC313;&#xC544; &#xBCBD;&#xCCB4;&#xB97C; &#xB9CC;&#xB4DC;&#xB294; &#xC804;&#xD1B5; &#xACF5;&#xBC95;&#xC740;?',a:['&#xC870;&#xC801;&#xC870;','&#xBAA9;&#xAD6C;&#xC870;','&#xCCA0;&#xACE8;&#xAD6C;&#xC870;','RC'],c:0},
    {q:'&#xD55C;&#xC625;&#xC758; &#xB300;&#xD45C;&#xC801; &#xC9C0;&#xBD95; &#xC591;&#xC2DD;&#xC740;?',a:['&#xD3C9;&#xC9C0;&#xBD95;','&#xB9DE;&#xBC30;&#xC9C0;&#xBD95;','&#xBAA8;&#xC784;&#xC9C0;&#xBD95;','&#xB9E8;&#xC0AC;&#xB4DC;'],c:1},
    {q:'&#xBD80;&#xB3D9;&#xC0B0; &#xAC10;&#xC815;&#xD3C9;&#xAC00;&#xC5D0;&#xC11C; &#xAC00;&#xC7A5; &#xD06C;&#xAC8C; &#xC601;&#xD5A5;&#xC744; &#xBBF8;&#xCE58;&#xB294; &#xC694;&#xC18C;&#xB294;?',a:['&#xC704;&#xCE58;','&#xC870;&#xB9DD;','&#xC5F0;&#xC218;','&#xC5D0;&#xB108;&#xC9C0;'],c:0},
    {q:'IoT&#xC758; &#xC57D;&#xC790;&#xB294;?',a:['Internet of Things','Indoor of Tech','Info on Track','Input of Tools'],c:0},
    {q:'&#xC11D;&#xAD74;&#xC554;&#xC774; &#xC9C0;&#xC5B4;&#xC9C4; &#xC2DC;&#xB300;&#xB294;?',a:['&#xC0BC;&#xAD6D;','&#xD1B5;&#xC77C;&#xC2E0;&#xB77C;','&#xACE0;&#xB824;','&#xC870;&#xC120;'],c:1},
    {q:'&#xCD08;&#xAC00;&#xC9C0;&#xBD95;&#xC758; &#xC7AC;&#xB8CC;&#xB294;?',a:['&#xAE30;&#xC640;','&#xBF48;','&#xCCA0;&#xD310;','&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;'],c:1},
    {q:'&ldquo;Less is more&rdquo;&#xB97C; &#xB9D0;&#xD55C; &#xAC74;&#xCD95;&#xAC00;&#xB294;?',a:['&#xB974; &#xCF54;&#xB974;&#xBDD4;&#xC9C0;&#xC5D0;','&#xBBF8;&#xC2A4; &#xBC18; &#xB370;&#xC5B4; &#xB85C;&#xC5D0;','&#xD504;&#xB7AD;&#xD06C; &#xB85C;&#xC774;&#xB4DC; &#xB77C;&#xC774;&#xD2B8;','&#xC548;&#xB3C4; &#xD0C0;&#xB2E4;&#xC624;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC758; &#xB3D9;&#xC120; &#xBD84;&#xC11D;&#xC5D0;&#xC11C; &#xD56B;&#xC2A4;&#xD31F;&#xC774;&#xB780;?',a:['&#xD1B5;&#xD589;&#xB7C9;&#xC774; &#xB9CE;&#xC740; &#xC9C0;&#xC810;','&#xC628;&#xB3C4;&#xAC00; &#xB192;&#xC740; &#xC9C0;&#xC810;','&#xC870;&#xBA85;&#xC774; &#xBC1D;&#xC740; &#xC9C0;&#xC810;','&#xC18C;&#xC74C;&#xC774; &#xD070; &#xC9C0;&#xC810;'],c:0},
    {q:'&#xD314;&#xC791;&#xC9C0;&#xBD95;&#xC740; &#xBA87; &#xAC1C;&#xC758; &#xBA74;&#xC73C;&#xB85C; &#xAD6C;&#xC131;&#xB418;&#xB098;?',a:['4&#xBA74;','6&#xBA74;','8&#xBA74;','10&#xBA74;'],c:2},
    {q:'&#xC2A4;&#xB9C8;&#xD2B8;&#xD648;&#xC5D0;&#xC11C; &#xC2E4;&#xB0B4; &#xACF5;&#xAE30; &#xD488;&#xC9C8;&#xC744; &#xAD00;&#xB9AC;&#xD558;&#xB294; &#xAE30;&#xAE30;&#xB294;?',a:['&#xACF5;&#xAE30;&#xCCAD;&#xC815;&#xAE30;','CCTV','&#xC2A4;&#xB9C8;&#xD2B8; &#xBBF8;&#xB7EC;','&#xC628;&#xB3C4;&#xC870;&#xC808;&#xAE30;'],c:0},
    {q:'RC &#xAD6C;&#xC870;&#xC5D0;&#xC11C; RC&#xB294; &#xBB34;&#xC5C7;&#xC758; &#xC57D;&#xC790;&#xC778;&#xAC00;?',a:['Reinforced Concrete','Red Cement','Royal Construction','Rigid Column'],c:0},
    {q:'&#xACBD;&#xBCF5;&#xAD81;&#xC774; &#xC9C0;&#xC5B4;&#xC9C4; &#xC2DC;&#xB300;&#xB294;?',a:['&#xACE0;&#xB824;','&#xC870;&#xC120;','&#xD1B5;&#xC77C;&#xC2E0;&#xB77C;','&#xC0BC;&#xAD6D;'],c:1},
    {q:'&#xAC74;&#xCD95; &#xB3C4;&#xC804;&#xACFC;&#xC81C;&#xC5D0;&#xC11C; &#xBCBD; &#xC313;&#xAE30; &#xBAA9;&#xD45C;&#xB294;?',a:['10&#xAC1C;','15&#xAC1C;','20&#xAC1C;','30&#xAC1C;'],c:2},
    {q:'&ldquo;&#xD615;&#xD0DC;&#xB294; &#xAE30;&#xB2A5;&#xC744; &#xB530;&#xB978;&#xB2E4;&rdquo;&#xB97C; &#xB9D0;&#xD55C; &#xAC74;&#xCD95;&#xAC00;&#xB294;?',a:['&#xB85C;&#xC774;&#xB4DC; &#xB77C;&#xC774;&#xD2B8;','&#xB8E8;&#xC774;&#xC2A4; &#xC124;&#xB9AC;&#xBC88;','&#xD53C;&#xC544;&#xB178;','&#xAC8C;&#xB9AC;'],c:1},
    {q:'v14&#xC5D0;&#xC11C; &#xCD94;&#xAC00;&#xB41C; &#xC9C0;&#xBD95; &#xC591;&#xC2DD;&#xC758; &#xC218;&#xB294;?',a:['6&#xC885;','8&#xC885;','10&#xC885;','12&#xC885;'],c:2}
  ];
  function shuffle(arr){
    for(var i=arr.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var t=arr[i]; arr[i]=arr[j]; arr[j]=t;
    }
    return arr;
  }
  return {
    inject: function(){
      if(!window.quizQuestions||!Array.isArray(window.quizQuestions)) return;
      questions.forEach(function(q){
        var exists = window.quizQuestions.some(function(eq){ return eq.q===q.q; });
        if(!exists){
          var correct = q.a[q.c];
          var shuffled = shuffle(q.a.slice());
          var newC = shuffled.indexOf(correct);
          window.quizQuestions.push({q:q.q, a:shuffled, c:newC});
        }
      });
    }
  };
})();

// ── 13. Achievements v14 (+12, 134→146) ──
var v14Achieve = (function(){
  var defs = [
    {id:'construct_first',name:'&#xACF5;&#xBC95; &#xBD84;&#xC11D;&#xAC00;',desc:'&#xAC74;&#xCD95;&#xACF5;&#xBC95; &#xBE44;&#xAD50; &#xCC98;&#xC74C; &#xC5F4;&#xAE30;',check:function(){ return !!localStorage.getItem('hb_v14_construct'); }},
    {id:'appraisal_first',name:'&#xAC10;&#xC815;&#xD3C9;&#xAC00;&#xC0AC;',desc:'&#xBD80;&#xB3D9;&#xC0B0; &#xAC10;&#xC815;&#xD3C9;&#xAC00; &#xCC98;&#xC74C; &#xC2E4;&#xD589;',check:function(){ return !!localStorage.getItem('hb_v14_appraisal'); }},
    {id:'smarthome_3',name:'IoT &#xC785;&#xBB38;&#xC790;',desc:'&#xC2A4;&#xB9C8;&#xD2B8;&#xD648; &#xAE30;&#xAE30; 3&#xAC1C; &#xBC30;&#xCE58;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_smarthome'));return d&&d.placed&&d.placed.length>=3;}catch(e){return false;} }},
    {id:'smarthome_all',name:'IoT &#xB9C8;&#xC2A4;&#xD130;',desc:'&#xC2A4;&#xB9C8;&#xD2B8;&#xD648; 12&#xAE30;&#xAE30; &#xC804;&#xBD80; &#xBC30;&#xCE58;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_smarthome'));return d&&d.placed&&d.placed.length>=12;}catch(e){return false;} }},
    {id:'timetravel_all',name:'&#xC2DC;&#xAC04;&#xC5EC;&#xD589;&#xC790;',desc:'6&#xC2DC;&#xB300; &#xAC74;&#xCD95; &#xC804;&#xBD80; &#xD0D0;&#xBC29;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_timetravel'));return d&&d.cur>=5;}catch(e){return false;} }},
    {id:'roof_5',name:'&#xC9C0;&#xBD95; &#xC5F0;&#xAD6C;&#xC790;',desc:'&#xC9C0;&#xBD95; &#xC591;&#xC2DD; 5&#xC885; &#xC774;&#xC0C1; &#xD0D0;&#xC0C9;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_roof'));return d&&d.cur>=4;}catch(e){return false;} }},
    {id:'challenge_first',name:'&#xB3C4;&#xC804;&#xC790;',desc:'&#xAC74;&#xCD95; &#xB3C4;&#xC804;&#xACFC;&#xC81C; &#xCC98;&#xC74C; &#xC644;&#xB8CC;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_challenge'));if(!d||!d.scores)return false;for(var k in d.scores){if(d.scores[k]>0)return true;}return false;}catch(e){return false;} }},
    {id:'challenge_all',name:'&#xB9C8;&#xC2A4;&#xD130; &#xBE4C;&#xB354;',desc:'&#xAC74;&#xCD95; &#xB3C4;&#xC804;&#xACFC;&#xC81C; &#xC804;&#xBD80; &#xC644;&#xB8CC;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_challenge'));if(!d||!d.scores)return false;for(var i=0;i<6;i++){if(!d.scores[i]||d.scores[i]<1)return false;}return true;}catch(e){return false;} }},
    {id:'traffic_sim',name:'&#xB3D9;&#xC120; &#xBD84;&#xC11D;&#xAC00;',desc:'&#xC2E4;&#xB0B4; &#xB3D9;&#xC120; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158; &#xCC98;&#xC74C; &#xC2E4;&#xD589;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_traffic'));return d&&d.heatmap&&d.heatmap.some(function(h){return h>0;});}catch(e){return false;} }},
    {id:'quotes_10',name:'&#xBA85;&#xC5B8; &#xC218;&#xC9D1;&#xAC00;',desc:'&#xAC74;&#xCD95; &#xBA85;&#xC5B8; 10&#xAC1C; &#xC774;&#xC0C1; &#xC77D;&#xAE30;',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_quotes'));return d&&d.read&&Object.keys(d.read).length>=10;}catch(e){return false;} }},
    {id:'quiz_v14_try',name:'&#xD37C;&#xC990; v14',desc:'v14 &#xD37C;&#xC990; &#xCC98;&#xC74C; &#xC2DC;&#xB3C4;',check:function(){ return !!localStorage.getItem('hb_quiz_v14_tried'); }},
    {id:'v14_explorer',name:'v14 &#xD0D0;&#xD5D8;&#xAC00;',desc:'v14 &#xAE30;&#xB2A5; 4&#xAC1C; &#xC774;&#xC0C1; &#xC0AC;&#xC6A9;',check:function(){
      var cnt=0;
      if(localStorage.getItem('hb_v14_construct')) cnt++;
      if(localStorage.getItem('hb_v14_appraisal')) cnt++;
      if(localStorage.getItem('hb_v14_smarthome')) cnt++;
      if(localStorage.getItem('hb_v14_timetravel')) cnt++;
      if(localStorage.getItem('hb_v14_roof')) cnt++;
      if(localStorage.getItem('hb_v14_challenge')) cnt++;
      if(localStorage.getItem('hb_v14_traffic')) cnt++;
      if(localStorage.getItem('hb_v14_quotes')) cnt++;
      return cnt>=4;
    }}
  ];
  var unlocked = {};
  var KEY = 'hb_v14_achievements';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify(unlocked)); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) unlocked=d; }catch(e){} }
  function check(){
    load();
    var newOnes = [];
    defs.forEach(function(d){
      if(!unlocked[d.id] && d.check()){
        unlocked[d.id] = true;
        newOnes.push(d);
      }
    });
    if(newOnes.length>0){
      save();
      v14SFX.achieve();
      if(typeof window.achievements==='object'&&Array.isArray(window.achievements)){
        defs.forEach(function(d){
          if(!window.achievements.some(function(a){return a.id===d.id;})){
            window.achievements.push({id:d.id, name:d.name, desc:d.desc, check:d.check});
          }
        });
      }
    }
  }
  return { check:check, load:load, defs:defs };
})();

// ── 14. Bottom Navigation Bar v14 (+8 buttons) ──
(function(){
  function inject(){
    var bar = document.createElement('div');
    bar.id = 'v14-nav';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;height:48px;background:linear-gradient(180deg,rgba(45,27,14,.95),rgba(30,18,8,.98));border-top:1px solid rgba(196,149,106,.3);display:flex;align-items:center;justify-content:space-around;z-index:3600;padding:0 4px';
    var actions = [
      {icon:'&#x1F3D7;',label:'&#xACF5;&#xBC95;',fn:function(){v14Construct.open();}},
      {icon:'&#x1F3E0;',label:'&#xD3C9;&#xAC00;',fn:function(){v14Appraisal.open();}},
      {icon:'&#x1F4F1;',label:'IoT',fn:function(){v14SmartHome.open();}},
      {icon:'&#x23F3;',label:'&#xC2DC;&#xAC04;&#xC5EC;&#xD589;',fn:function(){v14TimeTravel.open();}},
      {icon:'&#x1F3E0;',label:'&#xC9C0;&#xBD95;',fn:function(){v14Roof.open();}},
      {icon:'&#x1F3C6;',label:'&#xB3C4;&#xC804;',fn:function(){v14Challenge.open();}},
      {icon:'&#x1F6B6;',label:'&#xB3D9;&#xC120;',fn:function(){v14Traffic.open();}},
      {icon:'&#x1F4DC;',label:'&#xBA85;&#xC5B8;',fn:function(){v14Quotes.open();}}
    ];
    actions.forEach(function(a){
      var btn = document.createElement('button');
      btn.style.cssText = 'background:none;border:none;color:#c4956a;font-size:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:4px 2px;font-family:inherit;min-width:0;flex:1';
      btn.innerHTML = '<span style="font-size:18px">'+a.icon+'</span><span>'+a.label+'</span>';
      btn.onclick = a.fn;
      bar.appendChild(btn);
    });
    document.body.appendChild(bar);
    var v13nav = document.getElementById('v13-nav');
    if(v13nav) v13nav.style.bottom = '48px';
    var v12nav = document.getElementById('v12-nav');
    if(v12nav) v12nav.style.bottom = '96px';
    var v11fab = document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom = '150px';
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
      case 'KeyA': e.preventDefault(); v14Construct.open(); break;
      case 'KeyB': e.preventDefault(); v14Appraisal.open(); break;
      case 'KeyE': e.preventDefault(); v14SmartHome.open(); break;
      case 'KeyJ': e.preventDefault(); v14TimeTravel.open(); break;
      case 'KeyK': e.preventDefault(); v14Roof.open(); break;
      case 'KeyL': e.preventDefault(); v14Challenge.open(); break;
      case 'KeyM': e.preventDefault(); v14Traffic.open(); break;
      case 'KeyN': e.preventDefault(); v14Quotes.open(); break;
    }
  });
})();

// ── 16. Panel Close helpers ──
window.v14Close = function(panel){
  var map = {'construct':v14Construct,'appraisal':v14Appraisal,'smarthome':v14SmartHome,'timetravel':v14TimeTravel,'roof':v14Roof,'challenge':v14Challenge,'traffic':v14Traffic,'quotes':v14Quotes};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v14Quiz.inject(); localStorage.setItem('hb_quiz_v14_tried','1'); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v14Hooked) return true;
    window.__v14Hooked = true;
    var prev = window.showComplete;
    window.showComplete = function(){ prev.apply(this,arguments); v14Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 19. Initial load + checks ──
(function(){
  v14Construct.load(); v14Appraisal.load(); v14SmartHome.load(); v14TimeTravel.load();
  v14Roof.load(); v14Challenge.load(); v14Traffic.load(); v14Quotes.load();
  setTimeout(function(){ v14Achieve.check(); },4000);
})();

// end v14 guard
}

// =====================================================
// House Builder v19.0 Patch
// 건축방수방습분석기Canvas620x400_8공법비교Bar+건축조명배치시뮬Canvas600x380_6실12조명Lux
// 전통정원석조물설계Canvas620x400_10종배치Grid+건축열교진단Canvas600x380_8부위열손실Radar
// 건축공간활용최적화Canvas620x380_6유형6지표Bar+건축유지보수캘린더Canvas600x380_12종스케줄
// 건축소음차단설계Canvas600x380_8소음원STC등급Bar+전통건축장인도감Canvas620x400_10장인6축Radar
// 퀴즈+15(210->225)+업적+12(194->206)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV19) {
window.__hbV19 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v19-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5200;overflow-y:auto;padding:16px}',
    '.v19-panel.active{display:block}',
    '.v19-box{max-width:720px;margin:40px auto}',
    '.v19-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v19-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v19-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v19-close:hover{background:#d4a57a}',
    '.v19-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v19-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v19-tab:hover,.v19-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v19-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v19-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v19-stat .s{text-align:center}',
    '.v19-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v19-stat .sl{font-size:11px;color:#c4956a}',
    '.v19-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v19-btn-sm:hover{background:#d4a57a}',
    '.v19-slider-row{display:flex;align-items:center;gap:10px;margin:8px 0}',
    '.v19-slider-row label{color:#c4956a;font-size:12px;min-width:80px}',
    '.v19-slider-row input[type=range]{flex:1;accent-color:#c4956a}',
    '.v19-slider-row .sv{color:#f5deb3;font-size:13px;min-width:40px;text-align:right}',
    '.v19-menu{position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4060;display:flex;flex-direction:column;gap:6px}',
    '.v19-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative}',
    '.v19-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v19-menu-label{position:absolute;right:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v19-menu-btn:hover .v19-menu-label{opacity:1}',
    '@media(max-width:600px){.v19-box{margin:16px auto}.v19-menu{right:6px;gap:4px}.v19-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 1. HTML panels ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v19-panels';
  wrap.innerHTML =
    '<div id="v19-waterproof" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F4A7; &#xAC74;&#xCD95; &#xBC29;&#xC218;&#xB0A9;&#xC2B5; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>8&#xC885; &#xBC29;&#xC218;&#xACF5;&#xBC95; &#xBE44;&#xAD50; &#xBD84;&#xC11D;</p>' +
      '<div class="v19-tabs" id="v19-wp-tabs"></div>' +
      '<canvas id="v19-wp-canvas" class="v19-canvas" width="620" height="400"></canvas>' +
      '<div id="v19-wp-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-wp-stat"></div>' +
      '<button class="v19-close" onclick="v19Waterproof.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-lighting" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F4A1; &#xAC74;&#xCD95; &#xC870;&#xBA85;&#xBC30;&#xCE58; &#xC2DC;&#xBBAC;</h2>' +
      '<p>6&#xC2E4; 12&#xC885; &#xC870;&#xBA85; Lux &#xBD84;&#xC11D;</p>' +
      '<div class="v19-tabs" id="v19-lt-tabs"></div>' +
      '<canvas id="v19-lt-canvas" class="v19-canvas" width="600" height="380"></canvas>' +
      '<div id="v19-lt-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-lt-stat"></div>' +
      '<button class="v19-close" onclick="v19Lighting.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-garden" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1FAB4; &#xC804;&#xD1B5; &#xC815;&#xC6D0; &#xC11D;&#xC870;&#xBB3C; &#xC124;&#xACC4;</h2>' +
      '<p>10&#xC885; &#xC804;&#xD1B5; &#xC815;&#xC6D0; &#xC11D;&#xC870;&#xBB3C; &#xBC30;&#xCE58;</p>' +
      '<div class="v19-tabs" id="v19-gd-tabs"></div>' +
      '<canvas id="v19-gd-canvas" class="v19-canvas" width="620" height="400"></canvas>' +
      '<div id="v19-gd-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-gd-stat"></div>' +
      '<button class="v19-close" onclick="v19Garden.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-thermal" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F321;&#xFE0F; &#xAC74;&#xCD95; &#xC5F4;&#xAD50; &#xC9C4;&#xB2E8; &#xC2DC;&#xBBAC;</h2>' +
      '<p>8&#xBD80;&#xC704; &#xC5F4;&#xC190;&#xC2E4; Radar &#xBD84;&#xC11D;</p>' +
      '<canvas id="v19-th-canvas" class="v19-canvas" width="600" height="380"></canvas>' +
      '<div id="v19-th-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-th-stat"></div>' +
      '<div style="display:flex;gap:10px;justify-content:center;margin:10px 0">' +
        '<button class="v19-btn-sm" onclick="v19Thermal.randomize()">&#xBB34;&#xC791;&#xC704; &#xC9C4;&#xB2E8;</button>' +
        '<button class="v19-btn-sm" onclick="v19Thermal.reset()">&#xCD08;&#xAE30;&#xD654;</button>' +
      '</div>' +
      '<button class="v19-close" onclick="v19Thermal.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-space" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F4D0; &#xAC74;&#xCD95; &#xACF5;&#xAC04;&#xD65C;&#xC6A9; &#xCD5C;&#xC801;&#xD654;</h2>' +
      '<p>6&#xC720;&#xD615; &#xACF5;&#xAC04; x 6&#xC9C0;&#xD45C; &#xBD84;&#xC11D;</p>' +
      '<div class="v19-tabs" id="v19-sp-tabs"></div>' +
      '<canvas id="v19-sp-canvas" class="v19-canvas" width="620" height="380"></canvas>' +
      '<div id="v19-sp-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-sp-stat"></div>' +
      '<button class="v19-close" onclick="v19Space.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-maint" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F527; &#xAC74;&#xCD95; &#xC720;&#xC9C0;&#xBCF4;&#xC218; &#xCE98;&#xB9B0;&#xB354;</h2>' +
      '<p>12&#xC885; &#xC720;&#xC9C0;&#xBCF4;&#xC218; &#xC2A4;&#xCF00;&#xC904; &#xAD00;&#xB9AC;</p>' +
      '<canvas id="v19-mt-canvas" class="v19-canvas" width="600" height="380"></canvas>' +
      '<div id="v19-mt-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-mt-stat"></div>' +
      '<div style="display:flex;gap:10px;justify-content:center;margin:10px 0">' +
        '<button class="v19-btn-sm" onclick="v19Maint.simulate()">1&#xB144; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;</button>' +
        '<button class="v19-btn-sm" onclick="v19Maint.reset()">&#xCD08;&#xAE30;&#xD654;</button>' +
      '</div>' +
      '<button class="v19-close" onclick="v19Maint.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-noise" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F507; &#xAC74;&#xCD95; &#xC18C;&#xC74C;&#xCC28;&#xB2E8; &#xC124;&#xACC4;</h2>' +
      '<p>8&#xC18C;&#xC74C;&#xC6D0; STC/IIC &#xB4F1;&#xAE09; &#xBD84;&#xC11D;</p>' +
      '<div class="v19-tabs" id="v19-ns-tabs"></div>' +
      '<canvas id="v19-ns-canvas" class="v19-canvas" width="600" height="380"></canvas>' +
      '<div id="v19-ns-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-ns-stat"></div>' +
      '<button class="v19-close" onclick="v19Noise.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v19-artisan" class="v19-panel"><div class="v19-box">' +
      '<h2>&#x1F3DB;&#xFE0F; &#xC804;&#xD1B5; &#xAC74;&#xCD95; &#xC7A5;&#xC778; &#xB3C4;&#xAC10;</h2>' +
      '<p>10&#xC7A5;&#xC778; 6&#xCD95; Radar &#xBE44;&#xAD50;</p>' +
      '<div class="v19-tabs" id="v19-ar-tabs"></div>' +
      '<canvas id="v19-ar-canvas" class="v19-canvas" width="620" height="400"></canvas>' +
      '<div id="v19-ar-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v19-stat" id="v19-ar-stat"></div>' +
      '<button class="v19-close" onclick="v19Artisan.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 2. SFX Engine ──
var v19SFX = (function(){
  var ctx = null;
  function getCtx(){ if(!ctx) try{ ctx=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} return ctx; }
  function play(type){
    var c=getCtx(); if(!c) return;
    if(window.muted) return;
    var o=c.createOscillator(), g=c.createGain();
    o.connect(g); g.connect(c.destination);
    var t=c.currentTime;
    switch(type){
      case 'waterproof': o.type='sine'; o.frequency.setValueAtTime(320,t); o.frequency.linearRampToValueAtTime(480,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'lighting': o.type='triangle'; o.frequency.setValueAtTime(600,t); o.frequency.linearRampToValueAtTime(900,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'garden': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(660,t+.2); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'thermal': o.type='sawtooth'; o.frequency.setValueAtTime(200,t); o.frequency.linearRampToValueAtTime(350,t+.18); g.gain.setValueAtTime(.07,t); g.gain.linearRampToValueAtTime(0,t+.22); o.start(t); o.stop(t+.22); break;
      case 'space': o.type='square'; o.frequency.setValueAtTime(500,t); o.frequency.linearRampToValueAtTime(700,t+.12); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.16); o.start(t); o.stop(t+.16); break;
      case 'maint': o.type='triangle'; o.frequency.setValueAtTime(380,t); o.frequency.linearRampToValueAtTime(520,t+.15); g.gain.setValueAtTime(.09,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'noise': o.type='sine'; o.frequency.setValueAtTime(250,t); o.frequency.linearRampToValueAtTime(180,t+.2); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'artisan': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.15); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'quiz_correct': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.setValueAtTime(659,t+.1); o.frequency.setValueAtTime(784,t+.2); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'quiz_wrong': o.type='square'; o.frequency.setValueAtTime(200,t); o.frequency.linearRampToValueAtTime(150,t+.2); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'achieve': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.setValueAtTime(659,t+.08); o.frequency.setValueAtTime(784,t+.16); o.frequency.setValueAtTime(1047,t+.24); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.35); o.start(t); o.stop(t+.35); break;
      default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.12); o.start(t); o.stop(t+.12);
    }
  }
  return {play:play};
})();

// ── 3. Waterproof Analysis (8 methods) ──
var v19Waterproof = (function(){
  var methods = [
    {name:'아스팔트', cost:75, durability:85, flexibility:60, ecoScore:40, waterResist:90, tempRange:70, install:65, desc:'아스팔트 방수는 전통적인 공법으로 내수성이 뛰어남'},
    {name:'PVC 멤브레인', cost:60, durability:75, flexibility:80, ecoScore:35, waterResist:88, tempRange:65, install:80, desc:'PVC 시트 방수는 시공이 간편하고 유연성이 뛰어남'},
    {name:'TPO 방수', cost:70, durability:80, flexibility:75, ecoScore:65, waterResist:92, tempRange:80, install:70, desc:'열가소성 폴리올레핀 방수는 친환경적'},
    {name:'EPDM 고무', cost:65, durability:90, flexibility:85, ecoScore:50, waterResist:95, tempRange:90, install:60, desc:'EPDM 합성고무는 자외선/온도 저항성이 최고'},
    {name:'벤토나이트', cost:55, durability:70, flexibility:50, ecoScore:80, waterResist:85, tempRange:60, install:55, desc:'천연 점토 기반 방수로 친환경적'},
    {name:'시멘트 방수', cost:50, durability:65, flexibility:40, ecoScore:60, waterResist:80, tempRange:75, install:85, desc:'시멘트 계 방수제는 콘크리트 구조물에 적합'},
    {name:'실리콘 코팅', cost:80, durability:60, flexibility:90, ecoScore:45, waterResist:75, tempRange:85, install:90, desc:'실리콘 방수는 이음부 처리에 탁월'},
    {name:'우레탄 방수', cost:85, durability:78, flexibility:70, ecoScore:30, waterResist:93, tempRange:72, install:75, desc:'우레탄 방수는 무이음 시공으로 복잡한 형상에 적합'}
  ];
  var sel = 0;
  var data = {};
  function load(){ try{ data=JSON.parse(localStorage.getItem('hb_v19_wp')||'{}'); }catch(e){ data={}; } }
  function save(){ localStorage.setItem('hb_v19_wp',JSON.stringify(data)); }
  function draw(){
    var c=document.getElementById('v19-wp-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    var m=methods[sel], metrics=['cost','durability','flexibility','ecoScore','waterResist','tempRange','install'];
    var labels=['비용효율','내구성','유연성','친환경','방수력','온도범위','시공성'];
    var barW=60, gap=12, startX=(W-(barW*7+gap*6))/2, baseY=H-60;
    var colors=['#4ecdc4','#45b7d1','#96ceb4','#88d8b0','#2196f3','#ff9800','#e91e63'];
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(m.name+' 방수공법 분석',W/2,30);
    for(var i=0;i<7;i++){
      var val=m[metrics[i]], h=val/100*(baseY-60), x=startX+i*(barW+gap);
      var grad=ctx.createLinearGradient(x,baseY-h,x,baseY);
      grad.addColorStop(0,colors[i]); grad.addColorStop(1,'rgba(0,0,0,.3)');
      ctx.fillStyle=grad;
      ctx.beginPath(); ctx.moveTo(x+4,baseY); ctx.lineTo(x+4,baseY-h+4); ctx.quadraticCurveTo(x+4,baseY-h,x+8,baseY-h); ctx.lineTo(x+barW-8,baseY-h); ctx.quadraticCurveTo(x+barW-4,baseY-h,x+barW-4,baseY-h+4); ctx.lineTo(x+barW-4,baseY); ctx.fill();
      ctx.fillStyle='#f5deb3'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
      ctx.fillText(val+'%',x+barW/2,baseY-h-8);
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif';
      ctx.fillText(labels[i],x+barW/2,baseY+16);
    }
    var avg=Math.round(metrics.reduce(function(s,k){return s+m[k];},0)/7);
    ctx.fillStyle='rgba(196,149,106,.15)'; ctx.fillRect(W/2-80,42,160,24); ctx.fillStyle='#f5deb3'; ctx.font='bold 13px sans-serif';
    ctx.fillText('종합점수: '+avg+'% ('+gradeFromScore(avg)+')',W/2,58);
    document.getElementById('v19-wp-info').textContent=m.desc;
    document.getElementById('v19-wp-stat').innerHTML='<div class="s"><div class="sv">'+avg+'%</div><div class="sl">종합점수</div></div><div class="s"><div class="sv">'+gradeFromScore(avg)+'</div><div class="sl">등급</div></div><div class="s"><div class="sv">'+m.waterResist+'%</div><div class="sl">방수력</div></div>';
  }
  function buildTabs(){
    var el=document.getElementById('v19-wp-tabs'); if(!el) return; el.innerHTML='';
    methods.forEach(function(m,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===sel?' active':''); btn.textContent=m.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v19SFX.play('waterproof'); }; el.appendChild(btn);
    });
  }
  return { open:function(){ load(); buildTabs(); draw(); document.getElementById('v19-waterproof').classList.add('active'); v19SFX.play('waterproof'); },
    close:function(){ document.getElementById('v19-waterproof').classList.remove('active'); } };
})();

// ── 4. Lighting Placement Simulator (6 rooms, 12 lights) ──
var v19Lighting = (function(){
  var rooms = [
    {name:'거실', targetLux:300, area:25},
    {name:'침실', targetLux:150, area:14},
    {name:'주방', targetLux:500, area:10},
    {name:'욕실', targetLux:200, area:6},
    {name:'서재', targetLux:400, area:12},
    {name:'다용도실', targetLux:200, area:8}
  ];
  var lights = [
    {name:'형광등', lux:250, watt:36, color:'#fff5e1'},
    {name:'LED 패널', lux:400, watt:24, color:'#f0f0ff'},
    {name:'백열등', lux:180, watt:60, color:'#ffcc80'},
    {name:'할로겐', lux:300, watt:50, color:'#ffe0b2'},
    {name:'스팟라이트', lux:500, watt:35, color:'#e0e0e0'},
    {name:'간접조명', lux:100, watt:15, color:'#fff3e0'},
    {name:'펜던트', lux:200, watt:20, color:'#f5f5f5'},
    {name:'샹들리에', lux:350, watt:80, color:'#fff8e1'},
    {name:'스탠드', lux:150, watt:15, color:'#ffe8cc'},
    {name:'벽등', lux:120, watt:12, color:'#ffecd2'},
    {name:'매립등', lux:280, watt:18, color:'#f0f0f0'},
    {name:'트랙조명', lux:320, watt:25, color:'#e8e8e8'}
  ];
  var roomSel=0, lightSel=0;
  function draw(){
    var c=document.getElementById('v19-lt-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    var room=rooms[roomSel], light=lights[lightSel];
    var luxPer=light.lux, needed=Math.ceil(room.area*room.targetLux/luxPer);
    var totalLux=Math.round(needed*luxPer/room.area);
    var totalWatt=needed*light.watt;
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(room.name+' + '+light.name+' 조명 분석',W/2,30);
    var barY=60, barH=50, barMaxW=W-120;
    var ratios=[totalLux/room.targetLux, room.targetLux/700, totalWatt/500, needed/10];
    var labels2=['현재 Lux: '+totalLux,'기준 Lux: '+room.targetLux,'총 전력: '+totalWatt+'W','필요 수량: '+needed+'개'];
    var colors2=['#4ecdc4','#ff9800','#e91e63','#2196f3'];
    for(var i=0;i<4;i++){
      var y=barY+i*(barH+20), r=Math.min(ratios[i],1), bw=r*barMaxW;
      ctx.fillStyle='rgba(196,149,106,.1)'; ctx.fillRect(60,y,barMaxW,barH);
      var grd=ctx.createLinearGradient(60,y,60+bw,y); grd.addColorStop(0,colors2[i]); grd.addColorStop(1,'rgba(0,0,0,.2)');
      ctx.fillStyle=grd;
      ctx.beginPath(); ctx.moveTo(64,y+barH); ctx.lineTo(64,y+4); ctx.quadraticCurveTo(64,y,68,y); ctx.lineTo(56+bw,y); ctx.quadraticCurveTo(60+bw,y,60+bw,y+4); ctx.lineTo(60+bw,y+barH); ctx.fill();
      ctx.fillStyle='#f5deb3'; ctx.font='bold 12px sans-serif'; ctx.textAlign='left';
      ctx.fillText(labels2[i],68,y+barH/2+4);
    }
    var grade = totalLux>=room.targetLux*0.9 ? 'S' : totalLux>=room.targetLux*0.7 ? 'A' : totalLux>=room.targetLux*0.5 ? 'B' : 'C';
    ctx.fillStyle='rgba(78,205,196,.15)'; ctx.fillRect(W/2-70,H-50,140,30);
    ctx.fillStyle='#4ecdc4'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText('조명 적합도: '+grade+' 등급',W/2,H-30);
    document.getElementById('v19-lt-info').textContent=room.name+'('+room.area+'㎡)에 '+light.name+' '+needed+'개 설치 시 '+totalLux+' Lux (목표: '+room.targetLux+' Lux)';
    document.getElementById('v19-lt-stat').innerHTML='<div class="s"><div class="sv">'+totalLux+'</div><div class="sl">Lux</div></div><div class="s"><div class="sv">'+needed+'개</div><div class="sl">필요수량</div></div><div class="s"><div class="sv">'+totalWatt+'W</div><div class="sl">총전력</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">등급</div></div>';
  }
  function buildTabs(){
    var el=document.getElementById('v19-lt-tabs'); if(!el) return; el.innerHTML='';
    var g=document.createElement('div'); g.style.cssText='display:flex;flex-direction:column;gap:8px;width:100%';
    var r1=document.createElement('div'); r1.style.cssText='display:flex;gap:6px;justify-content:center;flex-wrap:wrap';
    rooms.forEach(function(rm,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===roomSel?' active':''); btn.textContent=rm.name;
      btn.onclick=function(){ roomSel=i; buildTabs(); draw(); v19SFX.play('lighting'); }; r1.appendChild(btn);
    });
    var r2=document.createElement('div'); r2.style.cssText='display:flex;gap:6px;justify-content:center;flex-wrap:wrap';
    lights.forEach(function(lt,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===lightSel?' active':''); btn.textContent=lt.name;
      btn.onclick=function(){ lightSel=i; buildTabs(); draw(); v19SFX.play('lighting'); }; r2.appendChild(btn);
    });
    g.appendChild(r1); g.appendChild(r2); el.appendChild(g);
  }
  return { open:function(){ buildTabs(); draw(); document.getElementById('v19-lighting').classList.add('active'); v19SFX.play('lighting'); },
    close:function(){ document.getElementById('v19-lighting').classList.remove('active'); } };
})();

// ── 5. Traditional Garden Stone Design (10 types) ──
var v19Garden = (function(){
  var stones = [
    {name:'석탑', height:5, weight:2000, beauty:90, tradition:95, maintenance:20, durability:98, desc:'3층/5층/7층 석탑은 불교 문화의 상징'},
    {name:'석등', height:2, weight:300, beauty:85, tradition:90, maintenance:25, durability:95, desc:'석등은 정원 조명과 장식을 걸함'},
    {name:'석교', height:1, weight:800, beauty:80, tradition:85, maintenance:15, durability:97, desc:'석교는 연못을 건너는 조경 요소'},
    {name:'연못', height:0.5, weight:0, beauty:95, tradition:88, maintenance:60, durability:80, desc:'연못은 수경 조경의 핵심 요소'},
    {name:'담장', height:1.8, weight:1500, beauty:75, tradition:92, maintenance:30, durability:90, desc:'돌담장은 경계와 장식을 걸함'},
    {name:'디딜돌', height:0.1, weight:50, beauty:70, tradition:80, maintenance:10, durability:99, desc:'디딜돌은 보행 동선을 안내'},
    {name:'정자대', height:0.8, weight:600, beauty:82, tradition:87, maintenance:20, durability:96, desc:'정자대석은 정자 기초 역할'},
    {name:'배수구', height:0.3, weight:200, beauty:60, tradition:75, maintenance:40, durability:92, desc:'배수구는 빗물 배수의 실용적 요소'},
    {name:'가산', height:3, weight:3000, beauty:92, tradition:93, maintenance:15, durability:97, desc:'가산은 인공 산수 조경으로 자연미 극대화'},
    {name:'징검다리', height:0.05, weight:30, beauty:78, tradition:82, maintenance:12, durability:98, desc:'징검다리는 수경 위의 보행로'}
  ];
  var sel=0;
  function draw(){
    var c=document.getElementById('v19-gd-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    var s=stones[sel];
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(s.name+' 상세 분석',W/2,30);
    var metrics=['beauty','tradition','maintenance','durability'];
    var mLabels=['미관','전통성','유지보수','내구성'];
    var cx=W/2, cy=H/2+10, maxR=Math.min(W,H)/2-60;
    var n=4, angleOff=-Math.PI/2;
    ctx.strokeStyle='rgba(196,149,106,.2)'; ctx.lineWidth=1;
    for(var ring=1;ring<=5;ring++){
      var rr=maxR*ring/5;
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=angleOff+i*(2*Math.PI/n), x=cx+rr*Math.cos(a), y=cy+rr*Math.sin(a);
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=angleOff+i*(2*Math.PI/n);
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+maxR*Math.cos(a),cy+maxR*Math.sin(a)); ctx.stroke();
      ctx.fillStyle='#c4956a'; ctx.font='12px sans-serif'; ctx.textAlign='center';
      var lx=cx+(maxR+18)*Math.cos(a), ly=cy+(maxR+18)*Math.sin(a);
      ctx.fillText(mLabels[i],lx,ly+4);
    }
    ctx.beginPath(); ctx.fillStyle='rgba(78,205,196,.25)'; ctx.strokeStyle='#4ecdc4'; ctx.lineWidth=2;
    for(var i=0;i<=n;i++){
      var idx=i%n, val=s[metrics[idx]]/100, a=angleOff+idx*(2*Math.PI/n);
      var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.fill(); ctx.stroke();
    for(var i=0;i<n;i++){
      var val=s[metrics[i]]/100, a=angleOff+i*(2*Math.PI/n);
      var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
      ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fillStyle='#4ecdc4'; ctx.fill();
      ctx.fillStyle='#f5deb3'; ctx.font='bold 11px sans-serif';
      ctx.fillText(s[metrics[i]]+'%',x,y-10);
    }
    document.getElementById('v19-gd-info').textContent=s.desc;
    var avg=Math.round((s.beauty+s.tradition+s.durability+(100-s.maintenance))/4);
    document.getElementById('v19-gd-stat').innerHTML='<div class="s"><div class="sv">'+avg+'%</div><div class="sl">종합점수</div></div><div class="s"><div class="sv">'+gradeFromScore(avg)+'</div><div class="sl">등급</div></div><div class="s"><div class="sv">'+s.height+'m</div><div class="sl">높이</div></div>';
  }
  function buildTabs(){
    var el=document.getElementById('v19-gd-tabs'); if(!el) return; el.innerHTML='';
    stones.forEach(function(s,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===sel?' active':''); btn.textContent=s.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v19SFX.play('garden'); }; el.appendChild(btn);
    });
  }
  return { open:function(){ buildTabs(); draw(); document.getElementById('v19-garden').classList.add('active'); v19SFX.play('garden'); },
    close:function(){ document.getElementById('v19-garden').classList.remove('active'); } };
})();

// ── 6. Thermal Bridge Diagnosis (8 parts, Radar) ──
var v19Thermal = (function(){
  var parts=['창틀','벽모서리','바닥접합부','기둥','지붕접합','발코니','현관','파라펫'];
  var values=[0,0,0,0,0,0,0,0];
  var KEY='hb_v19_thermal';
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.length===8) values=d; }catch(e){} }
  function save(){ localStorage.setItem(KEY,JSON.stringify(values)); }
  function draw(){
    var c=document.getElementById('v19-th-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText('건축 열교 진단 결과',W/2,28);
    var cx=W/2, cy=H/2+10, maxR=Math.min(W,H)/2-65, n=8, angleOff=-Math.PI/2;
    ctx.strokeStyle='rgba(196,149,106,.15)'; ctx.lineWidth=1;
    for(var ring=1;ring<=5;ring++){
      var rr=maxR*ring/5;
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=angleOff+i*(2*Math.PI/n), x=cx+rr*Math.cos(a), y=cy+rr*Math.sin(a);
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=angleOff+i*(2*Math.PI/n);
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+maxR*Math.cos(a),cy+maxR*Math.sin(a)); ctx.stroke();
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif'; ctx.textAlign='center';
      var lx=cx+(maxR+22)*Math.cos(a), ly=cy+(maxR+22)*Math.sin(a);
      ctx.fillText(parts[i],lx,ly+4);
    }
    ctx.beginPath(); ctx.fillStyle='rgba(255,87,34,.2)'; ctx.strokeStyle='#ff5722'; ctx.lineWidth=2;
    for(var i=0;i<=n;i++){
      var idx=i%n, val=values[idx]/100, a=angleOff+idx*(2*Math.PI/n);
      var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.fill(); ctx.stroke();
    for(var i=0;i<n;i++){
      var val=values[i]/100, a=angleOff+i*(2*Math.PI/n);
      var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
      ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fillStyle='#ff5722'; ctx.fill();
      ctx.fillStyle='#f5deb3'; ctx.font='bold 11px sans-serif';
      ctx.fillText(values[i]+'%',x,y-10);
    }
    var avg=Math.round(values.reduce(function(a,b){return a+b;},0)/8);
    var safeScore=100-avg;
    ctx.fillStyle='rgba(255,87,34,.12)'; ctx.fillRect(W/2-80,H-45,160,24);
    ctx.fillStyle=safeScore>=80?'#4ecdc4':safeScore>=60?'#ff9800':'#ff5722';
    ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
    ctx.fillText('단열안전도: '+safeScore+'% ('+gradeFromScore(safeScore)+')',W/2,H-28);
    document.getElementById('v19-th-info').textContent='열교 위험도 평균: '+avg+'% | 단열 안전도: '+safeScore+'% | 최대 열손실 부위: '+parts[values.indexOf(Math.max.apply(null,values))];
    document.getElementById('v19-th-stat').innerHTML='<div class="s"><div class="sv">'+safeScore+'%</div><div class="sl">안전도</div></div><div class="s"><div class="sv">'+gradeFromScore(safeScore)+'</div><div class="sl">등급</div></div><div class="s"><div class="sv">'+avg+'%</div><div class="sl">평균 열손실</div></div>';
  }
  return {
    open:function(){ load(); draw(); document.getElementById('v19-thermal').classList.add('active'); v19SFX.play('thermal'); },
    close:function(){ document.getElementById('v19-thermal').classList.remove('active'); },
    randomize:function(){ for(var i=0;i<8;i++) values[i]=Math.floor(Math.random()*80)+10; save(); draw(); v19SFX.play('thermal'); },
    reset:function(){ values=[0,0,0,0,0,0,0,0]; save(); draw(); v19SFX.play('thermal'); }
  };
})();

// ── 7. Space Utilization Optimizer (6 types x 6 metrics) ──
var v19Space = (function(){
  var types = [
    {name:'소형(15㎡)', storage:65, flow:55, light:70, privacy:80, flex:45, comfort:60},
    {name:'중형(30㎡)', storage:78, flow:72, light:80, privacy:75, flex:70, comfort:78},
    {name:'대형(50㎡)', storage:90, flow:88, light:85, privacy:85, flex:82, comfort:90},
    {name:'복층(25㎡)', storage:82, flow:60, light:75, privacy:90, flex:78, comfort:72},
    {name:'원룸(10㎡)', storage:50, flow:45, light:65, privacy:40, flex:55, comfort:48},
    {name:'오픈플랜(40㎡)', storage:70, flow:92, light:90, privacy:50, flex:88, comfort:85}
  ];
  var sel=0;
  function draw(){
    var c=document.getElementById('v19-sp-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    var t=types[sel], metrics=['storage','flow','light','privacy','flex','comfort'];
    var labels=['수납력','동선효율','채광','프라이버시','유연성','쾌적성'];
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(t.name+' 공간활용 분석',W/2,28);
    var barW=70, gap=16, startX=(W-(barW*6+gap*5))/2, baseY=H-60;
    var colors=['#e91e63','#2196f3','#ff9800','#4caf50','#9c27b0','#00bcd4'];
    for(var i=0;i<6;i++){
      var val=t[metrics[i]], h=val/100*(baseY-60), x=startX+i*(barW+gap);
      var grad=ctx.createLinearGradient(x,baseY-h,x,baseY);
      grad.addColorStop(0,colors[i]); grad.addColorStop(1,'rgba(0,0,0,.3)');
      ctx.fillStyle=grad;
      ctx.beginPath(); ctx.moveTo(x+4,baseY); ctx.lineTo(x+4,baseY-h+4); ctx.quadraticCurveTo(x+4,baseY-h,x+8,baseY-h); ctx.lineTo(x+barW-8,baseY-h); ctx.quadraticCurveTo(x+barW-4,baseY-h,x+barW-4,baseY-h+4); ctx.lineTo(x+barW-4,baseY); ctx.fill();
      ctx.fillStyle='#f5deb3'; ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
      ctx.fillText(val+'%',x+barW/2,baseY-h-8);
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif';
      ctx.fillText(labels[i],x+barW/2,baseY+16);
    }
    var avg=Math.round(metrics.reduce(function(s,k){return s+t[k];},0)/6);
    ctx.fillStyle='rgba(78,205,196,.12)'; ctx.fillRect(W/2-80,42,160,24);
    ctx.fillStyle='#4ecdc4'; ctx.font='bold 13px sans-serif';
    ctx.fillText('공간활용도: '+avg+'% ('+gradeFromScore(avg)+')',W/2,58);
    document.getElementById('v19-sp-info').textContent=t.name+' 공간의 종합 활용도: '+avg+'% | 최고: '+labels[metrics.indexOf(metrics.reduce(function(best,k){return t[k]>t[best]?k:best;},metrics[0]))]+ ' | 최저: '+labels[metrics.indexOf(metrics.reduce(function(worst,k){return t[k]<t[worst]?k:worst;},metrics[0]))];
    document.getElementById('v19-sp-stat').innerHTML='<div class="s"><div class="sv">'+avg+'%</div><div class="sl">종합점수</div></div><div class="s"><div class="sv">'+gradeFromScore(avg)+'</div><div class="sl">등급</div></div>';
  }
  function buildTabs(){
    var el=document.getElementById('v19-sp-tabs'); if(!el) return; el.innerHTML='';
    types.forEach(function(t,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===sel?' active':''); btn.textContent=t.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v19SFX.play('space'); }; el.appendChild(btn);
    });
  }
  return { open:function(){ buildTabs(); draw(); document.getElementById('v19-space').classList.add('active'); v19SFX.play('space'); },
    close:function(){ document.getElementById('v19-space').classList.remove('active'); } };
})();

// ── 8. Maintenance Calendar (12 items) ──
var v19Maint = (function(){
  var items = [
    {name:'지붕 점검', cycle:12, cost:50, priority:90, lastDone:0},
    {name:'벽체 점검', cycle:24, cost:30, priority:70, lastDone:0},
    {name:'창호 조정', cycle:6, cost:15, priority:60, lastDone:0},
    {name:'배관 점검', cycle:12, cost:80, priority:85, lastDone:0},
    {name:'전기 안전', cycle:12, cost:40, priority:95, lastDone:0},
    {name:'도장 보수', cycle:36, cost:100, priority:50, lastDone:0},
    {name:'바닥 관리', cycle:6, cost:20, priority:55, lastDone:0},
    {name:'방수 점검', cycle:12, cost:60, priority:88, lastDone:0},
    {name:'난방 점검', cycle:12, cost:45, priority:80, lastDone:0},
    {name:'냉방 점검', cycle:12, cost:35, priority:75, lastDone:0},
    {name:'환기 청소', cycle:3, cost:10, priority:65, lastDone:0},
    {name:'외장 세척', cycle:24, cost:70, priority:45, lastDone:0}
  ];
  var simMonth=0, KEY='hb_v19_maint';
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d){ simMonth=d.month||0; if(d.items) d.items.forEach(function(di,i){ if(items[i]) items[i].lastDone=di.lastDone||0; }); } }catch(e){} }
  function save(){ localStorage.setItem(KEY,JSON.stringify({month:simMonth,items:items.map(function(it){return {lastDone:it.lastDone};})})); }
  function draw(){
    var c=document.getElementById('v19-mt-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText('건축 유지보수 캘린더 (현재: '+simMonth+'개월차)',W/2,26);
    var rowH=24, startY=48, barMaxW=W-240;
    var overdue=0, upcoming=0, ok=0;
    for(var i=0;i<12;i++){
      var it=items[i], y=startY+i*(rowH+4);
      var elapsed=simMonth-it.lastDone;
      var ratio=Math.min(elapsed/it.cycle,1.5);
      var status=ratio>=1?'지연':ratio>=0.8?'임박':'양호';
      var color=ratio>=1?'#ff5722':ratio>=0.8?'#ff9800':'#4caf50';
      if(ratio>=1) overdue++; else if(ratio>=0.8) upcoming++; else ok++;
      ctx.fillStyle='rgba(196,149,106,.08)'; ctx.fillRect(10,y,W-20,rowH);
      ctx.fillStyle='#c4956a'; ctx.font='12px sans-serif'; ctx.textAlign='left';
      ctx.fillText(it.name,16,y+16);
      ctx.fillStyle='rgba(255,255,255,.05)'; ctx.fillRect(160,y+4,barMaxW,rowH-8);
      var bw=Math.min(ratio,1.5)/1.5*barMaxW;
      var grd=ctx.createLinearGradient(160,y,160+bw,y); grd.addColorStop(0,color); grd.addColorStop(1,'rgba(0,0,0,.2)');
      ctx.fillStyle=grd; ctx.fillRect(160,y+4,bw,rowH-8);
      ctx.fillStyle=color; ctx.font='bold 11px sans-serif'; ctx.textAlign='right';
      ctx.fillText(status+' ('+elapsed+'/'+it.cycle+'개월)',W-16,y+16);
    }
    document.getElementById('v19-mt-info').textContent='지연: '+overdue+'건 | 임박: '+upcoming+'건 | 양호: '+ok+'건 | 총 월간비용: '+items.reduce(function(s,it){return s+Math.round(it.cost/it.cycle);},0)+'만원';
    document.getElementById('v19-mt-stat').innerHTML='<div class="s"><div class="sv" style="color:'+(overdue>0?'#ff5722':'#4caf50')+'">'+overdue+'</div><div class="sl">지연</div></div><div class="s"><div class="sv" style="color:#ff9800">'+upcoming+'</div><div class="sl">임박</div></div><div class="s"><div class="sv" style="color:#4caf50">'+ok+'</div><div class="sl">양호</div></div>';
  }
  return {
    open:function(){ load(); draw(); document.getElementById('v19-maint').classList.add('active'); v19SFX.play('maint'); },
    close:function(){ document.getElementById('v19-maint').classList.remove('active'); },
    simulate:function(){ simMonth+=12; for(var i=0;i<12;i++){ var it=items[i]; if(simMonth-it.lastDone>=it.cycle){ it.lastDone=simMonth; } } save(); draw(); v19SFX.play('maint'); },
    reset:function(){ simMonth=0; items.forEach(function(it){it.lastDone=0;}); save(); draw(); v19SFX.play('maint'); }
  };
})();

// ── 9. Noise Isolation Design (8 sources, STC/IIC) ──
var v19Noise = (function(){
  var sources = [
    {name:'도로 소음', db:75, stcReq:50, iicReq:0, solution:'이중창+흡음재 벽체', cost:80},
    {name:'항공 소음', db:85, stcReq:55, iicReq:0, solution:'3중창+방음벽+램소판롌', cost:95},
    {name:'이웃 소음', db:55, stcReq:45, iicReq:45, solution:'이중벽체+방진패드', cost:60},
    {name:'설비 소음', db:60, stcReq:40, iicReq:50, solution:'방진마운트+흡음덩트', cost:55},
    {name:'바닥충격', db:65, stcReq:0, iicReq:55, solution:'부유식바닥+충격흡수매트', cost:70},
    {name:'배관 소음', db:50, stcReq:35, iicReq:40, solution:'방진클램프+흡음래핑', cost:45},
    {name:'바람 소음', db:45, stcReq:40, iicReq:0, solution:'방풍스트립+창호밀폐', cost:35},
    {name:'진동 전달', db:55, stcReq:0, iicReq:50, solution:'방진구조+고무패드', cost:65}
  ];
  var sel=0;
  function draw(){
    var c=document.getElementById('v19-ns-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText('소음차단 설계 분석',W/2,28);
    var barW=55, gap=10, startX=(W-(barW*8+gap*7))/2, baseY=H-80;
    var maxDB=100;
    for(var i=0;i<8;i++){
      var s=sources[i], x=startX+i*(barW+gap);
      var h1=s.db/maxDB*(baseY-60);
      var reqH=(s.stcReq||s.iicReq)/maxDB*(baseY-60);
      ctx.fillStyle='rgba(255,87,34,.15)'; ctx.fillRect(x,baseY-h1,barW,h1);
      var grd=ctx.createLinearGradient(x,baseY-h1,x,baseY);
      grd.addColorStop(0,i===sel?'#ff5722':'#ff9800'); grd.addColorStop(1,'rgba(0,0,0,.2)');
      ctx.fillStyle=grd;
      ctx.beginPath(); ctx.moveTo(x+3,baseY); ctx.lineTo(x+3,baseY-h1+3); ctx.quadraticCurveTo(x+3,baseY-h1,x+6,baseY-h1); ctx.lineTo(x+barW-6,baseY-h1); ctx.quadraticCurveTo(x+barW-3,baseY-h1,x+barW-3,baseY-h1+3); ctx.lineTo(x+barW-3,baseY); ctx.fill();
      ctx.strokeStyle='#4ecdc4'; ctx.lineWidth=2; ctx.setLineDash([4,3]);
      ctx.beginPath(); ctx.moveTo(x,baseY-reqH); ctx.lineTo(x+barW,baseY-reqH); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle='#f5deb3'; ctx.font='bold 10px sans-serif'; ctx.textAlign='center';
      ctx.fillText(s.db+'dB',x+barW/2,baseY-h1-6);
      ctx.save(); ctx.translate(x+barW/2,baseY+12); ctx.rotate(-Math.PI/6);
      ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif'; ctx.textAlign='right';
      ctx.fillText(s.name,0,0); ctx.restore();
    }
    ctx.fillStyle='#4ecdc4'; ctx.font='11px sans-serif'; ctx.textAlign='left';
    ctx.fillText('--- 필요 STC/IIC 등급',startX,baseY+50);
    var s=sources[sel];
    ctx.fillStyle='rgba(196,149,106,.15)'; ctx.fillRect(W/2-160,H-35,320,22);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
    ctx.fillText(s.name+': '+s.solution+' (비용 '+s.cost+'만원)',W/2,H-19);
    document.getElementById('v19-ns-info').textContent=s.name+' '+s.db+'dB | 필요 STC: '+s.stcReq+' | 필요 IIC: '+s.iicReq+' | 해결책: '+s.solution;
    document.getElementById('v19-ns-stat').innerHTML='<div class="s"><div class="sv">'+s.db+'dB</div><div class="sl">소음원</div></div><div class="s"><div class="sv">STC'+s.stcReq+'</div><div class="sl">필요등급</div></div><div class="s"><div class="sv">'+s.cost+'만</div><div class="sl">비용</div></div>';
  }
  function buildTabs(){
    var el=document.getElementById('v19-ns-tabs'); if(!el) return; el.innerHTML='';
    sources.forEach(function(s,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===sel?' active':''); btn.textContent=s.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v19SFX.play('noise'); }; el.appendChild(btn);
    });
  }
  return { open:function(){ buildTabs(); draw(); document.getElementById('v19-noise').classList.add('active'); v19SFX.play('noise'); },
    close:function(){ document.getElementById('v19-noise').classList.remove('active'); } };
})();

// ── 10. Traditional Artisan Encyclopedia (10 masters, 6-axis Radar) ──
var v19Artisan = (function(){
  var masters = [
    {name:'도편수', role:'총괄 책임자', skill:95, knowledge:90, experience:92, creativity:85, leadership:98, precision:88, desc:'건축 현장의 총괄 책임자로 설계/시공/관리 전반'},
    {name:'석수', role:'석재 가공', skill:90, knowledge:75, experience:88, creativity:80, leadership:60, precision:95, desc:'돌을 다듬어 초석/석탑/석등 등을 제작'},
    {name:'기와장', role:'기와 제작', skill:88, knowledge:80, experience:85, creativity:75, leadership:55, precision:92, desc:'지붕을 덮는 기와를 제작하고 시공'},
    {name:'번와장', role:'벽돌 제작', skill:82, knowledge:72, experience:80, creativity:65, leadership:50, precision:88, desc:'벽돌과 바닥 타일을 굽고 시공'},
    {name:'소목장', role:'가구/창호', skill:92, knowledge:82, experience:87, creativity:90, leadership:55, precision:94, desc:'창호/문/가구 등 세부 목공예 전문'},
    {name:'대목장', role:'구조체 시공', skill:94, knowledge:88, experience:90, creativity:78, leadership:85, precision:90, desc:'건물의 뿐대 구조(기둥/보/도리)를 시공'},
    {name:'단청장', role:'단청 채색', skill:96, knowledge:85, experience:82, creativity:98, leadership:50, precision:96, desc:'건물에 오방색 단청 문양을 채색'},
    {name:'미장이', role:'벽체 미장', skill:80, knowledge:68, experience:78, creativity:60, leadership:45, precision:85, desc:'흙/석회로 벽체와 바닥을 마감'},
    {name:'초석장', role:'초석 설치', skill:86, knowledge:78, experience:84, creativity:70, leadership:52, precision:90, desc:'건물의 기초가 되는 초석을 가공/설치'},
    {name:'조경장', role:'정원 설계', skill:88, knowledge:82, experience:80, creativity:92, leadership:58, precision:82, desc:'정원/조경을 설계하고 시공'}
  ];
  var sel=0, compare=-1;
  function draw(){
    var c=document.getElementById('v19-ar-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,.95)'; ctx.fillRect(0,0,W,H);
    var m=masters[sel], metrics=['skill','knowledge','experience','creativity','leadership','precision'];
    var labels=['기술력','지식','경험','창의성','통솝력','정밀도'];
    ctx.fillStyle='#f5deb3'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(m.name+' ('+m.role+')',W/2,28);
    var cx=W/2, cy=H/2+10, maxR=Math.min(W,H)/2-65, n=6, angleOff=-Math.PI/2;
    ctx.strokeStyle='rgba(196,149,106,.15)'; ctx.lineWidth=1;
    for(var ring=1;ring<=5;ring++){
      var rr=maxR*ring/5;
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=angleOff+i*(2*Math.PI/n), x=cx+rr*Math.cos(a), y=cy+rr*Math.sin(a);
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=angleOff+i*(2*Math.PI/n);
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+maxR*Math.cos(a),cy+maxR*Math.sin(a)); ctx.stroke();
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif'; ctx.textAlign='center';
      var lx=cx+(maxR+20)*Math.cos(a), ly=cy+(maxR+20)*Math.sin(a);
      ctx.fillText(labels[i],lx,ly+4);
    }
    if(compare>=0 && compare!==sel){
      var m2=masters[compare];
      ctx.beginPath(); ctx.fillStyle='rgba(33,150,243,.15)'; ctx.strokeStyle='#2196f3'; ctx.lineWidth=1.5;
      for(var i=0;i<=n;i++){
        var idx=i%n, val=m2[metrics[idx]]/100, a=angleOff+idx*(2*Math.PI/n);
        var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.fill(); ctx.stroke();
    }
    ctx.beginPath(); ctx.fillStyle='rgba(78,205,196,.2)'; ctx.strokeStyle='#4ecdc4'; ctx.lineWidth=2;
    for(var i=0;i<=n;i++){
      var idx=i%n, val=m[metrics[idx]]/100, a=angleOff+idx*(2*Math.PI/n);
      var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.fill(); ctx.stroke();
    for(var i=0;i<n;i++){
      var val=m[metrics[i]]/100, a=angleOff+i*(2*Math.PI/n);
      var x=cx+maxR*val*Math.cos(a), y=cy+maxR*val*Math.sin(a);
      ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fillStyle='#4ecdc4'; ctx.fill();
      ctx.fillStyle='#f5deb3'; ctx.font='bold 10px sans-serif';
      ctx.fillText(m[metrics[i]],x,y-10);
    }
    var avg=Math.round(metrics.reduce(function(s,k){return s+m[k];},0)/6);
    document.getElementById('v19-ar-info').textContent=m.desc;
    document.getElementById('v19-ar-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">종합점수</div></div><div class="s"><div class="sv">'+gradeFromScore(avg)+'</div><div class="sl">등급</div></div><div class="s"><div class="sv">'+m.role+'</div><div class="sl">역할</div></div>';
  }
  function buildTabs(){
    var el=document.getElementById('v19-ar-tabs'); if(!el) return; el.innerHTML='';
    masters.forEach(function(m,i){
      var btn=document.createElement('button'); btn.className='v19-tab'+(i===sel?' active':'')+(i===compare?' v19-compare':''); btn.textContent=m.name;
      btn.onclick=function(){ if(sel===i) return; compare=sel; sel=i; buildTabs(); draw(); v19SFX.play('artisan'); }; el.appendChild(btn);
    });
  }
  return { open:function(){ buildTabs(); draw(); document.getElementById('v19-artisan').classList.add('active'); v19SFX.play('artisan'); },
    close:function(){ document.getElementById('v19-artisan').classList.remove('active'); compare=-1; } };
})();

// ── 11. Utility: Grade ──
function gradeFromScore(s){ return s>=90?'S':s>=80?'A':s>=70?'B':s>=60?'C':'D'; }

// ── 12. Quiz v19 (+15 questions, 210->225) ──
var v19Quiz = (function(){
  var questions = [
    {q:'방수 공법 중 합성고무 기반으로 자외선/온도 저항성이 가장 높은 것은?', a:['EPDM','아스팔트','PVC','시멘트'], c:0},
    {q:'거실 조명의 권장 조도(Lux)는?', a:['300','150','500','100'], c:0},
    {q:'황금비(φ)의 값은 약?', a:['1.618','1.414','2.236','3.142'], c:0},
    {q:'건축물의 열교 현상이 가장 많이 발생하는 부위는?', a:['창틀','바닥','천장','벽체 중앙'], c:0},
    {q:'STC(Sound Transmission Class)는 무엇을 측정하는 지표인가?', a:['공기전달 소음 차단','충격 소음 차단','열 차단','방수 성능'], c:0},
    {q:'전통 건축에서 대목장의 역할은?', a:['구조체 시공','단청 채색','기와 제작','창호 제작'], c:0},
    {q:'학교/사무실 조명에 가장 적합한 조명 종류는?', a:['LED 패널','백열등','샹들리에','바닥등'], c:0},
    {q:'IIC(Impact Insulation Class)는 무엇을 측정하는가?', a:['바닥충격음 차단','벽체 사이 소음','지붕 방수','창문 단열'], c:0},
    {q:'전통 정원에서 석등의 주요 기능은?', a:['조명과 장식','구조물 지지','방수','방범'], c:0},
    {q:'건축물 유지보수 중 전기 안전점검 주기는 보통?', a:['12개월','6개월','24개월','36개월'], c:0},
    {q:'벤토나이트 방수의 주재료는?', a:['천연 점토','합성고무','아스팔트','우레탄'], c:0},
    {q:'소형 원룸(10㎡)에서 가장 부족한 공간 요소는?', a:['프라이버시','채광','동선','유연성'], c:0},
    {q:'도편수의 역할은?', a:['건축 총괄 책임자','벽체 미장','기와 제작','석재 가공'], c:0},
    {q:'전통 정원의 가산(假山)이란?', a:['인공 산수 조경','석탑 종류','디딜돌 배치','연못 종류'], c:0},
    {q:'항공 소음 차단에 필요한 STC 등급은 최소?', a:['55','35','45','25'], c:0}
  ];
  return {
    inject: function(){
      if(typeof window.quizQuestions!=='object'||!Array.isArray(window.quizQuestions)) return;
      questions.forEach(function(q){
        var exists=window.quizQuestions.some(function(eq){return eq.q===q.q;});
        if(!exists) window.quizQuestions.push(q);
      });
    }
  };
})();

// ── 13. Achievements v19 (+12, 194->206) ──
var v19Achieve = (function(){
  var achieves = [
    {id:'v19_waterproof_analyst', name:'방수 분석가', desc:'방수방습 분석기 열기'},
    {id:'v19_light_designer', name:'조명 설계사', desc:'조명배치 시뮬레이터 열기'},
    {id:'v19_garden_master', name:'정원 석공예사', desc:'정원 석조물 설계 열기'},
    {id:'v19_thermal_inspector', name:'열교 진단사', desc:'열교 진단 시뮬 열기'},
    {id:'v19_space_optimizer', name:'공간 최적화사', desc:'공간활용 최적화 열기'},
    {id:'v19_maint_manager', name:'유지보수 관리자', desc:'유지보수 캘린더 열기'},
    {id:'v19_noise_engineer', name:'방음 설계사', desc:'소음차단 설계 열기'},
    {id:'v19_artisan_scholar', name:'장인 연구가', desc:'전통 장인 도감 열기'},
    {id:'v19_quiz_master', name:'퀴즈 v19 마스터', desc:'퀴즈 v19 15문항 클리어'},
    {id:'v19_quiz_s_rank', name:'퀴즈 v19 S등급', desc:'퀴즈 90점 이상 달성'},
    {id:'v19_multi_explorer', name:'v19 멀티 탐험가', desc:'v19 기능 4개 이상 열기'},
    {id:'v19_complete', name:'v19 컴플리트', desc:'v19 전체 8개 기능 모두 열기'}
  ];
  var KEY='hb_v19_achievements';
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){ return {}; } }
  function save(d){ localStorage.setItem(KEY,JSON.stringify(d)); }
  function unlock(id){
    var d=load(); if(d[id]) return; d[id]=true; save(d);
    if(typeof window.showToast==='function') window.showToast('업적 달성: '+achieves.find(function(a){return a.id===id;}).name);
    v19SFX.play('achieve');
    if(typeof window.achievements==='object'&&Array.isArray(window.achievements)){
      achieves.forEach(function(a){
        var exists=window.achievements.some(function(ea){return ea.id===a.id;});
        if(!exists) window.achievements.push({id:a.id,name:a.name,desc:a.desc,unlocked:!!d[a.id]});
      });
    }
  }
  var opened={};
  function trackOpen(section){
    opened[section]=true;
    var count=Object.keys(opened).length;
    if(count>=4) unlock('v19_multi_explorer');
    if(count>=8) unlock('v19_complete');
  }
  return {
    check:function(){
      var d=load();
      achieves.forEach(function(a){
        if(typeof window.achievements==='object'&&Array.isArray(window.achievements)){
          var exists=window.achievements.some(function(ea){return ea.id===a.id;});
          if(!exists) window.achievements.push({id:a.id,name:a.name,desc:a.desc,unlocked:!!d[a.id]});
        }
      });
    },
    unlock:unlock,
    trackOpen:trackOpen
  };
})();

// ── 14. Side menu buttons (right side, no bottom fixed bar) ──
(function(){
  var menu = document.createElement('div');
  menu.className = 'v19-menu';
  var btns = [
    {icon:'💧', label:'방수분석', fn:function(){ v19Waterproof.open(); v19Achieve.unlock('v19_waterproof_analyst'); v19Achieve.trackOpen('wp'); }},
    {icon:'💡', label:'조명배치', fn:function(){ v19Lighting.open(); v19Achieve.unlock('v19_light_designer'); v19Achieve.trackOpen('lt'); }},
    {icon:'🌿', label:'정원석조', fn:function(){ v19Garden.open(); v19Achieve.unlock('v19_garden_master'); v19Achieve.trackOpen('gd'); }},
    {icon:'🌡', label:'열교진단', fn:function(){ v19Thermal.open(); v19Achieve.unlock('v19_thermal_inspector'); v19Achieve.trackOpen('th'); }},
    {icon:'📐', label:'공간활용', fn:function(){ v19Space.open(); v19Achieve.unlock('v19_space_optimizer'); v19Achieve.trackOpen('sp'); }},
    {icon:'🔧', label:'유지보수', fn:function(){ v19Maint.open(); v19Achieve.unlock('v19_maint_manager'); v19Achieve.trackOpen('mt'); }},
    {icon:'🔇', label:'소음차단', fn:function(){ v19Noise.open(); v19Achieve.unlock('v19_noise_engineer'); v19Achieve.trackOpen('ns'); }},
    {icon:'🏛', label:'장인도감', fn:function(){ v19Artisan.open(); v19Achieve.unlock('v19_artisan_scholar'); v19Achieve.trackOpen('ar'); }}
  ];
  btns.forEach(function(b){
    var el = document.createElement('button');
    el.className = 'v19-menu-btn';
    el.innerHTML = b.icon + '<span class="v19-menu-label">' + b.label + '</span>';
    el.onclick = b.fn;
    menu.appendChild(el);
  });
  document.body.appendChild(menu);
})();

// ── 15. Keyboard shortcuts (Shift+) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(!e.shiftKey) return;
    switch(e.code){
      case 'KeyQ': e.preventDefault(); v19Waterproof.open(); v19Achieve.unlock('v19_waterproof_analyst'); v19Achieve.trackOpen('wp'); break;
      case 'KeyW': e.preventDefault(); v19Lighting.open(); v19Achieve.unlock('v19_light_designer'); v19Achieve.trackOpen('lt'); break;
      case 'KeyE': e.preventDefault(); v19Garden.open(); v19Achieve.unlock('v19_garden_master'); v19Achieve.trackOpen('gd'); break;
      case 'KeyR': e.preventDefault(); v19Thermal.open(); v19Achieve.unlock('v19_thermal_inspector'); v19Achieve.trackOpen('th'); break;
      case 'KeyA': e.preventDefault(); v19Space.open(); v19Achieve.unlock('v19_space_optimizer'); v19Achieve.trackOpen('sp'); break;
      case 'KeyS': e.preventDefault(); v19Maint.open(); v19Achieve.unlock('v19_maint_manager'); v19Achieve.trackOpen('mt'); break;
      case 'KeyD': e.preventDefault(); v19Noise.open(); v19Achieve.unlock('v19_noise_engineer'); v19Achieve.trackOpen('ns'); break;
      case 'KeyF': e.preventDefault(); v19Artisan.open(); v19Achieve.unlock('v19_artisan_scholar'); v19Achieve.trackOpen('ar'); break;
    }
  });
})();

// ── 16. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v19Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 17. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig=window.showComplete;
    if(typeof orig!=='function') return false;
    if(window.__v19Hooked) return true;
    window.__v19Hooked=true;
    var prev=window.showComplete;
    window.showComplete=function(){ prev.apply(this,arguments); v19Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Initial load + checks ──
(function(){
  setTimeout(function(){ v19Achieve.check(); },5000);
})();

// end v19 guard
}

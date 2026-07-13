// =====================================================
// House Builder v18.0 Patch
// 건축황금비분석기Canvas620x400_6건물비율히스토그램+실내공기질모니터Canvas600x380_8실6오염원Radar
// 건축색채심리학Canvas580x360_12색감정맵+전통지붕구조분석기Canvas600x380_8종하중분포
// 건축동선효율분석기Canvas620x380_6레이아웃히트맵+건축비용ROI계산기Canvas580x360_8프로젝트
// 세계전통가옥비교Canvas600x400_10국가6축Radar+건축시공타임랩스Canvas620x380_12단계애니메이션
// 퀴즈+15(195->210)+업적+12(182->194)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV18) {
window.__hbV18 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v18-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5100;overflow-y:auto;padding:16px}',
    '.v18-panel.active{display:block}',
    '.v18-box{max-width:720px;margin:40px auto}',
    '.v18-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v18-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v18-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v18-close:hover{background:#d4a57a}',
    '.v18-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v18-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v18-tab:hover,.v18-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v18-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v18-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v18-stat .s{text-align:center}',
    '.v18-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v18-stat .sl{font-size:11px;color:#c4956a}',
    '.v18-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v18-btn-sm:hover{background:#d4a57a}',
    '.v18-slider-row{display:flex;align-items:center;gap:10px;margin:8px 0}',
    '.v18-slider-row label{color:#c4956a;font-size:12px;min-width:80px}',
    '.v18-slider-row input[type=range]{flex:1;accent-color:#c4956a}',
    '.v18-slider-row .sv{color:#f5deb3;font-size:13px;min-width:40px;text-align:right}',
    '.v18-menu{position:fixed;left:12px;top:50%;transform:translateY(-50%);z-index:4060;display:flex;flex-direction:column;gap:6px}',
    '.v18-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4)}',
    '.v18-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v18-menu-label{position:absolute;left:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v18-menu-btn:hover .v18-menu-label{opacity:1}',
    '@media(max-width:600px){.v18-box{margin:16px auto}.v18-menu{left:6px;gap:4px}.v18-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 1. HTML panels ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v18-panels';
  wrap.innerHTML =
    '<div id="v18-golden" class="v18-panel"><div class="v18-box">' +
      '<h2>✨ 건축 황금비 분석기</h2>' +
      '<p>6건물 황금비(1:1.618) 비례 조화 분석</p>' +
      '<div class="v18-tabs" id="v18-golden-tabs"></div>' +
      '<canvas id="v18-golden-canvas" class="v18-canvas" width="620" height="400"></canvas>' +
      '<div id="v18-golden-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v18-stat" id="v18-golden-stat"></div>' +
      '<button class="v18-close" onclick="v18Golden.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-airquality" class="v18-panel"><div class="v18-box">' +
      '<h2>🌬️ 실내 공기질 모니터</h2>' +
      '<p>8실 6종 오염원 Radar 분석</p>' +
      '<div class="v18-tabs" id="v18-air-tabs"></div>' +
      '<canvas id="v18-air-canvas" class="v18-canvas" width="600" height="380"></canvas>' +
      '<div id="v18-air-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v18-stat" id="v18-air-stat"></div>' +
      '<button class="v18-close" onclick="v18Air.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-colorpsych" class="v18-panel"><div class="v18-box">' +
      '<h2>🎨 건축 색채 심리학</h2>' +
      '<p>12색 감정 효과 및 실내 팔레트 시뮬레이터</p>' +
      '<div class="v18-tabs" id="v18-color-tabs"></div>' +
      '<canvas id="v18-color-canvas" class="v18-canvas" width="580" height="360"></canvas>' +
      '<div id="v18-color-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v18-close" onclick="v18Color.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-roof" class="v18-panel"><div class="v18-box">' +
      '<h2>🏠 전통 지붕 구조 분석기</h2>' +
      '<p>8종 지붕 하중 분포 및 구조 분석</p>' +
      '<div class="v18-tabs" id="v18-roof-tabs"></div>' +
      '<canvas id="v18-roof-canvas" class="v18-canvas" width="600" height="380"></canvas>' +
      '<div id="v18-roof-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v18-stat" id="v18-roof-stat"></div>' +
      '<button class="v18-close" onclick="v18Roof.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-traffic" class="v18-panel"><div class="v18-box">' +
      '<h2>🚶 건축 동선 효율 분석기</h2>' +
      '<p>6레이아웃 실간 이동 히트맵 분석</p>' +
      '<div class="v18-tabs" id="v18-traffic-tabs"></div>' +
      '<canvas id="v18-traffic-canvas" class="v18-canvas" width="620" height="380"></canvas>' +
      '<div id="v18-traffic-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v18-stat" id="v18-traffic-stat"></div>' +
      '<button class="v18-close" onclick="v18Traffic.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-roi" class="v18-panel"><div class="v18-box">' +
      '<h2>💰 건축 비용 ROI 계산기</h2>' +
      '<p>8프로젝트 투자 대비 가치 분석</p>' +
      '<canvas id="v18-roi-canvas" class="v18-canvas" width="580" height="360"></canvas>' +
      '<div id="v18-roi-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v18-stat" id="v18-roi-stat"></div>' +
      '<button class="v18-btn-sm" style="display:block;margin:10px auto" onclick="v18ROI.simulate()">시뮬레이션</button>' +
      '<button class="v18-close" onclick="v18ROI.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-worldhouse" class="v18-panel"><div class="v18-box">' +
      '<h2>🌍 세계 전통가옥 비교</h2>' +
      '<p>10국가 전통 가옥 6축 Radar 비교</p>' +
      '<div class="v18-tabs" id="v18-world-tabs"></div>' +
      '<canvas id="v18-world-canvas" class="v18-canvas" width="600" height="400"></canvas>' +
      '<div id="v18-world-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v18-close" onclick="v18World.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v18-timelapse" class="v18-panel"><div class="v18-box">' +
      '<h2>⏱️ 건축 시공 타임랩스</h2>' +
      '<p>12단계 건축 공정 애니메이션 시뮬레이션</p>' +
      '<canvas id="v18-timelapse-canvas" class="v18-canvas" width="620" height="380"></canvas>' +
      '<div id="v18-timelapse-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v18-stat" id="v18-timelapse-stat"></div>' +
      '<div style="text-align:center;margin:10px 0">' +
        '<button class="v18-btn-sm" id="v18-tl-play" onclick="v18Timelapse.play()">▶ 재생</button> ' +
        '<button class="v18-btn-sm" id="v18-tl-pause" onclick="v18Timelapse.pause()">⏸ 일시정지</button> ' +
        '<button class="v18-btn-sm" onclick="v18Timelapse.reset()">↻ 처음부터</button>' +
      '</div>' +
      '<button class="v18-close" onclick="v18Timelapse.close()">닫기</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 2. SFX Engine (12 types) ──
var v18SFX = (function(){
  var ctx = null;
  function getCtx(){ if(!ctx) try{ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){} return ctx; }
  function play(type){
    if(window.muted) return;
    var c=getCtx(); if(!c) return;
    var o=c.createOscillator(), g=c.createGain();
    o.connect(g); g.connect(c.destination);
    var t=c.currentTime;
    switch(type){
      case 'golden_measure': o.type='triangle';o.frequency.setValueAtTime(554,t);o.frequency.linearRampToValueAtTime(740,t+.15);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.18);o.start(t);o.stop(t+.18);break;
      case 'air_scan': o.type='sine';o.frequency.setValueAtTime(380,t);o.frequency.linearRampToValueAtTime(520,t+.2);g.gain.setValueAtTime(.08,t);g.gain.linearRampToValueAtTime(0,t+.25);o.start(t);o.stop(t+.25);break;
      case 'color_pick': o.type='triangle';o.frequency.setValueAtTime(660,t);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.1);o.start(t);o.stop(t+.1);break;
      case 'roof_load': o.type='sawtooth';o.frequency.setValueAtTime(120,t);o.frequency.linearRampToValueAtTime(60,t+.25);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.3);o.start(t);o.stop(t+.3);break;
      case 'traffic_step': o.type='sine';o.frequency.setValueAtTime(450,t);o.frequency.linearRampToValueAtTime(550,t+.08);g.gain.setValueAtTime(.07,t);g.gain.linearRampToValueAtTime(0,t+.1);o.start(t);o.stop(t+.1);break;
      case 'roi_calc': o.type='triangle';o.frequency.setValueAtTime(700,t);o.frequency.linearRampToValueAtTime(900,t+.1);g.gain.setValueAtTime(.09,t);g.gain.linearRampToValueAtTime(0,t+.14);o.start(t);o.stop(t+.14);break;
      case 'world_explore': o.type='sine';o.frequency.setValueAtTime(330,t);o.frequency.linearRampToValueAtTime(660,t+.2);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.25);o.start(t);o.stop(t+.25);break;
      case 'timelapse_step': o.type='triangle';o.frequency.setValueAtTime(480,t);o.frequency.linearRampToValueAtTime(600,t+.1);g.gain.setValueAtTime(.08,t);g.gain.linearRampToValueAtTime(0,t+.12);o.start(t);o.stop(t+.12);break;
      case 'timelapse_done': o.type='sine';o.frequency.setValueAtTime(523,t);g.gain.setValueAtTime(.12,t);var o2=c.createOscillator(),g2=c.createGain();o2.connect(g2);g2.connect(c.destination);o2.type='sine';o2.frequency.setValueAtTime(784,t+.15);g2.gain.setValueAtTime(.12,t+.15);g2.gain.linearRampToValueAtTime(0,t+.35);g.gain.linearRampToValueAtTime(0,t+.18);o.start(t);o.stop(t+.18);o2.start(t+.15);o2.stop(t+.35);break;
      case 'quiz_correct_v18': o.type='triangle';o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(659,t+.08);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.2);o.start(t);o.stop(t+.2);break;
      case 'quiz_wrong_v18': o.type='sawtooth';o.frequency.setValueAtTime(200,t);o.frequency.linearRampToValueAtTime(100,t+.2);g.gain.setValueAtTime(.08,t);g.gain.linearRampToValueAtTime(0,t+.25);o.start(t);o.stop(t+.25);break;
      case 'achievement_v18': o.type='triangle';o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(659,t+.1);o.frequency.setValueAtTime(784,t+.2);o.frequency.setValueAtTime(1047,t+.3);g.gain.setValueAtTime(.12,t);g.gain.linearRampToValueAtTime(0,t+.45);o.start(t);o.stop(t+.45);break;
    }
  }
  return {play:play};
})();

// ── 3. Golden Ratio Analyzer ──
var v18Golden = (function(){
  var PHI = 1.618033988749895;
  var buildings = [
    {name:'한옥', width:12, height:7.4, depth:8, roofH:4.5, colW:0.4, colH:3.2, desc:'전통 한옥의 지붕 경사와 기둥 비례이 황금비에 근접'},
    {name:'기와집', width:10, height:8, depth:7, roofH:5, colW:0.5, colH:3, desc:'두꺼운 기와 지붕의 무게감과 벽체 비례'},
    {name:'초가집', width:8, height:5.5, depth:6, roofH:3.5, colW:0.3, colH:2.5, desc:'자연 소재의 유기적 비례 관계'},
    {name:'서원', width:18, height:9, depth:12, roofH:5.5, colW:0.45, colH:4, desc:'대칭성과 반복의 조화 비례'},
    {name:'정자', width:6, height:5, depth:6, roofH:4, colW:0.35, colH:3.5, desc:'개방형 구조의 가벼운 비례미'},
    {name:'현대주택', width:14, height:8.5, depth:10, roofH:2, colW:0.3, colH:3, desc:'모듀니즘 기하학적 비례 설계'}
  ];
  var sel = 0;
  function calcRatios(b){
    var wh = b.width/b.height;
    var wd = b.width/b.depth;
    var rh = b.roofH/b.height;
    var ch = b.colH/b.height;
    var cw = b.colW * (b.width/b.colW);
    var harmony = 0;
    var ratios = [
      {name:'폭/높이', val:wh, diff:Math.abs(wh-PHI)},
      {name:'폭/깊이', val:wd, diff:Math.abs(wd-PHI)},
      {name:'지붕/전체', val:rh, diff:Math.abs(rh-(1/PHI))},
      {name:'기둥/전체', val:ch, diff:Math.abs(ch-(1/PHI))},
      {name:'폭/깊이\xB2', val:b.width/(b.depth*b.depth)*b.height, diff:0}
    ];
    ratios[4].diff = Math.abs(ratios[4].val - PHI);
    ratios.forEach(function(r){ harmony += Math.max(0, 100 - r.diff * 100); });
    return {ratios:ratios, harmony: Math.round(harmony/ratios.length)};
  }
  function grade(h){ return h>=90?'S':h>=75?'A':h>=60?'B':h>=45?'C':'D'; }
  function draw(){
    var cvs=document.getElementById('v18-golden-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    var b=buildings[sel];
    var data=calcRatios(b);
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(b.name+' 황금비 분석',W/2,30);
    var barX=60, barW=(W-120)/data.ratios.length-10, barTop=60, barH=H-120;
    data.ratios.forEach(function(r,i){
      var x=barX+i*(barW+10);
      var pct=Math.min(r.val/2.5,1);
      var h=pct*barH;
      var hue=r.diff<0.2?120:r.diff<0.5?60:0;
      ctx.fillStyle='hsla('+hue+',60%,45%,.7)';
      ctx.fillRect(x,barTop+barH-h,barW,h);
      ctx.strokeStyle='hsla('+hue+',60%,60%,.9)';
      ctx.strokeRect(x,barTop+barH-h,barW,h);
      ctx.fillStyle='#f5deb3'; ctx.font='11px sans-serif'; ctx.textAlign='center';
      ctx.fillText(r.val.toFixed(3),x+barW/2,barTop+barH-h-6);
      ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif';
      ctx.fillText(r.name,x+barW/2,barTop+barH+16);
    });
    var phiY=barTop+barH-(PHI/2.5)*barH;
    ctx.setLineDash([6,4]);
    ctx.strokeStyle='#f5deb3'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(40,phiY); ctx.lineTo(W-40,phiY); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 12px sans-serif'; ctx.textAlign='left';
    ctx.fillText('φ='+PHI.toFixed(3),W-110,phiY-6);
    ctx.fillStyle=grade(data.harmony)==='S'?'#4a7c59':grade(data.harmony)==='A'?'#5a8c49':'#c4956a';
    ctx.font='bold 18px sans-serif'; ctx.textAlign='center';
    ctx.fillText('조화도: '+data.harmony+'% ('+grade(data.harmony)+'등급)',W/2,H-20);
    document.getElementById('v18-golden-info').innerHTML=b.desc;
    document.getElementById('v18-golden-stat').innerHTML=
      '<div class="s"><div class="sv">'+data.harmony+'%</div><div class="sl">조화도</div></div>'+
      '<div class="s"><div class="sv">'+grade(data.harmony)+'</div><div class="sl">등급</div></div>'+
      '<div class="s"><div class="sv">φ</div><div class="sl">1.618</div></div>';
  }
  function open(){ document.getElementById('v18-golden').classList.add('active'); buildTabs(); draw(); v18SFX.play('golden_measure'); localStorage.setItem('hb_golden_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-golden').classList.remove('active'); }
  function buildTabs(){
    var cont=document.getElementById('v18-golden-tabs'); cont.innerHTML='';
    buildings.forEach(function(b,i){
      var btn=document.createElement('button');
      btn.className='v18-tab'+(i===sel?' active':'');
      btn.textContent=b.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v18SFX.play('golden_measure'); };
      cont.appendChild(btn);
    });
  }
  return {open:open,close:close};
})();

// ── 4. Indoor Air Quality Monitor ──
var v18Air = (function(){
  var rooms = [
    {name:'거실',pm25:35,co2:620,voc:180,rh:52,co:1.2,radon:48},
    {name:'침실',pm25:28,co2:780,voc:220,rh:58,co:0.8,radon:55},
    {name:'주방',pm25:65,co2:850,voc:350,rh:65,co:3.5,radon:30},
    {name:'욕실',pm25:22,co2:550,voc:280,rh:85,co:0.5,radon:25},
    {name:'서재',pm25:30,co2:700,voc:200,rh:48,co:0.9,radon:60},
    {name:'다용도실',pm25:45,co2:500,voc:150,rh:50,co:1.0,radon:40},
    {name:'다락방',pm25:18,co2:420,voc:90,rh:45,co:0.3,radon:20},
    {name:'창고',pm25:55,co2:480,voc:120,rh:70,co:0.6,radon:85}
  ];
  var axes = ['PM2.5','CO₂','VOC','습도','CO','라돈'];
  var maxVals = [100,1000,500,100,5,100];
  var sel = 0;
  function draw(){
    var cvs=document.getElementById('v18-air-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    var r=rooms[sel];
    var vals=[r.pm25,r.co2,r.voc,r.rh,r.co,r.radon];
    var cx=W/2, cy=H/2+10, rad=Math.min(W,H)/2-60;
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(r.name+' 공기질 분석',cx,28);
    for(var ring=1;ring<=4;ring++){
      ctx.strokeStyle='rgba(196,149,106,'+(0.1+ring*0.05)+')';
      ctx.beginPath(); ctx.arc(cx,cy,rad*ring/4,0,Math.PI*2); ctx.stroke();
    }
    ctx.beginPath();
    vals.forEach(function(v,i){
      var angle=Math.PI*2*i/6-Math.PI/2;
      var norm=Math.min(v/maxVals[i],1);
      var x=cx+Math.cos(angle)*rad*norm;
      var y=cy+Math.sin(angle)*rad*norm;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.fillStyle='rgba(196,149,106,.2)'; ctx.fill();
    ctx.strokeStyle='#c4956a'; ctx.lineWidth=2; ctx.stroke();
    axes.forEach(function(ax,i){
      var angle=Math.PI*2*i/6-Math.PI/2;
      ctx.strokeStyle='rgba(196,149,106,.3)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad); ctx.stroke();
      var lx=cx+Math.cos(angle)*(rad+24);
      var ly=cy+Math.sin(angle)*(rad+24);
      ctx.fillStyle='#f5deb3'; ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(ax,lx,ly);
      ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif';
      ctx.fillText(vals[i]+(i===3?'%':i===4?'ppm':''),lx,ly+14);
    });
    var avg=0; vals.forEach(function(v,i){ avg+=v/maxVals[i]; }); avg=avg/6;
    var quality=avg<0.3?'좋음':avg<0.5?'보통':avg<0.7?'주의':'나쁨';
    var qColor=avg<0.3?'#4a7c59':avg<0.5?'#c4956a':avg<0.7?'#c48c3a':'#c44a3a';
    ctx.fillStyle=qColor; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText('공기질: '+quality,cx,H-16);
    document.getElementById('v18-air-info').innerHTML=r.name+' - PM2.5: '+r.pm25+'µg/m³, CO₂: '+r.co2+'ppm, VOC: '+r.voc+'µg/m³';
    document.getElementById('v18-air-stat').innerHTML=
      '<div class="s"><div class="sv">'+r.pm25+'</div><div class="sl">PM2.5</div></div>'+
      '<div class="s"><div class="sv">'+r.co2+'</div><div class="sl">CO₂ ppm</div></div>'+
      '<div class="s"><div class="sv">'+quality+'</div><div class="sl">종합</div></div>';
  }
  function open(){ document.getElementById('v18-airquality').classList.add('active'); buildTabs(); draw(); v18SFX.play('air_scan'); localStorage.setItem('hb_air_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-airquality').classList.remove('active'); }
  function buildTabs(){
    var cont=document.getElementById('v18-air-tabs'); cont.innerHTML='';
    rooms.forEach(function(r,i){
      var btn=document.createElement('button');
      btn.className='v18-tab'+(i===sel?' active':'');
      btn.textContent=r.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v18SFX.play('air_scan'); };
      cont.appendChild(btn);
    });
  }
  return {open:open,close:close};
})();

// ── 5. Architecture Color Psychology ──
var v18Color = (function(){
  var colors = [
    {name:'빨강', hex:'#C0392B', mood:'열정/활력', room:'다이닝/활동적 공간', energy:90, calm:20, focus:40, warmth:95},
    {name:'주황', hex:'#E67E22', mood:'따뜻함/환영', room:'거실/현관', energy:80, calm:35, focus:50, warmth:90},
    {name:'노랑', hex:'#F1C40F', mood:'희망/창의', room:'서재/어린이방', energy:85, calm:30, focus:60, warmth:75},
    {name:'초록', hex:'#27AE60', mood:'평화/자연', room:'침실/요가실', energy:40, calm:85, focus:65, warmth:45},
    {name:'파랑', hex:'#2980B9', mood:'신뢰/집중', room:'서재/회의실', energy:30, calm:75, focus:90, warmth:25},
    {name:'남색', hex:'#2C3E50', mood:'안정/고급', room:'침실/서재', energy:20, calm:80, focus:85, warmth:30},
    {name:'보라', hex:'#8E44AD', mood:'창의/고귀', room:'명상실/침실', energy:55, calm:60, focus:50, warmth:40},
    {name:'분홍', hex:'#E91E8C', mood:'로맨틱/부드러움', room:'침실/파우더룸', energy:60, calm:50, focus:35, warmth:70},
    {name:'하얀', hex:'#ECF0F1', mood:'깨끗함/확장', room:'욕실/주방', energy:35, calm:70, focus:55, warmth:50},
    {name:'회색', hex:'#95A5A6', mood:'중립/세련', room:'현대적 공간', energy:25, calm:65, focus:60, warmth:35},
    {name:'갈색', hex:'#8B6914', mood:'자연/안정', room:'전통 한옥', energy:35, calm:80, focus:50, warmth:75},
    {name:'검정', hex:'#1C1C1C', mood:'고급/모던', room:'홈시어터/드레스룸', energy:15, calm:55, focus:70, warmth:20}
  ];
  var sel = 0;
  function draw(){
    var cvs=document.getElementById('v18-color-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    var c=colors[sel];
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(c.name+' - '+c.mood,W/2,28);
    ctx.fillStyle=c.hex;
    ctx.fillRect(W/2-80,45,160,60);
    ctx.strokeStyle='#f5deb3'; ctx.lineWidth=1; ctx.strokeRect(W/2-80,45,160,60);
    ctx.fillStyle='#f5deb3'; ctx.font='12px sans-serif';
    ctx.fillText(c.hex,W/2,90);
    var metrics=[{name:'에너지',val:c.energy},{name:'안정감',val:c.calm},{name:'집중력',val:c.focus},{name:'따뜻함',val:c.warmth}];
    var barX=60, barW=(W-120)/metrics.length-12, barTop=130, barH=H-200;
    metrics.forEach(function(m,i){
      var x=barX+i*(barW+12);
      var h=m.val/100*barH;
      var grad=ctx.createLinearGradient(x,barTop+barH-h,x,barTop+barH);
      grad.addColorStop(0,c.hex);
      grad.addColorStop(1,'rgba(196,149,106,.3)');
      ctx.fillStyle=grad;
      ctx.fillRect(x,barTop+barH-h,barW,h);
      ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
      ctx.fillText(m.val+'%',x+barW/2,barTop+barH-h-8);
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif';
      ctx.fillText(m.name,x+barW/2,barTop+barH+18);
    });
    ctx.fillStyle='#e8d5c0'; ctx.font='13px sans-serif'; ctx.textAlign='center';
    ctx.fillText('추천 공간: '+c.room,W/2,H-16);
    document.getElementById('v18-color-info').innerHTML=c.name+' 색상은 '+c.mood+' 느낌을 주며, '+c.room+'에 적합합니다.';
  }
  function open(){ document.getElementById('v18-colorpsych').classList.add('active'); buildTabs(); draw(); v18SFX.play('color_pick'); localStorage.setItem('hb_color_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-colorpsych').classList.remove('active'); }
  function buildTabs(){
    var cont=document.getElementById('v18-color-tabs'); cont.innerHTML='';
    colors.forEach(function(c,i){
      var btn=document.createElement('button');
      btn.className='v18-tab'+(i===sel?' active':'');
      btn.style.borderColor=c.hex;
      btn.textContent=c.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v18SFX.play('color_pick'); };
      cont.appendChild(btn);
    });
  }
  return {open:open,close:close};
})();

// ── 6. Traditional Roof Structure Analyzer ──
var v18Roof = (function(){
  var roofs = [
    {name:'맞배지붕', slope:35, weight:85, wind:70, rain:90, snow:80, beauty:75, durability:85, cost:60, desc:'앞뒤 두 면이 만나는 가장 기본적인 지붕 형태'},
    {name:'팔작지붕', slope:30, weight:90, wind:60, rain:95, snow:85, beauty:90, durability:80, cost:80, desc:'사방으로 경사면이 있어 빗물 배수가 우수'},
    {name:'우진각지붕', slope:25, weight:75, wind:65, rain:80, snow:70, beauty:85, durability:75, cost:70, desc:'지붕 위에 작은 지붕을 올린 전통 양식'},
    {name:'초가지붕', slope:40, weight:60, wind:55, rain:70, snow:65, beauty:80, durability:50, cost:30, desc:'볼짚/이엽으로 덮은 자연친화적 지붕'},
    {name:'모임지붕', slope:20, weight:95, wind:50, rain:85, snow:90, beauty:95, durability:90, cost:95, desc:'두 개의 팔작지붕이 결합된 가장 화려한 형태'},
    {name:'평지붕', slope:5, weight:70, wind:80, rain:50, snow:40, beauty:60, durability:70, cost:50, desc:'현대 건축에서 많이 사용되는 평평한 지붕'},
    {name:'동그란물지붕', slope:0, weight:80, wind:75, rain:75, snow:60, beauty:70, durability:85, cost:85, desc:'반원형 돔 형태의 구조적으로 강한 지붕'},
    {name:'버터플라이지붕', slope:10, weight:65, wind:85, rain:60, snow:55, beauty:65, durability:75, cost:60, desc:'날개 형태로 바람에 강한 현대적 지붕'}
  ];
  var sel=0;
  function draw(){
    var cvs=document.getElementById('v18-roof-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    var rf=roofs[sel];
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(rf.name+' 구조 분석',W/2,28);
    var metrics=[
      {name:'하중저항',val:rf.weight},{name:'바람저항',val:rf.wind},
      {name:'뱄물배수',val:rf.rain},{name:'적설하중',val:rf.snow},
      {name:'미관성',val:rf.beauty},{name:'내구성',val:rf.durability}
    ];
    var cx=W/2, cy=H/2+15, rad=Math.min(W,H)/2-70;
    for(var ring=1;ring<=4;ring++){
      ctx.strokeStyle='rgba(196,149,106,'+(0.1+ring*0.05)+')';
      ctx.beginPath(); ctx.arc(cx,cy,rad*ring/4,0,Math.PI*2); ctx.stroke();
    }
    ctx.beginPath();
    metrics.forEach(function(m,i){
      var angle=Math.PI*2*i/metrics.length-Math.PI/2;
      var norm=m.val/100;
      var x=cx+Math.cos(angle)*rad*norm;
      var y=cy+Math.sin(angle)*rad*norm;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.fillStyle='rgba(74,124,89,.25)'; ctx.fill();
    ctx.strokeStyle='#4a7c59'; ctx.lineWidth=2; ctx.stroke();
    metrics.forEach(function(m,i){
      var angle=Math.PI*2*i/metrics.length-Math.PI/2;
      ctx.strokeStyle='rgba(196,149,106,.25)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad); ctx.stroke();
      var lx=cx+Math.cos(angle)*(rad+28);
      var ly=cy+Math.sin(angle)*(rad+28);
      ctx.fillStyle='#f5deb3'; ctx.font='11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(m.name,lx,ly);
      ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif';
      ctx.fillText(m.val+'%',lx,ly+13);
    });
    var avg=Math.round((rf.weight+rf.wind+rf.rain+rf.snow+rf.beauty+rf.durability)/6);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText('종합: '+avg+'% | 경사각: '+rf.slope+'° | 비용: '+rf.cost+'%',W/2,H-14);
    document.getElementById('v18-roof-info').innerHTML=rf.desc;
    document.getElementById('v18-roof-stat').innerHTML=
      '<div class="s"><div class="sv">'+avg+'%</div><div class="sl">종합성능</div></div>'+
      '<div class="s"><div class="sv">'+rf.slope+'°</div><div class="sl">경사각</div></div>'+
      '<div class="s"><div class="sv">'+rf.cost+'%</div><div class="sl">비용지수</div></div>';
  }
  function open(){ document.getElementById('v18-roof').classList.add('active'); buildTabs(); draw(); v18SFX.play('roof_load'); localStorage.setItem('hb_roof_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-roof').classList.remove('active'); }
  function buildTabs(){
    var cont=document.getElementById('v18-roof-tabs'); cont.innerHTML='';
    roofs.forEach(function(r,i){
      var btn=document.createElement('button');
      btn.className='v18-tab'+(i===sel?' active':'');
      btn.textContent=r.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v18SFX.play('roof_load'); };
      cont.appendChild(btn);
    });
  }
  return {open:open,close:close};
})();

// ── 7. Traffic Flow Efficiency Analyzer ──
var v18Traffic = (function(){
  var layouts = [
    {name:'일자형', rooms:['현관','거실','주방','침실','욕실','서재'], flows:[[0,1,95],[1,2,80],[1,3,70],[3,4,60],[1,5,40],[2,4,30]], efficiency:65, desc:'방들이 일렬로 배치된 전통적 구조'},
    {name:'중앙홀형', rooms:['현관','홀','거실','주방','침실','욕실'], flows:[[0,1,90],[1,2,85],[1,3,75],[1,4,70],[1,5,65],[2,3,40]], efficiency:82, desc:'중앙 홀에서 모든 방으로 접근 가능'},
    {name:'오픈플랜', rooms:['현관','리빙','키친','침실A','침실B','욕실'], flows:[[0,1,95],[1,2,90],[1,3,60],[1,4,55],[3,5,50],[4,5,45]], efficiency:78, desc:'공용 공간이 하나로 통합된 현대적 구조'},
    {name:'L자형', rooms:['현관','거실','주방','침실','욕실','발코니'], flows:[[0,1,90],[1,2,75],[1,3,65],[3,4,55],[1,5,45],[2,5,30]], efficiency:70, desc:'L자 형태로 공간 활용도 높음'},
    {name:'마당중심', rooms:['마당','거실','주방','침실','욕실','창고'], flows:[[0,1,85],[0,2,70],[1,3,65],[3,4,60],[0,5,35],[2,5,25]], efficiency:75, desc:'마당(Courtyard)을 중심으로 배치'},
    {name:'복층형', rooms:['1F거실','1F주방','1F욕실','2F침실','2F서재','2F욕실'], flows:[[0,1,85],[0,2,50],[0,3,70],[3,4,60],[3,5,55],[1,2,40]], efficiency:72, desc:'2층 구조로 공간 분리'}
  ];
  var sel=0;
  function draw(){
    var cvs=document.getElementById('v18-traffic-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    var ly=layouts[sel];
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(ly.name+' 동선 분석',W/2,28);
    var nodeR=30;
    var positions=[];
    var cx=W/2, cy=H/2+10;
    ly.rooms.forEach(function(r,i){
      var angle=Math.PI*2*i/ly.rooms.length-Math.PI/2;
      var rad=Math.min(W,H)/2-80;
      positions.push({x:cx+Math.cos(angle)*rad, y:cy+Math.sin(angle)*rad});
    });
    ly.flows.forEach(function(f){
      var from=positions[f[0]], to=positions[f[1]];
      var intensity=f[2]/100;
      ctx.strokeStyle='rgba(196,149,106,'+(.2+intensity*.6)+')';
      ctx.lineWidth=1+intensity*5;
      ctx.beginPath(); ctx.moveTo(from.x,from.y); ctx.lineTo(to.x,to.y); ctx.stroke();
      var mx=(from.x+to.x)/2, my=(from.y+to.y)/2;
      ctx.fillStyle='rgba(245,222,179,.7)'; ctx.font='10px sans-serif'; ctx.textAlign='center';
      ctx.fillText(f[2]+'%',mx,my-6);
    });
    ly.rooms.forEach(function(r,i){
      var p=positions[i];
      ctx.fillStyle='rgba(45,27,14,.9)';
      ctx.beginPath(); ctx.arc(p.x,p.y,nodeR,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle='#c4956a'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.arc(p.x,p.y,nodeR,0,Math.PI*2); ctx.stroke();
      ctx.fillStyle='#f5deb3'; ctx.font='11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(r,p.x,p.y);
    });
    var eColor=ly.efficiency>=80?'#4a7c59':ly.efficiency>=65?'#c4956a':'#c44a3a';
    ctx.fillStyle=eColor; ctx.font='bold 15px sans-serif'; ctx.textAlign='center';
    ctx.fillText('동선 효율: '+ly.efficiency+'%',W/2,H-14);
    document.getElementById('v18-traffic-info').innerHTML=ly.desc;
    document.getElementById('v18-traffic-stat').innerHTML=
      '<div class="s"><div class="sv">'+ly.efficiency+'%</div><div class="sl">효율</div></div>'+
      '<div class="s"><div class="sv">'+ly.rooms.length+'</div><div class="sl">실</div></div>'+
      '<div class="s"><div class="sv">'+ly.flows.length+'</div><div class="sl">동선</div></div>';
  }
  function open(){ document.getElementById('v18-traffic').classList.add('active'); buildTabs(); draw(); v18SFX.play('traffic_step'); localStorage.setItem('hb_traffic_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-traffic').classList.remove('active'); }
  function buildTabs(){
    var cont=document.getElementById('v18-traffic-tabs'); cont.innerHTML='';
    layouts.forEach(function(l,i){
      var btn=document.createElement('button');
      btn.className='v18-tab'+(i===sel?' active':'');
      btn.textContent=l.name;
      btn.onclick=function(){ sel=i; buildTabs(); draw(); v18SFX.play('traffic_step'); };
      cont.appendChild(btn);
    });
  }
  return {open:open,close:close};
})();

// ── 8. Architecture Cost ROI Calculator ──
var v18ROI = (function(){
  var projects = [
    {name:'한옥 신축', cost:350, value:520, years:30, maint:8},
    {name:'기와집 복원', cost:280, value:450, years:25, maint:12},
    {name:'초가집 보존', cost:120, value:200, years:15, maint:15},
    {name:'현대주택 신축', cost:500, value:680, years:40, maint:5},
    {name:'서원 복원', cost:420, value:600, years:35, maint:10},
    {name:'정자 신축', cost:180, value:280, years:20, maint:7},
    {name:'리모델링', cost:200, value:350, years:15, maint:6},
    {name:'에너지 개선', cost:80, value:180, years:10, maint:3}
  ];
  function draw(){
    var cvs=document.getElementById('v18-roi-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText('건축 투자 ROI 비교 (단위: 백만원)',W/2,28);
    var barH=(H-100)/projects.length-6;
    var maxVal=700;
    projects.forEach(function(p,i){
      var y=50+i*(barH+6);
      var costW=p.cost/maxVal*(W-180);
      var valW=p.value/maxVal*(W-180);
      ctx.fillStyle='rgba(196,80,80,.5)';
      ctx.fillRect(130,y,costW,barH/2-1);
      ctx.fillStyle='rgba(74,124,89,.5)';
      ctx.fillRect(130,y+barH/2,valW,barH/2-1);
      ctx.fillStyle='#f5deb3'; ctx.font='11px sans-serif'; ctx.textAlign='right';
      ctx.fillText(p.name,125,y+barH/2+4);
      var roi=Math.round((p.value-p.cost)/p.cost*100);
      ctx.fillStyle=roi>50?'#4a7c59':'#c4956a'; ctx.font='bold 11px sans-serif'; ctx.textAlign='left';
      ctx.fillText('ROI:'+roi+'%',Math.max(costW,valW)+135,y+barH/2+4);
    });
    ctx.fillStyle='rgba(196,80,80,.6)'; ctx.fillRect(W-200,H-22,12,10);
    ctx.fillStyle='rgba(74,124,89,.6)'; ctx.fillRect(W-120,H-22,12,10);
    ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif'; ctx.textAlign='left';
    ctx.fillText('투자비용',W-185,H-13);
    ctx.fillText('가치',W-105,H-13);
    var bestROI=0,bestName='';
    projects.forEach(function(p){ var r=(p.value-p.cost)/p.cost*100; if(r>bestROI){bestROI=r;bestName=p.name;} });
    document.getElementById('v18-roi-info').innerHTML='최고 ROI: '+bestName+' ('+Math.round(bestROI)+'%)';
    document.getElementById('v18-roi-stat').innerHTML=
      '<div class="s"><div class="sv">'+projects.length+'</div><div class="sl">프로젝트</div></div>'+
      '<div class="s"><div class="sv">'+Math.round(bestROI)+'%</div><div class="sl">최고ROI</div></div>'+
      '<div class="s"><div class="sv">'+bestName+'</div><div class="sl">베스트</div></div>';
  }
  function simulate(){
    projects.forEach(function(p){
      p.cost=Math.round(p.cost*(0.85+Math.random()*0.3));
      p.value=Math.round(p.value*(0.9+Math.random()*0.2));
    });
    draw(); v18SFX.play('roi_calc');
  }
  function open(){ document.getElementById('v18-roi').classList.add('active'); draw(); v18SFX.play('roi_calc'); localStorage.setItem('hb_roi_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-roi').classList.remove('active'); }
  return {open:open,close:close,simulate:simulate};
})();

// ── 9. World Traditional Houses Comparison ──
var v18World = (function(){
  var houses = [
    {name:'한옥 (한국)',flag:'🇰🇷', insulation:70,ventilation:90,durability:80,beauty:90,eco:95,cost:65,desc:'온돌과 마루, 자연 소재의 조화'},
    {name:'마카 (일본)',flag:'🇯🇵', insulation:50,ventilation:85,durability:75,beauty:85,eco:80,cost:70,desc:'나무와 종이의 경량 구조, 허술멕 마루'},
    {name:'쓰허원 (중국)',flag:'🇨🇳', insulation:80,ventilation:75,durability:90,beauty:85,eco:75,cost:60,desc:'내부 중정과 절바한 대칭 구조'},
    {name:'투독 (영국)',flag:'🇬🇧', insulation:85,ventilation:60,durability:95,beauty:80,eco:55,cost:55,desc:'목골 구조와 회벘죽 벽체의 조합'},
    {name:'이글루 (에스키모)',flag:'❄️', insulation:95,ventilation:40,durability:60,beauty:70,eco:90,cost:80,desc:'눈과 얼음으로 만든 극한 단열 구조'},
    {name:'아도비 (북아프)',flag:'🇩🇿', insulation:90,ventilation:55,durability:85,beauty:75,eco:90,cost:85,desc:'흙벽돌 구조의 뜨어난 단열 성능'},
    {name:'요루트 (모골)',flag:'🇲🇳', insulation:75,ventilation:80,durability:70,beauty:65,eco:85,cost:90,desc:'유목민의 이동식 텔트 구조물'},
    {name:'하니 (하와이)',flag:'🇺🇸', insulation:30,ventilation:95,durability:65,beauty:80,eco:85,cost:75,desc:'개방형 구조로 통풍 극대화'},
    {name:'파르니스 (드물니)',flag:'🇬🇷', insulation:65,ventilation:70,durability:85,beauty:95,eco:70,cost:50,desc:'헌 벽과 파란 지붕의 에게해 양식'},
    {name:'팔라피타 (필리핀)',flag:'🇵🇭', insulation:25,ventilation:95,durability:55,beauty:75,eco:90,cost:90,desc:'고상 주거로 홍수 방지, 나무/대나무 구조'}
  ];
  var sel=0, cmpSel=-1;
  function draw(){
    var cvs=document.getElementById('v18-world-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    var h=houses[sel];
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText(h.flag+' '+h.name,W/2,28);
    var axes=['단열','환기','내구','미관','친환경','비용'];
    var vals=[h.insulation,h.ventilation,h.durability,h.beauty,h.eco,h.cost];
    var cx=W/2, cy=H/2+10, rad=Math.min(W,H)/2-70;
    for(var ring=1;ring<=4;ring++){
      ctx.strokeStyle='rgba(196,149,106,'+(0.1+ring*0.05)+')';
      ctx.beginPath(); ctx.arc(cx,cy,rad*ring/4,0,Math.PI*2); ctx.stroke();
    }
    ctx.beginPath();
    vals.forEach(function(v,i){
      var angle=Math.PI*2*i/6-Math.PI/2;
      var norm=v/100;
      var x=cx+Math.cos(angle)*rad*norm;
      var y=cy+Math.sin(angle)*rad*norm;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.fillStyle='rgba(196,149,106,.2)'; ctx.fill();
    ctx.strokeStyle='#c4956a'; ctx.lineWidth=2; ctx.stroke();
    if(cmpSel>=0 && cmpSel!==sel){
      var h2=houses[cmpSel];
      var vals2=[h2.insulation,h2.ventilation,h2.durability,h2.beauty,h2.eco,h2.cost];
      ctx.beginPath();
      vals2.forEach(function(v,i){
        var angle=Math.PI*2*i/6-Math.PI/2;
        var norm=v/100;
        var x=cx+Math.cos(angle)*rad*norm;
        var y=cy+Math.sin(angle)*rad*norm;
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      });
      ctx.closePath();
      ctx.fillStyle='rgba(74,124,89,.15)'; ctx.fill();
      ctx.strokeStyle='#4a7c59'; ctx.lineWidth=2; ctx.stroke();
      ctx.fillStyle='#4a7c59'; ctx.font='12px sans-serif'; ctx.textAlign='right';
      ctx.fillText('● '+h2.name,W-20,H-8);
    }
    axes.forEach(function(ax,i){
      var angle=Math.PI*2*i/6-Math.PI/2;
      ctx.strokeStyle='rgba(196,149,106,.25)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(angle)*rad,cy+Math.sin(angle)*rad); ctx.stroke();
      var lx=cx+Math.cos(angle)*(rad+26);
      var ly=cy+Math.sin(angle)*(rad+26);
      ctx.fillStyle='#f5deb3'; ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(ax,lx,ly);
    });
    document.getElementById('v18-world-info').innerHTML=h.desc;
  }
  function open(){ document.getElementById('v18-worldhouse').classList.add('active'); buildTabs(); draw(); v18SFX.play('world_explore'); localStorage.setItem('hb_world_v18','1'); v18Achieve.check(); }
  function close(){ document.getElementById('v18-worldhouse').classList.remove('active'); cmpSel=-1; }
  function buildTabs(){
    var cont=document.getElementById('v18-world-tabs'); cont.innerHTML='';
    houses.forEach(function(h,i){
      var btn=document.createElement('button');
      btn.className='v18-tab'+(i===sel?' active':'');
      btn.textContent=h.flag+' '+h.name.split(' (')[0];
      btn.onclick=function(){ if(sel===i){cmpSel=-1;}else{cmpSel=sel;sel=i;} buildTabs(); draw(); v18SFX.play('world_explore'); };
      cont.appendChild(btn);
    });
  }
  return {open:open,close:close};
})();

// ── 10. Construction Timelapse Simulator ──
var v18Timelapse = (function(){
  var steps = [
    {name:'터파기',pct:0,color:'#8B6914',desc:'건축 부지 정리 및 기초 터파기'},
    {name:'기초공사',pct:8,color:'#888',desc:'잡석 포설 및 콘크리트 기초 타설'},
    {name:'초석 놓기',pct:16,color:'#666',desc:'기둥을 받치는 초석 배치'},
    {name:'기둥 세우기',pct:24,color:'#4a2c17',desc:'목재 기둥 수직 설치'},
    {name:'보/도리 결구',pct:34,color:'#5a3a20',desc:'수평 보와 도리 결구 작업'},
    {name:'서까래 올리기',pct:44,color:'#6a4a30',desc:'지붕 경사 구조 서까래 설치'},
    {name:'지붕 덮기',pct:55,color:'#C4956A',desc:'기와/초가/한식 기와 지붕 덮기'},
    {name:'벽체 상기',pct:65,color:'#f5deb3',desc:'회반죽/황토 벽체 설치'},
    {name:'창호지 설치',pct:74,color:'#DEB887',desc:'문과 창에 창호지/유리 설치'},
    {name:'바닥 마감',pct:82,color:'#D2691E',desc:'마루/온돌 바닥 마감 작업'},
    {name:'단청 및 문양',pct:90,color:'#C44A3A',desc:'전통 단청 문양 및 색칠'},
    {name:'조경 및 완공',pct:100,color:'#4a7c59',desc:'조경 및 최종 완공 검사'}
  ];
  var currentStep=0, animId=null, playing=false;
  function draw(){
    var cvs=document.getElementById('v18-timelapse-canvas'); if(!cvs) return;
    var ctx=cvs.getContext('2d');
    var W=cvs.width, H=cvs.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1209'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#c4956a'; ctx.font='bold 16px sans-serif'; ctx.textAlign='center';
    ctx.fillText('건축 시공 타임랩스',W/2,28);
    var groundY=H-80;
    ctx.fillStyle='#3a2a1a'; ctx.fillRect(0,groundY,W,H-groundY);
    var bx=W/2-100, bw=200, maxBH=groundY-60;
    for(var i=0;i<=currentStep&&i<steps.length;i++){
      var s=steps[i];
      var stepH=maxBH*(s.pct/100);
      var y=groundY-stepH;
      ctx.fillStyle=s.color;
      if(i<=2){
        ctx.fillRect(bx-20,groundY-stepH,bw+40,stepH);
      } else if(i<=5){
        ctx.fillRect(bx,y,bw,groundY-y);
      } else if(i===6){
        ctx.beginPath();
        ctx.moveTo(bx-30,groundY-maxBH*0.44);
        ctx.lineTo(W/2,groundY-maxBH*0.7);
        ctx.lineTo(bx+bw+30,groundY-maxBH*0.44);
        ctx.closePath();
        ctx.fillStyle=s.color; ctx.fill();
      } else {
        ctx.globalAlpha=0.3+i*0.06;
        ctx.fillRect(bx+10,groundY-maxBH*0.6,bw-20,maxBH*0.16);
        ctx.globalAlpha=1;
      }
    }
    var barY=groundY+14, barH=12, barW=W-80;
    ctx.fillStyle='rgba(196,149,106,.2)';
    ctx.fillRect(40,barY,barW,barH);
    var progress=steps[currentStep].pct;
    ctx.fillStyle='#c4956a';
    ctx.fillRect(40,barY,barW*(progress/100),barH);
    steps.forEach(function(s,i){
      var dotX=40+barW*(s.pct/100);
      ctx.fillStyle=i<=currentStep?'#f5deb3':'rgba(196,149,106,.4)';
      ctx.beginPath(); ctx.arc(dotX,barY+barH/2,4,0,Math.PI*2); ctx.fill();
    });
    ctx.fillStyle='#f5deb3'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
    ctx.fillText((currentStep+1)+'/'+steps.length+' - '+steps[currentStep].name,W/2,barY+barH+18);
    document.getElementById('v18-timelapse-info').innerHTML=steps[currentStep].desc;
    document.getElementById('v18-timelapse-stat').innerHTML=
      '<div class="s"><div class="sv">'+(currentStep+1)+'</div><div class="sl">/'+steps.length+' 단계</div></div>'+
      '<div class="s"><div class="sv">'+steps[currentStep].pct+'%</div><div class="sl">진행률</div></div>'+
      '<div class="s"><div class="sv">'+steps[currentStep].name+'</div><div class="sl">현재공정</div></div>';
  }
  function play(){
    if(playing) return;
    playing=true;
    function tick(){
      if(!playing) return;
      if(currentStep<steps.length-1){
        currentStep++;
        draw();
        v18SFX.play('timelapse_step');
        animId=setTimeout(tick,800);
      } else {
        playing=false;
        v18SFX.play('timelapse_done');
        localStorage.setItem('hb_timelapse_v18','1');
        v18Achieve.check();
      }
    }
    tick();
  }
  function pause(){ playing=false; if(animId) clearTimeout(animId); }
  function reset(){ pause(); currentStep=0; draw(); }
  function open(){ document.getElementById('v18-timelapse').classList.add('active'); currentStep=0; playing=false; draw(); v18SFX.play('timelapse_step'); localStorage.setItem('hb_timelapse_v18','1'); v18Achieve.check(); }
  function close(){ pause(); document.getElementById('v18-timelapse').classList.remove('active'); }
  return {open:open,close:close,play:play,pause:pause,reset:reset};
})();

// ── 11. Quiz +15 questions (195->210) ──
var v18Quiz = (function(){
  var qs = [
    {q:'황금비(φ)의 값은 약 얼마인가?', a:['약 1.618','약 2.718','약 3.14','약 1.414'], c:0},
    {q:'실내 CO₂ 농도가 몇 ppm 이상이면 환기가 필요한가?', a:['1000ppm','500ppm','2000ppm','3000ppm'], c:0},
    {q:'파란색이 주는 심리적 효과는?', a:['신뢰/집중','열정/활력','창의/고귀','평화/자연'], c:0},
    {q:'팔작지붕의 특징은?', a:['사방으로 경사면','평평한 지붕','반원형 돔','날개 형태'], c:0},
    {q:'건축 동선 설계에서 가장 효율적인 형태는?', a:['중앙홀형','일자형','L자형','복층형'], c:0},
    {q:'PM2.5에서 숫자 2.5가 의미하는 것은?', a:['직경 2.5µm 이하','농도 2.5ppm','중량 2.5mg','수명 2.5년'], c:0},
    {q:'이글루의 가장 뛰어난 건축적 특성은?', a:['단열 성능','미관성','내구성','환기성'], c:0},
    {q:'건축 시공에서 초석의 역할은?', a:['기둥 하중 지지','지붕 방수','벽체 장식','바닥 단열'], c:0},
    {q:'한옥의 마루의 주요 기능은?', a:['통풍과 생활 공간','방수와 방답','방화와 내화','수납과 저장'], c:0},
    {q:'VOC는 무엇의 약자인가?', a:['휘발성유기화합물','가변전압회로','변동운영비용','시각적최적화제어'], c:0},
    {q:'ROI가 가장 높은 건축 프로젝트 유형은 일반적으로?', a:['에너지 개선','신축','복원','리모델링'], c:0},
    {q:'파르니스 건축의 특징적인 색상은?', a:['흰 벽과 파란 지붕','붉은 벽과 검정 지붕','노란 벽과 초록 지붕','회색 벽과 보라 지붕'], c:0},
    {q:'건축에서 단청의 주요 목적은?', a:['보호와 장식','방수와 방습','단열과 방음','구조적 보강'], c:0},
    {q:'북아프리카 아도비 건축의 주 재료는?', a:['흙벽돌(Mudbrick)','나무','돌','대나무'], c:0},
    {q:'건축 공정에서 보(Beam)의 역할은?', a:['수평 하중 전달','수직 하중 지지','지붕 방수','벽체 장식'], c:0}
  ];
  function inject(){
    if(typeof window.quizQuestions!=='object'||!Array.isArray(window.quizQuestions)) return;
    var existing=window.quizQuestions.length;
    qs.forEach(function(q,i){
      window.quizQuestions.push({
        id:'v18_q'+(i+1),
        question:q.q,
        answers:q.a,
        correct:q.c,
        category:'v18'
      });
    });
  }
  return {inject:inject};
})();

// ── 12. Achievements +12 (182->194) ──
var v18Achieve = (function(){
  var achievements = [
    {id:'v18_golden_master', name:'황금비 마스터', desc:'황금비 분석기 사용'},
    {id:'v18_air_expert', name:'공기질 전문가', desc:'실내 공기질 모니터 사용'},
    {id:'v18_color_artist', name:'색채 예술가', desc:'건축 색채 심리학 사용'},
    {id:'v18_roof_engineer', name:'지붕 엔지니어', desc:'전통 지붕 구조 분석기 사용'},
    {id:'v18_traffic_planner', name:'동선 플래너', desc:'건축 동선 효율 분석기 사용'},
    {id:'v18_roi_analyst', name:'ROI 분석가', desc:'건축 비용 ROI 계산기 사용'},
    {id:'v18_world_traveler', name:'세계 건축 여행가', desc:'세계 전통가옥 비교 사용'},
    {id:'v18_timelapse_watcher', name:'타임랩스 관찰자', desc:'건축 시공 타임랩스 사용'},
    {id:'v18_design_duo', name:'디자인 듀오', desc:'황금비 + 색채 심리학 모두 사용'},
    {id:'v18_safety_duo', name:'안전 듀오', desc:'지붕구조 + 공기질 모두 사용'},
    {id:'v18_planning_trio', name:'기획 트리오', desc:'동선 + ROI + 시공 타임랩스 모두 사용'},
    {id:'v18_complete', name:'v18 컴플리트', desc:'v18 모든 기능 사용 완료'}
  ];
  var loaded = JSON.parse(localStorage.getItem('hb_achievements_v18')||'[]');
  function unlock(id){
    if(loaded.indexOf(id)>=0) return;
    loaded.push(id);
    localStorage.setItem('hb_achievements_v18',JSON.stringify(loaded));
    var ach=achievements.find(function(a){return a.id===id;});
    if(ach){
      v18SFX.play('achievement_v18');
      var toast=document.createElement('div');
      toast.style.cssText='position:fixed;top:80px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2d1b0e,#4a2c17);border:2px solid #c4956a;border-radius:12px;padding:12px 24px;z-index:9999;color:#f5deb3;font-size:14px;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.6);animation:v18toast .5s ease';
      toast.innerHTML='🏆 '+ach.name+'<br><span style="font-size:11px;color:#c4956a;font-weight:400">'+ach.desc+'</span>';
      document.body.appendChild(toast);
      setTimeout(function(){ toast.style.opacity='0'; toast.style.transition='opacity .3s'; setTimeout(function(){toast.remove();},300); },3000);
    }
    if(typeof window.updateProgressBadge==='function') window.updateProgressBadge();
  }
  function load(){ return loaded; }
  function check(){
    if(localStorage.getItem('hb_golden_v18')) unlock('v18_golden_master');
    if(localStorage.getItem('hb_air_v18')) unlock('v18_air_expert');
    if(localStorage.getItem('hb_color_v18')) unlock('v18_color_artist');
    if(localStorage.getItem('hb_roof_v18')) unlock('v18_roof_engineer');
    if(localStorage.getItem('hb_traffic_v18')) unlock('v18_traffic_planner');
    if(localStorage.getItem('hb_roi_v18')) unlock('v18_roi_analyst');
    if(localStorage.getItem('hb_world_v18')) unlock('v18_world_traveler');
    if(localStorage.getItem('hb_timelapse_v18')) unlock('v18_timelapse_watcher');
    if(localStorage.getItem('hb_golden_v18')&&localStorage.getItem('hb_color_v18')) unlock('v18_design_duo');
    if(localStorage.getItem('hb_roof_v18')&&localStorage.getItem('hb_air_v18')) unlock('v18_safety_duo');
    if(localStorage.getItem('hb_traffic_v18')&&localStorage.getItem('hb_roi_v18')&&localStorage.getItem('hb_timelapse_v18')) unlock('v18_planning_trio');
    var allUsed=localStorage.getItem('hb_golden_v18')&&localStorage.getItem('hb_air_v18')&&
      localStorage.getItem('hb_color_v18')&&localStorage.getItem('hb_roof_v18')&&
      localStorage.getItem('hb_traffic_v18')&&localStorage.getItem('hb_roi_v18')&&
      localStorage.getItem('hb_world_v18')&&localStorage.getItem('hb_timelapse_v18');
    if(allUsed) unlock('v18_complete');
  }
  return {check:check,unlock:unlock,load:load};
})();

// ── 13. Left Side Menu (NO bottom navbar - UI rule compliance) ──
(function(){
  function inject(){
    var menu=document.createElement('div');
    menu.className='v18-menu';
    menu.id='v18-side-menu';
    var actions=[
      {icon:'✨',label:'황금비',fn:function(){v18Golden.open();}},
      {icon:'🌬️',label:'공기질',fn:function(){v18Air.open();}},
      {icon:'🎨',label:'색채심리',fn:function(){v18Color.open();}},
      {icon:'🏠',label:'지붕구조',fn:function(){v18Roof.open();}},
      {icon:'🚶',label:'동선분석',fn:function(){v18Traffic.open();}},
      {icon:'💰',label:'ROI분석',fn:function(){v18ROI.open();}},
      {icon:'🌍',label:'세계가옥',fn:function(){v18World.open();}},
      {icon:'⏱️',label:'타임랩스',fn:function(){v18Timelapse.open();}}
    ];
    actions.forEach(function(a){
      var btn=document.createElement('button');
      btn.className='v18-menu-btn';
      btn.innerHTML=a.icon+'<span class="v18-menu-label">'+a.label+'</span>';
      btn.onclick=function(){ a.fn(); v18SFX.play('golden_measure'); };
      menu.appendChild(btn);
    });
    document.body.appendChild(menu);
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded',inject);
})();

// ── 14. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.code){
      case 'KeyG': e.preventDefault(); v18Golden.open(); break;
      case 'KeyI': e.preventDefault(); v18Air.open(); break;
      case 'KeyK': e.preventDefault(); v18Color.open(); break;
      case 'KeyJ': e.preventDefault(); v18Roof.open(); break;
      case 'KeyT': e.preventDefault(); v18Traffic.open(); break;
      case 'KeyY': e.preventDefault(); v18ROI.open(); break;
      case 'KeyU': e.preventDefault(); v18World.open(); break;
      case 'KeyH': e.preventDefault(); v18Timelapse.open(); break;
    }
  });
})();

// ── 15. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v18Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 16. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig=window.showComplete;
    if(typeof orig!=='function') return false;
    if(window.__v18Hooked) return true;
    window.__v18Hooked=true;
    var prev=window.showComplete;
    window.showComplete=function(){ prev.apply(this,arguments); v18Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 17. Initial load + checks ──
(function(){
  setTimeout(function(){ v18Achieve.check(); },5000);
})();

// end v18 guard
}

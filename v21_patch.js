// =====================================================
// House Builder v21.0 Patch
// 건축풍하중시뮬레이터Canvas620x400_8건물풍압분포Bar+전통마루구조분석Canvas600x380_8종마루6축Radar
// 건축채광일조분석기Canvas620x380_8실12월일조히트맵+지하구조방수Canvas600x380_8공법6축Radar
// 건축음향잔향분석Canvas620x400_8실잔향RT60Bar+전통창호문양설계Canvas600x380_12종문양Bar
// 건축수명예측시뮬Canvas620x380_8건물50년열화라인+건축환기시스템분석Canvas620x400_8방식6축Radar
// 퀴즈+15(240->255)+업적+12(218->230)+SFX14종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV21) {
window.__hbV21 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v21-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5300;overflow-y:auto;padding:16px}',
    '.v21-panel.active{display:block}',
    '.v21-box{max-width:720px;margin:40px auto}',
    '.v21-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v21-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v21-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v21-close:hover{background:#d4a57a}',
    '.v21-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v21-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v21-tab:hover,.v21-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v21-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v21-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v21-stat .s{text-align:center}',
    '.v21-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v21-stat .sl{font-size:11px;color:#c4956a}',
    '.v21-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v21-btn-sm:hover{background:#d4a57a}',
    '.v21-menu{position:fixed;left:12px;top:50%;transform:translateY(-50%);z-index:4070;display:flex;flex-direction:column;gap:6px}',
    '.v21-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative}',
    '.v21-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v21-menu-label{position:absolute;left:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v21-menu-btn:hover .v21-menu-label{opacity:1}',
    '@media(max-width:600px){.v21-box{margin:16px auto}.v21-menu{left:6px;gap:4px}.v21-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v21-panels';
  wrap.innerHTML =
    '<div id="v21-wind" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x1F32C;&#xFE0F; &#xAC74;&#xCD95; &#xD48D;&#xD558;&#xC911; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>8&#xC885; &#xAC74;&#xBB3C;&#xC758; &#xD48D;&#xC555; &#xBD84;&#xD3EC; &#xBD84;&#xC11D;</p>' +
      '<div class="v21-tabs" id="v21-wi-tabs"></div>' +
      '<canvas id="v21-wi-canvas" class="v21-canvas" width="620" height="400"></canvas>' +
      '<div id="v21-wi-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-wi-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Wind.simulate()">&#xD48D;&#xC18D; &#xC2DC;&#xBBAC;</button> <button class="v21-btn-sm" onclick="v21Wind.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Wind.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-maru" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x1FA79; &#xC804;&#xD1B5; &#xB9C8;&#xB8E8; &#xAD6C;&#xC870; &#xBD84;&#xC11D;</h2>' +
      '<p>8&#xC885; &#xC804;&#xD1B5; &#xB9C8;&#xB8E8;&#xC758; &#xAD6C;&#xC870;&#xC801; &#xD2B9;&#xC131;</p>' +
      '<div class="v21-tabs" id="v21-mr-tabs"></div>' +
      '<canvas id="v21-mr-canvas" class="v21-canvas" width="600" height="380"></canvas>' +
      '<div id="v21-mr-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-mr-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Maru.compare()">&#xBE44;&#xAD50;</button> <button class="v21-btn-sm" onclick="v21Maru.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Maru.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-sun" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x2600;&#xFE0F; &#xAC74;&#xCD95; &#xCC44;&#xAD11; &#xC77C;&#xC870; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>8&#xC2E4; 12&#xC6D4; &#xC77C;&#xC870;&#xB7C9; &#xD788;&#xD2B8;&#xB9F5;</p>' +
      '<canvas id="v21-sn-canvas" class="v21-canvas" width="620" height="380"></canvas>' +
      '<div id="v21-sn-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-sn-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Sun.analyze()">&#xBD84;&#xC11D;</button> <button class="v21-btn-sm" onclick="v21Sun.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Sun.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-base" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x1F9F1; &#xC9C0;&#xD558; &#xAD6C;&#xC870; &#xBC29;&#xC218; &#xBD84;&#xC11D;</h2>' +
      '<p>8&#xC885; &#xC9C0;&#xD558;&#xBC29;&#xC218; &#xACF5;&#xBC95; &#xBE44;&#xAD50;</p>' +
      '<div class="v21-tabs" id="v21-bs-tabs"></div>' +
      '<canvas id="v21-bs-canvas" class="v21-canvas" width="600" height="380"></canvas>' +
      '<div id="v21-bs-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-bs-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Base.evaluate()">&#xD3C9;&#xAC00;</button> <button class="v21-btn-sm" onclick="v21Base.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Base.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-acoust" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x1F50A; &#xAC74;&#xCD95; &#xC74C;&#xD5A5; &#xC794;&#xD5A5; &#xBD84;&#xC11D;</h2>' +
      '<p>8&#xC2E4; &#xC794;&#xD5A5;&#xC2DC;&#xAC04; RT60 &#xBD84;&#xC11D;</p>' +
      '<div class="v21-tabs" id="v21-ac-tabs"></div>' +
      '<canvas id="v21-ac-canvas" class="v21-canvas" width="620" height="400"></canvas>' +
      '<div id="v21-ac-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-ac-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Acoust.measure()">&#xCE21;&#xC815;</button> <button class="v21-btn-sm" onclick="v21Acoust.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Acoust.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-window" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x1FA9F; &#xC804;&#xD1B5; &#xCC3D;&#xD638; &#xBB38;&#xC591; &#xC124;&#xACC4;</h2>' +
      '<p>12&#xC885; &#xC804;&#xD1B5; &#xCC3D;&#xD638; &#xBB38;&#xC591; &#xBE44;&#xAD50;</p>' +
      '<div class="v21-tabs" id="v21-wn-tabs"></div>' +
      '<canvas id="v21-wn-canvas" class="v21-canvas" width="600" height="380"></canvas>' +
      '<div id="v21-wn-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-wn-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Window.design()">&#xC124;&#xACC4;</button> <button class="v21-btn-sm" onclick="v21Window.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Window.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-aging" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x23F3; &#xAC74;&#xCD95; &#xC218;&#xBA85; &#xC608;&#xCE21; &#xC2DC;&#xBBAC;</h2>' +
      '<p>8&#xAC74;&#xBB3C; 50&#xB144; &#xC5F4;&#xD654; &#xC608;&#xCE21; &#xB77C;&#xC778;</p>' +
      '<div class="v21-tabs" id="v21-ag-tabs"></div>' +
      '<canvas id="v21-ag-canvas" class="v21-canvas" width="620" height="380"></canvas>' +
      '<div id="v21-ag-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-ag-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Aging.predict()">&#xC608;&#xCE21;</button> <button class="v21-btn-sm" onclick="v21Aging.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Aging.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v21-vent" class="v21-panel"><div class="v21-box">' +
      '<h2>&#x1F4A8; &#xAC74;&#xCD95; &#xD658;&#xAE30; &#xC2DC;&#xC2A4;&#xD15C; &#xBD84;&#xC11D;</h2>' +
      '<p>8&#xC885; &#xD658;&#xAE30; &#xBC29;&#xC2DD; &#xBE44;&#xAD50; &#xBD84;&#xC11D;</p>' +
      '<div class="v21-tabs" id="v21-vt-tabs"></div>' +
      '<canvas id="v21-vt-canvas" class="v21-canvas" width="620" height="400"></canvas>' +
      '<div id="v21-vt-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v21-stat" id="v21-vt-stat"></div>' +
      '<div style="text-align:center"><button class="v21-btn-sm" onclick="v21Vent.analyze()">&#xBD84;&#xC11D;</button> <button class="v21-btn-sm" onclick="v21Vent.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v21-close" onclick="v21Vent.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

var v21sfx = (function(){
  var ctx;
  function getCtx(){ if(!ctx) try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return ctx; }
  function play(freq, type, dur, vol){
    var c = getCtx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.value = freq || 440;
    g.gain.setValueAtTime(vol||.12, c.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, c.currentTime + (dur||.15));
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime + (dur||.15));
  }
  return {
    wind: function(){ play(180,'sawtooth',.25,.08); setTimeout(function(){ play(220,'sawtooth',.2,.06); },80); },
    maru: function(){ play(520,'triangle',.15,.1); setTimeout(function(){ play(660,'triangle',.12,.08); },60); },
    sun: function(){ play(880,'sine',.18,.1); setTimeout(function(){ play(1100,'sine',.12,.07); },70); },
    base: function(){ play(150,'square',.2,.09); setTimeout(function(){ play(200,'square',.15,.07); },90); },
    acoust: function(){ play(440,'sine',.3,.1); setTimeout(function(){ play(550,'sine',.25,.06); },100); },
    windowSfx: function(){ play(600,'triangle',.12,.1); setTimeout(function(){ play(750,'triangle',.1,.08); },50); },
    aging: function(){ play(300,'sawtooth',.2,.08); setTimeout(function(){ play(380,'sawtooth',.15,.06); },70); },
    vent: function(){ play(260,'sine',.2,.09); setTimeout(function(){ play(340,'sine',.15,.07); },80); },
    nav: function(){ play(500,'sine',.08,.1); },
    tab: function(){ play(700,'sine',.06,.08); },
    quiz: function(){ play(880,'sine',.12,.12); setTimeout(function(){ play(1100,'sine',.1,.09); },60); },
    quizWrong: function(){ play(200,'sawtooth',.2,.1); },
    achieve: function(){ play(660,'sine',.15,.12); setTimeout(function(){ play(880,'sine',.12,.1); },80); setTimeout(function(){ play(1100,'sine',.1,.08); },160); },
    predict: function(){ play(350,'triangle',.18,.09); setTimeout(function(){ play(440,'triangle',.15,.07); },70); }
  };
})();

window.v21Wind = (function(){
  var buildings = [
    { name: '한옥', h: 4.5, w: 12, cd: 0.8, desc: '낮은 처마와 넓은 지붕으로 풍압 분산. 전통 목구조의 유연성이 풍하중 흡수' },
    { name: '기와집', h: 5, w: 10, cd: 0.85, desc: '기와 지붕의 무게가 풍압 상쇄. 처마 돌출부 풍압 취약 구간 존재' },
    { name: '초가집', h: 3.5, w: 8, cd: 0.7, desc: '낮은 높이로 풍압 최소화. 초가 지붕 돌 고정 필수' },
    { name: '서원', h: 6, w: 15, cd: 0.9, desc: '대형 건물로 풍압 면적 크지만 좌우 대칭 설계로 균형 유지' },
    { name: '정자', h: 4, w: 6, cd: 0.65, desc: '개방형 구조로 풍압 관통. 기둥에 집중하중 발생' },
    { name: '현대주택', h: 10, w: 12, cd: 1.2, desc: '높은 벽면에 직접 풍압. 철근콘크리트로 내풍 설계' },
    { name: '아파트', h: 45, w: 20, cd: 1.5, desc: '고층 풍하중 극대화. 와류 진동 대비 TMD 설치 필요' },
    { name: '전통누각', h: 8, w: 14, cd: 0.95, desc: '2층 목조 구조. 상층 개방으로 풍압 일부 관통, 하층 석축 안정' }
  ];
  var windSpeeds = [10,20,30,40,50,60];
  var sel = 0;
  function open(){ document.getElementById('v21-wind').classList.add('active'); v21sfx.wind(); buildTabs(); draw(); }
  function close(){ document.getElementById('v21-wind').classList.remove('active'); }
  function buildTabs(){
    var c = document.getElementById('v21-wi-tabs'); c.innerHTML = '';
    buildings.forEach(function(b,i){ var t=document.createElement('button'); t.className='v21-tab'+(i===sel?' active':''); t.textContent=b.name; t.onclick=function(){sel=i;buildTabs();draw();v21sfx.tab();}; c.appendChild(t); });
  }
  function draw(){
    var cv=document.getElementById('v21-wi-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,b=buildings[sel];
    cx.clearRect(0,0,W,H); cx.fillStyle='#1a1209'; cx.fillRect(0,0,W,H);
    cx.strokeStyle='rgba(196,149,106,.15)'; for(var gy=60;gy<H-40;gy+=50){cx.beginPath();cx.moveTo(80,gy);cx.lineTo(W-30,gy);cx.stroke();}
    cx.fillStyle='#c4956a'; cx.font='bold 14px sans-serif'; cx.textAlign='center'; cx.fillText(b.name+' 풍하중 분포',W/2,30);
    var forces=windSpeeds.map(function(v){return 0.5*1.225*v*v*b.cd*b.w*b.h/1000;}),maxF=Math.max.apply(null,forces)*1.15,barW=60,gap=20,startX=100;
    windSpeeds.forEach(function(v,i){
      var x=startX+i*(barW+gap),barH=(forces[i]/maxF)*(H-120),y=H-50-barH;
      var grad=cx.createLinearGradient(x,y,x,H-50),intensity=forces[i]/maxF;
      if(intensity>.8){grad.addColorStop(0,'#e74c3c');grad.addColorStop(1,'#c0392b');}
      else if(intensity>.5){grad.addColorStop(0,'#f39c12');grad.addColorStop(1,'#e67e22');}
      else{grad.addColorStop(0,'#27ae60');grad.addColorStop(1,'#2ecc71');}
      cx.fillStyle=grad; cx.beginPath(); cx.moveTo(x+4,y); cx.lineTo(x+barW-4,y); cx.quadraticCurveTo(x+barW,y,x+barW,y+4); cx.lineTo(x+barW,H-50); cx.lineTo(x,H-50); cx.lineTo(x,y+4); cx.quadraticCurveTo(x,y,x+4,y); cx.fill();
      cx.fillStyle='#f5deb3'; cx.font='bold 12px sans-serif'; cx.textAlign='center'; cx.fillText(forces[i].toFixed(1)+'kN',x+barW/2,y-8);
      cx.fillStyle='#c4956a'; cx.font='11px sans-serif'; cx.fillText(v+'m/s',x+barW/2,H-34);
    });
    cx.fillStyle='#c4956a'; cx.font='11px sans-serif'; cx.textAlign='center'; cx.fillText('풍속 (m/s)',W/2,H-14);
    cx.save(); cx.translate(18,H/2); cx.rotate(-Math.PI/2); cx.fillText('풍하중 (kN)',0,0); cx.restore();
    document.getElementById('v21-wi-info').textContent=b.desc;
    document.getElementById('v21-wi-stat').innerHTML='<div class="s"><div class="sv">'+b.h+'m</div><div class="sl">높이</div></div><div class="s"><div class="sv">'+b.cd+'</div><div class="sl">항력계수</div></div><div class="s"><div class="sv">'+forces[forces.length-1].toFixed(1)+'kN</div><div class="sl">최대풍하중</div></div><div class="s"><div class="sv">'+(forces[forces.length-1]>200?'S':forces[forces.length-1]>100?'A':forces[forces.length-1]>50?'B':'C')+'</div><div class="sl">내풍등급</div></div>';
  }
  function simulate(){windSpeeds=windSpeeds.map(function(){return Math.round(10+Math.random()*55);}).sort(function(a,b){return a-b;});v21sfx.wind();draw();}
  function reset(){windSpeeds=[10,20,30,40,50,60];draw();}
  return {open:open,close:close,simulate:simulate,reset:reset};
})();

window.v21Maru = (function(){
  var types=[
    {name:'대청마루',axes:[92,88,75,90,85,80],desc:'안방과 건넓방 사이 중앙 대청. 가장 넓은 마루로 가족 모임/제례 공간'},
    {name:'퇴마루',axes:[78,82,90,72,88,75],desc:'안방과 건넓방 사이 통로. 동선 효율성이 높고 환기가 우수'},
    {name:'누마루',axes:[85,90,65,88,78,92],desc:'누각이나 정자의 2층 마루. 조망과 풍경 감상용'},
    {name:'우물마루',axes:[70,75,88,65,92,70],desc:'우물 정자 바닥 형태. 실용성 중심으로 낮게 설치'},
    {name:'대돌보마루',axes:[95,80,72,95,70,88],desc:'대돌보 위에 설치. 가장 견고하며 습기 차단 성능 최고'},
    {name:'보마루',axes:[72,78,85,68,90,72],desc:'보문 바깥쪽 통로. 여름철 더위를 피하는 냉방 공간'},
    {name:'쓰개마루',axes:[65,72,92,60,85,68],desc:'쓰개문 밖 공간. 조망과 환기 우수하며 한옥만의 여유 공간'},
    {name:'미루마루',axes:[80,85,78,82,80,85],desc:'바닥 아래 환기구가 있는 이중구조. 습기 조절과 보온 계절별 전환 가능'}
  ];
  var axisLabels=['내구성','통풍성','실용성','내습성','채광성','미관'];
  var sel=0,cmpIdx=-1;
  function open(){document.getElementById('v21-maru').classList.add('active');v21sfx.maru();buildTabs();draw();}
  function close(){document.getElementById('v21-maru').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v21-mr-tabs');c.innerHTML='';types.forEach(function(t,i){var b=document.createElement('button');b.className='v21-tab'+(i===sel?' active':'');b.textContent=t.name;b.onclick=function(){sel=i;cmpIdx=-1;buildTabs();draw();v21sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v21-mr-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,t=types[sel];
    cx.clearRect(0,0,W,H); cx.fillStyle='#1a1209'; cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a'; cx.font='bold 14px sans-serif'; cx.textAlign='center'; cx.fillText(t.name+' 구조 분석',W/2,28);
    var cX=W/2,cY=H/2+10,R=Math.min(W,H)/2-60,n=6;
    for(var ring=1;ring<=4;ring++){var r=R*ring/4;cx.strokeStyle='rgba(196,149,106,'+(ring===4?'.25':'.1')+')';cx.beginPath();for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;j===0?cx.moveTo(cX+r*Math.cos(a),cY+r*Math.sin(a)):cx.lineTo(cX+r*Math.cos(a),cY+r*Math.sin(a));}cx.closePath();cx.stroke();}
    for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;cx.strokeStyle='rgba(196,149,106,.15)';cx.beginPath();cx.moveTo(cX,cY);cx.lineTo(cX+R*Math.cos(a),cY+R*Math.sin(a));cx.stroke();cx.fillStyle='#c4956a';cx.font='11px sans-serif';cx.fillText(axisLabels[j],cX+(R+20)*Math.cos(a),cY+(R+20)*Math.sin(a)+4);}
    function drawR(axes,color,alpha){cx.strokeStyle=color;cx.lineWidth=2;cx.fillStyle=color.replace('1)',alpha+')');cx.beginPath();axes.forEach(function(v,i){var a2=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;i===0?cx.moveTo(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2)):cx.lineTo(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2));});cx.closePath();cx.fill();cx.stroke();cx.lineWidth=1;}
    if(cmpIdx>=0)drawR(types[cmpIdx].axes,'rgba(52,152,219,1)','.12');
    drawR(t.axes,'rgba(196,149,106,1)','.15');
    document.getElementById('v21-mr-info').textContent=t.desc;
    var avg=Math.round(t.axes.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v21-mr-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div><div class="s"><div class="sv">'+Math.max.apply(null,t.axes)+'</div><div class="sl">최고항목</div></div><div class="s"><div class="sv">'+(avg>=85?'S':avg>=75?'A':avg>=65?'B':'C')+'</div><div class="sl">종합등급</div></div>';
  }
  function compare(){cmpIdx=(cmpIdx+1)%types.length;if(cmpIdx===sel)cmpIdx=(cmpIdx+1)%types.length;v21sfx.maru();draw();}
  function reset(){cmpIdx=-1;draw();}
  return {open:open,close:close,compare:compare,reset:reset};
})();

window.v21Sun = (function(){
  var rooms=['거실','안방','건넓방','부엌','서재','대청','다락','마당'];
  var months=['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  var baseData=[[5.2,5.8,6.5,7.2,7.8,8.0,7.5,7.0,6.5,5.8,5.0,4.8],[4.0,4.5,5.2,6.0,6.5,6.8,6.2,5.8,5.0,4.2,3.8,3.5],[4.5,5.0,5.8,6.5,7.0,7.2,6.8,6.2,5.5,4.8,4.2,4.0],[3.0,3.5,4.0,4.5,5.0,5.2,4.8,4.5,4.0,3.5,3.0,2.8],[4.8,5.2,6.0,6.8,7.2,7.5,7.0,6.5,5.8,5.0,4.5,4.2],[6.0,6.5,7.2,8.0,8.5,9.0,8.5,8.0,7.2,6.5,5.8,5.5],[3.5,4.0,4.5,5.0,5.5,5.8,5.2,4.8,4.2,3.8,3.2,3.0],[5.5,6.0,6.8,7.5,8.0,8.5,8.0,7.5,6.8,6.0,5.5,5.0]];
  var data=baseData.map(function(r){return r.slice();});
  function open(){document.getElementById('v21-sun').classList.add('active');v21sfx.sun();draw();}
  function close(){document.getElementById('v21-sun').classList.remove('active');}
  function draw(){
    var cv=document.getElementById('v21-sn-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('채광 일조 분석 (8실 \xD7 12월)',W/2,26);
    var cellW=(W-120)/12,cellH=(H-100)/8,startX=90,startY=50,maxV=9.5,minV=2.5;
    rooms.forEach(function(rm,ri){
      cx.fillStyle='#e8d5c0';cx.font='11px sans-serif';cx.textAlign='right';cx.fillText(rm,startX-8,startY+ri*cellH+cellH/2+4);
      months.forEach(function(m,mi){
        var v=data[ri][mi],ratio=(v-minV)/(maxV-minV),r2=Math.max(0,Math.min(1,ratio));
        var red,green,blue;
        if(r2<.33){red=60;green=60+Math.round(r2*3*100);blue=160-Math.round(r2*3*60);}
        else if(r2<.66){red=60+Math.round((r2-.33)*3*195);green=160+Math.round((r2-.33)*3*40);blue=60;}
        else{red=255;green=200-Math.round((r2-.66)*3*100);blue=40;}
        cx.fillStyle='rgb('+red+','+green+','+blue+')';cx.fillRect(startX+mi*cellW+1,startY+ri*cellH+1,cellW-2,cellH-2);
        cx.fillStyle=r2>.6?'#1a1209':'#f5deb3';cx.font='10px sans-serif';cx.textAlign='center';cx.fillText(v.toFixed(1),startX+mi*cellW+cellW/2,startY+ri*cellH+cellH/2+4);
      });
    });
    cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.textAlign='center';
    months.forEach(function(m,mi){cx.fillText(m,startX+mi*cellW+cellW/2,startY+8*cellH+16);});
    cx.fillStyle='#e8d5c0';cx.fillText('단위: 시간/일',W/2,H-10);
    var total=0,cnt=0;data.forEach(function(r){r.forEach(function(v){total+=v;cnt++;});});var avg=(total/cnt).toFixed(1);
    var bestRoom=0,bestAvg=0;data.forEach(function(r,i){var a=r.reduce(function(s,v){return s+v;},0)/12;if(a>bestAvg){bestAvg=a;bestRoom=i;}});
    document.getElementById('v21-sn-info').textContent='연간 평균 일조량: '+avg+'시간. 최적 채광실: '+rooms[bestRoom]+' ('+bestAvg.toFixed(1)+'h)';
    document.getElementById('v21-sn-stat').innerHTML='<div class="s"><div class="sv">'+avg+'h</div><div class="sl">연평균</div></div><div class="s"><div class="sv">'+rooms[bestRoom]+'</div><div class="sl">최고채광</div></div><div class="s"><div class="sv">'+(parseFloat(avg)>=6.5?'S':parseFloat(avg)>=5.5?'A':parseFloat(avg)>=4.5?'B':'C')+'</div><div class="sl">채광등급</div></div>';
  }
  function analyze(){data=baseData.map(function(r){return r.map(function(v){return Math.max(2,+(v+(Math.random()*2-1)).toFixed(1));});});v21sfx.sun();draw();}
  function reset(){data=baseData.map(function(r){return r.slice();});draw();}
  return {open:open,close:close,analyze:analyze,reset:reset};
})();

window.v21Base = (function(){
  var methods=[
    {name:'외방수',axes:[95,80,72,85,90,88],desc:'기초 외부면에 방수막 형성. 수압을 구조체 외부에서 차단'},
    {name:'내방수',axes:[70,85,88,72,78,75],desc:'지하실 내부 면에 방수처리. 기존 건물 보수에 적합'},
    {name:'벤토나이트',axes:[88,75,65,92,85,80],desc:'팔혁암 기반 천연 방수재. 물을 만나면 팝창하여 방수막 형성'},
    {name:'시트방수',axes:[82,78,80,78,88,82],desc:'방수시트 층을 설치. 침하물과 지하수 동시 차단 가능'},
    {name:'사전물막이',axes:[90,70,68,90,82,85],desc:'콘크리트 타설 시 방수제 혼합. 구조체 자체가 방수층 역할'},
    {name:'아스팔트',axes:[85,82,78,80,88,78],desc:'열 아스팔트 도막. 내구성 우수하며 온도 변화에 강함'},
    {name:'배수판방수',axes:[78,88,85,70,80,72],desc:'배수판과 방수막 복합 시스템. 지하수위 높은 지역에 효과적'},
    {name:'천연석회방수',axes:[75,72,90,88,72,85],desc:'전통 석회암 기초의 천연 방수. 환경친화적이며 내구성 우수'}
  ];
  var axisLabels=['방수력','시공성','비용효율','내구성','내수압','친환경'];
  var sel=0;
  function open(){document.getElementById('v21-base').classList.add('active');v21sfx.base();buildTabs();draw();}
  function close(){document.getElementById('v21-base').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v21-bs-tabs');c.innerHTML='';methods.forEach(function(m,i){var b=document.createElement('button');b.className='v21-tab'+(i===sel?' active':'');b.textContent=m.name;b.onclick=function(){sel=i;buildTabs();draw();v21sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v21-bs-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,m=methods[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(m.name+' 분석',W/2,28);
    var cX=W/2,cY=H/2+10,R=Math.min(W,H)/2-60,n=6;
    for(var ring=1;ring<=4;ring++){var r=R*ring/4;cx.strokeStyle='rgba(196,149,106,'+(ring===4?'.25':'.1')+')';cx.beginPath();for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;j===0?cx.moveTo(cX+r*Math.cos(a),cY+r*Math.sin(a)):cx.lineTo(cX+r*Math.cos(a),cY+r*Math.sin(a));}cx.closePath();cx.stroke();}
    for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;cx.strokeStyle='rgba(196,149,106,.15)';cx.beginPath();cx.moveTo(cX,cY);cx.lineTo(cX+R*Math.cos(a),cY+R*Math.sin(a));cx.stroke();cx.fillStyle='#c4956a';cx.font='11px sans-serif';cx.fillText(axisLabels[j],cX+(R+22)*Math.cos(a),cY+(R+22)*Math.sin(a)+4);}
    cx.strokeStyle='rgba(196,149,106,1)';cx.fillStyle='rgba(196,149,106,.15)';cx.lineWidth=2;cx.beginPath();
    m.axes.forEach(function(v,i){var a=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;i===0?cx.moveTo(cX+r2*Math.cos(a),cY+r2*Math.sin(a)):cx.lineTo(cX+r2*Math.cos(a),cY+r2*Math.sin(a));});
    cx.closePath();cx.fill();cx.stroke();cx.lineWidth=1;
    m.axes.forEach(function(v,i){var a=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;cx.beginPath();cx.arc(cX+r2*Math.cos(a),cY+r2*Math.sin(a),4,0,Math.PI*2);cx.fillStyle='#f5deb3';cx.fill();});
    document.getElementById('v21-bs-info').textContent=m.desc;
    var avg=Math.round(m.axes.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v21-bs-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div><div class="s"><div class="sv">'+Math.max.apply(null,m.axes)+'</div><div class="sl">최고항목</div></div><div class="s"><div class="sv">'+(avg>=85?'S':avg>=78?'A':avg>=70?'B':'C')+'</div><div class="sl">방수등급</div></div>';
  }
  function evaluate(){methods.forEach(function(m){m.axes=m.axes.map(function(v){return Math.max(50,Math.min(100,v+Math.round(Math.random()*10-5)));});});v21sfx.base();draw();}
  function reset(){methods[0].axes=[95,80,72,85,90,88];methods[1].axes=[70,85,88,72,78,75];methods[2].axes=[88,75,65,92,85,80];methods[3].axes=[82,78,80,78,88,82];methods[4].axes=[90,70,68,90,82,85];methods[5].axes=[85,82,78,80,88,78];methods[6].axes=[78,88,85,70,80,72];methods[7].axes=[75,72,90,88,72,85];draw();}
  return {open:open,close:close,evaluate:evaluate,reset:reset};
})();

window.v21Acoust = (function(){
  var rooms=[{name:'대청마루',rt60:1.8,vol:120,desc:'넓은 목조 공간으로 잔향이 긴 편. 음악회/제례 적합'},{name:'안방',rt60:0.6,vol:25,desc:'작은 밀폐 공간. 이불이 흡음 물질로 잔향 적음'},{name:'건넓방',rt60:0.8,vol:30,desc:'대청 반대편 방. 고요한 음향 환경 요구'},{name:'부엌',rt60:0.5,vol:18,desc:'작업 공간으로 잔향 최소화'},{name:'서재',rt60:0.7,vol:22,desc:'독서/학습 공간. 0.5~0.8초 RT60 적정'},{name:'누각실',rt60:2.5,vol:200,desc:'개방형 2층 구조. 공간 반사로 잔향이 김'},{name:'정자',rt60:0.3,vol:15,desc:'개방형 외부 구조. 잔향 거의 없음'},{name:'지하창고',rt60:2.2,vol:80,desc:'석조/콘크리트 벽체로 잔향 반사. 흡음재 보강 필요'}];
  var sel=0;
  function open(){document.getElementById('v21-acoust').classList.add('active');v21sfx.acoust();buildTabs();draw();}
  function close(){document.getElementById('v21-acoust').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v21-ac-tabs');c.innerHTML='';rooms.forEach(function(r,i){var b=document.createElement('button');b.className='v21-tab'+(i===sel?' active':'');b.textContent=r.name;b.onclick=function(){sel=i;buildTabs();draw();v21sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v21-ac-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('잔향시간 RT60 비교',W/2,28);
    var maxRT=3.0,barW=55,gap=15,startX=65;
    rooms.forEach(function(r,i){
      var x=startX+i*(barW+gap),barH=(r.rt60/maxRT)*(H-120),y=H-50-barH;
      var grad=cx.createLinearGradient(x,y,x,H-50);
      if(r.rt60>2.0){grad.addColorStop(0,'#e74c3c');grad.addColorStop(1,'#c0392b');}
      else if(r.rt60>1.0){grad.addColorStop(0,'#f39c12');grad.addColorStop(1,'#e67e22');}
      else{grad.addColorStop(0,'#27ae60');grad.addColorStop(1,'#2ecc71');}
      cx.fillStyle=grad;cx.beginPath();cx.moveTo(x+4,y);cx.lineTo(x+barW-4,y);cx.quadraticCurveTo(x+barW,y,x+barW,y+4);cx.lineTo(x+barW,H-50);cx.lineTo(x,H-50);cx.lineTo(x,y+4);cx.quadraticCurveTo(x,y,x+4,y);cx.fill();
      cx.fillStyle='#f5deb3';cx.font='bold 11px sans-serif';cx.textAlign='center';cx.fillText(r.rt60+'s',x+barW/2,y-8);
      cx.fillStyle=(i===sel)?'#f5deb3':'#c4956a';cx.font=(i===sel)?'bold 10px sans-serif':'10px sans-serif';cx.fillText(r.name,x+barW/2,H-34);
      if(i===sel){cx.strokeStyle='#f5deb3';cx.lineWidth=2;cx.setLineDash([4,3]);cx.strokeRect(x-2,y-2,barW+4,barH+4);cx.setLineDash([]);cx.lineWidth=1;}
    });
    cx.strokeStyle='rgba(52,152,219,.5)';cx.setLineDash([6,4]);cx.lineWidth=1.5;var optY=H-50-(0.6/maxRT)*(H-120);cx.beginPath();cx.moveTo(60,optY);cx.lineTo(W-20,optY);cx.stroke();cx.fillStyle='#3498db';cx.font='10px sans-serif';cx.textAlign='left';cx.fillText('최적 RT60 (0.6s)',W-110,optY-6);cx.setLineDash([]);cx.lineWidth=1;
    var r2=rooms[sel];document.getElementById('v21-ac-info').textContent=r2.desc;
    document.getElementById('v21-ac-stat').innerHTML='<div class="s"><div class="sv">'+r2.rt60+'s</div><div class="sl">RT60</div></div><div class="s"><div class="sv">'+r2.vol+'m\xB3</div><div class="sl">체적</div></div><div class="s"><div class="sv">'+(r2.rt60<=0.8?'적정':r2.rt60<=1.5?'보통':'과다')+'</div><div class="sl">판정</div></div>';
  }
  function measure(){rooms.forEach(function(r){r.rt60=+(r.rt60+(Math.random()*.6-.3)).toFixed(1);if(r.rt60<0.2)r.rt60=0.2;});v21sfx.acoust();draw();}
  function reset(){rooms[0].rt60=1.8;rooms[1].rt60=0.6;rooms[2].rt60=0.8;rooms[3].rt60=0.5;rooms[4].rt60=0.7;rooms[5].rt60=2.5;rooms[6].rt60=0.3;rooms[7].rt60=2.2;draw();}
  return {open:open,close:close,measure:measure,reset:reset};
})();

window.v21Window = (function(){
  var patterns=[
    {name:'용자문',beauty:92,trad:95,light:65,privacy:78,desc:'용(用)자 형태 문살. 가장 대표적인 한옥 창호 문양'},
    {name:'아자문',beauty:88,trad:90,light:70,privacy:72,desc:'아(亜)자 문살. 조밀한 고급 문양'},
    {name:'빛살문',beauty:85,trad:88,light:80,privacy:60,desc:'방사형 빛살. 채광성이 우수하며 정자/누각에 사용'},
    {name:'완자문',beauty:90,trad:92,light:68,privacy:75,desc:'완(完)자 문살. 미적 완성도가 높은 고급 창호'},
    {name:'만자문',beauty:82,trad:85,light:72,privacy:70,desc:'卓(万)자 문살. 장수와 부귀를 상징'},
    {name:'꽃문',beauty:95,trad:80,light:60,privacy:82,desc:'꽃 형태 장식문양. 화려하며 여성 공간에 주로 사용'},
    {name:'거북이문',beauty:78,trad:82,light:75,privacy:65,desc:'육각형 거북이등 문양. 장수를 상징'},
    {name:'사괄문',beauty:75,trad:78,light:82,privacy:55,desc:'단순 격자 문양. 경제적이며 서민 주택에 보편적'},
    {name:'사선문',beauty:80,trad:75,light:78,privacy:62,desc:'대각선 문살. 동적인 느낌으로 현대 한옥에도 활용'},
    {name:'문자문',beauty:86,trad:88,light:62,privacy:80,desc:'한자/한글 문자 새긴 문양. 학문적 분위기'},
    {name:'팔각문',beauty:83,trad:86,light:70,privacy:68,desc:'팔각형 반복 문양. 제례 공간에 적합한 엄숙한 문양'},
    {name:'중첩문',beauty:94,trad:93,light:55,privacy:85,desc:'여러 문양 중첩. 최고급 공예품으로 왕실/사찰에 사용'}
  ];
  var sel=0;
  function open(){document.getElementById('v21-window').classList.add('active');v21sfx.windowSfx();buildTabs();draw();}
  function close(){document.getElementById('v21-window').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v21-wn-tabs');c.innerHTML='';patterns.forEach(function(p,i){var b=document.createElement('button');b.className='v21-tab'+(i===sel?' active':'');b.textContent=p.name;b.onclick=function(){sel=i;buildTabs();draw();v21sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v21-wn-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,p=patterns[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(p.name+' 분석',W/2,28);
    var metrics=[{label:'미관',val:p.beauty},{label:'전통성',val:p.trad},{label:'채광성',val:p.light},{label:'사생활',val:p.privacy}];
    var barW=100,barH=32,sX=(W-barW-160)/2+100,sY=60;
    metrics.forEach(function(m,i){
      var y=sY+i*55;cx.fillStyle='#e8d5c0';cx.font='13px sans-serif';cx.textAlign='right';cx.fillText(m.label,sX-15,y+barH/2+4);
      cx.fillStyle='rgba(255,255,255,.06)';cx.fillRect(sX,y,barW*3.5,barH);
      var bw=m.val/100*barW*3.5,grad=cx.createLinearGradient(sX,y,sX+bw,y);
      if(m.val>=85){grad.addColorStop(0,'#c4956a');grad.addColorStop(1,'#d4a57a');}
      else if(m.val>=70){grad.addColorStop(0,'#3498db');grad.addColorStop(1,'#2980b9');}
      else{grad.addColorStop(0,'#e67e22');grad.addColorStop(1,'#d35400');}
      cx.fillStyle=grad;cx.beginPath();cx.moveTo(sX+4,y);cx.lineTo(sX+bw-4,y);cx.quadraticCurveTo(sX+bw,y,sX+bw,y+4);cx.lineTo(sX+bw,y+barH-4);cx.quadraticCurveTo(sX+bw,y+barH,sX+bw-4,y+barH);cx.lineTo(sX,y+barH);cx.lineTo(sX,y+4);cx.quadraticCurveTo(sX,y,sX+4,y);cx.fill();
      cx.fillStyle='#f5deb3';cx.font='bold 12px sans-serif';cx.textAlign='left';cx.fillText(m.val,sX+bw+8,y+barH/2+4);
    });
    document.getElementById('v21-wn-info').textContent=p.desc;
    var avg=Math.round((p.beauty+p.trad+p.light+p.privacy)/4);
    document.getElementById('v21-wn-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div><div class="s"><div class="sv">'+(avg>=85?'S':avg>=75?'A':avg>=65?'B':'C')+'</div><div class="sl">종합등급</div></div>';
  }
  function design(){patterns.forEach(function(p){p.beauty=Math.max(50,Math.min(100,p.beauty+Math.round(Math.random()*8-4)));p.trad=Math.max(50,Math.min(100,p.trad+Math.round(Math.random()*8-4)));p.light=Math.max(50,Math.min(100,p.light+Math.round(Math.random()*8-4)));p.privacy=Math.max(50,Math.min(100,p.privacy+Math.round(Math.random()*8-4)));});v21sfx.windowSfx();draw();}
  function reset(){patterns[0].beauty=92;patterns[0].trad=95;patterns[0].light=65;patterns[0].privacy=78;patterns[1].beauty=88;patterns[1].trad=90;patterns[1].light=70;patterns[1].privacy=72;patterns[2].beauty=85;patterns[2].trad=88;patterns[2].light=80;patterns[2].privacy=60;patterns[3].beauty=90;patterns[3].trad=92;patterns[3].light=68;patterns[3].privacy=75;patterns[4].beauty=82;patterns[4].trad=85;patterns[4].light=72;patterns[4].privacy=70;patterns[5].beauty=95;patterns[5].trad=80;patterns[5].light=60;patterns[5].privacy=82;patterns[6].beauty=78;patterns[6].trad=82;patterns[6].light=75;patterns[6].privacy=65;patterns[7].beauty=75;patterns[7].trad=78;patterns[7].light=82;patterns[7].privacy=55;patterns[8].beauty=80;patterns[8].trad=75;patterns[8].light=78;patterns[8].privacy=62;patterns[9].beauty=86;patterns[9].trad=88;patterns[9].light=62;patterns[9].privacy=80;patterns[10].beauty=83;patterns[10].trad=86;patterns[10].light=70;patterns[10].privacy=68;patterns[11].beauty=94;patterns[11].trad=93;patterns[11].light=55;patterns[11].privacy=85;draw();}
  return {open:open,close:close,design:design,reset:reset};
})();

window.v21Aging = (function(){
  var buildings=[
    {name:'한옥(목조)',lifespan:200,curve:[100,95,88,80,72,65,58,52,46,40,35]},
    {name:'기와집',lifespan:150,curve:[100,92,84,75,66,58,50,43,37,32,28]},
    {name:'초가집',lifespan:50,curve:[100,80,62,48,36,28,22,18,15,12,10]},
    {name:'서원',lifespan:300,curve:[100,96,91,86,80,75,70,65,60,56,52]},
    {name:'정자',lifespan:180,curve:[100,94,87,79,71,64,57,51,45,40,36]},
    {name:'RC주택',lifespan:80,curve:[100,90,80,70,60,50,42,35,28,22,18]},
    {name:'철골조',lifespan:60,curve:[100,88,76,65,54,44,36,29,23,18,14]},
    {name:'조적조',lifespan:120,curve:[100,93,85,77,68,60,53,46,40,35,30]}
  ];
  var sel=0;
  function open(){document.getElementById('v21-aging').classList.add('active');v21sfx.aging();buildTabs();draw();}
  function close(){document.getElementById('v21-aging').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v21-ag-tabs');c.innerHTML='';buildings.forEach(function(b,i){var t=document.createElement('button');t.className='v21-tab'+(i===sel?' active':'');t.textContent=b.name;t.onclick=function(){sel=i;buildTabs();draw();v21sfx.tab();};c.appendChild(t);});}
  function draw(){
    var cv=document.getElementById('v21-ag-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,b=buildings[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(b.name+' 수명 예측 (50년)',W/2,28);
    var cL=80,cR=W-30,cT=50,cB=H-60,cW2=cR-cL,cH2=cB-cT;
    cx.strokeStyle='rgba(196,149,106,.15)';for(var g=0;g<=100;g+=20){var gy=cB-(g/100)*cH2;cx.beginPath();cx.moveTo(cL,gy);cx.lineTo(cR,gy);cx.stroke();cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.textAlign='right';cx.fillText(g+'%',cL-6,gy+4);}
    var pts=b.curve,n=pts.length;
    cx.strokeStyle='rgba(196,149,106,.6)';cx.fillStyle='rgba(196,149,106,.08)';cx.beginPath();cx.moveTo(cL,cB);
    pts.forEach(function(v,i){var x=cL+(i/(n-1))*cW2,y=cB-(v/100)*cH2;cx.lineTo(x,y);});cx.lineTo(cR,cB);cx.closePath();cx.fill();
    cx.strokeStyle='#c4956a';cx.lineWidth=2.5;cx.beginPath();pts.forEach(function(v,i){var x=cL+(i/(n-1))*cW2,y=cB-(v/100)*cH2;i===0?cx.moveTo(x,y):cx.lineTo(x,y);});cx.stroke();cx.lineWidth=1;
    pts.forEach(function(v,i){var x=cL+(i/(n-1))*cW2,y=cB-(v/100)*cH2;cx.beginPath();cx.arc(x,y,4,0,Math.PI*2);cx.fillStyle=v>=60?'#27ae60':v>=30?'#f39c12':'#e74c3c';cx.fill();cx.fillStyle='#f5deb3';cx.font='9px sans-serif';cx.textAlign='center';cx.fillText(v+'%',x,y-10);});
    cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.textAlign='center';for(var y2=0;y2<=50;y2+=5){cx.fillText(y2+'년',cL+(y2/50)*cW2,cB+18);}
    cx.strokeStyle='rgba(231,76,60,.4)';cx.setLineDash([6,4]);var dangerY=cB-(30/100)*cH2;cx.beginPath();cx.moveTo(cL,dangerY);cx.lineTo(cR,dangerY);cx.stroke();cx.fillStyle='#e74c3c';cx.font='10px sans-serif';cx.textAlign='right';cx.fillText('위험 (30%)',cR,dangerY-6);cx.setLineDash([]);
    document.getElementById('v21-ag-info').textContent='예상 수명: '+b.lifespan+'년. 50년 후 잔존강도: '+b.curve[b.curve.length-1]+'%';
    var last=b.curve[b.curve.length-1];
    document.getElementById('v21-ag-stat').innerHTML='<div class="s"><div class="sv">'+b.lifespan+'년</div><div class="sl">예상수명</div></div><div class="s"><div class="sv">'+last+'%</div><div class="sl">50년후</div></div><div class="s"><div class="sv">'+(last>=50?'S':last>=35?'A':last>=20?'B':'C')+'</div><div class="sl">내구등급</div></div>';
  }
  function predict(){buildings.forEach(function(b){b.curve=b.curve.map(function(v,i){if(i===0)return 100;return Math.max(5,Math.min(100,v+Math.round(Math.random()*10-5)));});});v21sfx.predict();draw();}
  function reset(){buildings[0].curve=[100,95,88,80,72,65,58,52,46,40,35];buildings[1].curve=[100,92,84,75,66,58,50,43,37,32,28];buildings[2].curve=[100,80,62,48,36,28,22,18,15,12,10];buildings[3].curve=[100,96,91,86,80,75,70,65,60,56,52];buildings[4].curve=[100,94,87,79,71,64,57,51,45,40,36];buildings[5].curve=[100,90,80,70,60,50,42,35,28,22,18];buildings[6].curve=[100,88,76,65,54,44,36,29,23,18,14];buildings[7].curve=[100,93,85,77,68,60,53,46,40,35,30];draw();}
  return {open:open,close:close,predict:predict,reset:reset};
})();

window.v21Vent = (function(){
  var systems=[
    {name:'자연환기',axes:[60,95,90,85,70,92],desc:'창문/문 개방으로 자연 기류 활용. 무동력으로 경제적'},
    {name:'기계환기(1종)',axes:[90,55,65,60,88,50],desc:'급기+배기 모두 기계. 완벽한 환기량 제어'},
    {name:'기계환기(2종)',axes:[82,65,70,68,85,60],desc:'급기만 기계, 배기는 자연. 양압 환기'},
    {name:'기계환기(3종)',axes:[78,70,72,70,82,65],desc:'배기만 기계, 급기는 자연. 음압 환기'},
    {name:'전열교환기',axes:[88,60,58,55,92,55],desc:'열회수 시스템으로 에너지 손실 최소화'},
    {name:'한옥풍혁',axes:[55,90,88,82,65,90],desc:'전통 한옥의 자연환기. 처마/마루/창호 통한 기류 순환'},
    {name:'하이브리드',axes:[85,72,68,65,88,68],desc:'자연+기계 복합. 상황별 자동 전환으로 효율적'},
    {name:'덕트환기',axes:[80,60,72,62,80,58],desc:'덕트 네트워크 통한 중앙집중 환기. 대형 건물에 적합'}
  ];
  var axisLabels=['환기력','경제성','비용효율','유지보수','공기질','친환경'];
  var sel=0;
  function open(){document.getElementById('v21-vent').classList.add('active');v21sfx.vent();buildTabs();draw();}
  function close(){document.getElementById('v21-vent').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v21-vt-tabs');c.innerHTML='';systems.forEach(function(s,i){var b=document.createElement('button');b.className='v21-tab'+(i===sel?' active':'');b.textContent=s.name;b.onclick=function(){sel=i;buildTabs();draw();v21sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v21-vt-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,s=systems[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(s.name+' 분석',W/2,28);
    var cX=W/2,cY=H/2+10,R=Math.min(W,H)/2-60,n=6;
    for(var ring=1;ring<=4;ring++){var r=R*ring/4;cx.strokeStyle='rgba(196,149,106,'+(ring===4?'.25':'.1')+')';cx.beginPath();for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;j===0?cx.moveTo(cX+r*Math.cos(a),cY+r*Math.sin(a)):cx.lineTo(cX+r*Math.cos(a),cY+r*Math.sin(a));}cx.closePath();cx.stroke();}
    for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;cx.strokeStyle='rgba(196,149,106,.15)';cx.beginPath();cx.moveTo(cX,cY);cx.lineTo(cX+R*Math.cos(a),cY+R*Math.sin(a));cx.stroke();cx.fillStyle='#c4956a';cx.font='11px sans-serif';cx.fillText(axisLabels[j],cX+(R+22)*Math.cos(a),cY+(R+22)*Math.sin(a)+4);}
    cx.strokeStyle='rgba(46,204,113,1)';cx.fillStyle='rgba(46,204,113,.12)';cx.lineWidth=2.5;cx.beginPath();
    s.axes.forEach(function(v,i){var a=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;i===0?cx.moveTo(cX+r2*Math.cos(a),cY+r2*Math.sin(a)):cx.lineTo(cX+r2*Math.cos(a),cY+r2*Math.sin(a));});
    cx.closePath();cx.fill();cx.stroke();cx.lineWidth=1;
    s.axes.forEach(function(v,i){var a=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;cx.beginPath();cx.arc(cX+r2*Math.cos(a),cY+r2*Math.sin(a),4,0,Math.PI*2);cx.fillStyle='#2ecc71';cx.fill();cx.fillStyle='#f5deb3';cx.font='bold 10px sans-serif';cx.textAlign='center';cx.fillText(v,cX+r2*Math.cos(a),cY+r2*Math.sin(a)-10);});
    document.getElementById('v21-vt-info').textContent=s.desc;
    var avg=Math.round(s.axes.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v21-vt-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div><div class="s"><div class="sv">'+Math.max.apply(null,s.axes)+'</div><div class="sl">최고항목</div></div><div class="s"><div class="sv">'+(avg>=80?'S':avg>=70?'A':avg>=60?'B':'C')+'</div><div class="sl">환기등급</div></div>';
  }
  function analyze(){systems.forEach(function(s){s.axes=s.axes.map(function(v){return Math.max(40,Math.min(100,v+Math.round(Math.random()*12-6)));});});v21sfx.vent();draw();}
  function reset(){systems[0].axes=[60,95,90,85,70,92];systems[1].axes=[90,55,65,60,88,50];systems[2].axes=[82,65,70,68,85,60];systems[3].axes=[78,70,72,70,82,65];systems[4].axes=[88,60,58,55,92,55];systems[5].axes=[55,90,88,82,65,90];systems[6].axes=[85,72,68,65,88,68];systems[7].axes=[80,60,72,62,80,58];draw();}
  return {open:open,close:close,analyze:analyze,reset:reset};
})();

(function(){
  var qs=[
    {q:'풍하중에서 항력계수(Cd)가 가장 높은 건물 유형은?',o:['고층 아파트','한옥','초가집','정자'],a:0},
    {q:'전통 대청마루의 주요 기능은?',o:['창고','가족 모임/제례','취침','조리'],a:1},
    {q:'채광 분석에서 일조량이 가장 풍부한 공간은?',o:['부엌','화장실','대청/마당','지하실'],a:2},
    {q:'외방수 공법의 장점은?',o:['저비용','수압을 외부에서 차단','시공 간편','유지보수 불필요'],a:1},
    {q:'잔향시간 RT60이 가장 짧은 공간은?',o:['누각실','안방','정자','대청'],a:2},
    {q:'용자문은 어떤 형태의 창호 문양인가?',o:['용(用)자 형태','별 형태','원형','삼각형'],a:0},
    {q:'건축물의 수명에서 가장 오래 버티는 구조는?',o:['초가집','철골조','서원','아파트'],a:2},
    {q:'전열교환기의 주요 장점은?',o:['저비용','에너지 손실 최소화','자연환기','유지보수 불필요'],a:1},
    {q:'한옥의 풍혁 환기는 어떤 방식인가?',o:['기계 급배기','처마/마루/창호 활용 자연환기','덕트 환기','공조기 환기'],a:1},
    {q:'벤토나이트 방수의 원리는?',o:['열 아스팔트','물을 만나면 팝창하여 방수','시트 부착','시멘트 혼합'],a:1},
    {q:'퇴마루의 주요 특징은?',o:['넓은 모임 공간','통행 통로로 동선 효율성 높음','조망 감상용','작업 공간'],a:1},
    {q:'거북이문 창호가 상징하는 것은?',o:['부귀','장수','학문','화려함'],a:1},
    {q:'RC주택의 예상 수명은 대략?',o:['30년','80년','200년','500년'],a:1},
    {q:'실내 잔향시간 RT60의 적정 범위는?',o:['0.1~0.3초','0.5~0.8초','2.0~3.0초','5.0초 이상'],a:1},
    {q:'하이브리드 환기 시스템의 특징은?',o:['자연환기만','기계환기만','자연+기계 복합 자동전환','덕트 전용'],a:2}
  ];
  function inject(){if(!window.quizQuestions)window.quizQuestions=[];qs.forEach(function(q){window.quizQuestions.push(q);});}
  if(document.readyState==='complete')inject();else window.addEventListener('load',inject);
})();

(function(){
  var achs=[
    {id:'wind_analyst',name:'풍하중 분석가',desc:'풍하중 시뮬레이터 열기'},
    {id:'maru_expert',name:'마루 전문가',desc:'전통 마루 8종 모두 확인'},
    {id:'sun_master',name:'채광 마스터',desc:'채광 분석 완료'},
    {id:'waterproof_pro',name:'방수 전문가',desc:'지하방수 8공법 비교'},
    {id:'acoustics_guru',name:'음향 구루',desc:'잔향 분석 완료'},
    {id:'window_designer',name:'창호 설계사',desc:'창호 12종 문양 확인'},
    {id:'aging_predictor',name:'수명 예측사',desc:'건물 수명 예측 완료'},
    {id:'vent_specialist',name:'환기 전문가',desc:'환기 시스템 8방식 비교'},
    {id:'quiz_v21_master',name:'v21 퀴즈 마스터',desc:'v21 퀴즈 15문 모두 정답'},
    {id:'v21_explorer',name:'v21 탐험가',desc:'v21 기능 4개 이상 사용'},
    {id:'v21_complete',name:'v21 완전정복',desc:'v21 모든 기능 사용'},
    {id:'building_230',name:'업적 230개',desc:'총 업적 230개 달성'}
  ];
  function inject(){if(!window.achievements)window.achievements=[];achs.forEach(function(a){window.achievements.push(a);});}
  if(document.readyState==='complete')inject();else window.addEventListener('load',inject);
})();

(function(){
  var btns=[
    {icon:'🌬️',label:'풍하중',fn:function(){v21Wind.open();}},
    {icon:'🩹',label:'마루구조',fn:function(){v21Maru.open();}},
    {icon:'☀️',label:'채광분석',fn:function(){v21Sun.open();}},
    {icon:'🧱',label:'지하방수',fn:function(){v21Base.open();}},
    {icon:'🔊',label:'음향분석',fn:function(){v21Acoust.open();}},
    {icon:'🪟',label:'창호문양',fn:function(){v21Window.open();}},
    {icon:'⏳',label:'수명예측',fn:function(){v21Aging.open();}},
    {icon:'💨',label:'환기시스템',fn:function(){v21Vent.open();}}
  ];
  function init(){
    var menu=document.createElement('div');menu.className='v21-menu';
    var existing=document.querySelector('.v20-menu');
    if(existing){menu.style.top='auto';menu.style.transform='none';menu.style.bottom='12px';}
    btns.forEach(function(b){var el=document.createElement('button');el.className='v21-menu-btn';el.innerHTML=b.icon+'<span class="v21-menu-label">'+b.label+'</span>';el.onclick=function(){v21sfx.nav();b.fn();};menu.appendChild(el);});
    document.body.appendChild(menu);
  }
  if(document.readyState==='complete')init();else window.addEventListener('load',init);
})();

(function(){
  var map={'G':function(){v21Wind.open();},'H':function(){v21Maru.open();},'J':function(){v21Sun.open();},'K':function(){v21Base.open();},'L':function(){v21Acoust.open();},'Z':function(){v21Window.open();},'X':function(){v21Aging.open();},'C':function(){v21Vent.open();}};
  document.addEventListener('keydown',function(e){if(e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.metaKey){var k=e.key.toUpperCase();if(map[k]){e.preventDefault();v21sfx.nav();map[k]();}}});
})();

}

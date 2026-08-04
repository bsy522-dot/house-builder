// =====================================================
// House Builder v25.0 Patch
// 전통지붕기와배열설계기Canvas620x400_10종배열패턴6축Radar방수미관내구시공전통비용
// 구조하중분배시각화기Canvas640x400_8구조부재하중전달네트워크응력히트맵
// 전통온돌효율시뮬레이터Canvas620x400_8구역온도분포히트맵열효율게이지
// 실내음향잔향분석기Canvas600x380_8실잔향시간바차트최적범위RT60
// 전통정원조경플래너Canvas640x400_10조경요소배치네트워크조화도
// 건축자재풍화시뮬레이터Canvas620x400_10자재50년경년변화라인차트
// 전통장석철물도감Canvas600x380_10종장석5축Radar기능미관전통내구희소
// 건축지속가능성종합대시보드Canvas620x400_8KPI반원게이지종합S~D등급
// 퀴즈+15(300->315)+업적+12(266->278)+SFX16종+키보드Shift+A/S/D/F/G/H/J/K/0
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV25) {
window.__hbV25 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v25-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5500;overflow-y:auto;padding:16px}',
    '.v25-panel.active{display:block}',
    '.v25-box{max-width:720px;margin:40px auto}',
    '.v25-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v25-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v25-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v25-close:hover{background:#d4a57a}',
    '.v25-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v25-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v25-tab:hover,.v25-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v25-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v25-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v25-stat .s{text-align:center}',
    '.v25-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v25-stat .sl{font-size:11px;color:#c4956a}',
    '.v25-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v25-btn-sm:hover{background:#d4a57a}',
    '@media(max-width:600px){.v25-box{margin:16px auto}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ============ Data ============
var V25_TILE_DATA = [
  {n:'암키와',a:[92,95,88,70,96,65],d:'지붕의 주요 면을 덩는 평기와'},
  {n:'수키와',a:[95,90,85,68,94,60],d:'암키와 위를 덩는 반원형 기와'},
  {n:'막새기와',a:[88,85,82,75,90,70],d:'처마 끝 장식용 기와'},
  {n:'용마루',a:[80,98,78,55,98,45],d:'용 머리 형상의 처마 끝 장식'},
  {n:'치미기와',a:[75,92,72,60,95,50],d:'부업막이 들어간 장식 기와'},
  {n:'와당',a:[90,80,90,80,85,75],d:'기와를 여러 장 까는 전통 기법'},
  {n:'박공기와',a:[85,88,80,72,88,68],d:'박공이 빚은 전통 기와'},
  {n:'평기와',a:[88,75,85,82,80,78],d:'평평하게 까는 기본 기와'},
  {n:'척새기와',a:[82,78,80,78,82,72],d:'척새의 등뻔 모양 기와'},
  {n:'곡선기와',a:[86,93,83,65,92,58],d:'곡선미가 아름다운 전통 기와'}
];
var V25_TILE_AXES = ['방수','미관','내구','시공','전통','비용'];

var V25_LOAD_DATA = [
  {n:'대들보',load:100,to:[1,2],color:'#e74c3c'},
  {n:'서까래',load:85,to:[2,3],color:'#e67e22'},
  {n:'도리',load:90,to:[3,4],color:'#f39c12'},
  {n:'보',load:95,to:[4,5],color:'#2ecc71'},
  {n:'기둥',load:100,to:[5,6],color:'#3498db'},
  {n:'초석',load:80,to:[6,7],color:'#9b59b6'},
  {n:'기단',load:70,to:[7],color:'#1abc9c'},
  {n:'지반',load:60,to:[],color:'#95a5a6'}
];

var V25_ONDOL_DATA = [
  {n:'아궁이',temp:85,eff:92},{n:'부넣측',temp:78,eff:88},
  {n:'안방',temp:90,eff:95},{n:'건넌방',temp:72,eff:82},
  {n:'대청',temp:55,eff:65},{n:'투마루',temp:45,eff:55},
  {n:'다락',temp:35,eff:42},{n:'문간방',temp:60,eff:70}
];

var V25_ACOUST_DATA = [
  {n:'안방',rt:0.4,opt:[0.3,0.6],vol:28},{n:'거실',rt:0.7,opt:[0.4,0.8],vol:45},
  {n:'대청',rt:1.2,opt:[0.6,1.0],vol:80},{n:'부엌',rt:0.5,opt:[0.4,0.7],vol:20},
  {n:'서재',rt:1.5,opt:[0.8,1.4],vol:60},{n:'사랑방',rt:0.6,opt:[0.4,0.7],vol:35},
  {n:'다락',rt:0.3,opt:[0.2,0.5],vol:15},{n:'마당',rt:1.8,opt:[1.0,2.0],vol:120}
];

var V25_GARDEN_DATA = [
  {n:'연못',x:320,y:200,r:40,color:'#3498db'},
  {n:'정자',x:180,y:120,r:30,color:'#c4956a'},
  {n:'석탑',x:460,y:100,r:25,color:'#7f8c8d'},
  {n:'대나무',x:100,y:280,r:35,color:'#27ae60'},
  {n:'소나무',x:520,y:280,r:35,color:'#2ecc71'},
  {n:'잔디밭',x:320,y:340,r:45,color:'#82e0aa'},
  {n:'화단',x:180,y:320,r:28,color:'#e74c3c'},
  {n:'담장',x:320,y:50,r:20,color:'#a0714a'},
  {n:'산책로',x:400,y:250,r:22,color:'#d4a57a'},
  {n:'디딜돌',x:250,y:180,r:18,color:'#bdc3c7'}
];
var V25_GARDEN_LINKS = [[0,1],[0,9],[1,2],[1,7],[2,4],[3,6],[3,0],[4,8],[5,3],[5,6],[6,8],[7,2],[8,0],[9,5]];

var V25_WEATHER_DATA = [
  {n:'목재',vals:[100,98,94,88,80,72,65,58,52,48]},
  {n:'석재',vals:[100,99,97,95,93,90,88,85,83,80]},
  {n:'토벨',vals:[100,96,90,82,73,65,58,52,48,45]},
  {n:'기와',vals:[100,99,96,92,87,82,77,73,70,68]},
  {n:'시멘트',vals:[100,98,95,90,84,78,72,67,63,60]},
  {n:'철골',vals:[100,97,92,86,78,70,63,57,52,48]},
  {n:'유리',vals:[100,99,98,96,94,91,88,85,82,80]},
  {n:'단열재',vals:[100,95,88,80,70,60,52,45,40,36]},
  {n:'합판',vals:[100,94,85,74,62,52,43,36,30,26]},
  {n:'대나무',vals:[100,97,93,88,82,76,70,65,61,58]}
];

var V25_JANGSEOK_DATA = [
  {n:'경첩',a:[90,95,98,88,95],d:'문짝에 사용하는 장식 철물'},
  {n:'배목',a:[95,80,92,90,80],d:'문짝의 회전축 철물'},
  {n:'들쇠',a:[98,75,85,92,75],d:'문 잠금용 철물'},
  {n:'자물쇠',a:[96,82,88,90,82],d:'자물쇠 형태의 잠금장치'},
  {n:'철엽전',a:[85,88,90,85,88],d:'동전 형태의 장식 철물'},
  {n:'꽃장식',a:[70,98,95,72,96],d:'꽃 문양의 장식 철물'},
  {n:'반달장식',a:[72,96,94,70,94],d:'반달 모양의 장식 철물'},
  {n:'박취장식',a:[68,94,96,68,98],d:'박취 문양의 장식'},
  {n:'문고리',a:[92,85,90,86,85],d:'문 여닫을 때 고정하는 철물'},
  {n:'끝동자',a:[88,90,92,84,90],d:'문짝 끝 장식 철물'}
];
var V25_JANGSEOK_AXES = ['기능','미관','전통','내구','희소'];

var V25_SUSTAIN_KPI = [
  {n:'에너지 효율',v:78,icon:'⚡'},
  {n:'탄소 배출',v:65,icon:'🌿'},
  {n:'자원 순환',v:72,icon:'♻️'},
  {n:'수명 내구',v:82,icon:'🛡️'},
  {n:'실내 환경',v:75,icon:'🏠'},
  {n:'수자원 관리',v:68,icon:'💧'},
  {n:'소음 차단',v:70,icon:'🔇'},
  {n:'미관 조화',v:85,icon:'🎨'}
];

// ============ SFX Engine ============
var v25Sfx = (function(){
  var ctx;
  function getCtx(){ if(!ctx) try{ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){} return ctx; }
  function play(freq,type,dur){
    var c=getCtx(); if(!c) return;
    var o=c.createOscillator(),g=c.createGain();
    o.type=type||'sine'; o.frequency.value=freq||440;
    g.gain.setValueAtTime(0.15,c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+(dur||0.2));
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime+(dur||0.2));
  }
  return {
    click:function(){play(800,'sine',0.08)},
    open:function(){play(523,'sine',0.15);setTimeout(function(){play(659,'sine',0.12)},80)},
    close:function(){play(659,'sine',0.1);setTimeout(function(){play(523,'sine',0.12)},60)},
    tab:function(){play(700,'triangle',0.06)},
    hover:function(){play(1200,'sine',0.04)},
    success:function(){play(523,'sine',0.12);setTimeout(function(){play(659,'sine',0.12)},100);setTimeout(function(){play(784,'sine',0.15)},200)},
    fail:function(){play(300,'sawtooth',0.15)},
    quiz:function(){play(440,'triangle',0.1);setTimeout(function(){play(554,'triangle',0.1)},80)},
    correct:function(){play(523,'sine',0.1);setTimeout(function(){play(659,'sine',0.1)},80);setTimeout(function(){play(784,'sine',0.15)},160)},
    wrong:function(){play(200,'sawtooth',0.2)},
    ach:function(){play(784,'sine',0.12);setTimeout(function(){play(988,'sine',0.12)},100);setTimeout(function(){play(1175,'sine',0.2)},200)},
    build:function(){play(261,'square',0.08);setTimeout(function(){play(330,'square',0.08)},60)},
    compare:function(){play(600,'triangle',0.08);setTimeout(function(){play(750,'triangle',0.1)},70)},
    reset:function(){play(500,'sine',0.1);setTimeout(function(){play(400,'sine',0.12)},80)},
    gauge:function(){play(880,'sine',0.06)},
    network:function(){play(660,'triangle',0.08);setTimeout(function(){play(880,'triangle',0.06)},60)},
    weather:function(){play(350,'sine',0.12);setTimeout(function(){play(440,'sine',0.1)},80)}
  };
})();

// ============ Canvas Helpers ============
function v25Clear(c,w,h){c.fillStyle='#1a1a2e';c.fillRect(0,0,w,h);c.strokeStyle='rgba(196,149,106,.15)';c.lineWidth=1;for(var i=0;i<w;i+=40){c.beginPath();c.moveTo(i,0);c.lineTo(i,h);c.stroke();}for(var j=0;j<h;j+=40){c.beginPath();c.moveTo(0,j);c.lineTo(w,j);c.stroke();}}
function v25Radar(c,cx,cy,r,axes,vals,color,label){
  var n=axes.length,a=Math.PI*2/n;
  c.strokeStyle='rgba(196,149,106,.2)';c.lineWidth=1;
  for(var lv=1;lv<=5;lv++){c.beginPath();for(var i=0;i<=n;i++){var ang=-Math.PI/2+a*(i%n),rr=r*lv/5;c.lineTo(cx+rr*Math.cos(ang),cy+rr*Math.sin(ang));}c.closePath();c.stroke();}
  for(var i=0;i<n;i++){var ang=-Math.PI/2+a*i;c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));c.stroke();c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(axes[i],cx+(r+18)*Math.cos(ang),cy+(r+18)*Math.sin(ang));}
  c.beginPath();c.fillStyle=color.replace(')',',0.25)').replace('rgb','rgba');c.strokeStyle=color;c.lineWidth=2;
  for(var i=0;i<=n;i++){var ang=-Math.PI/2+a*(i%n),v=vals[i%n]/100*r;c.lineTo(cx+v*Math.cos(ang),cy+v*Math.sin(ang));}
  c.closePath();c.fill();c.stroke();
  for(var i=0;i<n;i++){var ang=-Math.PI/2+a*i,v=vals[i]/100*r;c.beginPath();c.arc(cx+v*Math.cos(ang),cy+v*Math.sin(ang),4,0,Math.PI*2);c.fillStyle=color;c.fill();}
  if(label){c.fillStyle='#f5deb3';c.font='bold 13px sans-serif';c.textAlign='center';c.fillText(label,cx,cy-r-30);}
}
function v25Grade(v){return v>=90?'S':v>=80?'A':v>=70?'B':v>=60?'C':'D';}
function v25GradeColor(g){return g==='S'?'#f1c40f':g==='A'?'#2ecc71':g==='B'?'#3498db':g==='C'?'#e67e22':'#e74c3c';}
function v25Gauge(c,cx,cy,r,val,label,icon){
  var startA=Math.PI,endA=2*Math.PI,valA=startA+(endA-startA)*val/100;
  c.lineWidth=12;c.strokeStyle='rgba(255,255,255,.08)';c.beginPath();c.arc(cx,cy,r,startA,endA);c.stroke();
  var g=v25Grade(val),gc=v25GradeColor(g);
  c.strokeStyle=gc;c.lineWidth=12;c.lineCap='round';c.beginPath();c.arc(cx,cy,r,startA,valA);c.stroke();c.lineCap='butt';
  c.fillStyle='#f5deb3';c.font='bold 22px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(val+'%',cx,cy-6);
  c.fillStyle=gc;c.font='bold 16px sans-serif';c.fillText(g,cx,cy+18);
  c.fillStyle='#c4956a';c.font='11px sans-serif';c.fillText(label,cx,cy+r+18);
  if(icon){c.font='18px sans-serif';c.fillText(icon,cx,cy-r-8);}
}

// ============ HTML Panels ============
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v25-panels';
  wrap.innerHTML =
    '<div id="v25-tile" class="v25-panel"><div class="v25-box">' +
      '<h2>🏛️ 전통 지붕 기와 배열 설계기</h2>' +
      '<p>10종 기와 배열 패턴의 구조적 특성 비교 (6축 Radar)</p>' +
      '<div class="v25-tabs" id="v25-tl-tabs"></div>' +
      '<canvas id="v25-tl-canvas" class="v25-canvas" width="620" height="400"></canvas>' +
      '<div id="v25-tl-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-tl-stat"></div>' +
      '<div style="text-align:center"><button class="v25-btn-sm" onclick="v25Tile.compare()">비교</button> <button class="v25-btn-sm" onclick="v25Tile.reset()">초기화</button></div>' +
      '<button class="v25-close" onclick="v25Tile.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-load" class="v25-panel"><div class="v25-box">' +
      '<h2>🏗️ 구조 하중 분배 시각화기</h2>' +
      '<p>8구조 부재의 하중 전달 경로 및 응력 분석</p>' +
      '<canvas id="v25-ld-canvas" class="v25-canvas" width="640" height="400"></canvas>' +
      '<div id="v25-ld-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-ld-stat"></div>' +
      '<div style="text-align:center"><button class="v25-btn-sm" onclick="v25Load.animate()">하중 전달 애니메이션</button></div>' +
      '<button class="v25-close" onclick="v25Load.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-ondol" class="v25-panel"><div class="v25-box">' +
      '<h2>🔥 전통 온돌 효율 시뮬레이터</h2>' +
      '<p>8구역 온도 분포 히트맵 및 열효율 분석</p>' +
      '<canvas id="v25-od-canvas" class="v25-canvas" width="620" height="400"></canvas>' +
      '<div id="v25-od-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-od-stat"></div>' +
      '<button class="v25-close" onclick="v25Ondol.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-acoust" class="v25-panel"><div class="v25-box">' +
      '<h2>🔊 실내 음향 잔향 분석기</h2>' +
      '<p>8실 잔향시간(RT60) 및 최적 범위 분석</p>' +
      '<canvas id="v25-ac-canvas" class="v25-canvas" width="600" height="380"></canvas>' +
      '<div id="v25-ac-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-ac-stat"></div>' +
      '<button class="v25-close" onclick="v25Acoust.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-garden" class="v25-panel"><div class="v25-box">' +
      '<h2>🌿 전통 정원 조경 플래너</h2>' +
      '<p>10조경 요소 배치 네트워크 및 조화도 분석</p>' +
      '<canvas id="v25-gd-canvas" class="v25-canvas" width="640" height="400"></canvas>' +
      '<div id="v25-gd-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-gd-stat"></div>' +
      '<button class="v25-close" onclick="v25Garden.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-weather" class="v25-panel"><div class="v25-box">' +
      '<h2>🌦️ 건축 자재 풍화 시뮬레이터</h2>' +
      '<p>10자재 50년 경년변화 라인차트 분석</p>' +
      '<canvas id="v25-wt-canvas" class="v25-canvas" width="620" height="400"></canvas>' +
      '<div id="v25-wt-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-wt-stat"></div>' +
      '<button class="v25-close" onclick="v25Weather.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-jangseok" class="v25-panel"><div class="v25-box">' +
      '<h2>🔩 전통 장석 철물 도감</h2>' +
      '<p>10종 장석 철물의 특성 비교 (5축 Radar)</p>' +
      '<div class="v25-tabs" id="v25-js-tabs"></div>' +
      '<canvas id="v25-js-canvas" class="v25-canvas" width="600" height="380"></canvas>' +
      '<div id="v25-js-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-js-stat"></div>' +
      '<div style="text-align:center"><button class="v25-btn-sm" onclick="v25Jangseok.compare()">비교</button> <button class="v25-btn-sm" onclick="v25Jangseok.reset()">초기화</button></div>' +
      '<button class="v25-close" onclick="v25Jangseok.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v25-sustain" class="v25-panel"><div class="v25-box">' +
      '<h2>🌱 건축 지속가능성 종합 대시보드</h2>' +
      '<p>8KPI 반원게이지 종합 등급 평가</p>' +
      '<canvas id="v25-su-canvas" class="v25-canvas" width="620" height="400"></canvas>' +
      '<div id="v25-su-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:50px"></div>' +
      '<div class="v25-stat" id="v25-su-stat"></div>' +
      '<button class="v25-close" onclick="v25Sustain.close()">닫기</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ============ 1. Tile Arrangement Designer ============
window.v25Tile = (function(){
  var sel=0, cmpMode=false, cmpSel=1;
  function draw(){
    var cv=document.getElementById('v25-tl-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,620,400);
    var d=V25_TILE_DATA[sel];
    if(cmpMode){
      var d2=V25_TILE_DATA[cmpSel];
      v25Radar(c,200,220,120,V25_TILE_AXES,d.a,'rgb(196,149,106)',d.n);
      v25Radar(c,200,220,120,V25_TILE_AXES,d2.a,'rgb(46,204,113)',d2.n);
      c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
      c.fillText(d.n+' vs '+d2.n,310,30);
      c.fillStyle='#c4956a';c.font='12px sans-serif';
      var avg1=Math.round(d.a.reduce(function(a,b){return a+b},0)/6);
      var avg2=Math.round(d2.a.reduce(function(a,b){return a+b},0)/6);
      c.fillText('평균: '+avg1+'% vs '+avg2+'%',310,52);
      for(var i=0;i<6;i++){
        var y=80+i*48,diff=d.a[i]-d2.a[i];
        c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='right';c.fillText(V25_TILE_AXES[i],430,y+12);
        c.fillStyle='rgba(196,149,106,.3)';c.fillRect(440,y,140,20);
        c.fillStyle='rgb(196,149,106)';c.fillRect(440,y,d.a[i]/100*140,9);
        c.fillStyle='rgb(46,204,113)';c.fillRect(440,y+11,d2.a[i]/100*140,9);
        c.fillStyle=diff>0?'#2ecc71':diff<0?'#e74c3c':'#c4956a';
        c.textAlign='left';c.fillText((diff>0?'+':'')+diff,586,y+14);
      }
    } else {
      v25Radar(c,220,220,140,V25_TILE_AXES,d.a,'rgb(196,149,106)',d.n);
      var avg=Math.round(d.a.reduce(function(a,b){return a+b},0)/6);
      var g=v25Grade(avg);
      c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='left';
      c.fillText(d.n,420,80);
      c.fillStyle='#c4956a';c.font='12px sans-serif';
      c.fillText(d.d,420,100);
      c.fillText('평균: '+avg+'%',420,125);
      c.fillStyle=v25GradeColor(g);c.font='bold 24px sans-serif';
      c.fillText(g,420,160);
      for(var i=0;i<6;i++){
        var y=190+i*30;
        c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='left';
        c.fillText(V25_TILE_AXES[i],420,y+10);
        c.fillStyle='rgba(196,149,106,.2)';c.fillRect(470,y,120,14);
        c.fillStyle='rgb(196,149,106)';c.fillRect(470,y,d.a[i]/100*120,14);
        c.fillStyle='#f5deb3';c.font='10px sans-serif';
        c.fillText(d.a[i]+'%',470+d.a[i]/100*120+4,y+11);
      }
    }
  }
  function buildTabs(){
    var el=document.getElementById('v25-tl-tabs'); if(!el) return; el.innerHTML='';
    V25_TILE_DATA.forEach(function(d,i){
      var b=document.createElement('button');b.className='v25-tab'+(i===sel?' active':'');b.textContent=d.n;
      b.onclick=function(){sel=i;cmpMode=false;buildTabs();draw();v25Sfx.tab();updateInfo();};
      el.appendChild(b);
    });
  }
  function updateInfo(){
    var d=V25_TILE_DATA[sel],avg=Math.round(d.a.reduce(function(a,b){return a+b},0)/6);
    var el=document.getElementById('v25-tl-info'); if(el) el.textContent=d.d+' | 평균 '+avg+'% (등급: '+v25Grade(avg)+')';
    var st=document.getElementById('v25-tl-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">'+V25_TILE_DATA.length+'</div><div class="sl">기와 종류</div></div><div class="s"><div class="sv">6</div><div class="sl">분석 축</div></div><div class="s"><div class="sv">'+avg+'%</div><div class="sl">평균 점수</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-tile').classList.add('active');buildTabs();draw();updateInfo();v25Sfx.open();v25CheckAch('v25_tile');},
    close:function(){document.getElementById('v25-tile').classList.remove('active');v25Sfx.close();},
    compare:function(){cmpMode=!cmpMode;if(cmpMode)cmpSel=(sel+1)%V25_TILE_DATA.length;draw();v25Sfx.compare();},
    reset:function(){sel=0;cmpMode=false;buildTabs();draw();updateInfo();v25Sfx.reset();}
  };
})();

// ============ 2. Load Distribution Visualizer ============
window.v25Load = (function(){
  var animProg=0,animId=null;
  function draw(){
    var cv=document.getElementById('v25-ld-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,640,400);
    c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
    c.fillText('구조 하중 전달 경로',320,28);
    c.fillStyle='#c4956a';c.font='11px sans-serif';
    c.fillText('대들보 → 서까래 → 도리 → 보 → 기둥 → 초석 → 기단 → 지반',320,48);
    var nodes=[];
    V25_LOAD_DATA.forEach(function(d,i){
      var x=80+i*70, y=80+i*38;
      nodes.push({x:x,y:y});
    });
    V25_LOAD_DATA.forEach(function(d,i){
      d.to.forEach(function(t){
        if(t<nodes.length){
          var progress=Math.min(1,Math.max(0,(animProg-i*0.1)/0.15));
          if(progress<=0) return;
          c.beginPath();c.moveTo(nodes[i].x,nodes[i].y);
          var ex=nodes[i].x+(nodes[t].x-nodes[i].x)*progress;
          var ey=nodes[i].y+(nodes[t].y-nodes[i].y)*progress;
          c.lineTo(ex,ey);
          c.strokeStyle=d.color;c.lineWidth=3+d.load/30;c.globalAlpha=0.7;c.stroke();c.globalAlpha=1;
        }
      });
    });
    V25_LOAD_DATA.forEach(function(d,i){
      var x=nodes[i].x, y=nodes[i].y, r=18+d.load/10;
      c.beginPath();c.arc(x,y,r,0,Math.PI*2);
      c.fillStyle=d.color;c.globalAlpha=0.3;c.fill();c.globalAlpha=1;
      c.strokeStyle=d.color;c.lineWidth=2;c.stroke();
      c.fillStyle='#f5deb3';c.font='bold 11px sans-serif';c.textAlign='center';c.textBaseline='middle';
      c.fillText(d.n,x,y-4);
      c.fillStyle='#c4956a';c.font='10px sans-serif';
      c.fillText(d.load+'%',x,y+10);
    });
    c.fillStyle='rgba(196,149,106,.15)';c.fillRect(420,80,200,280);
    c.fillStyle='#f5deb3';c.font='bold 12px sans-serif';c.textAlign='left';
    c.fillText('응력 분석',430,105);
    V25_LOAD_DATA.forEach(function(d,i){
      var y=125+i*30;
      c.fillStyle=d.color;c.fillRect(430,y,d.load/100*160,18);
      c.fillStyle='#e8d5c0';c.font='10px sans-serif';c.textAlign='left';
      c.fillText(d.n+' '+d.load+'%',435,y+13);
    });
  }
  function updateInfo(){
    var el=document.getElementById('v25-ld-info'); if(el) el.textContent='지붕의 하중이 지반까지 전달되는 경로를 시각화합니다';
    var st=document.getElementById('v25-ld-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">8</div><div class="sl">구조 부재</div></div><div class="s"><div class="sv">100%</div><div class="sl">최대 하중</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-load').classList.add('active');animProg=1;draw();updateInfo();v25Sfx.open();v25CheckAch('v25_load');},
    close:function(){document.getElementById('v25-load').classList.remove('active');if(animId){cancelAnimationFrame(animId);animId=null;}v25Sfx.close();},
    animate:function(){
      animProg=0;
      function step(){animProg+=0.015;draw();if(animProg<1.5)animId=requestAnimationFrame(step);else animId=null;}
      if(animId)cancelAnimationFrame(animId);
      step();v25Sfx.build();
    }
  };
})();

// ============ 3. Ondol Efficiency Simulator ============
window.v25Ondol = (function(){
  function draw(){
    var cv=document.getElementById('v25-od-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,620,400);
    c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
    c.fillText('온돌 열효율 분석',310,28);
    var gx=60,gy=60,gw=260,gh=260;
    var cols=4,rows=2,cw=gw/cols,ch=gh/rows;
    V25_ONDOL_DATA.forEach(function(d,i){
      var col=i%cols,row=Math.floor(i/cols);
      var x=gx+col*cw,y=gy+row*ch;
      var t=d.temp/100;
      var r=Math.round(200+55*t),g=Math.round(50+50*(1-t)),b=Math.round(30+20*(1-t));
      c.fillStyle='rgb('+r+','+g+','+b+')';
      c.fillRect(x+2,y+2,cw-4,ch-4);
      c.fillStyle='#fff';c.font='bold 12px sans-serif';c.textAlign='center';c.textBaseline='middle';
      c.fillText(d.n,x+cw/2,y+ch/2-10);
      c.font='10px sans-serif';
      c.fillText(d.temp+'°',x+cw/2,y+ch/2+8);
    });
    c.strokeStyle='#c4956a';c.lineWidth=2;c.strokeRect(gx,gy,gw,gh);
    c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='center';
    c.fillText('아궁이 → 먼 방으로 갈수록 온도 감소',gx+gw/2,gy+gh+20);
    c.fillStyle='#f5deb3';c.font='bold 12px sans-serif';c.textAlign='left';
    c.fillText('열효율 분석',370,80);
    V25_ONDOL_DATA.forEach(function(d,i){
      var y=105+i*34;
      c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='right';c.fillText(d.n,420,y+12);
      c.fillStyle='rgba(196,149,106,.15)';c.fillRect(430,y,160,20);
      var eff=d.eff;
      c.fillStyle=eff>=85?'#e74c3c':eff>=70?'#e67e22':eff>=50?'#f1c40f':'#3498db';
      c.fillRect(430,y,eff/100*160,20);
      c.fillStyle='#f5deb3';c.font='10px sans-serif';c.textAlign='left';
      c.fillText(eff+'%',430+eff/100*160+4,y+14);
    });
    var avgEff=Math.round(V25_ONDOL_DATA.reduce(function(a,b){return a+b.eff},0)/V25_ONDOL_DATA.length);
    c.fillStyle='#f5deb3';c.font='bold 16px sans-serif';c.textAlign='center';
    c.fillText('종합 열효율: '+avgEff+'% ('+v25Grade(avgEff)+')',310,380);
  }
  function updateInfo(){
    var avgEff=Math.round(V25_ONDOL_DATA.reduce(function(a,b){return a+b.eff},0)/V25_ONDOL_DATA.length);
    var el=document.getElementById('v25-od-info'); if(el) el.textContent='아궁이에서 먼 방으로 갈수록 온도와 효율이 감소합니다. 평균 효율: '+avgEff+'%';
    var st=document.getElementById('v25-od-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">8</div><div class="sl">구역</div></div><div class="s"><div class="sv">'+avgEff+'%</div><div class="sl">평균 효율</div></div><div class="s"><div class="sv">90°</div><div class="sl">최고 온도</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-ondol').classList.add('active');draw();updateInfo();v25Sfx.open();v25CheckAch('v25_ondol');},
    close:function(){document.getElementById('v25-ondol').classList.remove('active');v25Sfx.close();}
  };
})();

// ============ 4. Acoustics Analyzer ============
window.v25Acoust = (function(){
  function draw(){
    var cv=document.getElementById('v25-ac-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,600,380);
    c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
    c.fillText('실내 잔향시간 (RT60) 분석',300,28);
    var bx=70,by=60,bw=480,bh=260;
    c.strokeStyle='rgba(196,149,106,.3)';c.lineWidth=1;c.strokeRect(bx,by,bw,bh);
    for(var lv=0;lv<=4;lv++){
      var y=by+bh-lv*bh/4;
      c.beginPath();c.moveTo(bx,y);c.lineTo(bx+bw,y);c.strokeStyle='rgba(196,149,106,.15)';c.stroke();
      c.fillStyle='#c4956a';c.font='10px sans-serif';c.textAlign='right';
      c.fillText((lv*0.5).toFixed(1)+'s',bx-6,y+4);
    }
    var barW=bw/V25_ACOUST_DATA.length-12;
    V25_ACOUST_DATA.forEach(function(d,i){
      var x=bx+10+i*(barW+12);
      var optLo=d.opt[0]/2*bh,optHi=d.opt[1]/2*bh;
      c.fillStyle='rgba(46,204,113,.15)';
      c.fillRect(x,by+bh-optHi,barW,optHi-optLo);
      var barH=d.rt/2*bh;
      var inRange=d.rt>=d.opt[0]&&d.rt<=d.opt[1];
      c.fillStyle=inRange?'#2ecc71':'#e74c3c';
      c.fillRect(x,by+bh-barH,barW,barH);
      c.fillStyle='#f5deb3';c.font='10px sans-serif';c.textAlign='center';
      c.fillText(d.rt.toFixed(1)+'s',x+barW/2,by+bh-barH-8);
      c.fillStyle='#c4956a';c.font='11px sans-serif';
      c.fillText(d.n,x+barW/2,by+bh+16);
      c.font='9px sans-serif';
      c.fillText(d.vol+'m³',x+barW/2,by+bh+30);
      c.fillStyle=inRange?'#2ecc71':'#e74c3c';c.font='bold 10px sans-serif';
      c.fillText(inRange?'✓':'✗',x+barW/2,by+bh+44);
    });
    c.fillStyle='rgba(46,204,113,.3)';c.fillRect(bx+bw+10,by+10,12,12);
    c.fillStyle='#c4956a';c.font='10px sans-serif';c.textAlign='left';
    c.fillText('최적',bx+bw+26,by+20);
  }
  function updateInfo(){
    var ok=V25_ACOUST_DATA.filter(function(d){return d.rt>=d.opt[0]&&d.rt<=d.opt[1]}).length;
    var el=document.getElementById('v25-ac-info'); if(el) el.textContent=ok+'/'+V25_ACOUST_DATA.length+'실이 최적 잔향 범위 내에 있습니다';
    var st=document.getElementById('v25-ac-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">'+V25_ACOUST_DATA.length+'</div><div class="sl">분석 공간</div></div><div class="s"><div class="sv">'+ok+'</div><div class="sl">최적 범위</div></div><div class="s"><div class="sv">RT60</div><div class="sl">측정 방식</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-acoust').classList.add('active');draw();updateInfo();v25Sfx.open();v25CheckAch('v25_acoust');},
    close:function(){document.getElementById('v25-acoust').classList.remove('active');v25Sfx.close();}
  };
})();

// ============ 5. Garden Landscape Planner ============
window.v25Garden = (function(){
  var hoverIdx=-1;
  function draw(){
    var cv=document.getElementById('v25-gd-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,640,400);
    c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
    c.fillText('전통 정원 조경 배치도',320,28);
    V25_GARDEN_LINKS.forEach(function(l){
      var a=V25_GARDEN_DATA[l[0]],b=V25_GARDEN_DATA[l[1]];
      c.beginPath();c.moveTo(a.x,a.y);c.lineTo(b.x,b.y);
      c.strokeStyle='rgba(196,149,106,.3)';c.lineWidth=2;c.stroke();
    });
    V25_GARDEN_DATA.forEach(function(d,i){
      c.beginPath();c.arc(d.x,d.y,d.r,0,Math.PI*2);
      c.fillStyle=d.color;c.globalAlpha=i===hoverIdx?0.8:0.4;c.fill();c.globalAlpha=1;
      c.strokeStyle=i===hoverIdx?'#f5deb3':d.color;c.lineWidth=i===hoverIdx?3:1.5;c.stroke();
      c.fillStyle='#f5deb3';c.font=(i===hoverIdx?'bold ':'')+'12px sans-serif';c.textAlign='center';c.textBaseline='middle';
      c.fillText(d.n,d.x,d.y);
    });
    if(hoverIdx>=0){
      var d=V25_GARDEN_DATA[hoverIdx];
      var links=V25_GARDEN_LINKS.filter(function(l){return l[0]===hoverIdx||l[1]===hoverIdx});
      var connected=links.map(function(l){return l[0]===hoverIdx?V25_GARDEN_DATA[l[1]].n:V25_GARDEN_DATA[l[0]].n});
      c.fillStyle='rgba(45,27,14,.9)';c.fillRect(d.x+d.r+8,d.y-30,160,50);
      c.strokeStyle='#c4956a';c.strokeRect(d.x+d.r+8,d.y-30,160,50);
      c.fillStyle='#f5deb3';c.font='bold 11px sans-serif';c.textAlign='left';
      c.fillText(d.n,d.x+d.r+14,d.y-14);
      c.fillStyle='#c4956a';c.font='10px sans-serif';
      c.fillText('연결: '+connected.join(', '),d.x+d.r+14,d.y+4);
    }
    var harmony=Math.round(V25_GARDEN_LINKS.length/V25_GARDEN_DATA.length*100/2);
    c.fillStyle='#f5deb3';c.font='bold 13px sans-serif';c.textAlign='center';
    c.fillText('조화도: '+harmony+'% ('+v25Grade(harmony)+')',320,390);
  }
  function setupHover(){
    var cv=document.getElementById('v25-gd-canvas'); if(!cv) return;
    cv.onmousemove=function(e){
      var rect=cv.getBoundingClientRect(),sx=640/rect.width,sy=400/rect.height;
      var mx=(e.clientX-rect.left)*sx,my=(e.clientY-rect.top)*sy;
      var found=-1;
      V25_GARDEN_DATA.forEach(function(d,i){var dx=mx-d.x,dy=my-d.y;if(Math.sqrt(dx*dx+dy*dy)<d.r+5)found=i;});
      if(found!==hoverIdx){hoverIdx=found;draw();if(found>=0)v25Sfx.hover();}
    };
    cv.onmouseleave=function(){hoverIdx=-1;draw();};
  }
  function updateInfo(){
    var el=document.getElementById('v25-gd-info'); if(el) el.textContent='10개 조경 요소의 배치 및 연결 관계를 보여줍니다. 마우스 호버로 상세 정보 확인';
    var st=document.getElementById('v25-gd-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">10</div><div class="sl">조경 요소</div></div><div class="s"><div class="sv">'+V25_GARDEN_LINKS.length+'</div><div class="sl">연결</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-garden').classList.add('active');draw();setupHover();updateInfo();v25Sfx.open();v25CheckAch('v25_garden');},
    close:function(){document.getElementById('v25-garden').classList.remove('active');hoverIdx=-1;v25Sfx.close();}
  };
})();

// ============ 6. Weathering Simulator ============
window.v25Weather = (function(){
  var colors=['#e74c3c','#e67e22','#f1c40f','#2ecc71','#3498db','#9b59b6','#1abc9c','#c4956a','#e84393','#636e72'];
  function draw(){
    var cv=document.getElementById('v25-wt-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,620,400);
    c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
    c.fillText('50년 경년변화 시뮬레이션',310,28);
    var bx=70,by=55,bw=500,bh=280;
    c.strokeStyle='rgba(196,149,106,.3)';c.lineWidth=1;c.strokeRect(bx,by,bw,bh);
    for(var lv=0;lv<=5;lv++){
      var y=by+bh-lv*bh/5;
      c.beginPath();c.moveTo(bx,y);c.lineTo(bx+bw,y);c.strokeStyle='rgba(196,149,106,.12)';c.stroke();
      c.fillStyle='#c4956a';c.font='10px sans-serif';c.textAlign='right';
      c.fillText((lv*20)+'%',bx-6,y+4);
    }
    for(var yr=0;yr<10;yr++){
      var x=bx+yr*bw/9;
      c.fillStyle='#c4956a';c.font='10px sans-serif';c.textAlign='center';
      c.fillText((yr*5+5)+'년',x,by+bh+16);
    }
    V25_WEATHER_DATA.forEach(function(d,di){
      c.beginPath();c.strokeStyle=colors[di];c.lineWidth=2;
      d.vals.forEach(function(v,vi){
        var x=bx+vi*bw/9, y=by+bh-v/100*bh;
        if(vi===0)c.moveTo(x,y);else c.lineTo(x,y);
      });
      c.stroke();
      var lastV=d.vals[d.vals.length-1];
      c.fillStyle=colors[di];c.font='10px sans-serif';c.textAlign='left';
      c.fillText(d.n+' '+lastV+'%',bx+bw+6,by+bh-lastV/100*bh+4);
    });
    c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='center';
    c.fillText('← 경과 년수 →',bx+bw/2,by+bh+32);
    var best=V25_WEATHER_DATA.reduce(function(a,b){return a.vals[9]>b.vals[9]?a:b});
    var worst=V25_WEATHER_DATA.reduce(function(a,b){return a.vals[9]<b.vals[9]?a:b});
    c.fillStyle='#f5deb3';c.font='12px sans-serif';
    c.fillText('최고 내구: '+best.n+' ('+best.vals[9]+'%) | 최저: '+worst.n+' ('+worst.vals[9]+'%)',310,by+bh+50);
  }
  function updateInfo(){
    var el=document.getElementById('v25-wt-info'); if(el) el.textContent='유리와 석재가 가장 내구성이 높고, 합판과 단열재가 가장 빨리 열화됩니다';
    var st=document.getElementById('v25-wt-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">10</div><div class="sl">자재 종류</div></div><div class="s"><div class="sv">50년</div><div class="sl">시뮬 기간</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-weather').classList.add('active');draw();updateInfo();v25Sfx.open();v25CheckAch('v25_weather');},
    close:function(){document.getElementById('v25-weather').classList.remove('active');v25Sfx.close();}
  };
})();

// ============ 7. Jangseok Hardware Catalog ============
window.v25Jangseok = (function(){
  var sel=0,cmpMode=false,cmpSel=1;
  function draw(){
    var cv=document.getElementById('v25-js-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,600,380);
    var d=V25_JANGSEOK_DATA[sel];
    if(cmpMode){
      var d2=V25_JANGSEOK_DATA[cmpSel];
      v25Radar(c,180,210,100,V25_JANGSEOK_AXES,d.a,'rgb(196,149,106)',d.n);
      v25Radar(c,180,210,100,V25_JANGSEOK_AXES,d2.a,'rgb(46,204,113)',d2.n);
      c.fillStyle='#f5deb3';c.font='bold 13px sans-serif';c.textAlign='center';
      c.fillText(d.n+' vs '+d2.n,300,24);
      for(var i=0;i<5;i++){
        var y=60+i*56,diff=d.a[i]-d2.a[i];
        c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='right';c.fillText(V25_JANGSEOK_AXES[i],400,y+12);
        c.fillStyle='rgba(196,149,106,.3)';c.fillRect(410,y,160,20);
        c.fillStyle='rgb(196,149,106)';c.fillRect(410,y,d.a[i]/100*160,9);
        c.fillStyle='rgb(46,204,113)';c.fillRect(410,y+11,d2.a[i]/100*160,9);
        c.fillStyle=diff>0?'#2ecc71':diff<0?'#e74c3c':'#c4956a';c.textAlign='left';c.fillText((diff>0?'+':'')+diff,576,y+14);
      }
    } else {
      v25Radar(c,190,210,120,V25_JANGSEOK_AXES,d.a,'rgb(196,149,106)',d.n);
      var avg=Math.round(d.a.reduce(function(a,b){return a+b},0)/5);
      c.fillStyle='#f5deb3';c.font='bold 13px sans-serif';c.textAlign='left';
      c.fillText(d.n,380,80);
      c.fillStyle='#c4956a';c.font='12px sans-serif';
      c.fillText(d.d,380,100);
      c.fillText('평균: '+avg+'%',380,125);
      c.fillStyle=v25GradeColor(v25Grade(avg));c.font='bold 22px sans-serif';
      c.fillText(v25Grade(avg),380,155);
      for(var i=0;i<5;i++){
        var y=175+i*35;
        c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='left';
        c.fillText(V25_JANGSEOK_AXES[i],380,y+10);
        c.fillStyle='rgba(196,149,106,.2)';c.fillRect(425,y,140,16);
        c.fillStyle='rgb(196,149,106)';c.fillRect(425,y,d.a[i]/100*140,16);
        c.fillStyle='#f5deb3';c.font='10px sans-serif';c.fillText(d.a[i]+'%',425+d.a[i]/100*140+4,y+12);
      }
    }
  }
  function buildTabs(){
    var el=document.getElementById('v25-js-tabs'); if(!el) return; el.innerHTML='';
    V25_JANGSEOK_DATA.forEach(function(d,i){
      var b=document.createElement('button');b.className='v25-tab'+(i===sel?' active':'');b.textContent=d.n;
      b.onclick=function(){sel=i;cmpMode=false;buildTabs();draw();v25Sfx.tab();updateInfo();};
      el.appendChild(b);
    });
  }
  function updateInfo(){
    var d=V25_JANGSEOK_DATA[sel],avg=Math.round(d.a.reduce(function(a,b){return a+b},0)/5);
    var el=document.getElementById('v25-js-info'); if(el) el.textContent=d.d+' | 평균 '+avg+'% (등급: '+v25Grade(avg)+')';
    var st=document.getElementById('v25-js-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">'+V25_JANGSEOK_DATA.length+'</div><div class="sl">철물 종류</div></div><div class="s"><div class="sv">5</div><div class="sl">분석 축</div></div><div class="s"><div class="sv">'+avg+'%</div><div class="sl">평균 점수</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-jangseok').classList.add('active');buildTabs();draw();updateInfo();v25Sfx.open();v25CheckAch('v25_jangseok');},
    close:function(){document.getElementById('v25-jangseok').classList.remove('active');v25Sfx.close();},
    compare:function(){cmpMode=!cmpMode;if(cmpMode)cmpSel=(sel+1)%V25_JANGSEOK_DATA.length;draw();v25Sfx.compare();},
    reset:function(){sel=0;cmpMode=false;buildTabs();draw();updateInfo();v25Sfx.reset();}
  };
})();

// ============ 8. Sustainability Dashboard ============
window.v25Sustain = (function(){
  function draw(){
    var cv=document.getElementById('v25-su-canvas'); if(!cv) return;
    var c=cv.getContext('2d'); v25Clear(c,620,400);
    c.fillStyle='#f5deb3';c.font='bold 14px sans-serif';c.textAlign='center';
    c.fillText('건축 지속가능성 종합 평가',310,28);
    var positions=[[110,130],[310,130],[510,130],[110,280],[310,280],[510,280],[210,350],[410,350]];
    V25_SUSTAIN_KPI.forEach(function(d,i){
      var p=positions[i];
      v25Gauge(c,p[0],p[1],48,d.v,d.n,d.icon);
    });
    var avg=Math.round(V25_SUSTAIN_KPI.reduce(function(a,b){return a+b.v},0)/V25_SUSTAIN_KPI.length);
    var g=v25Grade(avg),gc=v25GradeColor(g);
    c.fillStyle=gc;c.font='bold 18px sans-serif';c.textAlign='center';
    c.fillText('종합: '+avg+'% ('+g+')',310,395);
  }
  function updateInfo(){
    var avg=Math.round(V25_SUSTAIN_KPI.reduce(function(a,b){return a+b.v},0)/V25_SUSTAIN_KPI.length);
    var el=document.getElementById('v25-su-info'); if(el) el.textContent='8개 KPI를 종합한 건축 지속가능성 평가. 종합 등급: '+v25Grade(avg);
    var st=document.getElementById('v25-su-stat'); if(st) st.innerHTML='<div class="s"><div class="sv">8</div><div class="sl">KPI</div></div><div class="s"><div class="sv">'+avg+'%</div><div class="sl">종합 점수</div></div><div class="s"><div class="sv">'+v25Grade(avg)+'</div><div class="sl">등급</div></div>';
  }
  return {
    open:function(){document.getElementById('v25-sustain').classList.add('active');draw();updateInfo();v25Sfx.open();v25CheckAch('v25_sustain');},
    close:function(){document.getElementById('v25-sustain').classList.remove('active');v25Sfx.close();}
  };
})();

// ============ Quiz v25 (15 new questions, 300->315) ============
var V25_QUIZ = [
  {q:'전통 한옥에서 암키와의 주요 역할은?',o:['지붕 방수','벽체 장식','기단 보호','바닥 마감'],a:0,f:'암키와는 지붕의 평평한 면을 덩어 빗물이 스며들어 방수 기능을 합니다.'},
  {q:'한옥 건축에서 하중 전달 순서로 올바른 것은?',o:['지붕→보→기둥','기둥→보→기단','보→초석→지반','대들보→서까래→보→기둥'],a:3,f:'하중은 지붕의 대들보에서 서까래, 보, 기둥을 거쳐 지반으로 전달됩니다.'},
  {q:'온돌에서 가장 뜨거운 부분은?',o:['대청','건넌방','아궁이','투마루'],a:2,f:'아궁이는 불을 때는 곳으로 가장 가까워 온도가 가장 높습니다.'},
  {q:'건축 음향에서 RT60이란?',o:['반사율','잔향시간','투과손실','흡음률'],a:1,f:'RT60은 소리가 60dB 감소하는 데 걸리는 시간으로 잔향시간을 나타냅니다.'},
  {q:'전통 정원에서 연못의 주요 기능은?',o:['방화','수경과 조화','방범','방음'],a:1,f:'연못은 물과 녹음이 어우러져 정원의 핵심 수경 요소로 조화를 이룹니다.'},
  {q:'50년 후 가장 내구성이 높은 건축 자재는?',o:['목재','합판','유리','단열재'],a:2,f:'유리는 화학적으로 안정되어 50년 후에도 80% 이상의 성능을 유지합니다.'},
  {q:'전통 철물 중 경첩의 용도는?',o:['문 잠금','문짝 장식','고정 볼트','배수관'],a:1,f:'경첩은 문짝에 사용하는 장식적 철물로 미관과 기능을 걸합합니다.'},
  {q:'건축 지속가능성에서 탄소배출 줄이기 방법은?',o:['철골 사용','지역산 목재 사용','유리 사용','콘크리트 사용'],a:1,f:'지역산 목재는 운송 탄소배출이 적고 탄소를 저장하는 친환경 자재입니다.'},
  {q:'수키와의 특징은?',o:['평평한 형태','반원형 단면','삼각형 단면','사각형 단면'],a:1,f:'수키와는 반원형 단면으로 암키와 사이의 빗물 침투를 막습니다.'},
  {q:'전통 건축에서 초석의 역할은?',o:['지붕 지지','기둥과 지반 사이 하중 전달','방수','단열'],a:1,f:'초석은 기둥의 하중을 지반에 분산 전달하는 구조 부재입니다.'},
  {q:'합판의 50년 후 잔여 성능은 약 몇 %?',o:['80%','60%','26%','45%'],a:2,f:'합판은 습기와 측함에 취약하여 50년 후 약 26%의 성능만 남습니다.'},
  {q:'도리의 기능은?',o:['방수','장식','서까래 위의 \uD9C1 받침','단열'],a:2,f:'도리는 서까래 위에 올려 지붕의 \uD9C1을 받치며, 지붕 구조의 핵심 부재입니다.'},
  {q:'전통 정원에서 디딜돌의 역할은?',o:['물 저장','경계 표시','조경 포인트','방풍'],a:2,f:'디딜돌은 정원의 시선을 모으는 조경 포인트 역할을 합니다.'},
  {q:'문고리의 용도는?',o:['문짝 장식','문 여닫을 때 고정','문 잠금','바닥 고정'],a:1,f:'문고리는 문을 열어두었을 때 고정하는 철물입니다.'},
  {q:'건축 지속가능성에서 수자원 관리의 핵심은?',o:['조경','빗물 재활용','내부 장식','철골 사용'],a:1,f:'빗물 재활용 시스템은 수자원을 효율적으로 관리하는 핵심 요소입니다.'}
];

// ============ Achievements v25 (+12, 266->278) ============
var V25_ACHS = [
  {id:'v25_tile',n:'기와 전문가',d:'기와 배열 설계기 열기'},
  {id:'v25_load',n:'구조 분석가',d:'하중 분배 시각화기 열기'},
  {id:'v25_ondol',n:'온돌 마스터',d:'온돌 효율 시뮬레이터 열기'},
  {id:'v25_acoust',n:'음향 전문가',d:'음향 잔향 분석기 열기'},
  {id:'v25_garden',n:'조경 디자이너',d:'전통 정원 조경 플래너 열기'},
  {id:'v25_weather',n:'풍화 연구원',d:'자재 풍화 시뮬레이터 열기'},
  {id:'v25_jangseok',n:'철물 수집가',d:'전통 장석 철물 도감 열기'},
  {id:'v25_sustain',n:'친환경 건축가',d:'지속가능성 대시보드 열기'},
  {id:'v25_quiz3',n:'건축 박사',d:'v25 퀴즈 3문 정답'},
  {id:'v25_quiz10',n:'건축 교수',d:'v25 퀴즈 10문 정답'},
  {id:'v25_quiz15',n:'건축 대스승',d:'v25 퀴즈 15문 모두 정답'},
  {id:'v25_all',n:'v25 완전 정복',d:'v25 모든 기능 열기'}
];

// ============ Achievement System ============
var v25AchData = JSON.parse(localStorage.getItem('hb_v25_ach')||'{}');
window.v25CheckAch = function(id){
  if(v25AchData[id]) return;
  v25AchData[id]=true;
  localStorage.setItem('hb_v25_ach',JSON.stringify(v25AchData));
  var ach=V25_ACHS.find(function(a){return a.id===id});
  if(!ach) return;
  v25Sfx.ach();
  var toast=document.getElementById('achToast');
  if(toast){
    toast.querySelector('.ach-icon').textContent='🏆';
    toast.querySelector('.ach-title').textContent='업적 달성!';
    toast.querySelector('.ach-name').textContent=ach.n;
    toast.classList.add('show');
    setTimeout(function(){toast.classList.remove('show')},3000);
  }
  var opened=['v25_tile','v25_load','v25_ondol','v25_acoust','v25_garden','v25_weather','v25_jangseok','v25_sustain'];
  if(opened.every(function(k){return v25AchData[k]})) v25CheckAch('v25_all');
};

// ============ Quiz System ============
var v25QuizState = {idx:0,correct:0,answered:0};
window.v25OpenQuiz = function(){
  v25QuizState={idx:0,correct:0,answered:0};
  v25ShowQuizQ();
  document.getElementById('quizOverlay').classList.add('show');
  v25Sfx.quiz();
};
function v25ShowQuizQ(){
  var q=V25_QUIZ[v25QuizState.idx];
  if(!q) return;
  var card=document.querySelector('.quiz-card'); if(!card) return;
  card.querySelector('.quiz-title').textContent='v25 건축 퀴즈';
  card.querySelector('.quiz-progress').textContent=(v25QuizState.idx+1)+'/'+V25_QUIZ.length;
  card.querySelector('.quiz-q').textContent=q.q;
  var opts=card.querySelector('.quiz-options'); opts.innerHTML='';
  q.o.forEach(function(o,i){
    var btn=document.createElement('button');btn.className='quiz-opt';btn.textContent=o;
    btn.onclick=function(){v25AnswerQuiz(i);};
    opts.appendChild(btn);
  });
  var fb=card.querySelector('.quiz-feedback'); fb.classList.remove('show'); fb.textContent='';
  card.querySelector('.q-next').onclick=function(){
    v25QuizState.idx++;
    if(v25QuizState.idx>=V25_QUIZ.length){
      closeQuiz();
      return;
    }
    v25ShowQuizQ();
  };
}
function v25AnswerQuiz(chosen){
  var q=V25_QUIZ[v25QuizState.idx];
  var opts=document.querySelectorAll('.quiz-opt');
  opts.forEach(function(b,i){
    b.disabled=true;
    if(i===q.a)b.classList.add('correct');
    if(i===chosen&&i!==q.a)b.classList.add('wrong');
  });
  if(chosen===q.a){v25QuizState.correct++;v25Sfx.correct();}else{v25Sfx.wrong();}
  v25QuizState.answered++;
  var fb=document.querySelector('.quiz-feedback');
  fb.textContent=q.f;fb.classList.add('show');
  if(v25QuizState.correct>=3) v25CheckAch('v25_quiz3');
  if(v25QuizState.correct>=10) v25CheckAch('v25_quiz10');
  if(v25QuizState.correct>=15) v25CheckAch('v25_quiz15');
}

// ============ Navigation Menu (append to existing) ============
(function(){
  var menuItems = [
    {icon:'🏛️',label:'기와 배열',fn:'v25Tile.open()'},
    {icon:'🏗️',label:'하중 분배',fn:'v25Load.open()'},
    {icon:'🔥',label:'온돌 효율',fn:'v25Ondol.open()'},
    {icon:'🔊',label:'음향 분석',fn:'v25Acoust.open()'},
    {icon:'🌿',label:'정원 조경',fn:'v25Garden.open()'},
    {icon:'🌦️',label:'자재 풍화',fn:'v25Weather.open()'},
    {icon:'🔩',label:'장석 철물',fn:'v25Jangseok.open()'},
    {icon:'🌱',label:'지속가능성',fn:'v25Sustain.open()'},
    {icon:'❓',label:'v25 퀴즈',fn:'v25OpenQuiz()'}
  ];
  var existingMenu = document.querySelector('.v24-menu') || document.querySelector('.v23-menu') || document.querySelector('.v22-menu') || document.querySelector('.v21-menu') || document.querySelector('.v20-menu') || document.querySelector('.v19-menu');
  if (existingMenu) {
    menuItems.forEach(function(item){
      var btn = document.createElement('button');
      btn.className = (existingMenu.className.match(/v\d+-menu/)||['v24-menu'])[0].replace('-menu','-menu-btn');
      btn.innerHTML = item.icon + '<span class="' + (existingMenu.className.match(/v\d+-menu/)||['v24-menu'])[0].replace('-menu','-menu-label') + '">' + item.label + '</span>';
      btn.onclick = new Function(item.fn);
      existingMenu.appendChild(btn);
    });
  } else {
    var menu = document.createElement('div');
    menu.className = 'v25-float-menu';
    menu.style.cssText = 'position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4090;display:flex;flex-direction:column;gap:6px';
    menuItems.forEach(function(item){
      var btn = document.createElement('button');
      btn.style.cssText = 'width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative';
      btn.innerHTML = item.icon;
      btn.title = item.label;
      btn.onclick = new Function(item.fn);
      menu.appendChild(btn);
    });
    document.body.appendChild(menu);
  }
})();

// ============ Keyboard shortcuts ============
document.addEventListener('keydown', function(e){
  if(!e.shiftKey) return;
  var map = {
    'A':function(){v25Tile.open()},
    'S':function(){v25Load.open()},
    'D':function(){v25Ondol.open()},
    'F':function(){v25Acoust.open()},
    'G':function(){v25Garden.open()},
    'H':function(){v25Weather.open()},
    'J':function(){v25Jangseok.open()},
    'K':function(){v25Sustain.open()},
    '0':function(){v25OpenQuiz()}
  };
  var fn = map[e.key];
  if(fn){e.preventDefault();fn();}
});

} // end __hbV25 guard

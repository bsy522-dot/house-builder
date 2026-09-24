// =====================================================
// House Builder v17.0 Patch
// 건축양식진화도Canvas6시대Timeline+실내채광분석기Canvas12시간SunPath
// 지진내진설계테스트Canvas6등급Shake+건축소재탄소발자국Canvas10소재Bar
// 스마트홈자동화플래너Canvas12기기Flow+건축음향분석기Canvas6실BarDB
// 건축자재내구성트래커Canvas8자재LifespanLine+건축미니퍼즐챌린지Canvas4x4Tile
// 퀴즈+15(180->195)+업적+12(170->182)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV17) {
window.__hbV17 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v17-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5000;overflow-y:auto;padding:16px}',
    '.v17-panel.active{display:block}',
    '.v17-box{max-width:720px;margin:40px auto}',
    '.v17-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v17-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v17-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v17-close:hover{background:#d4a57a}',
    '.v17-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v17-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v17-tab:hover,.v17-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v17-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v17-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v17-stat .s{text-align:center}',
    '.v17-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v17-stat .sl{font-size:11px;color:#c4956a}',
    '.v17-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v17-btn-sm:hover{background:#d4a57a}',
    '.v17-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}',
    '.v17-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v17-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v17-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v17-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v17-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v17-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v17-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v17-item.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v17-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v17-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v17-menu{position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4050;display:flex;flex-direction:column;gap:6px}',
    '.v17-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4)}',
    '.v17-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v17-menu-label{position:absolute;right:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v17-menu-btn:hover .v17-menu-label{opacity:1}',
    '.v17-puzzle-cell{width:60px;height:60px;border:1px solid rgba(196,149,106,.3);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#f5deb3;cursor:pointer;transition:all .15s;background:rgba(196,149,106,.08);border-radius:4px}',
    '.v17-puzzle-cell:hover{background:rgba(196,149,106,.2)}',
    '.v17-puzzle-cell.empty{background:transparent;border-color:transparent}',
    '@media(max-width:600px){.v17-box{margin:16px auto}.v17-menu{right:6px;gap:4px}.v17-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 1. HTML panels ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v17-panels';
  wrap.innerHTML =
    '<div id="v17-evolution" class="v17-panel"><div class="v17-box">' +
      '<h2>🏛️ 건축 양식 진화도</h2>' +
      '<p>고조선부터 현대까지 6시대 건축 양식 변천사</p>' +
      '<div class="v17-tabs" id="v17-evo-tabs"></div>' +
      '<canvas id="v17-evo-canvas" class="v17-canvas" width="620" height="420"></canvas>' +
      '<div id="v17-evo-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v17-stat" id="v17-evo-stat"></div>' +
      '<button class="v17-close" onclick="v17Evo.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-daylight" class="v17-panel"><div class="v17-box">' +
      '<h2>☀️ 실내 채광 분석기</h2>' +
      '<p>12시간대별 태양 경로와 실내 조도 분포</p>' +
      '<div class="v17-tabs" id="v17-daylight-tabs"></div>' +
      '<canvas id="v17-daylight-canvas" class="v17-canvas" width="600" height="400"></canvas>' +
      '<div id="v17-daylight-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v17-close" onclick="v17Daylight.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-seismic" class="v17-panel"><div class="v17-box">' +
      '<h2>🌍 지진 내진 설계 테스트</h2>' +
      '<p>6등급 지진 시뮬레이션으로 건물 내진 성능 평가</p>' +
      '<div class="v17-tabs" id="v17-seismic-tabs"></div>' +
      '<canvas id="v17-seismic-canvas" class="v17-canvas" width="580" height="400"></canvas>' +
      '<div id="v17-seismic-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v17-stat" id="v17-seismic-stat"></div>' +
      '<button class="v17-close" onclick="v17Seismic.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-carbon" class="v17-panel"><div class="v17-box">' +
      '<h2>🌱 건축 소재 탄소발자국</h2>' +
      '<p>10종 건축 자재별 CO2 배출량 비교 분석</p>' +
      '<canvas id="v17-carbon-canvas" class="v17-canvas" width="600" height="380"></canvas>' +
      '<div id="v17-carbon-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v17-stat" id="v17-carbon-stat"></div>' +
      '<button class="v17-close" onclick="v17Carbon.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-smarthome" class="v17-panel"><div class="v17-box">' +
      '<h2>📱 스마트홈 자동화 플래너</h2>' +
      '<p>12기기 IoT 자동화 플로우 설계</p>' +
      '<div class="v17-tabs" id="v17-smart-tabs"></div>' +
      '<canvas id="v17-smart-canvas" class="v17-canvas" width="620" height="420"></canvas>' +
      '<div id="v17-smart-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v17-close" onclick="v17Smart.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-acoustics" class="v17-panel"><div class="v17-box">' +
      '<h2>🔊 건축 음향 분석기</h2>' +
      '<p>6실 소음/방음/잔향 음향 성능 분석</p>' +
      '<div class="v17-tabs" id="v17-acoustics-tabs"></div>' +
      '<canvas id="v17-acoustics-canvas" class="v17-canvas" width="580" height="380"></canvas>' +
      '<div id="v17-acoustics-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v17-close" onclick="v17Acoustics.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-durability" class="v17-panel"><div class="v17-box">' +
      '<h2>🧱 건축 자재 내구성 트래커</h2>' +
      '<p>8종 자재 수명/내구도/유지비 비교</p>' +
      '<canvas id="v17-durability-canvas" class="v17-canvas" width="600" height="380"></canvas>' +
      '<div id="v17-durability-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v17-stat" id="v17-durability-stat"></div>' +
      '<button class="v17-close" onclick="v17Durability.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v17-puzzle" class="v17-panel"><div class="v17-box">' +
      '<h2>🧩 건축 미니 퍼즐 챌린지</h2>' +
      '<p>4x4 타일 퍼즐으로 건축 지식 테스트</p>' +
      '<canvas id="v17-puzzle-canvas" class="v17-canvas" width="320" height="380"></canvas>' +
      '<div id="v17-puzzle-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v17-stat" id="v17-puzzle-stat"></div>' +
      '<button class="v17-btn-sm" id="v17-puzzle-reset" style="display:block;margin:10px auto" onclick="v17Puzzle.reset()">새 퍼즐</button>' +
      '<button class="v17-close" onclick="v17Puzzle.close()">닫기</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 2. SFX Engine (12 types) ──
var v17SFX = (function(){
  var ctx = null;
  function getCtx(){ if(!ctx) try{ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){} return ctx; }
  function play(type){
    if(window.muted) return;
    var c=getCtx(); if(!c) return;
    var o=c.createOscillator(), g=c.createGain();
    o.connect(g); g.connect(c.destination);
    var t=c.currentTime;
    switch(type){
      case 'evo_select': o.type='triangle';o.frequency.setValueAtTime(520,t);o.frequency.linearRampToValueAtTime(680,t+.12);g.gain.setValueAtTime(.12,t);g.gain.linearRampToValueAtTime(0,t+.15);o.start(t);o.stop(t+.15);break;
      case 'daylight_shift': o.type='sine';o.frequency.setValueAtTime(440,t);o.frequency.linearRampToValueAtTime(600,t+.2);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.22);o.start(t);o.stop(t+.22);break;
      case 'seismic_shake': o.type='sawtooth';o.frequency.setValueAtTime(80,t);o.frequency.linearRampToValueAtTime(40,t+.3);g.gain.setValueAtTime(.15,t);g.gain.linearRampToValueAtTime(0,t+.35);o.start(t);o.stop(t+.35);break;
      case 'carbon_calc': o.type='triangle';o.frequency.setValueAtTime(660,t);g.gain.setValueAtTime(.08,t);g.gain.linearRampToValueAtTime(0,t+.1);o.start(t);o.stop(t+.1);break;
      case 'smart_connect': o.type='sine';o.frequency.setValueAtTime(880,t);o.frequency.linearRampToValueAtTime(1100,t+.08);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.12);o.start(t);o.stop(t+.12);break;
      case 'acoustics_test': o.type='sine';o.frequency.setValueAtTime(300,t);o.frequency.linearRampToValueAtTime(900,t+.25);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.3);o.start(t);o.stop(t+.3);break;
      case 'durability_check': o.type='square';o.frequency.setValueAtTime(200,t);g.gain.setValueAtTime(.06,t);g.gain.linearRampToValueAtTime(0,t+.15);o.start(t);o.stop(t+.15);break;
      case 'puzzle_move': o.type='triangle';o.frequency.setValueAtTime(500,t);o.frequency.linearRampToValueAtTime(600,t+.06);g.gain.setValueAtTime(.1,t);g.gain.linearRampToValueAtTime(0,t+.08);o.start(t);o.stop(t+.08);break;
      case 'puzzle_complete': o.type='sine';o.frequency.setValueAtTime(523,t);g.gain.setValueAtTime(.12,t);var o2=c.createOscillator(),g2=c.createGain();o2.connect(g2);g2.connect(c.destination);o2.type='sine';o2.frequency.setValueAtTime(659,t+.12);g2.gain.setValueAtTime(.12,t+.12);g2.gain.linearRampToValueAtTime(0,t+.3);o.frequency.linearRampToValueAtTime(523,t+.1);g.gain.linearRampToValueAtTime(0,t+.15);o.start(t);o.stop(t+.15);o2.start(t+.12);o2.stop(t+.3);break;
      case 'achievement_v17': o.type='triangle';o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(659,t+.1);o.frequency.setValueAtTime(784,t+.2);g.gain.setValueAtTime(.12,t);g.gain.linearRampToValueAtTime(0,t+.35);o.start(t);o.stop(t+.35);break;
      case 'nav_v17': o.type='sine';o.frequency.setValueAtTime(700,t);g.gain.setValueAtTime(.06,t);g.gain.linearRampToValueAtTime(0,t+.08);o.start(t);o.stop(t+.08);break;
      case 'menu_open': o.type='triangle';o.frequency.setValueAtTime(400,t);o.frequency.linearRampToValueAtTime(700,t+.1);g.gain.setValueAtTime(.08,t);g.gain.linearRampToValueAtTime(0,t+.12);o.start(t);o.stop(t+.12);break;
    }
  }
  return {play:play};
})();

// ── 3. 건축 양식 진화도 (Architectural Style Evolution) ──
var v17Evo = (function(){
  var eras = [
    {name:'고조선/삼국',period:'BC2333~668',styles:['귀틀집','움집','고상가옥','적석총','고구려 성곽'],color:'#8B4513',features:{구조:4,장식:2,기능:3,내구:5,미학:3,환경:4}},
    {name:'통일신라',period:'668~935',styles:['불국사 양식','안압지','석굴암','9층 목탑','기와 가옥'],color:'#DAA520',features:{구조:6,장식:7,기능:5,내구:6,미학:8,환경:5}},
    {name:'고려',period:'918~1392',styles:['사찰건축','주심포','다포양식','팔만대장경판전','성곽건축'],color:'#2E8B57',features:{구조:7,장식:8,기능:6,내구:7,미학:9,환경:6}},
    {name:'조선 전기',period:'1392~1592',styles:['경복궁','종묘','한옥 발달','서원건축','읍성'],color:'#4169E1',features:{구조:8,장식:7,기능:7,내구:8,미학:8,환경:7}},
    {name:'조선 후기',period:'1592~1897',styles:['화성 성곽','민가 발달','정자 문화','서원 전성','초가집'],color:'#9370DB',features:{구조:8,장식:8,기능:8,내구:7,미학:9,환경:8}},
    {name:'근현대',period:'1897~현재',styles:['RC구조','철골구조','커튼월','친환경','스마트빌딩'],color:'#DC143C',features:{구조:10,장식:6,기능:10,내구:9,미학:7,환경:9}}
  ];
  var sel = 0;
  function open(){ document.getElementById('v17-evolution').classList.add('active'); v17SFX.play('menu_open'); renderTabs(); draw(); localStorage.setItem('hb_evo_v17','1'); }
  function close(){ document.getElementById('v17-evolution').classList.remove('active'); }
  function renderTabs(){
    var box = document.getElementById('v17-evo-tabs'); box.innerHTML = '';
    eras.forEach(function(e,i){
      var b = document.createElement('button');
      b.className = 'v17-tab' + (i===sel?' active':'');
      b.textContent = e.name;
      b.onclick = function(){ sel=i; renderTabs(); draw(); v17SFX.play('evo_select'); };
      box.appendChild(b);
    });
  }
  function draw(){
    var c = document.getElementById('v17-evo-canvas');
    var ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var era = eras[sel];
    // timeline bar
    ctx.fillStyle='rgba(196,149,106,.15)';
    ctx.fillRect(40,30,W-80,40);
    eras.forEach(function(e,i){
      var x = 40 + (W-80) * i / (eras.length-1);
      ctx.fillStyle = i===sel ? e.color : 'rgba(196,149,106,.3)';
      ctx.beginPath(); ctx.arc(x,50,i===sel?12:8,0,Math.PI*2); ctx.fill();
      ctx.fillStyle = i===sel ? '#f5deb3' : '#c4956a';
      ctx.font = (i===sel?'bold ':'')+  '10px sans-serif';
      ctx.textAlign='center';
      ctx.fillText(e.name,x,75);
    });
    // radar chart for selected era features
    var cx = W/2, cy = 210, R = 100;
    var keys = Object.keys(era.features);
    var n = keys.length;
    // background rings
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var j=0;j<n;j++){
        var a = -Math.PI/2 + (2*Math.PI*j/n);
        var r = R*ring/5;
        if(j===0) ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
        else ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
      }
      ctx.closePath();
      ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.12)+')';
      ctx.stroke();
    }
    // axes
    for(var j=0;j<n;j++){
      var a = -Math.PI/2 + (2*Math.PI*j/n);
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));
      ctx.strokeStyle='rgba(196,149,106,.15)'; ctx.stroke();
      ctx.fillStyle='#c4956a'; ctx.font='12px sans-serif'; ctx.textAlign='center';
      ctx.fillText(keys[j],cx+(R+18)*Math.cos(a),cy+(R+18)*Math.sin(a)+4);
    }
    // data polygon
    ctx.beginPath();
    keys.forEach(function(k,j){
      var a = -Math.PI/2 + (2*Math.PI*j/n);
      var r = R*era.features[k]/10;
      if(j===0) ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
      else ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
    });
    ctx.closePath();
    ctx.fillStyle = era.color+'33';
    ctx.fill();
    ctx.strokeStyle = era.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.lineWidth = 1;
    // styles list
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText(era.name+' ('+era.period+')',cx,340);
    era.styles.forEach(function(s,i){
      ctx.fillStyle='#c4956a'; ctx.font='12px sans-serif';
      ctx.fillText((i+1)+'. '+s,cx,362+i*18);
    });
    // info
    var total = 0; keys.forEach(function(k){ total+=era.features[k]; });
    var avg = (total/n).toFixed(1);
    document.getElementById('v17-evo-info').innerHTML = '<b>'+era.name+'</b> 시대 종합점수: '+total+'/60 (평균 '+avg+'/10)';
    // stats
    var best = keys.reduce(function(a,b){ return era.features[a]>era.features[b]?a:b; });
    document.getElementById('v17-evo-stat').innerHTML =
      '<div class="s"><div class="sv">'+total+'</div><div class="sl">종합점</div></div>' +
      '<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균</div></div>' +
      '<div class="s"><div class="sv">'+best+'</div><div class="sl">최고항목</div></div>';
  }
  return {open:open,close:close};
})();

// ── 4. 실내 채광 분석기 (Daylight Analyzer) ──
var v17Daylight = (function(){
  var hours = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
  var rooms = ['거실','침실','주방','서재','욕실','다용도실'];
  var luxData = [
    [50,120,280,420,580,650,700,680,600,450,250,80],
    [30,80,180,300,420,500,520,510,440,320,160,50],
    [40,100,220,350,480,560,600,580,500,370,200,60],
    [60,140,320,460,620,700,750,720,640,480,280,90],
    [20,50,110,180,250,300,320,310,270,200,100,30],
    [15,40,90,150,210,250,270,260,230,170,80,25]
  ];
  var selRoom = 0;
  function open(){ document.getElementById('v17-daylight').classList.add('active'); v17SFX.play('menu_open'); renderTabs(); draw(); localStorage.setItem('hb_daylight_v17','1'); }
  function close(){ document.getElementById('v17-daylight').classList.remove('active'); }
  function renderTabs(){
    var box=document.getElementById('v17-daylight-tabs'); box.innerHTML='';
    rooms.forEach(function(r,i){
      var b=document.createElement('button');
      b.className='v17-tab'+(i===selRoom?' active':'');
      b.textContent=r;
      b.onclick=function(){ selRoom=i; renderTabs(); draw(); v17SFX.play('daylight_shift'); };
      box.appendChild(b);
    });
  }
  function draw(){
    var c=document.getElementById('v17-daylight-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var pad={l:60,r:20,t:40,b:50};
    var gw=W-pad.l-pad.r, gh=H-pad.t-pad.b;
    // sun path arc at top
    ctx.beginPath();
    ctx.arc(W/2,pad.t-10,W/3,Math.PI,0);
    var grd=ctx.createLinearGradient(pad.l,0,W-pad.r,0);
    grd.addColorStop(0,'#FF6347');grd.addColorStop(.3,'#FFD700');grd.addColorStop(.5,'#FFFF00');grd.addColorStop(.7,'#FFD700');grd.addColorStop(1,'#FF6347');
    ctx.strokeStyle=grd; ctx.lineWidth=3; ctx.stroke(); ctx.lineWidth=1;
    // sun position for selected room's peak
    var data=luxData[selRoom];
    var peakIdx=data.indexOf(Math.max.apply(null,data));
    var sunAngle=Math.PI - (Math.PI*peakIdx/(hours.length-1));
    var sunX=W/2+(W/3)*Math.cos(sunAngle), sunY=pad.t-10-(W/3)*Math.sin(sunAngle);
    ctx.beginPath(); ctx.arc(sunX,Math.max(10,sunY),10,0,Math.PI*2);
    ctx.fillStyle='#FFD700'; ctx.fill();
    // grid
    ctx.strokeStyle='rgba(196,149,106,.1)';
    for(var i=0;i<=5;i++){
      var y=pad.t+gh*i/5;
      ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(W-pad.r,y); ctx.stroke();
      ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif'; ctx.textAlign='right';
      ctx.fillText(Math.round(800-800*i/5)+' lux',pad.l-6,y+3);
    }
    // bars
    var bw=gw/hours.length*.6;
    data.forEach(function(lux,i){
      var x=pad.l+gw*i/(hours.length-1)-bw/2;
      var bh=gh*lux/800;
      var y=pad.t+gh-bh;
      var g=ctx.createLinearGradient(0,y,0,pad.t+gh);
      if(lux>500){g.addColorStop(0,'#FFD700');g.addColorStop(1,'#FF8C00');}
      else if(lux>200){g.addColorStop(0,'#87CEEB');g.addColorStop(1,'#4682B4');}
      else{g.addColorStop(0,'#696969');g.addColorStop(1,'#2F4F4F');}
      ctx.fillStyle=g;
      ctx.fillRect(x,y,bw,bh);
      ctx.fillStyle='#f5deb3'; ctx.font='9px sans-serif'; ctx.textAlign='center';
      ctx.fillText(lux,x+bw/2,y-4);
      ctx.fillStyle='#c4956a';
      ctx.fillText(hours[i],x+bw/2,pad.t+gh+14);
    });
    // comfort zone line
    ctx.setLineDash([4,4]);
    ctx.strokeStyle='#4a7c59';
    var comfortY=pad.t+gh-gh*300/800;
    ctx.beginPath(); ctx.moveTo(pad.l,comfortY); ctx.lineTo(W-pad.r,comfortY); ctx.stroke();
    ctx.fillStyle='#4a7c59'; ctx.font='10px sans-serif'; ctx.textAlign='left';
    ctx.fillText('쟥적 기준(300lux)',pad.l+4,comfortY-4);
    ctx.setLineDash([]);
    // title
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText(rooms[selRoom]+' - 시간대별 조도(lux)',W/2,H-10);
    // info
    var avg=Math.round(data.reduce(function(a,b){return a+b;},0)/data.length);
    var peak=Math.max.apply(null,data);
    var comfort=data.filter(function(l){return l>=300;}).length;
    document.getElementById('v17-daylight-info').innerHTML =
      rooms[selRoom]+': 평균 '+avg+'lux, 최대 '+peak+'lux ('+hours[peakIdx]+'), 쟥적시간 '+comfort+'h/12h';
  }
  return {open:open,close:close};
})();

// ── 5. 지진 내진 설계 테스트 (Earthquake Resistance Test) ──
var v17Seismic = (function(){
  var buildings = [
    {name:'한옥',type:'wood',weight:3,flex:8,base:5,damper:2,wall:4,found:3,grade:'B',color:'#8B4513'},
    {name:'기와집',type:'wood+tile',weight:4,flex:7,base:5,damper:2,wall:5,found:4,grade:'B',color:'#DAA520'},
    {name:'초가집',type:'straw',weight:2,flex:9,base:3,damper:1,wall:2,found:2,grade:'C',color:'#228B22'},
    {name:'서원',type:'wood+stone',weight:5,flex:6,base:6,damper:3,wall:6,found:5,grade:'B+',color:'#4169E1'},
    {name:'현대주택(RC)',type:'RC',weight:7,flex:5,base:8,damper:7,wall:8,found:8,grade:'A',color:'#DC143C'},
    {name:'내진설계건물',type:'RC+Damper',weight:8,flex:7,base:10,damper:10,wall:9,found:10,grade:'S',color:'#FFD700'}
  ];
  var sel=0;
  var shaking=false;
  function open(){ document.getElementById('v17-seismic').classList.add('active'); v17SFX.play('menu_open'); renderTabs(); draw(); localStorage.setItem('hb_seismic_v17','1'); }
  function close(){ document.getElementById('v17-seismic').classList.remove('active'); shaking=false; }
  function renderTabs(){
    var box=document.getElementById('v17-seismic-tabs'); box.innerHTML='';
    buildings.forEach(function(b,i){
      var btn=document.createElement('button');
      btn.className='v17-tab'+(i===sel?' active':'');
      btn.textContent=b.name;
      btn.onclick=function(){ sel=i; renderTabs(); draw(); v17SFX.play('evo_select'); };
      box.appendChild(btn);
    });
    var shakeBtn=document.createElement('button');
    shakeBtn.className='v17-btn-sm';
    shakeBtn.textContent='지진 시뮬레이션';
    shakeBtn.style.marginLeft='10px';
    shakeBtn.onclick=function(){ simulateShake(); };
    box.appendChild(shakeBtn);
  }
  function simulateShake(){
    if(shaking) return;
    shaking=true;
    v17SFX.play('seismic_shake');
    var frames=0;
    var c=document.getElementById('v17-seismic-canvas');
    var anim=setInterval(function(){
      frames++;
      var offsetX=(Math.random()-.5)*frames*.5;
      var offsetY=(Math.random()-.5)*frames*.3;
      c.style.transform='translate('+offsetX+'px,'+offsetY+'px)';
      draw(frames);
      if(frames>=30){ clearInterval(anim); c.style.transform=''; shaking=false; draw(0); }
    },50);
  }
  function draw(shakeFrame){
    var c=document.getElementById('v17-seismic-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var b=buildings[sel];
    // building illustration
    var bx=60,by=80,bw=180,bh=240;
    var groundY=by+bh;
    // ground
    ctx.fillStyle='#3a2a1a';
    ctx.fillRect(0,groundY,W,H-groundY);
    // foundation
    ctx.fillStyle='#555';
    ctx.fillRect(bx-10,groundY-20,bw+20,20);
    // building body with shake offset
    var sOff=shakeFrame? Math.sin(shakeFrame*.5)*(shakeFrame/30)*8*((10-b.flex)/10):0;
    ctx.save();
    ctx.translate(sOff,0);
    ctx.fillStyle=b.color+'88';
    ctx.fillRect(bx,by,bw,bh-20);
    ctx.strokeStyle=b.color;
    ctx.lineWidth=2;
    ctx.strokeRect(bx,by,bw,bh-20);
    // windows
    for(var r=0;r<3;r++){
      for(var cl=0;cl<2;cl++){
        ctx.fillStyle='rgba(135,206,235,.3)';
        ctx.fillRect(bx+20+cl*100,by+30+r*70,50,40);
        ctx.strokeStyle='rgba(196,149,106,.4)';
        ctx.strokeRect(bx+20+cl*100,by+30+r*70,50,40);
      }
    }
    // roof
    ctx.beginPath();
    ctx.moveTo(bx-20,by);
    ctx.lineTo(bx+bw/2,by-40);
    ctx.lineTo(bx+bw+20,by);
    ctx.closePath();
    ctx.fillStyle=b.color+'66';
    ctx.fill();
    ctx.strokeStyle=b.color;
    ctx.stroke();
    ctx.restore();
    ctx.lineWidth=1;
    // damage indicator if shaking
    if(shakeFrame&&shakeFrame>15){
      var dmg=(shakeFrame-15)/15;
      var cracks=Math.floor(dmg*(10-b.flex));
      ctx.strokeStyle='#ff4444';
      ctx.lineWidth=1;
      for(var i=0;i<cracks;i++){
        var cx2=bx+Math.random()*bw;
        var cy2=by+Math.random()*(bh-20);
        ctx.beginPath();
        ctx.moveTo(cx2,cy2);
        ctx.lineTo(cx2+Math.random()*20-10,cy2+Math.random()*30);
        ctx.stroke();
      }
      ctx.lineWidth=1;
    }
    // right side: metrics bars
    var metrics=[
      {label:'유연성',val:b.flex},
      {label:'기초',val:b.found},
      {label:'내력벽',val:b.wall},
      {label:'제진장치',val:b.damper},
      {label:'기초판',val:b.base},
      {label:'중량균형',val:b.weight}
    ];
    var mx=310,mw=220;
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText(b.name+' ('+b.type+')',mx+mw/2,40);
    metrics.forEach(function(m,i){
      var y=70+i*50;
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif'; ctx.textAlign='left';
      ctx.fillText(m.label,mx,y);
      ctx.fillStyle='rgba(196,149,106,.15)';
      ctx.fillRect(mx,y+6,mw,16);
      var barColor=m.val>=7?'#4a7c59':m.val>=4?'#DAA520':'#DC143C';
      ctx.fillStyle=barColor;
      ctx.fillRect(mx,y+6,mw*m.val/10,16);
      ctx.fillStyle='#f5deb3'; ctx.font='bold 10px sans-serif'; ctx.textAlign='right';
      ctx.fillText(m.val+'/10',mx+mw-4,y+19);
    });
    // grade
    ctx.fillStyle='#f5deb3'; ctx.font='bold 28px sans-serif'; ctx.textAlign='center';
    ctx.fillText('등급: '+b.grade,mx+mw/2,H-30);
    // info
    var total=b.flex+b.found+b.wall+b.damper+b.base+b.weight;
    document.getElementById('v17-seismic-info').innerHTML = b.name+' 내진성능 종합: '+total+'/60, 등급 '+b.grade;
    document.getElementById('v17-seismic-stat').innerHTML =
      '<div class="s"><div class="sv">'+b.grade+'</div><div class="sl">등급</div></div>' +
      '<div class="s"><div class="sv">'+total+'</div><div class="sl">종합점</div></div>' +
      '<div class="s"><div class="sv">'+b.flex+'</div><div class="sl">유연성</div></div>';
  }
  return {open:open,close:close};
})();

// ── 6. 건축 소재 탄소발자국 (Building Material Carbon Footprint) ──
var v17Carbon = (function(){
  var materials = [
    {name:'목재(소나무)',co2:40,recycle:85,energy:12,life:80,color:'#8B4513'},
    {name:'대나무',co2:15,recycle:90,energy:8,life:30,color:'#228B22'},
    {name:'황토/흙',co2:5,recycle:100,energy:3,life:100,color:'#DAA520'},
    {name:'적벽돌',co2:60,recycle:70,energy:25,life:150,color:'#CD853F'},
    {name:'콘크리트',co2:410,recycle:40,energy:180,life:100,color:'#808080'},
    {name:'철근',co2:1800,recycle:95,energy:350,life:120,color:'#4682B4'},
    {name:'알루미늄',co2:8000,recycle:98,energy:1500,life:80,color:'#C0C0C0'},
    {name:'유리',co2:1200,recycle:80,energy:250,life:50,color:'#87CEEB'},
    {name:'기와',co2:200,recycle:60,energy:80,life:200,color:'#B22222'},
    {name:'짚',co2:25,recycle:95,energy:10,life:40,color:'#9ACD32'}
  ];
  function open(){ document.getElementById('v17-carbon').classList.add('active'); v17SFX.play('menu_open'); draw(); localStorage.setItem('hb_carbon_v17','1'); }
  function close(){ document.getElementById('v17-carbon').classList.remove('active'); }
  function draw(){
    var c=document.getElementById('v17-carbon-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var pad={l:80,r:20,t:40,b:60};
    var gw=W-pad.l-pad.r, gh=H-pad.t-pad.b;
    var maxCO2=Math.max.apply(null,materials.map(function(m){return m.co2;}));
    // title
    ctx.fillStyle='#f5deb3'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
    ctx.fillText('건축 자재별 CO2 배출량 (kg CO2/톤)',W/2,25);
    // bars
    var bh=gh/materials.length*.7;
    var gap=gh/materials.length;
    materials.forEach(function(m,i){
      var y=pad.t+gap*i;
      var bw=gw*m.co2/maxCO2;
      // bar
      var g=ctx.createLinearGradient(pad.l,0,pad.l+bw,0);
      g.addColorStop(0,m.color); g.addColorStop(1,m.color+'88');
      ctx.fillStyle=g;
      ctx.fillRect(pad.l,y,bw,bh);
      // label
      ctx.fillStyle='#e8d5c0'; ctx.font='11px sans-serif'; ctx.textAlign='right';
      ctx.fillText(m.name,pad.l-6,y+bh/2+4);
      // value
      ctx.fillStyle='#f5deb3'; ctx.font='bold 10px sans-serif'; ctx.textAlign='left';
      ctx.fillText(m.co2.toLocaleString(),pad.l+bw+6,y+bh/2+4);
      // recycle indicator
      var rx=W-pad.r-40;
      ctx.fillStyle=m.recycle>=80?'#4a7c59':m.recycle>=50?'#DAA520':'#DC143C';
      ctx.font='9px sans-serif'; ctx.textAlign='center';
      ctx.fillText(m.recycle+'%',rx,y+bh/2+3);
    });
    // recycle header
    ctx.fillStyle='#c4956a'; ctx.font='9px sans-serif'; ctx.textAlign='center';
    ctx.fillText('재활용',W-pad.r-40,pad.t-6);
    // eco score
    v17SFX.play('carbon_calc');
    var greenest=materials.reduce(function(a,b){return a.co2<b.co2?a:b;});
    var worst=materials.reduce(function(a,b){return a.co2>b.co2?a:b;});
    document.getElementById('v17-carbon-info').innerHTML =
      '가장 친환경: '+greenest.name+' ('+greenest.co2+'kg) | 가장 고탄소: '+worst.name+' ('+worst.co2.toLocaleString()+'kg)';
    document.getElementById('v17-carbon-stat').innerHTML =
      '<div class="s"><div class="sv">'+greenest.name+'</div><div class="sl">친환경 1위</div></div>' +
      '<div class="s"><div class="sv">'+materials.length+'</div><div class="sl">분석 소재</div></div>';
  }
  return {open:open,close:close};
})();

// ── 7. 스마트홈 자동화 플래너 (Smart Home Planner) ──
var v17Smart = (function(){
  var zones = [
    {name:'거실',devices:[
      {name:'스마트조명',icon:'💡',auto:'일몰시 자동 점등',energy:15},
      {name:'공기청정기',icon:'🌬️',auto:'PM2.5 감지시 자동 가동',energy:45},
      {name:'스마트TV',icon:'📺',auto:'음성인식 ON/OFF',energy:120}
    ]},
    {name:'침실',devices:[
      {name:'스마트커튼',icon:'🌙',auto:'수면모드 자동 차단',energy:5},
      {name:'온습도센서',icon:'🌡️',auto:'쟥적온도 자동 유지',energy:2},
      {name:'스마트스피커',icon:'🔊',auto:'알람/백색소음',energy:10}
    ]},
    {name:'주방',devices:[
      {name:'스마트냉장고',icon:'🧊',auto:'식재료 유통기한 알림',energy:150},
      {name:'인덕션레인지',icon:'🍳',auto:'요리 타이머 연동',energy:2000},
      {name:'환기팬',icon:'💨',auto:'요리시 자동 가동',energy:30}
    ]},
    {name:'현관',devices:[
      {name:'스마트도어락',icon:'🚪',auto:'얼굴인식/비밀번호',energy:8},
      {name:'CCTV',icon:'📷',auto:'이상감지시 스마트폰 알림',energy:12},
      {name:'신발장',icon:'👟',auto:'자외선 살균',energy:25}
    ]}
  ];
  var selZone=0;
  function open(){ document.getElementById('v17-smarthome').classList.add('active'); v17SFX.play('menu_open'); renderTabs(); draw(); localStorage.setItem('hb_smart_v17','1'); }
  function close(){ document.getElementById('v17-smarthome').classList.remove('active'); }
  function renderTabs(){
    var box=document.getElementById('v17-smart-tabs'); box.innerHTML='';
    zones.forEach(function(z,i){
      var b=document.createElement('button');
      b.className='v17-tab'+(i===selZone?' active':'');
      b.textContent=z.name;
      b.onclick=function(){ selZone=i; renderTabs(); draw(); v17SFX.play('smart_connect'); };
      box.appendChild(b);
    });
  }
  function draw(){
    var c=document.getElementById('v17-smart-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var zone=zones[selZone];
    // central hub
    var cx=W/2,cy=H/2-20;
    ctx.beginPath(); ctx.arc(cx,cy,40,0,Math.PI*2);
    ctx.fillStyle='rgba(196,149,106,.15)'; ctx.fill();
    ctx.strokeStyle='#c4956a'; ctx.lineWidth=2; ctx.stroke(); ctx.lineWidth=1;
    ctx.fillStyle='#f5deb3'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
    ctx.fillText('IoT Hub',cx,cy-6);
    ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif';
    ctx.fillText(zone.name,cx,cy+10);
    // devices around hub
    var devCount=zone.devices.length;
    var devR=140;
    zone.devices.forEach(function(d,i){
      var angle=-Math.PI/2+(2*Math.PI*i/devCount);
      var dx=cx+devR*Math.cos(angle);
      var dy=cy+devR*Math.sin(angle);
      // connection line
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(dx,dy);
      ctx.strokeStyle='rgba(196,149,106,.3)'; ctx.setLineDash([4,4]); ctx.stroke(); ctx.setLineDash([]);
      // device circle
      ctx.beginPath(); ctx.arc(dx,dy,35,0,Math.PI*2);
      ctx.fillStyle='rgba(196,149,106,.1)'; ctx.fill();
      ctx.strokeStyle='#c4956a'; ctx.stroke();
      // icon and name
      ctx.fillStyle='#f5deb3'; ctx.font='22px sans-serif'; ctx.textAlign='center';
      ctx.fillText(d.icon,dx,dy-4);
      ctx.font='10px sans-serif'; ctx.fillStyle='#e8d5c0';
      ctx.fillText(d.name,dx,dy+16);
      // energy
      ctx.fillStyle='#c4956a'; ctx.font='9px sans-serif';
      ctx.fillText(d.energy+'W',dx,dy+28);
    });
    // automation rules at bottom
    ctx.fillStyle='#f5deb3'; ctx.font='bold 12px sans-serif'; ctx.textAlign='center';
    ctx.fillText('자동화 규칙',W/2,H-90);
    zone.devices.forEach(function(d,i){
      ctx.fillStyle='#c4956a'; ctx.font='11px sans-serif';
      ctx.fillText(d.icon+' '+d.name+': '+d.auto,W/2,H-70+i*16);
    });
    // total energy
    var totalE=zone.devices.reduce(function(a,b){return a+b.energy;},0);
    document.getElementById('v17-smart-info').innerHTML =
      zone.name+' 총 소비전력: '+totalE+'W | 기기 '+devCount+'개 연결';
  }
  return {open:open,close:close};
})();

// ── 8. 건축 음향 분석기 (Building Acoustics Analyzer) ──
var v17Acoustics = (function(){
  var rooms=[
    {name:'거실',noise:45,insul:38,reverb:0.8,bass:42,mid:48,high:52,grade:'B'},
    {name:'침실',noise:30,insul:45,reverb:0.5,bass:28,mid:32,high:35,grade:'A'},
    {name:'주방',noise:55,insul:30,reverb:0.6,bass:50,mid:58,high:62,grade:'C'},
    {name:'서재',noise:35,insul:42,reverb:0.7,bass:32,mid:38,high:40,grade:'A-'},
    {name:'욕실',noise:50,insul:35,reverb:1.2,bass:48,mid:52,high:55,grade:'B-'},
    {name:'다용도실',noise:60,insul:25,reverb:1.0,bass:55,mid:62,high:65,grade:'C+'}
  ];
  var selRoom=0;
  function open(){ document.getElementById('v17-acoustics').classList.add('active'); v17SFX.play('menu_open'); renderTabs(); draw(); localStorage.setItem('hb_acoustics_v17','1'); }
  function close(){ document.getElementById('v17-acoustics').classList.remove('active'); }
  function renderTabs(){
    var box=document.getElementById('v17-acoustics-tabs'); box.innerHTML='';
    rooms.forEach(function(r,i){
      var b=document.createElement('button');
      b.className='v17-tab'+(i===selRoom?' active':'');
      b.textContent=r.name;
      b.onclick=function(){ selRoom=i; renderTabs(); draw(); v17SFX.play('acoustics_test'); };
      box.appendChild(b);
    });
  }
  function draw(){
    var c=document.getElementById('v17-acoustics-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var r=rooms[selRoom];
    var pad={l:80,r:20,t:50,b:50};
    var gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
    // title
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText(r.name+' 음향 분석 [등급: '+r.grade+']',W/2,30);
    // frequency bands
    var bands=[
      {label:'저음(Bass)',val:r.bass,color:'#8B4513'},
      {label:'중음(Mid)',val:r.mid,color:'#DAA520'},
      {label:'고음(High)',val:r.high,color:'#DC143C'},
      {label:'소음레벨',val:r.noise,color:'#4169E1'},
      {label:'방음성능',val:r.insul,color:'#4a7c59'},
      {label:'잔향(s)',val:Math.round(r.reverb*50),color:'#9370DB'}
    ];
    var bw=gw/bands.length*.65;
    var gap=gw/bands.length;
    bands.forEach(function(b,i){
      var x=pad.l+gap*i+gap/2-bw/2;
      var bh=gh*b.val/80;
      var y=pad.t+gh-bh;
      // gradient bar
      var g=ctx.createLinearGradient(0,y,0,pad.t+gh);
      g.addColorStop(0,b.color); g.addColorStop(1,b.color+'44');
      ctx.fillStyle=g;
      ctx.fillRect(x,y,bw,bh);
      // value
      ctx.fillStyle='#f5deb3'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center';
      ctx.fillText(b.val+(i===5?'':'dB'),x+bw/2,y-6);
      // label
      ctx.fillStyle='#c4956a'; ctx.font='10px sans-serif';
      ctx.save();
      ctx.translate(x+bw/2,pad.t+gh+14);
      ctx.fillText(b.label,0,0);
      ctx.restore();
    });
    // comfort threshold
    ctx.setLineDash([4,4]);
    ctx.strokeStyle='#4a7c59';
    var threshY=pad.t+gh-gh*40/80;
    ctx.beginPath(); ctx.moveTo(pad.l,threshY); ctx.lineTo(W-pad.r,threshY); ctx.stroke();
    ctx.fillStyle='#4a7c59'; ctx.font='9px sans-serif'; ctx.textAlign='left';
    ctx.fillText('쟥적기준 40dB',pad.l,threshY-4);
    ctx.setLineDash([]);
    // info
    document.getElementById('v17-acoustics-info').innerHTML =
      r.name+': 소음 '+r.noise+'dB, 방음 STC'+r.insul+', 잔향 '+r.reverb+'s | 등급 '+r.grade;
  }
  return {open:open,close:close};
})();

// ── 9. 건축 자재 내구성 트래커 (Material Durability Tracker) ──
var v17Durability = (function(){
  var mats=[
    {name:'황토벽',life:100,maint:5,cost:2,weather:7,fire:8,pest:6,color:'#DAA520'},
    {name:'목재(소나무)',life:80,maint:15,cost:6,weather:5,fire:3,pest:4,color:'#8B4513'},
    {name:'기와',life:200,maint:8,cost:7,weather:9,fire:9,pest:9,color:'#B22222'},
    {name:'콘크리트',life:100,maint:10,cost:5,weather:8,fire:9,pest:10,color:'#808080'},
    {name:'철골',life:120,maint:20,cost:9,weather:6,fire:7,pest:10,color:'#4682B4'},
    {name:'한지(창호지)',life:10,maint:30,cost:1,weather:2,fire:1,pest:2,color:'#F5DEB3'},
    {name:'짚',life:40,maint:25,cost:2,weather:3,fire:5,pest:3,color:'#9ACD32'},
    {name:'돌/화강암',life:300,maint:3,cost:8,weather:10,fire:10,pest:10,color:'#696969'}
  ];
  function open(){ document.getElementById('v17-durability').classList.add('active'); v17SFX.play('menu_open'); draw(); localStorage.setItem('hb_durability_v17','1'); }
  function close(){ document.getElementById('v17-durability').classList.remove('active'); }
  function draw(){
    var c=document.getElementById('v17-durability-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var pad={l:90,r:30,t:50,b:50};
    var gw=W-pad.l-pad.r,gh=H-pad.t-pad.b;
    var maxLife=300;
    // title
    ctx.fillStyle='#f5deb3'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center';
    ctx.fillText('건축 자재 수명 비교 (년)',W/2,25);
    // bars horizontal
    var bh=gh/mats.length*.7;
    var gap=gh/mats.length;
    mats.forEach(function(m,i){
      var y=pad.t+gap*i;
      var bw=gw*m.life/maxLife;
      ctx.fillStyle=m.color+'88';
      ctx.fillRect(pad.l,y,bw,bh);
      ctx.strokeStyle=m.color;
      ctx.strokeRect(pad.l,y,bw,bh);
      // name
      ctx.fillStyle='#e8d5c0'; ctx.font='11px sans-serif'; ctx.textAlign='right';
      ctx.fillText(m.name,pad.l-6,y+bh/2+4);
      // value
      ctx.fillStyle='#f5deb3'; ctx.font='bold 10px sans-serif'; ctx.textAlign='left';
      ctx.fillText(m.life+'년',pad.l+bw+6,y+bh/2+4);
      // sub info circles at end
      var indicators=[
        {val:m.weather,label:'내후'},
        {val:m.fire,label:'내화'},
        {val:m.pest,label:'방충'}
      ];
      indicators.forEach(function(ind,j){
        var ix=W-pad.r-10-(2-j)*22;
        var iy=y+bh/2;
        ctx.beginPath(); ctx.arc(ix,iy,8,0,Math.PI*2);
        ctx.fillStyle=ind.val>=7?'#4a7c59':ind.val>=4?'#DAA520':'#DC143C';
        ctx.fill();
        ctx.fillStyle='#fff'; ctx.font='bold 8px sans-serif'; ctx.textAlign='center';
        ctx.fillText(ind.val,ix,iy+3);
      });
    });
    // legend
    ctx.fillStyle='#c4956a'; ctx.font='9px sans-serif'; ctx.textAlign='center';
    var lx=W-pad.r-10;
    ctx.fillText('방충',lx,pad.t-18);
    ctx.fillText('내화',lx-22,pad.t-18);
    ctx.fillText('내후',lx-44,pad.t-18);
    v17SFX.play('durability_check');
    var longest=mats.reduce(function(a,b){return a.life>b.life?a:b;});
    document.getElementById('v17-durability-info').innerHTML =
      '최장수명: '+longest.name+' ('+longest.life+'년) | 8종 자재 내구성 비교';
    document.getElementById('v17-durability-stat').innerHTML =
      '<div class="s"><div class="sv">'+longest.life+'년</div><div class="sl">최장수명</div></div>' +
      '<div class="s"><div class="sv">'+mats.length+'</div><div class="sl">분석 자재</div></div>';
  }
  return {open:open,close:close};
})();

// ── 10. 건축 미니 퍼즐 챌린지 (Architecture Mini Puzzle) ──
var v17Puzzle = (function(){
  var puzzles=[
    {title:'한옥 구조부위',items:['기단','초석','기둥','보','도리','서까래','처마','지붕','창호','대들보','추녀','마루','물확기','걸쇠','풀각']},
    {title:'건축 양식',items:['한옥','기와집','초가집','서원','정자','RC구조','철골','목조','조적조','커튼월','트러스','셀','돔','박공','모듈러']},
    {title:'건축 재료',items:['황토','목재','기와','콘크리트','철근','유리','돌','한지','짚','회반죽','아연','협재','법돌','석회','몇']}
  ];
  var curPuzzle=0;
  var tiles=[];
  var emptyIdx=15;
  var moves=0;
  var solved=false;
  var bestMoves=parseInt(localStorage.getItem('hb_puzzle_best_v17'))||0;

  function open(){ document.getElementById('v17-puzzle').classList.add('active'); v17SFX.play('menu_open'); reset(); }
  function close(){ document.getElementById('v17-puzzle').classList.remove('active'); }

  function reset(){
    curPuzzle=(curPuzzle+1)%puzzles.length;
    var p=puzzles[curPuzzle];
    tiles=[];
    for(var i=0;i<15;i++) tiles.push(i);
    tiles.push(-1);
    emptyIdx=15;
    // shuffle
    for(var s=0;s<200;s++){
      var neighbors=getNeighbors(emptyIdx);
      var pick=neighbors[Math.floor(Math.random()*neighbors.length)];
      tiles[emptyIdx]=tiles[pick];
      tiles[pick]=-1;
      emptyIdx=pick;
    }
    moves=0; solved=false;
    draw();
    localStorage.setItem('hb_puzzle_v17','1');
  }

  function getNeighbors(idx){
    var r=Math.floor(idx/4),co=idx%4;
    var n=[];
    if(r>0) n.push(idx-4);
    if(r<3) n.push(idx+4);
    if(co>0) n.push(idx-1);
    if(co<3) n.push(idx+1);
    return n;
  }

  function draw(){
    var c=document.getElementById('v17-puzzle-canvas');
    var ctx=c.getContext('2d');
    var W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var p=puzzles[curPuzzle];
    // title
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText(p.title+' 퍼즐',W/2,24);
    // grid
    var cellSize=65;
    var gridW=cellSize*4;
    var ox=(W-gridW)/2,oy=40;
    for(var i=0;i<16;i++){
      var r=Math.floor(i/4),co=i%4;
      var x=ox+co*cellSize,y=oy+r*cellSize;
      if(tiles[i]===-1){
        ctx.fillStyle='rgba(30,20,10,.5)';
        ctx.fillRect(x+1,y+1,cellSize-2,cellSize-2);
        continue;
      }
      var isCorrect=tiles[i]===i;
      ctx.fillStyle=isCorrect?'rgba(74,124,89,.2)':'rgba(196,149,106,.1)';
      ctx.fillRect(x+1,y+1,cellSize-2,cellSize-2);
      ctx.strokeStyle=isCorrect?'#4a7c59':'rgba(196,149,106,.3)';
      ctx.strokeRect(x+1,y+1,cellSize-2,cellSize-2);
      ctx.fillStyle=isCorrect?'#4a7c59':'#f5deb3';
      ctx.font='bold 11px sans-serif'; ctx.textAlign='center';
      ctx.fillText(p.items[tiles[i]],x+cellSize/2,y+cellSize/2+4);
    }
    // stats
    ctx.fillStyle='#c4956a'; ctx.font='12px sans-serif'; ctx.textAlign='center';
    ctx.fillText('이동: '+moves+'회'+(bestMoves?' | 베스트: '+bestMoves+'회':''),W/2,oy+cellSize*4+24);
    if(solved){
      ctx.fillStyle='#4a7c59'; ctx.font='bold 16px sans-serif';
      ctx.fillText('퍼즐 완성!',W/2,oy+cellSize*4+48);
    }
    // info
    document.getElementById('v17-puzzle-info').innerHTML = solved?
      '축하! '+moves+'회 만에 완성했습니다!' :
      '타일을 클릭해 올바른 순서로 배치하세요';
    document.getElementById('v17-puzzle-stat').innerHTML =
      '<div class="s"><div class="sv">'+moves+'</div><div class="sl">이동횟수</div></div>' +
      '<div class="s"><div class="sv">'+(bestMoves||'-')+'</div><div class="sl">베스트</div></div>';
    // click handler
    c.onclick=function(ev){
      if(solved) return;
      var rect=c.getBoundingClientRect();
      var mx=(ev.clientX-rect.left)*(W/rect.width);
      var my=(ev.clientY-rect.top)*(H/rect.height);
      var col=Math.floor((mx-ox)/cellSize);
      var row=Math.floor((my-oy)/cellSize);
      if(col<0||col>3||row<0||row>3) return;
      var idx=row*4+col;
      var neighbors=getNeighbors(idx);
      if(neighbors.indexOf(emptyIdx)===-1) return;
      tiles[emptyIdx]=tiles[idx];
      tiles[idx]=-1;
      emptyIdx=idx;
      moves++;
      v17SFX.play('puzzle_move');
      // check solved
      var ok=true;
      for(var i=0;i<15;i++){ if(tiles[i]!==i){ok=false;break;} }
      if(ok){
        solved=true;
        v17SFX.play('puzzle_complete');
        if(!bestMoves||moves<bestMoves){ bestMoves=moves; localStorage.setItem('hb_puzzle_best_v17',moves); }
        v17Achieve.unlock('v17_puzzle_master');
      }
      draw();
    };
  }
  return {open:open,close:close,reset:reset};
})();

// ── 11. Quiz v17 (+15 questions, 180->195) ──
var v17Quiz = (function(){
  var qs = [
    {q:'내진설계에서 건물의 진동을 흡수하는 장치는?',a:['제진장치','방음백','단열재','방수막'],c:0},
    {q:'황토건축의 최대 장점은?',a:['친환경성','강도','방수성','시공속도'],c:0},
    {q:'건물의 실내 쟥적 조도(lux) 기준은?',a:['300 lux','100 lux','500 lux','50 lux'],c:0},
    {q:'한옥의 ‘처마’는 어떤 부분?',a:['지붕 끝 내밀어진 부분','기둥 상부','벽체 하부','마루 바닥'],c:0},
    {q:'STC(Sound Transmission Class)는 무엇을 측정?',a:['방음 성능','내진 성능','단열 성능','방수 성능'],c:0},
    {q:'탄소발자국이 가장 높은 건축자재는?',a:['알루미늄','콘크리트','목재','황토'],c:0},
    {q:'PMV(Predicted Mean Vote)는 무엇을 평가?',a:['열쟥적도','음향 성능','채광 성능','구조 강도'],c:0},
    {q:'스마트홈에서 IoT 기기 통신에 주로 사용되는 프로토콜은?',a:['Zigbee/Z-Wave','HTTP','FTP','SMTP'],c:0},
    {q:'건물 수명이 가장 긴 자재는?',a:['화강암/돌','철골','콘크리트','목재'],c:0},
    {q:'한옥의 ‘대들보’는 어떤 역할?',a:['지붕 하중을 지탱하는 큰 보','벽체 장식','바닥재','창틀'],c:0},
    {q:'LEED 인증에서 최고 등급은?',a:['Platinum','Gold','Silver','Diamond'],c:0},
    {q:'건축물의 잔향시간(RT60)이 길면?',a:['음성이 웅웅거림','음성이 맑아짐','방음 성능 좋음','에너지 절약'],c:0},
    {q:'풍수지리에서 가장 좋은 방향은?',a:['남향','북향','서향','동향'],c:0},
    {q:'4x4 슬라이드 퍼즐의 최소 이동 횟수는?',a:['80회 전후','15회','200회','500회'],c:0},
    {q:'건축에서 ‘모듈러 공법’의 장점은?',a:['공기 단축','비용 증가','유연성 증가','미관 향상'],c:0}
  ];
  function inject(){
    if(typeof window.quizQuestions!=='object'||!Array.isArray(window.quizQuestions)) return;
    qs.forEach(function(q){ window.quizQuestions.push(q); });
  }
  return {inject:inject};
})();

// ── 12. Achievements v17 (+12, 170->182) ──
var v17Achieve = (function(){
  var defs = [
    {id:'v17_evo_explorer',name:'양식 탐험가',desc:'건축 양식 진화도 열기'},
    {id:'v17_daylight_analyst',name:'채광 분석가',desc:'채광 분석기 사용'},
    {id:'v17_seismic_tester',name:'내진 테스터',desc:'지진 시뮬레이션 실행'},
    {id:'v17_carbon_checker',name:'탄소 점검원',desc:'탄소발자국 분석 완료'},
    {id:'v17_smart_planner',name:'IoT 플래너',desc:'스마트홈 자동화 설계'},
    {id:'v17_acoustics_expert',name:'음향 전문가',desc:'음향 분석기 사용'},
    {id:'v17_durability_pro',name:'내구성 프로',desc:'자재 내구성 트래커 사용'},
    {id:'v17_puzzle_master',name:'퍼즐 마스터',desc:'미니 퍼즐 완성'},
    {id:'v17_all_features',name:'v17 컴플리트',desc:'v17 모든 기능 사용'},
    {id:'v17_quiz_ace',name:'v17 퀵즈 에이스',desc:'v17 퀵즈 전문 정답'},
    {id:'v17_eco_builder',name:'친환경 건축가',desc:'탄소발자국+채광 분석 완료'},
    {id:'v17_safety_expert',name:'안전 전문가',desc:'내진+음향+내구성 분석 완료'}
  ];
  function load(){
    try{ return JSON.parse(localStorage.getItem('hb_achievements_v17')||'[]'); }catch(e){ return []; }
  }
  function unlock(id){
    var arr=load();
    if(arr.indexOf(id)>=0) return;
    arr.push(id);
    localStorage.setItem('hb_achievements_v17',JSON.stringify(arr));
    var def=defs.filter(function(d){return d.id===id;})[0];
    if(def&&typeof window.showAchievement==='function'){
      window.showAchievement(def.name);
    } else if(def){
      var toast=document.getElementById('achToast');
      if(toast){
        toast.querySelector('.ach-name').textContent=def.name;
        toast.classList.add('show');
        setTimeout(function(){toast.classList.remove('show');},3000);
      }
    }
    v17SFX.play('achievement_v17');
  }
  function check(){
    if(localStorage.getItem('hb_evo_v17')) unlock('v17_evo_explorer');
    if(localStorage.getItem('hb_daylight_v17')) unlock('v17_daylight_analyst');
    if(localStorage.getItem('hb_seismic_v17')) unlock('v17_seismic_tester');
    if(localStorage.getItem('hb_carbon_v17')) unlock('v17_carbon_checker');
    if(localStorage.getItem('hb_smart_v17')) unlock('v17_smart_planner');
    if(localStorage.getItem('hb_acoustics_v17')) unlock('v17_acoustics_expert');
    if(localStorage.getItem('hb_durability_v17')) unlock('v17_durability_pro');
    if(localStorage.getItem('hb_carbon_v17')&&localStorage.getItem('hb_daylight_v17')) unlock('v17_eco_builder');
    if(localStorage.getItem('hb_seismic_v17')&&localStorage.getItem('hb_acoustics_v17')&&localStorage.getItem('hb_durability_v17')) unlock('v17_safety_expert');
    var allUsed=localStorage.getItem('hb_evo_v17')&&localStorage.getItem('hb_daylight_v17')&&
      localStorage.getItem('hb_seismic_v17')&&localStorage.getItem('hb_carbon_v17')&&
      localStorage.getItem('hb_smart_v17')&&localStorage.getItem('hb_acoustics_v17')&&
      localStorage.getItem('hb_durability_v17')&&localStorage.getItem('hb_puzzle_v17');
    if(allUsed) unlock('v17_all_features');
  }
  return {check:check,unlock:unlock,load:load};
})();

// ── 13. Side Menu (NO bottom navbar - UI rule compliance) ──
(function(){
  function inject(){
    var menu=document.createElement('div');
    menu.className='v17-menu';
    menu.id='v17-side-menu';
    var actions=[
      {icon:'\u{1F3DB}',label:'양식진화',fn:function(){v17Evo.open();}},
      {icon:'☀',label:'채광분석',fn:function(){v17Daylight.open();}},
      {icon:'\u{1F30D}',label:'내진설계',fn:function(){v17Seismic.open();}},
      {icon:'\u{1F331}',label:'탄소발자국',fn:function(){v17Carbon.open();}},
      {icon:'\u{1F4F1}',label:'스마트홈',fn:function(){v17Smart.open();}},
      {icon:'\u{1F50A}',label:'음향분석',fn:function(){v17Acoustics.open();}},
      {icon:'\u{1F9F1}',label:'내구성',fn:function(){v17Durability.open();}},
      {icon:'\u{1F9E9}',label:'퍼즐',fn:function(){v17Puzzle.open();}}
    ];
    actions.forEach(function(a){
      var btn=document.createElement('button');
      btn.className='v17-menu-btn';
      btn.innerHTML=a.icon+'<span class="v17-menu-label">'+a.label+'</span>';
      btn.onclick=function(){ a.fn(); v17SFX.play('nav_v17'); };
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
      case 'KeyA': e.preventDefault(); v17Evo.open(); break;
      case 'KeyD': e.preventDefault(); v17Daylight.open(); break;
      case 'KeyQ': e.preventDefault(); v17Seismic.open(); break;
      case 'KeyC': e.preventDefault(); v17Carbon.open(); break;
      case 'KeyS': e.preventDefault(); v17Smart.open(); break;
      case 'KeyO': e.preventDefault(); v17Acoustics.open(); break;
      case 'KeyR': e.preventDefault(); v17Durability.open(); break;
      case 'KeyP': e.preventDefault(); v17Puzzle.open(); break;
    }
  });
})();

// ── 15. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v17Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 16. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig=window.showComplete;
    if(typeof orig!=='function') return false;
    if(window.__v17Hooked) return true;
    window.__v17Hooked=true;
    var prev=window.showComplete;
    window.showComplete=function(){ prev.apply(this,arguments); v17Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 17. Initial load + checks ──
(function(){
  setTimeout(function(){ v17Achieve.check(); },5000);
})();

// end v17 guard
}

// =====================================================
// House Builder v20.0 Patch
// 건축구조하중분석기Canvas620x400_6종구조하중분포BarStack+전통온돌시스템설계Canvas600x380_8종온돌열효율Radar
// 건축재해복구플래너Canvas620x380_8재해대비복구전략Bar+실내습도쾌적맵Canvas600x380_8실4계절히트맵
// 건축미학비율분석기Canvas620x400_8건물미학비율Bar+전통담장양식가이드Canvas600x380_10종담장비교Bar
// 건축에너지등급시뮬Canvas620x380_6등급에너지Radar+건축자재호환성매트릭스Canvas620x400_8자재8속성히트맵
// 퀴즈+15(225->240)+업적+12(206->218)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV20) {
window.__hbV20 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v20-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5300;overflow-y:auto;padding:16px}',
    '.v20-panel.active{display:block}',
    '.v20-box{max-width:720px;margin:40px auto}',
    '.v20-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v20-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v20-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v20-close:hover{background:#d4a57a}',
    '.v20-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v20-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v20-tab:hover,.v20-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v20-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v20-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v20-stat .s{text-align:center}',
    '.v20-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v20-stat .sl{font-size:11px;color:#c4956a}',
    '.v20-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v20-btn-sm:hover{background:#d4a57a}',
    '.v20-menu{position:fixed;left:12px;top:50%;transform:translateY(-50%);z-index:4070;display:flex;flex-direction:column;gap:6px}',
    '.v20-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative}',
    '.v20-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v20-menu-label{position:absolute;left:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v20-menu-btn:hover .v20-menu-label{opacity:1}',
    '@media(max-width:600px){.v20-box{margin:16px auto}.v20-menu{left:6px;gap:4px}.v20-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 1. HTML panels ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v20-panels';
  wrap.innerHTML =
    '<div id="v20-load" class="v20-panel"><div class="v20-box">' +
      '<h2>🏗️ 건축 구조 하중 분석기</h2>' +
      '<p>6종 구조 요소의 하중 분포 분석</p>' +
      '<div class="v20-tabs" id="v20-ld-tabs"></div>' +
      '<canvas id="v20-ld-canvas" class="v20-canvas" width="620" height="400"></canvas>' +
      '<div id="v20-ld-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-ld-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Load.randomize()">무작위 하중</button> <button class="v20-btn-sm" onclick="v20Load.reset()">초기화</button></div>' +
      '<button class="v20-close" onclick="v20Load.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-ondol" class="v20-panel"><div class="v20-box">' +
      '<h2>🔥 전통 온돌 시스템 설계</h2>' +
      '<p>8종 온돌 유형별 열효율 분석</p>' +
      '<div class="v20-tabs" id="v20-od-tabs"></div>' +
      '<canvas id="v20-od-canvas" class="v20-canvas" width="600" height="380"></canvas>' +
      '<div id="v20-od-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-od-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Ondol.randomize()">무작위 열효율</button> <button class="v20-btn-sm" onclick="v20Ondol.reset()">초기화</button></div>' +
      '<button class="v20-close" onclick="v20Ondol.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-disaster" class="v20-panel"><div class="v20-box">' +
      '<h2>⚠️ 건축 재해 복구 플래너</h2>' +
      '<p>8종 재해의 대비/복구 전략</p>' +
      '<div class="v20-tabs" id="v20-ds-tabs"></div>' +
      '<canvas id="v20-ds-canvas" class="v20-canvas" width="620" height="380"></canvas>' +
      '<div id="v20-ds-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-ds-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Disaster.simulate()">재해 시뮬레이션</button> <button class="v20-btn-sm" onclick="v20Disaster.reset()">초기화</button></div>' +
      '<button class="v20-close" onclick="v20Disaster.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-humidity" class="v20-panel"><div class="v20-box">' +
      '<h2>💧 실내 습도 쟈적 맵</h2>' +
      '<p>8실 4계절별 습도 히트맵</p>' +
      '<canvas id="v20-hm-canvas" class="v20-canvas" width="600" height="380"></canvas>' +
      '<div id="v20-hm-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-hm-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Humidity.randomize()">무작위 습도</button> <button class="v20-btn-sm" onclick="v20Humidity.reset()">초기화</button></div>' +
      '<button class="v20-close" onclick="v20Humidity.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-aesthetic" class="v20-panel"><div class="v20-box">' +
      '<h2>🎨 건축 미학 비율 분석기</h2>' +
      '<p>8건물의 미학적 비율 비교</p>' +
      '<div class="v20-tabs" id="v20-ae-tabs"></div>' +
      '<canvas id="v20-ae-canvas" class="v20-canvas" width="620" height="400"></canvas>' +
      '<div id="v20-ae-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-ae-stat"></div>' +
      '<button class="v20-close" onclick="v20Aesthetic.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-fence" class="v20-panel"><div class="v20-box">' +
      '<h2>🏯 전통 담장 양식 가이드</h2>' +
      '<p>10종 전통 담장 비교 분석</p>' +
      '<div class="v20-tabs" id="v20-fn-tabs"></div>' +
      '<canvas id="v20-fn-canvas" class="v20-canvas" width="600" height="380"></canvas>' +
      '<div id="v20-fn-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-fn-stat"></div>' +
      '<button class="v20-close" onclick="v20Fence.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-energy" class="v20-panel"><div class="v20-box">' +
      '<h2>⚡ 건축 에너지 등급 시뮬</h2>' +
      '<p>6등급 에너지 효율 Radar 분석</p>' +
      '<div class="v20-tabs" id="v20-eg-tabs"></div>' +
      '<canvas id="v20-eg-canvas" class="v20-canvas" width="620" height="380"></canvas>' +
      '<div id="v20-eg-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-eg-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Energy.simulate()">에너지 시뮬</button> <button class="v20-btn-sm" onclick="v20Energy.reset()">초기화</button></div>' +
      '<button class="v20-close" onclick="v20Energy.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v20-compat" class="v20-panel"><div class="v20-box">' +
      '<h2>🧱 건축 자재 호환성 매트릭스</h2>' +
      '<p>8자재 x 8속성 호환성 히트맵</p>' +
      '<canvas id="v20-cm-canvas" class="v20-canvas" width="620" height="400"></canvas>' +
      '<div id="v20-cm-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-cm-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Compat.randomize()">무작위 호환성</button> <button class="v20-btn-sm" onclick="v20Compat.reset()">초기화</button></div>' +
      '<button class="v20-close" onclick="v20Compat.close()">닫기</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 2. SFX ──
var v20SFX = (function(){
  var actx;
  function ctx(){ if(!actx){try{actx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}} return actx; }
  function play(freq,type,dur,vol){
    var c=ctx(); if(!c) return;
    if(window.muted) return;
    var o=c.createOscillator(),g=c.createGain();
    o.type=type||'sine'; o.frequency.value=freq||440;
    g.gain.setValueAtTime(vol||.15,c.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,c.currentTime+(dur||.2));
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime+(dur||.2));
  }
  return {
    load_scan:function(){play(330,'triangle',.15,.12);setTimeout(function(){play(440,'triangle',.15,.12);},80);},
    load_stress:function(){play(220,'sawtooth',.25,.1);},
    ondol_fire:function(){play(180,'sawtooth',.3,.1);setTimeout(function(){play(240,'triangle',.2,.08);},100);},
    ondol_heat:function(){play(520,'sine',.15,.12);},
    disaster_warn:function(){play(200,'square',.3,.15);setTimeout(function(){play(250,'square',.2,.12);},150);},
    disaster_prep:function(){play(440,'triangle',.2,.1);},
    humidity_scan:function(){play(380,'sine',.2,.1);setTimeout(function(){play(480,'sine',.15,.1);},100);},
    aesthetic_measure:function(){play(500,'triangle',.15,.1);setTimeout(function(){play(600,'triangle',.12,.1);},80);},
    fence_select:function(){play(350,'sine',.18,.1);},
    energy_rate:function(){play(420,'triangle',.2,.12);setTimeout(function(){play(560,'triangle',.15,.1);},100);},
    compat_check:function(){play(300,'sine',.2,.1);setTimeout(function(){play(400,'sine',.15,.1);},80);},
    quiz_v20:function(){play(660,'sine',.12,.12);setTimeout(function(){play(880,'sine',.15,.12);},80);},
    quiz_wrong_v20:function(){play(200,'square',.25,.1);},
    achieve_v20:function(){play(523,'sine',.1,.12);setTimeout(function(){play(659,'sine',.1,.12);},100);setTimeout(function(){play(784,'sine',.15,.12);},200);}
  };
})();

// ── 3. Structural Load Analyzer ──
var v20Load = (function(){
  var data = [
    {name:'보(Beam)',nameK:'보(Beam)',dead:85,live:60,wind:25,snow:15,seismic:30,temp:10,desc:'수평 부재로 지붕/바닥 하중을 기둥으로 전달. 휴 모멘트와 전단력이 핵심 설계 요소.'},
    {name:'기둥(Column)',nameK:'기둥(Column)',dead:95,live:40,wind:35,snow:10,seismic:45,temp:8,desc:'수직 부재로 압축 하중 담당. 좌굴 방지가 핵심이며 재료/단면적이 중요.'},
    {name:'벽체(Wall)',nameK:'벽체(Wall)',dead:70,live:30,wind:50,snow:5,seismic:55,temp:15,desc:'수직/수평 하중 모두 저항. 내력벽은 구조 핵심으로 함부로 철거 불가.'},
    {name:'트러스(Truss)',nameK:'트러스(Truss)',dead:50,live:20,wind:40,snow:45,seismic:20,temp:12,desc:'삼각형 구조물로 지붕 하중 분산. 경량이며 넓은 공간을 기둥 없이 지탱.'},
    {name:'슬래브(Slab)',nameK:'슬래브(Slab)',dead:90,live:75,wind:10,snow:30,seismic:25,temp:18,desc:'바닥/지붕 평판 구조. 사용 하중을 직접 받아 보와 기둥에 전달.'},
    {name:'기초(Foundation)',nameK:'기초(Foundation)',dead:100,live:45,wind:20,snow:8,seismic:60,temp:5,desc:'모든 상부 하중을 지반에 전달. 지내력/침하 방지가 핵심 설계 요소.'}
  ];
  var types=['고정(Dead)','활(Live)','풍(Wind)','설(Snow)','지진(Seismic)','온도(Temp)'];
  var colors=['#c4956a','#8bc49a','#6ab0c4','#b0b0e0','#e07070','#e0c070'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-ld-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText('구조 요소별 하중 분포 (스택 바차트)',W/2,28);
    var pad=60,bw=(W-pad*2)/data.length-10,bx=pad;
    for(var i=0;i<data.length;i++){
      var d=data[i],vals=[d.dead,d.live,d.wind,d.snow,d.seismic,d.temp];
      var total=vals.reduce(function(a,b){return a+b;},0);
      var maxH=H-90,y=H-40;
      for(var j=vals.length-1;j>=0;j--){
        var h=vals[j]/total*maxH;
        ctx.fillStyle=colors[j]; ctx.globalAlpha=i===sel?1:.5;
        ctx.fillRect(bx,y-h,bw,h);
        if(h>12){ctx.fillStyle='#1a1a2e';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.fillText(vals[j],bx+bw/2,y-h/2+4);}
        ctx.fillStyle=colors[j]; y-=h;
      }
      ctx.globalAlpha=1;
      ctx.fillStyle=i===sel?'#f5deb3':'#c4956a'; ctx.font='11px sans-serif'; ctx.textAlign='center';
      ctx.fillText(d.nameK.split('(')[0],bx+bw/2,H-24);
      ctx.fillStyle='#888'; ctx.font='9px sans-serif';
      ctx.fillText(total+'kN',bx+bw/2,H-12);
      bx+=bw+10;
    }
    ctx.font='10px sans-serif'; ctx.textAlign='left';
    for(var k=0;k<types.length;k++){
      ctx.fillStyle=colors[k]; ctx.fillRect(W-170,44+k*16,10,10);
      ctx.fillText(types[k],W-155,53+k*16);
    }
    if(sel>=0&&sel<data.length){
      var info=document.getElementById('v20-ld-info');
      if(info) info.innerHTML='<b style="color:#f5deb3">'+data[sel].nameK+'</b><br>'+data[sel].desc;
      var st=document.getElementById('v20-ld-stat');
      if(st){
        var d2=data[sel],t2=d2.dead+d2.live+d2.wind+d2.snow+d2.seismic+d2.temp;
        var grade=t2>350?'S':t2>280?'A':t2>200?'B':t2>130?'C':'D';
        st.innerHTML='<div class="s"><div class="sv">'+t2+'kN</div><div class="sl">총 하중</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">구조 등급</div></div><div class="s"><div class="sv">'+Math.round(d2.dead/t2*100)+'%</div><div class="sl">고정하중비</div></div>';
      }
    }
  }
  function init(){
    var tabs=document.getElementById('v20-ld-tabs'); if(!tabs) return;
    tabs.innerHTML=''; data.forEach(function(d,i){
      var b=document.createElement('button'); b.className='v20-tab'+(i===sel?' active':'');
      b.textContent=d.nameK.split('(')[0]; b.onclick=function(){sel=i;init();v20SFX.load_scan();};
      tabs.appendChild(b);
    }); draw();
    var c=document.getElementById('v20-ld-canvas');
    if(c&&!c.__v20click){c.__v20click=true;c.addEventListener('click',function(e){
      var rect=c.getBoundingClientRect(),x=(e.clientX-rect.left)*(c.width/rect.width);
      var pad=60,bw=(c.width-pad*2)/data.length-10,idx=Math.floor((x-pad)/(bw+10));
      if(idx>=0&&idx<data.length){sel=idx;init();v20SFX.load_scan();}
    });}
  }
  return {
    open:function(){document.getElementById('v20-load').classList.add('active');init();v20SFX.load_scan();},
    close:function(){document.getElementById('v20-load').classList.remove('active');},
    randomize:function(){data.forEach(function(d){d.dead=50+Math.floor(Math.random()*60);d.live=20+Math.floor(Math.random()*60);d.wind=10+Math.floor(Math.random()*50);d.snow=5+Math.floor(Math.random()*45);d.seismic=10+Math.floor(Math.random()*55);d.temp=5+Math.floor(Math.random()*20);});draw();v20SFX.load_stress();},
    reset:function(){data[0].dead=85;data[0].live=60;data[0].wind=25;data[0].snow=15;data[0].seismic=30;data[0].temp=10;data[1].dead=95;data[1].live=40;data[1].wind=35;data[1].snow=10;data[1].seismic=45;data[1].temp=8;data[2].dead=70;data[2].live=30;data[2].wind=50;data[2].snow=5;data[2].seismic=55;data[2].temp=15;data[3].dead=50;data[3].live=20;data[3].wind=40;data[3].snow=45;data[3].seismic=20;data[3].temp=12;data[4].dead=90;data[4].live=75;data[4].wind=10;data[4].snow=30;data[4].seismic=25;data[4].temp=18;data[5].dead=100;data[5].live=45;data[5].wind=20;data[5].snow=8;data[5].seismic=60;data[5].temp=5;draw();v20SFX.load_scan();}
  };
})();

// ── 4. Traditional Ondol System Design ──
var v20Ondol = (function(){
  var types=[
    {name:'전통 아궁이(굴뜻)',nameK:'전통 아궁이(굴뚝)',axes:[90,60,40,85,95,70],desc:'아궁이에서 불을 피우고 굴뜻으로 연기를 배출. 부넬머이라 불리며 바닥 전체에 고른 열을 전달.'},
    {name:'개량 온돌',nameK:'개량 온돌',axes:[75,70,60,70,80,65],desc:'전통 온돌의 원리를 보존하면서 내열성 향상. 콘크리트 바닥과 단열재를 조합.'},
    {name:'온수 바닥난방',nameK:'온수 바닥난방',axes:[60,85,80,50,60,90],desc:'보일러로 데운 물을 바닥 배관으로 순환. 현대 아파트의 표준 난방방식.'},
    {name:'전기 필름 난방',nameK:'전기 필름 난방',axes:[45,80,90,30,40,85],desc:'전기 저항 필름을 바닥에 설치. 정밀 온도 제어가 가능하나 전기세가 높을 수 있음.'},
    {name:'지열 히트펌프',nameK:'지열 히트펌프',axes:[55,90,95,65,50,80],desc:'지하 열을 이용한 고효율 난방. 초기 투자 비용이 높으나 운영비 절감 효과 탁월.'},
    {name:'황토 축열 온돌',nameK:'황토 축열 온돌',axes:[80,55,45,90,90,55],desc:'황토 바닥이 열을 축적했다가 서서히 방출. 원적외선 효과와 항균 작용이 있음.'},
    {name:'태양열 온수',nameK:'태양열 온수',axes:[40,95,85,60,55,75],desc:'태양에너지로 물을 데워 바닥난방에 사용. 친환경적이나 날씨/계절 의존성.'},
    {name:'구들장 복사 온돌',nameK:'구들장 복사 온돌',axes:[85,50,35,92,98,60],desc:'넓은 구들장 돌이 복사열을 방출. 한번 달구면 24시간 이상 따뜻함을 유지.'}
  ];
  var axisLabels=['열효율','친환경','정밀제어','축열성','전통성','비용효율'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-od-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var cx=W/2,cy=H/2+10,r=130,n=6;
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+i*2*Math.PI/n;
        var rr=r*ring/5;
        ctx[i?'lineTo':'moveTo'](cx+rr*Math.cos(a),cy+rr*Math.sin(a));
      }
      ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.12)+')';ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+i*2*Math.PI/n;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
      ctx.strokeStyle='rgba(196,149,106,.15)';ctx.stroke();
      var lx=cx+(r+20)*Math.cos(a),ly=cy+(r+20)*Math.sin(a);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axisLabels[i],lx,ly);
    }
    var t=types[sel];
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var idx=i%n,a=-Math.PI/2+idx*2*Math.PI/n;
      var rr=r*t.axes[idx]/100;
      ctx[i?'lineTo':'moveTo'](cx+rr*Math.cos(a),cy+rr*Math.sin(a));
    }
    ctx.fillStyle='rgba(196,149,106,.25)';ctx.fill();
    ctx.strokeStyle='#c4956a';ctx.lineWidth=2;ctx.stroke();ctx.lineWidth=1;
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+i*2*Math.PI/n;
      var rr=r*t.axes[i]/100;
      ctx.beginPath();ctx.arc(cx+rr*Math.cos(a),cy+rr*Math.sin(a),4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText(t.nameK,W/2,24);
    var info=document.getElementById('v20-od-info');
    if(info) info.innerHTML=t.desc;
    var avg=Math.round(t.axes.reduce(function(a,b){return a+b;},0)/n);
    var grade=avg>=80?'S':avg>=65?'A':avg>=50?'B':avg>=35?'C':'D';
    var st=document.getElementById('v20-od-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균 효율</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">종합 등급</div></div><div class="s"><div class="sv">'+Math.max.apply(null,t.axes)+'</div><div class="sl">최고치</div></div>';
  }
  function init(){
    var tabs=document.getElementById('v20-od-tabs'); if(!tabs) return;
    tabs.innerHTML=''; types.forEach(function(t,i){
      var b=document.createElement('button'); b.className='v20-tab'+(i===sel?' active':'');
      b.textContent=t.nameK.split('(')[0].substring(0,6); b.onclick=function(){sel=i;init();v20SFX.ondol_fire();};
      tabs.appendChild(b);
    }); draw();
  }
  return {
    open:function(){document.getElementById('v20-ondol').classList.add('active');init();v20SFX.ondol_fire();},
    close:function(){document.getElementById('v20-ondol').classList.remove('active');},
    randomize:function(){types.forEach(function(t){for(var i=0;i<6;i++)t.axes[i]=30+Math.floor(Math.random()*70);});draw();v20SFX.ondol_heat();},
    reset:function(){types[0].axes=[90,60,40,85,95,70];types[1].axes=[75,70,60,70,80,65];types[2].axes=[60,85,80,50,60,90];types[3].axes=[45,80,90,30,40,85];types[4].axes=[55,90,95,65,50,80];types[5].axes=[80,55,45,90,90,55];types[6].axes=[40,95,85,60,55,75];types[7].axes=[85,50,35,92,98,60];draw();v20SFX.ondol_fire();}
  };
})();

// ── 5. Disaster Recovery Planner ──
var v20Disaster = (function(){
  var disasters=[
    {name:'지진',nameK:'지진',prep:75,response:60,recovery:50,cost:90,time:85,risk:80,tip:'내진설계 기준 준수, 보강 점검'},
    {name:'홍수',nameK:'홍수',prep:65,response:70,recovery:60,cost:70,time:75,risk:70,tip:'배수 시스템 점검, 방수벽 설치'},
    {name:'태풍',nameK:'태풍',prep:70,response:65,recovery:55,cost:65,time:70,risk:75,tip:'지붕/창호 보강, 방풍림 조성'},
    {name:'화재',nameK:'화재',prep:80,response:90,recovery:45,cost:85,time:60,risk:85,tip:'방화 자재 사용, 스프링클러 설치'},
    {name:'산사태',nameK:'산사태',prep:55,response:50,recovery:70,cost:80,time:90,risk:65,tip:'옥벽 보강, 배수로 정비'},
    {name:'동파',nameK:'동파',prep:60,response:40,recovery:30,cost:40,time:35,risk:50,tip:'배관 보온재 설치, 동파방지 히터'},
    {name:'침하',nameK:'침하',prep:50,response:35,recovery:80,cost:95,time:95,risk:60,tip:'기초 보강, 그라우팅 공법'},
    {name:'낙뢰',nameK:'낙뢰',prep:45,response:55,recovery:25,cost:35,time:30,risk:55,tip:'피뢰침 설치, 서지보호기(SPD)'}
  ];
  var metrics=['대비도','대응력','복구기간','비용','소요시간','위험도'];
  var mColors=['#8bc49a','#6ab0c4','#e0c070','#e07070','#b0b0e0','#c4956a'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-ds-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('재해별 대비/복구 지표',W/2,24);
    var d=disasters[sel],vals=[d.prep,d.response,d.recovery,d.cost,d.time,d.risk];
    var bh=30,pad=70,maxW=W-pad-120;
    for(var i=0;i<vals.length;i++){
      var y=50+i*(bh+12);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='right';
      ctx.fillText(metrics[i],pad-8,y+bh/2+4);
      ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(pad,y,maxW,bh);
      var w=vals[i]/100*maxW;
      ctx.fillStyle=mColors[i]; ctx.fillRect(pad,y,w,bh);
      ctx.fillStyle='#1a1a2e';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
      if(w>30) ctx.fillText(vals[i]+'%',pad+w/2,y+bh/2+4);
    }
    ctx.fillStyle='#e8d5c0';ctx.font='12px sans-serif';ctx.textAlign='left';
    ctx.fillText('팁: '+d.tip,pad,H-16);
    var info=document.getElementById('v20-ds-info');
    if(info) info.innerHTML='<b style="color:#f5deb3">'+d.nameK+' 복구 전략</b><br>대비도: '+d.prep+'% | 대응력: '+d.response+'% | 위험도: '+d.risk+'%';
    var avg=Math.round(vals.reduce(function(a,b){return a+b;},0)/vals.length);
    var grade=avg>=75?'S':avg>=60?'A':avg>=45?'B':avg>=30?'C':'D';
    var st=document.getElementById('v20-ds-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+d.nameK+'</div><div class="sl">재해 유형</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">종합 등급</div></div><div class="s"><div class="sv">'+avg+'%</div><div class="sl">평균 지표</div></div>';
  }
  function init(){
    var tabs=document.getElementById('v20-ds-tabs'); if(!tabs) return;
    tabs.innerHTML=''; disasters.forEach(function(d,i){
      var b=document.createElement('button'); b.className='v20-tab'+(i===sel?' active':'');
      b.textContent=d.nameK; b.onclick=function(){sel=i;init();v20SFX.disaster_warn();};
      tabs.appendChild(b);
    }); draw();
  }
  return {
    open:function(){document.getElementById('v20-disaster').classList.add('active');init();v20SFX.disaster_warn();},
    close:function(){document.getElementById('v20-disaster').classList.remove('active');},
    simulate:function(){disasters.forEach(function(d){d.prep=30+Math.floor(Math.random()*60);d.response=25+Math.floor(Math.random()*65);d.recovery=20+Math.floor(Math.random()*70);d.cost=30+Math.floor(Math.random()*65);d.time=25+Math.floor(Math.random()*70);d.risk=35+Math.floor(Math.random()*55);});draw();v20SFX.disaster_prep();},
    reset:function(){disasters[0].prep=75;disasters[0].response=60;disasters[0].recovery=50;disasters[0].cost=90;disasters[0].time=85;disasters[0].risk=80;disasters[1].prep=65;disasters[1].response=70;disasters[1].recovery=60;disasters[1].cost=70;disasters[1].time=75;disasters[1].risk=70;disasters[2].prep=70;disasters[2].response=65;disasters[2].recovery=55;disasters[2].cost=65;disasters[2].time=70;disasters[2].risk=75;disasters[3].prep=80;disasters[3].response=90;disasters[3].recovery=45;disasters[3].cost=85;disasters[3].time=60;disasters[3].risk=85;disasters[4].prep=55;disasters[4].response=50;disasters[4].recovery=70;disasters[4].cost=80;disasters[4].time=90;disasters[4].risk=65;disasters[5].prep=60;disasters[5].response=40;disasters[5].recovery=30;disasters[5].cost=40;disasters[5].time=35;disasters[5].risk=50;disasters[6].prep=50;disasters[6].response=35;disasters[6].recovery=80;disasters[6].cost=95;disasters[6].time=95;disasters[6].risk=60;disasters[7].prep=45;disasters[7].response=55;disasters[7].recovery=25;disasters[7].cost=35;disasters[7].time=30;disasters[7].risk=55;draw();v20SFX.disaster_warn();}
  };
})();

// ── 6. Indoor Humidity Comfort Map ──
var v20Humidity = (function(){
  var rooms=['거실','침실','주방','욕실','서재','다용도','다락','창고'];
  var seasons=['봄','여름','가을','겨울'];
  var vals=[[48,65,45,32],[50,70,42,28],[55,80,50,35],[60,85,55,40],[45,60,40,30],[42,55,38,25],[38,50,35,22],[35,45,32,20]];
  function draw(){
    var c=document.getElementById('v20-hm-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('실내 습도 쟈적 히트맵 (8실 x 4계절)',W/2,24);
    var padL=70,padT=50,cw=(W-padL-30)/seasons.length,ch=(H-padT-50)/rooms.length;
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';
    for(var j=0;j<seasons.length;j++){
      ctx.fillText(seasons[j],padL+j*cw+cw/2,padT-8);
    }
    ctx.textAlign='right';
    for(var i=0;i<rooms.length;i++){
      ctx.fillText(rooms[i],padL-8,padT+i*ch+ch/2+4);
    }
    ctx.textAlign='center';
    for(var i=0;i<rooms.length;i++){
      for(var j=0;j<seasons.length;j++){
        var v=vals[i][j];
        var r,g,b;
        if(v<40){r=100;g=150;b=220;}
        else if(v<50){r=80;g=180;b=120;}
        else if(v<60){r=200;g=180;b=60;}
        else if(v<70){r=220;g=130;b=50;}
        else{r=200;g=60;b=60;}
        ctx.fillStyle='rgba('+r+','+g+','+b+',.85)';
        ctx.fillRect(padL+j*cw+2,padT+i*ch+2,cw-4,ch-4);
        ctx.fillStyle='#fff';ctx.font='bold 12px sans-serif';
        ctx.fillText(v+'%',padL+j*cw+cw/2,padT+i*ch+ch/2+4);
      }
    }
    ctx.font='10px sans-serif';ctx.textAlign='left';
    var legend=[{c:'rgba(100,150,220,.85)',l:'<40% 건조'},{c:'rgba(80,180,120,.85)',l:'40-50% 쟈적'},{c:'rgba(200,180,60,.85)',l:'50-60% 보통'},{c:'rgba(220,130,50,.85)',l:'60-70% 습함'},{c:'rgba(200,60,60,.85)',l:'>70% 과습'}];
    for(var k=0;k<legend.length;k++){
      ctx.fillStyle=legend[k].c;ctx.fillRect(padL+k*100,H-20,12,12);
      ctx.fillStyle='#c4956a';ctx.fillText(legend[k].l,padL+k*100+16,H-10);
    }
    var totalOk=0,totalBad=0;
    for(var i=0;i<rooms.length;i++) for(var j=0;j<seasons.length;j++){ if(vals[i][j]>=40&&vals[i][j]<=55) totalOk++; else totalBad++; }
    var info=document.getElementById('v20-hm-info');
    if(info) info.innerHTML='쟈적 구간(40-55%): <b>'+totalOk+'</b>곳 | 부적합: <b>'+totalBad+'</b>곳 | 총 32측정점';
    var st=document.getElementById('v20-hm-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+totalOk+'</div><div class="sl">쟈적 구간</div></div><div class="s"><div class="sv">'+totalBad+'</div><div class="sl">부적합</div></div><div class="s"><div class="sv">'+Math.round(totalOk/32*100)+'%</div><div class="sl">쟈적률</div></div>';
  }
  return {
    open:function(){document.getElementById('v20-humidity').classList.add('active');draw();v20SFX.humidity_scan();},
    close:function(){document.getElementById('v20-humidity').classList.remove('active');},
    randomize:function(){for(var i=0;i<8;i++) for(var j=0;j<4;j++) vals[i][j]=20+Math.floor(Math.random()*65);draw();v20SFX.humidity_scan();},
    reset:function(){vals=[[48,65,45,32],[50,70,42,28],[55,80,50,35],[60,85,55,40],[45,60,40,30],[42,55,38,25],[38,50,35,22],[35,45,32,20]];draw();v20SFX.humidity_scan();}
  };
})();

// ── 7. Architectural Aesthetics Ratio Analyzer ──
var v20Aesthetic = (function(){
  var buildings=[
    {name:'불국사 무량수전',nameK:'불국사 무량수전',ratios:[92,88,95,90,85,80],desc:'신라 황금기 건축. 황금비(1.618)에 근접한 정면 비율. 뮨듈러 설계의 정수.'},
    {name:'부석사 무장수전',nameK:'부석사 무장수전',ratios:[95,90,88,92,90,82],desc:'고려 초기 목조건축의 걸작. 배흡림 기둥과 팔작지붕의 미학.'},
    {name:'창덕궁 인정전',nameK:'창덕궁 인정전',ratios:[88,92,90,85,95,88],desc:'조선 궁궐 건축. 자연 지형과 조화로운 배치. 유네스코 세계유산.'},
    {name:'안동 하회마을 한옥',nameK:'안동 하회마을 한옥',ratios:[82,78,85,88,92,75],desc:'전통 민가 한옥. 풍수지리에 따른 자연친화적 배치.'},
    {name:'종묘',nameK:'종묘',ratios:[85,95,92,80,88,90],desc:'조선 왕실 사당. 수평 반복의 장엄한 미학. 세계유산.'},
    {name:'경복궁 근정전',nameK:'경복궁 근정전',ratios:[90,85,88,92,90,95],desc:'조선 정궁 정전. 이중 기단의 위엄. 단청의 화려함.'},
    {name:'서원 대성전',nameK:'서원 대성전',ratios:[78,82,80,75,85,72],desc:'유교 교육기관. 절제된 장식. 학문적 기품의 건축미.'},
    {name:'현대 한옥 호텔',nameK:'현대 한옥 호텔',ratios:[80,88,90,82,78,85],desc:'전통과 현대의 융합. 철골 구조에 전통 지붕. 신한옥의 미학.'}
  ];
  var axes=['황금비','비례감','균형미','전통성','조화미','장식미'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-ae-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('건축 미학 비율 분석',W/2,24);
    var bd=buildings[sel];
    var padL=100,padT=50,bh=32,maxW=W-padL-60;
    for(var i=0;i<axes.length;i++){
      var y=padT+i*(bh+14);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='right';
      ctx.fillText(axes[i],padL-8,y+bh/2+4);
      ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(padL,y,maxW,bh);
      var w=bd.ratios[i]/100*maxW;
      var hue=bd.ratios[i]>=85?'rgba(139,196,154,.85)':bd.ratios[i]>=70?'rgba(196,149,106,.85)':'rgba(224,112,112,.85)';
      ctx.fillStyle=hue; ctx.fillRect(padL,y,w,bh);
      ctx.fillStyle='#1a1a2e';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
      if(w>30) ctx.fillText(bd.ratios[i],padL+w/2,y+bh/2+4);
    }
    var info=document.getElementById('v20-ae-info');
    if(info) info.innerHTML='<b style="color:#f5deb3">'+bd.nameK+'</b><br>'+bd.desc;
    var avg=Math.round(bd.ratios.reduce(function(a,b){return a+b;},0)/bd.ratios.length);
    var grade=avg>=90?'S':avg>=82?'A':avg>=72?'B':avg>=60?'C':'D';
    var st=document.getElementById('v20-ae-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균 미학점</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">미학 등급</div></div><div class="s"><div class="sv">'+Math.max.apply(null,bd.ratios)+'</div><div class="sl">최고 점수</div></div>';
  }
  function init(){
    var tabs=document.getElementById('v20-ae-tabs'); if(!tabs) return;
    tabs.innerHTML=''; buildings.forEach(function(b,i){
      var btn=document.createElement('button'); btn.className='v20-tab'+(i===sel?' active':'');
      btn.textContent=b.nameK.split(' ')[0]; btn.onclick=function(){sel=i;init();v20SFX.aesthetic_measure();};
      tabs.appendChild(btn);
    }); draw();
  }
  return {
    open:function(){document.getElementById('v20-aesthetic').classList.add('active');init();v20SFX.aesthetic_measure();},
    close:function(){document.getElementById('v20-aesthetic').classList.remove('active');}
  };
})();

// ── 8. Traditional Fence Style Guide ──
var v20Fence = (function(){
  var fences=[
    {name:'토담',nameK:'토담',scores:[85,70,60,90,95,65],desc:'황토를 다져 쌓은 담장. 통기성이 좋고 친환경적. 비에 약할 수 있음.'},
    {name:'돌담',nameK:'돌담',scores:[92,85,80,75,90,80],desc:'자연석을 쌓아 만든 담장. 내구성이 뛰어나고 자연미가 풍부.'},
    {name:'기와담',nameK:'기와담',scores:[88,90,85,80,88,90],desc:'지붕 기와로 장식한 고급 담장. 궁궐/사찰에서 주로 사용.'},
    {name:'꽃담',nameK:'꽃담',scores:[70,65,55,85,92,85],desc:'벽돌 사이에 꽃무늬 문양을 넣은 장식 담장. 창덕궁 냉선재로 유명.'},
    {name:'사고석담',nameK:'사고석담',scores:[90,92,88,70,85,75],desc:'규격화된 사각 돌을 쌓은 담장. 관청/부유층 저택에 사용.'},
    {name:'대나무 울타리',nameK:'대나무 울타리',scores:[60,50,45,88,80,70],desc:'대나무를 엮어 만든 울타리. 경량이고 친환경적이나 내구성 부족.'},
    {name:'판방담',nameK:'판방담',scores:[75,78,70,65,75,68],desc:'목재 판을 세워 만든 담장. 시골 민가에서 흔히 사용.'},
    {name:'하인방담',nameK:'하인방담',scores:[80,82,75,72,78,72],desc:'하부는 돌, 상부는 황토로 쌓은 복합 담장. 구조적 안정성 확보.'},
    {name:'수막새벽',nameK:'수막새벽',scores:[82,88,80,78,82,88],desc:'한옥 외벽에 수막새 문양을 넣은 장식벽. 궁궐과 사찰에 사용.'},
    {name:'내외담',nameK:'내외담',scores:[68,60,50,82,88,60],desc:'내부 공간을 구분하는 낮은 담. 시선을 가리면서도 통풍 허용.'}
  ];
  var axes=['내구성','방어력','방수성','미관','전통성','장식성'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-fn-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('전통 담장 양식 비교',W/2,24);
    var f=fences[sel];
    var padL=80,padT=48,bh=28,maxW=W-padL-50;
    for(var i=0;i<axes.length;i++){
      var y=padT+i*(bh+14);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='right';
      ctx.fillText(axes[i],padL-8,y+bh/2+4);
      ctx.fillStyle='rgba(255,255,255,.06)';ctx.fillRect(padL,y,maxW,bh);
      var w=f.scores[i]/100*maxW;
      var hue=f.scores[i]>=85?'rgba(139,196,154,.85)':f.scores[i]>=65?'rgba(196,149,106,.85)':'rgba(224,180,60,.85)';
      ctx.fillStyle=hue; ctx.fillRect(padL,y,w,bh);
      ctx.fillStyle='#1a1a2e';ctx.font='bold 11px sans-serif';ctx.textAlign='center';
      if(w>25) ctx.fillText(f.scores[i],padL+w/2,y+bh/2+4);
    }
    var info=document.getElementById('v20-fn-info');
    if(info) info.innerHTML='<b style="color:#f5deb3">'+f.nameK+'</b><br>'+f.desc;
    var avg=Math.round(f.scores.reduce(function(a,b){return a+b;},0)/f.scores.length);
    var grade=avg>=85?'S':avg>=75?'A':avg>=65?'B':avg>=50?'C':'D';
    var st=document.getElementById('v20-fn-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균 점수</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">종합 등급</div></div>';
  }
  function init(){
    var tabs=document.getElementById('v20-fn-tabs'); if(!tabs) return;
    tabs.innerHTML=''; fences.forEach(function(f,i){
      var b=document.createElement('button'); b.className='v20-tab'+(i===sel?' active':'');
      b.textContent=f.nameK; b.onclick=function(){sel=i;init();v20SFX.fence_select();};
      tabs.appendChild(b);
    }); draw();
  }
  return {
    open:function(){document.getElementById('v20-fence').classList.add('active');init();v20SFX.fence_select();},
    close:function(){document.getElementById('v20-fence').classList.remove('active');}
  };
})();

// ── 9. Building Energy Rating Simulator ──
var v20Energy = (function(){
  var ratings=[
    {name:'1+등급',nameK:'1+등급',axes:[98,95,97,96,94,99],desc:'최고 에너지 효율. 제로에너지(ZEB) 수준. 연간 에너지 소비 60kWh/m늲 미만.'},
    {name:'1등급',nameK:'1등급',axes:[90,85,92,88,86,90],desc:'우수 에너지 효율. 패시브하우스 수준. 120kWh/m늲 미만.'},
    {name:'2등급',nameK:'2등급',axes:[78,72,80,75,74,78],desc:'양호한 에너지 효율. 일반 신축 기준. 180kWh/m늲 미만.'},
    {name:'3등급',nameK:'3등급',axes:[65,60,68,62,60,65],desc:'보통 에너지 효율. 기존 건물 평균 수준. 240kWh/m늲 미만.'},
    {name:'4등급',nameK:'4등급',axes:[50,45,55,48,46,50],desc:'미흡 에너지 효율. 개보수 필요. 300kWh/m늲 미만.'},
    {name:'5등급',nameK:'5등급',axes:[35,30,40,32,30,35],desc:'불량 에너지 효율. 시급 개보수 필요. 300kWh/m늲 이상.'}
  ];
  var axisLabels=['단열성능','기밀성','냉난방효율','조명효율','신재생에너지','총 효율'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-eg-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    var cx=W/2,cy=H/2+10,r=120,n=6;
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+i*2*Math.PI/n;
        ctx[i?'lineTo':'moveTo'](cx+r*ring/5*Math.cos(a),cy+r*ring/5*Math.sin(a));
      }
      ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.12)+')';ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+i*2*Math.PI/n;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));
      ctx.strokeStyle='rgba(196,149,106,.15)';ctx.stroke();
      var lx=cx+(r+22)*Math.cos(a),ly=cy+(r+22)*Math.sin(a);
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axisLabels[i],lx,ly);
    }
    var rt=ratings[sel];
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var idx=i%n,a=-Math.PI/2+idx*2*Math.PI/n;
      var rr=r*rt.axes[idx]/100;
      ctx[i?'lineTo':'moveTo'](cx+rr*Math.cos(a),cy+rr*Math.sin(a));
    }
    var fillColor=sel<=1?'rgba(80,180,120,.25)':sel<=2?'rgba(196,149,106,.25)':sel<=3?'rgba(220,180,60,.25)':'rgba(220,80,80,.25)';
    ctx.fillStyle=fillColor;ctx.fill();
    var strokeColor=sel<=1?'#50b478':sel<=2?'#c4956a':sel<=3?'#dcb43c':'#dc5050';
    ctx.strokeStyle=strokeColor;ctx.lineWidth=2;ctx.stroke();ctx.lineWidth=1;
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+i*2*Math.PI/n;
      var rr=r*rt.axes[i]/100;
      ctx.beginPath();ctx.arc(cx+rr*Math.cos(a),cy+rr*Math.sin(a),4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('에너지 효율 등급: '+rt.nameK,W/2,24);
    var info=document.getElementById('v20-eg-info');
    if(info) info.innerHTML=rt.desc;
    var avg=Math.round(rt.axes.reduce(function(a,b){return a+b;},0)/n);
    var st=document.getElementById('v20-eg-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+rt.nameK+'</div><div class="sl">에너지 등급</div></div><div class="s"><div class="sv">'+avg+'</div><div class="sl">평균 효율</div></div><div class="s"><div class="sv">'+Math.min.apply(null,rt.axes)+'</div><div class="sl">최약점</div></div>';
  }
  function init(){
    var tabs=document.getElementById('v20-eg-tabs'); if(!tabs) return;
    tabs.innerHTML=''; ratings.forEach(function(r,i){
      var b=document.createElement('button'); b.className='v20-tab'+(i===sel?' active':'');
      b.textContent=r.nameK; b.onclick=function(){sel=i;init();v20SFX.energy_rate();};
      tabs.appendChild(b);
    }); draw();
  }
  return {
    open:function(){document.getElementById('v20-energy').classList.add('active');init();v20SFX.energy_rate();},
    close:function(){document.getElementById('v20-energy').classList.remove('active');},
    simulate:function(){ratings.forEach(function(r){for(var i=0;i<6;i++)r.axes[i]=Math.max(10,Math.min(100,r.axes[i]+Math.floor(Math.random()*30)-15));});draw();v20SFX.energy_rate();},
    reset:function(){ratings[0].axes=[98,95,97,96,94,99];ratings[1].axes=[90,85,92,88,86,90];ratings[2].axes=[78,72,80,75,74,78];ratings[3].axes=[65,60,68,62,60,65];ratings[4].axes=[50,45,55,48,46,50];ratings[5].axes=[35,30,40,32,30,35];draw();v20SFX.energy_rate();}
  };
})();

// ── 10. Material Compatibility Matrix ──
var v20Compat = (function(){
  var materials=['목재','석재','철재','콘크리트','점토','황토','유리','단열재'];
  var props=['구조성','내열성','방수성','미관','친환경','비용','시공성','내구성'];
  var matrix=[
    [70,40,30,90,95,75,80,50],
    [95,60,85,80,70,50,60,90],
    [98,30,70,50,20,40,70,95],
    [90,50,80,55,30,60,85,88],
    [60,80,75,85,90,80,50,70],
    [50,85,60,80,95,90,45,55],
    [30,55,90,95,60,35,75,40],
    [20,95,85,40,70,55,65,60]
  ];
  function draw(){
    var c=document.getElementById('v20-cm-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('건축 자재 호환성 매트릭스 (8x8)',W/2,24);
    var padL=80,padT=55,cw=(W-padL-20)/props.length,ch=(H-padT-40)/materials.length;
    ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='center';
    for(var j=0;j<props.length;j++){
      ctx.save();ctx.translate(padL+j*cw+cw/2,padT-6);ctx.rotate(-0.3);
      ctx.fillText(props[j],0,0);ctx.restore();
    }
    ctx.textAlign='right';
    for(var i=0;i<materials.length;i++){
      ctx.fillText(materials[i],padL-6,padT+i*ch+ch/2+4);
    }
    ctx.textAlign='center';
    for(var i=0;i<materials.length;i++){
      for(var j=0;j<props.length;j++){
        var v=matrix[i][j];
        var r,g,b;
        if(v>=80){r=80;g=180;b=120;}
        else if(v>=60){r=140;g=180;b=100;}
        else if(v>=40){r=200;g=180;b=60;}
        else{r=200;g=80;b=80;}
        ctx.fillStyle='rgba('+r+','+g+','+b+',.8)';
        ctx.fillRect(padL+j*cw+1,padT+i*ch+1,cw-2,ch-2);
        ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';
        ctx.fillText(v,padL+j*cw+cw/2,padT+i*ch+ch/2+4);
      }
    }
    var total=0,cnt=0,best=0,bestN='';
    for(var i=0;i<materials.length;i++){
      var sum=0;
      for(var j=0;j<props.length;j++){sum+=matrix[i][j];total+=matrix[i][j];cnt++;}
      if(sum>best){best=sum;bestN=materials[i];}
    }
    var info=document.getElementById('v20-cm-info');
    if(info) info.innerHTML='최고 호환성 자재: <b style="color:#f5deb3">'+bestN+'</b> (총점 '+best+') | 전체 평균: '+Math.round(total/cnt);
    var st=document.getElementById('v20-cm-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+bestN+'</div><div class="sl">최고 호환</div></div><div class="s"><div class="sv">'+Math.round(total/cnt)+'</div><div class="sl">전체 평균</div></div><div class="s"><div class="sv">64</div><div class="sl">측정점</div></div>';
  }
  return {
    open:function(){document.getElementById('v20-compat').classList.add('active');draw();v20SFX.compat_check();},
    close:function(){document.getElementById('v20-compat').classList.remove('active');},
    randomize:function(){for(var i=0;i<8;i++) for(var j=0;j<8;j++) matrix[i][j]=15+Math.floor(Math.random()*80);draw();v20SFX.compat_check();},
    reset:function(){matrix=[[70,40,30,90,95,75,80,50],[95,60,85,80,70,50,60,90],[98,30,70,50,20,40,70,95],[90,50,80,55,30,60,85,88],[60,80,75,85,90,80,50,70],[50,85,60,80,95,90,45,55],[30,55,90,95,60,35,75,40],[20,95,85,40,70,55,65,60]];draw();v20SFX.compat_check();}
  };
})();

// ── 11. Quiz v20 (+15, 225->240) ──
var v20Quiz = (function(){
  var questions = [
    {q:'건축물에 작용하는 하중 중 건물 자체의 무게를 뭐라 하는가?',a:['고정하중','활하중','풍하중','지진하중'],c:0},
    {q:'온돌의 열원으로 불을 피우는 곳은?',a:['굴뜻','아궁이','구들장','부넬머이'],c:1},
    {q:'건축물 에너지 효율 최고 등급은?',a:['A등급','1등급','1+등급','S등급'],c:2},
    {q:'황토를 다져 쌓은 전통 담장을 뭐라 하는가?',a:['돌담','기와담','토담','판방담'],c:2},
    {q:'제로에너지빌딩(ZEB)의 연간 에너지 소비 기준은?',a:['120kWh/m늲','60kWh/m늲','180kWh/m늲','240kWh/m늲'],c:1},
    {q:'건축물에서 열이 빠져나가는 부위를 뭐라 하는가?',a:['열도','열교','열구','열점'],c:1},
    {q:'창덕궁 냉선재의 담장은 어떤 양식인가?',a:['토담','꽃담','사고석담','내외담'],c:1},
    {q:'실내 쟈적 습도 범위는 일반적으로?',a:['20-30%','40-60%','70-80%','10-20%'],c:1},
    {q:'구들장 복사 온돌의 특징은?',a:['빠른 가열','24시간 축열','전기 사용','저비용'],c:1},
    {q:'건축 구조에서 수직 부재의 좌굴 방지가 중요한 것은?',a:['보','기둥','슬래브','트러스'],c:1},
    {q:'건축물 지진 대비에서 가장 중요한 것은?',a:['외벽 도장','내진 설계','조경 설치','방수 공사'],c:1},
    {q:'패시브하우스의 연간 에너지 소비 기준은?',a:['120kWh/m늲 미만','240kWh/m늲 미만','60kWh/m늲 미만','300kWh/m늲 미만'],c:0},
    {q:'번와장(번와장인)은 어떤 작업을 하는 장인인가?',a:['기와 제작','단청 작업','석조 작업','목공 작업'],c:0},
    {q:'미장이는 어떤 작업을 담당하는 장인인가?',a:['벽체 회반죽','목재 가공','기와 선별','단청 문양'],c:0},
    {q:'지열 히트펌프 난방의 장점은?',a:['저렴한 설치비','높은 운영 효율','간단한 유지보수','빠른 설치'],c:1}
  ];
  return {
    inject:function(){
      if(!window.quizQuestions||!Array.isArray(window.quizQuestions)) return;
      questions.forEach(function(q){
        var exists=window.quizQuestions.some(function(eq){return eq.q===q.q;});
        if(!exists) window.quizQuestions.push(q);
      });
    }
  };
})();

// ── 12. Achievements (+12, 206->218) ──
var v20Achieve = (function(){
  var achieves=[
    {id:'v20_load_analyst',name:'구조 분석가',desc:'구조 하중 분석기 열기'},
    {id:'v20_ondol_master',name:'온돌 마스터',desc:'온돌 시스템 설계 열기'},
    {id:'v20_disaster_planner',name:'재해 플래너',desc:'재해 복구 플래너 열기'},
    {id:'v20_humidity_expert',name:'습도 전문가',desc:'습도 쟈적 맵 열기'},
    {id:'v20_aesthetic_critic',name:'미학 비평가',desc:'미학 비율 분석기 열기'},
    {id:'v20_fence_scholar',name:'담장 학자',desc:'담장 양식 가이드 열기'},
    {id:'v20_energy_inspector',name:'에너지 검사관',desc:'에너지 등급 시뮬 열기'},
    {id:'v20_compat_engineer',name:'자재 엔지니어',desc:'자재 호환성 매트릭스 열기'},
    {id:'v20_quiz_master',name:'v20 퀴즈 마스터',desc:'v20 퀴즈 전문 클리어'},
    {id:'v20_all_sections',name:'v20 전체 탐험',desc:'v20 8개 섹션 모두 열기'},
    {id:'v20_explorer',name:'v20 탐험가',desc:'v20 5개 이상 섹션 열기'},
    {id:'v20_complete',name:'v20 컴플리트',desc:'v20 모든 콘텐츠 완료'}
  ];
  var opened={};
  function save(){try{localStorage.setItem('hb_v20_achieve',JSON.stringify(opened));}catch(e){}}
  function load(){try{var d=JSON.parse(localStorage.getItem('hb_v20_achieve')||'{}');opened=d;}catch(e){}}
  load();
  function unlock(id){
    if(opened[id]) return;
    opened[id]=true; save();
    v20SFX.achieve_v20();
  }
  function trackOpen(key){
    opened['_open_'+key]=true; save();
    var keys=['ld','od','ds','hm','ae','fn','eg','cm'];
    var cnt=keys.filter(function(k){return opened['_open_'+k];}).length;
    if(cnt>=5) unlock('v20_explorer');
    if(cnt>=8) unlock('v20_all_sections');
  }
  function check(){
    load();
    if(!window.achievements) window.achievements=[];
    achieves.forEach(function(a){
      var d=opened;
      var exists=window.achievements.some(function(ea){return ea.id===a.id;});
      if(!exists) window.achievements.push({id:a.id,name:a.name,desc:a.desc,unlocked:!!d[a.id]});
    });
  }
  return {
    check:check,
    unlock:unlock,
    trackOpen:trackOpen
  };
})();

// ── 13. Side menu buttons (left side, no bottom fixed bar) ──
(function(){
  var menu = document.createElement('div');
  menu.className = 'v20-menu';
  var btns = [
    {icon:'🏗',label:'구조하중',fn:function(){ v20Load.open(); v20Achieve.unlock('v20_load_analyst'); v20Achieve.trackOpen('ld'); }},
    {icon:'🔥',label:'온돌설계',fn:function(){ v20Ondol.open(); v20Achieve.unlock('v20_ondol_master'); v20Achieve.trackOpen('od'); }},
    {icon:'⚠',label:'재해복구',fn:function(){ v20Disaster.open(); v20Achieve.unlock('v20_disaster_planner'); v20Achieve.trackOpen('ds'); }},
    {icon:'💧',label:'습도맵',fn:function(){ v20Humidity.open(); v20Achieve.unlock('v20_humidity_expert'); v20Achieve.trackOpen('hm'); }},
    {icon:'🎨',label:'미학비율',fn:function(){ v20Aesthetic.open(); v20Achieve.unlock('v20_aesthetic_critic'); v20Achieve.trackOpen('ae'); }},
    {icon:'🏯',label:'담장양식',fn:function(){ v20Fence.open(); v20Achieve.unlock('v20_fence_scholar'); v20Achieve.trackOpen('fn'); }},
    {icon:'⚡',label:'에너지등급',fn:function(){ v20Energy.open(); v20Achieve.unlock('v20_energy_inspector'); v20Achieve.trackOpen('eg'); }},
    {icon:'🧱',label:'자재호환',fn:function(){ v20Compat.open(); v20Achieve.unlock('v20_compat_engineer'); v20Achieve.trackOpen('cm'); }}
  ];
  btns.forEach(function(b){
    var el = document.createElement('button');
    el.className = 'v20-menu-btn';
    el.innerHTML = b.icon + '<span class="v20-menu-label">' + b.label + '</span>';
    el.onclick = b.fn;
    menu.appendChild(el);
  });
  document.body.appendChild(menu);
})();

// ── 14. Keyboard shortcuts (Shift+) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(!e.shiftKey) return;
    switch(e.code){
      case 'KeyG': e.preventDefault(); v20Load.open(); v20Achieve.unlock('v20_load_analyst'); v20Achieve.trackOpen('ld'); break;
      case 'KeyH': e.preventDefault(); v20Ondol.open(); v20Achieve.unlock('v20_ondol_master'); v20Achieve.trackOpen('od'); break;
      case 'KeyJ': e.preventDefault(); v20Disaster.open(); v20Achieve.unlock('v20_disaster_planner'); v20Achieve.trackOpen('ds'); break;
      case 'KeyK': e.preventDefault(); v20Humidity.open(); v20Achieve.unlock('v20_humidity_expert'); v20Achieve.trackOpen('hm'); break;
      case 'KeyL': e.preventDefault(); v20Aesthetic.open(); v20Achieve.unlock('v20_aesthetic_critic'); v20Achieve.trackOpen('ae'); break;
      case 'KeyZ': e.preventDefault(); v20Fence.open(); v20Achieve.unlock('v20_fence_scholar'); v20Achieve.trackOpen('fn'); break;
      case 'KeyX': e.preventDefault(); v20Energy.open(); v20Achieve.unlock('v20_energy_inspector'); v20Achieve.trackOpen('eg'); break;
      case 'KeyC': e.preventDefault(); v20Compat.open(); v20Achieve.unlock('v20_compat_engineer'); v20Achieve.trackOpen('cm'); break;
    }
  });
})();

// ── 15. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v20Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 16. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig=window.showComplete;
    if(typeof orig!=='function') return false;
    if(window.__v20Hooked) return true;
    window.__v20Hooked=true;
    var prev=window.showComplete;
    window.showComplete=function(){ prev.apply(this,arguments); v20Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 17. Initial load + checks ──
(function(){
  setTimeout(function(){ v20Achieve.check(); },5000);
})();

// end v20 guard
}

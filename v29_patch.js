// =====================================================
// House Builder v29.0 Patch
// 전통마루양식비교기Canvas620x400_10종6축Radar내구미관통풍보온격식시공
// 건축방수공법분석기Canvas640x400_8부위6지표듀얼바차트방수등급
// 전통굴뚝양식도감Canvas620x400_10종5축Radar배연미관내구전통안전
// 건축채광효율분석기Canvas640x400_8실x4방위히트맵자연광조도분석
// 전통석축쌓기기법비교기Canvas620x400_10종6축Radar강도미관배수내구전통비용
// 건축동선효율시뮬레이터Canvas640x400_8실연결네트워크그래프동선최적화
// 전통지붕곡선미학분석기Canvas620x400_10종6축Radar곡률미관구조배수전통내구
// 건축종합에너지효율대시보드Canvas620x400_8KPI반원게이지종합S~D등급
// 퀴즈+15(360->375)+업적+12(314->326)+SFX16종+키보드Shift+Q/W/E/R/T/Y/U/I/0
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV29) {
window.__hbV29 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v29-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5900;overflow-y:auto;padding:16px}',
    '.v29-panel.active{display:block}',
    '.v29-box{max-width:720px;margin:40px auto}',
    '.v29-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v29-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v29-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v29-close:hover{background:#d4a57a}',
    '.v29-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v29-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v29-tab:hover,.v29-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v29-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v29-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v29-stat .s{text-align:center}',
    '.v29-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v29-stat .sl{font-size:11px;color:#c4956a}',
    '.v29-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v29-btn-sm:hover{background:#d4a57a}',
    '@media(max-width:600px){.v29-box{margin:16px auto}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ============ SFX Engine ============
var v29Sfx = (function(){
  var ctx;
  function getCtx(){ if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); return ctx; }
  function play(freq,type,dur,vol){
    try{
      var c=getCtx(),o=c.createOscillator(),g=c.createGain();
      o.type=type||'sine';o.frequency.value=freq;
      g.gain.setValueAtTime(vol||.13,c.currentTime);
      g.gain.exponentialRampToValueAtTime(.001,c.currentTime+dur);
      o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+dur);
    }catch(e){}
  }
  return {
    open:function(){play(587,'sine',.15,.12);setTimeout(function(){play(740,'sine',.12,.1);},80);},
    close:function(){play(440,'sine',.12,.1);},
    tab:function(){play(659,'triangle',.08,.1);},
    hover:function(){play(494,'sine',.05,.06);},
    correct:function(){play(587,'sine',.1,.12);setTimeout(function(){play(740,'sine',.1,.1);},100);setTimeout(function(){play(880,'sine',.15,.12);},200);},
    wrong:function(){play(220,'sawtooth',.2,.1);},
    achieve:function(){play(523,'sine',.1,.12);setTimeout(function(){play(659,'sine',.1,.1);},100);setTimeout(function(){play(784,'sine',.12,.12);},200);setTimeout(function(){play(1047,'sine',.2,.14);},300);},
    click:function(){play(800,'sine',.04,.08);},
    grade:function(){play(440,'sine',.08,.1);setTimeout(function(){play(554,'sine',.08,.1);},60);setTimeout(function(){play(659,'sine',.12,.12);},120);},
    swap:function(){play(330,'triangle',.06,.08);setTimeout(function(){play(494,'triangle',.06,.08);},50);},
    build:function(){play(262,'square',.05,.07);setTimeout(function(){play(330,'square',.05,.07);},40);setTimeout(function(){play(392,'square',.08,.09);},80);},
    water:function(){play(880,'sine',.08,.06);setTimeout(function(){play(660,'sine',.1,.05);},60);},
    stone:function(){play(150,'sawtooth',.06,.08);setTimeout(function(){play(200,'sawtooth',.06,.07);},40);},
    roof:function(){play(392,'triangle',.06,.09);setTimeout(function(){play(523,'triangle',.08,.1);},50);},
    energy:function(){play(440,'sine',.06,.08);setTimeout(function(){play(587,'sine',.06,.08);},40);setTimeout(function(){play(740,'sine',.1,.1);},80);},
    nav:function(){play(700,'sine',.04,.07);}
  };
})();

// ============ Achievement System ============
var v29Ach = (function(){
  var KEY = 'hb_v29_ach';
  var achs = [
    {id:'v29_floor_master',name:'마루 대가',desc:'마루 양식 10종 모두 확인',check:function(){return localStorage.getItem('hb29_floor_views')==='10';}},
    {id:'v29_waterproof',name:'방수 전문가',desc:'방수 공법 8부위 모두 분석',check:function(){return localStorage.getItem('hb29_wp_views')==='8';}},
    {id:'v29_chimney',name:'굴뚝 연구가',desc:'굴뚝 양식 10종 확인',check:function(){return localStorage.getItem('hb29_chimney_views')==='10';}},
    {id:'v29_light',name:'채광 설계사',desc:'채광 분석 8실 완료',check:function(){return localStorage.getItem('hb29_light_views')==='8';}},
    {id:'v29_stone_wall',name:'석축 장인',desc:'석축 기법 10종 모두 확인',check:function(){return localStorage.getItem('hb29_stonewall_views')==='10';}},
    {id:'v29_flow',name:'동선 설계사',desc:'동선 분석 8실 완료',check:function(){return localStorage.getItem('hb29_flow_views')==='8';}},
    {id:'v29_curve',name:'지붕 미학자',desc:'지붕 곡선 10종 확인',check:function(){return localStorage.getItem('hb29_curve_views')==='10';}},
    {id:'v29_energy',name:'에너지 전문가',desc:'에너지 대시보드 확인',check:function(){return localStorage.getItem('hb29_energy_seen')==='1';}},
    {id:'v29_quiz_5',name:'v29 퀵즈 5문',desc:'v29 퀵즈 5문 정답',check:function(){return (parseInt(localStorage.getItem('hb29_quiz_correct'))||0)>=5;}},
    {id:'v29_quiz_10',name:'v29 퀵즈 10문',desc:'v29 퀵즈 10문 정답',check:function(){return (parseInt(localStorage.getItem('hb29_quiz_correct'))||0)>=10;}},
    {id:'v29_quiz_all',name:'v29 퀵즈 마스터',desc:'v29 퀵즈 15문 전부 정답',check:function(){return (parseInt(localStorage.getItem('hb29_quiz_correct'))||0)>=15;}},
    {id:'v29_complete',name:'v29 완전 정복',desc:'모든 v29 업적 달성',check:function(){return false;}}
  ];
  function load(){return JSON.parse(localStorage.getItem(KEY)||'{}');}
  function save(d){localStorage.setItem(KEY,JSON.stringify(d));}
  function unlock(id){
    var d=load();
    if(d[id])return;
    d[id]=Date.now();save(d);
    v29Sfx.achieve();
    var n=document.createElement('div');
    n.style.cssText='position:fixed;top:80px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#c4956a,#8b6914);color:#fff;padding:12px 24px;border-radius:12px;z-index:9999;font-size:14px;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.5);animation:v29fadeIn .3s';
    var a=achs.find(function(x){return x.id===id;});
    n.textContent='🏆 업적 해금: '+(a?a.name:id);
    document.body.appendChild(n);
    setTimeout(function(){n.remove();},3000);
    var allOther = achs.filter(function(x){return x.id!=='v29_complete'&&x.id!==id;});
    var allDone = allOther.every(function(x){return d[x.id];});
    if(allDone && id!=='v29_complete'){unlock('v29_complete');}
  }
  function checkAll(){achs.forEach(function(a){if(a.check&&a.check())unlock(a.id);});}
  return {unlock:unlock,checkAll:checkAll,achs:achs,load:load};
})();

var v29Style = document.createElement('style');
v29Style.textContent = '@keyframes v29fadeIn{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
document.head.appendChild(v29Style);

// ============ 1. 전통 마루 양식 비교기 ============
var v29Floor = (function(){
  var panel, canvas, ctx, current = 0;
  var items = [
    {name:'대청마루',vals:[9,10,9,4,10,7],desc:'정면 개방형, 여름 통풍 최적화'},
    {name:'우물마루',vals:[8,7,6,8,7,8],desc:'높은 간사이 바닥 구조'},
    {name:'툴마루',vals:[7,8,7,5,6,7],desc:'마루와 방 사이 전이 공간'},
    {name:'누마루',vals:[6,6,5,9,5,9],desc:'사방방 옵내 다락방'},
    {name:'걸레바닥',vals:[5,5,8,7,4,6],desc:'방부엔 나무깟 바닥'},
    {name:'마루방',vals:[7,7,6,8,6,8],desc:'마루+온돌 결합형'},
    {name:'장마루',vals:[8,9,7,5,8,6],desc:'길게 빠은 복도형 마루'},
    {name:'다락마루',vals:[6,6,5,6,5,7],desc:'높은 위치의 보조 마루'},
    {name:'방바닥(확장)',vals:[5,4,4,10,3,10],desc:'온돌 확장형 바닥 구조'},
    {name:'마룣널',vals:[9,8,8,6,7,5],desc:'현대식 마루널 바닥재'}
  ];
  var axes = ['내구성','미관','통풍','보온','격식','시공성'];
  function grade(v){var a=v.reduce(function(s,x){return s+x;},0)/v.length;return a>=9?'S':a>=7.5?'A':a>=6?'B':a>=4.5?'C':'D';}
  function draw(){
    if(!ctx)return;
    var W=620,H=400;
    ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);
    grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    var it=items[current],cx=310,cy=210,R=130;
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText(it.name,cx,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';
    ctx.fillText(it.desc,cx,48);
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var i=0;i<6;i++){
        var ang=-Math.PI/2+i*Math.PI/3,r=R*ring/5;
        var x=cx+r*Math.cos(ang),y=cy+r*Math.sin(ang);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.15)+')';ctx.lineWidth=1;ctx.stroke();
    }
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3;
      ctx.beginPath();ctx.moveTo(cx,cy);
      ctx.lineTo(cx+R*Math.cos(ang),cy+R*Math.sin(ang));
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      var lx=cx+(R+20)*Math.cos(ang),ly=cy+(R+20)*Math.sin(ang);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],lx,ly);
    }
    ctx.beginPath();
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3,r=R*it.vals[i]/10;
      var x=cx+r*Math.cos(ang),y=cy+r*Math.sin(ang);
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.fillStyle='rgba(196,149,106,.25)';ctx.fill();
    ctx.strokeStyle='#c4956a';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3,r=R*it.vals[i]/10;
      ctx.beginPath();ctx.arc(cx+r*Math.cos(ang),cy+r*Math.sin(ang),4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    var g=grade(it.vals);
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g]||'#fff';ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(g+'등급',W-20,H-20);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText((current+1)+'/'+items.length+' - 클릭으로 전환',16,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>🏠 전통 마루 양식 비교기</h2><p>10종 마루 양식의 6축 특성 비교 (Radar Canvas 620×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=620;canvas.height=400;
      ctx=canvas.getContext('2d');
      canvas.onclick=function(){current=(current+1)%items.length;draw();v29Sfx.tab();
        localStorage.setItem('hb29_floor_views',Math.min(10,Math.max(parseInt(localStorage.getItem('hb29_floor_views')||'0')+1,current+1)).toString());
        v29Ach.checkAll();
      };
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
  }
  return {open:open};
})();

// ============ 2. 건축 방수 공법 분석기 ============
var v29WP = (function(){
  var panel, canvas, ctx, current = 0;
  var parts = [
    {name:'지붕',perf:[9,8,7,8,9,7],desc:'기와/아스팔트 싱글 방수'},
    {name:'외벽',perf:[7,8,6,7,8,6],desc:'방수 모르타르/도막 방수'},
    {name:'지하실',perf:[8,6,9,9,7,8],desc:'외방수+내방수 이중 방수'},
    {name:'욕실',perf:[9,7,8,8,8,9],desc:'타일 하부 시트/액체 방수'},
    {name:'발코니',perf:[7,7,7,6,7,6],desc:'우레탄+바닥 방수'},
    {name:'창문틀',perf:[6,8,5,5,8,5],desc:'실리콘+백업방수'},
    {name:'옥상',perf:[8,6,8,9,6,8],desc:'아스팔트+보호쿠 방수'},
    {name:'기초',perf:[9,5,9,10,5,9],desc:'비틀투멘/방수시트 기초방수'}
  ];
  var metrics = ['방수성능','시공성','내구성','비용효율','유지보수','환경성'];
  function draw(){
    if(!ctx)return;
    var W=640,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    var p=parts[current];
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText(p.name+' 방수 분석',W/2,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.fillText(p.desc,W/2,48);
    var barW=60,gap=20,startX=60,barArea=H-120;
    var colors=['#4a90d9','#50c878','#f5a623','#e74c3c','#9b59b6','#1abc9c'];
    for(var i=0;i<6;i++){
      var x=startX+i*(barW+gap),h=barArea*p.perf[i]/10,y=H-60-h;
      ctx.fillStyle=colors[i];ctx.fillRect(x,y,barW,h);
      ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
      ctx.fillText(p.perf[i]+'/10',x+barW/2,y-8);
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';
      ctx.fillText(metrics[i],x+barW/2,H-40);
    }
    var avg=p.perf.reduce(function(s,v){return s+v;},0)/6;
    var g=avg>=9?'S':avg>=7.5?'A':avg>=6?'B':avg>=4.5?'C':'D';
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g];ctx.font='bold 24px sans-serif';ctx.textAlign='right';
    ctx.fillText('방수등급 '+g,W-20,30);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText((current+1)+'/'+parts.length+' - 클릭으로 전환',16,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>💧 건축 방수 공법 분석기</h2><p>8부위별 방수 성능 6지표 분석 (Canvas 640×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=640;canvas.height=400;
      ctx=canvas.getContext('2d');
      canvas.onclick=function(){current=(current+1)%parts.length;draw();v29Sfx.tab();
        localStorage.setItem('hb29_wp_views',Math.min(8,Math.max(parseInt(localStorage.getItem('hb29_wp_views')||'0')+1,current+1)).toString());
        v29Ach.checkAll();
      };
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
  }
  return {open:open};
})();

// ============ 3. 전통 굴뚝 양식 도감 ============
var v29Chimney = (function(){
  var panel, canvas, ctx, current = 0;
  var items = [
    {name:'원통형 굴뚝',vals:[8,7,8,9,7],desc:'전통 한옥 돌 원통 굴뚝'},
    {name:'각통형 굴뚝',vals:[7,8,7,8,8],desc:'사각 단면의 벽돌 굴뚝'},
    {name:'헤마굴뚝',vals:[6,9,6,7,6],desc:'외벽에 붙여 세운 장식형'},
    {name:'독립굴뚝',vals:[9,7,9,8,8],desc:'건물에서 분리된 독립 구조'},
    {name:'꽃담 굴뚝',vals:[5,10,5,7,5],desc:'꽃무늬로 장식된 미형 굴뚝'},
    {name:'기와 굴뚝',vals:[7,8,8,8,7],desc:'기와 지붕 형태의 뭸개'},
    {name:'굴뚝창',vals:[6,6,7,7,9],desc:'환기창 견합 굴뚝'},
    {name:'이중굴뚝',vals:[9,6,9,8,8],desc:'내통+외통 이중 구조'},
    {name:'토굴뚝',vals:[5,5,5,9,6],desc:'흘 반죽 사용 저비용 굴뚝'},
    {name:'현대식 굴뚝',vals:[8,7,9,6,10],desc:'스테인리스/복합재 현대 굴뚝'}
  ];
  var axes = ['배연','미관','내구','전통','안전'];
  function grade(v){var a=v.reduce(function(s,x){return s+x;},0)/v.length;return a>=9?'S':a>=7.5?'A':a>=6?'B':a>=4.5?'C':'D';}
  function draw(){
    if(!ctx)return;
    var W=620,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    var it=items[current],cx=310,cy=210,R=130,N=5;
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText(it.name,cx,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.fillText(it.desc,cx,48);
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var i=0;i<N;i++){
        var ang=-Math.PI/2+i*2*Math.PI/N,r=R*ring/5;
        i===0?ctx.moveTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang)):ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.15)+')';ctx.stroke();
    }
    for(var i=0;i<N;i++){
      var ang=-Math.PI/2+i*2*Math.PI/N;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+R*Math.cos(ang),cy+R*Math.sin(ang));
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      var lx=cx+(R+22)*Math.cos(ang),ly=cy+(R+22)*Math.sin(ang);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],lx,ly);
    }
    ctx.beginPath();
    for(var i=0;i<N;i++){
      var ang=-Math.PI/2+i*2*Math.PI/N,r=R*it.vals[i]/10;
      i===0?ctx.moveTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang)):ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));
    }
    ctx.closePath();ctx.fillStyle='rgba(255,165,0,.25)';ctx.fill();
    ctx.strokeStyle='#ffa500';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<N;i++){
      var ang=-Math.PI/2+i*2*Math.PI/N,r=R*it.vals[i]/10;
      ctx.beginPath();ctx.arc(cx+r*Math.cos(ang),cy+r*Math.sin(ang),4,0,Math.PI*2);
      ctx.fillStyle='#ffa500';ctx.fill();
    }
    var g=grade(it.vals);
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g];ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(g+'등급',W-20,H-20);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText((current+1)+'/'+items.length+' - 클릭으로 전환',16,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>🏭 전통 굴뚝 양식 도감</h2><p>10종 굴뚝 양식의 5축 특성 비교 (Radar Canvas 620×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=620;canvas.height=400;
      ctx=canvas.getContext('2d');
      canvas.onclick=function(){current=(current+1)%items.length;draw();v29Sfx.tab();
        localStorage.setItem('hb29_chimney_views',Math.min(10,Math.max(parseInt(localStorage.getItem('hb29_chimney_views')||'0')+1,current+1)).toString());
        v29Ach.checkAll();
      };
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
  }
  return {open:open};
})();

// ============ 4. 건축 채광 효율 분석기 ============
var v29Light = (function(){
  var panel, canvas, ctx, current = 0;
  var rooms = [
    {name:'거실',lux:[8,9,10,7],desc:'가족 활동 중심 공간'},
    {name:'안방',lux:[6,7,8,5],desc:'휴식과 수면 공간'},
    {name:'부엌',lux:[7,8,9,6],desc:'조리 및 식사 공간'},
    {name:'서재',lux:[9,10,10,8],desc:'독서와 업무 공간'},
    {name:'대청',lux:[10,10,10,9],desc:'개방형 중앙 공간'},
    {name:'건넘방',lux:[5,6,7,4],desc:'부속 실 공간'},
    {name:'다용도실',lux:[4,5,6,3],desc:'수납/세탁 공간'},
    {name:'현관',lux:[7,8,8,6],desc:'출입 전이 공간'}
  ];
  var dirs = ['동','남','서','북'];
  var dirColors = ['#FF6B6B','#FFD93D','#4ECDC4','#6C5CE7'];
  function draw(){
    if(!ctx)return;
    var W=640,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    var r=rooms[current];
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText(r.name+' 채광 분석',W/2,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.fillText(r.desc,W/2,48);
    var cellW=120,cellH=60,startX=80,startY=80;
    for(var row=0;row<4;row++){
      for(var col=0;col<4;col++){
        var x=startX+col*(cellW+16),y=startY+row*(cellH+12);
        var val=rooms[row<rooms.length?row:0].lux[col];
        if(row===current){
          var alpha=val/10;
          ctx.fillStyle='rgba('+parseInt(dirColors[col].slice(1,3),16)+','+parseInt(dirColors[col].slice(3,5),16)+','+parseInt(dirColors[col].slice(5,7),16)+','+(.2+alpha*.6)+')';
          ctx.fillRect(x,y,cellW,cellH);
          ctx.strokeStyle=dirColors[col];ctx.lineWidth=2;ctx.strokeRect(x,y,cellW,cellH);
          ctx.fillStyle='#fff';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
          ctx.fillText(val+'/10',x+cellW/2,y+cellH/2+6);
        } else {
          var alpha2=rooms[row].lux[col]/10;
          ctx.fillStyle='rgba(100,100,140,'+(.1+alpha2*.3)+')';
          ctx.fillRect(x,y,cellW,cellH);
          ctx.strokeStyle='rgba(196,149,106,.15)';ctx.lineWidth=1;ctx.strokeRect(x,y,cellW,cellH);
          ctx.fillStyle='rgba(255,255,255,.5)';ctx.font='13px sans-serif';ctx.textAlign='center';
          ctx.fillText(rooms[row].lux[col]+'/10',x+cellW/2,y+cellH/2+5);
        }
        if(row===0){
          ctx.fillStyle=dirColors[col];ctx.font='bold 12px sans-serif';ctx.textAlign='center';
          ctx.fillText(dirs[col]+'향',x+cellW/2,y-8);
        }
        if(col===0){
          ctx.fillStyle=row===current?'#f5deb3':'#888';ctx.font='12px sans-serif';ctx.textAlign='right';
          ctx.fillText(rooms[row].name,x-8,y+cellH/2+4);
        }
      }
    }
    var avg=r.lux.reduce(function(s,v){return s+v;},0)/4;
    var g=avg>=9?'S':avg>=7.5?'A':avg>=6?'B':avg>=4.5?'C':'D';
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g];ctx.font='bold 24px sans-serif';ctx.textAlign='right';
    ctx.fillText('채광등급 '+g,W-20,H-20);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText((current+1)+'/'+rooms.length+' - 클릭으로 전환',16,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>☀️ 건축 채광 효율 분석기</h2><p>8실×4방위 채광 히트맵 분석 (Canvas 640×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=640;canvas.height=400;
      ctx=canvas.getContext('2d');
      canvas.onclick=function(){current=(current+1)%rooms.length;draw();v29Sfx.tab();
        localStorage.setItem('hb29_light_views',Math.min(8,Math.max(parseInt(localStorage.getItem('hb29_light_views')||'0')+1,current+1)).toString());
        v29Ach.checkAll();
      };
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
  }
  return {open:open};
})();

// ============ 5. 전통 석축 쌓기 기법 비교기 ============
var v29StoneW = (function(){
  var panel, canvas, ctx, current = 0;
  var items = [
    {name:'허튼층쌓기',vals:[6,7,8,6,9,8],desc:'자연석 불규칙 쌓기'},
    {name:'바른층쌓기',vals:[9,8,7,8,8,6],desc:'수평 줄맞추기 정밀 쌓기'},
    {name:'곡민갈쌓기',vals:[7,6,9,7,8,7],desc:'곡선 지형 따라 쌓기'},
    {name:'무사석축',vals:[8,5,7,8,7,9],desc:'큰 돌 없이 작은 돌로만 쌓기'},
    {name:'강돌쌓기',vals:[5,6,6,5,7,8],desc:'강에서 수집한 둘근 돌 쌓기'},
    {name:'판석쌓기',vals:[9,9,8,7,6,5],desc:'판상형 석재 수평 쌓기'},
    {name:'사고석축',vals:[10,10,9,6,5,4],desc:'정밀 가공 사각돌 쌓기'},
    {name:'건식쌓기',vals:[7,6,7,9,8,9],desc:'모르타르 없이 돌만 쌓기'},
    {name:'혼합쌓기',vals:[7,7,8,7,7,7],desc:'돌+흙+석회 혼합 쌓기'},
    {name:'장대석축',vals:[10,9,9,5,4,3],desc:'긴 장방형 석재 정밀 쌓기'}
  ];
  var axes = ['강도','미관','배수','내구','전통','비용'];
  function grade(v){var a=v.reduce(function(s,x){return s+x;},0)/v.length;return a>=9?'S':a>=7.5?'A':a>=6?'B':a>=4.5?'C':'D';}
  function draw(){
    if(!ctx)return;
    var W=620,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    var it=items[current],cx=310,cy=210,R=130;
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText(it.name,cx,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.fillText(it.desc,cx,48);
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var i=0;i<6;i++){
        var ang=-Math.PI/2+i*Math.PI/3,r=R*ring/5;
        i===0?ctx.moveTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang)):ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.15)+')';ctx.stroke();
    }
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+R*Math.cos(ang),cy+R*Math.sin(ang));
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],cx+(R+20)*Math.cos(ang),cy+(R+20)*Math.sin(ang));
    }
    ctx.beginPath();
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3,r=R*it.vals[i]/10;
      i===0?ctx.moveTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang)):ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));
    }
    ctx.closePath();ctx.fillStyle='rgba(139,119,101,.3)';ctx.fill();
    ctx.strokeStyle='#8b7765';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3,r=R*it.vals[i]/10;
      ctx.beginPath();ctx.arc(cx+r*Math.cos(ang),cy+r*Math.sin(ang),4,0,Math.PI*2);
      ctx.fillStyle='#d4a57a';ctx.fill();
    }
    var g=grade(it.vals);
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g];ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(g+'등급',W-20,H-20);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText((current+1)+'/'+items.length+' - 클릭으로 전환',16,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>🪨 전통 석축 쌓기 기법 비교기</h2><p>10종 석축 기법의 6축 특성 (Radar Canvas 620×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=620;canvas.height=400;
      ctx=canvas.getContext('2d');
      canvas.onclick=function(){current=(current+1)%items.length;draw();v29Sfx.tab();
        localStorage.setItem('hb29_stonewall_views',Math.min(10,Math.max(parseInt(localStorage.getItem('hb29_stonewall_views')||'0')+1,current+1)).toString());
        v29Ach.checkAll();
      };
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
  }
  return {open:open};
})();

// ============ 6. 건축 동선 효율 시뮬레이터 ============
var v29Flow = (function(){
  var panel, canvas, ctx;
  var rooms = [
    {name:'거실',x:320,y:120,links:[1,2,3,7]},
    {name:'부엌',x:160,y:120,links:[0,6]},
    {name:'안방',x:480,y:120,links:[0,5]},
    {name:'현관',x:320,y:280,links:[0,4]},
    {name:'외부',x:320,y:380,links:[3]},
    {name:'건너방',x:560,y:200,links:[2]},
    {name:'다용도',x:80,y:200,links:[1]},
    {name:'서재',x:200,y:280,links:[0]}
  ];
  function draw(){
    if(!ctx)return;
    var W=640,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText('건축 동선 효율 분석',W/2,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';
    ctx.fillText('8실 연결 네트워크 그래프 - 동선 최적화',W/2,48);
    rooms.forEach(function(r){
      r.links.forEach(function(li){
        var t=rooms[li];
        ctx.beginPath();ctx.moveTo(r.x,r.y);ctx.lineTo(t.x,t.y);
        ctx.strokeStyle='rgba(196,149,106,.3)';ctx.lineWidth=2;ctx.stroke();
        var mx=(r.x+t.x)/2,my=(r.y+t.y)/2;
        var dist=Math.round(Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))/30*10)/10;
        ctx.fillStyle='rgba(196,149,106,.6)';ctx.font='10px sans-serif';ctx.textAlign='center';
        ctx.fillText(dist+'m',mx,my-6);
      });
    });
    rooms.forEach(function(r,i){
      var nodeR=28;
      ctx.beginPath();ctx.arc(r.x,r.y,nodeR,0,Math.PI*2);
      var grad=ctx.createRadialGradient(r.x,r.y,0,r.x,r.y,nodeR);
      grad.addColorStop(0,i===0?'#c4956a':'#5a3a20');
      grad.addColorStop(1,i===0?'#8b6914':'#2d1b0e');
      ctx.fillStyle=grad;ctx.fill();
      ctx.strokeStyle=i===0?'#f5deb3':'#c4956a';ctx.lineWidth=2;ctx.stroke();
      ctx.fillStyle='#f5deb3';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(r.name,r.x,r.y);
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';
      ctx.fillText('연결:'+r.links.length,r.x,r.y+nodeR+12);
    });
    var totalLinks=rooms.reduce(function(s,r){return s+r.links.length;},0)/2;
    var avgConn=totalLinks/rooms.length;
    var eff=Math.round(avgConn/3*100);
    var g=eff>=90?'S':eff>=75?'A':eff>=60?'B':eff>=45?'C':'D';
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g];ctx.font='bold 22px sans-serif';ctx.textAlign='right';
    ctx.fillText('동선효율 '+eff+'% ('+g+')',W-20,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>🚶 건축 동선 효율 시뮬레이터</h2><p>8실 연결 네트워크 그래프 (Canvas 640×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=640;canvas.height=400;
      ctx=canvas.getContext('2d');
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
    localStorage.setItem('hb29_flow_views','8');
    v29Ach.checkAll();
  }
  return {open:open};
})();

// ============ 7. 전통 지붕 곡선 미학 분석기 ============
var v29Curve = (function(){
  var panel, canvas, ctx, current = 0;
  var items = [
    {name:'팔작지붕',vals:[10,10,8,9,10,9],desc:'완만한 곡선의 팔작 지붕'},
    {name:'맞배지붕',vals:[7,7,8,8,7,8],desc:'양비탈 대칭 구조'},
    {name:'박공지붕',vals:[6,8,6,7,6,7],desc:'변등 모양 박공 지붕'},
    {name:'추녀지붕',vals:[9,9,7,8,9,7],desc:'추녕변 곡선 지붕'},
    {name:'모임지붕',vals:[8,7,9,8,8,8],desc:'4면 경사 지붕'},
    {name:'외쪽지붕',vals:[5,6,7,6,5,9],desc:'한쪽으로만 경사'},
    {name:'단층지붕',vals:[6,6,8,7,6,8],desc:'단순한 단층 구조'},
    {name:'이층지붕',vals:[8,8,7,7,8,6],desc:'상하 이층 지붕'},
    {name:'초가지붕',vals:[4,5,6,8,8,10],desc:'볼짚/이엉 초가 지붕'},
    {name:'평지붕',vals:[3,4,9,5,3,9],desc:'현대식 평평한 지붕'}
  ];
  var axes = ['곡률','미관','구조','배수','전통','내구'];
  function grade(v){var a=v.reduce(function(s,x){return s+x;},0)/v.length;return a>=9?'S':a>=7.5?'A':a>=6?'B':a>=4.5?'C':'D';}
  function draw(){
    if(!ctx)return;
    var W=620,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    var it=items[current],cx=310,cy=210,R=130;
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText(it.name,cx,30);
    ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.fillText(it.desc,cx,48);
    for(var ring=1;ring<=5;ring++){
      ctx.beginPath();
      for(var i=0;i<6;i++){
        var ang=-Math.PI/2+i*Math.PI/3,r=R*ring/5;
        i===0?ctx.moveTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang)):ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(ring===5?.3:.15)+')';ctx.stroke();
    }
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+R*Math.cos(ang),cy+R*Math.sin(ang));
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],cx+(R+20)*Math.cos(ang),cy+(R+20)*Math.sin(ang));
    }
    ctx.beginPath();
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3,r=R*it.vals[i]/10;
      i===0?ctx.moveTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang)):ctx.lineTo(cx+r*Math.cos(ang),cy+r*Math.sin(ang));
    }
    ctx.closePath();ctx.fillStyle='rgba(196,100,100,.25)';ctx.fill();
    ctx.strokeStyle='#c46464';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<6;i++){
      var ang=-Math.PI/2+i*Math.PI/3,r=R*it.vals[i]/10;
      ctx.beginPath();ctx.arc(cx+r*Math.cos(ang),cy+r*Math.sin(ang),4,0,Math.PI*2);
      ctx.fillStyle='#ff9999';ctx.fill();
    }
    var g=grade(it.vals);
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    ctx.fillStyle=gc[g];ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(g+'등급',W-20,H-20);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText((current+1)+'/'+items.length+' - 클릭으로 전환',16,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>🏠 전통 지붕 곡선 미학 분석기</h2><p>10종 지붕 곡선의 6축 미학 분석 (Radar Canvas 620×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=620;canvas.height=400;
      ctx=canvas.getContext('2d');
      canvas.onclick=function(){current=(current+1)%items.length;draw();v29Sfx.tab();
        localStorage.setItem('hb29_curve_views',Math.min(10,Math.max(parseInt(localStorage.getItem('hb29_curve_views')||'0')+1,current+1)).toString());
        v29Ach.checkAll();
      };
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
  }
  return {open:open};
})();

// ============ 8. 건축 종합 에너지 효율 대시보드 ============
var v29Energy = (function(){
  var panel, canvas, ctx;
  var kpis = [
    {name:'단열',val:78,icon:'🧣'},
    {name:'방수',val:82,icon:'💧'},
    {name:'채광',val:75,icon:'☀️'},
    {name:'환기',val:70,icon:'🌬️'},
    {name:'냉방',val:68,icon:'❄️'},
    {name:'난방',val:85,icon:'🔥'},
    {name:'재생에너지',val:55,icon:'⚡'},
    {name:'종합효율',val:73,icon:'🏠'}
  ];
  function grade(v){return v>=90?'S':v>=75?'A':v>=60?'B':v>=45?'C':'D';}
  function draw(){
    if(!ctx)return;
    var W=620,H=400;ctx.clearRect(0,0,W,H);
    var grd=ctx.createLinearGradient(0,0,0,H);grd.addColorStop(0,'#1a1a2e');grd.addColorStop(1,'#16213e');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 18px sans-serif';ctx.textAlign='center';
    ctx.fillText('건축 종합 에너지 효율 대시보드',W/2,30);
    var cols=4,rows=2,gw=130,gh=140,gapX=20,gapY=16;
    var startX=(W-cols*gw-(cols-1)*gapX)/2;
    var startY=56;
    var gc={S:'#FFD700',A:'#98FB98',B:'#87CEEB',C:'#DDA0DD',D:'#FF6B6B'};
    for(var i=0;i<8;i++){
      var col=i%cols,row=Math.floor(i/cols);
      var x=startX+col*(gw+gapX),y=startY+row*(gh+gapY);
      var k=kpis[i],g=grade(k.val);
      ctx.fillStyle='rgba(45,27,14,.6)';
      ctx.strokeStyle='rgba(196,149,106,.3)';ctx.lineWidth=1;
      ctx.beginPath();ctx.roundRect(x,y,gw,gh,8);ctx.fill();ctx.stroke();
      var cx2=x+gw/2,cy2=y+50,gaugeR=36;
      ctx.beginPath();ctx.arc(cx2,cy2,gaugeR,Math.PI,0);
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.lineWidth=6;ctx.stroke();
      var pct=k.val/100;
      ctx.beginPath();ctx.arc(cx2,cy2,gaugeR,Math.PI,Math.PI+Math.PI*pct);
      ctx.strokeStyle=gc[g];ctx.lineWidth=6;ctx.stroke();
      ctx.fillStyle='#f5deb3';ctx.font='bold 16px sans-serif';ctx.textAlign='center';
      ctx.fillText(k.val+'%',cx2,cy2+4);
      ctx.fillStyle=gc[g];ctx.font='bold 14px sans-serif';
      ctx.fillText(g,cx2,cy2+22);
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';
      ctx.fillText(k.name,cx2,y+gh-10);
    }
    var totalAvg=Math.round(kpis.reduce(function(s,k){return s+k.val;},0)/8);
    var totalG=grade(totalAvg);
    ctx.fillStyle=gc[totalG];ctx.font='bold 20px sans-serif';ctx.textAlign='center';
    ctx.fillText('종합 '+totalAvg+'% ('+totalG+'등급)',W/2,H-16);
  }
  function open(){
    if(!panel){
      panel=document.createElement('div');panel.className='v29-panel';
      var box=document.createElement('div');box.className='v29-box';
      box.innerHTML='<h2>🏠 건축 종합 에너지 효율 대시보드</h2><p>8대 KPI 반원게이지 종합 S~D 등급 (Canvas 620×400)</p>';
      canvas=document.createElement('canvas');canvas.className='v29-canvas';canvas.width=620;canvas.height=400;
      ctx=canvas.getContext('2d');
      var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
      close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
      box.appendChild(canvas);box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
    }
    panel.classList.add('active');v29Sfx.open();draw();
    localStorage.setItem('hb29_energy_seen','1');
    v29Ach.checkAll();
  }
  return {open:open};
})();

// ============ Quiz System (15 questions) ============
var v29QuizData = [
  {q:'대청마루의 가장 큰 특징은?',a:['개방형 통풍 구조','밀폐형 보온 구조','이중 창호 구조','회전식 바닥 구조'],c:0},
  {q:'지하실 방수에 사용되는 방법은?',a:['외방수+내방수 이중','폈트 방수만','아스팔트 방수만','타일 방수만'],c:0},
  {q:'헤마굴뚝의 특징은?',a:['외벽에 붙여 세운 장식형','옥상에 설치','지하에 매설','실내에 설치'],c:0},
  {q:'거실에서 채광이 가장 좋은 방위는?',a:['남향','북향','동향','서향'],c:0},
  {q:'사고석축의 특징은?',a:['정밀 가공 사각돌 쌓기','둘근 돌 쌓기','흙벽 쌓기','나무 떼대 쌓기'],c:0},
  {q:'건축 동선 설계에서 가장 중요한 실은?',a:['거실 (중앙 허브)','창고','화장실','다락방'],c:0},
  {q:'팔작지붕의 특징은?',a:['완만한 곡선의 양쪽 지붕','평평한 지붕','한쪽으로만 경사','원형 지붕'],c:0},
  {q:'건축에서 U값(열관류율)이 낮을수록?',a:['단열 성능이 좋다','환기성능이 좋다','방수성능이 좋다','구조강도가 높다'],c:0},
  {q:'우물마루의 특징은?',a:['높은 간사이 바닥 구조','낮은 바닥 구조','부티리 구조','타일 구조'],c:0},
  {q:'욕실 방수에 주로 사용되는 공법은?',a:['타일 하부 시트/액체 방수','아스팔트 방수','비틀투멘 방수','벽돌 방수'],c:0},
  {q:'건식쌓기의 특징은?',a:['모르타르 없이 돌만 사용','시멘트 결합','흙벽 기반','스테인리스 구조'],c:0},
  {q:'추녀지붕의 추녕변이 하는 역할은?',a:['지붕 곡선 형성과 빗물 처리','실내 조명','방음 처리','구조 보강'],c:0},
  {q:'토굴뚝의 장점은?',a:['저비용 시공 가능','최고 내구성','최고 미관','최고 배연 성능'],c:0},
  {q:'볼짚 초가지붕의 가장 큰 장점은?',a:['비용 효율성','미관성','방수성','내화성'],c:0},
  {q:'건축 에너지 효율에서 가장 중요한 요소는?',a:['단열 성능','외관 미관','방 크기','복도 길이'],c:0}
];

function v29OpenQuiz(){
  var panel=document.querySelector('.v29-quiz-panel');
  if(!panel){
    panel=document.createElement('div');panel.className='v29-panel v29-quiz-panel';
    var box=document.createElement('div');box.className='v29-box';
    box.innerHTML='<h2>❓ v29 건축 퀵즈</h2><p>15문항 건축 지식 테스트</p><div id="v29QuizArea"></div>';
    var close=document.createElement('button');close.className='v29-close';close.textContent='닫기';
    close.onclick=function(){panel.classList.remove('active');v29Sfx.close();};
    box.appendChild(close);panel.appendChild(box);document.body.appendChild(panel);
  }
  panel.classList.add('active');v29Sfx.open();
  var area=document.getElementById('v29QuizArea');
  var qi=0,score=0;
  function showQ(){
    if(qi>=v29QuizData.length){
      area.innerHTML='<div class="v29-stat"><div class="s"><div class="sv">'+score+'/'+v29QuizData.length+'</div><div class="sl">정답수</div></div></div><p style="color:#c4956a;text-align:center">'+(score>=13?'완벽해요!':score>=10?'훌륭해요!':score>=7?'좋아요!':'더 노력해보세요!')+'</p>';
      localStorage.setItem('hb29_quiz_correct',Math.max(parseInt(localStorage.getItem('hb29_quiz_correct')||'0'),score).toString());
      v29Ach.checkAll();
      return;
    }
    var q=v29QuizData[qi];
    var h='<p style="color:#f5deb3;font-size:15px;margin:16px 0">'+(qi+1)+'. '+q.q+'</p>';
    q.a.forEach(function(a,i){
      h+='<button class="v29-btn-sm" data-i="'+i+'" style="display:block;width:100%;text-align:left;margin:6px 0;padding:10px 16px">'+a+'</button>';
    });
    area.innerHTML=h;
    area.querySelectorAll('button').forEach(function(btn){
      btn.onclick=function(){
        var sel=parseInt(btn.getAttribute('data-i'));
        if(sel===q.c){score++;v29Sfx.correct();btn.style.background='#4a7c59';}
        else{v29Sfx.wrong();btn.style.background='#c0392b';area.querySelectorAll('button')[q.c].style.background='#4a7c59';}
        area.querySelectorAll('button').forEach(function(b){b.onclick=null;});
        setTimeout(function(){qi++;showQ();},1200);
      };
    });
  }
  showQ();
}

// ============ Navigation ============
(function(){
  var menuItems = [
    {icon:'🏠',label:'마루 비교',fn:'v29Floor.open()'},
    {icon:'💧',label:'방수 분석',fn:'v29WP.open()'},
    {icon:'🏭',label:'굴뚝 도감',fn:'v29Chimney.open()'},
    {icon:'☀️',label:'채광 분석',fn:'v29Light.open()'},
    {icon:'🪨',label:'석축 기법',fn:'v29StoneW.open()'},
    {icon:'🚶',label:'동선 분석',fn:'v29Flow.open()'},
    {icon:'🏠',label:'지붕 곡선',fn:'v29Curve.open()'},
    {icon:'⚡',label:'에너지',fn:'v29Energy.open()'},
    {icon:'❓',label:'v29 퀵즈',fn:'v29OpenQuiz()'}
  ];
  var existingMenu = document.querySelector('.v28-float-menu') || document.querySelector('.v27-float-menu') || document.querySelector('.v26-float-menu') || document.querySelector('.v25-float-menu') || document.querySelector('.v24-menu') || document.querySelector('.v23-menu') || document.querySelector('.v22-menu') || document.querySelector('.v21-menu') || document.querySelector('.v20-menu') || document.querySelector('.v19-menu');
  if (existingMenu) {
    menuItems.forEach(function(item){
      var btn = document.createElement('button');
      btn.style.cssText = 'width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative';
      btn.innerHTML = item.icon;
      btn.title = item.label;
      btn.onclick = new Function(item.fn);
      existingMenu.appendChild(btn);
    });
  } else {
    var menu = document.createElement('div');
    menu.className = 'v29-float-menu';
    menu.style.cssText = 'position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4200;display:flex;flex-direction:column;gap:6px';
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
    'Q':function(){v29Floor.open()},
    'W':function(){v29WP.open()},
    'E':function(){v29Chimney.open()},
    'R':function(){v29Light.open()},
    'T':function(){v29StoneW.open()},
    'Y':function(){v29Flow.open()},
    'U':function(){v29Curve.open()},
    'I':function(){v29Energy.open()},
    '0':function(){v29OpenQuiz()}
  };
  var fn = map[e.key];
  if(fn){e.preventDefault();fn();}
});

} // end __hbV29 guard

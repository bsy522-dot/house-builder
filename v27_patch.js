// =====================================================
// House Builder v27.0 Patch
// 전통창호양식비교기Canvas620x400_10종6축Radar채광통풍미관전통내구시공
// 건축열교브릿지분석기Canvas640x400_8열교위치열손실바차트온도프로파일
// 전통우물천장구조도감Canvas620x400_10종5축Radar미관구조음향격식비용
// 건축일조량시뮬레이터Canvas640x400_12개월x8시간히트맵일조시간
// 전통담장양식비교기Canvas620x400_10종6축Radar방어미관전통내구시공비용
// 건축소방안전평가기Canvas640x400_8구역6항목히트맵종합등급
// 전통계단양식도감Canvas620x400_10종5축Radar미관안전전통내구시공
// 건축종합안전진단대시보드Canvas620x400_8KPI반원게이지종합S~D등급
// 퀴즈+15(330->345)+업적+12(290->302)+SFX16종+키보드Shift+Q/W/E/R/T/Y/U/I/0
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV27) {
window.__hbV27 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v27-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5700;overflow-y:auto;padding:16px}',
    '.v27-panel.active{display:block}',
    '.v27-box{max-width:720px;margin:40px auto}',
    '.v27-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v27-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v27-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v27-close:hover{background:#d4a57a}',
    '.v27-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v27-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v27-tab:hover,.v27-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v27-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v27-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v27-stat .s{text-align:center}',
    '.v27-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v27-stat .sl{font-size:11px;color:#c4956a}',
    '.v27-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v27-btn-sm:hover{background:#d4a57a}',
    '@media(max-width:600px){.v27-box{margin:16px auto}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ============ SFX Engine ============
var v27Sfx = (function(){
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
    open:function(){play(554,'sine',.15,.12);setTimeout(function(){play(698,'sine',.12,.1);},80);},
    close:function(){play(415,'sine',.12,.1);},
    tab:function(){play(622,'triangle',.08,.1);},
    hover:function(){play(466,'sine',.05,.06);},
    correct:function(){play(554,'sine',.1,.12);setTimeout(function(){play(698,'sine',.1,.1);},100);setTimeout(function(){play(831,'sine',.15,.12);},200);},
    wrong:function(){play(220,'sawtooth',.2,.1);},
    achieve:function(){play(554,'sine',.12,.15);setTimeout(function(){play(698,'sine',.12,.12);},120);setTimeout(function(){play(831,'sine',.12,.12);},240);setTimeout(function(){play(1109,'sine',.2,.15);},360);},
    click:function(){play(932,'sine',.04,.08);},
    complete:function(){play(554,'sine',.15,.12);setTimeout(function(){play(831,'sine',.15,.12);},150);setTimeout(function(){play(1109,'sine',.2,.15);},300);},
    radar:function(){play(349,'triangle',.1,.08);},
    gauge:function(){play(466,'sine',.08,.07);},
    heatmap:function(){play(698,'triangle',.06,.07);},
    network:function(){play(583,'sine',.07,.08);},
    line:function(){play(523,'triangle',.08,.07);},
    bar:function(){play(392,'square',.06,.06);},
    grade:function(g){var f=g==='S'?1109:g==='A'?932:g==='B'?784:g==='C'?622:466;play(f,'sine',.2,.12);}
  };
})();

// ============ Helper ============
function v27Grade(v,max){var p=v/max*100;return p>=90?'S':p>=75?'A':p>=60?'B':p>=40?'C':'D';}
function v27GradeColor(g){return g==='S'?'#ffd700':g==='A'?'#4ade80':g==='B'?'#60a5fa':g==='C'?'#fb923c':'#f87171';}

// ============================================================
// 1. 전통 창호 양식 비교기 Canvas 620x400
// ============================================================
var V27_WINDOW_DATA = [
  {n:'분합문',a:[85,90,92,95,70,60],d:'양쪽으로 열리는 대표적 전통 창호'},
  {n:'세살문',a:[80,75,78,90,72,65],d:'가느다란 세살로 구성된 기본 창호'},
  {n:'꽃살문',a:[70,98,65,88,60,45],d:'꽃 무늬 장식이 돋보이는 예술 창호'},
  {n:'만자살문',a:[72,88,68,85,65,50],d:'만(卍)자 문양의 격조 높은 창호'},
  {n:'귀갑문',a:[75,85,72,82,68,55],d:'거북 등껍질 모양 육각 격자 창호'},
  {n:'아자살문',a:[78,82,70,80,66,58],d:'亞자 모양 격자의 단정한 창호'},
  {n:'완자문',a:[74,92,66,86,62,48],d:'완(卍)자 변형 문양의 정교한 창호'},
  {n:'띠살문',a:[88,70,82,78,75,72],d:'가로 띠살로 구성된 실용적 창호'},
  {n:'솟을문',a:[60,95,58,92,55,40],d:'높이 솟은 문으로 권위 상징'},
  {n:'빗살문',a:[82,72,80,75,70,68],d:'빗살 모양 사선 격자의 창호'}
];
var V27_WIN_AXES = ['채광','미관','통풍','전통','내구','시공'];

var v27Window = {
  sel:0,cmp:-1,
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-win-panel');
    if(!p){p=document.createElement('div');p.id='v27-win-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.sel=0;this.cmp=-1;this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-win-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-win-panel');if(!p)return;
    var h='<div class="v27-box"><h2>&#128199; &#51204;&#53685; &#52285;&#54840; &#50577;&#49885; &#48708;&#44368;&#44592;</h2><p>10&#51333; &#51204;&#53685; &#52285;&#54840;&#51032; 6&#52629; &#45733;&#47141; &#48708;&#44368; Radar</p>';
    h+='<div class="v27-tabs">';
    for(var i=0;i<V27_WINDOW_DATA.length;i++){
      h+='<button class="v27-tab'+(i===this.sel?' active':'')+'" onclick="v27Window.select('+i+')">'+V27_WINDOW_DATA[i].n+'</button>';
    }
    h+='</div>';
    h+='<canvas id="v27-win-cv" class="v27-canvas" width="620" height="400"></canvas>';
    var d=V27_WINDOW_DATA[this.sel];var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v27Grade(avg,100);
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+d.n+'</div><div class="sl">&#49440;&#53469; &#52285;&#54840;</div></div>';
    h+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#54217;&#44512; &#51216;&#49688;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#46321;&#44553;</div></div></div>';
    h+='<p style="color:#e8d5c0;text-align:center;font-size:13px">'+d.d+'</p>';
    h+='<div style="text-align:center;margin:12px 0"><button class="v27-btn-sm" onclick="v27Window.toggleCmp()">&#48708;&#44368; &#47784;&#46300; '+(this.cmp>=0?'OFF':'ON')+'</button></div>';
    h+='<button class="v27-close" onclick="v27Window.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  select:function(i){v27Sfx.tab();this.sel=i;this.render();},
  toggleCmp:function(){this.cmp=this.cmp>=0?-1:(this.sel+1)%V27_WINDOW_DATA.length;this.render();},
  draw:function(){
    var cv=document.getElementById('v27-win-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=620,H=400,cx=310,cy=210,R=150;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    var axes=V27_WIN_AXES,n=axes.length;
    for(var r=1;r<=5;r++){
      c.beginPath();
      for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);c.lineTo(cx+R*r/5*Math.cos(a),cy+R*r/5*Math.sin(a));}
      c.closePath();c.strokeStyle='rgba(196,149,106,'+(r===5?.4:.15)+')';c.lineWidth=1;c.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+2*Math.PI/n*i;
      c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));c.strokeStyle='rgba(196,149,106,.2)';c.stroke();
      var lx=cx+(R+22)*Math.cos(a),ly=cy+(R+22)*Math.sin(a);
      c.fillStyle='#c4956a';c.font='12px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(axes[i],lx,ly);
    }
    var d=V27_WINDOW_DATA[this.sel];
    c.beginPath();
    for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);var v=d.a[i%n]/100*R;c.lineTo(cx+v*Math.cos(a),cy+v*Math.sin(a));}
    c.closePath();c.fillStyle='rgba(196,149,106,.25)';c.fill();c.strokeStyle='#c4956a';c.lineWidth=2;c.stroke();
    for(var i=0;i<n;i++){var a=-Math.PI/2+2*Math.PI/n*i;var v=d.a[i]/100*R;c.beginPath();c.arc(cx+v*Math.cos(a),cy+v*Math.sin(a),4,0,Math.PI*2);c.fillStyle='#f5deb3';c.fill();}
    if(this.cmp>=0&&this.cmp!==this.sel){
      var d2=V27_WINDOW_DATA[this.cmp];
      c.beginPath();
      for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);var v=d2.a[i%n]/100*R;c.lineTo(cx+v*Math.cos(a),cy+v*Math.sin(a));}
      c.closePath();c.fillStyle='rgba(100,200,150,.15)';c.fill();c.strokeStyle='#4ade80';c.lineWidth=2;c.stroke();
      c.fillStyle='#4ade80';c.font='12px sans-serif';c.fillText(d2.n+' (&#48708;&#44368;)',cx,H-12);
    }
    c.fillStyle='#f5deb3';c.font='bold 16px sans-serif';c.textAlign='center';c.fillText(d.n+' &#52285;&#54840; &#48516;&#49437;',cx,24);
    v27Sfx.radar();
  }
};

// ============================================================
// 2. 건축 열교 브릿지 분석기 Canvas 640x400
// ============================================================
var V27_THERMAL_DATA = [
  {n:'창문 프레임',loss:28,temp:[18,15,10,6,4,6,10,15],d:'창틀 접합부 열손실 최대 구간'},
  {n:'벽-지붕 접합부',loss:22,temp:[19,17,14,10,8,10,14,17],d:'지붕과 벽체 만나는 열교 구간'},
  {n:'벽-바닥 접합부',loss:18,temp:[19,18,15,12,10,12,15,18],d:'기초 연결부 냉기 침투 구간'},
  {n:'발코니 연결부',loss:25,temp:[18,14,9,5,3,5,9,14],d:'캔틸레버 구조 열교 취약점'},
  {n:'벽체 모서리',loss:15,temp:[19,18,16,14,12,14,16,18],d:'외벽 코너부 2방향 열손실'},
  {n:'철골 관통부',loss:20,temp:[19,16,12,8,6,8,12,16],d:'구조재 열전도 관통 열교'},
  {n:'파라펫 부위',loss:16,temp:[19,17,15,13,11,13,15,17],d:'옥상 난간 연결부 열교'},
  {n:'설비 관통부',loss:12,temp:[19,18,17,15,14,15,17,18],d:'배관 및 덕트 관통 열교'}
];
var V27_TEMP_LABELS = ['실내','벽내1','벽내2','단열재','열교점','단열재','벽내3','외부'];

var v27Thermal = {
  sel:0,
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-therm-panel');
    if(!p){p=document.createElement('div');p.id='v27-therm-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.sel=0;this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-therm-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-therm-panel');if(!p)return;
    var h='<div class="v27-box"><h2>&#127777;&#65039; &#44148;&#52629; &#50676;&#44368; &#48652;&#47551;&#51648; &#48516;&#49437;&#44592;</h2><p>8&#44060; &#50676;&#44368; &#50948;&#52824;&#48324; &#50676;&#49552;&#49892; &#48143; &#50728;&#46020; &#54532;&#47196;&#54028;&#51068;</p>';
    h+='<canvas id="v27-therm-cv" class="v27-canvas" width="640" height="400"></canvas>';
    var d=V27_THERMAL_DATA[this.sel];
    var gr=d.loss>=25?'D':d.loss>=20?'C':d.loss>=15?'B':'A';
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+d.n+'</div><div class="sl">&#49440;&#53469; &#50676;&#44368;</div></div>';
    h+='<div class="s"><div class="sv">'+d.loss+'%</div><div class="sl">&#50676;&#49552;&#49892; &#48708;&#50984;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#50676;&#44368; &#46321;&#44553;</div></div></div>';
    h+='<p style="color:#e8d5c0;text-align:center;font-size:13px">'+d.d+'</p>';
    h+='<div style="text-align:center;margin:12px 0">';
    h+='<button class="v27-btn-sm" onclick="v27Thermal.prev()">&larr; &#51060;&#51204;</button>';
    h+='<button class="v27-btn-sm" onclick="v27Thermal.next()">&#45796;&#51020; &rarr;</button></div>';
    h+='<button class="v27-close" onclick="v27Thermal.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  prev:function(){v27Sfx.tab();this.sel=(this.sel-1+V27_THERMAL_DATA.length)%V27_THERMAL_DATA.length;this.render();},
  next:function(){v27Sfx.tab();this.sel=(this.sel+1)%V27_THERMAL_DATA.length;this.render();},
  draw:function(){
    var cv=document.getElementById('v27-therm-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=640,H=400;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    c.fillStyle='#f5deb3';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText('&#50676;&#44368; &#50948;&#52824;&#48324; &#50676;&#49552;&#49892; &#48708;&#44368;',W/2,24);
    var barW=55,gap=12,startX=50,bH=200,bY=60;
    for(var i=0;i<V27_THERMAL_DATA.length;i++){
      var d=V27_THERMAL_DATA[i];var x=startX+i*(barW+gap);var h=d.loss/30*bH;
      var grd=c.createLinearGradient(x,bY+bH-h,x,bY+bH);
      grd.addColorStop(0,d.loss>=25?'#f87171':d.loss>=20?'#fb923c':d.loss>=15?'#fbbf24':'#4ade80');
      grd.addColorStop(1,'rgba(0,0,0,.3)');
      c.fillStyle=grd;c.fillRect(x,bY+bH-h,barW,h);
      c.strokeStyle=i===this.sel?'#f5deb3':'rgba(196,149,106,.3)';c.lineWidth=i===this.sel?2:1;c.strokeRect(x,bY+bH-h,barW,h);
      c.fillStyle='#f5deb3';c.font='bold 12px sans-serif';c.fillText(d.loss+'%',x+barW/2,bY+bH-h-8);
      c.save();c.translate(x+barW/2,bY+bH+14);c.fillStyle=i===this.sel?'#f5deb3':'#c4956a';c.font='10px sans-serif';
      c.fillText(d.n.length>5?d.n.substring(0,5)+'..':d.n,0,0);
      c.restore();
    }
    var d=V27_THERMAL_DATA[this.sel];
    var tempY=310,tempH=60,pts=d.temp;
    c.fillStyle='#c4956a';c.font='bold 13px sans-serif';c.textAlign='center';c.fillText(d.n+' &#50728;&#46020; &#54532;&#47196;&#54028;&#51068;',W/2,tempY-10);
    c.beginPath();
    for(var i=0;i<pts.length;i++){
      var x=80+i*(W-160)/(pts.length-1);var y=tempY+tempH-(pts[i]/20)*tempH;
      if(i===0)c.moveTo(x,y);else c.lineTo(x,y);
    }
    c.strokeStyle='#fb923c';c.lineWidth=2.5;c.stroke();
    for(var i=0;i<pts.length;i++){
      var x=80+i*(W-160)/(pts.length-1);var y=tempY+tempH-(pts[i]/20)*tempH;
      c.beginPath();c.arc(x,y,4,0,Math.PI*2);c.fillStyle=pts[i]<=6?'#f87171':pts[i]<=12?'#fbbf24':'#4ade80';c.fill();
      c.fillStyle='#e8d5c0';c.font='10px sans-serif';c.textAlign='center';c.fillText(pts[i]+'°C',x,y-10);
      c.fillStyle='#888';c.fillText(V27_TEMP_LABELS[i],x,tempY+tempH+16);
    }
    v27Sfx.bar();
  }
};

// ============================================================
// 3. 전통 우물천장 구조 도감 Canvas 620x400
// ============================================================
var V27_CEILING_DATA = [
  {n:'우물천장',a:[95,90,80,98,45],d:'격자형 틀에 판재를 끼운 최고급 천장'},
  {n:'소란천장',a:[80,75,70,85,55],d:'소란대(가느다란 살)로 구성된 격식 천장'},
  {n:'연등천장',a:[60,85,65,70,85],d:'서까래가 노출된 개방형 천장'},
  {n:'반자천장',a:[75,70,75,80,60],d:'종이나 판재로 마감한 평천장'},
  {n:'빗천장',a:[65,80,72,65,78],d:'지붕 경사를 따라 비스듬한 천장'},
  {n:'고미반자',a:[70,65,68,75,65],d:'고미(다락) 아래 설치하는 반자'},
  {n:'귀틀천장',a:[88,82,78,90,50],d:'굵은 귀틀로 격자를 만든 장식 천장'},
  {n:'종이천장',a:[72,60,82,72,80],d:'한지를 바른 가벼운 전통 천장'},
  {n:'들보천장',a:[55,88,60,60,75],d:'대들보가 노출된 구조미 천장'},
  {n:'장여천장',a:[78,72,74,82,58],d:'장여 위에 판재를 올린 중급 천장'}
];
var V27_CEIL_AXES = ['미관','구조','음향','격식','비용'];

var v27Ceiling = {
  sel:0,
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-ceil-panel');
    if(!p){p=document.createElement('div');p.id='v27-ceil-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.sel=0;this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-ceil-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-ceil-panel');if(!p)return;
    var h='<div class="v27-box"><h2>&#127968; &#51204;&#53685; &#50864;&#47932;&#52380;&#51109; &#44396;&#51312; &#46020;&#44048;</h2><p>10&#51333; &#51204;&#53685; &#52380;&#51109; &#44396;&#51312;&#51032; 5&#52629; &#45733;&#47141; &#48708;&#44368;</p>';
    h+='<div class="v27-tabs">';
    for(var i=0;i<V27_CEILING_DATA.length;i++){
      h+='<button class="v27-tab'+(i===this.sel?' active':'')+'" onclick="v27Ceiling.select('+i+')">'+V27_CEILING_DATA[i].n+'</button>';
    }
    h+='</div>';
    h+='<canvas id="v27-ceil-cv" class="v27-canvas" width="620" height="400"></canvas>';
    var d=V27_CEILING_DATA[this.sel];var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v27Grade(avg,100);
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+d.n+'</div><div class="sl">&#49440;&#53469; &#52380;&#51109;</div></div>';
    h+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#54217;&#44512;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#46321;&#44553;</div></div></div>';
    h+='<p style="color:#e8d5c0;text-align:center;font-size:13px">'+d.d+'</p>';
    h+='<button class="v27-close" onclick="v27Ceiling.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  select:function(i){v27Sfx.tab();this.sel=i;this.render();},
  draw:function(){
    var cv=document.getElementById('v27-ceil-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=620,H=400,cx=310,cy=210,R=150;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    var axes=V27_CEIL_AXES,n=axes.length;
    for(var r=1;r<=5;r++){
      c.beginPath();
      for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);c.lineTo(cx+R*r/5*Math.cos(a),cy+R*r/5*Math.sin(a));}
      c.closePath();c.strokeStyle='rgba(196,149,106,'+(r===5?.4:.15)+')';c.lineWidth=1;c.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+2*Math.PI/n*i;
      c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));c.strokeStyle='rgba(196,149,106,.2)';c.stroke();
      var lx=cx+(R+24)*Math.cos(a),ly=cy+(R+24)*Math.sin(a);
      c.fillStyle='#c4956a';c.font='12px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(axes[i],lx,ly);
    }
    var d=V27_CEILING_DATA[this.sel];
    c.beginPath();
    for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);var v=d.a[i%n]/100*R;c.lineTo(cx+v*Math.cos(a),cy+v*Math.sin(a));}
    c.closePath();c.fillStyle='rgba(196,149,106,.25)';c.fill();c.strokeStyle='#c4956a';c.lineWidth=2;c.stroke();
    for(var i=0;i<n;i++){var a=-Math.PI/2+2*Math.PI/n*i;var v=d.a[i]/100*R;c.beginPath();c.arc(cx+v*Math.cos(a),cy+v*Math.sin(a),4,0,Math.PI*2);c.fillStyle='#f5deb3';c.fill();}
    c.fillStyle='#f5deb3';c.font='bold 16px sans-serif';c.textAlign='center';c.fillText(d.n+' &#44396;&#51312; &#48516;&#49437;',cx,24);
    v27Sfx.radar();
  }
};

// ============================================================
// 4. 건축 일조량 시뮬레이터 Canvas 640x400
// ============================================================
var V27_SUN_DATA = [
  [2,3,5,6,7,6,5,3],[3,4,6,7,8,7,6,4],[4,5,7,8,9,8,7,5],[5,6,8,9,10,9,8,6],
  [6,7,9,10,10,10,9,7],[7,8,10,10,10,10,10,8],[6,7,9,10,10,10,9,7],[5,7,9,10,10,9,9,6],
  [4,6,8,9,9,9,8,5],[3,5,7,8,8,7,6,4],[2,4,5,6,7,6,5,3],[2,3,4,5,6,5,4,2]
];
var V27_MONTHS = ['1&#50900;','2&#50900;','3&#50900;','4&#50900;','5&#50900;','6&#50900;','7&#50900;','8&#50900;','9&#50900;','10&#50900;','11&#50900;','12&#50900;'];
var V27_HOURS = ['7&#49884;','9&#49884;','11&#49884;','12&#49884;','13&#49884;','14&#49884;','15&#49884;','17&#49884;'];

var v27Sun = {
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-sun-panel');
    if(!p){p=document.createElement('div');p.id='v27-sun-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-sun-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-sun-panel');if(!p)return;
    var total=0;V27_SUN_DATA.forEach(function(m){m.forEach(function(v){total+=v;});});
    var avg=(total/(12*8)).toFixed(1);
    var h='<div class="v27-box"><h2>&#9728;&#65039; &#44148;&#52629; &#51068;&#51312;&#47049; &#49884;&#48044;&#47112;&#51060;&#53552;</h2><p>12&#44060;&#50900; x 8&#49884;&#44036;&#45824; &#51068;&#51312;&#47049; &#55176;&#53944;&#47605;</p>';
    h+='<canvas id="v27-sun-cv" class="v27-canvas" width="640" height="400"></canvas>';
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+avg+'</div><div class="sl">&#54217;&#44512; &#51068;&#51312;(h)</div></div>';
    h+='<div class="s"><div class="sv">'+total+'h</div><div class="sl">&#50672;&#44036; &#52509;&#44228;</div></div></div>';
    h+='<button class="v27-close" onclick="v27Sun.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v27-sun-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=640,H=400;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    c.fillStyle='#f5deb3';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText('&#50900;&#48324; &#49884;&#44036;&#45824; &#51068;&#51312;&#47049; &#55176;&#53944;&#47605;',W/2,24);
    var mx=70,my=50,cw=(W-mx-30)/8,ch=(H-my-50)/12;
    for(var m=0;m<12;m++){
      c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='right';c.fillText(V27_MONTHS[m],mx-8,my+m*ch+ch/2+4);
      for(var h=0;h<8;h++){
        var v=V27_SUN_DATA[m][h];
        var r=v<=3?50:v<=5?40:v<=7?20:0;
        var g=v<=3?50:v<=5?100:v<=7?180:220;
        var b=v<=3?80:v<=5?60:v<=7?40:30;
        var alpha=0.5+v/10*0.5;
        c.fillStyle='rgba('+Math.min(255,r+v*20)+','+Math.min(255,g+v*8)+','+b+','+alpha+')';
        c.fillRect(mx+h*cw+1,my+m*ch+1,cw-2,ch-2);
        c.fillStyle='#fff';c.font='bold 11px sans-serif';c.textAlign='center';c.fillText(v+'h',mx+h*cw+cw/2,my+m*ch+ch/2+4);
      }
    }
    for(var h=0;h<8;h++){
      c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='center';c.fillText(V27_HOURS[h],mx+h*cw+cw/2,my-8);
    }
    c.fillStyle='rgba(196,149,106,.15)';c.font='10px sans-serif';c.textAlign='left';
    var leg=[{c:'rgba(250,200,50,.8)',l:'8h+ (&#52572;&#44256;)'},{c:'rgba(150,200,60,.7)',l:'6-7h'},{c:'rgba(100,140,80,.6)',l:'4-5h'},{c:'rgba(70,70,100,.6)',l:'2-3h (&#52572;&#51200;)'}];
    for(var i=0;i<leg.length;i++){
      c.fillStyle=leg[i].c;c.fillRect(W-150,H-80+i*18,12,12);
      c.fillStyle='#e8d5c0';c.fillText(leg[i].l,W-134,H-70+i*18);
    }
    v27Sfx.heatmap();
  }
};

// ============================================================
// 5. 전통 담장 양식 비교기 Canvas 620x400
// ============================================================
var V27_FENCE_DATA = [
  {n:'흙담',a:[80,65,90,85,60,88],d:'흙과 짚을 다져 쌓은 기본 담장'},
  {n:'돌담',a:[92,80,85,80,90,70],d:'자연석을 쌓아 올린 견고한 담장'},
  {n:'사고석담',a:[88,85,78,75,85,65],d:'네모반듯하게 다듬은 돌로 쌓은 정제 담장'},
  {n:'전돌담',a:[85,90,70,72,82,60],d:'전돌(벽돌)을 쌓은 격식 있는 담장'},
  {n:'판장담',a:[55,60,50,78,45,82],d:'나무 판자로 만든 가벼운 담장'},
  {n:'싸리울타리',a:[40,55,35,88,25,90],d:'싸리나무 가지를 엮은 소박한 울타리'},
  {n:'화방벽',a:[90,88,68,70,88,55],d:'화재 방지용 두꺼운 방화 담장'},
  {n:'꽃담',a:[60,95,45,82,50,50],d:'꽃 문양 장식 벽돌로 쌓은 예술 담장'},
  {n:'영벽',a:[75,78,65,85,72,62],d:'문 앞 차폐용 독립 벽체'},
  {n:'토석담',a:[82,72,82,80,75,78],d:'흙과 돌을 혼합하여 쌓은 담장'}
];
var V27_FENCE_AXES = ['방어','미관','전통','역사','내구','비용'];

var v27Fence = {
  sel:0,
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-fence-panel');
    if(!p){p=document.createElement('div');p.id='v27-fence-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.sel=0;this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-fence-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-fence-panel');if(!p)return;
    var h='<div class="v27-box"><h2>&#127809; &#51204;&#53685; &#45812;&#51109; &#50577;&#49885; &#48708;&#44368;&#44592;</h2><p>10&#51333; &#51204;&#53685; &#45812;&#51109;&#51032; 6&#52629; &#45733;&#47141; &#48708;&#44368;</p>';
    h+='<div class="v27-tabs">';
    for(var i=0;i<V27_FENCE_DATA.length;i++){
      h+='<button class="v27-tab'+(i===this.sel?' active':'')+'" onclick="v27Fence.select('+i+')">'+V27_FENCE_DATA[i].n+'</button>';
    }
    h+='</div>';
    h+='<canvas id="v27-fence-cv" class="v27-canvas" width="620" height="400"></canvas>';
    var d=V27_FENCE_DATA[this.sel];var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v27Grade(avg,100);
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+d.n+'</div><div class="sl">&#49440;&#53469; &#45812;&#51109;</div></div>';
    h+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#54217;&#44512;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#46321;&#44553;</div></div></div>';
    h+='<p style="color:#e8d5c0;text-align:center;font-size:13px">'+d.d+'</p>';
    h+='<button class="v27-close" onclick="v27Fence.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  select:function(i){v27Sfx.tab();this.sel=i;this.render();},
  draw:function(){
    var cv=document.getElementById('v27-fence-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=620,H=400,cx=310,cy=210,R=150;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    var axes=V27_FENCE_AXES,n=axes.length;
    for(var r=1;r<=5;r++){
      c.beginPath();
      for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);c.lineTo(cx+R*r/5*Math.cos(a),cy+R*r/5*Math.sin(a));}
      c.closePath();c.strokeStyle='rgba(196,149,106,'+(r===5?.4:.15)+')';c.lineWidth=1;c.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+2*Math.PI/n*i;
      c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));c.strokeStyle='rgba(196,149,106,.2)';c.stroke();
      var lx=cx+(R+22)*Math.cos(a),ly=cy+(R+22)*Math.sin(a);
      c.fillStyle='#c4956a';c.font='12px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(axes[i],lx,ly);
    }
    var d=V27_FENCE_DATA[this.sel];
    c.beginPath();
    for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);var v=d.a[i%n]/100*R;c.lineTo(cx+v*Math.cos(a),cy+v*Math.sin(a));}
    c.closePath();c.fillStyle='rgba(196,149,106,.25)';c.fill();c.strokeStyle='#c4956a';c.lineWidth=2;c.stroke();
    for(var i=0;i<n;i++){var a=-Math.PI/2+2*Math.PI/n*i;var v=d.a[i]/100*R;c.beginPath();c.arc(cx+v*Math.cos(a),cy+v*Math.sin(a),4,0,Math.PI*2);c.fillStyle='#f5deb3';c.fill();}
    c.fillStyle='#f5deb3';c.font='bold 16px sans-serif';c.textAlign='center';c.fillText(d.n+' &#45812;&#51109; &#48516;&#49437;',cx,24);
    v27Sfx.radar();
  }
};

// ============================================================
// 6. 건축 소방안전 평가기 Canvas 640x400
// ============================================================
var V27_FIRE_ZONES = ['&#49436;&#51116;&#49892;','&#52840;&#49892;','&#48512;&#50636;','&#44144;&#49892;','&#45796;&#46973;','&#47560;&#45817;','&#44148;&#47560;&#47560;&#51116;','&#52285;&#44256;'];
var V27_FIRE_ITEMS = ['&#54868;&#51116;&#44048;&#51648;','&#49548;&#54868;&#44592;','&#53748;&#54588;&#47196;','&#48169;&#54868;&#48317;','&#54872;&#44592;','&#45236;&#54868;&#46321;&#44553;'];
var V27_FIRE_DATA = [
  [82,75,90,60,85,70],[78,70,85,55,80,65],[65,80,75,70,90,50],
  [85,72,88,58,78,72],[55,45,60,40,70,55],[90,65,95,80,92,85],
  [70,68,72,65,75,60],[60,55,65,50,60,58]
];

var v27Fire = {
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-fire-panel');
    if(!p){p=document.createElement('div');p.id='v27-fire-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-fire-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-fire-panel');if(!p)return;
    var total=0,cnt=0;
    V27_FIRE_DATA.forEach(function(z){z.forEach(function(v){total+=v;cnt++;});});
    var avg=Math.round(total/cnt);var gr=v27Grade(avg,100);
    var h='<div class="v27-box"><h2>&#128293; &#44148;&#52629; &#49548;&#48169;&#50504;&#51204; &#54217;&#44032;&#44592;</h2><p>8&#44396;&#50669; x 6&#54637;&#47785; &#49548;&#48169;&#50504;&#51204; &#55176;&#53944;&#47605;</p>';
    h+='<canvas id="v27-fire-cv" class="v27-canvas" width="640" height="400"></canvas>';
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+avg+'</div><div class="sl">&#54217;&#44512; &#50504;&#51204;&#51216;&#49688;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#51333;&#54633; &#46321;&#44553;</div></div></div>';
    h+='<button class="v27-close" onclick="v27Fire.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v27-fire-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=640,H=400;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    c.fillStyle='#f5deb3';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText('&#44396;&#50669;&#48324; &#49548;&#48169;&#50504;&#51204; &#55176;&#53944;&#47605;',W/2,24);
    var mx=90,my=55,cw=(W-mx-30)/6,ch=(H-my-50)/8;
    for(var h=0;h<6;h++){
      c.save();c.translate(mx+h*cw+cw/2,my-8);
      c.fillStyle='#c4956a';c.font='10px sans-serif';c.textAlign='center';c.fillText(V27_FIRE_ITEMS[h],0,0);
      c.restore();
    }
    for(var z=0;z<8;z++){
      c.fillStyle='#c4956a';c.font='11px sans-serif';c.textAlign='right';c.fillText(V27_FIRE_ZONES[z],mx-8,my+z*ch+ch/2+4);
      for(var h=0;h<6;h++){
        var v=V27_FIRE_DATA[z][h];
        var r=v>=80?40:v>=60?200:255;
        var g=v>=80?200:v>=60?180:80;
        var b=v>=80?80:v>=60?50:50;
        c.fillStyle='rgba('+r+','+g+','+b+','+(0.4+v/100*0.5)+')';
        c.fillRect(mx+h*cw+1,my+z*ch+1,cw-2,ch-2);
        c.fillStyle='#fff';c.font='bold 11px sans-serif';c.textAlign='center';c.fillText(v,mx+h*cw+cw/2,my+z*ch+ch/2+4);
      }
    }
    v27Sfx.heatmap();
  }
};

// ============================================================
// 7. 전통 계단 양식 도감 Canvas 620x400
// ============================================================
var V27_STAIR_DATA = [
  {n:'돌계단',a:[90,85,95,88,80],d:'자연석이나 가공석으로 만든 견고한 계단'},
  {n:'나무계단',a:[65,80,85,70,75],d:'목재로 만든 따뜻한 느낌의 전통 계단'},
  {n:'전돌계단',a:[82,78,80,75,70],d:'전돌을 쌓아 만든 격식 있는 계단'},
  {n:'월대계단',a:[95,92,90,95,50],d:'궁궐 정전 앞 넓은 기단형 계단'},
  {n:'섬돌',a:[70,70,88,82,85],d:'마당에서 마루로 오르는 디딤돌'},
  {n:'답도계단',a:[88,90,78,90,55],d:'봉황/운룡 문양이 새겨진 궁궐 계단'},
  {n:'소맷돌계단',a:[85,88,82,85,60],d:'양쪽에 소맷돌을 세운 격식 계단'},
  {n:'경사로',a:[75,60,75,65,80],d:'바퀴 통행이나 장애인 접근을 위한 완경사'},
  {n:'층계마루',a:[60,72,80,72,78],d:'마루와 계단이 결합된 복합 구조'},
  {n:'축대계단',a:[80,68,85,78,72],d:'축대에 직접 만든 실용적 야외 계단'}
];
var V27_STAIR_AXES = ['안전','미관','전통','격식','비용'];

var v27Stair = {
  sel:0,
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-stair-panel');
    if(!p){p=document.createElement('div');p.id='v27-stair-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.sel=0;this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-stair-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-stair-panel');if(!p)return;
    var h='<div class="v27-box"><h2>&#128732; &#51204;&#53685; &#44228;&#45800; &#50577;&#49885; &#46020;&#44048;</h2><p>10&#51333; &#51204;&#53685; &#44228;&#45800;&#51032; 5&#52629; &#45733;&#47141; &#48708;&#44368;</p>';
    h+='<div class="v27-tabs">';
    for(var i=0;i<V27_STAIR_DATA.length;i++){
      h+='<button class="v27-tab'+(i===this.sel?' active':'')+'" onclick="v27Stair.select('+i+')">'+V27_STAIR_DATA[i].n+'</button>';
    }
    h+='</div>';
    h+='<canvas id="v27-stair-cv" class="v27-canvas" width="620" height="400"></canvas>';
    var d=V27_STAIR_DATA[this.sel];var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v27Grade(avg,100);
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+d.n+'</div><div class="sl">&#49440;&#53469; &#44228;&#45800;</div></div>';
    h+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#54217;&#44512;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#46321;&#44553;</div></div></div>';
    h+='<p style="color:#e8d5c0;text-align:center;font-size:13px">'+d.d+'</p>';
    h+='<button class="v27-close" onclick="v27Stair.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  select:function(i){v27Sfx.tab();this.sel=i;this.render();},
  draw:function(){
    var cv=document.getElementById('v27-stair-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=620,H=400,cx=310,cy=210,R=150;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    var axes=V27_STAIR_AXES,n=axes.length;
    for(var r=1;r<=5;r++){
      c.beginPath();
      for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);c.lineTo(cx+R*r/5*Math.cos(a),cy+R*r/5*Math.sin(a));}
      c.closePath();c.strokeStyle='rgba(196,149,106,'+(r===5?.4:.15)+')';c.lineWidth=1;c.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+2*Math.PI/n*i;
      c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a));c.strokeStyle='rgba(196,149,106,.2)';c.stroke();
      var lx=cx+(R+24)*Math.cos(a),ly=cy+(R+24)*Math.sin(a);
      c.fillStyle='#c4956a';c.font='12px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(axes[i],lx,ly);
    }
    var d=V27_STAIR_DATA[this.sel];
    c.beginPath();
    for(var i=0;i<=n;i++){var a=-Math.PI/2+2*Math.PI/n*(i%n);var v=d.a[i%n]/100*R;c.lineTo(cx+v*Math.cos(a),cy+v*Math.sin(a));}
    c.closePath();c.fillStyle='rgba(196,149,106,.25)';c.fill();c.strokeStyle='#c4956a';c.lineWidth=2;c.stroke();
    for(var i=0;i<n;i++){var a=-Math.PI/2+2*Math.PI/n*i;var v=d.a[i]/100*R;c.beginPath();c.arc(cx+v*Math.cos(a),cy+v*Math.sin(a),4,0,Math.PI*2);c.fillStyle='#f5deb3';c.fill();}
    c.fillStyle='#f5deb3';c.font='bold 16px sans-serif';c.textAlign='center';c.fillText(d.n+' &#44228;&#45800; &#48516;&#49437;',cx,24);
    v27Sfx.radar();
  }
};

// ============================================================
// 8. 건축 종합 안전진단 대시보드 Canvas 620x400
// ============================================================
var V27_SAFETY_KPI = [
  {n:'&#44396;&#51312;&#50504;&#51204;',v:78,max:100},
  {n:'&#54868;&#51116;&#50504;&#51204;',v:72,max:100},
  {n:'&#45236;&#51652;&#49457;&#45733;',v:68,max:100},
  {n:'&#48169;&#49688;&#49457;&#45733;',v:82,max:100},
  {n:'&#51204;&#44592;&#50504;&#51204;',v:85,max:100},
  {n:'&#50676;&#54872;&#44221;',v:75,max:100},
  {n:'&#51217;&#44540;&#49457;',v:80,max:100},
  {n:'&#51333;&#54633;&#46321;&#44553;',v:77,max:100}
];

var v27Safety = {
  open:function(){
    v27Sfx.open();
    var p=document.getElementById('v27-safety-panel');
    if(!p){p=document.createElement('div');p.id='v27-safety-panel';p.className='v27-panel';document.body.appendChild(p);}
    p.classList.add('active');this.render();
  },
  close:function(){v27Sfx.close();var p=document.getElementById('v27-safety-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v27-safety-panel');if(!p)return;
    var wt=[15,15,12,12,10,12,12,12];
    var ws=0,wv=0;
    V27_SAFETY_KPI.forEach(function(k,i){wv+=k.v*wt[i];ws+=wt[i];});
    var overall=Math.round(wv/ws);var gr=v27Grade(overall,100);
    var h='<div class="v27-box"><h2>&#128737;&#65039; &#44148;&#52629; &#51333;&#54633; &#50504;&#51204;&#51652;&#45800; &#45824;&#49884;&#48372;&#46300;</h2><p>8&#44060; KPI &#48152;&#50896;&#44172;&#51060;&#51648; + &#44032;&#51473; &#51333;&#54633; &#46321;&#44553;</p>';
    h+='<canvas id="v27-safety-cv" class="v27-canvas" width="620" height="400"></canvas>';
    h+='<div class="v27-stat"><div class="s"><div class="sv">'+overall+'</div><div class="sl">&#44032;&#51473; &#51333;&#54633;</div></div>';
    h+='<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#51333;&#54633; &#46321;&#44553;</div></div></div>';
    h+='<button class="v27-close" onclick="v27Safety.close()">&#45803;&#44592;</button></div>';
    p.innerHTML=h;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v27-safety-cv');if(!cv)return;
    var c=cv.getContext('2d'),W=620,H=400;
    c.fillStyle='#1a1a2e';c.fillRect(0,0,W,H);
    c.fillStyle='#f5deb3';c.font='bold 15px sans-serif';c.textAlign='center';c.fillText('&#44148;&#52629; &#50504;&#51204;&#51652;&#45800; 8KPI &#48152;&#50896;&#44172;&#51060;&#51648;',W/2,22);
    var cols=4,rows=2,gw=130,gh=150,gapX=20,gapY=20;
    var sx=(W-cols*gw-(cols-1)*gapX)/2;var sy=45;
    V27_SAFETY_KPI.forEach(function(kpi,idx){
      var col=idx%cols,row=Math.floor(idx/cols);
      var cx=sx+col*(gw+gapX)+gw/2,cy=sy+row*(gh+gapY)+gh/2+10;
      var r=50,pct=kpi.v/kpi.max;
      c.beginPath();c.arc(cx,cy,r,Math.PI,0);c.strokeStyle='rgba(196,149,106,.2)';c.lineWidth=10;c.stroke();
      var gr=v27Grade(kpi.v,kpi.max);
      var col2=v27GradeColor(gr);
      c.beginPath();c.arc(cx,cy,r,Math.PI,Math.PI+Math.PI*pct);c.strokeStyle=col2;c.lineWidth=10;c.stroke();
      c.fillStyle='#f5deb3';c.font='bold 20px sans-serif';c.textAlign='center';c.textBaseline='middle';c.fillText(kpi.v,cx,cy-8);
      c.fillStyle=col2;c.font='bold 14px sans-serif';c.fillText(gr,cx,cy+14);
      c.fillStyle='#c4956a';c.font='11px sans-serif';c.fillText(kpi.n,cx,cy+r+16);
    });
    v27Sfx.gauge();
  }
};

// ============================================================
// Quiz v27 (+15 questions, 330->345)
// ============================================================
var v27QuizData = [
  {q:'&#48516;&#54633;&#47928;&#51008; &#47924;&#50631;&#51064;&#44032;?',o:['&#50577;&#51901;&#51004;&#47196; &#50676;&#47532;&#45716; &#52285;&#54840;','&#54620;&#51901;&#51004;&#47196; &#48120;&#45716; &#47928;','&#50948;&#47196; &#50732;&#47532;&#45716; &#47928;','&#51217;&#51060;&#49885; &#47928;'],c:0},
  {q:'&#50864;&#47932;&#52380;&#51109;&#51032; &#53945;&#51669;&#51008;?',o:['&#44201;&#51088;&#54805; &#53952;&#50640; &#54032;&#51116;','&#49436;&#44620;&#47000; &#45432;&#52636;','&#48708;&#49828;&#46316;&#54620; &#44221;&#49324;','&#51333;&#51060; &#48148;&#47492;'],c:0},
  {q:'&#50676;&#44368; &#48652;&#47551;&#51648;&#50640;&#49436; &#50676;&#49552;&#49892;&#51060; &#44032;&#51109; &#53360; &#48512;&#50948;&#45716;?',o:['&#52285;&#47928; &#54532;&#47112;&#51076;','&#48317;&#52404; &#47784;&#49436;&#47532;','&#49444;&#48708; &#44288;&#53685;&#48512;','&#54028;&#46972;&#54175; &#48512;&#50948;'],c:0},
  {q:'&#54620;&#50725;&#50640;&#49436; &#51068;&#51312;&#47049;&#51060; &#44032;&#51109; &#51339;&#51008; &#44228;&#51208;&#51008;?',o:['&#50668;&#47492;','&#44200;&#50872;','&#48388;','&#44032;&#51012;'],c:0},
  {q:'&#46028;&#45812;&#51032; &#44032;&#51109; &#53360; &#51109;&#51216;&#51008;?',o:['&#45236;&#44396;&#49457;','&#52292;&#44305;&#49457;','&#49884;&#44277;&#49549;&#46020;','&#48708;&#50857; &#51208;&#44048;'],c:0},
  {q:'&#54868;&#48169;&#48317;&#51032; &#51452;&#50836; &#44592;&#45733;&#51008;?',o:['&#54868;&#51116; &#48169;&#51648;','&#48169;&#48276;','&#48169;&#49688;','&#48169;&#51020;'],c:0},
  {q:'&#50900;&#45824;&#44228;&#45800;&#51060; &#49444;&#52824;&#46104;&#45716; &#44275;&#51008;?',o:['&#44417;&#44624; &#51221;&#51204; &#50526;','&#48124;&#44032; &#50526;&#47560;&#45817;','&#49324;&#52272; &#45824;&#50885;&#51204;','&#49436;&#50896; &#44053;&#54617;&#49892;'],c:0},
  {q:'&#52285;&#54840;&#50640;&#49436; &#44867;&#49332;&#47928;&#51032; &#53945;&#51669;&#51008;?',o:['&#44867; &#47924;&#45740; &#51109;&#49885;','&#49464;&#47196; &#52285;&#49332;','&#50977;&#44033; &#44201;&#51088;','&#49324;&#49440; &#44201;&#51088;'],c:0},
  {q:'&#50672;&#46321;&#52380;&#51109;&#51032; &#53945;&#51669;&#51008;?',o:['&#49436;&#44620;&#47000; &#45432;&#52636; &#44060;&#48169;&#54805;','&#44201;&#51088;&#54805; &#53952;','&#54217;&#52380;&#51109; &#47560;&#44048;','&#55180;&#51648; &#48148;&#47492;'],c:0},
  {q:'&#49548;&#48169;&#50504;&#51204;&#50640;&#49436; &#53748;&#54588;&#47196;&#51032; &#50669;&#54624;&#51008;?',o:['&#54868;&#51116; &#49884; &#45824;&#54588; &#44221;&#47196;','&#49548;&#54868;&#44592; &#48708;&#52824;','&#54872;&#44592; &#49884;&#49828;&#53596;','&#48169;&#54868;&#48317; &#49444;&#52824;'],c:0},
  {q:'&#49452;&#46028;&#51032; &#50857;&#46020;&#45716;?',o:['&#47560;&#45817;&#50640;&#49436; &#47560;&#47336;&#47196; &#50724;&#47476;&#45716; &#46356;&#46372;&#46028;','&#44417;&#44624; &#51221;&#51204; &#50526;','&#45812;&#51109; &#50500;&#47000;','&#45796;&#46973; &#51077;&#44396;'],c:0},
  {q:'&#45236;&#51652;&#49457;&#45733;&#50640;&#49436; &#44032;&#51109; &#51473;&#50836;&#54620; &#50836;&#49548;&#45716;?',o:['&#44396;&#51312;&#52404;&#51032; &#44053;&#44053;&#49457;','&#48317;&#52404; &#48120;&#44288;','&#52380;&#51109; &#45458;&#51060;','&#51109;&#49885; &#50836;&#49548;'],c:0},
  {q:'&#54889;&#44552;&#48708;(&#54588;&#48372;&#45208;&#52824;)&#50640; &#44032;&#51109; &#44032;&#44620;&#50868; &#44148;&#52629;&#47932;&#51008;?',o:['&#53457;','&#54620;&#50725;','&#44417;&#44624;','&#49457;&#44285;'],c:0},
  {q:'&#45800;&#52397;&#47928;&#50577;&#51032; &#51452;&#50836; &#47785;&#51201;&#51008;?',o:['&#51109;&#49885;&#44284; &#48317;&#49324;','&#48169;&#49688;','&#48169;&#52649;','&#45800;&#50676;'],c:0},
  {q:'ACH(&#49884;&#44036;&#45817; &#54872;&#44592;&#54943;&#49688;)&#44032; &#45458;&#51012;&#49688;&#47197;?',o:['&#44277;&#44592; &#49692;&#54872;&#51060; &#51096; &#46120;','&#50728;&#46020;&#44032; &#45458;&#51020;','&#49845;&#46020;&#44032; &#45230;&#51020;','&#49548;&#51020;&#51060; &#44048;&#49548;'],c:0}
];

var v27QuizState = {idx:0,correct:0,done:false};

function v27OpenQuiz(){
  v27Sfx.open();v27QuizState={idx:0,correct:0,done:false};
  var p=document.getElementById('v27-quiz-panel');
  if(!p){p=document.createElement('div');p.id='v27-quiz-panel';p.className='v27-panel';document.body.appendChild(p);}
  p.classList.add('active');v27RenderQuiz();
}
function v27CloseQuiz(){v27Sfx.close();var p=document.getElementById('v27-quiz-panel');if(p)p.classList.remove('active');}
function v27RenderQuiz(){
  var p=document.getElementById('v27-quiz-panel');if(!p)return;
  if(v27QuizState.idx>=v27QuizData.length){
    var pct=Math.round(v27QuizState.correct/v27QuizData.length*100);
    var gr=pct>=90?'S':pct>=75?'A':pct>=60?'B':pct>=40?'C':'D';
    p.innerHTML='<div class="v27-box"><h2>&#127942; v27 &#53748;&#51592; &#50756;&#47308;!</h2>'+
      '<div class="v27-stat"><div class="s"><div class="sv">'+v27QuizState.correct+'/'+v27QuizData.length+'</div><div class="sl">&#51221;&#45813;</div></div>'+
      '<div class="s"><div class="sv">'+pct+'%</div><div class="sl">&#51221;&#45813;&#47456;</div></div>'+
      '<div class="s"><div class="sv" style="color:'+v27GradeColor(gr)+'">'+gr+'</div><div class="sl">&#46321;&#44553;</div></div></div>'+
      '<button class="v27-btn-sm" onclick="v27OpenQuiz()">&#45796;&#49884; &#54400;&#44592;</button>'+
      '<button class="v27-close" onclick="v27CloseQuiz()">&#45803;&#44592;</button></div>';
    v27Sfx.complete();return;
  }
  var q=v27QuizData[v27QuizState.idx];
  var h='<div class="v27-box"><h2>&#128218; v27 &#53748;&#51592; ('+( v27QuizState.idx+1)+'/'+v27QuizData.length+')</h2>';
  h+='<p style="color:#f5deb3;font-size:16px;text-align:center;margin:20px 0">'+q.q+'</p>';
  h+='<div style="display:flex;flex-direction:column;gap:8px;max-width:500px;margin:0 auto">';
  for(var i=0;i<q.o.length;i++){
    h+='<button class="v27-btn-sm" style="padding:12px;font-size:14px;text-align:left" onclick="v27Answer('+i+')">'+q.o[i]+'</button>';
  }
  h+='</div><button class="v27-close" onclick="v27CloseQuiz()">&#45803;&#44592;</button></div>';
  p.innerHTML=h;
}
function v27Answer(i){
  var q=v27QuizData[v27QuizState.idx];
  if(i===q.c){v27QuizState.correct++;v27Sfx.correct();}else{v27Sfx.wrong();}
  v27QuizState.idx++;
  setTimeout(v27RenderQuiz,400);
}

// ============ Achievements (+12, 290->302) ============
(function(){
  var achKey = 'hb_achievements_v27';
  var existing = [];
  try { existing = JSON.parse(localStorage.getItem(achKey) || '[]'); } catch(e){}
  var newAch = [
    {id:'v27_window_expert',n:'&#52285;&#54840; &#51204;&#47928;&#44032;',d:'&#52285;&#54840; &#50577;&#49885; &#48708;&#44368;&#44592; &#50756;&#47308;'},
    {id:'v27_thermal_analyst',n:'&#50676;&#44368; &#48516;&#49437;&#44032;',d:'&#50676;&#44368; &#48652;&#47551;&#51648; &#48516;&#49437; &#50756;&#47308;'},
    {id:'v27_ceiling_scholar',n:'&#52380;&#51109; &#54617;&#51088;',d:'&#50864;&#47932;&#52380;&#51109; &#46020;&#44048; &#53456;&#49353; &#50756;&#47308;'},
    {id:'v27_sun_planner',n:'&#51068;&#51312;&#47049; &#49444;&#44228;&#49324;',d:'&#51068;&#51312;&#47049; &#49884;&#48044;&#47112;&#51060;&#53552; &#50756;&#47308;'},
    {id:'v27_fence_master',n:'&#45812;&#51109; &#47560;&#49828;&#53552;',d:'&#45812;&#51109; &#50577;&#49885; 10&#51333; &#47784;&#46160; &#54869;&#51064;'},
    {id:'v27_fire_inspector',n:'&#49548;&#48169; &#44160;&#49324;&#44288;',d:'&#49548;&#48169;&#50504;&#51204; &#54217;&#44032; &#50756;&#47308;'},
    {id:'v27_stair_designer',n:'&#44228;&#45800; &#49444;&#44228;&#49324;',d:'&#44228;&#45800; &#50577;&#49885; 10&#51333; &#47784;&#46160; &#54869;&#51064;'},
    {id:'v27_safety_auditor',n:'&#50504;&#51204;&#51652;&#45800; &#44048;&#46021;&#44288;',d:'&#51333;&#54633; &#50504;&#51204;&#51652;&#45800; &#50756;&#47308;'},
    {id:'v27_quiz_perfect',n:'v27 &#47564;&#51216;&#50773;',d:'v27 &#53748;&#51592; &#47564;&#51216; &#45804;&#49457;'},
    {id:'v27_all_features',n:'v27 &#50756;&#51204;&#51221;&#48373;',d:'v27 &#47784;&#46304; &#44592;&#45733; &#52404;&#54744;'},
    {id:'v27_benchmark_clear',n:'&#48292;&#52824;&#47560;&#53356; &#46028;&#54028;',d:'The Sims/Home Design &#45824;&#48708; &#50864;&#50948; &#54869;&#51064;'},
    {id:'v27_complete',n:'v27 &#47560;&#49828;&#53552;',d:'v27 &#51204;&#52404; &#50756;&#47308;'}
  ];
  newAch.forEach(function(a){
    if(!existing.find(function(e){return e.id===a.id;})){existing.push(a);}
  });
  try{localStorage.setItem(achKey,JSON.stringify(existing));}catch(e){}
})();

// ============ Navigation Menu ============
(function(){
  var menuItems = [
    {icon:'\u{1F3E3}',label:'창호 비교',fn:'v27Window.open()'},
    {icon:'\u{1F321}',label:'열교 분석',fn:'v27Thermal.open()'},
    {icon:'\u{1F3E0}',label:'천장 도감',fn:'v27Ceiling.open()'},
    {icon:'☀',label:'일조량',fn:'v27Sun.open()'},
    {icon:'\u{1F331}',label:'담장 비교',fn:'v27Fence.open()'},
    {icon:'\u{1F525}',label:'소방안전',fn:'v27Fire.open()'},
    {icon:'\u{1FA9C}',label:'계단 도감',fn:'v27Stair.open()'},
    {icon:'\u{1F6E1}',label:'안전진단',fn:'v27Safety.open()'},
    {icon:'❓',label:'v27 퀸즈',fn:'v27OpenQuiz()'}
  ];
  var existingMenu = document.querySelector('.v26-float-menu') || document.querySelector('.v25-float-menu') || document.querySelector('.v24-menu') || document.querySelector('.v23-menu') || document.querySelector('.v22-menu') || document.querySelector('.v21-menu') || document.querySelector('.v20-menu') || document.querySelector('.v19-menu');
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
    menu.className = 'v27-float-menu';
    menu.style.cssText = 'position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4100;display:flex;flex-direction:column;gap:6px';
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
    'Q':function(){v27Window.open()},
    'W':function(){v27Thermal.open()},
    'E':function(){v27Ceiling.open()},
    'R':function(){v27Sun.open()},
    'T':function(){v27Fence.open()},
    'Y':function(){v27Fire.open()},
    'U':function(){v27Stair.open()},
    'I':function(){v27Safety.open()},
    '0':function(){v27OpenQuiz()}
  };
  var fn = map[e.key];
  if(fn){e.preventDefault();fn();}
});

} // end __hbV27 guard

// =====================================================
// House Builder v26.0 Patch
// 전통벽체공법비교기Canvas620x400_10종6축Radar단열방수내구시공친환경비용
// 건축비례미황금비분석기Canvas640x400_8건축물비례히트맵피보나치적합도
// 전통난간양식도감Canvas600x380_10종5축Radar미관안전전통내구시공
// 건축생애주기비용분석기Canvas620x400_6건물50년LCC라인차트영역
// 전통단청문양갤러리Canvas640x400_10종4축Bar복잡도색상상징보존
// 건축환기효율시뮬레이터Canvas620x400_8실ACH듀얼바CO2농도
// 전통마당활용분석기Canvas600x380_8종마당6축Radar활용채광통풍
// 건축종합마스터리대시보드Canvas620x400_8KPI반원게이지종합S~D등급
// 퀴즈+15(315->330)+업적+12(278->290)+SFX16종+키보드Shift+Q/W/E/R/T/Y/U/I/9
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV26) {
window.__hbV26 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v26-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5600;overflow-y:auto;padding:16px}',
    '.v26-panel.active{display:block}',
    '.v26-box{max-width:720px;margin:40px auto}',
    '.v26-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v26-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v26-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v26-close:hover{background:#d4a57a}',
    '.v26-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v26-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v26-tab:hover,.v26-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v26-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v26-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v26-stat .s{text-align:center}',
    '.v26-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v26-stat .sl{font-size:11px;color:#c4956a}',
    '.v26-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v26-btn-sm:hover{background:#d4a57a}',
    '@media(max-width:600px){.v26-box{margin:16px auto}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ============ SFX Engine ============
var v26Sfx = (function(){
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
    open:function(){play(523,'sine',.15,.12);setTimeout(function(){play(659,'sine',.12,.1);},80);},
    close:function(){play(392,'sine',.12,.1);},
    tab:function(){play(587,'triangle',.08,.1);},
    hover:function(){play(440,'sine',.05,.06);},
    correct:function(){play(523,'sine',.1,.12);setTimeout(function(){play(659,'sine',.1,.1);},100);setTimeout(function(){play(784,'sine',.15,.12);},200);},
    wrong:function(){play(200,'sawtooth',.2,.1);},
    achieve:function(){play(523,'sine',.12,.15);setTimeout(function(){play(659,'sine',.12,.12);},120);setTimeout(function(){play(784,'sine',.12,.12);},240);setTimeout(function(){play(1047,'sine',.2,.15);},360);},
    click:function(){play(880,'sine',.04,.08);},
    complete:function(){play(523,'sine',.15,.12);setTimeout(function(){play(784,'sine',.15,.12);},150);setTimeout(function(){play(1047,'sine',.2,.15);},300);},
    radar:function(){play(330,'triangle',.1,.08);},
    gauge:function(){play(440,'sine',.08,.07);},
    heatmap:function(){play(660,'triangle',.06,.07);},
    network:function(){play(550,'sine',.07,.08);},
    line:function(){play(494,'triangle',.08,.07);},
    bar:function(){play(370,'square',.06,.06);},
    grade:function(g){var f=g==='S'?1047:g==='A'?880:g==='B'?740:g==='C'?587:440;play(f,'sine',.2,.12);}
  };
})();

// ============ Data ============
var V26_WALL_DATA = [
  {n:'흑벽 (흙벽)',a:[82,70,65,60,95,85],d:'짚과 흙을 섞어 만든 전통 벽체, 습도 조절 우수'},
  {n:'돌벽 (돌벽)',a:[60,85,95,40,90,55],d:'자연석을 쌓아 만든 견고한 벽체'},
  {n:'판벽 (판벽)',a:[70,78,70,75,85,80],d:'나무 판자를 세워 만든 벽체'},
  {n:'심벽 (심벽)',a:[78,72,68,55,92,75],d:'나무 골조에 흙을 채운 전통 벽체'},
  {n:'황토벽',a:[88,65,60,50,88,70],d:'황토를 주재료로 한 건강 벽체'},
  {n:'시멘트 벽',a:[55,50,90,90,15,60],d:'시멘트 모르타르 현대식 벽체'},
  {n:'적벽돌 벽',a:[65,80,88,82,30,55],d:'적벽돌을 쌓은 현대 전통 혼합 벽체'},
  {n:'유리벽 (커튼월)',a:[30,92,85,70,5,25],d:'유리를 주재료로 한 현대 외벽'},
  {n:'드라이비트',a:[90,70,75,85,10,65],d:'외단열 미장 마감 시스템'},
  {n:'한옥 복합벽',a:[85,82,78,65,80,60],d:'전통 기법과 현대 단열 혼합'}
];
var V26_WALL_AXES = ['단열','미관','내구','시공','친환경','비용'];

var V26_GOLDEN_DATA = [
  {n:'한옥',ratios:[1.58,1.62,1.55,1.60],fit:92,d:'처마 비례와 기둥 간격에 황금비 적용'},
  {n:'서원',ratios:[1.60,1.64,1.58,1.61],fit:88,d:'강학 공간과 제향 공간의 비례'},
  {n:'정자',ratios:[1.65,1.60,1.70,1.55],fit:78,d:'기둥 높이와 지붕 곡선의 조화'},
  {n:'사찰',ratios:[1.61,1.62,1.59,1.63],fit:95,d:'다포식 공포와 지붕선의 완벽한 비례'},
  {n:'궁결',ratios:[1.62,1.60,1.63,1.58],fit:90,d:'전각 배치와 행각 비례의 황금비'},
  {n:'성골',ratios:[1.50,1.55,1.48,1.52],fit:65,d:'방어 기능 우선으로 비례미 제한'},
  {n:'탑',ratios:[1.61,1.618,1.60,1.62],fit:97,d:'층간 체감률에 완벽한 피보나치 비율'},
  {n:'석등',ratios:[1.59,1.57,1.62,1.60],fit:85,d:'대석과 옥개석 비례 조화'}
];
var V26_GOLDEN_PARTS = ['높이/폭','지붕/벽체','기둥/간격','처마/몸체'];

var V26_RAILING_DATA = [
  {n:'계자 난간',a:[90,85,95,80,72],d:'ㄱ자 모양 기둥의 전통 난간'},
  {n:'평난간',a:[70,88,80,85,90],d:'수평 부재로 구성된 기본 난간'},
  {n:'돌난간',a:[75,92,90,95,55],d:'석재로 조각한 장식 난간'},
  {n:'아자 난간',a:[95,78,92,70,60],d:'아(亞)자 무늬 투각 난간'},
  {n:'만자 난간',a:[92,80,88,72,65],d:'만(卍)자 문양 격자 난간'},
  {n:'꽃무늬 난간',a:[98,75,90,65,55],d:'꽃 문양을 투각한 화려한 난간'},
  {n:'귀갑 난간',a:[88,82,85,75,68],d:'거북 등 모양 육각 격자 난간'},
  {n:'운판 난간',a:[85,80,82,78,70],d:'구름 무늬 판재 난간'},
  {n:'짧은 난간',a:[60,90,65,88,92],d:'낮은 높이의 간결한 난간'},
  {n:'교란 난간',a:[82,85,78,82,75],d:'X자 교차 격자 난간'}
];
var V26_RAIL_AXES = ['미관','안전','전통','내구','시공'];

var V26_LCC_DATA = [
  {n:'한옥',costs:[100,3,2,5,8],life:80,color:'#c4956a'},
  {n:'기와집',costs:[85,4,2.5,6,7],life:70,color:'#e67e22'},
  {n:'초가집',costs:[40,8,1.5,12,5],life:30,color:'#27ae60'},
  {n:'서원',costs:[120,3.5,2,4,10],life:100,color:'#3498db'},
  {n:'현대주택',costs:[90,2,4,3,9],life:50,color:'#9b59b6'},
  {n:'정자',costs:[60,5,1,7,6],life:60,color:'#1abc9c'}
];

var V26_DANCHEONG_DATA = [
  {n:'머리초',comp:85,colors:8,sym:80,pres:60,d:'도리와 보 끝에 그리는 장식'},
  {n:'별지화',comp:95,colors:12,sym:90,pres:45,d:'별도 판에 그려 부착하는 그림'},
  {n:'녹화',comp:70,colors:6,sym:65,pres:70,d:'녹색 계열 기본 단청'},
  {n:'금문',comp:90,colors:10,sym:85,pres:50,d:'금박 문양이 포함된 고급 단청'},
  {n:'비천문',comp:92,colors:11,sym:95,pres:40,d:'하늘을 나는 천인 문양'},
  {n:'봉황문',comp:88,colors:9,sym:92,pres:55,d:'봉황 문양의 격조 높은 단청'},
  {n:'연꽃문',comp:78,colors:7,sym:75,pres:65,d:'연꽃 형상의 불교적 문양'},
  {n:'용문',comp:96,colors:14,sym:98,pres:35,d:'용 문양의 최고급 단청'},
  {n:'학문',comp:82,colors:8,sym:88,pres:58,d:'학 문양의 장수 상징 단청'},
  {n:'기린문',comp:86,colors:9,sym:90,pres:48,d:'기린 문양의 상서로운 단청'}
];

var V26_VENT_DATA = [
  {n:'안방',nat:2.5,mech:6.0,co2:650,opt:[3,8]},
  {n:'거실',nat:3.0,mech:8.0,co2:580,opt:[4,10]},
  {n:'부엌',nat:4.5,mech:15.0,co2:400,opt:[6,15]},
  {n:'서재',nat:1.5,mech:4.0,co2:720,opt:[2,6]},
  {n:'사랑방',nat:2.0,mech:5.0,co2:680,opt:[3,7]},
  {n:'대청',nat:8.0,mech:12.0,co2:420,opt:[5,12]},
  {n:'다락',nat:1.0,mech:3.0,co2:780,opt:[2,5]},
  {n:'문간방',nat:2.2,mech:5.5,co2:700,opt:[3,7]}
];

var V26_YARD_DATA = [
  {n:'안마당',a:[95,80,75,90,85,92],d:'여성 생활 공간 중심 마당'},
  {n:'사랑마당',a:[88,85,80,70,90,85],d:'남성 손님 맞이 공간'},
  {n:'뒷마당',a:[75,60,70,95,65,70],d:'가사노동과 저장 공간'},
  {n:'옆마당',a:[70,75,85,80,72,78],d:'통행과 작업 겸용 공간'},
  {n:'화초마당',a:[60,90,65,75,98,80],d:'화초 재배와 감상 공간'},
  {n:'연믷마당',a:[55,70,60,85,95,65],d:'연못과 정원이 있는 공간'},
  {n:'정원',a:[50,88,72,80,92,75],d:'조경이 갖춰진 감상 공간'},
  {n:'작업마당',a:[98,65,80,60,45,90],d:'농사/가사 작업 공간'}
];
var V26_YARD_AXES = ['활용도','채광','통풍','프라이버시','미관','접근성'];

// ============ Achievement System ============
var v26AchList = [
  {id:'v26_wall_all',n:'벽체 대사',d:'벽체 10종 전체 탐색',icon:'🧱'},
  {id:'v26_golden',n:'황금비 마스터',d:'비례미 분석 완료',icon:'🔶'},
  {id:'v26_railing',n:'난간 박사',d:'난간 10종 전체 탐색',icon:'🎉'},
  {id:'v26_lcc',n:'생애주기 분석가',d:'LCC 분석 6건물 완료',icon:'📊'},
  {id:'v26_dancheong',n:'단청 명장',d:'단청 10종 전체 감상',icon:'🎨'},
  {id:'v26_vent',n:'환기 전문가',d:'환기 분석 8실 완료',icon:'🌬️'},
  {id:'v26_yard',n:'마당 설계사',d:'마당 8종 전체 분석',icon:'🏡'},
  {id:'v26_master',n:'종합 마스터리',d:'종합 대시보드 확인',icon:'🏆'},
  {id:'v26_quiz5',n:'v26 퀵즈 5문',d:'v26 퀴즈 5문 정답',icon:'📝'},
  {id:'v26_quiz10',n:'v26 퀵즈 10문',d:'v26 퀴즈 10문 정답',icon:'📚'},
  {id:'v26_quiz15',n:'v26 퀵즈 만점',d:'v26 퀴즈 15문 전부 정답',icon:'🌟'},
  {id:'v26_explore3',n:'탐험가 Lv.26',d:'v26 기능 3개 이상 사용',icon:'🔍'}
];
var v26Explored = {};
function v26TrackExplore(key){
  v26Explored[key]=true;
  if(Object.keys(v26Explored).length>=3) v26CheckAch('v26_explore3');
}
function v26CheckAch(id){
  var k='hb_ach_'+id;
  if(localStorage.getItem(k)) return;
  localStorage.setItem(k,'1');
  var a=v26AchList.find(function(x){return x.id===id;});
  if(!a) return;
  v26Sfx.achieve();
  var t=document.getElementById('achToast');
  if(t){
    t.querySelector('.ach-icon').textContent=a.icon;
    t.querySelector('.ach-name').textContent=a.n;
    t.classList.add('show');
    setTimeout(function(){t.classList.remove('show');},3500);
  }
}

// ============ Canvas Helpers ============
function v26CreateCanvas(w,h,parent){
  var c=document.createElement('canvas');
  c.width=w;c.height=h;c.className='v26-canvas';
  c.style.cssText='width:100%;max-width:'+w+'px;height:auto';
  parent.appendChild(c);
  return c;
}
function v26DrawRadar(ctx,cx,cy,r,data,axes,color,fill){
  var n=axes.length,step=Math.PI*2/n;
  ctx.strokeStyle='rgba(196,149,106,.2)';ctx.lineWidth=1;
  for(var ring=1;ring<=5;ring++){
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var a=-Math.PI/2+step*(i%n),rr=r*ring/5;
      ctx[i?'lineTo':'moveTo'](cx+Math.cos(a)*rr,cy+Math.sin(a)*rr);
    }
    ctx.closePath();ctx.stroke();
  }
  ctx.strokeStyle='rgba(196,149,106,.15)';
  for(var i=0;i<n;i++){
    var a=-Math.PI/2+step*i;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);ctx.stroke();
  }
  ctx.font='11px -apple-system,sans-serif';ctx.fillStyle='#c4956a';ctx.textAlign='center';ctx.textBaseline='middle';
  for(var i=0;i<n;i++){
    var a=-Math.PI/2+step*i,tx=cx+Math.cos(a)*(r+18),ty=cy+Math.sin(a)*(r+18);
    ctx.fillText(axes[i],tx,ty);
  }
  ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=2;
  ctx.fillStyle=fill||color.replace(')',',0.15)').replace('rgb','rgba');
  for(var i=0;i<=n;i++){
    var a=-Math.PI/2+step*(i%n),v=data[i%n]/100*r;
    ctx[i?'lineTo':'moveTo'](cx+Math.cos(a)*v,cy+Math.sin(a)*v);
  }
  ctx.closePath();ctx.fill();ctx.stroke();
  for(var i=0;i<n;i++){
    var a=-Math.PI/2+step*i,v=data[i]/100*r;
    ctx.beginPath();ctx.arc(cx+Math.cos(a)*v,cy+Math.sin(a)*v,3,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();
  }
}

// ============ 1. 전통 벽체 공법 비교기 ============
var v26Wall = {
  panel:null, canvas:null, idx:0, cmpIdx:-1,
  open:function(){
    v26Sfx.open(); v26TrackExplore('wall');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🧱 전통 벽체 공법 비교기</h2><p>10종 벽체 공법의 6축 성능 Radar 비교</p>';
    var tabs=document.createElement('div');tabs.className='v26-tabs';
    var self=this;
    V26_WALL_DATA.forEach(function(w,i){
      var t=document.createElement('button');t.className='v26-tab'+(i===0?' active':'');t.textContent=w.n;
      t.onclick=function(){self.idx=i;self.cmpIdx=-1;box.querySelectorAll('.v26-tab').forEach(function(b,j){b.classList.toggle('active',j===i);});self.draw();v26Sfx.tab();};
      tabs.appendChild(t);
    });
    box.appendChild(tabs);
    var cmpDiv=document.createElement('div');cmpDiv.style.cssText='text-align:center;margin-bottom:8px';
    var cmpBtn=document.createElement('button');cmpBtn.className='v26-btn-sm';cmpBtn.textContent='비교 모드';
    cmpBtn.onclick=function(){self.cmpIdx=(self.cmpIdx+1)%V26_WALL_DATA.length;if(self.cmpIdx===self.idx)self.cmpIdx=(self.cmpIdx+1)%V26_WALL_DATA.length;self.draw();v26Sfx.radar();};
    cmpDiv.appendChild(cmpBtn);
    box.appendChild(cmpDiv);
    this.canvas=v26CreateCanvas(620,400,box);
    var info=document.createElement('div');info.id='v26-wall-info';info.style.cssText='text-align:center;color:#e8d5c0;font-size:13px;margin-top:8px;line-height:1.6';
    box.appendChild(info);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
    var allViewed=new Set();
    var origDraw=this.draw.bind(this);
    var origDrawFn=this.draw;
    this.draw=function(){origDraw();allViewed.add(self.idx);if(allViewed.size>=10)v26CheckAch('v26_wall_all');};
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    var d=V26_WALL_DATA[this.idx];
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText(d.n,w/2,28);
    var cx=w/2,cy=h/2+10,r=130;
    v26DrawRadar(ctx,cx,cy,r,d.a,V26_WALL_AXES,'rgb(196,149,106)');
    if(this.cmpIdx>=0){
      var d2=V26_WALL_DATA[this.cmpIdx];
      v26DrawRadar(ctx,cx,cy,r,d2.a,V26_WALL_AXES,'rgb(100,180,220)','rgba(100,180,220,0.1)');
      ctx.font='12px -apple-system,sans-serif';ctx.fillStyle='#64b4dc';ctx.textAlign='left';
      ctx.fillText('● '+d2.n+' (비교)',14,h-14);
    }
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var grade=avg>=85?'S':avg>=75?'A':avg>=65?'B':avg>=50?'C':'D';
    ctx.font='bold 14px -apple-system,sans-serif';ctx.fillStyle='#c4956a';ctx.textAlign='left';
    ctx.fillText('● 종합: '+avg+'점 ('+grade+'등급)',14,h-14);
    var info=document.getElementById('v26-wall-info');
    if(info) info.innerHTML=d.d+'<br>단열: '+d.a[0]+' | 미관: '+d.a[1]+' | 내구: '+d.a[2]+' | 시공: '+d.a[3]+' | 친환경: '+d.a[4]+' | 비용: '+d.a[5];
  }
};

// ============ 2. 건축 비례미 황금비 분석기 ============
var v26Golden = {
  panel:null, canvas:null,
  open:function(){
    v26Sfx.open(); v26TrackExplore('golden');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🔶 건축 비례미 황금비 분석기</h2><p>8종 전통 건축물의 황금비(1.618) 적합도 분석</p>';
    this.canvas=v26CreateCanvas(640,400,box);
    var info=document.createElement('div');info.id='v26-golden-info';info.style.cssText='text-align:center;color:#e8d5c0;font-size:13px;margin-top:8px;line-height:1.6';
    box.appendChild(info);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';var self=this;
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
    this.canvas.addEventListener('mousemove',function(e){self.onHover(e);});
    this.canvas.addEventListener('touchstart',function(e){var t=e.touches[0];self.onHover({offsetX:t.clientX-self.canvas.getBoundingClientRect().left,offsetY:t.clientY-self.canvas.getBoundingClientRect().top});},{passive:true});
  },
  onHover:function(e){
    var c=this.canvas,x=e.offsetX*(c.width/c.offsetWidth),y=e.offsetY*(c.height/c.offsetHeight);
    var colW=c.width/(V26_GOLDEN_DATA.length+1),startX=colW;
    var idx=-1;
    V26_GOLDEN_DATA.forEach(function(d,i){
      var cx=startX+i*colW;
      if(Math.abs(x-cx)<colW/2) idx=i;
    });
    var info=document.getElementById('v26-golden-info');
    if(idx>=0&&info){
      var d=V26_GOLDEN_DATA[idx];
      info.innerHTML='<b>'+d.n+'</b>: '+d.d+'<br>황금비 적합도: '+d.fit+'%';
      v26Sfx.hover();
    }
    v26CheckAch('v26_golden');
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('건축물별 황금비(1.618) 적합도',w/2,28);
    var phi=1.618;
    ctx.setLineDash([5,5]);ctx.strokeStyle='rgba(255,215,0,.4)';ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(60,h-50);ctx.lineTo(w-20,h-50);ctx.stroke();
    ctx.setLineDash([]);
    var colW=(w-80)/V26_GOLDEN_DATA.length,startX=60;
    var partH=(h-100)/4;
    V26_GOLDEN_DATA.forEach(function(d,i){
      var cx=startX+i*colW+colW/2;
      for(var p=0;p<4;p++){
        var ratio=d.ratios[p],dev=Math.abs(ratio-phi),fit=Math.max(0,100-dev*200);
        var color=fit>=90?'#27ae60':fit>=70?'#f39c12':fit>=50?'#e67e22':'#e74c3c';
        var bh=fit/100*(partH-8);
        var by=50+p*partH+(partH-8)-bh;
        ctx.fillStyle=color;
        ctx.fillRect(cx-12,by,24,bh);
        ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='9px sans-serif';ctx.textAlign='center';
        ctx.fillText(ratio.toFixed(3),cx,by-4);
      }
      ctx.fillStyle='#f5deb3';ctx.font='11px -apple-system,sans-serif';ctx.textAlign='center';
      ctx.fillText(d.n,cx,h-32);
      var grade=d.fit>=90?'S':d.fit>=80?'A':d.fit>=70?'B':d.fit>=60?'C':'D';
      ctx.fillStyle=d.fit>=90?'#f5deb3':d.fit>=80?'#27ae60':d.fit>=70?'#f39c12':'#e74c3c';
      ctx.font='bold 12px sans-serif';
      ctx.fillText(grade+' '+d.fit+'%',cx,h-16);
    });
    ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='right';
    V26_GOLDEN_PARTS.forEach(function(p,i){
      ctx.fillText(p,55,50+i*partH+partH/2);
    });
    ctx.fillStyle='rgba(255,215,0,.6)';ctx.font='10px sans-serif';ctx.textAlign='left';
    ctx.fillText('φ = 1.618 (황금비)',w-130,h-52);
  }
};

// ============ 3. 전통 난간 양식 도감 ============
var v26Railing = {
  panel:null, canvas:null, idx:0,
  open:function(){
    v26Sfx.open(); v26TrackExplore('railing');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🎉 전통 난간 양식 도감</h2><p>10종 전통 난간의 5축 성능 Radar</p>';
    var tabs=document.createElement('div');tabs.className='v26-tabs';
    var self=this;var viewed=new Set();
    V26_RAILING_DATA.forEach(function(r,i){
      var t=document.createElement('button');t.className='v26-tab'+(i===0?' active':'');t.textContent=r.n;
      t.onclick=function(){self.idx=i;viewed.add(i);if(viewed.size>=10)v26CheckAch('v26_railing');
        box.querySelectorAll('.v26-tab').forEach(function(b,j){b.classList.toggle('active',j===i);});self.draw();v26Sfx.tab();};
      tabs.appendChild(t);
    });
    box.appendChild(tabs);
    this.canvas=v26CreateCanvas(600,380,box);
    var info=document.createElement('div');info.id='v26-rail-info';info.style.cssText='text-align:center;color:#e8d5c0;font-size:13px;margin-top:8px;line-height:1.6';
    box.appendChild(info);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    var d=V26_RAILING_DATA[this.idx];
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText(d.n,w/2,28);
    v26DrawRadar(ctx,w/2,h/2+10,120,d.a,V26_RAIL_AXES,'rgb(196,149,106)');
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var grade=avg>=85?'S':avg>=75?'A':avg>=65?'B':avg>=55?'C':'D';
    ctx.font='bold 14px sans-serif';ctx.fillStyle='#c4956a';ctx.textAlign='left';
    ctx.fillText('● 종합: '+avg+' ('+grade+')',14,h-14);
    var info=document.getElementById('v26-rail-info');
    if(info) info.innerHTML=d.d+'<br>'+V26_RAIL_AXES.map(function(a,i){return a+': '+d.a[i];}).join(' | ');
  }
};

// ============ 4. 건축 생애주기 비용 분석기 ============
var v26LCC = {
  panel:null, canvas:null,
  open:function(){
    v26Sfx.open(); v26TrackExplore('lcc');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
    v26CheckAch('v26_lcc');
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>📊 건축 생애주기 비용 분석기</h2><p>6건물 50년 LCC(Life Cycle Cost) 누적 비용 분석</p>';
    this.canvas=v26CreateCanvas(620,400,box);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';var self=this;
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('50년 생애주기 비용 분석 (LCC)',w/2,28);
    var padL=70,padR=30,padT=50,padB=50;
    var gw=w-padL-padR,gh=h-padT-padB;
    ctx.strokeStyle='rgba(196,149,106,.2)';ctx.lineWidth=1;
    for(var i=0;i<=5;i++){
      var y=padT+gh*i/5;
      ctx.beginPath();ctx.moveTo(padL,y);ctx.lineTo(w-padR,y);ctx.stroke();
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='right';
      ctx.fillText((500-i*100)+'백만',padL-8,y+4);
    }
    for(var yr=0;yr<=50;yr+=10){
      var x=padL+gw*yr/50;
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='center';
      ctx.fillText(yr+'년',x,h-padB+18);
    }
    V26_LCC_DATA.forEach(function(b){
      ctx.beginPath();ctx.strokeStyle=b.color;ctx.lineWidth=2;
      var init=b.costs[0],maint=b.costs[1],energy=b.costs[2],repair=b.costs[3],demo=b.costs[4];
      for(var yr=0;yr<=50;yr++){
        var cost=init + maint*yr + energy*yr + (yr>10?repair*Math.floor((yr-10)/10):0) + (yr>=b.life?demo:0);
        var x=padL+gw*yr/50,y=padT+gh*(1-cost/500);
        y=Math.max(padT,Math.min(padT+gh,y));
        ctx[yr?'lineTo':'moveTo'](x,y);
      }
      ctx.stroke();
      var lastCost=init+maint*50+energy*50+repair*Math.floor(40/10)+demo;
      var lx=w-padR+4,ly=padT+gh*(1-Math.min(lastCost,500)/500);
      ctx.fillStyle=b.color;ctx.font='10px sans-serif';ctx.textAlign='left';
      ctx.fillText(b.n,lx,ly);
    });
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';
    ctx.fillText('경과 년수',w/2,h-8);
    ctx.save();ctx.translate(14,h/2);ctx.rotate(-Math.PI/2);ctx.fillText('누적 비용 (백만원)',0,0);ctx.restore();
  }
};

// ============ 5. 전통 단청 문양 갤러리 ============
var v26Dancheong = {
  panel:null, canvas:null, idx:0,
  open:function(){
    v26Sfx.open(); v26TrackExplore('dancheong');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🎨 전통 단청 문양 갤러리</h2><p>10종 단청 문양의 4축 분석</p>';
    var tabs=document.createElement('div');tabs.className='v26-tabs';
    var self=this;var viewed=new Set();
    V26_DANCHEONG_DATA.forEach(function(d,i){
      var t=document.createElement('button');t.className='v26-tab'+(i===0?' active':'');t.textContent=d.n;
      t.onclick=function(){self.idx=i;viewed.add(i);if(viewed.size>=10)v26CheckAch('v26_dancheong');
        box.querySelectorAll('.v26-tab').forEach(function(b,j){b.classList.toggle('active',j===i);});self.draw();v26Sfx.tab();};
      tabs.appendChild(t);
    });
    box.appendChild(tabs);
    this.canvas=v26CreateCanvas(640,400,box);
    var info=document.createElement('div');info.id='v26-dan-info';info.style.cssText='text-align:center;color:#e8d5c0;font-size:13px;margin-top:8px;line-height:1.6';
    box.appendChild(info);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    var d=V26_DANCHEONG_DATA[this.idx];
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText(d.n+' 단청',w/2,28);
    var danColors=['#e74c3c','#27ae60','#3498db','#f39c12','#9b59b6','#1abc9c','#e67e22','#c0392b','#2980b9','#d35400','#8e44ad','#16a085','#f1c40f','#2ecc71'];
    var patternY=50,patternH=100;
    for(var row=0;row<4;row++){
      for(var col=0;col<Math.min(d.colors,14);col++){
        var px=80+col*40,py=patternY+row*25;
        ctx.fillStyle=danColors[col%danColors.length];
        ctx.globalAlpha=0.6+row*0.1;
        if(row%2===0){
          ctx.beginPath();ctx.arc(px,py,10,0,Math.PI*2);ctx.fill();
        } else {
          ctx.fillRect(px-8,py-8,16,16);
        }
      }
    }
    ctx.globalAlpha=1;
    var axes=['복잡도','색상수','상징성','보존난이도'];
    var vals=[d.comp,d.colors/14*100,d.sym,100-d.pres];
    var barW=100,barH=20,startX=80,startY=h-160;
    axes.forEach(function(a,i){
      var y=startY+i*45;
      ctx.fillStyle='rgba(255,255,255,.08)';ctx.fillRect(startX,y,w-160,barH);
      var val=vals[i];
      var color=val>=80?'#27ae60':val>=60?'#f39c12':val>=40?'#e67e22':'#e74c3c';
      ctx.fillStyle=color;
      ctx.fillRect(startX,y,(w-160)*val/100,barH);
      ctx.fillStyle='#c4956a';ctx.font='12px -apple-system,sans-serif';ctx.textAlign='right';
      ctx.fillText(a,startX-8,y+15);
      ctx.fillStyle='#f5deb3';ctx.font='bold 12px sans-serif';ctx.textAlign='left';
      ctx.fillText(Math.round(val),startX+(w-160)*val/100+6,y+15);
    });
    var info=document.getElementById('v26-dan-info');
    if(info) info.innerHTML=d.d+'<br>복잡도: '+d.comp+' | 색상수: '+d.colors+' | 상징성: '+d.sym+' | 보존난이도: '+d.pres;
  }
};

// ============ 6. 건축 환기 효율 시뮬레이터 ============
var v26Vent = {
  panel:null, canvas:null,
  open:function(){
    v26Sfx.open(); v26TrackExplore('vent');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
    v26CheckAch('v26_vent');
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🌬️ 건축 환기 효율 시뮬레이터</h2><p>8실 자연환기/기계환기 ACH 비교 + CO₂ 농도</p>';
    this.canvas=v26CreateCanvas(620,400,box);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';var self=this;
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('실별 환기량 (ACH) 비교',w/2,28);
    var padL=80,padR=30,padT=50,padB=60;
    var gw=w-padL-padR,gh=h-padT-padB;
    var barW=gw/V26_VENT_DATA.length,gap=8;
    var maxACH=16;
    ctx.strokeStyle='rgba(196,149,106,.15)';ctx.lineWidth=1;
    for(var i=0;i<=4;i++){
      var y=padT+gh*i/4;
      ctx.beginPath();ctx.moveTo(padL,y);ctx.lineTo(w-padR,y);ctx.stroke();
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='right';
      ctx.fillText((maxACH-maxACH*i/4).toFixed(0)+' ACH',padL-8,y+4);
    }
    V26_VENT_DATA.forEach(function(d,i){
      var x=padL+i*barW+gap;
      var bw=(barW-gap*2)/2;
      var natH=d.nat/maxACH*gh,mechH=d.mech/maxACH*gh;
      ctx.fillStyle='#27ae60';
      ctx.fillRect(x,padT+gh-natH,bw,natH);
      ctx.fillStyle='#3498db';
      ctx.fillRect(x+bw+2,padT+gh-mechH,bw,mechH);
      ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='9px sans-serif';ctx.textAlign='center';
      ctx.fillText(d.nat.toFixed(1),x+bw/2,padT+gh-natH-4);
      ctx.fillText(d.mech.toFixed(1),x+bw+2+bw/2,padT+gh-mechH-4);
      var optMinY=padT+gh-d.opt[0]/maxACH*gh,optMaxY=padT+gh-d.opt[1]/maxACH*gh;
      ctx.fillStyle='rgba(255,215,0,.08)';
      ctx.fillRect(x-2,optMaxY,barW-gap*2+4,optMinY-optMaxY);
      ctx.strokeStyle='rgba(255,215,0,.4)';ctx.setLineDash([3,3]);
      ctx.beginPath();ctx.moveTo(x-2,optMinY);ctx.lineTo(x+barW-gap*2+2,optMinY);ctx.stroke();
      ctx.beginPath();ctx.moveTo(x-2,optMaxY);ctx.lineTo(x+barW-gap*2+2,optMaxY);ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle='#f5deb3';ctx.font='11px -apple-system,sans-serif';ctx.textAlign='center';
      ctx.fillText(d.n,x+barW/2-gap,h-padB+16);
      var co2Color=d.co2<=500?'#27ae60':d.co2<=700?'#f39c12':'#e74c3c';
      ctx.fillStyle=co2Color;ctx.font='9px sans-serif';
      ctx.fillText('CO₂:'+d.co2,x+barW/2-gap,h-padB+30);
    });
    ctx.fillStyle='#27ae60';ctx.fillRect(padL,h-16,10,10);
    ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='left';
    ctx.fillText('자연환기',padL+14,h-7);
    ctx.fillStyle='#3498db';ctx.fillRect(padL+80,h-16,10,10);
    ctx.fillText('기계환기',padL+94,h-7);
    ctx.fillStyle='rgba(255,215,0,.4)';ctx.fillRect(padL+160,h-16,10,10);
    ctx.fillText('적정 범위',padL+174,h-7);
  }
};

// ============ 7. 전통 마당 활용 분석기 ============
var v26Yard = {
  panel:null, canvas:null, idx:0,
  open:function(){
    v26Sfx.open(); v26TrackExplore('yard');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🏡 전통 마당 활용 분석기</h2><p>8종 전통 마당의 6축 활용도 Radar</p>';
    var tabs=document.createElement('div');tabs.className='v26-tabs';
    var self=this;var viewed=new Set();
    V26_YARD_DATA.forEach(function(y,i){
      var t=document.createElement('button');t.className='v26-tab'+(i===0?' active':'');t.textContent=y.n;
      t.onclick=function(){self.idx=i;viewed.add(i);if(viewed.size>=8)v26CheckAch('v26_yard');
        box.querySelectorAll('.v26-tab').forEach(function(b,j){b.classList.toggle('active',j===i);});self.draw();v26Sfx.tab();};
      tabs.appendChild(t);
    });
    box.appendChild(tabs);
    this.canvas=v26CreateCanvas(600,380,box);
    var info=document.createElement('div');info.id='v26-yard-info';info.style.cssText='text-align:center;color:#e8d5c0;font-size:13px;margin-top:8px;line-height:1.6';
    box.appendChild(info);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    var d=V26_YARD_DATA[this.idx];
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText(d.n,w/2,28);
    v26DrawRadar(ctx,w/2,h/2+10,120,d.a,V26_YARD_AXES,'rgb(196,149,106)');
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var grade=avg>=85?'S':avg>=75?'A':avg>=65?'B':avg>=55?'C':'D';
    ctx.font='bold 14px sans-serif';ctx.fillStyle='#c4956a';ctx.textAlign='left';
    ctx.fillText('● 종합: '+avg+' ('+grade+')',14,h-14);
    var info=document.getElementById('v26-yard-info');
    if(info) info.innerHTML=d.d+'<br>'+V26_YARD_AXES.map(function(a,i){return a+': '+d.a[i];}).join(' | ');
  }
};

// ============ 8. 건축 종합 마스터리 대시보드 ============
var v26Master = {
  panel:null, canvas:null,
  open:function(){
    v26Sfx.open(); v26TrackExplore('master');
    if(!this.panel) this.create();
    this.panel.classList.add('active');
    this.draw();
    v26CheckAch('v26_master');
  },
  create:function(){
    this.panel=document.createElement('div');this.panel.className='v26-panel';
    var box=document.createElement('div');box.className='v26-box';
    box.innerHTML='<h2>🏆 건축 종합 마스터리 대시보드</h2><p>8개 KPI 반원게이지 + 종합 S~D 등급</p>';
    this.canvas=v26CreateCanvas(620,400,box);
    var cl=document.createElement('button');cl.className='v26-close';cl.textContent='닫기';var self=this;
    cl.onclick=function(){self.panel.classList.remove('active');v26Sfx.close();};
    box.appendChild(cl);this.panel.appendChild(box);document.body.appendChild(this.panel);
  },
  draw:function(){
    var c=this.canvas,ctx=c.getContext('2d'),w=c.width,h=c.height;
    ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(20,14,8,.95)';ctx.fillRect(0,0,w,h);
    ctx.font='bold 15px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('건축 종합 마스터리',w/2,28);
    var kpis=[
      {n:'구조',v:82,icon:'🏗️'},
      {n:'미학',v:78,icon:'🎨'},
      {n:'에너지',v:75,icon:'⚡'},
      {n:'전통',v:88,icon:'🏯'},
      {n:'친환경',v:72,icon:'🌿'},
      {n:'비용',v:70,icon:'💰'},
      {n:'내구',v:85,icon:'🛡️'},
      {n:'혁신',v:68,icon:'💡'}
    ];
    var cols=4,rows=2,padX=30,padY=50,gapX=20,gapY=20;
    var cellW=(w-padX*2-(cols-1)*gapX)/cols;
    var cellH=(h-padY-60-(rows-1)*gapY)/rows;
    var total=0,count=0;
    kpis.forEach(function(k,i){
      var col=i%cols,row=Math.floor(i/cols);
      var cx=padX+col*(cellW+gapX)+cellW/2;
      var cy=padY+row*(cellH+gapY)+cellH/2;
      var r=Math.min(cellW,cellH)/2-10;
      ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI,0);ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=8;ctx.stroke();
      var angle=-Math.PI+Math.PI*k.v/100;
      var color=k.v>=80?'#27ae60':k.v>=65?'#f39c12':k.v>=50?'#e67e22':'#e74c3c';
      ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI,angle);ctx.strokeStyle=color;ctx.lineWidth=8;ctx.stroke();
      var nx=cx+Math.cos(angle)*r,ny=cy+Math.sin(angle)*r;
      ctx.beginPath();ctx.arc(nx,ny,4,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
      ctx.font='bold 18px -apple-system,sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(k.v,cx,cy-6);
      ctx.font='11px -apple-system,sans-serif';ctx.fillStyle='#c4956a';
      ctx.fillText(k.n,cx,cy+r+16);
      ctx.font='14px sans-serif';
      ctx.fillText(k.icon,cx,cy-r-8);
      total+=k.v;count++;
    });
    var avg=Math.round(total/count);
    var grade=avg>=85?'S':avg>=75?'A':avg>=65?'B':avg>=55?'C':'D';
    var gColor=grade==='S'?'#ffd700':grade==='A'?'#27ae60':grade==='B'?'#3498db':grade==='C'?'#f39c12':'#e74c3c';
    ctx.font='bold 24px -apple-system,sans-serif';ctx.fillStyle=gColor;ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText('종합: '+grade+' 등급 ('+avg+'점)',w/2,h-20);
    v26Sfx.grade(grade);
  }
};

// ============ Quiz System ============
var v26QuizData = [
  {q:'전통 흑벽의 주요 장점은?',a:['습도 조절 우수','내진 성능','방수 성능','방음 성능'],c:0},
  {q:'황금비의 값은 약?',a:['1.414','1.618','1.732','2.236'],c:1},
  {q:'계자 난간의 ‘계자’는 어떤 모양?',a:['ㄱ자 모양','ㄴ자 모양','ㄷ자 모양','ㄹ자 모양'],c:0},
  {q:'LCC분석에서 가장 수명이 긴 건물은?',a:['한옥','초가집','서원','현대주택'],c:2},
  {q:'단청에서 가장 복잡한 문양은?',a:['봉황문','용문','학문','연꽃문'],c:1},
  {q:'ACH란 무엇의 약자인가?',a:['Air Changes per Hour','Air Cooling per Humidity','Average Climate Heat','Atmospheric Circulation per Hectare'],c:0},
  {q:'전통 한옥에서 안마당의 주요 기능은?',a:['여성 생활 공간','말 사육','무기 보관','가축 사육'],c:0},
  {q:'시멘트 벽의 친환경 점수가 낮은 이유는?',a:['생산 과정 탄소배출','미관 부족','시공 어려움','내구성 부족'],c:0},
  {q:'대청마루의 자연환기 ACH가 높은 이유는?',a:['개방형 구조','밀폐형 구조','지하 공간','천정 닫힘'],c:0},
  {q:'전통 건축에서 황금비 적합도가 가장 높은 것은?',a:['성골','탑','초가집','정자'],c:1},
  {q:'벽체에서 ‘심벽’이란?',a:['나무 골조+흑 채움','벽돌 쌓기','시멘트 바르기','유리 부착'],c:0},
  {q:'RT60은 무엇을 측정하는 지표인가?',a:['잔향 시간','열저항','환기량','채광량'],c:0},
  {q:'단청의 ‘머리초’는 어디에 그리는가?',a:['도리와 보 끝','기둥 하부','바닥','천정 중앙'],c:0},
  {q:'비례미에서 피보나치 수열과 관련된 비율은?',a:['황금비','은 비율','청동 비율','백금 비율'],c:0},
  {q:'전통 꽃무늬 난간의 특징은?',a:['투각 화려함','경제성','간결함','내진 성능'],c:0}
];
var v26QuizState = {idx:0,correct:0,answered:[]};

function v26OpenQuiz(){
  v26Sfx.open(); v26TrackExplore('quiz');
  v26QuizState={idx:0,correct:0,answered:[]};
  var ov=document.getElementById('quizOverlay');
  if(!ov) return;
  ov.classList.add('show');
  v26RenderQuiz();
}
function v26RenderQuiz(){
  var ov=document.getElementById('quizOverlay');if(!ov) return;
  var s=v26QuizState;
  if(s.idx>=v26QuizData.length){
    ov.innerHTML='<div class="quiz-card"><div class="quiz-header"><span class="quiz-title">v26 퀵즈 결과</span></div><div class="quiz-q">🌟 '+s.correct+'/'+v26QuizData.length+' 정답!</div><button class="v26-close" onclick="document.getElementById(\'quizOverlay\').classList.remove(\'show\')">닫기</button></div>';
    if(s.correct>=5) v26CheckAch('v26_quiz5');
    if(s.correct>=10) v26CheckAch('v26_quiz10');
    if(s.correct>=15) v26CheckAch('v26_quiz15');
    return;
  }
  var q=v26QuizData[s.idx];
  var html='<div class="quiz-card"><div class="quiz-header"><span class="quiz-title">v26 건축 퀵즈</span><span class="quiz-progress">'+(s.idx+1)+'/'+v26QuizData.length+'</span></div>';
  html+='<div class="quiz-q">'+q.q+'</div><div class="quiz-opts">';
  q.a.forEach(function(a,i){
    html+='<button class="quiz-opt" onclick="v26Answer('+i+')" style="display:block;width:100%;padding:12px;margin:6px 0;border:1px solid rgba(196,149,106,.3);border-radius:10px;background:rgba(255,255,255,.06);color:#e8d5c0;font-size:14px;cursor:pointer;text-align:left;font-family:inherit">'+a+'</button>';
  });
  html+='</div></div>';
  ov.innerHTML=html;
}
function v26Answer(i){
  var q=v26QuizData[v26QuizState.idx];
  if(i===q.c){v26QuizState.correct++;v26Sfx.correct();}else{v26Sfx.wrong();}
  v26QuizState.idx++;
  setTimeout(v26RenderQuiz,400);
}

// ============ Navigation Menu ============
(function(){
  var menuItems = [
    {icon:'🧱',label:'벽체 공법',fn:'v26Wall.open()'},
    {icon:'🔶',label:'황금비',fn:'v26Golden.open()'},
    {icon:'🎉',label:'난간 도감',fn:'v26Railing.open()'},
    {icon:'📊',label:'LCC 분석',fn:'v26LCC.open()'},
    {icon:'🎨',label:'단청 갤러리',fn:'v26Dancheong.open()'},
    {icon:'🌬️',label:'환기 분석',fn:'v26Vent.open()'},
    {icon:'🏡',label:'마당 분석',fn:'v26Yard.open()'},
    {icon:'🏆',label:'종합 마스터리',fn:'v26Master.open()'},
    {icon:'❓',label:'v26 퀵즈',fn:'v26OpenQuiz()'}
  ];
  var existingMenu = document.querySelector('.v25-float-menu') || document.querySelector('.v24-menu') || document.querySelector('.v23-menu') || document.querySelector('.v22-menu') || document.querySelector('.v21-menu') || document.querySelector('.v20-menu') || document.querySelector('.v19-menu');
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
    menu.className = 'v26-float-menu';
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
    'Q':function(){v26Wall.open()},
    'W':function(){v26Golden.open()},
    'E':function(){v26Railing.open()},
    'R':function(){v26LCC.open()},
    'T':function(){v26Dancheong.open()},
    'Y':function(){v26Vent.open()},
    'U':function(){v26Yard.open()},
    'I':function(){v26Master.open()},
    '9':function(){v26OpenQuiz()}
  };
  var fn = map[e.key];
  if(fn){e.preventDefault();fn();}
});

} // end __hbV26 guard

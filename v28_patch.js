// =====================================================
// House Builder v28.0 Patch
// 전통대문양식비교기Canvas620x400_10종6축Radar위엄방어미관전통규모시공
// 건축습기결로진단기Canvas640x400_8구역이슬점분석듀얼바차트결로위험등급
// 전통처마양식도감Canvas620x400_10종5축Radar차양미관구조전통배수
// 건축생활소음분석기Canvas640x400_8실x6소음원히트맵소음전파경로
// 전통기둥배치설계기Canvas620x400_10종6축Radar구조미관공간전통내구경제
// 건축접근성유니버설디자인평가기Canvas640x400_8구역6항목히트맵종합등급
// 전통돌담쌓기공법도감Canvas620x400_10종5축Radar강도미관전통배수시공
// 건축종합거주성능대시보드Canvas620x400_8KPI반원게이지종합S~D등급
// 퀴즈+15(345->360)+업적+12(302->314)+SFX16종+키보드Shift+Q/W/E/R/T/Y/U/I/0
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV28) {
window.__hbV28 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v28-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5800;overflow-y:auto;padding:16px}',
    '.v28-panel.active{display:block}',
    '.v28-box{max-width:720px;margin:40px auto}',
    '.v28-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v28-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v28-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v28-close:hover{background:#d4a57a}',
    '.v28-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v28-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v28-tab:hover,.v28-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v28-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v28-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v28-stat .s{text-align:center}',
    '.v28-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v28-stat .sl{font-size:11px;color:#c4956a}',
    '.v28-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v28-btn-sm:hover{background:#d4a57a}',
    '@media(max-width:600px){.v28-box{margin:16px auto}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ============ SFX Engine ============
var v28Sfx = (function(){
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
    wrong:function(){play(233,'sawtooth',.2,.1);},
    achieve:function(){play(587,'sine',.12,.15);setTimeout(function(){play(740,'sine',.12,.12);},120);setTimeout(function(){play(880,'sine',.12,.12);},240);setTimeout(function(){play(1175,'sine',.2,.15);},360);},
    click:function(){play(988,'sine',.04,.08);},
    complete:function(){play(587,'sine',.15,.12);setTimeout(function(){play(880,'sine',.15,.12);},150);setTimeout(function(){play(1175,'sine',.2,.15);},300);},
    radar:function(){play(370,'triangle',.1,.08);},
    gauge:function(){play(494,'sine',.08,.07);},
    heatmap:function(){play(740,'triangle',.06,.07);},
    network:function(){play(622,'sine',.07,.08);},
    line:function(){play(554,'triangle',.08,.07);},
    bar:function(){play(415,'square',.06,.06);},
    grade:function(g){var f=g==='S'?1175:g==='A'?988:g==='B'?831:g==='C'?659:494;play(f,'sine',.2,.12);}
  };
})();

// ============ Helper ============
function v28Grade(v,max){var p=v/max*100;return p>=90?'S':p>=75?'A':p>=60?'B':p>=40?'C':'D';}
function v28GradeColor(g){return g==='S'?'#ffd700':g==='A'?'#4ade80':g==='B'?'#60a5fa':g==='C'?'#fb923c':'#f87171';}

// ============================================================
// 1. 전통 대문 양식 비교기 Canvas 620x400
// ============================================================
var V28_GATE_DATA = [
  {n:'솟을대문',a:[95,90,85,92,88,55],d:'양반가의 높이 솟은 권위의 상징 대문'},
  {n:'평대문',a:[50,60,70,80,75,85],d:'일반 서민가옥의 소박한 기본 대문'},
  {n:'일각대문',a:[88,82,78,88,80,60],d:'기둥 하나로 세운 격조 높은 대문'},
  {n:'삼문(三門)',a:[98,95,92,96,90,45],d:'궁궐/사찰의 세 칸 대문, 최고 격식'},
  {n:'협문',a:[35,40,55,70,65,90],d:'담장 사이 작은 쪽문, 실용 출입구'},
  {n:'만월문',a:[72,45,95,85,60,50],d:'원형 달 모양의 정원 장식 문'},
  {n:'사주문',a:[80,78,72,82,76,65],d:'네 기둥이 지탱하는 견고한 대문'},
  {n:'홍살문',a:[92,88,80,94,72,48],d:'붉은 살대의 신성한 의례용 문'},
  {n:'판장문',a:[55,85,60,75,82,78],d:'두꺼운 판자로 만든 방어형 대문'},
  {n:'광문',a:[40,70,50,65,70,88],d:'광 앞에 설치된 실용적 대문'}
];
var V28_GATE_AXES = ['위엄','방어','미관','전통','규모','시공'];

var v28Gate = {
  sel:0,cmp:-1,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-gate-panel');
    if(!p){p=document.createElement('div');p.id='v28-gate-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-gate-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-gate-panel');
    var html='<div class="v28-box"><h2>\u{1F3EF} 전통 대문 양식 비교기</h2><p>한국 전통 대문 10종의 6축 특성 Radar 분석</p>';
    html+='<div class="v28-tabs">';
    V28_GATE_DATA.forEach(function(d,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28Gate.sel='+i+';v28Gate.cmp=-1;v28Gate.render();v28Sfx.tab()">'+d.n+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-gate-cv" class="v28-canvas" width="620" height="400"></canvas>';
    var d=V28_GATE_DATA[self.sel],avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">종합등급</div></div>';
    html+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div>';
    html+='<div class="s"><div class="sv">'+d.n+'</div><div class="sl">선택 양식</div></div></div>';
    html+='<p style="text-align:center;color:#e8d5c0;font-size:13px;margin:8px 0">'+d.d+'</p>';
    if(self.cmp===-1){
      html+='<div style="text-align:center;margin:10px 0"><button class="v28-btn-sm" onclick="v28Gate.cmp=(v28Gate.sel+1)%10;v28Gate.render();v28Sfx.click()">비교 모드</button></div>';
    } else {
      html+='<div class="v28-tabs">';
      V28_GATE_DATA.forEach(function(d2,i){
        if(i===self.sel) return;
        html+='<button class="v28-tab'+(i===self.cmp?' active':'')+'" onclick="v28Gate.cmp='+i+';v28Gate.render();v28Sfx.tab()">'+d2.n+'</button>';
      });
      html+='</div>';
      html+='<div style="text-align:center;margin:6px 0"><button class="v28-btn-sm" onclick="v28Gate.cmp=-1;v28Gate.render();v28Sfx.click()">비교 해제</button></div>';
    }
    html+='<button class="v28-close" onclick="v28Gate.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-gate-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=620,H=400,cx=W/2,cy=H/2+10,R=140;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var axes=V28_GATE_AXES,n=axes.length;
    for(var r=1;r<=4;r++){
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),x=cx+Math.cos(a)*R*(r/4),y=cy+Math.sin(a)*R*(r/4);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(r===4?.4:.15)+')';ctx.lineWidth=1;ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      var lx=cx+Math.cos(a)*(R+22),ly=cy+Math.sin(a)*(R+22);
      ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],lx,ly);
    }
    var d=V28_GATE_DATA[this.sel];
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d.a[i%n]/100;
      var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.fillStyle='rgba(196,149,106,.25)';ctx.fill();
    ctx.strokeStyle='#c4956a';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i,v=d.a[i]/100;
      ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    if(this.cmp>=0){
      var d2=V28_GATE_DATA[this.cmp];
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d2.a[i%n]/100;
        var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.fillStyle='rgba(96,165,250,.2)';ctx.fill();
      ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.stroke();
      for(var i=0;i<n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*i,v=d2.a[i]/100;
        ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
        ctx.fillStyle='#93c5fd';ctx.fill();
      }
      ctx.fillStyle='#60a5fa';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
      ctx.fillText('● '+d2.n,W-160,30);
    }
    ctx.fillStyle='#c4956a';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
    ctx.fillText('● '+d.n,20,30);
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    ctx.fillStyle=v28GradeColor(gr);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(gr,W-20,H-20);
    v28Sfx.radar();
  }
};

// ============================================================
// 2. 건축 습기 결로 진단기 Canvas 640x400
// ============================================================
var V28_MOIST_DATA = [
  {n:'지하실',dewRisk:92,humid:85,temp:12,wall:88,d:'지중 습기 침투, 최고 결로 위험 구역'},
  {n:'욕실',dewRisk:88,humid:90,temp:22,wall:75,d:'수증기 다량 발생, 환기 필수 구역'},
  {n:'주방',dewRisk:72,humid:78,temp:24,wall:60,d:'취사 수증기 및 환기 불량 시 결로'},
  {n:'발코니',dewRisk:80,humid:65,temp:8,wall:82,d:'외기 접촉 면적 넓어 열교 결로 빈발'},
  {n:'붙박이장',dewRisk:68,humid:72,temp:18,wall:65,d:'통풍 차단 벽면 결로 취약'},
  {n:'창문틀',dewRisk:85,humid:60,temp:5,wall:78,d:'열관류율 높은 알루미늄 프레임 결로'},
  {n:'다용도실',dewRisk:65,humid:70,temp:16,wall:55,d:'세탁 건조 시 습기 급상승'},
  {n:'현관',dewRisk:58,humid:55,temp:14,wall:50,d:'외부 출입 시 온도차 결로 발생'}
];

var v28Moist = {
  sel:0,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-moist-panel');
    if(!p){p=document.createElement('div');p.id='v28-moist-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-moist-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-moist-panel');
    var html='<div class="v28-box"><h2>\u{1F4A7} 건축 습기 결로 진단기</h2><p>8구역 이슬점 분석 및 결로 위험도 평가</p>';
    html+='<div class="v28-tabs">';
    V28_MOIST_DATA.forEach(function(d,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28Moist.sel='+i+';v28Moist.render();v28Sfx.tab()">'+d.n+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-moist-cv" class="v28-canvas" width="640" height="400"></canvas>';
    var d=V28_MOIST_DATA[self.sel];
    var gr=v28Grade(100-d.dewRisk,100);
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">안전등급</div></div>';
    html+='<div class="s"><div class="sv">'+d.dewRisk+'%</div><div class="sl">결로위험도</div></div>';
    html+='<div class="s"><div class="sv">'+d.humid+'%</div><div class="sl">습도</div></div>';
    html+='<div class="s"><div class="sv">'+d.temp+'°C</div><div class="sl">벽면온도</div></div></div>';
    html+='<p style="text-align:center;color:#e8d5c0;font-size:13px;margin:8px 0">'+d.d+'</p>';
    html+='<button class="v28-close" onclick="v28Moist.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-moist-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=640,H=400;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var ml=80,mr=40,mt=50,mb=60,cw=W-ml-mr,ch=H-mt-mb;
    var bw=Math.floor(cw/8)-12;
    ctx.fillStyle='#c4956a';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('구역별 결로 위험도 및 습도 분석',W/2,25);
    ctx.font='11px sans-serif';ctx.textAlign='right';
    for(var i=0;i<=4;i++){
      var y=mt+ch-ch*(i/4);
      ctx.fillStyle='rgba(196,149,106,.15)';ctx.fillRect(ml,y,cw,1);
      ctx.fillStyle='#c4956a';ctx.fillText((i*25)+'%',ml-8,y+4);
    }
    V28_MOIST_DATA.forEach(function(d,i){
      var x=ml+i*(cw/8)+(cw/8-bw*2-4)/2;
      var h1=d.dewRisk/100*ch,h2=d.humid/100*ch;
      var riskCol=d.dewRisk>=80?'#ef4444':d.dewRisk>=60?'#fb923c':d.dewRisk>=40?'#fbbf24':'#4ade80';
      ctx.fillStyle=riskCol;ctx.globalAlpha=i===this.sel?.9:.5;
      ctx.fillRect(x,mt+ch-h1,bw,h1);
      ctx.fillStyle='#60a5fa';
      ctx.fillRect(x+bw+4,mt+ch-h2,bw,h2);
      ctx.globalAlpha=1;
      ctx.fillStyle=i===this.sel?'#f5deb3':'#c4956a';
      ctx.font='11px sans-serif';ctx.textAlign='center';
      ctx.fillText(d.n,x+bw+2,mt+ch+16);
      if(i===this.sel){
        ctx.fillStyle=riskCol;ctx.font='bold 12px sans-serif';
        ctx.fillText(d.dewRisk+'%',x+bw/2,mt+ch-h1-8);
        ctx.fillStyle='#93c5fd';
        ctx.fillText(d.humid+'%',x+bw+4+bw/2,mt+ch-h2-8);
        ctx.fillStyle='#f5deb3';ctx.font='10px sans-serif';
        ctx.fillText(d.temp+'°C',x+bw+2,mt+ch+30);
      }
    }.bind(this));
    ctx.fillStyle='#ef4444';ctx.fillRect(W-150,H-35,10,10);
    ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='left';
    ctx.fillText('결로위험도',W-136,H-26);
    ctx.fillStyle='#60a5fa';ctx.fillRect(W-150,H-20,10,10);
    ctx.fillText('습도',W-136,H-11);
    var d=V28_MOIST_DATA[this.sel];
    var gr=v28Grade(100-d.dewRisk,100);
    ctx.fillStyle=v28GradeColor(gr);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(gr,W-20,40);
    v28Sfx.bar();
  }
};

// ============================================================
// 3. 전통 처마 양식 도감 Canvas 620x400
// ============================================================
var V28_EAVE_DATA = [
  {n:'겹처마',a:[90,92,88,95,80],d:'서까래+부연 이중 구조, 궁궐 격식'},
  {n:'홑처마',a:[70,65,75,80,78],d:'서까래만으로 구성된 민가 기본 처마'},
  {n:'선자서까래',a:[85,95,82,90,72],d:'부채꼴 펼침의 아름다운 추녀 처마'},
  {n:'박공처마',a:[72,78,70,75,82],d:'삼각 지붕면의 측면 처마'},
  {n:'처마도리',a:[78,70,80,72,85],d:'도리 돌출로 처마 연장 구조'},
  {n:'추녀',a:[88,90,85,92,68],d:'지붕 귀퉁이 곡선미의 핵심 구조'},
  {n:'합각처마',a:[82,88,78,88,70],d:'팔작지붕의 합각 부분 처마'},
  {n:'풍판처마',a:[75,80,72,78,76],d:'풍판으로 보호된 측면 처마'},
  {n:'차양처마',a:[92,60,90,55,88],d:'현대 적용 가능한 기능형 차양'},
  {n:'사래',a:[80,85,82,90,65],d:'추녀 끝 연장재, 곡선미 극대화'}
];
var V28_EAVE_AXES = ['차양','미관','구조','전통','배수'];

var v28Eave = {
  sel:0,cmp:-1,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-eave-panel');
    if(!p){p=document.createElement('div');p.id='v28-eave-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-eave-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-eave-panel');
    var html='<div class="v28-box"><h2>\u{1F3E0} 전통 처마 양식 도감</h2><p>한국 전통 처마 10종의 5축 특성 Radar 분석</p>';
    html+='<div class="v28-tabs">';
    V28_EAVE_DATA.forEach(function(d,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28Eave.sel='+i+';v28Eave.cmp=-1;v28Eave.render();v28Sfx.tab()">'+d.n+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-eave-cv" class="v28-canvas" width="620" height="400"></canvas>';
    var d=V28_EAVE_DATA[self.sel],avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">종합등급</div></div>';
    html+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div>';
    html+='<div class="s"><div class="sv">'+d.n+'</div><div class="sl">선택 양식</div></div></div>';
    html+='<p style="text-align:center;color:#e8d5c0;font-size:13px;margin:8px 0">'+d.d+'</p>';
    if(self.cmp===-1){
      html+='<div style="text-align:center;margin:10px 0"><button class="v28-btn-sm" onclick="v28Eave.cmp=(v28Eave.sel+1)%10;v28Eave.render();v28Sfx.click()">비교 모드</button></div>';
    } else {
      html+='<div class="v28-tabs">';
      V28_EAVE_DATA.forEach(function(d2,i){
        if(i===self.sel) return;
        html+='<button class="v28-tab'+(i===self.cmp?' active':'')+'" onclick="v28Eave.cmp='+i+';v28Eave.render();v28Sfx.tab()">'+d2.n+'</button>';
      });
      html+='</div>';
      html+='<div style="text-align:center;margin:6px 0"><button class="v28-btn-sm" onclick="v28Eave.cmp=-1;v28Eave.render();v28Sfx.click()">비교 해제</button></div>';
    }
    html+='<button class="v28-close" onclick="v28Eave.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-eave-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=620,H=400,cx=W/2,cy=H/2+10,R=140;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var axes=V28_EAVE_AXES,n=axes.length;
    for(var r=1;r<=4;r++){
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),x=cx+Math.cos(a)*R*(r/4),y=cy+Math.sin(a)*R*(r/4);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(r===4?.4:.15)+')';ctx.lineWidth=1;ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      var lx=cx+Math.cos(a)*(R+22),ly=cy+Math.sin(a)*(R+22);
      ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],lx,ly);
    }
    var d=V28_EAVE_DATA[this.sel];
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d.a[i%n]/100;
      var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.fillStyle='rgba(196,149,106,.25)';ctx.fill();
    ctx.strokeStyle='#c4956a';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i,v=d.a[i]/100;
      ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    if(this.cmp>=0){
      var d2=V28_EAVE_DATA[this.cmp];
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d2.a[i%n]/100;
        var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.fillStyle='rgba(96,165,250,.2)';ctx.fill();
      ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.stroke();
      for(var i=0;i<n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*i,v=d2.a[i]/100;
        ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
        ctx.fillStyle='#93c5fd';ctx.fill();
      }
      ctx.fillStyle='#60a5fa';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
      ctx.fillText('● '+d2.n,W-160,30);
    }
    ctx.fillStyle='#c4956a';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
    ctx.fillText('● '+d.n,20,30);
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    ctx.fillStyle=v28GradeColor(gr);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(gr,W-20,H-20);
    v28Sfx.radar();
  }
};

// ============================================================
// 4. 건축 생활소음 분석기 Canvas 640x400
// ============================================================
var V28_NOISE_ROOMS = ['안방','거실','주방','아이방','서재','욕실','현관','다용도실'];
var V28_NOISE_SRC = ['대화','음악','요리','걸음','문소리','외부'];
var V28_NOISE_VALS = [
  [42,48,30,45,35,38],[50,55,52,48,40,45],[55,45,68,42,50,52],
  [40,42,28,50,32,35],[35,30,25,38,28,42],[58,40,35,30,55,48],
  [45,38,32,52,60,65],[48,42,55,40,45,50]
];

var v28Noise = {
  sel:0,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-noise-panel');
    if(!p){p=document.createElement('div');p.id='v28-noise-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-noise-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-noise-panel');
    var html='<div class="v28-box"><h2>\u{1F50A} 건축 생활소음 분석기</h2><p>8실 x 6소음원 히트맵 소음전파 분석</p>';
    html+='<div class="v28-tabs">';
    V28_NOISE_ROOMS.forEach(function(r,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28Noise.sel='+i+';v28Noise.render();v28Sfx.tab()">'+r+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-noise-cv" class="v28-canvas" width="640" height="400"></canvas>';
    var row=V28_NOISE_VALS[self.sel];
    var maxN=Math.max.apply(null,row),minN=Math.min.apply(null,row);
    var avgN=Math.round(row.reduce(function(s,v){return s+v;},0)/row.length);
    var gr=avgN<=35?'S':avgN<=42?'A':avgN<=50?'B':avgN<=58?'C':'D';
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">소음등급</div></div>';
    html+='<div class="s"><div class="sv">'+avgN+' dB</div><div class="sl">평균소음</div></div>';
    html+='<div class="s"><div class="sv">'+maxN+' dB</div><div class="sl">최대소음</div></div>';
    html+='<div class="s"><div class="sv">'+minN+' dB</div><div class="sl">최소소음</div></div></div>';
    html+='<button class="v28-close" onclick="v28Noise.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-noise-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=640,H=400;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var ml=90,mt=50,cellW=70,cellH=38;
    ctx.fillStyle='#c4956a';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('실별 소음원 분석 히트맵 (dB)',W/2,25);
    V28_NOISE_SRC.forEach(function(s,i){
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';
      ctx.fillText(s,ml+i*cellW+cellW/2,mt-8);
    });
    V28_NOISE_ROOMS.forEach(function(r,ri){
      ctx.fillStyle=ri===this.sel?'#f5deb3':'#c4956a';ctx.font='12px sans-serif';ctx.textAlign='right';
      ctx.fillText(r,ml-8,mt+ri*cellH+cellH/2+4);
      V28_NOISE_SRC.forEach(function(s,ci){
        var v=V28_NOISE_VALS[ri][ci];
        var ratio=(v-20)/50;
        var col=ratio>=.7?'rgba(239,68,68,':'rgba(251,146,60,';
        if(ratio<.4) col='rgba(74,222,128,';
        else if(ratio<.55) col='rgba(251,191,36,';
        var alpha=ri===this.sel?.85:.4;
        ctx.fillStyle=col+alpha+')';
        ctx.fillRect(ml+ci*cellW+2,mt+ri*cellH+2,cellW-4,cellH-4);
        ctx.strokeStyle='rgba(196,149,106,.2)';ctx.strokeRect(ml+ci*cellW+2,mt+ri*cellH+2,cellW-4,cellH-4);
        ctx.fillStyle=ri===this.sel?'#fff':'rgba(255,255,255,.7)';
        ctx.font=(ri===this.sel?'bold ':'')+' 11px sans-serif';ctx.textAlign='center';
        ctx.fillText(v+'dB',ml+ci*cellW+cellW/2,mt+ri*cellH+cellH/2+4);
      }.bind(this));
    }.bind(this));
    ctx.fillStyle='rgba(74,222,128,.6)';ctx.fillRect(ml,mt+8*cellH+14,12,12);
    ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='left';
    ctx.fillText('≤40dB',ml+16,mt+8*cellH+24);
    ctx.fillStyle='rgba(251,191,36,.6)';ctx.fillRect(ml+80,mt+8*cellH+14,12,12);
    ctx.fillText('40-47dB',ml+96,mt+8*cellH+24);
    ctx.fillStyle='rgba(251,146,60,.6)';ctx.fillRect(ml+170,mt+8*cellH+14,12,12);
    ctx.fillText('48-54dB',ml+186,mt+8*cellH+24);
    ctx.fillStyle='rgba(239,68,68,.6)';ctx.fillRect(ml+260,mt+8*cellH+14,12,12);
    ctx.fillText('≥55dB',ml+276,mt+8*cellH+24);
    v28Sfx.heatmap();
  }
};

// ============================================================
// 5. 전통 기둥배치 설계기 Canvas 620x400
// ============================================================
var V28_COLUMN_DATA = [
  {n:'3칸 정면',a:[80,75,82,88,78,85],d:'3칸 구조의 기본 배치, 민가 표준'},
  {n:'5칸 정면',a:[88,82,85,90,82,72],d:'5칸 규모의 넓은 정면 배치'},
  {n:'7칸 정면',a:[92,85,78,92,85,60],d:'7칸 대규모, 궁궐/관아급 배치'},
  {n:'귀솟음배치',a:[85,90,88,95,80,55],d:'귀기둥을 높여 처마 곡선 강조'},
  {n:'안쏠림배치',a:[82,88,85,92,78,58],d:'기둥 상부를 안쪽으로 기울인 배치'},
  {n:'배흘림배치',a:[78,92,82,90,75,62],d:'기둥 중간이 볼록한 엔타시스 효과'},
  {n:'원형배치',a:[75,78,90,70,72,78],d:'정자/원정 등 원형 구조 배치'},
  {n:'ㄱ자배치',a:[85,80,80,85,82,75],d:'ㄱ자형 한옥의 직각 기둥 배치'},
  {n:'ㅁ자배치',a:[90,85,75,88,85,65],d:'ㅁ자형 중정 둘러싼 폐합 배치'},
  {n:'비대칭배치',a:[70,72,85,78,68,80],d:'자유로운 비대칭의 현대적 해석'}
];
var V28_COL_AXES = ['구조','미관','공간','전통','내구','경제'];

var v28Column = {
  sel:0,cmp:-1,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-col-panel');
    if(!p){p=document.createElement('div');p.id='v28-col-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-col-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-col-panel');
    var html='<div class="v28-box"><h2>\u{1F3DB} 전통 기둥배치 설계기</h2><p>한국 전통 기둥 배치 10종의 6축 특성 Radar 분석</p>';
    html+='<div class="v28-tabs">';
    V28_COLUMN_DATA.forEach(function(d,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28Column.sel='+i+';v28Column.cmp=-1;v28Column.render();v28Sfx.tab()">'+d.n+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-col-cv" class="v28-canvas" width="620" height="400"></canvas>';
    var d=V28_COLUMN_DATA[self.sel],avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">종합등급</div></div>';
    html+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div>';
    html+='<div class="s"><div class="sv">'+d.n+'</div><div class="sl">선택 배치</div></div></div>';
    html+='<p style="text-align:center;color:#e8d5c0;font-size:13px;margin:8px 0">'+d.d+'</p>';
    if(self.cmp===-1){
      html+='<div style="text-align:center;margin:10px 0"><button class="v28-btn-sm" onclick="v28Column.cmp=(v28Column.sel+1)%10;v28Column.render();v28Sfx.click()">비교 모드</button></div>';
    } else {
      html+='<div class="v28-tabs">';
      V28_COLUMN_DATA.forEach(function(d2,i){
        if(i===self.sel) return;
        html+='<button class="v28-tab'+(i===self.cmp?' active':'')+'" onclick="v28Column.cmp='+i+';v28Column.render();v28Sfx.tab()">'+d2.n+'</button>';
      });
      html+='</div>';
      html+='<div style="text-align:center;margin:6px 0"><button class="v28-btn-sm" onclick="v28Column.cmp=-1;v28Column.render();v28Sfx.click()">비교 해제</button></div>';
    }
    html+='<button class="v28-close" onclick="v28Column.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-col-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=620,H=400,cx=W/2,cy=H/2+10,R=140;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var axes=V28_COL_AXES,n=axes.length;
    for(var r=1;r<=4;r++){
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),x=cx+Math.cos(a)*R*(r/4),y=cy+Math.sin(a)*R*(r/4);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(r===4?.4:.15)+')';ctx.lineWidth=1;ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      var lx=cx+Math.cos(a)*(R+22),ly=cy+Math.sin(a)*(R+22);
      ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],lx,ly);
    }
    var d=V28_COLUMN_DATA[this.sel];
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d.a[i%n]/100;
      var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.fillStyle='rgba(196,149,106,.25)';ctx.fill();
    ctx.strokeStyle='#c4956a';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i,v=d.a[i]/100;
      ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    if(this.cmp>=0){
      var d2=V28_COLUMN_DATA[this.cmp];
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d2.a[i%n]/100;
        var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.fillStyle='rgba(96,165,250,.2)';ctx.fill();
      ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.stroke();
      for(var i=0;i<n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*i,v=d2.a[i]/100;
        ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
        ctx.fillStyle='#93c5fd';ctx.fill();
      }
      ctx.fillStyle='#60a5fa';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
      ctx.fillText('● '+d2.n,W-160,30);
    }
    ctx.fillStyle='#c4956a';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
    ctx.fillText('● '+d.n,20,30);
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    ctx.fillStyle=v28GradeColor(gr);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(gr,W-20,H-20);
    v28Sfx.radar();
  }
};

// ============================================================
// 6. 건축 접근성 유니버설디자인 평가기 Canvas 640x400
// ============================================================
var V28_UD_AREAS = ['현관','복도','거실','주방','욕실','침실','계단','외부'];
var V28_UD_CRITERIA = ['단차','폭','손잡이','조명','표지','비상'];
var V28_UD_VALS = [
  [60,70,85,75,80,72],[78,82,90,80,65,75],[88,85,92,82,70,80],
  [72,68,75,78,60,82],[55,62,70,72,85,68],[82,80,88,85,72,78],
  [45,50,65,68,75,60],[65,72,55,70,80,85]
];

var v28UD = {
  sel:0,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-ud-panel');
    if(!p){p=document.createElement('div');p.id='v28-ud-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-ud-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-ud-panel');
    var html='<div class="v28-box"><h2>♿ 건축 접근성 유니버설디자인 평가기</h2><p>8구역 x 6항목 접근성 히트맵 평가</p>';
    html+='<div class="v28-tabs">';
    V28_UD_AREAS.forEach(function(a,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28UD.sel='+i+';v28UD.render();v28Sfx.tab()">'+a+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-ud-cv" class="v28-canvas" width="640" height="400"></canvas>';
    var row=V28_UD_VALS[self.sel];
    var avg=Math.round(row.reduce(function(s,v){return s+v;},0)/row.length);
    var gr=v28Grade(avg,100);
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">접근성등급</div></div>';
    html+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div>';
    html+='<div class="s"><div class="sv">'+Math.max.apply(null,row)+'</div><div class="sl">최고항목</div></div>';
    html+='<div class="s"><div class="sv">'+Math.min.apply(null,row)+'</div><div class="sl">개선필요</div></div></div>';
    html+='<button class="v28-close" onclick="v28UD.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-ud-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=640,H=400;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var ml=90,mt=50,cellW=80,cellH=38;
    ctx.fillStyle='#c4956a';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('구역별 접근성 평가 히트맵 (점수)',W/2,25);
    V28_UD_CRITERIA.forEach(function(c,i){
      ctx.fillStyle='#c4956a';ctx.font='11px sans-serif';ctx.textAlign='center';
      ctx.fillText(c,ml+i*cellW+cellW/2,mt-8);
    });
    V28_UD_AREAS.forEach(function(a,ri){
      ctx.fillStyle=ri===this.sel?'#f5deb3':'#c4956a';ctx.font='12px sans-serif';ctx.textAlign='right';
      ctx.fillText(a,ml-8,mt+ri*cellH+cellH/2+4);
      V28_UD_CRITERIA.forEach(function(c,ci){
        var v=V28_UD_VALS[ri][ci];
        var ratio=v/100;
        var col;
        if(ratio>=.8) col='rgba(74,222,128,';
        else if(ratio>=.65) col='rgba(96,165,250,';
        else if(ratio>=.5) col='rgba(251,191,36,';
        else col='rgba(239,68,68,';
        var alpha=ri===this.sel?.85:.4;
        ctx.fillStyle=col+alpha+')';
        ctx.fillRect(ml+ci*cellW+2,mt+ri*cellH+2,cellW-4,cellH-4);
        ctx.strokeStyle='rgba(196,149,106,.2)';ctx.strokeRect(ml+ci*cellW+2,mt+ri*cellH+2,cellW-4,cellH-4);
        ctx.fillStyle=ri===this.sel?'#fff':'rgba(255,255,255,.7)';
        ctx.font=(ri===this.sel?'bold ':'')+' 11px sans-serif';ctx.textAlign='center';
        ctx.fillText(v,ml+ci*cellW+cellW/2,mt+ri*cellH+cellH/2+4);
      }.bind(this));
    }.bind(this));
    ctx.fillStyle='rgba(74,222,128,.6)';ctx.fillRect(ml,mt+8*cellH+14,12,12);
    ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='left';
    ctx.fillText('≥80 우수',ml+16,mt+8*cellH+24);
    ctx.fillStyle='rgba(96,165,250,.6)';ctx.fillRect(ml+90,mt+8*cellH+14,12,12);
    ctx.fillText('65-79 양호',ml+106,mt+8*cellH+24);
    ctx.fillStyle='rgba(251,191,36,.6)';ctx.fillRect(ml+190,mt+8*cellH+14,12,12);
    ctx.fillText('50-64 보통',ml+206,mt+8*cellH+24);
    ctx.fillStyle='rgba(239,68,68,.6)';ctx.fillRect(ml+290,mt+8*cellH+14,12,12);
    ctx.fillText('<50 개선필요',ml+306,mt+8*cellH+24);
    v28Sfx.heatmap();
  }
};

// ============================================================
// 7. 전통 돌담쌓기 공법 도감 Canvas 620x400
// ============================================================
var V28_STONE_DATA = [
  {n:'막돌쌓기',a:[70,55,82,85,72],d:'자연석 그대로 쌓는 가장 소박한 공법'},
  {n:'허튼층쌓기',a:[75,62,78,80,75],d:'크기 다른 돌을 불규칙 층으로 쌓기'},
  {n:'바른층쌓기',a:[85,72,85,78,68],d:'같은 높이로 정연하게 수평 쌓기'},
  {n:'사고석쌓기',a:[90,80,88,72,60],d:'네모반듯 다듬은 돌로 정밀 쌓기'},
  {n:'강돌쌓기',a:[72,60,75,82,80],d:'강에서 주운 둥근 돌의 자연미'},
  {n:'판석쌓기',a:[82,75,80,70,65],d:'넓적한 판석을 겹쳐 쌓는 공법'},
  {n:'돌+흙혼합',a:[68,58,72,88,85],d:'돌 사이 흙 채워 친환경 축조'},
  {n:'거친돌쌓기',a:[78,65,80,82,70],d:'대강 다듬은 돌로 쌓는 중간 공법'},
  {n:'건식쌓기',a:[88,78,90,75,55],d:'접착제 없이 돌만으로 맞춤 쌓기'},
  {n:'장대석쌓기',a:[92,85,92,90,50],d:'긴 장대석으로 기단 축조, 궁궐급'}
];
var V28_STONE_AXES = ['강도','미관','전통','배수','시공'];

var v28Stone = {
  sel:0,cmp:-1,
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-stone-panel');
    if(!p){p=document.createElement('div');p.id='v28-stone-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-stone-panel');if(p)p.classList.remove('active');},
  render:function(){
    var self=this,p=document.getElementById('v28-stone-panel');
    var html='<div class="v28-box"><h2>\u{1FAA8} 전통 돌담쌓기 공법 도감</h2><p>전통 석축 10종의 5축 특성 Radar 분석</p>';
    html+='<div class="v28-tabs">';
    V28_STONE_DATA.forEach(function(d,i){
      html+='<button class="v28-tab'+(i===self.sel?' active':'')+'" onclick="v28Stone.sel='+i+';v28Stone.cmp=-1;v28Stone.render();v28Sfx.tab()">'+d.n+'</button>';
    });
    html+='</div>';
    html+='<canvas id="v28-stone-cv" class="v28-canvas" width="620" height="400"></canvas>';
    var d=V28_STONE_DATA[self.sel],avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+'">'+gr+'</div><div class="sl">종합등급</div></div>';
    html+='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div>';
    html+='<div class="s"><div class="sv">'+d.n+'</div><div class="sl">선택 공법</div></div></div>';
    html+='<p style="text-align:center;color:#e8d5c0;font-size:13px;margin:8px 0">'+d.d+'</p>';
    if(self.cmp===-1){
      html+='<div style="text-align:center;margin:10px 0"><button class="v28-btn-sm" onclick="v28Stone.cmp=(v28Stone.sel+1)%10;v28Stone.render();v28Sfx.click()">비교 모드</button></div>';
    } else {
      html+='<div class="v28-tabs">';
      V28_STONE_DATA.forEach(function(d2,i){
        if(i===self.sel) return;
        html+='<button class="v28-tab'+(i===self.cmp?' active':'')+'" onclick="v28Stone.cmp='+i+';v28Stone.render();v28Sfx.tab()">'+d2.n+'</button>';
      });
      html+='</div>';
      html+='<div style="text-align:center;margin:6px 0"><button class="v28-btn-sm" onclick="v28Stone.cmp=-1;v28Stone.render();v28Sfx.click()">비교 해제</button></div>';
    }
    html+='<button class="v28-close" onclick="v28Stone.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-stone-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=620,H=400,cx=W/2,cy=H/2+10,R=140;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var axes=V28_STONE_AXES,n=axes.length;
    for(var r=1;r<=4;r++){
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),x=cx+Math.cos(a)*R*(r/4),y=cy+Math.sin(a)*R*(r/4);
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.strokeStyle='rgba(196,149,106,'+(r===4?.4:.15)+')';ctx.lineWidth=1;ctx.stroke();
    }
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);
      ctx.strokeStyle='rgba(196,149,106,.2)';ctx.stroke();
      var lx=cx+Math.cos(a)*(R+22),ly=cy+Math.sin(a)*(R+22);
      ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(axes[i],lx,ly);
    }
    var d=V28_STONE_DATA[this.sel];
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d.a[i%n]/100;
      var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
      i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.fillStyle='rgba(196,149,106,.25)';ctx.fill();
    ctx.strokeStyle='#c4956a';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<n;i++){
      var a=-Math.PI/2+(2*Math.PI/n)*i,v=d.a[i]/100;
      ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
      ctx.fillStyle='#f5deb3';ctx.fill();
    }
    if(this.cmp>=0){
      var d2=V28_STONE_DATA[this.cmp];
      ctx.beginPath();
      for(var i=0;i<=n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*(i%n),v=d2.a[i%n]/100;
        var x=cx+Math.cos(a)*R*v,y=cy+Math.sin(a)*R*v;
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.fillStyle='rgba(96,165,250,.2)';ctx.fill();
      ctx.strokeStyle='#60a5fa';ctx.lineWidth=2;ctx.stroke();
      for(var i=0;i<n;i++){
        var a=-Math.PI/2+(2*Math.PI/n)*i,v=d2.a[i]/100;
        ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*v,cy+Math.sin(a)*R*v,4,0,Math.PI*2);
        ctx.fillStyle='#93c5fd';ctx.fill();
      }
      ctx.fillStyle='#60a5fa';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
      ctx.fillText('● '+d2.n,W-160,30);
    }
    ctx.fillStyle='#c4956a';ctx.font='bold 13px sans-serif';ctx.textAlign='left';
    ctx.fillText('● '+d.n,20,30);
    var avg=Math.round(d.a.reduce(function(s,v){return s+v;},0)/d.a.length);
    var gr=v28Grade(avg,100);
    ctx.fillStyle=v28GradeColor(gr);ctx.font='bold 28px sans-serif';ctx.textAlign='right';
    ctx.fillText(gr,W-20,H-20);
    v28Sfx.radar();
  }
};

// ============================================================
// 8. 건축 종합 거주성능 대시보드 Canvas 620x400
// ============================================================
var V28_LIVING_KPI = [
  {n:'단열성능',v:78,w:15},
  {n:'방음성능',v:72,w:12},
  {n:'습기관리',v:68,w:13},
  {n:'채광환기',v:82,w:14},
  {n:'접근성',v:65,w:10},
  {n:'안전성',v:85,w:15},
  {n:'전통미학',v:88,w:11},
  {n:'유지보수',v:70,w:10}
];

var v28Living = {
  open:function(){
    v28Sfx.open();
    var p=document.getElementById('v28-living-panel');
    if(!p){p=document.createElement('div');p.id='v28-living-panel';p.className='v28-panel';document.body.appendChild(p);}
    p.classList.add('active');
    this.render();
  },
  close:function(){v28Sfx.close();var p=document.getElementById('v28-living-panel');if(p)p.classList.remove('active');},
  render:function(){
    var p=document.getElementById('v28-living-panel');
    var wSum=0,vwSum=0;
    V28_LIVING_KPI.forEach(function(k){wSum+=k.w;vwSum+=k.v*k.w;});
    var totalScore=Math.round(vwSum/wSum);
    var gr=v28Grade(totalScore,100);
    var html='<div class="v28-box"><h2>\u{1F3E0} 건축 종합 거주성능 대시보드</h2><p>8대 KPI 가중 종합 평가</p>';
    html+='<canvas id="v28-living-cv" class="v28-canvas" width="620" height="400"></canvas>';
    html+='<div class="v28-stat"><div class="s"><div class="sv" style="color:'+v28GradeColor(gr)+';font-size:32px">'+gr+'</div><div class="sl">종합등급</div></div>';
    html+='<div class="s"><div class="sv">'+totalScore+'</div><div class="sl">가중평균</div></div></div>';
    html+='<button class="v28-close" onclick="v28Living.close()">닫기</button></div>';
    p.innerHTML=html;
    this.draw();
  },
  draw:function(){
    var cv=document.getElementById('v28-living-cv');if(!cv)return;
    var ctx=cv.getContext('2d'),W=620,H=400;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#1a1210';ctx.fillRect(0,0,W,H);
    var cols=4,rows=2,gw=140,gh=160,mx=(W-cols*gw)/(cols+1),my=20;
    var wSum=0,vwSum=0;
    V28_LIVING_KPI.forEach(function(k){wSum+=k.w;vwSum+=k.v*k.w;});
    var totalScore=Math.round(vwSum/wSum);
    V28_LIVING_KPI.forEach(function(k,i){
      var col=i%cols,row=Math.floor(i/cols);
      var cx2=mx+(gw+mx)*col+gw/2,cy2=my+row*(gh+10)+gh/2+15;
      var R=52,startA=Math.PI*.8,endA=Math.PI*.2,range=2*Math.PI-startA+endA;
      var pct=k.v/100;
      for(var s=0;s<40;s++){
        var a=startA+range*(s/40);
        var x1=cx2+Math.cos(a)*(R-6),y1=cy2+Math.sin(a)*(R-6);
        var x2=cx2+Math.cos(a)*R,y2=cy2+Math.sin(a)*R;
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);
        ctx.strokeStyle='rgba(196,149,106,.15)';ctx.lineWidth=3;ctx.stroke();
      }
      var fillSegs=Math.round(pct*40);
      for(var s=0;s<fillSegs;s++){
        var a=startA+range*(s/40);
        var x1=cx2+Math.cos(a)*(R-6),y1=cy2+Math.sin(a)*(R-6);
        var x2=cx2+Math.cos(a)*R,y2=cy2+Math.sin(a)*R;
        var gr2=v28Grade(k.v,100);
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);
        ctx.strokeStyle=v28GradeColor(gr2);ctx.lineWidth=3;ctx.stroke();
      }
      var gr2=v28Grade(k.v,100);
      ctx.fillStyle=v28GradeColor(gr2);ctx.font='bold 22px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(gr2,cx2,cy2-6);
      ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';
      ctx.fillText(k.v,cx2,cy2+14);
      ctx.fillStyle='#c4956a';ctx.font='12px sans-serif';
      ctx.fillText(k.n,cx2,cy2+R+14);
      ctx.fillStyle='rgba(196,149,106,.5)';ctx.font='10px sans-serif';
      ctx.fillText('('+k.w+'%)',cx2,cy2+R+28);
    });
    var gr=v28Grade(totalScore,100);
    ctx.fillStyle=v28GradeColor(gr);ctx.font='bold 28px sans-serif';ctx.textAlign='right';ctx.textBaseline='alphabetic';
    ctx.fillText(gr,W-20,H-10);
    ctx.fillStyle='#f5deb3';ctx.font='14px sans-serif';
    ctx.fillText(totalScore+'/100',W-60,H-10);
    v28Sfx.gauge();
  }
};

// ============================================================
// Quiz v28: 15 new questions (345->360)
// ============================================================
var V28_QUIZ = [
  {q:'솟을대문은 주로 어떤 계층의 가옥에 설치되었는가?',o:['서민','양반','승려','상인'],a:1},
  {q:'겹처마를 구성하는 두 가지 구조재는?',o:['기둥+보','서까래+부연','도리+장여','대공+종도리'],a:1},
  {q:'건축에서 결로가 가장 빈발하는 계절은?',o:['봄','여름','가을','겨울'],a:3},
  {q:'유니버설디자인에서 복도 최소 유효 폭은?',o:['60cm','90cm','120cm','150cm'],a:2},
  {q:'막돌쌓기의 특징으로 옳은 것은?',o:['정밀 가공 필요','자연석 그대로 사용','접착제 필수','기계 시공만 가능'],a:1},
  {q:'건축 습기 결로의 주요 원인은?',o:['지진','온도차에 의한 이슬점 도달','화재','소음'],a:1},
  {q:'삼문(三門)은 주로 어디에 설치되었는가?',o:['민가','시장','궁궐/사찰','창고'],a:2},
  {q:'선자서까래의 특징은?',o:['직선 배열','부채꼴 펼침','원형 배치','지그재그'],a:1},
  {q:'배흘림기둥의 형태적 특징은?',o:['상하 동일','중간이 볼록','상부가 넓음','하부가 좁음'],a:1},
  {q:'건축 소음 측정 단위는?',o:['lux','Pa','dB','Hz'],a:2},
  {q:'장대석쌓기는 주로 어디에 사용되었는가?',o:['지붕','기단','창호','처마'],a:1},
  {q:'건식쌓기의 특징은?',o:['시멘트 사용','접착제 없이 돌만 사용','나무로 보강','철근 삽입'],a:1},
  {q:'홍살문의 주요 용도는?',o:['방어','의례/신성 표시','채광','환기'],a:1},
  {q:'추녀의 건축적 역할은?',o:['기초 보강','지붕 귀퉁이 곡선미','벽체 단열','바닥 방수'],a:1},
  {q:'ㅁ자 배치 한옥의 특징은?',o:['개방형','중정을 둘러싼 폐합형','일자형','분산형'],a:1}
];

function v28OpenQuiz(){
  v28Sfx.open();
  var idx=0,score=0,total=V28_QUIZ.length;
  function render(){
    var ov=document.getElementById('quizOverlay');
    if(!ov) return;
    ov.classList.add('show');
    var q=V28_QUIZ[idx];
    var html='<div class="quiz-card"><div class="quiz-header"><span class="quiz-title">v28 건축 퀴즈</span><span class="quiz-progress">'+(idx+1)+'/'+total+'</span></div>';
    html+='<div class="quiz-q">'+q.q+'</div><div class="quiz-options">';
    q.o.forEach(function(opt,oi){
      html+='<button class="quiz-opt" onclick="window.__v28qa('+oi+')">'+opt+'</button>';
    });
    html+='</div></div>';
    ov.innerHTML=html;
  }
  window.__v28qa=function(ans){
    if(ans===V28_QUIZ[idx].a){score++;v28Sfx.correct();}else{v28Sfx.wrong();}
    idx++;
    if(idx<total){render();}else{
      var pct=Math.round(score/total*100);
      var ov=document.getElementById('quizOverlay');
      ov.innerHTML='<div class="quiz-card"><div class="quiz-header"><span class="quiz-title">v28 퀴즈 결과</span></div><div class="quiz-q" style="text-align:center;font-size:20px">'+score+'/'+total+' ('+pct+'%)</div><button class="quiz-opt" onclick="document.getElementById(\'quizOverlay\').classList.remove(\'show\')">닫기</button></div>';
      v28Sfx.complete();
      if(score===total) v28TriggerAch('v28_quiz_perfect');
    }
  };
  render();
}

// ============ Achievement system ============
var achKey = '__hb_achievements';
function v28TriggerAch(id){
  var list=[];
  try{list=JSON.parse(localStorage.getItem(achKey)||'[]');}catch(e){}
  var found=list.find(function(a){return a.id===id;});
  if(found&&!found.done){
    found.done=true;
    try{localStorage.setItem(achKey,JSON.stringify(list));}catch(e){}
    var toast=document.getElementById('achToast');
    if(toast){
      toast.querySelector('.ach-name').textContent=found.n||id;
      toast.classList.add('show');
      v28Sfx.achieve();
      setTimeout(function(){toast.classList.remove('show');},3000);
    }
  }
}

(function(){
  var existing = [];
  try { existing = JSON.parse(localStorage.getItem(achKey) || '[]'); } catch(e){}
  var newAch = [
    {id:'v28_gate_expert',n:'&#45824;&#47928; &#51204;&#47928;&#44032;',d:'&#45824;&#47928; &#50577;&#49885; &#48708;&#44368;&#44592; &#50756;&#47308;'},
    {id:'v28_moisture_analyst',n:'&#44208;&#47196; &#48516;&#49437;&#44032;',d:'&#49845;&#44592; &#44208;&#47196; &#51652;&#45800; &#50756;&#47308;'},
    {id:'v28_eave_scholar',n:'&#52376;&#47560; &#54617;&#51088;',d:'&#52376;&#47560; &#50577;&#49885; &#46020;&#44048; &#53456;&#49353; &#50756;&#47308;'},
    {id:'v28_noise_inspector',n:'&#49548;&#51020; &#44160;&#49324;&#44288;',d:'&#49373;&#54876;&#49548;&#51020; &#48516;&#49437; &#50756;&#47308;'},
    {id:'v28_column_planner',n:'&#44592;&#46181; &#49444;&#44228;&#49324;',d:'&#44592;&#46181;&#48176;&#52824; &#49444;&#44228; &#50756;&#47308;'},
    {id:'v28_ud_evaluator',n:'&#51217;&#44540;&#49457; &#54217;&#44032;&#49324;',d:'&#50976;&#45768;&#48260;&#49444;&#46356;&#51088;&#51064; &#54217;&#44032; &#50756;&#47308;'},
    {id:'v28_stone_mason',n:'&#46028;&#45812; &#51109;&#51064;',d:'&#46028;&#45812;&#49939;&#44592; &#44277;&#48277; &#53456;&#49353; &#50756;&#47308;'},
    {id:'v28_living_master',n:'&#44144;&#51452;&#49457;&#45733; &#47560;&#49828;&#53552;',d:'&#51333;&#54633; &#44144;&#51452;&#49457;&#45733; &#54217;&#44032; &#50756;&#47308;'},
    {id:'v28_quiz_perfect',n:'v28 &#47564;&#51216;&#50773;',d:'v28 &#53748;&#51592; &#47564;&#51216; &#45804;&#49457;'},
    {id:'v28_all_features',n:'v28 &#50756;&#51204;&#51221;&#48373;',d:'v28 &#47784;&#46304; &#44592;&#45733; &#52404;&#54744;'},
    {id:'v28_benchmark_clear',n:'&#48292;&#52824;&#47560;&#53356; &#46028;&#54028;',d:'The Sims/Home Design &#45824;&#48708; &#50864;&#50948; &#54869;&#51064;'},
    {id:'v28_complete',n:'v28 &#47560;&#49828;&#53552;',d:'v28 &#51204;&#52404; &#50756;&#47308;'}
  ];
  newAch.forEach(function(a){
    if(!existing.find(function(e){return e.id===a.id;})){existing.push(a);}
  });
  try{localStorage.setItem(achKey,JSON.stringify(existing));}catch(e){}
})();

// ============ Navigation Menu ============
(function(){
  var menuItems = [
    {icon:'\u{1F3EF}',label:'대문 비교',fn:'v28Gate.open()'},
    {icon:'\u{1F4A7}',label:'습기 진단',fn:'v28Moist.open()'},
    {icon:'\u{1F3E0}',label:'처마 도감',fn:'v28Eave.open()'},
    {icon:'\u{1F50A}',label:'소음 분석',fn:'v28Noise.open()'},
    {icon:'\u{1F3DB}',label:'기둥 설계',fn:'v28Column.open()'},
    {icon:'♿',label:'접근성 평가',fn:'v28UD.open()'},
    {icon:'\u{1FAA8}',label:'돌담 도감',fn:'v28Stone.open()'},
    {icon:'\u{1F3E0}',label:'거주성능',fn:'v28Living.open()'},
    {icon:'❓',label:'v28 퀴즈',fn:'v28OpenQuiz()'}
  ];
  var existingMenu = document.querySelector('.v27-float-menu') || document.querySelector('.v26-float-menu') || document.querySelector('.v25-float-menu') || document.querySelector('.v24-menu') || document.querySelector('.v23-menu') || document.querySelector('.v22-menu') || document.querySelector('.v21-menu') || document.querySelector('.v20-menu') || document.querySelector('.v19-menu');
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
    menu.className = 'v28-float-menu';
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
    'Q':function(){v28Gate.open()},
    'W':function(){v28Moist.open()},
    'E':function(){v28Eave.open()},
    'R':function(){v28Noise.open()},
    'T':function(){v28Column.open()},
    'Y':function(){v28UD.open()},
    'U':function(){v28Stone.open()},
    'I':function(){v28Living.open()},
    '0':function(){v28OpenQuiz()}
  };
  var fn = map[e.key];
  if(fn){e.preventDefault();fn();}
});

} // end __hbV28 guard

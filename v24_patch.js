// =====================================================
// House Builder v24.0 Patch
// 전통서까래구조분석기Canvas620x400_10종서까래6축Radar강도미관시공내구전통비용
// 건축소음전파시뮬레이터Canvas600x380_8실6소음원동심원히트맵dB감쇠
// 전통한옥배치도풍수분석Canvas640x400_8채배치네트워크풍수적합도
// 건축자재탄소배출비교Canvas620x400_10자재5축Bar탄소에너지재활용내구비용
// 전통기둥양식도감Canvas600x380_10종기둥6축Radar구조미관전통제작내구비용
// 건축비용워터폴차트Canvas620x400_8항목워터폴누적바차트
// 한옥공간프로그래밍분석Canvas620x380_8공간도넛면적비율기능성바
// 건축종합성적표Canvas620x400_8축Radar구조에너지미학기능내구친환경비용전통
// 퀴즈+15(285->300)+업적+12(254->266)+SFX16종+키보드Shift+Q/W/E/R/T/Y/U/I/9
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV24) {
window.__hbV24 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v24-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5400;overflow-y:auto;padding:16px}',
    '.v24-panel.active{display:block}',
    '.v24-box{max-width:720px;margin:40px auto}',
    '.v24-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v24-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v24-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v24-close:hover{background:#d4a57a}',
    '.v24-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v24-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v24-tab:hover,.v24-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v24-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v24-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v24-stat .s{text-align:center}',
    '.v24-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v24-stat .sl{font-size:11px;color:#c4956a}',
    '.v24-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v24-btn-sm:hover{background:#d4a57a}',
    '.v24-menu{position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4080;display:flex;flex-direction:column;gap:6px}',
    '.v24-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative}',
    '.v24-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v24-menu-label{position:absolute;right:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v24-menu-btn:hover .v24-menu-label{opacity:1}',
    '@media(max-width:600px){.v24-box{margin:16px auto}.v24-menu{right:6px;gap:4px}.v24-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ============ HTML Panels ============
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v24-panels';
  wrap.innerHTML =
    // 1. 전통 서까래 구조 분석기
    '<div id="v24-rafters" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1FAB5; &#xC804;&#xD1B5; &#xC11C;&#xAE4C;&#xB798; &#xAD6C;&#xC870; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>10&#xC885; &#xC11C;&#xAE4C;&#xB798;&#xC758; &#xAD6C;&#xC870;&#xC801; &#xD2B9;&#xC131; &#xBE44;&#xAD50; (6&#xCD95; Radar)</p>' +
      '<div class="v24-tabs" id="v24-rf-tabs"></div>' +
      '<canvas id="v24-rf-canvas" class="v24-canvas" width="620" height="400"></canvas>' +
      '<div id="v24-rf-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-rf-stat"></div>' +
      '<div style="text-align:center"><button class="v24-btn-sm" onclick="v24Rafters.compare()">&#xBE44;&#xAD50;</button> <button class="v24-btn-sm" onclick="v24Rafters.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v24-close" onclick="v24Rafters.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 2. 건축 소음 전파 시뮬레이터
    '<div id="v24-noise" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F50A; &#xAC74;&#xCD95; &#xC18C;&#xC74C; &#xC804;&#xD30C; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>8&#xC2E4; &#xC18C;&#xC74C;&#xC6D0; &#xC804;&#xD30C; &#xACBD;&#xB85C; &#xBC0F; dB &#xAC10;&#xC1E0; &#xBD84;&#xC11D;</p>' +
      '<div class="v24-tabs" id="v24-ns-tabs"></div>' +
      '<canvas id="v24-ns-canvas" class="v24-canvas" width="600" height="380"></canvas>' +
      '<div id="v24-ns-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-ns-stat"></div>' +
      '<div style="text-align:center"><button class="v24-btn-sm" onclick="v24Noise.toggle()">&#xC18C;&#xC74C;&#xC6D0; &#xC804;&#xD658;</button></div>' +
      '<button class="v24-close" onclick="v24Noise.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 3. 전통 한옥 배치도 풍수 분석
    '<div id="v24-layout" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F3E1; &#xD55C;&#xC625; &#xBC30;&#xCE58;&#xB3C4; &#xD48D;&#xC218; &#xBD84;&#xC11D;</h2>' +
      '<p>8&#xCC44; &#xBC30;&#xCE58; &#xB124;&#xD2B8;&#xC6CC;&#xD06C;&#xC640; &#xD48D;&#xC218; &#xC801;&#xD569;&#xB3C4; &#xBD84;&#xC11D;</p>' +
      '<div class="v24-tabs" id="v24-ly-tabs"></div>' +
      '<canvas id="v24-ly-canvas" class="v24-canvas" width="640" height="400"></canvas>' +
      '<div id="v24-ly-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-ly-stat"></div>' +
      '<button class="v24-close" onclick="v24Layout.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 4. 건축 자재 탄소배출 비교
    '<div id="v24-carbon" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F33F; &#xAC74;&#xCD95; &#xC790;&#xC7AC; &#xD0C4;&#xC18C;&#xBC30;&#xCD9C; &#xBE44;&#xAD50;</h2>' +
      '<p>10&#xC790;&#xC7AC; &#xD0C4;&#xC18C;&#xBC30;&#xCD9C;&#xB7C9; &#xBC0F; &#xD658;&#xACBD; &#xC601;&#xD5A5; 5&#xCD95; &#xBD84;&#xC11D;</p>' +
      '<div class="v24-tabs" id="v24-cb-tabs"></div>' +
      '<canvas id="v24-cb-canvas" class="v24-canvas" width="620" height="400"></canvas>' +
      '<div id="v24-cb-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-cb-stat"></div>' +
      '<div style="text-align:center"><button class="v24-btn-sm" onclick="v24Carbon.sortBy()">&#xC815;&#xB82C; &#xC804;&#xD658;</button></div>' +
      '<button class="v24-close" onclick="v24Carbon.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 5. 전통 기둥 양식 도감
    '<div id="v24-pillar" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F3DB;&#xFE0F; &#xC804;&#xD1B5; &#xAE30;&#xB465; &#xC591;&#xC2DD; &#xB3C4;&#xAC10;</h2>' +
      '<p>10&#xC885; &#xC804;&#xD1B5; &#xAE30;&#xB465;&#xC758; &#xAD6C;&#xC870;&#xC801; &#xD2B9;&#xC131; &#xBE44;&#xAD50; (6&#xCD95; Radar)</p>' +
      '<div class="v24-tabs" id="v24-pl-tabs"></div>' +
      '<canvas id="v24-pl-canvas" class="v24-canvas" width="600" height="380"></canvas>' +
      '<div id="v24-pl-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-pl-stat"></div>' +
      '<div style="text-align:center"><button class="v24-btn-sm" onclick="v24Pillar.compare()">&#xBE44;&#xAD50;</button> <button class="v24-btn-sm" onclick="v24Pillar.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v24-close" onclick="v24Pillar.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 6. 건축 비용 워터폴 차트
    '<div id="v24-costflow" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F4B0; &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xC6CC;&#xD130;&#xD3F4; &#xCC28;&#xD2B8;</h2>' +
      '<p>8&#xD56D;&#xBAA9; &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xB204;&#xC801; &#xBD84;&#xC11D;</p>' +
      '<div class="v24-tabs" id="v24-cf-tabs"></div>' +
      '<canvas id="v24-cf-canvas" class="v24-canvas" width="620" height="400"></canvas>' +
      '<div id="v24-cf-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-cf-stat"></div>' +
      '<button class="v24-close" onclick="v24CostFlow.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 7. 한옥 공간 프로그래밍 분석
    '<div id="v24-space" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F4D0; &#xD55C;&#xC625; &#xACF5;&#xAC04; &#xD504;&#xB85C;&#xADF8;&#xB798;&#xBC0D; &#xBD84;&#xC11D;</h2>' +
      '<p>8&#xACF5;&#xAC04; &#xBA74;&#xC801; &#xBE44;&#xC728; &#xB3C4;&#xB137; + &#xAE30;&#xB2A5;&#xC131; &#xBC14; &#xCC28;&#xD2B8;</p>' +
      '<div class="v24-tabs" id="v24-sp-tabs"></div>' +
      '<canvas id="v24-sp-canvas" class="v24-canvas" width="620" height="380"></canvas>' +
      '<div id="v24-sp-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-sp-stat"></div>' +
      '<button class="v24-close" onclick="v24Space.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    // 8. 건축 종합 성적표
    '<div id="v24-report" class="v24-panel"><div class="v24-box">' +
      '<h2>&#x1F4CA; &#xAC74;&#xCD95; &#xC885;&#xD569; &#xC131;&#xC801;&#xD45C;</h2>' +
      '<p>8&#xCD95; &#xC885;&#xD569; &#xD3C9;&#xAC00; Radar + &#xB4F1;&#xAE09; &#xD310;&#xC815;</p>' +
      '<div class="v24-tabs" id="v24-rp-tabs"></div>' +
      '<canvas id="v24-rp-canvas" class="v24-canvas" width="620" height="400"></canvas>' +
      '<div id="v24-rp-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v24-stat" id="v24-rp-stat"></div>' +
      '<div style="text-align:center"><button class="v24-btn-sm" onclick="v24Report.cycle()">&#xAC74;&#xBB3C; &#xC804;&#xD658;</button></div>' +
      '<button class="v24-close" onclick="v24Report.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ============ SFX Engine ============
var v24SFX = (function(){
  var actx = null;
  function ctx(){ if(!actx) try{ actx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} return actx; }
  function play(freq,type,dur,vol){
    var c=ctx(); if(!c) return;
    var o=c.createOscillator(),g=c.createGain();
    o.type=type||'sine'; o.frequency.value=freq||440;
    g.gain.setValueAtTime(vol||0.12,c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+(dur||0.15));
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime+(dur||0.15));
  }
  return {
    open:function(){play(880,'sine',0.08,0.1);play(1100,'sine',0.06,0.08);},
    close:function(){play(440,'sine',0.06,0.08);},
    click:function(){play(660,'sine',0.04,0.06);},
    tab:function(){play(550,'triangle',0.05,0.07);},
    hover:function(){play(770,'sine',0.03,0.04);},
    compare:function(){play(990,'square',0.07,0.06);play(1200,'square',0.05,0.05);},
    grade:function(g){var f=g==='S'?1320:g==='A'?1100:g==='B'?880:g==='C'?660:440;play(f,'sine',0.12,0.1);},
    radar:function(){play(720,'triangle',0.06,0.06);},
    sort:function(){play(440,'sawtooth',0.05,0.05);play(660,'sawtooth',0.04,0.04);},
    toggle:function(){play(500,'sine',0.05,0.07);play(750,'sine',0.04,0.05);},
    donut:function(){play(600,'sine',0.08,0.08);},
    network:function(){play(850,'triangle',0.06,0.06);},
    waterfall:function(){play(330,'sine',0.1,0.07);play(440,'sine',0.08,0.06);play(550,'sine',0.06,0.05);},
    pillar:function(){play(280,'sine',0.1,0.08);},
    carbon:function(){play(400,'triangle',0.07,0.06);},
    space:function(){play(660,'sine',0.06,0.07);play(880,'sine',0.05,0.05);},
    report:function(){play(1000,'sine',0.1,0.09);play(1200,'sine',0.08,0.07);}
  };
})();

// ============ Utility ============
function v24DrawRadar(ctx,cx,cy,r,axes,vals,color,fillAlpha){
  var n=axes.length, a=Math.PI*2/n;
  ctx.strokeStyle='rgba(196,149,106,0.15)';
  ctx.lineWidth=0.5;
  for(var lv=1;lv<=5;lv++){
    ctx.beginPath();
    for(var i=0;i<=n;i++){
      var ang=-Math.PI/2+a*(i%n), lr=r*lv/5;
      ctx[i?'lineTo':'moveTo'](cx+Math.cos(ang)*lr,cy+Math.sin(ang)*lr);
    }
    ctx.stroke();
  }
  ctx.strokeStyle='rgba(196,149,106,0.2)';
  for(var i=0;i<n;i++){
    var ang=-Math.PI/2+a*i;
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(ang)*r,cy+Math.sin(ang)*r);ctx.stroke();
  }
  ctx.font='11px sans-serif'; ctx.fillStyle='#c4956a'; ctx.textAlign='center'; ctx.textBaseline='middle';
  for(var i=0;i<n;i++){
    var ang=-Math.PI/2+a*i, lx=cx+Math.cos(ang)*(r+18), ly=cy+Math.sin(ang)*(r+18);
    ctx.fillText(axes[i],lx,ly);
  }
  ctx.beginPath();
  for(var i=0;i<=n;i++){
    var ang=-Math.PI/2+a*(i%n), vr=r*((vals[i%n]||0)/100);
    ctx[i?'lineTo':'moveTo'](cx+Math.cos(ang)*vr,cy+Math.sin(ang)*vr);
  }
  ctx.closePath();
  ctx.fillStyle=color.replace('1)',((fillAlpha||0.25)+')'));
  ctx.fill();
  ctx.strokeStyle=color; ctx.lineWidth=2; ctx.stroke();
  for(var i=0;i<n;i++){
    var ang=-Math.PI/2+a*i, vr=r*(vals[i]/100);
    ctx.beginPath();ctx.arc(cx+Math.cos(ang)*vr,cy+Math.sin(ang)*vr,3,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();
  }
}

function v24Grade(score){return score>=90?'S':score>=75?'A':score>=60?'B':score>=45?'C':'D';}
function v24GradeColor(g){return g==='S'?'#ffd700':g==='A'?'#7fff7f':g==='B'?'#6cb4ee':g==='C'?'#ffa07a':'#999';}

// ============================================================
// 1. 전통 서까래 구조 분석기 (10종 6축 Radar)
// ============================================================
var v24Rafters = (function(){
  var items = [
    {name:'평서까래',axes:[85,80,75,82,90,70],desc:'가장 기본적인 직선 서까래. 한옥의 주류를 이루며 시공이 용이하다.',use:'일반 한옥'},
    {name:'추녀',axes:[92,95,50,88,95,40],desc:'지붕 모서리의 곡선 서까래. 한옥의 상징적 곡선미를 만든다.',use:'궁궐, 사찰'},
    {name:'선자서까래',axes:[78,88,55,80,92,55],desc:'추녀에서 뻗어 부채꼴로 배열되는 서까래.',use:'처마 모서리'},
    {name:'부연',axes:[70,90,60,75,88,65],desc:'처마 끝에 덧대는 짧은 서까래. 처마선을 부드럽게 한다.',use:'격식 건물'},
    {name:'합각서까래',axes:[80,75,65,78,85,60],desc:'팔작지붕의 합각 부분에 설치되는 서까래.',use:'팔작지붕'},
    {name:'맞걸이서까래',axes:[88,72,70,85,80,62],desc:'두 지붕이 만나는 골 부분의 서까래.',use:'복합지붕'},
    {name:'평고대',axes:[75,65,80,82,78,72],desc:'서까래 위에 가로로 놓아 기와를 받치는 부재.',use:'기와지붕 전체'},
    {name:'장여',axes:[82,60,78,88,75,68],desc:'도리 위에 놓여 서까래를 받치는 수평 부재.',use:'격식 건물'},
    {name:'도리',axes:[95,55,60,92,82,50],desc:'기둥 위에 걸쳐 서까래를 받치는 주요 수평 부재.',use:'모든 건물'},
    {name:'보',axes:[98,50,45,95,80,45],desc:'기둥과 기둥 사이를 연결하는 핵심 수평 구조재.',use:'모든 건물'}
  ];
  var axLabels=['강도','미관','시공성','내구성','전통성','경제성'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v24-rf-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    var it=items[sel], avg=Math.round(it.axes.reduce(function(a,b){return a+b;},0)/it.axes.length);
    var grd=v24Grade(avg), gc=v24GradeColor(grd);
    v24DrawRadar(ctx,W/2,H/2+10,140,axLabels,it.axes,'rgba(196,149,106,1)',0.25);
    ctx.font='bold 16px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText(it.name,W/2,30);
    ctx.font='bold 28px sans-serif'; ctx.fillStyle=gc;
    ctx.fillText(grd,W-50,50);
    ctx.font='12px sans-serif'; ctx.fillStyle='#c4956a';
    ctx.fillText('&#xD3C9;&#xADE0; '+avg+'&#xC810;',W-50,70);
    document.getElementById('v24-rf-info').innerHTML='<b style="color:#f5deb3">'+it.name+'</b><br>'+it.desc+'<br><span style="color:#c4956a">&#xC6A9;&#xB3C4;: '+it.use+'</span>';
    var st=document.getElementById('v24-rf-stat');
    st.innerHTML='';
    for(var i=0;i<axLabels.length;i++){
      st.innerHTML+='<div class="s"><div class="sv">'+it.axes[i]+'</div><div class="sl">'+axLabels[i]+'</div></div>';
    }
  }
  function makeTabs(){
    var t=document.getElementById('v24-rf-tabs'); t.innerHTML='';
    items.forEach(function(it,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===sel?' active':'');
      b.textContent=it.name;
      b.onclick=function(){sel=i;makeTabs();draw();v24SFX.tab();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-rafters').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-rafters').classList.remove('active');v24SFX.close();},
    compare:function(){
      var c=document.getElementById('v24-rf-canvas'); if(!c) return;
      var ctx=c.getContext('2d'), W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
      var colors=['rgba(255,215,0,0.8)','rgba(127,255,127,0.6)','rgba(108,180,238,0.5)','rgba(255,160,122,0.4)','rgba(200,200,200,0.3)'];
      var top5=items.slice().sort(function(a,b){
        var sa=a.axes.reduce(function(x,y){return x+y;},0), sb=b.axes.reduce(function(x,y){return x+y;},0);
        return sb-sa;
      }).slice(0,5);
      for(var i=top5.length-1;i>=0;i--){
        v24DrawRadar(ctx,W/2,H/2+10,140,axLabels,top5[i].axes,colors[i],0.1);
      }
      ctx.font='bold 14px sans-serif'; ctx.textAlign='left';
      for(var i=0;i<top5.length;i++){
        ctx.fillStyle=colors[i]; ctx.fillText('● '+top5[i].name,20,30+i*20);
      }
      v24SFX.compare();
    },
    reset:function(){draw();v24SFX.click();}
  };
})();

// ============================================================
// 2. 건축 소음 전파 시뮬레이터 (8실 6소음원 히트맵)
// ============================================================
var v24Noise = (function(){
  var rooms=[
    {name:'대청',x:0.5,y:0.3,w:0.25,h:0.2},
    {name:'안방',x:0.2,y:0.3,w:0.18,h:0.2},
    {name:'건넌방',x:0.78,y:0.3,w:0.18,h:0.2},
    {name:'부엌',x:0.2,y:0.6,w:0.2,h:0.18},
    {name:'마루',x:0.5,y:0.55,w:0.15,h:0.12},
    {name:'툇마루',x:0.5,y:0.15,w:0.3,h:0.08},
    {name:'다락',x:0.78,y:0.6,w:0.15,h:0.12},
    {name:'화장실',x:0.45,y:0.72,w:0.12,h:0.1}
  ];
  var sources=[
    {name:'대화 소리',db:65,icon:'&#x1F5E3;'},
    {name:'음악 재생',db:75,icon:'&#x1F3B5;'},
    {name:'요리 소음',db:70,icon:'&#x1F373;'},
    {name:'문 여닫기',db:55,icon:'&#x1F6AA;'},
    {name:'걸음 소리',db:50,icon:'&#x1F463;'},
    {name:'빗소리',db:60,icon:'&#x1F327;'}
  ];
  var srcIdx=0, srcRoom=0;
  function draw(){
    var c=document.getElementById('v24-ns-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    var src=sources[srcIdx], sr=rooms[srcRoom];
    var sx=sr.x*W, sy=sr.y*H;
    rooms.forEach(function(rm){
      var rx=rm.x*W-rm.w*W/2, ry=rm.y*H-rm.h*H/2, rw=rm.w*W, rh=rm.h*H;
      var dist=Math.sqrt(Math.pow(rm.x-sr.x,2)+Math.pow(rm.y-sr.y,2));
      var wallLoss=rm===rooms[srcRoom]?0:Math.floor(dist*80+15);
      var recvDB=Math.max(0,src.db-wallLoss);
      var intensity=recvDB/src.db;
      var r=Math.floor(200*intensity), g=Math.floor(100*(1-intensity)), b=50;
      ctx.fillStyle='rgba('+r+','+g+','+b+','+Math.max(0.15,intensity*0.7)+')';
      ctx.fillRect(rx,ry,rw,rh);
      ctx.strokeStyle='rgba(196,149,106,0.4)'; ctx.lineWidth=1.5;
      ctx.strokeRect(rx,ry,rw,rh);
      ctx.font='bold 12px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
      ctx.fillText(rm.name,rm.x*W,rm.y*H-6);
      ctx.font='11px sans-serif'; ctx.fillStyle=recvDB>50?'#ff8888':'#88ff88';
      ctx.fillText(recvDB+'dB',rm.x*W,rm.y*H+10);
    });
    var grad=ctx.createRadialGradient(sx,sy,5,sx,sy,120);
    grad.addColorStop(0,'rgba(255,100,50,0.4)');
    grad.addColorStop(0.5,'rgba(255,100,50,0.1)');
    grad.addColorStop(1,'rgba(255,100,50,0)');
    ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
    ctx.beginPath();ctx.arc(sx,sy,8,0,Math.PI*2);ctx.fillStyle='#ff6633';ctx.fill();
    ctx.font='bold 14px sans-serif'; ctx.fillStyle='#ffd700'; ctx.textAlign='center';
    ctx.fillText(src.icon+' '+src.name+' ('+src.db+'dB)',W/2,H-20);
    document.getElementById('v24-ns-info').innerHTML='&#xC18C;&#xC74C;&#xC6D0;: <b style="color:#f5deb3">'+src.name+'</b> ('+src.db+'dB) @ '+rooms[srcRoom].name+'<br>&#xBCBD;&#xCCB4; &#xD22C;&#xACFC; &#xC190;&#xC2E4; &#xBC0F; &#xAC70;&#xB9AC; &#xAC10;&#xC1E0; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;';
    var st=document.getElementById('v24-ns-stat');
    st.innerHTML='<div class="s"><div class="sv">'+src.db+'</div><div class="sl">&#xC6D0;&#xC74C; dB</div></div>'+
      '<div class="s"><div class="sv">'+rooms.length+'</div><div class="sl">&#xC2E4;</div></div>'+
      '<div class="s"><div class="sv">'+sources.length+'</div><div class="sl">&#xC18C;&#xC74C;&#xC6D0;</div></div>';
  }
  function makeTabs(){
    var t=document.getElementById('v24-ns-tabs'); t.innerHTML='';
    rooms.forEach(function(rm,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===srcRoom?' active':'');
      b.textContent=rm.name;
      b.onclick=function(){srcRoom=i;makeTabs();draw();v24SFX.tab();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-noise').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-noise').classList.remove('active');v24SFX.close();},
    toggle:function(){srcIdx=(srcIdx+1)%sources.length;draw();v24SFX.toggle();}
  };
})();

// ============================================================
// 3. 전통 한옥 배치도 풍수 분석 (8채 네트워크)
// ============================================================
var v24Layout = (function(){
  var buildings=[
    {name:'사랑채',x:0.5,y:0.25,role:'주인 남성 거처/접객',score:92,color:'#ffd700'},
    {name:'안채',x:0.35,y:0.45,role:'여성 거처/살림',score:95,color:'#ff7f7f'},
    {name:'행랑채',x:0.5,y:0.65,role:'하인 거처/대문',score:78,color:'#7fbfff'},
    {name:'별당',x:0.7,y:0.35,role:'자녀/서재 공간',score:85,color:'#7fff7f'},
    {name:'사당',x:0.2,y:0.25,role:'조상 제사 공간',score:98,color:'#ffbf00'},
    {name:'곳간',x:0.65,y:0.55,role:'곡식/물자 보관',score:72,color:'#bf8f4f'},
    {name:'마구간',x:0.8,y:0.65,role:'가축 사육',score:65,color:'#9f7f5f'},
    {name:'후원',x:0.3,y:0.75,role:'정원/휴식 공간',score:88,color:'#50c878'}
  ];
  var connections=[
    [0,1,'부부축'],[0,3,'교육'],[1,5,'살림'],[2,6,'노동'],
    [0,4,'제례'],[1,2,'출입'],[3,7,'풍류'],[5,6,'관리'],
    [1,7,'여가'],[4,7,'경관'],[0,2,'통행']
  ];
  var selB=0;
  function draw(){
    var c=document.getElementById('v24-ly-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(196,149,106,0.15)';ctx.lineWidth=0.5;
    for(var gx=0;gx<W;gx+=40){ctx.beginPath();ctx.moveTo(gx,0);ctx.lineTo(gx,H);ctx.stroke();}
    for(var gy=0;gy<H;gy+=40){ctx.beginPath();ctx.moveTo(0,gy);ctx.lineTo(W,gy);ctx.stroke();}
    connections.forEach(function(cn){
      var a=buildings[cn[0]], b=buildings[cn[1]];
      var hi=cn[0]===selB||cn[1]===selB;
      ctx.strokeStyle=hi?'rgba(255,215,0,0.6)':'rgba(196,149,106,0.2)';
      ctx.lineWidth=hi?2.5:1;
      ctx.setLineDash(hi?[]:[4,4]);
      ctx.beginPath();ctx.moveTo(a.x*W,a.y*H);ctx.lineTo(b.x*W,b.y*H);ctx.stroke();
      ctx.setLineDash([]);
      if(hi){
        var mx=(a.x+b.x)/2*W, my=(a.y+b.y)/2*H;
        ctx.font='10px sans-serif'; ctx.fillStyle='#ffd700'; ctx.textAlign='center';
        ctx.fillText(cn[2],mx,my-5);
      }
    });
    buildings.forEach(function(bd,i){
      var bx=bd.x*W, by=bd.y*H, r=i===selB?24:18;
      ctx.beginPath();ctx.arc(bx,by,r,0,Math.PI*2);
      ctx.fillStyle=i===selB?bd.color:'rgba(196,149,106,0.3)';
      ctx.fill();
      ctx.strokeStyle=bd.color; ctx.lineWidth=2; ctx.stroke();
      ctx.font=(i===selB?'bold ':'')+' 11px sans-serif'; ctx.fillStyle='#fff'; ctx.textAlign='center';
      ctx.fillText(bd.name,bx,by+4);
      ctx.font='10px sans-serif'; ctx.fillStyle=v24GradeColor(v24Grade(bd.score));
      ctx.fillText(v24Grade(bd.score),bx,by-r-6);
    });
    ctx.font='bold 14px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText('&#xD55C;&#xC625; &#xBC30;&#xCE58;&#xB3C4; &#xD48D;&#xC218; &#xBD84;&#xC11D;',W/2,25);
    var sb=buildings[selB];
    document.getElementById('v24-ly-info').innerHTML='<b style="color:'+sb.color+'">'+sb.name+'</b> &#x2014; '+sb.role+'<br>&#xD48D;&#xC218; &#xC801;&#xD569;&#xB3C4;: <b style="color:'+v24GradeColor(v24Grade(sb.score))+'">'+sb.score+'&#xC810; ('+v24Grade(sb.score)+')</b>';
    var st=document.getElementById('v24-ly-stat');
    var avgScore=Math.round(buildings.reduce(function(a,b){return a+b.score;},0)/buildings.length);
    st.innerHTML='<div class="s"><div class="sv">'+buildings.length+'</div><div class="sl">&#xAC74;&#xBB3C;</div></div>'+
      '<div class="s"><div class="sv">'+connections.length+'</div><div class="sl">&#xC5F0;&#xACB0;</div></div>'+
      '<div class="s"><div class="sv">'+avgScore+'</div><div class="sl">&#xD3C9;&#xADE0; &#xC801;&#xD569;&#xB3C4;</div></div>';
  }
  function makeTabs(){
    var t=document.getElementById('v24-ly-tabs'); t.innerHTML='';
    buildings.forEach(function(bd,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===selB?' active':'');
      b.textContent=bd.name;
      b.onclick=function(){selB=i;makeTabs();draw();v24SFX.network();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-layout').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-layout').classList.remove('active');v24SFX.close();}
  };
})();

// ============================================================
// 4. 건축 자재 탄소배출 비교 (10자재 5축 Bar)
// ============================================================
var v24Carbon = (function(){
  var items=[
    {name:'목재',vals:[15,20,85,80,75],desc:'전통 건축의 핵심 자재. 탄소 흡수 효과가 있어 친환경적이다.'},
    {name:'석재',vals:[25,30,40,95,55],desc:'화강암, 대리석 등. 내구성이 뛰어나지만 채취 시 환경 영향이 크다.'},
    {name:'흙(점토)',vals:[10,15,70,70,90],desc:'가장 친환경적인 자재. 흙벽, 토담, 기와 원료로 사용된다.'},
    {name:'기와',vals:[35,40,50,88,65],desc:'점토를 소성하여 만든 지붕재. 소성 과정에서 에너지를 소비한다.'},
    {name:'시멘트',vals:[85,90,20,75,30],desc:'현대 건축의 핵심. 생산 과정에서 많은 CO2를 배출한다.'},
    {name:'철강',vals:[90,95,30,90,25],desc:'구조용 강재. 생산 에너지가 높지만 100% 재활용이 가능하다.'},
    {name:'유리',vals:[60,65,35,60,40],desc:'채광용. 생산 시 고온이 필요하며 재활용률이 높아지고 있다.'},
    {name:'단열재',vals:[55,50,25,50,45],desc:'EPS, 글라스울 등. 에너지 절감에 기여하지만 생산 시 화학물질을 사용한다.'},
    {name:'합판',vals:[30,35,60,55,65],desc:'목재를 가공한 판재. 접착제 사용으로 친환경성이 원목보다 떨어진다.'},
    {name:'대나무',vals:[8,10,90,65,85],desc:'빠른 성장으로 탄소 흡수 능력이 뛰어나다. 아시아 건축에 널리 사용된다.'}
  ];
  var axLabels=['탄소배출','에너지소비','재활용성','내구성','경제성'];
  var sel=0, sortMode=0;
  function draw(){
    var c=document.getElementById('v24-cb-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    var sorted=items.slice().sort(function(a,b){return a.vals[sortMode]-b.vals[sortMode];});
    var barH=28, gap=6, startY=40;
    ctx.font='bold 14px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText('&#xC815;&#xB82C;: '+axLabels[sortMode],W/2,25);
    sorted.forEach(function(it,i){
      var y=startY+i*(barH+gap);
      var val=it.vals[sortMode];
      var bw=(W-180)*val/100;
      var isCarbon=sortMode<=1;
      var r,g,b;
      if(isCarbon){r=Math.floor(50+val*2);g=Math.floor(180-val*1.5);b=50;}
      else{r=50;g=Math.floor(100+val*1.2);b=Math.floor(50+val);}
      ctx.fillStyle='rgba('+r+','+g+','+b+',0.7)';
      ctx.fillRect(110,y,bw,barH);
      ctx.strokeStyle='rgba('+r+','+g+','+b+',1)'; ctx.lineWidth=1;
      ctx.strokeRect(110,y,bw,barH);
      ctx.font='12px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='right';
      ctx.fillText(it.name,100,y+barH/2+4);
      ctx.textAlign='left'; ctx.fillStyle='#fff';
      ctx.fillText(val,112+bw+6,y+barH/2+4);
      if(it===items[sel]){
        ctx.strokeStyle='#ffd700'; ctx.lineWidth=2;
        ctx.strokeRect(109,y-1,bw+2,barH+2);
      }
    });
    document.getElementById('v24-cb-info').innerHTML='<b style="color:#f5deb3">'+items[sel].name+'</b><br>'+items[sel].desc;
    var st=document.getElementById('v24-cb-stat');
    st.innerHTML='';
    for(var i=0;i<axLabels.length;i++){
      st.innerHTML+='<div class="s"><div class="sv">'+items[sel].vals[i]+'</div><div class="sl">'+axLabels[i]+'</div></div>';
    }
  }
  function makeTabs(){
    var t=document.getElementById('v24-cb-tabs'); t.innerHTML='';
    items.forEach(function(it,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===sel?' active':'');
      b.textContent=it.name;
      b.onclick=function(){sel=i;makeTabs();draw();v24SFX.carbon();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-carbon').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-carbon').classList.remove('active');v24SFX.close();},
    sortBy:function(){sortMode=(sortMode+1)%axLabels.length;draw();v24SFX.sort();}
  };
})();

// ============================================================
// 5. 전통 기둥 양식 도감 (10종 6축 Radar)
// ============================================================
var v24Pillar = (function(){
  var items=[
    {name:'원형기둥',axes:[85,78,80,82,85,75],desc:'가장 보편적인 원형 단면 기둥. 목재의 자연스러운 형태를 살린다.',era:'삼국~조선'},
    {name:'방형기둥',axes:[88,65,85,85,70,80],desc:'사각 단면 기둥. 안정감이 있으며 현대 한옥에서도 사용된다.',era:'고려~현대'},
    {name:'다각기둥',axes:[82,85,60,80,90,55],desc:'6각, 8각 등 다각형 단면. 궁궐과 사찰의 격식있는 기둥.',era:'통일신라~조선'},
    {name:'배흘림기둥',axes:[90,95,40,88,98,40],desc:'가운데가 볼록한 엔타시스 기법. 시각적 안정감을 준다.',era:'삼국~조선'},
    {name:'민흘림기둥',axes:[82,80,75,80,88,70],desc:'위로 갈수록 가늘어지는 기둥. 자연스러운 수목의 형태.',era:'삼국~현대'},
    {name:'엔타시스',axes:[88,92,35,85,95,38],desc:'고대 그리스 영향의 중앙 볼록 기둥. 부석사 무량수전이 대표적.',era:'통일신라'},
    {name:'주기(柱基)',axes:[78,70,70,90,82,65],desc:'기둥 하부의 주춧돌 위 마감 기법. 방습과 구조 보강.',era:'삼국~조선'},
    {name:'귀솟음',axes:[75,88,45,78,92,48],desc:'건물 모서리 기둥을 높게 세우는 기법. 지붕선의 곡선미.',era:'고려~조선'},
    {name:'안쏠림',axes:[80,85,50,82,90,52],desc:'기둥을 안쪽으로 기울이는 기법. 구조적 안정성 향상.',era:'삼국~조선'},
    {name:'활주',axes:[72,60,78,75,85,72],desc:'추녀 끝을 받치는 보조 기둥. 처마의 무게를 지탱한다.',era:'조선'}
  ];
  var axLabels=['구조성','미관','제작성','내구성','전통성','경제성'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v24-pl-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    var it=items[sel], avg=Math.round(it.axes.reduce(function(a,b){return a+b;},0)/it.axes.length);
    var grd=v24Grade(avg), gc=v24GradeColor(grd);
    v24DrawRadar(ctx,W/2,H/2+10,130,axLabels,it.axes,'rgba(139,90,43,1)',0.3);
    ctx.font='bold 16px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText(it.name,W/2,28);
    ctx.font='bold 28px sans-serif'; ctx.fillStyle=gc;
    ctx.fillText(grd,W-45,45);
    ctx.font='11px sans-serif'; ctx.fillStyle='#c4956a';
    ctx.fillText(avg+'&#xC810;',W-45,62);
    document.getElementById('v24-pl-info').innerHTML='<b style="color:#f5deb3">'+it.name+'</b> ('+it.era+')<br>'+it.desc;
    var st=document.getElementById('v24-pl-stat');
    st.innerHTML='';
    for(var i=0;i<axLabels.length;i++){
      st.innerHTML+='<div class="s"><div class="sv">'+it.axes[i]+'</div><div class="sl">'+axLabels[i]+'</div></div>';
    }
  }
  function makeTabs(){
    var t=document.getElementById('v24-pl-tabs'); t.innerHTML='';
    items.forEach(function(it,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===sel?' active':'');
      b.textContent=it.name;
      b.onclick=function(){sel=i;makeTabs();draw();v24SFX.pillar();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-pillar').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-pillar').classList.remove('active');v24SFX.close();},
    compare:function(){
      var c=document.getElementById('v24-pl-canvas'); if(!c) return;
      var ctx=c.getContext('2d'), W=c.width, H=c.height;
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
      var colors=['rgba(255,215,0,0.8)','rgba(139,90,43,0.7)','rgba(108,180,238,0.5)','rgba(200,160,120,0.4)','rgba(150,150,150,0.3)'];
      var top5=items.slice().sort(function(a,b){
        var sa=a.axes.reduce(function(x,y){return x+y;},0), sb=b.axes.reduce(function(x,y){return x+y;},0);
        return sb-sa;
      }).slice(0,5);
      for(var i=top5.length-1;i>=0;i--){
        v24DrawRadar(ctx,W/2,H/2+10,130,axLabels,top5[i].axes,colors[i],0.1);
      }
      ctx.font='bold 13px sans-serif'; ctx.textAlign='left';
      for(var i=0;i<top5.length;i++){
        ctx.fillStyle=colors[i]; ctx.fillText('● '+top5[i].name,15,28+i*18);
      }
      v24SFX.compare();
    },
    reset:function(){draw();v24SFX.click();}
  };
})();

// ============================================================
// 6. 건축 비용 워터폴 차트 (8항목 누적)
// ============================================================
var v24CostFlow = (function(){
  var buildTypes=[
    {name:'한옥 (30평)',costs:[8000,3500,12000,5500,6000,4500,3500,2000],unit:'만원'},
    {name:'기와집 (25평)',costs:[6000,3000,9000,4800,5000,3800,3000,1500],unit:'만원'},
    {name:'초가집 (15평)',costs:[3000,1500,4000,1200,2500,1800,1500,800],unit:'만원'},
    {name:'현대주택 (35평)',costs:[12000,5000,15000,6000,8000,7000,5000,3000],unit:'만원'}
  ];
  var categories=['토지정리','기초공사','구조체','지붕','내장','설비','마감','조경'];
  var colors=['#c4956a','#8b5a2b','#daa520','#cd853f','#d2691e','#a0522d','#8b4513','#556b2f'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v24-cf-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    var bt=buildTypes[sel], costs=bt.costs;
    var total=costs.reduce(function(a,b){return a+b;},0);
    var maxH=H-100, barW=50, gap=(W-80-barW*costs.length)/(costs.length-1||1);
    var startX=60;
    ctx.font='bold 14px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText(bt.name+' &#xAC74;&#xCD95;&#xBE44;&#xC6A9; &#xC6CC;&#xD130;&#xD3F4;',W/2,25);
    var cumul=0;
    costs.forEach(function(cost,i){
      var x=startX+i*(barW+gap);
      var bh=maxH*cost/total;
      var y=50+maxH*cumul/total;
      ctx.fillStyle=colors[i];
      ctx.fillRect(x,y,barW,bh);
      ctx.strokeStyle='rgba(255,255,255,0.15)'; ctx.lineWidth=0.5;
      ctx.strokeRect(x,y,barW,bh);
      if(i<costs.length-1){
        var nextY=50+maxH*(cumul+cost)/total;
        ctx.strokeStyle='rgba(196,149,106,0.3)'; ctx.setLineDash([3,3]); ctx.lineWidth=1;
        ctx.beginPath();ctx.moveTo(x+barW,nextY);ctx.lineTo(x+barW+gap,nextY);ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.font='bold 11px sans-serif'; ctx.fillStyle='#fff'; ctx.textAlign='center';
      ctx.fillText(cost.toLocaleString(),x+barW/2,y+bh/2+4);
      ctx.save();ctx.translate(x+barW/2,H-8);
      ctx.font='10px sans-serif'; ctx.fillStyle='#c4956a';
      ctx.fillText(categories[i],0,0);
      ctx.restore();
      cumul+=cost;
    });
    var totalX=startX+(costs.length)*(barW+gap)-gap;
    if(totalX+barW<W){
      var totalBh=maxH;
      ctx.fillStyle='rgba(196,149,106,0.3)';
      ctx.fillRect(totalX,50,barW,totalBh);
      ctx.strokeStyle='#c4956a'; ctx.lineWidth=1.5;
      ctx.strokeRect(totalX,50,barW,totalBh);
      ctx.font='bold 12px sans-serif'; ctx.fillStyle='#ffd700'; ctx.textAlign='center';
      ctx.fillText(total.toLocaleString(),totalX+barW/2,50+totalBh/2);
      ctx.font='10px sans-serif'; ctx.fillStyle='#c4956a';
      ctx.fillText('&#xCD1D;&#xACC4;',totalX+barW/2,H-8);
    }
    document.getElementById('v24-cf-info').innerHTML='<b style="color:#f5deb3">'+bt.name+'</b> &#xCD1D; &#xAC74;&#xCD95;&#xBE44;: <b style="color:#ffd700">'+total.toLocaleString()+bt.unit+'</b>';
    var st=document.getElementById('v24-cf-stat');
    var maxCat=categories[costs.indexOf(Math.max.apply(null,costs))];
    var minCat=categories[costs.indexOf(Math.min.apply(null,costs))];
    st.innerHTML='<div class="s"><div class="sv">'+total.toLocaleString()+'</div><div class="sl">&#xCD1D;&#xBE44;&#xC6A9;('+bt.unit+')</div></div>'+
      '<div class="s"><div class="sv">'+maxCat+'</div><div class="sl">&#xCD5C;&#xB300; &#xBE44;&#xC6A9;</div></div>'+
      '<div class="s"><div class="sv">'+minCat+'</div><div class="sl">&#xCD5C;&#xC18C; &#xBE44;&#xC6A9;</div></div>';
  }
  function makeTabs(){
    var t=document.getElementById('v24-cf-tabs'); t.innerHTML='';
    buildTypes.forEach(function(bt,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===sel?' active':'');
      b.textContent=bt.name;
      b.onclick=function(){sel=i;makeTabs();draw();v24SFX.waterfall();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-costflow').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-costflow').classList.remove('active');v24SFX.close();}
  };
})();

// ============================================================
// 7. 한옥 공간 프로그래밍 분석 (8공간 도넛+바)
// ============================================================
var v24Space = (function(){
  var spaces=[
    {name:'대청',area:18,func:85,priv:30,light:95,vent:90,desc:'중심 공간. 접객, 가족 모임, 의례의 다목적 공간.'},
    {name:'안방',area:12,func:90,priv:95,light:70,vent:65,desc:'가장의 침실. 온돌 난방으로 겨울 생활의 중심.'},
    {name:'건넌방',area:10,func:82,priv:88,light:72,vent:68,desc:'자녀 또는 손님방. 안방 맞은편에 위치한다.'},
    {name:'부엌',area:8,func:95,priv:40,light:60,vent:85,desc:'취사 공간. 아궁이가 안방 온돌과 연결된다.'},
    {name:'마루',area:6,func:75,priv:20,light:98,vent:95,desc:'개방형 통행 및 휴식 공간. 여름 생활의 중심.'},
    {name:'툇마루',area:5,func:65,priv:15,light:90,vent:92,desc:'건물 전면의 반외부 공간. 경관 감상과 휴식.'},
    {name:'다락',area:4,func:60,priv:80,light:30,vent:35,desc:'지붕 아래 수납 공간. 곡식이나 물건을 보관한다.'},
    {name:'뒷간',area:2,func:70,priv:98,light:40,vent:50,desc:'위생 공간. 본채에서 떨어진 곳에 위치한다.'}
  ];
  var totalArea=spaces.reduce(function(a,s){return a+s.area;},0);
  var sel=0, mode=0;
  var spColors=['#c4956a','#ff7f7f','#7fbfff','#ffd700','#7fff7f','#ffbf00','#bf8f4f','#9f7f5f'];
  function draw(){
    var c=document.getElementById('v24-sp-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    if(mode===0){
      var cx=W*0.3, cy=H/2, outerR=120, innerR=70;
      var startAng=-Math.PI/2;
      spaces.forEach(function(sp,i){
        var sweepAng=Math.PI*2*sp.area/totalArea;
        var endAng=startAng+sweepAng;
        var isSel=i===sel;
        var ox=isSel?Math.cos(startAng+sweepAng/2)*8:0;
        var oy=isSel?Math.sin(startAng+sweepAng/2)*8:0;
        ctx.beginPath();
        ctx.arc(cx+ox,cy+oy,outerR,startAng,endAng);
        ctx.arc(cx+ox,cy+oy,innerR,endAng,startAng,true);
        ctx.closePath();
        ctx.fillStyle=spColors[i];
        ctx.globalAlpha=isSel?1:0.6;
        ctx.fill();
        ctx.globalAlpha=1;
        ctx.strokeStyle='rgba(20,14,8,0.8)'; ctx.lineWidth=2; ctx.stroke();
        var midAng=startAng+sweepAng/2;
        var lblR=(outerR+innerR)/2;
        var lx=cx+ox+Math.cos(midAng)*lblR;
        var ly=cy+oy+Math.sin(midAng)*lblR;
        if(sweepAng>0.25){
          ctx.font='bold 10px sans-serif'; ctx.fillStyle='#2d1b0e'; ctx.textAlign='center';
          ctx.fillText(sp.name,lx,ly);
          ctx.font='9px sans-serif';
          ctx.fillText(Math.round(sp.area/totalArea*100)+'%',lx,ly+12);
        }
        startAng=endAng;
      });
      ctx.font='bold 14px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
      ctx.fillText(totalArea+'&#xD3C9;',cx,cy-4);
      ctx.font='11px sans-serif'; ctx.fillStyle='#c4956a';
      ctx.fillText('&#xCD1D;&#xBA74;&#xC801;',cx,cy+12);
      var barX=W*0.58, barW=W*0.35, barH=18, barGap=6;
      var metrics=['&#xAE30;&#xB2A5;&#xC131;','&#xD504;&#xB77C;&#xC774;&#xBC84;&#xC2DC;','&#xCC44;&#xAD11;','&#xD658;&#xAE30;'];
      var metricKeys=['func','priv','light','vent'];
      ctx.font='bold 12px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
      ctx.fillText(spaces[sel].name+' &#xC138;&#xBD80; &#xC9C0;&#xD45C;',barX+barW/2,40);
      metrics.forEach(function(m,mi){
        var y=60+mi*(barH+barGap+16);
        ctx.font='10px sans-serif'; ctx.fillStyle='#c4956a'; ctx.textAlign='left';
        ctx.fillText(m,barX,y);
        var val=spaces[sel][metricKeys[mi]];
        ctx.fillStyle='rgba(196,149,106,0.15)';
        ctx.fillRect(barX,y+4,barW,barH);
        ctx.fillStyle=spColors[sel];
        ctx.fillRect(barX,y+4,barW*val/100,barH);
        ctx.font='bold 11px sans-serif'; ctx.fillStyle='#fff'; ctx.textAlign='right';
        ctx.fillText(val,barX+barW*val/100-4,y+4+barH/2+4);
      });
    }
    document.getElementById('v24-sp-info').innerHTML='<b style="color:'+spColors[sel]+'">'+spaces[sel].name+'</b> ('+spaces[sel].area+'&#xD3C9;, '+Math.round(spaces[sel].area/totalArea*100)+'%)<br>'+spaces[sel].desc;
    var st=document.getElementById('v24-sp-stat');
    st.innerHTML='<div class="s"><div class="sv">'+spaces[sel].func+'</div><div class="sl">&#xAE30;&#xB2A5;&#xC131;</div></div>'+
      '<div class="s"><div class="sv">'+spaces[sel].priv+'</div><div class="sl">&#xD504;&#xB77C;&#xC774;&#xBC84;&#xC2DC;</div></div>'+
      '<div class="s"><div class="sv">'+spaces[sel].light+'</div><div class="sl">&#xCC44;&#xAD11;</div></div>'+
      '<div class="s"><div class="sv">'+spaces[sel].vent+'</div><div class="sl">&#xD658;&#xAE30;</div></div>';
  }
  function makeTabs(){
    var t=document.getElementById('v24-sp-tabs'); t.innerHTML='';
    spaces.forEach(function(sp,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===sel?' active':'');
      b.textContent=sp.name;
      b.onclick=function(){sel=i;makeTabs();draw();v24SFX.space();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-space').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-space').classList.remove('active');v24SFX.close();}
  };
})();

// ============================================================
// 8. 건축 종합 성적표 (8축 Radar + 등급)
// ============================================================
var v24Report = (function(){
  var buildings=[
    {name:'한옥',vals:[82,65,95,80,78,88,55,98],desc:'전통 목구조 건축의 정수. 자연과 조화로운 주거 공간.'},
    {name:'기와집',vals:[85,68,90,82,82,80,60,92],desc:'기와지붕 한옥. 격식과 내구성을 겸비한 전통 주거.'},
    {name:'초가집',vals:[60,50,75,65,55,92,85,88],desc:'짚이엉 지붕의 서민 주거. 친환경적이나 유지보수가 잦다.'},
    {name:'서원',vals:[90,60,92,75,88,78,50,95],desc:'유교 교육기관. 격식 높은 건축 양식과 뛰어난 공간 구성.'},
    {name:'정자',vals:[55,70,98,60,65,85,72,90],desc:'경관 감상 건축. 개방적 구조로 자연과 하나 되는 공간.'},
    {name:'현대주택',vals:[95,92,70,95,90,45,70,20],desc:'현대 건축 기술의 집약. 편의성과 에너지 효율이 뛰어나다.'}
  ];
  var axLabels=['구조안전','에너지효율','미학','기능성','내구성','친환경','비용효율','전통성'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v24-rp-canvas'); if(!c) return;
    var ctx=c.getContext('2d'), W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(20,14,8,0.95)'; ctx.fillRect(0,0,W,H);
    var bd=buildings[sel], avg=Math.round(bd.vals.reduce(function(a,b){return a+b;},0)/bd.vals.length);
    var grd=v24Grade(avg), gc=v24GradeColor(grd);
    v24DrawRadar(ctx,W/2-60,H/2+10,140,axLabels,bd.vals,'rgba(196,149,106,1)',0.25);
    ctx.font='bold 16px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText(bd.name+' &#xC885;&#xD569; &#xC131;&#xC801;&#xD45C;',W/2,28);
    var gaugeX=W-100, gaugeY=H/2;
    ctx.beginPath();ctx.arc(gaugeX,gaugeY,50,Math.PI,0);
    ctx.strokeStyle='rgba(196,149,106,0.2)';ctx.lineWidth=12;ctx.stroke();
    var pct=avg/100;
    ctx.beginPath();ctx.arc(gaugeX,gaugeY,50,Math.PI,Math.PI+Math.PI*pct);
    ctx.strokeStyle=gc;ctx.lineWidth=12;ctx.stroke();
    ctx.font='bold 32px sans-serif'; ctx.fillStyle=gc; ctx.textAlign='center';
    ctx.fillText(grd,gaugeX,gaugeY-5);
    ctx.font='14px sans-serif'; ctx.fillStyle='#f5deb3';
    ctx.fillText(avg+'&#xC810;',gaugeX,gaugeY+18);
    var rankItems=bd.vals.map(function(v,i){return {name:axLabels[i],val:v};}).sort(function(a,b){return b.val-a.val;});
    ctx.font='11px sans-serif'; ctx.textAlign='left';
    ctx.fillStyle='#c4956a';
    ctx.fillText('&#xAC15;&#xC810;',W-140,H/2+50);
    ctx.fillStyle='#7fff7f';
    ctx.fillText('1. '+rankItems[0].name+' ('+rankItems[0].val+')',W-140,H/2+68);
    ctx.fillText('2. '+rankItems[1].name+' ('+rankItems[1].val+')',W-140,H/2+84);
    ctx.fillStyle='#c4956a';
    ctx.fillText('&#xC57D;&#xC810;',W-140,H/2+108);
    ctx.fillStyle='#ff8888';
    ctx.fillText('1. '+rankItems[rankItems.length-1].name+' ('+rankItems[rankItems.length-1].val+')',W-140,H/2+126);
    ctx.fillText('2. '+rankItems[rankItems.length-2].name+' ('+rankItems[rankItems.length-2].val+')',W-140,H/2+142);
    document.getElementById('v24-rp-info').innerHTML='<b style="color:#f5deb3">'+bd.name+'</b> &#x2014; '+bd.desc+'<br>&#xC885;&#xD569; &#xB4F1;&#xAE09;: <b style="color:'+gc+'">'+grd+'&#xB4F1;&#xAE09; ('+avg+'&#xC810;)</b>';
    var st=document.getElementById('v24-rp-stat');
    st.innerHTML='';
    for(var i=0;i<axLabels.length;i++){
      st.innerHTML+='<div class="s"><div class="sv">'+bd.vals[i]+'</div><div class="sl">'+axLabels[i]+'</div></div>';
    }
  }
  function makeTabs(){
    var t=document.getElementById('v24-rp-tabs'); t.innerHTML='';
    buildings.forEach(function(bd,i){
      var b=document.createElement('button'); b.className='v24-tab'+(i===sel?' active':'');
      b.textContent=bd.name;
      b.onclick=function(){sel=i;makeTabs();draw();v24SFX.report();};
      t.appendChild(b);
    });
  }
  return {
    open:function(){document.getElementById('v24-report').classList.add('active');makeTabs();draw();v24SFX.open();},
    close:function(){document.getElementById('v24-report').classList.remove('active');v24SFX.close();},
    cycle:function(){sel=(sel+1)%buildings.length;makeTabs();draw();v24SFX.report();}
  };
})();

// ============================================================
// 퀴즈 v24 +15문 (285→300)
// ============================================================
(function(){
  if(!window.hbQuizData) window.hbQuizData=[];
  var q=window.hbQuizData;
  q.push(
    {q:'서까래 중 지붕 모서리의 곡선을 만드는 부재는?',a:['추녀','평서까래','부연','도리'],c:0},
    {q:'배흘림기둥의 특징은?',a:['가운데가 볼록','아래가 넓음','위가 넓음','사각형'],c:0},
    {q:'한옥에서 가장 친환경적인 건축 자재는?',a:['흙(점토)','시멘트','철강','유리'],c:0},
    {q:'한옥 배치에서 사당의 위치로 적합한 곳은?',a:['동북쪽 높은 곳','서남쪽 낮은 곳','중앙','대문 옆'],c:0},
    {q:'건축 비용에서 가장 큰 비중을 차지하는 항목은?',a:['구조체','조경','마감','토지정리'],c:0},
    {q:'한옥 대청의 주요 기능이 아닌 것은?',a:['취사','접객','의례','가족모임'],c:0},
    {q:'엔타시스 기법이 적용된 대표적 건물은?',a:['부석사 무량수전','경복궁 근정전','숭례문','불국사 대웅전'],c:0},
    {q:'소음 전파에서 벽체 투과 손실의 단위는?',a:['dB','Hz','lux','Pa'],c:0},
    {q:'귀솟음 기법의 목적은?',a:['지붕선 곡선미','방수','환기','채광'],c:0},
    {q:'탄소배출이 가장 높은 건축 자재는?',a:['철강','목재','대나무','흙'],c:0},
    {q:'한옥에서 온돌과 직접 연결되는 공간은?',a:['부엌','대청','마루','다락'],c:0},
    {q:'활주의 역할은?',a:['추녀 끝 받침','기둥 장식','지붕 방수','벽체 보강'],c:0},
    {q:'건축 워터폴 차트에서 누적 비용이 아닌 것은?',a:['인건비','토지정리','기초공사','구조체'],c:0},
    {q:'한옥 공간 중 프라이버시가 가장 높은 곳은?',a:['뒷간','대청','마루','툇마루'],c:0},
    {q:'안쏠림 기법의 효과는?',a:['구조적 안정성 향상','미관 개선','방수','단열'],c:0}
  );
})();

// ============================================================
// 업적 v24 +12 (254→266)
// ============================================================
(function(){
  if(!window.hbAchievements) window.hbAchievements=[];
  var a=window.hbAchievements;
  a.push(
    {id:'ach_v24_1',name:'서까래 장인',desc:'서까래 10종 전체 분석 완료',icon:'&#x1FAB5;'},
    {id:'ach_v24_2',name:'소음 탐정',desc:'6가지 소음원 전체 시뮬레이션',icon:'&#x1F50A;'},
    {id:'ach_v24_3',name:'풍수 마스터',desc:'8채 배치 풍수 분석 완료',icon:'&#x1F3E1;'},
    {id:'ach_v24_4',name:'탄소 제로',desc:'친환경 자재 5종 학습',icon:'&#x1F33F;'},
    {id:'ach_v24_5',name:'기둥 박사',desc:'기둥 양식 10종 비교 완료',icon:'&#x1F3DB;'},
    {id:'ach_v24_6',name:'건축 회계사',desc:'4종 건물 비용 워터폴 분석',icon:'&#x1F4B0;'},
    {id:'ach_v24_7',name:'공간 디자이너',desc:'8공간 프로그래밍 분석 완료',icon:'&#x1F4D0;'},
    {id:'ach_v24_8',name:'종합 감정사',desc:'6종 건물 종합 성적표 확인',icon:'&#x1F4CA;'},
    {id:'ach_v24_9',name:'A등급 달성',desc:'종합 성적표에서 A등급 이상 획득',icon:'&#x2B50;'},
    {id:'ach_v24_10',name:'v24 탐험가',desc:'v24 기능 8종 중 5종 이상 사용',icon:'&#x1F9ED;'},
    {id:'ach_v24_11',name:'전통 연구자',desc:'서까래+기둥 비교 모드 사용',icon:'&#x1F4DA;'},
    {id:'ach_v24_12',name:'퀴즈 300',desc:'누적 퀴즈 300문 달성',icon:'&#x1F3AF;'}
  );
})();

// ============================================================
// 우측 플로팅 메뉴 (기존 네비에 append, 하단 고정 네비바 미생성)
// ============================================================
(function(){
  var menu = document.createElement('div');
  menu.className = 'v24-menu';
  var btns = [
    {icon:'&#x1FAB5;',label:'&#xC11C;&#xAE4C;&#xB798; &#xBD84;&#xC11D;',fn:'v24Rafters.open()',key:'Q'},
    {icon:'&#x1F50A;',label:'&#xC18C;&#xC74C; &#xC2DC;&#xBBAC;',fn:'v24Noise.open()',key:'W'},
    {icon:'&#x1F3E1;',label:'&#xD48D;&#xC218; &#xBC30;&#xCE58;',fn:'v24Layout.open()',key:'E'},
    {icon:'&#x1F33F;',label:'&#xD0C4;&#xC18C; &#xBE44;&#xAD50;',fn:'v24Carbon.open()',key:'R'},
    {icon:'&#x1F3DB;&#xFE0F;',label:'&#xAE30;&#xB465; &#xB3C4;&#xAC10;',fn:'v24Pillar.open()',key:'T'},
    {icon:'&#x1F4B0;',label:'&#xBE44;&#xC6A9; &#xC6CC;&#xD130;&#xD3F4;',fn:'v24CostFlow.open()',key:'Y'},
    {icon:'&#x1F4D0;',label:'&#xACF5;&#xAC04; &#xBD84;&#xC11D;',fn:'v24Space.open()',key:'U'},
    {icon:'&#x1F4CA;',label:'&#xC885;&#xD569; &#xC131;&#xC801;&#xD45C;',fn:'v24Report.open()',key:'I'},
    {icon:'&#x2699;',label:'v24 &#xC804;&#xCCB4;',fn:'v24ShowAll()',key:'9'}
  ];
  btns.forEach(function(b){
    var btn = document.createElement('button');
    btn.className = 'v24-menu-btn';
    btn.innerHTML = b.icon+'<span class="v24-menu-label">'+b.label+' [Shift+'+b.key+']</span>';
    btn.setAttribute('onclick', b.fn);
    menu.appendChild(btn);
  });
  document.body.appendChild(menu);
})();

// v24 전체 보기
function v24ShowAll(){
  var msg='v24.0 &#xC804;&#xD1B5; &#xAC74;&#xCD95; &#xC2EC;&#xD654; &#xD328;&#xD0A4;&#xC9C0;\n\n'+
    'Shift+Q: &#xC11C;&#xAE4C;&#xB798; &#xAD6C;&#xC870; &#xBD84;&#xC11D;&#xAE30;\n'+
    'Shift+W: &#xC18C;&#xC74C; &#xC804;&#xD30C; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;\n'+
    'Shift+E: &#xD55C;&#xC625; &#xBC30;&#xCE58; &#xD48D;&#xC218; &#xBD84;&#xC11D;\n'+
    'Shift+R: &#xC790;&#xC7AC; &#xD0C4;&#xC18C;&#xBC30;&#xCD9C; &#xBE44;&#xAD50;\n'+
    'Shift+T: &#xAE30;&#xB465; &#xC591;&#xC2DD; &#xB3C4;&#xAC10;\n'+
    'Shift+Y: &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xC6CC;&#xD130;&#xD3F4;\n'+
    'Shift+U: &#xACF5;&#xAC04; &#xD504;&#xB85C;&#xADF8;&#xB798;&#xBC0D;\n'+
    'Shift+I: &#xC885;&#xD569; &#xC131;&#xC801;&#xD45C;\n\n'+
    '&#xD034;&#xC988; +15 (300), &#xC5C5;&#xC801; +12 (266)';
  alert(msg);
}

// ============================================================
// 키보드 단축키 Shift+Q/W/E/R/T/Y/U/I/9
// ============================================================
document.addEventListener('keydown', function(e){
  if(!e.shiftKey) return;
  var map={
    'Q':function(){v24Rafters.open();},
    'W':function(){v24Noise.open();},
    'E':function(){v24Layout.open();},
    'R':function(){v24Carbon.open();},
    'T':function(){v24Pillar.open();},
    'Y':function(){v24CostFlow.open();},
    'U':function(){v24Space.open();},
    'I':function(){v24Report.open();},
    '9':function(){v24ShowAll();}
  };
  var fn=map[e.key.toUpperCase()];
  if(fn){e.preventDefault();fn();}
});

} // end __hbV24 guard

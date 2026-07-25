// =====================================================
// House Builder v22.0 Patch
// 전통기와종류도감Canvas620x400_10종기와6축Radar내구미관방수내화난이도희귀도
// 지반토질분석기Canvas600x380_8종토질6지표Bar지내력배수동결침하굴착지하수
// 건축열관류율계산기Canvas620x380_8부위U값Bar기준선PassFail에너지등급
// 전통처마설계가이드Canvas600x380_8종처마6축Radar차양배수미관구조내구전통성
// 건축시공공정표Canvas640x400_12단계간트차트진행률크리티컬패스일수
// 벽체단면구조분석기Canvas620x380_8종벽체3축StackBar열구조방음
// 에너지소비패턴분석Canvas620x400_12월5분류StackArea난방냉방조명급탕환기
// 전통대문문루설계Canvas600x380_10종대문5축Bar격식규모미관방어전통성
// 퀴즈+15(255->270)+업적+12(230->242)+SFX16종+키보드Shift+Q/1~8
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV22) {
window.__hbV22 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v22-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5300;overflow-y:auto;padding:16px}',
    '.v22-panel.active{display:block}',
    '.v22-box{max-width:720px;margin:40px auto}',
    '.v22-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v22-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v22-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v22-close:hover{background:#d4a57a}',
    '.v22-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v22-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v22-tab:hover,.v22-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v22-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v22-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v22-stat .s{text-align:center}',
    '.v22-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v22-stat .sl{font-size:11px;color:#c4956a}',
    '.v22-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v22-btn-sm:hover{background:#d4a57a}',
    '.v22-menu{position:fixed;right:12px;top:50%;transform:translateY(-50%);z-index:4070;display:flex;flex-direction:column;gap:6px}',
    '.v22-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative}',
    '.v22-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v22-menu-label{position:absolute;right:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v22-menu-btn:hover .v22-menu-label{opacity:1}',
    '@media(max-width:600px){.v22-box{margin:16px auto}.v22-menu{right:6px;gap:4px}.v22-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v22-panels';
  wrap.innerHTML =
    '<div id="v22-giwa" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1FABE; &#xC804;&#xD1B5; &#xAE30;&#xC640; &#xC885;&#xB958; &#xB3C4;&#xAC10;</h2>' +
      '<p>10&#xC885; &#xC804;&#xD1B5; &#xAE30;&#xC640;&#xC758; &#xD2B9;&#xC131; &#xBE44;&#xAD50;</p>' +
      '<div class="v22-tabs" id="v22-gw-tabs"></div>' +
      '<canvas id="v22-gw-canvas" class="v22-canvas" width="620" height="400"></canvas>' +
      '<div id="v22-gw-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-gw-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Giwa.compare()">&#xBE44;&#xAD50;</button> <button class="v22-btn-sm" onclick="v22Giwa.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Giwa.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-soil" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1FAA8; &#xC9C0;&#xBC18; &#xD1A0;&#xC9C8; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>8&#xC885; &#xD1A0;&#xC9C8;&#xC758; &#xAC74;&#xCD95; &#xC801;&#xD569;&#xC131; &#xBD84;&#xC11D;</p>' +
      '<div class="v22-tabs" id="v22-sl-tabs"></div>' +
      '<canvas id="v22-sl-canvas" class="v22-canvas" width="600" height="380"></canvas>' +
      '<div id="v22-sl-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-sl-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Soil.test()">&#xD1A0;&#xC9C8;&#xD14C;&#xC2A4;&#xD2B8;</button> <button class="v22-btn-sm" onclick="v22Soil.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Soil.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-uval" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1F321;&#xFE0F; &#xAC74;&#xCD95; &#xC5F4;&#xAD00;&#xB958;&#xC728; &#xACC4;&#xC0B0;&#xAE30;</h2>' +
      '<p>8&#xBD80;&#xC704; U&#xAC12; &#xBD84;&#xC11D; &#xBC0F; &#xC5D0;&#xB108;&#xC9C0; &#xB4F1;&#xAE09;</p>' +
      '<canvas id="v22-uv-canvas" class="v22-canvas" width="620" height="380"></canvas>' +
      '<div id="v22-uv-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-uv-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Uval.calculate()">&#xACC4;&#xC0B0;</button> <button class="v22-btn-sm" onclick="v22Uval.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Uval.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-eave" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1F3DB;&#xFE0F; &#xC804;&#xD1B5; &#xCC98;&#xB9C8; &#xC124;&#xACC4; &#xAC00;&#xC774;&#xB4DC;</h2>' +
      '<p>8&#xC885; &#xCC98;&#xB9C8;&#xC758; &#xAD6C;&#xC870;&#xC801; &#xD2B9;&#xC131; &#xBD84;&#xC11D;</p>' +
      '<div class="v22-tabs" id="v22-ev-tabs"></div>' +
      '<canvas id="v22-ev-canvas" class="v22-canvas" width="600" height="380"></canvas>' +
      '<div id="v22-ev-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-ev-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Eave.analyze()">&#xBD84;&#xC11D;</button> <button class="v22-btn-sm" onclick="v22Eave.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Eave.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-gantt" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1F4CA; &#xAC74;&#xCD95; &#xC2DC;&#xACF5; &#xACF5;&#xC815;&#xD45C;</h2>' +
      '<p>12&#xB2E8;&#xACC4; &#xC2DC;&#xACF5; &#xACF5;&#xC815; &#xAC04;&#xD2B8;&#xCC28;&#xD2B8;</p>' +
      '<canvas id="v22-gt-canvas" class="v22-canvas" width="640" height="400"></canvas>' +
      '<div id="v22-gt-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-gt-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Gantt.advance()">&#xC9C4;&#xD589;</button> <button class="v22-btn-sm" onclick="v22Gantt.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Gantt.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-wall" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1F9F1; &#xBCBD;&#xCCB4; &#xB2E8;&#xBA74; &#xAD6C;&#xC870; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>8&#xC885; &#xBCBD;&#xCCB4;&#xC758; &#xC5F4;/&#xAD6C;&#xC870;/&#xBC29;&#xC74C; &#xC131;&#xB2A5;</p>' +
      '<div class="v22-tabs" id="v22-wl-tabs"></div>' +
      '<canvas id="v22-wl-canvas" class="v22-canvas" width="620" height="380"></canvas>' +
      '<div id="v22-wl-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-wl-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Wall.compare()">&#xBE44;&#xAD50;</button> <button class="v22-btn-sm" onclick="v22Wall.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Wall.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-energy" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x26A1; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xD328;&#xD134; &#xBD84;&#xC11D;</h2>' +
      '<p>12&#xC6D4; 5&#xBD84;&#xB958; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xC2DC;&#xAC01;&#xD654;</p>' +
      '<canvas id="v22-en-canvas" class="v22-canvas" width="620" height="400"></canvas>' +
      '<div id="v22-en-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-en-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Energy.simulate()">&#xC2DC;&#xBBAC;</button> <button class="v22-btn-sm" onclick="v22Energy.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Energy.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v22-gate" class="v22-panel"><div class="v22-box">' +
      '<h2>&#x1F3EF; &#xC804;&#xD1B5; &#xB300;&#xBB38;/&#xBB38;&#xB8E8; &#xC124;&#xACC4;</h2>' +
      '<p>10&#xC885; &#xC804;&#xD1B5; &#xB300;&#xBB38;&#xC758; &#xD2B9;&#xC131; &#xBE44;&#xAD50;</p>' +
      '<div class="v22-tabs" id="v22-ga-tabs"></div>' +
      '<canvas id="v22-ga-canvas" class="v22-canvas" width="600" height="380"></canvas>' +
      '<div id="v22-ga-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v22-stat" id="v22-ga-stat"></div>' +
      '<div style="text-align:center"><button class="v22-btn-sm" onclick="v22Gate.evaluate()">&#xD3C9;&#xAC00;</button> <button class="v22-btn-sm" onclick="v22Gate.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v22-close" onclick="v22Gate.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  if(document.readyState==='complete')document.body.appendChild(wrap);
  else window.addEventListener('load',function(){document.body.appendChild(wrap);});
})();

var v22sfx=(function(){
  var ctx=null;
  function g(){if(!ctx)try{ctx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return ctx;}
  function beep(f,d,t,vol){var c=g();if(!c)return;var o=c.createOscillator(),gn=c.createGain();o.type=t||'sine';o.frequency.value=f;gn.gain.value=vol||.08;o.connect(gn);gn.connect(c.destination);o.start();o.stop(c.currentTime+(d||.1));}
  return{
    nav:function(){beep(880,.06,'sine',.07);},
    tab:function(){beep(660,.04,'triangle',.06);},
    giwa:function(){beep(520,.12,'sine',.08);},
    soil:function(){beep(220,.15,'sawtooth',.05);},
    uval:function(){beep(440,.08,'square',.04);},
    eave:function(){beep(600,.1,'sine',.07);},
    gantt:function(){beep(350,.1,'triangle',.06);},
    wall:function(){beep(280,.12,'sawtooth',.05);},
    energy:function(){beep(700,.08,'sine',.06);},
    gate:function(){beep(500,.1,'triangle',.07);},
    pass:function(){beep(880,.06,'sine',.07);setTimeout(function(){beep(1100,.08,'sine',.07);},80);},
    fail:function(){beep(200,.15,'sawtooth',.06);},
    advance:function(){beep(660,.05,'sine',.06);setTimeout(function(){beep(880,.05,'sine',.06);},60);},
    quiz:function(){beep(1000,.06,'sine',.07);},
    quizWrong:function(){beep(180,.2,'sawtooth',.05);},
    achieve:function(){beep(660,.05,'sine',.06);setTimeout(function(){beep(880,.05,'sine',.06);},70);setTimeout(function(){beep(1100,.06,'sine',.06);},140);}
  };
})();

window.v22Giwa = (function(){
  var tiles=[
    {name:'수키와',axes:[85,80,90,75,60,40],desc:'반원통 모양의 암키와 위에 덮는 기와. 빗물 배수 역할'},
    {name:'암키와',axes:[88,75,92,78,55,35],desc:'평판 모양으로 지붕 바닥을 형성. 수키와와 조합하여 방수'},
    {name:'막새기와',axes:[82,90,85,72,70,50],desc:'처마 끝에 설치하는 장식 기와. 연꽃/당초 문양'},
    {name:'귀면기와',axes:[78,95,80,80,85,75],desc:'도깨비 얼굴 문양의 장식 기와. 벽사 방지 의미'},
    {name:'용마루기와',axes:[90,85,88,82,75,60],desc:'용마루 배치 전용 기와. 지붕 최상부 보호'},
    {name:'내림마루기와',axes:[86,78,85,80,70,55],desc:'내림마루에 사용. 빗물 흐름 유도'},
    {name:'추녀마루기와',axes:[84,82,86,78,72,58],desc:'추녀 부분 전용. 곡선미 처리'},
    {name:'잡상기와',axes:[70,98,70,65,95,90],desc:'추녕 끝에 설치하는 동물/인물 조각상'},
    {name:'사래기와',axes:[80,88,82,76,78,65],desc:'사래(처마 끝 나무) 보호용 기와'},
    {name:'치미기와',axes:[75,96,78,70,90,85],desc:'용마루 양끝의 대형 장식 기와. 신라/고려 궁전'}
  ];
  var axisLabels=['내구성','미관','방수','내화','난이도','희귀도'];
  var sel=0;
  function open(){document.getElementById('v22-giwa').classList.add('active');v22sfx.giwa();buildTabs();draw();}
  function close(){document.getElementById('v22-giwa').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v22-gw-tabs');c.innerHTML='';tiles.forEach(function(t,i){var b=document.createElement('button');b.className='v22-tab'+(i===sel?' active':'');b.textContent=t.name;b.onclick=function(){sel=i;buildTabs();draw();v22sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v22-gw-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,t=tiles[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(t.name+' 특성 분석',W/2,28);
    var cX=W/2,cY=H/2+10,R=Math.min(W,H)/2-60,n=6;
    for(var ring=1;ring<=4;ring++){var r=R*ring/4;cx.strokeStyle='rgba(196,149,106,'+(ring===4?'.25':'.1')+')';cx.beginPath();for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;j===0?cx.moveTo(cX+r*Math.cos(a),cY+r*Math.sin(a)):cx.lineTo(cX+r*Math.cos(a),cY+r*Math.sin(a));}cx.closePath();cx.stroke();}
    for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;cx.strokeStyle='rgba(196,149,106,.15)';cx.beginPath();cx.moveTo(cX,cY);cx.lineTo(cX+R*Math.cos(a),cY+R*Math.sin(a));cx.stroke();cx.fillStyle='#c4956a';cx.font='11px sans-serif';cx.textAlign='center';cx.fillText(axisLabels[j],cX+(R+22)*Math.cos(a),cY+(R+22)*Math.sin(a)+4);}
    cx.strokeStyle='rgba(196,149,106,.8)';cx.fillStyle='rgba(196,149,106,.12)';cx.lineWidth=2.5;cx.beginPath();
    t.axes.forEach(function(v,i){var a2=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;i===0?cx.moveTo(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2)):cx.lineTo(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2));});
    cx.closePath();cx.fill();cx.stroke();cx.lineWidth=1;
    t.axes.forEach(function(v,i){var a2=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;cx.beginPath();cx.arc(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2),4,0,Math.PI*2);cx.fillStyle='#c4956a';cx.fill();cx.fillStyle='#f5deb3';cx.font='bold 10px sans-serif';cx.textAlign='center';cx.fillText(v,cX+r2*Math.cos(a2),cY+r2*Math.sin(a2)-10);});
    document.getElementById('v22-gw-info').textContent=t.desc;
    var avg=Math.round(t.axes.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v22-gw-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균점수</div></div><div class="s"><div class="sv">'+Math.max.apply(null,t.axes)+'</div><div class="sl">최고항목</div></div><div class="s"><div class="sv">'+(avg>=80?'S':avg>=70?'A':avg>=60?'B':'C')+'</div><div class="sl">종합등급</div></div>';
  }
  function compare(){tiles.forEach(function(t2){t2.axes=t2.axes.map(function(v){return Math.max(30,Math.min(100,v+Math.round(Math.random()*10-5)));});});v22sfx.giwa();draw();}
  function reset(){tiles[0].axes=[85,80,90,75,60,40];tiles[1].axes=[88,75,92,78,55,35];tiles[2].axes=[82,90,85,72,70,50];tiles[3].axes=[78,95,80,80,85,75];tiles[4].axes=[90,85,88,82,75,60];tiles[5].axes=[86,78,85,80,70,55];tiles[6].axes=[84,82,86,78,72,58];tiles[7].axes=[70,98,70,65,95,90];tiles[8].axes=[80,88,82,76,78,65];tiles[9].axes=[75,96,78,70,90,85];draw();}
  return {open:open,close:close,compare:compare,reset:reset};
})();

window.v22Soil = (function(){
  var soils=[
    {name:'점토',vals:[75,30,40,35,50,55],desc:'미세 입자 토양. 지내력 높으나 배수 불량, 동결에 취약'},
    {name:'사질토',vals:[60,80,70,50,75,40],desc:'모래+점토 혼합. 균형 잡힌 건축 적합 토질'},
    {name:'모래',vals:[40,95,85,75,90,30],desc:'배수성 우수하나 지내력 낮음. 침하 위험'},
    {name:'자갈',vals:[85,90,60,25,80,35],desc:'골재 토질. 지내력 높고 배수 우수'},
    {name:'암반',vals:[98,20,10,5,15,60],desc:'최고 지내력. 굴착 난이도 높음'},
    {name:'풍화토',vals:[50,65,55,60,65,50],desc:'암석이 풍화된 토양. 불균일한 지내력'},
    {name:'매립토',vals:[30,50,80,85,70,45],desc:'인공 성토 지반. 침하 위험 높음'},
    {name:'실트',vals:[55,40,50,45,55,60],desc:'점토와 모래 중간 크기. 액상화 위험 주의'}
  ];
  var labels=['지내력','배수성','동결심도','침하량','굴착성','지하수'];
  var sel=0;
  function open(){document.getElementById('v22-soil').classList.add('active');v22sfx.soil();buildTabs();draw();}
  function close(){document.getElementById('v22-soil').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v22-sl-tabs');c.innerHTML='';soils.forEach(function(s,i){var b=document.createElement('button');b.className='v22-tab'+(i===sel?' active':'');b.textContent=s.name;b.onclick=function(){sel=i;buildTabs();draw();v22sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v22-sl-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,s=soils[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(s.name+' 토질 분석',W/2,28);
    var n=labels.length,bW=50,gap=20,totalW=n*(bW+gap)-gap,startX=(W-totalW)/2,bT=50,bB=H-60,bH=bB-bT;
    labels.forEach(function(l,i){
      var x=startX+i*(bW+gap),v=s.vals[i],h=bH*v/100;
      var grd=cx.createLinearGradient(x,bB-h,x,bB);grd.addColorStop(0,v>=70?'rgba(46,204,113,.7)':v>=40?'rgba(241,196,15,.7)':'rgba(231,76,60,.7)');grd.addColorStop(1,v>=70?'rgba(46,204,113,.2)':v>=40?'rgba(241,196,15,.2)':'rgba(231,76,60,.2)');
      cx.fillStyle=grd;cx.beginPath();cx.moveTo(x+4,bB);cx.lineTo(x+4,bB-h+4);cx.quadraticCurveTo(x+4,bB-h,x+8,bB-h);cx.lineTo(x+bW-8,bB-h);cx.quadraticCurveTo(x+bW-4,bB-h,x+bW-4,bB-h+4);cx.lineTo(x+bW-4,bB);cx.closePath();cx.fill();
      cx.strokeStyle=v>=70?'rgba(46,204,113,.8)':v>=40?'rgba(241,196,15,.8)':'rgba(231,76,60,.8)';cx.lineWidth=1.5;cx.stroke();cx.lineWidth=1;
      cx.fillStyle='#f5deb3';cx.font='bold 11px sans-serif';cx.textAlign='center';cx.fillText(v,x+bW/2,bB-h-8);
      cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.save();cx.translate(x+bW/2,bB+14);cx.fillText(l,0,0);cx.restore();
    });
    for(var g2=0;g2<=100;g2+=25){var gy=bB-(g2/100)*bH;cx.strokeStyle='rgba(196,149,106,.1)';cx.beginPath();cx.moveTo(startX-10,gy);cx.lineTo(startX+totalW+10,gy);cx.stroke();cx.fillStyle='#c4956a';cx.font='9px sans-serif';cx.textAlign='right';cx.fillText(g2,startX-14,gy+3);}
    document.getElementById('v22-sl-info').textContent=s.desc;
    var avg=Math.round(s.vals.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v22-sl-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">종합점수</div></div><div class="s"><div class="sv">'+s.vals[0]+'</div><div class="sl">지내력</div></div><div class="s"><div class="sv">'+(avg>=70?'S':avg>=55?'A':avg>=40?'B':'C')+'</div><div class="sl">건축적합등급</div></div>';
  }
  function test(){soils.forEach(function(s2){s2.vals=s2.vals.map(function(v){return Math.max(10,Math.min(100,v+Math.round(Math.random()*14-7)));});});v22sfx.soil();draw();}
  function reset(){soils[0].vals=[75,30,40,35,50,55];soils[1].vals=[60,80,70,50,75,40];soils[2].vals=[40,95,85,75,90,30];soils[3].vals=[85,90,60,25,80,35];soils[4].vals=[98,20,10,5,15,60];soils[5].vals=[50,65,55,60,65,50];soils[6].vals=[30,50,80,85,70,45];soils[7].vals=[55,40,50,45,55,60];draw();}
  return {open:open,close:close,test:test,reset:reset};
})();

window.v22Uval = (function(){
  var parts=[
    {name:'벽체',uval:0.27,std:0.26,desc:'외벽 단열. 기준: 0.26 W/m²K'},
    {name:'지붕',uval:0.15,std:0.15,desc:'지붕 단열. 기준: 0.15 W/m²K'},
    {name:'바닥',uval:0.29,std:0.22,desc:'최하층 바닥. 기준: 0.22 W/m²K'},
    {name:'창문',uval:1.50,std:1.20,desc:'창문 열관류. 기준: 1.20 W/m²K'},
    {name:'문',uval:1.80,std:1.60,desc:'외부 출입문. 기준: 1.60 W/m²K'},
    {name:'기초',uval:0.35,std:0.30,desc:'기초 단열. 기준: 0.30 W/m²K'},
    {name:'파라펫',uval:0.40,std:0.35,desc:'옥상 파라펫. 기준: 0.35 W/m²K'},
    {name:'테라스',uval:0.55,std:0.45,desc:'발코니/테라스. 기준: 0.45 W/m²K'}
  ];
  function open(){document.getElementById('v22-uval').classList.add('active');v22sfx.uval();draw();}
  function close(){document.getElementById('v22-uval').classList.remove('active');}
  function draw(){
    var cv=document.getElementById('v22-uv-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('열관류율 (U-value) 분석 [W/m²K]',W/2,28);
    var n=parts.length,bW=45,gap=22,totalW=n*(bW+gap)-gap,startX=(W-totalW)/2,bT=50,bB=H-65,bH=bB-bT;
    var maxU=2.2;
    for(var g2=0;g2<=maxU;g2+=0.5){var gy=bB-(g2/maxU)*bH;cx.strokeStyle='rgba(196,149,106,.1)';cx.beginPath();cx.moveTo(startX-10,gy);cx.lineTo(startX+totalW+10,gy);cx.stroke();cx.fillStyle='#c4956a';cx.font='9px sans-serif';cx.textAlign='right';cx.fillText(g2.toFixed(1),startX-14,gy+3);}
    var passCount=0;
    parts.forEach(function(p,i){
      var x=startX+i*(bW+gap),h=bH*p.uval/maxU,pass=p.uval<=p.std;
      if(pass)passCount++;
      var grd=cx.createLinearGradient(x,bB-h,x,bB);grd.addColorStop(0,pass?'rgba(46,204,113,.7)':'rgba(231,76,60,.7)');grd.addColorStop(1,pass?'rgba(46,204,113,.2)':'rgba(231,76,60,.2)');
      cx.fillStyle=grd;cx.beginPath();cx.moveTo(x+3,bB);cx.lineTo(x+3,bB-h+3);cx.quadraticCurveTo(x+3,bB-h,x+6,bB-h);cx.lineTo(x+bW-6,bB-h);cx.quadraticCurveTo(x+bW-3,bB-h,x+bW-3,bB-h+3);cx.lineTo(x+bW-3,bB);cx.closePath();cx.fill();
      cx.strokeStyle=pass?'rgba(46,204,113,.8)':'rgba(231,76,60,.8)';cx.lineWidth=1.5;cx.stroke();cx.lineWidth=1;
      var stdY=bB-(p.std/maxU)*bH;cx.strokeStyle='rgba(241,196,15,.6)';cx.setLineDash([4,3]);cx.beginPath();cx.moveTo(x-2,stdY);cx.lineTo(x+bW+2,stdY);cx.stroke();cx.setLineDash([]);
      cx.fillStyle='#f5deb3';cx.font='bold 10px sans-serif';cx.textAlign='center';cx.fillText(p.uval.toFixed(2),x+bW/2,bB-h-10);
      cx.fillStyle=pass?'#2ecc71':'#e74c3c';cx.font='bold 9px sans-serif';cx.fillText(pass?'PASS':'FAIL',x+bW/2,bB-h-22);
      cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.save();cx.translate(x+bW/2,bB+12);cx.fillText(p.name,0,0);cx.restore();
      cx.fillStyle='#f1c40f';cx.font='8px sans-serif';cx.fillText('기준:'+p.std.toFixed(2),x+bW/2,bB+26);
    });
    document.getElementById('v22-uv-info').textContent='패스: '+passCount+'/'+n+'부위. 노란 점선은 법적 기준치입니다.';
    var grade=passCount>=8?'S':passCount>=6?'A':passCount>=4?'B':'C';
    document.getElementById('v22-uv-stat').innerHTML='<div class="s"><div class="sv">'+passCount+'/'+n+'</div><div class="sl">PASS</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">에너지등급</div></div><div class="s"><div class="sv">'+(n-passCount)+'</div><div class="sl">개선필요</div></div>';
  }
  function calculate(){parts.forEach(function(p){p.uval=Math.max(0.05,+(p.uval+(Math.random()*0.2-0.1)).toFixed(2));});v22sfx.uval();draw();}
  function reset(){parts[0].uval=0.27;parts[1].uval=0.15;parts[2].uval=0.29;parts[3].uval=1.50;parts[4].uval=1.80;parts[5].uval=0.35;parts[6].uval=0.40;parts[7].uval=0.55;draw();}
  return {open:open,close:close,calculate:calculate,reset:reset};
})();

window.v22Eave = (function(){
  var eaves=[
    {name:'직선처마',axes:[70,85,75,90,80,65],desc:'직선형 처마. 구조가 단순하고 시공 용이'},
    {name:'곡선처마',axes:[82,95,88,75,72,92],desc:'우아한 곡선. 한옥 특유의 미학적 요소'},
    {name:'격처마',axes:[78,88,82,82,78,85],desc:'이중 처마 구조로 차양/방수 우수'},
    {name:'홀처마',axes:[72,78,72,88,85,70],desc:'단일 처마. 경제적이고 시공 방편'},
    {name:'추녕처마',axes:[85,92,90,78,68,90],desc:'추녕 곡선 처마. 한옥 건축의 백미'},
    {name:'박공처마',axes:[75,82,78,85,80,75],desc:'박공(Gable) 처마. 삼각 벽면 보호'},
    {name:'서까래처마',axes:[80,80,80,82,75,78],desc:'서까래 노출 처마. 구조미 강조'},
    {name:'부연처마',axes:[88,90,85,72,70,88],desc:'서까래 위 부연 추가. 처마 길이 연장'}
  ];
  var axisLabels=['차양','배수','미관','구조','내구','전통성'];
  var sel=0;
  function open(){document.getElementById('v22-eave').classList.add('active');v22sfx.eave();buildTabs();draw();}
  function close(){document.getElementById('v22-eave').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v22-ev-tabs');c.innerHTML='';eaves.forEach(function(e2,i){var b=document.createElement('button');b.className='v22-tab'+(i===sel?' active':'');b.textContent=e2.name;b.onclick=function(){sel=i;buildTabs();draw();v22sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v22-ev-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,e2=eaves[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(e2.name+' 특성',W/2,28);
    var cX=W/2,cY=H/2+10,R=Math.min(W,H)/2-60,n=6;
    for(var ring=1;ring<=4;ring++){var r=R*ring/4;cx.strokeStyle='rgba(196,149,106,'+(ring===4?'.25':'.1')+')';cx.beginPath();for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;j===0?cx.moveTo(cX+r*Math.cos(a),cY+r*Math.sin(a)):cx.lineTo(cX+r*Math.cos(a),cY+r*Math.sin(a));}cx.closePath();cx.stroke();}
    for(var j=0;j<n;j++){var a=-Math.PI/2+j*2*Math.PI/n;cx.strokeStyle='rgba(196,149,106,.15)';cx.beginPath();cx.moveTo(cX,cY);cx.lineTo(cX+R*Math.cos(a),cY+R*Math.sin(a));cx.stroke();cx.fillStyle='#c4956a';cx.font='11px sans-serif';cx.textAlign='center';cx.fillText(axisLabels[j],cX+(R+22)*Math.cos(a),cY+(R+22)*Math.sin(a)+4);}
    cx.strokeStyle='rgba(46,204,113,.9)';cx.fillStyle='rgba(46,204,113,.1)';cx.lineWidth=2.5;cx.beginPath();
    e2.axes.forEach(function(v,i){var a2=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;i===0?cx.moveTo(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2)):cx.lineTo(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2));});
    cx.closePath();cx.fill();cx.stroke();cx.lineWidth=1;
    e2.axes.forEach(function(v,i){var a2=-Math.PI/2+i*2*Math.PI/n,r2=R*v/100;cx.beginPath();cx.arc(cX+r2*Math.cos(a2),cY+r2*Math.sin(a2),4,0,Math.PI*2);cx.fillStyle='#2ecc71';cx.fill();cx.fillStyle='#f5deb3';cx.font='bold 10px sans-serif';cx.textAlign='center';cx.fillText(v,cX+r2*Math.cos(a2),cY+r2*Math.sin(a2)-10);});
    document.getElementById('v22-ev-info').textContent=e2.desc;
    var avg=Math.round(e2.axes.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v22-ev-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균</div></div><div class="s"><div class="sv">'+Math.max.apply(null,e2.axes)+'</div><div class="sl">최고</div></div><div class="s"><div class="sv">'+(avg>=82?'S':avg>=75?'A':avg>=65?'B':'C')+'</div><div class="sl">처마등급</div></div>';
  }
  function analyze(){eaves.forEach(function(e2){e2.axes=e2.axes.map(function(v){return Math.max(40,Math.min(100,v+Math.round(Math.random()*12-6)));});});v22sfx.eave();draw();}
  function reset(){eaves[0].axes=[70,85,75,90,80,65];eaves[1].axes=[82,95,88,75,72,92];eaves[2].axes=[78,88,82,82,78,85];eaves[3].axes=[72,78,72,88,85,70];eaves[4].axes=[85,92,90,78,68,90];eaves[5].axes=[75,82,78,85,80,75];eaves[6].axes=[80,80,80,82,75,78];eaves[7].axes=[88,90,85,72,70,88];draw();}
  return {open:open,close:close,analyze:analyze,reset:reset};
})();

window.v22Gantt = (function(){
  var stages=[
    {name:'터;파기',days:7,progress:0,critical:true,desc:'지반 굴착 및 정지 작업'},
    {name:'기초공사',days:14,progress:0,critical:true,desc:'콘크리트 기초/초석 설치'},
    {name:'기둥세우기',days:10,progress:0,critical:true,desc:'목조 기둥 세우고 보 연결'},
    {name:'지붕공사',days:12,progress:0,critical:true,desc:'서까래/기와 설치'},
    {name:'벽체공사',days:15,progress:0,critical:false,desc:'흐벽/토벽/적벽돌 쌓기'},
    {name:'창호설치',days:8,progress:0,critical:false,desc:'창문/문 틀 제작 및 설치'},
    {name:'바닥공사',days:10,progress:0,critical:false,desc:'마루/온돌 등 바닥 시공'},
    {name:'방수/단열',days:7,progress:0,critical:false,desc:'방수층/단열재 시공'},
    {name:'전기/배관',days:10,progress:0,critical:false,desc:'전기 배선, 배관 설치'},
    {name:'내부마감',days:12,progress:0,critical:false,desc:'미장/도배/장판 마감'},
    {name:'단청/외장',days:8,progress:0,critical:false,desc:'단청 및 외부 마감'},
    {name:'조경/완공',days:7,progress:0,critical:false,desc:'조경, 정리, 준공검사'}
  ];
  var totalDays=stages.reduce(function(a,s){return a+s.days;},0);
  function open(){document.getElementById('v22-gantt').classList.add('active');v22sfx.gantt();draw();}
  function close(){document.getElementById('v22-gantt').classList.remove('active');}
  function draw(){
    var cv=document.getElementById('v22-gt-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('건;축 시공 공정표 (총 '+totalDays+'일)',W/2,24);
    var lM=120,rM=30,tM=44,bM=40,chartW=W-lM-rM,chartH=H-tM-bM,n=stages.length,rowH=chartH/n;
    var cum=0;
    stages.forEach(function(s,i){
      var y=tM+i*rowH;
      cx.fillStyle=i%2===0?'rgba(196,149,106,.03)':'rgba(0,0,0,0)';cx.fillRect(lM,y,chartW,rowH);
      cx.fillStyle='#e8d5c0';cx.font='11px sans-serif';cx.textAlign='right';cx.fillText(s.name,lM-8,y+rowH/2+4);
      var barX=lM+(cum/totalDays)*chartW,barW=(s.days/totalDays)*chartW;
      var grd=cx.createLinearGradient(barX,y+4,barX,y+rowH-4);
      grd.addColorStop(0,s.critical?'rgba(231,76,60,.7)':'rgba(46,204,113,.7)');grd.addColorStop(1,s.critical?'rgba(231,76,60,.3)':'rgba(46,204,113,.3)');
      cx.fillStyle=grd;cx.beginPath();cx.moveTo(barX+3,y+6);cx.lineTo(barX+barW-3,y+6);cx.quadraticCurveTo(barX+barW,y+6,barX+barW,y+9);cx.lineTo(barX+barW,y+rowH-9);cx.quadraticCurveTo(barX+barW,y+rowH-6,barX+barW-3,y+rowH-6);cx.lineTo(barX+3,y+rowH-6);cx.quadraticCurveTo(barX,y+rowH-6,barX,y+rowH-9);cx.lineTo(barX,y+9);cx.quadraticCurveTo(barX,y+6,barX+3,y+6);cx.closePath();cx.fill();
      if(s.progress>0){var pW=barW*s.progress/100;cx.fillStyle=s.critical?'rgba(231,76,60,.9)':'rgba(46,204,113,.9)';cx.fillRect(barX,y+6,pW,rowH-12);}
      cx.fillStyle='#f5deb3';cx.font='bold 9px sans-serif';cx.textAlign='left';cx.fillText(s.days+'일'+(s.progress>0?' ('+s.progress+'%)':''),barX+4,y+rowH/2+3);
      cum+=s.days;
    });
    for(var w=0;w<=Math.ceil(totalDays/7);w++){var wx=lM+(w*7/totalDays)*chartW;cx.strokeStyle='rgba(196,149,106,.1)';cx.beginPath();cx.moveTo(wx,tM);cx.lineTo(wx,tM+chartH);cx.stroke();cx.fillStyle='#c4956a';cx.font='8px sans-serif';cx.textAlign='center';cx.fillText(w+'주',wx,tM+chartH+14);}
    cx.fillStyle='#e74c3c';cx.font='10px sans-serif';cx.textAlign='left';cx.fillText('■ 크리티컬 패스',lM,H-10);cx.fillStyle='#2ecc71';cx.fillText('■ 일반 공정',lM+110,H-10);
    var done=stages.filter(function(s2){return s2.progress>=100;}).length;
    var totalProgress=Math.round(stages.reduce(function(a,s2){return a+(s2.progress*s2.days/totalDays);},0));
    document.getElementById('v22-gt-info').textContent=done+'/'+n+'단계 완료. 총 진행률: '+totalProgress+'%';
    document.getElementById('v22-gt-stat').innerHTML='<div class="s"><div class="sv">'+totalDays+'일</div><div class="sl">총공기</div></div><div class="s"><div class="sv">'+totalProgress+'%</div><div class="sl">진행률</div></div><div class="s"><div class="sv">'+done+'/'+n+'</div><div class="sl">완료단계</div></div>';
  }
  function advance(){for(var i=0;i<stages.length;i++){if(stages[i].progress<100){stages[i].progress=Math.min(100,stages[i].progress+25);break;}}v22sfx.advance();draw();}
  function reset(){stages.forEach(function(s){s.progress=0;});draw();}
  return {open:open,close:close,advance:advance,reset:reset};
})();

window.v22Wall = (function(){
  var walls=[
    {name:'한옥토벽',vals:[65,80,55],desc:'흙/짚 혼합 토벽. 자연친화적, 습도조절 우수'},
    {name:'석벽',vals:[55,95,50],desc:'자연석 쌓기. 내구성 최고, 단열성 부족'},
    {name:'적벽돌',vals:[70,85,65],desc:'붉은 벽돌 쌓기. 균형잡힌 성능'},
    {name:'시멘트블록',vals:[72,78,60],desc:'콘크리트 블록. 경제적이고 시공 용이'},
    {name:'경량콘크리트',vals:[78,72,68],desc:'ALC 블록. 단열성 우수, 경량'},
    {name:'SIP 패널',vals:[92,70,82],desc:'구조 단열 패널. 최고 단열, 빠른 시공'},
    {name:'목조프레임',vals:[80,75,72],desc:'목재 골조+단열재. 경량 및 시공성 우수'},
    {name:'커튼월',vals:[88,60,85],desc:'유리 커튼월. 현대 고층에 사용, 방음 우수'}
  ];
  var labels=['열성능','구조성능','방음성능'];
  var colors=['#e74c3c','#3498db','#2ecc71'];
  var sel=0;
  function open(){document.getElementById('v22-wall').classList.add('active');v22sfx.wall();buildTabs();draw();}
  function close(){document.getElementById('v22-wall').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v22-wl-tabs');c.innerHTML='';walls.forEach(function(w2,i){var b=document.createElement('button');b.className='v22-tab'+(i===sel?' active':'');b.textContent=w2.name;b.onclick=function(){sel=i;buildTabs();draw();v22sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v22-wl-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('벽체 단면 성능 비교',W/2,28);
    var n=walls.length,bW=50,gap=18,totalW2=n*(bW+gap)-gap,startX=(W-totalW2)/2,bT=50,bB=H-55,bH=bB-bT;
    for(var g2=0;g2<=100;g2+=25){var gy=bB-(g2/100)*bH;cx.strokeStyle='rgba(196,149,106,.1)';cx.beginPath();cx.moveTo(startX-10,gy);cx.lineTo(startX+totalW2+10,gy);cx.stroke();cx.fillStyle='#c4956a';cx.font='9px sans-serif';cx.textAlign='right';cx.fillText(g2,startX-14,gy+3);}
    walls.forEach(function(w2,i){
      var x=startX+i*(bW+gap),sW=bW/3;
      w2.vals.forEach(function(v,j){
        var h=bH*v/100,sx=x+j*sW;
        cx.fillStyle=colors[j];cx.globalAlpha=i===sel?.9:.4;
        cx.fillRect(sx,bB-h,sW-1,h);
        cx.globalAlpha=1;
      });
      cx.fillStyle=i===sel?'#f5deb3':'#c4956a';cx.font=(i===sel?'bold ':'')+' 9px sans-serif';cx.textAlign='center';
      cx.save();cx.translate(x+bW/2,bB+14);cx.fillText(w2.name,0,0);cx.restore();
    });
    cx.font='10px sans-serif';cx.textAlign='left';
    labels.forEach(function(l,j){cx.fillStyle=colors[j];cx.fillRect(W-160,tM+j*18,12,12);cx.fillStyle='#e8d5c0';cx.fillText(l,W-144,tM+j*18+10);});
    var tM=50;
    var w2=walls[sel];
    document.getElementById('v22-wl-info').textContent=w2.desc;
    var avg=Math.round(w2.vals.reduce(function(a,b){return a+b;},0)/3);
    document.getElementById('v22-wl-stat').innerHTML='<div class="s"><div class="sv">'+w2.vals[0]+'</div><div class="sl">열성능</div></div><div class="s"><div class="sv">'+w2.vals[1]+'</div><div class="sl">구조</div></div><div class="s"><div class="sv">'+w2.vals[2]+'</div><div class="sl">방음</div></div><div class="s"><div class="sv">'+(avg>=80?'S':avg>=70?'A':avg>=60?'B':'C')+'</div><div class="sl">종합</div></div>';
  }
  function compare(){walls.forEach(function(w2){w2.vals=w2.vals.map(function(v){return Math.max(30,Math.min(100,v+Math.round(Math.random()*12-6)));});});v22sfx.wall();draw();}
  function reset(){walls[0].vals=[65,80,55];walls[1].vals=[55,95,50];walls[2].vals=[70,85,65];walls[3].vals=[72,78,60];walls[4].vals=[78,72,68];walls[5].vals=[92,70,82];walls[6].vals=[80,75,72];walls[7].vals=[88,60,85];draw();}
  return {open:open,close:close,compare:compare,reset:reset};
})();

window.v22Energy = (function(){
  var data={
    months:['월','월','월','월','월','월','월','월','월','월','월','월'],
    heating:[120,100,70,30,5,0,0,0,5,30,80,110],
    cooling:[0,0,0,5,20,60,90,85,40,10,0,0],
    lighting:[25,22,20,18,16,15,15,16,18,20,22,25],
    hotwater:[35,33,30,28,25,22,20,22,25,28,32,35],
    ventilation:[15,14,12,10,8,12,15,14,10,10,12,14]
  };
  var cats=['난방','냉방','조명','급탕','환기'];
  var catColors=['#e74c3c','#3498db','#f1c40f','#e67e22','#2ecc71'];
  function open(){document.getElementById('v22-energy').classList.add('active');v22sfx.energy();draw();}
  function close(){document.getElementById('v22-energy').classList.remove('active');}
  function draw(){
    var cv=document.getElementById('v22-en-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height;
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText('월별 에너지 소비 패턴 (kWh)',W/2,24);
    var lM=60,rM=30,tM=44,bM=55,chartW=W-lM-rM,chartH=H-tM-bM;
    var maxTotal=0;for(var m=0;m<12;m++){var t=data.heating[m]+data.cooling[m]+data.lighting[m]+data.hotwater[m]+data.ventilation[m];if(t>maxTotal)maxTotal=t;}
    maxTotal=Math.ceil(maxTotal/50)*50;
    for(var g2=0;g2<=maxTotal;g2+=50){var gy=tM+chartH-(g2/maxTotal)*chartH;cx.strokeStyle='rgba(196,149,106,.1)';cx.beginPath();cx.moveTo(lM,gy);cx.lineTo(lM+chartW,gy);cx.stroke();cx.fillStyle='#c4956a';cx.font='9px sans-serif';cx.textAlign='right';cx.fillText(g2,lM-8,gy+3);}
    var allCats=[data.heating,data.cooling,data.lighting,data.hotwater,data.ventilation];
    for(var ci=allCats.length-1;ci>=0;ci--){
      cx.fillStyle=catColors[ci];cx.globalAlpha=.6;cx.beginPath();
      for(var m2=0;m2<12;m2++){
        var x=lM+(m2/(11))*chartW;
        var cum2=0;for(var k=0;k<=ci;k++)cum2+=allCats[k][m2];
        var y=tM+chartH-(cum2/maxTotal)*chartH;
        m2===0?cx.moveTo(x,y):cx.lineTo(x,y);
      }
      for(var m3=11;m3>=0;m3--){
        var x2=lM+(m3/(11))*chartW;
        var cum3=0;for(var k2=0;k2<ci;k2++)cum3+=allCats[k2][m3];
        var y2=tM+chartH-(cum3/maxTotal)*chartH;
        cx.lineTo(x2,y2);
      }
      cx.closePath();cx.fill();cx.globalAlpha=1;
    }
    cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.textAlign='center';
    for(var m4=0;m4<12;m4++){cx.fillText((m4+1)+'월',lM+(m4/11)*chartW,tM+chartH+18);}
    cats.forEach(function(c,j){cx.fillStyle=catColors[j];cx.fillRect(lM+j*80,H-22,12,12);cx.fillStyle='#e8d5c0';cx.font='10px sans-serif';cx.textAlign='left';cx.fillText(c,lM+j*80+16,H-12);});
    var annualTotal=0;for(var m5=0;m5<12;m5++)annualTotal+=data.heating[m5]+data.cooling[m5]+data.lighting[m5]+data.hotwater[m5]+data.ventilation[m5];
    var peakMonth=0,peakVal=0;for(var m6=0;m6<12;m6++){var t2=data.heating[m6]+data.cooling[m6]+data.lighting[m6]+data.hotwater[m6]+data.ventilation[m6];if(t2>peakVal){peakVal=t2;peakMonth=m6;}}
    document.getElementById('v22-en-info').textContent='연간 총 에너지: '+annualTotal+'kWh. 피크: '+(peakMonth+1)+'월 ('+peakVal+'kWh)';
    document.getElementById('v22-en-stat').innerHTML='<div class="s"><div class="sv">'+annualTotal+'</div><div class="sl">kWh/년</div></div><div class="s"><div class="sv">'+(peakMonth+1)+'월</div><div class="sl">피크</div></div><div class="s"><div class="sv">'+(annualTotal<=2000?'S':annualTotal<=3000?'A':annualTotal<=4000?'B':'C')+'</div><div class="sl">효율등급</div></div>';
  }
  function simulate(){
    ['heating','cooling','lighting','hotwater','ventilation'].forEach(function(k){data[k]=data[k].map(function(v){return Math.max(0,Math.round(v+(Math.random()*20-10)));});});
    v22sfx.energy();draw();
  }
  function reset(){
    data.heating=[120,100,70,30,5,0,0,0,5,30,80,110];data.cooling=[0,0,0,5,20,60,90,85,40,10,0,0];data.lighting=[25,22,20,18,16,15,15,16,18,20,22,25];data.hotwater=[35,33,30,28,25,22,20,22,25,28,32,35];data.ventilation=[15,14,12,10,8,12,15,14,10,10,12,14];draw();
  }
  return {open:open,close:close,simulate:simulate,reset:reset};
})();

window.v22Gate = (function(){
  var gates=[
    {name:'솟을대문',vals:[95,90,92,80,98],desc:'양반가 사용. 지붕이 솟은 형태의 격식 높은 대문'},
    {name:'평대문',vals:[50,55,60,45,70],desc:'일반 서민 주택의 기본 대문'},
    {name:'일각문',vals:[60,50,65,40,75],desc:'기둥 하나의 간결한 문'},
    {name:'삼문',vals:[85,80,88,70,90],desc:'중앙문+좌우문 3칸. 궁곰/사찰 입구'},
    {name:'사주문',vals:[78,75,80,65,85],desc:'4기둥 위에 지붕을 얹은 문'},
    {name:'문루',vals:[98,95,96,90,95],desc:'⾗로 이루어진 문. 성벽/궁곰 입구'},
    {name:'협문',vals:[40,40,45,50,65],desc:'본채 열의 작은 문. 하인 출입용'},
    {name:'중문',vals:[70,65,72,55,80],desc:'안채와 바깥채 사이 문'},
    {name:'포대문',vals:[75,70,78,75,82],desc:'포대 위에 세운 문. 방어용'},
    {name:'홍살문',vals:[90,85,90,60,92],desc:'붉은 기둥에 살대를 꺼운 문. 종묘/서원 입구'}
  ];
  var labels=['격식','규모','미관','방어','전통성'];
  var sel=0;
  function open(){document.getElementById('v22-gate').classList.add('active');v22sfx.gate();buildTabs();draw();}
  function close(){document.getElementById('v22-gate').classList.remove('active');}
  function buildTabs(){var c=document.getElementById('v22-ga-tabs');c.innerHTML='';gates.forEach(function(g2,i){var b=document.createElement('button');b.className='v22-tab'+(i===sel?' active':'');b.textContent=g2.name;b.onclick=function(){sel=i;buildTabs();draw();v22sfx.tab();};c.appendChild(b);});}
  function draw(){
    var cv=document.getElementById('v22-ga-canvas'),cx=cv.getContext('2d'),W=cv.width,H=cv.height,g2=gates[sel];
    cx.clearRect(0,0,W,H);cx.fillStyle='#1a1209';cx.fillRect(0,0,W,H);
    cx.fillStyle='#c4956a';cx.font='bold 14px sans-serif';cx.textAlign='center';cx.fillText(g2.name+' 특성 분석',W/2,28);
    var n=labels.length,bW=60,gap=25,totalW2=n*(bW+gap)-gap,startX=(W-totalW2)/2,bT=50,bB=H-55,bH=bB-bT;
    for(var gv=0;gv<=100;gv+=25){var gy=bB-(gv/100)*bH;cx.strokeStyle='rgba(196,149,106,.1)';cx.beginPath();cx.moveTo(startX-10,gy);cx.lineTo(startX+totalW2+10,gy);cx.stroke();cx.fillStyle='#c4956a';cx.font='9px sans-serif';cx.textAlign='right';cx.fillText(gv,startX-14,gy+3);}
    g2.vals.forEach(function(v,i){
      var x=startX+i*(bW+gap),h=bH*v/100;
      var grd=cx.createLinearGradient(x,bB-h,x,bB);grd.addColorStop(0,'rgba(196,149,106,.8)');grd.addColorStop(1,'rgba(196,149,106,.2)');
      cx.fillStyle=grd;cx.beginPath();cx.moveTo(x+4,bB);cx.lineTo(x+4,bB-h+4);cx.quadraticCurveTo(x+4,bB-h,x+8,bB-h);cx.lineTo(x+bW-8,bB-h);cx.quadraticCurveTo(x+bW-4,bB-h,x+bW-4,bB-h+4);cx.lineTo(x+bW-4,bB);cx.closePath();cx.fill();
      cx.strokeStyle='rgba(196,149,106,.6)';cx.lineWidth=1.5;cx.stroke();cx.lineWidth=1;
      cx.fillStyle='#f5deb3';cx.font='bold 11px sans-serif';cx.textAlign='center';cx.fillText(v,x+bW/2,bB-h-8);
      cx.fillStyle='#c4956a';cx.font='10px sans-serif';cx.fillText(labels[i],x+bW/2,bB+16);
    });
    document.getElementById('v22-ga-info').textContent=g2.desc;
    var avg=Math.round(g2.vals.reduce(function(a,b){return a+b;},0)/n);
    document.getElementById('v22-ga-stat').innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">평균</div></div><div class="s"><div class="sv">'+Math.max.apply(null,g2.vals)+'</div><div class="sl">최고</div></div><div class="s"><div class="sv">'+(avg>=85?'S':avg>=70?'A':avg>=55?'B':'C')+'</div><div class="sl">문등급</div></div>';
  }
  function evaluate(){gates.forEach(function(g3){g3.vals=g3.vals.map(function(v){return Math.max(20,Math.min(100,v+Math.round(Math.random()*12-6)));});});v22sfx.gate();draw();}
  function reset(){gates[0].vals=[95,90,92,80,98];gates[1].vals=[50,55,60,45,70];gates[2].vals=[60,50,65,40,75];gates[3].vals=[85,80,88,70,90];gates[4].vals=[78,75,80,65,85];gates[5].vals=[98,95,96,90,95];gates[6].vals=[40,40,45,50,65];gates[7].vals=[70,65,72,55,80];gates[8].vals=[75,70,78,75,82];gates[9].vals=[90,85,90,60,92];draw();}
  return {open:open,close:close,evaluate:evaluate,reset:reset};
})();

(function(){
  var qs=[
    {q:'수키와의 주요 역할은?',o:['장식','빗물 배수','방어','구조보강'],a:1},
    {q:'귀면기와가 상징하는 것은?',o:['풀요','벽사 방지','풍요','방화'],a:1},
    {q:'지내력이 가장 높은 토질은?',o:['모래','점토','암반','실트'],a:2},
    {q:'열관류율 U-value가 낮을수록?',o:['단열 나쁨','단열 우수','관계없음','방음 우수'],a:1},
    {q:'곡선처마가 특히 돋보이는 건축은?',o:['현대주택','한옥','창고','커튼월빌딩'],a:1},
    {q:'건축 시공에서 크리티컬 패스란?',o:['중요하지 않은 공정','지연시 전체 공기에 영향을 주는 공정','마감 공정','조경 공정'],a:1},
    {q:'SIP 패널의 장점은?',o:['저렴한 가격','최고 단열성능','내화성','방수성'],a:1},
    {q:'건물 에너지 소비가 가장 많은 계절은?',o:['봄','여름','가을','겨울'],a:3},
    {q:'솟을대문을 사용할 수 있는 계층은?',o:['서민','양반','승려','상인'],a:1},
    {q:'홍살문은 주로 어디에 설치되었나?',o:['일반 주택','종묘/서원 입구','창고','저장'],a:1},
    {q:'벽체 방음성능이 가장 우수한 것은?',o:['한옥토벽','석벽','커튼월','시멘트블록'],a:2},
    {q:'비수기에 건물 에너지 소비의 주요 항목은?',o:['난방','냉방','환기','급탕'],a:1},
    {q:'치미기와는 어디에 설치되나?',o:['벽체','용마루 양끝','처마 끝','바닥'],a:1},
    {q:'변벽돌 벽체의 가장 큰 장점은?',o:['매우 가벼움','균형 잡힌 열/구조/방음','최저 비용','최고 단열'],a:1},
    {q:'문루의 특징은?',o:['단층 문','⾗로 이루어진 문 구조물','작은 협문','울타리 문'],a:1}
  ];
  function inject(){if(!window.quizQuestions)window.quizQuestions=[];qs.forEach(function(q){window.quizQuestions.push(q);});}
  if(document.readyState==='complete')inject();else window.addEventListener('load',inject);
})();

(function(){
  var achs=[
    {id:'giwa_collector',name:'기와 수집가',desc:'기와 도감 10종 모두 확인'},
    {id:'soil_analyst',name:'토질 분석가',desc:'지반 토질 8종 분석'},
    {id:'uvalue_expert',name:'열관류 전문가',desc:'U-value 계산 완료'},
    {id:'eave_master',name:'처마 마스터',desc:'처마 8종 분석 완료'},
    {id:'gantt_planner',name:'공정 관리자',desc:'시공 공정표 전체 완료'},
    {id:'wall_specialist',name:'벽체 전문가',desc:'벽체 8종 비교 완료'},
    {id:'energy_analyst',name:'에너지 분석가',desc:'에너지 소비 패턴 분석'},
    {id:'gate_designer',name:'대문 설계사',desc:'대문 10종 모두 확인'},
    {id:'quiz_v22_master',name:'v22 퀴즈 마스터',desc:'v22 퀴즈 15문 모두 정답'},
    {id:'v22_explorer',name:'v22 탐험가',desc:'v22 기능 4개 이상 사용'},
    {id:'v22_complete',name:'v22 완전정복',desc:'v22 모든 기능 사용'},
    {id:'building_242',name:'업적 242개',desc:'총 업적 242개 달성'}
  ];
  function inject(){if(!window.achievements)window.achievements=[];achs.forEach(function(a){window.achievements.push(a);});}
  if(document.readyState==='complete')inject();else window.addEventListener('load',inject);
})();

(function(){
  var btns=[
    {icon:'🏚',label:'기와도감',fn:function(){v22Giwa.open();}},
    {icon:'🪨',label:'토질분석',fn:function(){v22Soil.open();}},
    {icon:'🌡',label:'열관류율',fn:function(){v22Uval.open();}},
    {icon:'🏛',label:'처마설계',fn:function(){v22Eave.open();}},
    {icon:'📊',label:'공정표',fn:function(){v22Gantt.open();}},
    {icon:'🧱',label:'벽체분석',fn:function(){v22Wall.open();}},
    {icon:'⚡',label:'에너지패턴',fn:function(){v22Energy.open();}},
    {icon:'🏯',label:'대문설계',fn:function(){v22Gate.open();}}
  ];
  function init(){
    var menu=document.createElement('div');menu.className='v22-menu';
    btns.forEach(function(b){var el=document.createElement('button');el.className='v22-menu-btn';el.innerHTML=b.icon+'<span class="v22-menu-label">'+b.label+'</span>';el.onclick=function(){v22sfx.nav();b.fn();};menu.appendChild(el);});
    document.body.appendChild(menu);
  }
  if(document.readyState==='complete')init();else window.addEventListener('load',init);
})();

(function(){
  var map={'Q':function(){document.querySelectorAll('.v22-panel.active').forEach(function(p){p.classList.remove('active');});},'1':function(){v22Giwa.open();},'2':function(){v22Soil.open();},'3':function(){v22Uval.open();},'4':function(){v22Eave.open();},'5':function(){v22Gantt.open();},'6':function(){v22Wall.open();},'7':function(){v22Energy.open();},'8':function(){v22Gate.open();}};
  document.addEventListener('keydown',function(e){if(e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.metaKey){var k=e.key.toUpperCase();if(map[k]){e.preventDefault();v22sfx.nav();map[k]();}}});
})();

}

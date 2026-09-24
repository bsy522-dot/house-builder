// =====================================================
// House Builder v14.0 Patch
// 건축공법비교분석기Canvas6종4축Radar+부동산감정평가시뮬레이터Canvas8요소
// 스마트홈IoT설계기Canvas12종+건축시간여행뷰어Canvas6시대
// 지붕양식디자인스튜디오Canvas10종단면+건축도전과제랠리6종Timer
// 실내동선분석기Canvas12x12히트맵+건축명언갤러리20선
// 퀴즈+15(135→150)+업적+12(134→146)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV14) {
window.__hbV14 = true;

// ── 1. CSS Injection v14 ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v14-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3800;overflow-y:auto;padding:16px}',
    '.v14-panel.active{display:block}',
    '.v14-box{max-width:720px;margin:40px auto}',
    '.v14-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v14-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v14-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v14-close:hover{background:#d4a57a}',
    '.v14-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v14-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v14-tab:hover,.v14-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v14-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
    '.v14-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v14-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v14-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v14-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v14-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v14-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v14-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v14-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v14-item.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v14-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v14-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v14-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v14-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v14-item.expanded .detail{display:block}',
    '.v14-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v14-btn-sm:hover{background:#d4a57a}',
    '.v14-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v14-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v14-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v14-stat .s{text-align:center}',
    '.v14-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v14-stat .sl{font-size:11px;color:#c4956a}',
    '.v14-heatcell{width:36px;height:36px;border:1px solid rgba(196,149,106,.1);display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(255,255,255,.6);transition:all .15s;cursor:pointer}',
    '.v14-heatcell:hover{border-color:#c4956a}',
    '.v14-quote{background:rgba(196,149,106,.06);border-left:3px solid #c4956a;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:12px;transition:all .2s}',
    '.v14-quote:hover{background:rgba(196,149,106,.12)}',
    '.v14-quote .qt{color:#e8d5c0;font-size:14px;font-style:italic;line-height:1.7;margin-bottom:6px}',
    '.v14-quote .qa{color:#c4956a;font-size:12px;text-align:right}',
    '.v14-timer{font-size:32px;font-weight:700;color:#f5deb3;text-align:center;margin:16px 0;font-variant-numeric:tabular-nums}',
    '.v14-progress{height:8px;background:rgba(255,255,255,.1);border-radius:4px;overflow:hidden;margin:8px 0}',
    '.v14-progress-fill{height:100%;background:linear-gradient(90deg,#c4956a,#f5deb3);border-radius:4px;transition:width .3s}',
    '@media(max-width:600px){.v14-box{margin:16px auto}.v14-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v14-heatcell{width:28px;height:28px;font-size:9px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v14 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v14-panels';
  wrap.innerHTML =
    '<div id="v14-construct" class="v14-panel"><div class="v14-box">' +
      '<h2>🏗️ 건축공법 비교 분석기</h2>' +
      '<p>전통/현대 6가지 공법의 강도/비용/환경/시간 4축 비교</p>' +
      '<div class="v14-tabs" id="v14-const-tabs"></div>' +
      '<canvas id="v14-const-canvas" class="v14-canvas" width="560" height="420"></canvas>' +
      '<div id="v14-const-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v14-close" onclick="v14Construct.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-appraisal" class="v14-panel"><div class="v14-box">' +
      '<h2>🏠 부동산 감정평가 시뮬레이터</h2>' +
      '<p>8가지 요소로 건축물 시세를 산정합니다</p>' +
      '<div id="v14-appr-sliders"></div>' +
      '<canvas id="v14-appr-canvas" class="v14-canvas" width="600" height="380"></canvas>' +
      '<div class="v14-stat" id="v14-appr-result"></div>' +
      '<button class="v14-close" onclick="v14Appraisal.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-smarthome" class="v14-panel"><div class="v14-box">' +
      '<h2>📱 스마트홈 IoT 설계기</h2>' +
      '<p>12종 IoT 기기를 배치하고 연동 시뮬레이션</p>' +
      '<div class="v14-tabs" id="v14-iot-tabs"></div>' +
      '<canvas id="v14-iot-canvas" class="v14-canvas" width="560" height="400"></canvas>' +
      '<div id="v14-iot-status" style="color:#e8d5c0;font-size:12px;text-align:center;margin-top:8px"></div>' +
      '<button class="v14-close" onclick="v14SmartHome.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-timetravel" class="v14-panel"><div class="v14-box">' +
      '<h2>⏳ 건축 시간여행 뷰어</h2>' +
      '<p>선사시대부터 현대까지 6시대 건축 변천사</p>' +
      '<div class="v14-tabs" id="v14-tt-tabs"></div>' +
      '<canvas id="v14-tt-canvas" class="v14-canvas" width="640" height="380"></canvas>' +
      '<div id="v14-tt-desc" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v14-close" onclick="v14TimeTravel.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-roof" class="v14-panel"><div class="v14-box">' +
      '<h2>🏠 지붕 양식 디자인 스튜디오</h2>' +
      '<p>10종 한국/세계 지붕 양식 Canvas 단면도</p>' +
      '<div class="v14-tabs" id="v14-roof-tabs"></div>' +
      '<canvas id="v14-roof-canvas" class="v14-canvas" width="560" height="360"></canvas>' +
      '<div id="v14-roof-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v14-close" onclick="v14Roof.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-challenge" class="v14-panel"><div class="v14-box">' +
      '<h2>🏆 건축 도전과제 랠리</h2>' +
      '<p>6종 시공 미니퀴스트 타이머+점수</p>' +
      '<div id="v14-challenge-list"></div>' +
      '<canvas id="v14-challenge-canvas" class="v14-canvas" width="560" height="320"></canvas>' +
      '<div class="v14-timer" id="v14-ch-timer">00:00</div>' +
      '<div class="v14-progress"><div class="v14-progress-fill" id="v14-ch-progress"></div></div>' +
      '<div id="v14-ch-status" style="color:#e8d5c0;font-size:12px;text-align:center;margin-top:8px"></div>' +
      '<button class="v14-close" onclick="v14Challenge.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-traffic" class="v14-panel"><div class="v14-box">' +
      '<h2>🚶 실내 동선 분석기</h2>' +
      '<p>12x12 평면도 위에 동선 히트맵 Canvas</p>' +
      '<div class="v14-tabs" id="v14-traffic-tabs"></div>' +
      '<canvas id="v14-traffic-canvas" class="v14-canvas" width="520" height="520"></canvas>' +
      '<div class="v14-stat" id="v14-traffic-stat"></div>' +
      '<button class="v14-close" onclick="v14Traffic.close()">닫기</button>' +
    '</div></div>' +
    '<div id="v14-quotes" class="v14-panel"><div class="v14-box">' +
      '<h2>📜 건축 명언 갤러리</h2>' +
      '<p>세계적 건축가들의 명언 20선</p>' +
      '<div id="v14-quotes-list"></div>' +
      '<button class="v14-close" onclick="v14Quotes.close()">닫기</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. SFX Engine v14 (+12) ──
var v14SFX = (function(){
  var ctx = null;
  function getCtx(){ if(!ctx) try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return ctx; }
  function play(freq, dur, type, vol){
    if(window.muted) return;
    var c = getCtx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = type||'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(vol||0.15, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime+(dur||0.2));
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime+(dur||0.2));
  }
  return {
    construct: function(){ play(523,0.15,'triangle',0.12); setTimeout(function(){play(659,0.12,'triangle',0.1);},80); },
    appraisal: function(){ play(440,0.2,'sine',0.12); setTimeout(function(){play(554,0.15,'sine',0.1);},100); },
    smarthome: function(){ play(880,0.1,'square',0.08); setTimeout(function(){play(1047,0.1,'square',0.06);},60); },
    timetravel: function(){ play(330,0.25,'sine',0.12); setTimeout(function(){play(440,0.2,'sine',0.1);},120); setTimeout(function(){play(554,0.15,'sine',0.08);},240); },
    roof: function(){ play(392,0.15,'triangle',0.12); setTimeout(function(){play(494,0.12,'triangle',0.1);},70); },
    challenge: function(){ play(698,0.12,'sawtooth',0.08); setTimeout(function(){play(880,0.1,'sawtooth',0.07);},60); },
    challengeWin: function(){ play(523,0.15,'sine',0.12); setTimeout(function(){play(659,0.12,'sine',0.1);},100); setTimeout(function(){play(784,0.15,'sine',0.12);},200); },
    traffic: function(){ play(349,0.15,'triangle',0.1); setTimeout(function(){play(440,0.12,'triangle',0.08);},80); },
    quotes: function(){ play(262,0.3,'sine',0.08); },
    achieve: function(){ play(523,0.12,'sine',0.12); setTimeout(function(){play(659,0.1,'sine',0.1);},80); setTimeout(function(){play(784,0.12,'sine',0.12);},160); setTimeout(function(){play(1047,0.15,'sine',0.14);},260); },
    quiz: function(){ play(587,0.12,'triangle',0.1); setTimeout(function(){play(698,0.1,'triangle',0.08);},70); },
    feature: function(){ play(440,0.15,'sine',0.1); setTimeout(function(){play(554,0.12,'sine',0.08);},80); }
  };
})();

// ── 4. Construction Method Comparator (건축공법 비교 분석기) ──
var v14Construct = (function(){
  var methods = [
    {name:'목구조 (전통)',key:'wood',strength:55,cost:65,eco:90,time:40,desc:'나무 기둥과 보로 짓는 전통 공법. 한옥의 기본 구조로 통기성과 습도 조절이 뛰어나며 자연친화적. 내진 성능은 보통.'},
    {name:'조적조 (돌/벽돌)',key:'masonry',strength:75,cost:50,eco:60,time:55,desc:'돌이나 벽돌을 쌓아 벽체를 만드는 공법. 압축 강도가 뛰어나고 방화 성능이 좋으며 유지보수가 용이.'},
    {name:'한옥식 (기와)',key:'hanok',strength:65,cost:80,eco:85,time:30,desc:'대들보+공포+기와 조합의 한국 전통 공법. 배산임수 풍수 원리를 반영하며 자연소재를 사용.'},
    {name:'철근콘크리트 (RC)',key:'rc',strength:95,cost:40,eco:30,time:70,desc:'철근과 콘크리트를 결합한 현대 공법. 내진/내화 성능이 우수하고 대규모 건축물에 적합.'},
    {name:'철골구조',key:'steel',strength:90,cost:35,eco:25,time:85,desc:'H빔, I빔 등 강철 부재를 사용한 공법. 대공간/고층 건축에 유리하며 시공 속도가 빠름.'},
    {name:'혹합구조 (콘크리트+목)',key:'hybrid',strength:80,cost:55,eco:65,time:60,desc:'콘크리트 골조에 목재 마감을 결합. 현대적 구조 안정성과 전통적 미관을 모두 추구.'}
  ];
  var sel = [0,1];
  var KEY = 'hb_v14_construct';
  function save(){ try{ localStorage.setItem(KEY, JSON.stringify({sel:sel})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.sel) sel=d.sel; }catch(e){} }
  function draw(){
    var cv = document.getElementById('v14-const-canvas'); if(!cv) return;
    var c = cv.getContext('2d');
    var W=cv.width, H=cv.height, cx=W/2, cy=H/2+10, R=140;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var axes = ['강도','비용효율','환경친화','시공속도'];
    var angles = axes.map(function(_,i){ return -Math.PI/2 + (2*Math.PI*i/4); });
    for(var lv=1;lv<=4;lv++){
      c.beginPath();
      var r = R*lv/4;
      for(var j=0;j<4;j++){
        var x=cx+r*Math.cos(angles[j]), y=cy+r*Math.sin(angles[j]);
        j===0?c.moveTo(x,y):c.lineTo(x,y);
      }
      c.closePath(); c.strokeStyle='rgba(196,149,106,'+(0.1+lv*0.05)+')'; c.lineWidth=1; c.stroke();
    }
    axes.forEach(function(label,i){
      var x=cx+(R+28)*Math.cos(angles[i]), y=cy+(R+28)*Math.sin(angles[i]);
      c.fillStyle='#c4956a'; c.font='12px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillText(label,x,y);
      c.beginPath(); c.moveTo(cx,cy);
      c.lineTo(cx+R*Math.cos(angles[i]),cy+R*Math.sin(angles[i]));
      c.strokeStyle='rgba(196,149,106,.2)'; c.stroke();
    });
    var colors = ['rgba(196,149,106,0.6)','rgba(74,124,89,0.6)'];
    var fills = ['rgba(196,149,106,0.15)','rgba(74,124,89,0.15)'];
    sel.forEach(function(si,idx){
      var m = methods[si];
      var vals = [m.strength, m.cost, m.eco, m.time];
      c.beginPath();
      vals.forEach(function(v,i){
        var vr = R*v/100;
        var x=cx+vr*Math.cos(angles[i]), y=cy+vr*Math.sin(angles[i]);
        i===0?c.moveTo(x,y):c.lineTo(x,y);
      });
      c.closePath(); c.fillStyle=fills[idx]; c.fill();
      c.strokeStyle=colors[idx]; c.lineWidth=2; c.stroke();
      vals.forEach(function(v,i){
        var vr=R*v/100;
        var x=cx+vr*Math.cos(angles[i]), y=cy+vr*Math.sin(angles[i]);
        c.beginPath(); c.arc(x,y,4,0,Math.PI*2);
        c.fillStyle=colors[idx]; c.fill();
      });
    });
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText(methods[sel[0]].name+' vs '+methods[sel[1]].name, cx, 22);
    sel.forEach(function(si,idx){
      var m=methods[si];
      c.fillStyle=idx===0?'#c4956a':'#4a7c59';
      c.fillRect(W/2-120+idx*130, H-40, 12, 12);
      c.fillStyle='#e8d5c0'; c.font='11px sans-serif'; c.textAlign='left';
      c.fillText(m.name, W/2-105+idx*130, H-30);
    });
  }
  function updateTabs(){
    var ct = document.getElementById('v14-const-tabs'); if(!ct) return;
    ct.innerHTML = '';
    methods.forEach(function(m,i){
      var b = document.createElement('button');
      b.className = 'v14-tab' + (sel.indexOf(i)>=0?' active':'');
      b.textContent = m.name.split(' ')[0];
      b.onclick = function(){
        if(sel.indexOf(i)>=0){
          if(sel.length>1) sel.splice(sel.indexOf(i),1);
        } else {
          if(sel.length>=2) sel.shift();
          sel.push(i);
        }
        save(); updateTabs(); draw();
        var info = document.getElementById('v14-const-info');
        if(info) info.innerHTML = methods[sel[sel.length-1]].desc;
        v14SFX.construct();
      };
      ct.appendChild(b);
    });
  }
  return {
    open: function(){ document.getElementById('v14-construct').classList.add('active'); load(); updateTabs(); draw();
      var info=document.getElementById('v14-const-info'); if(info) info.innerHTML=methods[sel[0]].desc;
      v14SFX.feature(); },
    close: function(){ document.getElementById('v14-construct').classList.remove('active'); },
    load: load
  };
})();

// ── 5. Real Estate Appraisal Simulator (부동산 감정평가) ──
var v14Appraisal = (function(){
  var factors = [
    {name:'위치 등급',key:'location',min:1,max:10,val:5,unit:'등급',desc:'종로/북촌 중심~외곽'},
    {name:'대지 면적',key:'area',min:10,max:200,val:60,unit:'평',desc:'건축 가능 토지 면적'},
    {name:'건축 양식',key:'style',min:1,max:6,val:3,unit:'종',desc:'1한옥~6현대'},
    {name:'건축 연수',key:'age',min:0,max:100,val:10,unit:'년',desc:'신축~100년'},
    {name:'컨디션',key:'cond',min:1,max:10,val:7,unit:'점',desc:'건물 상태 (1위험~10완벽)'},
    {name:'주변 편의시설',key:'infra',min:1,max:10,val:5,unit:'점',desc:'교통/학교/병원/상가'},
    {name:'조망/조경',key:'view',min:1,max:10,val:5,unit:'점',desc:'산/강/도심 조망권'},
    {name:'에너지 효율',key:'energy',min:1,max:7,val:4,unit:'등급',desc:'1등급(최저)~7등급(최고)'}
  ];
  var KEY = 'hb_v14_appraisal';
  function save(){ try{ var d={}; factors.forEach(function(f){ d[f.key]=f.val; }); localStorage.setItem(KEY,JSON.stringify(d)); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) factors.forEach(function(f){ if(d[f.key]!==undefined) f.val=d[f.key]; }); }catch(e){} }
  function calcPrice(){
    var loc=factors[0].val, area=factors[1].val, style=factors[2].val, age=factors[3].val;
    var cond=factors[4].val, infra=factors[5].val, view=factors[6].val, energy=factors[7].val;
    var base = area * 120;
    base *= (0.5 + loc*0.15);
    var styleM = [1.8, 1.4, 0.8, 1.5, 1.2, 1.0];
    base *= (styleM[style-1]||1.0);
    base *= Math.max(0.3, 1 - age*0.008);
    base *= (0.5 + cond*0.08);
    base *= (0.7 + infra*0.06);
    base *= (0.8 + view*0.04);
    base *= (0.85 + energy*0.04);
    return Math.round(base);
  }
  function grade(price){
    if(price>=30000) return {g:'S',c:'#FFD700'};
    if(price>=20000) return {g:'A',c:'#4a7c59'};
    if(price>=12000) return {g:'B',c:'#c4956a'};
    if(price>=6000) return {g:'C',c:'#888'};
    return {g:'D',c:'#a04040'};
  }
  function drawSliders(){
    var cont = document.getElementById('v14-appr-sliders'); if(!cont) return;
    cont.innerHTML = '';
    factors.forEach(function(f,i){
      var row = document.createElement('div');
      row.className = 'v14-slider-row' in document.createElement('div').classList ? '' : '';
      row.style.cssText = 'display:flex;align-items:center;gap:10px;margin-bottom:10px';
      row.innerHTML = '<label style="width:110px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0">'+f.name+'</label>' +
        '<input type="range" min="'+f.min+'" max="'+f.max+'" value="'+f.val+'" style="flex:1;accent-color:#c4956a" data-idx="'+i+'">' +
        '<span style="width:60px;color:#c4956a;font-size:12px;text-align:center" id="v14-appr-val-'+i+'">'+f.val+f.unit+'</span>';
      cont.appendChild(row);
      row.querySelector('input').addEventListener('input', function(e){
        f.val = parseInt(e.target.value);
        document.getElementById('v14-appr-val-'+i).textContent = f.val+f.unit;
        save(); drawCanvas();
      });
    });
  }
  function drawCanvas(){
    var cv = document.getElementById('v14-appr-canvas'); if(!cv) return;
    var c = cv.getContext('2d');
    var W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var price = calcPrice();
    var gr = grade(price);
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText('감정평가 결과', W/2, 30);
    c.font='bold 48px sans-serif'; c.fillStyle=gr.c;
    c.fillText(price.toLocaleString()+'만원', W/2, 100);
    c.font='bold 28px sans-serif';
    c.fillText('등급: '+gr.g, W/2, 145);
    var barY=180, barH=22, maxW=W-100;
    factors.forEach(function(f,i){
      var pct = (f.val-f.min)/(f.max-f.min);
      c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.textAlign='right';
      c.fillText(f.name, 90, barY+i*(barH+8)+14);
      c.fillStyle='rgba(255,255,255,.08)';
      c.fillRect(100, barY+i*(barH+8), maxW-10, barH);
      var grd = c.createLinearGradient(100,0,100+(maxW-10)*pct,0);
      grd.addColorStop(0,'#c4956a'); grd.addColorStop(1,'#f5deb3');
      c.fillStyle=grd;
      c.fillRect(100, barY+i*(barH+8), (maxW-10)*pct, barH);
      c.fillStyle='#fff'; c.font='bold 10px sans-serif'; c.textAlign='left';
      c.fillText(f.val+f.unit, 105+(maxW-10)*pct+4, barY+i*(barH+8)+14);
    });
    var res = document.getElementById('v14-appr-result');
    if(res){
      var styleNames=['한옥','기와집','초가집','서원','정자','현대주택'];
      res.innerHTML = '<div class="s"><div class="sv">'+price.toLocaleString()+'</div><div class="sl">만원</div></div>' +
        '<div class="s"><div class="sv" style="color:'+gr.c+'">'+gr.g+'</div><div class="sl">등급</div></div>' +
        '<div class="s"><div class="sv">'+factors[1].val+'</div><div class="sl">평</div></div>' +
        '<div class="s"><div class="sv">'+(styleNames[factors[2].val-1]||'')+'</div><div class="sl">양식</div></div>';
    }
  }
  return {
    open: function(){ document.getElementById('v14-appraisal').classList.add('active'); load(); drawSliders(); drawCanvas(); v14SFX.appraisal(); },
    close: function(){ document.getElementById('v14-appraisal').classList.remove('active'); },
    load: load
  };
})();

// ── 6. Smart Home IoT Designer (스마트홈 IoT 설계기) ──
var v14SmartHome = (function(){
  var devices = [
    {name:'스마트 조명',icon:'💡',cat:'조명',desc:'음성/자동 밝기조절, 색온도 변경',color:'#FFD700'},
    {name:'AI 스피커',icon:'🔊',cat:'음향',desc:'음성 인식, 음악 재생, 기기 제어',color:'#6495ED'},
    {name:'스마트 잠금장치',icon:'🔒',cat:'보안',desc:'지문/비밀번호/NFC 잠금해제',color:'#DC143C'},
    {name:'온도조절기',icon:'🌡',cat:'환경',desc:'원격 온도/습도 설정, 예약',color:'#FF6347'},
    {name:'무선 CCTV',icon:'📷',cat:'보안',desc:'실시간 모니터링, 움직임 감지',color:'#708090'},
    {name:'로봇 청소기',icon:'🧹',cat:'편의',desc:'자동 청소, 예약, 영역 설정',color:'#32CD32'},
    {name:'스마트 블라인드',icon:'🪟',cat:'환경',desc:'자동/음성 개폐, 타이머',color:'#DDA0DD'},
    {name:'스마트 플러그',icon:'🔌',cat:'에너지',desc:'원격 전원 ON/OFF, 전력량 모니터링',color:'#FFA500'},
    {name:'공기청정기',icon:'🌬',cat:'환경',desc:'미세먼지/CO2 감지, 자동 가동',color:'#87CEEB'},
    {name:'스마트 냉장고',icon:'🧊',cat:'편의',desc:'식품 관리, 유통기한 알림',color:'#ADD8E6'},
    {name:'워터 센서',icon:'💧',cat:'안전',desc:'누수 감지, 스마트 밸브 자동 차단',color:'#4169E1'},
    {name:'스마트 미러',icon:'🪞',cat:'편의',desc:'날씨/일정/건강정보 표시',color:'#C0C0C0'}
  ];
  var placed = [];
  var KEY = 'hb_v14_smarthome';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({placed:placed})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.placed) placed=d.placed; }catch(e){} }
  function updateTabs(){
    var ct=document.getElementById('v14-iot-tabs'); if(!ct) return;
    ct.innerHTML='';
    devices.forEach(function(d,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(placed.indexOf(i)>=0?' active':'');
      b.textContent=d.icon+' '+d.name;
      b.onclick=function(){
        if(placed.indexOf(i)>=0) placed.splice(placed.indexOf(i),1);
        else placed.push(i);
        save(); updateTabs(); draw();
        v14SFX.smarthome();
      };
      ct.appendChild(b);
    });
  }
  function draw(){
    var cv=document.getElementById('v14-iot-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=2;
    c.strokeRect(80,60,W-160,H-120);
    c.strokeRect(80+30,60+30,W-160-60,H-120-60);
    c.fillStyle='rgba(196,149,106,.05)';
    c.fillRect(80,60,W-160,H-120);
    c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.textAlign='center';
    c.fillText('거실',W/2-60,H/2-40);
    c.fillText('방',W/2+80,H/2-60);
    c.fillText('주방',W/2-80,H/2+50);
    c.fillText('화장실',W/2+70,H/2+60);
    c.strokeStyle='rgba(196,149,106,.15)'; c.lineWidth=1;
    c.beginPath(); c.moveTo(W/2,60); c.lineTo(W/2,H-60); c.stroke();
    c.beginPath(); c.moveTo(80,H/2); c.lineTo(W-80,H/2); c.stroke();
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif';
    c.fillText('스마트홈 IoT 배치도', W/2, 30);
    if(placed.length===0){
      c.fillStyle='rgba(196,149,106,.4)'; c.font='13px sans-serif';
      c.fillText('위 버튼을 눌러 기기를 배치하세요', W/2, H/2);
    }
    var positions = [
      {x:140,y:120},{x:W-140,y:120},{x:140,y:H-120},{x:W-140,y:H-120},
      {x:W/2,y:100},{x:W/2,y:H-100},{x:120,y:H/2},{x:W-120,y:H/2},
      {x:W/2-70,y:H/2-30},{x:W/2+70,y:H/2-30},{x:W/2-70,y:H/2+30},{x:W/2+70,y:H/2+30}
    ];
    placed.forEach(function(di,i){
      var d=devices[di], pos=positions[i%positions.length];
      c.beginPath(); c.arc(pos.x,pos.y,22,0,Math.PI*2);
      c.fillStyle='rgba(0,0,0,.5)'; c.fill();
      c.strokeStyle=d.color; c.lineWidth=2; c.stroke();
      c.font='20px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
      c.fillStyle='#fff'; c.fillText(d.icon,pos.x,pos.y);
      c.font='9px sans-serif'; c.fillStyle=d.color; c.textBaseline='top';
      c.fillText(d.name.substring(0,6),pos.x,pos.y+26);
    });
    if(placed.length>=2){
      c.strokeStyle='rgba(196,149,106,.2)'; c.lineWidth=1; c.setLineDash([4,4]);
      for(var i=0;i<placed.length-1;i++){
        var p1=positions[i%positions.length], p2=positions[(i+1)%positions.length];
        c.beginPath(); c.moveTo(p1.x,p1.y); c.lineTo(p2.x,p2.y); c.stroke();
      }
      c.setLineDash([]);
    }
    var cats={}; placed.forEach(function(di){ var d=devices[di]; cats[d.cat]=(cats[d.cat]||0)+1; });
    var status = document.getElementById('v14-iot-status');
    if(status) status.innerHTML = '배치: '+placed.length+'/12기기 | 카테고리: '+Object.keys(cats).join(', ');
  }
  return {
    open: function(){ document.getElementById('v14-smarthome').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-smarthome').classList.remove('active'); },
    load: load
  };
})();

// ── 7. Architecture Time Travel Viewer (건축 시간여행 뷰어) ──
var v14TimeTravel = (function(){
  var eras = [
    {name:'선사시대',period:'~BC 2333',buildings:['반지하식 움집','빗살무니토기 주거'],desc:'땅을 파고 기둥을 세워 지붕을 얹은 움집. 불을 중앙에 피우고 짚으로 바닥을 깔았다.',color:'#8B7355'},
    {name:'삼국시대',period:'BC 57~668',buildings:['고구려 안학궁','백제 미륙사','신라 첨성대'],desc:'궁전/사찰/성고 건축이 발달. 목구조+기와 지붕의 원형이 확립되고 불교 건축이 번성.',color:'#CD853F'},
    {name:'통일신라/발해',period:'668~935',buildings:['불국사','석굴암','발해 상경성'],desc:'불교 건축의 절정기. 석굴암의 인공 석굴과 불국사의 목조 건축은 세계적 걸작.',color:'#DAA520'},
    {name:'고려시대',period:'918~1392',buildings:['개성 만월대','부석사 무량수전','해인사 장경판전'],desc:'고려청자처럼 세련된 미감의 건축. 팔만대장경을 보관하는 해인사는 고려 건축의 백미.',color:'#B8860B'},
    {name:'조선시대',period:'1392~1897',buildings:['경복궁','수원화성','종묘','안동 하회마을'],desc:'유교 이념의 건축. 경복궁의 장엄한 궁전, 수원화성의 과학적 설계, 양반 한옥의 정제미.',color:'#A0522D'},
    {name:'근현대',period:'1897~현재',buildings:['덕수궁','서울역(구)','N서울타워','동대문디자인플라자'],desc:'서양 건축 도입부터 현대 철근콘크리트/철골 건축까지. 한옥의 현대적 재해석도 활발.',color:'#8B4513'}
  ];
  var cur = 0;
  var KEY = 'hb_v14_timetravel';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({cur:cur})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) cur=d.cur||0; }catch(e){} }
  function updateTabs(){
    var ct=document.getElementById('v14-tt-tabs'); if(!ct) return;
    ct.innerHTML='';
    eras.forEach(function(e,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(i===cur?' active':'');
      b.textContent=e.name;
      b.onclick=function(){ cur=i; save(); updateTabs(); draw(); v14SFX.timetravel(); };
      ct.appendChild(b);
    });
  }
  function draw(){
    var cv=document.getElementById('v14-tt-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var era = eras[cur];
    c.fillStyle='#f5deb3'; c.font='bold 18px sans-serif'; c.textAlign='center';
    c.fillText(era.name+' ('+era.period+')', W/2, 30);
    var tlY=60, tlH=20;
    eras.forEach(function(e,i){
      var x=40+(W-80)*i/(eras.length-1);
      c.beginPath(); c.arc(x,tlY,i===cur?10:6,0,Math.PI*2);
      c.fillStyle=i===cur?e.color:'rgba(196,149,106,.3)'; c.fill();
      if(i<eras.length-1){
        var nx=40+(W-80)*(i+1)/(eras.length-1);
        c.beginPath(); c.moveTo(x+10,tlY); c.lineTo(nx-10,tlY);
        c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=2; c.stroke();
      }
    });
    var groundY = H-80;
    c.fillStyle='rgba(139,115,85,.3)';
    c.fillRect(0, groundY, W, H-groundY);
    c.strokeStyle=era.color; c.lineWidth=2;
    if(cur===0){
      c.beginPath(); c.arc(W/2,groundY,0,0,Math.PI*2);
      c.fillStyle='rgba(139,115,85,.5)';
      c.ellipse(W/2, groundY, 100, 30, 0, 0, Math.PI*2);
      c.fill();
      c.beginPath(); c.moveTo(W/2-80,groundY-10);
      c.lineTo(W/2,groundY-80); c.lineTo(W/2+80,groundY-10);
      c.strokeStyle=era.color; c.stroke();
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('반지하식 움집',W/2,groundY-90);
    } else if(cur===1){
      c.fillStyle='rgba(205,133,63,.2)';
      c.fillRect(W/2-70,groundY-120,140,120);
      c.strokeStyle=era.color; c.strokeRect(W/2-70,groundY-120,140,120);
      c.beginPath(); c.moveTo(W/2-90,groundY-120);
      c.lineTo(W/2,groundY-180); c.lineTo(W/2+90,groundY-120);
      c.fillStyle='rgba(205,133,63,.4)'; c.fill(); c.stroke();
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('삼국 궁전',W/2,groundY-190);
    } else if(cur===2){
      c.fillStyle='rgba(218,165,32,.15)';
      c.beginPath(); c.arc(W/2,groundY-60,70,0,Math.PI*2); c.fill();
      c.strokeStyle=era.color; c.beginPath(); c.arc(W/2,groundY-60,70,0,Math.PI*2); c.stroke();
      c.beginPath(); c.arc(W/2,groundY-60,50,0,Math.PI*2); c.stroke();
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('석굴암',W/2,groundY-140);
    } else if(cur===3){
      for(var i=0;i<3;i++){
        c.fillStyle='rgba(184,134,11,'+(0.15+i*0.05)+')';
        c.fillRect(W/2-90+i*50,groundY-100+i*15,60,100-i*15);
        c.strokeStyle=era.color; c.strokeRect(W/2-90+i*50,groundY-100+i*15,60,100-i*15);
      }
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('고려 사찰',W/2,groundY-110);
    } else if(cur===4){
      c.fillStyle='rgba(160,82,45,.2)';
      c.fillRect(W/2-100,groundY-130,200,130);
      c.strokeRect(W/2-100,groundY-130,200,130);
      c.beginPath();
      c.moveTo(W/2-120,groundY-130); c.lineTo(W/2-100,groundY-160);
      c.lineTo(W/2,groundY-180); c.lineTo(W/2+100,groundY-160);
      c.lineTo(W/2+120,groundY-130);
      c.fillStyle='rgba(160,82,45,.35)'; c.fill();
      c.strokeStyle=era.color; c.stroke();
      for(var j=0;j<4;j++){
        c.strokeRect(W/2-80+j*45,groundY-100,30,40);
      }
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('경복궁',W/2,groundY-190);
    } else {
      c.fillStyle='rgba(139,69,19,.15)';
      c.fillRect(W/2-60,groundY-160,120,160);
      c.strokeRect(W/2-60,groundY-160,120,160);
      for(var k=0;k<8;k++){
        c.strokeStyle='rgba(139,69,19,.3)';
        c.strokeRect(W/2-50,groundY-150+k*18,40,14);
        c.strokeRect(W/2+10,groundY-150+k*18,40,14);
      }
      c.fillStyle=era.color; c.font='12px sans-serif';
      c.fillText('현대 건축',W/2,groundY-170);
    }
    era.buildings.forEach(function(b,i){
      c.fillStyle='rgba(196,149,106,.6)'; c.font='11px sans-serif'; c.textAlign='left';
      c.fillText('• '+b, 40, H-50+i*16);
    });
    var desc=document.getElementById('v14-tt-desc');
    if(desc) desc.innerHTML = era.desc;
  }
  return {
    open: function(){ document.getElementById('v14-timetravel').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-timetravel').classList.remove('active'); },
    load: load
  };
})();

// ── 8. Roof Style Design Studio (지붕 양식 디자인 스튜디오) ──
var v14Roof = (function(){
  var roofs = [
    {name:'맞배지붕',desc:'한옥의 기본. 두 면이 만나는 박공지붕. 비를 양쪽으로 흘려보내는 단순하고 아름다운 형태.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx,y-w*0.6); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'팔작지붕',desc:'조선 궁전의 대표적 지붕. 8개의 면과 추녀 곡선이 장엄하고 우아한 미감을 자아낸다.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.7,y-w*0.3);
      c.lineTo(cx-w*0.3,y-w*0.55); c.lineTo(cx,y-w*0.7);
      c.lineTo(cx+w*0.3,y-w*0.55); c.lineTo(cx+w*0.7,y-w*0.3);
      c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'초가지붕',desc:'뾘로 덮은 평민 주거. 단열성이 뛰어나고 자연 소재로 별도 비용 없이 유지보수 가능.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y);
      c.quadraticCurveTo(cx-w*0.5,y-w*0.7,cx,y-w*0.5);
      c.quadraticCurveTo(cx+w*0.5,y-w*0.7,cx+w,y); c.closePath();
    }},
    {name:'모임지붕',desc:'사방으로 비를 흘려보내는 지붕. 바람 저항이 적고 외관이 안정적.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.4,y-w*0.6);
      c.lineTo(cx+w*0.4,y-w*0.6); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'우진각지붕',desc:'서원/사찰에서 볼 수 있는 유려한 곡선미. 추녕가 위로 살짝 휘어지는 특징.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w*1.1,y);
      c.quadraticCurveTo(cx-w*0.3,y-w*0.3,cx,y-w*0.65);
      c.quadraticCurveTo(cx+w*0.3,y-w*0.3,cx+w*1.1,y); c.closePath();
    }},
    {name:'평지붕',desc:'현대 건축의 대표. 옥상 정원이나 태양광 패널 설치에 유리하며 미니멀한 디자인.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w,y-w*0.1);
      c.lineTo(cx+w,y-w*0.1); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'반팔작지붕',desc:'정자/누각에 사용. 팔작의 반만 있는 가벼운 형태로 개방감이 있다.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.5,y-w*0.5);
      c.lineTo(cx+w*0.5,y-w*0.5); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'맨사드지붕',desc:'프랑스식. 경사가 급한 변으로 다락방을 만들기 좋고 디자인이 독특하다.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w,y-w*0.3);
      c.lineTo(cx-w*0.3,y-w*0.7); c.lineTo(cx+w*0.3,y-w*0.7);
      c.lineTo(cx+w,y-w*0.3); c.lineTo(cx+w,y); c.closePath();
    }},
    {name:'버터플라이지붕',desc:'나비 날개 모양. 현대 한옥에서 종종 사용되며 비를 양쪽으로 흘리면서 곡선미.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w*1.2,y);
      c.quadraticCurveTo(cx,y-w*0.9,cx+w*1.2,y); c.closePath();
    }},
    {name:'복합지붕',desc:'여러 양식을 결합한 현대적 지붕. 건물의 개성을 살리며 다양한 공간을 만들 수 있다.',draw:function(c,cx,y,w){
      c.beginPath(); c.moveTo(cx-w,y); c.lineTo(cx-w*0.5,y-w*0.5);
      c.lineTo(cx,y-w*0.3); c.lineTo(cx+w*0.3,y-w*0.65);
      c.lineTo(cx+w,y); c.closePath();
    }}
  ];
  var cur = 0;
  var KEY = 'hb_v14_roof';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({cur:cur})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) cur=d.cur||0; }catch(e){} }
  function updateTabs(){
    var ct=document.getElementById('v14-roof-tabs'); if(!ct) return;
    ct.innerHTML='';
    roofs.forEach(function(r,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(i===cur?' active':'');
      b.textContent=r.name;
      b.onclick=function(){ cur=i; save(); updateTabs(); draw(); v14SFX.roof(); };
      ct.appendChild(b);
    });
  }
  function draw(){
    var cv=document.getElementById('v14-roof-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    var r = roofs[cur];
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText(r.name, W/2, 28);
    var wallY=H-100, wallH=100, wallW=200;
    c.fillStyle='rgba(245,222,179,.15)';
    c.fillRect(W/2-wallW/2, wallY-wallH, wallW, wallH);
    c.strokeStyle='rgba(196,149,106,.4)'; c.lineWidth=1;
    c.strokeRect(W/2-wallW/2, wallY-wallH, wallW, wallH);
    c.strokeRect(W/2-30, wallY-70, 25, 30);
    c.strokeRect(W/2+10, wallY-70, 25, 30);
    c.strokeRect(W/2-15, wallY-50, 30, 50);
    c.save();
    r.draw(c, W/2, wallY-wallH, wallW/2+20);
    var grd = c.createLinearGradient(0,wallY-wallH-120,0,wallY-wallH);
    grd.addColorStop(0,'rgba(196,149,106,.4)');
    grd.addColorStop(1,'rgba(196,149,106,.15)');
    c.fillStyle=grd; c.fill();
    c.strokeStyle='#c4956a'; c.lineWidth=2; c.stroke();
    c.restore();
    c.fillStyle='rgba(196,149,106,.6)'; c.fillRect(0, wallY, W, H-wallY);
    c.fillStyle='rgba(196,149,106,.15)';
    var sW=80;
    roofs.forEach(function(rf,i){
      if(i===cur) return;
      var sx = 30 + (i%5)*(sW+12);
      var sy = 55 + Math.floor(i/5)*60;
      c.save();
      rf.draw(c, sx+sW/2, sy+30, sW/2-5);
      c.fillStyle='rgba(196,149,106,.08)'; c.fill();
      c.strokeStyle='rgba(196,149,106,.2)'; c.lineWidth=1; c.stroke();
      c.restore();
      c.fillStyle='rgba(196,149,106,.5)'; c.font='9px sans-serif'; c.textAlign='center';
      c.fillText(rf.name, sx+sW/2, sy+48);
    });
    var info=document.getElementById('v14-roof-info');
    if(info) info.innerHTML = r.desc;
  }
  return {
    open: function(){ document.getElementById('v14-roof').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-roof').classList.remove('active'); },
    load: load
  };
})();

// ── 9. Architecture Challenge Rally (건축 도전과제 랠리) ──
var v14Challenge = (function(){
  var challenges = [
    {name:'벽 쌓기 스프린트',desc:'30초 안에 20개 벽돌 쌓기',time:30,target:20,unit:'개'},
    {name:'기와 올리기',desc:'45초 안에 15장 기와 배치',time:45,target:15,unit:'장'},
    {name:'오뇌 오르기',desc:'60초 안에 3층 골조 완성',time:60,target:3,unit:'층'},
    {name:'창문 달기',desc:'40초 안에 12개 창문 설치',time:40,target:12,unit:'개'},
    {name:'정원 꾸미기',desc:'50초 안에 10개 조경요소 배치',time:50,target:10,unit:'개'},
    {name:'전체 완공',desc:'90초 안에 방+지붕+가구 전체 완성',time:90,target:1,unit:'채'}
  ];
  var scores = {};
  var timer = null, curCh = -1, remaining = 0, progress = 0;
  var KEY = 'hb_v14_challenge';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({scores:scores})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.scores) scores=d.scores; }catch(e){} }
  function renderList(){
    var cont=document.getElementById('v14-challenge-list'); if(!cont) return;
    cont.innerHTML='';
    challenges.forEach(function(ch,i){
      var best = scores[i] || 0;
      var div=document.createElement('div');
      div.className='v14-item'+(best>=ch.target?' done':'');
      div.innerHTML='<h4>'+ch.name+' <span class="tag">'+(best>=ch.target?'완료':'미완료')+'</span></h4>' +
        '<p>'+ch.desc+' | 베스트: '+best+'/'+ch.target+ch.unit+'</p>';
      div.onclick=function(){ startChallenge(i); };
      cont.appendChild(div);
    });
  }
  function startChallenge(idx){
    curCh=idx; remaining=challenges[idx].time; progress=0;
    if(timer) clearInterval(timer);
    v14SFX.challenge();
    drawChCanvas();
    timer = setInterval(function(){
      remaining--;
      if(remaining<=0){
        clearInterval(timer); timer=null;
        endChallenge();
        return;
      }
      var el=document.getElementById('v14-ch-timer');
      if(el) el.textContent = Math.floor(remaining/60)+':'+(remaining%60<10?'0':'')+remaining%60;
    },1000);
    var el=document.getElementById('v14-ch-timer');
    if(el) el.textContent = Math.floor(remaining/60)+':'+(remaining%60<10?'0':'')+remaining%60;
    var st=document.getElementById('v14-ch-status');
    if(st) st.innerHTML = '클릭/탭으로 진행! 목표: '+challenges[idx].target+challenges[idx].unit;
    updateProgress();
  }
  function updateProgress(){
    var pct = curCh>=0 ? Math.min(100, progress/challenges[curCh].target*100) : 0;
    var el=document.getElementById('v14-ch-progress');
    if(el) el.style.width = pct+'%';
  }
  function drawChCanvas(){
    var cv=document.getElementById('v14-challenge-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    if(curCh<0){
      c.fillStyle='rgba(196,149,106,.4)'; c.font='14px sans-serif'; c.textAlign='center';
      c.fillText('위에서 도전과제를 선택하세요',W/2,H/2);
      return;
    }
    var ch=challenges[curCh];
    c.fillStyle='#f5deb3'; c.font='bold 16px sans-serif'; c.textAlign='center';
    c.fillText(ch.name, W/2, 30);
    var groundY=H-40;
    c.fillStyle='rgba(139,115,85,.3)'; c.fillRect(0,groundY,W,40);
    var cols = ch.target;
    var bw = Math.min(30, (W-80)/cols);
    for(var i=0;i<cols;i++){
      var bx = 40+i*(bw+2);
      var done = i<progress;
      c.fillStyle=done?'rgba(74,124,89,.4)':'rgba(196,149,106,.1)';
      c.fillRect(bx,groundY-40,bw,40);
      c.strokeStyle=done?'#4a7c59':'rgba(196,149,106,.2)';
      c.lineWidth=1; c.strokeRect(bx,groundY-40,bw,40);
      if(done){
        c.fillStyle='#4a7c59'; c.font='14px sans-serif'; c.textAlign='center';
        c.fillText('✓',bx+bw/2,groundY-15);
      }
    }
    c.fillStyle='#c4956a'; c.font='12px sans-serif'; c.textAlign='center';
    c.fillText(progress+'/'+ch.target+' '+ch.unit, W/2, groundY-55);
    cv.onclick = function(){
      if(curCh<0||!timer) return;
      progress++;
      if(progress>=challenges[curCh].target){
        clearInterval(timer); timer=null;
        endChallenge();
        return;
      }
      v14SFX.construct();
      drawChCanvas(); updateProgress();
    };
  }
  function endChallenge(){
    var ch=challenges[curCh];
    var won = progress>=ch.target;
    if(won) v14SFX.challengeWin();
    if(!scores[curCh]||progress>scores[curCh]){ scores[curCh]=progress; save(); }
    var st=document.getElementById('v14-ch-status');
    if(st) st.innerHTML = won ? '🎉 완료! '+progress+'/'+ch.target+ch.unit : '시간 초과! '+progress+'/'+ch.target+ch.unit;
    drawChCanvas(); renderList();
  }
  return {
    open: function(){ document.getElementById('v14-challenge').classList.add('active'); load(); renderList(); drawChCanvas(); v14SFX.feature(); },
    close: function(){ if(timer){clearInterval(timer);timer=null;} document.getElementById('v14-challenge').classList.remove('active'); },
    load: load
  };
})();

// ── 10. Indoor Traffic Flow Analyzer (실내 동선 분석기) ──
var v14Traffic = (function(){
  var GRID = 12;
  var cells = [];
  var rooms = [
    {name:'거실',icon:'🛋',color:'rgba(196,149,106,.25)'},
    {name:'주방',icon:'🛏',color:'rgba(74,124,89,.25)'},
    {name:'부억',icon:'🍳',color:'rgba(255,99,71,.2)'},
    {name:'화장실',icon:'🚿',color:'rgba(100,149,237,.2)'},
    {name:'현관',icon:'🚪',color:'rgba(218,165,32,.2)'},
    {name:'복도',icon:'➡',color:'rgba(255,255,255,.1)'}
  ];
  var curRoom = 0;
  var heatmap = [];
  var KEY = 'hb_v14_traffic';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({cells:cells,heatmap:heatmap})); }catch(e){} }
  function load(){
    try{
      var d=JSON.parse(localStorage.getItem(KEY));
      if(d&&d.cells) cells=d.cells;
      if(d&&d.heatmap) heatmap=d.heatmap;
    }catch(e){}
    if(!cells.length){ cells=[]; for(var i=0;i<GRID*GRID;i++) cells.push(-1); }
    if(!heatmap.length){ heatmap=[]; for(var i=0;i<GRID*GRID;i++) heatmap.push(0); }
  }
  function updateTabs(){
    var ct=document.getElementById('v14-traffic-tabs'); if(!ct) return;
    ct.innerHTML='';
    rooms.forEach(function(r,i){
      var b=document.createElement('button');
      b.className='v14-tab'+(i===curRoom?' active':'');
      b.textContent=r.icon+' '+r.name;
      b.onclick=function(){ curRoom=i; updateTabs(); v14SFX.traffic(); };
      ct.appendChild(b);
    });
    var simBtn=document.createElement('button');
    simBtn.className='v14-btn-sm';
    simBtn.textContent='▶ 동선 시뮬레이션';
    simBtn.style.marginLeft='10px';
    simBtn.onclick=simulate;
    ct.appendChild(simBtn);
    var clrBtn=document.createElement('button');
    clrBtn.className='v14-btn-outline';
    clrBtn.textContent='초기화';
    clrBtn.style.marginLeft='6px';
    clrBtn.onclick=function(){
      cells=[]; heatmap=[];
      for(var i=0;i<GRID*GRID;i++){ cells.push(-1); heatmap.push(0); }
      save(); draw();
    };
    ct.appendChild(clrBtn);
  }
  function simulate(){
    heatmap = []; for(var i=0;i<GRID*GRID;i++) heatmap.push(0);
    var doorIdx=-1;
    for(var i=0;i<cells.length;i++){ if(cells[i]===4){doorIdx=i;break;} }
    if(doorIdx<0) doorIdx=0;
    for(var sim=0;sim<50;sim++){
      var pos=doorIdx, visited={};
      for(var step=0;step<60;step++){
        heatmap[pos]=(heatmap[pos]||0)+1;
        visited[pos]=true;
        var neighbors=[];
        var r=Math.floor(pos/GRID), col=pos%GRID;
        if(col>0) neighbors.push(pos-1);
        if(col<GRID-1) neighbors.push(pos+1);
        if(r>0) neighbors.push(pos-GRID);
        if(r<GRID-1) neighbors.push(pos+GRID);
        var unvisited = neighbors.filter(function(n){ return !visited[n]; });
        var next = unvisited.length>0 ? unvisited : neighbors;
        pos = next[Math.floor(Math.random()*next.length)];
      }
    }
    save(); draw();
    v14SFX.traffic();
    var stat=document.getElementById('v14-traffic-stat');
    var maxH=Math.max.apply(null,heatmap);
    var hotspots=heatmap.filter(function(h){return h>maxH*0.7;}).length;
    if(stat) stat.innerHTML='<div class="s"><div class="sv">'+hotspots+'</div><div class="sl">핫스팟</div></div>' +
      '<div class="s"><div class="sv">'+maxH+'</div><div class="sl">최대통행량</div></div>' +
      '<div class="s"><div class="sv">50</div><div class="sl">시뮬레이션횟수</div></div>';
  }
  function draw(){
    var cv=document.getElementById('v14-traffic-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(30,20,10,.95)'; c.fillRect(0,0,W,H);
    c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
    c.fillText('실내 동선 히트맵', W/2, 22);
    var pad=40, cellW=(W-pad*2)/GRID, cellH=(H-pad*2-20)/GRID;
    var maxH = Math.max.apply(null,heatmap)||1;
    for(var r=0;r<GRID;r++){
      for(var col=0;col<GRID;col++){
        var idx=r*GRID+col;
        var x=pad+col*cellW, y=pad+20+r*cellH;
        var rm = cells[idx];
        if(rm>=0){
          c.fillStyle=rooms[rm].color;
        } else {
          c.fillStyle='rgba(255,255,255,.02)';
        }
        c.fillRect(x,y,cellW-1,cellH-1);
        if(heatmap[idx]>0){
          var intensity=heatmap[idx]/maxH;
          var red=Math.round(255*intensity), green=Math.round(100*(1-intensity));
          c.fillStyle='rgba('+red+','+green+',0,'+(0.2+intensity*0.5)+')';
          c.fillRect(x,y,cellW-1,cellH-1);
        }
        c.strokeStyle='rgba(196,149,106,.1)'; c.lineWidth=0.5;
        c.strokeRect(x,y,cellW-1,cellH-1);
        if(rm>=0){
          c.fillStyle='rgba(255,255,255,.7)'; c.font='12px sans-serif'; c.textAlign='center'; c.textBaseline='middle';
          c.fillText(rooms[rm].icon, x+cellW/2, y+cellH/2);
        }
      }
    }
    cv.onclick=function(e){
      var rect=cv.getBoundingClientRect();
      var mx=(e.clientX-rect.left)*(W/rect.width);
      var my=(e.clientY-rect.top)*(H/rect.height);
      var col=Math.floor((mx-pad)/cellW);
      var row=Math.floor((my-pad-20)/cellH);
      if(col>=0&&col<GRID&&row>=0&&row<GRID){
        var idx=row*GRID+col;
        if(cells[idx]===curRoom) cells[idx]=-1;
        else cells[idx]=curRoom;
        save(); draw();
        v14SFX.traffic();
      }
    };
  }
  return {
    open: function(){ document.getElementById('v14-traffic').classList.add('active'); load(); updateTabs(); draw(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-traffic').classList.remove('active'); },
    load: load
  };
})();

// ── 11. Architecture Quotes Gallery (건축 명언 갤러리 20선) ──
var v14Quotes = (function(){
  var quotes = [
    {text:'건축은 얼어붙은 음악이다.',author:'프리드리히 쉐링 (독일 철학자)'},
    {text:'적을수록 더 많은 것이다. (Less is more)',author:'미스 반 데어 로에 (모더니즘 거장)'},
    {text:'형태는 기능을 따른다. (Form follows function)',author:'루이스 설리번 (미국 건축가)'},
    {text:'신은 디테일에 있다. (God is in the details)',author:'미스 반 데어 로에'},
    {text:'건축은 사회의 거울이다.',author:'노만 포스터 (영국 건축가)'},
    {text:'집은 살기 위한 기계다. (A house is a machine for living in)',author:'르 코르뷔지에 (프랑스 건축가)'},
    {text:'공간이 없으면 건축은 없다.',author:'프랭크 로이드 라이트 (미국 건축가)'},
    {text:'건축은 인간 의지의 표현이다.',author:'루이스 칸 (미국 건축가)'},
    {text:'좋은 건축은 좋은 이웃을 만든다.',author:'정기용 (한국 건축가)'},
    {text:'자연을 담는 건축이 가장 아름다운 건축이다.',author:'안도 타다오 (일본 건축가)'},
    {text:'한옥은 자연과 인간이 함께 숨 쉬는 공간이다.',author:'신영훈 (한국 건축가)'},
    {text:'건축을 하는 것은 세계를 만드는 것이다.',author:'렌초 피아노 (이탈리아 건축가)'},
    {text:'빛은 건축의 영혼이다.',author:'르 코르뷔지에'},
    {text:'좋은 건축물은 시간이 지나도 더 아름다워진다.',author:'프랭크 게리 (캐나다 건축가)'},
    {text:'건축은 문화의 꽃이다.',author:'조성룡 (한국 건축 학자)'},
    {text:'모든 위대한 건축은 꼿꼿한 기초 위에 세워진다.',author:'토마스 카라일 (영국 작가)'},
    {text:'집을 짓는 것은 꿈을 짓는 것이다.',author:'박승홍 (한국 건축가)'},
    {text:'공간은 비어 있을 때 가장 풀요롭다.',author:'안도 타다오'},
    {text:'건축은 땅에 발을 딛고 하늘을 향하는 예술이다.',author:'바실리오 모레티 (이탈리아 건축가)'},
    {text:'집은 그곳에 사는 사람의 영혼을 담는다.',author:'스티브 잡스 (애플 창업자)'}
  ];
  var read = {};
  var KEY = 'hb_v14_quotes';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify({read:read})); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d&&d.read) read=d.read; }catch(e){} }
  function render(){
    var cont=document.getElementById('v14-quotes-list'); if(!cont) return;
    cont.innerHTML='';
    var today = new Date().getDay();
    var featured = today % quotes.length;
    quotes.forEach(function(q,i){
      var div=document.createElement('div');
      div.className='v14-quote';
      if(i===featured) div.style.borderLeftColor='#FFD700';
      div.innerHTML = '<div class="qt">&ldquo;'+q.text+'&rdquo;</div><div class="qa">— '+q.author+'</div>';
      div.onclick=function(){ read[i]=true; save(); div.style.opacity='0.6'; v14SFX.quotes(); };
      if(read[i]) div.style.opacity='0.6';
      cont.appendChild(div);
    });
  }
  return {
    open: function(){ document.getElementById('v14-quotes').classList.add('active'); load(); render(); v14SFX.feature(); },
    close: function(){ document.getElementById('v14-quotes').classList.remove('active'); },
    load: load
  };
})();

// ── 12. Quiz v14 (+15 questions, 135→150) ──
var v14Quiz = (function(){
  var questions = [
    {q:'벽돌을 쌓아 벽체를 만드는 전통 공법은?',a:['조적조','목구조','철골구조','RC'],c:0},
    {q:'한옥의 대표적 지붕 양식은?',a:['평지붕','맞배지붕','모임지붕','맨사드'],c:1},
    {q:'부동산 감정평가에서 가장 크게 영향을 미치는 요소는?',a:['위치','조망','연수','에너지'],c:0},
    {q:'IoT의 약자는?',a:['Internet of Things','Indoor of Tech','Info on Track','Input of Tools'],c:0},
    {q:'석굴암이 지어진 시대는?',a:['삼국','통일신라','고려','조선'],c:1},
    {q:'초가지붕의 재료는?',a:['기와','뽈','철판','콘크리트'],c:1},
    {q:'&ldquo;Less is more&rdquo;를 말한 건축가는?',a:['르 코르뷔지에','미스 반 데어 로에','프랭크 로이드 라이트','안도 타다오'],c:1},
    {q:'건축물의 동선 분석에서 핫스팟이란?',a:['통행량이 많은 지점','온도가 높은 지점','조명이 밝은 지점','소음이 큰 지점'],c:0},
    {q:'팔작지붕은 몇 개의 면으로 구성되나?',a:['4면','6면','8면','10면'],c:2},
    {q:'스마트홈에서 실내 공기 품질을 관리하는 기기는?',a:['공기청정기','CCTV','스마트 미러','온도조절기'],c:0},
    {q:'RC 구조에서 RC는 무엇의 약자인가?',a:['Reinforced Concrete','Red Cement','Royal Construction','Rigid Column'],c:0},
    {q:'경복궁이 지어진 시대는?',a:['고려','조선','통일신라','삼국'],c:1},
    {q:'건축 도전과제에서 벽 쌓기 목표는?',a:['10개','15개','20개','30개'],c:2},
    {q:'&ldquo;형태는 기능을 따른다&rdquo;를 말한 건축가는?',a:['로이드 라이트','루이스 설리번','피아노','게리'],c:1},
    {q:'v14에서 추가된 지붕 양식의 수는?',a:['6종','8종','10종','12종'],c:2}
  ];
  function shuffle(arr){
    for(var i=arr.length-1;i>0;i--){
      var j=Math.floor(Math.random()*(i+1));
      var t=arr[i]; arr[i]=arr[j]; arr[j]=t;
    }
    return arr;
  }
  return {
    inject: function(){
      if(!window.quizQuestions||!Array.isArray(window.quizQuestions)) return;
      questions.forEach(function(q){
        var exists = window.quizQuestions.some(function(eq){ return eq.q===q.q; });
        if(!exists){
          var correct = q.a[q.c];
          var shuffled = shuffle(q.a.slice());
          var newC = shuffled.indexOf(correct);
          window.quizQuestions.push({q:q.q, a:shuffled, c:newC});
        }
      });
    }
  };
})();

// ── 13. Achievements v14 (+12, 134→146) ──
var v14Achieve = (function(){
  var defs = [
    {id:'construct_first',name:'공법 분석가',desc:'건축공법 비교 처음 열기',check:function(){ return !!localStorage.getItem('hb_v14_construct'); }},
    {id:'appraisal_first',name:'감정평가사',desc:'부동산 감정평가 처음 실행',check:function(){ return !!localStorage.getItem('hb_v14_appraisal'); }},
    {id:'smarthome_3',name:'IoT 입문자',desc:'스마트홈 기기 3개 배치',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_smarthome'));return d&&d.placed&&d.placed.length>=3;}catch(e){return false;} }},
    {id:'smarthome_all',name:'IoT 마스터',desc:'스마트홈 12기기 전부 배치',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_smarthome'));return d&&d.placed&&d.placed.length>=12;}catch(e){return false;} }},
    {id:'timetravel_all',name:'시간여행자',desc:'6시대 건축 전부 탐방',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_timetravel'));return d&&d.cur>=5;}catch(e){return false;} }},
    {id:'roof_5',name:'지붕 연구자',desc:'지붕 양식 5종 이상 탐색',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_roof'));return d&&d.cur>=4;}catch(e){return false;} }},
    {id:'challenge_first',name:'도전자',desc:'건축 도전과제 처음 완료',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_challenge'));if(!d||!d.scores)return false;for(var k in d.scores){if(d.scores[k]>0)return true;}return false;}catch(e){return false;} }},
    {id:'challenge_all',name:'마스터 빌더',desc:'건축 도전과제 전부 완료',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_challenge'));if(!d||!d.scores)return false;for(var i=0;i<6;i++){if(!d.scores[i]||d.scores[i]<1)return false;}return true;}catch(e){return false;} }},
    {id:'traffic_sim',name:'동선 분석가',desc:'실내 동선 시뮬레이션 처음 실행',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_traffic'));return d&&d.heatmap&&d.heatmap.some(function(h){return h>0;});}catch(e){return false;} }},
    {id:'quotes_10',name:'명언 수집가',desc:'건축 명언 10개 이상 읽기',check:function(){ try{var d=JSON.parse(localStorage.getItem('hb_v14_quotes'));return d&&d.read&&Object.keys(d.read).length>=10;}catch(e){return false;} }},
    {id:'quiz_v14_try',name:'퍼즐 v14',desc:'v14 퍼즐 처음 시도',check:function(){ return !!localStorage.getItem('hb_quiz_v14_tried'); }},
    {id:'v14_explorer',name:'v14 탐험가',desc:'v14 기능 4개 이상 사용',check:function(){
      var cnt=0;
      if(localStorage.getItem('hb_v14_construct')) cnt++;
      if(localStorage.getItem('hb_v14_appraisal')) cnt++;
      if(localStorage.getItem('hb_v14_smarthome')) cnt++;
      if(localStorage.getItem('hb_v14_timetravel')) cnt++;
      if(localStorage.getItem('hb_v14_roof')) cnt++;
      if(localStorage.getItem('hb_v14_challenge')) cnt++;
      if(localStorage.getItem('hb_v14_traffic')) cnt++;
      if(localStorage.getItem('hb_v14_quotes')) cnt++;
      return cnt>=4;
    }}
  ];
  var unlocked = {};
  var KEY = 'hb_v14_achievements';
  function save(){ try{ localStorage.setItem(KEY,JSON.stringify(unlocked)); }catch(e){} }
  function load(){ try{ var d=JSON.parse(localStorage.getItem(KEY)); if(d) unlocked=d; }catch(e){} }
  function check(){
    load();
    var newOnes = [];
    defs.forEach(function(d){
      if(!unlocked[d.id] && d.check()){
        unlocked[d.id] = true;
        newOnes.push(d);
      }
    });
    if(newOnes.length>0){
      save();
      v14SFX.achieve();
      if(typeof window.achievements==='object'&&Array.isArray(window.achievements)){
        defs.forEach(function(d){
          if(!window.achievements.some(function(a){return a.id===d.id;})){
            window.achievements.push({id:d.id, name:d.name, desc:d.desc, check:d.check});
          }
        });
      }
    }
  }
  return { check:check, load:load, defs:defs };
})();

// ── 14. Bottom Navigation Bar v14 (+8 buttons) ──
(function(){
  function inject(){
    var bar = document.createElement('div');
    bar.id = 'v14-nav';
    bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;height:48px;background:linear-gradient(180deg,rgba(45,27,14,.95),rgba(30,18,8,.98));border-top:1px solid rgba(196,149,106,.3);display:flex;align-items:center;justify-content:space-around;z-index:3600;padding:0 4px';
    var actions = [
      {icon:'🏗',label:'공법',fn:function(){v14Construct.open();}},
      {icon:'🏠',label:'평가',fn:function(){v14Appraisal.open();}},
      {icon:'📱',label:'IoT',fn:function(){v14SmartHome.open();}},
      {icon:'⏳',label:'시간여행',fn:function(){v14TimeTravel.open();}},
      {icon:'🏠',label:'지붕',fn:function(){v14Roof.open();}},
      {icon:'🏆',label:'도전',fn:function(){v14Challenge.open();}},
      {icon:'🚶',label:'동선',fn:function(){v14Traffic.open();}},
      {icon:'📜',label:'명언',fn:function(){v14Quotes.open();}}
    ];
    actions.forEach(function(a){
      var btn = document.createElement('button');
      btn.style.cssText = 'background:none;border:none;color:#c4956a;font-size:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:4px 2px;font-family:inherit;min-width:0;flex:1';
      btn.innerHTML = '<span style="font-size:18px">'+a.icon+'</span><span>'+a.label+'</span>';
      btn.onclick = a.fn;
      bar.appendChild(btn);
    });
    document.body.appendChild(bar);
    var v13nav = document.getElementById('v13-nav');
    if(v13nav) v13nav.style.bottom = '48px';
    var v12nav = document.getElementById('v12-nav');
    if(v12nav) v12nav.style.bottom = '96px';
    var v11fab = document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom = '150px';
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded', inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.code){
      case 'KeyA': e.preventDefault(); v14Construct.open(); break;
      case 'KeyB': e.preventDefault(); v14Appraisal.open(); break;
      case 'KeyE': e.preventDefault(); v14SmartHome.open(); break;
      case 'KeyJ': e.preventDefault(); v14TimeTravel.open(); break;
      case 'KeyK': e.preventDefault(); v14Roof.open(); break;
      case 'KeyL': e.preventDefault(); v14Challenge.open(); break;
      case 'KeyM': e.preventDefault(); v14Traffic.open(); break;
      case 'KeyN': e.preventDefault(); v14Quotes.open(); break;
    }
  });
})();

// ── 16. Panel Close helpers ──
window.v14Close = function(panel){
  var map = {'construct':v14Construct,'appraisal':v14Appraisal,'smarthome':v14SmartHome,'timetravel':v14TimeTravel,'roof':v14Roof,'challenge':v14Challenge,'traffic':v14Traffic,'quotes':v14Quotes};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v14Quiz.inject(); localStorage.setItem('hb_quiz_v14_tried','1'); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v14Hooked) return true;
    window.__v14Hooked = true;
    var prev = window.showComplete;
    window.showComplete = function(){ prev.apply(this,arguments); v14Achieve.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 19. Initial load + checks ──
(function(){
  v14Construct.load(); v14Appraisal.load(); v14SmartHome.load(); v14TimeTravel.load();
  v14Roof.load(); v14Challenge.load(); v14Traffic.load(); v14Quotes.load();
  setTimeout(function(){ v14Achieve.check(); },4000);
})();

// end v14 guard
}

// =====================================================
// House Builder v16.0 Patch
// 건축풍향분석기Canvas8방위WindRose+실내열쾌적시뮬레이터Canvas6존PMV
// 건축레벨프로그레션Canvas10레벨SkillTree+가구배치최적화Canvas12x12Grid
// 건축비용대비분석기Canvas6종BarStack+한옥구조해부도Canvas단면12부위
// 계절에너지소비시뮬Canvas4계절LineTrend+건축마일스톤타임라인Canvas20이벤트
// 퀴즈+15(165->180)+업적+12(158->170)+SFX12종+키보드8종
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV16) {
window.__hbV16 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v16-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:4000;overflow-y:auto;padding:16px}',
    '.v16-panel.active{display:block}',
    '.v16-box{max-width:720px;margin:40px auto}',
    '.v16-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v16-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v16-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v16-close:hover{background:#d4a57a}',
    '.v16-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v16-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v16-tab:hover,.v16-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v16-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
    '.v16-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v16-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v16-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v16-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v16-card p{color:#c4956a;font-size:11px;margin:0;line-height:1.5}',
    '.v16-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v16-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v16-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v16-item.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v16-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v16-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v16-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v16-stat .s{text-align:center}',
    '.v16-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v16-stat .sl{font-size:11px;color:#c4956a}',
    '.v16-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v16-btn-sm:hover{background:#d4a57a}',
    '.v16-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v16-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v16-slider{-webkit-appearance:none;width:100%;height:6px;border-radius:3px;background:rgba(196,149,106,.2);outline:none}',
    '.v16-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:#c4956a;cursor:pointer}',
    '@media(max-width:600px){.v16-box{margin:16px auto}.v16-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}}'
  ].join('\n');
  document.head.appendChild(css);
})();

(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v16-panels';
  wrap.innerHTML =
    '<div id="v16-wind" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1F32C;&#xFE0F; &#xAC74;&#xCD95; &#xD48D;&#xD5A5; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>8&#xBC29;&#xC704; &#xBC14;&#xB78C;&#xC7A5;&#xBBF8; &#xBD84;&#xC11D;&#xC73C;&#xB85C; &#xCD5C;&#xC801; &#xAC74;&#xBB3C; &#xBC30;&#xCE58; &#xBC29;&#xD5A5; &#xACB0;&#xC815;</p>' +
      '<div class="v16-tabs" id="v16-wind-tabs"></div>' +
      '<canvas id="v16-wind-canvas" class="v16-canvas" width="560" height="460"></canvas>' +
      '<div id="v16-wind-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v16-stat" id="v16-wind-stat"></div>' +
      '<button class="v16-close" onclick="v16Wind.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-thermal" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1F321;&#xFE0F; &#xC2E4;&#xB0B4; &#xC5F4;&#xC7E5;&#xC801; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>6&#xAC1C; &#xC874;&#xBCC4; &#xC628;&#xB3C4;/&#xC2B5;&#xB3C4;/PMV &#xC7E5;&#xC801;&#xB3C4; &#xBD84;&#xC11D;</p>' +
      '<div class="v16-tabs" id="v16-thermal-tabs"></div>' +
      '<canvas id="v16-thermal-canvas" class="v16-canvas" width="580" height="420"></canvas>' +
      '<div id="v16-thermal-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v16-close" onclick="v16Thermal.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-level" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1F3AF; &#xAC74;&#xCD95; &#xB808;&#xBCA8; &#xD504;&#xB85C;&#xADF8;&#xB808;&#xC158;</h2>' +
      '<p>10&#xB808;&#xBCA8; &#xC2A4;&#xD0AC;&#xD2B8;&#xB9AC; &#xC131;&#xC7A5; &#xC2DC;&#xC2A4;&#xD15C;</p>' +
      '<canvas id="v16-level-canvas" class="v16-canvas" width="600" height="440"></canvas>' +
      '<div id="v16-level-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v16-stat" id="v16-level-stat"></div>' +
      '<button class="v16-close" onclick="v16Level.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-furniture" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1FA91; &#xAC00;&#xAD6C; &#xBC30;&#xCE58; &#xCD5C;&#xC801;&#xD654; &#xD50C;&#xB798;&#xB108;</h2>' +
      '<p>12x12 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; &#xAC00;&#xAD6C; &#xBC30;&#xCE58;, &#xB3D9;&#xC120; &#xBD84;&#xC11D;, &#xACF5;&#xAC04;&#xD6A8;&#xC728; &#xCE21;&#xC815;</p>' +
      '<div class="v16-tabs" id="v16-furniture-tabs"></div>' +
      '<canvas id="v16-furniture-canvas" class="v16-canvas" width="560" height="560"></canvas>' +
      '<div id="v16-furniture-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v16-stat" id="v16-furniture-stat"></div>' +
      '<button class="v16-close" onclick="v16Furniture.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-costcmp" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1F4B0; &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xB300;&#xBE44; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>6&#xC885; &#xAC74;&#xCD95;&#xBB3C; &#xBE44;&#xC6A9; &#xD56D;&#xBAA9;&#xBCC4; &#xC2A4;&#xD0DD; &#xBE44;&#xAD50;</p>' +
      '<canvas id="v16-costcmp-canvas" class="v16-canvas" width="620" height="420"></canvas>' +
      '<div id="v16-costcmp-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<button class="v16-close" onclick="v16CostCmp.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-anatomy" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1F3E0; &#xD55C;&#xC625; &#xAD6C;&#xC870; &#xD574;&#xBD80;&#xB3C4;</h2>' +
      '<p>12&#xAC1C; &#xAD6C;&#xC870; &#xBD80;&#xC704; &#xC0C1;&#xC138; &#xB2E8;&#xBA74;&#xB3C4; + &#xC124;&#xBA85;</p>' +
      '<div class="v16-tabs" id="v16-anatomy-tabs"></div>' +
      '<canvas id="v16-anatomy-canvas" class="v16-canvas" width="620" height="480"></canvas>' +
      '<div id="v16-anatomy-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:80px"></div>' +
      '<button class="v16-close" onclick="v16Anatomy.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-energy" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x26A1; &#xACC4;&#xC808;&#xBCC4; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>4&#xACC4;&#xC808; &#xB0C9;&#xB09C;&#xBC29;/&#xC870;&#xBA85;/&#xD658;&#xAE30; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xB77C;&#xC778;&#xCC28;&#xD2B8;</p>' +
      '<div class="v16-tabs" id="v16-energy-tabs"></div>' +
      '<canvas id="v16-energy-canvas" class="v16-canvas" width="600" height="400"></canvas>' +
      '<div id="v16-energy-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v16-stat" id="v16-energy-stat"></div>' +
      '<button class="v16-close" onclick="v16Energy.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v16-milestone" class="v16-panel"><div class="v16-box">' +
      '<h2>&#x1F3C6; &#xAC74;&#xCD95; &#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; &#xD0C0;&#xC784;&#xB77C;&#xC778;</h2>' +
      '<p>20&#xAC1C; &#xAC74;&#xCD95; &#xC5C5;&#xC801; &#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; &#xCD94;&#xC801; + &#xC9C4;&#xD589;&#xB3C4;</p>' +
      '<canvas id="v16-milestone-canvas" class="v16-canvas" width="620" height="460"></canvas>' +
      '<div id="v16-milestone-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v16-stat" id="v16-milestone-stat"></div>' +
      '<button class="v16-close" onclick="v16Milestone.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. SFX Engine v16 ──
var v16SFX = (function(){
  var ctx;
  function getCtx(){
    if(!ctx) try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){}
    return ctx;
  }
  function tone(f,d,t,g){
    var c=getCtx(); if(!c) return;
    var o=c.createOscillator(),gn=c.createGain();
    o.type=t||'sine'; o.frequency.value=f;
    gn.gain.setValueAtTime(g||.12,c.currentTime);
    gn.gain.exponentialRampToValueAtTime(.001,c.currentTime+(d||.2));
    o.connect(gn); gn.connect(c.destination);
    o.start(); o.stop(c.currentTime+(d||.2));
  }
  function noise(d){
    var c=getCtx(); if(!c) return;
    var buf=c.createBuffer(1,c.sampleRate*(d||.15),c.sampleRate);
    var data=buf.getChannelData(0);
    for(var i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*.08;
    var src=c.createBufferSource(),gn=c.createGain();
    src.buffer=buf; gn.gain.setValueAtTime(.08,c.currentTime);
    gn.gain.exponentialRampToValueAtTime(.001,c.currentTime+(d||.15));
    src.connect(gn); gn.connect(c.destination); src.start();
  }
  return {
    windBlow:    function(){ tone(200,.4,'sine',.06); tone(280,.5,'sine',.04); },
    tempUp:      function(){ tone(523,.15,'sine',.1); tone(659,.15,'sine',.08); },
    tempDown:    function(){ tone(330,.2,'sine',.08); tone(262,.25,'sine',.06); },
    levelUp:     function(){ tone(523,.1,'triangle',.12); setTimeout(function(){tone(659,.1,'triangle',.1);},80); setTimeout(function(){tone(784,.15,'triangle',.08);},160); },
    place:       function(){ tone(440,.08,'square',.06); noise(.05); },
    remove:      function(){ tone(330,.1,'sawtooth',.05); },
    costCalc:    function(){ tone(880,.06,'sine',.08); tone(1100,.08,'sine',.06); },
    anatomyClick:function(){ tone(660,.1,'triangle',.08); },
    energySave:  function(){ tone(784,.12,'sine',.1); tone(988,.12,'sine',.08); },
    milestone:   function(){ tone(523,.1,'triangle',.12); setTimeout(function(){tone(784,.12,'triangle',.1);},100); setTimeout(function(){tone(1047,.2,'triangle',.08);},200); },
    tabSwitch:   function(){ tone(600,.06,'sine',.06); },
    panelOpen:   function(){ tone(440,.08,'sine',.08); tone(554,.1,'sine',.06); }
  };
})();

// ── 4. Wind Direction Analyzer ──
var v16Wind = (function(){
  var DIRS = [
    {name:'&#xBD81;(N)',angle:0,speed:[3.2,4.1,2.8,5.3,4.6,3.9,2.5,4.8,3.1,4.4,5.1,3.7],freq:[12,15,10,18,16,14,9,17,11,15,19,13]},
    {name:'&#xBD81;&#xB3D9;(NE)',angle:45,speed:[2.1,3.0,2.5,3.8,3.2,2.9,1.8,3.5,2.3,3.1,3.9,2.7],freq:[8,10,7,13,11,9,6,12,8,10,14,9]},
    {name:'&#xB3D9;(E)',angle:90,speed:[1.8,2.5,2.0,3.1,2.8,2.4,1.5,2.9,1.9,2.6,3.3,2.2],freq:[6,8,5,10,9,7,4,9,6,8,11,7]},
    {name:'&#xB0A8;&#xB3D9;(SE)',angle:135,speed:[2.4,3.3,2.7,4.0,3.5,3.1,2.1,3.7,2.5,3.3,4.2,2.9],freq:[9,11,8,14,12,10,7,13,9,11,15,10]},
    {name:'&#xB0A8;(S)',angle:180,speed:[3.5,4.5,3.1,5.8,5.0,4.2,2.8,5.2,3.4,4.7,5.5,4.0],freq:[14,17,12,20,18,15,10,19,13,16,21,14]},
    {name:'&#xB0A8;&#xC11C;(SW)',angle:225,speed:[2.9,3.8,3.0,4.5,3.9,3.5,2.3,4.1,2.8,3.8,4.7,3.3],freq:[11,14,9,16,14,12,8,15,10,13,17,11]},
    {name:'&#xC11C;(W)',angle:270,speed:[2.2,3.1,2.3,3.6,3.0,2.7,1.9,3.3,2.2,3.0,3.8,2.5],freq:[7,9,6,12,10,8,5,11,7,9,13,8]},
    {name:'&#xBD81;&#xC11C;(NW)',angle:315,speed:[2.7,3.5,2.6,4.2,3.6,3.2,2.1,3.8,2.6,3.5,4.4,3.0],freq:[10,12,8,15,13,11,7,14,9,12,16,10]}
  ];
  var MONTHS = ['1&#xC6D4;','2&#xC6D4;','3&#xC6D4;','4&#xC6D4;','5&#xC6D4;','6&#xC6D4;','7&#xC6D4;','8&#xC6D4;','9&#xC6D4;','10&#xC6D4;','11&#xC6D4;','12&#xC6D4;'];
  var SEASONS = [{name:'&#xBD04;(3~5&#xC6D4;)',months:[2,3,4]},{name:'&#xC5EC;&#xB984;(6~8&#xC6D4;)',months:[5,6,7]},{name:'&#xAC00;&#xC744;(9~11&#xC6D4;)',months:[8,9,10]},{name:'&#xACA8;&#xC6B8;(12~2&#xC6D4;)',months:[11,0,1]}];
  var curSeason = 0;
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-wind').classList.add('active'); renderTabs(); render(); }
  function close(){ document.getElementById('v16-wind').classList.remove('active'); }
  function renderTabs(){
    var c = document.getElementById('v16-wind-tabs'); c.innerHTML = '';
    SEASONS.forEach(function(s,i){
      var b = document.createElement('button');
      b.className = 'v16-tab'+(i===curSeason?' active':'');
      b.innerHTML = s.name;
      b.onclick = function(){ curSeason=i; v16SFX.tabSwitch(); renderTabs(); render(); };
      c.appendChild(b);
    });
  }
  function render(){
    var canvas = document.getElementById('v16-wind-canvas');
    var ctx = canvas.getContext('2d');
    var W=canvas.width, H=canvas.height, cx=W/2, cy=H/2+10, R=Math.min(W,H)/2-60;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)'; ctx.fillRect(0,0,W,H);
    ctx.font='bold 16px sans-serif'; ctx.fillStyle='#f5deb3'; ctx.textAlign='center';
    ctx.fillText(SEASONS[curSeason].name+' &#xD48D;&#xD5A5; &#xBD84;&#xC11D;',cx,28);
    for(var r=1;r<=4;r++){
      ctx.beginPath(); ctx.arc(cx,cy,R*r/4,0,Math.PI*2);
      ctx.strokeStyle='rgba(196,149,106,'+(r===4?.3:.15)+')'; ctx.lineWidth=1; ctx.stroke();
      ctx.fillStyle='rgba(196,149,106,.4)'; ctx.font='9px sans-serif';
      ctx.fillText((r*25)+'%',cx+4,cy-R*r/4+10);
    }
    var mos = SEASONS[curSeason].months;
    var maxFreq = 0;
    DIRS.forEach(function(d){ var t=0; mos.forEach(function(m){ t+=d.freq[m]; }); if(t>maxFreq) maxFreq=t; });
    var colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#1abc9c','#3498db','#9b59b6','#e91e63'];
    DIRS.forEach(function(d,i){
      var totalFreq=0, avgSpeed=0;
      mos.forEach(function(m){ totalFreq+=d.freq[m]; avgSpeed+=d.speed[m]; });
      avgSpeed/=mos.length;
      var ratio = totalFreq/maxFreq;
      var angleRad = (d.angle-90)*Math.PI/180;
      var len = R*ratio;
      var x1=cx, y1=cy;
      var x2=cx+Math.cos(angleRad)*len, y2=cy+Math.sin(angleRad)*len;
      var grad = ctx.createLinearGradient(x1,y1,x2,y2);
      grad.addColorStop(0,'rgba(196,149,106,.1)'); grad.addColorStop(1,colors[i]);
      var halfW = 14+ratio*10;
      var perpAngle = angleRad+Math.PI/2;
      ctx.beginPath();
      ctx.moveTo(cx+Math.cos(perpAngle)*4,cy+Math.sin(perpAngle)*4);
      ctx.lineTo(x2+Math.cos(perpAngle)*halfW,y2+Math.sin(perpAngle)*halfW);
      ctx.lineTo(x2+Math.cos(angleRad)*12,y2+Math.sin(angleRad)*12);
      ctx.lineTo(x2-Math.cos(perpAngle)*halfW,y2-Math.sin(perpAngle)*halfW);
      ctx.lineTo(cx-Math.cos(perpAngle)*4,cy-Math.sin(perpAngle)*4);
      ctx.closePath();
      ctx.fillStyle=grad; ctx.globalAlpha=.7; ctx.fill(); ctx.globalAlpha=1;
      ctx.strokeStyle=colors[i]; ctx.lineWidth=1.5; ctx.stroke();
      var lx = cx+Math.cos(angleRad)*(R+28), ly = cy+Math.sin(angleRad)*(R+28);
      ctx.fillStyle='#f5deb3'; ctx.font='bold 11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(d.name,lx,ly);
      ctx.fillStyle='#c4956a'; ctx.font='9px sans-serif';
      ctx.fillText(avgSpeed.toFixed(1)+'m/s',lx,ly+13);
    });
    ctx.beginPath(); ctx.arc(cx,cy,3,0,Math.PI*2); ctx.fillStyle='#c4956a'; ctx.fill();
    var bestDir=null, bestScore=-1;
    DIRS.forEach(function(d){
      var t=0; mos.forEach(function(m){t+=d.freq[m];}); var sc=t;
      if(sc>bestScore){bestScore=sc;bestDir=d;}
    });
    var info = document.getElementById('v16-wind-info');
    info.innerHTML = '&#xC8FC;&#xD48D;&#xD5A5;: <strong style="color:#f5deb3">'+bestDir.name+'</strong> | '+
      '&#xAC74;&#xBB3C; &#xBC30;&#xCE58; &#xAD8C;&#xC7A5;: <strong style="color:#4a7c59">&#xC8FC;&#xD48D;&#xC5D0; &#xC9C1;&#xAC01; &#xBC30;&#xCE58;</strong>&#xB85C; &#xD658;&#xAE30; &#xD6A8;&#xC728; &#xADF9;&#xB300;&#xD654;';
    var stat = document.getElementById('v16-wind-stat');
    var totalF=0,maxS=0; DIRS.forEach(function(d){ mos.forEach(function(m){totalF+=d.freq[m]; if(d.speed[m]>maxS)maxS=d.speed[m];}); });
    stat.innerHTML = '<div class="s"><div class="sv">'+totalF+'</div><div class="sl">&#xCD1D; &#xD48D;&#xD5A5; &#xBE48;&#xB3C4;</div></div>'+
      '<div class="s"><div class="sv">'+maxS.toFixed(1)+'</div><div class="sl">&#xCD5C;&#xB300; &#xD48D;&#xC18D;(m/s)</div></div>'+
      '<div class="s"><div class="sv">'+bestDir.name+'</div><div class="sl">&#xC8FC;&#xD48D;</div></div>';
    localStorage.setItem('hb_wind_v16',JSON.stringify({season:curSeason}));
  }
  return {open:open,close:close};
})();

// ── 5. Indoor Thermal Comfort Simulator ──
var v16Thermal = (function(){
  var ZONES = [
    {name:'&#xAC70;&#xC2E4;',icon:'&#x1F6CB;',area:33,temp:{spring:22,summer:26,autumn:21,winter:18},humidity:{spring:50,summer:65,autumn:45,winter:35}},
    {name:'&#xCE68;&#xC2E4;',icon:'&#x1F6CF;',area:16,temp:{spring:21,summer:25,autumn:20,winter:17},humidity:{spring:48,summer:60,autumn:43,winter:33}},
    {name:'&#xC8FC;&#xBC29;',icon:'&#x1F373;',area:10,temp:{spring:24,summer:28,autumn:23,winter:20},humidity:{spring:55,summer:70,autumn:50,winter:40}},
    {name:'&#xC695;&#xC2E4;',icon:'&#x1F6BF;',area:6,temp:{spring:23,summer:27,autumn:22,winter:19},humidity:{spring:65,summer:80,autumn:60,winter:50}},
    {name:'&#xC11C;&#xC7AC;',icon:'&#x1F4DA;',area:8,temp:{spring:21,summer:24,autumn:20,winter:16},humidity:{spring:45,summer:55,autumn:40,winter:30}},
    {name:'&#xB2E4;&#xC6A9;&#xB3C4;&#xC2E4;',icon:'&#x1F3AE;',area:12,temp:{spring:22,summer:26,autumn:21,winter:17},humidity:{spring:50,summer:62,autumn:44,winter:34}}
  ];
  var SEASON_KEYS = ['spring','summer','autumn','winter'];
  var SEASON_NAMES = ['&#xBD04;','&#xC5EC;&#xB984;','&#xAC00;&#xC744;','&#xACA8;&#xC6B8;'];
  var curS = 0;
  function pmv(t,h){
    var ideal=22, idealH=50;
    var diff = Math.abs(t-ideal)/10 + Math.abs(h-idealH)/50;
    if(diff<0.3) return {val:0,label:'&#xC7E5;&#xC801;',color:'#2ecc71'};
    if(diff<0.6) return {val:1,label:'&#xC57D;&#xAC04; &#xB530;&#xB73B;/&#xC2DC;&#xC6D0;',color:'#f1c40f'};
    if(diff<0.9) return {val:2,label:'&#xBD88;&#xC7E5;&#xC801;',color:'#e67e22'};
    return {val:3,label:'&#xB9E4;&#xC6B0; &#xBD88;&#xC7E5;&#xC801;',color:'#e74c3c'};
  }
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-thermal').classList.add('active'); renderTabs(); render(); }
  function close(){ document.getElementById('v16-thermal').classList.remove('active'); }
  function renderTabs(){
    var c=document.getElementById('v16-thermal-tabs'); c.innerHTML='';
    SEASON_NAMES.forEach(function(n,i){
      var b=document.createElement('button');
      b.className='v16-tab'+(i===curS?' active':'');
      b.innerHTML=n;
      b.onclick=function(){curS=i;v16SFX.tabSwitch();renderTabs();render();};
      c.appendChild(b);
    });
  }
  function render(){
    var canvas=document.getElementById('v16-thermal-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    ctx.font='bold 15px sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText(SEASON_NAMES[curS]+' &#xC2E4;&#xB0B4; &#xC5F4;&#xC7E5;&#xC801;&#xB3C4;',W/2,28);
    var sk=SEASON_KEYS[curS];
    var barW=60,gap=20,startX=(W-(ZONES.length*(barW+gap)-gap))/2;
    var maxT=32,minT=10,barH=H-120;
    ZONES.forEach(function(z,i){
      var x=startX+i*(barW+gap);
      var t=z.temp[sk], h=z.humidity[sk];
      var p=pmv(t,h);
      var tH=((t-minT)/(maxT-minT))*barH;
      var y=H-60-tH;
      var grad=ctx.createLinearGradient(x,y,x,H-60);
      grad.addColorStop(0,p.color); grad.addColorStop(1,'rgba(45,27,14,.8)');
      ctx.fillStyle=grad;
      ctx.beginPath();ctx.roundRect(x,y,barW,tH,4);ctx.fill();
      ctx.strokeStyle='rgba(196,149,106,.3)';ctx.lineWidth=1;ctx.stroke();
      ctx.fillStyle='#fff';ctx.font='bold 13px sans-serif';ctx.textAlign='center';
      ctx.fillText(t+'&#xB3C4;C',x+barW/2,y-8);
      ctx.fillStyle='rgba(100,180,255,.8)';ctx.font='10px sans-serif';
      ctx.fillText('&#xC2B5;&#xB3C4; '+h+'%',x+barW/2,y-22);
      ctx.fillStyle='#f5deb3';ctx.font='12px sans-serif';
      ctx.fillText(z.icon,x+barW/2,H-42);
      ctx.fillText(z.name,x+barW/2,H-26);
      var dotR=6;
      ctx.beginPath();ctx.arc(x+barW/2,y+16,dotR,0,Math.PI*2);
      ctx.fillStyle=p.color;ctx.fill();
      ctx.fillStyle='#fff';ctx.font='8px sans-serif';
      ctx.fillText(p.label,x+barW/2,y+32);
    });
    for(var ti=minT;ti<=maxT;ti+=4){
      var yy=H-60-((ti-minT)/(maxT-minT))*barH;
      ctx.strokeStyle='rgba(196,149,106,.1)';ctx.beginPath();ctx.moveTo(30,yy);ctx.lineTo(W-20,yy);ctx.stroke();
      ctx.fillStyle='rgba(196,149,106,.4)';ctx.font='9px sans-serif';ctx.textAlign='right';
      ctx.fillText(ti+'&#xB3C4;C',28,yy+3);
    }
    var avg=0,bestZ=null,bestP=4;
    ZONES.forEach(function(z){
      var t=z.temp[sk],h=z.humidity[sk],p=pmv(t,h);
      avg+=t; if(p.val<bestP){bestP=p.val;bestZ=z;}
    });
    avg/=ZONES.length;
    var info=document.getElementById('v16-thermal-info');
    info.innerHTML='&#xD3C9;&#xADE0; &#xC2E4;&#xB0B4;&#xC628;&#xB3C4;: <strong style="color:#f5deb3">'+avg.toFixed(1)+'&#xB3C4;C</strong> | '+
      '&#xAC00;&#xC7A5; &#xC7E5;&#xC801;: <strong style="color:#2ecc71">'+bestZ.name+'</strong>';
    localStorage.setItem('hb_thermal_v16',JSON.stringify({season:curS}));
  }
  return {open:open,close:close};
})();

// ── 6. Architecture Level Progression ──
var v16Level = (function(){
  var LEVELS = [
    {lv:1,name:'&#xACAC;&#xC2B5;&#xC0DD;',xp:0,desc:'&#xAC74;&#xCD95;&#xC758; &#xAE30;&#xCD08;&#xB97C; &#xBC30;&#xC6B0;&#xB294; &#xB2E8;&#xACC4;',color:'#95a5a6'},
    {lv:2,name:'&#xC218;&#xB828;&#xC0DD;',xp:100,desc:'&#xAE30;&#xBCF8; &#xAD6C;&#xC870;&#xBB3C;&#xC744; &#xC9C0;&#xC744; &#xC218; &#xC788;&#xB294; &#xB2E8;&#xACC4;',color:'#7f8c8d'},
    {lv:3,name:'&#xBAA9;&#xC218;',xp:300,desc:'&#xBAA9;&#xC870; &#xAD6C;&#xC870;&#xBB3C; &#xC804;&#xBB38;&#xAC00;',color:'#cd7f32'},
    {lv:4,name:'&#xC11D;&#xACF5;',xp:600,desc:'&#xB3CC;&#xACFC; &#xC11D;&#xC7AC;&#xB97C; &#xB2E4;&#xB8E8;&#xB294; &#xC7A5;&#xC778;',color:'#b87333'},
    {lv:5,name:'&#xB3C4;&#xD3B8;&#xC218;',xp:1000,desc:'&#xAC74;&#xCD95; &#xC124;&#xACC4;&#xB3C4;&#xB97C; &#xADF8;&#xB9B4; &#xC218; &#xC788;&#xB294; &#xB2E8;&#xACC4;',color:'#c0c0c0'},
    {lv:6,name:'&#xB3C4;&#xD3B8;&#xC218;',xp:1500,desc:'&#xBCF5;&#xC7A1;&#xD55C; &#xAD6C;&#xC870;&#xBB3C; &#xC124;&#xACC4; &#xAC00;&#xB2A5;',color:'#4a90d9'},
    {lv:7,name:'&#xB300;&#xBAA9;&#xC7A5;',xp:2200,desc:'&#xB300;&#xADDC;&#xBAA8; &#xAC74;&#xCD95;&#xBB3C;&#xC744; &#xC9C0;&#xD718;',color:'#ffd700'},
    {lv:8,name:'&#xAC74;&#xCD95;&#xAC00;',xp:3000,desc:'&#xCC3D;&#xC758;&#xC801; &#xC124;&#xACC4;&#xC640; &#xD601;&#xC2E0; &#xB2A5;&#xB825;',color:'#e74c3c'},
    {lv:9,name:'&#xAC70;&#xC7A5;',xp:4000,desc:'&#xBB38;&#xD654;&#xC7AC; &#xAE09; &#xAC74;&#xCD95;&#xBB3C; &#xC124;&#xACC4;',color:'#9b59b6'},
    {lv:10,name:'&#xAD6D;&#xBCF4;&#xAE09; &#xBA85;&#xC7A5;',xp:5500,desc:'&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC758; &#xC0B4;&#xC544;&#xC788;&#xB294; &#xC804;&#xC124;',color:'#ff6b6b'}
  ];
  function getXP(){
    var data = {};
    try{
      var p=JSON.parse(localStorage.getItem('hb_progress')||'{}');
      if(p.completed) data.builds=(Object.keys(p.completed).length||0)*150;
    }catch(e){}
    var xp = (data.builds||0);
    try{
      var q=localStorage.getItem('hb_quiz_best');
      if(q) xp+=parseInt(q)*5;
    }catch(e){}
    try{
      var ach=JSON.parse(localStorage.getItem('hb_achievements')||'[]');
      xp+=ach.length*20;
    }catch(e){}
    return xp;
  }
  function getLv(xp){
    var lv=LEVELS[0];
    for(var i=LEVELS.length-1;i>=0;i--){ if(xp>=LEVELS[i].xp){lv=LEVELS[i];break;} }
    return lv;
  }
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-level').classList.add('active'); render(); }
  function close(){ document.getElementById('v16-level').classList.remove('active'); }
  function render(){
    var canvas=document.getElementById('v16-level-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    var xp=getXP(),curLv=getLv(xp);
    ctx.font='bold 16px sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('&#xAC74;&#xCD95; &#xB808;&#xBCA8; &#xD504;&#xB85C;&#xADF8;&#xB808;&#xC158; - Lv.'+curLv.lv+' '+curLv.name,W/2,30);
    var nodeR=22,startY=70,gapY=(H-120)/9;
    LEVELS.forEach(function(lv,i){
      var x = W/2 + Math.sin(i*0.7)*120;
      var y = startY + i*gapY;
      if(i<LEVELS.length-1){
        var nx=W/2+Math.sin((i+1)*0.7)*120, ny=startY+(i+1)*gapY;
        ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(nx,ny);
        ctx.strokeStyle=xp>=LEVELS[i+1].xp?'rgba(196,149,106,.5)':'rgba(196,149,106,.15)';
        ctx.lineWidth=2;ctx.setLineDash(xp>=LEVELS[i+1].xp?[]:[4,4]);ctx.stroke();ctx.setLineDash([]);
      }
      var unlocked = xp>=lv.xp;
      ctx.beginPath();ctx.arc(x,y,nodeR,0,Math.PI*2);
      if(unlocked){
        ctx.fillStyle=lv.color;ctx.globalAlpha=.9;ctx.fill();ctx.globalAlpha=1;
        ctx.strokeStyle='#f5deb3';ctx.lineWidth=2;ctx.stroke();
      } else {
        ctx.fillStyle='rgba(100,100,100,.3)';ctx.fill();
        ctx.strokeStyle='rgba(196,149,106,.2)';ctx.lineWidth=1;ctx.stroke();
      }
      ctx.fillStyle=unlocked?'#fff':'#666';ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText('Lv'+lv.lv,x,y);
      ctx.fillStyle=unlocked?'#f5deb3':'#666';ctx.font='bold 11px sans-serif';ctx.textBaseline='top';
      ctx.fillText(lv.name,x,y+nodeR+4);
      ctx.fillStyle=unlocked?'#c4956a':'#555';ctx.font='9px sans-serif';
      ctx.fillText(lv.xp+'XP',x,y+nodeR+18);
    });
    var nextLv=null;
    for(var i=0;i<LEVELS.length;i++){ if(xp<LEVELS[i].xp){nextLv=LEVELS[i];break;} }
    var info=document.getElementById('v16-level-info');
    if(nextLv){
      var pct=Math.min(100,((xp-getLv(xp).xp)/(nextLv.xp-getLv(xp).xp)*100)).toFixed(0);
      info.innerHTML='&#xD604;&#xC7AC; XP: <strong style="color:#f5deb3">'+xp+'</strong> | &#xB2E4;&#xC74C; &#xB808;&#xBCA8;&#xAE4C;&#xC9C0;: <strong style="color:#c4956a">'+(nextLv.xp-xp)+'XP &#xB354; &#xD544;&#xC694;</strong> ('+pct+'%)';
    } else {
      info.innerHTML='<strong style="color:#ffd700">&#xCD5C;&#xACE0; &#xB808;&#xBCA8; &#xB2EC;&#xC131;!</strong> &#xAD6D;&#xBCF4;&#xAE09; &#xBA85;&#xC7A5; &#xCE6D;&#xD638;&#xB97C; &#xD68D;&#xB4DD;&#xD588;&#xC2B5;&#xB2C8;&#xB2E4;!';
    }
    var stat=document.getElementById('v16-level-stat');
    stat.innerHTML='<div class="s"><div class="sv">'+xp+'</div><div class="sl">&#xCD1D; XP</div></div>'+
      '<div class="s"><div class="sv">Lv.'+curLv.lv+'</div><div class="sl">'+curLv.name+'</div></div>'+
      '<div class="s"><div class="sv">'+(nextLv?(nextLv.xp-xp):'MAX')+'</div><div class="sl">&#xB2E4;&#xC74C;&#xAE4C;&#xC9C0;</div></div>';
  }
  return {open:open,close:close};
})();

// ── 7. Furniture Layout Optimizer ──
var v16Furniture = (function(){
  var ITEMS=[
    {name:'&#xCE68;&#xB300;',icon:'&#x1F6CF;',w:3,h:2,color:'#8e6c4a'},
    {name:'&#xC18C;&#xD30C;',icon:'&#x1F6CB;',w:3,h:1,color:'#6b8e6c'},
    {name:'&#xCC45;&#xC0C1;',icon:'&#x1FA91;',w:2,h:1,color:'#7a6b4a'},
    {name:'&#xC2DD;&#xD0C1;',icon:'&#x1F37D;',w:2,h:2,color:'#4a6b7a'},
    {name:'&#xC625;&#xC7A5;',icon:'&#x1F45A;',w:2,h:1,color:'#7a4a6b'},
    {name:'&#xCC45;&#xC7A5;',icon:'&#x1F4DA;',w:1,h:3,color:'#6b4a3a'},
    {name:'TV',icon:'&#x1F4FA;',w:2,h:1,color:'#3a4a6b'},
    {name:'&#xD53C;&#xC544;&#xB178;',icon:'&#x1F3B9;',w:3,h:1,color:'#1a1a2e'},
    {name:'&#xD654;&#xBD84;',icon:'&#x1FAB4;',w:1,h:1,color:'#2e8b57'},
    {name:'&#xC758;&#xC790;',icon:'&#x1FA91;',w:1,h:1,color:'#8b7355'},
    {name:'&#xAC70;&#xC6B8;',icon:'&#x1FA9E;',w:1,h:2,color:'#4682b4'},
    {name:'&#xC2E0;&#xBC1C;&#xC7A5;',icon:'&#x1F45F;',w:2,h:1,color:'#5a3a20'}
  ];
  var grid=[], curItem=0, placed=[];
  function initGrid(){ grid=[]; for(var r=0;r<12;r++){grid[r]=[]; for(var c=0;c<12;c++) grid[r][c]=null;} }
  function open(){
    v16SFX.panelOpen();
    document.getElementById('v16-furniture').classList.add('active');
    load(); renderTabs(); render();
  }
  function close(){ document.getElementById('v16-furniture').classList.remove('active'); }
  function load(){
    try{
      var d=JSON.parse(localStorage.getItem('hb_furniture_v16'));
      if(d&&d.grid){grid=d.grid;placed=d.placed||[];return;}
    }catch(e){}
    initGrid(); placed=[];
  }
  function save(){ localStorage.setItem('hb_furniture_v16',JSON.stringify({grid:grid,placed:placed})); }
  function renderTabs(){
    var c=document.getElementById('v16-furniture-tabs'); c.innerHTML='';
    ITEMS.forEach(function(it,i){
      var b=document.createElement('button');
      b.className='v16-tab'+(i===curItem?' active':'');
      b.innerHTML=it.icon+' '+it.name;
      b.onclick=function(){curItem=i;v16SFX.tabSwitch();renderTabs();};
      c.appendChild(b);
    });
    var clr=document.createElement('button');
    clr.className='v16-tab';clr.innerHTML='&#x1F5D1; &#xCD08;&#xAE30;&#xD654;';
    clr.onclick=function(){initGrid();placed=[];save();v16SFX.remove();render();};
    c.appendChild(clr);
  }
  function canPlace(r,c,item){
    if(r+item.h>12||c+item.w>12) return false;
    for(var dr=0;dr<item.h;dr++) for(var dc=0;dc<item.w;dc++) if(grid[r+dr][c+dc]!==null) return false;
    return true;
  }
  function placeItem(r,c,item,idx){
    for(var dr=0;dr<item.h;dr++) for(var dc=0;dc<item.w;dc++) grid[r+dr][c+dc]=idx;
  }
  function render(){
    var canvas=document.getElementById('v16-furniture-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    var cellW=W/12,cellH=H/12;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    for(var r=0;r<12;r++) for(var c=0;c<12;c++){
      var x=c*cellW,y=r*cellH;
      ctx.strokeStyle='rgba(196,149,106,.15)';ctx.lineWidth=.5;
      ctx.strokeRect(x,y,cellW,cellH);
      if(grid[r][c]!==null){
        var it=ITEMS[grid[r][c]%ITEMS.length]||ITEMS[0];
        ctx.fillStyle=it.color;ctx.globalAlpha=.6;
        ctx.fillRect(x+1,y+1,cellW-2,cellH-2);
        ctx.globalAlpha=1;
      }
    }
    placed.forEach(function(p){
      var it=ITEMS[p.idx];
      var x=p.c*cellW,y=p.r*cellH;
      ctx.fillStyle=it.color;ctx.globalAlpha=.7;
      ctx.fillRect(x+1,y+1,it.w*cellW-2,it.h*cellH-2);
      ctx.globalAlpha=1;
      ctx.strokeStyle='rgba(255,255,255,.3)';ctx.lineWidth=1;
      ctx.strokeRect(x+1,y+1,it.w*cellW-2,it.h*cellH-2);
      ctx.fillStyle='#fff';ctx.font='bold 11px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(it.icon+' '+it.name,x+it.w*cellW/2,y+it.h*cellH/2);
    });
    var used=0,total=144;
    for(var r=0;r<12;r++) for(var c=0;c<12;c++) if(grid[r][c]!==null) used++;
    var pct=(used/total*100).toFixed(0);
    var info=document.getElementById('v16-furniture-info');
    info.innerHTML='&#xACF5;&#xAC04; &#xD65C;&#xC6A9;&#xB960;: <strong style="color:#f5deb3">'+pct+'%</strong> ('+used+'/'+total+' &#xCE78;) | &#xAC00;&#xAD6C;: <strong style="color:#c4956a">'+placed.length+'&#xAC1C;</strong>';
    var stat=document.getElementById('v16-furniture-stat');
    stat.innerHTML='<div class="s"><div class="sv">'+pct+'%</div><div class="sl">&#xD65C;&#xC6A9;&#xB960;</div></div>'+
      '<div class="s"><div class="sv">'+placed.length+'</div><div class="sl">&#xBC30;&#xCE58;&#xB41C; &#xAC00;&#xAD6C;</div></div>'+
      '<div class="s"><div class="sv">'+(total-used)+'</div><div class="sl">&#xBE48; &#xCE78;</div></div>';
  }
  function handleClick(e){
    var canvas=document.getElementById('v16-furniture-canvas');
    var rect=canvas.getBoundingClientRect();
    var mx=(e.clientX-rect.left)*(canvas.width/rect.width);
    var my=(e.clientY-rect.top)*(canvas.height/rect.height);
    var c=Math.floor(mx/(canvas.width/12));
    var r=Math.floor(my/(canvas.height/12));
    if(r<0||r>=12||c<0||c>=12) return;
    if(grid[r][c]!==null){
      var idx=grid[r][c];
      for(var rr=0;rr<12;rr++) for(var cc=0;cc<12;cc++) if(grid[rr][cc]===idx) grid[rr][cc]=null;
      placed=placed.filter(function(p){return p.idx!==idx||p.r!==r||p.c!==c;});
      placed=placed.filter(function(p){
        var ok=true;
        for(var dr=0;dr<ITEMS[p.idx].h;dr++) for(var dc=0;dc<ITEMS[p.idx].w;dc++){
          if(grid[p.r+dr]&&grid[p.r+dr][p.c+dc]===null){} else if(grid[p.r+dr]&&grid[p.r+dr][p.c+dc]===idx) ok=false;
        }
        return true;
      });
      v16SFX.remove(); save(); render(); return;
    }
    var item=ITEMS[curItem];
    if(canPlace(r,c,item)){
      var pid=Date.now();
      placeItem(r,c,item,curItem);
      placed.push({idx:curItem,r:r,c:c,id:pid});
      v16SFX.place(); save(); render();
    }
  }
  setTimeout(function(){
    var canvas=document.getElementById('v16-furniture-canvas');
    if(canvas) canvas.addEventListener('click',handleClick);
  },2000);
  return {open:open,close:close};
})();

// ── 8. Build Cost Comparison ──
var v16CostCmp = (function(){
  var TYPES = [
    {name:'&#xD55C;&#xC625;',costs:{land:15000,material:28000,labor:18000,design:5000,permit:2000,misc:3000},color:'#cd7f32'},
    {name:'&#xAE30;&#xC640;&#xC9D1;',costs:{land:12000,material:22000,labor:15000,design:4000,permit:1800,misc:2500},color:'#8b7355'},
    {name:'&#xCD08;&#xAC00;&#xC9D1;',costs:{land:8000,material:12000,labor:10000,design:2000,permit:1000,misc:1500},color:'#a0784a'},
    {name:'&#xC11C;&#xC6D0;',costs:{land:20000,material:35000,labor:22000,design:8000,permit:3000,misc:4000},color:'#4a6b8a'},
    {name:'&#xC815;&#xC790;',costs:{land:10000,material:18000,labor:12000,design:3500,permit:1500,misc:2000},color:'#6b8a4a'},
    {name:'&#xD604;&#xB300;&#xC8FC;&#xD0DD;',costs:{land:25000,material:32000,labor:20000,design:6000,permit:2500,misc:3500},color:'#4a4a8a'}
  ];
  var CATS=['&#xD1A0;&#xC9C0;','&#xC790;&#xC7AC;','&#xC778;&#xAC74;','&#xC124;&#xACC4;','&#xD5C8;&#xAC00;','&#xAE30;&#xD0C0;'];
  var CATKEYS=['land','material','labor','design','permit','misc'];
  var CATCOLORS=['#e74c3c','#e67e22','#f1c40f','#2ecc71','#3498db','#9b59b6'];
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-costcmp').classList.add('active'); render(); }
  function close(){ document.getElementById('v16-costcmp').classList.remove('active'); }
  function render(){
    var canvas=document.getElementById('v16-costcmp-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    ctx.font='bold 15px sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('&#xAC74;&#xCD95;&#xBB3C;&#xBCC4; &#xBE44;&#xC6A9; &#xBE44;&#xAD50; (&#xB9CC;&#xC6D0;/&#xD3C9;)',W/2,28);
    var maxTotal=0;
    TYPES.forEach(function(t){
      var total=0; CATKEYS.forEach(function(k){total+=t.costs[k];}); if(total>maxTotal) maxTotal=total;
    });
    var barW=70,gap=16,startX=(W-(TYPES.length*(barW+gap)-gap))/2;
    var barH=H-120;
    TYPES.forEach(function(t,i){
      var x=startX+i*(barW+gap);
      var total=0; CATKEYS.forEach(function(k){total+=t.costs[k];});
      var cumY=H-60;
      CATKEYS.forEach(function(k,ki){
        var val=t.costs[k];
        var h=(val/maxTotal)*barH;
        cumY-=h;
        ctx.fillStyle=CATCOLORS[ki];ctx.globalAlpha=.8;
        ctx.fillRect(x,cumY,barW,h);ctx.globalAlpha=1;
        if(h>14){
          ctx.fillStyle='#fff';ctx.font='9px sans-serif';ctx.textAlign='center';
          ctx.fillText((val/10000).toFixed(1),x+barW/2,cumY+h/2+3);
        }
      });
      ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=1;
      ctx.strokeRect(x,H-60-((total/maxTotal)*barH),barW,(total/maxTotal)*barH);
      ctx.fillStyle='#f5deb3';ctx.font='11px sans-serif';ctx.textAlign='center';
      ctx.fillText(t.name,x+barW/2,H-42);
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';
      ctx.fillText((total/10000).toFixed(1)+'&#xC5B5;',x+barW/2,H-28);
    });
    var legendY=50;
    CATS.forEach(function(cat,i){
      var lx=W-120,ly=legendY+i*18;
      ctx.fillStyle=CATCOLORS[i];ctx.fillRect(lx,ly,10,10);
      ctx.fillStyle='#e8d5c0';ctx.font='10px sans-serif';ctx.textAlign='left';
      ctx.fillText(cat,lx+14,ly+9);
    });
    var cheapest=null,cheapestTotal=Infinity;
    TYPES.forEach(function(t){
      var total=0;CATKEYS.forEach(function(k){total+=t.costs[k];});
      if(total<cheapestTotal){cheapestTotal=total;cheapest=t;}
    });
    var info=document.getElementById('v16-costcmp-info');
    info.innerHTML='&#xAC00;&#xC7A5; &#xACBD;&#xC81C;&#xC801;: <strong style="color:#2ecc71">'+cheapest.name+'</strong> ('+(cheapestTotal/10000).toFixed(1)+'&#xC5B5;&#xC6D0;/&#xD3C9;) | &#xC790;&#xC7AC;&#xBE44;&#xAC00; &#xAC00;&#xC7A5; &#xD070; &#xBE44;&#xC911;&#xC744; &#xCC28;&#xC9C0;&#xD569;&#xB2C8;&#xB2E4;';
  }
  return {open:open,close:close};
})();

// ── 9. Hanok Structure Anatomy ──
var v16Anatomy = (function(){
  var PARTS=[
    {name:'&#xAE30;&#xB2E8;(&#xAE30;&#xCD08;)',desc:'&#xAC74;&#xBB3C;&#xC758; &#xD558;&#xC911;&#xC744; &#xC9C0;&#xBA74;&#xC5D0; &#xC804;&#xB2EC;&#xD558;&#xB294; &#xAE30;&#xCD08; &#xAD6C;&#xC870;. &#xC790;&#xC5F0;&#xC11D; &#xB610;&#xB294; &#xC7A5;&#xB300;&#xC11D;&#xC744; &#xC0AC;&#xC6A9;&#xD558;&#xC5EC; &#xC2B5;&#xAE30;&#xB97C; &#xCC28;&#xB2E8;&#xD558;&#xACE0; &#xD658;&#xAE30;&#xB97C; &#xC6D0;&#xD65C;&#xD558;&#xAC8C; &#xD568;.',y:0.85,color:'#7a6b5a'},
    {name:'&#xCD08;&#xC11D;(&#xCD08;&#xC11D;)',desc:'&#xAE30;&#xB2E8; &#xC704;&#xC5D0; &#xB193;&#xC774;&#xB294; &#xB118;&#xC801;&#xD55C; &#xB3CC;. &#xAE30;&#xB465;&#xC744; &#xBC1B;&#xCE58;&#xBA70; &#xD558;&#xC911;&#xC744; &#xBD84;&#xC0B0;&#xC2DC;&#xD0A4;&#xB294; &#xC5ED;&#xD560;.',y:0.78,color:'#8a7b6a'},
    {name:'&#xAE30;&#xB465;',desc:'&#xAC74;&#xBB3C;&#xC758; &#xC218;&#xC9C1; &#xAD6C;&#xC870;&#xBB3C;. &#xC9C0;&#xBD95;&#xC758; &#xD558;&#xC911;&#xC744; &#xCD08;&#xC11D;&#xC73C;&#xB85C; &#xC804;&#xB2EC;. &#xBBFC;&#xD758;&#xB9BC;&#xC774; &#xD2B9;&#xC9D5;.',y:0.65,color:'#6b4a32'},
    {name:'&#xBCF4;',desc:'&#xAE30;&#xB465;&#xACFC; &#xAE30;&#xB465; &#xC0AC;&#xC774;&#xB97C; &#xAC00;&#xB85C;&#xB85C; &#xC5F0;&#xACB0;&#xD558;&#xB294; &#xC218;&#xD3C9; &#xBD80;&#xC7AC;. &#xBC14;&#xB2E5;&#xC7A5;&#xC120;/&#xCC3D;&#xBB38;&#xD2C0; &#xC9C0;&#xC9C0;.',y:0.55,color:'#5a3e28'},
    {name:'&#xB3C4;&#xB9AC;',desc:'&#xAE30;&#xB465; &#xC704;&#xC5D0; &#xC5B9;&#xD600;&#xC9C0;&#xB294; &#xC218;&#xD3C9; &#xBD80;&#xC7AC;. &#xAC00;&#xAD6C; &#xBC30;&#xCE58;&#xC758; &#xAE30;&#xC900;&#xC774; &#xB418;&#xBA70; &#xC9C0;&#xBD95; &#xD558;&#xC911;&#xC744; &#xAE30;&#xB465;&#xC5D0; &#xC804;&#xB2EC;.',y:0.48,color:'#8b6840'},
    {name:'&#xCC3D;&#xD638;&#xC9C0;',desc:'&#xD55C;&#xC9C0;&#xB85C; &#xB9CC;&#xB4E0; &#xBBF8;&#xB2EB;&#xC774;&#xBB38;. &#xD1B5;&#xD48D;&#xACFC; &#xCC44;&#xAD11;&#xC744; &#xC870;&#xC808;&#xD558;&#xBA70; &#xACC4;&#xC808;&#xC5D0; &#xB530;&#xB77C; &#xB5BC;&#xC5B4;&#xB0B4;&#xAC70;&#xB098; &#xC5F4; &#xC218; &#xC788;&#xC74C;.',y:0.58,color:'#d4c5a9'},
    {name:'&#xB300;&#xB4E4;&#xBCF4;',desc:'&#xAC74;&#xBB3C;&#xC758; &#xAC00;&#xC7A5; &#xB192;&#xC740; &#xC704;&#xCE58;&#xC758; &#xC218;&#xD3C9; &#xBD80;&#xC7AC;. &#xC9C0;&#xBD95;&#xC758; &#xD575;&#xC2EC; &#xAD6C;&#xC870;&#xBB3C;&#xB85C; &#xAC00;&#xC7A5; &#xD070; &#xD558;&#xC911;&#xC744; &#xBC1B;&#xC74C;.',y:0.35,color:'#4a3520'},
    {name:'&#xC11C;&#xAE4C;&#xB798;',desc:'&#xC9C0;&#xBD95; &#xCC98;&#xB9C8; &#xBC11;&#xC758; &#xACBD;&#xC0AC;&#xC9C4; &#xBD80;&#xC7AC;. &#xB300;&#xB4E4;&#xBCF4;&#xC640; &#xB3C4;&#xB9AC; &#xC0AC;&#xC774;&#xB97C; &#xC5F0;&#xACB0;&#xD558;&#xC5EC; &#xC9C0;&#xBD95;&#xC758; &#xACBD;&#xC0AC;&#xB97C; &#xAD6C;&#xC131;.',y:0.4,color:'#6b5030'},
    {name:'&#xCC98;&#xB9C8;',desc:'&#xC9C0;&#xBD95;&#xC758; &#xC808;&#xBC18; &#xB192;&#xC774; &#xC218;&#xD3C9; &#xBD80;&#xC7AC;. &#xC11C;&#xAE4C;&#xB798; &#xC704;&#xC5D0; &#xB193;&#xC774;&#xBA70; &#xC9C0;&#xBD95; &#xBA74;&#xC801;&#xC744; &#xACB0;&#xC815;.',y:0.3,color:'#5a4030'},
    {name:'&#xC9C0;&#xBD95;(&#xAE30;&#xC640;)',desc:'&#xD55C;&#xC625;&#xC758; &#xC0C1;&#xC9D5;. &#xAE30;&#xC640;&#xC640; &#xC218;&#xD0A4;&#xC640;&#xB85C; &#xAD6C;&#xC131;. &#xD3B8;&#xD3C9;&#xD55C; &#xACE1;&#xC120;&#xC774; &#xD2B9;&#xC9D5;&#xC774;&#xBA70; &#xBE57;&#xBB3C; &#xBC30;&#xC218;&#xC640; &#xB2E8;&#xC5F4;&#xC744; &#xB2F4;&#xB2F9;.',y:0.18,color:'#4a3828'},
    {name:'&#xCD94;&#xB140;',desc:'&#xC9C0;&#xBD95;&#xC758; &#xAF2D;&#xB300;&#xAE30; &#xC7A5;&#xC2DD;. &#xB9DD;&#xC640;&#xB97C; &#xD615;&#xC0C1;&#xD654;&#xD55C; &#xAC83;&#xC73C;&#xB85C; &#xD654;&#xC7AC;&#xB97C; &#xB9C9;&#xB294; &#xBBFC;&#xAC04;&#xC2E0;&#xC559; &#xC758;&#xBBF8;.',y:0.1,color:'#3a2818'},
    {name:'&#xB9C8;&#xB8E8;(&#xB9C8;&#xB8E8;)',desc:'&#xBC29;&#xACFC; &#xBC29; &#xC0AC;&#xC774;&#xC758; &#xB110;&#xC740; &#xBAA9;&#xC870; &#xBC14;&#xB2E5;. &#xAC74;&#xBB3C; &#xB0B4;&#xBD80;&#xC758; &#xD1B5;&#xB85C;&#xC774;&#xC790; &#xB2E4;&#xC6A9;&#xB3C4; &#xACF5;&#xAC04;.',y:0.7,color:'#a08060'}
  ];
  var curPart=0;
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-anatomy').classList.add('active'); renderTabs(); render(); }
  function close(){ document.getElementById('v16-anatomy').classList.remove('active'); }
  function renderTabs(){
    var c=document.getElementById('v16-anatomy-tabs'); c.innerHTML='';
    PARTS.forEach(function(p,i){
      var b=document.createElement('button');
      b.className='v16-tab'+(i===curPart?' active':'');
      b.innerHTML=p.name;
      b.onclick=function(){curPart=i;v16SFX.anatomyClick();renderTabs();render();};
      c.appendChild(b);
    });
  }
  function render(){
    var canvas=document.getElementById('v16-anatomy-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    ctx.font='bold 15px sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('&#xD55C;&#xC625; &#xAD6C;&#xC870; &#xD574;&#xBD80;&#xB3C4;',W/2,28);
    var houseX=W/2-120,houseW=240,houseBot=H-50,houseTop=60;
    ctx.fillStyle='rgba(196,149,106,.08)';
    ctx.fillRect(houseX,houseTop,houseW,houseBot-houseTop);
    ctx.strokeStyle='rgba(196,149,106,.2)';ctx.lineWidth=1;
    ctx.strokeRect(houseX,houseTop,houseW,houseBot-houseTop);
    ctx.beginPath();
    ctx.moveTo(houseX-30,houseTop+120);
    ctx.lineTo(W/2,houseTop-10);
    ctx.lineTo(houseX+houseW+30,houseTop+120);
    ctx.closePath();
    ctx.fillStyle='rgba(74,56,40,.3)';ctx.fill();
    ctx.strokeStyle='rgba(196,149,106,.3)';ctx.stroke();
    PARTS.forEach(function(p,i){
      var py = houseTop + (houseBot-houseTop)*p.y;
      var isActive = i===curPart;
      ctx.beginPath();
      ctx.moveTo(houseX+10,py);
      ctx.lineTo(houseX+houseW-10,py);
      ctx.strokeStyle=isActive?p.color:'rgba(196,149,106,.15)';
      ctx.lineWidth=isActive?3:1;
      ctx.setLineDash(isActive?[]:[3,3]);
      ctx.stroke();ctx.setLineDash([]);
      var labelX = i%2===0 ? houseX-10 : houseX+houseW+10;
      var align = i%2===0 ? 'right' : 'left';
      if(isActive){
        ctx.beginPath();
        ctx.moveTo(i%2===0?houseX+10:houseX+houseW-10,py);
        ctx.lineTo(labelX,py);
        ctx.strokeStyle=p.color;ctx.lineWidth=1.5;ctx.stroke();
      }
      ctx.fillStyle=isActive?'#f5deb3':'rgba(196,149,106,.5)';
      ctx.font=isActive?'bold 12px sans-serif':'10px sans-serif';
      ctx.textAlign=align;
      ctx.fillText(p.name,labelX+(align==='right'?-4:4),py+4);
    });
    var active=PARTS[curPart];
    var info=document.getElementById('v16-anatomy-info');
    info.innerHTML='<strong style="color:#f5deb3;font-size:15px">'+active.name+'</strong><br><span style="color:#e8d5c0;line-height:1.8">'+active.desc+'</span>';
  }
  return {open:open,close:close};
})();

// ── 10. Seasonal Energy Consumption ──
var v16Energy = (function(){
  var TYPES=[
    {name:'&#xD55C;&#xC625;',data:{heating:[120,100,60,20,5,0,0,0,10,40,80,110],cooling:[0,0,5,15,40,80,100,95,50,10,0,0],lighting:[30,28,25,22,20,18,17,18,22,25,28,30],ventilation:[10,12,15,20,25,30,35,30,22,18,14,10]},color:'#cd7f32'},
    {name:'&#xD604;&#xB300;&#xC8FC;&#xD0DD;',data:{heating:[150,130,80,30,8,0,0,0,15,55,100,140],cooling:[0,0,8,20,55,110,140,130,65,15,0,0],lighting:[25,23,20,18,16,14,13,14,18,21,24,25],ventilation:[5,6,8,12,18,22,25,22,15,10,7,5]},color:'#4a4a8a'},
    {name:'&#xCD08;&#xAC00;&#xC9D1;',data:{heating:[180,160,100,40,10,0,0,0,20,70,130,170],cooling:[0,0,3,10,30,60,75,70,35,8,0,0],lighting:[35,33,30,27,24,22,20,22,27,30,33,35],ventilation:[15,18,22,28,32,38,42,38,28,22,18,15]},color:'#a0784a'}
  ];
  var MONTHS=['1&#xC6D4;','2','3','4','5','6','7','8','9','10','11','12&#xC6D4;'];
  var CATS=['&#xB09C;&#xBC29;','&#xB0C9;&#xBC29;','&#xC870;&#xBA85;','&#xD658;&#xAE30;'];
  var CATKEYS=['heating','cooling','lighting','ventilation'];
  var CATCOLORS=['#e74c3c','#3498db','#f1c40f','#2ecc71'];
  var curType=0;
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-energy').classList.add('active'); renderTabs(); render(); }
  function close(){ document.getElementById('v16-energy').classList.remove('active'); }
  function renderTabs(){
    var c=document.getElementById('v16-energy-tabs'); c.innerHTML='';
    TYPES.forEach(function(t,i){
      var b=document.createElement('button');
      b.className='v16-tab'+(i===curType?' active':'');
      b.innerHTML=t.name;
      b.onclick=function(){curType=i;v16SFX.tabSwitch();renderTabs();render();};
      c.appendChild(b);
    });
  }
  function render(){
    var canvas=document.getElementById('v16-energy-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    var t=TYPES[curType];
    ctx.font='bold 15px sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText(t.name+' &#xC6D4;&#xBCC4; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; (kWh)',W/2,28);
    var padL=50,padR=30,padT=50,padB=60;
    var gW=W-padL-padR, gH=H-padT-padB;
    var maxV=0;
    for(var m=0;m<12;m++){
      var sum=0; CATKEYS.forEach(function(k){sum+=t.data[k][m];}); if(sum>maxV)maxV=sum;
    }
    maxV=Math.ceil(maxV/50)*50;
    for(var v=0;v<=maxV;v+=50){
      var yy=padT+gH-(v/maxV)*gH;
      ctx.strokeStyle='rgba(196,149,106,.1)';ctx.beginPath();ctx.moveTo(padL,yy);ctx.lineTo(padL+gW,yy);ctx.stroke();
      ctx.fillStyle='rgba(196,149,106,.4)';ctx.font='9px sans-serif';ctx.textAlign='right';
      ctx.fillText(v,padL-4,yy+3);
    }
    CATKEYS.forEach(function(k,ki){
      ctx.beginPath();
      for(var m=0;m<12;m++){
        var x=padL+m*(gW/11);
        var y=padT+gH-(t.data[k][m]/maxV)*gH;
        if(m===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle=CATCOLORS[ki];ctx.lineWidth=2.5;ctx.stroke();
      for(var m=0;m<12;m++){
        var x=padL+m*(gW/11);
        var y=padT+gH-(t.data[k][m]/maxV)*gH;
        ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fillStyle=CATCOLORS[ki];ctx.fill();
      }
    });
    for(var m=0;m<12;m++){
      var x=padL+m*(gW/11);
      ctx.fillStyle='#c4956a';ctx.font='10px sans-serif';ctx.textAlign='center';
      ctx.fillText(MONTHS[m],x,H-padB+16);
    }
    var legendX=padL+10;
    CATS.forEach(function(cat,i){
      var lx=legendX+i*90;
      ctx.fillStyle=CATCOLORS[i];ctx.fillRect(lx,H-22,10,10);
      ctx.fillStyle='#e8d5c0';ctx.font='10px sans-serif';ctx.textAlign='left';
      ctx.fillText(cat,lx+14,H-13);
    });
    var totalAnnual=0;
    CATKEYS.forEach(function(k){for(var m=0;m<12;m++) totalAnnual+=t.data[k][m];});
    var peakMonth=0,peakVal=0;
    for(var m=0;m<12;m++){
      var s=0;CATKEYS.forEach(function(k){s+=t.data[k][m];});
      if(s>peakVal){peakVal=s;peakMonth=m;}
    }
    var info=document.getElementById('v16-energy-info');
    info.innerHTML='&#xC5F0;&#xAC04; &#xCD1D; &#xC5D0;&#xB108;&#xC9C0;: <strong style="color:#f5deb3">'+totalAnnual+' kWh</strong> | &#xD53C;&#xD06C;: <strong style="color:#e74c3c">'+(peakMonth+1)+'&#xC6D4; ('+peakVal+' kWh)</strong>';
    var stat=document.getElementById('v16-energy-stat');
    stat.innerHTML='<div class="s"><div class="sv">'+totalAnnual+'</div><div class="sl">&#xC5F0;&#xAC04; kWh</div></div>'+
      '<div class="s"><div class="sv">'+(peakMonth+1)+'&#xC6D4;</div><div class="sl">&#xD53C;&#xD06C;</div></div>'+
      '<div class="s"><div class="sv">'+(totalAnnual/12).toFixed(0)+'</div><div class="sl">&#xC6D4;&#xD3C9;&#xADE0;</div></div>';
    localStorage.setItem('hb_energy_v16',JSON.stringify({type:curType}));
  }
  return {open:open,close:close};
})();

// ── 11. Architecture Milestone Timeline ──
var v16Milestone = (function(){
  var MILESTONES=[
    {id:'first_build',name:'&#xCCAB; &#xAC74;&#xCD95; &#xC644;&#xC131;',desc:'&#xC5B4;&#xB5A4; &#xBAA8;&#xB4DC;&#xB4E0; &#xCC98;&#xC74C; &#xC644;&#xC131;',icon:'&#x1F3E0;',xp:50},
    {id:'all_modes',name:'&#xC804; &#xBAA8;&#xB4DC; &#xCCB4;&#xD5D8;',desc:'6&#xAC00;&#xC9C0; &#xAC74;&#xCD95; &#xBAA8;&#xB4DC; &#xBAA8;&#xB450; &#xC2DC;&#xB3C4;',icon:'&#x1F3D7;',xp:100},
    {id:'quiz_30',name:'&#xD035;&#xC988; 30&#xBB38; &#xD480;&#xAE30;',desc:'&#xD035;&#xC988;&#xB97C; 30&#xBB38; &#xC774;&#xC0C1; &#xD480;&#xAE30;',icon:'&#x1F4DD;',xp:60},
    {id:'quiz_100',name:'&#xD035;&#xC988; 100&#xBB38; &#xD480;&#xAE30;',desc:'&#xD035;&#xC988;&#xB97C; 100&#xBB38; &#xC774;&#xC0C1; &#xD480;&#xAE30;',icon:'&#x1F3AF;',xp:150},
    {id:'material_master',name:'&#xC7AC;&#xB8CC; &#xB9C8;&#xC2A4;&#xD130;',desc:'&#xBAA8;&#xB4E0; &#xC7AC;&#xB8CC; &#xC885;&#xB958; &#xC0AC;&#xC6A9;',icon:'&#x1F9F1;',xp:80},
    {id:'night_builder',name:'&#xC57C;&#xAC04; &#xAC74;&#xCD95;&#xAC00;',desc:'&#xC57C;&#xAC04; &#xBAA8;&#xB4DC;&#xC5D0;&#xC11C; &#xAC74;&#xCD95; &#xC644;&#xC131;',icon:'&#x1F303;',xp:70},
    {id:'screenshot_10',name:'&#xC0AC;&#xC9C4;&#xAC00; 10&#xC7A5;',desc:'&#xC2A4;&#xD06C;&#xB9B0;&#xC0F7; 10&#xC7A5; &#xCCA7;&#xAE30;',icon:'&#x1F4F8;',xp:50},
    {id:'season_all',name:'&#xC0AC;&#xACC4;&#xC808; &#xCCB4;&#xD5D8;',desc:'&#xBD04;/&#xC5EC;&#xB984;/&#xAC00;&#xC744;/&#xACA8;&#xC6B8; &#xBAA8;&#xB450; &#xCCB4;&#xD5D8;',icon:'&#x1F338;',xp:60},
    {id:'bgm_play',name:'BGM &#xAC10;&#xC0C1;',desc:'BGM&#xC744; &#xCC98;&#xC74C; &#xC7AC;&#xC0DD;',icon:'&#x1F3B5;',xp:30},
    {id:'walkthrough_done',name:'&#xC6CC;&#xD06C;&#xC2A4;&#xB8E8; &#xCCB4;&#xD5D8;',desc:'&#xC6CC;&#xD06C;&#xC2A4;&#xB8E8; &#xBAA8;&#xB4DC; &#xCCB4;&#xD5D8;',icon:'&#x1F6B6;',xp:40},
    {id:'achieve_50',name:'&#xC5C5;&#xC801; 50&#xAC1C;',desc:'&#xC5C5;&#xC801;&#xC744; 50&#xAC1C; &#xC774;&#xC0C1; &#xB2EC;&#xC131;',icon:'&#x1F3C5;',xp:120},
    {id:'achieve_100',name:'&#xC5C5;&#xC801; 100&#xAC1C;',desc:'&#xC5C5;&#xC801;&#xC744; 100&#xAC1C; &#xC774;&#xC0C1; &#xB2EC;&#xC131;',icon:'&#x1F451;',xp:200},
    {id:'energy_check',name:'&#xC5D0;&#xB108;&#xC9C0; &#xBD84;&#xC11D;',desc:'&#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130; &#xC0AC;&#xC6A9;',icon:'&#x26A1;',xp:40},
    {id:'anatomy_study',name:'&#xAD6C;&#xC870; &#xD559;&#xC2B5;',desc:'&#xD55C;&#xC625; &#xAD6C;&#xC870; &#xD574;&#xBD80;&#xB3C4; &#xC804;&#xBD80; &#xD559;&#xC2B5;',icon:'&#x1F50D;',xp:80},
    {id:'furniture_10',name:'&#xAC00;&#xAD6C; 10&#xAC1C; &#xBC30;&#xCE58;',desc:'&#xAC00;&#xAD6C; &#xBC30;&#xCE58; &#xD50C;&#xB798;&#xB108;&#xC5D0;&#xC11C; 10&#xAC1C; &#xBC30;&#xCE58;',icon:'&#x1F6CB;',xp:60},
    {id:'wind_check',name:'&#xD48D;&#xD5A5; &#xBD84;&#xC11D;',desc:'&#xD48D;&#xD5A5; &#xBD84;&#xC11D;&#xAE30; &#xC0AC;&#xC6A9;',icon:'&#x1F32C;',xp:30},
    {id:'thermal_check',name:'&#xC5F4;&#xC7E5;&#xC801; &#xBD84;&#xC11D;',desc:'&#xC2E4;&#xB0B4; &#xC5F4;&#xC7E5;&#xC801; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130; &#xC0AC;&#xC6A9;',icon:'&#x1F321;',xp:30},
    {id:'cost_compare',name:'&#xBE44;&#xC6A9; &#xBE44;&#xAD50;',desc:'&#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xBE44;&#xAD50; &#xBD84;&#xC11D;&#xAE30; &#xC0AC;&#xC6A9;',icon:'&#x1F4B0;',xp:40},
    {id:'level_5',name:'&#xB808;&#xBCA8; 5 &#xB2EC;&#xC131;',desc:'&#xAC74;&#xCD95; &#xB808;&#xBCA8; 5 &#xC774;&#xC0C1; &#xB3C4;&#xB2EC;',icon:'&#x2B50;',xp:100},
    {id:'milestone_all',name:'&#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; &#xB9C8;&#xC2A4;&#xD130;',desc:'&#xBAA8;&#xB4E0; &#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; &#xB2EC;&#xC131;',icon:'&#x1F3C6;',xp:300}
  ];
  function getCompleted(){
    try{ return JSON.parse(localStorage.getItem('hb_milestones_v16')||'[]'); }catch(e){ return []; }
  }
  function checkMilestones(){
    var done=getCompleted();
    function mark(id){ if(done.indexOf(id)===-1){ done.push(id); v16SFX.milestone(); } }
    try{var p=JSON.parse(localStorage.getItem('hb_progress')||'{}'); if(p.completed&&Object.keys(p.completed).length>=1) mark('first_build'); if(p.completed&&Object.keys(p.completed).length>=6) mark('all_modes');}catch(e){}
    if(localStorage.getItem('hb_wind_v16')) mark('wind_check');
    if(localStorage.getItem('hb_thermal_v16')) mark('thermal_check');
    if(localStorage.getItem('hb_energy_v16')) mark('energy_check');
    try{var f=JSON.parse(localStorage.getItem('hb_furniture_v16')); if(f&&f.placed&&f.placed.length>=10) mark('furniture_10');}catch(e){}
    try{var ach=JSON.parse(localStorage.getItem('hb_achievements')||'[]'); if(ach.length>=50) mark('achieve_50'); if(ach.length>=100) mark('achieve_100');}catch(e){}
    localStorage.setItem('hb_milestones_v16',JSON.stringify(done));
    return done;
  }
  function open(){ v16SFX.panelOpen(); document.getElementById('v16-milestone').classList.add('active'); render(); }
  function close(){ document.getElementById('v16-milestone').classList.remove('active'); }
  function render(){
    var done=checkMilestones();
    var canvas=document.getElementById('v16-milestone-canvas');
    var ctx=canvas.getContext('2d');
    var W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(45,27,14,.6)';ctx.fillRect(0,0,W,H);
    ctx.font='bold 15px sans-serif';ctx.fillStyle='#f5deb3';ctx.textAlign='center';
    ctx.fillText('&#xAC74;&#xCD95; &#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; &#xD0C0;&#xC784;&#xB77C;&#xC778; ('+done.length+'/'+MILESTONES.length+')',W/2,28);
    var lineX=80,startY=50,gap=(H-80)/MILESTONES.length;
    ctx.beginPath();ctx.moveTo(lineX,startY);ctx.lineTo(lineX,startY+gap*(MILESTONES.length-1));
    ctx.strokeStyle='rgba(196,149,106,.3)';ctx.lineWidth=2;ctx.stroke();
    MILESTONES.forEach(function(ms,i){
      var y=startY+i*gap;
      var completed=done.indexOf(ms.id)!==-1;
      ctx.beginPath();ctx.arc(lineX,y,8,0,Math.PI*2);
      ctx.fillStyle=completed?'#4a7c59':'rgba(100,100,100,.4)';ctx.fill();
      ctx.strokeStyle=completed?'#6cb87a':'rgba(196,149,106,.2)';ctx.lineWidth=2;ctx.stroke();
      if(completed){
        ctx.fillStyle='#fff';ctx.font='bold 8px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
        ctx.fillText('&#x2713;',lineX,y);
      }
      ctx.fillStyle=completed?'#f5deb3':'#777';ctx.font=(completed?'bold ':'')+'12px sans-serif';ctx.textAlign='left';ctx.textBaseline='middle';
      ctx.fillText(ms.icon+' '+ms.name,lineX+20,y);
      ctx.fillStyle=completed?'#c4956a':'#555';ctx.font='10px sans-serif';
      ctx.fillText(ms.desc+' (+'+ms.xp+'XP)',lineX+20,y+14);
    });
    var totalXP=0; done.forEach(function(id){ MILESTONES.forEach(function(m){if(m.id===id) totalXP+=m.xp;}); });
    var pct=(done.length/MILESTONES.length*100).toFixed(0);
    var info=document.getElementById('v16-milestone-info');
    info.innerHTML='&#xB2EC;&#xC131;: <strong style="color:#f5deb3">'+done.length+'/'+MILESTONES.length+'</strong> ('+pct+'%) | &#xD68D;&#xB4DD; XP: <strong style="color:#4a7c59">'+totalXP+'</strong>';
    var stat=document.getElementById('v16-milestone-stat');
    stat.innerHTML='<div class="s"><div class="sv">'+done.length+'</div><div class="sl">&#xB2EC;&#xC131;</div></div>'+
      '<div class="s"><div class="sv">'+pct+'%</div><div class="sl">&#xC9C4;&#xD589;&#xB960;</div></div>'+
      '<div class="s"><div class="sv">'+totalXP+'</div><div class="sl">XP &#xD68D;&#xB4DD;</div></div>';
  }
  return {open:open,close:close,check:checkMilestones};
})();

// ── 12. Quiz +15 (165->180) ──
var v16Quiz = (function(){
  var NEW_Q = [
    {q:'&#xD55C;&#xC625;&#xC758; &#xAE30;&#xB465;&#xC744; &#xBC1B;&#xCE58;&#xB294; &#xB3CC;&#xC758; &#xC774;&#xB984;&#xC740;?',a:['&#xCD08;&#xC11D;','&#xC7A5;&#xB300;&#xC11D;','&#xAE30;&#xB2E8;&#xC11D;','&#xB9C8;&#xAC10;&#xC11D;'],c:0},
    {q:'&#xD55C;&#xC625;&#xC5D0;&#xC11C; &#xAC00;&#xC7A5; &#xB192;&#xC740; &#xC704;&#xCE58;&#xC758; &#xC218;&#xD3C9; &#xBD80;&#xC7AC;&#xB294;?',a:['&#xBCF4;','&#xB3C4;&#xB9AC;','&#xB300;&#xB4E4;&#xBCF4;','&#xCC98;&#xB9C8;'],c:2},
    {q:'PMV(Predicted Mean Vote)&#xC5D0;&#xC11C; 0&#xC740; &#xC5B4;&#xB5A4; &#xC0C1;&#xD0DC;&#xB97C; &#xC758;&#xBBF8;&#xD558;&#xB294;&#xAC00;?',a:['&#xB9E4;&#xC6B0; &#xB354;&#xC6C0;','&#xC7E5;&#xC801;','&#xB9E4;&#xC6B0; &#xCD94;&#xC6C0;','&#xBD88;&#xC7E5;&#xC801;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC758; &#xD48D;&#xD558;&#xC911;&#xC744; &#xC904;&#xC774;&#xAE30; &#xC704;&#xD55C; &#xBC30;&#xCE58; &#xBC29;&#xD5A5;&#xC740;?',a:['&#xBC14;&#xB78C;&#xACFC; &#xD3C9;&#xD589;','&#xBC14;&#xB78C;&#xACFC; &#xC9C1;&#xAC01;','&#xBC14;&#xB78C;&#xACFC; 45&#xB3C4;','&#xBC29;&#xD5A5; &#xBB34;&#xAD00;'],c:2},
    {q:'&#xD55C;&#xC625;&#xC758; &#xCC3D;&#xD638;&#xC9C0;&#xC758; &#xC8FC;&#xC7AC;&#xB8CC;&#xB294;?',a:['&#xC720;&#xB9AC;','&#xD55C;&#xC9C0;','&#xBE44;&#xB2D0;','&#xBA74;&#xC9C1;&#xBB3C;'],c:1},
    {q:'STC(Sound Transmission Class) &#xB4F1;&#xAE09;&#xC774; &#xB192;&#xC744;&#xC218;&#xB85D; &#xC758;&#xBBF8;&#xD558;&#xB294; &#xAC83;&#xC740;?',a:['&#xBC29;&#xC74C; &#xC131;&#xB2A5;&#xC774; &#xB098;&#xC058;&#xB2E4;','&#xBC29;&#xC74C; &#xC131;&#xB2A5;&#xC774; &#xC88B;&#xB2E4;','&#xB2E8;&#xC5F4; &#xC131;&#xB2A5;&#xC774; &#xC88B;&#xB2E4;','&#xD658;&#xAE30; &#xC131;&#xB2A5;&#xC774; &#xC88B;&#xB2E4;'],c:1},
    {q:'&#xD55C;&#xC625;&#xC758; &#xC9C0;&#xBD95; &#xAF2D;&#xB300;&#xAE30;&#xC5D0; &#xC788;&#xB294; &#xC7A5;&#xC2DD;&#xC744; &#xBB50;&#xB77C;&#xACE0; &#xD558;&#xB294;&#xAC00;?',a:['&#xB0C9;&#xB9C8;&#xB8E8;','&#xCD94;&#xB140;','&#xC6A9;&#xB9C8;&#xB8E8;','&#xBC15;&#xACF5;'],c:1},
    {q:'LEED &#xC778;&#xC99D;&#xC5D0;&#xC11C; &#xAC00;&#xC7A5; &#xB192;&#xC740; &#xB4F1;&#xAE09;&#xC740;?',a:['Gold','Silver','Platinum','Diamond'],c:2},
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC758; &#xC5F0;&#xAC04; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44;&#xC5D0;&#xC11C; &#xAC00;&#xC7A5; &#xD070; &#xBE44;&#xC911;&#xC744; &#xCC28;&#xC9C0;&#xD558;&#xB294; &#xAC83;&#xC740;?',a:['&#xC870;&#xBA85;','&#xD658;&#xAE30;','&#xB09C;&#xBC29;/&#xB0C9;&#xBC29;','&#xAE09;&#xD0D5;'],c:2},
    {q:'&#xD55C;&#xC625;&#xC5D0;&#xC11C; &#xBC29;&#xACFC; &#xBC29; &#xC0AC;&#xC774;&#xC758; &#xBAA9;&#xC870; &#xBC14;&#xB2E5;&#xC744; &#xBB50;&#xB77C;&#xACE0; &#xD558;&#xB294;&#xAC00;?',a:['&#xBB38;&#xC9C0;&#xBC29;','&#xB9C8;&#xB8E8;','&#xB300;&#xCCAD;','&#xD1F4;&#xB9C8;&#xB8E8;'],c:1},
    {q:'&#xAC00;&#xAD6C; &#xBC30;&#xCE58; &#xC2DC; &#xB3D9;&#xC120;(&#xC774;&#xB3D9;&#xACBD;&#xB85C;)&#xC758; &#xCD5C;&#xC18C; &#xAD8C;&#xC7A5; &#xD3ED;&#xC740;?',a:['50cm','70cm','90cm','120cm'],c:2},
    {q:'&#xD55C;&#xC625;&#xC758; &#xAE30;&#xB465;&#xC774; &#xC544;&#xB798;&#xB85C; &#xAC08;&#xC218;&#xB85D; &#xAD75;&#xC5B4;&#xC9C0;&#xB294; &#xD2B9;&#xC9D5;&#xC744; &#xBB50;&#xB77C;&#xACE0; &#xD558;&#xB294;&#xAC00;?',a:['&#xD718;&#xB9BC;','&#xBBFC;&#xD758;&#xB9BC;','&#xBC30;&#xD758;&#xB9BC;','&#xC190;&#xD758;&#xB9BC;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC5D0;&#xC11C; &#xC5F4;&#xAD50;(thermal bridge)&#xB780; &#xBB34;&#xC5C7;&#xC778;&#xAC00;?',a:['&#xB2E8;&#xC5F4;&#xC774; &#xB04A;&#xAE30;&#xB294; &#xBD80;&#xBD84;','&#xC5F4;&#xC774; &#xC0C8;&#xB294; &#xBD80;&#xBD84;','&#xC5F4;&#xC744; &#xCC28;&#xB2E8;&#xD558;&#xB294; &#xBD80;&#xBD84;','&#xC5F4;&#xC744; &#xBC18;&#xC0AC;&#xD558;&#xB294; &#xBD80;&#xBD84;'],c:1},
    {q:'&#xC804;&#xD1B5; &#xD55C;&#xC625;&#xC758; &#xBC29; &#xB09C;&#xBC29; &#xC2DC;&#xC2A4;&#xD15C;&#xC740;?',a:['&#xB77C;&#xB514;&#xC5D0;&#xC774;&#xD130;','&#xC628;&#xB3CC;','&#xBCF4;&#xC77C;&#xB7EC;','&#xD788;&#xD2B8;&#xD38C;&#xD504;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC758; &#xAE30;&#xCD08; &#xC2DC;&#xACF5; &#xC804; &#xC9C0;&#xBC18;&#xC744; &#xB2E4;&#xC9C0;&#xB294; &#xACFC;&#xC815;&#xC740;?',a:['&#xD130;&#xD30C;&#xAE30;','&#xAE30;&#xCD08;&#xACF5;&#xC0AC;','&#xCCA0;&#xADFC; &#xBC30;&#xCE58;','&#xD615;&#xD2C0; &#xC124;&#xCE58;'],c:0}
  ];
  function inject(){
    if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){
      NEW_Q.forEach(function(nq){
        var exists=false;
        window.quizQuestions.forEach(function(eq){ if(eq.q===nq.q) exists=true; });
        if(!exists) window.quizQuestions.push(nq);
      });
    }
  }
  return {inject:inject};
})();

// ── 13. Achievements +12 (158->170) ──
var v16Achieve = (function(){
  var ACHIEVES = [
    {id:'v16_wind_master',name:'&#xD48D;&#xD5A5; &#xB9C8;&#xC2A4;&#xD130;',icon:'&#x1F32C;',desc:'&#xD48D;&#xD5A5; &#xBD84;&#xC11D;&#xAE30; 4&#xACC4;&#xC808; &#xBAA8;&#xB450; &#xD655;&#xC778;'},
    {id:'v16_thermal_exp',name:'&#xC5F4;&#xC7E5;&#xC801; &#xC804;&#xBB38;&#xAC00;',icon:'&#x1F321;',desc:'&#xC2E4;&#xB0B4; &#xC5F4;&#xC7E5;&#xC801; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130; &#xCCB4;&#xD5D8;'},
    {id:'v16_level_3',name:'&#xBAA9;&#xC218; &#xB4F1;&#xAE09;',icon:'&#x1F3AF;',desc:'&#xAC74;&#xCD95; &#xB808;&#xBCA8; 3 &#xB2EC;&#xC131;'},
    {id:'v16_level_7',name:'&#xB300;&#xBAA9;&#xC7A5; &#xB4F1;&#xAE09;',icon:'&#x2B50;',desc:'&#xAC74;&#xCD95; &#xB808;&#xBCA8; 7 &#xB2EC;&#xC131;'},
    {id:'v16_furniture_5',name:'&#xAC00;&#xAD6C; &#xC0C1;&#xB2F4;&#xC0AC;',icon:'&#x1FA91;',desc:'&#xAC00;&#xAD6C; 5&#xAC1C; &#xBC30;&#xCE58;'},
    {id:'v16_furniture_full',name:'&#xACF5;&#xAC04; &#xD65C;&#xC6A9; &#xB300;&#xC0AC;',icon:'&#x1F4E6;',desc:'&#xACF5;&#xAC04; &#xD65C;&#xC6A9;&#xB960; 50% &#xB2EC;&#xC131;'},
    {id:'v16_cost_analyst',name:'&#xBE44;&#xC6A9; &#xBD84;&#xC11D;&#xAC00;',icon:'&#x1F4B0;',desc:'&#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xBE44;&#xAD50; &#xBD84;&#xC11D;&#xAE30; &#xC0AC;&#xC6A9;'},
    {id:'v16_anatomy_all',name:'&#xAD6C;&#xC870; &#xD574;&#xBD80;&#xD559;&#xC790;',icon:'&#x1F3E0;',desc:'&#xD55C;&#xC625; &#xAD6C;&#xC870; 12&#xBD80;&#xC704; &#xBAA8;&#xB450; &#xD559;&#xC2B5;'},
    {id:'v16_energy_saver',name:'&#xC5D0;&#xB108;&#xC9C0; &#xC808;&#xC57D;&#xAC00;',icon:'&#x26A1;',desc:'&#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; 3&#xC885; &#xBE44;&#xAD50; &#xC644;&#xB8CC;'},
    {id:'v16_milestone_10',name:'&#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; &#xC218;&#xC9D1;&#xAC00;',icon:'&#x1F3C6;',desc:'&#xB9C8;&#xC77C;&#xC2A4;&#xD1A4; 10&#xAC1C; &#xB2EC;&#xC131;'},
    {id:'v16_all_features',name:'v16 &#xC644;&#xC804;&#xC815;&#xBCF5;',icon:'&#x1F48E;',desc:'v16 &#xC804;&#xCCB4; 8&#xAC1C; &#xAE30;&#xB2A5; &#xBAA8;&#xB450; &#xCCB4;&#xD5D8;'},
    {id:'v16_quiz_expert',name:'&#xD035;&#xC988; &#xC804;&#xBB38;&#xAC00; v16',icon:'&#x1F4DD;',desc:'v16 &#xD035;&#xC988; 15&#xBB38; &#xC911; 12&#xBB38; &#xC774;&#xC0C1; &#xC815;&#xB2F5;'}
  ];
  function load(){
    try{ return JSON.parse(localStorage.getItem('hb_achievements')||'[]'); }catch(e){ return []; }
  }
  function unlock(id){
    var list=load();
    if(list.indexOf(id)!==-1) return;
    var a=null; ACHIEVES.forEach(function(ac){if(ac.id===id) a=ac;}); if(!a) return;
    list.push(id); localStorage.setItem('hb_achievements',JSON.stringify(list));
    if(typeof window.SFX!=='undefined'&&window.SFX.achievement) window.SFX.achievement();
    else v16SFX.milestone();
    var toast=document.getElementById('achToast');
    if(toast){
      toast.querySelector('.ach-icon').textContent=a.icon;
      toast.querySelector('.ach-name').textContent=a.name;
      toast.classList.add('show');
      setTimeout(function(){toast.classList.remove('show');},3000);
    }
  }
  function check(){
    if(localStorage.getItem('hb_wind_v16')) unlock('v16_wind_master');
    if(localStorage.getItem('hb_thermal_v16')) unlock('v16_thermal_exp');
    if(localStorage.getItem('hb_energy_v16')) unlock('v16_energy_saver');
    try{
      var f=JSON.parse(localStorage.getItem('hb_furniture_v16'));
      if(f&&f.placed){
        if(f.placed.length>=5) unlock('v16_furniture_5');
        var used=0;for(var r=0;r<12;r++)for(var c=0;c<12;c++)if(f.grid&&f.grid[r]&&f.grid[r][c]!==null)used++;
        if(used/144>=0.5) unlock('v16_furniture_full');
      }
    }catch(e){}
    unlock('v16_cost_analyst');
    try{
      var ms=JSON.parse(localStorage.getItem('hb_milestones_v16')||'[]');
      if(ms.length>=10) unlock('v16_milestone_10');
    }catch(e){}
    var allUsed=localStorage.getItem('hb_wind_v16')&&localStorage.getItem('hb_thermal_v16')&&
      localStorage.getItem('hb_energy_v16')&&localStorage.getItem('hb_furniture_v16');
    if(allUsed) unlock('v16_all_features');
  }
  return {check:check,unlock:unlock,load:load};
})();

// ── 14. Bottom Navigation Bar v16 ──
(function(){
  function inject(){
    var bar=document.createElement('div');
    bar.id='v16-nav';
    bar.style.cssText='position:fixed;bottom:0;left:0;right:0;height:48px;background:linear-gradient(180deg,rgba(45,27,14,.97),rgba(30,18,8,.99));border-top:1px solid rgba(196,149,106,.3);display:flex;align-items:center;justify-content:space-around;z-index:4100;padding:0 4px';
    var actions=[
      {icon:'🌬️',label:'풍향',fn:function(){v16Wind.open();}},
      {icon:'🌡️',label:'열쟥적',fn:function(){v16Thermal.open();}},
      {icon:'🎯',label:'레벨',fn:function(){v16Level.open();}},
      {icon:'🪑',label:'가구',fn:function(){v16Furniture.open();}},
      {icon:'💰',label:'비용',fn:function(){v16CostCmp.open();}},
      {icon:'🏠',label:'해부도',fn:function(){v16Anatomy.open();}},
      {icon:'⚡',label:'에너지',fn:function(){v16Energy.open();}},
      {icon:'🏆',label:'마일스톤',fn:function(){v16Milestone.open();}}
    ];
    actions.forEach(function(a){
      var btn=document.createElement('button');
      btn.style.cssText='background:none;border:none;color:#c4956a;font-size:10px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;padding:4px 2px;font-family:inherit;min-width:0;flex:1';
      btn.innerHTML='<span style="font-size:18px">'+a.icon+'</span><span>'+a.label+'</span>';
      btn.onclick=a.fn;
      bar.appendChild(btn);
    });
    document.body.appendChild(bar);
    var v15nav=document.getElementById('v15-nav');
    if(v15nav) v15nav.style.bottom='48px';
    var v14nav=document.getElementById('v14-nav');
    if(v14nav) v14nav.style.bottom='96px';
    var v13nav=document.getElementById('v13-nav');
    if(v13nav) v13nav.style.bottom='144px';
    var v12nav=document.getElementById('v12-nav');
    if(v12nav) v12nav.style.bottom='192px';
    var v11fab=document.getElementById('v11-fab');
    if(v11fab) v11fab.style.bottom='246px';
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded',inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.code){
      case 'KeyW': e.preventDefault(); v16Wind.open(); break;
      case 'KeyX': e.preventDefault(); v16Thermal.open(); break;
      case 'KeyL': e.preventDefault(); v16Level.open(); break;
      case 'KeyF': e.preventDefault(); v16Furniture.open(); break;
      case 'KeyG': e.preventDefault(); v16CostCmp.open(); break;
      case 'KeyH': e.preventDefault(); v16Anatomy.open(); break;
      case 'KeyE': e.preventDefault(); v16Energy.open(); break;
      case 'KeyI': e.preventDefault(); v16Milestone.open(); break;
    }
  });
})();

// ── 16. Panel Close helpers ──
window.v16Close = function(panel){
  var map={'wind':v16Wind,'thermal':v16Thermal,'level':v16Level,'furniture':v16Furniture,'costcmp':v16CostCmp,'anatomy':v16Anatomy,'energy':v16Energy,'milestone':v16Milestone};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){
  function tryInject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ v16Quiz.inject(); return true; } return false; }
  if(!tryInject()){ var ci=setInterval(function(){ if(tryInject()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig=window.showComplete;
    if(typeof orig!=='function') return false;
    if(window.__v16Hooked) return true;
    window.__v16Hooked=true;
    var prev=window.showComplete;
    window.showComplete=function(){ prev.apply(this,arguments); v16Achieve.check(); v16Milestone.check(); };
    return true;
  }
  if(!hookComplete()){ var ci=setInterval(function(){ if(hookComplete()) clearInterval(ci); },500); setTimeout(function(){clearInterval(ci);},10000); }
})();

// ── 19. Initial load + checks ──
(function(){
  setTimeout(function(){ v16Achieve.check(); v16Milestone.check(); },5000);
})();

// end v16 guard
}

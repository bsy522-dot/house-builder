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
      '<h2>&#x1F3D7;&#xFE0F; &#xAC74;&#xCD95; &#xAD6C;&#xC870; &#xD558;&#xC911; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>6&#xC885; &#xAD6C;&#xC870; &#xC694;&#xC18C;&#xC758; &#xD558;&#xC911; &#xBD84;&#xD3EC; &#xBD84;&#xC11D;</p>' +
      '<div class="v20-tabs" id="v20-ld-tabs"></div>' +
      '<canvas id="v20-ld-canvas" class="v20-canvas" width="620" height="400"></canvas>' +
      '<div id="v20-ld-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-ld-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Load.randomize()">&#xBB34;&#xC791;&#xC704; &#xD558;&#xC911;</button> <button class="v20-btn-sm" onclick="v20Load.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v20-close" onclick="v20Load.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-ondol" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x1F525; &#xC804;&#xD1B5; &#xC628;&#xB3CC; &#xC2DC;&#xC2A4;&#xD15C; &#xC124;&#xACC4;</h2>' +
      '<p>8&#xC885; &#xC628;&#xB3CC; &#xC720;&#xD615;&#xBCC4; &#xC5F4;&#xD6A8;&#xC728; &#xBD84;&#xC11D;</p>' +
      '<div class="v20-tabs" id="v20-od-tabs"></div>' +
      '<canvas id="v20-od-canvas" class="v20-canvas" width="600" height="380"></canvas>' +
      '<div id="v20-od-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-od-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Ondol.randomize()">&#xBB34;&#xC791;&#xC704; &#xC5F4;&#xD6A8;&#xC728;</button> <button class="v20-btn-sm" onclick="v20Ondol.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v20-close" onclick="v20Ondol.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-disaster" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x26A0;&#xFE0F; &#xAC74;&#xCD95; &#xC7AC;&#xD574; &#xBCF5;&#xAD6C; &#xD50C;&#xB798;&#xB108;</h2>' +
      '<p>8&#xC885; &#xC7AC;&#xD574;&#xC758; &#xB300;&#xBE44;/&#xBCF5;&#xAD6C; &#xC804;&#xB7B5;</p>' +
      '<div class="v20-tabs" id="v20-ds-tabs"></div>' +
      '<canvas id="v20-ds-canvas" class="v20-canvas" width="620" height="380"></canvas>' +
      '<div id="v20-ds-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-ds-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Disaster.simulate()">&#xC7AC;&#xD574; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;</button> <button class="v20-btn-sm" onclick="v20Disaster.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v20-close" onclick="v20Disaster.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-humidity" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x1F4A7; &#xC2E4;&#xB0B4; &#xC2B5;&#xB3C4; &#xC7C8;&#xC801; &#xB9F5;</h2>' +
      '<p>8&#xC2E4; 4&#xACC4;&#xC808;&#xBCC4; &#xC2B5;&#xB3C4; &#xD788;&#xD2B8;&#xB9F5;</p>' +
      '<canvas id="v20-hm-canvas" class="v20-canvas" width="600" height="380"></canvas>' +
      '<div id="v20-hm-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-hm-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Humidity.randomize()">&#xBB34;&#xC791;&#xC704; &#xC2B5;&#xB3C4;</button> <button class="v20-btn-sm" onclick="v20Humidity.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v20-close" onclick="v20Humidity.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-aesthetic" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x1F3A8; &#xAC74;&#xCD95; &#xBBF8;&#xD559; &#xBE44;&#xC728; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>8&#xAC74;&#xBB3C;&#xC758; &#xBBF8;&#xD559;&#xC801; &#xBE44;&#xC728; &#xBE44;&#xAD50;</p>' +
      '<div class="v20-tabs" id="v20-ae-tabs"></div>' +
      '<canvas id="v20-ae-canvas" class="v20-canvas" width="620" height="400"></canvas>' +
      '<div id="v20-ae-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-ae-stat"></div>' +
      '<button class="v20-close" onclick="v20Aesthetic.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-fence" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x1F3EF; &#xC804;&#xD1B5; &#xB2F4;&#xC7A5; &#xC591;&#xC2DD; &#xAC00;&#xC774;&#xB4DC;</h2>' +
      '<p>10&#xC885; &#xC804;&#xD1B5; &#xB2F4;&#xC7A5; &#xBE44;&#xAD50; &#xBD84;&#xC11D;</p>' +
      '<div class="v20-tabs" id="v20-fn-tabs"></div>' +
      '<canvas id="v20-fn-canvas" class="v20-canvas" width="600" height="380"></canvas>' +
      '<div id="v20-fn-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-fn-stat"></div>' +
      '<button class="v20-close" onclick="v20Fence.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-energy" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x26A1; &#xAC74;&#xCD95; &#xC5D0;&#xB108;&#xC9C0; &#xB4F1;&#xAE09; &#xC2DC;&#xBBAC;</h2>' +
      '<p>6&#xB4F1;&#xAE09; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728; Radar &#xBD84;&#xC11D;</p>' +
      '<div class="v20-tabs" id="v20-eg-tabs"></div>' +
      '<canvas id="v20-eg-canvas" class="v20-canvas" width="620" height="380"></canvas>' +
      '<div id="v20-eg-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-eg-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Energy.simulate()">&#xC5D0;&#xB108;&#xC9C0; &#xC2DC;&#xBBAC;</button> <button class="v20-btn-sm" onclick="v20Energy.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v20-close" onclick="v20Energy.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v20-compat" class="v20-panel"><div class="v20-box">' +
      '<h2>&#x1F9F1; &#xAC74;&#xCD95; &#xC790;&#xC7AC; &#xD638;&#xD658;&#xC131; &#xB9E4;&#xD2B8;&#xB9AD;&#xC2A4;</h2>' +
      '<p>8&#xC790;&#xC7AC; x 8&#xC18D;&#xC131; &#xD638;&#xD658;&#xC131; &#xD788;&#xD2B8;&#xB9F5;</p>' +
      '<canvas id="v20-cm-canvas" class="v20-canvas" width="620" height="400"></canvas>' +
      '<div id="v20-cm-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v20-stat" id="v20-cm-stat"></div>' +
      '<div style="text-align:center"><button class="v20-btn-sm" onclick="v20Compat.randomize()">&#xBB34;&#xC791;&#xC704; &#xD638;&#xD658;&#xC131;</button> <button class="v20-btn-sm" onclick="v20Compat.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v20-close" onclick="v20Compat.close()">&#xB2EB;&#xAE30;</button>' +
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
    {name:'&#xBCF4;(Beam)',nameK:'보(Beam)',dead:85,live:60,wind:25,snow:15,seismic:30,temp:10,desc:'&#xC218;&#xD3C9; &#xBD80;&#xC7AC;&#xB85C; &#xC9C0;&#xBD95;/&#xBC14;&#xB2E5; &#xD558;&#xC911;&#xC744; &#xAE30;&#xB465;&#xC73C;&#xB85C; &#xC804;&#xB2EC;. &#xD734; &#xBAA8;&#xBA58;&#xD2B8;&#xC640; &#xC804;&#xB2E8;&#xB825;&#xC774; &#xD575;&#xC2EC; &#xC124;&#xACC4; &#xC694;&#xC18C;.'},
    {name:'&#xAE30;&#xB465;(Column)',nameK:'기둥(Column)',dead:95,live:40,wind:35,snow:10,seismic:45,temp:8,desc:'&#xC218;&#xC9C1; &#xBD80;&#xC7AC;&#xB85C; &#xC555;&#xCD95; &#xD558;&#xC911; &#xB2F4;&#xB2F9;. &#xC88C;&#xAD74; &#xBC29;&#xC9C0;&#xAC00; &#xD575;&#xC2EC;&#xC774;&#xBA70; &#xC7AC;&#xB8CC;/&#xB2E8;&#xBA74;&#xC801;&#xC774; &#xC911;&#xC694;.'},
    {name:'&#xBCBD;&#xCCB4;(Wall)',nameK:'벽체(Wall)',dead:70,live:30,wind:50,snow:5,seismic:55,temp:15,desc:'&#xC218;&#xC9C1;/&#xC218;&#xD3C9; &#xD558;&#xC911; &#xBAA8;&#xB450; &#xC800;&#xD56D;. &#xB0B4;&#xB825;&#xBCBD;&#xC740; &#xAD6C;&#xC870; &#xD575;&#xC2EC;&#xC73C;&#xB85C; &#xD568;&#xBD80;&#xB85C; &#xCCA0;&#xAC70; &#xBD88;&#xAC00;.'},
    {name:'&#xD2B8;&#xB7EC;&#xC2A4;(Truss)',nameK:'트러스(Truss)',dead:50,live:20,wind:40,snow:45,seismic:20,temp:12,desc:'&#xC0BC;&#xAC01;&#xD615; &#xAD6C;&#xC870;&#xBB3C;&#xB85C; &#xC9C0;&#xBD95; &#xD558;&#xC911; &#xBD84;&#xC0B0;. &#xACBD;&#xB7C9;&#xC774;&#xBA70; &#xB113;&#xC740; &#xACF5;&#xAC04;&#xC744; &#xAE30;&#xB465; &#xC5C6;&#xC774; &#xC9C0;&#xD0F1;.'},
    {name:'&#xC2AC;&#xB798;&#xBE0C;(Slab)',nameK:'슬래브(Slab)',dead:90,live:75,wind:10,snow:30,seismic:25,temp:18,desc:'&#xBC14;&#xB2E5;/&#xC9C0;&#xBD95; &#xD3C9;&#xD310; &#xAD6C;&#xC870;. &#xC0AC;&#xC6A9; &#xD558;&#xC911;&#xC744; &#xC9C1;&#xC811; &#xBC1B;&#xC544; &#xBCF4;&#xC640; &#xAE30;&#xB465;&#xC5D0; &#xC804;&#xB2EC;.'},
    {name:'&#xAE30;&#xCD08;(Foundation)',nameK:'기초(Foundation)',dead:100,live:45,wind:20,snow:8,seismic:60,temp:5,desc:'&#xBAA8;&#xB4E0; &#xC0C1;&#xBD80; &#xD558;&#xC911;&#xC744; &#xC9C0;&#xBC18;&#xC5D0; &#xC804;&#xB2EC;. &#xC9C0;&#xB0B4;&#xB825;/&#xCE68;&#xD558; &#xBC29;&#xC9C0;&#xAC00; &#xD575;&#xC2EC; &#xC124;&#xACC4; &#xC694;&#xC18C;.'}
  ];
  var types=['&#xACE0;&#xC815;(Dead)','&#xD65C;(Live)','&#xD48D;(Wind)','&#xC124;(Snow)','&#xC9C0;&#xC9C4;(Seismic)','&#xC628;&#xB3C4;(Temp)'];
  var colors=['#c4956a','#8bc49a','#6ab0c4','#b0b0e0','#e07070','#e0c070'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-ld-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3'; ctx.font='bold 14px sans-serif'; ctx.textAlign='center';
    ctx.fillText('&#xAD6C;&#xC870; &#xC694;&#xC18C;&#xBCC4; &#xD558;&#xC911; &#xBD84;&#xD3EC; (&#xC2A4;&#xD0DD; &#xBC14;&#xCC28;&#xD2B8;)',W/2,28);
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
        st.innerHTML='<div class="s"><div class="sv">'+t2+'kN</div><div class="sl">&#xCD1D; &#xD558;&#xC911;</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">&#xAD6C;&#xC870; &#xB4F1;&#xAE09;</div></div><div class="s"><div class="sv">'+Math.round(d2.dead/t2*100)+'%</div><div class="sl">&#xACE0;&#xC815;&#xD558;&#xC911;&#xBE44;</div></div>';
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
    {name:'&#xC804;&#xD1B5; &#xC544;&#xAD81;&#xC774;(&#xAD74;&#xB73B;)',nameK:'전통 아궁이(굴뚝)',axes:[90,60,40,85,95,70],desc:'&#xC544;&#xAD81;&#xC774;&#xC5D0;&#xC11C; &#xBD88;&#xC744; &#xD53C;&#xC6B0;&#xACE0; &#xAD74;&#xB73B;&#xC73C;&#xB85C; &#xC5F0;&#xAE30;&#xB97C; &#xBC30;&#xCD9C;. &#xBD80;&#xB12C;&#xBA38;&#xC774;&#xB77C; &#xBD88;&#xB9AC;&#xBA70; &#xBC14;&#xB2E5; &#xC804;&#xCCB4;&#xC5D0; &#xACE0;&#xB978; &#xC5F4;&#xC744; &#xC804;&#xB2EC;.'},
    {name:'&#xAC1C;&#xB7C9; &#xC628;&#xB3CC;',nameK:'개량 온돌',axes:[75,70,60,70,80,65],desc:'&#xC804;&#xD1B5; &#xC628;&#xB3CC;&#xC758; &#xC6D0;&#xB9AC;&#xB97C; &#xBCF4;&#xC874;&#xD558;&#xBA74;&#xC11C; &#xB0B4;&#xC5F4;&#xC131; &#xD5A5;&#xC0C1;. &#xCF58;&#xD06C;&#xB9AC;&#xD2B8; &#xBC14;&#xB2E5;&#xACFC; &#xB2E8;&#xC5F4;&#xC7AC;&#xB97C; &#xC870;&#xD569;.'},
    {name:'&#xC628;&#xC218; &#xBC14;&#xB2E5;&#xB09C;&#xBC29;',nameK:'온수 바닥난방',axes:[60,85,80,50,60,90],desc:'&#xBCF4;&#xC77C;&#xB7EC;&#xB85C; &#xB370;&#xC6B4; &#xBB3C;&#xC744; &#xBC14;&#xB2E5; &#xBC30;&#xAD00;&#xC73C;&#xB85C; &#xC21C;&#xD658;. &#xD604;&#xB300; &#xC544;&#xD30C;&#xD2B8;&#xC758; &#xD45C;&#xC900; &#xB09C;&#xBC29;&#xBC29;&#xC2DD;.'},
    {name:'&#xC804;&#xAE30; &#xD544;&#xB984; &#xB09C;&#xBC29;',nameK:'전기 필름 난방',axes:[45,80,90,30,40,85],desc:'&#xC804;&#xAE30; &#xC800;&#xD56D; &#xD544;&#xB984;&#xC744; &#xBC14;&#xB2E5;&#xC5D0; &#xC124;&#xCE58;. &#xC815;&#xBC00; &#xC628;&#xB3C4; &#xC81C;&#xC5B4;&#xAC00; &#xAC00;&#xB2A5;&#xD558;&#xB098; &#xC804;&#xAE30;&#xC138;&#xAC00; &#xB192;&#xC744; &#xC218; &#xC788;&#xC74C;.'},
    {name:'&#xC9C0;&#xC5F4; &#xD788;&#xD2B8;&#xD38C;&#xD504;',nameK:'지열 히트펌프',axes:[55,90,95,65,50,80],desc:'&#xC9C0;&#xD558; &#xC5F4;&#xC744; &#xC774;&#xC6A9;&#xD55C; &#xACE0;&#xD6A8;&#xC728; &#xB09C;&#xBC29;. &#xCD08;&#xAE30; &#xD22C;&#xC790; &#xBE44;&#xC6A9;&#xC774; &#xB192;&#xC73C;&#xB098; &#xC6B4;&#xC601;&#xBE44; &#xC808;&#xAC10; &#xD6A8;&#xACFC; &#xD0C1;&#xC6D4;.'},
    {name:'&#xD669;&#xD1A0; &#xCD95;&#xC5F4; &#xC628;&#xB3CC;',nameK:'황토 축열 온돌',axes:[80,55,45,90,90,55],desc:'&#xD669;&#xD1A0; &#xBC14;&#xB2E5;&#xC774; &#xC5F4;&#xC744; &#xCD95;&#xC801;&#xD588;&#xB2E4;&#xAC00; &#xC11C;&#xC11C;&#xD788; &#xBC29;&#xCD9C;. &#xC6D0;&#xC801;&#xC678;&#xC120; &#xD6A8;&#xACFC;&#xC640; &#xD56D;&#xADE0; &#xC791;&#xC6A9;&#xC774; &#xC788;&#xC74C;.'},
    {name:'&#xD0DC;&#xC591;&#xC5F4; &#xC628;&#xC218;',nameK:'태양열 온수',axes:[40,95,85,60,55,75],desc:'&#xD0DC;&#xC591;&#xC5D0;&#xB108;&#xC9C0;&#xB85C; &#xBB3C;&#xC744; &#xB370;&#xC6CC; &#xBC14;&#xB2E5;&#xB09C;&#xBC29;&#xC5D0; &#xC0AC;&#xC6A9;. &#xCE5C;&#xD658;&#xACBD;&#xC801;&#xC774;&#xB098; &#xB0A0;&#xC528;/&#xACC4;&#xC808; &#xC758;&#xC874;&#xC131;.'},
    {name:'&#xAD6C;&#xB4E4;&#xC7A5; &#xBCF5;&#xC0AC; &#xC628;&#xB3CC;',nameK:'구들장 복사 온돌',axes:[85,50,35,92,98,60],desc:'&#xB113;&#xC740; &#xAD6C;&#xB4E4;&#xC7A5; &#xB3CC;&#xC774; &#xBCF5;&#xC0AC;&#xC5F4;&#xC744; &#xBC29;&#xCD9C;. &#xD55C;&#xBC88; &#xB2EC;&#xAD6C;&#xBA74; 24&#xC2DC;&#xAC04; &#xC774;&#xC0C1; &#xB530;&#xB73B;&#xD568;&#xC744; &#xC720;&#xC9C0;.'}
  ];
  var axisLabels=['&#xC5F4;&#xD6A8;&#xC728;','&#xCE5C;&#xD658;&#xACBD;','&#xC815;&#xBC00;&#xC81C;&#xC5B4;','&#xCD95;&#xC5F4;&#xC131;','&#xC804;&#xD1B5;&#xC131;','&#xBE44;&#xC6A9;&#xD6A8;&#xC728;'];
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
    if(st) st.innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#xD3C9;&#xADE0; &#xD6A8;&#xC728;</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">&#xC885;&#xD569; &#xB4F1;&#xAE09;</div></div><div class="s"><div class="sv">'+Math.max.apply(null,t.axes)+'</div><div class="sl">&#xCD5C;&#xACE0;&#xCE58;</div></div>';
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
    {name:'&#xC9C0;&#xC9C4;',nameK:'지진',prep:75,response:60,recovery:50,cost:90,time:85,risk:80,tip:'&#xB0B4;&#xC9C4;&#xC124;&#xACC4; &#xAE30;&#xC900; &#xC900;&#xC218;, &#xBCF4;&#xAC15; &#xC810;&#xAC80;'},
    {name:'&#xD64D;&#xC218;',nameK:'홍수',prep:65,response:70,recovery:60,cost:70,time:75,risk:70,tip:'&#xBC30;&#xC218; &#xC2DC;&#xC2A4;&#xD15C; &#xC810;&#xAC80;, &#xBC29;&#xC218;&#xBCBD; &#xC124;&#xCE58;'},
    {name:'&#xD0DC;&#xD48D;',nameK:'태풍',prep:70,response:65,recovery:55,cost:65,time:70,risk:75,tip:'&#xC9C0;&#xBD95;/&#xCC3D;&#xD638; &#xBCF4;&#xAC15;, &#xBC29;&#xD48D;&#xB9BC; &#xC870;&#xC131;'},
    {name:'&#xD654;&#xC7AC;',nameK:'화재',prep:80,response:90,recovery:45,cost:85,time:60,risk:85,tip:'&#xBC29;&#xD654; &#xC790;&#xC7AC; &#xC0AC;&#xC6A9;, &#xC2A4;&#xD504;&#xB9C1;&#xD074;&#xB7EC; &#xC124;&#xCE58;'},
    {name:'&#xC0B0;&#xC0AC;&#xD0DC;',nameK:'산사태',prep:55,response:50,recovery:70,cost:80,time:90,risk:65,tip:'&#xC625;&#xBCBD; &#xBCF4;&#xAC15;, &#xBC30;&#xC218;&#xB85C; &#xC815;&#xBE44;'},
    {name:'&#xB3D9;&#xD30C;',nameK:'동파',prep:60,response:40,recovery:30,cost:40,time:35,risk:50,tip:'&#xBC30;&#xAD00; &#xBCF4;&#xC628;&#xC7AC; &#xC124;&#xCE58;, &#xB3D9;&#xD30C;&#xBC29;&#xC9C0; &#xD788;&#xD130;'},
    {name:'&#xCE68;&#xD558;',nameK:'침하',prep:50,response:35,recovery:80,cost:95,time:95,risk:60,tip:'&#xAE30;&#xCD08; &#xBCF4;&#xAC15;, &#xADF8;&#xB77C;&#xC6B0;&#xD305; &#xACF5;&#xBC95;'},
    {name:'&#xB099;&#xB8B0;',nameK:'낙뢰',prep:45,response:55,recovery:25,cost:35,time:30,risk:55,tip:'&#xD53C;&#xB8B0;&#xCE68; &#xC124;&#xCE58;, &#xC11C;&#xC9C0;&#xBCF4;&#xD638;&#xAE30;(SPD)'}
  ];
  var metrics=['&#xB300;&#xBE44;&#xB3C4;','&#xB300;&#xC751;&#xB825;','&#xBCF5;&#xAD6C;&#xAE30;&#xAC04;','&#xBE44;&#xC6A9;','&#xC18C;&#xC694;&#xC2DC;&#xAC04;','&#xC704;&#xD5D8;&#xB3C4;'];
  var mColors=['#8bc49a','#6ab0c4','#e0c070','#e07070','#b0b0e0','#c4956a'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-ds-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('&#xC7AC;&#xD574;&#xBCC4; &#xB300;&#xBE44;/&#xBCF5;&#xAD6C; &#xC9C0;&#xD45C;',W/2,24);
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
    ctx.fillText('&#xD301;: '+d.tip,pad,H-16);
    var info=document.getElementById('v20-ds-info');
    if(info) info.innerHTML='<b style="color:#f5deb3">'+d.nameK+' &#xBCF5;&#xAD6C; &#xC804;&#xB7B5;</b><br>&#xB300;&#xBE44;&#xB3C4;: '+d.prep+'% | &#xB300;&#xC751;&#xB825;: '+d.response+'% | &#xC704;&#xD5D8;&#xB3C4;: '+d.risk+'%';
    var avg=Math.round(vals.reduce(function(a,b){return a+b;},0)/vals.length);
    var grade=avg>=75?'S':avg>=60?'A':avg>=45?'B':avg>=30?'C':'D';
    var st=document.getElementById('v20-ds-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+d.nameK+'</div><div class="sl">&#xC7AC;&#xD574; &#xC720;&#xD615;</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">&#xC885;&#xD569; &#xB4F1;&#xAE09;</div></div><div class="s"><div class="sv">'+avg+'%</div><div class="sl">&#xD3C9;&#xADE0; &#xC9C0;&#xD45C;</div></div>';
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
  var rooms=['&#xAC70;&#xC2E4;','&#xCE68;&#xC2E4;','&#xC8FC;&#xBC29;','&#xC695;&#xC2E4;','&#xC11C;&#xC7AC;','&#xB2E4;&#xC6A9;&#xB3C4;','&#xB2E4;&#xB77D;','&#xCC3D;&#xACE0;'];
  var seasons=['&#xBD04;','&#xC5EC;&#xB984;','&#xAC00;&#xC744;','&#xACA8;&#xC6B8;'];
  var vals=[[48,65,45,32],[50,70,42,28],[55,80,50,35],[60,85,55,40],[45,60,40,30],[42,55,38,25],[38,50,35,22],[35,45,32,20]];
  function draw(){
    var c=document.getElementById('v20-hm-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('&#xC2E4;&#xB0B4; &#xC2B5;&#xB3C4; &#xC7C8;&#xC801; &#xD788;&#xD2B8;&#xB9F5; (8&#xC2E4; x 4&#xACC4;&#xC808;)',W/2,24);
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
    var legend=[{c:'rgba(100,150,220,.85)',l:'<40% &#xAC74;&#xC870;'},{c:'rgba(80,180,120,.85)',l:'40-50% &#xC7C8;&#xC801;'},{c:'rgba(200,180,60,.85)',l:'50-60% &#xBCF4;&#xD1B5;'},{c:'rgba(220,130,50,.85)',l:'60-70% &#xC2B5;&#xD568;'},{c:'rgba(200,60,60,.85)',l:'>70% &#xACFC;&#xC2B5;'}];
    for(var k=0;k<legend.length;k++){
      ctx.fillStyle=legend[k].c;ctx.fillRect(padL+k*100,H-20,12,12);
      ctx.fillStyle='#c4956a';ctx.fillText(legend[k].l,padL+k*100+16,H-10);
    }
    var totalOk=0,totalBad=0;
    for(var i=0;i<rooms.length;i++) for(var j=0;j<seasons.length;j++){ if(vals[i][j]>=40&&vals[i][j]<=55) totalOk++; else totalBad++; }
    var info=document.getElementById('v20-hm-info');
    if(info) info.innerHTML='&#xC7C8;&#xC801; &#xAD6C;&#xAC04;(40-55%): <b>'+totalOk+'</b>&#xACF3; | &#xBD80;&#xC801;&#xD569;: <b>'+totalBad+'</b>&#xACF3; | &#xCD1D; 32&#xCE21;&#xC815;&#xC810;';
    var st=document.getElementById('v20-hm-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+totalOk+'</div><div class="sl">&#xC7C8;&#xC801; &#xAD6C;&#xAC04;</div></div><div class="s"><div class="sv">'+totalBad+'</div><div class="sl">&#xBD80;&#xC801;&#xD569;</div></div><div class="s"><div class="sv">'+Math.round(totalOk/32*100)+'%</div><div class="sl">&#xC7C8;&#xC801;&#xB960;</div></div>';
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
    {name:'&#xBD88;&#xAD6D;&#xC0AC; &#xBB34;&#xB7C9;&#xC218;&#xC804;',nameK:'불국사 무량수전',ratios:[92,88,95,90,85,80],desc:'&#xC2E0;&#xB77C; &#xD669;&#xAE08;&#xAE30; &#xAC74;&#xCD95;. &#xD669;&#xAE08;&#xBE44;(1.618)&#xC5D0; &#xADFC;&#xC811;&#xD55C; &#xC815;&#xBA74; &#xBE44;&#xC728;. &#xBBA8;&#xB4C8;&#xB7EC; &#xC124;&#xACC4;&#xC758; &#xC815;&#xC218;.'},
    {name:'&#xBD80;&#xC11D;&#xC0AC; &#xBB34;&#xC7A5;&#xC218;&#xC804;',nameK:'부석사 무장수전',ratios:[95,90,88,92,90,82],desc:'&#xACE0;&#xB824; &#xCD08;&#xAE30; &#xBAA9;&#xC870;&#xAC74;&#xCD95;&#xC758; &#xAC78;&#xC791;. &#xBC30;&#xD761;&#xB9BC; &#xAE30;&#xB465;&#xACFC; &#xD314;&#xC791;&#xC9C0;&#xBD95;&#xC758; &#xBBF8;&#xD559;.'},
    {name:'&#xCC3D;&#xB355;&#xAD81; &#xC778;&#xC815;&#xC804;',nameK:'창덕궁 인정전',ratios:[88,92,90,85,95,88],desc:'&#xC870;&#xC120; &#xAD81;&#xAD90; &#xAC74;&#xCD95;. &#xC790;&#xC5F0; &#xC9C0;&#xD615;&#xACFC; &#xC870;&#xD654;&#xB85C;&#xC6B4; &#xBC30;&#xCE58;. &#xC720;&#xB124;&#xC2A4;&#xCF54; &#xC138;&#xACC4;&#xC720;&#xC0B0;.'},
    {name:'&#xC548;&#xB3D9; &#xD558;&#xD68C;&#xB9C8;&#xC744; &#xD55C;&#xC625;',nameK:'안동 하회마을 한옥',ratios:[82,78,85,88,92,75],desc:'&#xC804;&#xD1B5; &#xBBFC;&#xAC00; &#xD55C;&#xC625;. &#xD48D;&#xC218;&#xC9C0;&#xB9AC;&#xC5D0; &#xB530;&#xB978; &#xC790;&#xC5F0;&#xCE5C;&#xD654;&#xC801; &#xBC30;&#xCE58;.'},
    {name:'&#xC885;&#xBB18;',nameK:'종묘',ratios:[85,95,92,80,88,90],desc:'&#xC870;&#xC120; &#xC655;&#xC2E4; &#xC0AC;&#xB2F9;. &#xC218;&#xD3C9; &#xBC18;&#xBCF5;&#xC758; &#xC7A5;&#xC5C4;&#xD55C; &#xBBF8;&#xD559;. &#xC138;&#xACC4;&#xC720;&#xC0B0;.'},
    {name:'&#xACBD;&#xBCF5;&#xAD81; &#xADFC;&#xC815;&#xC804;',nameK:'경복궁 근정전',ratios:[90,85,88,92,90,95],desc:'&#xC870;&#xC120; &#xC815;&#xAD81; &#xC815;&#xC804;. &#xC774;&#xC911; &#xAE30;&#xB2E8;&#xC758; &#xC704;&#xC5C4;. &#xB2E8;&#xCCAD;&#xC758; &#xD654;&#xB824;&#xD568;.'},
    {name:'&#xC11C;&#xC6D0; &#xB300;&#xC131;&#xC804;',nameK:'서원 대성전',ratios:[78,82,80,75,85,72],desc:'&#xC720;&#xAD50; &#xAD50;&#xC721;&#xAE30;&#xAD00;. &#xC808;&#xC81C;&#xB41C; &#xC7A5;&#xC2DD;. &#xD559;&#xBB38;&#xC801; &#xAE30;&#xD488;&#xC758; &#xAC74;&#xCD95;&#xBBF8;.'},
    {name:'&#xD604;&#xB300; &#xD55C;&#xC625; &#xD638;&#xD154;',nameK:'현대 한옥 호텔',ratios:[80,88,90,82,78,85],desc:'&#xC804;&#xD1B5;&#xACFC; &#xD604;&#xB300;&#xC758; &#xC735;&#xD569;. &#xCCA0;&#xACE8; &#xAD6C;&#xC870;&#xC5D0; &#xC804;&#xD1B5; &#xC9C0;&#xBD95;. &#xC2E0;&#xD55C;&#xC625;&#xC758; &#xBBF8;&#xD559;.'}
  ];
  var axes=['&#xD669;&#xAE08;&#xBE44;','&#xBE44;&#xB840;&#xAC10;','&#xADE0;&#xD615;&#xBBF8;','&#xC804;&#xD1B5;&#xC131;','&#xC870;&#xD654;&#xBBF8;','&#xC7A5;&#xC2DD;&#xBBF8;'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-ae-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('&#xAC74;&#xCD95; &#xBBF8;&#xD559; &#xBE44;&#xC728; &#xBD84;&#xC11D;',W/2,24);
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
    if(st) st.innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#xD3C9;&#xADE0; &#xBBF8;&#xD559;&#xC810;</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">&#xBBF8;&#xD559; &#xB4F1;&#xAE09;</div></div><div class="s"><div class="sv">'+Math.max.apply(null,bd.ratios)+'</div><div class="sl">&#xCD5C;&#xACE0; &#xC810;&#xC218;</div></div>';
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
    {name:'&#xD1A0;&#xB2F4;',nameK:'토담',scores:[85,70,60,90,95,65],desc:'&#xD669;&#xD1A0;&#xB97C; &#xB2E4;&#xC838; &#xC313;&#xC740; &#xB2F4;&#xC7A5;. &#xD1B5;&#xAE30;&#xC131;&#xC774; &#xC88B;&#xACE0; &#xCE5C;&#xD658;&#xACBD;&#xC801;. &#xBE44;&#xC5D0; &#xC57D;&#xD560; &#xC218; &#xC788;&#xC74C;.'},
    {name:'&#xB3CC;&#xB2F4;',nameK:'돌담',scores:[92,85,80,75,90,80],desc:'&#xC790;&#xC5F0;&#xC11D;&#xC744; &#xC313;&#xC544; &#xB9CC;&#xB4E0; &#xB2F4;&#xC7A5;. &#xB0B4;&#xAD6C;&#xC131;&#xC774; &#xB6F0;&#xC5B4;&#xB098;&#xACE0; &#xC790;&#xC5F0;&#xBBF8;&#xAC00; &#xD48D;&#xBD80;.'},
    {name:'&#xAE30;&#xC640;&#xB2F4;',nameK:'기와담',scores:[88,90,85,80,88,90],desc:'&#xC9C0;&#xBD95; &#xAE30;&#xC640;&#xB85C; &#xC7A5;&#xC2DD;&#xD55C; &#xACE0;&#xAE09; &#xB2F4;&#xC7A5;. &#xAD81;&#xAD90;/&#xC0AC;&#xCC30;&#xC5D0;&#xC11C; &#xC8FC;&#xB85C; &#xC0AC;&#xC6A9;.'},
    {name:'&#xAF43;&#xB2F4;',nameK:'꽃담',scores:[70,65,55,85,92,85],desc:'&#xBCBD;&#xB3CC; &#xC0AC;&#xC774;&#xC5D0; &#xAF43;&#xBB34;&#xB2AC; &#xBB38;&#xC591;&#xC744; &#xB123;&#xC740; &#xC7A5;&#xC2DD; &#xB2F4;&#xC7A5;. &#xCC3D;&#xB355;&#xAD81; &#xB0C9;&#xC120;&#xC7AC;&#xB85C; &#xC720;&#xBA85;.'},
    {name:'&#xC0AC;&#xACE0;&#xC11D;&#xB2F4;',nameK:'사고석담',scores:[90,92,88,70,85,75],desc:'&#xADDC;&#xACA9;&#xD654;&#xB41C; &#xC0AC;&#xAC01; &#xB3CC;&#xC744; &#xC313;&#xC740; &#xB2F4;&#xC7A5;. &#xAD00;&#xCCAD;/&#xBD80;&#xC720;&#xCE35; &#xC800;&#xD0DD;&#xC5D0; &#xC0AC;&#xC6A9;.'},
    {name:'&#xB300;&#xB098;&#xBB34; &#xC6B8;&#xD0C0;&#xB9AC;',nameK:'대나무 울타리',scores:[60,50,45,88,80,70],desc:'&#xB300;&#xB098;&#xBB34;&#xB97C; &#xC5EE;&#xC5B4; &#xB9CC;&#xB4E0; &#xC6B8;&#xD0C0;&#xB9AC;. &#xACBD;&#xB7C9;&#xC774;&#xACE0; &#xCE5C;&#xD658;&#xACBD;&#xC801;&#xC774;&#xB098; &#xB0B4;&#xAD6C;&#xC131; &#xBD80;&#xC871;.'},
    {name:'&#xD310;&#xBC29;&#xB2F4;',nameK:'판방담',scores:[75,78,70,65,75,68],desc:'&#xBAA9;&#xC7AC; &#xD310;&#xC744; &#xC138;&#xC6CC; &#xB9CC;&#xB4E0; &#xB2F4;&#xC7A5;. &#xC2DC;&#xACE8; &#xBBFC;&#xAC00;&#xC5D0;&#xC11C; &#xD754;&#xD788; &#xC0AC;&#xC6A9;.'},
    {name:'&#xD558;&#xC778;&#xBC29;&#xB2F4;',nameK:'하인방담',scores:[80,82,75,72,78,72],desc:'&#xD558;&#xBD80;&#xB294; &#xB3CC;, &#xC0C1;&#xBD80;&#xB294; &#xD669;&#xD1A0;&#xB85C; &#xC313;&#xC740; &#xBCF5;&#xD569; &#xB2F4;&#xC7A5;. &#xAD6C;&#xC870;&#xC801; &#xC548;&#xC815;&#xC131; &#xD655;&#xBCF4;.'},
    {name:'&#xC218;&#xB9C9;&#xC0C8;&#xBCBD;',nameK:'수막새벽',scores:[82,88,80,78,82,88],desc:'&#xD55C;&#xC625; &#xC678;&#xBCBD;&#xC5D0; &#xC218;&#xB9C9;&#xC0C8; &#xBB38;&#xC591;&#xC744; &#xB123;&#xC740; &#xC7A5;&#xC2DD;&#xBCBD;. &#xAD81;&#xAD90;&#xACFC; &#xC0AC;&#xCC30;&#xC5D0; &#xC0AC;&#xC6A9;.'},
    {name:'&#xB0B4;&#xC678;&#xB2F4;',nameK:'내외담',scores:[68,60,50,82,88,60],desc:'&#xB0B4;&#xBD80; &#xACF5;&#xAC04;&#xC744; &#xAD6C;&#xBD84;&#xD558;&#xB294; &#xB0AE;&#xC740; &#xB2F4;. &#xC2DC;&#xC120;&#xC744; &#xAC00;&#xB9AC;&#xBA74;&#xC11C;&#xB3C4; &#xD1B5;&#xD48D; &#xD5C8;&#xC6A9;.'}
  ];
  var axes=['&#xB0B4;&#xAD6C;&#xC131;','&#xBC29;&#xC5B4;&#xB825;','&#xBC29;&#xC218;&#xC131;','&#xBBF8;&#xAD00;','&#xC804;&#xD1B5;&#xC131;','&#xC7A5;&#xC2DD;&#xC131;'];
  var sel=0;
  function draw(){
    var c=document.getElementById('v20-fn-canvas'); if(!c) return;
    var ctx=c.getContext('2d'),W=c.width,H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='rgba(30,20,10,.95)'; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#f5deb3';ctx.font='bold 14px sans-serif';ctx.textAlign='center';
    ctx.fillText('&#xC804;&#xD1B5; &#xB2F4;&#xC7A5; &#xC591;&#xC2DD; &#xBE44;&#xAD50;',W/2,24);
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
    if(st) st.innerHTML='<div class="s"><div class="sv">'+avg+'</div><div class="sl">&#xD3C9;&#xADE0; &#xC810;&#xC218;</div></div><div class="s"><div class="sv">'+grade+'</div><div class="sl">&#xC885;&#xD569; &#xB4F1;&#xAE09;</div></div>';
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
    {name:'1+&#xB4F1;&#xAE09;',nameK:'1+등급',axes:[98,95,97,96,94,99],desc:'&#xCD5C;&#xACE0; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;. &#xC81C;&#xB85C;&#xC5D0;&#xB108;&#xC9C0;(ZEB) &#xC218;&#xC900;. &#xC5F0;&#xAC04; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; 60kWh/m&#xB2B2; &#xBBF8;&#xB9CC;.'},
    {name:'1&#xB4F1;&#xAE09;',nameK:'1등급',axes:[90,85,92,88,86,90],desc:'&#xC6B0;&#xC218; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;. &#xD328;&#xC2DC;&#xBE0C;&#xD558;&#xC6B0;&#xC2A4; &#xC218;&#xC900;. 120kWh/m&#xB2B2; &#xBBF8;&#xB9CC;.'},
    {name:'2&#xB4F1;&#xAE09;',nameK:'2등급',axes:[78,72,80,75,74,78],desc:'&#xC591;&#xD638;&#xD55C; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;. &#xC77C;&#xBC18; &#xC2E0;&#xCD95; &#xAE30;&#xC900;. 180kWh/m&#xB2B2; &#xBBF8;&#xB9CC;.'},
    {name:'3&#xB4F1;&#xAE09;',nameK:'3등급',axes:[65,60,68,62,60,65],desc:'&#xBCF4;&#xD1B5; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;. &#xAE30;&#xC874; &#xAC74;&#xBB3C; &#xD3C9;&#xADE0; &#xC218;&#xC900;. 240kWh/m&#xB2B2; &#xBBF8;&#xB9CC;.'},
    {name:'4&#xB4F1;&#xAE09;',nameK:'4등급',axes:[50,45,55,48,46,50],desc:'&#xBBF8;&#xD761; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;. &#xAC1C;&#xBCF4;&#xC218; &#xD544;&#xC694;. 300kWh/m&#xB2B2; &#xBBF8;&#xB9CC;.'},
    {name:'5&#xB4F1;&#xAE09;',nameK:'5등급',axes:[35,30,40,32,30,35],desc:'&#xBD88;&#xB7C9; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728;. &#xC2DC;&#xAE09; &#xAC1C;&#xBCF4;&#xC218; &#xD544;&#xC694;. 300kWh/m&#xB2B2; &#xC774;&#xC0C1;.'}
  ];
  var axisLabels=['&#xB2E8;&#xC5F4;&#xC131;&#xB2A5;','&#xAE30;&#xBC00;&#xC131;','&#xB0C9;&#xB09C;&#xBC29;&#xD6A8;&#xC728;','&#xC870;&#xBA85;&#xD6A8;&#xC728;','&#xC2E0;&#xC7AC;&#xC0DD;&#xC5D0;&#xB108;&#xC9C0;','&#xCD1D; &#xD6A8;&#xC728;'];
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
    ctx.fillText('&#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728; &#xB4F1;&#xAE09;: '+rt.nameK,W/2,24);
    var info=document.getElementById('v20-eg-info');
    if(info) info.innerHTML=rt.desc;
    var avg=Math.round(rt.axes.reduce(function(a,b){return a+b;},0)/n);
    var st=document.getElementById('v20-eg-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+rt.nameK+'</div><div class="sl">&#xC5D0;&#xB108;&#xC9C0; &#xB4F1;&#xAE09;</div></div><div class="s"><div class="sv">'+avg+'</div><div class="sl">&#xD3C9;&#xADE0; &#xD6A8;&#xC728;</div></div><div class="s"><div class="sv">'+Math.min.apply(null,rt.axes)+'</div><div class="sl">&#xCD5C;&#xC57D;&#xC810;</div></div>';
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
  var materials=['&#xBAA9;&#xC7AC;','&#xC11D;&#xC7AC;','&#xCCA0;&#xC7AC;','&#xCF58;&#xD06C;&#xB9AC;&#xD2B8;','&#xC810;&#xD1A0;','&#xD669;&#xD1A0;','&#xC720;&#xB9AC;','&#xB2E8;&#xC5F4;&#xC7AC;'];
  var props=['&#xAD6C;&#xC870;&#xC131;','&#xB0B4;&#xC5F4;&#xC131;','&#xBC29;&#xC218;&#xC131;','&#xBBF8;&#xAD00;','&#xCE5C;&#xD658;&#xACBD;','&#xBE44;&#xC6A9;','&#xC2DC;&#xACF5;&#xC131;','&#xB0B4;&#xAD6C;&#xC131;'];
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
    ctx.fillText('&#xAC74;&#xCD95; &#xC790;&#xC7AC; &#xD638;&#xD658;&#xC131; &#xB9E4;&#xD2B8;&#xB9AD;&#xC2A4; (8x8)',W/2,24);
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
    if(info) info.innerHTML='&#xCD5C;&#xACE0; &#xD638;&#xD658;&#xC131; &#xC790;&#xC7AC;: <b style="color:#f5deb3">'+bestN+'</b> (&#xCD1D;&#xC810; '+best+') | &#xC804;&#xCCB4; &#xD3C9;&#xADE0;: '+Math.round(total/cnt);
    var st=document.getElementById('v20-cm-stat');
    if(st) st.innerHTML='<div class="s"><div class="sv">'+bestN+'</div><div class="sl">&#xCD5C;&#xACE0; &#xD638;&#xD658;</div></div><div class="s"><div class="sv">'+Math.round(total/cnt)+'</div><div class="sl">&#xC804;&#xCCB4; &#xD3C9;&#xADE0;</div></div><div class="s"><div class="sv">64</div><div class="sl">&#xCE21;&#xC815;&#xC810;</div></div>';
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
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC5D0; &#xC791;&#xC6A9;&#xD558;&#xB294; &#xD558;&#xC911; &#xC911; &#xAC74;&#xBB3C; &#xC790;&#xCCB4;&#xC758; &#xBB34;&#xAC8C;&#xB97C; &#xBB50;&#xB77C; &#xD558;&#xB294;&#xAC00;?',a:['&#xACE0;&#xC815;&#xD558;&#xC911;','&#xD65C;&#xD558;&#xC911;','&#xD48D;&#xD558;&#xC911;','&#xC9C0;&#xC9C4;&#xD558;&#xC911;'],c:0},
    {q:'&#xC628;&#xB3CC;&#xC758; &#xC5F4;&#xC6D0;&#xC73C;&#xB85C; &#xBD88;&#xC744; &#xD53C;&#xC6B0;&#xB294; &#xACF3;&#xC740;?',a:['&#xAD74;&#xB73B;','&#xC544;&#xAD81;&#xC774;','&#xAD6C;&#xB4E4;&#xC7A5;','&#xBD80;&#xB12C;&#xBA38;&#xC774;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C; &#xC5D0;&#xB108;&#xC9C0; &#xD6A8;&#xC728; &#xCD5C;&#xACE0; &#xB4F1;&#xAE09;&#xC740;?',a:['A&#xB4F1;&#xAE09;','1&#xB4F1;&#xAE09;','1+&#xB4F1;&#xAE09;','S&#xB4F1;&#xAE09;'],c:2},
    {q:'&#xD669;&#xD1A0;&#xB97C; &#xB2E4;&#xC838; &#xC313;&#xC740; &#xC804;&#xD1B5; &#xB2F4;&#xC7A5;&#xC744; &#xBB50;&#xB77C; &#xD558;&#xB294;&#xAC00;?',a:['&#xB3CC;&#xB2F4;','&#xAE30;&#xC640;&#xB2F4;','&#xD1A0;&#xB2F4;','&#xD310;&#xBC29;&#xB2F4;'],c:2},
    {q:'&#xC81C;&#xB85C;&#xC5D0;&#xB108;&#xC9C0;&#xBE4C;&#xB529;(ZEB)&#xC758; &#xC5F0;&#xAC04; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xAE30;&#xC900;&#xC740;?',a:['120kWh/m&#xB2B2;','60kWh/m&#xB2B2;','180kWh/m&#xB2B2;','240kWh/m&#xB2B2;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C;&#xC5D0;&#xC11C; &#xC5F4;&#xC774; &#xBE60;&#xC838;&#xB098;&#xAC00;&#xB294; &#xBD80;&#xC704;&#xB97C; &#xBB50;&#xB77C; &#xD558;&#xB294;&#xAC00;?',a:['&#xC5F4;&#xB3C4;','&#xC5F4;&#xAD50;','&#xC5F4;&#xAD6C;','&#xC5F4;&#xC810;'],c:1},
    {q:'&#xCC3D;&#xB355;&#xAD81; &#xB0C9;&#xC120;&#xC7AC;&#xC758; &#xB2F4;&#xC7A5;&#xC740; &#xC5B4;&#xB5A4; &#xC591;&#xC2DD;&#xC778;&#xAC00;?',a:['&#xD1A0;&#xB2F4;','&#xAF43;&#xB2F4;','&#xC0AC;&#xACE0;&#xC11D;&#xB2F4;','&#xB0B4;&#xC678;&#xB2F4;'],c:1},
    {q:'&#xC2E4;&#xB0B4; &#xC7C8;&#xC801; &#xC2B5;&#xB3C4; &#xBC94;&#xC704;&#xB294; &#xC77C;&#xBC18;&#xC801;&#xC73C;&#xB85C;?',a:['20-30%','40-60%','70-80%','10-20%'],c:1},
    {q:'&#xAD6C;&#xB4E4;&#xC7A5; &#xBCF5;&#xC0AC; &#xC628;&#xB3CC;&#xC758; &#xD2B9;&#xC9D5;&#xC740;?',a:['&#xBE60;&#xB978; &#xAC00;&#xC5F4;','24&#xC2DC;&#xAC04; &#xCD95;&#xC5F4;','&#xC804;&#xAE30; &#xC0AC;&#xC6A9;','&#xC800;&#xBE44;&#xC6A9;'],c:1},
    {q:'&#xAC74;&#xCD95; &#xAD6C;&#xC870;&#xC5D0;&#xC11C; &#xC218;&#xC9C1; &#xBD80;&#xC7AC;&#xC758; &#xC88C;&#xAD74; &#xBC29;&#xC9C0;&#xAC00; &#xC911;&#xC694;&#xD55C; &#xAC83;&#xC740;?',a:['&#xBCF4;','&#xAE30;&#xB465;','&#xC2AC;&#xB798;&#xBE0C;','&#xD2B8;&#xB7EC;&#xC2A4;'],c:1},
    {q:'&#xAC74;&#xCD95;&#xBB3C; &#xC9C0;&#xC9C4; &#xB300;&#xBE44;&#xC5D0;&#xC11C; &#xAC00;&#xC7A5; &#xC911;&#xC694;&#xD55C; &#xAC83;&#xC740;?',a:['&#xC678;&#xBCBD; &#xB3C4;&#xC7A5;','&#xB0B4;&#xC9C4; &#xC124;&#xACC4;','&#xC870;&#xACBD; &#xC124;&#xCE58;','&#xBC29;&#xC218; &#xACF5;&#xC0AC;'],c:1},
    {q:'&#xD328;&#xC2DC;&#xBE0C;&#xD558;&#xC6B0;&#xC2A4;&#xC758; &#xC5F0;&#xAC04; &#xC5D0;&#xB108;&#xC9C0; &#xC18C;&#xBE44; &#xAE30;&#xC900;&#xC740;?',a:['120kWh/m&#xB2B2; &#xBBF8;&#xB9CC;','240kWh/m&#xB2B2; &#xBBF8;&#xB9CC;','60kWh/m&#xB2B2; &#xBBF8;&#xB9CC;','300kWh/m&#xB2B2; &#xBBF8;&#xB9CC;'],c:0},
    {q:'&#xBC88;&#xC640;&#xC7A5;(&#xBC88;&#xC640;&#xC7A5;&#xC778;)&#xC740; &#xC5B4;&#xB5A4; &#xC791;&#xC5C5;&#xC744; &#xD558;&#xB294; &#xC7A5;&#xC778;&#xC778;&#xAC00;?',a:['&#xAE30;&#xC640; &#xC81C;&#xC791;','&#xB2E8;&#xCCAD; &#xC791;&#xC5C5;','&#xC11D;&#xC870; &#xC791;&#xC5C5;','&#xBAA9;&#xACF5; &#xC791;&#xC5C5;'],c:0},
    {q:'&#xBBF8;&#xC7A5;&#xC774;&#xB294; &#xC5B4;&#xB5A4; &#xC791;&#xC5C5;&#xC744; &#xB2F4;&#xB2F9;&#xD558;&#xB294; &#xC7A5;&#xC778;&#xC778;&#xAC00;?',a:['&#xBCBD;&#xCCB4; &#xD68C;&#xBC18;&#xC8FD;','&#xBAA9;&#xC7AC; &#xAC00;&#xACF5;','&#xAE30;&#xC640; &#xC120;&#xBCC4;','&#xB2E8;&#xCCAD; &#xBB38;&#xC591;'],c:0},
    {q:'&#xC9C0;&#xC5F4; &#xD788;&#xD2B8;&#xD38C;&#xD504; &#xB09C;&#xBC29;&#xC758; &#xC7A5;&#xC810;&#xC740;?',a:['&#xC800;&#xB834;&#xD55C; &#xC124;&#xCE58;&#xBE44;','&#xB192;&#xC740; &#xC6B4;&#xC601; &#xD6A8;&#xC728;','&#xAC04;&#xB2E8;&#xD55C; &#xC720;&#xC9C0;&#xBCF4;&#xC218;','&#xBE60;&#xB978; &#xC124;&#xCE58;'],c:1}
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
    {id:'v20_load_analyst',name:'&#xAD6C;&#xC870; &#xBD84;&#xC11D;&#xAC00;',desc:'&#xAD6C;&#xC870; &#xD558;&#xC911; &#xBD84;&#xC11D;&#xAE30; &#xC5F4;&#xAE30;'},
    {id:'v20_ondol_master',name:'&#xC628;&#xB3CC; &#xB9C8;&#xC2A4;&#xD130;',desc:'&#xC628;&#xB3CC; &#xC2DC;&#xC2A4;&#xD15C; &#xC124;&#xACC4; &#xC5F4;&#xAE30;'},
    {id:'v20_disaster_planner',name:'&#xC7AC;&#xD574; &#xD50C;&#xB798;&#xB108;',desc:'&#xC7AC;&#xD574; &#xBCF5;&#xAD6C; &#xD50C;&#xB798;&#xB108; &#xC5F4;&#xAE30;'},
    {id:'v20_humidity_expert',name:'&#xC2B5;&#xB3C4; &#xC804;&#xBB38;&#xAC00;',desc:'&#xC2B5;&#xB3C4; &#xC7C8;&#xC801; &#xB9F5; &#xC5F4;&#xAE30;'},
    {id:'v20_aesthetic_critic',name:'&#xBBF8;&#xD559; &#xBE44;&#xD3C9;&#xAC00;',desc:'&#xBBF8;&#xD559; &#xBE44;&#xC728; &#xBD84;&#xC11D;&#xAE30; &#xC5F4;&#xAE30;'},
    {id:'v20_fence_scholar',name:'&#xB2F4;&#xC7A5; &#xD559;&#xC790;',desc:'&#xB2F4;&#xC7A5; &#xC591;&#xC2DD; &#xAC00;&#xC774;&#xB4DC; &#xC5F4;&#xAE30;'},
    {id:'v20_energy_inspector',name:'&#xC5D0;&#xB108;&#xC9C0; &#xAC80;&#xC0AC;&#xAD00;',desc:'&#xC5D0;&#xB108;&#xC9C0; &#xB4F1;&#xAE09; &#xC2DC;&#xBBAC; &#xC5F4;&#xAE30;'},
    {id:'v20_compat_engineer',name:'&#xC790;&#xC7AC; &#xC5D4;&#xC9C0;&#xB2C8;&#xC5B4;',desc:'&#xC790;&#xC7AC; &#xD638;&#xD658;&#xC131; &#xB9E4;&#xD2B8;&#xB9AD;&#xC2A4; &#xC5F4;&#xAE30;'},
    {id:'v20_quiz_master',name:'v20 &#xD034;&#xC988; &#xB9C8;&#xC2A4;&#xD130;',desc:'v20 &#xD034;&#xC988; &#xC804;&#xBB38; &#xD074;&#xB9AC;&#xC5B4;'},
    {id:'v20_all_sections',name:'v20 &#xC804;&#xCCB4; &#xD0D0;&#xD5D8;',desc:'v20 8&#xAC1C; &#xC139;&#xC158; &#xBAA8;&#xB450; &#xC5F4;&#xAE30;'},
    {id:'v20_explorer',name:'v20 &#xD0D0;&#xD5D8;&#xAC00;',desc:'v20 5&#xAC1C; &#xC774;&#xC0C1; &#xC139;&#xC158; &#xC5F4;&#xAE30;'},
    {id:'v20_complete',name:'v20 &#xCEF4;&#xD50C;&#xB9AC;&#xD2B8;',desc:'v20 &#xBAA8;&#xB4E0; &#xCF58;&#xD150;&#xCE20; &#xC644;&#xB8CC;'}
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
    {icon:'🏗',label:'&#xAD6C;&#xC870;&#xD558;&#xC911;',fn:function(){ v20Load.open(); v20Achieve.unlock('v20_load_analyst'); v20Achieve.trackOpen('ld'); }},
    {icon:'🔥',label:'&#xC628;&#xB3CC;&#xC124;&#xACC4;',fn:function(){ v20Ondol.open(); v20Achieve.unlock('v20_ondol_master'); v20Achieve.trackOpen('od'); }},
    {icon:'⚠',label:'&#xC7AC;&#xD574;&#xBCF5;&#xAD6C;',fn:function(){ v20Disaster.open(); v20Achieve.unlock('v20_disaster_planner'); v20Achieve.trackOpen('ds'); }},
    {icon:'💧',label:'&#xC2B5;&#xB3C4;&#xB9F5;',fn:function(){ v20Humidity.open(); v20Achieve.unlock('v20_humidity_expert'); v20Achieve.trackOpen('hm'); }},
    {icon:'🎨',label:'&#xBBF8;&#xD559;&#xBE44;&#xC728;',fn:function(){ v20Aesthetic.open(); v20Achieve.unlock('v20_aesthetic_critic'); v20Achieve.trackOpen('ae'); }},
    {icon:'🏯',label:'&#xB2F4;&#xC7A5;&#xC591;&#xC2DD;',fn:function(){ v20Fence.open(); v20Achieve.unlock('v20_fence_scholar'); v20Achieve.trackOpen('fn'); }},
    {icon:'⚡',label:'&#xC5D0;&#xB108;&#xC9C0;&#xB4F1;&#xAE09;',fn:function(){ v20Energy.open(); v20Achieve.unlock('v20_energy_inspector'); v20Achieve.trackOpen('eg'); }},
    {icon:'🧱',label:'&#xC790;&#xC7AC;&#xD638;&#xD658;',fn:function(){ v20Compat.open(); v20Achieve.unlock('v20_compat_engineer'); v20Achieve.trackOpen('cm'); }}
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

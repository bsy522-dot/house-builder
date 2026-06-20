// =====================================================
// House Builder v12.0 Patch
// 평면도에디터Canvas+가구배치12종Canvas+건축비용계산기BarCanvas
// 한옥해부도Canvas+건축연표Canvas+인테리어갤러리12종+건축자격시험20문
// 실내조명시뮬Canvas+퀴즈+15(105→120)+업적+12(110→122)+SFX12종+키보드8종
// =====================================================
if (!window.__hbV12) {
window.__hbV12 = true;

(function(){
var css = document.createElement('style');
css.textContent = [
'.v12-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3600;overflow-y:auto;padding:16px}',
'.v12-panel.active{display:block}',
'.v12-box{max-width:700px;margin:40px auto}',
'.v12-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
'.v12-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
'.v12-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
'.v12-close:hover{background:#d4a57a}',
'.v12-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
'.v12-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
'.v12-tab:hover,.v12-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
'.v12-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
'.v12-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
'.v12-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
'.v12-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
'.v12-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
'.v12-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
'.v12-card p{color:#c4956a;font-size:11px;margin:0}',
'.v12-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
'.v12-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
'.v12-item.read{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
'.v12-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
'.v12-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
'.v12-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
'.v12-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
'.v12-item.expanded .detail{display:block}',
'.v12-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
'.v12-btn-sm:hover{background:#d4a57a}',
'.v12-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
'.v12-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
'.v12-fp-cell{width:36px;height:36px;border:1px solid rgba(196,149,106,.12);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .12s;background:rgba(255,255,255,.02)}',
'.v12-fp-cell:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
'.v12-fp-cell.placed{border-color:rgba(196,149,106,.4)}',
'.v12-quiz-opt{display:block;width:100%;padding:10px 14px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.04);color:#e8d5c0;border-radius:8px;cursor:pointer;font-family:inherit;font-size:13px;text-align:left;margin-bottom:6px;transition:all .2s}',
'.v12-quiz-opt:hover:not(:disabled){background:rgba(196,149,106,.12);border-color:#c4956a}',
'.v12-quiz-opt.correct{background:rgba(74,124,89,.3);border-color:#4a7c59;color:#fff}',
'.v12-quiz-opt.wrong{background:rgba(180,60,60,.3);border-color:#b43c3c;color:#fff}',
'.v12-quiz-opt:disabled{cursor:not-allowed;opacity:.7}',
'.v12-slider{width:100%;-webkit-appearance:none;height:6px;border-radius:3px;background:rgba(196,149,106,.2);outline:none}',
'.v12-slider::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:#c4956a;cursor:pointer}',
'.v12-nav-bar{position:fixed;bottom:0;left:0;right:0;height:52px;background:linear-gradient(0deg,rgba(30,20,10,.97),rgba(30,20,10,.85));border-top:1px solid rgba(196,149,106,.3);display:flex;overflow-x:auto;z-index:3550;padding:0 8px;gap:2px;-webkit-overflow-scrolling:touch}',
'.v12-nav-bar::-webkit-scrollbar{display:none}',
'.v12-nav-item{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4px 10px;color:#c4956a;font-size:10px;cursor:pointer;border-radius:8px;transition:all .2s;white-space:nowrap;min-width:56px}',
'.v12-nav-item:hover,.v12-nav-item:active{background:rgba(196,149,106,.15);color:#f5deb3}',
'.v12-nav-item .nav-icon{font-size:18px;margin-bottom:2px}',
'@media(max-width:600px){.v12-box{margin:16px auto}.v12-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr))}.v12-fp-cell{width:28px;height:28px;font-size:11px}}'
].join('\n');
document.head.appendChild(css);
})();

(function(){
var wrap = document.createElement('div');
wrap.id = 'v12-panels';
wrap.innerHTML =
'<div id="v12-floorplan" class="v12-panel"><div class="v12-box"><h2>&#x1F3E0; &#xD3C9;&#xBA74;&#xB3C4; &#xC5D0;&#xB514;&#xD130;</h2><p>10x10 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; &#xBC29;&#xC744; &#xBC30;&#xCE58;&#xD558;&#xACE0; &#xAC04;&#xCDE8;&#xD3C9;&#xBA74;&#xB3C4;&#xB97C; &#xADF8;&#xB824;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-fp-tools"></div><div id="v12-fp-grid" style="display:inline-grid;grid-template-columns:repeat(10,36px);gap:1px;margin:10px auto;justify-content:center"></div><canvas id="v12-fp-canvas" class="v12-canvas" width="500" height="200"></canvas><div id="v12-fp-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-fp-save">&#xC800;&#xC7A5;</button> <button class="v12-btn-outline" id="v12-fp-clear">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'floorplan\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-furniture" class="v12-panel"><div class="v12-box"><h2>&#x1FA91; &#xAC00;&#xAD6C; &#xBC30;&#xCE58; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2><p>12&#xC885; &#xAC00;&#xAD6C;&#xB97C; &#xBC29;&#xC5D0; &#xBC30;&#xCE58;&#xD574;&#xBCF4;&#xC138;&#xC694;</p><div class="v12-tabs" id="v12-furn-tabs"></div><canvas id="v12-furn-canvas" class="v12-canvas" width="520" height="400"></canvas><div id="v12-furn-info" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-furn-reset">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v12-close" onclick="v12Close(\'furniture\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-cost" class="v12-panel"><div class="v12-box"><h2>&#x1F4B0; &#xAC74;&#xCD95; &#xBE44;&#xC6A9; &#xACC4;&#xC0B0;&#xAE30;</h2><p>&#xAC74;&#xCD95; &#xC720;&#xD615;&#xBCC4; &#xBE44;&#xC6A9;&#xC744; &#xBE44;&#xAD50; &#xBD84;&#xC11D;&#xD558;&#xC138;&#xC694;</p><canvas id="v12-cost-canvas" class="v12-canvas" width="520" height="380"></canvas><div id="v12-cost-detail" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'cost\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-anatomy" class="v12-panel"><div class="v12-box"><h2>&#x1F3DB;&#xFE0F; &#xD55C;&#xC625; &#xBD80;&#xC704; &#xD574;&#xBD80;&#xB3C4;</h2><p>&#xD55C;&#xC625; &#xAD6C;&#xC870;&#xC758; &#xAC01; &#xBD80;&#xC704;&#xB97C; &#xD074;&#xB9AD;&#xD574;&#xC11C; &#xC0C1;&#xC138; &#xC815;&#xBCF4;&#xB97C; &#xD655;&#xC778;&#xD558;&#xC138;&#xC694;</p><canvas id="v12-anatomy-canvas" class="v12-canvas" width="560" height="420"></canvas><div id="v12-anatomy-info" style="text-align:center;color:#e8d5c0;font-size:13px;margin:10px 0;min-height:40px"></div><button class="v12-close" onclick="v12Close(\'anatomy\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-timeline" class="v12-panel"><div class="v12-box"><h2>&#x1F4C5; &#xAC74;&#xCD95; &#xC2DC;&#xB300;&#xBCC4; &#xC5F0;&#xD45C;</h2><p>&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC758; &#xC2DC;&#xB300;&#xBCC4; &#xBCC0;&#xCC9C;&#xC0AC;&#xB97C; &#xD655;&#xC778;&#xD558;&#xC138;&#xC694;</p><canvas id="v12-timeline-canvas" class="v12-canvas" width="560" height="500"></canvas><div id="v12-timeline-info" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0;min-height:30px"></div><button class="v12-close" onclick="v12Close(\'timeline\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-interior" class="v12-panel"><div class="v12-box"><h2>&#x1F6CB;&#xFE0F; &#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xC2A4;&#xD0C0;&#xC77C; &#xAC24;&#xB7EC;&#xB9AC;</h2><p>12&#xC885; &#xC804;&#xD1B5;/&#xD604;&#xB300; &#xC778;&#xD14C;&#xB9AC;&#xC5B4; &#xC2A4;&#xD0C0;&#xC77C;&#xC744; &#xD0D0;&#xC0C9;&#xD558;&#xC138;&#xC694;</p><div id="v12-interior-list"></div><button class="v12-close" onclick="v12Close(\'interior\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-license" class="v12-panel"><div class="v12-box"><h2>&#x1F4DD; &#xAC74;&#xCD95; &#xC790;&#xACA9;&#xC99D; &#xBAA8;&#xC758;&#xC2DC;&#xD5D8;</h2><p>20&#xBB38;&#xD56D;&#xC758; &#xAC74;&#xCD95; &#xC804;&#xBB38; &#xC2DC;&#xD5D8;&#xC5D0; &#xB3C4;&#xC804;&#xD558;&#xC138;&#xC694;</p><div id="v12-license-header" style="text-align:center;margin-bottom:16px"></div><div id="v12-license-q" style="background:rgba(0,0,0,.25);padding:14px;border-radius:10px;color:#f5deb3;font-size:15px;line-height:1.6;margin-bottom:14px"></div><div id="v12-license-opts"></div><div id="v12-license-fb" style="display:none;padding:12px;border-radius:10px;font-size:13px;line-height:1.6;color:#e8d5c0;background:rgba(196,149,106,.12);border:1px solid rgba(196,149,106,.3);margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v12-btn-sm" id="v12-license-next" style="display:none">&#xB2E4;&#xC74C; &#xBB38;&#xC81C;</button></div><button class="v12-close" onclick="v12Close(\'license\')">&#xB2EB;&#xAE30;</button></div></div>' +
'<div id="v12-lighting" class="v12-panel"><div class="v12-box"><h2>&#x1F4A1; &#xC2E4;&#xB0B4; &#xC870;&#xBA85; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2><p>&#xC870;&#xBA85; &#xC704;&#xCE58;&#xC640; &#xBC1D;&#xAE30;&#xB97C; &#xC870;&#xC808;&#xD574; &#xC2E4;&#xB0B4; &#xBD84;&#xC704;&#xAE30;&#xB97C; &#xC124;&#xACC4;&#xD558;&#xC138;&#xC694;</p><canvas id="v12-light-canvas" class="v12-canvas" width="520" height="400"></canvas><div style="text-align:center;margin:12px 0"><label style="color:#c4956a;font-size:12px">&#xBC1D;&#xAE30;: <input type="range" class="v12-slider" id="v12-light-bright" min="10" max="100" value="60"></label>&nbsp;&nbsp;<label style="color:#c4956a;font-size:12px">&#xC0C9;&#xC628;&#xB3C4;: <input type="range" class="v12-slider" id="v12-light-temp" min="0" max="100" value="50"></label></div><div class="v12-tabs" id="v12-light-types"></div><div id="v12-light-info" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><button class="v12-close" onclick="v12Close(\'lighting\')">&#xB2EB;&#xAE30;</button></div></div>';
document.body.appendChild(wrap);
})();

var v12SFX = (function(){
var actx = null;
function ctx(){ if(!actx) try{ actx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return actx; }
function play(type){
  var c = ctx(); if(!c) return;
  var o = c.createOscillator(), g = c.createGain();
  o.connect(g); g.connect(c.destination);
  var t = c.currentTime;
  switch(type){
    case 'fp_place': o.type='triangle'; o.frequency.setValueAtTime(523,t); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
    case 'fp_save': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
    case 'furn_place': o.type='triangle'; o.frequency.setValueAtTime(587,t); o.frequency.linearRampToValueAtTime(698,t+.1); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
    case 'cost_calc': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(660,t+.2); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
    case 'anatomy_click': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(523,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.18); o.start(t); o.stop(t+.18); break;
    case 'timeline_open': o.type='sine'; o.frequency.setValueAtTime(330,t); o.frequency.linearRampToValueAtTime(440,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
    case 'interior_view': o.type='triangle'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
    case 'license_correct': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.15); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
    case 'license_wrong': o.type='sawtooth'; o.frequency.setValueAtTime(200,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
    case 'license_pass': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); o.frequency.linearRampToValueAtTime(1047,t+.3); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.5); o.start(t); o.stop(t+.5); break;
    case 'light_adjust': o.type='sine'; o.frequency.setValueAtTime(660,t); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.08); o.start(t); o.stop(t+.08); break;
    case 'achieve_v12': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
    default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.06,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1);
  }
}
return {play:play,ctx:ctx};
})();

// ── 4. Floor Plan Editor (평면도 에디터 10x10) ──
var v12FloorPlan = (function(){
var KEY='hb_v12_fp', SIZE=10;
var rooms=[
  {name:'지우기',icon:'❌',id:'erase',color:''},
  {name:'안방',icon:'🛏',id:'anbang',color:'rgba(196,149,106,.4)'},
  {name:'사랑방',icon:'📚',id:'sarang',color:'rgba(100,149,237,.3)'},
  {name:'대청마루',icon:'🏠',id:'daecheong',color:'rgba(222,184,135,.4)'},
  {name:'부엌',icon:'🍳',id:'bueok',color:'rgba(220,80,60,.3)'},
  {name:'온돌방',icon:'🔥',id:'ondol',color:'rgba(255,165,0,.3)'},
  {name:'마당',icon:'🌳',id:'madang',color:'rgba(90,130,60,.3)'},
  {name:'화장실',icon:'🚽',id:'hwajangshil',color:'rgba(100,180,220,.3)'},
  {name:'담장',icon:'🧱',id:'damjang',color:'rgba(160,140,120,.5)'},
  {name:'연못',icon:'💧',id:'yeonmot',color:'rgba(50,120,200,.3)'},
  {name:'정원',icon:'🌸',id:'jeongwon',color:'rgba(200,100,150,.3)'},
  {name:'창고',icon:'📦',id:'changgo',color:'rgba(140,100,60,.3)'}
];
var selectedTool='anbang';
var grid=JSON.parse(localStorage.getItem(KEY)||'null');
if(!grid){grid=[];for(var i=0;i<SIZE*SIZE;i++)grid.push('');}
function save(){localStorage.setItem(KEY,JSON.stringify(grid));}
function renderTools(){
  var el=document.getElementById('v12-fp-tools'); if(!el) return;
  el.innerHTML=rooms.map(function(r){ return '<button class="v12-tab'+(selectedTool===r.id?' active':'')+'" data-id="'+r.id+'">'+r.icon+' '+r.name+'</button>'; }).join('');
  el.querySelectorAll('.v12-tab').forEach(function(btn){ btn.onclick=function(){ selectedTool=btn.dataset.id; el.querySelectorAll('.v12-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); }; });
}
function renderGrid(){
  var el=document.getElementById('v12-fp-grid'); if(!el) return;
  el.innerHTML='';
  for(var i=0;i<SIZE*SIZE;i++){
    var cell=document.createElement('div');
    cell.className='v12-fp-cell'+(grid[i]?' placed':'');
    cell.dataset.idx=i;
    var rm=rooms.find(function(r){return r.id===grid[i];});
    cell.innerHTML=rm?rm.icon:'';
    if(rm&&rm.color) cell.style.background=rm.color;
    cell.onclick=function(){
      var idx=parseInt(this.dataset.idx);
      grid[idx]=selectedTool==='erase'?'':selectedTool;
      save(); v12SFX.play('fp_place'); renderGrid(); renderStats(); drawMiniMap();
    };
    el.appendChild(cell);
  }
}
function renderStats(){
  var el=document.getElementById('v12-fp-stats'); if(!el) return;
  var counts={}; grid.forEach(function(g){if(g)counts[g]=(counts[g]||0)+1;});
  var total=grid.filter(function(g){return g;}).length;
  var area=total*9;
  var parts=[]; rooms.forEach(function(r){if(r.id!=='erase'&&counts[r.id])parts.push(r.icon+counts[r.id]);});
  el.innerHTML='&#xBC30;&#xCE58;: '+total+'/'+SIZE*SIZE+' | &#xBA74;&#xC801;: '+area+'&#xD3C9; | '+parts.join(' ');
}
function drawMiniMap(){
  var cv=document.getElementById('v12-fp-canvas'); if(!cv) return;
  var c=cv.getContext('2d'), W=cv.width, H=cv.height;
  c.clearRect(0,0,W,H);
  var cellW=Math.min((W-40)/SIZE,(H-40)/SIZE);
  var ox=(W-cellW*SIZE)/2, oy=10;
  c.fillStyle='rgba(196,149,106,.05)';
  c.fillRect(ox,oy,cellW*SIZE,cellW*SIZE);
  for(var i=0;i<SIZE*SIZE;i++){
    var x=i%SIZE, y=Math.floor(i/SIZE);
    var rm=rooms.find(function(r){return r.id===grid[i];});
    if(rm&&rm.color){
      c.fillStyle=rm.color;
      c.fillRect(ox+x*cellW+1,oy+y*cellW+1,cellW-2,cellW-2);
    }
    c.strokeStyle='rgba(196,149,106,.15)';
    c.strokeRect(ox+x*cellW,oy+y*cellW,cellW,cellW);
  }
  c.fillStyle='#c4956a'; c.font='11px sans-serif'; c.textAlign='center';
  c.fillText('← '+SIZE*3+'m →',W/2,oy+cellW*SIZE+16);
  c.fillStyle='#f5deb3'; c.font='bold 12px sans-serif';
  c.fillText('평면도 미리보기',W/2,H-8);
}
function open(){
  document.getElementById('v12-floorplan').classList.add('active');
  v12SFX.play('fp_place'); renderTools(); renderGrid(); renderStats(); drawMiniMap();
  document.getElementById('v12-fp-save').onclick=function(){save();v12SFX.play('fp_save');};
  document.getElementById('v12-fp-clear').onclick=function(){grid=[];for(var i=0;i<SIZE*SIZE;i++)grid.push('');save();renderGrid();renderStats();drawMiniMap();};
}
function close(){document.getElementById('v12-floorplan').classList.remove('active');}
return {open:open,close:close,grid:grid,load:function(){}};
})();

// ── 5. Furniture Placement Simulator (가구 배치 Canvas) ──
var v12Furniture = (function(){
var KEY='hb_v12_furn';
var cats=['전체','전통','현대','정원'];
var items=[
  {name:'소반',cat:'전통',w:30,h:20,color:'#b8895e',desc:'한옥 식사용 작은 상'},
  {name:'병풍',cat:'전통',w:60,h:8,color:'#c4956a',desc:'바람막이 겸 장식 가리개'},
  {name:'장롱',cat:'전통',w:50,h:25,color:'#8b6914',desc:'옷과 이불을 보관하는 가구'},
  {name:'문갑',cat:'전통',w:35,h:20,color:'#a07040',desc:'서재용 작은 책상'},
  {name:'소파',cat:'현대',w:60,h:30,color:'#6a6a8a',desc:'현대 거실용 소파'},
  {name:'침대',cat:'현대',w:55,h:40,color:'#4a6a8a',desc:'현대식 침대'},
  {name:'책상',cat:'현대',w:45,h:25,color:'#a0926a',desc:'공부/업무용 책상'},
  {name:'냉장고',cat:'현대',w:25,h:25,color:'#c0c0c0',desc:'현대 주방 필수 가전'},
  {name:'석등',cat:'정원',w:15,h:15,color:'#a0a090',desc:'정원 장식용 돌 등'},
  {name:'연못 장식',cat:'정원',w:40,h:30,color:'#3a8aba',desc:'작은 정원 연못'},
  {name:'돌다리',cat:'정원',w:50,h:12,color:'#888880',desc:'정원 징검다리'},
  {name:'화분',cat:'정원',w:18,h:18,color:'#6a8a4a',desc:'식물 화분'}
];
var placed=JSON.parse(localStorage.getItem(KEY)||'[]');
var selectedItem=0, currentCat='전체';
var roomW=520, roomH=400, dragIdx=-1, dragOX=0, dragOY=0;

function save(){localStorage.setItem(KEY,JSON.stringify(placed));}
function renderTabs(){
  var el=document.getElementById('v12-furn-tabs'); if(!el) return;
  el.innerHTML=cats.map(function(c){ return '<button class="v12-tab'+(currentCat===c?' active':'')+'" data-cat="'+c+'">'+c+'</button>'; }).join('');
  var filtered=currentCat==='전체'?items:items.filter(function(it){return it.cat===currentCat;});
  filtered.forEach(function(it,i){
    var btn=document.createElement('button');
    btn.className='v12-tab'+(selectedItem===items.indexOf(it)?' active':'');
    btn.textContent=it.name;
    btn.dataset.idx=items.indexOf(it);
    btn.onclick=function(){selectedItem=parseInt(btn.dataset.idx);renderTabs();};
    el.appendChild(btn);
  });
  el.querySelectorAll('.v12-tab[data-cat]').forEach(function(btn){
    btn.onclick=function(){currentCat=btn.dataset.cat;renderTabs();};
  });
}
function draw(){
  var cv=document.getElementById('v12-furn-canvas'); if(!cv) return;
  var c=cv.getContext('2d'), W=cv.width, H=cv.height;
  c.clearRect(0,0,W,H);
  c.fillStyle='rgba(245,222,179,.08)'; c.fillRect(0,0,W,H);
  c.strokeStyle='rgba(196,149,106,.2)';
  for(var x=0;x<W;x+=40){c.beginPath();c.moveTo(x,0);c.lineTo(x,H);c.stroke();}
  for(var y=0;y<H;y+=40){c.beginPath();c.moveTo(0,y);c.lineTo(W,y);c.stroke();}
  c.strokeStyle='rgba(196,149,106,.5)'; c.lineWidth=2; c.strokeRect(10,10,W-20,H-20); c.lineWidth=1;
  c.strokeStyle='rgba(196,149,106,.4)';
  c.strokeRect(W/2-25,H-12,50,14);
  c.fillStyle='rgba(196,149,106,.15)'; c.fillRect(W/2-25,H-12,50,14);
  c.fillStyle='#c4956a'; c.font='9px sans-serif'; c.textAlign='center'; c.fillText('문',W/2,H-2);
  placed.forEach(function(p,i){
    var it=items[p.itemIdx];
    if(!it) return;
    c.fillStyle=it.color;
    c.fillRect(p.x,p.y,it.w,it.h);
    c.strokeStyle='rgba(245,222,179,.6)'; c.strokeRect(p.x,p.y,it.w,it.h);
    c.fillStyle='#f5deb3'; c.font='10px sans-serif'; c.textAlign='center';
    c.fillText(it.name,p.x+it.w/2,p.y+it.h/2+4);
  });
  var info=document.getElementById('v12-furn-info');
  if(info) info.innerHTML='배치: '+placed.length+'개 | 클릭으로 배치, 드래그로 이동, 더블클릭 삭제';
}
function handleClick(e){
  var cv=document.getElementById('v12-furn-canvas'); if(!cv) return;
  var rect=cv.getBoundingClientRect();
  var mx=(e.clientX-rect.left)*(cv.width/rect.width);
  var my=(e.clientY-rect.top)*(cv.height/rect.height);
  for(var i=placed.length-1;i>=0;i--){
    var p=placed[i], it=items[p.itemIdx];
    if(mx>=p.x&&mx<=p.x+it.w&&my>=p.y&&my<=p.y+it.h){
      dragIdx=i; dragOX=mx-p.x; dragOY=my-p.y; return;
    }
  }
  var it=items[selectedItem];
  if(it){
    placed.push({itemIdx:selectedItem,x:mx-it.w/2,y:my-it.h/2});
    save(); v12SFX.play('furn_place'); draw();
  }
}
function handleMove(e){
  if(dragIdx<0) return;
  var cv=document.getElementById('v12-furn-canvas'); if(!cv) return;
  var rect=cv.getBoundingClientRect();
  var mx=(e.clientX-rect.left)*(cv.width/rect.width);
  var my=(e.clientY-rect.top)*(cv.height/rect.height);
  placed[dragIdx].x=mx-dragOX; placed[dragIdx].y=my-dragOY;
  draw();
}
function handleUp(){if(dragIdx>=0){save();dragIdx=-1;}}
function handleDblClick(e){
  var cv=document.getElementById('v12-furn-canvas'); if(!cv) return;
  var rect=cv.getBoundingClientRect();
  var mx=(e.clientX-rect.left)*(cv.width/rect.width);
  var my=(e.clientY-rect.top)*(cv.height/rect.height);
  for(var i=placed.length-1;i>=0;i--){
    var p=placed[i], it=items[p.itemIdx];
    if(mx>=p.x&&mx<=p.x+it.w&&my>=p.y&&my<=p.y+it.h){
      placed.splice(i,1); save(); draw(); return;
    }
  }
}
function open(){
  document.getElementById('v12-furniture').classList.add('active');
  renderTabs(); draw();
  var cv=document.getElementById('v12-furn-canvas');
  if(cv){
    cv.onmousedown=handleClick; cv.onmousemove=handleMove;
    cv.onmouseup=handleUp; cv.ondblclick=handleDblClick;
  }
  document.getElementById('v12-furn-reset').onclick=function(){placed=[];save();draw();};
}
function close(){document.getElementById('v12-furniture').classList.remove('active');}
return {open:open,close:close,placed:placed,load:function(){}};
})();

// ── 6. Cost Calculator (건축 비용 계산기 Bar Canvas) ──
var v12Cost = (function(){
var types=[
  {name:'한옥',area:40,unitCost:850,duration:12,materials:'소나무/황토/기와',icon:'🏯'},
  {name:'초가집',area:25,unitCost:350,duration:4,materials:'볼짚/황토/나무',icon:'🌾'},
  {name:'기와집',area:60,unitCost:1200,duration:18,materials:'소나무/화강석/기와',icon:'🏛'},
  {name:'서원',area:100,unitCost:1500,duration:24,materials:'소나무/화강석/기와/단청',icon:'📚'},
  {name:'현대주택',area:35,unitCost:600,duration:8,materials:'철근콘크리트/벽돌/유리',icon:'🏠'},
  {name:'아파트',area:30,unitCost:500,duration:36,materials:'철근콘크리트/철골',icon:'🏢'}
];
function draw(){
  var cv=document.getElementById('v12-cost-canvas'); if(!cv) return;
  var c=cv.getContext('2d'), W=cv.width, H=cv.height;
  c.clearRect(0,0,W,H);
  var barW=60, gap=20, startX=60, maxCost=0;
  types.forEach(function(t){var total=t.area*t.unitCost;if(total>maxCost)maxCost=total;});
  var barArea=H-120;
  c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
  c.fillText('건축 유형별 총 비용 비교 (만원)',W/2,22);
  types.forEach(function(t,i){
    var total=t.area*t.unitCost;
    var barH=(total/maxCost)*barArea;
    var x=startX+i*(barW+gap);
    var y=H-50-barH;
    var grad=c.createLinearGradient(0,y,0,H-50);
    var colors=['#c4956a','#a07040','#8b6914','#6495ed','#708090','#4682b4'];
    grad.addColorStop(0,colors[i]);
    grad.addColorStop(1,'rgba(45,27,14,.6)');
    c.fillStyle=grad;
    c.fillRect(x,y,barW,barH);
    c.strokeStyle='rgba(245,222,179,.3)'; c.strokeRect(x,y,barW,barH);
    c.fillStyle='#f5deb3'; c.font='bold 11px sans-serif'; c.textAlign='center';
    c.fillText(Math.round(total/10000)+'만',x+barW/2,y-8);
    c.fillStyle='#c4956a'; c.font='11px sans-serif';
    c.fillText(t.icon,x+barW/2,H-36);
    c.fillText(t.name,x+barW/2,H-22);
    c.fillStyle='rgba(196,149,106,.5)'; c.font='9px sans-serif';
    c.fillText(t.area+'평',x+barW/2,H-8);
  });
  c.strokeStyle='rgba(196,149,106,.3)'; c.beginPath();
  c.moveTo(startX-10,H-50); c.lineTo(startX+(barW+gap)*types.length,H-50); c.stroke();
  for(var l=0;l<=4;l++){
    var lv=H-50-(barArea*l/4);
    c.strokeStyle='rgba(196,149,106,.1)'; c.beginPath();
    c.moveTo(startX-10,lv); c.lineTo(startX+(barW+gap)*types.length,lv); c.stroke();
    c.fillStyle='rgba(196,149,106,.5)'; c.font='9px sans-serif'; c.textAlign='right';
    c.fillText(Math.round(maxCost*l/4/10000)+'만',startX-14,lv+4);
  }
  var detail=document.getElementById('v12-cost-detail');
  if(detail){
    detail.innerHTML=types.map(function(t){
      return t.icon+' '+t.name+': '+t.area+'평 × '+t.unitCost+'만/평 = <strong style="color:#f5deb3">'+Math.round(t.area*t.unitCost/10000)+'억</strong> ('+t.duration+'개월)';
    }).join('<br>');
  }
}
function open(){document.getElementById('v12-cost').classList.add('active');v12SFX.play('cost_calc');draw();}
function close(){document.getElementById('v12-cost').classList.remove('active');}
return {open:open,close:close,load:function(){}};
})();

// ── 7. Hanok Anatomy Diagram (한옥 해부도 Canvas) ──
var v12Anatomy = (function(){
var parts=[
  {name:'기단',x:280,y:350,w:200,h:30,desc:'집의 맨 아래 돌로 쌍은 단. 습기 차단 + 집 높이기',color:'#8a7a60'},
  {name:'주초돌',x:200,y:330,w:30,h:20,desc:'기둥 아래 놓는 넓적한 돌. 습기 차단',color:'#a09888'},
  {name:'기둥',x:200,y:230,w:20,h:100,desc:'집을 떠받치는 수직 나무. 소나무/참나무',color:'#c4956a'},
  {name:'보(대들보)',x:200,y:220,w:160,h:15,desc:'기둥과 기둥을 연결하는 큰 수평 부재',color:'#b8895e'},
  {name:'도리',x:280,y:200,w:120,h:10,desc:'보 위에 세로 방향으로 놓는 부재. 서까래 받침',color:'#a0854e'},
  {name:'서까래',x:230,y:140,w:120,h:60,desc:'지붕 골격을 만드는 비스듬한 부재. 지붕 곡선의 비밀',color:'#b09060'},
  {name:'기와지붕',x:200,y:100,w:200,h:40,desc:'흘으로 구운 기와를 올린 지붕. 방수+내구성',color:'#5a5a5a'},
  {name:'용마루',x:280,y:88,w:100,h:12,desc:'지붕 꼭대기 수평 마루. 최상단 장식',color:'#4a4a4a'},
  {name:'처마',x:180,y:130,w:40,h:10,desc:'지붕이 벖으로 빠져나온 부분. 빗물 차단',color:'#6a5a4a'},
  {name:'벽체',x:380,y:260,w:15,h:60,desc:'나무틀에 황토를 바른 벽',color:'#d4c0a0'},
  {name:'창호',x:380,y:280,w:30,h:30,desc:'나무살에 한지를 붙인 문/창',color:'#f0e4d0'},
  {name:'마루',x:260,y:360,w:80,h:10,desc:'나무 바닥. 여름 시원한 자연 에어컨',color:'#deb887'},
  {name:'온돌',x:340,y:365,w:60,h:10,desc:'바닥 난방. 세계 최초 바닥난방',color:'#c4a35a'}
];
var hoveredPart=-1;
function draw(){
  var cv=document.getElementById('v12-anatomy-canvas'); if(!cv) return;
  var c=cv.getContext('2d'), W=cv.width, H=cv.height;
  c.clearRect(0,0,W,H);
  c.fillStyle='rgba(196,149,106,.03)'; c.fillRect(0,0,W,H);
  c.fillStyle='#5a7a3a'; c.fillRect(0,H-30,W,30);
  parts.forEach(function(p,i){
    c.fillStyle=i===hoveredPart?'rgba(245,222,179,.9)':p.color;
    c.fillRect(p.x,p.y,p.w,p.h);
    c.strokeStyle=i===hoveredPart?'#f5deb3':'rgba(245,222,179,.4)';
    c.lineWidth=i===hoveredPart?2:1;
    c.strokeRect(p.x,p.y,p.w,p.h);
    c.lineWidth=1;
    var lx=p.x<280?p.x-10:p.x+p.w+10;
    var ly=p.y+p.h/2;
    c.strokeStyle=i===hoveredPart?'#f5deb3':'rgba(196,149,106,.4)';
    c.beginPath(); c.moveTo(p.x<280?p.x:p.x+p.w,ly);
    c.lineTo(lx,ly); c.stroke();
    c.beginPath(); c.arc(lx,ly,2,0,Math.PI*2); c.fillStyle=c.strokeStyle; c.fill();
    c.fillStyle=i===hoveredPart?'#f5deb3':'#c4956a';
    c.font=(i===hoveredPart?'bold ':'')+' 11px sans-serif';
    c.textAlign=p.x<280?'right':'left';
    c.fillText(p.name,p.x<280?lx-8:lx+8,ly+4);
  });
  c.fillStyle='#f5deb3'; c.font='bold 13px sans-serif'; c.textAlign='center';
  c.fillText('한옥 구조 해부도',W/2,20);
  c.fillStyle='#c4956a'; c.font='11px sans-serif';
  c.fillText('각 부위를 클릭하면 상세 설명을 볼 수 있습니다',W/2,38);
}
function handleClick(e){
  var cv=document.getElementById('v12-anatomy-canvas'); if(!cv) return;
  var rect=cv.getBoundingClientRect();
  var mx=(e.clientX-rect.left)*(cv.width/rect.width);
  var my=(e.clientY-rect.top)*(cv.height/rect.height);
  var info=document.getElementById('v12-anatomy-info');
  for(var i=0;i<parts.length;i++){
    var p=parts[i];
    if(mx>=p.x&&mx<=p.x+p.w&&my>=p.y&&my<=p.y+p.h){
      hoveredPart=i; draw();
      if(info) info.innerHTML='<strong style="color:#f5deb3">'+p.name+'</strong>: '+p.desc;
      v12SFX.play('anatomy_click');
      return;
    }
  }
  hoveredPart=-1; draw();
  if(info) info.innerHTML='부위를 클릭해주세요';
}
function open(){
  document.getElementById('v12-anatomy').classList.add('active');
  draw();
  var cv=document.getElementById('v12-anatomy-canvas');
  if(cv) cv.onclick=handleClick;
}
function close(){document.getElementById('v12-anatomy').classList.remove('active');}
return {open:open,close:close,load:function(){}};
})();

// ── 8. Architecture Timeline (건축 시대별 연표 Canvas) ──
var v12Timeline = (function(){
var KEY='hb_v12_timeline';
var eras=[
  {name:'선사시대',year:'~BC 300',desc:'움집/듀무막 주거. 반지하 주거지와 게다리집',color:'#7a6a50',icon:'⛺'},
  {name:'삼국시대',year:'BC 57~668',desc:'성골/사찰/궁궐 건축. 불국사와 황룡사 목탑',color:'#8b6914',icon:'🏯'},
  {name:'통일신라',year:'668~935',desc:'불교 건축 전성기. 석굴암, 불국사, 첨성대',color:'#c4956a',icon:'✨'},
  {name:'고려시대',year:'918~1392',desc:'개경 궁궐 건축. 벽안사 팔만대장경 저장',color:'#6495ed',icon:'🏛'},
  {name:'조선 전기',year:'1392~1600',desc:'경복궁/창덕궁 건축. 유교 곢간 배치 정립',color:'#4a7c59',icon:'👑'},
  {name:'조선 후기',year:'1600~1897',desc:'수원화성 중건. 서원 건축 전성기',color:'#9b59b6',icon:'🏰'},
  {name:'근대',year:'1897~1945',desc:'서양 건축 도입. 명동성당, 서울역 등',color:'#e07c4f',icon:'🏤'},
  {name:'현대',year:'1945~현재',desc:'고층건물/아파트. 한옥 현대화 시도',color:'#e74c3c',icon:'🏗'}
];
var visited=JSON.parse(localStorage.getItem(KEY)||'[]');
function save(){localStorage.setItem(KEY,JSON.stringify(visited));}
function draw(){
  var cv=document.getElementById('v12-timeline-canvas'); if(!cv) return;
  var c=cv.getContext('2d'), W=cv.width, H=cv.height;
  c.clearRect(0,0,W,H);
  c.fillStyle='#f5deb3'; c.font='bold 14px sans-serif'; c.textAlign='center';
  c.fillText('한국 건축 시대별 연표',W/2,22);
  var lineX=80, startY=50, gap=55;
  c.strokeStyle='rgba(196,149,106,.3)'; c.lineWidth=3;
  c.beginPath(); c.moveTo(lineX,startY); c.lineTo(lineX,startY+gap*eras.length); c.stroke();
  c.lineWidth=1;
  eras.forEach(function(era,i){
    var y=startY+i*gap+gap/2;
    var vis=visited.indexOf(i)>=0;
    c.beginPath(); c.arc(lineX,y,10,0,Math.PI*2);
    c.fillStyle=vis?era.color:'rgba(196,149,106,.3)'; c.fill();
    c.strokeStyle='rgba(245,222,179,.5)'; c.stroke();
    c.fillStyle='#f5deb3'; c.font='bold 12px sans-serif'; c.textAlign='left';
    c.fillText(era.icon+' '+era.name,lineX+24,y-6);
    c.fillStyle='#c4956a'; c.font='11px sans-serif';
    c.fillText(era.year,lineX+24,y+10);
    c.fillStyle=vis?'#e8d5c0':'rgba(196,149,106,.5)'; c.font='11px sans-serif';
    var maxW=W-lineX-40;
    c.fillText(era.desc.substring(0,Math.floor(maxW/7)),lineX+24,y+26);
    if(vis){
      c.fillStyle='rgba(74,124,89,.3)'; c.fillRect(lineX+18,y-18,W-lineX-30,50);
      c.strokeStyle='rgba(74,124,89,.5)'; c.strokeRect(lineX+18,y-18,W-lineX-30,50);
    }
  });
}
function handleClick(e){
  var cv=document.getElementById('v12-timeline-canvas'); if(!cv) return;
  var rect=cv.getBoundingClientRect();
  var my=(e.clientY-rect.top)*(cv.height/rect.height);
  var startY=50, gap=55;
  for(var i=0;i<eras.length;i++){
    var y=startY+i*gap+gap/2;
    if(my>=y-20&&my<=y+30){
      if(visited.indexOf(i)<0){visited.push(i);save();}
      v12SFX.play('timeline_open');
      var info=document.getElementById('v12-timeline-info');
      if(info) info.innerHTML='<strong style="color:#f5deb3">'+eras[i].name+'</strong> ('+eras[i].year+'): '+eras[i].desc;
      draw();
      return;
    }
  }
}
function open(){
  document.getElementById('v12-timeline').classList.add('active');
  draw();
  var cv=document.getElementById('v12-timeline-canvas');
  if(cv) cv.onclick=handleClick;
}
function close(){document.getElementById('v12-timeline').classList.remove('active');}
return {open:open,close:close,visited:visited,load:function(){}};
})();

// ── 9. Interior Style Gallery (인테리어 갤러리 12종) ──
var v12Interior = (function(){
var KEY='hb_v12_interior';
var styles=[
  {name:'한옥 정간',cat:'전통',desc:'소반, 병풍, 마루 바닥. 자연 소재의 따뜻한 분위기.',tip:'한옥 인테리어는 좌식 생활에 맞춰 낮은 가구가 특징'},
  {name:'사람방',cat:'전통',desc:'서재, 문갑, 필방구. 선비의 학문 공간.',tip:'사람방은 남성 전용 공간으로 손님 접대도 했음'},
  {name:'안방',cat:'전통',desc:'장롱, 반닫이, 온돌 바닥. 여성의 공간.',tip:'안방은 가장 따뜻한 방으로 온돌이 있었음'},
  {name:'대청마루',cat:'전통',desc:'개방형 마루. 여름 시원한 자연 에어컨.',tip:'대청마루 아래로 바람이 지나가 통풍이 됨'},
  {name:'미니멀리즘',cat:'현대',desc:'백색 벡, 간결한 가구. 깨끗한 선과 광활한 공간.',tip:'미니멀리즘은 작은 공간을 넓어 보이게 함'},
  {name:'스칸디나비아',cat:'현대',desc:'보드 바닥, 허그(hygge). 아늘하고 따뜻한 북유럽 풍.',tip:'하얀 바탕에 목재 가구로 따뜻함을 더함'},
  {name:'인더스트리얼',cat:'현대',desc:'벽돌 벡, 철제 가구. 공장 풍 무골 디자인.',tip:'노출 철골과 벧돌벽이 인더스트리얼의 특징'},
  {name:'재패니즈 미니멀',cat:'현대',desc:'와비사비, 후톤 다다미. 일본식 미니멀리즘.',tip:'한옥 정간과 유사한 자연 소재 중시'},
  {name:'한옥 현대화',cat:'폨졜',desc:'전통 한옥에 현대 편의시설 도입.',tip:'온돌+에어컨, 마루+철제가구 조합'},
  {name:'한옥 카페',cat:'폨졜',desc:'한옥 공간을 카페로 활용. 병풍+종이등.',tip:'전통 문양 포인트 가구와 카페 문화 융합'},
  {name:'에코 한옥',cat:'폨졜',desc:'환경 친화적 한옥. 태양광+빗물+재활용.',tip:'전통 황토 벌체는 자연 단열재 역할을 함'},
  {name:'한옥 스테이',cat:'폨졜',desc:'한옥 숙박 체험. 전통 침구+현대 안락.',tip:'한옥스테이는 한국 관광의 핵심 콘텐츠'}
];
var readList=JSON.parse(localStorage.getItem(KEY)||'[]');
function save(){localStorage.setItem(KEY,JSON.stringify(readList));}
function render(){
  var el=document.getElementById('v12-interior-list'); if(!el) return;
  el.innerHTML=styles.map(function(s,i){
    var rd=readList.indexOf(i)>=0;
    return '<div class="v12-item'+(rd?' read':'')+'" data-idx="'+i+'"><h4>'+s.name+' <span class="tag">'+s.cat+'</span></h4><p>'+s.desc+'</p><div class="detail"><p>'+s.tip+'</p></div></div>';
  }).join('');
  el.querySelectorAll('.v12-item').forEach(function(item){
    item.onclick=function(){
      item.classList.toggle('expanded');
      var idx=parseInt(item.dataset.idx);
      if(readList.indexOf(idx)<0){readList.push(idx);save();item.classList.add('read');}
      v12SFX.play('interior_view');
    };
  });
}
function open(){document.getElementById('v12-interior').classList.add('active');render();}
function close(){document.getElementById('v12-interior').classList.remove('active');}
return {open:open,close:close,readList:readList,load:render};
})();

// ── 10. Architecture License Test (건축 자격증 시험 20문) ──
var v12License = (function(){
var KEY='hb_v12_license';
var questions=[
  {q:'건폐율이란?',a:['건축면적/대지면적','연면적/대지면적','높이/너비','바닥/천정'],c:0,exp:'건폐율은 대지면적 대비 건축면적의 비율입니다'},
  {q:'한옥의 기둥 사이 공간을 뭔라고 하나?',a:['칸','마룣','보','도리'],c:0,exp:'기둥과 기둥 사이의 공간을 “칸”이라 합니다'},
  {q:'내진설계 의무 기준은?',a:['2층 이상 200m² 이상','3층 이상','모든 건물','1층 이상'],c:0,exp:'2층 이상 또는 200m² 이상 건물에 내진설계가 의무입니다'},
  {q:'콘크리트 양생 기간은?',a:['28일','7일','14일','90일'],c:0,exp:'콘크리트는 28일 양생 후 설계 강도의 80% 이상을 발휘합니다'},
  {q:'한옥 지붕의 꼭대기 수평 부재는?',a:['용마루','처마','박공','합각'],c:0,exp:'용마루는 지붕 꼭대기 수평 부재입니다'},
  {q:'팝작지붕의 양쪽 삼각형 부분은?',a:['합각(박공)','처마','내림마루','캔틸레버'],c:0,exp:'합각(合閣)은 팝작지붕 양쪽의 삼각형 벡면입니다'},
  {q:'벽체의 단열성능 측정 단위는?',a:['W/m²K','kg/m³','Pa','lux'],c:0,exp:'열관류율(W/m²K)이 낮을수록 단열성능이 좋습니다'},
  {q:'수원화성 설계자는?',a:['정약용','이익','박지원','황희'],c:0,exp:'정약용이 거중기를 발명하여 수원화성을 설계했습니다'},
  {q:'조선 최초의 서원은?',a:['소수서원','도산서원','옥산서원','병산서원'],c:0,exp:'소수서원은 1543년 풍기군수 주세붕이 세운 최초의 서원'},
  {q:'방화구획 면적 기준은?',a:['1000m² 이하','500m² 이하','2000m² 이하','300m² 이하'],c:0,exp:'방화구획은 1000m² 이하로 구획해야 합니다'},
  {q:'배산임수의 의미는?',a:['산을 뒤에 물을 앞에','물을 뒤에 산을 앞에','평지에 건축','높은 곳에 건축'],c:0,exp:'배산임수는 복풍을 막고 남향을 받는 풍수지리 원칙'},
  {q:'한지의 자외선 차단율은?',a:['약 99%','약 80%','약 50%','약 30%'],c:0,exp:'한지는 자외선을 약 99% 차단하며 통풍성도 좋습니다'},
  {q:'기와를 구울 때 필요한 온도는?',a:['1200도 이상','800도','500도','1500도'],c:0,exp:'기와는 1200도 이상에서 구워야 내구성이 생깁니다'},
  {q:'공포의 역할은?',a:['지붕 하중 분산','바닥 난방','방수','환기'],c:0,exp:'공포(桁包)는 기둥과 지붕 사이에서 하중을 분산합니다'},
  {q:'온돌의 열 전달 경로를 뭔라고 하나?',a:['고래','구들장','아궁이','굴뚝'],c:0,exp:'고래는 방바닥 아래의 연기 통로입니다'},
  {q:'강화유리는 일반 유리보다 몇 배 강한가?',a:['5배','3배','10배','2배'],c:0,exp:'강화유리는 일반 유리보다 약 5배 강합니다'},
  {q:'서원에서 성현의 위패를 모시는 건물은?',a:['사당','강당','동재','외삼문'],c:0,exp:'사당(祠堂)은 서원 가장 높은 곳에 위치'},
  {q:'한국 서원 몇 곳이 유네스코 세계유산인가?',a:['9곳','5곳','12곳','3곳'],c:0,exp:'2019년 한국의 서원 9곳이 유네스코 세계유산으로 등재'},
  {q:'불국사를 창건한 나라는?',a:['신라','백제','고려','조선'],c:0,exp:'불국사는 신라 경덕왕 때 창건되었습니다'},
  {q:'주택 계단 너비 최소 기준은?',a:['75cm','60cm','90cm','100cm'],c:0,exp:'주택 계단은 너비 75cm 이상, 높이 18cm 이하가 기준'}
];
var state={idx:0,correct:0,total:0,best:parseInt(localStorage.getItem(KEY+'_best')||'0')};
function save(){localStorage.setItem(KEY+'_best',state.best.toString());}
function render(){
  var el=document.getElementById('v12-license-header');
  if(el) el.innerHTML='<span style="color:#c4956a;font-size:13px">'+(state.idx+1)+' / '+questions.length+'</span> | <span style="color:#f5deb3;font-size:13px">정답: '+state.correct+'</span> | <span style="color:#c4956a;font-size:11px">최고: '+state.best+'점</span>';
  var q=questions[state.idx];
  document.getElementById('v12-license-q').textContent=q.q;
  var opts=document.getElementById('v12-license-opts');
  opts.innerHTML=q.a.map(function(a,i){return '<button class="v12-quiz-opt" data-idx="'+i+'">'+a+'</button>';}).join('');
  opts.querySelectorAll('.v12-quiz-opt').forEach(function(btn){btn.onclick=function(){answer(parseInt(btn.dataset.idx));};});
  document.getElementById('v12-license-fb').style.display='none';
  document.getElementById('v12-license-next').style.display='none';
}
function answer(idx){
  var q=questions[state.idx];
  var opts=document.querySelectorAll('.v12-quiz-opt');
  opts.forEach(function(o,i){
    o.disabled=true;
    if(i===q.c) o.classList.add('correct');
    else if(i===idx) o.classList.add('wrong');
  });
  if(idx===q.c){state.correct++;v12SFX.play('license_correct');}
  else v12SFX.play('license_wrong');
  var fb=document.getElementById('v12-license-fb');
  fb.textContent=(idx===q.c?'✓ 정답! ':'✗ 오답. ')+q.exp;
  fb.style.display='block';
  var nb=document.getElementById('v12-license-next');
  nb.style.display='inline-block';
  nb.textContent=state.idx<questions.length-1?'다음 문제':'결과 보기';
  nb.onclick=function(){
    state.idx++;
    if(state.idx>=questions.length){
      var score=Math.round(state.correct/questions.length*100);
      if(score>state.best){state.best=score;save();}
      var grade=score>=90?'S':score>=75?'A':score>=55?'B':score>=35?'C':'D';
      document.getElementById('v12-license-q').innerHTML='<div style="text-align:center"><div style="font-size:48px;margin-bottom:10px">'+(score>=60?'🎉':'💪')+'</div><div style="font-size:20px;color:#f5deb3;margin-bottom:8px">'+grade+' 등급 ('+score+'점)</div><div style="color:#c4956a">'+state.correct+' / '+questions.length+' 정답'+(score>=60?' - 합격!':' - 불합격')+'</div></div>';
      fb.style.display='none';
      document.getElementById('v12-license-opts').innerHTML='';
      nb.textContent='다시 도전';
      nb.onclick=function(){state.idx=0;state.correct=0;render();};
      if(score>=60) v12SFX.play('license_pass');
      return;
    }
    render();
  };
  var hdr=document.getElementById('v12-license-header');
  if(hdr) hdr.innerHTML='<span style="color:#c4956a;font-size:13px">'+(state.idx+1)+' / '+questions.length+'</span> | <span style="color:#f5deb3;font-size:13px">정답: '+state.correct+'</span>';
}
function open(){document.getElementById('v12-license').classList.add('active');state.idx=0;state.correct=0;render();}
function close(){document.getElementById('v12-license').classList.remove('active');}
return {open:open,close:close,state:state,load:function(){}};
})();

// ── 11. Indoor Lighting Simulator (실내 조명 시뮬레이터 Canvas) ──
var v12Lighting = (function(){
var lightTypes=[
  {name:'호롯불',type:'candle',color:'#ff9933',radius:80,desc:'전통 호롯불. 따뜻한 분위기'},
  {name:'백열등',type:'warm',color:'#ffcc66',radius:120,desc:'따뜻한 백열등. 보편적 조명'},
  {name:'LED 백색',type:'cool',color:'#e0e8ff',radius:140,desc:'시원한 LED 조명. 활동적 공간'},
  {name:'창호지 조명',type:'paper',color:'#ffe8c0',radius:90,desc:'한지 투과 조명. 은은한 빛'},
  {name:'달빛',type:'moon',color:'#c8d8ff',radius:160,desc:'밤 달빛 조명. 명상적 분위기'},
  {name:'스포트라이트',type:'spot',color:'#ffffff',radius:60,desc:'집중 조명. 특정 공간 강조'}
];
var lights=[];
var currentType=0, brightness=60, temperature=50;
function draw(){
  var cv=document.getElementById('v12-light-canvas'); if(!cv) return;
  var c=cv.getContext('2d'), W=cv.width, H=cv.height;
  c.fillStyle='#1a1410'; c.fillRect(0,0,W,H);
  c.strokeStyle='rgba(196,149,106,.15)';
  c.strokeRect(20,20,W-40,H-40);
  c.strokeRect(W/2-20,H-22,40,4);
  c.fillStyle='rgba(196,149,106,.1)'; c.fillRect(W/2-20,H-22,40,4);
  c.fillStyle='rgba(196,149,106,.08)';
  c.fillRect(30,30,80,60);
  c.strokeStyle='rgba(196,149,106,.12)'; c.strokeRect(30,30,80,60);
  c.fillStyle='rgba(196,149,106,.06)';
  c.fillRect(W-130,50,100,80);
  c.strokeStyle='rgba(196,149,106,.12)'; c.strokeRect(W-130,50,100,80);
  lights.forEach(function(l){
    var lt=lightTypes[l.typeIdx];
    var r=lt.radius*(brightness/60);
    var grad=c.createRadialGradient(l.x,l.y,0,l.x,l.y,r);
    var alpha=brightness/100*0.6;
    var warmShift=temperature/100;
    var baseColor=lt.color;
    grad.addColorStop(0,baseColor.replace(')',','+alpha+')').replace('rgb','rgba').replace('#','')||'rgba(255,200,100,'+alpha+')');
    grad.addColorStop(0.4,'rgba(255,220,150,'+(alpha*0.4)+')');
    grad.addColorStop(1,'rgba(0,0,0,0)');
    c.globalCompositeOperation='screen';
    c.fillStyle=grad;
    c.beginPath(); c.arc(l.x,l.y,r,0,Math.PI*2); c.fill();
    c.globalCompositeOperation='source-over';
    c.fillStyle='#f5deb3'; c.font='12px sans-serif'; c.textAlign='center';
    c.fillText(lt.name,l.x,l.y-r*0.15-4);
    c.beginPath(); c.arc(l.x,l.y,4,0,Math.PI*2); c.fillStyle=lt.color; c.fill();
  });
  if(lights.length===0){
    c.fillStyle='rgba(196,149,106,.4)'; c.font='14px sans-serif'; c.textAlign='center';
    c.fillText('클릭하여 조명을 배치하세요',W/2,H/2);
  }
  var info=document.getElementById('v12-light-info');
  if(info) info.innerHTML='조명 '+lights.length+'개 | 밝기 '+brightness+'% | 색온도 '+(temperature<33?'차가운':temperature<66?'중간':'따뜻한');
}
function renderTypes(){
  var el=document.getElementById('v12-light-types'); if(!el) return;
  el.innerHTML=lightTypes.map(function(lt,i){
    return '<button class="v12-tab'+(currentType===i?' active':'')+'" data-idx="'+i+'">'+lt.name+'</button>';
  }).join('');
  el.querySelectorAll('.v12-tab').forEach(function(btn){
    btn.onclick=function(){currentType=parseInt(btn.dataset.idx);renderTypes();};
  });
}
function handleClick(e){
  var cv=document.getElementById('v12-light-canvas'); if(!cv) return;
  var rect=cv.getBoundingClientRect();
  var mx=(e.clientX-rect.left)*(cv.width/rect.width);
  var my=(e.clientY-rect.top)*(cv.height/rect.height);
  for(var i=lights.length-1;i>=0;i--){
    var dx=mx-lights[i].x, dy=my-lights[i].y;
    if(dx*dx+dy*dy<400){lights.splice(i,1);draw();return;}
  }
  lights.push({x:mx,y:my,typeIdx:currentType});
  v12SFX.play('light_adjust'); draw();
}
function open(){
  document.getElementById('v12-lighting').classList.add('active');
  renderTypes(); draw();
  var cv=document.getElementById('v12-light-canvas');
  if(cv) cv.onclick=handleClick;
  var bs=document.getElementById('v12-light-bright');
  if(bs) bs.oninput=function(){brightness=parseInt(bs.value);draw();};
  var ts=document.getElementById('v12-light-temp');
  if(ts) ts.oninput=function(){temperature=parseInt(ts.value);draw();};
}
function close(){document.getElementById('v12-lighting').classList.remove('active');}
return {open:open,close:close,load:function(){}};
})();

// ── 12. Quiz v12 (+15 questions, 105→120) ──
var v12Quiz = (function(){
var questions=[
  {q:'평면도에서 방의 면적을 산정하는 기준은?',a:['베 중심선','바닥면','바깥면','천정면'],c:0},
  {q:'한옥의 기둥 배치 방법 중 가운데가 불룩한 기법은?',a:['배흘림','휘어잡기','민흘림','촉장'],c:0},
  {q:'고려시대 해인사에 보관된 유물은?',a:['팔만대장경','훈민정음','직지심체요절','삼국사기'],c:0},
  {q:'현대 아파트 바닥충격음 기준은 몇 dB 이하인가?',a:['50dB','40dB','60dB','70dB'],c:0},
  {q:'한옥의 창호지 문양 중 부귀를 상징하는 꽃은?',a:['모란','국화','매화','난초'],c:0},
  {q:'중요무형문화재 대목장의 역할은?',a:['목조건축 총책임자','기와 굿는 사람','단청 화가','석조 조각가'],c:0},
  {q:'건축물 에너지효율 1등급 기준 연간 에너지 사용량은?',a:['120kWh/m² 이하','200kWh/m² 이하','300kWh/m² 이하','80kWh/m² 이하'],c:0},
  {q:'한옥 지붕의 곡선을 만드는 핵심 부재는?',a:['서까래','도리','보','기둥'],c:0},
  {q:'한국 도어락 세계 점유율 순위는?',a:['1위','2위','3위','5위'],c:0},
  {q:'황토가 자연스럽게 유지하는 실내 습도는?',a:['약 50%','약 30%','약 70%','약 20%'],c:0},
  {q:'건축물 방수시트는 최소 몇 겹 이상인가?',a:['3겹','2겹','5겹','1겹'],c:0},
  {q:'한옥의 처마가 바깥으로 믰어져 나온 이유는?',a:['빗물이 베 밖으로 떨어지게','또 보기 좋게','바람을 막기 위해','믴게를 무겁게'],c:0},
  {q:'삼중유리의 에너지 효율은 일반 유리의 몇 배?',a:['4배','2배','6배','3배'],c:0},
  {q:'단청의 5색이 유래한 사상은?',a:['음양오행','불교','유교','도교'],c:0},
  {q:'도산서원을 세운 사람은?',a:['퇴계 이황','주세붕','율곡 이이','송시열'],c:0}
];
function inject(){if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){questions.forEach(function(q){var dup=window.quizQuestions.some(function(eq){return eq.q===q.q;});if(!dup)window.quizQuestions.push(q);});}}
return {inject:inject,count:questions.length};
})();

// ── 13. Achievement System v12 (+12, 110→122) ──
var v12Achieve = (function(){
var KEY='hb_achievements';
var defs=[
  {id:'fp_designer',name:'평면도 설계사',desc:'평면도에 20칸 이상 배치',icon:'🏠',check:function(){return v12FloorPlan.grid.filter(function(g){return g;}).length>=20;}},
  {id:'fp_master',name:'평면도 마스터',desc:'평면도 50칸 이상 배치',icon:'📏',check:function(){return v12FloorPlan.grid.filter(function(g){return g;}).length>=50;}},
  {id:'furn_placer',name:'가구 배치사',desc:'가구 5개 이상 배치',icon:'🪑',check:function(){return v12Furniture.placed.length>=5;}},
  {id:'furn_master',name:'인테리어 마스터',desc:'가구 12개 이상 배치',icon:'🏅',check:function(){return v12Furniture.placed.length>=12;}},
  {id:'cost_analyst',name:'비용 분석가',desc:'비용 계산기 확인',icon:'💰',check:function(){return true;}},
  {id:'anatomy_student',name:'한옥 해부학자',desc:'해부도에서 5부위 확인',icon:'🏛️',check:function(){return true;}},
  {id:'timeline_explorer',name:'역사 탐험가',desc:'연표에서 4시대 확인',icon:'📅',check:function(){return v12Timeline.visited.length>=4;}},
  {id:'timeline_master',name:'역사 마스터',desc:'연표 8시대 전부 확인',icon:'🏆',check:function(){return v12Timeline.visited.length>=8;}},
  {id:'interior_lover',name:'인테리어 럫버',desc:'인테리어 6종 이상 확인',icon:'🛋️',check:function(){return v12Interior.readList.length>=6;}},
  {id:'license_pass',name:'건축사 합격',desc:'자격증 시험 60점 이상',icon:'📝',check:function(){return v12License.state.best>=60;}},
  {id:'license_master',name:'건축사 만점',desc:'자격증 시험 90점 이상',icon:'🪙',check:function(){return v12License.state.best>=90;}},
  {id:'v12_explorer',name:'v12 탐험가',desc:'v12의 모든 기능 탐험',icon:'🌟',check:function(){return v12Timeline.visited.length>0&&v12Interior.readList.length>0;}}
];
var earned=JSON.parse(localStorage.getItem(KEY)||'[]');
function check(){var nw=false;defs.forEach(function(d){if(earned.indexOf(d.id)<0&&d.check()){earned.push(d.id);nw=true;showToast(d);}});if(nw)localStorage.setItem(KEY,JSON.stringify(earned));}
function showToast(d){v12SFX.play('achieve_v12');var t=document.getElementById('achToast');if(!t)return;t.querySelector('.ach-icon').textContent=d.icon;t.querySelector('.ach-name').textContent=d.name;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},3000);}
return {check:check,earned:earned};
})();

// ── 14. Bottom Navigation Bar (하단 스크롤 네비바 8종) ──
(function(){
var navItems=[
  {icon:'🏠',label:'평면도',fn:function(){v12FloorPlan.open();}},
  {icon:'🪑',label:'가구배치',fn:function(){v12Furniture.open();}},
  {icon:'💰',label:'비용계산',fn:function(){v12Cost.open();}},
  {icon:'🏛️',label:'해부도',fn:function(){v12Anatomy.open();}},
  {icon:'📅',label:'연표',fn:function(){v12Timeline.open();}},
  {icon:'🛋️',label:'인테리어',fn:function(){v12Interior.open();}},
  {icon:'📝',label:'자격시험',fn:function(){v12License.open();}},
  {icon:'💡',label:'조명',fn:function(){v12Lighting.open();}}
];
function inject(){
  var bar=document.createElement('div');
  bar.className='v12-nav-bar';
  navItems.forEach(function(ni){
    var item=document.createElement('div');
    item.className='v12-nav-item';
    item.innerHTML='<div class="nav-icon">'+ni.icon+'</div><div>'+ni.label+'</div>';
    item.onclick=ni.fn;
    bar.appendChild(item);
  });
  document.body.appendChild(bar);
}
if(document.readyState==='complete'||document.readyState==='interactive') inject();
else document.addEventListener('DOMContentLoaded',inject);
})();

// ── 15. Keyboard Shortcuts (+8: Shift+F/U/O/A/E/I/L/G) ──
(function(){
document.addEventListener('keydown',function(e){
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
  if(!e.shiftKey) return;
  switch(e.key.toUpperCase()){
    case 'F':e.preventDefault();v12FloorPlan.open();break;
    case 'U':e.preventDefault();v12Furniture.open();break;
    case 'O':e.preventDefault();v12Cost.open();break;
    case 'A':e.preventDefault();v12Anatomy.open();break;
    case 'E':e.preventDefault();v12Timeline.open();break;
    case 'I':e.preventDefault();v12Interior.open();break;
    case 'L':e.preventDefault();v12License.open();break;
    case 'G':e.preventDefault();v12Lighting.open();break;
  }
});
})();

// ── 16. Panel Open/Close helpers ──
window.v12Close = function(panel){
  var map={floorplan:v12FloorPlan,furniture:v12Furniture,cost:v12Cost,anatomy:v12Anatomy,timeline:v12Timeline,interior:v12Interior,license:v12License,lighting:v12Lighting};
  if(map[panel]) map[panel].close();
  v12Achieve.check();
};

// ── 17. Inject quiz on load ──
(function(){function tryInject(){if(typeof window.quizQuestions==='object'){v12Quiz.inject();return true;}return false;}if(!tryInject()){var ci=setInterval(function(){if(tryInject())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);}})();

// ── 18. Hook into game completion ──
(function(){function hookComplete(){var orig=window.showComplete;if(typeof orig!=='function')return false;if(window.__v12Hooked)return true;window.__v12Hooked=true;var prev=window.showComplete;window.showComplete=function(){prev.apply(this,arguments);setTimeout(function(){v12Achieve.check();},500);};return true;}if(!hookComplete()){var ci=setInterval(function(){if(hookComplete())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);}})();

// ── 19. Initial load + achievement checks ──
(function(){
v12FloorPlan.load(); v12Furniture.load(); v12Cost.load();
v12Anatomy.load(); v12Timeline.load(); v12Interior.load();
v12License.load(); v12Lighting.load();
setTimeout(function(){v12Achieve.check();},3000);
})();

// end v12 guard
}
// =====================================================
// House Builder v11.0 Patch
// 건축재료실험실15종Canvas+세계건축여행10국+시공시뮬레이터6단계Canvas
// 건축법규가이드12종+나만의마을Canvas+건축명장열전12인+통계대시보드Canvas
// 건축BGM주크박스8곡+퀴즈15추가(90→105)+업적12추가(98→110)+SFX12종+키보드8종
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV11) {
window.__hbV11 = true;

// ── 1. CSS Injection v11 ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v11-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3500;overflow-y:auto;padding:16px}',
    '.v11-panel.active{display:block}',
    '.v11-box{max-width:680px;margin:40px auto}',
    '.v11-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v11-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v11-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v11-close:hover{background:#d4a57a}',
    '.v11-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v11-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v11-tab:hover,.v11-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v11-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}',
    '.v11-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v11-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v11-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v11-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v11-card p{color:#c4956a;font-size:11px;margin:0}',
    '.v11-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v11-item{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v11-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v11-item.read{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v11-item h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v11-item h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v11-item p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v11-item .detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v11-item.expanded .detail{display:block}',
    '.v11-stat-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}',
    '.v11-stat-row .stat-label{width:80px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0}',
    '.v11-stat-row .stat-bar{flex:1;height:18px;background:rgba(255,255,255,.08);border-radius:9px;overflow:hidden}',
    '.v11-stat-row .stat-fill{height:100%;border-radius:9px;transition:width .4s}',
    '.v11-stat-row .stat-val{width:36px;color:#c4956a;font-size:12px;flex-shrink:0}',
    '.v11-village-cell{width:40px;height:40px;border:1px solid rgba(196,149,106,.15);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;transition:all .15s;background:rgba(255,255,255,.02)}',
    '.v11-village-cell:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v11-village-cell.placed{background:rgba(196,149,106,.12);border-color:rgba(196,149,106,.4)}',
    '.v11-jukebox-item{display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;margin-bottom:8px;cursor:pointer;transition:all .2s}',
    '.v11-jukebox-item:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v11-jukebox-item.playing{border-color:#4a7c59;background:rgba(74,124,89,.1)}',
    '.v11-jukebox-item .song-icon{font-size:24px}',
    '.v11-jukebox-item .song-info{flex:1}',
    '.v11-jukebox-item .song-info h4{color:#f5deb3;font-size:13px;margin:0}',
    '.v11-jukebox-item .song-info p{color:#c4956a;font-size:11px;margin:0}',
    '.v11-jukebox-item .song-btn{padding:6px 14px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer}',
    '.v11-process-step{display:flex;align-items:center;gap:12px;padding:12px 14px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;margin-bottom:8px;transition:all .2s}',
    '.v11-process-step.active{border-color:#c4956a;background:rgba(196,149,106,.12)}',
    '.v11-process-step.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v11-process-step .step-num{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0;background:rgba(255,255,255,.1);color:#c4956a}',
    '.v11-process-step.active .step-num{background:#c4956a;color:#2d1b0e}',
    '.v11-process-step.done .step-num{background:#4a7c59;color:#fff}',
    '.v11-process-step .step-info{flex:1}',
    '.v11-process-step .step-info h4{color:#f5deb3;font-size:13px;margin:0 0 2px}',
    '.v11-process-step .step-info p{color:#c4956a;font-size:11px;margin:0}',
    '.v11-process-step .step-timer{color:#f5deb3;font-size:14px;font-weight:700;min-width:40px;text-align:right}',
    '.v11-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v11-btn-sm:hover{background:#d4a57a}',
    '.v11-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v11-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '@media(max-width:600px){.v11-box{margin:16px auto}.v11-grid{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}.v11-village-cell{width:32px;height:32px;font-size:14px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection v11 ──
(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v11-panels';
  wrap.innerHTML = '<div id="v11-matlab" class="v11-panel"><div class="v11-box"><h2>&#x1F9EA; &#xAC74;&#xCD95; &#xC7AC;&#xB8CC; &#xC2E4;&#xD5D8;&#xC2E4;</h2><p>15&#xC885; &#xC7AC;&#xB8CC;&#xC758; &#xBB3C;&#xC131;&#xC744; 5&#xCD95; &#xB808;&#xC774;&#xB354;&#xB85C; &#xBE44;&#xAD50;&#xD574;&#xBCF4;&#xC138;&#xC694;</p><div class="v11-tabs" id="v11-mat-tabs"></div><canvas id="v11-mat-canvas" class="v11-canvas" width="440" height="380"></canvas><div id="v11-mat-detail" style="text-align:center;color:#c4956a;font-size:13px;margin:10px 0"></div><div id="v11-mat-compare" style="text-align:center;margin:10px 0"></div><button class="v11-close" onclick="v11Close(\'matlab\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-world" class="v11-panel"><div class="v11-box"><h2>&#x1F30D; &#xC138;&#xACC4; &#xAC74;&#xCD95; &#xC5EC;&#xD589;</h2><p>10&#xAC1C;&#xAD6D; &#xC720;&#xBA85; &#xAC74;&#xCD95;&#xBB3C;&#xACFC; &#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC744; &#xBE44;&#xAD50;&#xD574;&#xBCF4;&#xC138;&#xC694;</p><div id="v11-world-list"></div><button class="v11-close" onclick="v11Close(\'world\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-construct" class="v11-panel"><div class="v11-box"><h2>&#x1F6A7; &#xAC74;&#xCD95; &#xC2DC;&#xACF5; &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2><p>6&#xB2E8;&#xACC4; &#xC2DC;&#xACF5; &#xACFC;&#xC815;&#xC744; &#xCCB4;&#xD5D8;&#xD558;&#xC138;&#xC694;</p><div id="v11-construct-steps"></div><div style="text-align:center;margin:16px 0"><button class="v11-btn-sm" id="v11-construct-start">&#xC2DC;&#xACF5; &#xC2DC;&#xC791;</button> <button class="v11-btn-outline" id="v11-construct-reset">&#xCD08;&#xAE30;&#xD654;</button></div><canvas id="v11-construct-canvas" class="v11-canvas" width="500" height="200"></canvas><button class="v11-close" onclick="v11Close(\'construct\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-code" class="v11-panel"><div class="v11-box"><h2>&#x1F4DC; &#xAC74;&#xCD95;&#xBC95;&#xADDC; &#xAC00;&#xC774;&#xB4DC;</h2><p>12&#xC885; &#xAC74;&#xCD95; &#xBC95;&#xADDC;&#xB97C; &#xD559;&#xC2B5;&#xD558;&#xC138;&#xC694;</p><div class="v11-tabs" id="v11-code-tabs"></div><div id="v11-code-list"></div><button class="v11-close" onclick="v11Close(\'code\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-village" class="v11-panel"><div class="v11-box"><h2>&#x1F3D8;&#xFE0F; &#xB098;&#xB9CC;&#xC758; &#xB9C8;&#xC744; &#xB9CC;&#xB4E4;&#xAE30;</h2><p>8x8 &#xADF8;&#xB9AC;&#xB4DC;&#xC5D0; &#xAC74;&#xBB3C;&#xC744; &#xBC30;&#xCE58;&#xD574; &#xB9C8;&#xC744;&#xC744; &#xB9CC;&#xB4DC;&#xC138;&#xC694;</p><div class="v11-tabs" id="v11-village-tools"></div><div id="v11-village-grid" style="display:inline-grid;grid-template-columns:repeat(8,40px);gap:1px;margin:10px auto;justify-content:center"></div><div id="v11-village-stats" style="text-align:center;color:#c4956a;font-size:12px;margin:10px 0"></div><div style="text-align:center;margin:10px 0"><button class="v11-btn-sm" id="v11-village-save">&#xC800;&#xC7A5;</button> <button class="v11-btn-outline" id="v11-village-clear">&#xCD08;&#xAE30;&#xD654;</button></div><button class="v11-close" onclick="v11Close(\'village\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-masters" class="v11-panel"><div class="v11-box"><h2>&#x1F477; &#xAC74;&#xCD95; &#xBA85;&#xC7A5; &#xC5F4;&#xC804;</h2><p>&#xD55C;&#xAD6D; &#xAC74;&#xCD95;&#xC0AC;&#xC758; 12&#xC778; &#xBA85;&#xC7A5;&#xACFC; &#xAC74;&#xCD95;&#xAC00;</p><div id="v11-masters-list"></div><button class="v11-close" onclick="v11Close(\'masters\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-stats" class="v11-panel"><div class="v11-box"><h2>&#x1F4CA; &#xAC74;&#xCD95; &#xD1B5;&#xACC4; &#xB300;&#xC2DC;&#xBCF4;&#xB4DC;</h2><p>&#xC804;&#xCCB4; &#xD65C;&#xB3D9; &#xD1B5;&#xACC4;&#xC640; 6&#xCD95; &#xB808;&#xC774;&#xB354; &#xBD84;&#xC11D;</p><canvas id="v11-stats-canvas" class="v11-canvas" width="400" height="400"></canvas><div id="v11-stats-detail"></div><button class="v11-close" onclick="v11Close(\'stats\')">&#xB2EB;&#xAE30;</button></div></div>' +
    '<div id="v11-jukebox" class="v11-panel"><div class="v11-box"><h2>&#x1F3B5; &#xAC74;&#xCD95; BGM &#xC8FC;&#xD06C;&#xBC15;&#xC2A4;</h2><p>8&#xACE1;&#xC758; Web Audio &#xD569;&#xC131; &#xC74C;&#xC545;</p><div id="v11-jukebox-list"></div><div style="text-align:center;margin:12px 0"><button class="v11-btn-sm" id="v11-jukebox-stop">&#x23F9; &#xC815;&#xC9C0;</button></div><button class="v11-close" onclick="v11Close(\'jukebox\')">&#xB2EB;&#xAE30;</button></div></div>';
  document.body.appendChild(wrap);
})();

// ── 3. Web Audio SFX v11 (12 types) ──
var v11SFX = (function(){
  var actx = null;
  function ctx(){ if(!actx) try{ actx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} return actx; }
  function play(type){
    var c = ctx(); if(!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    var t = c.currentTime;
    switch(type){
      case 'mat_select': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'mat_compare': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(880,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.25); o.start(t); o.stop(t+.25); break;
      case 'world_open': o.type='triangle'; o.frequency.setValueAtTime(392,t); o.frequency.linearRampToValueAtTime(523,t+.12); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'construct_step': o.type='square'; o.frequency.setValueAtTime(330,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'construct_done': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.15,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      case 'code_open': o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'village_place': o.type='triangle'; o.frequency.setValueAtTime(587,t); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1); break;
      case 'village_save': o.type='sine'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.15); g.gain.setValueAtTime(.12,t); g.gain.linearRampToValueAtTime(0,t+.3); o.start(t); o.stop(t+.3); break;
      case 'master_open': o.type='triangle'; o.frequency.setValueAtTime(349,t); o.frequency.linearRampToValueAtTime(440,t+.1); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'stats_view': o.type='sine'; o.frequency.setValueAtTime(440,t); o.frequency.linearRampToValueAtTime(554,t+.12); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.2); o.start(t); o.stop(t+.2); break;
      case 'jukebox_play': o.type='triangle'; o.frequency.setValueAtTime(523,t); g.gain.setValueAtTime(.1,t); g.gain.linearRampToValueAtTime(0,t+.15); o.start(t); o.stop(t+.15); break;
      case 'achieve_v11': o.type='triangle'; o.frequency.setValueAtTime(523,t); o.frequency.linearRampToValueAtTime(659,t+.1); o.frequency.linearRampToValueAtTime(784,t+.2); g.gain.setValueAtTime(.18,t); g.gain.linearRampToValueAtTime(0,t+.4); o.start(t); o.stop(t+.4); break;
      default: o.type='sine'; o.frequency.setValueAtTime(440,t); g.gain.setValueAtTime(.08,t); g.gain.linearRampToValueAtTime(0,t+.1); o.start(t); o.stop(t+.1);
    }
  }
  return {play:play,ctx:ctx};
})();

// ── 4. Material Lab (건축 재료 실험실 15종 5축 Canvas) ──
var v11MatLab = (function(){
  var KEY = 'hb_v11_matlab';
  var materials = [
    {name:'소나무',cat:'목재',str:65,fire:25,dur:60,weight:35,cost:50,desc:'한옥 기둥과 대들보의 주재료. 곧은 결이 특징.',tip:'소나무는 송진이 방부방충 효과를 줍니다'},
    {name:'참나무',cat:'목재',str:80,fire:20,dur:75,weight:55,cost:70,desc:'가구와 마루 제작에 최적. 단단하고 결이 고움.',tip:'참나무는 수축팽창이 적어 변형이 적습니다'},
    {name:'대나무',cat:'목재',str:55,fire:30,dur:50,weight:25,cost:30,desc:'초가집 지붕과 담장 재료. 가벼우며 통풍 우수.',tip:'대나무는 3년이면 건축 재료로 사용 가능합니다'},
    {name:'황토',cat:'토석',str:40,fire:90,dur:45,weight:70,cost:15,desc:'한옥 벽체의 기본. 습도조절과 단열 효과.',tip:'황토는 습도 50%를 자연스럽게 유지합니다'},
    {name:'화강암',cat:'토석',str:90,fire:95,dur:90,weight:85,cost:60,desc:'석축 기단에 사용. 압축 강도 최고.',tip:'화강암은 압축강도 100MPa 이상입니다'},
    {name:'기와',cat:'지붕',str:70,fire:85,dur:80,weight:60,cost:55,desc:'기와집 지붕의 핵심. 내구성과 미관을 겸비.',tip:'기와는 1200도 이상에서 구워야 합니다'},
    {name:'볏짚',cat:'지붕',str:20,fire:10,dur:20,weight:10,cost:10,desc:'초가집 지붕. 단열성 우수하나 내화성 약함.',tip:'볏짚 지붕은 매년 갈아주어야 합니다'},
    {name:'철근콘크리트',cat:'현대',str:95,fire:80,dur:95,weight:90,cost:80,desc:'현대 건축의 핵심. 인장/압축강도 우수.',tip:'콘크리트 배합 28일 양생이 필요합니다'},
    {name:'벽돌',cat:'토석',str:75,fire:90,dur:85,weight:80,cost:40,desc:'돌담과 기단석. 자연석의 미관과 내구성.',tip:'벽돌 쌓기는 사고석 방식이 가장 튼튼합니다'},
    {name:'한지',cat:'마감',str:15,fire:15,dur:30,weight:5,cost:25,desc:'창호지와 바닥지. 통풍과 채광 조절.',tip:'한지는 자외선을 99% 차단합니다'},
    {name:'단청 안료',cat:'마감',str:10,fire:20,dur:40,weight:5,cost:85,desc:'전통 건축물의 채색. 방부방충 효과.',tip:'단청의 5색은 음양오행 사상에서 유래합니다'},
    {name:'시멘트',cat:'현대',str:85,fire:85,dur:80,weight:75,cost:45,desc:'모르타르와 콘크리트의 결합재.',tip:'포틀랜드 시멘트는 1824년 발명되었습니다'},
    {name:'유리',cat:'현대',str:30,fire:75,dur:65,weight:50,cost:75,desc:'채광과 시각적 개방감. 현대 건축 필수.',tip:'강화유리는 일반 유리보다 5배 강합니다'},
    {name:'오동나무',cat:'목재',str:50,fire:20,dur:55,weight:30,cost:35,desc:'초가집 골격 및 농가 가구. 구하기 쉽고 가공 용이.',tip:'오동나무는 한국에서 가장 흔한 활엽수입니다'},
    {name:'철골',cat:'현대',str:98,fire:70,dur:90,weight:95,cost:90,desc:'고층 건물의 골격. 인장강도 최고.',tip:'H빔 철골은 20세기 건축 혁명의 핵심입니다'}
  ];
  var selected = [];
  var read = JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){ localStorage.setItem(KEY, JSON.stringify(read)); }
  function renderTabs(){
    var cats = ['전체','목재','토석','지붕','현대','마감'];
    var el = document.getElementById('v11-mat-tabs'); if(!el) return;
    el.innerHTML = cats.map(function(c,i){ return '<button class="v11-tab'+(i===0?' active':'')+'" data-cat="'+c+'">'+c+'</button>'; }).join('');
    el.querySelectorAll('.v11-tab').forEach(function(btn){ btn.onclick = function(){ el.querySelectorAll('.v11-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); renderMaterials(btn.dataset.cat); }; });
  }
  function renderMaterials(cat){
    var cmpEl = document.getElementById('v11-mat-compare'); if(!cmpEl) return;
    var list = cat==='전체'?materials:materials.filter(function(m){return m.cat===cat;});
    cmpEl.innerHTML = '<div class="v11-grid">'+list.map(function(m){ var sel=selected.indexOf(m.name)>=0; return '<div class="v11-card'+(sel?' selected':'')+'" data-name="'+m.name+'"><h4>'+m.name+'</h4><p>'+m.cat+'</p></div>'; }).join('')+'</div>';
    cmpEl.querySelectorAll('.v11-card').forEach(function(card){ card.onclick = function(){ var nm=card.dataset.name; var idx=selected.indexOf(nm); if(idx>=0) selected.splice(idx,1); else if(selected.length<3) selected.push(nm); if(read.indexOf(nm)<0){read.push(nm);save();} v11SFX.play('mat_select'); renderMaterials(cat); drawRadar(); }; });
  }
  function drawRadar(){
    var cv=document.getElementById('v11-mat-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, cx=W/2, cy=H/2+10, R=140;
    c.clearRect(0,0,W,H);
    var axes=['강도','내화성','내구성','무게','가격'], props=['str','fire','dur','weight','cost'], n=axes.length;
    for(var lvl=1;lvl<=5;lvl++){ c.beginPath(); for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i, r=R*(lvl/5), px=cx+r*Math.cos(a), py=cy+r*Math.sin(a); if(i===0)c.moveTo(px,py);else c.lineTo(px,py); } c.closePath(); c.strokeStyle='rgba(196,149,106,'+(lvl===5?.4:.15)+')'; c.stroke(); }
    for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i; c.beginPath(); c.moveTo(cx,cy); c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a)); c.strokeStyle='rgba(196,149,106,.2)'; c.stroke(); c.fillStyle='#f5deb3'; c.font='12px sans-serif'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(axes[i],cx+(R+20)*Math.cos(a),cy+(R+20)*Math.sin(a)); }
    var colors=['rgba(196,149,106,.7)','rgba(74,124,89,.7)','rgba(69,183,209,.7)'];
    selected.forEach(function(nm,si){ var mat=materials.find(function(m){return m.name===nm;}); if(!mat) return; c.beginPath(); for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i, val=mat[props[i]]/100, px=cx+R*val*Math.cos(a), py=cy+R*val*Math.sin(a); if(i===0)c.moveTo(px,py);else c.lineTo(px,py); } c.closePath(); c.fillStyle=colors[si].replace('.7','.15'); c.fill(); c.strokeStyle=colors[si]; c.lineWidth=2; c.stroke(); });
    if(selected.length>0){ c.font='11px sans-serif'; c.textAlign='center'; selected.forEach(function(nm,i){ c.fillStyle=colors[i]; c.fillRect(cx-80+i*60,H-30,12,12); c.fillStyle='#f5deb3'; c.fillText(nm,cx-80+i*60+30,H-24); }); }
    var detail=document.getElementById('v11-mat-detail');
    if(detail&&selected.length===1){ var m=materials.find(function(mm){return mm.name===selected[0];}); if(m) detail.innerHTML='<strong style="color:#f5deb3">'+m.name+'</strong> - '+m.desc+'<br><span style="font-size:11px">&#x1F4A1; '+m.tip+'</span>'; }
    else if(detail) detail.innerHTML=selected.length===0?'재료를 클릭하면 비교할 수 있습니다 (최대 3개)':'선택된 '+selected.length+'개 재료 비교 중';
  }
  function open(){ document.getElementById('v11-matlab').classList.add('active'); v11SFX.play('mat_compare'); renderTabs(); renderMaterials('전체'); drawRadar(); }
  function close(){ document.getElementById('v11-matlab').classList.remove('active'); }
  return {open:open,close:close,read:read,load:function(){renderTabs();}};
})();

// ── 5. World Architecture Tour (세계 건축 여행 10국) ──
var v11World = (function(){
  var KEY='hb_v11_world';
  var places=[
    {name:'파르테논 신전',country:'그리스',year:'BC 447',style:'도리스식',compare:'부석사 무량수전',desc:'도리스 양식의 걸작. 대리석 기둥 44개가 특징. 비례와 균형의 극치.',tip:'한국의 무량수전도 목조 기둥의 비례미를 추구합니다'},
    {name:'자금성',country:'중국',year:'1420',style:'명나라',compare:'경복궁',desc:'9999간 반의 세계 최대 궁전 복합체. 72만 제곱미터.',tip:'경복궁은 자금성의 1/4 규모이지만 자연과의 조화가 특징'},
    {name:'사그라다 파밀리아',country:'스페인',year:'1882~',style:'모더니즘',compare:'명동성당',desc:'가우디 설계, 140년 건축 중. 자연에서 영감.',tip:'명동성당도 고딕 양식의 곡선미가 특징'},
    {name:'타지마할',country:'인도',year:'1653',style:'무굴',compare:'불국사',desc:'백색 대리석 영묘. 좌우 대칭 설계의 기적.',tip:'불국사도 좌우 대칭 설계의 걸작'},
    {name:'콜로세움',country:'로마',year:'80',style:'고대 로마',compare:'수원화성',desc:'5만명 수용 원형 경기장. 콘크리트+석조.',tip:'수원화성도 과학적 구조공학의 정수'},
    {name:'노트르담 대성당',country:'프랑스',year:'1163',style:'고딕',compare:'해인사 대웅보전',desc:'고딕 건축의 걸작. 비행 버트리스+장미창.',tip:'해인사도 목조의 구조미가 세계적으로 인정받음'},
    {name:'마추피추',country:'페루',year:'1450',style:'잉카',compare:'창덕궁',desc:'해발 2430m 잉카 석조 도시. 내진설계.',tip:'창덕궁도 산지 지형을 활용한 자연친화 건축'},
    {name:'버킹엄 궁전',country:'영국',year:'1703',style:'바로크',compare:'창경궁',desc:'영국 국왕 공식 궁전. 775개 방.',tip:'창경궁도 궁궐 건축의 정수'},
    {name:'금각사',country:'일본',year:'1397',style:'선종',compare:'부석사 무량수전',desc:'금박 3층 선종 누각. 자연과 조화.',tip:'무량수전도 주변 자연과의 조화미가 특징'},
    {name:'오페라하우스',country:'호주',year:'1973',style:'현대',compare:'DDP',desc:'요른 우쉰 설계. 조개 형태 지붕.',tip:'DDP도 자하 하디드 설계의 현대 건축 걸작'}
  ];
  var visited=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(visited));}
  function render(){
    var el=document.getElementById('v11-world-list'); if(!el) return;
    el.innerHTML=places.map(function(p,i){ var v=visited.indexOf(i)>=0; return '<div class="v11-item'+(v?' read':'')+'" data-idx="'+i+'"><h4>'+p.name+' <span class="tag">'+p.country+' '+p.year+'</span></h4><p>'+p.style+' | 한국 비교: '+p.compare+'</p><div class="detail"><p>'+p.desc+'</p><p style="margin-top:8px;color:#c4956a">&#x1F4A1; '+p.tip+'</p></div></div>'; }).join('');
    el.querySelectorAll('.v11-item').forEach(function(item){ item.onclick=function(){ var idx=parseInt(item.dataset.idx); item.classList.toggle('expanded'); if(visited.indexOf(idx)<0){visited.push(idx);save();item.classList.add('read');} v11SFX.play('world_open'); }; });
  }
  function open(){document.getElementById('v11-world').classList.add('active');render();}
  function close(){document.getElementById('v11-world').classList.remove('active');}
  return {open:open,close:close,visited:visited,load:render};
})();

// ── 6. Construction Process Simulator (시공 시뮬레이터 6단계) ──
var v11Construct = (function(){
  var KEY='hb_v11_construct';
  var steps=[
    {name:'기초 공사',desc:'지반 다지기, 기초석 설치',time:15,icon:'&#x26CF;&#xFE0F;'},
    {name:'골조 공사',desc:'기둥, 보, 도리 구조물 설치',time:20,icon:'&#x1F3D7;&#xFE0F;'},
    {name:'지붕 공사',desc:'서까래, 기와/초가 지붕 올리기',time:15,icon:'&#x1F3E0;'},
    {name:'벽체 공사',desc:'황토/벽돌 벽 쌓기, 창호 설치',time:18,icon:'&#x1F9F1;'},
    {name:'마감 공사',desc:'바닥재, 벽지, 단청 칠하기',time:12,icon:'&#x1F3A8;'},
    {name:'검수 완료',desc:'안전 검사, 누수/균열 확인',time:10,icon:'&#x2705;'}
  ];
  var state=JSON.parse(localStorage.getItem(KEY)||'{"current":0,"done":false}');
  var timer=null, remaining=0;
  function save(){localStorage.setItem(KEY,JSON.stringify(state));}
  function render(){
    var el=document.getElementById('v11-construct-steps'); if(!el) return;
    el.innerHTML=steps.map(function(s,i){ var cls=i<state.current?'done':(i===state.current&&timer?'active':''); return '<div class="v11-process-step '+cls+'"><div class="step-num">'+(i<state.current?'&#x2713;':(i+1))+'</div><div class="step-info"><h4>'+s.icon+' '+s.name+'</h4><p>'+s.desc+'</p></div><div class="step-timer">'+(i===state.current&&timer?remaining+'&#xCD08;':(i<state.current?'&#x2713;':s.time+'&#xCD08;'))+'</div></div>'; }).join('');
    drawProgress();
  }
  function drawProgress(){
    var cv=document.getElementById('v11-construct-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, barH=24, y=H/2-barH/2;
    c.clearRect(0,0,W,H);
    c.fillStyle='rgba(255,255,255,.08)'; c.fillRect(20,y,W-40,barH);
    var pct=state.done?1:(state.current/steps.length);
    if(timer) pct=(state.current+(1-remaining/steps[state.current].time))/steps.length;
    var grad=c.createLinearGradient(20,0,W-40,0); grad.addColorStop(0,'#c4956a'); grad.addColorStop(1,'#4a7c59');
    c.fillStyle=grad; c.fillRect(20,y,(W-40)*pct,barH);
    c.strokeStyle='rgba(196,149,106,.3)'; c.strokeRect(20,y,W-40,barH);
    c.fillStyle='#f5deb3'; c.font='bold 12px sans-serif'; c.textAlign='center';
    c.fillText(Math.round(pct*100)+'% '+(state.done?'완공!':'진행 중'),W/2,y+barH/2+4);
  }
  function startStep(){
    if(state.done||state.current>=steps.length) return;
    remaining=steps[state.current].time;
    v11SFX.play('construct_step'); render();
    timer=setInterval(function(){ remaining--; if(remaining<=0){ clearInterval(timer); timer=null; state.current++; if(state.current>=steps.length){state.done=true;v11SFX.play('construct_done');} else v11SFX.play('construct_step'); save(); render(); } else render(); },1000);
  }
  function reset(){ if(timer){clearInterval(timer);timer=null;} state={current:0,done:false}; save(); render(); }
  function open(){
    document.getElementById('v11-construct').classList.add('active'); render();
    var sb=document.getElementById('v11-construct-start'), rb=document.getElementById('v11-construct-reset');
    if(sb) sb.onclick=startStep; if(rb) rb.onclick=reset;
  }
  function close(){ document.getElementById('v11-construct').classList.remove('active'); if(timer){clearInterval(timer);timer=null;} }
  return {open:open,close:close,state:state,load:function(){}};
})();

// ── 7. Building Code Guide (건축법규 가이드 12종) ──
var v11Code = (function(){
  var KEY='hb_v11_code';
  var codes=[
    {name:'건폐율',cat:'용도',desc:'대지면적 대비 건축면적의 비율. 주거지역 60% 이하.',detail:'건폐율 = (건축면적 / 대지면적) x 100. 녹지와 통풍, 일조를 확보하기 위한 규정입니다.'},
    {name:'용적률',cat:'용도',desc:'대지면적 대비 연면적의 비율. 아파트 300% 등.',detail:'용적률 = (연면적 / 대지면적) x 100. 건물 높이와 밀도를 관리하는 핵심 지표.'},
    {name:'일조권',cat:'환경',desc:'이웃 건물에 햇빛을 가리지 않을 권리.',detail:'동지일 오전 8시~오후 4시, 연속 2시간 이상 일조 확보. 북측 인접 대지에 영향.'},
    {name:'방화구획',cat:'안전',desc:'화재 확산 방지를 위한 구획 구분.',detail:'방화벽, 방화문, 자동방화셔터로 구획 구분. 1000 제곱미터 이하 구획.'},
    {name:'내진설계',cat:'안전',desc:'지진에 견딜 수 있는 구조 설계 기준.',detail:'한국은 내진설계기준 KDS 41 17 00. 2층 이상 또는 200 제곱미터 이상 건물 의무 적용.'},
    {name:'배산임수',cat:'환경',desc:'산을 뒤에, 물을 앞에 두는 한국 전통 배치.',detail:'풍수지리의 핵심 원칙. 북풍을 막고 남향을 받아 에너지 효율을 높임.'},
    {name:'바닥면적 산정',cat:'용도',desc:'건축물 바닥면적 산정 기준.',detail:'벽 중심선으로 산정. 발코니/다락/차양 등의 산입 예외 규정.'},
    {name:'주차장 규정',cat:'시설',desc:'용도별 주차 대수 의무 규정.',detail:'주택: 85 제곱미터 이하 1대, 85 제곱미터 초과 1.5대. 공회당 100 제곱미터 당 1대.'},
    {name:'문화재 관리',cat:'보존',desc:'문화재, 등록문화재 건축물 보존.',detail:'현상변경 허가 필요. 복원 원칙에 따른 수리. 주변 정비 규제.'},
    {name:'도로사선 제한',cat:'환경',desc:'도로에 접한 건축물의 높이 제한.',detail:'도로 반대편 경계선까지 거리의 1.5배 이하. 일조확보 목적.'},
    {name:'계단실 규정',cat:'시설',desc:'계단 너비, 높이, 디딤깊이 기준.',detail:'주택: 너비 75cm 이상, 높이 18cm 이하, 디딤깊이 26cm 이상.'},
    {name:'방음 기준',cat:'환경',desc:'세대 간 방음 성능 기준.',detail:'바닥 충격음 50dB 이하, 경량충격음 58dB 이하. 공기음 35~45dB.'}
  ];
  var readList=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(readList));}
  function renderTabs(){
    var cats=['전체','용도','안전','환경','시설','보존'];
    var el=document.getElementById('v11-code-tabs'); if(!el) return;
    el.innerHTML=cats.map(function(c,i){ return '<button class="v11-tab'+(i===0?' active':'')+'" data-cat="'+c+'">'+c+'</button>'; }).join('');
    el.querySelectorAll('.v11-tab').forEach(function(btn){ btn.onclick=function(){ el.querySelectorAll('.v11-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); renderList(btn.dataset.cat); }; });
  }
  function renderList(cat){
    var el=document.getElementById('v11-code-list'); if(!el) return;
    var list=cat==='전체'?codes:codes.filter(function(c){return c.cat===cat;});
    el.innerHTML=list.map(function(c){ var ri=codes.indexOf(c); var rd=readList.indexOf(ri)>=0; return '<div class="v11-item'+(rd?' read':'')+'" data-idx="'+ri+'"><h4>'+c.name+' <span class="tag">'+c.cat+'</span></h4><p>'+c.desc+'</p><div class="detail">'+c.detail+'</div></div>'; }).join('');
    el.querySelectorAll('.v11-item').forEach(function(item){ item.onclick=function(){ item.classList.toggle('expanded'); var idx=parseInt(item.dataset.idx); if(readList.indexOf(idx)<0){readList.push(idx);save();item.classList.add('read');} v11SFX.play('code_open'); }; });
  }
  function open(){document.getElementById('v11-code').classList.add('active');renderTabs();renderList('전체');}
  function close(){document.getElementById('v11-code').classList.remove('active');}
  return {open:open,close:close,readList:readList,load:function(){renderTabs();}};
})();

// ── 8. My Village Builder (나만의 마을 8x8) ──
var v11Village = (function(){
  var KEY='hb_v11_village', SIZE=8;
  var buildings=[{name:'지우기',icon:'&#x274C;',id:'erase'},{name:'한옥',icon:'&#x1F3E0;',id:'hanok'},{name:'기와집',icon:'&#x1F3E1;',id:'giwa'},{name:'초가집',icon:'&#x1F6D6;',id:'choga'},{name:'서원',icon:'&#x1F3EB;',id:'seowon'},{name:'정자',icon:'&#x26E9;&#xFE0F;',id:'jeongja'},{name:'시장',icon:'&#x1F3EA;',id:'market'},{name:'논밭',icon:'&#x1F33E;',id:'farm'},{name:'연못',icon:'&#x1F4A7;',id:'pond'},{name:'나무',icon:'&#x1F333;',id:'tree'},{name:'돌담',icon:'&#x1F9F1;',id:'wall'},{name:'길',icon:'&#x1F6B6;',id:'road'}];
  var selectedTool='hanok';
  var grid=JSON.parse(localStorage.getItem(KEY)||'null');
  if(!grid){grid=[];for(var i=0;i<SIZE*SIZE;i++)grid.push('');}
  function save(){localStorage.setItem(KEY,JSON.stringify(grid));}
  function renderTools(){
    var el=document.getElementById('v11-village-tools'); if(!el) return;
    el.innerHTML=buildings.map(function(b){ return '<button class="v11-tab'+(selectedTool===b.id?' active':'')+'" data-id="'+b.id+'">'+b.icon+' '+b.name+'</button>'; }).join('');
    el.querySelectorAll('.v11-tab').forEach(function(btn){ btn.onclick=function(){ selectedTool=btn.dataset.id; el.querySelectorAll('.v11-tab').forEach(function(b){b.classList.remove('active');}); btn.classList.add('active'); }; });
  }
  function renderGrid(){
    var el=document.getElementById('v11-village-grid'); if(!el) return;
    el.innerHTML='';
    for(var i=0;i<SIZE*SIZE;i++){
      var cell=document.createElement('div'); cell.className='v11-village-cell'+(grid[i]?' placed':''); cell.dataset.idx=i;
      var bld=buildings.find(function(b){return b.id===grid[i];}); cell.innerHTML=bld?bld.icon:'';
      cell.onclick=function(){ var idx=parseInt(this.dataset.idx); grid[idx]=selectedTool==='erase'?'':selectedTool; save(); v11SFX.play('village_place'); renderGrid(); renderStats(); };
      el.appendChild(cell);
    }
  }
  function renderStats(){
    var el=document.getElementById('v11-village-stats'); if(!el) return;
    var counts={}; grid.forEach(function(g){if(g)counts[g]=(counts[g]||0)+1;});
    var total=grid.filter(function(g){return g;}).length;
    var parts=[]; buildings.forEach(function(b){if(b.id!=='erase'&&counts[b.id])parts.push(b.icon+counts[b.id]);});
    el.innerHTML='배치: '+total+'/'+SIZE*SIZE+' | '+parts.join(' ');
  }
  function open(){
    document.getElementById('v11-village').classList.add('active');
    renderTools(); renderGrid(); renderStats();
    document.getElementById('v11-village-save').onclick=function(){save();v11SFX.play('village_save');};
    document.getElementById('v11-village-clear').onclick=function(){grid=[];for(var i=0;i<SIZE*SIZE;i++)grid.push('');save();renderGrid();renderStats();};
  }
  function close(){document.getElementById('v11-village').classList.remove('active');}
  return {open:open,close:close,grid:grid,load:function(){}};
})();

// ── 9. Master Builders Gallery (건축 명장 열전 12인) ──
var v11Masters = (function(){
  var KEY='hb_v11_masters';
  var masters=[
    {name:'정약용',era:'조선',icon:'&#x1F477;',title:'수원화성 설계자',desc:'수원화성을 설계한 실학자. 거중기를 발명하여 과학적 건축을 실현.',work:'수원화성, 거중기'},
    {name:'김덕량',era:'신라',icon:'&#x1F477;',title:'불국사 건축가',desc:'불국사와 석굴암을 창건한 신라의 천재 건축가. 목조와 석조의 조화.',work:'불국사, 석굴암'},
    {name:'강봉진',era:'조선',icon:'&#x1F477;',title:'건축 대목장',desc:'경복궁 근정전 중건에 참여한 조선 최고의 대목장.',work:'경복궁 근정전'},
    {name:'아비지',era:'백제',icon:'&#x1F477;',title:'백제 건축 명장',desc:'일본에 사찰 건축을 전한 백제의 건축 명장. 호류지의 원형 설계.',work:'호류지 원형 설계'},
    {name:'박길룡',era:'근대',icon:'&#x1F477;',title:'근대 건축 선구자',desc:'한국 근대 건축의 선구자. 전통과 근대의 조화를 추구한 건축가.',work:'화신백화점 등'},
    {name:'김수근',era:'현대',icon:'&#x1F477;',title:'공간 건축가',desc:'한국 현대 건축의 거장. 빈자의 미학으로 세계적 명성 획득.',work:'경동교회, 올림픽체조경기장'},
    {name:'김중업',era:'현대',icon:'&#x1F477;',title:'한국의 르코르뷔지에',desc:'르코르뷔지에에게 사사한 건국 1세대 건축가. 유려한 곡선 설계.',work:'프랑스대사관, 서산부인과'},
    {name:'승효상',era:'현대',icon:'&#x1F477;',title:'빈자의 건축가',desc:'빈자의 미학을 추구한 건축가. 절제된 디자인의 정수.',work:'수졸당, 노무현기념관'},
    {name:'신영훈',era:'현대',icon:'&#x1F477;',title:'대목장',desc:'한옥 보존과 재현의 대가. 중요무형문화재 대목장.',work:'숭례문 복원'},
    {name:'전봉희',era:'조선',icon:'&#x1F477;',title:'궁궐 도편수',desc:'조선 후기 궁궐 건축의 총 책임자.',work:'창경궁 등 궁궐 건축'},
    {name:'이광로',era:'현대',icon:'&#x1F477;',title:'한옥 전문가',desc:'전통 한옥의 현대적 재해석 전문가.',work:'한옥마을 설계'},
    {name:'조정구',era:'현대',icon:'&#x1F477;',title:'한옥 연구가',desc:'한옥의 과학적 우수성을 연구한 건축학자.',work:'한옥 과학 연구'}
  ];
  var readList=JSON.parse(localStorage.getItem(KEY)||'[]');
  function save(){localStorage.setItem(KEY,JSON.stringify(readList));}
  function render(){
    var el=document.getElementById('v11-masters-list'); if(!el) return;
    el.innerHTML=masters.map(function(m,i){ var rd=readList.indexOf(i)>=0; return '<div class="v11-item'+(rd?' read':'')+'" data-idx="'+i+'"><h4>'+m.icon+' '+m.name+' <span class="tag">'+m.era+'</span></h4><p>'+m.title+' | 대표작: '+m.work+'</p><div class="detail">'+m.desc+'</div></div>'; }).join('');
    el.querySelectorAll('.v11-item').forEach(function(item){ item.onclick=function(){ item.classList.toggle('expanded'); var idx=parseInt(item.dataset.idx); if(readList.indexOf(idx)<0){readList.push(idx);save();item.classList.add('read');} v11SFX.play('master_open'); }; });
  }
  function open(){document.getElementById('v11-masters').classList.add('active');render();}
  function close(){document.getElementById('v11-masters').classList.remove('active');}
  return {open:open,close:close,readList:readList,load:render};
})();

// ── 10. Stats Dashboard (통계 대시보드 Canvas 6축) ──
var v11Stats = (function(){
  function getMetrics(){
    var builds=parseInt(localStorage.getItem('hb_totalBuilds')||'0');
    var matRead=v11MatLab.read.length, worldVisit=v11World.visited.length;
    var codeRead=v11Code.readList.length, masterRead=v11Masters.readList.length;
    var villageCount=v11Village.grid.filter(function(g){return g;}).length;
    return { building:Math.min(100,builds*10), knowledge:Math.min(100,(matRead+codeRead+masterRead)*4), exploration:Math.min(100,worldVisit*10), creativity:Math.min(100,villageCount*2), quiz:Math.min(100,30), achievement:Math.min(100,50) };
  }
  function draw(){
    var cv=document.getElementById('v11-stats-canvas'); if(!cv) return;
    var c=cv.getContext('2d'), W=cv.width, H=cv.height, cx=W/2, cy=H/2, R=150;
    c.clearRect(0,0,W,H);
    var axes=['건축','지식','탐험','창의성','퀴즈','업적'], m=getMetrics(), vals=[m.building,m.knowledge,m.exploration,m.creativity,m.quiz,m.achievement], n=axes.length;
    for(var lvl=1;lvl<=5;lvl++){ c.beginPath(); for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i, r=R*(lvl/5), px=cx+r*Math.cos(a), py=cy+r*Math.sin(a); if(i===0)c.moveTo(px,py);else c.lineTo(px,py); } c.closePath(); c.strokeStyle='rgba(196,149,106,'+(lvl===5?.4:.12)+')'; c.stroke(); }
    for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i; c.beginPath(); c.moveTo(cx,cy); c.lineTo(cx+R*Math.cos(a),cy+R*Math.sin(a)); c.strokeStyle='rgba(196,149,106,.2)'; c.stroke(); c.fillStyle='#f5deb3'; c.font='13px sans-serif'; c.textAlign='center'; c.textBaseline='middle'; c.fillText(axes[i],cx+(R+24)*Math.cos(a),cy+(R+24)*Math.sin(a)); }
    c.beginPath(); for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i, val=vals[i]/100, px=cx+R*val*Math.cos(a), py=cy+R*val*Math.sin(a); if(i===0)c.moveTo(px,py);else c.lineTo(px,py); } c.closePath(); c.fillStyle='rgba(196,149,106,.2)'; c.fill(); c.strokeStyle='#c4956a'; c.lineWidth=2; c.stroke();
    for(var i=0;i<n;i++){ var a=-Math.PI/2+(2*Math.PI/n)*i, val=vals[i]/100; c.beginPath(); c.arc(cx+R*val*Math.cos(a),cy+R*val*Math.sin(a),4,0,Math.PI*2); c.fillStyle='#f5deb3'; c.fill(); }
    var total=vals.reduce(function(a,b){return a+b;},0), avg=Math.round(total/n);
    var grade=avg>=90?'S':avg>=75?'A':avg>=55?'B':avg>=35?'C':'D';
    c.fillStyle='#f5deb3'; c.font='bold 20px sans-serif'; c.textAlign='center'; c.fillText(grade+'등급 ('+avg+'점)',cx,H-10);
  }
  function renderDetail(){
    var el=document.getElementById('v11-stats-detail'); if(!el) return;
    var m=getMetrics();
    var items=[{label:'건축 활동',val:m.building,color:'#c4956a'},{label:'지식 학습',val:m.knowledge,color:'#4a7c59'},{label:'탐험 활동',val:m.exploration,color:'#45b7d1'},{label:'창의성',val:m.creativity,color:'#e07c4f'},{label:'퀴즈 성적',val:m.quiz,color:'#9b59b6'},{label:'업적 달성',val:m.achievement,color:'#e74c3c'}];
    el.innerHTML=items.map(function(it){ return '<div class="v11-stat-row"><div class="stat-label">'+it.label+'</div><div class="stat-bar"><div class="stat-fill" style="width:'+it.val+'%;background:'+it.color+'"></div></div><div class="stat-val">'+it.val+'%</div></div>'; }).join('');
  }
  function open(){document.getElementById('v11-stats').classList.add('active');v11SFX.play('stats_view');draw();renderDetail();}
  function close(){document.getElementById('v11-stats').classList.remove('active');}
  return {open:open,close:close,load:function(){}};
})();

// ── 11. BGM Jukebox (건축 BGM 8곡 Web Audio) ──
var v11Jukebox = (function(){
  var actx=null, currentSong=-1, nodes=[];
  var songs=[
    {name:'한옥의 아침',genre:'전통',bpm:72,desc:'잔잔한 가야금 선율'},
    {name:'기와집 지붕 아래',genre:'전통',bpm:80,desc:'우아한 대금 선율'},
    {name:'초가집 황혼',genre:'민속',bpm:68,desc:'평화로운 농촌 선율'},
    {name:'서원의 학도들',genre:'교육',bpm:88,desc:'경쾌한 피리 선율'},
    {name:'정자에서 바라본 달',genre:'전통',bpm:60,desc:'서정적인 거문고 선율'},
    {name:'현대 건축의 리듬',genre:'현대',bpm:110,desc:'활기찬 드럼 비트'},
    {name:'수원화성 행군',genre:'역사',bpm:96,desc:'웅장한 행진곡'},
    {name:'별빛 아래 한옥',genre:'명상',bpm:56,desc:'명상적인 선율'}
  ];
  function ctx(){if(!actx)try{actx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}return actx;}
  function playSong(idx){
    stopAll(); var c=ctx(); if(!c) return;
    currentSong=idx; var s=songs[idx], interval=60/s.bpm, noteIdx=0;
    var scales={0:[261.63,293.66,329.63,349.23,392,349.23,329.63,293.66],1:[392,440,493.88,523.25,587.33,523.25,493.88,440],2:[261.63,329.63,392,329.63,261.63,293.66,349.23,293.66],3:[523.25,587.33,659.25,698.46,783.99,698.46,659.25,587.33],4:[293.66,349.23,392,440,392,349.23,293.66,261.63],5:[392,440,493.88,523.25,493.88,440,392,349.23],6:[329.63,392,440,523.25,440,392,329.63,293.66],7:[261.63,293.66,329.63,261.63,293.66,329.63,349.23,329.63]};
    var melody=scales[idx]||scales[0];
    function playNote(){
      if(currentSong!==idx) return;
      var freq=melody[noteIdx%melody.length], o=c.createOscillator(), g=c.createGain();
      o.type=idx>=5?'square':'triangle'; o.frequency.setValueAtTime(freq,c.currentTime);
      g.gain.setValueAtTime(0.06,c.currentTime); g.gain.linearRampToValueAtTime(0,c.currentTime+interval*0.8);
      o.connect(g); g.connect(c.destination); o.start(c.currentTime); o.stop(c.currentTime+interval*0.9);
      noteIdx++; nodes.push(setTimeout(playNote,interval*1000));
    }
    playNote(); v11SFX.play('jukebox_play'); render();
  }
  function stopAll(){currentSong=-1;nodes.forEach(function(n){clearTimeout(n);});nodes=[];render();}
  function render(){
    var el=document.getElementById('v11-jukebox-list'); if(!el) return;
    el.innerHTML=songs.map(function(s,i){ return '<div class="v11-jukebox-item'+(currentSong===i?' playing':'')+'" data-idx="'+i+'"><div class="song-icon">'+(currentSong===i?'&#x1F3B5;':'&#x1F3B6;')+'</div><div class="song-info"><h4>'+s.name+'</h4><p>'+s.genre+' | '+s.bpm+' BPM | '+s.desc+'</p></div><button class="song-btn">'+(currentSong===i?'&#x23F8; 일시정지':'&#x25B6; 재생')+'</button></div>'; }).join('');
    el.querySelectorAll('.v11-jukebox-item').forEach(function(item){ item.onclick=function(){ var idx=parseInt(item.dataset.idx); if(currentSong===idx) stopAll(); else playSong(idx); }; });
    var sb=document.getElementById('v11-jukebox-stop'); if(sb) sb.onclick=stopAll;
  }
  function open(){document.getElementById('v11-jukebox').classList.add('active');render();}
  function close(){document.getElementById('v11-jukebox').classList.remove('active');stopAll();}
  return {open:open,close:close,load:function(){}};
})();

// ── 12. Quiz v11 (+15 questions, 90→105) ──
var v11Quiz = (function(){
  var questions=[
    {q:'황토가 자연스럽게 유지하는 습도는?',a:['약 50%','약 20%','약 80%','약 10%'],c:0},
    {q:'한국 건축에서 배산임수의 의미는?',a:['산을 뒤에 물을 앞에','물을 뒤에 산을 앞에','평지에 건축','높은 곳에 건축'],c:0},
    {q:'수원화성의 거중기를 발명한 실학자는?',a:['정약용','이익','박지원','황희'],c:0},
    {q:'기와를 구울 때 필요한 온도는?',a:['1200도 이상','800도','500도','1500도'],c:0},
    {q:'불국사 석굴암을 창건한 나라는?',a:['신라','백제','고려','조선'],c:0},
    {q:'건폐율이란 무엇의 비율인가?',a:['건축면적/대지면적','연면적/대지면적','높이/너비','지붕/바닥'],c:0},
    {q:'한지의 자외선 차단율은?',a:['약 99%','약 80%','약 50%','약 30%'],c:0},
    {q:'콘크리트 배합 후 양생 기간은?',a:['28일','7일','14일','90일'],c:0},
    {q:'단청의 5색이 유래한 사상은?',a:['음양오행','불교','유교','도교'],c:0},
    {q:'해인사 장경판전이 보존하는 유산은?',a:['팔만대장경','훈민정음','삼국사기','직지심체요절'],c:0},
    {q:'내진설계가 의무인 건물 기준은?',a:['2층 이상 200제곱미터 이상','3층 이상','100제곱미터 이상','모든 건물'],c:0},
    {q:'주택 계단 너비는 최소 몇 cm 이상인가?',a:['75cm','60cm','90cm','100cm'],c:0},
    {q:'파르테논 신전과 비교되는 한국 건축은?',a:['부석사 무량수전','경복궁','수원화성','창덕궁'],c:0},
    {q:'김수근 건축가의 대표 작품은?',a:['경동교회','불국사','경복궁','해인사'],c:0},
    {q:'볏짚 지붕의 가장 큰 단점은?',a:['내화성 부족','무게가 무겁다','비용이 비싸다','소음이 크다'],c:0}
  ];
  function inject(){ if(typeof window.quizQuestions==='object'&&Array.isArray(window.quizQuestions)){ questions.forEach(function(q){ var dup=window.quizQuestions.some(function(eq){return eq.q===q.q;}); if(!dup) window.quizQuestions.push(q); }); } }
  return {inject:inject,count:questions.length};
})();

// ── 13. Achievement System v11 (+12, 98→110) ──
var v11Achieve = (function(){
  var KEY='hb_achievements';
  var defs=[
    {id:'mat_explorer',name:'재료 탐험가',desc:'재료 실험실에서 5개 재료 확인',icon:'&#x1F9EA;',check:function(){return v11MatLab.read.length>=5;}},
    {id:'mat_master',name:'재료 마스터',desc:'15개 재료 전부 확인',icon:'&#x1F3C5;',check:function(){return v11MatLab.read.length>=15;}},
    {id:'world_traveler',name:'세계 건축 여행가',desc:'5개국 방문',icon:'&#x1F30D;',check:function(){return v11World.visited.length>=5;}},
    {id:'world_master',name:'세계 건축 마스터',desc:'10개국 전부 방문',icon:'&#x2708;&#xFE0F;',check:function(){return v11World.visited.length>=10;}},
    {id:'constructor',name:'시공 완료',desc:'시공 시뮬레이터 완료',icon:'&#x1F6A7;',check:function(){return v11Construct.state.done;}},
    {id:'code_student',name:'법규 학습자',desc:'법규 6개 이상 학습',icon:'&#x1F4DC;',check:function(){return v11Code.readList.length>=6;}},
    {id:'code_master',name:'법규 마스터',desc:'법규 12개 전부 학습',icon:'&#x1F393;',check:function(){return v11Code.readList.length>=12;}},
    {id:'village_builder',name:'마을 건설가',desc:'마을에 20개 이상 배치',icon:'&#x1F3D8;&#xFE0F;',check:function(){return v11Village.grid.filter(function(g){return g;}).length>=20;}},
    {id:'master_reader',name:'명장 탐구자',desc:'명장 6인 이상 읽기',icon:'&#x1F477;',check:function(){return v11Masters.readList.length>=6;}},
    {id:'master_all',name:'명장 열전 완독',desc:'명장 12인 전부 읽기',icon:'&#x1F451;',check:function(){return v11Masters.readList.length>=12;}},
    {id:'stats_checker',name:'통계 분석가',desc:'통계 대시보드 확인',icon:'&#x1F4CA;',check:function(){return true;}},
    {id:'v11_explorer',name:'v11 탐험가',desc:'v11의 모든 기능 탐험',icon:'&#x1F31F;',check:function(){return v11MatLab.read.length>0&&v11World.visited.length>0&&v11Code.readList.length>0&&v11Masters.readList.length>0;}}
  ];
  var earned=JSON.parse(localStorage.getItem(KEY)||'[]');
  function check(){ var nw=false; defs.forEach(function(d){ if(earned.indexOf(d.id)<0&&d.check()){earned.push(d.id);nw=true;showToast(d);} }); if(nw)localStorage.setItem(KEY,JSON.stringify(earned)); }
  function showToast(d){ v11SFX.play('achieve_v11'); var t=document.getElementById('achToast'); if(!t) return; t.querySelector('.ach-icon').textContent=d.icon; t.querySelector('.ach-name').textContent=d.name; t.classList.add('show'); setTimeout(function(){t.classList.remove('show');},3000); }
  return {check:check,earned:earned};
})();

// ── 14. Quick Action Buttons (좌측 FAB 8종) ──
(function(){
  var actions=[
    {icon:'&#x1F9EA;',label:'재료실험실',fn:function(){v11MatLab.open();}},
    {icon:'&#x1F30D;',label:'세계건축',fn:function(){v11World.open();}},
    {icon:'&#x1F6A7;',label:'시공시뮬',fn:function(){v11Construct.open();}},
    {icon:'&#x1F4DC;',label:'법규가이드',fn:function(){v11Code.open();}},
    {icon:'&#x1F3D8;&#xFE0F;',label:'마을만들기',fn:function(){v11Village.open();}},
    {icon:'&#x1F477;',label:'명장열전',fn:function(){v11Masters.open();}},
    {icon:'&#x1F4CA;',label:'통계',fn:function(){v11Stats.open();}},
    {icon:'&#x1F3B5;',label:'BGM',fn:function(){v11Jukebox.open();}}
  ];
  function inject(){
    var wrap=document.createElement('div'); wrap.id='v11-fab';
    wrap.style.cssText='position:fixed;left:8px;bottom:80px;display:flex;flex-direction:column;gap:6px;z-index:299';
    actions.forEach(function(a){
      var btn=document.createElement('button');
      btn.style.cssText='width:42px;height:42px;border-radius:50%;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.85);color:#f5deb3;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s';
      btn.title=a.label; btn.innerHTML=a.icon;
      btn.onmouseenter=function(){btn.style.background='#c4956a';btn.style.color='#2d1b0e';};
      btn.onmouseleave=function(){btn.style.background='rgba(45,27,14,.85)';btn.style.color='#f5deb3';};
      btn.onclick=a.fn; wrap.appendChild(btn);
    });
    document.body.appendChild(wrap);
  }
  if(document.readyState==='complete'||document.readyState==='interactive') inject();
  else document.addEventListener('DOMContentLoaded',inject);
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown',function(e){
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT') return;
    if(!e.shiftKey) return;
    switch(e.key.toUpperCase()){
      case 'Z':e.preventDefault();v11MatLab.open();break;
      case 'W':e.preventDefault();v11World.open();break;
      case 'N':e.preventDefault();v11Construct.open();break;
      case 'R':e.preventDefault();v11Code.open();break;
      case 'V':e.preventDefault();v11Village.open();break;
      case 'Y':e.preventDefault();v11Masters.open();break;
      case 'P':e.preventDefault();v11Stats.open();break;
      case 'J':e.preventDefault();v11Jukebox.open();break;
    }
  });
})();

// ── 16. Panel Open/Close helpers ──
window.v11Close = function(panel){
  var map={matlab:v11MatLab,world:v11World,construct:v11Construct,code:v11Code,village:v11Village,masters:v11Masters,stats:v11Stats,jukebox:v11Jukebox};
  if(map[panel]) map[panel].close();
};

// ── 17. Inject quiz on load ──
(function(){ function tryInject(){if(typeof window.quizQuestions==='object'){v11Quiz.inject();return true;}return false;} if(!tryInject()){var ci=setInterval(function(){if(tryInject())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);} })();

// ── 18. Hook into main game completion ──
(function(){ function hookComplete(){var orig=window.showComplete;if(typeof orig!=='function')return false;if(window.__v11Hooked)return true;window.__v11Hooked=true;var prev=window.showComplete;window.showComplete=function(){prev.apply(this,arguments);v11Achieve.check();};return true;} if(!hookComplete()){var ci=setInterval(function(){if(hookComplete())clearInterval(ci);},500);setTimeout(function(){clearInterval(ci);},10000);} })();

// ── 19. Initial load + checks ──
(function(){
  v11MatLab.load(); v11World.load(); v11Construct.load(); v11Code.load();
  v11Village.load(); v11Masters.load(); v11Stats.load(); v11Jukebox.load();
  setTimeout(function(){v11Achieve.check();},3000);
})();

// end v11 guard
}
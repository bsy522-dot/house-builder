// =====================================================
// House Builder v23.0 Patch
// 전통초석설계가이드Canvas620x400_10종초석6축Radar크기안정미관전통가공내구
// 우수배수시스템설계Canvas600x380_8종배수6지표Bar용량경사유지비용내구환경
// 전통창호유형분석기Canvas620x400_10종창호5축Radar채광환기미관단열전통
// 구조안전진단캘린더Canvas620x380_12월6항목Heatmap기초벽체지붕배관전기방수
// 전통마감재비교분석기Canvas600x380_10종마감재5축Bar내구미관친환경비용시공
// 리모델링ROI시뮬레이터Canvas620x400_8프로젝트듀얼Bar투자가치회수기간
// 공간온도분포도Canvas620x380_8실4계절Heatmap냉난방효율구간색상
// 전통석축기단설계Canvas600x380_8종석축6축Radar안정미관배수내구전통규모
// 퀴즈+15(270->285)+업적+12(242->254)+SFX16종+키보드Shift+A~H+9
// Benchmarking: The Sims 4 & Home Design 3D
// =====================================================
if (!window.__hbV23) {
window.__hbV23 = true;

(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v23-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:5300;overflow-y:auto;padding:16px}',
    '.v23-panel.active{display:block}',
    '.v23-box{max-width:720px;margin:40px auto}',
    '.v23-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v23-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v23-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v23-close:hover{background:#d4a57a}',
    '.v23-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v23-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v23-tab:hover,.v23-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v23-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v23-stat{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:16px 0}',
    '.v23-stat .s{text-align:center}',
    '.v23-stat .sv{font-size:20px;font-weight:700;color:#f5deb3}',
    '.v23-stat .sl{font-size:11px;color:#c4956a}',
    '.v23-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit;margin:4px}',
    '.v23-btn-sm:hover{background:#d4a57a}',
    '.v23-menu{position:fixed;left:12px;top:50%;transform:translateY(-50%);z-index:4070;display:flex;flex-direction:column;gap:6px}',
    '.v23-menu-btn{width:44px;height:44px;border-radius:12px;border:1px solid rgba(196,149,106,.4);background:rgba(45,27,14,.92);color:#f5deb3;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 2px 8px rgba(0,0,0,.4);position:relative}',
    '.v23-menu-btn:hover{background:rgba(196,149,106,.3);border-color:#c4956a;transform:scale(1.08)}',
    '.v23-menu-label{position:absolute;left:52px;top:50%;transform:translateY(-50%);background:rgba(45,27,14,.95);border:1px solid rgba(196,149,106,.3);border-radius:8px;padding:4px 10px;color:#f5deb3;font-size:11px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.v23-menu-btn:hover .v23-menu-label{opacity:1}',
    '@media(max-width:600px){.v23-box{margin:16px auto}.v23-menu{left:6px;gap:4px}.v23-menu-btn{width:38px;height:38px;font-size:15px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

(function(){
  var wrap = document.createElement('div');
  wrap.id = 'v23-panels';
  wrap.innerHTML =
    '<div id="v23-choseok" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1FAA8; &#xC804;&#xD1B5; &#xCD08;&#xC11D; &#xC124;&#xACC4; &#xAC00;&#xC774;&#xB4DC;</h2>' +
      '<p>10&#xC885; &#xCD08;&#xC11D;(&#xC8FC;&#xCD94;&#xB3CC;)&#xC758; &#xAC74;&#xCD95; &#xD2B9;&#xC131; &#xBE44;&#xAD50;</p>' +
      '<div class="v23-tabs" id="v23-cs-tabs"></div>' +
      '<canvas id="v23-cs-canvas" class="v23-canvas" width="620" height="400"></canvas>' +
      '<div id="v23-cs-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-cs-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Choseok.compare()">&#xBE44;&#xAD50;</button> <button class="v23-btn-sm" onclick="v23Choseok.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Choseok.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-drain" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1F4A7; &#xC6B0;&#xC218; &#xBC30;&#xC218; &#xC2DC;&#xC2A4;&#xD15C; &#xC124;&#xACC4;</h2>' +
      '<p>8&#xC885; &#xBC30;&#xC218; &#xBC29;&#xC2DD;&#xC758; &#xC131;&#xB2A5; &#xBE44;&#xAD50;</p>' +
      '<div class="v23-tabs" id="v23-dr-tabs"></div>' +
      '<canvas id="v23-dr-canvas" class="v23-canvas" width="600" height="380"></canvas>' +
      '<div id="v23-dr-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-dr-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Drain.simulate()">&#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;</button> <button class="v23-btn-sm" onclick="v23Drain.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Drain.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-changho" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1FA9F; &#xC804;&#xD1B5; &#xCC3D;&#xD638; &#xC720;&#xD615; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>10&#xC885; &#xC804;&#xD1B5; &#xCC3D;&#xD638;&#xC758; &#xAE30;&#xB2A5;&#xC131; &#xBE44;&#xAD50;</p>' +
      '<div class="v23-tabs" id="v23-ch-tabs"></div>' +
      '<canvas id="v23-ch-canvas" class="v23-canvas" width="620" height="400"></canvas>' +
      '<div id="v23-ch-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-ch-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Changho.compare()">&#xBE44;&#xAD50;</button> <button class="v23-btn-sm" onclick="v23Changho.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Changho.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-safety" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1F6E1;&#xFE0F; &#xAD6C;&#xC870; &#xC548;&#xC804; &#xC9C4;&#xB2E8; &#xCE98;&#xB9B0;&#xB354;</h2>' +
      '<p>12&#xC6D4; 6&#xD56D;&#xBAA9; &#xC548;&#xC804; &#xC810;&#xAC80; &#xC2A4;&#xCF00;&#xC904;</p>' +
      '<canvas id="v23-sf-canvas" class="v23-canvas" width="620" height="380"></canvas>' +
      '<div id="v23-sf-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-sf-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Safety.inspect()">&#xC810;&#xAC80;</button> <button class="v23-btn-sm" onclick="v23Safety.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Safety.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-finish" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1F3A8; &#xC804;&#xD1B5; &#xB9C8;&#xAC10;&#xC7AC; &#xBE44;&#xAD50; &#xBD84;&#xC11D;&#xAE30;</h2>' +
      '<p>10&#xC885; &#xB9C8;&#xAC10;&#xC7AC;&#xC758; &#xC131;&#xB2A5; &#xBE44;&#xAD50;</p>' +
      '<div class="v23-tabs" id="v23-fn-tabs"></div>' +
      '<canvas id="v23-fn-canvas" class="v23-canvas" width="600" height="380"></canvas>' +
      '<div id="v23-fn-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-fn-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Finish.compare()">&#xBE44;&#xAD50;</button> <button class="v23-btn-sm" onclick="v23Finish.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Finish.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-remodel" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1F4B0; &#xB9AC;&#xBAA8;&#xB378;&#xB9C1; ROI &#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xD130;</h2>' +
      '<p>8&#xD504;&#xB85C;&#xC81D;&#xD2B8; &#xD22C;&#xC790; &#xB300;&#xBE44; &#xAC00;&#xCE58; &#xBD84;&#xC11D;</p>' +
      '<canvas id="v23-rm-canvas" class="v23-canvas" width="620" height="400"></canvas>' +
      '<div id="v23-rm-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-rm-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Remodel.simulate()">&#xC2DC;&#xBBAC;&#xB808;&#xC774;&#xC158;</button> <button class="v23-btn-sm" onclick="v23Remodel.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Remodel.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-tempmap" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1F321;&#xFE0F; &#xACF5;&#xAC04; &#xC628;&#xB3C4; &#xBD84;&#xD3EC;&#xB3C4;</h2>' +
      '<p>8&#xC2E4; 4&#xACC4;&#xC808; &#xC628;&#xB3C4; &#xBD84;&#xD3EC; &#xBD84;&#xC11D;</p>' +
      '<div class="v23-tabs" id="v23-tm-tabs"></div>' +
      '<canvas id="v23-tm-canvas" class="v23-canvas" width="620" height="380"></canvas>' +
      '<div id="v23-tm-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-tm-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23TempMap.analyze()">&#xBD84;&#xC11D;</button> <button class="v23-btn-sm" onclick="v23TempMap.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23TempMap.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>' +
    '<div id="v23-stone" class="v23-panel"><div class="v23-box">' +
      '<h2>&#x1F3DB;&#xFE0F; &#xC804;&#xD1B5; &#xC11D;&#xCD95;/&#xAE30;&#xB2E8; &#xC124;&#xACC4;</h2>' +
      '<p>8&#xC885; &#xC11D;&#xCD95;&#xC758; &#xAC74;&#xCD95; &#xD2B9;&#xC131; &#xBE44;&#xAD50;</p>' +
      '<div class="v23-tabs" id="v23-st-tabs"></div>' +
      '<canvas id="v23-st-canvas" class="v23-canvas" width="600" height="380"></canvas>' +
      '<div id="v23-st-info" style="color:#e8d5c0;font-size:12px;line-height:1.7;text-align:center;min-height:60px"></div>' +
      '<div class="v23-stat" id="v23-st-stat"></div>' +
      '<div style="text-align:center"><button class="v23-btn-sm" onclick="v23Stone.compare()">&#xBE44;&#xAD50;</button> <button class="v23-btn-sm" onclick="v23Stone.reset()">&#xCD08;&#xAE30;&#xD654;</button></div>' +
      '<button class="v23-close" onclick="v23Stone.close()">&#xB2EB;&#xAE30;</button>' +
    '</div></div>';
  document.body.appendChild(wrap);
})();

// ===== SFX Engine =====
var v23SFX = {
  _ctx: null,
  _getCtx: function() {
    if (!this._ctx) try { this._ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    return this._ctx;
  },
  play: function(type) {
    var ctx = this._getCtx(); if (!ctx) return;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    var t = ctx.currentTime;
    switch(type) {
      case 'nav': o.frequency.setValueAtTime(880,t); o.type='sine'; g.gain.setValueAtTime(.08,t); g.gain.exponentialRampToValueAtTime(.001,t+.12); o.start(t); o.stop(t+.12); break;
      case 'tab': o.frequency.setValueAtTime(660,t); o.type='triangle'; g.gain.setValueAtTime(.06,t); g.gain.exponentialRampToValueAtTime(.001,t+.1); o.start(t); o.stop(t+.1); break;
      case 'hover': o.frequency.setValueAtTime(440,t); o.type='sine'; g.gain.setValueAtTime(.03,t); g.gain.exponentialRampToValueAtTime(.001,t+.06); o.start(t); o.stop(t+.06); break;
      case 'stone': o.frequency.setValueAtTime(220,t); o.type='sawtooth'; g.gain.setValueAtTime(.07,t); g.gain.exponentialRampToValueAtTime(.001,t+.2); o.start(t); o.stop(t+.2); break;
      case 'drain': o.frequency.setValueAtTime(300,t); o.type='sine'; g.gain.setValueAtTime(.06,t); o.frequency.exponentialRampToValueAtTime(150,t+.3); g.gain.exponentialRampToValueAtTime(.001,t+.3); o.start(t); o.stop(t+.3); break;
      case 'window': o.frequency.setValueAtTime(550,t); o.type='triangle'; g.gain.setValueAtTime(.05,t); g.gain.exponentialRampToValueAtTime(.001,t+.15); o.start(t); o.stop(t+.15); break;
      case 'safety': o.frequency.setValueAtTime(800,t); o.type='square'; g.gain.setValueAtTime(.04,t); g.gain.exponentialRampToValueAtTime(.001,t+.08); o.start(t); o.stop(t+.08); break;
      case 'finish': o.frequency.setValueAtTime(500,t); o.type='sine'; g.gain.setValueAtTime(.06,t); g.gain.exponentialRampToValueAtTime(.001,t+.18); o.start(t); o.stop(t+.18); break;
      case 'roi': o.frequency.setValueAtTime(700,t); o.type='triangle'; g.gain.setValueAtTime(.05,t); g.gain.exponentialRampToValueAtTime(.001,t+.15); o.start(t); o.stop(t+.15); break;
      case 'temp': o.frequency.setValueAtTime(350,t); o.type='sine'; g.gain.setValueAtTime(.05,t); g.gain.exponentialRampToValueAtTime(.001,t+.2); o.start(t); o.stop(t+.2); break;
      case 'compare': o.frequency.setValueAtTime(600,t); o.type='triangle'; g.gain.setValueAtTime(.06,t); o.frequency.linearRampToValueAtTime(900,t+.15); g.gain.exponentialRampToValueAtTime(.001,t+.2); o.start(t); o.stop(t+.2); break;
      case 'inspect': o.frequency.setValueAtTime(1000,t); o.type='sine'; g.gain.setValueAtTime(.04,t); g.gain.exponentialRampToValueAtTime(.001,t+.1); o.start(t); o.stop(t+.1); break;
      case 'quiz_correct': o.frequency.setValueAtTime(523,t); o.type='sine'; g.gain.setValueAtTime(.08,t); o.frequency.setValueAtTime(659,t+.08); o.frequency.setValueAtTime(784,t+.16); g.gain.exponentialRampToValueAtTime(.001,t+.3); o.start(t); o.stop(t+.3); break;
      case 'quiz_wrong': o.frequency.setValueAtTime(300,t); o.type='sawtooth'; g.gain.setValueAtTime(.06,t); o.frequency.linearRampToValueAtTime(200,t+.2); g.gain.exponentialRampToValueAtTime(.001,t+.25); o.start(t); o.stop(t+.25); break;
      case 'achieve': o.frequency.setValueAtTime(523,t); o.type='sine'; g.gain.setValueAtTime(.08,t); o.frequency.setValueAtTime(659,t+.1); o.frequency.setValueAtTime(784,t+.2); o.frequency.setValueAtTime(1047,t+.3); g.gain.exponentialRampToValueAtTime(.001,t+.5); o.start(t); o.stop(t+.5); break;
      default: o.frequency.setValueAtTime(440,t); o.type='sine'; g.gain.setValueAtTime(.04,t); g.gain.exponentialRampToValueAtTime(.001,t+.1); o.start(t); o.stop(t+.1);
    }
  }
};

// ===== Achievement System =====
var v23Ach = {
  _key: 'hb_v23_ach',
  _list: [
    {id:'choseok_explorer',name:'초석 탐험가',desc:'초석 설계 가이드 열기'},
    {id:'drain_engineer',name:'배수 기술자',desc:'우수 배수 시스템 시뮬레이션'},
    {id:'changho_master',name:'창호 장인',desc:'전통 창호 유형 비교'},
    {id:'safety_inspector',name:'안전 점검관',desc:'구조 안전 진단 완료'},
    {id:'finish_expert',name:'마감재 전문가',desc:'전통 마감재 비교 분석'},
    {id:'remodel_investor',name:'리모델링 투자자',desc:'리모델링 ROI 시뮬레이션'},
    {id:'temp_analyst',name:'온도 분석가',desc:'공간 온도 분포 분석'},
    {id:'stone_architect',name:'석축 건축가',desc:'석축/기단 설계 비교'},
    {id:'quiz_v23_master',name:'v23 퀴즈 마스터',desc:'v23 퀴즈 10문항 정답'},
    {id:'v23_explorer',name:'v23 탐험가',desc:'v23 기능 4개 이상 탐험'},
    {id:'v23_complete',name:'v23 완전정복',desc:'v23 기능 8개 전부 탐험'},
    {id:'quiz_285',name:'퀴즈 285문',desc:'총 퀴즈 285문항 달성'}
  ],
  _unlocked: null,
  _load: function() { if (!this._unlocked) { try { this._unlocked = JSON.parse(localStorage.getItem(this._key)) || {}; } catch(e) { this._unlocked = {}; } } },
  unlock: function(id) {
    this._load();
    if (this._unlocked[id]) return;
    var a = null;
    for (var i = 0; i < this._list.length; i++) { if (this._list[i].id === id) { a = this._list[i]; break; } }
    if (!a) return;
    this._unlocked[id] = true;
    try { localStorage.setItem(this._key, JSON.stringify(this._unlocked)); } catch(e) {}
    v23SFX.play('achieve');
    var toast = document.getElementById('achToast');
    if (toast) {
      toast.querySelector('.ach-icon').textContent = '\u{1F3C6}';
      toast.querySelector('.ach-name').textContent = a.name;
      toast.classList.add('show');
      setTimeout(function() { toast.classList.remove('show'); }, 3000);
    }
  },
  has: function(id) { this._load(); return !!this._unlocked[id]; },
  count: function() { this._load(); return Object.keys(this._unlocked).length; }
};

// ===== Utility functions =====
function v23Grade(pct) { return pct >= 90 ? 'S' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D'; }
function v23GradeColor(g) { return g === 'S' ? '#ffd700' : g === 'A' ? '#4ecdc4' : g === 'B' ? '#45b7d1' : g === 'C' ? '#f39c12' : '#e74c3c'; }

// ===== 1. 전통 초석 설계 가이드 (Radar) =====
window.v23Choseok = (function(){
  var items = [
    {name:'원형초석',size:85,stab:90,beauty:80,trad:95,work:70,dura:92,desc:'가장 전통적인 형태. 궁궐/사찰에 주로 사용. 자연석을 둥글게 다듬어 기둥을 받침.'},
    {name:'방형초석',size:80,stab:88,beauty:75,trad:85,work:75,dura:90,desc:'사각형으로 다듬은 초석. 안정감 있고 시공이 용이. 관아/양반가에 사용.'},
    {name:'팔각초석',size:75,stab:82,beauty:90,trad:80,work:65,dura:85,desc:'팔각형 장식적 초석. 사찰/정자에 사용. 미관이 뛰어남.'},
    {name:'막돌초석',size:90,stab:70,beauty:50,trad:90,work:95,dura:80,desc:'자연석 그대로 사용하는 초석. 서민가옥/초가집에 보편적. 비용이 저렴.'},
    {name:'장대석초석',size:70,stab:85,beauty:70,trad:75,work:60,dura:88,desc:'길고 넓은 돌을 사용. 건물 하부를 통으로 받침. 중요 건물에 사용.'},
    {name:'고주초석',size:65,stab:92,beauty:85,trad:88,work:55,dura:95,desc:'높이 솟은 기둥형 초석. 배흘림 기법 적용. 궁궐 정전에 사용.'},
    {name:'연꽃초석',size:60,stab:78,beauty:95,trad:92,work:45,dura:82,desc:'연꽃 문양 조각 초석. 사찰 건축의 상징. 예술적 가치가 높음.'},
    {name:'쌍원초석',size:70,stab:86,beauty:82,trad:78,work:50,dura:87,desc:'이중 원형 구조. 큰 건물의 하중 분산. 중층 건물에 적합.'},
    {name:'거북초석',size:75,stab:94,beauty:88,trad:90,work:40,dura:96,desc:'거북 형상 초석. 장수와 안정의 상징. 궁궐/왕릉에 사용.'},
    {name:'콘크리트기초',size:95,stab:95,beauty:30,trad:10,work:90,dura:85,desc:'현대식 기초. 대량생산 가능. 전통미는 부족하나 구조적 우수.'}
  ];
  var sel = 0, axes = ['크기','안정성','미관','전통성','가공성','내구성'];
  var visited = {};

  function open() { document.getElementById('v23-choseok').classList.add('active'); v23SFX.play('stone'); buildTabs(); draw(); v23Ach.unlock('choseok_explorer'); visited['choseok'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-choseok').classList.remove('active'); }

  function buildTabs() {
    var el = document.getElementById('v23-cs-tabs'); el.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
      var b = document.createElement('button');
      b.className = 'v23-tab' + (i === sel ? ' active' : '');
      b.textContent = items[i].name;
      b.setAttribute('data-i', i);
      b.onclick = function() { sel = parseInt(this.getAttribute('data-i')); v23SFX.play('tab'); buildTabs(); draw(); };
      el.appendChild(b);
    }
  }

  function draw() {
    var c = document.getElementById('v23-cs-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height, cx = W / 2, cy = H / 2 + 10, R = 130;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(items[sel].name + ' - 6축 Radar', cx, 28);
    var vals = [items[sel].size, items[sel].stab, items[sel].beauty, items[sel].trad, items[sel].work, items[sel].dura];
    var n = 6;
    for (var ring = 1; ring <= 5; ring++) {
      ctx.beginPath();
      for (var j = 0; j <= n; j++) {
        var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
        var r = R * ring / 5;
        var px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
        j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.strokeStyle = 'rgba(196,149,106,' + (ring === 5 ? '.4' : '.15') + ')'; ctx.stroke();
    }
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
      ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.stroke();
      var lx = cx + (R + 22) * Math.cos(angle), ly = cy + (R + 22) * Math.sin(angle);
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(axes[j], lx, ly);
    }
    ctx.beginPath();
    for (var j = 0; j <= n; j++) {
      var idx = j % n;
      var angle = (Math.PI * 2 / n) * idx - Math.PI / 2;
      var r = R * vals[idx] / 100;
      var px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
      j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath(); ctx.fillStyle = 'rgba(196,149,106,.25)'; ctx.fill();
    ctx.strokeStyle = '#c4956a'; ctx.lineWidth = 2; ctx.stroke();
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
      var r = R * vals[j] / 100;
      ctx.beginPath(); ctx.arc(cx + r * Math.cos(angle), cy + r * Math.sin(angle), 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f5deb3'; ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '10px sans-serif';
      ctx.fillText(vals[j], cx + r * Math.cos(angle), cy + r * Math.sin(angle) - 10);
    }
    var avg = Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / n);
    var grade = v23Grade(avg);
    ctx.fillStyle = v23GradeColor(grade); ctx.font = 'bold 36px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(grade, cx, cy + 8);
    ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif';
    ctx.fillText(avg + '점', cx, cy + 28);
    document.getElementById('v23-cs-info').textContent = items[sel].desc;
    document.getElementById('v23-cs-stat').innerHTML =
      '<div class="s"><div class="sv">' + items[sel].name + '</div><div class="sl">선택 초석</div></div>' +
      '<div class="s"><div class="sv" style="color:' + v23GradeColor(grade) + '">' + grade + '</div><div class="sl">종합등급</div></div>' +
      '<div class="s"><div class="sv">' + avg + '</div><div class="sl">평균점수</div></div>';
  }

  function compare() {
    v23SFX.play('compare');
    var c = document.getElementById('v23-cs-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height, cx = W / 2, cy = H / 2 + 10, R = 130, n = 6;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('전체 초석 비교', cx, 28);
    for (var ring = 1; ring <= 5; ring++) {
      ctx.beginPath();
      for (var j = 0; j <= n; j++) {
        var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
        var r = R * ring / 5;
        var px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
        j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.strokeStyle = 'rgba(196,149,106,.15)'; ctx.stroke();
    }
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
      ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.stroke();
      var lx = cx + (R + 22) * Math.cos(angle), ly = cy + (R + 22) * Math.sin(angle);
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(axes[j], lx, ly);
    }
    var colors = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#34495e','#c0392b','#7f8c8d'];
    for (var i = 0; i < items.length; i++) {
      var vals = [items[i].size, items[i].stab, items[i].beauty, items[i].trad, items[i].work, items[i].dura];
      ctx.beginPath();
      for (var j = 0; j <= n; j++) {
        var idx = j % n;
        var angle = (Math.PI * 2 / n) * idx - Math.PI / 2;
        var r = R * vals[idx] / 100;
        var px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
        j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.strokeStyle = colors[i]; ctx.lineWidth = 1.5; ctx.globalAlpha = .6; ctx.stroke(); ctx.globalAlpha = 1;
    }
    var ly = H - 60;
    ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    for (var i = 0; i < items.length; i++) {
      var lx = 20 + (i % 5) * 125, row = Math.floor(i / 5);
      ctx.fillStyle = colors[i]; ctx.fillRect(lx, ly + row * 18, 10, 10);
      ctx.fillStyle = '#e8d5c0'; ctx.fillText(items[i].name, lx + 14, ly + row * 18 + 9);
    }
  }

  function reset() { sel = 0; buildTabs(); draw(); }

  return { open: open, close: close, compare: compare, reset: reset };
})();

// ===== 2. 우수 배수 시스템 설계 (Bar) =====
window.v23Drain = (function(){
  var items = [
    {name:'낙수면 홈통',cap:60,slope:70,maint:85,cost:90,dura:75,eco:80,desc:'전통 한옥 처마 끝 낙수면에서 빗물을 받는 방식. 자연 배수 원리 활용.'},
    {name:'우수관 시스템',cap:90,slope:85,maint:70,cost:60,dura:88,eco:65,desc:'PVC/철관 우수관을 통한 체계적 배수. 현대 건축의 표준 방식.'},
    {name:'지붕배수로',cap:75,slope:80,maint:75,cost:75,dura:82,eco:70,desc:'지붕면 경사를 이용한 자연 배수. 기와지붕의 기본 배수 원리.'},
    {name:'투수포장 배수',cap:65,slope:60,maint:80,cost:70,dura:70,eco:95,desc:'투수성 바닥재를 통한 자연 침투 배수. 친환경적이며 지하수 보충.'},
    {name:'프렌치드레인',cap:85,slope:90,maint:65,cost:55,dura:85,eco:75,desc:'자갈층과 배수관을 조합한 지하 배수. 지하수위 조절에 효과적.'},
    {name:'빗물저장탱크',cap:95,slope:50,maint:60,cost:45,dura:80,eco:98,desc:'빗물을 저장하여 재활용. 물절약과 홍수 방지 효과. 친환경 건축 필수.'},
    {name:'마당 명거',cap:70,slope:75,maint:90,cost:85,dura:78,eco:82,desc:'전통 한옥 마당의 개방형 배수로. 돌을 쌓아 만든 지표면 배수.'},
    {name:'옥상녹화 배수',cap:80,slope:65,maint:55,cost:40,dura:72,eco:92,desc:'식생층을 통한 자연 필터링 배수. 도시 열섬 완화 효과.'}
  ];
  var sel = 0, axes = ['용량','경사효율','유지보수','비용효율','내구성','친환경'];
  var visited = {};

  function open() { document.getElementById('v23-drain').classList.add('active'); v23SFX.play('drain'); buildTabs(); draw(); visited['drain'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-drain').classList.remove('active'); }

  function buildTabs() {
    var el = document.getElementById('v23-dr-tabs'); el.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
      var b = document.createElement('button');
      b.className = 'v23-tab' + (i === sel ? ' active' : '');
      b.textContent = items[i].name;
      b.setAttribute('data-i', i);
      b.onclick = function() { sel = parseInt(this.getAttribute('data-i')); v23SFX.play('tab'); buildTabs(); draw(); };
      el.appendChild(b);
    }
  }

  function draw() {
    var c = document.getElementById('v23-dr-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(items[sel].name + ' - 6지표 Bar', W / 2, 28);
    var vals = [items[sel].cap, items[sel].slope, items[sel].maint, items[sel].cost, items[sel].dura, items[sel].eco];
    var barW = 60, gap = 20, startX = (W - (barW * 6 + gap * 5)) / 2, maxH = H - 120;
    var colors = ['#3498db','#2ecc71','#e67e22','#9b59b6','#e74c3c','#1abc9c'];
    for (var i = 0; i < 6; i++) {
      var x = startX + i * (barW + gap);
      var h = maxH * vals[i] / 100;
      var y = H - 60 - h;
      ctx.fillStyle = colors[i]; ctx.globalAlpha = .85;
      ctx.beginPath(); ctx.moveTo(x + 4, y); ctx.lineTo(x + barW - 4, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + 4);
      ctx.lineTo(x + barW, H - 60); ctx.lineTo(x, H - 60);
      ctx.lineTo(x, y + 4); ctx.quadraticCurveTo(x, y, x + 4, y);
      ctx.fill(); ctx.globalAlpha = 1;
      ctx.fillStyle = '#fff'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(vals[i], x + barW / 2, y - 8);
      ctx.fillStyle = '#c4956a'; ctx.font = '10px sans-serif';
      ctx.fillText(axes[i], x + barW / 2, H - 44);
    }
    var avg = Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / 6);
    var grade = v23Grade(avg);
    ctx.fillStyle = v23GradeColor(grade); ctx.font = 'bold 24px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(grade + ' (' + avg + ')', W - 30, 28);
    document.getElementById('v23-dr-info').textContent = items[sel].desc;
    document.getElementById('v23-dr-stat').innerHTML =
      '<div class="s"><div class="sv">' + items[sel].name + '</div><div class="sl">배수 방식</div></div>' +
      '<div class="s"><div class="sv" style="color:' + v23GradeColor(grade) + '">' + grade + '</div><div class="sl">종합등급</div></div>' +
      '<div class="s"><div class="sv">' + avg + '</div><div class="sl">평균점수</div></div>';
  }

  function simulate() {
    v23SFX.play('drain');
    v23Ach.unlock('drain_engineer');
    var c = document.getElementById('v23-dr-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('전체 배수 시스템 용량 비교', W / 2, 28);
    var sorted = items.slice().sort(function(a, b) { return b.cap - a.cap; });
    var barH = 30, gap = 8, startY = 55;
    var maxW = W - 200;
    for (var i = 0; i < sorted.length; i++) {
      var y = startY + i * (barH + gap);
      var w = maxW * sorted[i].cap / 100;
      var hue = 200 + i * 15;
      ctx.fillStyle = 'hsl(' + hue + ',60%,55%)'; ctx.globalAlpha = .85;
      ctx.beginPath(); ctx.moveTo(140, y); ctx.lineTo(140 + w - 4, y);
      ctx.quadraticCurveTo(140 + w, y, 140 + w, y + 4);
      ctx.lineTo(140 + w, y + barH - 4); ctx.quadraticCurveTo(140 + w, y + barH, 140 + w - 4, y + barH);
      ctx.lineTo(140, y + barH); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
      ctx.fillStyle = '#e8d5c0'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(sorted[i].name, 132, y + barH / 2 + 4);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(sorted[i].cap, 140 + w + 6, y + barH / 2 + 4);
    }
  }

  function reset() { sel = 0; buildTabs(); draw(); }

  return { open: open, close: close, simulate: simulate, reset: reset };
})();

// ===== 3. 전통 창호 유형 분석기 (Radar) =====
window.v23Changho = (function(){
  var items = [
    {name:'분합문',light:85,vent:90,beauty:80,insul:50,trad:95,desc:'4짝 접이식 문. 전체 개방 가능. 대청마루에 사용. 통풍과 채광 최고.'},
    {name:'띠살문',light:70,vent:60,beauty:90,insul:65,trad:92,desc:'가로 띠살 문양. 사찰/궁궐에 사용. 장식적 가치가 높음.'},
    {name:'꽃살문',light:65,vent:55,beauty:95,insul:60,trad:90,desc:'꽃 문양 조각. 사찰 정문에 주로 사용. 예술적 가치 최고.'},
    {name:'판문',light:30,vent:20,beauty:50,insul:90,trad:85,desc:'두꺼운 판자문. 보안/단열 우수. 대문/창고에 사용.'},
    {name:'격자창',light:80,vent:75,beauty:75,insul:55,trad:88,desc:'격자 모양 창살. 빛을 고르게 분산. 안방/서재에 사용.'},
    {name:'아자창',light:75,vent:70,beauty:85,insul:58,trad:86,desc:'亞자 형태 창살. 균형잡힌 디자인. 다양한 건물에 활용.'},
    {name:'완자창',light:72,vent:68,beauty:88,insul:55,trad:84,desc:'卍자 형태 창살. 불교적 상징. 사찰 건축에 주로 사용.'},
    {name:'만자창',light:70,vent:65,beauty:82,insul:60,trad:82,desc:'만(卍)자 문양 반복. 길상의 의미. 궁궐/사찰에 사용.'},
    {name:'용자창',light:68,vent:62,beauty:92,insul:62,trad:88,desc:'용 형상 창살. 왕실 건축에 한정. 최고 격식의 창호.'},
    {name:'이중창호',light:60,vent:50,beauty:70,insul:85,trad:70,desc:'안팎 이중 구조. 단열 성능 우수. 추운 지방 건축에 적합.'}
  ];
  var sel = 0, axes = ['채광','환기','미관','단열','전통성'];

  function open() { document.getElementById('v23-changho').classList.add('active'); v23SFX.play('window'); buildTabs(); draw(); visited['changho'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-changho').classList.remove('active'); }
  var visited = {};

  function buildTabs() {
    var el = document.getElementById('v23-ch-tabs'); el.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
      var b = document.createElement('button');
      b.className = 'v23-tab' + (i === sel ? ' active' : '');
      b.textContent = items[i].name;
      b.setAttribute('data-i', i);
      b.onclick = function() { sel = parseInt(this.getAttribute('data-i')); v23SFX.play('tab'); buildTabs(); draw(); };
      el.appendChild(b);
    }
  }

  function draw() {
    var c = document.getElementById('v23-ch-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height, cx = W / 2, cy = H / 2 + 10, R = 130;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(items[sel].name + ' - 5축 Radar', cx, 28);
    var vals = [items[sel].light, items[sel].vent, items[sel].beauty, items[sel].insul, items[sel].trad];
    var n = 5;
    for (var ring = 1; ring <= 5; ring++) {
      ctx.beginPath();
      for (var j = 0; j <= n; j++) {
        var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
        var r = R * ring / 5;
        var px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
        j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.strokeStyle = 'rgba(196,149,106,' + (ring === 5 ? '.4' : '.15') + ')'; ctx.stroke();
    }
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
      ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.stroke();
      var lx = cx + (R + 22) * Math.cos(angle), ly = cy + (R + 22) * Math.sin(angle);
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(axes[j], lx, ly);
    }
    ctx.beginPath();
    for (var j = 0; j <= n; j++) {
      var idx = j % n;
      var angle = (Math.PI * 2 / n) * idx - Math.PI / 2;
      var r = R * vals[idx] / 100;
      var px = cx + r * Math.cos(angle), py = cy + r * Math.sin(angle);
      j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath(); ctx.fillStyle = 'rgba(76,175,80,.2)'; ctx.fill();
    ctx.strokeStyle = '#4caf50'; ctx.lineWidth = 2; ctx.stroke();
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
      var r = R * vals[j] / 100;
      ctx.beginPath(); ctx.arc(cx + r * Math.cos(angle), cy + r * Math.sin(angle), 4, 0, Math.PI * 2);
      ctx.fillStyle = '#81c784'; ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(vals[j], cx + r * Math.cos(angle), cy + r * Math.sin(angle) - 10);
    }
    var avg = Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / n);
    var grade = v23Grade(avg);
    ctx.fillStyle = v23GradeColor(grade); ctx.font = 'bold 36px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(grade, cx, cy + 8);
    ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif';
    ctx.fillText(avg + '점', cx, cy + 28);
    document.getElementById('v23-ch-info').textContent = items[sel].desc;
    document.getElementById('v23-ch-stat').innerHTML =
      '<div class="s"><div class="sv">' + items[sel].name + '</div><div class="sl">창호 유형</div></div>' +
      '<div class="s"><div class="sv" style="color:' + v23GradeColor(grade) + '">' + grade + '</div><div class="sl">종합등급</div></div>' +
      '<div class="s"><div class="sv">' + avg + '</div><div class="sl">평균점수</div></div>';
  }

  function compare() {
    v23SFX.play('compare'); v23Ach.unlock('changho_master');
    var c = document.getElementById('v23-ch-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('전통 창호 채광 vs 단열 비교', W / 2, 28);
    var barH = 26, gap = 6, startY = 50;
    for (var i = 0; i < items.length; i++) {
      var y = startY + i * (barH + gap);
      var wL = (W / 2 - 90) * items[i].light / 100;
      var wI = (W / 2 - 90) * items[i].insul / 100;
      ctx.fillStyle = '#f39c12'; ctx.fillRect(W / 2 - 2 - wL, y, wL, barH);
      ctx.fillStyle = '#3498db'; ctx.fillRect(W / 2 + 2, y, wI, barH);
      ctx.fillStyle = '#e8d5c0'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(items[i].name, W / 2 - wL - 6, y + barH / 2 + 4);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(items[i].light, W / 2 - 2 - wL / 2, y + barH / 2 + 4);
      ctx.fillText(items[i].insul, W / 2 + 2 + wI / 2, y + barH / 2 + 4);
    }
    ctx.fillStyle = '#f39c12'; ctx.fillRect(W / 2 - 80, H - 30, 12, 12);
    ctx.fillStyle = '#e8d5c0'; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('채광', W / 2 - 64, H - 20);
    ctx.fillStyle = '#3498db'; ctx.fillRect(W / 2 + 10, H - 30, 12, 12);
    ctx.fillStyle = '#e8d5c0'; ctx.fillText('단열', W / 2 + 26, H - 20);
  }

  function reset() { sel = 0; buildTabs(); draw(); }

  return { open: open, close: close, compare: compare, reset: reset };
})();

// ===== 4. 구조 안전 진단 캘린더 (Heatmap) =====
window.v23Safety = (function(){
  var months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  var cats = ['기초','벽체','지붕','배관','전기','방수'];
  var data = [
    [3,2,2,1,1,3,2,1,2,2,3,2],
    [2,2,1,2,2,1,3,3,2,1,2,2],
    [1,1,2,2,3,2,1,3,3,2,1,1],
    [2,3,2,1,2,2,3,2,1,2,3,2],
    [1,2,2,3,2,1,2,2,3,2,1,2],
    [3,2,1,2,3,3,2,1,2,3,2,1]
  ];
  var inspected = {};

  function open() { document.getElementById('v23-safety').classList.add('active'); v23SFX.play('safety'); draw(); visited['safety'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-safety').classList.remove('active'); }
  var visited = {};

  function draw() {
    var c = document.getElementById('v23-sf-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('연간 구조 안전 진단 캘린더', W / 2, 28);
    var cellW = 38, cellH = 42, startX = 90, startY = 65;
    ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    for (var m = 0; m < 12; m++) {
      ctx.fillText(months[m], startX + m * cellW + cellW / 2, startY - 8);
    }
    ctx.textAlign = 'right';
    for (var r = 0; r < 6; r++) {
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif';
      ctx.fillText(cats[r], startX - 8, startY + r * cellH + cellH / 2 + 4);
    }
    for (var r = 0; r < 6; r++) {
      for (var m = 0; m < 12; m++) {
        var v = data[r][m];
        var x = startX + m * cellW, y = startY + r * cellH;
        var key = r + '_' + m;
        var done = inspected[key];
        var color;
        if (done) { color = 'rgba(76,175,80,.7)'; }
        else if (v === 3) { color = 'rgba(231,76,60,.7)'; }
        else if (v === 2) { color = 'rgba(243,156,18,.6)'; }
        else { color = 'rgba(46,204,113,.4)'; }
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x + 3, y); ctx.lineTo(x + cellW - 3, y);
        ctx.quadraticCurveTo(x + cellW, y, x + cellW, y + 3);
        ctx.lineTo(x + cellW, y + cellH - 3);
        ctx.quadraticCurveTo(x + cellW, y + cellH, x + cellW - 3, y + cellH);
        ctx.lineTo(x + 3, y + cellH);
        ctx.quadraticCurveTo(x, y + cellH, x, y + cellH - 3);
        ctx.lineTo(x, y + 3);
        ctx.quadraticCurveTo(x, y, x + 3, y);
        ctx.fill();
        ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.font = done ? 'bold 14px sans-serif' : '12px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(done ? '✓' : (v === 3 ? '⚠' : v === 2 ? '○' : '•'), x + cellW / 2, y + cellH / 2 + 5);
      }
    }
    ctx.fillStyle = 'rgba(231,76,60,.7)'; ctx.fillRect(startX, H - 35, 14, 14);
    ctx.fillStyle = '#e8d5c0'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('긴급', startX + 18, H - 24);
    ctx.fillStyle = 'rgba(243,156,18,.6)'; ctx.fillRect(startX + 70, H - 35, 14, 14);
    ctx.fillText('보통', startX + 88, H - 24);
    ctx.fillStyle = 'rgba(46,204,113,.4)'; ctx.fillRect(startX + 140, H - 35, 14, 14);
    ctx.fillText('양호', startX + 158, H - 24);
    ctx.fillStyle = 'rgba(76,175,80,.7)'; ctx.fillRect(startX + 210, H - 35, 14, 14);
    ctx.fillText('점검완료', startX + 228, H - 24);

    var total = 72, done = Object.keys(inspected).length;
    document.getElementById('v23-sf-info').textContent = '연간 진단 항목: ' + total + '건 중 ' + done + '건 점검 완료 (' + Math.round(done / total * 100) + '%)';
    document.getElementById('v23-sf-stat').innerHTML =
      '<div class="s"><div class="sv">' + total + '</div><div class="sl">총 항목</div></div>' +
      '<div class="s"><div class="sv">' + done + '</div><div class="sl">점검 완료</div></div>' +
      '<div class="s"><div class="sv">' + (total - done) + '</div><div class="sl">미점검</div></div>';
  }

  function inspect() {
    v23SFX.play('inspect');
    var keys = [];
    for (var r = 0; r < 6; r++) for (var m = 0; m < 12; m++) { if (!inspected[r + '_' + m]) keys.push(r + '_' + m); }
    if (keys.length === 0) return;
    var batch = Math.min(6, keys.length);
    for (var i = 0; i < batch; i++) { inspected[keys[i]] = true; }
    if (Object.keys(inspected).length >= 36) v23Ach.unlock('safety_inspector');
    draw();
  }

  function reset() { inspected = {}; draw(); }

  return { open: open, close: close, inspect: inspect, reset: reset };
})();

// ===== 5. 전통 마감재 비교 분석기 (Bar) =====
window.v23Finish = (function(){
  var items = [
    {name:'회벽(석회)',dura:80,beauty:75,eco:85,cost:80,work:70,desc:'석회와 모래를 혼합한 전통 벽체 마감. 습도 조절, 항균 효과.'},
    {name:'황토벽',dura:65,beauty:70,eco:95,cost:85,work:75,desc:'황토를 이용한 자연친화 마감. 원적외선 방출, 습도 조절 탁월.'},
    {name:'단청',dura:55,beauty:98,eco:60,cost:40,work:30,desc:'전통 채색 마감. 궁궐/사찰의 꽃. 방충/방부 효과. 최고 예술성.'},
    {name:'한지벽지',dura:50,beauty:80,eco:90,cost:70,work:80,desc:'닥나무 한지를 이용한 벽면 마감. 호흡하는 벽, 자연 습도 조절.'},
    {name:'기름칠(들기름)',dura:70,beauty:72,eco:88,cost:75,work:85,desc:'들기름/콩기름 도포. 목재 보호, 자연 광택, 방수 효과.'},
    {name:'수성페인트',dura:60,beauty:65,eco:70,cost:90,work:95,desc:'현대적 수성 도료. 시공 용이, 다양한 색상, 빠른 건조.'},
    {name:'옻칠',dura:95,beauty:92,eco:75,cost:35,work:25,desc:'옻나무 수액 도장. 최고 내구성, 광택, 방충/방수/방부 효과.'},
    {name:'삼베마감',dura:55,beauty:68,eco:92,cost:78,work:72,desc:'삼베 직물을 이용한 벽면 마감. 질감이 자연스럽고 통기성 우수.'},
    {name:'숯벽마감',dura:72,beauty:60,eco:88,cost:65,work:68,desc:'숯을 혼합한 벽체 마감. 공기 정화, 음이온 발생, 탈취 효과.'},
    {name:'자연석마감',dura:92,beauty:85,eco:82,cost:45,work:40,desc:'자연석을 활용한 벽면/바닥 마감. 최고 내구성, 고급스러운 질감.'}
  ];
  var sel = 0, axes = ['내구성','미관','친환경','비용효율','시공성'];
  var visited = {};

  function open() { document.getElementById('v23-finish').classList.add('active'); v23SFX.play('finish'); buildTabs(); draw(); visited['finish'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-finish').classList.remove('active'); }

  function buildTabs() {
    var el = document.getElementById('v23-fn-tabs'); el.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
      var b = document.createElement('button');
      b.className = 'v23-tab' + (i === sel ? ' active' : '');
      b.textContent = items[i].name;
      b.setAttribute('data-i', i);
      b.onclick = function() { sel = parseInt(this.getAttribute('data-i')); v23SFX.play('tab'); buildTabs(); draw(); };
      el.appendChild(b);
    }
  }

  function draw() {
    var c = document.getElementById('v23-fn-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(items[sel].name + ' - 5축 Bar', W / 2, 28);
    var vals = [items[sel].dura, items[sel].beauty, items[sel].eco, items[sel].cost, items[sel].work];
    var barW = 70, gap = 22, startX = (W - (barW * 5 + gap * 4)) / 2, maxH = H - 120;
    var colors = ['#e74c3c','#9b59b6','#2ecc71','#3498db','#f39c12'];
    for (var i = 0; i < 5; i++) {
      var x = startX + i * (barW + gap), h = maxH * vals[i] / 100, y = H - 60 - h;
      ctx.fillStyle = colors[i]; ctx.globalAlpha = .85;
      ctx.beginPath(); ctx.moveTo(x + 4, y); ctx.lineTo(x + barW - 4, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + 4);
      ctx.lineTo(x + barW, H - 60); ctx.lineTo(x, H - 60); ctx.lineTo(x, y + 4);
      ctx.quadraticCurveTo(x, y, x + 4, y); ctx.fill(); ctx.globalAlpha = 1;
      ctx.fillStyle = '#fff'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(vals[i], x + barW / 2, y - 8);
      ctx.fillStyle = '#c4956a'; ctx.font = '10px sans-serif';
      ctx.fillText(axes[i], x + barW / 2, H - 44);
    }
    var avg = Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / 5);
    var grade = v23Grade(avg);
    ctx.fillStyle = v23GradeColor(grade); ctx.font = 'bold 24px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(grade + ' (' + avg + ')', W - 30, 28);
    document.getElementById('v23-fn-info').textContent = items[sel].desc;
    document.getElementById('v23-fn-stat').innerHTML =
      '<div class="s"><div class="sv">' + items[sel].name + '</div><div class="sl">마감재</div></div>' +
      '<div class="s"><div class="sv" style="color:' + v23GradeColor(grade) + '">' + grade + '</div><div class="sl">종합등급</div></div>' +
      '<div class="s"><div class="sv">' + avg + '</div><div class="sl">평균점수</div></div>';
  }

  function compare() {
    v23SFX.play('compare'); v23Ach.unlock('finish_expert');
    var c = document.getElementById('v23-fn-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('전체 마감재 내구성 순위', W / 2, 28);
    var sorted = items.slice().sort(function(a, b) { return b.dura - a.dura; });
    var barH = 28, gap = 6, startY = 52;
    var maxW = W - 200;
    var colors = ['#e74c3c','#e67e22','#f39c12','#2ecc71','#3498db','#9b59b6','#1abc9c','#c0392b','#34495e','#7f8c8d'];
    for (var i = 0; i < sorted.length; i++) {
      var y = startY + i * (barH + gap);
      var w = maxW * sorted[i].dura / 100;
      ctx.fillStyle = colors[i]; ctx.globalAlpha = .85;
      ctx.fillRect(130, y, w, barH); ctx.globalAlpha = 1;
      ctx.fillStyle = '#e8d5c0'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(sorted[i].name, 122, y + barH / 2 + 4);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(sorted[i].dura, 130 + w + 6, y + barH / 2 + 4);
    }
  }

  function reset() { sel = 0; buildTabs(); draw(); }

  return { open: open, close: close, compare: compare, reset: reset };
})();

// ===== 6. 리모델링 ROI 시뮬레이터 (Dual Bar) =====
window.v23Remodel = (function(){
  var projects = [
    {name:'주방 리모델링',invest:2500,value:4200,period:3.5,desc:'주방 전면 교체. 높은 투자 가치 회수율. 부동산 가치 상승 효과.'},
    {name:'욕실 리모델링',invest:1800,value:3100,period:3.0,desc:'욕실 현대화. 방수/배관 교체 포함. 생활 편의성 대폭 향상.'},
    {name:'외벽 단열',invest:1500,value:2800,period:2.5,desc:'외벽 단열재 보강. 냉난방비 절감 효과. 장기적 에너지 절약.'},
    {name:'지붕 교체',invest:3000,value:4500,period:4.0,desc:'노후 지붕 전면 교체. 누수 방지, 단열 강화. 건물 수명 연장.'},
    {name:'창호 교체',invest:1200,value:2400,period:2.0,desc:'이중창/삼중창으로 교체. 소음 차단, 단열 성능 향상.'},
    {name:'바닥재 교체',invest:800,value:1500,period:2.5,desc:'마루/타일 교체. 실내 분위기 전환. 비교적 저렴한 투자.'},
    {name:'한옥 복원',invest:5000,value:8500,period:5.0,desc:'전통 한옥 요소 복원. 문화재적 가치. 관광/숙박 활용 가능.'},
    {name:'스마트홈 설치',invest:1000,value:1800,period:3.0,desc:'IoT 기반 자동화. 에너지 절약, 편의성 향상. 미래 가치 상승.'}
  ];

  function open() { document.getElementById('v23-remodel').classList.add('active'); v23SFX.play('roi'); draw(); visited['remodel'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-remodel').classList.remove('active'); }
  var visited = {};

  function draw() {
    var c = document.getElementById('v23-rm-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('리모델링 투자 vs 가치 비교 (만원)', W / 2, 28);
    var barW = 28, gap = 12, groupW = barW * 2 + 6;
    var startX = (W - (groupW * 8 + gap * 7)) / 2;
    var maxV = 9000, maxH = H - 130;
    for (var i = 0; i < projects.length; i++) {
      var gx = startX + i * (groupW + gap);
      var hI = maxH * projects[i].invest / maxV, hV = maxH * projects[i].value / maxV;
      var yI = H - 70 - hI, yV = H - 70 - hV;
      ctx.fillStyle = '#e74c3c'; ctx.globalAlpha = .85;
      ctx.fillRect(gx, yI, barW, hI); ctx.globalAlpha = 1;
      ctx.fillStyle = '#2ecc71'; ctx.globalAlpha = .85;
      ctx.fillRect(gx + barW + 6, yV, barW, hV); ctx.globalAlpha = 1;
      ctx.fillStyle = '#fff'; ctx.font = '9px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(projects[i].invest, gx + barW / 2, yI - 4);
      ctx.fillText(projects[i].value, gx + barW + 6 + barW / 2, yV - 4);
      ctx.save(); ctx.translate(gx + groupW / 2, H - 50);
      ctx.rotate(-Math.PI / 6); ctx.fillStyle = '#c4956a'; ctx.font = '9px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(projects[i].name, 0, 0); ctx.restore();
      var roi = Math.round((projects[i].value - projects[i].invest) / projects[i].invest * 100);
      ctx.fillStyle = roi >= 60 ? '#2ecc71' : '#f39c12'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('+' + roi + '%', gx + groupW / 2, yV - 16);
    }
    ctx.fillStyle = '#e74c3c'; ctx.fillRect(20, H - 25, 12, 12);
    ctx.fillStyle = '#e8d5c0'; ctx.font = '11px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText('투자비', 36, H - 15);
    ctx.fillStyle = '#2ecc71'; ctx.fillRect(90, H - 25, 12, 12);
    ctx.fillText('창출가치', 106, H - 15);
    document.getElementById('v23-rm-info').textContent = '가장 높은 ROI: 한옥 복원 (+70%), 가장 빠른 회수: 창호 교체 (2.0년)';
    var totalInvest = 0, totalValue = 0;
    for (var i = 0; i < projects.length; i++) { totalInvest += projects[i].invest; totalValue += projects[i].value; }
    document.getElementById('v23-rm-stat').innerHTML =
      '<div class="s"><div class="sv">' + totalInvest.toLocaleString() + '</div><div class="sl">총 투자(만원)</div></div>' +
      '<div class="s"><div class="sv">' + totalValue.toLocaleString() + '</div><div class="sl">총 가치(만원)</div></div>' +
      '<div class="s"><div class="sv">+' + Math.round((totalValue - totalInvest) / totalInvest * 100) + '%</div><div class="sl">평균 ROI</div></div>';
  }

  function simulate() {
    v23SFX.play('roi'); v23Ach.unlock('remodel_investor');
    var c = document.getElementById('v23-rm-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('투자 회수 기간 비교 (년)', W / 2, 28);
    var sorted = projects.slice().sort(function(a, b) { return a.period - b.period; });
    var barH = 32, gap = 8, startY = 55, maxW = W - 240;
    for (var i = 0; i < sorted.length; i++) {
      var y = startY + i * (barH + gap);
      var w = maxW * sorted[i].period / 6;
      var hue = 120 - sorted[i].period * 20;
      ctx.fillStyle = 'hsl(' + Math.max(0, hue) + ',60%,50%)'; ctx.globalAlpha = .85;
      ctx.fillRect(160, y, w, barH); ctx.globalAlpha = 1;
      ctx.fillStyle = '#e8d5c0'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(sorted[i].name, 152, y + barH / 2 + 4);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(sorted[i].period + '년', 160 + w + 8, y + barH / 2 + 4);
    }
  }

  function reset() { draw(); }

  return { open: open, close: close, simulate: simulate, reset: reset };
})();

// ===== 7. 공간 온도 분포도 (Heatmap) =====
window.v23TempMap = (function(){
  var rooms = ['거실','안방','주방','욕실','서재','다락방','마루','창고'];
  var seasons = ['봄','여름','가을','겨울'];
  var temps = [
    [22,28,21,16], [23,29,22,18], [24,32,23,14],
    [25,30,24,20], [21,27,20,17], [18,34,17,8],
    [20,26,19,10], [15,30,14,5]
  ];
  var sel_season = 0;
  var visited = {};

  function open() { document.getElementById('v23-tempmap').classList.add('active'); v23SFX.play('temp'); buildTabs(); draw(); visited['tempmap'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-tempmap').classList.remove('active'); }

  function buildTabs() {
    var el = document.getElementById('v23-tm-tabs'); el.innerHTML = '';
    for (var i = 0; i < seasons.length; i++) {
      var b = document.createElement('button');
      b.className = 'v23-tab' + (i === sel_season ? ' active' : '');
      b.textContent = seasons[i];
      b.setAttribute('data-i', i);
      b.onclick = function() { sel_season = parseInt(this.getAttribute('data-i')); v23SFX.play('tab'); buildTabs(); draw(); };
      el.appendChild(b);
    }
  }

  function tempColor(t) {
    if (t <= 10) return 'rgba(52,152,219,.8)';
    if (t <= 18) return 'rgba(46,204,113,.6)';
    if (t <= 24) return 'rgba(241,196,15,.7)';
    if (t <= 30) return 'rgba(230,126,34,.8)';
    return 'rgba(231,76,60,.9)';
  }

  function draw() {
    var c = document.getElementById('v23-tm-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(seasons[sel_season] + ' - 공간별 온도 분포', W / 2, 28);

    var cols = 4, rows = 2, cellW = 130, cellH = 120;
    var startX = (W - cols * cellW) / 2, startY = 55;
    for (var i = 0; i < rooms.length; i++) {
      var col = i % cols, row = Math.floor(i / cols);
      var x = startX + col * cellW + 4, y = startY + row * (cellH + 10);
      var t = temps[i][sel_season];
      ctx.fillStyle = tempColor(t);
      ctx.beginPath();
      ctx.moveTo(x + 6, y); ctx.lineTo(x + cellW - 12, y);
      ctx.quadraticCurveTo(x + cellW - 4, y, x + cellW - 4, y + 6);
      ctx.lineTo(x + cellW - 4, y + cellH - 6);
      ctx.quadraticCurveTo(x + cellW - 4, y + cellH, x + cellW - 12, y + cellH);
      ctx.lineTo(x + 6, y + cellH);
      ctx.quadraticCurveTo(x, y + cellH, x, y + cellH - 6);
      ctx.lineTo(x, y + 6);
      ctx.quadraticCurveTo(x, y, x + 6, y);
      ctx.fill();
      ctx.strokeStyle = 'rgba(196,149,106,.3)'; ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 28px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(t + '°C', x + (cellW - 8) / 2, y + cellH / 2 + 4);
      ctx.fillStyle = '#f5deb3'; ctx.font = '12px sans-serif';
      ctx.fillText(rooms[i], x + (cellW - 8) / 2, y + cellH / 2 + 26);
      var comfort = (t >= 18 && t <= 26) ? '✓ 쾌적' : (t < 18 ? '❄ 저온' : '☀ 고온');
      ctx.fillStyle = (t >= 18 && t <= 26) ? '#2ecc71' : '#e74c3c'; ctx.font = '10px sans-serif';
      ctx.fillText(comfort, x + (cellW - 8) / 2, y + cellH / 2 + 42);
    }
    var comfortCount = 0;
    for (var i = 0; i < rooms.length; i++) { if (temps[i][sel_season] >= 18 && temps[i][sel_season] <= 26) comfortCount++; }
    document.getElementById('v23-tm-info').textContent = seasons[sel_season] + ': 8실 중 ' + comfortCount + '실 쾌적 온도 범위 (18~26°C)';
    document.getElementById('v23-tm-stat').innerHTML =
      '<div class="s"><div class="sv">' + comfortCount + '/8</div><div class="sl">쾌적 비율</div></div>' +
      '<div class="s"><div class="sv">' + Math.round(comfortCount / 8 * 100) + '%</div><div class="sl">쾌적도</div></div>' +
      '<div class="s"><div class="sv">' + seasons[sel_season] + '</div><div class="sl">현재 계절</div></div>';
  }

  function analyze() {
    v23SFX.play('temp'); v23Ach.unlock('temp_analyst');
    var c = document.getElementById('v23-tm-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('전체 계절 온도 히트맵', W / 2, 28);
    var cellW = 120, cellH = 34, startX = 100, startY = 60;
    ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    for (var s = 0; s < 4; s++) ctx.fillText(seasons[s], startX + s * cellW + cellW / 2, startY - 8);
    for (var r = 0; r < rooms.length; r++) {
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(rooms[r], startX - 8, startY + r * (cellH + 4) + cellH / 2 + 4);
      for (var s = 0; s < 4; s++) {
        var x = startX + s * cellW, y = startY + r * (cellH + 4);
        var t = temps[r][s];
        ctx.fillStyle = tempColor(t);
        ctx.fillRect(x + 2, y, cellW - 4, cellH);
        ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.strokeRect(x + 2, y, cellW - 4, cellH);
        ctx.fillStyle = '#fff'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(t + '°', x + cellW / 2, y + cellH / 2 + 5);
      }
    }
  }

  function reset() { sel_season = 0; buildTabs(); draw(); }

  return { open: open, close: close, analyze: analyze, reset: reset };
})();

// ===== 8. 전통 석축/기단 설계 (Radar) =====
window.v23Stone = (function(){
  var items = [
    {name:'자연석축',stab:75,beauty:85,drain:70,dura:90,trad:95,scale:60,desc:'자연석을 쌓아올린 석축. 자연스러운 미관. 한옥/사찰의 기본 기단.'},
    {name:'절석축',stab:90,beauty:80,drain:75,dura:92,trad:85,scale:80,desc:'정밀 가공 석재. 궁궐/관아의 격식 있는 기단. 정교한 기술 필요.'},
    {name:'잡석축',stab:65,beauty:55,drain:80,dura:78,trad:80,scale:70,desc:'다양한 크기의 돌을 혼합. 배수 효과 우수. 서민가옥에 보편적.'},
    {name:'장대석기단',stab:92,beauty:88,drain:65,dura:95,trad:90,scale:90,desc:'길고 넓적한 돌을 수평 적층. 궁궐/정전의 최고급 기단.'},
    {name:'갑석기단',stab:88,beauty:82,drain:72,dura:88,trad:88,scale:75,desc:'상부에 갑석(뚜껑돌)을 얹은 기단. 우수 차단. 격식 높은 건물.'},
    {name:'막돌허튼쌓기',stab:55,beauty:50,drain:85,dura:70,trad:75,scale:50,desc:'자연석을 불규칙하게 쌓기. 가장 소박한 방식. 시골 가옥.'},
    {name:'전돌기단',stab:80,beauty:78,drain:60,dura:75,trad:70,scale:85,desc:'벽돌(전돌)을 이용한 기단. 고려/조선시대 관아. 정교한 패턴.'},
    {name:'콘크리트기단',stab:95,beauty:35,drain:50,dura:80,trad:10,scale:95,desc:'현대식 기초. 대량 시공 가능. 전통미 부족하나 구조적 우수.'}
  ];
  var sel = 0, axes = ['안정성','미관','배수','내구성','전통성','규모'];
  var visited = {};

  function open() { document.getElementById('v23-stone').classList.add('active'); v23SFX.play('stone'); buildTabs(); draw(); v23Ach.unlock('stone_architect'); visited['stone'] = true; checkExplorer(); }
  function close() { document.getElementById('v23-stone').classList.remove('active'); }

  function buildTabs() {
    var el = document.getElementById('v23-st-tabs'); el.innerHTML = '';
    for (var i = 0; i < items.length; i++) {
      var b = document.createElement('button');
      b.className = 'v23-tab' + (i === sel ? ' active' : '');
      b.textContent = items[i].name;
      b.setAttribute('data-i', i);
      b.onclick = function() { sel = parseInt(this.getAttribute('data-i')); v23SFX.play('tab'); buildTabs(); draw(); };
      el.appendChild(b);
    }
  }

  function draw() {
    var c = document.getElementById('v23-st-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height, cx = W / 2, cy = H / 2 + 10, R = 120;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(items[sel].name + ' - 6축 Radar', cx, 28);
    var vals = [items[sel].stab, items[sel].beauty, items[sel].drain, items[sel].dura, items[sel].trad, items[sel].scale];
    var n = 6;
    for (var ring = 1; ring <= 5; ring++) {
      ctx.beginPath();
      for (var j = 0; j <= n; j++) {
        var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
        var r = R * ring / 5;
        j === 0 ? ctx.moveTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle)) : ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
      }
      ctx.closePath(); ctx.strokeStyle = 'rgba(196,149,106,' + (ring === 5 ? '.4' : '.15') + ')'; ctx.stroke();
    }
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(angle), cy + R * Math.sin(angle));
      ctx.strokeStyle = 'rgba(196,149,106,.2)'; ctx.stroke();
      ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(axes[j], cx + (R + 20) * Math.cos(angle), cy + (R + 20) * Math.sin(angle));
    }
    ctx.beginPath();
    for (var j = 0; j <= n; j++) {
      var idx = j % n, angle = (Math.PI * 2 / n) * idx - Math.PI / 2, r = R * vals[idx] / 100;
      j === 0 ? ctx.moveTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle)) : ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    }
    ctx.closePath(); ctx.fillStyle = 'rgba(155,89,182,.25)'; ctx.fill();
    ctx.strokeStyle = '#9b59b6'; ctx.lineWidth = 2; ctx.stroke();
    for (var j = 0; j < n; j++) {
      var angle = (Math.PI * 2 / n) * j - Math.PI / 2, r = R * vals[j] / 100;
      ctx.beginPath(); ctx.arc(cx + r * Math.cos(angle), cy + r * Math.sin(angle), 4, 0, Math.PI * 2);
      ctx.fillStyle = '#af7ac5'; ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(vals[j], cx + r * Math.cos(angle), cy + r * Math.sin(angle) - 10);
    }
    var avg = Math.round(vals.reduce(function(a, b) { return a + b; }, 0) / n);
    var grade = v23Grade(avg);
    ctx.fillStyle = v23GradeColor(grade); ctx.font = 'bold 36px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(grade, cx, cy + 8);
    ctx.fillStyle = '#c4956a'; ctx.font = '11px sans-serif';
    ctx.fillText(avg + '점', cx, cy + 28);
    document.getElementById('v23-st-info').textContent = items[sel].desc;
    document.getElementById('v23-st-stat').innerHTML =
      '<div class="s"><div class="sv">' + items[sel].name + '</div><div class="sl">석축 유형</div></div>' +
      '<div class="s"><div class="sv" style="color:' + v23GradeColor(grade) + '">' + grade + '</div><div class="sl">종합등급</div></div>' +
      '<div class="s"><div class="sv">' + avg + '</div><div class="sl">평균점수</div></div>';
  }

  function compare() {
    v23SFX.play('compare');
    var c = document.getElementById('v23-st-canvas'), ctx = c.getContext('2d');
    var W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#f5deb3'; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('전체 석축 안정성 순위', W / 2, 28);
    var sorted = items.slice().sort(function(a, b) { return b.stab - a.stab; });
    var barH = 32, gap = 8, startY = 55, maxW = W - 220;
    var colors = ['#9b59b6','#8e44ad','#7d3c98','#6c3483','#5b2c6f','#4a235a','#3498db','#2980b9'];
    for (var i = 0; i < sorted.length; i++) {
      var y = startY + i * (barH + gap), w = maxW * sorted[i].stab / 100;
      ctx.fillStyle = colors[i]; ctx.globalAlpha = .85;
      ctx.fillRect(150, y, w, barH); ctx.globalAlpha = 1;
      ctx.fillStyle = '#e8d5c0'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
      ctx.fillText(sorted[i].name, 142, y + barH / 2 + 4);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(sorted[i].stab, 150 + w + 6, y + barH / 2 + 4);
    }
  }

  function reset() { sel = 0; buildTabs(); draw(); }

  return { open: open, close: close, compare: compare, reset: reset };
})();

// ===== Quiz v23 (15 questions, 270->285) =====
var v23Quiz = (function(){
  var questions = [
    {q:'한옥에서 기둥을 받치는 돌을 무엇이라 하는가?',a:['초석','주추','기초석','초석(주춧돌)'],correct:3,hint:'주춧돌이라고도 합니다'},
    {q:'전통 한옥에서 4짝 접이식으로 전체 개방 가능한 문은?',a:['판문','분합문','띠살문','격자문'],correct:1,hint:'대청마루에 사용됩니다'},
    {q:'빗물을 저장하여 재활용하는 친환경 배수 방식은?',a:['프렌치드레인','우수관','빗물저장탱크','투수포장'],correct:2,hint:'물절약과 홍수 방지 효과'},
    {q:'건축에서 열관류율(U값)의 단위는?',a:['W/m²K','kJ/kg','Pa','lux'],correct:0,hint:'열이 전달되는 비율'},
    {q:'전통 마감재 중 옻나무 수액을 이용한 도장 기법은?',a:['회벽','단청','옻칠','기름칠'],correct:2,hint:'최고 내구성, 광택'},
    {q:'건축 리모델링에서 ROI가 가장 높은 프로젝트는?',a:['바닥재 교체','창호 교체','주방 리모델링','한옥 복원'],correct:3,hint:'문화재적 가치까지'},
    {q:'궁궐 정전에 사용된 높이 솟은 기둥형 초석은?',a:['막돌초석','방형초석','고주초석','원형초석'],correct:2,hint:'배흘림 기법 적용'},
    {q:'자갈층과 배수관을 조합한 지하 배수 방식은?',a:['명거','프렌치드레인','투수포장','옥상녹화'],correct:1,hint:'지하수위 조절에 효과적'},
    {q:'꽃 문양을 조각한 사찰 정문의 전통 창호는?',a:['띠살문','격자창','꽃살문','판문'],correct:2,hint:'예술적 가치 최고'},
    {q:'건축 구조 안전 진단에서 기초, 벽체, 지붕 외에 점검하는 3항목은?',a:['배관/전기/방수','도색/미관/조경','가구/조명/커튼','문/창/계단'],correct:0,hint:'배관, 전기, 방수'},
    {q:'전통 한옥에서 황토를 이용한 자연친화 벽체 마감은?',a:['회벽','황토벽','한지벽지','삼베마감'],correct:1,hint:'원적외선 방출'},
    {q:'가장 큰 돌을 수평으로 적층하는 최고급 기단 방식은?',a:['잡석축','전돌기단','장대석기단','막돌허튼쌓기'],correct:2,hint:'궁궐/정전에 사용'},
    {q:'실내 쾌적 온도 범위는 일반적으로 몇 도인가?',a:['10~15°C','18~26°C','28~32°C','14~20°C'],correct:1,hint:'쾌적 온도 범위'},
    {q:'전통 한옥의 처마 끝에서 빗물을 자연 배수하는 방식은?',a:['우수관 시스템','빗물저장탱크','낙수면 홈통','프렌치드레인'],correct:2,hint:'자연 배수 원리 활용'},
    {q:'안팎 이중 구조로 단열 성능이 우수한 창호는?',a:['분합문','이중창호','격자창','판문'],correct:1,hint:'추운 지방에 적합'}
  ];
  var idx = 0, score = 0, total = questions.length, answered = false;

  function start() {
    idx = 0; score = 0; answered = false;
    var overlay = document.getElementById('quizOverlay');
    if (overlay) { overlay.classList.add('show'); render(); }
  }

  function render() {
    var overlay = document.getElementById('quizOverlay');
    if (!overlay) return;
    var q = questions[idx];
    var card = overlay.querySelector('.quiz-card');
    if (!card) return;
    card.querySelector('.quiz-progress').textContent = (idx + 1) + ' / ' + total;
    card.querySelector('.quiz-q').textContent = q.q;
    var opts = card.querySelector('.quiz-options');
    opts.innerHTML = '';
    for (var i = 0; i < q.a.length; i++) {
      var btn = document.createElement('button');
      btn.className = 'quiz-opt';
      btn.textContent = q.a[i];
      btn.setAttribute('data-i', i);
      btn.onclick = function() {
        if (answered) return;
        answered = true;
        var chosen = parseInt(this.getAttribute('data-i'));
        if (chosen === q.correct) { score++; v23SFX.play('quiz_correct'); this.style.background = '#2ecc71'; }
        else { v23SFX.play('quiz_wrong'); this.style.background = '#e74c3c'; opts.children[q.correct].style.background = '#2ecc71'; }
        setTimeout(function() {
          answered = false;
          idx++;
          if (idx >= total) { finish(); }
          else { render(); }
        }, 1200);
      };
      opts.appendChild(btn);
    }
  }

  function finish() {
    var overlay = document.getElementById('quizOverlay');
    if (overlay) overlay.classList.remove('show');
    if (score >= 10) v23Ach.unlock('quiz_v23_master');
    v23Ach.unlock('quiz_285');
    var pct = Math.round(score / total * 100);
    var grade = v23Grade(pct);
    alert('v23 퀴즈 완료! ' + score + '/' + total + ' (' + pct + '%) 등급: ' + grade);
  }

  return { start: start };
})();

// ===== Explorer achievement check =====
var v23_visited = {};
function checkExplorer() {
  var keys = ['choseok','drain','changho','safety','finish','remodel','tempmap','stone'];
  var count = 0;
  for (var i = 0; i < keys.length; i++) {
    if (v23Choseok && v23Drain && v23Changho && v23Safety && v23Finish && v23Remodel && v23TempMap && v23Stone) count++;
  }
  // simpler: track opens
  if (!window.__v23opens) window.__v23opens = {};
  var k = arguments.callee.caller ? '' : '';
  var opened = Object.keys(window.__v23opens).length;
  if (opened >= 4) v23Ach.unlock('v23_explorer');
  if (opened >= 8) v23Ach.unlock('v23_complete');
}

// ===== Side Menu =====
(function(){
  var menu = document.createElement('div');
  menu.className = 'v23-menu';
  var btns = [
    {icon:'🪨',label:'초석 설계',fn:'v23Choseok.open()',key:'A'},
    {icon:'💧',label:'우수 배수',fn:'v23Drain.open()',key:'S'},
    {icon:'🪟',label:'전통 창호',fn:'v23Changho.open()',key:'D'},
    {icon:'🛡️',label:'안전 진단',fn:'v23Safety.open()',key:'F'},
    {icon:'🎨',label:'마감재 비교',fn:'v23Finish.open()',key:'G'},
    {icon:'💰',label:'리모델링 ROI',fn:'v23Remodel.open()',key:'H'},
    {icon:'🌡️',label:'온도 분포',fn:'v23TempMap.open()',key:'J'},
    {icon:'🏛️',label:'석축/기단',fn:'v23Stone.open()',key:'K'},
    {icon:'❓',label:'v23 퀴즈',fn:'v23Quiz.start()',key:'9'}
  ];
  for (var i = 0; i < btns.length; i++) {
    var b = document.createElement('button');
    b.className = 'v23-menu-btn';
    b.innerHTML = btns[i].icon + '<span class="v23-menu-label">' + btns[i].label + ' [Shift+' + btns[i].key + ']</span>';
    b.setAttribute('onclick', btns[i].fn);
    b.addEventListener('mouseenter', function() { v23SFX.play('hover'); });
    menu.appendChild(b);
  }
  document.body.appendChild(menu);

  document.addEventListener('keydown', function(e) {
    if (!e.shiftKey) return;
    var map = {A:0,S:1,D:2,F:3,G:4,H:5,J:6,K:7,Digit9:8};
    var key = e.code === 'Digit9' ? 'Digit9' : e.key.toUpperCase();
    var idx = map[key];
    if (idx !== undefined) {
      e.preventDefault();
      if (!window.__v23opens) window.__v23opens = {};
      window.__v23opens[idx] = true;
      try { eval(btns[idx].fn); } catch(ex) {}
    }
  });
})();

// track opens for explorer achievement
(function(){
  if (!window.__v23opens) window.__v23opens = {};
  var origOpen = {};
  var mods = {
    0: v23Choseok, 1: v23Drain, 2: v23Changho, 3: v23Safety,
    4: v23Finish, 5: v23Remodel, 6: v23TempMap, 7: v23Stone
  };
  for (var k in mods) {
    (function(key, mod) {
      var orig = mod.open;
      mod.open = function() {
        window.__v23opens[key] = true;
        var count = Object.keys(window.__v23opens).length;
        if (count >= 4) v23Ach.unlock('v23_explorer');
        if (count >= 8) v23Ach.unlock('v23_complete');
        return orig.apply(this, arguments);
      };
    })(k, mods[k]);
  }
})();

} // end __hbV23 guard

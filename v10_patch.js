// =====================================================
// House Builder v10.0 Patch
// 풍수지리분석기+건축마스터클래스12강+건축대결AI10인+한옥마을가상투어8장소
// 건축역사지도Canvas+에너지효율분석기+건축일기장+구조안전시뮬레이터
// 퀴즈15추가(75→90)+업적12추가(86→98)+SFX10종+키보드8종
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV10) {
window.__hbV10 = true;

// ── 1. CSS Injection ──
(function(){
  var css = document.createElement('style');
  css.textContent = [
    '.v10-panel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:3400;overflow-y:auto;padding:16px}',
    '.v10-panel.active{display:block}',
    '.v10-box{max-width:660px;margin:40px auto}',
    '.v10-box h2{color:#f5deb3;text-align:center;font-size:22px;margin-bottom:4px}',
    '.v10-box>p{color:#c4956a;text-align:center;font-size:13px;margin-bottom:20px}',
    '.v10-close{display:block;margin:20px auto 0;padding:10px 28px;border:none;border-radius:20px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:14px;cursor:pointer;font-family:inherit}',
    '.v10-close:hover{background:#d4a57a}',
    '.v10-tabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}',
    '.v10-tab{padding:6px 14px;border-radius:16px;border:1px solid rgba(196,149,106,.3);background:rgba(255,255,255,.05);color:#e8d5c0;font-size:12px;cursor:pointer;transition:all .2s}',
    '.v10-tab:hover,.v10-tab.active{background:rgba(196,149,106,.3);border-color:#c4956a;color:#f5deb3}',
    '.v10-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px}',
    '.v10-card{background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s}',
    '.v10-card:hover{background:rgba(196,149,106,.18);border-color:#c4956a;transform:translateY(-2px)}',
    '.v10-card.selected{border-color:#4a7c59;background:rgba(74,124,89,.15)}',
    '.v10-card h4{color:#f5deb3;font-size:12px;margin:0 0 2px}',
    '.v10-card p{color:#c4956a;font-size:11px;margin:0}',
    '.v10-canvas{border:2px solid rgba(196,149,106,.3);border-radius:10px;margin:16px auto;display:block;max-width:100%}',
    '.v10-lesson{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v10-lesson:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v10-lesson.done{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v10-lesson.locked{opacity:.45;cursor:not-allowed}',
    '.v10-lesson h4{color:#f5deb3;font-size:13px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v10-lesson h4 .tag{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v10-lesson p{color:#c4956a;font-size:12px;margin:0;line-height:1.6}',
    '.v10-lesson .lesson-body{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7}',
    '.v10-lesson.expanded .lesson-body{display:block}',
    '.v10-leader{display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;margin-bottom:8px}',
    '.v10-leader .rank{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;flex-shrink:0}',
    '.v10-leader .rank.gold{background:#ffd700;color:#2d1b0e}',
    '.v10-leader .rank.silver{background:#c0c0c0;color:#2d1b0e}',
    '.v10-leader .rank.bronze{background:#cd7f32;color:#fff}',
    '.v10-leader .rank.normal{background:rgba(255,255,255,.1);color:#c4956a}',
    '.v10-leader .info{flex:1}',
    '.v10-leader .info h4{color:#f5deb3;font-size:13px;margin:0}',
    '.v10-leader .info p{color:#c4956a;font-size:11px;margin:0}',
    '.v10-leader .score{color:#f5deb3;font-size:16px;font-weight:700}',
    '.v10-tour-card{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:14px;margin-bottom:10px;cursor:pointer;transition:all .2s}',
    '.v10-tour-card:hover{background:rgba(196,149,106,.12);border-color:#c4956a}',
    '.v10-tour-card.visited{border-color:#4a7c59;background:rgba(74,124,89,.08)}',
    '.v10-tour-card h4{color:#f5deb3;font-size:14px;margin:0 0 4px;display:flex;align-items:center;gap:8px}',
    '.v10-tour-card .tour-era{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.2);color:#c4956a}',
    '.v10-tour-card p{color:#c4956a;font-size:12px;margin:0;line-height:1.5}',
    '.v10-tour-card .tour-detail{display:none;margin-top:10px;color:#e8d5c0;font-size:12px;line-height:1.7;border-top:1px solid rgba(196,149,106,.15);padding-top:10px}',
    '.v10-tour-card.expanded .tour-detail{display:block}',
    '.v10-tour-card .tour-tags{margin-top:6px;display:flex;gap:4px;flex-wrap:wrap}',
    '.v10-tour-card .tour-tags span{font-size:10px;padding:2px 6px;border-radius:8px;background:rgba(196,149,106,.1);color:#c4956a}',
    '.v10-radar-item{display:flex;align-items:center;gap:10px;margin-bottom:10px}',
    '.v10-radar-item .radar-label{width:60px;color:#f5deb3;font-size:12px;text-align:right;flex-shrink:0}',
    '.v10-radar-item .radar-bar{flex:1;height:18px;background:rgba(255,255,255,.08);border-radius:9px;overflow:hidden;position:relative}',
    '.v10-radar-item .radar-fill{height:100%;border-radius:9px;transition:width .4s}',
    '.v10-radar-item .radar-val{width:36px;color:#c4956a;font-size:12px;text-align:left;flex-shrink:0}',
    '.v10-journal{background:rgba(196,149,106,.06);border:1px solid rgba(196,149,106,.15);border-radius:10px;padding:12px 14px;margin-bottom:8px;position:relative}',
    '.v10-journal h4{color:#f5deb3;font-size:12px;margin:0 0 4px;display:flex;align-items:center;gap:6px}',
    '.v10-journal p{color:#e8d5c0;font-size:12px;margin:0;line-height:1.5}',
    '.v10-journal .j-time{font-size:10px;color:#c4956a}',
    '.v10-journal .j-del{position:absolute;top:10px;right:12px;background:none;border:none;color:#c4956a;cursor:pointer;font-size:14px;padding:2px 6px}',
    '.v10-journal .j-del:hover{color:#ff6b6b}',
    '.v10-input{width:100%;padding:10px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(196,149,106,.3);border-radius:10px;color:#f5deb3;font-size:13px;font-family:inherit;outline:none;box-sizing:border-box}',
    '.v10-input:focus{border-color:#c4956a}',
    '.v10-textarea{width:100%;padding:10px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(196,149,106,.3);border-radius:10px;color:#f5deb3;font-size:13px;font-family:inherit;outline:none;resize:vertical;min-height:80px;box-sizing:border-box}',
    '.v10-textarea:focus{border-color:#c4956a}',
    '.v10-textarea::placeholder,.v10-input::placeholder{color:rgba(196,149,106,.5)}',
    '.v10-mood-row{display:flex;gap:8px;justify-content:center;margin:12px 0}',
    '.v10-mood{font-size:28px;cursor:pointer;padding:4px 8px;border-radius:10px;border:2px solid transparent;transition:all .2s;background:none}',
    '.v10-mood:hover{border-color:rgba(196,149,106,.3)}',
    '.v10-mood.selected{border-color:#c4956a;background:rgba(196,149,106,.15)}',
    '.v10-btn-sm{padding:6px 16px;border:none;border-radius:14px;background:#c4956a;color:#2d1b0e;font-weight:600;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v10-btn-sm:hover{background:#d4a57a}',
    '.v10-btn-outline{padding:6px 16px;border:1px solid rgba(196,149,106,.3);border-radius:14px;background:transparent;color:#e8d5c0;font-size:12px;cursor:pointer;font-family:inherit}',
    '.v10-btn-outline:hover{background:rgba(196,149,106,.15);border-color:#c4956a}',
    '.v10-sim-result{text-align:center;padding:20px;background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:12px;margin:16px 0}',
    '.v10-sim-result .grade{font-size:56px;font-weight:700;margin-bottom:4px}',
    '.v10-sim-result .grade-s{color:#ffd700}',
    '.v10-sim-result .grade-a{color:#4ecdc4}',
    '.v10-sim-result .grade-b{color:#45b7d1}',
    '.v10-sim-result .grade-c{color:#c4956a}',
    '.v10-sim-result .grade-d{color:#ff6b6b}',
    '.v10-sim-result p{color:#c4956a;font-size:13px;margin:4px 0}',
    '.v10-select{width:100%;padding:10px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(196,149,106,.3);border-radius:10px;color:#f5deb3;font-size:13px;font-family:inherit;outline:none;appearance:none;-webkit-appearance:none;cursor:pointer}',
    '.v10-select:focus{border-color:#c4956a}',
    '.v10-select option{background:#2d1b0e;color:#f5deb3}',
    '.v10-row{display:flex;gap:12px;margin-bottom:12px;align-items:center;flex-wrap:wrap}',
    '.v10-row label{color:#f5deb3;font-size:12px;min-width:80px}',
    '.v10-row select,.v10-row input[type=range]{flex:1;min-width:120px}',
    '.v10-legend{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:12px 0}',
    '.v10-legend span{font-size:11px;color:#c4956a;display:flex;align-items:center;gap:4px}',
    '.v10-legend .dot{width:10px;height:10px;border-radius:50%;display:inline-block}',
    '.v10-slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;background:rgba(255,255,255,.1);outline:none}',
    '.v10-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:#c4956a;cursor:pointer}',
    '.v10-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#c4956a;cursor:pointer;border:none}',
    '@media(max-width:768px){.v10-grid{grid-template-columns:repeat(2,1fr)}.v10-row{flex-direction:column;align-items:stretch}.v10-row label{min-width:auto}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 2. HTML Panel Injection ──
(function(){
  var ids = ['v10FengshuiPanel','v10MasterPanel','v10BattlePanel','v10TourPanel','v10MapPanel','v10EnergyPanel','v10JournalPanel','v10SafetyPanel'];
  ids.forEach(function(id){
    var d = document.createElement('div');
    d.id = id;
    d.className = 'v10-panel';
    document.body.appendChild(d);
  });
})();

// ── 3. Web Audio SFX v10 (10 types) ──
var v10SFX = {};
(function(){
  var ctx = null;
  function getCtx(){ if(!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); return ctx; }
  function play(type){
    if(window.muted) return;
    try{
      var c = getCtx(), t = c.currentTime;
      var o, g;
      switch(type){
        case 'fengshui':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(396,t);o.frequency.setValueAtTime(528,t+0.12);
          o.frequency.setValueAtTime(639,t+0.24);
          g.gain.setValueAtTime(0.2,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.4);
          o.start(t);o.stop(t+0.4);break;
        case 'lesson_open':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='triangle';o.frequency.setValueAtTime(440,t);o.frequency.linearRampToValueAtTime(660,t+0.15);
          g.gain.setValueAtTime(0.18,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t);o.stop(t+0.2);break;
        case 'lesson_done':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(659,t+0.12);
          o.frequency.setValueAtTime(784,t+0.24);
          g.gain.setValueAtTime(0.22,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.4);
          o.start(t);o.stop(t+0.4);break;
        case 'battle_win':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(659,t+0.1);
          o.frequency.setValueAtTime(784,t+0.2);o.frequency.setValueAtTime(988,t+0.3);
          o.frequency.setValueAtTime(1047,t+0.4);
          g.gain.setValueAtTime(0.25,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.55);
          o.start(t);o.stop(t+0.55);break;
        case 'tour_visit':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(330,t);o.frequency.setValueAtTime(440,t+0.1);
          o.frequency.setValueAtTime(550,t+0.2);
          g.gain.setValueAtTime(0.18,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.3);
          o.start(t);o.stop(t+0.3);break;
        case 'map_marker':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(600,t);o.frequency.linearRampToValueAtTime(800,t+0.08);
          o.frequency.linearRampToValueAtTime(600,t+0.16);
          g.gain.setValueAtTime(0.15,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.2);
          o.start(t);o.stop(t+0.2);break;
        case 'energy_scan':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sawtooth';o.frequency.setValueAtTime(200,t);o.frequency.linearRampToValueAtTime(800,t+0.3);
          g.gain.setValueAtTime(0.1,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.35);
          o.start(t);o.stop(t+0.35);break;
        case 'journal_save':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(500,t);o.frequency.linearRampToValueAtTime(700,t+0.1);
          g.gain.setValueAtTime(0.15,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.15);
          o.start(t);o.stop(t+0.15);break;
        case 'safety_test':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='square';o.frequency.setValueAtTime(100,t);o.frequency.linearRampToValueAtTime(50,t+0.15);
          o.frequency.linearRampToValueAtTime(100,t+0.3);
          g.gain.setValueAtTime(0.08,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.35);
          o.start(t);o.stop(t+0.35);break;
        case 'safety_pass':
          o=c.createOscillator();g=c.createGain();o.connect(g);g.connect(c.destination);
          o.type='sine';o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(784,t+0.12);
          o.frequency.setValueAtTime(1047,t+0.24);
          g.gain.setValueAtTime(0.22,t);g.gain.exponentialRampToValueAtTime(0.01,t+0.38);
          o.start(t);o.stop(t+0.38);break;
      }
    }catch(e){}
  }
  v10SFX.play = play;
})();

// ── 4. Fengshui Analyzer (풍수지리 분석기) ──
var v10Fengshui = {
  directions: ['남향','남동향','동향','북동향','북향','북서향','서향','남서향'],
  terrains: ['평지','완만한 경사','배산임수','계곡형','구릉지','해안가'],
  waters: ['없음','앞 연못','좌측 개울','우측 호수','뒤 하천','복합 수계'],
  mountains: ['없음','뒤쪽 산','좌청룡','우백호','사방 산','주산+안산'],
  _dir: 0, _ter: 0, _wat: 0, _mtn: 0,
  load: function(){ try{ var d=JSON.parse(localStorage.getItem('hb_v10_fengshui')||'{}'); this._dir=d.dir||0;this._ter=d.ter||0;this._wat=d.wat||0;this._mtn=d.mtn||0; }catch(e){} },
  save: function(){ localStorage.setItem('hb_v10_fengshui',JSON.stringify({dir:this._dir,ter:this._ter,wat:this._wat,mtn:this._mtn})); },
  calcScore: function(){
    var s = 50;
    var dirScores = [20,15,10,5,-5,-10,0,12];
    s += dirScores[this._dir] || 0;
    var terScores = [5,10,20,0,8,3];
    s += terScores[this._ter] || 0;
    var watScores = [0,12,8,8,5,15];
    s += watScores[this._wat] || 0;
    var mtnScores = [0,10,8,8,5,15];
    s += mtnScores[this._mtn] || 0;
    return Math.max(0, Math.min(100, s));
  },
  getGrade: function(sc){
    if(sc>=90) return 'S';
    if(sc>=75) return 'A';
    if(sc>=60) return 'B';
    if(sc>=40) return 'C';
    return 'D';
  },
  getAdvice: function(){
    var tips = [];
    if(this._dir === 0) tips.push('남향은 최적의 일조량을 확보합니다. 훌륭한 선택입니다.');
    else if(this._dir === 4) tips.push('북향은 일조량이 부족합니다. 남향이나 남동향을 고려해보세요.');
    else if(this._dir === 1 || this._dir === 7) tips.push('남동/남서향은 남향 다음으로 좋은 방위입니다.');
    else tips.push('현재 방향은 보통입니다. 가능하다면 남향을 고려해보세요.');
    if(this._ter === 2) tips.push('배산임수는 풍수지리의 최고 지형입니다.');
    else if(this._ter === 3) tips.push('계곡형 지형은 바람길이 강하여 주의가 필요합니다.');
    else tips.push('지형에 따른 배수와 바람길을 고려하세요.');
    if(this._wat === 5) tips.push('복합 수계는 음양 조화의 극치입니다.');
    else if(this._wat === 0) tips.push('물이 없으면 재물운이 약합니다. 연못을 고려하세요.');
    else tips.push('수경 요소가 기운을 모아줍니다.');
    if(this._mtn === 5) tips.push('주산과 안산이 모두 있으면 최고의 명당입니다.');
    else if(this._mtn === 0) tips.push('산이 없는 곳은 기운이 흩어질 수 있습니다.');
    else tips.push('산의 배치가 기운의 흐름을 보호합니다.');
    return tips;
  },
  drawCanvas: function(){
    var cvs = document.getElementById('v10FengshuiCanvas');
    if(!cvs) return;
    var ctx = cvs.getContext('2d');
    var w = 400, h = 400, cx = w/2, cy = h/2;
    cvs.width = w; cvs.height = h;
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0,0,w,h);
    // compass circle
    ctx.strokeStyle = 'rgba(196,149,106,.3)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx,cy,150,0,Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx,cy,100,0,Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx,cy,50,0,Math.PI*2); ctx.stroke();
    // direction labels
    var dirs = this.directions;
    var angles = [270,315,0,45,90,135,180,225]; // S,SE,E,NE,N,NW,W,SW mapped to canvas angles
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for(var i=0;i<8;i++){
      var rad = angles[i] * Math.PI / 180;
      var lx = cx + Math.cos(rad)*170;
      var ly = cy + Math.sin(rad)*170;
      ctx.fillStyle = (i === this._dir) ? '#ffd700' : '#c4956a';
      ctx.fillText(dirs[i], lx, ly);
      // direction lines
      ctx.strokeStyle = (i === this._dir) ? 'rgba(255,215,0,.6)' : 'rgba(196,149,106,.15)';
      ctx.lineWidth = (i === this._dir) ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(rad)*55, cy + Math.sin(rad)*55);
      ctx.lineTo(cx + Math.cos(rad)*145, cy + Math.sin(rad)*145);
      ctx.stroke();
    }
    // building center
    ctx.fillStyle = '#c4956a';
    ctx.fillRect(cx-15, cy-12, 30, 24);
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(cx-20, cy-12);
    ctx.lineTo(cx, cy-28);
    ctx.lineTo(cx+20, cy-12);
    ctx.closePath();
    ctx.fill();
    // mountains visualization
    if(this._mtn > 0){
      ctx.fillStyle = 'rgba(74,124,89,.4)';
      if(this._mtn === 1 || this._mtn === 5){ // 뒤쪽
        ctx.beginPath();ctx.moveTo(cx-60,cy-100);ctx.lineTo(cx-30,cy-140);ctx.lineTo(cx,cy-110);ctx.lineTo(cx+30,cy-145);ctx.lineTo(cx+60,cy-100);ctx.closePath();ctx.fill();
      }
      if(this._mtn === 2 || this._mtn === 4 || this._mtn === 5){ // 좌
        ctx.beginPath();ctx.moveTo(cx-100,cy-40);ctx.lineTo(cx-130,cy-70);ctx.lineTo(cx-100,cy+40);ctx.closePath();ctx.fill();
      }
      if(this._mtn === 3 || this._mtn === 4 || this._mtn === 5){ // 우
        ctx.beginPath();ctx.moveTo(cx+100,cy-40);ctx.lineTo(cx+130,cy-70);ctx.lineTo(cx+100,cy+40);ctx.closePath();ctx.fill();
      }
      if(this._mtn === 4){ // 사방 - 앞
        ctx.beginPath();ctx.moveTo(cx-50,cy+100);ctx.lineTo(cx,cy+80);ctx.lineTo(cx+50,cy+100);ctx.closePath();ctx.fill();
      }
      if(this._mtn === 5){ // 안산
        ctx.fillStyle = 'rgba(74,124,89,.25)';
        ctx.beginPath();ctx.moveTo(cx-40,cy+90);ctx.lineTo(cx,cy+70);ctx.lineTo(cx+40,cy+90);ctx.closePath();ctx.fill();
      }
    }
    // water visualization
    if(this._wat > 0){
      ctx.strokeStyle = 'rgba(69,183,209,.6)';
      ctx.lineWidth = 3;
      ctx.setLineDash([6,4]);
      if(this._wat === 1){ // 앞 연못
        ctx.beginPath();ctx.arc(cx, cy+80, 20, 0, Math.PI*2);ctx.stroke();
      } else if(this._wat === 2){ // 좌측 개울
        ctx.beginPath();ctx.moveTo(cx-90,cy-60);ctx.quadraticCurveTo(cx-80,cy,cx-90,cy+60);ctx.stroke();
      } else if(this._wat === 3){ // 우측 호수
        ctx.beginPath();ctx.arc(cx+80, cy, 25, 0, Math.PI*2);ctx.stroke();
      } else if(this._wat === 4){ // 뒤 하천
        ctx.beginPath();ctx.moveTo(cx-60,cy-85);ctx.quadraticCurveTo(cx,cy-95,cx+60,cy-85);ctx.stroke();
      } else if(this._wat === 5){ // 복합
        ctx.beginPath();ctx.arc(cx, cy+80, 15, 0, Math.PI*2);ctx.stroke();
        ctx.beginPath();ctx.moveTo(cx-90,cy-40);ctx.quadraticCurveTo(cx-80,cy+10,cx-90,cy+50);ctx.stroke();
      }
      ctx.setLineDash([]);
    }
    // score display
    var sc = this.calcScore();
    var gr = this.getGrade(sc);
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = gr==='S'?'#ffd700':gr==='A'?'#4ecdc4':gr==='B'?'#45b7d1':gr==='C'?'#c4956a':'#ff6b6b';
    ctx.textAlign = 'right';
    ctx.fillText(gr + ' (' + sc + '점)', w-20, 30);
  },
  open: function(){
    this.load();
    this.render();
    document.getElementById('v10FengshuiPanel').classList.add('active');
    v10SFX.play('fengshui');
    v10Achieve.check();
  },
  close: function(){
    document.getElementById('v10FengshuiPanel').classList.remove('active');
  },
  setDir: function(v){ this._dir=parseInt(v);this.save();this.render(); v10SFX.play('fengshui'); },
  setTer: function(v){ this._ter=parseInt(v);this.save();this.render(); },
  setWat: function(v){ this._wat=parseInt(v);this.save();this.render(); },
  setMtn: function(v){ this._mtn=parseInt(v);this.save();this.render(); },
  render: function(){
    var self = this;
    var sc = self.calcScore();
    var gr = self.getGrade(sc);
    var advice = self.getAdvice();
    var html = '<div class="v10-box"><h2>풍수지리 분석기</h2>';
    html += '<p>집터의 방향, 지형, 수경, 산세를 설정하고 풍수 점수를 확인하세요</p>';
    // direction select
    html += '<div class="v10-row"><label>방향</label><select class="v10-select" onchange="v10Fengshui.setDir(this.value)">';
    self.directions.forEach(function(d,i){ html += '<option value="'+i+'"'+(i===self._dir?' selected':'')+'>'+d+'</option>'; });
    html += '</select></div>';
    // terrain select
    html += '<div class="v10-row"><label>지형</label><select class="v10-select" onchange="v10Fengshui.setTer(this.value)">';
    self.terrains.forEach(function(d,i){ html += '<option value="'+i+'"'+(i===self._ter?' selected':'')+'>'+d+'</option>'; });
    html += '</select></div>';
    // water select
    html += '<div class="v10-row"><label>수경</label><select class="v10-select" onchange="v10Fengshui.setWat(this.value)">';
    self.waters.forEach(function(d,i){ html += '<option value="'+i+'"'+(i===self._wat?' selected':'')+'>'+d+'</option>'; });
    html += '</select></div>';
    // mountain select
    html += '<div class="v10-row"><label>산세</label><select class="v10-select" onchange="v10Fengshui.setMtn(this.value)">';
    self.mountains.forEach(function(d,i){ html += '<option value="'+i+'"'+(i===self._mtn?' selected':'')+'>'+d+'</option>'; });
    html += '</select></div>';
    // canvas
    html += '<canvas id="v10FengshuiCanvas" class="v10-canvas" width="400" height="400"></canvas>';
    // result
    var gcls = 'grade-'+gr.toLowerCase();
    html += '<div class="v10-sim-result"><div class="grade '+gcls+'">'+gr+'</div>';
    html += '<p>풍수 점수: '+sc+'/100</p></div>';
    // advice
    html += '<div style="margin:16px 0">';
    advice.forEach(function(tip){
      html += '<p style="color:#e8d5c0;font-size:12px;line-height:1.6;margin:6px 0;padding-left:12px;border-left:2px solid rgba(196,149,106,.3)">'+tip+'</p>';
    });
    html += '</div>';
    html += '<button class="v10-close" onclick="v10Fengshui.close()">닫기</button></div>';
    document.getElementById('v10FengshuiPanel').innerHTML = html;
    setTimeout(function(){ self.drawCanvas(); }, 50);
  }
};

// ── 5. Master Class (건축 마스터클래스 12강) ──
var v10Master = {
  lessons: [
    {id:1,title:'기초 설계의 원칙',cat:'design',desc:'대지 분석, 방위 결정, 공간 배치의 3대 원칙',body:'한옥 설계의 첫 단계는 대지 분석입니다. 대지의 형상, 경사, 방위를 파악하고 주변 환경과의 관계를 분석합니다. 방위 결정은 남향을 기본으로 하되 지형과 바람길을 고려합니다. 공간 배치는 안채, 사랑채, 행랑채의 위치를 정하는 것으로, 동선의 효율성과 프라이버시를 함께 고려해야 합니다. 대지의 높낮이를 활용한 자연스러운 위계 설정이 중요합니다.'},
    {id:2,title:'목구조 결구법',cat:'structure',desc:'끼워맞춤, 그랭이, 보 등 전통 기법',body:'전통 한옥의 목구조는 못을 사용하지 않고 나무와 나무를 끼워 맞추는 결구법을 사용합니다. 주요 기법으로는 장부맞춤, 주먹장맞춤, 반턱맞춤 등이 있습니다. 그랭이질은 자연석 초석 위에 기둥을 올릴 때 초석의 울퉁불퉁한 면에 맞추어 기둥 하단을 깎아내는 기법입니다. 보는 기둥과 기둥을 수평으로 연결하는 구조재로, 대들보와 종보가 대표적입니다.'},
    {id:3,title:'지붕 양식과 구조',cat:'structure',desc:'맞배/우진각/팔작지붕 등',body:'한옥 지붕의 대표적 양식은 세 가지입니다. 맞배지붕은 가장 단순한 형태로 양쪽에만 지붕면이 있으며 측면이 삼각형으로 노출됩니다. 우진각지붕은 사면에 모두 지붕면이 있어 비바람을 효과적으로 막습니다. 팔작지붕은 맞배와 우진각의 결합으로 가장 화려한 형태이며 궁궐이나 사찰에 주로 사용됩니다. 서까래, 도리, 추녀 등의 부재가 지붕 구조를 구성합니다.'},
    {id:4,title:'기단 및 초석',cat:'foundation',desc:'초석, 다림돌, 기단 높이와 배수',body:'기단은 건물의 바닥을 지면보다 높게 쌓아 올린 부분으로, 습기를 차단하고 건물의 위엄을 나타냅니다. 초석은 기둥을 받치는 돌로 자연석 그대로 사용하거나 다듬어 사용합니다. 다림돌은 기둥의 수직을 맞추기 위한 도구입니다. 기단 높이는 배수와 통풍을 고려하여 정하며, 일반적으로 30~60cm가 적당합니다. 배수를 위한 경사와 물홈도 중요한 요소입니다.'},
    {id:5,title:'온돌과 난방 시스템',cat:'system',desc:'고래, 구들장, 불목의 구조와 열효율',body:'온돌은 한국 고유의 바닥 난방 시스템입니다. 아궁이에서 불을 때면 연기와 열기가 고래(연기 통로)를 통해 방 아래를 지나가며 구들장(넓적한 돌)에 열을 축적합니다. 불목은 아궁이와 고래 사이의 연결부입니다. 고래의 깊이와 간격에 따라 열 분배가 달라지며, 굴뚝의 높이와 위치가 통풍에 영향을 줍니다. 현대 한옥에서는 보일러와 결합한 개량 온돌을 사용합니다.'},
    {id:6,title:'단청 및 장식',cat:'finish',desc:'빨강노초파 5색, 문양, 별지화',body:'단청은 목조 건물에 여러 가지 색과 문양을 그려넣는 장식 기법입니다. 기본 5색은 적(赤), 황(黃), 청(靑), 백(白), 흑(黑)으로 음양오행을 상징합니다. 문양은 연꽃, 당초, 비천 등 다양한 종류가 있으며, 건물의 격에 따라 화려함이 달라집니다. 별지화는 천장에 그리는 그림으로 궁궐이나 사찰에서 볼 수 있습니다. 단청은 장식 외에도 목재 보호 기능이 있습니다.'},
    {id:7,title:'창호지와 문',cat:'finish',desc:'붙살문, 세살문, 맞배지 창',body:'한옥의 창호는 나무 살대에 한지를 바른 것으로, 자연 환기와 채광을 조절합니다. 붙살문은 살대가 촘촘한 문으로 바람을 막으면서 빛을 투과합니다. 세살문은 가는 살대로 구성되어 섬세한 느낌을 줍니다. 맞배지 창은 안팎으로 한지를 바른 이중 창입니다. 한지는 미세한 기공이 있어 자연 환기가 되며, 습도 조절 기능도 있습니다. 계절에 따라 창호를 열고 닫아 실내 환경을 조절합니다.'},
    {id:8,title:'마당과 외부 공간',cat:'design',desc:'앞마당/뒷마당/쪽마당, 장독대/우물 배치',body:'한옥의 마당은 단순한 빈 공간이 아니라 생활의 중심입니다. 앞마당은 손님 맞이와 행사, 뒷마당은 장독대와 가사 노동, 쪽마당은 안채와 사랑채 사이의 채광 통풍 공간입니다. 장독대는 햇볕이 잘 들고 통풍이 좋은 곳에 배치하며, 우물은 오염원과 멀리 두면서도 접근성을 고려합니다. 마당의 크기와 비례는 건물과 조화를 이루어야 합니다.'},
    {id:9,title:'현대 한옥의 진화',cat:'modern',desc:'단열재, 철근콘크리트, 유리창',body:'현대 한옥은 전통의 아름다움을 유지하면서 현대적 편의를 결합합니다. 단열재를 벽체 내부에 설치하여 에너지 효율을 높이고, 기초와 일부 구조에 철근콘크리트를 활용하여 내구성을 강화합니다. 전통 창호 대신 복층유리를 적용하여 단열 성능을 개선하며, 현대적 설비(전기, 배관, 냉난방)를 자연스럽게 통합합니다. 지붕 형태와 기둥 비례는 전통을 따릅니다.'},
    {id:10,title:'조경과 정원 설계',cat:'design',desc:'차경, 방지, 석조의 미학',body:'한국 전통 조경은 자연을 있는 그대로 살리는 것을 원칙으로 합니다. 차경(借景)은 주변 경관을 정원의 일부로 빌려오는 기법으로, 담이나 창을 프레임으로 활용합니다. 방지(方池)는 네모난 연못으로 음양 사상에서 땅의 형상을 상징합니다. 석조는 자연석을 사용하여 인위적이지 않은 아름다움을 추구합니다. 식재는 소나무, 대나무, 매화 등 사군자와 계절감을 살리는 수종을 선택합니다.'},
    {id:11,title:'복원과 보존 기술',cat:'modern',desc:'실측 조사, 원형 복원/수리 복원',body:'문화재 건축물의 복원은 크게 원형 복원과 수리 복원으로 나뉩니다. 원형 복원은 처음 지어진 상태로 되돌리는 것이고, 수리 복원은 현재 상태를 유지하며 손상 부분만 보수하는 것입니다. 실측 조사는 건물의 정확한 치수와 상태를 기록하는 기초 작업입니다. 비파괴 검사, 수종 분석, 연륜연대법 등 과학적 방법을 활용합니다. 전통 재료와 기법을 최대한 사용하는 것이 원칙입니다.'},
    {id:12,title:'건축과 자연의 조화',cat:'system',desc:'처마 높이, 기둥 배치, 창호지 크기',body:'한옥은 자연과의 조화를 최우선으로 고려합니다. 처마 높이는 여름에는 직사광선을 차단하고 겨울에는 햇볕이 실내로 들어오도록 태양 고도를 계산하여 결정합니다. 기둥 배치는 내부 공간의 흐름과 외부 경관의 조망을 함께 고려합니다. 창호지의 크기는 채광과 통풍의 균형을 맞추며, 계절과 방위에 따라 달라집니다. 건물의 높이와 크기는 주변 자연 경관에 압도되지 않도록 겸손하게 설계합니다.'}
  ],
  cats: [{k:'all',l:'전체'},{k:'design',l:'설계'},{k:'structure',l:'구조'},{k:'foundation',l:'기초'},{k:'system',l:'시스템'},{k:'finish',l:'마감'},{k:'modern',l:'현대'}],
  _tab: 'all',
  _expanded: -1,
  load: function(){ try{this._done=JSON.parse(localStorage.getItem('hb_v10_master')||'[]');}catch(e){this._done=[];} },
  save: function(){ localStorage.setItem('hb_v10_master',JSON.stringify(this._done)); },
  isUnlocked: function(id){ return id === 1 || this._done.indexOf(id-1) !== -1; },
  isDone: function(id){ return this._done.indexOf(id) !== -1; },
  complete: function(id){
    this.load();
    if(!this.isUnlocked(id)) return;
    if(this._done.indexOf(id)===-1){
      this._done.push(id);
      this.save();
      v10SFX.play('lesson_done');
      v10Achieve.check();
    }
    this.render();
  },
  toggleExpand: function(id){
    this.load();
    if(!this.isUnlocked(id)) return;
    this._expanded = (this._expanded === id) ? -1 : id;
    v10SFX.play('lesson_open');
    this.render();
  },
  open: function(){
    this.load();
    this.render();
    document.getElementById('v10MasterPanel').classList.add('active');
  },
  close: function(){
    document.getElementById('v10MasterPanel').classList.remove('active');
  },
  render: function(){
    this.load();
    var self = this;
    var activeTab = self._tab;
    var html = '<div class="v10-box"><h2>건축 마스터클래스 12강</h2>';
    html += '<p>순서대로 수강하며 한옥 건축의 모든 것을 배워보세요 ('+self._done.length+'/12)</p>';
    html += '<div class="v10-tabs">';
    self.cats.forEach(function(c){
      html += '<button class="v10-tab'+(activeTab===c.k?' active':'')+'" onclick="v10Master._tab=\''+c.k+'\';v10Master.render()">'+c.l+'</button>';
    });
    html += '</div>';
    self.lessons.forEach(function(lesson){
      if(activeTab !== 'all' && lesson.cat !== activeTab) return;
      var done = self.isDone(lesson.id);
      var unlocked = self.isUnlocked(lesson.id);
      var expanded = self._expanded === lesson.id;
      var cls = 'v10-lesson';
      if(done) cls += ' done';
      if(!unlocked) cls += ' locked';
      if(expanded) cls += ' expanded';
      html += '<div class="'+cls+'" onclick="'+(unlocked?'v10Master.toggleExpand('+lesson.id+')':'')+'">';
      html += '<h4><span>'+(done?'✅':(unlocked?'📖':'🔒'))+' '+lesson.id+'강. '+lesson.title+'</span>';
      html += '<span class="tag">'+lesson.cat+'</span></h4>';
      html += '<p>'+lesson.desc+'</p>';
      if(unlocked){
        html += '<div class="lesson-body">'+lesson.body;
        if(!done){
          html += '<div style="margin-top:12px;text-align:center"><button class="v10-btn-sm" onclick="event.stopPropagation();v10Master.complete('+lesson.id+')">수강 완료</button></div>';
        }
        html += '</div>';
      }
      html += '</div>';
    });
    html += '<button class="v10-close" onclick="v10Master.close()">닫기</button></div>';
    document.getElementById('v10MasterPanel').innerHTML = html;
  }
};

// ── 6. Battle Mode (건축 대결 AI 10인) ──
var v10Battle = {
  rivals: [
    {id:1,name:'이도경',style:'한옥 명인',base:82},
    {id:2,name:'박서원',style:'현대 건축가',base:78},
    {id:3,name:'김미연',style:'조경 전문가',base:75},
    {id:4,name:'최재혁',style:'구조 전문가',base:80},
    {id:5,name:'정수진',style:'복원 전문가',base:73},
    {id:6,name:'한지훈',style:'인테리어 디자이너',base:71},
    {id:7,name:'오세혁',style:'전통 목수',base:85},
    {id:8,name:'송미라',style:'서원 전문가',base:70},
    {id:9,name:'정은채',style:'풍수 전문가',base:68},
    {id:10,name:'김건우',style:'현대 한옥 설계',base:76}
  ],
  history: [],
  load: function(){ try{this.history=JSON.parse(localStorage.getItem('hb_v10_battle')||'[]');}catch(e){this.history=[];} },
  save: function(){ localStorage.setItem('hb_v10_battle',JSON.stringify(this.history)); },
  getPlayerScore: function(){
    var s = 0;
    try{
      var prog = JSON.parse(localStorage.getItem('hb_progress')||'{}');
      var builds = 0;
      Object.values(prog).forEach(function(v){ if(v && v.completed) builds++; });
      s += builds * 5;
    }catch(e){}
    try{
      var ach = JSON.parse(localStorage.getItem('hb_achievements')||'[]');
      s += ach.length * 3;
    }catch(e){}
    try{
      var qb = parseInt(localStorage.getItem('hb_quizBest')||'0');
      s += qb;
    }catch(e){}
    try{
      var ml = JSON.parse(localStorage.getItem('hb_v10_master')||'[]');
      s += ml.length * 4;
    }catch(e){}
    s = Math.max(30, Math.min(100, s));
    return s;
  },
  fight: function(rivalId){
    this.load();
    var rival = this.rivals.find(function(r){ return r.id === rivalId; });
    if(!rival) return;
    var ps = this.getPlayerScore();
    var rs = rival.base + Math.floor(Math.random()*15) - 7;
    var win = ps >= rs;
    this.history.push({rivalId:rivalId,rivalName:rival.name,ps:ps,rs:rs,win:win,time:Date.now()});
    this.save();
    if(win) v10SFX.play('battle_win');
    v10Achieve.check();
    this.render();
  },
  getWins: function(){
    this.load();
    return this.history.filter(function(h){ return h.win; }).length;
  },
  open: function(){
    this.load();
    this.render();
    document.getElementById('v10BattlePanel').classList.add('active');
  },
  close: function(){
    document.getElementById('v10BattlePanel').classList.remove('active');
  },
  render: function(){
    this.load();
    var self = this;
    var ps = self.getPlayerScore();
    var wins = self.getWins();
    var html = '<div class="v10-box"><h2>건축 대결 AI 10인</h2>';
    html += '<p>당신의 실력: '+ps+'점 | 승리: '+wins+'회</p>';
    // leaderboard
    var entries = [];
    entries.push({name:'나',style:'플레이어',score:ps,isPlayer:true});
    self.rivals.forEach(function(r){ entries.push({name:r.name,style:r.style,score:r.base,isPlayer:false,id:r.id}); });
    entries.sort(function(a,b){ return b.score - a.score; });
    entries.forEach(function(e,i){
      var rankCls = i===0?'gold':i===1?'silver':i===2?'bronze':'normal';
      html += '<div class="v10-leader'+(e.isPlayer?' style="border-color:#c4956a;background:rgba(196,149,106,.12)"':'')+'">';
      html += '<div class="rank '+rankCls+'">'+(i+1)+'</div>';
      html += '<div class="info"><h4>'+e.name+(e.isPlayer?' (나)':'')+'</h4><p>'+e.style+'</p></div>';
      html += '<div class="score">'+e.score+'</div>';
      if(!e.isPlayer){
        html += '<button class="v10-btn-sm" onclick="event.stopPropagation();v10Battle.fight('+e.id+')" style="margin-left:8px">대결</button>';
      }
      html += '</div>';
    });
    // recent battles
    if(self.history.length > 0){
      html += '<h3 style="color:#f5deb3;font-size:15px;margin:20px 0 10px;text-align:center">최근 대결 기록</h3>';
      var recent = self.history.slice(-5).reverse();
      recent.forEach(function(h){
        var dt = new Date(h.time);
        var timeStr = dt.getFullYear()+'.'+(dt.getMonth()+1)+'.'+dt.getDate()+' '+dt.getHours()+':'+String(dt.getMinutes()).padStart(2,'0');
        html += '<div style="padding:8px 12px;margin-bottom:6px;border-radius:8px;background:rgba('+(h.win?'74,124,89':'196,80,80')+',.1);border:1px solid rgba('+(h.win?'74,124,89':'196,80,80')+',.25);font-size:12px;color:#e8d5c0">';
        html += (h.win?'🏆 승리':'💀 패배')+' vs '+h.rivalName+' ('+h.ps+' vs '+h.rs+') <span style="color:#c4956a;font-size:10px;float:right">'+timeStr+'</span></div>';
      });
    }
    html += '<button class="v10-close" onclick="v10Battle.close()">닫기</button></div>';
    document.getElementById('v10BattlePanel').innerHTML = html;
  }
};

// ── 7. Hanok Village Tour (한옥마을 가상투어 8장소) ──
var v10Tour = {
  places: [
    {id:1,name:'안동 하회마을',icon:'🏘️',era:'조선(15C~)',desc:'낙동강 물돌이 세계문화유산',detail:'낙동강이 마을을 감싸 돌아 물돌이 지형을 이루는 곳입니다. 류씨 가문의 종택과 양반 가옥이 원형 그대로 보존되어 있으며, 하회탈춤과 하회별신굿탈놀이가 유명합니다. 2010년 유네스코 세계문화유산에 등재되었습니다.',tags:['세계유산','종택','탈춤','낙동강']},
    {id:2,name:'전주 한옥마을',icon:'🏠',era:'조선~근대',desc:'700채 한옥 군락지',detail:'약 700채의 한옥이 밀집한 대한민국 최대 한옥 군락지입니다. 전동성당, 경기전, 오목대 등 역사 명소가 주변에 있으며, 한지, 한식, 한복 등 한국 전통문화 체험의 중심지입니다. 비빔밥과 한정식이 유명합니다.',tags:['한옥군락','전통문화','한식','한지']},
    {id:3,name:'경복궁',icon:'🏯',era:'조선(1395)',desc:'정궁, 근정전/경회루/교태전/향원정',detail:'조선 왕조의 정궁으로 1395년 태조 이성계가 창건했습니다. 근정전은 국가 의례를 행하던 정전이며, 경회루는 외국 사신 접대 장소였습니다. 교태전은 왕비의 침전이고, 향원정은 연못 위의 정자입니다. 수문장 교대식이 재현됩니다.',tags:['궁궐','조선','근정전','경회루']},
    {id:4,name:'창덕궁',icon:'🌿',era:'조선(1405)',desc:'자연과 건축의 조화, 유네스코',detail:'1405년 태종이 창건한 이궁으로, 자연 지형을 그대로 살린 건축이 특징입니다. 후원(비원)은 자연과 인공의 조화가 극치를 이루며 부용정, 애련정, 존덕정 등이 있습니다. 1997년 유네스코 세계문화유산에 등재되었습니다.',tags:['세계유산','후원','비원','자연조화']},
    {id:5,name:'북촌 한옥마을',icon:'🛤️',era:'조선~근대',desc:'경복궁/창덕궁 사이',detail:'경복궁과 창덕궁 사이에 위치한 전통 한옥 밀집 지역입니다. 조선 시대 양반과 관리들이 거주하던 곳으로, 현재도 전통 한옥이 잘 보존되어 있습니다. 북촌 8경으로 유명하며 골목길 산책이 매력적입니다. 한옥 게스트하우스와 공방이 많습니다.',tags:['골목길','한옥체험','북촌8경','양반가']},
    {id:6,name:'남산골 한옥마을',icon:'⛰️',era:'조선(19C 복원)',desc:'이전 복원',detail:'서울 남산 기슭에 조선 시대 한옥 5채를 이전 복원하여 조성한 전통 마을입니다. 각 한옥은 서로 다른 신분과 규모의 가옥을 재현하고 있으며, 전통 공연과 체험 프로그램이 연중 운영됩니다. 타임캡슐 광장도 있습니다.',tags:['복원','체험','남산','전통공연']},
    {id:7,name:'양동 마을',icon:'🏘️',era:'조선(15~16C)',desc:'경주, 세계문화유산',detail:'경주시에 위치한 조선 시대 양반 마을로, 월성 손씨와 여강 이씨 가문이 500년간 세거해왔습니다. 관가정과 향단이 보물로 지정되어 있으며, 자연 지형에 따라 종가가 높은 곳에, 하인 집이 낮은 곳에 배치된 유교적 위계가 드러납니다.',tags:['세계유산','양반마을','경주','유교']},
    {id:8,name:'해미읍성',icon:'🏰',era:'조선(1491)',desc:'성곽 마을',detail:'충남 서산에 위치한 조선 시대 읍성으로 1491년에 축조되었습니다. 성벽 둘레 1.8km의 석성으로 동문, 서문, 남문이 남아있습니다. 천주교 박해 시기의 순교 유적지이기도 하며, 성곽 위를 걸으며 마을 전체를 조망할 수 있습니다.',tags:['성곽','순교','석성','조선']}
  ],
  visited: [],
  load: function(){ try{this.visited=JSON.parse(localStorage.getItem('hb_v10_tour')||'[]');}catch(e){this.visited=[];} },
  save: function(){ localStorage.setItem('hb_v10_tour',JSON.stringify(this.visited)); },
  visit: function(id){
    this.load();
    if(this.visited.indexOf(id)===-1){
      this.visited.push(id);
      this.save();
      v10SFX.play('tour_visit');
      v10Achieve.check();
    }
    this._expanded = (this._expanded === id) ? -1 : id;
    this.render();
  },
  _expanded: -1,
  open: function(){
    this.load();
    this.render();
    document.getElementById('v10TourPanel').classList.add('active');
  },
  close: function(){
    document.getElementById('v10TourPanel').classList.remove('active');
  },
  render: function(){
    this.load();
    var self = this;
    var html = '<div class="v10-box"><h2>한옥마을 가상투어</h2>';
    html += '<p>한국의 대표적인 전통 건축 명소 8곳을 탐방하세요 ('+self.visited.length+'/8)</p>';
    self.places.forEach(function(place){
      var visited = self.visited.indexOf(place.id) !== -1;
      var expanded = self._expanded === place.id;
      var cls = 'v10-tour-card';
      if(visited) cls += ' visited';
      if(expanded) cls += ' expanded';
      html += '<div class="'+cls+'" onclick="v10Tour.visit('+place.id+')">';
      html += '<h4>'+place.icon+' '+place.name+(visited?' ✅':'')+' <span class="tour-era">'+place.era+'</span></h4>';
      html += '<p>'+place.desc+'</p>';
      html += '<div class="tour-detail">'+place.detail;
      html += '<div class="tour-tags">';
      place.tags.forEach(function(tag){ html += '<span>#'+tag+'</span>'; });
      html += '</div></div>';
      html += '</div>';
    });
    html += '<button class="v10-close" onclick="v10Tour.close()">닫기</button></div>';
    document.getElementById('v10TourPanel').innerHTML = html;
  }
};

// ── 8. Architecture Map (건축 역사지도 Canvas) ──
var v10Map = {
  sites: [
    {name:'경복궁',lat:37.58,lng:126.98,era:'조선',type:'궁궐'},
    {name:'불국사',lat:35.79,lng:129.33,era:'신라',type:'사찰'},
    {name:'수원화성',lat:37.29,lng:127.02,era:'조선',type:'성곽'},
    {name:'하회마을',lat:36.54,lng:128.52,era:'조선',type:'마을'},
    {name:'석굴암',lat:35.11,lng:129.06,era:'신라',type:'사찰'},
    {name:'종묘',lat:37.57,lng:126.99,era:'조선',type:'유교'},
    {name:'창덕궁',lat:37.58,lng:127.0,era:'조선',type:'궁궐'},
    {name:'해인사',lat:35.8,lng:128.1,era:'고려',type:'사찰'},
    {name:'첨성대',lat:35.83,lng:129.22,era:'신라',type:'천문'},
    {name:'남대문',lat:37.56,lng:126.97,era:'조선',type:'성곽'},
    {name:'전주한옥',lat:35.82,lng:127.15,era:'조선',type:'마을'},
    {name:'덕수궁',lat:37.56,lng:126.97,era:'조선',type:'궁궐'}
  ],
  typeColors: {'궁궐':'#ffd700','사찰':'#ff6b6b','성곽':'#4ecdc4','마을':'#45b7d1','유교':'#c4956a','천문':'#9b59b6'},
  _selected: -1,
  open: function(){
    this.render();
    document.getElementById('v10MapPanel').classList.add('active');
    var self = this;
    setTimeout(function(){ self.drawCanvas(); }, 50);
    v10SFX.play('map_marker');
  },
  close: function(){
    document.getElementById('v10MapPanel').classList.remove('active');
  },
  selectSite: function(idx){
    this._selected = (this._selected === idx) ? -1 : idx;
    v10SFX.play('map_marker');
    this.drawCanvas();
    this.renderInfo();
  },
  latLngToXY: function(lat, lng){
    // Korean peninsula approximate mapping to 520x600 canvas
    // lat: 33~43 -> y: 560~40, lng: 124~131 -> x: 40~480
    var x = 40 + (lng - 124) * (440 / 7);
    var y = 560 - (lat - 33) * (520 / 10);
    return {x: x, y: y};
  },
  drawCanvas: function(){
    var cvs = document.getElementById('v10MapCanvas');
    if(!cvs) return;
    var ctx = cvs.getContext('2d');
    var w = 520, h = 600;
    cvs.width = w; cvs.height = h;
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0,0,w,h);
    // Korean peninsula silhouette (simplified)
    ctx.fillStyle = 'rgba(196,149,106,.12)';
    ctx.strokeStyle = 'rgba(196,149,106,.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Simplified outline points
    var outline = [
      [126.0,38.5],[126.5,38.0],[126.2,37.5],[126.5,37.0],[126.8,36.8],
      [126.3,36.5],[126.5,36.0],[126.6,35.5],[126.8,35.1],[127.0,34.8],
      [127.5,34.6],[128.0,35.0],[128.5,35.1],[129.0,35.1],[129.3,35.5],
      [129.5,36.0],[129.4,36.5],[129.5,37.0],[129.2,37.5],[128.5,38.0],
      [128.0,38.3],[127.5,38.5],[127.0,38.8],[126.5,38.8],[126.0,38.5]
    ];
    var first = this.latLngToXY(outline[0][1], outline[0][0]);
    ctx.moveTo(first.x, first.y);
    for(var i=1;i<outline.length;i++){
      var pt = this.latLngToXY(outline[i][1], outline[i][0]);
      ctx.lineTo(pt.x, pt.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // draw sites
    var self = this;
    self.sites.forEach(function(site, idx){
      var pos = self.latLngToXY(site.lat, site.lng);
      var color = self.typeColors[site.type] || '#c4956a';
      var selected = self._selected === idx;
      // marker
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, selected?10:6, 0, Math.PI*2);
      ctx.fillStyle = color;
      ctx.fill();
      if(selected){
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      // label
      ctx.font = (selected?'bold ':'')+' 10px sans-serif';
      ctx.fillStyle = selected ? '#fff' : 'rgba(245,222,179,.8)';
      ctx.textAlign = 'center';
      ctx.fillText(site.name, pos.x, pos.y - (selected?14:10));
    });
    // click handler
    cvs.onclick = function(e){
      var rect = cvs.getBoundingClientRect();
      var scaleX = w / rect.width;
      var scaleY = h / rect.height;
      var mx = (e.clientX - rect.left) * scaleX;
      var my = (e.clientY - rect.top) * scaleY;
      var closest = -1, minDist = 25;
      self.sites.forEach(function(site, idx){
        var pos = self.latLngToXY(site.lat, site.lng);
        var dist = Math.sqrt(Math.pow(mx-pos.x,2)+Math.pow(my-pos.y,2));
        if(dist < minDist){ minDist = dist; closest = idx; }
      });
      if(closest >= 0) self.selectSite(closest);
    };
  },
  renderInfo: function(){
    var infoEl = document.getElementById('v10MapInfo');
    if(!infoEl) return;
    if(this._selected < 0){
      infoEl.innerHTML = '<p style="color:#c4956a;text-align:center;font-size:12px">지도 위의 표시를 클릭하면 상세 정보를 볼 수 있습니다</p>';
      return;
    }
    var s = this.sites[this._selected];
    var color = this.typeColors[s.type] || '#c4956a';
    infoEl.innerHTML = '<div style="padding:12px;background:rgba(196,149,106,.08);border:1px solid rgba(196,149,106,.2);border-radius:10px">'
      + '<h4 style="color:#f5deb3;font-size:14px;margin:0 0 4px">'+s.name+'</h4>'
      + '<p style="color:#c4956a;font-size:12px;margin:0"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:'+color+';margin-right:4px"></span>'+s.type+' | '+s.era+'</p>'
      + '<p style="color:#e8d5c0;font-size:11px;margin:6px 0 0">위도: '+s.lat.toFixed(2)+', 경도: '+s.lng.toFixed(2)+'</p>'
      + '</div>';
  },
  render: function(){
    var self = this;
    var types = Object.keys(self.typeColors);
    var html = '<div class="v10-box"><h2>건축 역사지도</h2>';
    html += '<p>한반도의 주요 건축 유산 12곳을 지도 위에서 탐색하세요</p>';
    html += '<canvas id="v10MapCanvas" class="v10-canvas" width="520" height="600"></canvas>';
    // legend
    html += '<div class="v10-legend">';
    types.forEach(function(t){
      html += '<span><span class="dot" style="background:'+self.typeColors[t]+'"></span>'+t+'</span>';
    });
    html += '</div>';
    // info area
    html += '<div id="v10MapInfo"><p style="color:#c4956a;text-align:center;font-size:12px">지도 위의 표시를 클릭하면 상세 정보를 볼 수 있습니다</p></div>';
    html += '<button class="v10-close" onclick="v10Map.close()">닫기</button></div>';
    document.getElementById('v10MapPanel').innerHTML = html;
  }
};

// ── 9. Energy Efficiency Analyzer (에너지 효율 분석기) ──
var v10Energy = {
  areas: [
    {key:'insulation',label:'단열',color:'#ff6b6b'},
    {key:'ventilation',label:'통풍',color:'#4ecdc4'},
    {key:'lighting',label:'채광',color:'#ffd700'},
    {key:'heating',label:'난방',color:'#45b7d1'}
  ],
  values: {insulation:50,ventilation:50,lighting:50,heating:50},
  load: function(){ try{var d=JSON.parse(localStorage.getItem('hb_v10_energy')||'{}');if(d.insulation!==undefined)this.values=d;}catch(e){} },
  save: function(){ localStorage.setItem('hb_v10_energy',JSON.stringify(this.values)); },
  getAvg: function(){
    var v = this.values;
    return Math.round((v.insulation + v.ventilation + v.lighting + v.heating) / 4);
  },
  getGrade: function(avg){
    if(avg>=90) return 'A+';
    if(avg>=80) return 'A';
    if(avg>=70) return 'B+';
    if(avg>=60) return 'B';
    if(avg>=50) return 'C';
    return 'D';
  },
  getTips: function(){
    var tips = [];
    if(this.values.insulation < 60) tips.push('단열: 벽체에 단열재를 보강하고 이중창을 설치하면 에너지 손실을 크게 줄일 수 있습니다.');
    if(this.values.ventilation < 60) tips.push('통풍: 맞바람이 통하도록 창문 배치를 개선하고, 대청마루 구조를 활용하세요.');
    if(this.values.lighting < 60) tips.push('채광: 남향 창문을 확대하고, 처마 길이를 조절하여 자연광 유입을 극대화하세요.');
    if(this.values.heating < 60) tips.push('난방: 온돌 고래의 구조를 개선하고, 바닥 축열 효율을 높이세요.');
    if(tips.length === 0) tips.push('전체적으로 에너지 효율이 우수합니다. 현재 상태를 유지하세요.');
    return tips;
  },
  setVal: function(key, val){
    this.values[key] = parseInt(val);
    this.save();
    this.drawRadar();
    this.updateResult();
    v10Achieve.check();
  },
  drawRadar: function(){
    var cvs = document.getElementById('v10EnergyCanvas');
    if(!cvs) return;
    var ctx = cvs.getContext('2d');
    var w = 360, h = 360, cx = w/2, cy = h/2, r = 130;
    cvs.width = w; cvs.height = h;
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0,0,w,h);
    // grid
    var axes = 4;
    var labels = ['단열','통풍','채광','난방'];
    for(var ring=1;ring<=5;ring++){
      ctx.strokeStyle = 'rgba(196,149,106,'+(ring===5?'.3':'.1')+')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for(var a=0;a<axes;a++){
        var angle = (a * Math.PI * 2 / axes) - Math.PI/2;
        var px = cx + Math.cos(angle)*(r*ring/5);
        var py = cy + Math.sin(angle)*(r*ring/5);
        if(a===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
      }
      ctx.closePath();
      ctx.stroke();
    }
    // axis lines
    for(var a=0;a<axes;a++){
      var angle = (a * Math.PI * 2 / axes) - Math.PI/2;
      ctx.strokeStyle = 'rgba(196,149,106,.2)';
      ctx.beginPath();
      ctx.moveTo(cx,cy);
      ctx.lineTo(cx+Math.cos(angle)*r, cy+Math.sin(angle)*r);
      ctx.stroke();
      // labels
      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#f5deb3';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var lx = cx + Math.cos(angle)*(r+20);
      var ly = cy + Math.sin(angle)*(r+20);
      ctx.fillText(labels[a], lx, ly);
    }
    // data polygon
    var vals = [this.values.insulation, this.values.ventilation, this.values.lighting, this.values.heating];
    ctx.fillStyle = 'rgba(196,149,106,.2)';
    ctx.strokeStyle = '#c4956a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for(var a=0;a<axes;a++){
      var angle = (a * Math.PI * 2 / axes) - Math.PI/2;
      var v = vals[a] / 100;
      var px = cx + Math.cos(angle)*(r*v);
      var py = cy + Math.sin(angle)*(r*v);
      if(a===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // dots
    for(var a=0;a<axes;a++){
      var angle = (a * Math.PI * 2 / axes) - Math.PI/2;
      var v = vals[a] / 100;
      var px = cx + Math.cos(angle)*(r*v);
      var py = cy + Math.sin(angle)*(r*v);
      ctx.beginPath();
      ctx.arc(px,py,4,0,Math.PI*2);
      ctx.fillStyle = this.areas[a].color;
      ctx.fill();
    }
  },
  updateResult: function(){
    var el = document.getElementById('v10EnergyResult');
    if(!el) return;
    var avg = this.getAvg();
    var grade = this.getGrade(avg);
    var tips = this.getTips();
    var gcls = 'grade-'+(grade.replace('+','')).toLowerCase();
    var html = '<div class="v10-sim-result"><div class="grade '+gcls+'">'+grade+'</div>';
    html += '<p>평균 효율: '+avg+'/100</p></div>';
    html += '<div style="margin:12px 0">';
    tips.forEach(function(tip){
      html += '<p style="color:#e8d5c0;font-size:12px;line-height:1.6;margin:6px 0;padding-left:12px;border-left:2px solid rgba(196,149,106,.3)">'+tip+'</p>';
    });
    html += '</div>';
    el.innerHTML = html;
  },
  open: function(){
    this.load();
    this.render();
    document.getElementById('v10EnergyPanel').classList.add('active');
    var self = this;
    setTimeout(function(){ self.drawRadar(); self.updateResult(); }, 50);
    v10SFX.play('energy_scan');
    v10Achieve.check();
  },
  close: function(){
    document.getElementById('v10EnergyPanel').classList.remove('active');
  },
  render: function(){
    var self = this;
    var html = '<div class="v10-box"><h2>에너지 효율 분석기</h2>';
    html += '<p>한옥의 에너지 효율을 4가지 영역에서 분석합니다</p>';
    html += '<canvas id="v10EnergyCanvas" class="v10-canvas" width="360" height="360"></canvas>';
    // sliders
    self.areas.forEach(function(area){
      html += '<div class="v10-radar-item">';
      html += '<span class="radar-label">'+area.label+'</span>';
      html += '<div class="radar-bar"><div class="radar-fill" style="width:'+self.values[area.key]+'%;background:'+area.color+'"></div></div>';
      html += '<span class="radar-val" id="v10ev_'+area.key+'">'+self.values[area.key]+'</span>';
      html += '</div>';
      html += '<div style="padding:0 70px 8px 70px"><input type="range" class="v10-slider" min="0" max="100" value="'+self.values[area.key]+'" oninput="v10Energy.setVal(\''+area.key+'\',this.value);document.getElementById(\'v10ev_'+area.key+'\').textContent=this.value"></div>';
    });
    html += '<div id="v10EnergyResult"></div>';
    html += '<button class="v10-close" onclick="v10Energy.close()">닫기</button></div>';
    document.getElementById('v10EnergyPanel').innerHTML = html;
  }
};

// ── 10. Architecture Journal (건축 일기장) ──
var v10Journal = {
  moods: ['😊','😃','😐','😔','😤'],
  _mood: 0,
  entries: [],
  load: function(){ try{this.entries=JSON.parse(localStorage.getItem('hb_v10_journal')||'[]');}catch(e){this.entries=[];} },
  save: function(){ localStorage.setItem('hb_v10_journal',JSON.stringify(this.entries)); },
  setMood: function(idx){
    this._mood = idx;
    var btns = document.querySelectorAll('.v10-mood');
    btns.forEach(function(b,i){ b.classList.toggle('selected', i===idx); });
  },
  addEntry: function(){
    var ta = document.getElementById('v10JournalText');
    if(!ta) return;
    var text = ta.value.trim();
    if(!text) return;
    this.load();
    var entry = {
      id: Date.now(),
      mood: this._mood,
      text: text,
      time: Date.now()
    };
    this.entries.unshift(entry);
    if(this.entries.length > 50) this.entries = this.entries.slice(0, 50);
    this.save();
    ta.value = '';
    this._mood = 0;
    v10SFX.play('journal_save');
    v10Achieve.check();
    this.render();
  },
  deleteEntry: function(id){
    this.load();
    this.entries = this.entries.filter(function(e){ return e.id !== id; });
    this.save();
    this.render();
  },
  open: function(){
    this.load();
    this.render();
    document.getElementById('v10JournalPanel').classList.add('active');
  },
  close: function(){
    document.getElementById('v10JournalPanel').classList.remove('active');
  },
  render: function(){
    this.load();
    var self = this;
    var html = '<div class="v10-box"><h2>건축 일기장</h2>';
    html += '<p>건축 과정의 생각과 감상을 기록하세요 ('+self.entries.length+'/50)</p>';
    // mood selector
    html += '<div class="v10-mood-row">';
    self.moods.forEach(function(m,i){
      html += '<button class="v10-mood'+(i===self._mood?' selected':'')+'" onclick="v10Journal.setMood('+i+')">'+m+'</button>';
    });
    html += '</div>';
    // text input
    html += '<textarea id="v10JournalText" class="v10-textarea" placeholder="오늘의 건축 이야기를 적어보세요..." rows="3"></textarea>';
    html += '<div style="text-align:center;margin:12px 0"><button class="v10-btn-sm" onclick="v10Journal.addEntry()">저장</button></div>';
    // entries
    if(self.entries.length > 0){
      html += '<h3 style="color:#f5deb3;font-size:14px;margin:20px 0 10px">기록 목록</h3>';
      self.entries.forEach(function(entry){
        var dt = new Date(entry.time);
        var timeStr = dt.getFullYear()+'.'+(dt.getMonth()+1)+'.'+dt.getDate()+' '+dt.getHours()+':'+String(dt.getMinutes()).padStart(2,'0');
        html += '<div class="v10-journal">';
        html += '<h4>'+self.moods[entry.mood]+' <span class="j-time">'+timeStr+'</span></h4>';
        html += '<p>'+entry.text.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</p>';
        html += '<button class="j-del" onclick="event.stopPropagation();v10Journal.deleteEntry('+entry.id+')" title="삭제">✕</button>';
        html += '</div>';
      });
    } else {
      html += '<p style="text-align:center;color:#c4956a;font-size:12px;margin-top:20px">아직 기록이 없습니다. 첫 번째 일기를 작성해보세요.</p>';
    }
    html += '<button class="v10-close" onclick="v10Journal.close()">닫기</button></div>';
    document.getElementById('v10JournalPanel').innerHTML = html;
  }
};

// ── 11. Structural Safety Simulator (구조 안전 시뮬레이터) ──
var v10Safety = {
  _testType: 'earthquake',
  _running: false,
  _frame: 0,
  _animId: null,
  _result: null,
  load: function(){ try{this._result=JSON.parse(localStorage.getItem('hb_v10_safety')||'null');}catch(e){this._result=null;} },
  save: function(){ if(this._result) localStorage.setItem('hb_v10_safety',JSON.stringify(this._result)); },
  getScore: function(){
    var s = 50;
    try{
      var prog = JSON.parse(localStorage.getItem('hb_progress')||'{}');
      var builds = 0;
      Object.values(prog).forEach(function(v){ if(v && v.completed) builds++; });
      s += builds * 3;
    }catch(e){}
    s += Math.floor(Math.random()*20) - 5;
    return Math.max(0, Math.min(100, s));
  },
  getGrade: function(sc){
    if(sc>=90) return 'S';
    if(sc>=75) return 'A';
    if(sc>=60) return 'B';
    if(sc>=40) return 'C';
    return 'D';
  },
  startTest: function(type){
    if(this._running) return;
    this._testType = type || 'earthquake';
    this._running = true;
    this._frame = 0;
    this._result = null;
    v10SFX.play('safety_test');
    this.updateButtons();
    this.animate();
  },
  animate: function(){
    var self = this;
    var cvs = document.getElementById('v10SafetyCanvas');
    if(!cvs) return;
    var ctx = cvs.getContext('2d');
    var w = 480, h = 320;
    cvs.width = w; cvs.height = h;
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0,0,w,h);
    var cx = w/2, baseY = h - 40;
    var shake = 0;
    if(self._testType === 'earthquake'){
      shake = Math.sin(self._frame * 0.4) * (self._frame / 3);
      if(shake > 15) shake = 15;
    }
    var windOff = 0;
    if(self._testType === 'wind'){
      windOff = Math.sin(self._frame * 0.15) * (self._frame / 5);
      if(windOff > 12) windOff = 12;
    }
    // ground
    ctx.fillStyle = '#3d2b1a';
    ctx.fillRect(0, baseY, w, h - baseY);
    // foundation
    ctx.fillStyle = '#5c4033';
    ctx.fillRect(cx - 80 + shake, baseY - 20, 160, 20);
    // pillars
    ctx.fillStyle = '#8B4513';
    var pillarLean = windOff * 0.3;
    ctx.fillRect(cx - 65 + shake + pillarLean, baseY - 120, 12, 100);
    ctx.fillRect(cx - 25 + shake + pillarLean, baseY - 120, 12, 100);
    ctx.fillRect(cx + 15 + shake + pillarLean, baseY - 120, 12, 100);
    ctx.fillRect(cx + 55 + shake + pillarLean, baseY - 120, 12, 100);
    // walls
    ctx.fillStyle = 'rgba(245,222,179,.3)';
    ctx.fillRect(cx - 55 + shake + pillarLean, baseY - 100, 112, 80);
    // roof
    ctx.fillStyle = '#2d1b0e';
    ctx.beginPath();
    ctx.moveTo(cx - 95 + shake + pillarLean*1.5, baseY - 120);
    ctx.lineTo(cx + shake + pillarLean*2, baseY - 180);
    ctx.lineTo(cx + 95 + shake + pillarLean*1.5, baseY - 120);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#c4956a';
    ctx.lineWidth = 2;
    ctx.stroke();
    // roof eaves curve
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - 100 + shake + pillarLean*1.5, baseY - 118);
    ctx.quadraticCurveTo(cx - 95 + shake + pillarLean*1.5, baseY - 125, cx - 85 + shake + pillarLean*1.5, baseY - 122);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + 100 + shake + pillarLean*1.5, baseY - 118);
    ctx.quadraticCurveTo(cx + 95 + shake + pillarLean*1.5, baseY - 125, cx + 85 + shake + pillarLean*1.5, baseY - 122);
    ctx.stroke();
    // cracks during earthquake
    if(self._testType === 'earthquake' && self._frame > 30){
      ctx.strokeStyle = 'rgba(255,100,100,.6)';
      ctx.lineWidth = 2;
      var crackIntensity = (self._frame - 30) / 30;
      // wall cracks
      ctx.beginPath();
      ctx.moveTo(cx - 20 + shake, baseY - 90);
      ctx.lineTo(cx - 10 + shake, baseY - 70);
      ctx.lineTo(cx - 25 + shake, baseY - 50);
      ctx.stroke();
      if(crackIntensity > 0.5){
        ctx.beginPath();
        ctx.moveTo(cx + 30 + shake, baseY - 85);
        ctx.lineTo(cx + 20 + shake, baseY - 65);
        ctx.stroke();
      }
    }
    // wind lines
    if(self._testType === 'wind'){
      ctx.strokeStyle = 'rgba(69,183,209,.4)';
      ctx.lineWidth = 2;
      for(var i=0;i<5;i++){
        var wy = baseY - 60 - i*25;
        var wx = (self._frame * 3 + i * 40) % (w + 100) - 50;
        ctx.beginPath();
        ctx.moveTo(wx, wy);
        ctx.lineTo(wx + 30, wy - 3);
        ctx.lineTo(wx + 50, wy + 2);
        ctx.stroke();
        // arrow
        ctx.beginPath();
        ctx.moveTo(wx + 50, wy + 2);
        ctx.lineTo(wx + 45, wy - 3);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(wx + 50, wy + 2);
        ctx.lineTo(wx + 45, wy + 7);
        ctx.stroke();
      }
    }
    // progress bar
    var progress = self._frame / 60;
    ctx.fillStyle = 'rgba(255,255,255,.1)';
    ctx.fillRect(20, 20, w-40, 8);
    ctx.fillStyle = '#c4956a';
    ctx.fillRect(20, 20, (w-40)*Math.min(1,progress), 8);
    // test label
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#c4956a';
    ctx.textAlign = 'left';
    ctx.fillText(self._testType === 'earthquake' ? '지진 시뮬레이션 진행 중...' : '강풍 시뮬레이션 진행 중...', 20, 48);
    self._frame++;
    if(self._frame < 60){
      self._animId = requestAnimationFrame(function(){ self.animate(); });
    } else {
      self._running = false;
      var score = self.getScore();
      var grade = self.getGrade(score);
      self._result = {type:self._testType,score:score,grade:grade,time:Date.now()};
      self.save();
      if(score >= 60) v10SFX.play('safety_pass');
      v10Achieve.check();
      self.showResult();
      self.updateButtons();
    }
  },
  showResult: function(){
    var el = document.getElementById('v10SafetyResult');
    if(!el || !this._result) return;
    var r = this._result;
    var gcls = 'grade-'+r.grade.toLowerCase();
    var typeLabel = r.type === 'earthquake' ? '지진' : '강풍';
    var html = '<div class="v10-sim-result"><div class="grade '+gcls+'">'+r.grade+'</div>';
    html += '<p>'+typeLabel+' 안전 점수: '+r.score+'/100</p>';
    if(r.score >= 80) html += '<p style="color:#4ecdc4">구조가 매우 안전합니다.</p>';
    else if(r.score >= 60) html += '<p style="color:#45b7d1">구조가 양호하지만 보강이 필요합니다.</p>';
    else if(r.score >= 40) html += '<p style="color:#c4956a">구조 보강이 필요합니다. 기둥과 기단을 점검하세요.</p>';
    else html += '<p style="color:#ff6b6b">구조가 위험합니다. 즉시 보수가 필요합니다.</p>';
    html += '</div>';
    el.innerHTML = html;
  },
  updateButtons: function(){
    var eqBtn = document.getElementById('v10SafetyEqBtn');
    var wiBtn = document.getElementById('v10SafetyWiBtn');
    if(eqBtn) eqBtn.disabled = this._running;
    if(wiBtn) wiBtn.disabled = this._running;
  },
  open: function(){
    this.load();
    this._running = false;
    this._frame = 0;
    if(this._animId) cancelAnimationFrame(this._animId);
    this.render();
    document.getElementById('v10SafetyPanel').classList.add('active');
    var self = this;
    setTimeout(function(){ self.drawInitial(); }, 50);
  },
  close: function(){
    if(this._animId) cancelAnimationFrame(this._animId);
    this._running = false;
    document.getElementById('v10SafetyPanel').classList.remove('active');
  },
  drawInitial: function(){
    var cvs = document.getElementById('v10SafetyCanvas');
    if(!cvs) return;
    var ctx = cvs.getContext('2d');
    var w = 480, h = 320;
    cvs.width = w; cvs.height = h;
    ctx.fillStyle = '#1a1008';
    ctx.fillRect(0,0,w,h);
    var cx = w/2, baseY = h - 40;
    // ground
    ctx.fillStyle = '#3d2b1a';
    ctx.fillRect(0, baseY, w, h - baseY);
    // foundation
    ctx.fillStyle = '#5c4033';
    ctx.fillRect(cx - 80, baseY - 20, 160, 20);
    // pillars
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(cx - 65, baseY - 120, 12, 100);
    ctx.fillRect(cx - 25, baseY - 120, 12, 100);
    ctx.fillRect(cx + 15, baseY - 120, 12, 100);
    ctx.fillRect(cx + 55, baseY - 120, 12, 100);
    // walls
    ctx.fillStyle = 'rgba(245,222,179,.3)';
    ctx.fillRect(cx - 55, baseY - 100, 112, 80);
    // roof
    ctx.fillStyle = '#2d1b0e';
    ctx.beginPath();
    ctx.moveTo(cx - 95, baseY - 120);
    ctx.lineTo(cx, baseY - 180);
    ctx.lineTo(cx + 95, baseY - 120);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#c4956a';
    ctx.lineWidth = 2;
    ctx.stroke();
    // label
    ctx.font = '13px sans-serif';
    ctx.fillStyle = '#c4956a';
    ctx.textAlign = 'center';
    ctx.fillText('테스트 버튼을 눌러 시뮬레이션을 시작하세요', cx, 30);
  },
  render: function(){
    var html = '<div class="v10-box"><h2>구조 안전 시뮬레이터</h2>';
    html += '<p>건물의 지진 및 강풍 내성을 테스트합니다</p>';
    html += '<canvas id="v10SafetyCanvas" class="v10-canvas" width="480" height="320"></canvas>';
    html += '<div style="display:flex;gap:10px;justify-content:center;margin:12px 0">';
    html += '<button id="v10SafetyEqBtn" class="v10-btn-sm" onclick="v10Safety.startTest(\'earthquake\')">🌍 지진 테스트</button>';
    html += '<button id="v10SafetyWiBtn" class="v10-btn-outline" onclick="v10Safety.startTest(\'wind\')">💨 강풍 테스트</button>';
    html += '</div>';
    html += '<div id="v10SafetyResult">';
    if(this._result){
      var r = this._result;
      var gcls = 'grade-'+r.grade.toLowerCase();
      var typeLabel = r.type === 'earthquake' ? '지진' : '강풍';
      html += '<div class="v10-sim-result"><div class="grade '+gcls+'">'+r.grade+'</div>';
      html += '<p>'+typeLabel+' 안전 점수: '+r.score+'/100</p></div>';
    }
    html += '</div>';
    html += '<button class="v10-close" onclick="v10Safety.close()">닫기</button></div>';
    document.getElementById('v10SafetyPanel').innerHTML = html;
  }
};

// ── 12. Quiz v10 (+15 questions, 75→90) ──
var v10Quiz = {
  questions: [
    {q:'풍수지리에서 가장 이상적인 집터의 방향은?',a:['남향','북향','동향','서향'],c:0,tip:'남향은 햇볕이 가장 잘 들어 풍수지리에서 최적의 방향으로 여겨집니다'},
    {q:'한옥에서 배산임수의 의미는?',a:['뒤에 산, 앞에 물','앞에 산, 뒤에 물','양쪽에 산','양쪽에 물'],c:0,tip:'배산임수는 뒤로 산을 등지고 앞에 물이 흐르는 이상적 입지 조건입니다'},
    {q:'목구조에서 결구란 무엇인가?',a:['못을 사용하지 않는 접합법','못으로 고정하는 기법','접착제를 쓰는 기법','철물 보강 기법'],c:0,tip:'결구는 나무의 홈과 촉을 맞물려 못 없이 조립하는 전통 목공 기법입니다'},
    {q:'한옥의 고래란 무엇을 말하는가?',a:['온돌 연기 통로','지붕 서까래','기둥 장식','마루 구조'],c:0,tip:'고래는 방바닥 아래의 연기 통로로 방 전체를 고르게 데워줍니다'},
    {q:'단청의 5색 중 적색이 상징하는 것은?',a:['화재 방지','풍요','장수','학문'],c:0,tip:'적색은 남쪽과 불을 상징하며 역설적으로 화재를 막는 벽사의 의미가 있습니다'},
    {q:'한옥의 처마의 주요 기능은?',a:['빗물 차단 및 그늘 제공','장식 효과','구조 보강','방음 효과'],c:0,tip:'처마는 비와 눈으로부터 벽체를 보호하고 여름철 그늘을 제공합니다'},
    {q:'경복궁 근정전의 주요 기능은?',a:['왕의 공식 회의','왕비의 침전','세자의 공부','식사 공간'],c:0,tip:'근정전은 조선 왕조의 정전으로 국가 의례와 공식 회의를 거행하던 곳입니다'},
    {q:'창덕궁이 유네스코 세계문화유산으로 선정된 이유는?',a:['자연과 건축의 조화','건물 크기','건축 연도','왕의 업적'],c:0,tip:'창덕궁은 자연 지형을 그대로 살린 건축과 후원의 조화로 세계유산에 등재되었습니다'},
    {q:'한옥의 기둥에 배흘림이란?',a:['기둥 가운데가 볼록한 형태','기둥이 기울어진 형태','기둥에 색을 칠한 것','기둥을 교체하는 것'],c:0,tip:'배흘림은 기둥 중간이 약간 볼록하여 착시를 보정하고 하중을 분산합니다'},
    {q:'한옥의 사랑채와 안채의 차이점은?',a:['사랑채는 바깥 공간, 안채는 안 공간','크기 차이','높이 차이','재료 차이'],c:0,tip:'사랑채는 남성의 생활과 손님 접대 공간이고, 안채는 여성의 생활 공간입니다'},
    {q:'다음 중 조선 시대 건축물이 아닌 것은?',a:['DDP','경복궁','창덕궁','수원화성'],c:0,tip:'DDP(동대문디자인플라자)는 자하 하디드가 설계한 현대 건축물입니다'},
    {q:'불국사 석굴암의 건축적 특징은?',a:['인공 석굴 내부 건축','자연 동굴 활용','목조 건축','벽돌 건축'],c:0,tip:'석굴암은 화강암을 쌓아 인공적으로 석굴을 만든 독특한 건축물입니다'},
    {q:'전통 한옥의 대청마루의 역할은?',a:['여름철 냉방/통풍 공간','겨울 난방 공간','저장 공간','침실'],c:0,tip:'대청마루는 바닥이 띄워져 있어 바람이 통하며 여름철 시원한 생활 공간입니다'},
    {q:'수원화성 건축에서 거중기의 용도는?',a:['무거운 돌을 들어올리는 장치','벽돌을 굽는 도구','나무를 자르는 도구','측량 기구'],c:0,tip:'정약용이 발명한 거중기는 도르래 원리를 이용해 무거운 석재를 들어올렸습니다'},
    {q:'한옥에서 칸(間)의 기본 단위는?',a:['기둥과 기둥 사이 간격','방의 넓이','지붕의 높이','벽의 두께'],c:0,tip:'칸은 기둥 사이의 공간 단위로 한옥의 규모를 나타내는 기본 단위입니다'}
  ],
  injectToMain: function(){
    if(!window.quizPool) return;
    var self = this;
    self.questions.forEach(function(q){
      var exists = window.quizPool.some(function(existing){ return existing.q === q.q; });
      if(!exists) window.quizPool.push(q);
    });
  }
};

// ── 13. Achievement System v10 (+12 achievements, 86→98) ──
var v10Achieve = {
  defs: [
    {id:'a10_fengshui_first',name:'풍수 입문',icon:'✨',desc:'풍수지리 분석기를 처음으로 사용',check:function(){try{return localStorage.getItem('hb_v10_fengshui')!==null;}catch(e){return false;}}},
    {id:'a10_fengshui_s',name:'풍수 대가',icon:'🌟',desc:'풍수 S등급 달성',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v10_fengshui')||'{}');if(!d.dir&&d.dir!==0)return false;v10Fengshui._dir=d.dir||0;v10Fengshui._ter=d.ter||0;v10Fengshui._wat=d.wat||0;v10Fengshui._mtn=d.mtn||0;return v10Fengshui.calcScore()>=90;}catch(e){return false;}}},
    {id:'a10_master_6',name:'건축 수강생',icon:'📖',desc:'마스터클래스 6강 완료',check:function(){try{return JSON.parse(localStorage.getItem('hb_v10_master')||'[]').length>=6;}catch(e){return false;}}},
    {id:'a10_master_12',name:'건축 박사',icon:'🎓',desc:'마스터클래스 전과정 12강 완료',check:function(){try{return JSON.parse(localStorage.getItem('hb_v10_master')||'[]').length>=12;}catch(e){return false;}}},
    {id:'a10_battle_first',name:'첫 대결',icon:'⚔️',desc:'건축 대결 첫 승리',check:function(){try{var h=JSON.parse(localStorage.getItem('hb_v10_battle')||'[]');return h.some(function(b){return b.win;});}catch(e){return false;}}},
    {id:'a10_battle_5',name:'건축 챔피언',icon:'🏆',desc:'건축 대결 5승 달성',check:function(){try{var h=JSON.parse(localStorage.getItem('hb_v10_battle')||'[]');return h.filter(function(b){return b.win;}).length>=5;}catch(e){return false;}}},
    {id:'a10_tour_4',name:'여행자',icon:'🛤️',desc:'한옥마을 투어 4곳 방문',check:function(){try{return JSON.parse(localStorage.getItem('hb_v10_tour')||'[]').length>=4;}catch(e){return false;}}},
    {id:'a10_tour_8',name:'탐험가',icon:'🌍',desc:'한옥마을 투어 8곳 완주',check:function(){try{return JSON.parse(localStorage.getItem('hb_v10_tour')||'[]').length>=8;}catch(e){return false;}}},
    {id:'a10_energy_a',name:'에코 건축가',icon:'🌿',desc:'에너지 효율 A 이상 달성',check:function(){try{var d=JSON.parse(localStorage.getItem('hb_v10_energy')||'{}');if(d.insulation===undefined)return false;var avg=Math.round((d.insulation+d.ventilation+d.lighting+d.heating)/4);return avg>=80;}catch(e){return false;}}},
    {id:'a10_journal_10',name:'기록의 달인',icon:'📝',desc:'건축 일기 10건 작성',check:function(){try{return JSON.parse(localStorage.getItem('hb_v10_journal')||'[]').length>=10;}catch(e){return false;}}},
    {id:'a10_safety_test',name:'안전 검사관',icon:'🛡️',desc:'구조 안전 테스트 실시',check:function(){try{return localStorage.getItem('hb_v10_safety')!==null;}catch(e){return false;}}},
    {id:'a10_v10_explorer',name:'v10 탐험가',icon:'🚀',desc:'v10 신규 기능 5개 이상 사용',check:function(){
      var count = 0;
      try{if(localStorage.getItem('hb_v10_fengshui')) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v10_master')||'[]').length>0) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v10_battle')||'[]').length>0) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v10_tour')||'[]').length>0) count++;}catch(e){}
      try{if(localStorage.getItem('hb_v10_energy')) count++;}catch(e){}
      try{if(JSON.parse(localStorage.getItem('hb_v10_journal')||'[]').length>0) count++;}catch(e){}
      try{if(localStorage.getItem('hb_v10_safety')) count++;}catch(e){}
      return count >= 5;
    }}
  ],
  unlocked: [],
  load: function(){ try{this.unlocked=JSON.parse(localStorage.getItem('hb_v10_achievements')||'[]');}catch(e){this.unlocked=[];} },
  save: function(){
    localStorage.setItem('hb_v10_achievements',JSON.stringify(this.unlocked));
    // Also append to main achievements
    try{
      var main = JSON.parse(localStorage.getItem('hb_achievements')||'[]');
      var changed = false;
      this.unlocked.forEach(function(id){
        if(main.indexOf(id)===-1){ main.push(id); changed = true; }
      });
      if(changed) localStorage.setItem('hb_achievements',JSON.stringify(main));
    }catch(e){}
  },
  check: function(){
    this.load();
    var self = this;
    self.defs.forEach(function(a){
      if(self.unlocked.indexOf(a.id)===-1 && a.check()){
        self.unlocked.push(a.id);
        self.save();
        self.showToast(a.icon + ' ' + a.name);
      }
    });
  },
  showToast: function(name){
    var el = document.getElementById('achToast');
    if(el){
      el.textContent = '🏆 업적 달성: ' + name;
      el.style.display = 'block';
      el.style.opacity = '1';
      setTimeout(function(){
        el.style.opacity = '0';
        setTimeout(function(){ el.style.display = 'none'; }, 500);
      }, 3000);
    } else {
      var toast = document.createElement('div');
      toast.style.cssText = 'position:fixed;top:70px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2d1b0e,#4a2c17);border:2px solid #c4956a;border-radius:12px;padding:12px 24px;z-index:9999;color:#f5deb3;font-size:14px;font-weight:600;box-shadow:0 4px 24px rgba(0,0,0,.6);animation:v10toast .5s ease';
      toast.textContent = '🏆 업적 달성: ' + name;
      document.body.appendChild(toast);
      setTimeout(function(){ toast.remove(); }, 3000);
    }
  }
};

// ── 14. Quick Action Buttons (좌측 FAB 8종) ──
(function(){
  var btns = [
    {label:'✨풍수',fn:'v10Fengshui.open()'},
    {label:'📖마스터',fn:'v10Master.open()'},
    {label:'⚔️대결',fn:'v10Battle.open()'},
    {label:'🏠투어',fn:'v10Tour.open()'},
    {label:'🗺️지도',fn:'v10Map.open()'},
    {label:'🌿에너지',fn:'v10Energy.open()'},
    {label:'📝일기',fn:'v10Journal.open()'},
    {label:'🛡️안전',fn:'v10Safety.open()'}
  ];
  var container = document.getElementById('v7QuickBtns');
  if(container){
    btns.forEach(function(b){
      var btn = document.createElement('button');
      btn.textContent = b.label;
      btn.setAttribute('onclick', b.fn);
      container.appendChild(btn);
    });
  }
})();

// ── 15. Keyboard Shortcuts (+8) ──
(function(){
  document.addEventListener('keydown', function(e){
    if(!document.getElementById('modeSelect')) return;
    if(!document.getElementById('modeSelect').classList.contains('hidden')) return;
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
    if(!e.shiftKey) return;
    var key = e.key;
    if(key==='F') v10Fengshui.open();
    else if(key==='M') v10Master.open();
    else if(key==='T') v10Battle.open();
    else if(key==='H') v10Tour.open();
    else if(key==='P') v10Map.open();
    else if(key==='E') v10Energy.open();
    else if(key==='W') v10Journal.open();
    else if(key==='X') v10Safety.open();
  });
})();

// ── 16. Panel Open/Close helpers ──
window.v10Open = function(id){
  var panel = document.getElementById(id);
  if(!panel) return;
  panel.classList.add('active');
  switch(id){
    case 'v10FengshuiPanel': v10Fengshui.open(); break;
    case 'v10MasterPanel': v10Master.open(); break;
    case 'v10BattlePanel': v10Battle.open(); break;
    case 'v10TourPanel': v10Tour.open(); break;
    case 'v10MapPanel': v10Map.open(); break;
    case 'v10EnergyPanel': v10Energy.open(); break;
    case 'v10JournalPanel': v10Journal.open(); break;
    case 'v10SafetyPanel': v10Safety.open(); break;
  }
};
window.v10Close = function(id){
  var panel = document.getElementById(id);
  if(panel) panel.classList.remove('active');
};

// ── 17. Inject quiz on load ──
(function(){
  var qi = setInterval(function(){
    if(window.quizPool){
      v10Quiz.injectToMain();
      clearInterval(qi);
    }
  }, 500);
  setTimeout(function(){ clearInterval(qi); }, 10000);
})();

// ── 18. Hook into main game completion ──
(function(){
  function hookComplete(){
    var orig = window.showComplete;
    if(typeof orig !== 'function') return false;
    if(window.__v10Hooked) return true;
    window.__v10Hooked = true;
    var prevShowComplete = window.showComplete;
    window.showComplete = function(){
      prevShowComplete.apply(this, arguments);
      v10Achieve.check();
    };
    return true;
  }
  if(!hookComplete()){
    var ci = setInterval(function(){
      if(hookComplete()) clearInterval(ci);
    }, 500);
    setTimeout(function(){ clearInterval(ci); }, 10000);
  }
})();

// ── 19. Toast Animation CSS ──
(function(){
  var s = document.createElement('style');
  s.textContent = '@keyframes v10toast{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(s);
})();

// ── 20. Initial load + checks ──
(function(){
  v10Fengshui.load();
  v10Master.load();
  v10Battle.load();
  v10Tour.load();
  v10Energy.load();
  v10Journal.load();
  v10Safety.load();
  setTimeout(function(){ v10Achieve.check(); }, 2000);
})();

// end v10 guard
}

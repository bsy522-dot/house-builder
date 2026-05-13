// =====================================================
// House Builder v5.0 Patch
// 정자 모드 + 세이브슬롯 + 공유카드 + 타임라인 + SEO
// Injected by SW into main script scope
// =====================================================
if (!window.__hbV5) {
window.__hbV5 = true;

// ── 1. SEO Meta Tags + JSON-LD ──
(function(){
  document.title = '한국 건축 체험 - 6가지 3D 건축 시뮬레이터';
  var ms = [
    ['property','og:title','한국 건축 체험 - 6가지 3D 건축 시뮬레이터'],
    ['property','og:description','한옥, 기와집, 초가집, 서원, 정자, 현대주택을 단계별로 짓는 3D 건축 학습 게임'],
    ['property','og:type','website'],
    ['property','og:locale','ko_KR'],
    ['name','twitter:card','summary'],
    ['name','twitter:title','한국 건축 체험 3D'],
    ['name','description','한옥, 기와집, 초가집, 서원, 정자, 현대주택 6가지 모드의 3D 건축 학습 게임. 업적 32개, 퀸즈 18문, 4계절, BGM, PWA.']
  ];
  ms.forEach(function(d){
    var el=document.createElement('meta');
    el.setAttribute(d[0],d[1]); el.content=d[2];
    document.head.appendChild(el);
  });
  var ld=document.createElement('script');
  ld.type='application/ld+json';
  ld.textContent=JSON.stringify({
    '@context':'https://schema.org','@type':'WebApplication',
    name:'한국 건축 체험',
    applicationCategory:'EducationalGame',
    operatingSystem:'Web',inLanguage:'ko',
    description:'6가지 한국 전통/현대 건축을 3D로 체험하는 교육 게임',
    offers:{'@type':'Offer',price:'0',priceCurrency:'KRW'}
  });
  document.head.appendChild(ld);
})();

// ── 2. Accessibility ──
(function(){
  var s=document.createElement('a');
  s.href='#canvas3d';
  s.textContent='메인 콘텐츠로 건너뛰기';
  s.style.cssText='position:fixed;top:-60px;left:50%;transform:translateX(-50%);z-index:99999;background:var(--accent,#c4956a);color:#fff;padding:8px 16px;border-radius:0 0 8px 8px;transition:top .3s;font-size:14px;text-decoration:none';
  s.onfocus=function(){this.style.top='0'};
  s.onblur=function(){this.style.top='-60px'};
  document.body.prepend(s);
  ['completeOverlay','quizOverlay','tutorial','statsPanel','compareModal'].forEach(function(id){
    var el=document.getElementById(id);
    if(el){el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');}
  });
})();

// ── 3. CSS Injection ──
(function(){
  var css=document.createElement('style');
  css.textContent=[
    '.jeongja-card{border:2px solid rgba(100,200,150,.4)!important;position:relative}',
    '.jeongja-card::after{content:"";position:absolute;inset:-2px;border-radius:14px;background:linear-gradient(135deg,rgba(100,200,150,.15),transparent);pointer-events:none}',
    '.jeongja-card:hover{border-color:rgba(100,200,150,.8)!important;box-shadow:0 0 20px rgba(100,200,150,.3)!important}',
    '#saveSlotPanel{display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--bg-panel,rgba(30,20,10,.95));border:1px solid var(--border,rgba(196,149,106,.2));border-radius:16px;padding:24px;z-index:3000;min-width:320px;max-width:90vw;backdrop-filter:blur(12px)}',
    '#saveSlotPanel h3{color:var(--text-secondary,#c4956a);margin:0 0 16px;font-size:18px;text-align:center}',
    '.sv-slot{background:rgba(255,255,255,.05);border:1px solid var(--border,rgba(196,149,106,.2));border-radius:10px;padding:12px;margin:8px 0;transition:all .2s;display:flex;justify-content:space-between;align-items:center}',
    '.sv-slot:hover{background:rgba(255,255,255,.1)}',
    '.sv-info{font-size:13px;color:var(--text-primary,#fff)}',
    '.sv-date{font-size:11px;color:var(--text-secondary,#c4956a);opacity:.7}',
    '.sv-actions{display:flex;gap:6px}',
    '.sv-actions button{padding:4px 10px;border:none;border-radius:6px;cursor:pointer;font-size:12px}',
    '.sv-save{background:var(--accent,#c4956a);color:#fff}',
    '.sv-load{background:rgba(255,255,255,.15);color:var(--text-primary,#fff)}',
    '.sv-del{background:rgba(255,80,80,.2);color:#ff6b6b}',
    '#shareOverlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:3500;justify-content:center;align-items:center;backdrop-filter:blur(4px)}',
    '#shareOverlay.active{display:flex}',
    '#shareCard{background:linear-gradient(135deg,#2d1b0e,#4a2c17);border-radius:16px;padding:24px;color:#fff;width:360px;max-width:90vw;text-align:center}',
    '#shareCard h3{color:#c4956a;margin:0 0 8px;font-size:20px}',
    '.sh-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}',
    '.sh-stat{background:rgba(255,255,255,.08);border-radius:8px;padding:8px}',
    '.sh-val{font-size:20px;font-weight:bold;color:#c4956a}',
    '.sh-lbl{font-size:11px;opacity:.7}',
    '.sh-btns{display:flex;gap:8px;justify-content:center;margin-top:12px}',
    '.sh-btns button{padding:8px 16px;border:none;border-radius:8px;cursor:pointer;font-size:13px}',
    '.sh-dl{background:#c4956a;color:#fff}',
    '.sh-close{background:rgba(255,255,255,.15);color:#fff}',
    '#v5Timeline{margin:12px 0;padding:8px;background:rgba(255,255,255,.03);border-radius:8px}',
    '#v5Timeline h4{margin:0 0 6px;font-size:12px;color:var(--text-secondary,#c4956a);opacity:.8}',
    '.tl-bar{display:flex;gap:2px;height:20px}',
    '.tl-seg{flex:1;border-radius:3px;display:flex;align-items:center;justify-content:center;font-size:9px;color:rgba(255,255,255,.8);transition:all .3s}',
    '.tl-done{background:var(--accent,#c4956a)}',
    '.tl-cur{background:rgba(255,255,255,.25);animation:v5pulse 1.5s infinite}',
    '.tl-wait{background:rgba(255,255,255,.06)}',
    '@keyframes v5pulse{0%,100%{opacity:1}50%{opacity:.4}}',
    '.tl-info{display:flex;justify-content:space-between;font-size:9px;color:var(--text-secondary,#c4956a);opacity:.5;margin-top:4px}',
    '#btnSaveSlot{position:fixed;right:16px;bottom:270px;width:44px;height:44px;border-radius:50%;border:none;background:rgba(30,20,10,.85);color:#fff;font-size:20px;cursor:pointer;z-index:1000;backdrop-filter:blur(8px);box-shadow:0 2px 8px rgba(0,0,0,.3);transition:all .2s}',
    '#btnSaveSlot:hover{background:rgba(60,40,20,.95);transform:scale(1.1)}',
    '@media(max-width:768px){#btnSaveSlot{width:38px;height:38px;font-size:16px;right:10px;bottom:230px}#saveSlotPanel{min-width:280px;padding:16px}}'
  ].join('\n');
  document.head.appendChild(css);
})();

// ── 4. 정자(亭子) Steps Data ──
var JEONGJA_STEPS = [
  {name:'j_gidan',label:'기단과 초석',desc:'정자의 팔각 기단을 놓고 주초석을 배치합니다. 정자는 자연 속에 세워 풍류를 즐기는 공간입니다.',materials:['화강석 기단','자연석 기단']},
  {name:'j_pillar',label:'기둥 세우기',desc:'8개의 둥근 원기둥을 세웁니다. 정자는 벽 없이 기둥만으로 구성되어 사방이 트여 있습니다.',materials:['소나무 원기둥','느티나무 원기둥']},
  {name:'j_nangan',label:'난간 설치',desc:'기둥 사이에 난간을 설치합니다. 계자난간은 곡선미를, 평난간은 직선미를 보여줍니다.',materials:['계자난간','평난간']},
  {name:'j_maru',label:'마루 깔기',desc:'우물마루를 깔아 바닥을 완성합니다. 시원한 마루는 정자의 핵심 공간입니다.',materials:['소나무 우물마루','대나무 마루']},
  {name:'j_roof',label:'지붕 올리기',desc:'정자 특유의 지붕을 올립니다. 팔각지붕은 화려하고 육각지붕은 소박합니다.',materials:['팔각 기와지붕','육각 기와지붕']},
  {name:'j_dancheong',label:'단청 칠하기',desc:'기둥과 처마에 단청을 칠합니다. 단청은 목재 보호와 장식을 검합니다.',materials:['오방색 단청','소박한 긋기단청']},
  {name:'j_pond',label:'연못과 돌다리',desc:'정자 앞에 연못을 파고 돌다리를 놓습니다. 연못의 물소리는 풍류의 필수 요소입니다.',materials:['원형 연못','곡선 연못']},
  {name:'j_finish',label:'현판과 조경',desc:'현판을 걸고 주변에 소나무와 석등을 배치하여 마무리합니다.',materials:['초서체 현판','해서체 현판']}
];

// ── 5. New Achievements (8 new = 32 total) ──
ACHIEVEMENTS.complete_jeongja = {name:'정자 건축가',icon:'🏛️',desc:'정자를 완성했습니다'};
ACHIEVEMENTS.all_six = {name:'육관왕',icon:'👑',desc:'여섯 종류 건축 모두 완성'};
ACHIEVEMENTS.quiz_guru = {name:'퀸즈 달인',icon:'🎓',desc:'모든 모드 퀸즈를 풀었습니다'};
ACHIEVEMENTS.fact_collector = {name:'지식 수집가',icon:'📚',desc:'팩트 카드 20개 이상 확인'};
ACHIEVEMENTS.night_architect = {name:'야간 건축왕',icon:'🌃',desc:'밤에 5회 이상 건축 완성'};
ACHIEVEMENTS.speed_legend = {name:'전설의 건축가',icon:'⚡',desc:'90초 이내에 건축 완성'};
ACHIEVEMENTS.total_master = {name:'총괄 달인',icon:'🏆',desc:'업적 25개 이상 달성'};
ACHIEVEMENTS.share_first = {name:'자랑쟁이',icon:'📤',desc:'건축 카드를 처음 공유'};

// ── 6. New Quizzes (3 jeongja = 18 total) ──
QUIZZES.jeongja = [
  {q:'정자(亭子)의 가장 큰 특징은 무엇인가요?',opts:['벽이 없고 기둥만으로 구성','지하실이 있음','2층 구조'],ans:0,explain:'정자는 벽 없이 기둥과 지붕만으로 이루어져 사방이 트여 자연을 감상할 수 있습니다.'},
  {q:'조선시대 정자는 주로 어디에 세워졌나요?',opts:['도심 한복판','산수 경치가 좋은 곳','바닷가 모래사장'],ans:1,explain:'정자는 산과 물이 어우러진 경치 좋은 곳에 세워 풍류를 즐기는 공간이었습니다.'},
  {q:'정자 지붕 꼭대기에 놓는 구슬 모양 장식물은?',opts:['보주(寶珠)','귀면와','잡상'],ans:0,explain:'보주는 지붕 꼭대기에 올리는 구슬 모양 장식으로 하늘의 기운을 받는다는 의미입니다.'}
];

// ── 7. New Facts (8 jeongja) ──
FACTS.j_gidan = '정자의 기단은 자연 지형을 최대한 살려 축조합니다. 화강석을 다듬거나 자연석을 쌓아 올리며, 주변 경관과 조화를 이루도록 높이를 정합니다.';
FACTS.j_pillar = '정자의 기둥은 원형으로 깎은 원주(圓柱)를 사용합니다. 배흘림 기법으로 가운데를 약간 볼록하게 만들어 시각적 안정감을 줍니다.';
FACTS.j_nangan = '계자난간(雞子欄干)은 닭 모양 곡선을 사용한 난간입니다. 조선시대 정자와 누각에서 많이 사용되었으며 미적 완성도가 높습니다.';
FACTS.j_maru = '정자의 마루는 우물마루(井字마루)로, 나무를 격자 형태로 짜 맞추어 깔았습니다. 여름에도 시원하게 앉을 수 있습니다.';
FACTS.j_roof = '정자 지붕은 팔각정, 육각정, 사모정 등 다양합니다. 팔각정이 가장 화려하며 꼭대기에 보주(寶珠)를 올립니다.';
FACTS.j_dancheong = '단청(丹青)은 건물의 목재를 보호하고 아름답게 장식하는 전통 채색 기법입니다. 오방색(청\xB7적\xB7황\xB7백\xB7흑)을 기본으로 합니다.';
FACTS.j_pond = '정자 앞 연못은 방지원도(方池圓島) 원칙을 따르기도 합니다. 네모난 연못에 둥근 섬을 두어 하늘과 땅의 조화를 상징합니다.';
FACTS.j_finish = '정자의 현판(懸板)은 명필가가 직접 쓴 글씨를 새깁니다. 정자 이름에는 주변 경치나 주인의 철학이 담겨 있습니다.';

// ── 8. buildJeongjaPart 3D Builder ──
var buildJeongjaPart = function(pn, mi) {
  var M = function(c, r) { return new THREE.MeshStandardMaterial({color:c, roughness:r===undefined?0.7:r}); };
  var g = buildGroup;
  switch(pn) {
    case 'j_gidan': {
      var base = new THREE.Mesh(new THREE.CylinderGeometry(4,4.3,0.5,8), M(mi===0?0xcccccc:0xaa9977,0.9));
      base.position.y=0.25; base.castShadow=true; base.receiveShadow=true; g.add(base);
      for(var i=0;i<3;i++){
        var st=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.15,0.5),M(0xbbbbbb,0.9));
        st.position.set(0,0.07+i*0.15,4.3-i*0.5); st.castShadow=true; g.add(st);
      }
      for(var i=0;i<8;i++){
        var a=(i/8)*Math.PI*2;
        var stn=new THREE.Mesh(new THREE.CylinderGeometry(0.25,0.3,0.3,8),M(0xaaaaaa,0.95));
        stn.position.set(Math.cos(a)*3.2,0.65,Math.sin(a)*3.2); stn.castShadow=true; g.add(stn);
      }
      break;
    }
    case 'j_pillar': {
      var pc=mi===0?0x8B6914:0x6B4226;
      for(var i=0;i<8;i++){
        var a=(i/8)*Math.PI*2;
        var p=new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.18,3.5,12),M(pc,0.6));
        p.position.set(Math.cos(a)*3.2,2.25,Math.sin(a)*3.2); p.castShadow=true; g.add(p);
      }
      break;
    }
    case 'j_nangan': {
      var rc=mi===0?0xA0522D:0x8B4513;
      for(var i=0;i<8;i++){
        if(i===0) continue;
        var a1=(i/8)*Math.PI*2, a2=((i+1)/8)*Math.PI*2;
        var x1=Math.cos(a1)*3.2,z1=Math.sin(a1)*3.2,x2=Math.cos(a2)*3.2,z2=Math.sin(a2)*3.2;
        var mx=(x1+x2)/2,mz=(z1+z2)/2;
        var len=Math.sqrt((x2-x1)*(x2-x1)+(z2-z1)*(z2-z1));
        var ang=Math.atan2(z2-z1,x2-x1);
        var r1=new THREE.Mesh(new THREE.BoxGeometry(len,0.06,0.06),M(rc,0.5));
        r1.position.set(mx,1.3,mz); r1.rotation.y=-ang; g.add(r1);
        var r2=new THREE.Mesh(new THREE.BoxGeometry(len,0.06,0.06),M(rc,0.5));
        r2.position.set(mx,0.8,mz); r2.rotation.y=-ang; g.add(r2);
        for(var j=0;j<3;j++){
          var t=(j+1)/4;
          var bx=x1+(x2-x1)*t,bz=z1+(z2-z1)*t;
          var bar=new THREE.Mesh(new THREE.BoxGeometry(0.04,0.5,0.04),M(rc,0.5));
          bar.position.set(bx,1.05,bz); g.add(bar);
        }
      }
      break;
    }
    case 'j_maru': {
      var fc=mi===0?0xDEB887:0xC4A265;
      var fl=new THREE.Mesh(new THREE.CylinderGeometry(3.5,3.5,0.1,8),M(fc,0.4));
      fl.position.y=0.55; fl.receiveShadow=true; g.add(fl);
      for(var i=-3;i<=3;i++){
        var ln=new THREE.Mesh(new THREE.BoxGeometry(7,0.02,0.02),M(0x8B6914,0.3));
        ln.position.set(0,0.61,i*0.45); g.add(ln);
      }
      break;
    }
    case 'j_roof': {
      var sd=mi===0?8:6;
      var rf=new THREE.Mesh(new THREE.ConeGeometry(4.5,2.5,sd),M(0x4a4a4a,0.8));
      rf.position.y=5.2; rf.castShadow=true; g.add(rf);
      var ev=new THREE.Mesh(new THREE.ConeGeometry(5.2,0.5,sd),M(0x555555,0.8));
      ev.position.y=4.0; g.add(ev);
      var ev2=new THREE.Mesh(new THREE.ConeGeometry(4.8,0.3,sd),M(0x505050,0.8));
      ev2.position.y=4.35; g.add(ev2);
      var fn=new THREE.Mesh(new THREE.SphereGeometry(0.2,16,16),M(0xDAA520,0.3));
      fn.position.y=6.5; g.add(fn);
      break;
    }
    case 'j_dancheong': {
      var cols=mi===0?[0xFF0000,0x0000FF,0xFFFF00,0x228B22,0xFFFFFF]:[0x8B0000,0x006400];
      for(var i=0;i<8;i++){
        var a=(i/8)*Math.PI*2;
        var x=Math.cos(a)*3.2,z=Math.sin(a)*3.2;
        var b1=new THREE.Mesh(new THREE.CylinderGeometry(0.19,0.19,0.2,12),M(cols[i%cols.length],0.3));
        b1.position.set(x,3.95,z); g.add(b1);
        var b2=new THREE.Mesh(new THREE.CylinderGeometry(0.20,0.20,0.1,12),M(cols[(i+2)%cols.length],0.3));
        b2.position.set(x,3.80,z); g.add(b2);
      }
      for(var i=0;i<8;i++){
        var a1=(i/8)*Math.PI*2,a2=((i+1)/8)*Math.PI*2;
        var x1=Math.cos(a1)*4.6,z1=Math.sin(a1)*4.6,x2=Math.cos(a2)*4.6,z2=Math.sin(a2)*4.6;
        var mx=(x1+x2)/2,mz=(z1+z2)/2;
        var len=Math.sqrt((x2-x1)*(x2-x1)+(z2-z1)*(z2-z1));
        var ang=Math.atan2(z2-z1,x2-x1);
        var eb=new THREE.Mesh(new THREE.BoxGeometry(len,0.08,0.15),M(cols[i%cols.length],0.4));
        eb.position.set(mx,4.05,mz); eb.rotation.y=-ang; g.add(eb);
      }
      break;
    }
    case 'j_pond': {
      var ic=mi===0;
      var pg=ic?new THREE.CylinderGeometry(2.5,2.5,0.3,32):new THREE.CylinderGeometry(2.8,2.2,0.3,16);
      var pm=new THREE.MeshStandardMaterial({color:0x2288AA,roughness:0.1,metalness:0.3,transparent:true,opacity:0.7});
      var pond=new THREE.Mesh(pg,pm);
      pond.position.set(0,0.0,7); g.add(pond);
      var rim=new THREE.Mesh(new THREE.TorusGeometry(ic?2.5:2.5,0.15,8,ic?32:16),M(0x888888,0.9));
      rim.position.set(0,0.15,7); rim.rotation.x=Math.PI/2; g.add(rim);
      var br=new THREE.Mesh(new THREE.BoxGeometry(1.2,0.2,3),M(0xaaaaaa,0.9));
      br.position.set(0,0.25,5.5); br.castShadow=true; g.add(br);
      for(var s=-1;s<=1;s+=2){
        var brl=new THREE.Mesh(new THREE.BoxGeometry(0.08,0.5,3),M(0x999999,0.8));
        brl.position.set(s*0.55,0.5,5.5); g.add(brl);
      }
      for(var i=0;i<5;i++){
        var la=(i/5)*Math.PI*2+0.3;
        var lr=1.2+Math.random()*0.8;
        var leaf=new THREE.Mesh(new THREE.CircleGeometry(0.25,8),new THREE.MeshStandardMaterial({color:0x228B22,roughness:0.6,side:THREE.DoubleSide}));
        leaf.position.set(Math.cos(la)*lr,0.16,7+Math.sin(la)*lr);
        leaf.rotation.x=-Math.PI/2; g.add(leaf);
      }
      break;
    }
    case 'j_finish': {
      var board=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.6,0.08),M(0x4a2c17,0.5));
      board.position.set(0,3.7,3.2); g.add(board);
      var frame=new THREE.Mesh(new THREE.BoxGeometry(1.7,0.75,0.04),M(mi===0?0xDAA520:0x8B6914,0.4));
      frame.position.set(0,3.7,3.15); g.add(frame);
      var treePos=[[-5,0,-5],[5,0,-5],[-5,0,5],[5,0,5],[-6,0,0],[6,0,0]];
      for(var t=0;t<treePos.length;t++){
        var tp=treePos[t];
        var tr=new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.2,2,8),M(0x5C4033,0.7));
        tr.position.set(tp[0],1,tp[2]); tr.castShadow=true; g.add(tr);
        var cr=new THREE.Mesh(new THREE.SphereGeometry(0.8+Math.random()*0.4,8,8),M(0x228B22,0.8));
        cr.position.set(tp[0],2.3+Math.random()*0.3,tp[2]); cr.castShadow=true; g.add(cr);
      }
      var lb=new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.35,0.2,6),M(0x999999,0.9));
      lb.position.set(3,0.1,4); g.add(lb);
      var lp=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,1,6),M(0x888888,0.9));
      lp.position.set(3,0.7,4); g.add(lp);
      var lt=new THREE.Mesh(new THREE.ConeGeometry(0.35,0.4,6),M(0x777777,0.8));
      lt.position.set(3,1.4,4); g.add(lt);
      break;
    }
  }
};

// ── 9. Function Hooks ──

// Timeline state
var v5StepTimes = [];
var v5StepStart = 0;

// Hook startGame
var _v5sg = startGame;
startGame = function(mode) {
  if (mode === 'jeongja') steps = JEONGJA_STEPS;
  _v5sg(mode);
  if (mode === 'jeongja') {
    var gt = document.getElementById('gameTitle');
    if (gt) gt.textContent = '정자 (亭子) 짓기';
  }
  v5StepTimes = [];
  v5StepStart = Date.now();
  v5UpdateTimeline();
};

// Hook buildStep
var _v5bs = buildStep;
buildStep = function(idx, matIdx) {
  if (gameMode === 'jeongja') buildJeongjaPart(steps[idx].name, matIdx);
  _v5bs(idx, matIdx);
  if (v5StepStart) {
    v5StepTimes.push(Date.now() - v5StepStart);
    v5StepStart = Date.now();
  }
  v5UpdateTimeline();
  v5CheckExtra();
};

// Hook afterBuild
var _v5ab = afterBuild;
afterBuild = function() {
  _v5ab();
  if (gameMode === 'jeongja') {
    var ct = document.getElementById('completeTitle');
    var cm = document.getElementById('completeMsg');
    if (ct) ct.textContent = '🏛️ 정자 완성!';
    if (cm) cm.textContent = '아름다운 정자가 완성되었습니다! 자연 속 풍류의 공간을 즐겨보세요.';
    earnAchievement('complete_jeongja');
    var d = loadProgress();
    if (!d.completed) d.completed = {};
    d.completed.jeongja = true;
    saveProgress(d);
    if (d.completed.hanok && d.completed.modern && d.completed.choga && d.completed.giwajip && d.completed.seowon && d.completed.jeongja) {
      earnAchievement('all_six');
    }
  }
  v5AddShareBtn();
  v5CheckExtra();
};

// Hook updateProgressBadge
var _v5upb = updateProgressBadge;
updateProgressBadge = function() {
  _v5upb();
  var badge = document.getElementById('progressBadge');
  if (!badge) return;
  var d = loadProgress();
  var count = 0;
  ['hanok','modern','choga','giwajip','seowon','jeongja'].forEach(function(m) {
    if (d.completed && d.completed[m]) count++;
  });
  var txt = badge.textContent || '';
  txt = txt.replace(/\d+\/\d+/, count + '/6');
  if (d.completed && d.completed.jeongja && txt.indexOf('🏛') === -1) txt += ' 🏛️';
  badge.textContent = txt;
};

// Hook toggleCompare
var _v5tc = toggleCompare;
toggleCompare = function() {
  _v5tc();
  var modal = document.getElementById('compareModal');
  if (!modal || modal.style.display === 'none') return;
  var body = document.getElementById('compareBody');
  if (!body || body.querySelector('[data-v5j]')) return;
  var sec = document.createElement('div');
  sec.setAttribute('data-v5j', '1');
  sec.innerHTML = '<h4 style="color:var(--text-secondary,#c4956a);margin:16px 0 8px">🏛️ 정자 (亭子)</h4>' +
    '<table style="width:100%;border-collapse:collapse;font-size:13px">' +
    '<tr><td style="padding:6px;border:1px solid var(--border,rgba(196,149,106,.2));width:30%">구조</td><td style="padding:6px;border:1px solid var(--border)">팔각 기단 + 원기둥 8개</td><td style="padding:6px;border:1px solid var(--border)">정원 파빌리온/가제보</td></tr>' +
    '<tr><td style="padding:6px;border:1px solid var(--border)">지붕</td><td style="padding:6px;border:1px solid var(--border)">팔각/육각 기와지붕 + 보주</td><td style="padding:6px;border:1px solid var(--border)">캔버스/우산형 지붕</td></tr>' +
    '<tr><td style="padding:6px;border:1px solid var(--border)">바닥</td><td style="padding:6px;border:1px solid var(--border)">소나무/대나무 우물마루</td><td style="padding:6px;border:1px solid var(--border)">데크/타일 바닥</td></tr>' +
    '<tr><td style="padding:6px;border:1px solid var(--border)">특징</td><td style="padding:6px;border:1px solid var(--border)">벽 없음, 계자난간, 단청</td><td style="padding:6px;border:1px solid var(--border)">유리 벽체, 모기장</td></tr>' +
    '<tr><td style="padding:6px;border:1px solid var(--border)">조경</td><td style="padding:6px;border:1px solid var(--border)">연못, 돌다리, 소나무, 석등</td><td style="padding:6px;border:1px solid var(--border)">잔디, 화단, 조명</td></tr>' +
    '<tr><td style="padding:6px;border:1px solid var(--border)">용도</td><td style="padding:6px;border:1px solid var(--border)">풍류, 시 짓기, 학문 토론</td><td style="padding:6px;border:1px solid var(--border)">휴식, 파티, 야외활동</td></tr>' +
    '</table>';
  body.appendChild(sec);
};

// Hook showFact for counting
var _v5sf = showFact;
showFact = function(partName) {
  _v5sf(partName);
  var d = loadProgress();
  d.factsShown = (d.factsShown || 0) + 1;
  saveProgress(d);
};

// ── 10. Timeline Widget ──
var v5UpdateTimeline = function() {
  if (!steps || !steps.length) return;
  var panel = document.getElementById('v5Timeline');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'v5Timeline';
    var sl = document.getElementById('stepList');
    if (sl && sl.parentNode) sl.parentNode.insertBefore(panel, sl.nextSibling);
    else return;
  }
  var bar = '<div class="tl-bar">';
  for (var i = 0; i < steps.length; i++) {
    var cls = i < currentStep ? 'tl-done' : (i === currentStep ? 'tl-cur' : 'tl-wait');
    bar += '<div class="tl-seg ' + cls + '">' + (i+1) + '</div>';
  }
  bar += '</div>';
  var total = v5StepTimes.reduce(function(a,b){return a+b},0);
  var tStr = total > 0 ? (total/1000).toFixed(1) + '초' : '-';
  var info = '<div class="tl-info"><span>시작</span><span>' + currentStep + '/' + steps.length + ' (' + tStr + ')</span><span>완성</span></div>';
  panel.innerHTML = '<h4>🔨 건축 타임라인</h4>' + bar + info;
};

// ── 11. Save Slots ──
var v5InitSaveSlots = function() {
  var btn = document.createElement('button');
  btn.id = 'btnSaveSlot';
  btn.textContent = '💾';
  btn.title = '세이브 슬롯 (S)';
  btn.setAttribute('aria-label', '세이브 슬롯 열기');
  btn.onclick = v5ToggleSave;
  document.body.appendChild(btn);

  var panel = document.createElement('div');
  panel.id = 'saveSlotPanel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.innerHTML = '<h3>💾 세이브 슬롯</h3><div id="svSlotList"></div>' +
    '<div style="text-align:center;margin-top:12px">' +
    '<button onclick="v5Export()" style="padding:6px 12px;border:none;border-radius:6px;background:rgba(255,255,255,.1);color:var(--text-primary,#fff);cursor:pointer;font-size:12px;margin:0 4px">📥 내보내기</button>' +
    '<button onclick="v5Import()" style="padding:6px 12px;border:none;border-radius:6px;background:rgba(255,255,255,.1);color:var(--text-primary,#fff);cursor:pointer;font-size:12px;margin:0 4px">📤 가져오기</button>' +
    '<button onclick="v5ToggleSave()" style="padding:6px 12px;border:none;border-radius:6px;background:rgba(255,80,80,.15);color:#ff6b6b;cursor:pointer;font-size:12px;margin:0 4px">닫기</button>' +
    '</div>';
  document.body.appendChild(panel);
};

var v5ToggleSave = function() {
  var p = document.getElementById('saveSlotPanel');
  if (!p) return;
  if (p.style.display === 'block') { p.style.display = 'none'; return; }
  p.style.display = 'block';
  v5RenderSlots();
};

var v5RenderSlots = function() {
  var list = document.getElementById('svSlotList');
  if (!list) return;
  var html = '';
  for (var i = 1; i <= 3; i++) {
    var key = 'hb-slot-' + i;
    var raw = localStorage.getItem(key);
    var info = '빈 슬롯', date = '';
    if (raw) {
      try {
        var parsed = JSON.parse(raw);
        var cnt = 0;
        if (parsed.completed) Object.keys(parsed.completed).forEach(function(k) { if (parsed.completed[k]) cnt++; });
        info = '완성: ' + cnt + '개 모드';
        if (parsed.savedAt) date = new Date(parsed.savedAt).toLocaleString('ko-KR');
      } catch(e) { info = '데이터 오류'; }
    }
    html += '<div class="sv-slot"><div><div class="sv-info">슬롯 ' + i + ' — ' + info + '</div>' +
      '<div class="sv-date">' + date + '</div></div><div class="sv-actions">' +
      '<button class="sv-save" onclick="v5SaveSlot(' + i + ')">저장</button>' +
      (raw ? '<button class="sv-load" onclick="v5LoadSlot(' + i + ')">불러오기</button>' : '') +
      (raw ? '<button class="sv-del" onclick="v5DelSlot(' + i + ')">삭제</button>' : '') +
      '</div></div>';
  }
  list.innerHTML = html;
};

var v5SaveSlot = function(n) {
  var d = loadProgress();
  d.savedAt = new Date().toISOString();
  localStorage.setItem('hb-slot-' + n, JSON.stringify(d));
  v5RenderSlots();
};

var v5LoadSlot = function(n) {
  var raw = localStorage.getItem('hb-slot-' + n);
  if (!raw) return;
  try { var d = JSON.parse(raw); delete d.savedAt; saveProgress(d); location.reload(); } catch(e) {}
};

var v5DelSlot = function(n) {
  localStorage.removeItem('hb-slot-' + n);
  v5RenderSlots();
};

var v5Export = function() {
  var d = loadProgress();
  var blob = new Blob([JSON.stringify(d, null, 2)], {type:'application/json'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'house-builder-save-' + new Date().toISOString().slice(0,10) + '.json';
  a.click(); URL.revokeObjectURL(a.href);
};

var v5Import = function() {
  var input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = function() {
    var file = input.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function() {
      try { var d = JSON.parse(reader.result); saveProgress(d); location.reload(); } catch(e) {}
    };
    reader.readAsText(file);
  };
  input.click();
};

// ── 12. Share Card ──
var v5AddShareBtn = function() {
  var ov = document.getElementById('completeOverlay');
  if (!ov || ov.querySelector('#v5ShareBtn')) return;
  var btn = document.createElement('button');
  btn.id = 'v5ShareBtn';
  btn.textContent = '📤 건축 카드 공유';
  btn.style.cssText = 'display:inline-block;padding:10px 20px;border:none;border-radius:10px;background:var(--accent,#c4956a);color:#fff;cursor:pointer;font-size:14px;margin-top:10px';
  btn.onclick = v5ShowShare;
  ov.appendChild(btn);
};

var v5ShowShare = function() {
  var ov = document.getElementById('shareOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'shareOverlay';
    ov.onclick = function(e) { if (e.target === ov) v5CloseShare(); };
    ov.innerHTML = '<div id="shareCard"></div>';
    document.body.appendChild(ov);
  }
  var d = loadProgress();
  var mNames = {hanok:'한옥',modern:'현대주택',choga:'초가집',giwajip:'기와집',seowon:'서원',jeongja:'정자'};
  var mn = mNames[gameMode] || gameMode;
  var cc = 0;
  if (d.completed) Object.keys(d.completed).forEach(function(k) { if (d.completed[k]) cc++; });
  var ac = d.achievements ? d.achievements.length : 0;
  var total = v5StepTimes.reduce(function(a,b){return a+b},0);
  var tStr = total > 0 ? (total/1000).toFixed(1) + '초' : '-';
  var card = document.getElementById('shareCard');
  card.innerHTML = '<h3>🏗️ ' + mn + ' 완성!</h3>' +
    '<p style="opacity:.7;font-size:13px">한국 건축 체험 v5.0</p>' +
    '<div class="sh-grid">' +
    '<div class="sh-stat"><div class="sh-val">' + cc + '/6</div><div class="sh-lbl">완성 모드</div></div>' +
    '<div class="sh-stat"><div class="sh-val">' + ac + '</div><div class="sh-lbl">달성 업적</div></div>' +
    '<div class="sh-stat"><div class="sh-val">' + tStr + '</div><div class="sh-lbl">소요 시간</div></div>' +
    '<div class="sh-stat"><div class="sh-val">' + (d.materialsUsed ? d.materialsUsed.length : 0) + '</div><div class="sh-lbl">사용 재료</div></div>' +
    '</div>' +
    '<canvas id="shareCanvas" width="360" height="200" style="border-radius:8px;margin:8px 0;width:100%;background:#1a1a2e"></canvas>' +
    '<div class="sh-btns">' +
    '<button class="sh-dl" onclick="v5DlCard()">📥 이미지 저장</button>' +
    '<button class="sh-close" onclick="v5CloseShare()">닫기</button>' +
    '</div>';
  ov.classList.add('active');
  setTimeout(function() {
    var sc = document.getElementById('shareCanvas');
    if (!sc) return;
    var ctx = sc.getContext('2d');
    try { renderer.render(scene, camera); ctx.drawImage(renderer.domElement, 0, 0, sc.width, sc.height); }
    catch(e) {
      ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,sc.width,sc.height);
      ctx.fillStyle = '#c4956a'; ctx.font = '16px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(mn + ' 건축 완성!', sc.width/2, sc.height/2);
    }
  }, 100);
  earnAchievement('share_first');
};

var v5CloseShare = function() {
  var ov = document.getElementById('shareOverlay');
  if (ov) ov.classList.remove('active');
};

var v5DlCard = function() {
  var sc = document.getElementById('shareCanvas');
  if (!sc) return;
  var a = document.createElement('a');
  a.href = sc.toDataURL('image/png');
  a.download = 'house-builder-' + gameMode + '-' + new Date().toISOString().slice(0,10) + '.png';
  a.click();
};

// ── 13. Extra Achievement Checks ──
var v5CheckExtra = function() {
  var d = loadProgress();
  if (d.achievements && d.achievements.length >= 25) earnAchievement('total_master');
  if (d.nightCompleted && d.nightCompleted >= 5) earnAchievement('night_architect');
  if (typeof gameStartTime !== 'undefined' && gameStartTime) {
    var elapsed = (Date.now() - gameStartTime) / 1000;
    if (elapsed <= 90 && currentStep >= (steps ? steps.length : 999)) earnAchievement('speed_legend');
  }
  if (d.factsShown && d.factsShown >= 20) earnAchievement('fact_collector');
};

// ── 14. Mode Card DOM Injection ──
(function() {
  var ms = document.getElementById('modeSelect');
  if (!ms) return;
  var cards = ms.querySelectorAll('.mode-card');
  var last = cards[cards.length - 1];
  var card = document.createElement('div');
  card.className = 'mode-card jeongja-card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', '정자 짓기 시작');
  card.onclick = function() { startGame('jeongja'); };
  card.onkeydown = function(e) { if (e.key === 'Enter') startGame('jeongja'); };
  card.innerHTML = '<div style="font-size:48px;margin-bottom:10px">🏛️</div>' +
    '<h2 style="margin:0 0 8px;color:var(--text-secondary,#c4956a)">정자 (亭子)</h2>' +
    '<p style="margin:0;font-size:13px;opacity:.8;color:var(--text-primary,#fff)">자연 속 풍류의 공간<br>8단계 정자 건축</p>';
  if (last && last.parentNode) last.parentNode.insertBefore(card, last.nextSibling);
  if (typeof updateProgressBadge === 'function') updateProgressBadge();
})();

// ── 15. Keyboard: S for Save Slots ──
(function() {
  var origHandler = null;
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 's' || e.key === 'S') { e.preventDefault(); v5ToggleSave(); }
  });
})();

// ── 16. Init ──
v5InitSaveSlots();

} // end __hbV5 guard

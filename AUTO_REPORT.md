# House Builder - AUTO 발전 보고서

## 2026-04-11 - 첫 AUTO 실행 (대규모 v2.0 업그레이드)

### 1차: 벤치마킹 / 분석

**경쟁앱:**
- The Sims (EA): 자유도 높은 집짓기, 가구/인테리어 풍부
- Home Design 3D (Anuman): 평면도 편집, 3D 뷰 전환
- Minecraft 교육판: 블록 단위 건축 학습

**이전 버전 열위점:**
- 사운드 완전 부재 (망치질/톱질/완성 음악 없음)
- 시각 효과 부재 (파티클/폭죽/연기 없음)
- 세이브 시스템 없음 (매번 처음부터)
- 업적/동기부여 시스템 없음
- 튜토리얼 없음 (온보딩 부재)
- 학습 강화 피드백 없음 (퀴즈/카드 없음)
- 모드 2종뿐 (한옥/현대) — 초가집 같은 서민 건축 누락
- 낮/밤 같은 환경 변화 없음
- 외부 CDN 규칙 위반 (`fonts.googleapis.com` Google Fonts 사용 중)
- 오프라인 작동 불가 (서비스 워커 없음)

**우위점 (유지):**
- 한국 전통 건축에 특화된 교육 콘텐츠 (타 앱에 없음)
- 단계별 건축 과정으로 실제 순서 학습 가능
- 재료 선택을 통한 역사적 이해

---

### 2차: 개발팀 전체 투입

**프론트엔드 / UI-UX:**
- Google Fonts CDN 제거 → 시스템 폰트 스택으로 교체 (규칙 준수)
- 3번째 모드 카드 추가 (초가집 🌾 — 서민가)
- 플로팅 버튼 3종 신규: 음소거 🔊, 낮/밤 ☀️🌙, 도움말 ❔
- 튜토리얼 오버레이 (`#tutorial`) — 첫 방문 자동 표시 + `?` 버튼으로 재열람
- 업적 토스트 (`#achToast`) — 스프링 애니메이션으로 상단 슬라이드
- 퀴즈 오버레이 (`#quizOverlay`) — 정답/오답 피드백 + 진도 표시
- Did You Know 팩트 카드 (`#factCard`) — 건축 후 좌하단 자동 표시, 7초 후 페이드
- 로딩 스피너 (`#loadingScreen`) — 초기 진입 시 표시
- 키보드 힌트 (`#kbdHint`) — 데스크톱에서만 표시
- 진행 배지 (`#progressBadge`) — 모드 선택 화면에 완성 현황 (🏯 🌾 🏠 n/3)
- 모바일 반응형 개선: 사이드패널 높이 50→55vh, 플로팅 버튼 크기 조정
- 다크 톤 유지 + 한국 전통 색상 팔레트 (`#c4956a`, `#f5deb3`, `#2d1b0e`)

**백엔드 / 게임 로직:**
- Web Audio API 사운드 엔진 (`ensureAudio`, `playTone`, `playNoise`)
- SFX 테이블: `click`/`hammer`/`saw`/`stone`/`wood`/`tile`/`straw`/`complete`/`achievement`/`wrong`/`correct`
- `playBuildSfx()` — 부품 종류(돌/나무/기와/창호/볏짚)에 따라 다른 효과음 자동 매칭
- Ambient 사운드: 6~10초 간격 랜덤 새소리 (낮 모드만)
- 파티클 시스템 (`spawnDustParticles`, `spawnFireworks`, `updateParticles`)
- 건축 시 먼지 구름 20개 + 완성 시 3곳에서 폭죽 90개 발사
- 중력 시뮬레이션(`gravity: true`) + 투명도 감소 수명
- localStorage 세이브: `muted`, `isNight`, `tutorialSeen`, `completed`, `achievements`, `materialsUsed`
- 업적 시스템 8종: `first_build`, `complete_hanok`, `complete_modern`, `complete_choga`, `master_builder` (3개 전부), `material_explorer` (10재료), `quiz_master` (만점), `night_owl` (밤 건축)
- 낮/밤 사이클: 배경색/fog/sunLight/ambLight/fillLight 색상 및 강도 전환
- 퀴즈 엔진: 모드별 3문제 × 3모드 = 9문제, 정답/오답 색상 피드백, 해설, 결과 집계
- 키보드 단축키: Space(짓기), ←→↑↓(회전), +-(줌), R(리셋+확인), M(음소거), N(낮/밤), ESC(오버레이 닫기)
- 서비스 워커 PWA 등록 (자동 캐싱)

**콘텐츠 제작:**
- **초가집 모드 신규 (7단계, 완전히 새로 작성):**
  1. 다진땅 — 황토/진흙
  2. 주춧돌 — 강돌/막돌
  3. 기둥 — 소나무/참나무 (도랑주 스타일)
  4. 대들보 — 소나무/참나무
  5. 초가지붕 — 황금볏짚/묵은볏짚 (볏짚 돔 + 40개 랜덤 tuft + 새끼줄)
  6. 흙벽 — 황토/백토 (욋가지+짚 혼합)
  7. 봉당과 창 — 나무문/싸리문 (디딤돌 + 싸리 창)
- **Did You Know 팩트 24개** (전 부품별 건축 상식)
- **퀴즈 9개** (모드별 3개): 주초돌/온돌/마룻도리/이중유리/철근/볏짚/이엉잇기/황토+짚 등
- 현대 주택 인테리어 보강: 침대/베개/전등 추가

**오디오 엔진:**
- 노이즈 버퍼 생성 (1채널, 감쇠 적용) + BiquadFilter (lowpass/highpass/bandpass)
- 멀티톤 시퀀스: 완성 시 523→659→784→1047Hz 상승 아르페지오
- 업적 달성: 880→1320→1760Hz 트리플
- 정답: 660→990Hz 상승 / 오답: 160Hz sawtooth
- 마스터 게인 노드로 일괄 볼륨 제어

**비주얼 / 3D:**
- Three.js r128 (기존 CDN, 규칙상 허용)
- 파티클 먼지: 랜덤 속도(x/y/z) + 수명 기반 알파 페이드
- 폭죽 파티클: 구형 전파 + 중력 + 컬러 랜덤(5색)
- 낮/밤 씬 배경 색상 + Fog + Sun/Ambient/Fill 라이트 색상 전환
- 초가지붕: SphereGeometry 돔(세그먼트 20x10, PI/2.4 cap) + 40개 랜덤 tuft Cone + TorusGeometry 새끼줄
- 정다면체(DodecahedronGeometry)로 자연석 표현

---

### 3차: 품질팀 검증

**코드 리뷰:**
- JavaScript 문법 검사: `new Function(js)` 성공 (62,440자, 53 functions)
- HTML 태그 밸런스: div 69/69, button 16/16, span 3/3, ul 1/1, li 4/4, p 7/7, h1 2/2, h2 2/2, h3 3/3 (전부 OK)
- getElementById ID 참조 검증: 36개 JS 참조 → 41개 HTML ID 정의 (누락 0)
- onclick 핸들러 검증: 14개 고유 함수 호출 → 모두 정의됨 (누락 0)
- HTML entities in `<script>` 수정: `&#39;`/`&quot;` → `'`/`"` 교체 (script 내부 entity는 브라우저가 decode하지 않음)

**외부 리소스 감사:**
- `fonts.googleapis.com` 제거 ✓
- 유일한 외부 URL: `cdnjs.cloudflare.com/.../three.min.js` (규칙상 허용)
- 유일한 namespace URL: `http://www.w3.org/2000/svg` (SVG 필수)
- 인라인 data: URI(아이콘)만 사용

**성능 체크:**
- 파티클 수명 기반 자동 해제 (`geometry.dispose()`, `material.dispose()`)
- `resetGame()` / `startGame()` 시 이전 메쉬 및 파티클 완전 정리
- 섀도우맵 2048x2048 유지, 픽셀비율 최대 2 제한
- ambientInterval `clearInterval`로 누수 방지

**사용성 테스트 (DOM 시뮬레이션):**
- 모든 모드 startGame 호출 경로 ok
- updateProgressBadge 호출 ok
- CHOGA_STEPS(7), QUIZZES(3 modes), ACHIEVEMENTS(8), SFX(11) 전부 정의 확인

**발견 → 수정:**
- [발견] 스크립트 내부에 HTML entities 사용 시 문법 오류 → [수정] entity를 실제 문자로 치환
- [발견] 전역 조명 변수가 함수 스코프 한정 → [수정] `let sunLight, ambLight, fillLight` 전역화
- [발견] 초가집 모드 시 이전 파티클 잔존 가능 → [수정] startGame에서 particles 배열 초기화

---

### 4차: 마무리

**파일 변경:**
- `index.html`: 1190줄 → 2089줄 (+899줄, 약 +75%)
- `manifest.json`: 이름/설명 3모드 반영 업데이트
- `sw.js`: 서비스 워커 신규 추가 (PWA 오프라인 지원)
- `AUTO_REPORT.md`: 본 보고서 신규 생성

**투입 인원 요약:**
- 벤치마킹/분석 (10%): The Sims / Home Design 3D / Minecraft 교육판 대비 분석
- 개발 (50%): 프론트엔드 + 게임 로직 + 사운드 + 파티클 + 콘텐츠 (초가집 모드 + 퀴즈 + 팩트)
- 품질 (30%): 문법/태그/ID/핸들러/CDN/성능 검증
- 마무리 (10%): 보고서 + 커밋

---

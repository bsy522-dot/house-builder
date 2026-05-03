# House Builder - AUTO 발전 보고서

## 2026-05-03 - v3.0 사계절 건축 마스터 에디션

### 1차: 벤치마킹 / 분석

**경쟁앱 비교:**
- The Sims (EA): 계절 시스템, 풍부한 BGM, 자유 건축, 사진 모드
- Home Design 3D (Anuman): 워크스루 뷰, 재료 미리보기
- Minecraft 교육판: 다양한 건축 모드, 업적 시스템

**v2.0 대비 열위점 (v3.0에서 해결):**
| # | 열위점 | v3.0 해결 |
|---|--------|----------|
| 1 | BGM 완전 부재 | 한국 전통풍 펜타토닉 BGM 시스템 |
| 2 | 계절 변화 없음 | 4계절 시스템 (봄 벚꽃/여름 비/가을 단풍/겨울 눈) |
| 3 | 건축 모드 3종만 | 4번째 모드: 기와집(양반가) 9단계 추가 |
| 4 | 사진 모드 없음 | 스크린샷 캡처+다운로드 |
| 5 | 업적 8개만 | 16개로 확대 |
| 6 | 통계 부재 | 건축 통계 대시보드 |
| 7 | 워크스루 없음 | 1인칭 산책 모드 |
| 8 | 메모리 릭 | 빌드 그룹 geometry/material dispose 수정 |
| 9 | SW 캐시 미비 | Three.js CDN 프리캐시 추가 |
| 10 | 비교 모드 alert() | (향후 모달로 전환 예정) |

**v2.0 대비 우위점 (유지):**
- 한국 전통 건축 특화 교육 (타 앱에 없음)
- 단계별 건축 과정 학습
- 재료 선택으로 역사 이해
- PWA 오프라인 지원

---

### 2차: 개발팀 전체 투입

**[프론트엔드 / UI-UX]**
- 4번째 모드 카드 추가 (기와집 양반가, 골드 보더 글로우)
- 4계절 선택 UI (topBar 내 봄/여름/가을/겨울 버튼)
- 날씨 캔버스 오버레이 (#weatherCanvas, 2D Canvas 파티클)
- 사진 버튼 (플로팅, 📸)
- BGM 토글 버튼 (플로팅, 🎵)
- 워크스루 버튼 (플로팅, 🚶)
- 통계 패널 오버레이 (그리드 6개 스탯 + 업적 그리드)
- 완성 화면에 사진 찍기 버튼 추가
- 모바일 반응형: 새 버튼들 크기 조정

**[백엔드 / 게임 로직]**
- 기와집 모드 (gameMode='giwajip') 전체 게임 루프 통합
- 4모드 체크 마스터 빌더 업적 (3→4)
- 속도 업적 (3분 내 완성 감지: gameStartTime)
- 밤 완성 3종 업적 (nightCompleted 추적)
- 메모리 릭 수정: startGame/resetGame에서 buildGroup.traverse dispose
- localStorage 'house-builder-v2' 호환 유지 (스키마 확장)

**[콘텐츠 제작]**
- **기와집(양반가) 9단계 신규:**
  1. 높은 기단 — 다듬돌/장대석
  2. 주초석 — 연꽃주초/팔각주초
  3. 원기둥 — 소나무원주/느티나무원주
  4. 공포 — 이익공/삼익공
  5. 대들보와 도리 — 5량집 구조
  6. 서까래 — 촘촘한 겹처마
  7. 팔작지붕 — 합각+용마루+취두
  8. 벽체와 창호 — 꽃살문/아자살문
  9. 마루와 온돌 — 대청+안방+사랑방
- **퀴즈 3문제 추가** (기와집 모드): 공포, 합각, 사랑채
- **팩트 카드 9개 추가** (기와집 부품별 건축 상식)
- **업적 8개 추가**: 양반건축가, 사진가, 사계절건축가, 번개건축가, 재료수집가, 밤의대가, 산책자, 음악감상가

**[오디오 엔진]**
- BGM 시스템 (Web Audio API 펜타토닉 자동 생성)
  - 계절별 음색 변화 (겨울: 저음 sine, 가을: triangle)
  - 듀얼 보이스 (800~2000ms 간격 랜덤 노트)
  - 마스터 게인 연동 (음소거 시 BGM도 음소거)
- bgmTotalTime 추적 (5분 이상 시 업적)

**[비주얼 / 3D]**
- 기와집 9개 파트 3D 모델링:
  - 높은 기단: 3단 장대석 + 계단
  - 연꽃 주초석: TorusGeometry 장식
  - 원기둥: CylinderGeometry 16세그먼트 (배흘림)
  - 공포: 주두+소로+익공 3단 적층
  - 팔작지붕: BufferGeometry 삼각 합각 + 취두 ConeGeometry
  - 꽃살문: 대각선 격자 + 5열 수직바
- 4계절 비주얼:
  - 봄: 하늘색 #9DD5F5, 벚꽃 파티클 (5-petal ellipse)
  - 여름: 진한 파란 #5DADE2, 비 파티클 (수직 stroke)
  - 가을: 황금빛 #E8C47A, 낙엽 파티클 (quadraticCurve leaf)
  - 겨울: 회색빛 #C8D6E5, 눈 파티클 (원형), 땅 색상 흰색
- 워크스루: 카메라 반경 2.5m, Y=2.2m 1인칭 회전

**[데이터]**
- GIWAJIP_STEPS: 9개 단계, 각 2개 재료 선택지
- QUIZZES.giwajip: 3문제 (공포/합각/사랑채)
- FACTS: 9개 기와집 팩트 추가
- ACHIEVEMENTS: 8→16개 (신규 8개)

---

### 3차: 품질팀 검증

**코드 리뷰:**
- JavaScript 문법: Node.js `new Function()` 파싱 성공 (86,655자, 67 functions)
- HTML 태그 밸런스: div 78/78, button 26/26 (전부 OK)
- 중괄호 457/457, 소괄호 1567/1567, 대괄호 282/282 (전부 BALANCED)
- getElementById 44개 JS 참조 → HTML 49개 ID (누락 0)
- onclick 핸들러 20개 → 전부 JS에 정의됨 (누락 0)

**외부 리소스 감사:**
- 외부 URL: Three.js CDN (`cdnjs.cloudflare.com`)만 사용 (규칙 준수)
- Google Fonts/개인정보 URL: 0건

**버그 수정:**
- [FIX] startGame() buildGroup 정리 시 geometry/material dispose 누락 → 추가
- [FIX] resetGame() buildGroup 정리 시 동일 누락 → traverse+dispose 추가
- [FIX] SW가 Three.js CDN 프리캐시 안 함 → URLS에 CDN 추가
- [FIX] 미사용 변수 `controls`, `labelElements`, `achievementsEarned` 식별 (향후 제거 대상)

**성능 체크:**
- 날씨 파티클: cancelAnimationFrame으로 정리, stopWeather() 함수
- BGM: stopBGM()에서 모든 oscillator.stop() + 배열 정리
- 빌드 그룹: traverse dispose로 GPU 메모리 누수 방지
- 날씨 캔버스: 게임 리셋 시 display:none + clearRect

---

### 4차: 마무리

**파일 변경:**
- `index.html`: 2089줄 → 2699줄 (+610줄, +29%)
- `sw.js`: v2 → v3 (Three.js CDN 프리캐시 추가)
- `manifest.json`: 기와집 모드 반영 + shortcuts 추가
- `AUTO_REPORT.md`: v3.0 보고서 추가

**투입 요약:**
- 벤치마킹 (10%): The Sims/Home Design 3D/Minecraft 대비 10개 열위점
- 개발 (50%): BGM+계절+기와집9단계+사진+워크스루+업적16+퀴즈12+통계
- 품질 (30%): 구문검증+태그밸런스+ID참조+외부URL+메모리릭수정
- 마무리 (10%): 보고서+커밋

---

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

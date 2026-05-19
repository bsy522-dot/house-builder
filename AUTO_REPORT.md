# House Builder - AUTO 발전 보고서

## 2026-05-19 - v6.0 건축도감+역사연표+일일도전+마스터등급+퀴즈30+업적50 에디션

### 1차: 벤치마킹 / 분석

**경쟁앱 비교:**
- The Sims 4 (EA): 건축 모드 + 가구 카탈로그 + 갤러리 공유 + Undo/Redo + 일일 도전
- Home Design 3D (Anuman): 재질 라이브러리 + 2D↔3D + 다층 지원 + 건축 백과사전
- Minecraft Education: 건축 양식 학습 + 타임라인 + 도감 + 업적 시스템 + 등급

**v5.0 대비 열위점 (v6.0에서 해결):**
| # | 열위점 | v6.0 해결 |
|---|--------|----------|
| 1 | 건축 용어/기법 학습 콘텐츠 부재 | 건축 도감 30항목 (10카테고리 탭+검색+상세) |
| 2 | 건축 역사 콘텐츠 없음 | 한국 건축 역사 연표 BC6000~AD2020 20항목 |
| 3 | 일일 도전 없음 | 14종 일일 챌린지 (날짜시드, 연속기록, XP보상) |
| 4 | 등급/레벨 시스템 없음 | 마스터 등급 5단계 (견습→숙련→장인→대가→국보급) |
| 5 | 퀴즈 부족 (18문) | 30문으로 확대 (+12문, 모든 모드에 2문씩 추가) |
| 6 | 업적 부족 (32개) | 50개로 확대 (+18개 신규) |
| 7 | SFX 다양성 부족 | 6종 추가 (도감/일일완료/랭크업/연표/팁/undo) |
| 8 | 초보자 가이드 없음 | 건축 팁 가이드 10개 |
| 9 | SEO 메타태그 부족 | keywords/author/robots/canonical/og:image 추가 |
| 10 | 키보드 단축키 부족 | 5종 추가 (E=도감, D=일일도전, L=연표, G=팁, ?=도움말) |

**v5.0 대비 우위점 (유지):**
- 한국 전통 건축 특화 교육 (타 앱에 없음)
- 6가지 건축 모드 (한옥/기와집/초가집/서원/정자/현대주택)
- 4계절 시스템 + BGM + 사진모드 + 워크스루
- 세이브 슬롯 3개 + 공유 카드 + 타임라인
- PWA 오프라인 지원

---

### 2차: 개발팀 전체 투입

**[프론트엔드 / UI-UX]**
- 건축 도감 풀스크린 패널: 10카테고리 탭 필터 + 실시간 검색 + 카드 확장/접기
- 역사 연표 인터랙티브 타임라인: 왼쪽 라인+도트 디자인, 호버 하이라이트
- 일일 도전 패널: 도전 카드 + 진행률 바 + 7일 연속 기록 도트 표시
- 건축 팁 패널: 넘버링 카드 10장, 클릭 시 읽음 추적
- 마스터 등급 배지: 좌상단 고정, XP 바 + 등급 아이콘 + 클릭→통계
- 모드 선택 화면: 하단에 도감/일일도전/연표/팁 퀵 액션 4종 버튼
- 정자 모드 카드 자동 삽입 (v5 미반영 시 보완)
- 다크/라이트 모드 도감 대응 CSS
- 모바일 반응형: 등급 배지 하단 배치 @media(max-width:768px)

**[백엔드 / 게임 로직]**
- XP 계산 엔진: 완성50+업적15+재료3+사진5+팩트2+퀴즈8+연속도전20
- 등급 시스템: 5단계 자동 판정 (0/100/300/600/1000 XP)
- 일일 도전 엔진: 날짜시드 기반 14종 로테이션 + 자동 완료 판정
- 일일 연속 기록: localStorage 히스토리 + 스트릭 카운터
- Function hooking: afterBuild/answerQuiz/startGame/resetGame 4개 함수 래핑
- 퀴즈 정답 누적 추적 (d.quizCorrect)
- 건축 횟수 누적 추적 (d.buildCount)
- 도감 열람 추적 (d.encycViewed)
- 연표 열람 추적 (d.timelineViews)
- SEO 동적 주입: meta 5개 + canonical 링크

**[콘텐츠 제작]**
- **건축 도감 30항목 직접 집필:**
  - 구조(5): 기단, 주초석, 기둥, 보, 도리
  - 지붕(4): 서까래, 기와, 팔작지붕, 초가지붕
  - 난방(2): 온돌, 아궁이
  - 공간(4): 대청마루, 창호, 사랑채, 안채
  - 장식(3): 단청, 잡상, 용마루
  - 교육(3): 서원, 정자, 향교
  - 기법(4): 결구법, 심벽, 배흘림, 귀솟음
  - 근현대(3): 한옥마을, 한옥 신축, K-건축
  - 재료(2): 화강석, 소나무

- **역사 연표 20항목 직접 집필:**
  BC6000 빗살무늬토기 움집 ~ AD2020 신한옥과 K-건축

- **일일 도전 14종 설계:**
  모드별 완성, 스피드 클리어, 밤/겨울/봄 건축, 사진, 퀴즈, BGM, 재료 탐험 등

- **건축 팁 가이드 10개 집필:**
  재료 선택, 계절 변화, 밤낮 전환, 워크스루, 사진 팁, 키보드, 비교, 세이브, 업적, 건축순서

- **퀴즈 12문 추가 (18→30):**
  한옥+2(결구법,배흘림), 현대+2(온돌유래,이중유리), 초가+2(아궁이,짚벽), 기와+2(잡상,공포), 서원+2(전학후묘,유네스코)

- **업적 18개 추가 (32→50):**
  건축학도, 건축박사, 일일도전시작, 일주일연속, 장인등극, 대가등극, 국보급명장, 역사탐험가, 건축지식인, 경험치500, 사진작가, 사계육관왕, 초음속건축, 퀴즈30문, 야행성건축왕, 재료만물상, 20회건축, 풍류객

**[오디오 엔진]**
- Web Audio SFX 6종 추가:
  1. encyclopedia: 도감 열기 (660→880Hz triangle)
  2. daily_complete: 일일도전 완료 (C-E-G-C' 상승 코드)
  3. rank_up: 등급 상승 (C-E-G-C'-E' 5음 팡파레)
  4. timeline: 연표 스크롤 (440→550Hz sine)
  5. tip: 팁 확인 (1200→1400Hz triangle)
  6. undo: 되돌리기 (400→300Hz sawtooth)

**[비주얼]**
- 등급 배지: 아이콘+이름+XP바 그래디언트 (등급별 색상 변화)
- 연표 디자인: 좌측 라인+도트+카드 레이아웃
- 도감 카드: 아이콘+카테고리 필+확장 상세

---

### 3차: 품질팀 검증

**[코드 리뷰]**
- v6_patch.js: 747줄, 47KB, 20개 함수 — JS 문법 PASS (node -c)
- v5_patch.js: 기존 코드 손대지 않음 — JS 문법 PASS
- sw.js: v5→v6 캐시 업데이트 — JS 문법 PASS
- manifest.json: v6.0 설명 갱신 — JSON PASS

**[UI 검증]**
- HTML div 태그 균형: 106/106 BALANCED
- 모바일 반응형: @media(max-width:768px) 등급배지 위치 조정
- 다크/라이트 모드: 도감 카드 색상 대응 CSS 포함
- 키보드 접근성: Escape로 모든 패널 닫기 지원

**[보안/규칙 검증]**
- 외부 CDN: Three.js만 사용 (규칙 준수) — CDN 0건 (v6_patch.js)
- 개인정보: 0건
- HTML entities: 기존 따옴표 인코딩 유지
- 파일 삭제: 0건

**[성능]**
- v6_patch.js: 47KB (전용 패치, SW 주입)
- 데이터 로드: 도감30+연표20+도전14+팁10 = 모두 인라인 (추가 fetch 0건)
- localStorage: 기존 키 재사용, 신규 필드 추가만

---

### 4차: 마무리

**변경 파일:**
- `v6_patch.js`: 신규 (747줄 47KB, 20함수, 자기완결형 패치 모듈)
- `sw.js`: v5→v6 (v6_patch.js PRECACHE + 주입)
- `index.html`: v6.0 (SEO title/desc/keywords + v6_patch.js 스크립트)
- `manifest.json`: v6.0 설명 갱신 + shortcuts에 도감/연표 추가
- `AUTO_REPORT.md`: v6.0 보고서 추가

**v5.0→v6.0 총 변화:**
- 건축 도감: 0→30항목
- 역사 연표: 0→20항목
- 일일 도전: 0→14종
- 마스터 등급: 0→5단계
- 건축 팁: 0→10개
- 퀴즈: 18→30문 (+12)
- 업적: 32→50개 (+18)
- SFX: +6종
- 키보드 단축키: +5종 (E/D/L/G/?)

## 2026-05-13 - v5.0 정자 모드 + 세이브슬롯 + 공유카드 에디션

### 1차: 벤치마킹 / 분석

**경쟁앱 비교:**
- The Sims 4 (EA): Room Tool, 세이브 슬롯 다수, Undo/Redo, Gallery 공유, 가구 카탈로그
- Home Design 3D (Anuman): 2D↔3D 전환, 재질 라이브러리, 다층 지원, 공유 기능
- Minecraft Education: 건축 양식 학습, 카메라/포트폴리오, 타임라인 추적

**v4.0 대비 열위점 (v5.0에서 해결):**
| # | 열위점 | v5.0 해결 |
|---|--------|----------|
| 1 | 건축 모드 5종만 | 6번째 모드: 정자(亭子) 8단계 추가 |
| 2 | 세이브 슬롯 없음 (CSS만 존재) | 3슬롯 세이브 시스템 + 내보내기/가져오기 |
| 3 | 건축 완성 공유 불가 | Canvas 기반 공유 카드 생성 + PNG 다운로드 |
| 4 | 건축 진행 시각화 없음 | 타임라인 위젯 (사이드 패널 내) |
| 5 | SEO 메타태그 부재 | OG/Twitter/JSON-LD 동적 주입 |
| 6 | 접근성 부족 | Skip-to-content 링크 + ARIA roles 5개 오버레이 |
| 7 | 업적 24개 | 32개로 확대 (+8 신규) |
| 8 | 퀴즈 15문 | 18문으로 확대 (정자 3문) |
| 9 | master_builder 불일치 | all_six로 6모드 완성 업적 추가 |
| 10 | </html> 태그 누락 | SW 자동 보정 |

**v4.0 대비 우위점 (유지):**
- 한국 전통 건축 특화 교육 (타 앱에 없음)
- 단계별 건축 과정 학습 + 재료 선택 역사 이해
- 4계절 시스템 + BGM + 사진모드 + 워크스루
- 6가지 건축 모드 (한옥/기와집/초가집/서원/정자/현대주택)
- PWA 오프라인 지원

---

### 2차: 개발팀 전체 투입

**[프론트엔드 / UI-UX]**
- 정자 모드 카드: 녹색 글로우 `.jeongja-card` (gradient border)
- 세이브 슬롯 패널: 3슬롯 UI + 저장/불러오기/삭제 버튼
- 공유 카드 오버레이: Canvas 3D 스크린샷 + 통계 4종 + PNG 다운로드
- 건축 타임라인: 사이드 패널 내 실시간 진행 바 + 소요시간
- Skip-to-content 접근성 링크 (Tab 포커스 시 표시)
- ARIA roles: 5개 오버레이에 dialog/aria-modal 추가
- 💾 플로팅 버튼 (세이브 슬롯)
- 📤 공유 버튼 (완성 오버레이 내)
- 키보드 힌트: S(세이브) 단축키 추가
- 반응형: 세이브 패널/버튼 모바일 대응

**[백엔드 / 게임 로직]**
- `buildJeongjaPart()` 3D 빌더: 8개 파트 switch-case
  - 팔각 기단+초석, 원기둥 8개, 계자난간/평난간, 우물마루, 팔각/육각 지붕, 단청, 연못+돌다리+연잎, 현판+조경+석등
- SW 패치 주입 시스템: `v5_patch.js`를 SW가 HTML의 같은 스크립트 스코프에 주입
- Function hooking: startGame/buildStep/afterBuild/updateProgressBadge/toggleCompare/showFact 6개 함수 래핑
- 세이브 슬롯: 3개 localStorage 슬롯 + JSON 내보내기/가져오기
- 공유 카드: Canvas API로 3D 렌더러 스크린샷 캡처
- 타임라인: 각 단계 소요시간 추적 + 실시간 시각화
- SEO 동적 주입: meta 태그 7개 + JSON-LD WebApplication 스키마
- 팩트 카운트 추적: showFact 래핑으로 factsShown 카운터

**[콘텐츠 제작]**
- **정자(亭子) 8단계 신규:**
  1. 기단과 초석 — 화강석/자연석 팔각 기단
  2. 기둥 세우기 — 소나무/느티나무 원기둥 8개
  3. 난간 설치 — 계자난간/평난간 (입구 제외 7면)
  4. 마루 깔기 — 소나무/대나무 우물마루
  5. 지붕 올리기 — 팔각/육각 기와지붕 + 보주
  6. 단청 칠하기 — 오방색/긋기단청 (기둥+처마)
  7. 연못과 돌다리 — 원형/곡선 연못 + 난간 다리 + 연잎
  8. 현판과 조경 — 초서/해서체 현판 + 소나무 6그루 + 석등
- **퀴즈 3문제**: 정자 구조, 건립 위치, 보주 장식
- **팩트 카드 8개**: 기단, 원주, 계자난간, 우물마루, 팔각정, 단청, 방지원도, 현판
- **업적 8개 추가**: 정자건축가, 육관왕, 퀴즈달인, 지식수집가, 야간건축왕, 전설의건축가, 총괄달인, 자랑쟁이

**[오디오 엔진]**
- 기존 BGM/SFX 시스템 정자 모드에 자동 적용
- 계절별 음색 변화 정자에도 적용

**[비주얼 / 3D]**
- 정자 8파트 Three.js 프리미티브 모델:
  - 팔각 기단: CylinderGeometry(8각) + 3단 계단
  - 원기둥 8개: CylinderGeometry(12세그먼트) 배흘림
  - 난간: BoxGeometry 상하단 + 수직 바 (7면, 입구 제외)
  - 우물마루: CylinderGeometry(8각) + 마루선 7줄
  - 지붕: ConeGeometry(8/6각) + 이중 처마 + SphereGeometry 보주
  - 단청: CylinderGeometry 색띠 + 처마 색대
  - 연못: CylinderGeometry + TorusGeometry 테두리 + BoxGeometry 다리 + CircleGeometry 연잎 5장
  - 조경: 소나무 6그루(Cylinder+Sphere) + 석등(Cylinder+Cone)

**[데이터]**
- JEONGJA_STEPS: 8단계, 각 2개 재료 선택지
- QUIZZES.jeongja: 3문제
- FACTS: 8개 정자 팩트 추가
- ACHIEVEMENTS: 24→32개 (8개 추가)
- 비교 데이터: 6모드 × 6항목 비교표 (정자 추가)

---

### 3차: 품질팀 검증

**코드 리뷰:**
- v5_patch.js JavaScript 문법: `new Function()` 파싱 성공 (29,893자, 621줄)
- 이중 실행 방지: `window.__hbV5` 가드 적용
- Function hooking 안전성: 원본 함수 참조 보존 후 래핑
- ACHIEVEMENTS/QUIZZES/FACTS 객체 직접 확장 (기존 데이터 보존)

**외부 리소스 감사:**
- 외부 URL: Three.js CDN만 사용 (규칙 준수)
- 위반 CDN: 0건
- 개인정보: 0건

**신규 기능 체크리스트 (16/16 PASS):**
- JEONGJA_STEPS 8단계 ✓ | buildJeongjaPart 8 cases ✓
- 모드 카드 DOM 주입 ✓ | startGame hook ✓ | buildStep hook ✓
- afterBuild hook ✓ | complete_jeongja 업적 ✓ | all_six 업적 ✓
- 세이브 슬롯 3개 ✓ | 내보내기/가져오기 ✓ | 공유 카드 ✓
- 타임라인 위젯 ✓ | SEO 메타태그 ✓ | JSON-LD ✓
- Skip-to-content ✓ | ARIA roles ✓

**SW 주입 검증:**
- v5_patch.js를 마지막 `</script>` 앞에 주입 → 같은 스코프 확인
- 캐시 v4 → v5 자동 전환 (activate에서 구 캐시 삭제)
- `</html>` 누락 자동 보정

**성능 체크:**
- 정자 3D 모델: 최대 약 80개 메쉬 (기존 모드와 유사)
- 타임라인: DOM 업데이트만 (렌더링 부하 없음)
- 세이브 슬롯: localStorage 사용 (네트워크 없음)
- 공유 카드: setTimeout 100ms 후 Canvas 렌더 (비동기)

---

### 4차: 마무리

**파일 변경:**
- `v5_patch.js`: 신규 (621줄, 29,893자) — SW에 의해 index.html에 주입
- `sw.js`: v4 → v5 (91줄) — v5_patch.js 캐싱 + HTML 주입 로직
- `manifest.json`: 6모드 반영 + 정자 shortcut 추가
- `AUTO_REPORT.md`: v5.0 보고서 추가

**투입 요약:**
- 벤치마킹 (10%): The Sims/Home Design 3D/Minecraft 대비 10개 열위점
- 개발 (50%): 정자8단계+세이브슬롯+공유카드+타임라인+SEO+접근성+업적8+퀴즈3+팩트8
- 품질 (30%): 문법검증+기능체크+SW주입검증+성능체크+CDN감사
- 마무리 (10%): 보고서+커밋

---

## 2026-05-09 - v4.0 서원 모드 + 다크/라이트 + 비교 모달 에디션

### 1차: 벤치마킹 / 분석

**경쟁앱 비교:**
- The Sims 4 (EA): Room Tool, 지붕 다양성, Undo/Redo, 가구 카탈로그, Gallery 공유
- Home Design 3D (Anuman): 2D↔3D 전환, 드래그 가구, 재질 라이브러리, 다층 지원
- Minecraft Education: 건축 양식 학습, 카메라/포트폴리오, 구역 설정

**v3.0 대비 열위점 (v4.0에서 해결):**
| # | 열위점 | v4.0 해결 |
|---|--------|----------|
| 1 | 건축 모드 4종만 | 5번째 모드: 서원(書院) 8단계 추가 |
| 2 | 다크 테마만 존재 | 다크/라이트 모드 토글 (CSS변수+localStorage) |
| 3 | 비교 기능이 alert() | 모달 기반 비교 UI (5모드별 6항목 표) |
| 4 | 업적 16개 | 24개로 확대 (+8 신규) |
| 5 | 퀴즈 12문제 | 15문제로 확대 (서원 3문제) |
| 6 | 접근성 부족 | ARIA labels 전 버튼 적용 |
| 7 | 키보드 단축키 부족 | T(테마), C(비교) 추가 |
| 8 | 날씨 캔버스 리사이즈 안됨 | onResize에서 weatherCanvas 리사이즈 |
| 9 | 서원/유교 건축 교육 없음 | 서원 퀴즈3+팩트8+3D모델 |
| 10 | 유네스코 세계유산 연계 없음 | 서원 팩트에 유네스코 9곳 등재 정보 |

**v3.0 대비 우위점 (유지):**
- 한국 전통 건축 특화 교육 (타 앱에 없음)
- 단계별 건축 과정 학습 + 재료 선택 역사 이해
- 4계절 시스템 + BGM + 사진모드 + 워크스루
- PWA 오프라인 지원

---

### 2차: 개발팀 전체 투입

**[프론트엔드 / UI-UX]**
- 다크/라이트 모드: CSS custom properties 기반 테마 전환
  - `:root` + `body.light-mode` 오버라이드
  - topBar, sidePanel, mode-card, descBox, mat-btn, float-btn 전부 테마 적용
  - localStorage 저장/복원
- 비교 모달: `#compareModal` 글래스모피즘 오버레이
  - 5모드별 6행 비교표 (항목/전통/현대)
  - alert() 완전 제거 → 모달 전환
- 서원 모드 카드: 파란색 글로우 `.seowon-card`
- ARIA labels: 7개 플로팅 버튼 전부 `aria-label` 추가
- 키보드 힌트: `T` 테마, `C` 비교 추가
- btnTheme 플로팅 버튼 추가 (🌓/☀️)

**[백엔드 / 게임 로직]**
- `buildSeowonPart()` 3D 빌더: 8개 파트 switch-case
  - 기단+계단, 외삼문+담장, 동재/서재, 강당기둥, 강당지붕, 사당, 정원+연못, 현판+석등
- `startGame()`: 서원 모드 분기 추가 (SEOWON_STEPS)
- `afterBuild()`: 서원 업적/타이틀/메시지 추가
- `checkMasterBuilder()`: 5종 완성 `all_five` 업적
- `toggleTheme()`: 다크↔라이트 토글 + localStorage
- `toggleCompare()`: 모달 기반 비교 + 사용횟수 추적 + `compare_scholar` 업적
- `onResize()`: weatherCanvas 리사이즈 버그 수정
- 키보드: T(테마), C(비교) 단축키

**[콘텐츠 제작]**
- **서원(書院) 8단계 신규:**
  1. 기단과 계단 — 화강석/자연석
  2. 담장과 외삼문 — 토담/돌담
  3. 동재와 서재 — 소나무/참나무
  4. 강당 기둥 — 소나무원주/느티나무원주
  5. 강당 지붕 — 회색기와/청기와
  6. 사당 — 단청사당/소박한사당
  7. 정원과 연못 — 네모연못/자연연못
  8. 현판과 마무리 — 해서체/초서체
- **퀴즈 3문제**: 동재/서재, 최초 서원(소수서원), 사당
- **팩트 카드 8개**: 풍수, 외삼문, 유생 생활, 강학, 단청, 석전제, 관란, 유네스코
- **업적 8개 추가**: 서원건축가, 오관왕, 만점학자, 재료달인, 초고속건축가, 사진달인, 비교학자, 사계절달인

**[오디오 엔진]**
- 기존 BGM/SFX 시스템 유지 (서원 모드에서도 동일 적용)
- 계절별 음색 변화 서원에도 적용

**[비주얼 / 3D]**
- 서원 8파트 Three.js 프리미티브 모델:
  - 외삼문: 3칸 문 + 기와지붕 + 양쪽 담장
  - 동재/서재: 대칭 배치 기숙사 (좌우 반전)
  - 강당: 6기둥 + 마루 + 팔작지붕 처마
  - 사당: 후방 고지대 배치 + 4기둥 + 흰 벽체
  - 정원: 사각 연못 + 4그루 소나무
  - 석등: 육각 기둥 + 구형 조명

**[데이터]**
- SEOWON_STEPS: 8단계, 각 2개 재료 선택지
- QUIZZES.seowon: 3문제
- FACTS: 8개 서원 팩트 추가
- ACHIEVEMENTS: 16→24개 (8개 추가)
- 비교 데이터: 5모드 × 6항목 비교표

---

### 3차: 품질팀 검증

**코드 리뷰:**
- JavaScript 문법: `new Function()` 파싱 성공 (98,539자, 70 functions)
- HTML 태그 밸런스: div 106/106, button 28/28 (전부 OK)
- 중괄호/소괄호/대괄호: 전부 BALANCED
- getElementById 48개 JS 참조 → HTML 53개 ID (누락 0)
- onclick 핸들러 22개 → 전부 JS에 정의됨 (누락 0)

**외부 리소스 감사:**
- 외부 URL 3개: Three.js CDN, W3C SVG namespace (모두 규칙 준수)
- 위반 CDN: 0건
- 개인정보: 0건

**신규 기능 체크리스트 (12/12 PASS):**
- SEOWON_STEPS ✓ | buildSeowonPart ✓ | toggleTheme ✓ | closeCompare ✓
- compareModal ✓ | btnTheme ✓ | seowon card ✓ | light-mode CSS ✓
- ARIA labels ✓ | seowon quizzes ✓ | complete_seowon ✓ | all_five ✓

**버그 수정:**
- [FIX] toggleCompare() alert() → 모달 전환
- [FIX] weatherCanvas 리사이즈 누락 → onResize에 추가
- [FIX] gameMode 주석 업데이트 (giwajip/seowon 추가)

---

### 4차: 마무리

**파일 변경:**
- `index.html`: 2698줄 → 3004줄 (+306줄, +11%), 121KB → 139KB (+15%)
- `sw.js`: v3 → v4 (Network-first HTML 전략 추가)
- `manifest.json`: 서원 모드 + 설명 업데이트
- `AUTO_REPORT.md`: v4.0 보고서 추가

**투입 요약:**
- 벤치마킹 (10%): The Sims/Home Design 3D/Minecraft 대비 10개 열위점
- 개발 (50%): 서원모드+다크라이트+비교모달+업적+퀴즈+접근성+버그수정
- 품질 (30%): 문법/태그/ID/핸들러/CDN/기능 검증 (전체 PASS)
- 마무리 (10%): 보고서+커밋

---

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

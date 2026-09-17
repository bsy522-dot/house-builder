"""Run: python tests/achievements_smoke.py URL OUTPUT_JSON [--interact]. Requires Playwright."""
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

url, output = sys.argv[1:3]
report = {"url": url, "visits": []}
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1920, "height": 1600})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append({"message": error.message, "stack": error.stack}))
    for visit in ('fresh', 'reload'):
        errors.clear()
        page.goto(url, wait_until='networkidle')
        page.wait_for_timeout(1200)
        result = page.evaluate('''() => ({
            achievements: Object.keys(ACHIEVEMENTS).length,
            v6Achievement: !!ACHIEVEMENTS.encyclopedia_5,
            v6Menu: !!document.getElementById('v6MenuBtns'),
            controlled: !!navigator.serviceWorker.controller,
            scripts: [...document.scripts].filter(s => s.src).map(s => s.src)
        })''')
        if '--interact' in sys.argv:
            page.locator('#v6MenuBtns button').first.click()
            page.wait_for_function("document.getElementById('v6EncycPanel').classList.contains('active')")
            page.evaluate('v6CloseEncyc()')
            page.locator('.mode-card').first.click()
            if page.locator('#tutorial').is_visible():
                page.locator('#tutorial .tut-next').click()
            page.locator('#buildBtn').click()
            page.wait_for_timeout(2000)
            result['firstBuildEarned'] = page.evaluate("!!loadProgress().achievements.first_build")
        result['visit'] = visit
        result['errors'] = list(errors)
        report['visits'].append(result)
    browser.close()
Path(output).write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=True, indent=2))
assert all(not v['errors'] and v['v6Achievement'] and v['v6Menu'] for v in report['visits']), 'ACHIEVEMENTS initialization regression'
if '--interact' in sys.argv:
    assert all(v['firstBuildEarned'] for v in report['visits'])

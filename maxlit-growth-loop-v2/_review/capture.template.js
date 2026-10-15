/* Review capture: same states for the original and v2.
   Generated per run by _review/capture.sh (BASE / OUT substituted). */
async page => {
  const BASE = '__BASE__', OUT = '__OUT__';
  const sizes = [[375, 812], [768, 1024], [1440, 900]];
  const settle = ms => page.waitForTimeout(ms);
  const section = async name => {
    const el = await page.$('#s-growth-loop');
    await el.screenshot({ path: OUT + '/' + name + '.png', animations: 'disabled' });
  };
  const view = async name => page.screenshot({ path: OUT + '/' + name + '.png', animations: 'disabled' });
  const log = [];
  for (const [w, h] of sizes) {
    await page.setViewportSize({ width: w, height: h });
    await page.goto(BASE + '?cap=' + Date.now(), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await settle(400);
    await section(w + '-1-default');

    /* a selected stage: 04 WINN (the longest description) */
    await page.locator('.node').nth(3).click();
    await settle(700);
    await section(w + '-2-stage04');

    /* Tier 2 & 3 view, then open stage 02 */
    await page.locator('[data-tier="23"]').click();
    await settle(500);
    await page.locator('.node').nth(1).click();
    await settle(700);
    await section(w + '-3-tier23');

    /* step screenshot dialog: first step of the open stage */
    const step = page.locator('.step__btn').first();
    await step.scrollIntoViewIfNeeded();
    await step.click();
    await settle(900);
    await view(w + '-4-shot');
    await page.keyboard.press('Escape');
    await settle(400);

    /* video dialog */
    const vid = page.locator('#vidOpen');
    await vid.scrollIntoViewIfNeeded();
    await vid.click();
    await settle(2500);
    await view(w + '-5-video');
    await page.keyboard.press('Escape');
    await settle(300);
    log.push(w + ' ok');
  }
  return log.join(', ');
}

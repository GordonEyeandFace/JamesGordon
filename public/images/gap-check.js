const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);

    const bounds = await page.evaluate(() => {
        const heroWrapper = document.querySelector('main > div:nth-child(2)');
        const heroImg = heroWrapper?.querySelector('div');
        const glassFrame = heroWrapper?.querySelector('.isolate');
        return {
            heroImgBottom: heroImg?.getBoundingClientRect().bottom,
            redBoxTop: glassFrame?.getBoundingClientRect().top,
            redBoxBottom: glassFrame?.getBoundingClientRect().bottom,
            redBoxCenter: glassFrame ? (glassFrame.getBoundingClientRect().top + glassFrame.getBoundingClientRect().bottom) / 2 : 0,
        };
    });
    console.log('Hero image bottom:', bounds.heroImgBottom);
    console.log('Red box top:', bounds.redBoxTop);
    console.log('Red box bottom:', bounds.redBoxBottom);
    console.log('Red box center:', bounds.redBoxCenter);
    console.log('Offset from hero bottom:', Math.round(bounds.redBoxCenter - bounds.heroImgBottom), 'px');

    await page.screenshot({
        path: '/mnt/d/Projects/personal/gordon-aistudio-draft/screenshots/redbox-centered.png',
        clip: { x: 0, y: bounds.heroImgBottom - 200, width: 1440, height: 500 }
    });

    console.log('Done');
    await browser.close();
})();

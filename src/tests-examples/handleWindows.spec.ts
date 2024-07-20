import {test} from "@playwright/test";

const url = 'https://freelance-learn-automation.vercel.app/login'

test('should be able to handle multiple tabs', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator("(//a[contains(@href,'facebook')])[1]").click(),
        ]
    );
    await newPage.locator("(//input[@name='email'])[2]").fill('Johny Bravo');
    await newPage.waitForTimeout(3000);
    await newPage.close();
    await page.locator('#email1').fill('Johny Bravo');
    await page.waitForTimeout(5000);
});
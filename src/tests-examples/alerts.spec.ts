import {expect, test} from "@playwright/test";

const url = "https://the-internet.herokuapp.com/javascript_alerts";

test('should be able to handle alert', async ({ page }) => {
    await page.goto(url);
    await page.locator("//button[text()='Click for JS Alert']").click();

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toMatch('I am a JS Alert');
        await dialog.accept();
    })
});

test('should be able to handle confirm alert', async ({ page }) => {
    await page.goto(url);
    await page.locator("//button[text()='Click for JS Confirm']").click();

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toMatch('I am a JS Confirm');
        await dialog.dismiss();
    })
});

test('should be able to handle prompt alert', async ({ page }) => {
    await page.goto(url);

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toMatch('I am a JS prompt');
        const message = await dialog.accept('Rohit Sharma');
    });

    await page.locator("//button[text()='Click for JS Prompt']").click();
    await page.waitForTimeout(3000);
});
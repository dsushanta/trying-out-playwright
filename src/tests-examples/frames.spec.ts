import {test} from "@playwright/test";

const url = 'https://docs.oracle.com/javase/8/docs/api/'

test('should be able to handle frames', async ({ page }) => {
    await page.goto(url);

    const frameLocator = await page.frameLocator("//frame[@name='packageListFrame']");
    await frameLocator.locator("//a[text()='java.applet']").click();
});
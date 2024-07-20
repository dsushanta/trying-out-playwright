import {expect, test} from "@playwright/test";

const url = 'https://freelance-learn-automation.vercel.app/login'

test('should be able to work with load state', async ({ page }) => {
    await page.goto(url);
    await page.getByText("New user? Signup").click();
    await page.waitForLoadState('networkidle');
    const count = await page.locator("//input[@type='checkbox']").count();
    expect(count).toBe(9);
});
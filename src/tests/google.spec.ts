import { test, expect } from '@playwright/test'

test('verify application title', async ({ page }) => {
    await page.goto("https://google.com");
    const url = page.url();
    const title = await page.title();
    await expect(page).toHaveTitle('Google');
});
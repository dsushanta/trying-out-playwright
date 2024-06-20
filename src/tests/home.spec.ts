import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.imdb.com/');
    await page.getByPlaceholder('Search IMDb').fill('friends');
    await page.getByRole('link', { name: 'Friends Friends 1994 Jennifer' }).click();
    await page.getByTestId('atf-wrapper-bg').getByRole('button', { name: '​David Crane' }).click();
});
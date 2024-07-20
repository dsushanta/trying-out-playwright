import {expect, test} from "@playwright/test";
import {performKeyboardOperationNtimes} from "./commonUtils";

test('should be able to search using Enter', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.locator("textarea[name='q']").fill('Books');
    // await page.keyboard.press('Enter');
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');
});

test('should be able to copy, delete, re-enter and search', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.locator("textarea[name='q']").fill('Books');
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Meta+C');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Meta+V');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
});

test('should be able to search using Enter - another way', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.locator("textarea[name='q']").focus();
    await page.keyboard.type('English Premier league');
    // await page.keyboard.press('Enter');
    // await page.locator("textarea[name='q']").focus();

    await page.waitForTimeout(3000);

    await performKeyboardOperationNtimes(page, 'ArrowLeft', 15);
    await page.keyboard.down('Shift');
    await performKeyboardOperationNtimes(page, 'ArrowLeft', 15);
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');

    await page.waitForTimeout(3000);

    await page.keyboard.type('Indian');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);
});


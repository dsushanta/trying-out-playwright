import {expect, test} from "@playwright/test";

test('should be able to upload file', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('birthday.jpg');
    await page.locator('#file-submit').click();
    expect(await page.locator('//h3')).toContainText('File Uploaded!')
});
import {expect, test} from "@playwright/test";
import {LoginPage} from "../../pages/loginPage";
import {HomePage} from "../../pages/homePage";
import path from "path";

const url = 'https://freelance-learn-automation.vercel.app/login';
const baselineDir = path.resolve(__dirname, '../../resources/screenshots/baseline');
const actualDir = path.resolve(__dirname, '../../resources/screenshots/actual');

// test.beforeEach(async ({ page }) => {
//     await page.goto(url, {waitUntil: "networkidle"});
// })
//
// test('login page visual should match', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.enterCredentials('admin@email.com', 'admin@123');
//     await expect(page)
//         .toHaveScreenshot({});
// });
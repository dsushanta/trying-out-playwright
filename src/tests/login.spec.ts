import {LoginPage} from '../pages/loginPage';
import {HomePage} from '../pages/homePage';
import {expect, test} from "../fixtures/loginFixtures";
import percySnapshot from "@percy/playwright";
import path from "node:path";
import fs from "node:fs";

const appConfigPath = path.resolve(__dirname, '../../resources/appConfig.json');
const appConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf-8'));
const url = appConfig.baseUrl;
const testDataPath = path.resolve(__dirname, '../../resources/testData.json');
const testData: { login: LoginTestData[] } = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

test.beforeEach(async ({ page }) => {
    await page.goto(url, {waitUntil: "networkidle"});
})

test(
    'should be able to login',
    {tag: ['@smoke', '@regression']},
    async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    const username = appConfig.username;
    const password = appConfig.password;

    await loginPage.enterCredentials(username, password);
    await percySnapshot(page, 'login', { percyCSS: `#user-name { visibility: hidden; }`});
    await loginPage.submitCredentials();
    await percySnapshot(page, 'home');
    const shoppingCartLink = homePage.getShoppingCartLink();
    await expect(shoppingCartLink).toBeVisible();
});

test.describe.parallel('Login Tests with all data sets', () => {
    testData.login.forEach(({ id, username, password, status, errorMessage}) => {
        test(`should handle login for ${id}`,
            {tag: ['@regression', '@negative']},
            async ({ page }) => {
            const loginPage = new LoginPage(page);
            const homePage = new HomePage(page);
            await loginPage.loginToApplication(username, password);

            if(status === 'success') {
                const shoppingCartLink = homePage.getShoppingCartLink();
                await expect(shoppingCartLink).toBeVisible();
            } else {
                const actualErrorMessage = await loginPage.getErrorMessage();
                expect(actualErrorMessage).toContain(errorMessage);
            }
        });
    });
});
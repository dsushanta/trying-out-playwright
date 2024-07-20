// import {test} from '../utils/percy.helper';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
// import percySnapshot from "@percy/playwright";
import {test, expect} from "@playwright/test";
import percySnapshot from "@percy/playwright";

const url = 'https://freelance-learn-automation.vercel.app/login';

test.beforeEach(async ({ page }) => {
    await page.goto(url, {waitUntil: "networkidle"});
})

test('should be able to login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    // await loginPage.loginToApplication('admin@email.com', 'admin@123')
    //     .then(() => homePage.getManageOption())
    //     .then(manageOption => expect(manageOption).toBeVisible())
    //     .then(() => homePage.logoutFromApplication())
    //     .then(() => expect(loginPage.getSignInHeader()).toBeVisible());

    // await loginPage.loginToApplication('admin@email.com', 'admin@123');

    await loginPage.enterCredentials('admin@email.com', 'admin@123');
    await percySnapshot(page, 'login', { percyCSS: `input#email1 { visibility: hidden; }`});
    await loginPage.submitCredentials();
    // await percySnapshot(page, 'home');
    const manageOption = homePage.getManageOption();
    await percySnapshot(page,'home');
    await expect(manageOption).toBeVisible();
    await homePage.logoutFromApplication();
    await expect(loginPage.getSignInHeader()).toBeVisible();
})
import {expect, test} from "../fixtures/authFixtures";
import {LoginPage} from "../pages/loginPage";
import {HomePage} from "../pages/homePage";
import percySnapshot from "@percy/playwright";


test('should be able to logout',
    {tag: ['@regression']},
    async ({ authPage }) => {

        const loginPage = new LoginPage(authPage);
        const homePage = new HomePage(authPage);

        const shoppingCartLink = homePage.getShoppingCartLink();
        await percySnapshot(authPage,'home');
        await expect(shoppingCartLink).toBeVisible();
        await homePage.logoutFromApplication();
        await expect(loginPage.getSignInHeader()).toBeVisible();
    });
import {BrowserContext} from "playwright";
import {Page} from "@playwright/test";
import {test as base} from "@playwright/test";
import path from "node:path";
import * as fs from "node:fs";
import {LoginPage} from "../pages/loginPage";

const appConfigPath = path.resolve(__dirname, '../../resources/appConfig.json');
const appConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf-8'));

type AuthFixtures = {
  authContext: BrowserContext;
  authPage: Page
};

export const test = base.extend<AuthFixtures>({
    authContext: async ({browser}, use) => {
        const context = await browser.newContext();
        await use(context);
        await context.close();
    },
    authPage: async ({authContext}, use) => {
        const page = await authContext.newPage();
        const loginPage = new LoginPage(page);
        await page.goto(appConfig.baseUrl);
        await loginPage.loginToApplication(appConfig.username, appConfig.password);
        await use(page);
        await page.close();
    }
});

export const expect = test.expect;
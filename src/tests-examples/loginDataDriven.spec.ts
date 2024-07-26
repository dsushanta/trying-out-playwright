import {expect, test} from "@playwright/test";

import testData from '../../resources/testData.json';

const url = 'https://freelance-learn-automation.vercel.app/login'
const jsonData = JSON.parse(JSON.stringify(testData));

test.describe("Data driven login test", () => {
   for (const data of jsonData) {
       test.describe(`Login Tests with ${data.id}`, () => {
           test("should be able to login with credentials from a json file", async ({page}) => {
               await page.goto(url);
               await page.getByPlaceholder('Enter Email').type(data.username, {delay:200});
               await page.getByPlaceholder('Enter Password').type(data.password, {delay:200});
               await page.waitForTimeout(3000);
           });
       });
   }
});


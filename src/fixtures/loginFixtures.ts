import { test as base } from "@playwright/test"
import path from "node:path";
import fs from "node:fs";

type LoginFixtures = {
    testData: any;
};

export const test = base.extend<LoginFixtures>({
    testData: async ({}, use) => {
        const testDataPath = path.resolve(__dirname, '../../resources/testData.json');
        const testData: { login: LoginTestData[] } = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));
        use(testData);
    }
});

export const expect = test.expect;
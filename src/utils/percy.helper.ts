import { test as base } from '@playwright/test';
import percySnapshot from "@percy/playwright";

export const test = base.extend<{percySnapshot: typeof percySnapshot}>({
    percySnapshot: async ({}, use) => {
        await use(percySnapshot);
    },
});

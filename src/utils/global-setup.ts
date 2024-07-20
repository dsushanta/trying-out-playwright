import { FullConfig } from "playwright/test";
import {chromium, webkit} from "@playwright/test";
import {firefox} from "playwright";

const globalSetup = async (config: FullConfig) => {
    const browserTypes = [ chromium, firefox, webkit ];

    browserTypes.map( async browserType => {
        const browser = await browserType.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        const { width, height} = await page.evaluate(() => {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight,
            }
        });

        process.env[`VIEWPORT_WIDTH_${browserType.name()}`] = width.toString();
        process.env[`VIEWPORT_HEIGHT_${browserType.name()}`] = height.toString();

        await browser.close();
    });
}

export default globalSetup;
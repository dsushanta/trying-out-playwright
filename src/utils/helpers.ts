import { Page } from "@playwright/test";
import { PNG } from 'pngjs';
import * as fs from "node:fs";
import pixelmatch from 'pixelmatch';

export const maximiseViewPort = async (page: Page) => {
    const { width, height} = await page.evaluate(() => {
        return {
            width: window.screen.availWidth,
            height: window.screen.availHeight,
        };
    });
    await page.setViewportSize({ width, height });
}

export const compareScreenshots = async (
    actualPath: string,
    expectedPath: string,
    diffPath: string
) => {
    const expected = PNG.sync.read(fs.readFileSync(expectedPath));
    const actual = PNG.sync.read(fs.readFileSync(actualPath));
    const { width, height } = actual;
    const diff = new PNG({ width, height });

    const numDiffPixels = pixelmatch(actual.data, expected.data, diff.data, width, height, { threshold: 0.1 });
    fs.writeFileSync(diffPath, PNG.sync.write(diff));

    return numDiffPixels === 0;
}
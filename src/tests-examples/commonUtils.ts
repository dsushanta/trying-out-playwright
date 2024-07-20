import {Page} from "@playwright/test";

export const performKeyboardOperationNtimes = async (page: Page, key: string, n: number) => {
    await Promise.all(
        Array.from(
            { length: n },
            async () =>  await page.keyboard.press(key)
        )
    );
}
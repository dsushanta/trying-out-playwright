import { Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) {
    }

    public async navigateTo(url: string) {
        await this.page.goto(url);
    }

    public async click(locator: string) {
        await this.page.click(locator);
    }

    public async type(locator: string, inputText: string) {
        await this.page.fill(locator, inputText);
    }

    public async getText(locator: string) {
        return this.page.textContent(locator);
    }
}
import { Page } from "@playwright/test";

class BasePage {
    constructor(protected page: Page) {
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async click(locator: string) {
        await this.page.click(locator);
    }

    async type(locator: string, inputText: string) {
        await this.page.fill(locator, inputText);
    }

    async getText(locator: string) {
        return this.page.textContent(locator);
    }
}

export { BasePage }
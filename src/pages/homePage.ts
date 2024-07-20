import { BasePage } from "./basePage";
import {Page} from "@playwright/test";

export class HomePage extends BasePage{

    private readonly menu: string;
    private readonly logoutOption: string;
    private readonly manageOption: string;

    constructor(page: Page) {
        super(page);
        this.menu = "//img[@alt='menu']";
        this.logoutOption = "//button[normalize-space()='Sign out']";
        this.manageOption = "//span[normalize-space()='Manage']";
    }

    getManageOption = () => {
        return this.page.locator(this.manageOption);
    }

    logoutFromApplication = async () => {
        await this.page.click(this.menu);
        await this.page.click(this.logoutOption);
    }
}
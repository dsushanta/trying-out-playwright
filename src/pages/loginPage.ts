import {Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class LoginPage extends BasePage{

    private readonly header: string;
    private readonly userName: string;
    private readonly password: string;
    private readonly loginButton: string;

    constructor(page: Page) {
        super(page);
        this.header = "//h2[text()='Sign In']"
        this.userName = '#email1';
        this.password = '#password1';
        this.loginButton = "//button[text()='Sign in']";
    }

    public enterCredentials = async (userName: string, password: string)=> {
        await this.page.fill(this.userName, userName);
        await this.page.fill(this.password, password);
    }

    public submitCredentials = async () => {
        await this.page.click(this.loginButton);
    }

    public loginToApplication = async (userName: string, password: string) => {
        await this.page.fill(this.userName, userName);
        await this.page.fill(this.password, password);
        await this.page.click(this.loginButton);
    }

    public getSignInHeader = () => {
        return this.page.locator(this.header);
    }
}
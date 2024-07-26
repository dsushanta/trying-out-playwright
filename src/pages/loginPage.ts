import {Page} from "@playwright/test";
import {BasePage} from "./basePage";

export class LoginPage extends BasePage{

    private readonly header: string;
    private readonly userName: string;
    private readonly password: string;
    private readonly loginButton: string;
    private readonly errorMessage: string;

    constructor(page: Page) {
        super(page);
        this.header = ".login_logo"
        this.userName = '#user-name';
        this.password = '#password';
        this.loginButton = "#login-button";
        this.errorMessage = "//div[@class='error-message-container error']/h3";
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

    getErrorMessage() {
        return this.page.locator(this.errorMessage).textContent();
    }
}
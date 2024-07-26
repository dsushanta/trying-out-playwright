import { BasePage } from "./basePage";
import {Page} from "@playwright/test";

export class HomePage extends BasePage{

    private readonly burgerMenu: string;
    private readonly logoutOption: string;
    private readonly shoppingCartLink: string;

    constructor(page: Page) {
        super(page);
        this.burgerMenu = "#react-burger-menu-btn";
        this.logoutOption = "#logout_sidebar_link";
        this.shoppingCartLink = ".shopping_cart_link";
    }

    getShoppingCartLink = () => {
        return this.page.locator(this.shoppingCartLink);
    }

    logoutFromApplication = async () => {
        await this.page.click(this.burgerMenu);
        await this.page.click(this.logoutOption);
    }
}
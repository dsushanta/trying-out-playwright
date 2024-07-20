import { expect, test } from "@playwright/test";

const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

test("Login with valid credentials", async ({page}) => {
    await page.goto(url);
    await page.getByPlaceholder('Username').type('Admin', {delay:200});
    await page.locator("input[name='password']").type('admin123', {delay:200});
    await page.locator("//button[@type='submit']").click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();

    await expect(page).toHaveURL(/login/);
});

test("Verify error message", async ({page}) => {
    await page.goto(url);
    await page.getByPlaceholder('Username').type('Admin', {delay:200});
    await page.locator("input[name='password']").type('admin1234', {delay:200});
    await page.locator("//button[@type='submit']").click();
    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();

    expect(errorMessage?.includes("Invalid")).toBeTruthy();
    expect(errorMessage === 'Invalid credentials').toBeTruthy();
});
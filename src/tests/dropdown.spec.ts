import { test, expect } from "@playwright/test";

const url = 'https://freelance-learn-automation.vercel.app/signup'

test('should select a value from dropdown', async ({ page }) => {
    await page.goto(url);
    await page.locator('#state').selectOption({ label: "Goa" });
    await page.locator('#state').selectOption({ value: "Bihar" });
    await page.locator('#state').selectOption({ index: 6 });
});

test('should contain a particular state', async ({ page }) => {
    await page.goto(url);
    let allStates = await page.locator('#state').textContent();
    expect(allStates?.includes("Jharkhand")).toBeTruthy();
});

test('should contain a particular state 2', async ({ page }) => {
    await page.goto(url);
    let allStates = await page.$('#state').;
    let allStateOptions = await allStates?.$$("option");
    let result = allStateOptions.find( async option => await option.textContent() === 'Jharkhand');
    expect(result).toBeTruthy();
});
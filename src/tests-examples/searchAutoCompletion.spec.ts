import {test} from "@playwright/test";
import {text} from "node:stream/consumers";

test('should be able to search using auto complete', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.locator("textarea[name='q']").fill('English p');

    await page.waitForSelector("//li[@role='presentation']");
    const allSuggestions = await page.$$("//li[@role='presentation']");

    const allSuggestionsWithText = await Promise.all(
        allSuggestions.map(async suggestion => ({
            element: suggestion,
            elementText: await suggestion.textContent(),
        }))
    );
    const matchedSuggestion = allSuggestionsWithText.find(
        ({ elementText }) => elementText?.includes('English Premier League')
    );

    if (matchedSuggestion) {
        await matchedSuggestion.element.click();
    }

    // for(let i=0; i<allSuggestions.length; i++) {
    //     const text = await allSuggestions[i].textContent();
    //     if(text?.includes('English Premier League')) {
    //         await allSuggestions[i].click();
    //         break;
    //     }
    // }
    await page.waitForTimeout(5000);
});
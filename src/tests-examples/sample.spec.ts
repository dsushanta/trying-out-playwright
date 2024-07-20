import { test, expect } from "@playwright/test";

test('first test', async ({ page }) => {
    const friends : string[] = ['Chandler', 'Joey', 'Ross'];
    expect(friends).toContain('Joey');
});

test('second test', async ({ page }) => {
    const friends : string[] = ['Chandler', 'Joey', 'Ross'];
    expect(friends).toContain('Monica');
});
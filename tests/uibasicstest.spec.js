const {test, expect} = require('@playwright/test');

test('browser context playwright test', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
});

// Для запуска только одного теста указать test.only('page playwright test', ...)
test.only('page playwright test', async ({page}) => {
    await page.goto("https://ya.ru");
    console.log(await page.title());
    await expect(page).toHaveTitle("Яндекс — быстрый поиск в интернете");
});
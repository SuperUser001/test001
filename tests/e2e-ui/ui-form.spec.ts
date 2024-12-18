import { test, Page, BrowserContext, expect  } from '@playwright/test';
import StartUiPage from '../models/start-ui.page';
import { testFormData } from '../test-data/form-data'


let context: BrowserContext;
let startPage: StartUiPage;
let page: Page;


test.describe('UI', () => {

  test.beforeEach(async ({browser, baseURL}) => {
    context = await browser.newContext();
    // Страница на основе контекста в браузере
    page = await context.newPage();
    // Для действий со страницей 
    startPage = new StartUiPage(page); 
  });

  test.afterEach(async ({}) => {
    await context.close();
  });

  // Позитивный тест API для отправки формы
  test('Позитивный тест UI: отправка данных формы', async ({ baseURL }) => {
    // Проверка, что адрес из файла с конфигурациями, задан
    let backUrl: string = (baseURL != null) ? baseURL : 'https://automationintesting.online'
    // Переход на страницу 
    await page.goto(backUrl);
    await page.waitForLoadState("networkidle");
    // Количество полей ввода в форме
    let allInpurFields = await startPage.formField.or(startPage.formFieldMessage).all();
    // Переход к форме в интерфейсе браузера
    await startPage.blockWithForm.scrollIntoViewIfNeeded();
    // Поля делаем итерируемыми и заполняем их тестовыми данынми
    for (const [indexField, inputField] of allInpurFields.entries()) {
       await startPage.fillTextFieldSuccessfull(inputField, testFormData);
    }
    await startPage.submitButtonClick();

    await expect(page.getByRole('heading', { name: 'Thanks for getting in touch' }), "Проверка отправки данных формы").toBeVisible();
  });

}); 
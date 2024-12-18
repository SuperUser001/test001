import { test, BrowserContext, expect  } from '@playwright/test';
import StartApiPage from '../models/start-api.page';
import { testFormData } from '../test-data/form-data'


let context: BrowserContext;
let startPage: StartApiPage;

test.describe('API', () => {

  test.beforeEach(async ({browser, baseURL}) => {
    context = await browser.newContext();
    // Для действий со страницей 
    startPage = new StartApiPage(context); 
  });

  test.afterEach(async ({}) => {
    await context.close();
  });

  // Позитивный тест API для отправки формы
  test('Позитивный тест API - 1: отправка данных формы (библиотека axios)', async ({ baseURL }) => {
    // Проверка, что адрес из файла с конфигурациями, задан
    let backUrl: string = (baseURL != null) ? baseURL : 'https://automationintesting.online'
    // Отправка POST запроса
    const response =  await startPage.sendFormPostMessageByAxios(testFormData, backUrl);
    // Проверка успешного ответа
    expect(response.status, 'Данные формы отправлены').toBe(201);
  });

  // Позитивный тест API для отправки формы
  test('Позитивный тест API - 2: отправка данных формы (средствами самого Playwright + POM)', async ({ baseURL }) => {
    // Проверка, что адрес из файла с конфигурациями, задан 
    let backUrl: string = (baseURL != null) ? baseURL : 'https://automationintesting.online'
    // Отправка POST запроса
    const response =  await startPage.sendFormPostMessage(testFormData, backUrl);
    // Проверка успешного ответа
    expect(response.status(), 'Данные формы отправлены').toBe(201);
  });

}); 
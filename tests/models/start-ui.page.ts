import { BrowserContext, Page, Locator, test, expect} from '@playwright/test';
import axios from 'axios';


export default class StartUiPage {

    readonly backUrl:string;
    readonly context:BrowserContext;
    readonly pageStart: Page;
    readonly formField: Locator;
    readonly formFieldMessage: Locator;
    readonly submitButton: Locator;
    readonly blockWithForm: Locator;

    constructor(page: Page) {
        this.pageStart = page; 
        // селектор для определения полей формы большей части
        this.formField = page.locator("//*[@class='input-group mb-3']");
        // селектор для поля формы "Сообщение"
        this.formFieldMessage = page.locator("//*[@class='input-group']");
        // Кнопка для отправки данных формы
        this.submitButton = page.locator("//button[@id='submitContact']");
        // Блок на странице, на котором располгается формы
        this.blockWithForm = page.locator("//*[@class='row contact']");  

    }

    /**
    * @description отправка запроса по данным формы 
    */
    public async submitButtonClick() {
        await this.submitButton.click();
    }

    public async expectStatusCodeForms() {
        
    }


    /**
     * @description Определение типа вводимых данных в поле ввода по атрибуту name и ввод
     * Успешный сценарий
     */
   public async fillTextFieldSuccessfull(inputField: Locator, testFormData: any) {
    let inputFieldInDiv = inputField.locator("//input").or(inputField.locator("//textarea"));
    // Берется аттрибут для определения поля
    let nameAttribute = await inputFieldInDiv.getAttribute('id');
    switch (nameAttribute) {
        case 'name':
            await inputFieldInDiv.fill(testFormData['name']);
            break;
        case 'email':
            await inputFieldInDiv.fill(testFormData['email']);
            break;
        case 'phone':
            await inputFieldInDiv.fill(testFormData['phone']);
            break;
        case 'subject':
            await inputFieldInDiv.fill(testFormData['subject']);
            break;
        case 'description':
            await inputFieldInDiv.fill(testFormData['description']);
            break;
        default:
            break;
    }
   }
    
};
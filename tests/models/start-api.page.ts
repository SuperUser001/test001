import { BrowserContext} from '@playwright/test';
import axios from 'axios';


export default class StartApiPage{

    backUrl:string;
    context:BrowserContext;

    constructor(context: BrowserContext) {
        this.context = context; 
        
    }

    /**
    * @description отправка запроса по данным формы с помощью библиотеки axios 
    */
    public async sendFormPostMessageByAxios(testFormData: any, baseURL: string) {
        return  await axios.post(baseURL + '/message/', testFormData);
    }

    /**
    * @description отправка запроса по данным формы 
    */
    public async sendFormPostMessage(testFormData: any, baseURL: string) {
        return await  this.context.request.post(baseURL+`/message/`, { 
                                data: testFormData,
                                headers: { 'Content-Type': 'application/json' }
                            }); 
    }

};

import { Page } from "@playwright/test";

export class LoginPage{

    constructor(private page: Page){}

    async enterEmail(email:string){
        await this.page.locator("//input[@id='input-email']").fill(email)
    }

    async enterPassword(password:string){
        await this.page.locator("//input[@id='input-password']").fill(password)
    }

    async clickLogin(){
        await this.page.locator("//input[@value='Login']").click()
    }

    async login(email:string , password:string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}
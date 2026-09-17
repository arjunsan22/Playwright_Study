import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

test.describe("Data-Driven Login Tests",()=>{

const loginCases = [
    { email: 'arjun4@gmail.com', password: 'arjun', expected: 'success' },
    { email: 'arjun4@gmail.com', password: 'wrongpassword', expected: 'error' },
    { email: 'wronguser@gmail.com', password: 'arjun', expected: 'error' },
    { email: '', password: '', expected: 'required' }
];


for (const testCase of loginCases){

    test(`Login test for: ${testCase.expected}`, async({page})=>{
        
        const loginPage = new LoginPage(page);
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    

        await loginPage.login(testCase.email,testCase.password)

        if(testCase.expected === "success"){
             await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
        }
        else if (testCase.expected === "error"){
             await expect(page.getByText(" Warning: No match for E-Mail Address and/or Password")).toBeVisible();
        }
        else if (testCase.expected === 'required') {
             await expect(page.getByText(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour')).toBeVisible();
        }
    })

    
}

})
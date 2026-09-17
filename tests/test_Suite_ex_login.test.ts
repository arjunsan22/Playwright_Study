import {test, expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

test.describe("Login Test_Suite", ()=>{

    let loginPage : LoginPage // to get all test ..thats why it placed outside 

    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    })
// beforeEach used for avoid boilerplate .run before every test, other wise we write every time this two lines inside every test cases
//        const loginPage = new LoginPage(page);
//          await page.goto('http://localhost:3000/login');
 


test("Valid Login", async ({page}) => {

    await loginPage.login("arjun4@gmail.com","arjun");
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
})

test("Invalid Password", async({page})=>{

    await loginPage.login("arjun4@gmail.com","wrongpassword");
    await expect(page.getByText(" Warning: No match for E-Mail Address and/or Password")).toBeVisible();

})

test("Invalid Email", async({page})=>{

    await loginPage.login("wrongemail","arjun")
    await expect(page.getByText(" Warning: No match for E-Mail Address and/or Password")).toBeVisible();

})

test("Empty Login", async({page})=>{
    await loginPage.clickLogin();
    await expect(page.getByText(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour')).toBeVisible();
})
})
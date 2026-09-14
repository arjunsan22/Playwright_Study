
import {test} from '@playwright/test'

test("handling alerts", async({page})=>{

    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")
    //  page.locator("button:has-text('Click Me')").click()
     page.locator("//button[@class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']").click()
})
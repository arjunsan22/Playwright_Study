
import {expect,test} from "@playwright/test"

// test("calender demo using fill function", async({page})=>{

//     await page.goto("https://practice.expandtesting.com/inputs")
    
//     //before adding date variable go to site and add a date in input. and take console and write document.getElementById("birthday").value
// //birthday - is the id of that date input / so that time it shows the format , ex: 2004-11-2

//     let date = "2004-11-02"

//     await page.fill("//input[@id='input-date']",date)
//     await page.waitForTimeout(3000)
// })




test('Calender demo using date picker', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');
  await page.getByRole('textbox', { name: 'Input: Date' }).fill('2026-08-16');

    
});

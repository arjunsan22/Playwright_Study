
import {test, expect} from '@playwright/test';

// test("Interaction with inputs", async({page}) =>{

//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
//     const messageInput = page.locator("//input[@id='user-message']")
//     console.log(await  messageInput.getAttribute('placeholder'));
//     expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
//     console.log("Before entering data :"+ await messageInput.inputValue());
//     await messageInput.type("hi arjun");
//     console.log("After entering data :"+ await messageInput.inputValue())


// })


// test("Sum", async({page})=>{
    
//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")

//     const sum1 = page.locator("//input[@id='sum1']")
//     const sum2 = page.locator("//input[@id='sum2']")

    
//     const getValuesBtn =  page.locator("//button[normalize-space()='Get Sum']")

//     let num1 = 2;
//     let num2 = 2;

//     await sum1.type(""+ num1);
//     await sum2.type(""+ num2);

//     await getValuesBtn.click();

//     const result = page.locator("//p[@id='addmessage']")
//     console.log("result :" + await result.textContent());

//     let expectedResult = num1 + num2;

//     expect(result).toHaveText("" + expectedResult)

// })


test("checkbox", async({page})=>{

  await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/")

    const singleCheckbox = page.locator("//label[normalize-space()='Click on check box']")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked()
})
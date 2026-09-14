import {chromium, test}  from "@playwright/test"
// test("Login test demo", async ({ page, context }) => {//  this also same , now playwrite automatically create page and context
//so that time this three lines not wanted ->
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();

test("Login test demo", async()=>{
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
    // await page.click("//span[normalize-space()='Login']")
    await page.click("'Login'")

    await page.fill("//input[@id='input-email']", "arjun2@gmail.com")
    await page.fill("//input[@id='input-password']", "arjun")
    await page.click("//input[@value='Login']")
   
    await page.waitForTimeout(5000)

    const newContext = await browser.newContext();

    const page1= await newContext.newPage();
    
    await page1.goto("https://ecommerce-playground.lambdatest.io/")

    await page1.waitForTimeout(5000)
  

}) 

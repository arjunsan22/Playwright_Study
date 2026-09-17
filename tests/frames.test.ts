
import {expect,test} from "@playwright/test"

test("Interact with frames", async({page})=>{

    await page.goto("https://letcode.in/frame")
    const allframes = page.frames();
    console.log("No of frames: " + allframes.length)


   const myFrame = page.frame("firstFr")
   await myFrame?.fill("//input[@placeholder='Enter name']","arjun")
   await myFrame?.fill("//input[@placeholder='Enter email']","arjun@gmail.com")

   expect(await myFrame?.locator("//p[@class='text-sm font-semibold text-center']")
   .textContent()).toContain("You have entered arjun arjun@gmail.com")
   //for get content you have entered arjun arjun@gmail.com      
   const content = await myFrame?.locator("//p[@class='text-sm font-semibold text-center']").textContent()
         console.log(content)


   await page.waitForTimeout(3000)
})
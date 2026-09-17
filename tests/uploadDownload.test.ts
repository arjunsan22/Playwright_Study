
import {test} from "@playwright/test"

// test("Download files", async ({page}) => {
    
//     await page.goto("https://www.testmuai.com/selenium-playground/generate-file-to-download-demo/")

//     await page.type("//textarea[@id='textbox']","like , share, comment")
//     await page.click("id=create")

//     const download = await Promise.all([
//        page.waitForEvent("download"),
//         //    "download event varunnathu vare wait ചെയ്യും"
//         page.click("//a[@id='link-to-download']")
//         //    "download link click ചെയ്യും"
//     ])
//     // file download aya path
//     // const path = await download[0].path();
//     // console.log(path); 

// // server automatically oru file name suggest cheyyunnu
//     const fileName = download[0].suggestedFilename()
//     await download[0].saveAs(fileName);
// })

test("Upload files", async({page})=>{

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    // await page.locator("//input[@name='files[]']")
    // .setInputFiles([
    //     "images/HD-wallpaper-technology-code-programming-programmer.jpg",
    //     "images/think-positively-wallpaper-preview.jpg"
    // ])

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("//input[@name='files[]']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles([
         "images/HD-wallpaper-technology-code-programming-programmer.jpg",
         "images/think-positively-wallpaper-preview.jpg"
    ])
    

})



// setInputFiles()
// → "input element എനിക്ക് already അറിയാം"

// filechooser
// → "button/input click ചെയ്താൽ file chooser വരും,
//    അതിനെ capture ചെയ്ത് file കൊടുക്കാം"

//35.th line starting code explaining:
// Page open
//    ↓
// Wait for file chooser
//    ↓
// Click file input
//    ↓
// File chooser opens
//    ↓
// FileChooser object കിട്ടുന്നു
//    ↓
// isMultiple() → multiple files allowed ആണോ?
//    ↓
// setFiles() → files select ചെയ്യുന്നു

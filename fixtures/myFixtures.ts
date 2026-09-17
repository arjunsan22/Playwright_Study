
import {test as myTest } from "@playwright/test";

type arjun = {
    age:number,
    email:string
}

//const myFixtureTest = myTest.createFixture(); ethum valid anu
const myFixtureTest = myTest.extend<arjun>({
    age: 21, //asking playwright i want a custom fixture age and email
    email: "arjun@gmail.com"
})
// Existing myTest എടുത്തിട്ട് അതിലേക്ക് ageയും emailയും കൂടി ചേർത്ത് പുതിയ test ഉണ്ടാക്കുക.

// Before:

// myTest
// │
// ├── page
// ├── browser
// ├── context
// └── request

// After:

// myFixtureTest
// │
// ├── page
// ├── browser
// ├── context
// ├── request
// ├── age
// └── email

// ഇതാണ് extend() ചെയ്യുന്നതിന്റെ basic idea.

export const test = myFixtureTest;

// --------------------------------

// myTest.extend<arjun>({

// ഇവിടെ arjun value അല്ല.

// arjun ഒരു type ആണ്.

// type arjun = {
//     age: number,
//     email: string
// }

// അതിനാൽ TypeScript-നോട് നമ്മൾ പറയുകയാണ്:

// "ഞാൻ ഇവിടെ add ചെയ്യാൻ പോകുന്ന പുതിയ fixtures-ന്റെ shape ഇതാണ്."
// ------------------------------------------------

// ഇതിനെ ഒരു real-life example ആയി നോക്കാം

// നിനക്ക് ഒരു existing box ഉണ്ടെന്ന് കരുതൂ.

// myTest
// ┌─────────────────┐
// │ page            │
// │ browser         │
// │ context         │
// └─────────────────┘

// നീ പറയുന്നു:

// "ഈ box-ലേക്ക് എനിക്ക് ageയും emailയും കൂടി വേണം."

// അപ്പോൾ:

// myTest.extend(...)

// means:

// Existing test-നെ extend ചെയ്ത് പുതിയ test ഉണ്ടാക്കുക.

// Result:

// myFixtureTest
// ┌─────────────────┐
// │ page            │
// │ browser         │
// │ context         │
// │ age             │
// │ email           │
// └─────────────────┘


//generic type <>

// ഇനി നിന്റെ extend<arjun>-ലേക്ക് വരാം 🔥

// നീ നേരത്തെ പഠിച്ചത്:

// type arjun = {
//     age: number,
//     email: string
// }

// ഇത് ഒരു type ആണ്.

// പിന്നെ:

// myTest.extend<arjun>({
//     age: 21,
//     email: "arjun@gmail.com"
// })

// ഇവിടെ:

// <arjun>

// എന്താണ്?

// Generic type argument.

// അതായത് extend() method-നോട് നമ്മൾ പറയുകയാണ്:

// "Hey extend(), ഞാൻ add ചെയ്യാൻ പോകുന്ന fixture-ന്റെ type ഇതാണ് — arjun."

// അപ്പോൾ:

// extend<T>
//     ↑
// generic type parameter

// നമ്മൾ actual type കൊടുക്കുന്നു:

// extend<arjun>
//        ↑
// actual type
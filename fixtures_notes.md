Custom fixtures actually become useful when your tests repeatedly need the same setup. One simple real-world scenario നോക്കാം.

Scenario: E-commerce website 🛒

നമുക്ക് ഒരു shopping website test ചെയ്യുകയാണ്.

നമ്മുടെ tests:

Login test
Add to cart test
Checkout test
Order history test
Profile test

ഇവയിൽ പല tests-നും logged-in user വേണം.

Without custom fixture

ഓരോ test-ലും നീ വീണ്ടും login ചെയ്യണം:

test("Add to cart", async ({ page }) => {

    await page.goto("/login");

    await page.getByLabel("Email").fill("arjun@gmail.com");
    await page.getByLabel("Password").fill("123456");
    await page.getByRole("button", {name: "Login"}).click();

    // actual test
    await page.getByText("Laptop").click();
});

മറ്റൊരു test:

test("Checkout", async ({ page }) => {

    await page.goto("/login");

    await page.getByLabel("Email").fill("arjun@gmail.com");
    await page.getByLabel("Password").fill("123456");
    await page.getByRole("button", {name: "Login"}).click();

    // actual checkout test
});

ഇങ്ങനെ 10 tests ഉണ്ടെങ്കിൽ?

Login
Login
Login
Login
Login
...

Same setup repeated. 😵‍💫

Custom fixture ഇവിടെ useful ആകുന്നു

നമുക്ക് പറയാം:

"എന്റെ test തുടങ്ങുന്നതിന് മുമ്പ് ഒരു logged-in user എനിക്ക് ready ആയി വേണം."

അപ്പോൾ custom fixture ഉണ്ടാക്കാം:

const test = myTest.extend({

    loggedInPage: async ({ page }, use) => {

        await page.goto("/login");

        await page.getByLabel("Email").fill("arjun@gmail.com");
        await page.getByLabel("Password").fill("123456");
        await page.getByRole("button", {name: "Login"}).click();

        await use(page);
    }

});

ഇപ്പോൾ test:

test("Add to cart", async ({ loggedInPage }) => {

    await loggedInPage.getByText("Laptop").click();

});

ഇവിടെ test-ന് login code എഴുതേണ്ടതില്ല.

What happened?

Playwright test തുടങ്ങുന്നതിന് മുമ്പ്:

Test starts
   ↓
Need loggedInPage
   ↓
Custom fixture runs
   ↓
Open login
   ↓
Enter email/password
   ↓
Login
   ↓
Give logged-in page to test
   ↓
Test starts

അതായത്:

Fixture = test-ന് വേണ്ട ready-made setup/resource
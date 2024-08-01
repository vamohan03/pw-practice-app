import { test } from "@playwright/test"

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

})

test ('locator syntax rules' , async ({page}) => {

    //by tag name
    await page.locator('input').click()

    //by id
    await page.locator('#inputEmail1').click()

    //by class
    page.locator('.shape-rectangle')

    //by attribute
    page.locator('[placeholder="Email"]')

    //by class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different locators
    page.locator('input[placeholder="Email"]')

    //by Xpath
    page.locator('//*[@id="inputEmail1"]')

    //by text partial
    page.locator(':text("Using")')

    //by exact match text
    page.locator(':text-is("Using the grid")')


}) 

test ('visual locator', async ({page}) => {

    await page.getByRole('textbox', {name: "Email"}).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Email').first().click()

    await page.getByText('Inline form').first().click()

    await page.getByTitle('IoT Dashboard').first().click()

    
})


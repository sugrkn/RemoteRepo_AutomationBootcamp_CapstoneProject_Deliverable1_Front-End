
import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login1-page'                            
import { ProductsPage } from '../page-objects/products1-page'                      
import { URL, VALIDCREDENTIALS, INVALIDCREDENTIALS, CARTITEMDESCRIPTION, CUSTOMERINFO } from '../data/constants1'
import { CartPage } from '../page-objects/cart1-page'
import { CheckoutStepOnePage } from '../page-objects/checkoutstepone1-page'
import { CheckoutStepTwoPage } from '../page-objects/checkoutsteptwo1-page'
import { CheckoutCompletePage } from '../page-objects/checkoutcomplete1-page'

  
test.describe('Testing Login', () => {     
 
  let loginPage: LoginPage                              
  let productsPage: ProductsPage
  let cartPage: CartPage
  let checkoutsteponePage: CheckoutStepOnePage
  let checkoutsteptwoPage: CheckoutStepTwoPage
  let checkoutcompletePage: CheckoutCompletePage

  test.beforeEach(async ({ page }) => {                 
                                                        
    loginPage = new LoginPage(page)                     
    productsPage = new ProductsPage(page)               
    cartPage = new CartPage(page)
    checkoutsteponePage = new CheckoutStepOnePage(page)
    checkoutsteptwoPage = new CheckoutStepTwoPage(page)
    checkoutcompletePage = new CheckoutCompletePage(page)

    await page.goto(URL.baseUrl); 
                                                                                                                
  });
  

  test('Test 1: As a invalid user, login fails @smoke', async ({ page }) => { 
                                          
    await loginPage.submitLoginForm(INVALIDCREDENTIALS.invalidUsername, INVALIDCREDENTIALS.invalidPassword)
    await expect(loginPage.loginError).toBeVisible()

  });


  test('Test 2: As a valid user, login is successful @smoke', async ({ page }) => { 
                                              
    await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
    await expect(productsPage.title).toBeVisible()

  });  

  test.afterEach(async () => {
    console.log('After tests');
  });


  test('Test 3: Add onesie to shopping cart @smoke', async ({ page }) => {

    await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
    await expect(productsPage.title).toBeVisible()
    await expect(productsPage.cartIcon).toBeVisible()
    await productsPage.clickAddToCartOnesie()
    await expect(productsPage.removeFromCartOnesieButton).toBeVisible()
    await expect(productsPage.cartIconCountProductsPage).toBeVisible()

  });


  test('Test 4: Navigate to shopping cart page @smoke', async ({ page }) => {
    
    await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
    await expect(productsPage.title).toBeVisible()
    await expect(productsPage.cartIcon).toBeVisible()
    await productsPage.clickAddToCartOnesie()
    await expect(productsPage.removeFromCartOnesieButton).toBeVisible()
    await expect(productsPage.cartIconCountProductsPage).toBeVisible()
    await productsPage.clickCartIconCountLink()
    await expect(page).toHaveURL(/.*cart/);                                     //https://www.saucedemo.com/cart.html


  })


  test('Test 5: Verify the shopping cart page @smoke', async ({ page }) => {

    await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
    await expect(productsPage.title).toBeVisible()
    await expect(productsPage.cartIcon).toBeVisible()
    await productsPage.clickAddToCartOnesie()
    await expect(productsPage.removeFromCartOnesieButton).toBeVisible()
    await expect(productsPage.cartIconCountProductsPage).toBeVisible()
    await productsPage.clickCartIconCountLink()
    await expect(page).toHaveURL(/.*cart/)

    await expect(cartPage.titleCart).toBeVisible()
    await expect(cartPage.inventoryOnesie).toBeVisible()
    await expect(cartPage.cartQuantity).toBeVisible()
    await expect(cartPage.cartOnesieDescription).toContainText(CARTITEMDESCRIPTION.cartOnesieDescription)     //i assigned the description string to a variable cuz it's so long
    await expect(cartPage.cartIconCountCartPage).toBeVisible()
    await cartPage.clickCheckoutButton()

  })


  test('Test 6: Verify the 1st checkout page @smoke', async ({ page }) => {

    await loginPage.submitLoginForm(INVALIDCREDENTIALS.invalidUsername, INVALIDCREDENTIALS.invalidPassword)
    await expect(loginPage.loginError).toBeVisible()
    await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
    await expect(productsPage.title).toBeVisible()
    await expect(productsPage.cartIcon).toBeVisible()
    await productsPage.clickAddToCartOnesie()
    await expect(productsPage.removeFromCartOnesieButton).toBeVisible()
    await expect(productsPage.cartIconCountProductsPage).toBeVisible()
    await productsPage.clickCartIconCountLink()
    await expect(page).toHaveURL(/.*cart/)
    await expect(cartPage.titleCart).toBeVisible()
    await expect(cartPage.inventoryOnesie).toBeVisible()
    await expect(cartPage.cartQuantity).toBeVisible()
    await expect(cartPage.cartOnesieDescription).toContainText(CARTITEMDESCRIPTION.cartOnesieDescription)     //i assigned the description string to a variable cuz it's so long
    await expect(cartPage.cartIconCountCartPage).toBeVisible()
    await cartPage.clickCheckoutButton()

    await expect(page).toHaveURL(URL.checkoutStepOneUrl)
    await expect(checkoutsteponePage.titleCheckoutstepone).toBeVisible()    
    await expect(checkoutsteponePage.cartIconCountCheckoutsteponePage).toBeVisible()
    await checkoutsteponePage.submitCustomerInfo(CUSTOMERINFO.firstName, CUSTOMERINFO.lastName, CUSTOMERINFO.zipCode)
    await expect(page).toHaveURL(URL.checkoutStepTwoUrl)

  })


    test('Test 7: Verify the 2nd checkout page @smoke', async ({ page }) => {
      await loginPage.submitLoginForm(INVALIDCREDENTIALS.invalidUsername, INVALIDCREDENTIALS.invalidPassword)
      await expect(loginPage.loginError).toBeVisible()
      await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
      await expect(productsPage.title).toBeVisible()
      await expect(productsPage.cartIcon).toBeVisible()
      await productsPage.clickAddToCartOnesie()
      await expect(productsPage.removeFromCartOnesieButton).toBeVisible()
      await expect(productsPage.cartIconCountProductsPage).toBeVisible()
      await productsPage.clickCartIconCountLink()
      await expect(page).toHaveURL(/.*cart/)
      await expect(cartPage.titleCart).toBeVisible()
      await expect(cartPage.inventoryOnesie).toBeVisible()
      await expect(cartPage.cartQuantity).toBeVisible()
      await expect(cartPage.cartOnesieDescription).toContainText(CARTITEMDESCRIPTION.cartOnesieDescription)     //i assigned the description string to a variable cuz it's so long
      await expect(cartPage.cartIconCountCartPage).toBeVisible()
      await cartPage.clickCheckoutButton()  
      await expect(page).toHaveURL(URL.checkoutStepOneUrl)
      await expect(checkoutsteponePage.titleCheckoutstepone).toBeVisible()    
      await expect(checkoutsteponePage.cartIconCountCheckoutsteponePage).toBeVisible()
      await checkoutsteponePage.submitCustomerInfo(CUSTOMERINFO.firstName, CUSTOMERINFO.lastName, CUSTOMERINFO.zipCode)
      await expect(page).toHaveURL(URL.checkoutStepTwoUrl)

      await expect(checkoutsteptwoPage.cartIconCountCheckoutsteptwoPage).toBeVisible()
      await expect(checkoutsteptwoPage.titleCheckoutsteptwo).toBeVisible()
      await expect(checkoutsteptwoPage.onesieCheckoutOverview).toBeVisible()
      await expect(checkoutsteptwoPage.onesieQuantityCheckoutOverview).toBeVisible()
      await checkoutsteptwoPage.clickFinishButton()
      await expect(page).toHaveURL(URL.checkoutCompleteUrl)
    
  })


  test.only('Test 8: Verify the Checkout Complete page @smoke', async ({ page }) => {
    await loginPage.submitLoginForm(INVALIDCREDENTIALS.invalidUsername, INVALIDCREDENTIALS.invalidPassword)
    await expect(loginPage.loginError).toBeVisible()
    await loginPage.submitLoginForm(VALIDCREDENTIALS.username, VALIDCREDENTIALS.password)
    await expect(productsPage.title).toBeVisible()
    await expect(productsPage.cartIcon).toBeVisible()
    await productsPage.clickAddToCartOnesie()
    await expect(productsPage.removeFromCartOnesieButton).toBeVisible()
    await expect(productsPage.cartIconCountProductsPage).toBeVisible()
    await productsPage.clickCartIconCountLink()
    await expect(page).toHaveURL(/.*cart/)
    await expect(cartPage.titleCart).toBeVisible()
    await expect(cartPage.inventoryOnesie).toBeVisible()
    await expect(cartPage.cartQuantity).toBeVisible()
    await expect(cartPage.cartOnesieDescription).toContainText(CARTITEMDESCRIPTION.cartOnesieDescription)     //i assigned the description string to a variable cuz it's so long
    await expect(cartPage.cartIconCountCartPage).toBeVisible()
    await cartPage.clickCheckoutButton()  
    await expect(page).toHaveURL(URL.checkoutStepOneUrl)
    await expect(checkoutsteponePage.titleCheckoutstepone).toBeVisible()    
    await expect(checkoutsteponePage.cartIconCountCheckoutsteponePage).toBeVisible()
    await checkoutsteponePage.submitCustomerInfo(CUSTOMERINFO.firstName, CUSTOMERINFO.lastName, CUSTOMERINFO.zipCode)
    await expect(page).toHaveURL(URL.checkoutStepTwoUrl)
    await expect(checkoutsteptwoPage.cartIconCountCheckoutsteptwoPage).toBeVisible()
    await expect(checkoutsteptwoPage.titleCheckoutsteptwo).toBeVisible()
    await expect(checkoutsteptwoPage.onesieCheckoutOverview).toBeVisible()
    await expect(checkoutsteptwoPage.onesieQuantityCheckoutOverview).toBeVisible()
    await checkoutsteptwoPage.clickFinishButton()
    await expect(page).toHaveURL(URL.checkoutCompleteUrl)
  
    await expect(checkoutcompletePage.titleCheckoutcomplete).toBeVisible()
    await expect(checkoutcompletePage.headerCheckoutcomplete).toBeVisible()
    await checkoutcompletePage.clickHomeButton()
    await expect(page).toHaveURL(URL.productsUrl)
    


  })


})

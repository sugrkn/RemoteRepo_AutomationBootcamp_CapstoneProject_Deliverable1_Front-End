
import { Page, Locator } from '@playwright/test'            

export class CheckoutStepOnePage {                                    
                                                                
    readonly page: Page
    readonly titleCheckoutstepone: Locator
    readonly cartIconCountCheckoutsteponePage: Locator
    readonly firstnameField: Locator
    readonly lastnameField: Locator
    readonly zipcodeField: Locator
    readonly continueButton: Locator


    constructor(page: Page) {                                                                                   
        this.page = page                            
        this.titleCheckoutstepone = page.locator('.title', { hasText: 'Checkout: Your Information' })    //element via F12: <span class="title">Checkout: Your Information</span>                        
        this.cartIconCountCheckoutsteponePage = page.locator('.shopping_cart_badge', { hasText: '1' })   //element via F12: <span class="shopping_cart_badge">1</span>                  

        this.firstnameField = page.locator('[data-test="firstName"]')                                    //element via F12: <input class="input_error form_input error" placeholder="First Name" type="text" data-test="firstName" id="first-name" name="firstName" autocorrect="off" autocapitalize="none" value="">
        this.lastnameField = page.locator('[data-test="lastName"]')                                      //element via F12: <input class="input_error form_input error" placeholder="Last Name" type="text" data-test="lastName" id="last-name" name="lastName" autocorrect="off" autocapitalize="none" value="">
        this.zipcodeField = page.locator('[data-test="postalCode"]')                                     //element via F12: <input class="input_error form_input error" placeholder="Zip/Postal Code" type="text" data-test="postalCode" id="postal-code" name="postalCode" autocorrect="off" autocapitalize="none" value="">
        this.continueButton = page.locator('[data-test="continue"]')                                     //element via F12: //<input type="submit" class="submit-button btn btn_primary cart_button btn_action" data-test="continue" id="continue" name="continue" value="Continue">
    }


    async submitCustomerInfo(firstName: string, lastName: string, zipCode: string) {
        await this.firstnameField.fill(firstName)
        await this.lastnameField.fill(lastName)
        await this.zipcodeField.fill(zipCode)
        await this.continueButton.click()     
    }

}    

import { Page, Locator } from '@playwright/test'            

export class CheckoutCompletePage {                                    
                                                                
    readonly page: Page
    readonly titleCheckoutcomplete: Locator
    readonly headerCheckoutcomplete: Locator
    readonly homeButton: Locator



    constructor(page: Page) {                                                                                   
        this.page = page                            
        this.titleCheckoutcomplete = page.locator('.title', { hasText: 'Checkout: Complete!' })                 //element via F12: <span class="title">Checkout: Complete!</span>
        this.headerCheckoutcomplete = page.locator('.complete-header', { hasText: 'THANK YOU FOR YOUR ORDER' })   //element via F12: <h2 class="complete-header">THANK YOU FOR YOUR ORDER</h2>
        this.homeButton = page.locator('[data-test="back-to-products"]')                                            //element via F12: <button class="btn btn_primary btn_small" data-test="back-to-products" id="back-to-products" name="back-to-products">Back Home</button>                                         

    }


    async clickHomeButton() {
        await this.homeButton.click()

    }


}    

import { Page, Locator } from '@playwright/test'            

export class CheckoutStepTwoPage {                                    
                                                                
    readonly page: Page
    readonly cartIconCountCheckoutsteptwoPage: Locator
    readonly titleCheckoutsteptwo: Locator
    readonly onesieCheckoutOverview: Locator
    readonly onesieQuantityCheckoutOverview: Locator
    readonly finishButton: Locator



    constructor(page: Page) {                                                                                   
        this.page = page                            
        this.cartIconCountCheckoutsteptwoPage = page.locator('.shopping_cart_badge', { hasText: '1' })          //element via F12: <span class="shopping_cart_badge">1</span>                  
        this.titleCheckoutsteptwo = page.locator('.title', { hasText: 'Checkout: Overview' })                   //element via F12: <span class="title">Checkout: Overview</span>                 
        this.onesieCheckoutOverview = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Onesie' })    //element via F12: <div class="inventory_item_name">Sauce Labs Onesie</div>
        this.onesieQuantityCheckoutOverview = page.locator('.cart_quantity', { hasText: '1' })                  //element via F12: <div class="cart_quantity">1</div>
        this.finishButton = page.locator('[data-test="finish"]')                                              //element via F12: <button class="btn btn_action btn_medium cart_button" data-test="finish" id="finish" name="finish">Finish</button>


    }

    async clickFinishButton() {
        await this.finishButton.click()

    }


}    
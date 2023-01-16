
import { Page, Locator } from '@playwright/test'                

export class CartPage {                                     
                                                                    
    readonly page: Page                                             
    readonly titleCart: Locator
    readonly inventoryOnesie: Locator
    readonly cartQuantity: Locator
    readonly cartOnesieDescription: Locator
    readonly cartIconCountCartPage: Locator
    readonly checkoutButton: Locator


    constructor(page: Page) {                                                                                   
        this.page = page                                                            
        this.titleCart = page.locator('.title', { hasText: 'Your Cart' })                               //element via F12: <span class="title">Your Cart</span>
        this.inventoryOnesie = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Onesie' })   //element via F12: <div class="inventory_item_name">Sauce Labs Onesie</div>
        this.cartQuantity = page.locator('.cart_quantity', { hasText: '1' })                            //element via F12: <div class="cart_quantity">1</div>
        this.cartOnesieDescription = page.locator('.inventory_item_desc')                               //decided to use the method/function toContainText for fun; element via F12: <div class="inventory_item_desc">Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.</div> (question??? for the method's parameter, the long string, i had to stop before won't cuz the ' is also used for the string and " is not used - how do i overcome by this???)
        this.cartIconCountCartPage = page.locator('.shopping_cart_badge', { hasText: '1' })             //element via F12: <span class="shopping_cart_badge">1</span>
        this.checkoutButton = page.locator('[data-test="checkout"]')                                    //element via F12: <button class="btn btn_action btn_medium checkout_button" data-test="checkout" id="checkout" name="checkout">Checkout</button>
        


    }

    async clickCheckoutButton() {
        await this.checkoutButton.click() 
    }

}    
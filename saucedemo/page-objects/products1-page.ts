
import { Page, Locator } from '@playwright/test'                

export class ProductsPage {                                     
                                                                    
    readonly page: Page                                             
    readonly title: Locator
    readonly addToCartOnesieButton: Locator
    readonly cartIcon: Locator
    readonly removeFromCartOnesieButton: Locator
    readonly cartIconCountProductsPage: Locator
    readonly cartIconCountButton: Locator


    constructor(page: Page) {                                                                                   
        this.page = page                                                            
        this.title = page.locator('.title', { hasText: 'Products' })                                //element via F12: <span class="title">Products</span>
        this.addToCartOnesieButton = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')
        this.cartIcon = page.locator('[class="shopping_cart_container"]')
        this.removeFromCartOnesieButton = page.locator('[data-test="remove-sauce-labs-onesie"]')
        this.cartIconCountProductsPage = page.locator('.shopping_cart_badge', { hasText: '1' })     //element via F12: <span class="shopping_cart_badge">1</span>
        this.cartIconCountButton = page.locator('[class="shopping_cart_link"]')                     //element via F12: <a class="shopping_cart_link">     <span class="shopping_cart_badge">1</span></a>
        //this.cartIconCountButton = page.getByRole('link', { name: '1' });                         //this doesn't work! from example.spec.ts


    }

    async clickAddToCartOnesie() {
        await this.addToCartOnesieButton.click() 
    }     

    async clickCartIconCountLink() {
        await this.cartIconCountButton.click()
    }











}






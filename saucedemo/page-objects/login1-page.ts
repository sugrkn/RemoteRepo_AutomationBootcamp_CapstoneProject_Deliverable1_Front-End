
import { Page, Locator } from '@playwright/test'            

export class LoginPage {                                    
                                                                
    readonly page: Page                                             
    readonly usernameField: Locator                             
    readonly passwordField: Locator                             
    readonly loginButton: Locator
    readonly loginError: Locator

    constructor(page: Page) {                                                               
        this.page = page                                        
        this.usernameField = page.locator('[data-test="username"]')     
        this.passwordField = page.locator('[data-test="password"]')     
        this.loginButton = page.locator('[data-test="login-button"]')
        this.loginError = page.locator('[data-test="error"]')
    }
    
    async submitLoginForm(username: string, password: string) { 
        await this.usernameField.fill(username)                     
        await this.passwordField.fill(password)                     
        await this.loginButton.click()                              
    }   

    async submitLoginFormInvalid(invalidUsername: string, invalidPassword: string) { 
        await this.usernameField.fill(invalidUsername)                     
        await this.passwordField.fill(invalidPassword)                     
        await this.loginButton.click()                              
    }   
}
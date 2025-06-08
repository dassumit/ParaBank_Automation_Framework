import { expect } from '@playwright/test';


export class RegisterPage {

  /**
   * @param {import('@playwright/test').Page} page
   **/
  
  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.locator('#customer\\.firstName');
    this.lastNameInput = this.page.locator('#customer\\.lastName');
    this.addressInput = this.page.locator('#customer\\.address\\.street');
    this.cityInput = this.page.locator('#customer\\.address\\.city');
    this.stateInput = this.page.locator('#customer\\.address\\.state');
    this.zipCodeInput = this.page.locator('#customer\\.address\\.zipCode');
    this.phoneInput = this.page.locator('#customer\\.phoneNumber');
    this.ssnInput = this.page.locator('#customer\\.ssn');
    this.usernameInput = this.page.locator('#customer\\.username');
    this.passwordInput = this.page.locator('#customer\\.password');
    this.repeatPasswordInput = this.page.locator('#repeatedPassword');
    this.registerButton = this.page.locator('input[value="Register"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/');
    await this.page.click('text=Register');
  }

  /**
   * Register as a new user
   * @param {username} username 
   * @param {password} password 
   */
  async registerUser(username, password) {
    await this.firstNameInput.fill('Sumit');
    await this.lastNameInput.fill('Das');
    await this.addressInput.fill('Kharadi road');
    await this.cityInput.fill('Pune');
    await this.stateInput.fill('MH');
    await this.zipCodeInput.fill('411014');
    await this.phoneInput.fill('9748973928');
    await this.ssnInput.fill('9999');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.repeatPasswordInput.fill(password);
    await this.registerButton.click();
  }
  

  /**
   * Validate user name after registered as a new user
   * @param {userName} userName 
   */
  async validateUserName(userName) {
    const welcomeMessage = await this.page.textContent('h1.title');
    expect(welcomeMessage).toContain('Welcome');
    expect(welcomeMessage).toContain(userName);
  }

  /**
   * Verify success message after registered as a new user
   */
  async verifySuccess() {
    await expect.soft(this.page.locator('p:has-text("Your account was created successfully")')).toBeVisible();
  }
  
  /**
   * Log out function
   */
  async logout() {
    await this.page.click('a[href="logout.htm"]');
    await this.page.waitForLoadState('networkidle');
  }
  
  
}
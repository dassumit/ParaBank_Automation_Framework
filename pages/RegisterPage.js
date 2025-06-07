import { expect } from '@playwright/test';


export class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/');
    await this.page.click('text=Register');
  }

  async registerUser(username, password) {
    const firstNameInput = this.page.locator('#customer\\.firstName');
    const lastNameInput = this.page.locator('#customer\\.lastName');
    const addressInput = this.page.locator('#customer\\.address\\.street');
    const cityInput = this.page.locator('#customer\\.address\\.city');
    const stateInput = this.page.locator('#customer\\.address\\.state');
    const zipCodeInput = this.page.locator('#customer\\.address\\.zipCode');
    const phoneInput = this.page.locator('#customer\\.phoneNumber');
    const ssnInput = this.page.locator('#customer\\.ssn');
    const usernameInput = this.page.locator('#customer\\.username');
    const passwordInput = this.page.locator('#customer\\.password');
    const repeatPasswordInput = this.page.locator('#repeatedPassword');
    const registerButton = this.page.locator('input[value="Register"]');
  
    await firstNameInput.fill('Sumit');
    await lastNameInput.fill('Das');
    await addressInput.fill('Kharadi road');
    await cityInput.fill('Pune');
    await stateInput.fill('MH');
    await zipCodeInput.fill('411014');
    await phoneInput.fill('9748973928');
    await ssnInput.fill('9999');
    await usernameInput.fill(username);
    await passwordInput.fill(password);
    await repeatPasswordInput.fill(password);
    await registerButton.click();
  }
  

  async validateUserName(userName) {
    const welcomeMessage = await this.page.textContent('h1.title');
    expect(welcomeMessage).toContain('Welcome');
    expect(welcomeMessage).toContain(userName);
  }

  async verifySuccess() {
    await expect.soft(this.page.locator('p:has-text("Your account was created successfully")')).toBeVisible();
  }
  
  async logout() {
    await this.page.click('a[href="logout.htm"]');
    await this.page.waitForLoadState('networkidle');
  }
  
  
}
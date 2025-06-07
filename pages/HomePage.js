import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async verifyNavigationMenu() {
    await expect(this.page.locator('text=Accounts Overview')).toBeVisible();
    await expect(this.page.locator('text=Transfer Funds')).toBeVisible();
    await expect(this.page.locator('text=Bill Pay')).toBeVisible();
  }

  async navigateToOpenAccount() {
    await this.page.click('text=Open New Account');
  }

  async navigateToAccountsOverview() {
    await this.page.click('text=Accounts Overview');
  }

  async navigateToTransferFunds() {
    await this.page.click('text=Transfer Funds');
  }

  async navigateToBillPay() {
    await this.page.click('text=Bill Pay');
  }
}
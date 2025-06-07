import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
  }

  async openSavingsAccount() {
    await this.page.selectOption('select#type', '1');
    await this.page.click('input[value="Open New Account"]');
    const accountNumber = await this.page.locator('#newAccountId').textContent();
    return accountNumber.trim();
  }

  async verifyAccountInOverview(accountNumber) {
    const balanceLocator = this.page.locator(`a:text-is("${accountNumber}") >> .. >> .. >> td:nth-of-type(2)`);
    await expect(balanceLocator).toContainText('$');
  }
}
import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
  }

  async openSavingsAccount() {
    await this.page.selectOption('select#type', '1');
    await this.page.click('input[value="Open New Account"]');
    const accountNumber = await this.page.locator('#newAccountId').textContent();
    console.log('Created account number is: ' + accountNumber)
    return accountNumber.trim();
  }

  async verifyAccountInOverview(accountNumber) {
    console.log('Received account number:', accountNumber);
    if (!accountNumber || typeof accountNumber !== 'string') {
      throw new Error('A valid account number must be provided.');
    }
    const rowLocator = this.page.locator('#accountTable tbody tr', {
      has: this.page.locator(`td >> a:has-text("${accountNumber}")`)
    });
    const count = await rowLocator.count();
    if (count === 0) {
      throw new Error(`No row found for account number: ${accountNumber}`);
    }
    const balanceCell = rowLocator.locator('td').nth(1);
    const balanceText = await balanceCell.textContent();
    console.log(`Found balance cell text for ${accountNumber}: ${balanceText?.trim()}`);
    await expect(balanceCell).toContainText('$');
  }
  
  
}
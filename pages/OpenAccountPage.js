

import { expect } from '@playwright/test';

export class OpenAccountPage {
  /**
   * @param {import('@playwright/test').Page} page
   **/

  constructor(page) {
    this.page = page;
  }

  /**
   * Creating new savings account
   * @returns accountNumber
   */
  async openSavingsAccount() {
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('select#type',{state: 'visible'});
    await this.page.selectOption('select#type', '1');
    await this.page.waitForSelector('input[value="Open New Account"]',{state:'visible'});
    await this.page.click('input[value="Open New Account"]');
    await this.page.waitForSelector('#newAccountId',{state:'visible'});
    const accountNumber = await this.page.locator('#newAccountId').textContent();
    return accountNumber.trim();
  }

  /**
   * Verify the account over view page after creating new savings account
   * @param {accountNumber} accountNumber 
   */
  async verifyAccountInOverview(accountNumber) {
    await this.page.waitForLoadState('networkidle');
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
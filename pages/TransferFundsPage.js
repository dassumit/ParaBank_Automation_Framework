import { expect } from '@playwright/test';

export class TransferFundsPage {
  constructor(page) {
    this.page = page;
  }

  async transferFunds(fromAccount) {
    await this.page.fill('#amount', '100');
    await this.page.selectOption('#fromAccountId', fromAccount);
    await this.page.selectOption('#toAccountId', { index: 1 });
    await this.page.click('input[value="Transfer"]');
    await expect(this.page.locator('#rightPanel')).toContainText('Transfer Complete!');
  }
}
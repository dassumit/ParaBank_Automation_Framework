import { expect } from '@playwright/test';

export class BillPayPage {
  constructor(page) {
    this.page = page;
  }

  async payBill(accountNumber) {
    await this.page.fill('#payee\.name', 'Electricity Board');
    await this.page.fill('#payee\.address\.street', 'Electricity St');
    await this.page.fill('#payee\.address\.city', 'Mumbai');
    await this.page.fill('#payee\.address\.state', 'MH');
    await this.page.fill('#payee\.address\.zipCode', '400001');
    await this.page.fill('#payee\.phoneNumber', '9876543210');
    await this.page.fill('#payee\.accountNumber', '12345678');
    await this.page.fill('#verifyAccount', '12345678');
    await this.page.fill('#amount', '100');
    await this.page.selectOption('#fromAccountId', accountNumber);
    await this.page.click('input[value="Send Payment"]');
    await expect(this.page.locator('#rightPanel')).toContainText('Bill Payment Complete');
  }
}
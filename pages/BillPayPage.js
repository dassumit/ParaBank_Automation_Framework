import { expect } from '@playwright/test';

export class BillPayPage {

  /**
   * @param {import('@playwright/test').Page} page
   **/

  constructor(page) {
    this.page = page;
  }

  async payBill(accountNumber, amount) {
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator('[name="payee.name"]')).toBeVisible();
    await this.page.fill('[name="payee.name"]', 'Electricity Board');
    await this.page.fill('[name="payee.address.street"]', 'Electricity St');
    await this.page.fill('[name="payee.address.city"]', 'Mumbai');
    await this.page.fill('[name="payee.address.state"]', 'MH');
    await this.page.fill('[name="payee.address.zipCode"]', '400001');
    await this.page.fill('[name="payee.phoneNumber"]', '9876543210');
    const payeeAccount = '12345678';
    await this.page.fill('[name="payee.accountNumber"]', payeeAccount);
    await this.page.fill('[name="verifyAccount"]', payeeAccount);
    await this.page.fill('[name="amount"]', amount);
    await this.page.selectOption('[name="fromAccountId"]', accountNumber);
    await this.page.click('input.button[value="Send Payment"]');
    await expect(this.page.locator('#rightPanel')).toContainText('Bill Payment Complete');
  }
}
import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.navLinks = {
      accountsOverview: page.locator('a[href="overview.htm"]'),
      openNewAccount: page.locator('a[href="openaccount.htm"]'),
      transferFunds: page.locator('a[href="transfer.htm"]'),
      billPay: page.locator('a[href="billpay.htm"]'),
      findTransactions: page.locator('a[href="findtrans.htm"]'),
      updateContactInfo: page.locator('a[href="updateprofile.htm"]'),
      logout: page.locator('a[href="logout.htm"]'),
    };

     this.newAccountOpenLink = this.page.locator('text=Open New Account');
     this.accountsOverviewLink = this.page.locator('text=Accounts Overview');
     this.transferFundsLink = this.page.locator('text=Transfer Funds');
     this.billPayLink = this.page.locator('text=Bill Pay');



  }

  /**
   * Validates specific page title (only the one matching expectedText)
   * @param {string} expectedTitle 
   */
  async validatePageTitle(expectedTitle) {
    const titleLocator = this.page.locator(`//h2[contains(text(),'${expectedTitle}')]`);
    await expect(titleLocator).toBeVisible();
  }

  /**
   * Navigate to a specific menu item and verify destination page
   */
  async navigateAndValidate(menuKey, expectedTitle) {
    const navLink = this.navLinks[menuKey];
    if (!navLink) {
      throw new Error(`Navigation key '${menuKey}' is not defined.`);
    }
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      navLink.click(),
    ]);
  }

  /**
   * Nevigate to open account page
   */
  async navigateToOpenAccount() {
    await this.newAccountOpenLink.click();
  }

  /**
   * Nevigate to open account overview page
   */
  async navigateToAccountsOverview() {
    await this.accountsOverviewLink.click();
  }

  /**
   * Nevigate to transfer funds page
   */
  async navigateToTransferFunds() {
    await this.transferFundsLink.click();
  }

  /**
   * Nevigate to bill payment page
   */
  async navigateToBillPay() {
    await this.billPayLink.click();
  }
}

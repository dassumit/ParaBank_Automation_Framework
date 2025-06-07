import { expect } from '@playwright/test';

export class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').BrowserContext} context
   **/


  
  constructor(page, context) {
    this.page = page;
    this.context = context;
  }

  async login(username, password) {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.html');
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('input[value="Log In"]');
  }

  /**
   * After login validate that account overview will displayed or not
   * 
   */
  async validateAccountSummary() {
    const accountTable = this.page.locator('#accountTable');
    await expect(accountTable).toBeVisible();
    await expect(this.page.locator('th', { hasText: 'Account' })).toBeVisible();
    await expect(this.page.locator('th', { hasText: 'Balance*' })).toBeVisible();
    await expect(this.page.locator('th', { hasText: 'Available Amount' })).toBeVisible();
    const accountLink = this.page.locator('#accountTable a[href*="activity.htm?id="]');
    await expect(accountLink).toBeVisible();
    const balanceCell = this.page.locator('#accountTable td').nth(1);
    await expect(balanceCell).toContainText('$');
    await expect(this.page.locator('#accountTable td b', { hasText: 'Total' })).toBeVisible();
  }

  /**
   * Fetch the session cookie
   */
  async fetchJSessionId() {
    const cookies = await this.page.context().cookies();
    const jsessionCookie = cookies.find(cookie => cookie.name === 'JSESSIONID');
    if (!jsessionCookie) {
      throw new Error("JSESSIONID cookie not found");
    }  
    console.log('JSESSIONID value:', jsessionCookie.value);
    return jsessionCookie.value;
  }
  

  
}
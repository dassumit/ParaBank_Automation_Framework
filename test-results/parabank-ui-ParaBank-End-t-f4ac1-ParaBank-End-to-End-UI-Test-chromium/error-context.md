# Test info

- Name: ParaBank End-to-End UI Test Suite >> ParaBank End-to-End UI Test
- Location: /Users/sumit/Desktop/Para_Bank_Automation/tests/parabank-ui.spec.js:11:7

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('text=Accounts Overview') resolved to 2 elements:
    1) <a href="overview.htm">Accounts Overview</a> aka getByRole('link', { name: 'Accounts Overview' })
    2) <h1 class="title">↵⇆⇆⇆Accounts Overview↵⇆⇆</h1> aka getByRole('heading', { name: 'Accounts Overview' })

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('text=Accounts Overview')

    at HomePage.verifyNavigationMenu (/Users/sumit/Desktop/Para_Bank_Automation/pages/HomePage.js:9:63)
    at /Users/sumit/Desktop/Para_Bank_Automation/tests/parabank-ui.spec.js:34:18
    at /Users/sumit/Desktop/Para_Bank_Automation/tests/parabank-ui.spec.js:33:16
```

# Page snapshot

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome Sumit Das
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - cell "Account"
      - cell "Balance*"
      - cell "Available Amount"
  - rowgroup:
    - row "16119 $515.50 $515.50":
      - cell "16119":
        - link "16119":
          - /url: activity.htm?id=16119
      - cell "$515.50"
      - cell "$515.50"
    - row "Total $515.50":
      - cell "Total"
      - cell "$515.50"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 |
   3 | export class HomePage {
   4 |   constructor(page) {
   5 |     this.page = page;
   6 |   }
   7 |
   8 |   async verifyNavigationMenu() {
>  9 |     await expect(this.page.locator('text=Accounts Overview')).toBeVisible();
     |                                                               ^ Error: expect.toBeVisible: Error: strict mode violation: locator('text=Accounts Overview') resolved to 2 elements:
  10 |     await expect(this.page.locator('text=Transfer Funds')).toBeVisible();
  11 |     await expect(this.page.locator('text=Bill Pay')).toBeVisible();
  12 |   }
  13 |
  14 |   async navigateToOpenAccount() {
  15 |     await this.page.click('text=Open New Account');
  16 |   }
  17 |
  18 |   async navigateToAccountsOverview() {
  19 |     await this.page.click('text=Accounts Overview');
  20 |   }
  21 |
  22 |   async navigateToTransferFunds() {
  23 |     await this.page.click('text=Transfer Funds');
  24 |   }
  25 |
  26 |   async navigateToBillPay() {
  27 |     await this.page.click('text=Bill Pay');
  28 |   }
  29 | }
```
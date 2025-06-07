# Test info

- Name: ParaBank End-to-End UI Test Suite >> ParaBank End-to-End UI Test
- Location: /Users/sumit/Desktop/ParaBank_Automation/tests/parabank-ui.spec.js:11:7

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#payee.name')

    at BillPayPage.payBill (/Users/sumit/Desktop/ParaBank_Automation/pages/BillPayPage.js:9:21)
    at /Users/sumit/Desktop/ParaBank_Automation/tests/parabank-ui.spec.js:72:18
    at /Users/sumit/Desktop/ParaBank_Automation/tests/parabank-ui.spec.js:70:5
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
- heading "Bill Payment Service" [level=1]
- paragraph: Enter payee information
- table:
  - rowgroup:
    - row "Payee Name:":
      - cell "Payee Name:"
      - cell:
        - textbox
      - cell
    - row "Address:":
      - cell "Address:"
      - cell:
        - textbox
      - cell
    - row "City:":
      - cell "City:"
      - cell:
        - textbox
      - cell
    - row "State:":
      - cell "State:"
      - cell:
        - textbox
      - cell
    - row "Zip Code:":
      - cell "Zip Code:"
      - cell:
        - textbox
      - cell
    - 'row "Phone #:"':
      - 'cell "Phone #:"'
      - cell:
        - textbox
      - cell
    - row:
      - cell
    - 'row "Account #:"':
      - 'cell "Account #:"'
      - cell:
        - textbox
      - cell
    - 'row "Verify Account #:"':
      - 'cell "Verify Account #:"'
      - cell:
        - textbox
      - cell
    - row:
      - cell
    - 'row "Amount: $"':
      - 'cell "Amount: $"'
      - cell:
        - textbox
      - cell
    - row:
      - cell
    - 'row "From account #: 33213"':
      - 'cell "From account #:"'
      - cell "33213":
        - combobox:
          - option "33213" [selected]
          - option "33324"
    - row "Send Payment":
      - cell
      - cell "Send Payment":
        - button "Send Payment"
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
   3 | export class BillPayPage {
   4 |   constructor(page) {
   5 |     this.page = page;
   6 |   }
   7 |
   8 |   async payBill(accountNumber) {
>  9 |     await this.page.fill('#payee\.name', 'Electricity Board');
     |                     ^ Error: page.fill: Test timeout of 30000ms exceeded.
  10 |     await this.page.fill('#payee\.address\.street', 'Electricity St');
  11 |     await this.page.fill('#payee\.address\.city', 'Mumbai');
  12 |     await this.page.fill('#payee\.address\.state', 'MH');
  13 |     await this.page.fill('#payee\.address\.zipCode', '400001');
  14 |     await this.page.fill('#payee\.phoneNumber', '9876543210');
  15 |     await this.page.fill('#payee\.accountNumber', '12345678');
  16 |     await this.page.fill('#verifyAccount', '12345678');
  17 |     await this.page.fill('#amount', '100');
  18 |     await this.page.selectOption('#fromAccountId', accountNumber);
  19 |     await this.page.click('input[value="Send Payment"]');
  20 |     await expect(this.page.locator('#rightPanel')).toContainText('Bill Payment Complete');
  21 |   }
  22 | }
```
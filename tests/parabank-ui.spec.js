import { test } from '@playwright/test';
import { generateUniqueUsername } from '../utils/dataGenerator';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { OpenAccountPage } from '../pages/OpenAccountPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';
import { BillPayPage } from '../pages/BillPayPage';

test.describe('ParaBank End-to-End UI Test Suite', () => {
  test('ParaBank End-to-End UI Test', async ({ page }) => {
    const username = generateUniqueUsername();
    const password = 'Test@123';

    const register = new RegisterPage(page);
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const account = new OpenAccountPage(page);
    const transfer = new TransferFundsPage(page);
    const bill = new BillPayPage(page);

    let accountNumber;

    await test.step('1: Navigate to Para bank application', async () => {
      await register.navigate();
    });

    await test.step('2: Create a new user from user registration page', async () => {
      await register.registerUser(username, password);
      await register.validateUserName(username);
      await register.verifySuccess();
      await register.logout();
    });

    await test.step('3: Login to the application with the user created in step 2', async () => {
      await login.login(username, password);
    });

    await test.step('3A: After login validate account overview should displayed', async () => {
      await login.validateAccountSummary();
    });

    await test.step('4: Verify if the Global navigation menu in home page is working as expected', async () => {
      await home.validatePageTitle('Account Services');
      await home.navigateAndValidate('accountsOverview', 'Accounts Overview');
      await home.navigateAndValidate('openNewAccount', 'Open New Account');
      await home.navigateAndValidate('transferFunds', 'Transfer Funds');
      await home.navigateAndValidate('billPay', 'Bill Payment Service');
      await home.navigateAndValidate('findTransactions', 'Find Transactions');
      await home.navigateAndValidate('updateContactInfo', 'Update Profile');
    });

    await test.step('5: Create a Savings account from “Open New Account Page” and capture the account number', async () => {
      await home.navigateToOpenAccount();
      accountNumber = await account.openSavingsAccount();
      console.log('Account Number captured in test:', accountNumber);
      await home.navigateToAccountsOverview();
      await account.verifyAccountInOverview(accountNumber);
    });

    await test.step('6: Validate if Accounts overview page is displaying the balance details as expected', async () => {
      await account.verifyAccountInOverview(accountNumber);
    });

    await test.step('7: Transfer funds from account created in step 5 to another account', async () => {
      await home.navigateToTransferFunds();
      await transfer.transferFunds(accountNumber);
    });

    await test.step('8: Pay the bill with account created in step 5', async () => {
      await home.navigateToBillPay();
      await bill.payBill(accountNumber);
    });
  });
});

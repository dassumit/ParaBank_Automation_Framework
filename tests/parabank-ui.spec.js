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

    await test.step('Navigate to registration page and register a new user', async () => {
      await register.navigate();
      await register.registerUser(username, password);
      await register.verifySuccess();
      await register.logout();
    });

    await test.step('Login with the newly registered user', async () => {
      await login.login(username, password);
    });

    // await test.step('Verify global navigation menu is visible', async () => {
    //   await home.verifyNavigationMenu();
    // });

    // await test.step('Open a new savings account', async () => {
    //   await home.navigateToOpenAccount();
    // });

    
    // await test.step('Create a new savings account and capture the account number', async () => {
    //   accountNumber = await account.openSavingsAccount();
    // });

    // await test.step('Validate account is listed in accounts overview', async () => {
    //   await home.navigateToAccountsOverview();
    //   await account.verifyAccountInOverview(accountNumber);
    // });

    // await test.step('Transfer funds using the new account', async () => {
    //   await home.navigateToTransferFunds();
    //   await transfer.transferFunds(accountNumber);
    // });

    // await test.step('Pay a bill using the new account', async () => {
    //   await home.navigateToBillPay();
    //   await bill.payBill(accountNumber);
    // });
  });
});

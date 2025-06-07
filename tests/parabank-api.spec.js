const { test, request, expect } = require('@playwright/test');

test('Find transaction by amount using API', async () => {
  const context = await request.newContext();
  const response = await context.get('https://parabank.parasoft.com/parabank/services/bank/findTrans?amount=100');
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.text();
  console.log('Transaction search response:', responseBody);

  // Basic validation
  expect(responseBody).toContain('<amount>100</amount>');
});
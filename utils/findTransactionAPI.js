import { request, expect } from '@playwright/test';

/**
 * Get transaction history by amount
 * @param {accountNumber} accountNumber 
 * @param {amount} amount 
 * @param {jsessionID} jsessionID 
 */
export async function transactionByAmount(accountNumber, amount, jsessionID){
        const context = await request.newContext({
          extraHTTPHeaders: {
            Cookie: `JSESSIONID=${jsessionID}`
          }
        });
    
        const response = await context.get(
          `https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountNumber}/transactions/amount/${amount}?timeout=30000`
        );
    
        console.log('Status:', response.status());
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log('Response body:', responseBody);
        expect(responseBody).toBeInstanceOf(Array);
        expect(responseBody.length).toBeGreaterThan(0);
        const transaction = responseBody[0];
        expect(transaction).toMatchObject({
          type: 'Debit',
          amount: parseInt(amount),
          description: 'Bill Payment to Electricity Board'
        });
        expect(transaction.accountId).toBe(parseInt(accountNumber));
      }

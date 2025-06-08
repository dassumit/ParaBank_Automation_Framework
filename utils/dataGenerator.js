/**
 * Generate dynamic user name for each transaction
 * @returns dynamic userName
 */
export function generateUniqueUsername () {
  return 'user_' + Date.now();
}

/**
 * Generate transaction amount from 10 to 100 for each transaction
 * @returns dynamic amount for transaction
 */
export function generateAmount(){
  const genAmount = Math.floor(Math.random() * (100-10 +1)) +10;
  return JSON.stringify(genAmount);
}
export function generateUniqueUsername () {
  return 'user_' + Date.now();
}

export function generateAmount(){
  const genAmount = Math.floor(Math.random() * (100-10 +1)) +10;
  return JSON.stringify(genAmount);
}
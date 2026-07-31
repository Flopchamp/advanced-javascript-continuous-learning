const assert = require('assert');
const BankAccount = require('./Bank Account Management.js');

const account = new BankAccount();

account.deposit(100);
account.deposit(150);
account.deposit(110);
account.withdraw(20);
account.withdraw(50);
account.withdraw(60);

assert.strictEqual(account.checkBalance(), 'Current balance: $230');
assert.deepStrictEqual(account.listAllDeposits(), 'Deposits: 100,150,110');
assert.deepStrictEqual(account.listAllWithdrawals(), 'Withdrawals: 20,50,60');

console.log('Bank account tests passed.');

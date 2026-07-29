class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const depositAmounts = [];
    for (const transaction of this.transactions) {
      if (transaction.type === "deposit") {
        depositAmounts.push(transaction.amount);
      }
    }
    return `Deposits: ${depositAmounts.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (const transaction of this.transactions) {
      if (transaction.type === "withdraw") {
        withdrawals.push(transaction.amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

if (require.main === module) {
  const myAccount = new BankAccount();

  console.log(myAccount.deposit(100));
  console.log(myAccount.deposit(150));
  console.log(myAccount.deposit(110));

  console.log(myAccount.withdraw(20));
  console.log(myAccount.withdraw(50));
  console.log(myAccount.withdraw(60));

  console.log(myAccount.checkBalance());
  console.log(myAccount.listAllDeposits());
  console.log(myAccount.listAllWithdrawals());
}

module.exports = BankAccount;
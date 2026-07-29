class BankAccount{
  constructor(){
    this.balance =0;
    this.transactions=[]
  }
  deposit(amount){
    if(amount > 0){
      this.transactions.push({type:"deposit",amount})
      this.balance +=amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    }else{
      return "Deposit amount must be greater than zero."
    }
    
  }
  withdraw(amount){
    if(amount > 0 && amount <= this.balance){
      this.transactions.push({type:"withdraw",amount})
      this.balance -=amount
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    }else{
      return "Insufficient balance or invalid amount."
    }
  }
  checkBalance(){
   return`Current balance: $${this.balance}`
  }
  listAllDeposits(){
    const depositAmounts = []
   for (const transaction of this.transactions){
    if(transaction.type ==="deposit"){
      depositAmounts.push(transaction.amount)
    }
   }
   return `Deposits: ${depositAmounts.join(",")}`
  }

  listAllWithdrawals(){
    const withdrawals =[]
    for(const transaction of this.transactions){
      if(transaction.type ==="withdraw"){
        withdrawals.push(transaction.amount)
      }
    }
    return`Withdrawals: ${withdrawals.join(",")}`
  }
}

const myAccount = new BankAccount()

myAccount.deposit(100);

myAccount.deposit(150);

myAccount.deposit(110);


myAccount.withdraw(20);
myAccount.withdraw(50);
myAccount.withdraw(60);
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.checkBalance());
console.log(myAccount.listAllWithdrawals());
console.log(myAccount.checkBalance());
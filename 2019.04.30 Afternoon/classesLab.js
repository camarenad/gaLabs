class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }

    deposit(amtDeposited) {
        this.balance += amtDeposited;
        console.log(`Deposit complete. Your new balance is ${this.balance}`);
    }

    withdraw(amtWithdrawn) {
        this.balance += amtWithdrawn;
        console.log(`Withdrawal complete. Your new balance is ${this.balance}`);
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(amtWithdrawn) {
        if (this.overdraftEnabled == true && amtWithdrawn > this.balance) {
            this.balance = (this.balance - amtWithdrawn) - 30
            console.log(`Withdrawal complete. Your account is now overdrawn. Your new balance is ${this.balance}, which includes an overdraft charge of \$30.`);
        } else if (this.overdraftEnabled == false && amtWithdrawn > this.balance) {
            console.log(`Sorry, you don't have enough funds to withdraw that amount. Your current balance is ${this.balance}`);
        } else {
            this.balance += amtWithdrawn;
            console.log(`Withdrawal complete. Your new balance is ${this.balance}`);
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance, acctNum) {
        super(ownerName, balance, acctNum);
    }
    withdraw() {
        console.log('This is a Savings Accounts. You cannot make a withdrawal at this time.');
    }
}

var myAcct = new CheckingAccount('Mike', 12345, Math.floor(Math.random() * 20000000), true);
console.log(myAcct);
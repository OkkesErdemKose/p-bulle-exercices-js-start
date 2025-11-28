//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  money;
  isOpen;
  
  constructor() {
    this.money = 0;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
    this.money = 0;

  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
    this.money = 0;

  }

  deposit(moneyToDeposit) {
    if (!this.isOpen || moneyToDeposit <= 0) {
      throw new ValueError();
    }
    this.money += moneyToDeposit;

  }

  withdraw(moneyToWithdrwaw) {
    if (!this.isOpen || this.money < moneyToWithdrwaw || moneyToWithdrwaw <= 0) {
      throw new ValueError();
    }
    this.money -= moneyToWithdrwaw;
    
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
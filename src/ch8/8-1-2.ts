import { AccountTypeEnum } from './chapter-8-interface';

export class Account {
  #type: AccountType;
  #daysOverdrawn: number;

  constructor(accountType: AccountType, daysOverdrawn: number) {
    this.#type = accountType;
    this.#daysOverdrawn = daysOverdrawn;
  }

  get bankCharge(): number {
    let result = 4.5;
    return this.#daysOverdrawn <= 0
      ? result
      : (result += this.#type.overdraftCharge(this.#daysOverdrawn));
  }

  get daysOverdrawn(): number {
    return this.#daysOverdrawn;
  }
}

export class AccountType {
  #type: string;

  constructor(type: AccountTypeEnum) {
    this.#type = type;
  }

  get isPremium(): boolean {
    return this.#type === AccountTypeEnum.PREMIUM;
  }

  overdraftCharge(daysOverdrawn: number): number {
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    } else {
      const baseCharge = 10;
      return daysOverdrawn <= 7 ? baseCharge : baseCharge + (daysOverdrawn - 7) * 0.85;
    }
  }
}

export function printEightDashOneSecond() {
  console.log('\nchapter 8.1.2 >>>>>>>>>> ');
  console.log(' 17.05:', new Account(new AccountType(AccountTypeEnum.PREMIUM), 10).bankCharge);
  console.log(' 14.5:', new Account(new AccountType(AccountTypeEnum.PREMIUM), 5).bankCharge);
}

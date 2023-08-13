import { AccountType } from './chapter-8-interface';

export class Account {
  BASE_CHARGE = 10;
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
      : (result += this.overdraftCharge(this.#daysOverdrawn));
  }

  get daysOverdrawn(): number {
    return this.#daysOverdrawn;
  }

  get isPremium(): boolean {
    return this.#type === AccountType.PREMIUM;
  }

  overdraftCharge(daysOverdrawn: number): number {
    if (!this.isPremium) {
      return daysOverdrawn * 1.75;
    } else {
      return daysOverdrawn <= 7
        ? this.BASE_CHARGE
        : this.BASE_CHARGE + (daysOverdrawn - 7) * 0.85;
    }
  }
}

export function printEightDashOneSecond() {
  console.log('\nchapter 8.1.2 >>>>>>>>>> ');
  console.log(' 17.05:', new Account(AccountType.PREMIUM, 10).bankCharge);
  console.log(' 14.5:', new Account(AccountType.PREMIUM, 5).bankCharge);
}

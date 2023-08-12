export class Account {
  private type: AccountType;
  private _daysOverdrawn: number;

  constructor(accountType: AccountType, daysOverdrawn: number) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }

  get bankCharge(): number {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge(): number {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    } else return this._daysOverdrawn * 1.75;
  }

  get daysOverdrawn(): number {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  private _type: string;

  constructor(type: string) {
    this._type = type;
  }

  get isPremium(): boolean {
    return this._type === 'Premium';
  }
}

export function printEightDashOneSecond() {
  console.log('\nchapter 8.1.2 >>>>>>>>>> ');
  console.log(' 17.05:', new Account(new AccountType('Premium'), 10).bankCharge);
  console.log(' 14.5:', new Account(new AccountType('Premium'), 5).bankCharge);
}

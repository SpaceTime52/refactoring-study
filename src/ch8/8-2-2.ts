class Account {
  private _number: number;
  private _type: AccountType;
  private _interestRate: number;

  constructor(number: number, type: AccountType, interestRate: number) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }

  get interestRate(): number {
    return this._interestRate;
  }
}

class AccountType {
  private _name: string;

  constructor(nameString: string) {
    this._name = nameString;
  }
}

class Account {
  #number: number;
  #type: AccountType;

  constructor(number: number, type: AccountType, interestRate: number) {
    this.#number = number;
    this.#type = type;
    this.#type.interestRate = interestRate; // 계좌타입에 완전히 종속적인 게 아니라면 이렇게 하면 안됨
  }

  get interestRate(): number {
    return this.#type.interestRate;
  }
}

class AccountType {
  #name: string;
  #interestRate: number;

  constructor(nameString: string) {
    this.#name = nameString;
    this.#interestRate = 0.05; // 초기값
  }

  get interestRate(): number {
    return this.#interestRate;
  }

  set interestRate(arg: number) {
    this.#interestRate = arg;
  }
}

export function printEightDashTwoSecond() {
  console.log('\nchapter 8.2.2 >>>>>>>>>> ');
  console.log(
    ' 0.1:',
    new Account(1234, new AccountType('Premium'), 0.1).interestRate,
  );
}

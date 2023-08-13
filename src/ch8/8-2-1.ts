type Money = {
  subtract: (value: number) => number;
  multiply: (value: number) => number;
};

export class Customer {
  #name: string;
  #contract: CustomerContract;

  constructor(name: string, discountRate: number) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday(), discountRate);
  }

  get discountRate(): number {
    return this.#contract.discountRate;
  }

  becomePreferred(): void {
    this.#contract.discountRate += 0.03;
    // other code...
  }

  applyDiscount(amount: Money): number {
    return amount.subtract(amount.multiply(this.discountRate));
  }

  dateToday(): Date {
    return new Date();
  }
}

class CustomerContract {
  #startDate: Date;
  #discountRate: number;

  constructor(startDate: Date, discountRate: number) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate(): number {
    return this.#discountRate;
  }

  set discountRate(value: number) {
    this.#discountRate = value;
  }
}

export function printEightDashTwoFirst() {
  console.log('\nchapter 8.2.1 >>>>>>>>>> ');
  console.log(' 0.1:', new Customer('martin', 0.1).discountRate);
}

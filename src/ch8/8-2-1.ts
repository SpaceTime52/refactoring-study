type Money = {
  subtract: (value: number) => number;
  multiply: (value: number) => number;
};

export class Customer {
  #name: string;
  #discountRate: number;
  #contract: CustomerContract;

  constructor(name: string, discountRate: number) {
    this.#name = name;
    this.#discountRate = discountRate;
    this.#contract = new CustomerContract(this.dateToday());
  }

  get discountRate(): number {
    return this.#discountRate;
  }

  becomePreferred(): void {
    this.#discountRate += 0.03;
    // other code...
  }

  applyDiscount(amount: Money): number {
    return amount.subtract(amount.multiply(this.#discountRate));
  }

  dateToday(): Date {
    return new Date();
  }
}

class CustomerContract {
  #startDate: Date;

  constructor(startDate: Date) {
    this.#startDate = startDate;
  }
}

export function printEightDashTwoFirst() {
  console.log('\nchapter 8.2.1 >>>>>>>>>> ');
  console.log(' 0.1:', new Customer('martin', 0.1).discountRate);
}

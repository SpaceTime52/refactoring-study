type Money = {
  subtract: (value: number) => Money;
  multiply: (value: number) => Money;
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

  applyDiscount(amount: Money): Money {
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

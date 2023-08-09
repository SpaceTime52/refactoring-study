class Customer {
  discountRate: number;

  constructor() {
    this.discountRate = 0;
  }

  applyDiscount(number: number): number {
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

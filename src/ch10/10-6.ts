import { strict as assert } from 'node:assert';

class CustomerService {
  discountRate: number;

  constructor() {
    this.discountRate = 0;
  }

  applyDiscount(number: number): number {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

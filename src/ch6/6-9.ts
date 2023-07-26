export class Reading {
  #customer: string;
  #quantity: number;
  #month: number;
  #year: number;

  constructor(data: { customer: string; quantity: number; month: number; year: number }) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer(): string {
    return this.#customer;
  }
  get quantity(): number {
    return this.#quantity;
  }
  get month(): number {
    return this.#month;
  }
  get year(): number {
    return this.#year;
  }

  get baseRate(): number {
    if (this.year === 2017 && this.month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge(): number {
    return this.baseRate * this.quantity;
  }

  get taxThreshold(): number {
    return 0.1;
  }

  get taxableCharge(): number {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}

const reading: Reading = new Reading({ customer: 'ivan', quantity: 10, month: 5, year: 2017 });
export function acquireReading(): Reading {
  return reading;
}

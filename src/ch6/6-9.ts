export interface Reading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

const reading: Reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading(): Reading {
  return reading;
}

export function baseRate(month: number, year: number): number {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

import _ from 'lodash';

export interface Reading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
  baseCharge?: number;
  taxableCharge?: number;
}

const reading: Reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading(): Reading {
  return reading;
}

export function enrichReading(original: Reading): Reading {
  const reading: Reading = _.cloneDeep(original);
  reading.baseCharge = baseRate(reading.month, reading.year) * reading.quantity;
  reading.taxableCharge = Math.max(0, reading.baseCharge - taxThreshold());

  return reading;
}

export function baseRate(month: number, year: number): number {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

function taxThreshold(): number {
  return 0.1;
}

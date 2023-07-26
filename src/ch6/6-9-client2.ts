import { acquireReading, baseRate } from './6-9';

interface Reading {
  month: number;
  year: number;
  quantity: number;
}

const aReading: Reading = acquireReading();
const base: number = baseRate(aReading.month, aReading.year) * aReading.quantity;

function taxThreshold(year: number): number {
  return 0.1;
}

export const taxableCharge: number = Math.max(0, base - taxThreshold(aReading.year));

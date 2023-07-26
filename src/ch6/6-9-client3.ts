import { acquireReading, baseRate } from './6-9';

interface Reading {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

const aReading: Reading = acquireReading();

export function calculateBaseCharge(aReading: Reading): number {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

const basicChargeAmount: number = calculateBaseCharge(aReading);

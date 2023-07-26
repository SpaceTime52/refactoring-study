import { acquireReading, baseRate } from './6-10';

interface Reading {
  month: number;
  year: number;
  quantity: number;
}

const aReading: Reading = acquireReading();
export const baseCharge: number = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);

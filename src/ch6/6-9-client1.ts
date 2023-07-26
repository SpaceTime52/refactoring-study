import { Reading, acquireReading, baseRate } from './6-9';

const aReading: Reading = acquireReading();

const baseCharge: number = baseRate(aReading.month, aReading.year) * aReading.quantity;
console.log(baseCharge);

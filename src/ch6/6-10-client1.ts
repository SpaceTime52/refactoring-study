import { Reading, acquireReading, enrichReading } from './6-10';

const rawReading: Reading = acquireReading();
const reading: Reading = enrichReading(rawReading);

export const baseCharge: number = reading?.baseCharge ? reading?.baseCharge : 0;

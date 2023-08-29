import { Instrument } from './chapter10.interface';

export function adjustedCapital(instrument: Instrument): number {
  if (!isEligibleForAdjustedCapital(instrument)) return 0;
  return (
    (instrument.income / instrument.duration) * instrument.adjustmentFactor
  );
}

function isEligibleForAdjustedCapital(instrument: Instrument): boolean {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}

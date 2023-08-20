interface Instrument {
  capital: number;
  interestRate: number;
  duration: number;
  income: number;
  adjustmentFactor: number;
}

export function adjustedCapital(instrument: Instrument): number {
  let result = 0;
  if (instrument.capital > 0) {
    if (instrument.interestRate > 0 && instrument.duration > 0) {
      result = (instrument.income / instrument.duration) * instrument.adjustmentFactor;
    }
  }
  return result;
}

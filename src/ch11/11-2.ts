// 예제 1
interface Person {
  salary: {
    multiply: (factor: number) => void;
  };
}

function tenPercentRaise(person: Person): void {
  person.salary.multiply(1.1);
}

function fivePercentRaise(person: Person): void {
  person.salary.multiply(1.05);
}

// 예제 2
interface CurrencyValue {
  currency: string;
  currencyName: string;
  value: number;
}

export function baseCharge(usage: number): CurrencyValue {
  if (usage < 0) return usd(0);
  const amount = bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07;
  return usd(amount);
}

function bottomBand(usage: number): number {
  return Math.min(usage, 100);
}

function middleBand(usage: number): number {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage: number): number {
  return usage > 200 ? usage - 200 : 0;
}

function usd(value: number): CurrencyValue {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}

// Chapter 11-2. 함수 매개변수화하기
import { Person, CurrencyValue } from './chapter-11.interfaces';

// 예제 1
function raiseSalary(person: Person, factorRatio: number): void {
  person.salary.multiply(1 + factorRatio);
}

// 예제 2

export function baseCharge(usage: number): CurrencyValue {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage: number, bottom: number, top: number): number {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value: number): CurrencyValue {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}

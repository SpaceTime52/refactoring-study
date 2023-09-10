import { HistoryEntry, Voyage } from './chapter10.interface';

export function getRating(voyage: Voyage, history: HistoryEntry[]): string {
  if (voyage.zone === 'china' && hasHistoryChina(history)) {
    return new ExperiencedChinaRating(voyage, history).등급;
  }
  return new Rating(voyage, history).등급;
}

function hasHistoryChina(history: HistoryEntry[]): boolean {
  return history.some((v) => 'china' === v.zone);
}

class Rating {
  #voyage: Voyage;
  #history: HistoryEntry[];

  constructor(voyage: Voyage, history: HistoryEntry[]) {
    this.#voyage = voyage;
    this.#history = history;
  }

  get voyage() {
    return this.#voyage;
  }

  get history() {
    return this.#history;
  }

  get 등급(): string {
    // 특정 조건에 따라 투자등급인 A 또는 B를 반환한다.
    return this.voyageProfitFactor * 3 >
      this.voyagePathRiskFactor + this.captainHistoryRiskFactor * 2
      ? 'A'
      : 'B';
  }

  get voyageProfitFactor(): number {
    // 수익을 나타내는 지표
    let result = 2;
    if (this.voyage.zone === 'china') result += 1;
    if (this.voyage.zone === 'east-indies') result += 1;
    result += this.voyageHistoryAndLengthFactor;
    return result;
  }

  get voyageHistoryAndLengthFactor(): number {
    // 항해 이력과 항해 길이에 따른 위험 요소
    let result = 0;
    if (this.history.length > 8) result += 1;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }

  get voyagePathRiskFactor(): number {
    // 항해 경로가 가진 위험요소
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (['china', 'east-indies'].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRiskFactor(): number {
    // 선장의 항해 이력에 따른 위험 요소
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }
}

class ExperiencedChinaRating extends Rating {
  get captainHistoryRiskFactor(): number {
    const result = super.captainHistoryRiskFactor - 2;
    return Math.max(result, 0);
  }

  get voyageHistoryAndLengthFactor(): number {
    let result = 3;
    if (history.length > 10) result += 1;
    if (super.voyage.length > 12) result += 1;
    if (super.voyage.length > 18) result -= 1;
    return result;
  }
}

export function printFourDashSecond(): void {
  const voyage: Voyage = { zone: 'west-indies', length: 10 };
  const history: HistoryEntry[] = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 },
  ];
  const rate = getRating(voyage, history);
  console.log(rate);
}

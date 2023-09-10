// Chapter 10-4. 조건부 로직을 다형성으로 바꾸기
export function plumages(birds: Bird[]) {
  return new Map(birds.map((bird: Bird) => [bird.name, bird.plumage]));
}

export function speeds(birds: Bird[]): Map<string, number | null> {
  return new Map(birds.map((bird: Bird) => [bird.name, bird.airSpeedVelocity]));
}

class Bird {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  get plumage(): string {
    return 'unknown';
  }

  get airSpeedVelocity(): number | null {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  get plumage(): string {
    return 'average';
  }

  get airSpeedVelocity(): number | null {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  #numberOfCoconuts: number;
  constructor(numberOfCoconuts: number) {
    super('AfricanSwallow');
    this.#numberOfCoconuts = numberOfCoconuts;
  }

  get numberOfCoconuts(): number {
    return this.#numberOfCoconuts;
  }

  get plumage(): string {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity(): number | null {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  #voltage: number;
  #isNailed: boolean;

  constructor(voltage: number, isNailed: boolean) {
    super('NorwegianBlueParrot');
    this.#voltage = voltage;
    this.#isNailed = isNailed;
  }

  get voltage(): number {
    return this.#voltage;
  }

  get isNailed(): boolean {
    return this.#isNailed;
  }

  get plumage(): string {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity(): number | null {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

export function printFourDashFirst(): void {
  const plumagesResult = plumages([
    new EuropeanSwallow(),
    new AfricanSwallow(3),
    new NorwegianBlueParrot(100, false),
  ]);
  const speedsResult = speeds([
    new EuropeanSwallow(),
    new AfricanSwallow(3),
    new NorwegianBlueParrot(100, false),
  ]);
  console.log(plumagesResult, speedsResult);
}

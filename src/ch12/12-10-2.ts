interface BirdData {
  name: string;
  plumage?: string;
  type?: string;
  numberOfCoconuts?: number;
  voltage?: number;
  isNailed?: boolean;
}

function createBird(bird: BirdData): Bird {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class Bird {
  protected _name: string;
  protected _plumage?: string;

  constructor(data: BirdData) {
    this._name = data.name;
    this._plumage = data.plumage;
  }

  get name(): string {
    return this._name;
  }

  get plumage(): string {
    return this._plumage || '보통이다';
  }

  get airSpeedVelocity(): number | null {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity(): number {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  private _numberOfCoconuts: number;

  constructor(data: BirdData) {
    super(data);
    this._numberOfCoconuts = data.numberOfCoconuts || 0;
  }

  get airSpeedVelocity(): number {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  private _voltage: number;
  private _isNailed: boolean;

  constructor(data: BirdData) {
    super(data);
    this._voltage = data.voltage || 0;
    this._isNailed = data.isNailed || false;
  }

  get plumage(): string {
    if (this._voltage > 100) {
      return '그을렸다';
    } else {
      return this._plumage || '예쁘다';
    }
  }

  get airSpeedVelocity(): number {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}

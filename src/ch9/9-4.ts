class Person {
  #name: string;
  #telephoneNumber: TelephoneNumber;

  constructor(name: string, areaCode: string, number: string) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name(): string {
    return this.#name;
  }

  set name(arg: string) {
    this.#name = arg;
  }

  get telephoneNumber(): string {
    return this.#telephoneNumber.toString();
  }

  get officeAreaCode(): string {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value: string) {
    this.#telephoneNumber.areaCode = value;
  }

  get officeNumber(): string {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value: string) {
    this.#telephoneNumber.number = value;
  }
}

class TelephoneNumber {
  #areaCode: string;
  #number: string;

  constructor(area: string, number: string) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode(): string {
    return this.#areaCode;
  }

  set areaCode(arg: string) {
    this.#areaCode = arg;
  }

  get number(): string {
    return this.#number;
  }

  set number(arg: string) {
    this.#number = arg;
  }

  toString(): string {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

export function printNineDashFour(): void {
  console.log('\nChapter 9.4 >>>>>>>>>>');
  const person = new Person('보현', '010', '12345678');
  console.log('보현:', person.name);
  console.log('010:', person.officeAreaCode);
  console.log('12345678:', person.officeNumber);
  console.log('(010) 12345678:', person.telephoneNumber);
}

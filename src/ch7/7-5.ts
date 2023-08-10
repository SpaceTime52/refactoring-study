class TelephoneNumber {
  #areaCode: string;
  #number: string;

  constructor(areaCode: string, number: string) {
    this.#areaCode = areaCode;
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

  get toString(): string {
    return `(${this.areaCode}) ${this.number}`;
  }
}

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
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode(): string {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(arg: string) {
    this.#telephoneNumber.areaCode = arg;
  }

  get officeNumber(): string {
    return this.#telephoneNumber.number;
  }

  set officeNumber(arg: string) {
    this.#telephoneNumber.number = arg;
  }
}

const person = new Person('Bohyeon', '010', '12345678');

export function printSevenDashFive(): void {
  console.log('Bohyeon:', person.name);
  console.log('010:', person.officeAreaCode);
  console.log('12345678:', person.officeNumber);
  console.log('(010) 12345678:', person.telephoneNumber);
}

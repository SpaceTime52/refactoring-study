class Person {
  #name: string;
  #officeAreaCode: string;
  #officeNumber: string;

  constructor(name: string, areaCode: string, number: string) {
    this.#name = name;
    this.#officeAreaCode = areaCode;
    this.#officeNumber = number;
  }

  get name(): string {
    return this.#name;
  }

  set name(arg: string) {
    this.#name = arg;
  }

  get telephoneNumber(): string {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode(): string {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg: string) {
    this.#officeAreaCode = arg;
  }

  get officeNumber(): string {
    return this.#officeNumber;
  }

  set officeNumber(arg: string) {
    this.#officeNumber = arg;
  }
}

const person = new Person('Bohyeon', '010', '12345678');

export function printSevenDashFive(): void {
  console.log('Bohyeon:', person.name);
  console.log('010:', person.officeAreaCode);
  console.log('12345678:', person.officeNumber);
  console.log('(010) 12345678:', person.telephoneNumber);
}

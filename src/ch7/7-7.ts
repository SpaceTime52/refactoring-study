// 7.7 위임 숨기기

class Person {
  #name: string;
  #department: Department;

  constructor(name: string, department: Department) {
    this.#name = name;
    this.#department = department;
  }

  get name(): string {
    return this.#name;
  }

  get department(): Department {
    return this.#department;
  }

  set department(arg: Department) {
    this.#department = arg;
  }

  get manager(): string {
    return this.#department.manager;
  }

  get chargeCode(): string {
    return this.#department.chargeCode;
  }
}

export class Department {
  #manager: string;
  #chargeCode: string;

  constructor(manager: string, chargeCode: string) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode(): string {
    return this.#chargeCode;
  }

  set chargeCode(arg: string) {
    this.#chargeCode = arg;
  }

  get manager(): string {
    return this.#manager;
  }

  set manager(arg: string) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', new Department('aManager', '999'));

export function printSevenDashSeven(): void {
  console.log('Tom:', person.name);
  console.log('aManager:', person.manager);
  console.log('999:', person.chargeCode);
}

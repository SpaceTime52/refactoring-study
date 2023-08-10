class DepartmentA {
  #manager: string;

  constructor(data: { manager: string }) {
    this.#manager = data.manager;
  }

  get manager(): string {
    return this.#manager;
  }

  set manager(arg: string) {
    this.#manager = arg;
  }
}

class PersonA {
  #department: DepartmentA;

  constructor(data: { manager: string }) {
    this.#department = new DepartmentA(data);
  }

  get manager(): string {
    return this.#department.manager;
  }

  set manager(arg: string) {
    this.#department.manager = arg;
  }
}

const person = new PersonA({ manager: 'aManager' });

export function printSevenDashEight(): void {
  console.log('aManager:', person.manager);
}

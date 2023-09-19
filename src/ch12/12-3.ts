class Party2 {}

class Employee2 extends Party2 {
  #name: string;
  #id: number;
  #monthlyCost: number;

  constructor(name: string, id: number, monthlyCost: number) {
    super();
    this.#name = name;
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }

  get name(): string {
    return this.#name;
  }

  get id(): number {
    return this.#id;
  }

  get monthlyCost(): number {
    return this.#monthlyCost;
  }
}

class Department2 extends Party2 {
  #name: string;
  #staff: Employee2;

  constructor(name: string, staff: Employee2) {
    super();
    this.#name = name;
    this.#staff = staff;
  }

  get name(): string {
    return this.#name;
  }

  get staff(): Employee2 {
    return this.#staff;
  }
}

const bohyeon2: Employee2 = new Employee2('보현', 123, 13);
const department: Department2 = new Department2('개발부서', bohyeon2);

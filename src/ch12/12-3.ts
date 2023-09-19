// 12-3. 생성자 본문 올리기
class Party2 {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }
}

class Employee2 extends Party2 {
  #id: number;
  #monthlyCost: number;

  constructor(name: string, id: number, monthlyCost: number) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }

  get id(): number {
    return this.#id;
  }

  get monthlyCost(): number {
    return this.#monthlyCost;
  }
}

class Department2 extends Party2 {
  #staff: Employee2;

  constructor(name: string, staff: Employee2) {
    super(name);
    this.#staff = staff;
  }

  get staff(): Employee2 {
    return this.#staff;
  }
}

const bohyeon2: Employee2 = new Employee2('보현', 123, 13);
const department: Department2 = new Department2('개발부서', bohyeon2);

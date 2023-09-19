class Party2 {}

class Employee2 extends Party2 {
  private _name: string;
  private _id: number;
  private _monthlyCost: number;

  constructor(name: string, id: number, monthlyCost: number) {
    super();
    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  get name(): string {
    return this._name;
  }

  get id(): number {
    return this._id;
  }

  get monthlyCost(): number {
    return this._monthlyCost;
  }
}

class Department2 extends Party2 {
  private _name: string;
  private _staff: Employee2;

  constructor(name: string, staff: Employee2) {
    super();
    this._name = name;
    this._staff = staff;
  }

  get name(): string {
    return this._name;
  }

  get staff(): Employee2 {
    return this._staff;
  }
}

const bohyeon2: Employee2 = new Employee2('보현', 123, 13);
const department: Department2 = new Department2('개발부서', bohyeon2);

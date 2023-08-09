// Base class
class Party {}

// Derived class: Employee
class Employee extends Party {
  private _name: string;
  private _id: number;
  private _monthlyCost: number;

  constructor(name: string, id: number, monthlyCost: number) {
    super();
    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  // Optional: getters for private properties
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

// Derived class: Department
class Department extends Party {
  private _name: string;
  private _staff: Employee; // assuming staff is of type Employee for this example

  constructor(name: string, staff: Employee) {
    super();
    this._name = name;
    this._staff = staff;
  }

  // Optional: getters for private properties
  get name(): string {
    return this._name;
  }

  get staff(): Employee {
    return this._staff;
  }
}

const bohyeon = new Employee('보현', 123, 13);
const department = new Department('개발부서', bohyeon);

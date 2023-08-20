// Base class
class Employee {}

// Derived class: Salesperson
class Salesperson extends Employee {
  private _name: string;

  // Optional: If you want getters and setters for the private variable
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

// Derived class: Engineer
class Engineer extends Employee {
  private _name: string;

  // Optional: If you want getters and setters for the private variable
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

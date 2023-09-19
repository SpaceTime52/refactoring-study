// Base class
class Employee {}

class Salesperson extends Employee {
  #name: string;

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}

class Engineer extends Employee {
  #name: string;

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}

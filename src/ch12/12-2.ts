// 12-2 필드 올리기
class Employee {
  #name: string;

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

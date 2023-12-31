class Employee {
  #name: string;
  #type: string;

  constructor(name: string, type: string) {
    this.validateType(type);
    this.#name = name;
    this.#type = type;
  }

  private validateType(arg: string): void {
    if (!['engineer', 'manager', 'salesperson'].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  get type(): string {
    return this.#type;
  }

  toString(): string {
    return `${this.#name} (${this.type})`;
  }
}

const bohyeon = new Employee('보현', 'engineer');
const bob = new Employee('밥', 'manager');

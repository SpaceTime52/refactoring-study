abstract class EmployeeCh12 {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  abstract get type(): string;

  toString(): string {
    return `${this.#name} (${this.type})`;
  }
}

class EngineerCh12 extends EmployeeCh12 {
  constructor(name: string) {
    super(name);
  }

  get type(): string {
    return 'engineer';
  }
}

class SalespersonCh12 extends EmployeeCh12 {
  constructor(name: string) {
    super(name);
  }

  get type(): string {
    return 'salesperson';
  }
}
class ManagerCh12 extends EmployeeCh12 {
  constructor(name: string) {
    super(name);
  }

  get type(): string {
    return 'manager';
  }
}

const bohyeon = new EngineerCh12('보현');
const bob = new ManagerCh12('밥');

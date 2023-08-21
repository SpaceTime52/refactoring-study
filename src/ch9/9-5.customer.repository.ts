import { Customer } from './9-5';

export class CustomerRepository {
  #customers: Map<number, Customer> = new Map();

  registerCustomer(id: number): Customer {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return this.findCustomer(id);
  }

  findCustomer(id: number): Customer {
    return this.#customers.get(id)!;
  }
}

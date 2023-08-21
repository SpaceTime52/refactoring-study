import { CustomerRepository } from './9-5.customer.repository';
import { OrderData } from './chapter-9-interface';

export class Order {
  #number: number;
  #customer: Customer;
  customerRepository: CustomerRepository = new CustomerRepository();

  constructor(data: OrderData) {
    this.#number = data.number;
    this.#customer = this.customerRepository.registerCustomer(data.customerId)!; // 값 -> 참조
  }

  get customer(): Customer {
    return this.#customer!;
  }
}

export class Customer {
  #id: number;

  constructor(id: number) {
    this.#id = id;
  }

  get id(): number {
    return this.#id;
  }
}

export function printNineDashFive(): void {
  console.log('\nChapter 9.5 >>>>>>>>>>');
  const order = new Order({ number: 1, customerId: 2 });
  console.log('2: ', order.customer.id);
  const customer = order.customer;
  console.log('2: ', customer.id);
}

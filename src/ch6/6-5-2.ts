interface Customer {
  id: number;
  // 이 외에도 다른 필드들이 있을 수 있습니다.
}

export default class Book {
  #reservations: Customer[];

  constructor() {
    this.#reservations = [];
  }

  addReservation(customer: Customer): void {
    this.#reservations.push(customer);
  }

  hasReservation(customer: Customer): boolean {
    return this.#reservations.some((reservedCustomer) => reservedCustomer.id === customer.id);
  }
}

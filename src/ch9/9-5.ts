type OrderData = {
  number: number;
  customerId: number;
};

class Order {
  private _number: number;
  private _customer: Customer;

  constructor(data: OrderData) {
    this._number = data.number;
    this._customer = new Customer(data.customerId);
  }

  get customer(): Customer {
    return this._customer;
  }
}

class Customer {
  private _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}

export function printNineDashFive(): void {
  console.log('\nChapter 9.5 >>>>>>>>>>');
  const order = new Order({ number: 1, customerId: 2 });
  console.log('2: ', order.customer.id);
  const customer = order.customer;
  console.log('2: ', customer.id);
}

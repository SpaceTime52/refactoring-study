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

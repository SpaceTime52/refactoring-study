interface Record {
  quantity: number;
  itemPrice: number;
}

export class Order {
  #data: Record;

  constructor(aRecord: Record) {
    this.#data = aRecord;
  }

  get quantity(): number {
    return this.#data.quantity;
  }

  get itemPrice(): number {
    return this.#data.itemPrice;
  }

  get price(): number {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }

  get basePrice(): number {
    return this.quantity * this.itemPrice;
  }

  get quantityDiscount(): number {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping(): number {
    return Math.min(this.basePrice * 0.1, 100);
  }
}

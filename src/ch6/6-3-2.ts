interface Record {
  quantity: number;
  itemPrice: number;
}

export class Order {
  private _data: Record;

  constructor(aRecord: Record) {
    this._data = aRecord;
  }

  get quantity(): number {
    return this._data.quantity;
  }

  get itemPrice(): number {
    return this._data.itemPrice;
  }

  get price(): number {
    return (
      this.quantity * this.itemPrice - Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 + Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }
}

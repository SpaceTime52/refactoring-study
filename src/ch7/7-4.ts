type Item = {
  price: number;
};

class ItemOrder {
  #quantity: number;
  #item: Item;

  constructor(quantity: number, item: Item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice(): number {
    return this.#quantity * this.#item.price;
  }

  get discountFactor(): number {
    return this.basePrice > 1000 ? 0.95 : 0.98;
  }

  get price(): number {
    return this.basePrice * this.discountFactor;
  }
}

export function printSevenDashFour(): void {
  const itemOrder = new ItemOrder(10, { price: 100 });
  console.log('980:', itemOrder.price);
}

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

  get price(): number {
    const basePrice = this.#quantity * this.#item.price;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

export function printSevenDashFour(): void {
  const itemOrder = new ItemOrder(10, { price: 100 });
  console.log('980:', itemOrder.price);
}

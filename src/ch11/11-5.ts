export class Order {
  quantity: number;
  itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get finalPrice(): number {
    const basePrice = this.quantity * this.itemPrice;
    let discountLevel: number;
    if (this.quantity > 100) discountLevel = 2;
    else discountLevel = 1;
    return this.discountedPrice(basePrice, discountLevel);
  }

  private discountedPrice(basePrice: number, discountLevel: number): number {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
      default:
        throw new Error('Invalid discount level provided');
    }
  }
}

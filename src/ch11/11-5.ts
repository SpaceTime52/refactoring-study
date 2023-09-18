// Chapter 11-5. 매개변수를 질의 함수로 바꾸기
export class Order {
  #quantity: number;
  #itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.#quantity = quantity;
    this.#itemPrice = itemPrice;
  }

  get basePrice(): number {
    return this.#quantity * this.#itemPrice;
  }

  get discountLevel(): number {
    return this.#quantity > 100 ? 2 : 1;
  }

  get finalPrice(): number {
    return this.discountedPrice();
  }

  private discountedPrice(): number {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
      default:
        throw new Error('Invalid discount level provided');
    }
  }
}

// 예제 1
class Order {
  #discountedTotal: number;
  #discount: number;

  constructor() {
    this.#discountedTotal = 100;
    this.#discount = 0;
  }

  get discountedTotal(): number {
    return this.#discountedTotal;
  }

  set discount(value: number) {
    const old = this.#discount;
    this.#discount = value;
    this.#discountedTotal += old - value;
  }
}

// 예제 2
type Adjustment = {
  amount: number;
  // ... possibly other properties ...
};

class ProductionPlan {
  #production: number;
  #adjustments: Adjustment[] = [];

  constructor(production: number) {
    this.#production = production;
  }

  get production(): number {
    return this.#production;
  }

  applyAdjustment(adjustment: Adjustment): void {
    this.#adjustments.push(adjustment);
    this.#production += adjustment.amount;
  }
}

export function printNineDashThree(): void {
  console.log('\nChapter 9.3 >>>>>>>>>>');
  const order = new Order();
  order.discount = 10;
  console.log('90: ', order.discountedTotal);
  const productionPlan = new ProductionPlan(100);
  productionPlan.applyAdjustment({ amount: 10 });
  console.log('110: ', productionPlan.production);
}

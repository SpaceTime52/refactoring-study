import { Adjustment } from './chapter-9-interface';

// 예제 1
class Order {
  #basePrice: number;
  #discount: number;

  constructor() {
    this.#basePrice = 100;
    this.#discount = 0;
  }

  get discountedTotal(): number {
    return this.#basePrice - this.#discount;
  }

  set discount(value: number) {
    this.#discount = value;
  }
}

// 예제 2
class ProductionPlan {
  #production: number;
  #adjustments: Adjustment[] = [];

  constructor(production: number) {
    this.#production = production;
  }

  get production(): number {
    return this.#adjustments.reduce(
      (sum: number, adjustment: Adjustment) => sum + adjustment.amount,
      this.#production,
    );
  }

  applyAdjustment(adjustment: Adjustment): void {
    this.#adjustments.push(adjustment);
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

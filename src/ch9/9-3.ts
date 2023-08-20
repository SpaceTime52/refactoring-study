// 예제 1
class Order {
  private _discountedTotal: number;
  private _discount: number;

  // Assuming there are other properties and they are initialized in the constructor.
  // ... other code ...

  get discountedTotal(): number {
    return this._discountedTotal;
  }

  set discount(value: number) {
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
  }
}

// 예제 2
type Adjustment = {
  amount: number;
  // ... possibly other properties ...
};

class ProductionPlan {
  private _production: number;
  private _adjustments: Adjustment[] = [];

  // Assuming there are other properties and they are initialized in the constructor.
  // ... other code ...

  get production(): number {
    return this._production;
  }

  applyAdjustment(adjustment: Adjustment): void {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}

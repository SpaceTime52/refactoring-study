export class Site {
  private _customer: Customer | string;

  constructor(customer: Customer | string) {
    this._customer = customer;
  }

  get customer(): Customer | string {
    return this._customer;
  }
}

export class Customer {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get billingPlan(): any {
    // Define the type for the billingPlan
    // Implementation
  }

  set billingPlan(arg: any) {
    // Define the type for arg
    // Implementation
  }

  get paymentHistory(): any {
    // Define the type for the paymentHistory
    // Implementation
  }
}

// Using the classes
export function customerName(site: Site): string {
  const aCustomer = site.customer;
  // More code may be here
  let customerName;
  if (aCustomer === 'unknown') customerName = 'occupant';
  else if (typeof aCustomer !== 'string') customerName = aCustomer.name;

  return customerName;
}

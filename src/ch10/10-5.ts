export class Site {
  #customer: Customer;
  constructor(customerName: string = 'unknown') {
    this.#customer =
      customerName === 'unknown'
        ? new UnknownCustomer()
        : new Customer(customerName);
  }

  get customer(): Customer {
    return this.#customer;
  }
}

export class Customer {
  #name: string;

  constructor(name: string = 'unknown') {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  get billingPlan(): any {
    return null;
  }

  set billingPlan(arg: any) {}

  get paymentHistory(): any {
    return null;
  }
}

export class UnknownCustomer extends Customer {
  get name(): string {
    return 'occupant';
  }
}

export function customerName(site: Site): string {
  return site.customer.name;
}

export function printFive(): void {
  const firstSite = new Site('Kim');
  const secondSite = new Site();

  console.log(customerName(firstSite));
  console.log(customerName(secondSite));
}

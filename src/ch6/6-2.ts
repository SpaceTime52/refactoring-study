// 예제 1
interface Driver {
  numberOfLateDeliveries: number;
}

export function rating(driver: Driver): number {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver: Driver): boolean {
  return driver.numberOfLateDeliveries > 5;
}

// 예제 2
interface Customer {
  name: string;
  location: string;
}

export function reportLines(customer: Customer): Array<Array<string>> {
  const lines: Array<Array<string>> = [];
  gatherCustomerData(lines, customer);
  return lines;
}

function gatherCustomerData(out: Array<Array<string>>, customer: Customer): void {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
}

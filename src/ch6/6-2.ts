// 예제 1
interface Driver {
  numberOfLateDeliveries: number;
}

export function rating(driver: Driver): number {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
interface Customer {
  name: string;
  location: string;
}

export function reportLines(customer: Customer): string[][] {
  const lines: string[][] = [];
  lines.push(['name', customer.name]);
  lines.push(['location', customer.location]);
  return lines;
}

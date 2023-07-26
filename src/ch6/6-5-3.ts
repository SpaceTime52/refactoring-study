interface Address {
  state: string;
}

interface Customer {
  address: Address;
}

export function inNewEngland(aCustomer: Customer): boolean {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

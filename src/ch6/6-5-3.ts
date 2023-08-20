interface Address {
  state: string;
}

interface Customer {
  address: Address;
}

export function inNewEngland(state: string): boolean {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}

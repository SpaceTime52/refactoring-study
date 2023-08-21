export interface Scenario {
  primaryForce: number;
  secondaryForce: number;
  mass: number;
  delay: number;
}

export type OrganizationData = {
  title: string;
  country: string;
};

export type Adjustment = {
  amount: number;
  // ... possibly other properties ...
};

export type OrderData = {
  number: number;
  customerId: number;
};

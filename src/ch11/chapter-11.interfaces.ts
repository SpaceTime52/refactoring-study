export interface Alarm {
  setOff(message: string): void;
}

export interface Invoice {
  amount: number;
}

export interface Customer {
  invoices: Invoice[];
}

export interface CurrencyValue {
  currency: string;
  currencyName: string;
  value: number;
}

export interface Person {
  salary: {
    multiply: (factor: number) => void;
  };
}

export interface Room {
  daysTempRange: TempRange;
}

export interface TempRange {
  low: number;
  high: number;
}

export interface Plan {
  // Whatever properties and methods aPlan should have
}

export interface Thermostat {
  currentTemperature: number;
  // Other properties and methods if there are any
}

export class ShippingRules {
  constructor(data: any) {
    // Implementation...
  }
}

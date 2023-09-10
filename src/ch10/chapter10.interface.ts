export interface Plan {
  summerStart: Date;
  summerEnd: Date;
  summerRate: number;
  regularRate: number;
  regularServiceCharge: number;
}

export interface Employee {
  seniority: number;
  monthsDisabled: number;
  isPartTime: boolean;
}

export interface EmployeeDash {
  isSeparated: boolean;
  isRetired: boolean;
}

export interface Payment {
  amount: number;
  reasonCode: string;
}

export interface Instrument {
  capital: number;
  interestRate: number;
  duration: number;
  income: number;
  adjustmentFactor: number;
}

export interface Bird {
  name: string;
  type: string;
  numberOfCoconuts?: number; // Optional because not all birds will have this
  voltage?: number; // Optional because not all birds will have this
  isNailed?: boolean; // Optional because not all birds will have this
}

export interface Voyage {
  zone: string;
  length: number;
}

export interface HistoryEntry {
  zone: string;
  profit: number;
}

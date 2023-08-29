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

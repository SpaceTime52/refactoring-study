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

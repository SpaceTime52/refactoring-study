// 조건식 통합하기

import { Employee } from './chapter10.interface';

function disabilityAmount(employee: Employee): number {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;
}

function isNotEligibleForDisability(employee: Employee): boolean {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}

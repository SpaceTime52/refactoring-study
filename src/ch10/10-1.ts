// 조건문  분해하기 (코드의 목적을 잘 나타내기)

import { Plan } from './chapter10.interface';

function calculateCharge(date: Date, quantity: number, plan: Plan): number {
  const isSummer: boolean =
    !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);

  let charge = 0;
  if (isSummer) {
    charge = summerCharge();
  } else {
    charge = regularCharge();
  }

  return charge;

  function summerCharge(): number {
    return quantity * plan.summerRate;
  }

  function regularCharge(): number {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

interface Plan {
  summerStart: Date;
  summerEnd: Date;
  summerRate: number;
  regularRate: number;
  regularServiceCharge: number;
}

function calculateCharge(date: Date, quantity: number, plan: Plan): number {
  let charge = 0;
  if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)) charge = quantity * plan.summerRate;
  else charge = quantity * plan.regularRate + plan.regularServiceCharge;
  return charge;
}

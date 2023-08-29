import { EmployeeDash, Payment } from './chapter10.interface';

export function payAmount(employee: EmployeeDash): Payment {
  let result: Payment;

  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }

  return someFinalComputation();
}

function someFinalComputation(): Payment {
  return { amount: 999, reasonCode: 'UNICORN' };
}

interface Employee {
  isSeparated: boolean;
  isRetired: boolean;
}

interface Payment {
  amount: number;
  reasonCode: string;
}

export function payAmount(employee: Employee): Payment {
  let result: Payment;

  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: 'SEP' };
  } else if (employee.isRetired) {
    result = { amount: 0, reasonCode: 'RET' };
  } else {
    // lorem.ipsum(dolor.sitAmet);
    // consectetur(adipiscing).elit();
    // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    // ut.enim.ad(minim.veniam);
    return someFinalComputation();
  }

  return result;
}

function someFinalComputation(): Payment {
  return { amount: 999, reasonCode: 'UNICORN' };
}

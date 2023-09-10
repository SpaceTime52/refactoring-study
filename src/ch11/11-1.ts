import { Customer } from './chapter-11.interfaces';

// 예제 1
declare const customer: Customer; // Declaration, replace with your actual customer data or logic

function totalOutstandingAndSendBill(): number {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0,
  );
  sendBill();
  return result;
}

function sendBill(): void {
  // Implementation for sending the bill
}

// 예제 2
interface Alarm {
  setOff(message: string): void;
}

export function alertForMiscreant(people: string[], alarm: Alarm): string {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms(alarm, p);
      return 'Don';
    }
    if (p === 'John') {
      setOffAlarms(alarm, p);
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm: Alarm, p: string): void {
  alarm.setOff('Found Miscreant ' + p);
}

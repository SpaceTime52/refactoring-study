// ch11-1. 질의 함수와 변경 함수 분리하기
import { Alarm, Customer } from './chapter-11.interfaces';

// 예제 1 : 함수 하나당 하나만 사용하는 것이 좋다.
declare const customer: Customer;

function getTotalOutstanding(): number {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0,
  );
  return result;
}

function sendBill(): void {
  // Implementation for sending the bill
}

// 예제 2
export function alertForMiscreant(people: string[], alarm: Alarm): string {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
  return miscreant;
}

function findMiscreant(people: string[]): string {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm: Alarm, p: string): void {
  alarm.setOff('Found Miscreant ' + p);
}

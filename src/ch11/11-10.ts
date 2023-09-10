// Chapter 11-10. 명령을 함수로 바꾸기 (데이터에 대해 계산만 하면 되는 거면, 메모리 절약)
import { Provider, Customer } from './chapter-11.types';

export function charge(
  customer: Customer,
  usage: number,
  provider: Provider,
): number {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}

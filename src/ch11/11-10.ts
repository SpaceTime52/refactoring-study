import { Provider, Customer } from './chapter-11.types';

export class ChargeCalculator {
  private _customer: Customer;
  private _usage: number;
  private _provider: Provider;

  constructor(customer: Customer, usage: number, provider: Provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge(): number {
    return this._customer.baseRate * this._usage;
  }

  get charge(): number {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

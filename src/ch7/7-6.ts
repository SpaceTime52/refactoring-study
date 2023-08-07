export class TrackingInformation {
  #shippingCompany: string;
  #trackingNumber: number;

  constructor(trackingNumber: number, shippingCompany: string) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get shippingCompany(): string {
    return this.#shippingCompany;
  }

  set shippingCompany(arg: string) {
    this.#shippingCompany = arg;
  }

  get trackingNumber(): number {
    return this.#trackingNumber;
  }

  set trackingNumber(arg: number) {
    this.#trackingNumber = arg;
  }

  get display(): string {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export class Shipment {
  #trackingInformation: TrackingInformation;

  constructor(trackingInformation: TrackingInformation) {
    this.#trackingInformation = trackingInformation;
  }

  get trackingInfo(): string {
    return this.#trackingInformation.display;
  }

  get trackingInformation(): TrackingInformation {
    return this.#trackingInformation;
  }

  set trackingInformation(trackingInformation: TrackingInformation) {
    this.#trackingInformation = trackingInformation;
  }
}

export function printSevenDashSix(): void {
  const shipment = new Shipment(new TrackingInformation(999, 'Maersk'));
  console.log('Maersk: 999:', shipment.trackingInfo);

  shipment.trackingInformation.shippingCompany = 'COSCO';
  console.log('COSCO: 999:', shipment.trackingInfo);
}

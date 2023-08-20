// 7.6 클래스 인라인하기

export class Shipment {
  #trackingNumber: number;
  #shippingCompany: string;

  constructor(trackingNumber: number, shippingCompany: string) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get trackingInfo(): string {
    return `${this.#shippingCompany}: ${this.#trackingNumber}`;
  }

  get trackingInformation(): { shippingCompany: string; trackingNumber: number } {
    return {
      shippingCompany: this.#shippingCompany,
      trackingNumber: this.#trackingNumber,
    };
  }

  set trackingInformation(trackingInformation: { shippingCompany: string; trackingNumber: number }) {
    this.#trackingNumber = trackingInformation.trackingNumber;
    this.#shippingCompany = trackingInformation.shippingCompany;
  }
}

export function printSevenDashSix(): void {
  // 너무 분산된 정보들을 통합해서 관리하는 게 더 좋을 때가 있다.
  const shipment = new Shipment(999, 'Maersk');
  console.log('Maersk: 999:', shipment.trackingInfo);

  shipment.trackingInformation.shippingCompany = 'COSCO';
  console.log('COSCO: 999:', shipment.trackingInfo);
}

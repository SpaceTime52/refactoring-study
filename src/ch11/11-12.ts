// Chapter 11-12. 오류 코드를 예외로 바꾸기
import { ShippingRules } from './chapter-11.interfaces';

function localShippingRules(data: any): ShippingRules | number {
  if (data) {
    return new ShippingRules(data);
  } else {
    throw new OrderProcessingError(-23);
  }
}

class OrderProcessingError extends Error {
  #errorCode: number;

  constructor(errorCode: number) {
    super();
    this.#errorCode = errorCode;
  }
}

try {
  const result = localShippingRules({ data: 1 });
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log(error.message);
  } else {
    throw error;
  }
}

export interface Product {
  basePrice: number;
  discountRate: number;
  discountThreshold: number;
}

export interface ShippingMethod {
  discountThreshold: number;
  feePerCase: number;
  discountedFee: number;
}

export function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod): number {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
  const shippingPerCase = basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}

// 사용 예:
const product: Product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod: ShippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price: number = priceOrder(product, 5, shippingMethod);

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
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calculateDiscount(product, quantity);
  const shippingCost = calculateShippingCost(basePrice, shippingMethod, quantity);
  return basePrice - discount + shippingCost;
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

function calculateBasePrice(product: Product, quantity: number): number {
  return product.basePrice * quantity;
}

function calculateDiscount(product: Product, quantity: number): number {
  return Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
}

function calculateShippingCost(basePrice: number, shippingMethod: ShippingMethod, quantity: number): number {
  const shippingPerCase = basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  return shippingCost;
}

interface Order {
  basePrice: number;
}

export function isDeliveryFree(anOrder: Order): boolean {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

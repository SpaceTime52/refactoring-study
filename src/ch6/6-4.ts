interface Order {
  basePrice: number;
}

export function isDeliveryFree(anOrder: Order): boolean {
  return anOrder.basePrice > 1000;
}

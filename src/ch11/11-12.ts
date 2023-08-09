class ShippingRules {
  constructor(data: any) {
    // Implementation...
  }
}

function localShippingRules(data: any): ShippingRules | number {
  if (data) {
    return new ShippingRules(data);
  } else {
    return -23;
  }
}

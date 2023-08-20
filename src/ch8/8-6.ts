import { PricingPlan, Order, Resource } from './chapter-8-interface';

export const retrievePricingPlan = (): PricingPlan => {
  return { unit: 10 };
};

export const retrieveOrder = (): Order => {
  return {};
};

// 예제 1 ---------------------------------
const pricingPlan: PricingPlan = retrievePricingPlan();
const chargePerUnit: number = pricingPlan.unit;

const order: Order = retrieveOrder();
let charge: number;

// 예제 2 ---------------------------------
const availableResources: Resource[] = []; // Dummy initialization
const allocatedResources: Resource[] = []; // Dummy initialization

function createResource(): Resource {
  return {};
}

function someFunc(): Resource {
  const result: Resource =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop()!;
  allocatedResources.push(result);
  return result;
}

export function printEightDashSix() {
  console.log('\nchapter 8.6 >>>>>>>>>> ');
  console.log('10:', chargePerUnit);
  console.log('{}', someFunc());
}

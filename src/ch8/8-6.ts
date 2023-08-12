// 예제 1 ---------------------------------
interface PricingPlan {
  unit: number;
}

interface Order {
  // Assuming the Order structure, but I'd need more context to specify the exact properties.
}

const retrievePricingPlan = (): PricingPlan => {
  // ... logic to retrieve pricing plan
  return { unit: 10 }; // Just a dummy return for demonstration
};

const retrieveOrder = (): Order => {
  // ... logic to retrieve order
  return {}; // Just a dummy return for demonstration
};

const pricingPlan: PricingPlan = retrievePricingPlan();
const order: Order = retrieveOrder();
let charge: number;
const chargePerUnit: number = pricingPlan.unit;

// 예제 2 ---------------------------------

interface Resource {
  // Assuming the Resource structure, but I'd need more context to specify the exact properties.
}

const availableResources: Resource[] = []; // Dummy initialization
const allocatedResources: Resource[] = []; // Dummy initialization

function createResource(): Resource {
  // ... logic to create resource
  return {}; // Just a dummy return for demonstration
}

function someFunc(): Resource {
  let result: Resource;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop()!;
    allocatedResources.push(result);
  }
  return result;
}

export function printEightDashSix() {
  console.log('\nchapter 8.6 >>>>>>>>>> ');
  console.log('10:', chargePerUnit);
  console.log('{}', someFunc());
}

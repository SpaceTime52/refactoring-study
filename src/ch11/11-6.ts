interface Plan {
  // Whatever properties and methods aPlan should have
}

interface Thermostat {
  currentTemperature: number;
  // Other properties and methods if there are any
}

export function targetTemperature(aPlan: Plan, thermostat: Thermostat): void {
  const currentTemperature = thermostat.currentTemperature;
  // ...
}

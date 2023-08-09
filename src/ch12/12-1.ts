// 예시 1
abstract class Employee {
  abstract get name(): string;
}

class Salesperson extends Employee {
  get name(): string {
    // Implementation (or data retrieval) would go here.
    return ''; // Placeholder value
  }
}

class Engineer extends Employee {
  get name(): string {
    // Implementation (or data retrieval) would go here.
    return ''; // Placeholder value
  }
}

// 예시 2
abstract class Party {
  abstract monthlyCost: number;
}

class Department extends Party {
  monthlyCost: number = 0; // Placeholder value

  get totalAnnualCost(): number {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  monthlyCost: number = 0; // Placeholder value

  get annualCost(): number {
    return this.monthlyCost * 12;
  }
}

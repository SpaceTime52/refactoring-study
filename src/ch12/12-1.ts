// 예시 1
abstract class Employee {
  get name(): string {
    return '';
  }
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
abstract class Party {
  monthlyCost: number = 0; // 월간 비용예시
  get annualCost(): number {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}

class Employee extends Party {}

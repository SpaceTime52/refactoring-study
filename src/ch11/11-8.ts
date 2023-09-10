// Chapter 11-8. 생성자를 팩터리 함수로 바꾸기
export class Employee {
  #name: string;
  #typeCode: EmployeeType;

  private constructor(name: string, typeCode: EmployeeType) {
    this.#name = name;
    this.#typeCode = typeCode;
  }

  get name(): string {
    return this.#name;
  }

  get type(): string {
    return Employee.legalTypeCodes[this.#typeCode];
  }

  static get legalTypeCodes(): Record<EmployeeType, string> {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name: string): Employee {
    return new Employee(name, EmployeeType.Engineer);
  }

  static createManager(name: string): Employee {
    return new Employee(name, EmployeeType.Manager);
  }

  static createSalesman(name: string): Employee {
    return new Employee(name, EmployeeType.Salesman);
  }
}

enum EmployeeType {
  Engineer = 'E',
  Manager = 'M',
  Salesman = 'S',
}

// 사용 : 인스턴스 만드는 로직 자체를 캡슐화하고, 외부에서는 조금더 간결하게 사용 가능
const engineer = Employee.createEngineer('홍길동');
const manager = Employee.createManager('변사또');
const salesman = Employee.createSalesman('이몽룡');

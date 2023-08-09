export class Employee {
  private _name: string;
  private _typeCode: 'E' | 'M' | 'S';

  constructor(name: string, typeCode: 'E' | 'M' | 'S') {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes(): Record<'E' | 'M' | 'S', string> {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }
}

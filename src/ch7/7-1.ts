// 캡술화 함으로써 어떤 데이터가 읽기 전용인지 쓰기 가능한지 명확하게 구분할 수 있다.

class Organization {
  #name; // #private
  #country; // #private

  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name(): string {
    return this.#name;
  }

  set name(newName: string) {
    this.#name = newName;
  }

  get country(): string {
    return this.#country;
  }
}

const organization: Organization = new Organization('Acme Gooseberries', 'GB');
organization.name = 'Creatrip';

export function printSevenDashOne(): void {
  console.log('Creatrip: ', organization.name);
  console.log('GB:', organization.country);
}

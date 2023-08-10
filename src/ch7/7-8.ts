// 7.8 중개자 제거하기
class PersonA {
  #manager: string;

  constructor(data: { manager: string }) {
    this.#manager = data.manager;
  }

  get manager(): string {
    return this.#manager;
  }

  set manager(arg: string) {
    this.#manager = arg;
  }
}

const person = new PersonA({ manager: 'aManager' });

export function printSevenDashEight(): void {
  console.log('aManager:', person.manager);
}

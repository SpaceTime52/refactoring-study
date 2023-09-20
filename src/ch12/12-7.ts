type PersonData = {
  name: string;
  gender: 'M' | 'F' | 'X';
};

class PersonCh12 {
  #name: string;
  #genderCode: string;

  constructor(name: string, genderCode: string) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name(): string {
    return this.#name;
  }

  get genderCode(): string {
    return this.#genderCode;
  }

  get isMale(): boolean {
    return this.#genderCode === 'M';
  }

  static create(record: PersonData): PersonCh12 {
    switch (record.gender) {
      case 'M':
        return new PersonCh12(record.name, 'M');
        break;
      case 'F':
        return new PersonCh12(record.name, 'F');
        break;
      default:
        return new PersonCh12(record.name, 'X');
    }
  }
}

function loadFromInput(data: PersonData[]): PersonCh12[] {
  const result: PersonCh12[] = [];
  data.forEach((record) => {
    result.push(PersonCh12.create(record));
  });
  return result;
}

const peopleCh12: PersonCh12[] = loadFromInput([
  { name: '길동', gender: 'M' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = peopleCh12.filter(
  (person: PersonCh12) => person.isMale,
).length;

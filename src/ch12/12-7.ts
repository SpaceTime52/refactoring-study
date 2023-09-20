type PersonData = {
  name: string;
  gender: 'M' | 'F' | 'X';
};

class PersonCh12 {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  get genderCode(): string {
    return 'X';
  }
}

class Male extends PersonCh12 {
  get genderCode(): string {
    return 'M';
  }
}

class Female extends PersonCh12 {
  get genderCode(): string {
    return 'F';
  }
}

function loadFromInput(data: PersonData[]): PersonCh12[] {
  const result: PersonCh12[] = [];
  data.forEach((record) => {
    let person;
    switch (record.gender) {
      case 'M':
        person = new Male(record.name);
        break;
      case 'F':
        person = new Female(record.name);
        break;
      default:
        person = new PersonCh12(record.name);
    }
    result.push(person);
  });
  return result;
}

const peopleCh12: PersonCh12[] = loadFromInput([
  { name: '길동', gender: 'M' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = peopleCh12.filter(
  (person: PersonCh12) => person instanceof Male,
).length;

export function callTwelveDashSeven() {
  console.log(numberOfMales);
}

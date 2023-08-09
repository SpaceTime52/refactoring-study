type PersonData = {
  name: string;
  gender: 'M' | 'F' | 'X';
};

class Person {
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

class Male extends Person {
  get genderCode(): string {
    return 'M';
  }
}

class Female extends Person {
  get genderCode(): string {
    return 'F';
  }
}

function loadFromInput(data: PersonData[]): Person[] {
  const result: Person[] = [];
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
        person = new Person(record.name);
    }
    result.push(person);
  });
  return result;
}

const people = loadFromInput([
  { name: '길동', gender: 'M' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'M' },
]);
const numberOfMales = people.filter((p) => p instanceof Male).length;
console.log(numberOfMales);

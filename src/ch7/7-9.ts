function foundPerson(people: string[]): string {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don';
    }
    if (people[i] === 'John') {
      return 'John';
    }
    if (people[i] === 'Kent') {
      return 'Kent';
    }
  }
  return '';
}

export function printSevenDashNine(): void {
  console.log('John: ', foundPerson(['John']));
  console.log('Don: ', foundPerson(['Don', 'John']));
  console.log('Kent: ', foundPerson(['Kent', 'Don', 'John']));
  console.log('Don: ', foundPerson(['Lisa', 'Don', 'Tom']));
}

// 7.9 알고리즘 교체하기

function foundPerson(people: string[]): string {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find((person: string) => candidates.includes(person)) || '';
}

export function printSevenDashNine(): void {
  console.log('John: ', foundPerson(['John']));
  console.log('Don: ', foundPerson(['Don', 'John']));
  console.log('Kent: ', foundPerson(['Kent', 'Don', 'John']));
  console.log('Don: ', foundPerson(['Lisa', 'Don', 'Tom']));
}

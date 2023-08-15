import { PersonChapter7 as Person } from './chapter-8-interface';

export function reportYoungestAgeAndTotalSalary(people: Person[]): string {
  return `youngestAge: ${youngest(people)}, totalSalary: ${totalSalary(
    people,
  )}`;
}

function totalSalary(people: Person[]) {
  return people.reduce(
    (total: number, person: Person) => total + person.salary,
    0,
  );
}

function youngest(people: Person[]) {
  return Math.min(...people.map((person: Person) => person.age));
}

export function printEightDashSeven(): void {
  console.log('\nchapter 8.7 >>>>>>>>>> ');
  const people: Person[] = [
    { age: 10, salary: 100 },
    { age: 20, salary: 200 },
    { age: 30, salary: 300 },
  ];
  console.log('youngestAge: 10, totalSalary: 600');
  console.log(reportYoungestAgeAndTotalSalary(people));
}

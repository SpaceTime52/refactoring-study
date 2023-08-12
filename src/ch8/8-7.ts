interface Person {
  age: number;
  salary: number;
}

export function reportYoungestAgeAndTotalSalary(people: Person[]): string {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
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

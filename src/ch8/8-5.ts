const states: string[] = ['NY', 'CA', 'MA', 'TX']; // Example data for demonstration purposes

let appliesToMass: boolean = false;
for (const s of states) {
  if (s === 'MA') appliesToMass = true;
}

export function printEightDashFive() {
  console.log('\nchapter 8.5 >>>>>>>>>> ');
  console.log('true:', appliesToMass);
}

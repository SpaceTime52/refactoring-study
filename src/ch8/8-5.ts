const states: string[] = ['NY', 'CA', 'MA', 'TX'];
const hasAppliesToMass: boolean = states.includes('MA');

export function printEightDashFive() {
  console.log('\nchapter 8.5 >>>>>>>>>> ');
  console.log('true:', hasAppliesToMass);
}

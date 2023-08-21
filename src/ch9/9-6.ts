const STANDARD_GRAVITY = 9.81;

function potentialEnergy(mass: number, height: number): number {
  return mass * STANDARD_GRAVITY * height;
}

export function printNineDashSix(): void {
  console.log('\nChapter 9.6 >>>>>>>>>>');
  console.log('9810: ', potentialEnergy(10, 100));
}

import { Scenario } from './chapter-9-interface';

// 예제 1
function exampleNineDashOne() {
  const height: number = 2;
  const width: number = 4;
  const perimeter: number = 2 * (height + width);
  console.log('12:', perimeter);
  const area: number = height * width;
  console.log('8:', area);
}

// 예제 2
function distanceTraveled(scenario: Scenario, time: number): number {
  let result: number;
  const primaryAcceleration: number = scenario.primaryForce / scenario.mass;
  const primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;

  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
  return result;
}

// 예제 3
function discount(inputValue: number, quantity: number): number {
  let result: number = inputValue;
  if (inputValue > 50) result = result - 2;
  if (quantity > 100) result = result - 1;
  return result;
}

export function printNineDashOne(): void {
  console.log('\nChapter 9.1 >>>>>>>>>>');
  exampleNineDashOne();
  console.log(
    '449.99999999999994: ',
    distanceTraveled(
      { primaryForce: 10, secondaryForce: 20, mass: 30, delay: 40 },
      50,
    ),
  );
  console.log('97: ', discount(100, 200));
}

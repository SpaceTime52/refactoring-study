// 예제 1
let height: number = // assign some value here;
let width: number = // assign some value here;
let temp: number = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);


// 예제 2
interface Scenario {
  primaryForce: number;
  secondaryForce: number;
  mass: number;
  delay: number;
}

function distanceTravelled(scenario: Scenario, time: number): number {
  let result: number;
  let acc: number = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay); // I assume you meant `Math.min` instead of `Math.main`
  result = 0.5 * acc * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}


// 예제 3
function discount(inputValue: number, quantity: number): number {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}

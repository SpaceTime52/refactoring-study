const values: (number | string)[] = []; // You can adjust the type based on the kind of values you expect to have.

function getValueForPeriod(periodNumber: number): number | string {
  const value = values[periodNumber];
  if (!value) {
    throw new Error('value is undefined');
  }
  return value;
}

try {
  getValueForPeriod(-10);
} catch (error) {
  console.log('에러 발생!');
}

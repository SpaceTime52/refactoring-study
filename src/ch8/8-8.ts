interface DataRecord {
  city: string;
  phone: string;
}

export function acquireData(input: string): DataRecord[] {
  const lines = input.split('\n');
  let firstLine = true;
  const result: DataRecord[] = [];
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === '') continue;
    const record = line.split(',');
    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

export function printEightDashEight() {
  console.log('\nchapter 8.8 >>>>>>>>>> ');
  const input: string = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
  const result: DataRecord[] = acquireData(input);
  console.log(`[
  { city: 'Bangalore', phone: '+91 80 4064 9570' },
  { city: 'Chennai', phone: '+91 44 660 44766' }
]`);
  console.log(result);
}

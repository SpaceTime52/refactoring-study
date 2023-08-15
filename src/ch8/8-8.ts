import { DataRecord } from './chapter-8-interface';

export function acquireData(input: string): DataRecord[] {
  return input
    .split('\n') // 배열로 만들기
    .splice(1) // 첫줄 제외
    .filter((line: string) => line.includes('India')) // 필터링
    .map((line: string) => {
      // 반환값 매핑
      const record = line.split(',');
      return { city: record[0].trim(), phone: record[2].trim() };
    });
}

export function printEightDashEight() {
  console.log('\nchapter 8.8 >>>>>>>>>> ');
  const input: string = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
  const results: DataRecord[] = acquireData(input);
  console.log(`[
  { city: 'Bangalore', phone: '+91 80 4064 9570' },
  { city: 'Chennai', phone: '+91 44 660 44766' }
]`);
  console.log(results);
}

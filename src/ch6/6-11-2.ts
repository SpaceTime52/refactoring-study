import fs from 'fs';

if (!process.argv[2]) {
  throw new Error('파일 이름을 입력하세요');
}

const fileName: string = `./${process.argv[2]}.json`;
if (!fs.existsSync(fileName)) {
  throw new Error('파일이 존재하지 않습니다');
}

const rawData: Buffer = fs.readFileSync(fileName);

interface Order {
  status: string;
  [key: string]: any; // order 객체가 더 많은 속성을 가질 수 있다고 가정
}

const orders: Order[] = JSON.parse(rawData.toString());
if (process.argv.includes('-r')) {
  console.log(orders.filter((order: Order) => order.status === 'ready').length);
} else {
  console.log(orders.length);
}

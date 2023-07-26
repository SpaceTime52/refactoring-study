import fs from 'fs';

interface Order {
  status: string;
  [key: string]: any; // order 객체가 더 많은 속성을 가질 수 있다고 가정
}

export function run(argv: string[]) {
  const command: { fileName: string; countReadOnly: boolean } = parseCommand(argv);
  countOrders(command);
}

function parseCommand(argv: string[]): { fileName: string; countReadOnly: boolean } {
  if (!argv[2]) throw new Error('파일 이름을 입력하세요');

  const fileName: string = `./${argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  return { fileName, countReadOnly: argv.includes('-r') };
}

function countOrders({ fileName, countReadOnly }): number {
  const fileContent: string = fs.readFileSync(fileName, 'utf-8');
  const orders: Order[] = JSON.parse(fileContent);
  const filteredOrders: Order[] = countReadOnly ? orders.filter((order: Order) => order.status === 'ready') : orders;

  return filteredOrders.length;
}

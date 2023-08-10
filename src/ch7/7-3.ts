// enum 을 활용해서 우선순위 로직을 개선
enum PriorityLevel {
  NORMAL = 0,
  HIGH = 1,
  RUSH = 2,
}

class Order {
  priority: PriorityLevel;

  constructor(data: { priority: PriorityLevel }) {
    this.priority = data.priority;
  }

  // 우선순위 로직을 Order 안으로 이동
  isHighPriority(): boolean {
    return this.priority >= PriorityLevel.HIGH;
  }
}

const orders: Order[] = [
  new Order({ priority: PriorityLevel.NORMAL }),
  new Order({ priority: PriorityLevel.HIGH }),
  new Order({ priority: PriorityLevel.RUSH }),
];

const highPriorityCount: number = orders.filter((order: Order) => order.isHighPriority()).length;

export function printSevenDashThree(): void {
  console.log('2:', highPriorityCount);
}

type Priority = 'normal' | 'high' | 'rush';

class Order {
  priority: Priority;

  constructor(data: { priority: Priority }) {
    this.priority = data.priority;
  }
}

const orders: Order[] = [new Order({ priority: 'normal' }), new Order({ priority: 'high' }), new Order({ priority: 'rush' })];

const highPriorityCount: number = orders.filter((o) => 'high' === o.priority || 'rush' === o.priority).length;

export function printSevenDashThree(): void {
  console.log('2:', highPriorityCount);
}

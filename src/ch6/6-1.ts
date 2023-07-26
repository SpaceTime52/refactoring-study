export interface Invoice {
  orders: { amount: number }[];
  customer: string;
  dueDate?: Date;
}

export function printOwing(invoice: Invoice): void {
  // 함수 분리
  printBanner();
  updateDueDate(invoice);
  printDetails(invoice, calculateOutstanding(invoice));
}

function printBanner() {
  console.log(':::::: Customer Owes ::::::');
}

function calculateOutstanding(invoice: Invoice): number {
  let result: number = 0;
  for (const order of invoice.orders) result += order.amount; // 명확한 이름으로 변경
  return result;
}

function updateDueDate(invoice: Invoice): void {
  const today: Date = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice: Invoice, outstanding: number) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice?.dueDate ? invoice.dueDate.toLocaleDateString() : ''}`);
}

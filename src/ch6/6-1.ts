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
  return invoice.orders.reduce((acc, cur) => acc + cur.amount, 0);
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

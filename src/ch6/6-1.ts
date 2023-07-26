export interface Invoice {
  orders: { amount: number }[];
  customer: string;
  dueDate?: Date;
}

export function printOwing(invoice: Invoice): void {
  let outstanding: number = 0;

  console.log(':::::: Customer Owes ::::::');
  for (const o of invoice.orders) outstanding += o.amount;

  const today: Date = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

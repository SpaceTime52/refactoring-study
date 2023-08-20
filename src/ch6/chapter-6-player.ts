import { Invoice, printOwing } from './6-1';
import { baseCharge } from './6-10-client1';
import { Product, ShippingMethod, priceOrder } from './6-11';
import { rating, reportLines } from './6-2';
import { price } from './6-3-1';
import { Order } from './6-3-2';
import { isDeliveryFree } from './6-4';
import { circum } from './6-5-1';
import Book from './6-5-2';
import { getDefaultOwner } from './6-6';
import { readingsOutsideRange } from './6-8';
import { calculateBaseCharge } from './6-9-client3';

export function chapterSix(): void {
  // 6-1 예제 1
  const invoice: Invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: 'Bohyeon',
  };
  printOwing(invoice);

  // 6-2 예제 1
  console.log('6-2-1. 2:', rating({ numberOfLateDeliveries: 10 }));

  // 6-2 예제 2
  console.log('6-2-2. [ [ name, Bohyeon ], [ location, Seoul ] ]:', reportLines({ name: 'Bohyeon', location: 'Seoul' }));

  // 6-3 예제 1
  console.log('6-3-1. 10100:', price({ quantity: 10, itemPrice: 1000 }));

  // 6-3 예제 2
  const order: Order = new Order({ quantity: 10, itemPrice: 1000 });
  console.log('6-3-2. 10100:', order.price);

  // 6-4
  console.log('6-4. true:', isDeliveryFree({ basePrice: 1001 }));

  // 6-5 예제 1
  console.log('6-5. 62.83185307179586:', circum(10));

  // 6-5 예제 2
  const book: Book = new Book();
  book.addReservation({ id: 1 });
  book.addReservation({ id: 2 });
  console.log('6-5. false:', book.hasReservation({ id: 3 }));

  // 6-6
  console.log('6-6. { firstName: 마틴, lastName: 파울러 }:', getDefaultOwner());

  // 6-8
  console.log('6-8. []:', readingsOutsideRange({ name: 'Bohyeon', readings: [{ temp: 10, time: '10' }] }, 0, 100));

  // 6-9
  console.log('6-9. 0.2:', calculateBaseCharge({ customer: 'Bohyeon', quantity: 1, month: 1, year: 2021 }));

  // 6-10
  console.log('6-10. 1:', baseCharge);

  // 6-11
  const product: Product = {
    basePrice: 10,
    discountRate: 0.1,
    discountThreshold: 10,
  };
  const shippingMethod: ShippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3,
  };
  console.log('6-11. 65: ', priceOrder(product, 5, shippingMethod));
}

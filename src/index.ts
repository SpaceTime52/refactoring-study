import { Invoice, printOwing } from './ch6/6-1';
import { baseCharge } from './ch6/6-10-client1';
import { Product, ShippingMethod, priceOrder } from './ch6/6-11';
import { rating, reportLines } from './ch6/6-2';
import { price } from './ch6/6-3-1';
import { Order } from './ch6/6-3-2';
import { isDeliveryFree } from './ch6/6-4';
import { circumference } from './ch6/6-5-1';
import Book from './ch6/6-5-2';
import { getDefaultOwner } from './ch6/6-6';
import { readingsOutsideRange } from './ch6/6-8';
import { calculateBaseCharge } from './ch6/6-9-client3';

function main(): void {
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
  console.log('6-5. 62.83185307179586:', circumference(10));

  // 6-5 예제 2
  const book: Book = new Book();
  book.addReservation({ id: 1 });
  book.addReservation({ id: 2 });
  console.log('6-5. false:', book.hasReservation({ id: 3 }));

  // 6-6
  console.log('6-6. { firstName: 마틴, lastName: 파울러 }:', getDefaultOwner().firstName, getDefaultOwner().lastName);

  // 6-8
  console.log(
    '6-8. []:',
    readingsOutsideRange({ name: 'Bohyeon', readings: [{ temp: 10, time: '10' }] }, { temperatureFloor: 0, temperatureCeiling: 100 }),
  );

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

main();

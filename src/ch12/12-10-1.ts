interface Show {
  price: number;
  talkback?: string; // Assuming talkback is of type string
}

interface Extras {
  PremiumFee: number;
  dinner?: string; // Assuming dinner is of type string
}

class Booking {
  #show: Show;
  #date: Date;
  #premiumDelegate: PremiumBookingDelegate;

  constructor(show: Show, date: Date) {
    this.#show = show;
    this.#date = date;
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  get hasTalkback(): boolean {
    return this.#show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get show(): Show {
    return this.#show;
  }

  get basePrice(): number {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return result;
  }

  get isPeakDay(): boolean {
    return false;
  }

  static createBooking(show: Show, date: Date): Booking {
    return new Booking(show, date);
  }

  static createPremiumBooking(show: Show, date: Date, extras: Extras): Booking {
    const result: Booking = new Booking(show, date);
    result.#bePremium(extras);
    return result;
  }

  #bePremium(extras: Extras): void {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

interface BookingDelegate {}

class PremiumBookingDelegate implements BookingDelegate {
  #host: Booking;
  #extras: Extras;

  constructor(private hostBooking: Booking, extras: Extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback(): boolean {
    return this.#host.show.hasOwnProperty('talkback');
  }

  get basePrice(): number {
    return Math.round(this.#host.basePrice + this.#extras.PremiumFee);
  }

  get hasDinner(): boolean {
    return this.#extras.hasOwnProperty('dinner') && !this.#host.isPeakDay;
  }
}

const show: Show = { price: 100 };
const date: Date = new Date();
const extras: Extras = { PremiumFee: 50 };

const booking = Booking.createBooking(show, date);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);

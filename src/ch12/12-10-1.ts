interface Show {
  price: number;
  talkback?: string; // Assuming talkback is of type string
}

interface Extras {
  PremiumFee: number;
  dinner?: string; // Assuming dinner is of type string
}

class Booking {
  private _show: Show;
  private _date: Date; // Assuming date is a JavaScript Date object

  constructor(show: Show, date: Date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback(): boolean {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get basePrice(): number {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return result;
  }

  // Assuming you might have a property isPeakDay, I'll add a placeholder for it
  get isPeakDay(): boolean {
    // Placeholder implementation, replace with actual logic
    return false;
  }
}

class PremiumBooking extends Booking {
  private _extras: Extras;

  constructor(show: Show, date: Date, extras: Extras) {
    super(show, date);
    this._extras = extras;
  }

  get hasTalkback(): boolean {
    return this._show.hasOwnProperty('talkback');
  }

  get basePrice(): number {
    return Math.round(super.basePrice + this._extras.PremiumFee);
  }

  get hasDinner(): boolean {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}

// Assuming a placeholder for show, date, and extras
const show: Show = { price: 100 };
const date: Date = new Date();
const extras: Extras = { PremiumFee: 50 };

const booking = new Booking(show, date);
const premiumBooking = new PremiumBooking(show, date, extras);

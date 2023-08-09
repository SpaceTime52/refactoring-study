class CatalogItem {
  private _id: string;
  private _title: string;
  private _tags: string[];

  constructor(id: string, title: string, tags: string[]) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  hasTag(arg: string): boolean {
    return this._tags.includes(arg);
  }
}

class Scroll extends CatalogItem {
  private _lastCleaned: Date;

  constructor(id: string, title: string, tags: string[], dataLastCleaned: Date) {
    super(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate: Date): boolean {
    const threshold = this.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate: Date): number {
    // Assuming ChronoUnit.DAYS.until() calculates the difference in days between two dates.
    // This might be different based on your actual implementation of ChronoUnit.
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

// You would also need to define or import ChronoUnit depending on its origin.

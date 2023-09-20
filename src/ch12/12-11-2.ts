class CatalogItem {
  #id: string;
  #title: string;
  #tags: string[];

  constructor(id: string, title: string, tags: string[]) {
    this.#id = id;
    this.#title = title;
    this.#tags = tags;
  }

  get id(): string {
    return this.#id;
  }

  get title(): string {
    return this.#title;
  }

  hasTag(arg: string): boolean {
    return this.#tags.includes(arg);
  }
}

class Scroll {
  #id: string;
  #catalog: CatalogItem;
  #lastCleaned: Date;

  constructor(id: string, dataLastCleaned: Date, catalog: CatalogItem) {
    this.#id = id;
    this.#catalog = catalog;
    this.#lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate: Date): boolean {
    const threshold = this.#catalog.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate: Date): number {
    // Assuming ChronoUnit.DAYS.until() calculates the difference in days between two dates.
    // This might be different based on your actual implementation of ChronoUnit.
    return this.#lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

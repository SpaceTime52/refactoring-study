import { OrganizationData } from './chapter-9-interface';

class Organization {
  #title: string;
  #country: string;

  constructor(data: OrganizationData) {
    this.#title = data.title;
    this.#country = data.country;
  }

  get title(): string {
    return this.#title;
  }

  set title(value: string) {
    this.#title = value;
  }

  get country(): string {
    return this.#country;
  }

  set country(value: string) {
    this.#country = value;
  }
}

export function printNineDashTwo(): void {
  const organization = new Organization({
    title: '크리에이트립',
    country: '대한민국',
  });
  console.log('\nChapter 9.2 >>>>>>>>>>');
  console.log('크리에이트립: ', organization.title);
  console.log('대한민국: ', organization.country);
}

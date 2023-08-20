type OrganizationData = {
  name: string;
  country: string;
};

class Organization {
  private _name: string;
  private _country: string;

  constructor(data: OrganizationData) {
    this._name = data.name;
    this._country = data.country;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }
}

const organization = new Organization({
  name: '크리에이트립',
  country: '대한민국',
});

export function printNineDashTwo(): void {
  console.log('\nChapter 9.2 >>>>>>>>>>');
  console.log('크리에이트립: ', organization.name);
  console.log('대한민국: ', organization.country);
}

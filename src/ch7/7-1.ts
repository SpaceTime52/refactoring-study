type Organization = {
  name: string;
  country: string;
};

const organization: Organization = { name: 'Acme Gooseberries', country: 'GB' };

organization.name = 'Creatrip';

export function printSevenDashOne(): void {
  console.log('Creatrip: ', organization.name);
  console.log('GB:', organization.country);
}

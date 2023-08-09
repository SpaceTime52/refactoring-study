interface Bird {
  name: string;
  type: string;
  numberOfCoconuts?: number; // Optional because not all birds will have this
  voltage?: number; // Optional because not all birds will have this
  isNailed?: boolean; // Optional because not all birds will have this
}

export function plumages(birds: Bird[]): Map<string, string> {
  const map = birds.map((b) => [b.name, plumage(b)]);
  const map1 = new Map(map);
  return map1;
}

export function speeds(birds: Bird[]): Map<string, number | null> {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

export function plumage(bird: Bird): string {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 'average';
    case 'AfricanSwallow':
      return bird.numberOfCoconuts && bird.numberOfCoconuts > 2 ? 'tired' : 'average';
    case 'NorwegianBlueParrot':
      return bird.voltage && bird.voltage > 100 ? 'scorched' : 'beautiful';
    default:
      return 'unknown';
  }
}

export function airSpeedVelocity(bird: Bird): number | null {
  switch (bird.type) {
    case 'EuropeanSwallow':
      return 35;
    case 'AfricanSwallow':
      return 40 - 2 * (bird.numberOfCoconuts || 0);
    case 'NorwegianBlueParrot':
      return bird.isNailed ? 0 : 10 + (bird.voltage || 0) / 10;
    default:
      return null;
  }
}

import { Point } from './chapter-11.types';

export function ascentVelocity(points: Point[], totalMinutes: number): number {
  function calculateAscent(): void {
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      totalAscent += verticalChange > 0 ? verticalChange : 0;
    }
  }

  let totalAscent = 0;
  calculateAscent();

  return totalAscent / totalMinutes;
}

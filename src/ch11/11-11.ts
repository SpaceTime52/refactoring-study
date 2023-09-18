// Chapter 11-11. 수정된 값 반환하기
import { Point } from './chapter-11.types';

export function ascentVelocity(points: Point[], totalMinutes: number): number {
  function calculateAscent(): number {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      const verticalChange = points[i].elevation - points[i - 1].elevation;
      result += verticalChange > 0 ? verticalChange : 0;
    }
    return result;
  }

  let totalAscent = calculateAscent();
  return totalAscent / totalMinutes;
}

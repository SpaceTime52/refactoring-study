import { Point } from './chapter-8-interface';

export function trackSummary(points: Point[]): { time: number; distance: number; pace: number } {
  const time = calculateTime();
  const distance = calculateDistance(points);
  const pace = time / distance / 60;
  return { time, distance, pace };
}

function distance(p1: Point, p2: Point): number {
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.latitude) - radians(p1.latitude);
  const dLon = radians(p2.longitude) - radians(p1.longitude);
  const a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(radians(p2.latitude)) * Math.cos(radians(p1.latitude)) * Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function calculateTime(): number {
  return 10000;
}

function calculateDistance(points: Point[]): number {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

// ---------------------------------------------------

export function printEightDashOneFirst() {
  const newYork: Point = {
    latitude: 40.73061,
    longitude: -73.935242,
  };

  const tokyo: Point = {
    latitude: 35.652832,
    longitude: 139.839478,
  };

  const summary = trackSummary([newYork, tokyo]);

  console.log('\nchapter 8.1.1 >>>>>>>>>> ');
  console.log(' { time: 10000, distance: 6740.914927144901, pace: 0.02472463581991205 }\n', summary);
}

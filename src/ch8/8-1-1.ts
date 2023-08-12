interface Point {
  lat: number;
  lon: number;
}

// 함수의 역할: latitude, longitude 포인트 두개를 받아서 정보를 계산한다.
export function trackSummary(points: Point[]): { time: number; distance: number; pace: number } {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance(): number {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1: Point, p2: Point): number {
    const EARTH_RADIUS = 3959; // in miles
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(radians(p2.lat)) * Math.cos(radians(p1.lat)) * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }

  function radians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }

  function calculateTime(): number {
    return 10000;
  }
}

export function printEightDashOneFirst() {
  const newYork: Point = {
    lat: 40.73061,
    lon: -73.935242,
  };

  const tokyo: Point = {
    lat: 35.652832,
    lon: 139.839478,
  };

  const summary = trackSummary([newYork, tokyo]);

  console.log('\nchapter 8.1.1 >>>>>>>>>> ');
  console.log(' { time: 10000, distance: 6740.914927144901, pace: 0.02472463581991205 }\n', summary);
}

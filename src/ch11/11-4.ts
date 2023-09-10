// Chapter 11-4 객체 통째로 넘기기
import { Room, TempRange } from './chapter-11.interfaces';

export function temperatureAlerts(room: Room, plan: HeatingPlan): string[] {
  const alerts: string[] = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  #temperatureRange: TempRange;

  constructor(temperatureRange: TempRange) {
    this.#temperatureRange = temperatureRange;
  }

  withinRange(tempRange: TempRange): boolean {
    return (
      tempRange.low >= this.#temperatureRange.low &&
      tempRange.high <= this.#temperatureRange.high
    );
  }
}

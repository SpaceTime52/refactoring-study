import { Room, TempRange } from './chapter-11.interfaces';

export function temperatureAlerts(room: Room, plan: HeatingPlan): string[] {
  const alerts: string[] = [];
  const low = room.daysTempRange.low;
  const high = room.daysTempRange.high;
  if (!plan.withinRange(low, high)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  private _temperatureRange: TempRange;

  constructor(temperatureRange: TempRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(bottom: number, top: number): boolean {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}

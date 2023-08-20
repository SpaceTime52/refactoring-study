interface Reading {
  temp: number;
  time: string;
}

interface Station {
  name: string;
  readings: Reading[];
}

interface OperationPlan {
  temperatureFloor: number;
  temperatureCeiling: number;
}

export function readingsOutsideRange(station: Station, range: OperationPlan): Reading[] {
  return station.readings.filter((r) => r.temp < range.temperatureFloor || r.temp > range.temperatureCeiling);
}

const station: Station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operationPlan: OperationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

readingsOutsideRange(station, operationPlan);

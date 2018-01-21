import { Injectable } from '@angular/core';

import * as moment from 'moment-timezone';
import { Timer } from './timer';
import { timeZone } from './timeZone';

@Injectable()
export class TimeService {
  private _time: moment.Moment;

  constructor() {
    this._time = moment.utc();
  }

  createTimer(interval: number): Timer {
    return new Timer(interval);
  }

  getTimePart(part: string, timezoneName: string): string{
    return moment.tz(timezoneName).format(part);
  }

  getTimeDifferenceInMilliseconds(time1: Date, time2: Date): number {
    return moment(time1).diff(time2);
  }

  getTimeZones(): timeZone[] {
    let mtzs = moment.tz.names();
    return mtzs.map((tzName) => {
      let mtz = moment.tz.zone(tzName);
      let tz = new timeZone();
      tz.name = mtz.name;
      tz.abbreviations = mtz.abbrs;
      tz.offsets = mtz.offsets;
      tz.timestamps = mtz.untils;
      return tz;
    })
  }

  getCurrentTimezone(): timeZone {
    let mtz = moment.tz.zone(moment.tz.guess());
    let tz = new timeZone();
    tz.name = mtz.name;
    tz.abbreviations = mtz.abbrs;
    tz.offsets = mtz.offsets;
    tz.timestamps = mtz.untils;
    return tz;
  }
}

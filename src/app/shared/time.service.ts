import { Injectable } from '@angular/core';

import * as moment from 'moment/moment';
import { Timer } from './timer';

@Injectable()
export class TimeService {
  createTimer(interval: number): Timer {
    return new Timer(interval);
  }

  getHoursAndMinutesForDisplayWithOffset(time: Date, offset: number): string {
    return moment(time).format("HH:mm");
  }

  getSecondsForDisplay(time: Date): string {
    return moment(time).format("ss");
  }

  getDayAndDateForDisplay(time: Date): string {
    return moment(time).format("dddd DD MMM YYYY");
  }
}

import { Component, Input } from '@angular/core';

import { TimeService } from '../shared/time.service';

@Component({
  selector: 'aw-day-and-date',
  templateUrl: './day-and-date.component.html',
  styleUrls: ['./day-and-date.component.scss']
})
export class DayAndDateComponent {
  @Input() signalTime: Date;
  get displayTime(): string{
    return this._timeService.getDayAndDateForDisplay(this.signalTime);
  }

  constructor(private _timeService: TimeService) {
  }
}

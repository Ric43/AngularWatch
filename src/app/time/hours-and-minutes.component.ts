import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { TimeService } from '../shared/time.service';

@Component({
  selector: 'aw-hours-and-minutes',
  templateUrl: './hours-and-minutes.component.html',
  styleUrls: ['./hours-and-minutes.component.scss']
})
export class HoursAndMinutesComponent {
  constructor(private _timeService: TimeService) {
  }

  @Input() signalTime: Date;
  get displayTime(): string {
    return this._timeService.getHoursAndMinutesForDisplayWithOffset(this.signalTime, 0);
  }
}

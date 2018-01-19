import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { TimeService } from '../shared/time.service';

@Component({
  selector: 'aw-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent {
  @Input() signalTime: Date;

  get displayTime(): string{
    return this._timeService.getSecondsForDisplay(this.signalTime);
  }
  constructor(private _timeService: TimeService) { }
}

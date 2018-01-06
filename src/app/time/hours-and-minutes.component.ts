import { Component, OnInit, OnDestroy } from '@angular/core';

import { TimeService } from '../shared/time.service';
import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { Timer } from '../shared/timer';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';

@Component({
  selector: 'aw-hours-and-minutes',
  templateUrl: './hours-and-minutes.component.html',
  styleUrls: ['./hours-and-minutes.component.scss']
})
export class HoursAndMinutesComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _interval: number = 1000;
  private _timer: Timer;

  displayTime: string;

  constructor(private _timeService: TimeService) { }

  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    this.displayTime = this._timeService.getHoursAndMinutesForDisplayWithOffset(e.signalTime, 0);
  }

  ngOnInit() {
    this._timer = this._timeService.createTimer(this._interval);
    this._timer.elapsed(this);
    this.onElapsed(this._timer, new TimerElapsedEventArguments(new Date()));
    this._timer.start();
  }

  ngOnDestroy(): void {
    this._timer.stop();
    this._timer.elapsed(null);
    this._timer = null;
  }
}

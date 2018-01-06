import { Component, OnInit, OnDestroy } from '@angular/core';

import { Timer } from '../shared/timer';
import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';
import { TimeService } from '../shared/time.service';

@Component({
  selector: 'aw-day-and-date',
  templateUrl: './day-and-date.component.html',
  styleUrls: ['./day-and-date.component.scss']
})
export class DayAndDateComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _interval: number = 1000;
  private _timer: Timer;

  displayTime: string;

  constructor(private _timeService: TimeService) { }


  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    this.displayTime = this._timeService.getDayAndDateForDisplay(e.signalTime);
  }

  ngOnInit() {
    this._timer = this._timeService.createTimer(this._interval);
    this._timer.elapsed(this);
    this._timer.start();
  }

  ngOnDestroy(): void {
    this._timer.stop();
    this._timer.elapsed(null);
    this._timer = null;
  }
}

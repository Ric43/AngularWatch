import { Component, OnInit, OnDestroy } from '@angular/core';

import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { Timer } from '../shared/timer';
import { TimeService } from '../shared/time.service';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';

@Component({
  selector: 'aw-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _interval: number = 1000;
  private _timer: Timer;

  displayTime: string;

  constructor(private _timeService: TimeService) { }

  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    this.displayTime = this._timeService.getSecondsForDisplay(e.signalTime);
  }

  ngOnInit(): void {
    this._timer = this._timeService.createTimer(this._interval);
    this._timer.elapsed(this);
    this.onElapsed(this._timer, new TimerElapsedEventArguments(new Date()));
    this._timer.start();
  }

  ngOnDestroy() {
    this._timer.stop();
    this._timer.elapsed(null);
    this._timer = null;
  }

}

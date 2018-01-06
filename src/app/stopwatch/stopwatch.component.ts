import { Component, OnInit, OnDestroy } from '@angular/core';

import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { TimeService } from '../shared/time.service';
import { Timer } from '../shared/timer';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';

@Component({
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _interval: number = 1;
  private _timer: Timer;
  private _isRunning: boolean;
  private _isFrozen: boolean;
  private _milliseconds: number = 0;
  private _seconds: number = 0;
  private _minutes: number = 0;
  private _startTime: Date;
  
  minutes: string = "00";
  seconds: string = "00";
  milliseconds: string = "000";
  startStopLabel:string = "Start";
  resetLabel: string = "Reset";

  constructor(private _timeService: TimeService) { }

  onStartStop(): void {
    if (this._isRunning) {
      this._timer.stop();
      this.startStopLabel = "Start";
      this.resetLabel = "Reset";
    } else {
      this._startTime = new Date();
      this._timer.start();
      this.startStopLabel = "Stop";
      this.resetLabel = "Pause Display";
    }
    this._isRunning = !this._isRunning;
  }

  onReset(): void {
    if (!this._isRunning) {
      this._minutes = 0;
      this._seconds = 0;
      this._milliseconds = 0;
      this.setDisplay();
      return;
    }

    if (this._isFrozen) {
      this._isFrozen = false;
      this.resetLabel = "Pause Display";
      this.setDisplay();
      return;
    }

    this._isFrozen = true;
    this.resetLabel = "Resume Display";
  }

  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    this._milliseconds += this._timeService.getTimeDifferenceInMilliseconds(e.signalTime, this._startTime);
    this._startTime = e.signalTime;

    if (this._milliseconds > 999) {
      this._seconds++;
      this._milliseconds -= 1000;
    }

    if (this._seconds > 59) {
      this._minutes++;
      this._seconds -= 60;
    }

    if (this._minutes > 59) {
      this._minutes = 0;
    }

    this.setDisplay();
  }

  private setDisplay(): void {
    if (this._isFrozen)
      return;

    this.minutes = this.pad(this._minutes, 2);
    this.seconds = this.pad(this._seconds, 2);
    this.milliseconds = this.pad(this._milliseconds, 3);
  }
  
  ngOnInit(): void {
    this._timer = this._timeService.createTimer(this._interval);
    this._timer.elapsed(this);
  }

  ngOnDestroy(): void {
    this._timer.stop();
    this._timer.elapsed(null);
    this._timer = null;
  }

  private pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { TimeService } from '../shared/time.service';
import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { Timer } from '../shared/timer';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';
import { TimerAlarmService } from './timer-alarm.service';

@Component({
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  host: {"(document:click)": "onClick($event)"}
})
export class TimerComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _interval: number = 1000;
  private _timer: Timer;

  seconds : string = "00";
  minutes : string = "00";
  hours : string = "00";

  startStopButtonText : string = "Start";
  resetButtonText: string = "Reset";

  isRunning : boolean = false;

  constructor(private _timeService: TimeService, private _timerAlarmService: TimerAlarmService) { }

  onClick() {
    this._timerAlarmService.stopAlarm();
  }

  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    let date = this._timeService.addTime(this.hours + ":" + this.minutes + ":" + this.seconds, "s", -1);
    this.seconds = this._timeService.getTimePartFromDate(date, "ss");
    this.minutes = this._timeService.getTimePartFromDate(date, "mm");
    this.hours = this._timeService.getTimePartFromDate(date, "HH");
    if (!this.isStartStopEnabled()) {
      this.onStartStop();
      this._timerAlarmService.playAlarm();
    } 
  }

  ngOnInit() {
    this._timerAlarmService.initialize();

    this._timer = this._timeService.createTimer(this._interval);
    this._timer.elapsed(this);
  }

  onHoursNotify(hours : number): void {
    this.hours = this._pad(hours, 2);
  }

  onMinutesNotify(minutes : number): void {
    this.minutes = this._pad(minutes, 2);
  }

  onSecondsNotify(seconds: number): void {
    this.seconds = this._pad(seconds, 2);
  }

  onStartStop(): void {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.startStopButtonText = "Stop";
      this._timer.start();
    } else {
      this.startStopButtonText = "Start";
      this._timer.stop();
    }
  }

  onReset() : void {
    this.seconds = "00";
    this.minutes = "00";
    this.hours = "00";
  }

  ngOnDestroy(): void {
    this._timer.stop();
    this._timer.elapsed(null);
    this._timer = null;
  }

  isStartStopEnabled() : boolean {
    return (+this.seconds > 0 || +this.minutes > 0 || +this.hours > 0);
  }

  private _pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

}

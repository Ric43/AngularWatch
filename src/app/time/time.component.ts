import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimeService } from '../shared/time.service';
import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { Timer } from '../shared/timer';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';

@Component({
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _isSettingsOn: boolean = true;
  private _interval: number = 1000;
  private _timer: Timer;

  signalTime: Date;

  drawerClass: string = "drawer on";

  constructor(private _timeService: TimeService, private _route: ActivatedRoute) {
  }

  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    this.signalTime = e.signalTime;
    // this.displayTime = this._timeService.getHoursAndMinutesForDisplayWithOffset(e.signalTime, 0);
  }

  ngOnInit() {
    this._route.url.subscribe(urlSeg => {
      let url = "time1";
      if (urlSeg && urlSeg.length > 0 && urlSeg[0].path) {
        url = urlSeg[0].path;
      }
    });
    
    this._timer = this._timeService.createTimer(this._interval);
    this._timer.elapsed(this);
    this.onElapsed(this._timer, new TimerElapsedEventArguments(new Date()));
    this._timer.start();
  }

  onSettingsToggle(): void {
    if (this._isSettingsOn) {
      this.drawerClass = "drawer off";
    } else {
      this.drawerClass = "drawer on";
    }

    this._isSettingsOn = !this._isSettingsOn;
  }

  ngOnDestroy(): void {
    this._timer.stop();
    this._timer.elapsed(null);
    this._timer = null;
  }
}

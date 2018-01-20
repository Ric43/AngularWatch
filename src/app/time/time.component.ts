import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimeService } from '../shared/time.service';
import { ITimerElapsedHandler } from '../shared/itimerelapsedhandler';
import { Timer } from '../shared/timer';
import { TimerElapsedEventArguments } from '../shared/timerElapsedEventArguments';
import { timeSettings } from './timeSettings';
import { timeZone } from '../shared//timeZone';

@Component({
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, OnDestroy, ITimerElapsedHandler {
  private _isSettingsOn: boolean = false;
  private _interval: number = 1000;
  private _timer: Timer;
  private _settings: timeSettings;
  private _settingsKey: string;

  timezones: timeZone[];
  selectedTimezone: timeZone;
  timeName: string;
  seconds: string;
  hoursAndMinutes: string;
  dayAndDate: string;

  drawerClass: string = "drawer off";

  constructor(private _timeService: TimeService, private _route: ActivatedRoute) {
  }

  onElapsed(source: Timer, e: TimerElapsedEventArguments): void {
    this.seconds = this._timeService.getTimePart("ss", this.selectedTimezone.name)
    this.hoursAndMinutes = this._timeService.getTimePart("HH:mm", this.selectedTimezone.name)
    this.dayAndDate = this._timeService.getTimePart("dddd DD MMM YYYY", this.selectedTimezone.name)
  }

  ngOnInit() {
    this._route.url.subscribe(urlSeg => {
      let url = "time1";
      if (urlSeg && urlSeg.length > 0 && urlSeg[0].path) {
        url = urlSeg[0].path;
      }
    
      this._settingsKey = url + "_settings";
      this.timezones = this._timeService.getTimeZones();
      this._settings = JSON.parse(localStorage.getItem(this._settingsKey)) || new timeSettings(this._timeService.getCurrentTimezone());
      this.selectedTimezone = this._settings.timeZone;  
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

  tzCompare(tz1: timeZone, tz2: timeZone): boolean {
    if (tz1 == null || tz2 == null) return false;
    return tz1.name == tz2.name;
  }

  onTimezoneChanged():void {
    this._settings.timeZone = this.selectedTimezone;
    localStorage.setItem(this._settingsKey, JSON.stringify(this._settings));
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  seconds : string = "00";
  minutes : string = "00";
  hours : string = "00";

  constructor() { }

  ngOnInit() {
  }

  onHoursNotify(hours : number): void {
    this.hours = this._pad(hours, 2);
  }

  onMinutesNotify(minutes : number): void {
    this.minutes = this._pad(minutes, 2);
  }

  private _pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

}

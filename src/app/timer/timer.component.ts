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

}

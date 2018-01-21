import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-tmr-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent implements OnInit {
  @Input() seconds : string;

  constructor() { }

  ngOnInit() {
  }

}

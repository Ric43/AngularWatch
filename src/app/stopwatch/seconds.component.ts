import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent implements OnInit {
  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}

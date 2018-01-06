import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-milliseconds',
  templateUrl: './milliseconds.component.html',
  styleUrls: ['./milliseconds.component.scss']
})
export class MillisecondsComponent implements OnInit {
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}

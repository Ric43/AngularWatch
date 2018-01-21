import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-tmr-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.scss']
})
export class MinutesComponent implements OnInit {
  @Input() minutes : string;

  constructor() { }

  ngOnInit() {
  }

}

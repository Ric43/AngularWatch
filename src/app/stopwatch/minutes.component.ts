import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.scss']
})
export class MinutesComponent implements OnInit {
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}

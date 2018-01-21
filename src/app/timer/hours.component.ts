import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aw-tmr-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  @Input() hours : string;

  isEditMode : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onHoursClick() : void {
    this.isEditMode = true;
  }
}

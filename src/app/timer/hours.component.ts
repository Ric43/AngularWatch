import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-tmr-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  @Input() hours : number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  isEditMode : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onHoursClick() : void {
    this.isEditMode = true;
  }

  onFocusOut() : void {
    this.isEditMode = false;
    if (this.hours < 0) this.hours = 0;
    this.notify.emit(this.hours);
  }
}

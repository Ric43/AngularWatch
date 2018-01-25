import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-tmr-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.scss']
})
export class MinutesComponent implements OnInit {
  @Input() minutes : number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  isEditMode : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMinutesClick() : void {
    this.isEditMode = true;
  }

  onFocusOut() : void {
    this.isEditMode = false;
    if (this.minutes < 0) this.minutes = 0;
    this.notify.emit(this.minutes);
  }

}

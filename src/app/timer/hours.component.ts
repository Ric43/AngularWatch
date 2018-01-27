import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { FocusTriggeringEventEmitterDirective } from '../shared/directives/focus-triggering-event-emitter.directive';
import { element } from 'protractor';

@Component({
  selector: 'aw-tmr-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss'],
  host: {"(document:click)": "onClick($event)"}
})
export class HoursComponent implements OnInit {
  public elementRef: ElementRef;

  @Input() hours : number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  @Input() isEditMode : boolean = false;
  @Input() isRunning : boolean = false;

  public focusTriggeringEventEmitter = new EventEmitter<boolean>();

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
  }

  onClick(event): void {
    var clickedComponent = event.target;
    var inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
        clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if(inside){
      this.isEditMode = true;
      this.focusTriggeringEventEmitter.emit(true);
      } else {
        this.isEditMode = false;
      }  
  }

  onFocusOut() : void {
    this.isEditMode = false;
    if (this.hours < 0) this.hours = 0;
    this.notify.emit(this.hours);
  }
}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { FocusTriggeringEventEmitterDirective } from '../shared/directives/focus-triggering-event-emitter.directive';

@Component({
  selector: 'aw-tmr-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.scss'],
  host: {"(document:click)": "onClick($event)"}
})
export class MinutesComponent implements OnInit {
  public elementRef: ElementRef;

  @Input() minutes : number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  @Input() isEditMode : boolean = false;
  @Input() isRunning : boolean = false;

  public focusTriggeringEventEmitter = new EventEmitter<boolean>();

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
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
    if (inside) {
      this.isEditMode = true;
      this.focusTriggeringEventEmitter.emit(true);
      } else {
        this.isEditMode = false;
      }  
  }
  ngOnInit() {
  }

  onFocusOut() : void {
    this.isEditMode = false;
    if (this.minutes < 0) this.minutes = 0;
    this.notify.emit(this.minutes);
  }

}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { FocusTriggeringEventEmitterDirective } from '../shared/directives/focus-triggering-event-emitter.directive';

@Component({
  selector: 'aw-tmr-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss'],
  host: {"(document:click)": "onClick($event)"}
})
export class SecondsComponent implements OnInit {
  public elementRef: ElementRef;

  @Input() seconds : number;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  @Input() isEditMode : boolean = false;
  @Input() isRunning : boolean = false;

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

  public focusTriggeringEventEmitter = new EventEmitter<boolean>();

  onSecondsClick() : void {
    this.isEditMode = true;
    this.focusTriggeringEventEmitter.emit(true);
  }

  onFocusOut() : void {
    this.isEditMode = false;
    if (this.seconds < 0) this.seconds = 0;
    this.notify.emit(this.seconds);
  }

}

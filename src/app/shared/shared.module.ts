import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusTriggeringEventEmitterDirective } from './directives/focus-triggering-event-emitter.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FocusTriggeringEventEmitterDirective,],
  exports: [FocusTriggeringEventEmitterDirective, ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StopwatchComponent } from './stopwatch.component';
import { MinutesComponent } from './minutes.component';
import { SecondsComponent } from './seconds.component';
import { MillisecondsComponent } from './milliseconds.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'stopwatch', component: StopwatchComponent }
    ]),
    CommonModule
  ],
  declarations: [StopwatchComponent, MinutesComponent, SecondsComponent, MillisecondsComponent]
})
export class StopwatchModule { }

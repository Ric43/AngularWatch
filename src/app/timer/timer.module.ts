import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TimerComponent } from './timer.component';
import { HoursComponent } from './hours.component';
import { MinutesComponent } from './minutes.component';
import { SecondsComponent } from './seconds.component';
import { TimerComponentDirective } from './timercomponent.directive';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'timer', component: TimerComponent  },
    ]),
    CommonModule,
    FormsModule
  ],
  declarations: [TimerComponent, HoursComponent, MinutesComponent, SecondsComponent, TimerComponentDirective]
})
export class TimerModule { }

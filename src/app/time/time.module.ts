import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { TimeComponent } from './time.component';
import { HoursAndMinutesComponent } from './hours-and-minutes.component';
import { SecondsComponent } from './seconds.component';
import { DayAndDateComponent } from './day-and-date.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'time1', component: TimeComponent  },
      { path: 'time2', component: TimeComponent  },
      { path: '', redirectTo: 'time1', pathMatch: 'full' },
      { path: '**', redirectTo: 'time1', pathMatch: 'full' }
    ]),
    CommonModule,
    FormsModule,
  ],
  declarations: [TimeComponent, HoursAndMinutesComponent, SecondsComponent, DayAndDateComponent],
  exports: [TimeComponent]
})
export class TimeModule { 
}

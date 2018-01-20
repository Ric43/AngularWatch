import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'aw-hours-and-minutes',
  templateUrl: './hours-and-minutes.component.html',
  styleUrls: ['./hours-and-minutes.component.scss']
})
export class HoursAndMinutesComponent {
  @Input() hoursAndMinutes: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'aw-day-and-date',
  templateUrl: './day-and-date.component.html',
  styleUrls: ['./day-and-date.component.scss']
})
export class DayAndDateComponent {
  @Input() dayAndDate: string;
}

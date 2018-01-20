import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'aw-seconds',
  templateUrl: './seconds.component.html',
  styleUrls: ['./seconds.component.scss']
})
export class SecondsComponent {
  @Input() seconds: string;
}

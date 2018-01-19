import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Watch';

  constructor(private _router: Router) {}
}

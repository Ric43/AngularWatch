import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment/moment';

@Component({
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  time: string;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.url.subscribe(urlSeg => {
      let url = "time1";
      if (urlSeg && urlSeg.length > 0 && urlSeg[0].path)
        url = urlSeg[0].path;
    });
  }
}

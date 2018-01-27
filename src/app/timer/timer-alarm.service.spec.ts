import { TestBed, inject } from '@angular/core/testing';

import { TimerAlarmService } from './timer-alarm.service';

describe('TimerAlarmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerAlarmService]
    });
  });

  it('should be created', inject([TimerAlarmService], (service: TimerAlarmService) => {
    expect(service).toBeTruthy();
  }));
});

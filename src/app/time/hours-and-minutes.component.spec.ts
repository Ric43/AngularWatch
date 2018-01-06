import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursAndMinutesComponent } from './hours-and-minutes.component';

describe('HoursAndMinutesComponent', () => {
  let component: HoursAndMinutesComponent;
  let fixture: ComponentFixture<HoursAndMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursAndMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursAndMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

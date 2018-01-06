import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAndDateComponent } from './day-and-date.component';

describe('DayAndDateComponent', () => {
  let component: DayAndDateComponent;
  let fixture: ComponentFixture<DayAndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayAndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayAndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

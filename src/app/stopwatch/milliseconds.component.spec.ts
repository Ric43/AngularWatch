import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillisecondsComponent } from './milliseconds.component';

describe('MillisecondsComponent', () => {
  let component: MillisecondsComponent;
  let fixture: ComponentFixture<MillisecondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillisecondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillisecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

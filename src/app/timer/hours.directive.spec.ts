import { TimerComponentDirective } from './timercomponent.directive';

describe('HoursDirective', () => {
  it('should create an instance', () => {
    const directive = new TimerComponentDirective(null);
    expect(directive).toBeTruthy();
  });
});

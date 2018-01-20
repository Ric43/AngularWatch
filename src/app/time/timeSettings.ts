import { timeZone } from '../shared/timeZone';

export class timeSettings {
    timeZone: timeZone;

    constructor(currentTimeZone: timeZone) {
        this.timeZone = currentTimeZone;
    }
}
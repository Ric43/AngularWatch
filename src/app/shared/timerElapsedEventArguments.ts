export class TimerElapsedEventArguments {
    signalTime: Date;

    constructor(time: Date) {
        this.signalTime = time;
    }
}

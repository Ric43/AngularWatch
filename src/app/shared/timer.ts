import { ITimerElapsedHandler } from "./itimerelapsedhandler";
import { TimerElapsedEventArguments } from "./timerElapsedEventArguments";

export class Timer {
    private _handler: ITimerElapsedHandler;
    private _timeout: NodeJS.Timer;
    private _isTicking: boolean;

    constructor(private _interval: number) {
    }

    elapsed(handler: ITimerElapsedHandler): void {
        this._handler = handler;
    }

    start(): void {
        this._isTicking = true;
        this._timeout = setTimeout(() => this.tick(), this._interval);
    }

    stop(): void {
        this._isTicking = false;
        clearTimeout(this._timeout);
    }

    private tick(): void {
        this._handler.onElapsed(this, new TimerElapsedEventArguments(new Date()));
        if (this._isTicking) {
            this._timeout = setTimeout(() => this.tick(), this._interval);
        }
    }
}

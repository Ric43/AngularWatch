import { TimerElapsedEventArguments } from "./timerElapsedEventArguments";
import { Timer } from "./timer";

export interface ITimerElapsedHandler {
    onElapsed(source: Timer, e: TimerElapsedEventArguments): void;
}

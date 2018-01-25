import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[TimerComponent]'
})
export class TimerComponentDirective {
  private _regexStr = '^[0-9]*$';

  constructor(private _elementReference : ElementRef) { }

  @Input() TimerComponent : number;

  @HostListener("keydown", ["$event"]) onkeydown(event) {
    let value = this._elementReference.nativeElement.value;
    let e = <KeyboardEvent> event;

    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode == 65 && e.ctrlKey === true) ||
    // Allow: Ctrl+C
    (e.keyCode == 67 && e.ctrlKey === true) ||
    // Allow: Ctrl+V
    (e.keyCode == 86 && e.ctrlKey === true) ||
    // Allow: Ctrl+X
    (e.keyCode == 88 && e.ctrlKey === true) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }

    let ch = String.fromCharCode(e.keyCode);
    let newVal = +(value + ch);
    let regEx =  new RegExp(this._regexStr);    
    if(regEx.test(ch) && newVal <= this.TimerComponent && newVal >= 0)
      return;
    else
       e.preventDefault();
  }
}

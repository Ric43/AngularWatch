import { Injectable } from '@angular/core';

@Injectable()
export class TimerAlarmService {
  private _context : AudioContext;
  private _buffer: AudioBuffer;
  private _alarm : AudioBufferSourceNode;
  private _isPlaying: boolean = false;

  constructor() { }

  initialize(): void {
    try {
      this._context = new AudioContext();
      this.loadSound();
      console.log("Sound loaded");
    }
    catch(e) {
      alert("Web Audio API is not supported in this browser");
    }
  }

  playAlarm() : void {
    if (this._isPlaying) return;

    console.log("Playing alarm");
    this._alarm = this._context.createBufferSource();
    this._alarm.buffer = this._buffer;
    this._alarm.connect(this._context.destination);
    this._alarm.addEventListener("ended", this.onAlarmComplete)
    this._isPlaying = true;
    this._alarm.start(0);
  }

  stopAlarm() : void {
    if (this._isPlaying) {
      this._alarm.stop(0);
      this._isPlaying = false;
    }
  }

  private onAlarmComplete(): void {
    console.log("Finished playng sound");
  }

  private loadSound() : void {
      var soundPath = "./assets/sounds/analog-watch-alarm_daniel-simion.mp3";
      this.loadBuffer(soundPath);
  }

  private loadBuffer(path: string) : void {

    var request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.responseType = "arraybuffer";

    let context = this._context;
    let cb = this.onDataReceived;
    let self = this;

    request.onload = function() {
      context.decodeAudioData(
        request.response,
        function(b) {
            if (!b) {
              alert('error decoding file data: ' + path);
              return;
            }
            cb.call(self, b);
        },
        function(error) {
            console.error('decodeAudioData error', error);
        }
      );
    }
    request.onerror = function() {
      alert('BufferLoader: XHR error');
    }
    request.send();
  }

  private onDataReceived(b) : void {
    this._buffer = b;
  }
}

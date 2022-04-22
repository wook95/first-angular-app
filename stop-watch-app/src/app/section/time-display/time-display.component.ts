import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData:string;
  min:number;
  sec:number;
  ms:number;
  timeInterval;

  constructor() { 
    this.min=0;
    this.sec=0;
    this.ms=0;
  }



  startTime() {
    this.stopTime();
    this.timeInterval = setInterval(()=>{
      this.ms++;
    },10)
  }

  stopTime(){
    clearInterval(this.timeInterval);
  }

  resetTime(){
    this.stopTime();
    this.ms=0;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    for(let propName in changes){

      switch (changes[propName].currentValue) {
        case 'start':
          this.startTime();
          break;

        case 'stop':
          this.stopTime();
          break;

          case 'reset':
          this.resetTime();
          break;
      
        default:
          this.stopTime();
          break;
      }

    }
  }

}

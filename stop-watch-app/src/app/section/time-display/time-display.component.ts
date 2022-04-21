import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  test:number
  
  constructor() { 
    this.test=1;
    setInterval(  ()=>(this.test++),1000)
  }





  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageToggleService} from '../../share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  present:string;
 

  constructor(
    private router:Router,
    private pageToggleService:PageToggleService
    ) { 

  }

  ngOnInit(): void {
  }

  startTime(time:string){
    this.present=time;
  }

  goClock(){
    this.pageToggleService.moveToPage('/clock')
  }
}

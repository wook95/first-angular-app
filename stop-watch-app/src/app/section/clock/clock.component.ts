import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {Observable, interval} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router'
import {PageToggleService} from '../../share/page-toggle.service';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: string;

  constructor(
    private router:Router,
    private pageToggleService:PageToggleService
    ) { 
    this.time='. . .';
    interval(1000)
      .pipe(map(()=> moment().format('YYYY-MM-DD HH:mm:ss')))
      .subscribe(data => {
        this.time=data
      })

  }



  ngOnInit(): void {
  }

  goStopwatch(){
    this.pageToggleService.moveToPage('/stopwatch')
  }

}

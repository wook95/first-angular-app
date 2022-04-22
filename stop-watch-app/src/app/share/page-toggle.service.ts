import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PageToggleService {
  routingCount:number

  constructor(private router:Router) {
    this.routingCount=0;
   }

  moveToPage(target){
    this.routingCount++;
    this.router.navigateByUrl(target)
  }

}

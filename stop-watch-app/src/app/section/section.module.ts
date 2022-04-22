import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { SectionComponent} from "./section.component";
import { ButtonsComponent } from './buttons/buttons.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path:'stopwatch',
    component: StopwatchComponent
  },
  {
    path:'clock',
    component: ClockComponent
  }
  ]

@NgModule({
  declarations: [
    SectionComponent,
    ButtonsComponent,
    TimeDisplayComponent,
    StopwatchComponent,
    ClockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SectionComponent,
    RouterModule
  ]
})
export class SectionModule { }

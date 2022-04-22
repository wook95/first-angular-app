import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onPressButton(state){
    this.clickEvent.emit(state);
  }

}

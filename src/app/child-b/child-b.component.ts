import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  // decorator with event emiitter function to pass data from child to parent when specific event hapend e.g on button click
  @Output() strValue : EventEmitter<string> = new EventEmitter<string>(); //Tells Angular to create a new event emitter and that the data it emits is of type string
  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){
    this.strValue.emit('hello from child component'); // on button click emit value in strValue and pass from child to parent using @Output decorator
  }

}

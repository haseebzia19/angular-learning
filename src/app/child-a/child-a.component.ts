import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
@Input() strValue : string = ''; // to fetch strValue variable value from parent component
  constructor() { }

  ngOnInit(): void {
  }

}

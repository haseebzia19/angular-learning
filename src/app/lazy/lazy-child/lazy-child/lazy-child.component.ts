import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

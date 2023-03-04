import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    // getData is function that is calling http request and returning observable
    // subscribing to get data
    this.httpService.getData().subscribe(data=>{
      console.log(data);
    })
  }

}

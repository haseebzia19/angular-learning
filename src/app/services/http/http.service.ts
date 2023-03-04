// in order to use http client in angular you need to import HttpClientModule in app.module.ts file
//  import from @angular/common/http in app.module.ts file
//  then inject HttpClient service in service constructor
// call http reuqests and return observable
// subscribe that function that returning http response observable in component from where it is calling
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() : Observable<any> // this line shows that function is returning observable
  {
    return this.http.get('http.google.com') // this line is calling http get request with some backend api and returning observable
  } 
}

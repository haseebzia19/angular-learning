//  use <T> to define generic type
//  which allows you to create reusable functions that can work with a variety of types
//  generic type help to use same funcion for different types
//  e.g; function myFunction(arg : T) : T {}
//  myFunction<string>('hello') or myFunction('hello')

//  generic http request service help user to pass only request type, url name and data if any
//  without need to write domain, http request and error ehandling again and agian for every request

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestType } from 'src/app/shared/enums/request-type';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http : HttpClient) { }

  public genaricServiceCaller(request : RequestType, url : string, data? : any){
    let apiUrl = 'localhost:3000/';
    apiUrl = apiUrl + url;
    if(request && url){
      if(request == this.requestType.GET){
        return this.http.get(apiUrl);
      }else if(request == this.requestType.POST){
        return this.http.post(apiUrl,data);
      }else{
        throw 'Invalid Controller'
      }
    }else{
      throw 'Invalid Controller'
    }

  }
 public get requestType() : typeof RequestType{
    return RequestType;
  }
}

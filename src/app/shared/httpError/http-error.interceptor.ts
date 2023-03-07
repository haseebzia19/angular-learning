//  http interceptor help to handle error occured by http request  for all http request
//  by doing this you will remove redudency of error code for every http request

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error : HttpErrorResponse)=>{
        
        // add notification code here

        // Observable.throw(error); or
        return throwError(error); // throw error to the component from where request called
        
        
      })
    );
  }
}

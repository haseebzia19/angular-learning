// create using command ( ng g interceptor testing)
// act as middleware to process http request before entring and leaving client 
// provide a way toa dd custom logic to handle these requests and responses
// such as modifying request, caching response, or handling error etc

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestingInterceptor
 implements HttpInterceptor // implement HttpInterceptor which define 2 functions; intercept() & handleError
  {

  constructor() {}
    //  first function is intercept() with 2 object parameters; HttpRequest and HttpHandler
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // adding intercepting logic here
    const authToken = 'my-auth-token';
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`)
    });
    // pass the modified request to next handler

    // Register interceptor
    // register interceptor in your app by adding it into provider array in root module(app.module.ts)
    // by doing this your interceptor will be applied to all http requests made by application
    

    return next.handle(authRequest);
  }
}

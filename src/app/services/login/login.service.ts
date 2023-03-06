import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestType } from 'src/app/shared/enums/request-type';
import { HttpRequestService } from '../generic/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpRequest : HttpRequestService) { }

  sigIn(data:any) : Observable<any>{
    return this.httpRequest.genaricServiceCaller(RequestType.POST,'sigin',data);
  }
}

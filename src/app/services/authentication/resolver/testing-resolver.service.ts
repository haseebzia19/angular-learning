// if we want to load data before component rendered, will will use resolver.
// it will fetch data and pass it to component
// use resolve:{
// data : MyResolver 
// } in route


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TestingResolverService implements Resolve<any> {
id : any;
  constructor(private loginService : LoginService) { }

// ActivatedRouteSnapshot
// is immutable object that represent the current state of activated route at particular moment of time
// it contain route information about configuration, parameters, data ad other detail
// primarly used for lifecycle hooks such as caActivate, canDeactivated and Resolve
// e.g
// constructor(private route : ActivatedRouteSnapshot){}
// this.id = this.route.paramMap.get('id');

// ActivatedRoute
// is mutable and is service that represent the current state of activated route as an observable stream
// it is used subscribe to changes access the current state
// it provide method to retrive parameters, data and other detail
// e.g
// constructor(private route : ActivatedRoute){}
// this.route.params.subscribe(params =>{
// this.id = params['id'];
// })

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any> {
    this.id = route.paramMap.get('id');
    return this.loginService.getDataBeforeLoad(this.id)
  }
}

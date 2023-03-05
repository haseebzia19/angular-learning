// auth guard is used in in array of canActivate (canActivate is a property of object in routes array) in routingModule
// canActivate property in routing module call this guard which will execute authGuard builtIn function canActivate
// this built in function call auth service function 
//  on the basis of this auth service function if true then angular execute url other wise return to login page

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authService : AuthService, private router : Router){}
  canActivate(): boolean {
    
      if(this.authService.checkValidation()){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false
      }
    
  }
  
}

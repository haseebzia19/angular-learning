import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkValidation(){
    if(localStorage.getItem('isLoggedIn')=='true'){
      return true;
    }else{
      return false;
    }
  }
}

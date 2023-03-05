//  after login and saving data in local storage
//  auth service function is called from auth guard
//  it check data from local storage and return true or false on basis

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

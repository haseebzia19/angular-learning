// Route gaurd
// applying auth guard on route url to make access of component for valid users
//  create auth service to check whether login was successful or not
// create auth guard which give permission to route to access or not on basis of login check in auth service

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password : string = '';
  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
  }
onSubmit(){
  let data = {
   email : this.email,
   password : this.password
  }
  // this.loginService.sigIn(data).subscribe(data=>{
  //   if(true){
      // save token r data in local storage
      localStorage.setItem('isLoggedIn','true');
      this.router.navigate(['/nested']);
  //   }
  // })
}
}

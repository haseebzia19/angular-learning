// any value, function or feature that application needs
// anything can be service
// e.g logging service, data service
//  no base class or no place to register a service


import { Injectable } from '@angular/core';

// Marks a class as available to Injector for creation.
@Injectable({
  //  (provideIn : 'root') is used to define service to root
  //  which help to use single instance of service all over the application 
  // assumption;
  // when service class use injectable -> root 
  // it will define service to root by adding service into injector(service instance container)
  // and when component want that service then angular uses service from injector and inject it into contructor
  providedIn: 'root'
})
export class LevelService {

  constructor() { }
}

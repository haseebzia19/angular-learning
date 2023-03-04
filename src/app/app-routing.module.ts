
// routing module is to map urls with specific components
// seperate file located in app/src folder by default
// angular ask for creating routing module in time when app is created
// other way is to write command (ng g m app-routing --flat --module=app)
// --flat : tells angular cli to create new file in the src/app folder
// --module=app : tells angular cli to add this new routing module to app.module.ts files import array

// importing angular libraries to fetch ngmodule and routing related things
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

// object array that map specific urls to component
// each object has 2 properties;
// path --> which specifies url
// component --> specifies component to be display when url accessed
// use <router-outlet> directive to place component
const routes: Routes = [
  { path:'',component: ChildAComponent },
  { path:'b',component: ChildBComponent },
  
  // lazy loading 
  // lazy loading is a technique that allow you to load specific part of your application on demand
  // instead of loading everything when application start
  // help to improve application performance by reducing initial load time
  // and minimize amount of code that needs to be downloded by users browser
  
  // 1st step is to create featured module which should have there own routing module
  // command : ng g m lazy --route lazy --module app.module

  // create new module name lazy and add it to app.module file;
  // --route specify route on which module will be loaded lazily
  // --module app.module will initialize the new feature module in root module (app.module.ts) 
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'nested', loadChildren: () => import('./lazy/lazy-child/nested/nested.module').then(m => m.NestedModule) },
 // object with 2 properties
 // path : which specify url
 // component property is replaced by lazyChildren
 //  component points component to display on url access where lazyChildren access module 

 // how it works?
 // url == /lazy  
// --> lazyModule(having their routing file) 
// --> go to their own routingModule file
// --> check sub route /lazy/ 
// --> diplay specific component defined against sub route in route array  

];

// RouterModule.forRoot(routes)
// this method initialize routing configuration and return instance of RouterModule
// take router array as parameter
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // note : feature module routing file contain forChild instead of forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }

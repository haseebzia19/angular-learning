// Angular app has its on modularity system called angular module or ngModule
// every angular app has atleat one angular module called root module
// may be one or more feature modules

//-----------------------------------------------------------------------------

// Angular library modules (collection of javascript files)
// start with @angular prefix
// install using npm 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
// A decorator funtion tells angular that class in file is a module
// How to run and compile module code
// Take single metadata object
@NgModule({ 
  declarations: [// view classes that belongs to this module, 3 types; component, directive, pipes
    AppComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [ // import other modules to use there exported classes
    BrowserModule,
    AppRoutingModule,  // import routing module
    FormsModule,
    HttpClientModule
  ],
  providers: [], // global collection of services, accessible in all parts of app
  bootstrap: [AppComponent] // call root component to bootstrap, only used in root module
})
export class AppModule { }

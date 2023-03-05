import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/authentication/guard/auth.guard';
import { NestedComponent } from './nested.component';
import { Nested1Component } from './nested1/nested1/nested1.component';
import { SubNestedComponent } from './sub-nested/sub-nested/sub-nested.component';

// lazy loaded module 
//  these routes are sub routes of /nested route
//  /nested/ --> will render Nested Component in router-outlet in app.component.html file
//  /nested/nested1 --> will render Nested 1 Component in router-outlet in app.component.html file
//  /nested/sub-nested --> will render sub nested component in router-outlet placed in (nestedComponent) bcoz this componenet is child of (nestedComponent)

const routes: Routes = [
// for nested routing object have 3 properties
//  path --> specific url
//  component --> parent component
//  children --> array of object of child components (main component having child component inside it)
  { path: '', component: NestedComponent, canActivate:[AuthGuard],
    children:[
      // in my opinion it is nested component with nested route (render inside other fetured component)
      {path: 'sub-nested',component:SubNestedComponent}
    ]
  },
  // in my opinion it may be  sub route in some cases e.g : nested/nested1
  { path: 'nested1', component:Nested1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedRoutingModule { }

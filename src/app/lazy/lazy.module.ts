import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { LazyChildComponent } from './lazy-child/lazy-child/lazy-child.component';


@NgModule({
  declarations: [
    LazyComponent,
    LazyChildComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedRoutingModule } from './nested-routing.module';
import { NestedComponent } from './nested.component';
import { Nested1Component } from './nested1/nested1/nested1.component';
import { SubNestedComponent } from './sub-nested/sub-nested/sub-nested.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NestedComponent,
    Nested1Component,
    SubNestedComponent
  ],
  imports: [
    CommonModule,
    NestedRoutingModule,
    ReactiveFormsModule
  ]
})
export class NestedModule { }

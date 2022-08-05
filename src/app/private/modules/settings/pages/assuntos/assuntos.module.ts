import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuntosRoutingModule } from './assuntos-routing.module';
import { AssuntosComponent } from './assuntos.component';


@NgModule({
  declarations: [
    AssuntosComponent
  ],
  imports: [
    CommonModule,
    AssuntosRoutingModule
  ]
})
export class AssuntosModule { }

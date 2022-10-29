import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PlebiscitoRoutingModule } from './plebiscito-routing.module'
import { PlebiscitoComponent } from './pages/plebiscito.component'


@NgModule({
  declarations: [
    PlebiscitoComponent
  ],
  imports: [
    CommonModule,
    PlebiscitoRoutingModule
  ]
})
export class PlebiscitoModule { }

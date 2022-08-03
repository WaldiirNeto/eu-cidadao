import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'

import { PrivateRoutingModule } from './private-routing.module'
import { PrivateComponent } from './private.component'


@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    PrivateRoutingModule,
    MatSidenavModule

  ]
})
export class PrivateModule { }

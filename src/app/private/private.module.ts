import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatExpansionModule } from '@angular/material/expansion'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { PrivateRoutingModule } from './private-routing.module'
import { PrivateComponent } from './private.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    PrivateRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    BsDropdownModule.forRoot(),
    MatProgressSpinnerModule,
    MatTooltipModule
  ]
})
export class PrivateModule { }

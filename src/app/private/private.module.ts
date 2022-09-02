import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatExpansionModule } from '@angular/material/expansion'
// import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'
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
    MatSidenavModule,
    MatExpansionModule,
    MatDialogModule,
    // MatMenuModule
  ]
})
export class PrivateModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'

import { PlebiscitoRoutingModule } from './plebiscito-routing.module'
import { PlebiscitoComponent } from './pages/plebiscito.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { FilterTablePlebiscitoComponent } from './components/filter-table-plebiscito/filter-table-plebiscito.component'
import { ModalPlebiscitoComponent } from './components/modal-plebiscito/modal-plebiscito.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    PlebiscitoComponent,
    FilterTablePlebiscitoComponent,
    ModalPlebiscitoComponent
  ],
  imports: [
    CommonModule,
    BoxComponent,
    MatFormFieldComponent,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    PlebiscitoRoutingModule
  ]
})
export class PlebiscitoModule { }

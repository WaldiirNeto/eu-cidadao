import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AssuntosRoutingModule } from './assuntos-routing.module'
import { AssuntosComponent } from './pages/assuntos.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { MatIconModule } from '@angular/material/icon'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ModalCreateAssuntoComponent } from './components/modal-create-assunto/modal-create-assunto.component'
import { TableAssuntosComponent } from './components/table-assuntos/table-assuntos.component'
import { ModalDeleteAssuntoComponent } from './components/modal-delete-assunto/modal-delete-assunto.component'
import { MatTableModule } from '@angular/material/table'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  declarations: [
    AssuntosComponent,
    ModalCreateAssuntoComponent,
    TableAssuntosComponent,
    ModalDeleteAssuntoComponent
  ],
  imports: [
    CommonModule,
    AssuntosRoutingModule,
    BoxComponent,
    MatIconModule,
    SubmitButtonComponent,
    MatFormFieldComponent,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class AssuntosModule { }

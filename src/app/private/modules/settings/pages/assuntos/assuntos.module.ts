import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AssuntosRoutingModule } from './assuntos-routing.module'
import { AssuntosComponent } from './pages/assuntos.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { ModalCreateAssuntoComponent } from './components/modal-create-assunto/modal-create-assunto.component'
import { TableAssuntosComponent } from './components/table-assuntos/table-assuntos.component'
import { ModalDeleteAssuntoComponent } from './components/modal-delete-assunto/modal-delete-assunto.component'
import { PaginationComponent } from '@shared/components/pagination/pagination.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { SnackBarService } from '@shared/services/snackbar.service'
import { MatPaginatorModule } from '@angular/material/paginator'
import { SortTableComponent } from '@shared/components/sort-table/sort-table.component'
import { CheckPermissionDirective } from '@shared/directives/check-permission.directive'

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
    MatDialogModule,
    DragDropModule,
    MatCheckboxModule,
    PaginationComponent,
    MatFormFieldModule,
    MatPaginatorModule,
    SortTableComponent,
    CheckPermissionDirective
  ],
  providers: [SnackBarService]
})
export class AssuntosModule { }

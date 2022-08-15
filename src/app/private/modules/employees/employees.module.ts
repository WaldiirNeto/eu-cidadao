import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'

import { BoxComponent } from '@shared/components/box/box.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { TableEmployeesComponent } from './components/table-employees/table-employees.component'
import { EmployeesService } from './services/employees.service'
import { EmployeesRoutingModule } from './employees.routing.module'
import { EmployeesComponent } from './pages/employees.component'
import { ModalCreateEmployeesComponent } from './components/modal-create-employees/modal-create-employees.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { ModalDeleteEmployeeComponent } from './components/modal-delete-employee/modal-delete-employee.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { PaginationComponent } from '@shared/components/pagination/pagination.component'
import { SnackBarService } from '@shared/services/snackbar.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    EmployeesComponent,
    TableEmployeesComponent,
    ModalCreateEmployeesComponent,
    ModalDeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BoxComponent,
    MatFormFieldComponent,
    PaginationComponent,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SubmitButtonComponent,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [EmployeesService, SnackBarService]
})
export class EmployeesModule { }

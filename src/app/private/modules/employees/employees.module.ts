import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { BoxComponent } from '@shared/components/box/box.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { TableEmployeesComponent } from './components/table-users/table-employees.component'
import { EmployeesService } from './services/employees.service'
import { EmployeesRoutingModule } from './employees.routing.module'
import { EmployeesComponent } from './pages/employees.component'


@NgModule({
  declarations: [
    EmployeesComponent,
    TableEmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BoxComponent,
    MatFormFieldComponent,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [EmployeesService]
})
export class EmployeesModule { }

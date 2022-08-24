import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { RelatoriosRoutingModule } from './relatorios-routing.module'
import { RelatoriosComponent } from './pages/relatorios.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { RelatoriosManagerComponent } from './pages/relatorios-manager/relatorios-manager.component'
import { FilterRelatoriosComponent } from './pages/filter-relatorios/filter-relatorios.component'
import { RelatoriosTableComponent } from './components/relatorios-table/relatorios-table.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { PaginationComponent } from '@shared/components/pagination/pagination.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'


@NgModule({
  declarations: [
    RelatoriosComponent,
    RelatoriosManagerComponent,
    FilterRelatoriosComponent,
    RelatoriosTableComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    BoxComponent,
    ReactiveFormsModule,
    MatFormFieldComponent,
    SubmitButtonComponent,
    MatCheckboxModule,
    MatIconModule,
    PaginationComponent,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: []
})
export class RelatoriosModule { }

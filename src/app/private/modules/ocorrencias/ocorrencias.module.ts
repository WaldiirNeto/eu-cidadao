import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table'
import { NgChartsModule } from 'ng2-charts'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSelectModule } from '@angular/material/select'
import { MatExpansionModule } from '@angular/material/expansion'

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module'
import { OcorrenciasComponent } from './pages/ocorrencias.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { PaginationComponent } from '@shared/components/pagination/pagination.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { StaticDataComponent } from './components/static-data/static-data.component'
import { OcorrenciasTableComponent } from './components/ocorrencias-table/ocorrencias-table.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { InfosInitialChartsComponent } from './components/infos-initial-charts/infos-initial-charts.component'
import { ModalDetalhesOcorrenciaComponent } from './components/modal-detalhes-ocorrencia/modal-detalhes-ocorrencia.component'
import { FilterTableOcorrenciasComponent } from './components/filter-table-ocorrencias/filter-table-ocorrencias.component'
import { SnackBarService } from '@shared/services/snackbar.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    OcorrenciasComponent,
    StaticDataComponent,
    OcorrenciasTableComponent,
    InfosInitialChartsComponent,
    ModalDetalhesOcorrenciaComponent,
    FilterTableOcorrenciasComponent
  ],
  imports: [
    CommonModule,
    OcorrenciasRoutingModule,
    MatTableModule,
    MatFormFieldComponent,
    MatCheckboxModule,
    PaginationComponent,
    BoxComponent,
    NgChartsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    SubmitButtonComponent,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [SnackBarService]
})
export class OcorrenciasModule { }

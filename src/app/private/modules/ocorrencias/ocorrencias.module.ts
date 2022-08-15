import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table'
import { NgChartsModule } from 'ng2-charts'

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
import { MatSelectModule } from '@angular/material/select'


@NgModule({
  declarations: [
    OcorrenciasComponent,
    StaticDataComponent,
    OcorrenciasTableComponent,
    InfosInitialChartsComponent,
    ModalDetalhesOcorrenciaComponent
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
    MatSelectModule
  ]
})
export class OcorrenciasModule { }

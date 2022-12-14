import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgChartsModule } from 'ng2-charts'

import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './pages/dashboard.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { CategoryListBoxComponent } from './components/category-list-box/category-list-box.component'
import { LineChartComponent } from './components/line-chart/line-chart.component'
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { StaticsOcorrenciasComponent } from './components/statics-ocorrencias/statics-ocorrencias.component';
import { BoxOcorrenciasRecentesComponent } from './components/box-ocorrencias-recentes/box-ocorrencias-recentes.component'


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryListBoxComponent,
    LineChartComponent,
    BarChartComponent,
    StaticsOcorrenciasComponent,
    BoxOcorrenciasRecentesComponent,
  ],
  imports: [
    CommonModule,
    BoxComponent,
    DashboardRoutingModule,
    NgChartsModule
  ]
})
export class DashboardModule { }

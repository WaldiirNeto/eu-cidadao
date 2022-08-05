import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RelatoriosRoutingModule } from './relatorios-routing.module'
import { RelatoriosComponent } from './pages/relatorios.component'


@NgModule({
  declarations: [
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }

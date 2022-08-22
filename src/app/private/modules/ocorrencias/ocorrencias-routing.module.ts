import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OcorrenciasComponent } from './pages/ocorrencias.component'

const routes: Routes = [{ path: '', component: OcorrenciasComponent, title: 'Ocorrências' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }

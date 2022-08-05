import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RelatoriosComponent } from './pages/relatorios.component'

const routes: Routes = [{ path: '', component: RelatoriosComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }

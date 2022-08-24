import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FilterRelatoriosComponent } from './pages/filter-relatorios/filter-relatorios.component'
import { RelatoriosBarComponent } from './pages/relatorios-bar/relatorios-bar.component'
import { RelatoriosManagerComponent } from './pages/relatorios-manager/relatorios-manager.component'
import { RelatoriosComponent } from './pages/relatorios.component'

const routes: Routes = [
  {
    path: '',
    component: RelatoriosComponent,
    children: [
      {
        path: '',
        component: FilterRelatoriosComponent
      },
      {
        path: 'manager',
        component: RelatoriosManagerComponent
      },
      {
        path: 'bar',
        component: RelatoriosBarComponent
      }
    ],
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlebiscitoComponent } from './pages/plebiscito.component'

const routes: Routes = [{ path: '', component: PlebiscitoComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlebiscitoRoutingModule { }

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssuntosComponent } from './pages/assuntos.component'

const routes: Routes = [{ path: '', component: AssuntosComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssuntosRoutingModule { }

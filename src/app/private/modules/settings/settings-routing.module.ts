import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GerenciarAssuntosComponent } from './pages/gerenciar-assuntos/gerenciar-assuntos.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { SettingsComponent } from './pages/settings.component'

const routes: Routes =
  [
    { path: '', component: SettingsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'assuntos', component: GerenciarAssuntosComponent },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

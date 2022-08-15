import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SettingsComponent } from './pages/settings.component'

const routes: Routes =
  [
    { path: '', component: SettingsComponent },
    {
      path: 'profile',
      loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
    },
  { path: 'assuntos', loadChildren: () => import('./pages/assuntos/assuntos.module').then(m => m.AssuntosModule) },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

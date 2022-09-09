import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CanMatchAdmin } from '@core/guards/check-admin.service'
import { SettingsComponent } from './pages/settings.component'

const routes: Routes =
  [
    {
      path: '', component: SettingsComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
          title: `EU CIDADÃO | Meu Perfil`
        },
      ]
    },
    {
      path: 'profile',
      loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
      title: `EU CIDADÃO | Meu Perfil`
    },
    {
      path: 'assuntos',
      loadChildren: () => import('./pages/assuntos/assuntos.module').then(m => m.AssuntosModule),
      title: `EU CIDADÃO | Assuntos`,
      canMatch: [CanMatchAdmin]
    },
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

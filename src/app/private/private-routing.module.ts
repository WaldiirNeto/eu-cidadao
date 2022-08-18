import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: 'users', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule) },
  {
    path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  { path: 'relatorios', loadChildren: () => import('./modules/relatorios/relatorios.module').then(m => m.RelatoriosModule) },
  { path: 'ocorrencias', loadChildren: () => import('./modules/ocorrencias/ocorrencias.module').then(m => m.OcorrenciasModule) },
  { path: 'notifications', loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule) }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

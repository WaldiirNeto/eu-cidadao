import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    title: 'Dashboard'
  },
  {
    path: 'users', loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule),
    title: 'Usuários'
  },
  {
    path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
    title: 'Configurações'
  },
  {
    path: 'relatorios', loadChildren: () => import('./modules/relatorios/relatorios.module').then(m => m.RelatoriosModule),
    title: 'relatórios'
  },
  {
    path: 'ocorrencias', loadChildren: () => import('./modules/ocorrencias/ocorrencias.module').then(m => m.OcorrenciasModule),
    title: 'Ocorrências'
  },
  {
    path: 'notifications', loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule),
    title: 'Notificações'
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

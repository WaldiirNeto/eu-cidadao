import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginGuard } from '@core/guards/login.guard'
import { Shell } from '@core/shell/shell.service'
import { PrivateComponent } from './private/private.component'

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    data: { reuse: true, redirectAfterRender: '/dashboard' }
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    title: 'LOGIN - Eu cidadão'
  },
  Shell.childRoutes([
    {
      path: '',
      loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
    }
  ]),
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

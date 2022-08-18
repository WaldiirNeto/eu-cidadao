import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateNotificationComponent } from './pages/create-notification/create-notification.component'
import { NotificationsComponent } from './pages/notifications.component'

const routes: Routes = [
  {
    path: '', component: NotificationsComponent,
    children: [
      {
        path: 'create-notification', component: CreateNotificationComponent

      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }

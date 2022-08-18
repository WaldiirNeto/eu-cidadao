import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NotificationsRoutingModule } from './notifications-routing.module'
import { NotificationsComponent } from './pages/notifications.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { CreateNotificationComponent } from './pages/create-notification/create-notification.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    NotificationsComponent,
    CreateNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    BoxComponent,
    MatFormFieldComponent,
    ReactiveFormsModule
  ]
})
export class NotificationsModule { }

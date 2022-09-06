import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatExpansionModule } from '@angular/material/expansion'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatPaginatorModule } from '@angular/material/paginator'

import { BoxComponent } from '@shared/components/box/box.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { NotificationsComponent } from './pages/notifications.component'
import { NotificationsTableComponent } from './components/notifications-table/notifications-table.component'
import { ModalNotificationsComponent } from './components/modal-notifications/modal-notifications.component'
import { FilterNotificationComponent } from './components/filter-notification/filter-notification.component'
import { NotificationsRoutingModule } from './notifications-routing.module'
import { PaginationComponent } from '@shared/components/pagination/pagination.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { NotificationsService } from './services/notifications.service'
import { SnackBarService } from '@shared/services/snackbar.service'
import { CriticidadePipe } from './pipes/criticidade.pipe'
import { ModalDeleteNotificationComponent } from './components/modal-delete-notification/modal-delete-notification.component'
import { SortTableComponent } from '@shared/components/sort-table/sort-table.component'


@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationsTableComponent,
    ModalNotificationsComponent,
    FilterNotificationComponent,
    CriticidadePipe,
    ModalDeleteNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    BoxComponent,
    MatFormFieldComponent,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    SubmitButtonComponent,
    MatTableModule,
    PaginationComponent,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    SortTableComponent
  ],
  providers: [NotificationsService, SnackBarService]
})
export class NotificationsModule { }

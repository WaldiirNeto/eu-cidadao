import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './pages/settings.component'
import { SnackBarService } from '@shared/services/snackbar.service'
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatSnackBarModule
  ],
  providers: [SnackBarService]
})
export class SettingsModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './pages/settings.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { GerenciarAssuntosComponent } from './pages/gerenciar-assuntos/gerenciar-assuntos.component'
import { BoxComponent } from '@shared/components/box/box.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    GerenciarAssuntosComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    BoxComponent,
    ReactiveFormsModule,
    MatFormFieldComponent,
    SubmitButtonComponent,
    MatIconModule
  ]
})
export class SettingsModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './pages/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GerenciarAssuntosComponent } from './pages/gerenciar-assuntos/gerenciar-assuntos.component'


@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    GerenciarAssuntosComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

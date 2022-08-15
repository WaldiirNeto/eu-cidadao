import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './pages/login.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { EsqueciMinhaSenhaComponent } from './components/esqueci-minha-senha/esqueci-minha-senha.component'
import { LoginService } from './services/login.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { SnackBarService } from '@shared/services/snackbar.service'
@NgModule({
  declarations: [LoginComponent, EsqueciMinhaSenhaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubmitButtonComponent,
    MatFormFieldComponent,
    LoginRoutingModule,
    MatSnackBarModule
  ],
  providers: [LoginService, SnackBarService],
})
export class LoginModule { }

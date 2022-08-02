import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EsqueciMinhaSenhaComponent } from './components/esqueci-minha-senha/esqueci-minha-senha.component';
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component';
@NgModule({
  declarations: [LoginComponent, EsqueciMinhaSenhaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubmitButtonComponent,
    MatFormFieldComponent,
    LoginRoutingModule
  ],
})
export class LoginModule {}

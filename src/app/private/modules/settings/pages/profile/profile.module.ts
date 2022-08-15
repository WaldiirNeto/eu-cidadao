import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { BoxComponent } from '@shared/components/box/box.component'
import { MatFormFieldComponent } from '@shared/components/input-form/mat-form-field.component'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { ProfileRoutingModule } from './profile-routing.module'

import { ProfileComponent } from './pages/profile.component'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        BoxComponent,
        ReactiveFormsModule,
        MatFormFieldComponent,
        SubmitButtonComponent,
        MatIconModule],
    exports: [],
    declarations: [ProfileComponent],
    providers: [],
})
export class ProfileModule { }

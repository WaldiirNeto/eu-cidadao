import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {
  ControlContainer,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'

@Component({
  selector: 'app-input-form',
  templateUrl: 'mat-form-field.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  styleUrls: ['mat-form-field.component.scss'],
})
export class MatFormFieldComponent implements OnInit {
  @Input() type: string
  @Input() placeholder: string
  @Input() label: string
  @Input() icon: string
  @Input() controlName: string
  @Input() textError: string

  protected form: FormGroup

  constructor(private _controlContainer: ControlContainer, private _dateAdapter: DateAdapter<Date>) {
    _dateAdapter.setLocale('pt-BR')
  }

  ngOnInit() {
    this.form = this._controlContainer.control as FormGroup
  }
}

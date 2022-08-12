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
import { DateAdapter, MatNativeDateModule } from '@angular/material/core'
import { SharedModule } from '../../module/shared.module'
import { MatSelectModule } from '@angular/material/select'

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
    MatNativeDateModule,
    SharedModule,
    MatSelectModule
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
  @Input() mask: string
  @Input() textError: string
  @Input() listSelect: Array<{ id: any, value: any }>

  protected form: FormGroup

  constructor(private _controlContainer: ControlContainer, private _dateAdapter: DateAdapter<Date>) {
    _dateAdapter.setLocale('pt-BR')
  }

  ngOnInit() {
    console.log(this.type)
    this.form = this._controlContainer.control as FormGroup
  }
}

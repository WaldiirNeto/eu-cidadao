import { Component, OnInit } from '@angular/core'
import { FormEmployeesModel } from '../../models/form-employees.model'

@Component({
  selector: 'app-modal-create-employees',
  templateUrl: './modal-create-employees.component.html',
  styleUrls: ['./modal-create-employees.component.scss']
})
export class ModalCreateEmployeesComponent extends FormEmployeesModel implements OnInit {

  protected loading: boolean
  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}

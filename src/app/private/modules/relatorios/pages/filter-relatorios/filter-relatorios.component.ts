import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormRelatoriosModel } from '../../models/form-relatorios.model'

@Component({
  selector: 'app-filter-relatorios',
  templateUrl: './filter-relatorios.component.html',
  styleUrls: ['./filter-relatorios.component.scss']
})
export class FilterRelatoriosComponent extends FormRelatoriosModel implements OnInit {
  protected loading: boolean

  constructor(private _router: Router) {
    super()
  }

  ngOnInit(): void {
  }

  public navigateToManager(): void {
    this._router.navigate(['relatorios/manager'])
  }

}

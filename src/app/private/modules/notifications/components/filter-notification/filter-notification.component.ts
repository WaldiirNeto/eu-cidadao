import { Component, OnInit } from '@angular/core'
import { ListCategoriaModel } from '@shared/models/categoria.model'
import { ListCityModel } from '@shared/models/cidade.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { CityService } from '@shared/services/city.service'
import { forkJoin, Observable } from 'rxjs'
import { NotificationFormFilterModel } from '../../models/notification-form-filter.model'

@Component({
  selector: 'app-filter-notification',
  templateUrl: './filter-notification.component.html',
  styleUrls: ['./filter-notification.component.scss']
})
export class FilterNotificationComponent extends NotificationFormFilterModel implements OnInit {

  protected listSelects$: Observable<[ListCityModel, ListCategoriaModel]>
  constructor(private readonly _cityService: CityService, private readonly _categoryService: CategoriasService) {
    super()
  }

  ngOnInit(): void {
    this.listSelects$ = forkJoin([this._cityService.getCitys(), this._categoryService.ListCategorias()])
  }

  resetForm(): void {
    this.form.reset()
  }
}

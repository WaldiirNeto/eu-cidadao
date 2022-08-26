import { Component, OnInit } from '@angular/core'
import { ListCategoriaModel } from '@shared/models/categoria.model'
import { ListCityModel } from '@shared/models/cidade.model'
import { CategoriasService } from '@shared/services/categorias.service'
import { CityService } from '@shared/services/city.service'
import { NotifyComponentsService } from '@shared/services/notify-components.service'
import { forkJoin, Observable } from 'rxjs'
import { NotificationEnum } from 'src/app/shared/enums/notification.enum'
import { NotificationFormFilterModel } from '../../models/notification-form-filter.model'

@Component({
  selector: 'app-filter-notification',
  templateUrl: './filter-notification.component.html',
  styleUrls: ['./filter-notification.component.scss']
})
export class FilterNotificationComponent extends NotificationFormFilterModel implements OnInit {

  protected listSelects$: Observable<[ListCityModel, ListCategoriaModel]>
  constructor(
    private readonly _cityService: CityService,
    private readonly _categoryService: CategoriasService,
    private readonly _notifyComponentService: NotifyComponentsService
  ) {
    super()
  }

  ngOnInit(): void {
    this.listSelects$ = forkJoin([this._cityService.getCitys(), this._categoryService.ListCategorias()])
  }

  public submitFilter(): void {
    this._notifyComponentService.setNotification(NotificationEnum.formFilterNotificacao, this.form.value)
  }

  public resetForm(): void {
    this.form.reset()
    this._notifyComponentService.setNotification(NotificationEnum.formFilterClearNotificacao)

  }
}
